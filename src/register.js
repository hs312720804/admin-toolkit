import Vue from 'vue'
import components from './lib/index'
import * as demos from './examples'
import moment from 'moment'
Vue.prototype.$moment = moment
Vue.use(components)
Object.keys(demos).forEach((name) => {
  Vue.component(name, demos[name])
})
