export default {
  functional: true,
  render(h, { props, parent, data }) {
    data.myRouterView = true
    let matched = parent.$myRoute.matched
    let depth = 0

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.myRouterView) {
        depth++
      }
      parent = parent.$parent
    }
    let record = matched[depth]
    if (!record) {
      return h()
    }
    else {
      let component = record.component
      return h(component, data)
    }
  }
}
