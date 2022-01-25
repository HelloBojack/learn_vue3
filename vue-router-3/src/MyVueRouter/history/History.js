import { START } from '../utils/route'
export default class History {
  constructor(router, base) {
    this.router = router
    this.base = base
    this.current = START
  }
  transitionTo(location, onComplete, onAbort) {
    // 在路由映射表中找到路径，match
    const route = this.router.match(location, this.current)
    /*
    嵌套路由时，需要先渲染父组件，再渲染子组件
    例如：/about/a => /about => /about/a
    const route = {
      path: ’/about/a‘,
      matched: ['/about','/about/a']
    }
    */
    // console.log('route', route);
    if (this.current.path === location && route.matched.length === this.current.matched.length) {
      // 相同路径
      return
    }
    else {
      this.updateRoute(route)
    }
    onComplete && onComplete(route)
  }
  updateRoute(route) {
    this.current = route
    this.cb && this.cb(route)
  }
  listen(cb) {
    this.cb = cb
  }
};