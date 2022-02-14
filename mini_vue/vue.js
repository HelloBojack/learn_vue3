class Vue {
  constructor(options) {
    let { el, data, beforeCreate, created, beforeMount, mounted } = options;
    beforeCreate && beforeCreate.call(this)
    this.$data = data
    created && created.call(this)
    this.$el = document.querySelector(el);
    beforeMount && beforeMount.call(this)
    mounted && mounted.call(this)
    this.complie(this.$el)
  }

  complie(el) {
    el.childNodes.forEach(node => {
      // node
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
