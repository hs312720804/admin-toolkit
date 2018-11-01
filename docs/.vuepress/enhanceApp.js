import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import '../../src/register'

export default ({
  Vue,
  options,
  router,
  sideData
}) => {
  Vue.use(ElementUI)
  Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };
}