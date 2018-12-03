import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import './register'
import "@/assets/icon/iconfont.css"
import router from "@/router/index.js"
import AppState from '@william17/vue-app-state'
Vue.use(ElementUI);
Vue.use(AppState)
Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
