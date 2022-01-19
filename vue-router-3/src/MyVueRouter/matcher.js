function createRouteMap(routes, oldPathList, oldPathMap) {
  let pathList = oldPathList || []
  let pathMap = oldPathMap || Object.create(null)

  routes.forEach(route => {
    addRouteRecord(pathList, pathMap, route)
  })
  return {
    pathList,
    pathMap
  }

  function addRouteRecord(pathList, pathMap, route, parent) {
    let { path, component } = route
    path = parent ? `${parent.path}/${path}` : path
    let record = { path, component }
    if (!pathMap[path]) {
      pathList.push(path)
      pathMap[path] = record
    }
    if (route.children) {
      route.children.forEach(child => {
        addRouteRecord(pathList, pathMap, child, record)
      })
    }
  }
}
export default function createMatcher(routes) {
  /* 
  路由扁平化
  每个路由路径对应一个组件
  路由映射表
  ’about/a' => about-a
  */
  // createRouteMap 生产一个纯路径数组，和一个路径组件映射Map
  const { pathList, pathMap } = createRouteMap(routes)
  // 匹配路由 
  function match() {
  }
  // 添加路由
  function addRoutes() {
    createRouteMap(routes, pathList, pathMap)
  }

  return {
    match,
    addRoutes
  }
};