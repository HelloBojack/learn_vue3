
let Vue

export class MyStore {
  constructor(options) {
    let { state, mutations, actions } = options

    this.mutations = mutations
    this.actions = actions

    this._vm = new Vue({
      data: { state }
    })

    // 重写 dispatch 和 commit , 改变 this 指向
    const store = this
    const { dispatch, commit } = this
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store, type, payload)
    }
    this.commit = function boundCommit(type, payload) {
      return commit.call(store, type, payload)
    }
  }

  get state() {
    return this._vm.state
  }

  commit(type, payload) {
    this.mutations[type](this.state, payload)
  }

  dispatch(type, payload) {
    this.actions[type](this, payload)
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