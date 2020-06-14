# 开始  

## 介绍  
一个基于 vuejs, element-ui 的管理后台组件库, 用于快速搭建管理后台  

## 安装  
```bash
npm install --save git+ssh://git@gitlab.skysri.com:FrontEnd/admin-toolkit.git
```

另外, 需要安装下面这些同级依赖  
[vue](https://github.com/vuejs/vue) [element-ui](https://github.com/ElemeFE/element) [gateschema](https://github.com/gateschema/gateschema-js) [gateschema-form-vue](https://github.com/gateschema/gateschema-form-vue)  [@stateform/element](https://github.com/stateform/stateform-element)

```bash  
npm install --save vue element-ui gateschema gateschema-form-vue @stateform/element
```

## 使用  
直接引入要使用的组件, 例如  
```js
import { TagNav } from 'admin-toolkit'  
```
### 运行
```
npx vuepress dev docs 开发
npx vuepress build docs 正式环境
```
<Comment />