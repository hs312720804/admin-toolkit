import CMenu from './src/Menu'

/* istanbul ignore next */
CMenu.install = function (Vue) {
  Vue.component(CMenu.name, CMenu)
}

export default CMenu
