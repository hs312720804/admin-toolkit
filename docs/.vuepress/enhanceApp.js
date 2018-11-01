import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import * as components from '../../src/lib/index'


export default ({
  Vue,
  options,
  router,
  sideData
}) => {
  Vue.use(ElementUI)
  Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };
  // register
  Object.keys(components).forEach((name) => {
    Vue.component(name, components[name])
  })
}