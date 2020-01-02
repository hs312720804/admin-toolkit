import Vue from 'vue'
import Router from 'vue-router'
import main from '@/lib/components/index.vue'
import * as demos from '@/examples'
Vue.use(Router)
const routes = [{
  path: '/',
  name: 'dashboard',
  component: main,
  redirect: '/actionList',
  meta: {
    title: '面板',
    icon: 'iconfont el-icon-cc-file-add',
    route: 'dashboard'
  },
  children: [{
    path: 'actionList',
    name: 'actionList',
    component: demos.ActionListDemo,
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
    path: 'AppParams',
    name: 'AppParams',
    component: demos.AppParamsDemo,
    meta: {
      title: 'AppParams',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'AppParams'
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
    component: demos.ContentEllipsisDemo,
    meta: {
      title: '省略号',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'ellipsis'
    }
  },
  {
    path: 'theIcon',
    name: 'theIcon',
    component: demos.TheIconDemoIndex,
    meta: {
      title: '图标',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'theIcon'
    }
  },
  {
    path: 'contentCard',
    name: 'contentCard',
    component: demos.ContentCardDemo,
    meta: {
      title: '标题返回',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'contentCard'
    }
  },
  {
    path: 'FixHeaderAndFooter',
    name: 'FixHeaderAndFooter',
    component: demos.FixHeaderAndFooterDemo,
    meta: {
      title: '头尾固定',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'FixHeaderAndFooter'
    }
  },
  {
    path: 'AddMultiObj',
    name: 'AddMultiObj',
    component: demos.AddMultiObjDemo,
    meta: {
      title: '添加多个对象',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'AddMultiObj'
    }
  },
  {
    path: 'typeList',
    name: 'typeList',
    component: demos.TypeListDemo,
    meta: {
      title: '分类列表',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'typeList'
    }
  },
  {
    path: 'FormFatherAndSonLink',
    name: 'FormFatherAndSonLink',
    component: demos.FormFatherAndSonLinkDemo,
    meta: {
      title: '表单父子关联',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'FormFatherAndSonLink'
    }
  },
  {
    path: 'probability',
    name: 'probability',
    component: demos.probabilityDemo,
    meta: {
      title: '概率输入',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'probability'
    }
  },
  {
    path: 'VideoTags',
    name: 'VideoTags',
    component: demos.VideoTagsDemo,
    meta: {
      title: '标签列表',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'VideoTags'
    }
  }
  ]
},
{
  path: '/file',
  name: 'file',
  component: main,
  redirect: '/file/downloadFile',
  meta: {
    title: '文件',
    icon: 'iconfont el-icon-cc-file-add',
    route: 'dashboard'
  },
  children: [{
    path: 'downloadFile',
    name: 'downloadFile',
    component: demos.DownloadFileDemo,
    meta: {
      title: '文件下载',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'downloadFile'
    }
  },
  {
    path: 'uploadFile',
    name: 'uploadFile',
    component: demos.UploadDemo,
    meta: {
      title: '文件上传',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'uploadFile'
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
  children: [{
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
  children: [{
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
  },
  {
    path: 'DataForm',
    name: 'DataForm',
    component: demos.DataFormDemo,
    meta: {
      title: '表单',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'DataForm'
    }
  },
  {
    path: 'BooleanDemo',
    name: 'BooleanDemo',
    component: demos.BooleanDemo,
    meta: {
      title: '表单布尔值',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'BooleanDemo'
    }
  },
  {
    path: 'NumberDemo',
    name: 'NumberDemo',
    component: demos.NumberDemo,
    meta: {
      title: '表单数字',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'NumberDemo'
    }
  },
  {
    path: 'StringDemo',
    name: 'StringDemo',
    component: demos.StringDemo,
    meta: {
      title: '表单字符串',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'StringDemo'
    }
  },
  {
    path: 'EnumDemo',
    name: 'EnumDemo',
    component: demos.EnumDemo,
    meta: {
      title: '表单枚举',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'EnumDemo'
    }
  },
  {
    path: 'EnumListDemo',
    name: 'EnumListDemo',
    component: demos.EnumListDemo,
    meta: {
      title: '表单枚举列表',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'EnumListDemo'
    }
  },
  {
    path: 'AnyDemo',
    name: 'AnyDemo',
    component: demos.AnyDemo,
    meta: {
      title: '表单任何类型',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'AnyDemo'
    }
  }
  ]
}
]
const router = new Router({
  routes
})
export default router
