import { shallowMount, createLocalVue } from '@vue/test-utils'
import CellEdit from '@/lib/components/cell-edit/src/CellEdit.vue'
import ElementUI from 'element-ui'
// import CellEditDemo from '@/examples/CellEditDemo.vue'
const localVue = createLocalVue()
localVue.use(ElementUI)
describe('cellEdit组件测试', () => {
  let msg = '人群名称1'
  it('组件传的值赋值给输入框', async () => {
    const wrapper = shallowMount(CellEdit, {
      propsData: {
        initValue: msg
      },
      localVue
    })
    expect(wrapper.vm.$data.value).toBe(msg)
  })
  it('点击编辑按钮，输入框出现', async () => {
    const wrapper = shallowMount(CellEdit, {
      propsData: {
        initValue: msg
      },
      localVue
    })
    await wrapper.find('.el-icon-edit').trigger('click')
    expect(wrapper.vm.$data.readonly).toBe(false)
  })
  // it.only('输入框失去焦点，输入框不存在并且返回输入的值', async () => {
  //   const wrapper = shallowMount(CellEditDemo, { localVue })
  //   const CellEditWrapper = wrapper.find('c-cell-edit').setProps({
  //     propsData: {
  //       initValue: msg
  //     },
  //     localVue
  //   })
  //   CellEditWrapper.vm.$emit('blur', '123')
  //   await CellEditWrapper.find('el-input').trigger('blur')
  //   expect(CellEditWrapper.vm.$data.readonly).toBe(true)
  // })
})
