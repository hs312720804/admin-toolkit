export default function install (component) {
  component.install = function (Vue) {
    Vue.component(component.name, component)
  }
  return component
}
