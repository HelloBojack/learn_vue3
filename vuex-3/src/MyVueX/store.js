
let Vue

export class MyStore {
  constructor(options) {
    let { state, mutations } = options
    this.mutations = mutations

    this._vm = new Vue({
      data: { state }
    })
  }

  get state() {
    return this._vm.state
  }

  commit(type, payload) {
    this.mutations[type](this.state, payload)
  }
}

export function install(_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options.myStore) {
        this.$myStore = this.$options.myStore
      } else {
        this.$myStore = this.$options.parent && this.$options.parent.$myStore
      }
    }
  })
}