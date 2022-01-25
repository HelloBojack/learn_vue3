export default {
  functional: true,
  render(h, { props, parent, data, slots, scopedSlots, children }) {
    let router = parent.$myRouter
    let { to } = data.attrs

    const handler = e => {
      router.push(to)
    }
    const on = { click: handler }
    data.on = on

    return h('a', data, scopedSlots.default())
  }
}
