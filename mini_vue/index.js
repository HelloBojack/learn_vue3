
// h('h1', {}, 'Some title')
function h(tag, options, inner) {
  if (typeof tag === 'string') {
    let el = document.createElement(tag);

    if (typeof options === 'string' || Array.isArray(options)) {
      inner = options
    } else if (Object.keys(options).length !== 0) {
      console.log('options', options);
      console.log(el.style);
      for (let key in options) {
        if (key.match(/[A-Z]/)) {
          let newkey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
          el.style[newkey] = options[key];
        } else {
          el.style[key] = options[key];
        }
      }
    }

    if (typeof inner === 'string') {
      el.innerHTML = inner;
    } else if (Array.isArray(inner)) {
      inner.forEach(i => {
        if (typeof i == 'string') {
          el.innerHTML = i;
        } else {
          el.appendChild(i)
        }
      });
    }
    document.body.appendChild(el);
    return el
  }
}