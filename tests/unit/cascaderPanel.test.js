import { localVue, mount } from './common'
import cascaderPanel from '@/lib/components/cascader-panel/src/CascaderPanel.vue'
describe('cascaderPanel测试', () => {
  const options = [
    {
      value: 1,
      label: '策略1',
      children: [
        {
          value: 3,
          label: '人群1',
          children: [
            {
              value: 31,
              label: '人群111'
            },
            {
              value: 32,
              label: '人群122'
            }
          ]
        },
        {
          value: 4,
          label: '人群2'
        },
        {
          value: 5,
          label: '人群3'
        }
      ]
    },
    {
      value: 2,
      label: '策略2',
      children: [
        {
          value: 6,
          label: '人群4'
        },
        {
          value: 7,
          label: '人群5'
        },
        {
          value: 8,
          label: '人群6'
        }
      ]
    }
  ]
  it('单击输入框，级联选择器出现', () => {
    const wrapper = mount(cascaderPanel, {
      propsData: {
        props: { multiple: true, emitPath: false },
        options,
        'selected-value': [3, 2]
      },
      localVue
    })
    const component = wrapper.findComponent({ ref: 'search-input' })
    component.vm.focus()
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findComponent({ ref: 'panel' }).isVisible()).toBe(true)
    })
  })
  it('测试handleClose 函数是否正确', () => {
    const wrapper = mount(cascaderPanel, {
      propsData: {
        props: { multiple: true, emitPath: false },
        options,
        'selected-value': [3, 2]
      },
      localVue
    })
    wrapper.vm.handleClose({ value: 3 })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.getSelectedNodes()).toEqual([2])
    })
  })
  it('内置的级联框值改变时，选中项也改变', () => {
    const wrapper = mount(cascaderPanel, {
      propsData: {
        props: { multiple: true, emitPath: false },
        options,
        'selected-value': []
      },
      localVue
    })
    wrapper.vm.$data.inputValue = [6, 7, 8]
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.getSelectedNodes()).toEqual([2])
    })
  })
})
