import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './register'
import '@/assets/icon/iconfont.css'
import router from '@/router/index.js'
import AppState from '@william17/vue-app-state'

import $x from './js/$x'
// 设置主题颜色
import { initThemeColor, changeThemeColor } from './js/themeColorClient'

// import './css/defines.scss'
// 通用组件，便于处理
Vue.prototype.$x = Vue.$x = $x

Vue.use(ElementUI)
Vue.use(AppState)
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
Vue.config.productionTip = false

initThemeColor()
// changeThemeColor('#')// 传入颜色格式应该为十六进制颜色值，'red'类似颜色暂不支持

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
