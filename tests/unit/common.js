import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import ElementUI from 'element-ui'
const localVue = createLocalVue()
localVue.use(ElementUI)
export {
  shallowMount,
  localVue,
  mount
}
