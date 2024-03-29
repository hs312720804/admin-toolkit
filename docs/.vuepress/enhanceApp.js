import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '../../src/register'

import VssueGitlabAPIFactory from 'vssue-api-gitlab-v3'
import Vssue from 'vssue'
import 'vssue/dist/vssue.css'

const VssueGitlabAPI = VssueGitlabAPIFactory({
  corsAnywhere: 'http://172.20.155.102:7000'
})
export default ({ Vue, options, router, sideData }) => {
  if (typeof process === 'undefined') {
    // Vue.use(ElementUI)
    Vue.use(Vssue, {
      api: VssueGitlabAPI,
      // 在这里设置你使用的平台的 OAuth App 配置
      owner: 'FrontEnd',
      repo: 'admin-toolkit',
      clientId:
        'c49c9c180d7689f460fffcc306d4aec140145bad1853887347143c02d656c4d6',
      clientSecret:
        '1728d05d7ede313e7741a145f6d4c3903b17863691557989e8a8aa62ae354da6',
      baseURL: 'http://gitlab.skysri.com'
    })
    Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
    Vue.mixin({
      mounted () {
        import('../../src/register')
      }
    })
  }

  // Vue.mixin({
  //   mounted () {
  //     import('../../src/register')
  //   }
  // })

  // Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };
}
