class Vue {
  constructor(options) {
    let { el, data } = options;
    this.$el = document.querySelector(el);
    this.$data = data

    this.complie(this.$el)
  }

  complie(el) {
    console.log(el.childNodes);
    el.childNodes.forEach(node => {
      if (node.nodeType === 1) {
        this.complie(node)
      }
      // 文本
      if (node.nodeType === 3) {
        let reg = /\{\{(.*)\}\}/
        let text = node.textContent
        node.textContent = text.replace(reg, (match, vmkey) => {
          vmkey = vmkey.trim()
          return this.$data[vmkey]
        })
      }
    })
  }
}
