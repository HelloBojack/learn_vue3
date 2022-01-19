import { START } from '../utils/route'
export default class History {
  constructor(router, base) {
    this.router = router
    this.base = base
    this.current = START
  }
  transitionTo(location, onComplete, onAbort) {
    const route = this.router.match(location, this.current)
  }
};