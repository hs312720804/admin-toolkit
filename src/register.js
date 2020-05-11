import Vue from 'vue'
import * as components from './lib/index'
import * as demos from './examples'
import moment from 'moment'
Vue.prototype.$moment = moment
// register components
Object.keys(components).forEach((name) => {
  Vue.component(name, components[name])
})
// register demo components
Object.keys(demos).forEach((name) => {
  Vue.component(name, demos[name])
})
