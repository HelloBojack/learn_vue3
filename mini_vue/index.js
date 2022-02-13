
// h('h1', {}, 'Some title')
// function h(tag, options, inner) {
//   if (typeof tag === 'string') {
//     let el = document.createElement(tag);

//     if (typeof options === 'string' || Array.isArray(options)) {
//       inner = options
//     } else if (Object.keys(options).length !== 0) {
//       console.log('options', options);
//       console.log(el.style);
//       for (let key in options) {
//         if (key.match(/[A-Z]/)) {
//           let newkey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
//           el.style[newkey] = options[key];
//         } else {
//           el.style[key] = options[key];
//         }
//       }
//     }

//     if (typeof inner === 'string') {
//       el.innerHTML = inner;
//     } else if (Array.isArray(inner)) {
//       inner.forEach(i => {
//         if (typeof i == 'string') {
//           el.innerHTML = i;
//         } else {
//           el.appendChild(i)
//         }
//       });
//     }
//     document.body.appendChild(el);
//     return el
//   }
// }

function h(tag, attrs, inner) {
  // inner 字符串或者数组
  if (typeof inner === 'string') {
    return vnode(tag, attrs, undefined, inner, undefined)
  }
  if (Array.isArray(inner)) {
    return vnode(tag, attrs, inner, undefined, undefined)
  }
}

function vnode(tag, attrs, children, text, element) {
  return {
    tag,
    attrs,
    children,
    text,
    element,
    key: attrs.key
  }
}

function patch(n1, n2) {
  let vn1 = n1.tag ? n1 : vnode(
    n1.tagName.toLowerCase(),
    {},
    undefined,
    undefined,
    n1
  )
  let vn2 = n2
  if (vn1.tag === vn2.tag) {
    patchVnode(vn1, vn2)
  } else {
    let newElement = createElement(vn2)
    n1.parentNode.replaceChild(newElement, n1)
  }
}

function createElement(vnode) {
  let { tag, attrs, children, text } = vnode
  let el = document.createElement(tag)
  if (Array.isArray(children)) {
    children.forEach(child => {
      el.appendChild(createElement(child))
    })
  } else {
    el.innerText = text
  }
  el.element = vnode
  return el
}

function patchVnode(vn1, vn2) {
  if (vn2.children) {
    if (vn1.children) {
      // 前前 后后 前后 后前 查找
      // console.log(vn1.children, vn2.children);
      updateChildren(vn1, vn1.children, vn2.children)
    }
    else {
      let newElement = createElement(vn2)
      vn1.element.parentNode.replaceChild(newElement, vn1.element)
    }
  } else {
    // v2 没有子节点
    if (vn1.text !== vn2.text) {
      vn1.element.innerText = vn2.text
    }
  }
}
function sameVnode(n1, n2) {
  return n1.key === n2.key
}
function updateChildren(el, c1, c2) {
  let oldStartIndex = 0
  let oldEndIndex = c1.length - 1
  let newStartIndex = 0
  let newEndIndex = c2.length - 1

  let oldStartVnode = c1[0]
  let oldEndVnode = c1[oldEndIndex]
  let newStartVnode = c2[0]
  let newEndVnode = c2[newEndIndex]
  // 前前 后后 前后 后前 查找
  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
    if (sameVnode(oldStartVnode, newStartVnode)) {
      console.log('1');
      patchVnode(oldStartVnode, newStartVnode)
      if (newStartVnode.element) newStartVnode.element = oldStartVnode.element
      oldStartVnode = c1[++oldStartIndex]
      newStartVnode = c2[++newStartIndex]
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      console.log('2');
      patchVnode(oldEndVnode, newEndVnode)
      if (newEndVnode.element) newEndVnode.element = oldEndVnode.element
      oldEndVnode = c1[--oldEndIndex]
      newEndVnode = c2[--newEndIndex]
    }
    else if (sameVnode(oldStartVnode, newEndVnode)) {
      console.log('3');
      patchVnode(oldStartVnode, newEndVnode)
      if (newEndVnode.element) newEndVnode.element = oldStartVnode.element
      // 旧前移动到旧后
      console.log(oldEndVnode);
      el.insertBefore(oldStartVnode.element, oldEndVnode.element.nextSibling)
      oldStartVnode = c1[++oldStartIndex]
      newEndVnode = c2[--newEndIndex]
    }
    else if (sameVnode(oldEndVnode, newStartVnode)) {
      console.log('4');
      patchVnode(oldEndVnode, newStartVnode)
      if (newStartVnode.element) newStartVnode.element = oldEndVnode.element
      el.insertBefore(oldEndVnode.element, oldStartVnode.element)
      oldEndVnode = c1[--oldEndIndex]
      newStartVnode = c2[++newStartIndex]
    }
    else {

    }
  }
}