let _Vue
export default function install(Vue) {
  if (install.installed && _Vue === Vue) return
  install.installed = true

  _Vue = Vue
  //  1. 注册全局属性 $route $route
  //  2. 注册全局指令
  //  3. 注册全局组件

  // 所有组件添加 _myRouterRoot
  Vue.mixin({
    beforeCreate() {
      // 如果有 router 属性，说明是根组件
      if (this.$options.myRouter) {
        this._myRouterRoot = this
        this._myRouter = this.$options.myRouter
        // 初始化路由
        this._myRouter.init(this)
      } else {
        this._myRouterRoot = this.$parent && this.$parent._myRouterRoot
      }
    },
    destroyed() {
    }
  })
}