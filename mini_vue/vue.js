class Vue {
  constructor(options) {
    let { el, data, beforeCreate, created, beforeMount, mounted } = options;
    this.$options = options;
    this.proxyData()
    beforeCreate && beforeCreate.call(this)
    this.$data = data
    created && created.call(this)
    this.$el = document.querySelector(el);
    beforeMount && beforeMount.call(this)
    mounted && mounted.call(this)
    this.complie(this.$el)
  }
  proxyData() {
    for (const key in this.$data) {
      Object.defineProperty(this, key, {
        get() {
          return this.$data[key]
        },
        set(newValue) {
          this.$data[key] = newValue
        }
      })
    }
  }
  complie(el) {
    el.childNodes.forEach(node => {
      // node
      if (node.nodeType === 1) {
        console.dir(node);
        if (node.attributes.length > 0) {
          let attr = node.attributes[0];
          if (attr.name === '@click') {
            let name = attr.value;
            node.addEventListener('click', e => {
              this.$options.methods[name].call(this, e)
            })
          }
        }
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
