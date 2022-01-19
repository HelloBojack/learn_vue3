let _Vue
export default function install(Vue) {
  if (install.installed && _Vue === Vue) return
  install.installed = true

  _Vue = Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.myRouter) {
        this._myRouterRoot = this
        this._myRouter = this.$options.myRouter
        this._myRouter.init(this)
      }
    },
    destroyed() {
    }
  })
}