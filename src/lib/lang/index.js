import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'
import elementEnLocal from 'element-ui/lib/locale/lang/en'
import elementZhLocal from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale' // 引入element ui 语言包
Vue.use(VueI18n)
const messages = {
  en: {
    ...enLocale,
    ...elementEnLocal
  },
  zh: {
    ...zhLocale,
    ...elementZhLocal
  }
}
const i18n = new VueI18n({
  locale: 'zh',
  messages
})
locale.i18n((key, value) => i18n.t(key, value))
export default {
  messages,
  i18n
}
