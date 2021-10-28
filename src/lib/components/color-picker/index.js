import CColorPicker from './src/colorPicker'

/* istanbul ignore next */
CColorPicker.install = function (Vue) {
  Vue.component(CColorPicker.name, CColorPicker)
};

export default CColorPicker
