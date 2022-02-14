class Vue {
  constructor(options) {
    let { el, data, beforeCreate, created, beforeMount, mounted } = options;

    this.$options = options;
    this.$watchEvent = {}

    beforeCreate && beforeCreate.call(this)
    this.$data = data
    this.proxyData()

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
          if (this.$watchEvent[key]) {
            this.$watchEvent[key].map(watcher => watcher.update())
          }
        }
      })
    }
  }
  complie(el) {
    el.childNodes.forEach(node => {
      // node
      if (node.nodeType === 1) {
        if (node.attributes.length > 0) {
          let { name, value } = node.attributes[0];
          if (name === '@click') {
            node.addEventListener('click', e => {
              this.$options.methods[value].call(this, e)
            })
          }
          if (name === 'v-modal') {
            node.value = this[value]
            node.addEventListener('input', e => {
              this[value] = e.target.value
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
          if (this.hasOwnProperty(vmkey)) {
            let watcher = new Watcher(this, vmkey, node)
            if (this.$watchEvent[vmkey]) {
              this.$watchEvent[vmkey].push(watcher)
            } else {
              this.$watchEvent[vmkey] = [watcher]
            }
          }
          return this.$data[vmkey]
        })
      }
    })
  }
}

class Watcher {
  constructor(vm, key, node) {
    this.vm = vm
    this.key = key
    this.node = node
  }
  update() {
    this.node.textContent = this.vm[this.key]
  }
}