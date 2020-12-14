
import { shallowMount, localVue } from './common'
import InputThousands from '@/lib/components/input-thousands/src/InputThousands.vue'
describe('千分位组件测试', () => {
  it('测试input事件之后，输入框的值是否返回千分位格式的值', () => {
    const wrapper = shallowMount(InputThousands, {
      propsData: {
        disabled: true,
        value: 122345
      },
      localVue
    })
    wrapper.findComponent({ ref: 'input' }).vm.$emit('input', 33333)
    expect(wrapper.vm.$data.inputValue).toBe('33,333')
  })
  it('调用getPositiveInt方法时，返回去除逗号的字符串', () => {
    const wrapper = shallowMount(InputThousands, { localVue })
    const value = wrapper.vm.getPositiveInt('11,222,33')
    expect(value).toBe('1122233')
  })
})
