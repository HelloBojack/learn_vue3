import History from './History'
export default class HashHistory extends History {
  constructor(router, base) {
    super(router, base)
    this.ensureSlash()
  }

  // 确保 hash url 有 #/
  ensureSlash() {
    if (!this.getHash()) {
      window.location.hash = '/'
    }
  }

  getCurrentLocation() {
    return this.getHash()
  }

  getHash() {
    return window.location.hash.slice(1)
  }

  setupListeners() {
    window.addEventListener('hashchange', () => {
      this.transitionTo(this.getHash())
    })
  }

  push() { }

  replace() { }

  go() { }
};