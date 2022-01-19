function createRoute(record, location) {
  const route = {
    path: location.path || '/',
  }
  return Object.freeze(route)
}

export const START = createRoute(null, {
  path: '/'
})