function formatMatch(record) {
  let res = []
  while (record) {
    res.unshift(record)
    record = record.parent
  }
  return res
}
export function createRoute(record, location) {
  const route = {
    path: location.path || '/',
    matched: record ? formatMatch(record) : []
  }

  return Object.freeze(route)
}

export const START = createRoute(null, {
  path: '/'
})