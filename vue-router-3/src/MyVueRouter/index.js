import install from './install'
import HTML5History from './history/HTML5History'
export default class VueRouter {
  1
  constructor(options) {
    this.app = null
    this.apps = []
    this.options = options;
    this.mode = options.mode || 'hash'
    switch (this.mode) {
      case 'hash':
        // hash mode 多个 fallback
        this.history = ''
        break;
      case 'history':
        this.history = new HTML5History(this, options.base)
        break;
    }
  }
  init(app) {
    this.apps.push(app)
    if (this.app) {
      return
    }
    this.app = app
    const history = this.history
    if (history instanceof HTML5History || history instanceof HashHistory) {

    }
  }
}
VueRouter.install = install