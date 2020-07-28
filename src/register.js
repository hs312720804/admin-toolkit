import Vue from 'vue'
import * as components from './lib/index'
import * as demos from './examples'
import moment from 'moment'

// import CTable from './lib/components/table/index'

Vue.prototype.$moment = moment
// register components
Object.keys(components).forEach((name) => {
  Vue.component(name, components[name])
})
// register demo components
Object.keys(demos).forEach((name) => {
  Vue.component(name, demos[name])
})
console.log(components)
// const componentsArr = [
//   CTable
// ]

// const install = function (Vue) {
//   componentsArr.forEach(component => {
//     Vue.component(component.name, component)
//   })
// }

// /* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

// const exportObj = {
//   CTable,
//   install
// }
Vue.use(components)
