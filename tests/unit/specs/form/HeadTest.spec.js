import { mount } from '@vue/test-utils'
import HeaderTest from '@/lib/test/HeadTest.vue'
describe('HeaderTest', () => {
  const wrapper = mount(HeaderTest)
  it('点击按钮', async () => {
    const button = wrapper.find('button')
    expect(button.text()).toBe('Increment')
    await button.trigger('click')
    expect(wrapper.find('.count').text()).toBe('1')
  })
})
