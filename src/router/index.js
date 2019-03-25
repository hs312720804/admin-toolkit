import Vue from 'vue'
import Router from 'vue-router'
import main from '@/lib/components/index.vue'
import * as demos from '@/examples'
Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: main,
    redirect: '/actionList',
    meta: {
      title: '面板',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'dashboard'
    },
    children: [
      {
        path: 'actionList',
        name: 'actionList',
        component: demos.AppParamsReadDemo,
        meta: {
          title: '按钮组',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'actionList'
        }
      },

      {
        path: 'Breadcrumb',
        name: 'Breadcrumb',
        component: demos.BreadcrumbDemo,
        meta: {
          title: '面包屑',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'Breadcrumb'
        }
      },

      {
        path: 'menu',
        name: 'menu',
        component: demos.MenuDemo,
        meta: {
          title: '菜单',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'menu'
        }
      },

      {
        path: 'tagNav',
        name: 'tagNav',
        component: demos.TagNavDemo,
        meta: {
          title: 'tagNav',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'tagNav'
        }
      },

      {
        path: 'carouse',
        name: 'carouse',
        component: demos.CarouselDemo,
        meta: {
          title: '幻灯片',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'carouse'
        }
      },

      {
        path: 'ellipsis',
        name: 'ellipsis',
        component: demos.EllipsisDemo,
        meta: {
          title: '省略号',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'ellipsis'
        }
      }
    ]
  },
  {
    path: '/table',
    name: 'table',
    component: main,
    redirect: '/table/tableList',
    meta: {
      title: '表格',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'table'
    },
    children: [
      {
        path: 'tableList',
        name: 'tableList',
        component: demos.TableDemo,
        meta: {
          title: '表格',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'tableList'
        }
      },
      {
        path: 'ContentWrapper',
        name: 'ContentWrapper',
        component: demos.ContentWrapperDemo,
        meta: {
          title: '表格分页',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'ContentWrapper'
        }
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    component: main,
    redirect: '/form/formList',
    meta: {
      title: '表单',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'form'
    },
    children: [
      {
        path: 'formList',
        name: 'formList',
        component: demos.GateSchemaFormDemo,
        meta: {
          title: '表单验证',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'formList'
        }
      },
      {
        path: 'remoteSelectData',
        name: 'remoteSelectData',
        component: demos.RemoteSelectDemo,
        meta: {
          title: '远程数据',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'remoteSelectData'
        }
      }
    ]
  }
]
const router = new Router({
  routes
})
export default router
