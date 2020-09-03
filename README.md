Admin Toolkit  
基于 [vuejs](https://vuejs.org/) 和 [element-ui](http://element-cn.eleme.io/#/zh-CN) 的管理后台组件和工具库  

## 安装    
私有仓库安装：[前端模块私有仓库说明](http://wiki.skyoss.com/pages/viewpage.action?pageId=35726422)
```
npm install admin-toolkit@版本号 --registry=http://172.20.155.102:4873
```

从gitLab安装：
```
安装最新版本
npm install git+ssh://git@gitlab.skysri.com:flower/admin-toolkit.git
```
## 使用
完整引入:
```
import AdminToolkit from 'admin-toolkit'
Vue.use(AdminToolkit)
```
单个引入:
借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
首先，安装 babel-plugin-component：
npm install babel-plugin-component -D
然后，将 .babelrc 或者babel.config.js 修改为：
module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'admin-toolkit',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}

```
import { CCard, CForm, CFormString, CFormNumber, CMenu, CTagNav, CContentWrapper, CTable } from 'admin-toolkit'
Vue.use(CCard)
Vue.use(CForm)
Vue.use(CFormString)
Vue.use(CFormNumber)
Vue.use(CMenu)
Vue.use(CTagNav)
Vue.use(CContentWrapper)
Vue.use(CTable)
```
## 工具函数  
```
import { utils } from 'admin-toolkit'
或
this.$c_utils this 为Vue 对象

```

`component`  
组件相关的工具函数

```
const componentUtil = utils.component
```

`wrapService`  
用于包装服务, 统一处理服务调用错误  


## 组件文档
请查看 [组件文档](http://172.20.155.102/admin-toolkit/)  

## 开发  
开发新的组件需要先添加 issue, 然后讨论和定义接口, 然后再开始开发  

## 组件源代码

 请查看 [源代码](http://gitlab.skysri.com/flower/admin-toolkit) 

## 源代码运行
运行代码：
npm install
npm run serve 开发环境
npm run build 生产环境
运用文档： 
npm run docs:dev  开发环境
npm run docs:build  生产环境

