
import { shallowMount, localVue, mount } from './common'
import CellEdit from '@/lib/components/cell-edit/src/CellEdit.vue'
describe('cellEdit组件测试', () => {
  let msg = '人群名称1'
  it('组件传的值赋值给输入框', () => {
    const wrapper = shallowMount(CellEdit, {
      propsData: {
        initValue: msg
      },
      localVue
    })
    expect(wrapper.vm.$data.value).toBe(msg)
  })
  it('点击编辑按钮，输入框出现', () => {
    const wrapper = shallowMount(CellEdit, {
      propsData: {
        initValue: msg
      },
      localVue
    })
    wrapper.find('.el-icon-edit').trigger('click')
    expect(wrapper.vm.$data.readonly).toBe(false)
  })
  it('calls handleBlur when component blur', () => {
    const wrapper = shallowMount(CellEdit, {
      propsData: {
        initValue: msg
      },
      localVue
    })
    const mockFn = jest.fn()
    // const mockFn = jest.spyOn(wrapper1.vm, 'handleBlur')
    wrapper.setMethods({ handleBlur: mockFn })
    wrapper.vm.$data.readonly = false
    wrapper.vm.$nextTick(() => {
      wrapper.findComponent({ ref: 'input' }).vm.$emit('blur')
      expect(mockFn).toHaveBeenCalled()
      expect(mockFn).toHaveBeenCalledTimes(1)
    })
  })
  it('triggers a $on event when a handleBlur method is called', () => {
    const wrapper = shallowMount(CellEdit, { localVue })
    const mockFn = jest.fn()
    wrapper.vm.$on('blur', mockFn)
    wrapper.vm.handleBlur()
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
    // wrapper.vm.handleBlur()  // is ok
  })
  it.only('删除一个标签时，选中项自动删除相应的选项', () => {
    const wrapper = mount(CellEdit, { localVue })
    window.console.log(wrapper.findComponent({ name: 'ElTag' }))
  })
})
