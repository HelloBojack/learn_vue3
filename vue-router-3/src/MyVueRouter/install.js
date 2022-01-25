import RouterView from './components/RouterView.js'
import RouterLink from './components/RouterLink.js'

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
        // 这就是 $router
        this._myRouter = this.$options.myRouter
        // 初始化路由
        this._myRouter.init(this)
        // 响应式 current
        // 这就是 $route
        Vue.util.defineReactive(this, '_myRoute', this._myRouter.history.current)
      } else {
        this._myRouterRoot = this.$parent && this.$parent._myRouterRoot
      }
    },
    destroyed() {
    }
  })

  Object.defineProperty(Vue.prototype, '$myRouter', {
    get() {
      return this._myRouterRoot._myRouter
    }
  })

  Object.defineProperty(Vue.prototype, '$myRoute', {
    get() {
      return this._myRouterRoot._myRoute
    }
  })

  Vue.component('RouterView', RouterView)
  Vue.component('RouterLink', RouterLink)

}