import History from './History'
export default class HashHistory extends History {
  constructor(router, base) {
    super(router, base)
  }
  getCurrentLocation() {
    return this.getHash()
  }
  getHash() {
    return window.location.hash.slice(1)
  }
};