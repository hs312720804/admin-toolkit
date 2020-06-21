Admin Toolkit  
基于 [vuejs](https://vuejs.org/) 和 [element-ui](http://element-cn.eleme.io/#/zh-CN) 的管理后台组件和工具库  

## 安装    
私有仓库安装：[前端模块私有仓库说明](http://wiki.skyoss.com/pages/viewpage.action?pageId=35726422)
```
npm install admin-toolkit --registry=http://172.20.155.102:4873
```

从gitLab安装：
```
npm install git+ssh://git@gitlab.skysri.com:liangweiliang/admin-toolkit.git
```
peer dependencies: [vue](https://github.com/vuejs/vue) [element-ui](https://github.com/ElemeFE/element) [gateschema](https://github.com/gateschema/gateschema-js) [gateschema-form-vue](https://github.com/gateschema/gateschema-form-vue)  [@stateform/element](https://github.com/stateform/stateform-element)

## 使用    
### 组件列表      

组件使用的时候，　直接`import`, 例如  
```
import { ActionList } from 'admin-tookit'
```

`ActionList`   

属性   

| name | type | description | example |  
| ---- | ---- | ---- | ---- |
| actions | object | | |

例子    
```html  
<ActionList 
  :actions="{
    handleCreate: 'Create', 
    handleBatchDelete: 'Batch Delete'
  }"
/>
```


`Breadcrumb`  

属性    

| name | type | description | example |  
| ---- | ---- | ---- | ---- |
| items | array | | |

例子    
```html  
<Breadcrumb 
  :items="[
    {
      name: 'Home', 
      to: {
        name: 'home'
      }
    }, 
    {
      name: 'Post List', 
      to: {
        name: 'post_list'
      }
    }
  ]"
/>
```
`TagNav`  

例子  
```html
<TagNav />
```

`GateSchemaForm`  

属性    

| name | type | description | example |  
| ---- | ---- | ---- | ---- |
| schema | object | GateSchema instance | |


`Menu`  

属性  

| name | type | description | example |  
| ---- | ---- | ---- | ---- |
| is-collapse | boolean | | false | 
| items | array | | |
| default-active | sting | | | 

例子    
```html  
<Menu  
  :is-collapse="false"
  :items="[
    {
      title: 'Dashboard',
      route: 'dashboard'
    },
    {
      title: 'Posts',
      children: [
        {
          title: 'Post List',
          route: 'post_list'
        },
        {
          title: 'Create Post',
          route: 'post_create'
        }
      ]
    }
  ]"
  :default-active="home"
/>
```

`Table`  

属性   

| name | type | description | example |  
| ---- | ---- | ---- | ---- |
| props | object | element-ui table props | |
| header | array | header definition | |
| data | array | | |

例子    
```html  
<template>
  <Table 
    :props="table.props"
    :data="table.data"
    :header="table.header"
  />
</template>
<script>
export default {
  data() {
    return {
      table: {
        props: {
          border: true,
        },
        header: [
          {
            type: "selection",
            width: "55"
          },
          {
            label: "ID",
            prop: "id",
            sortable: false
          },
          {
            label: "Name",
            prop: "name",
            sortable: true
          },
          {
            label: "Action",
            render: (h, {$index, row, column}) => {
              return h('Button', {
                props: {
                  type: 'primary'
                },
                on: {
                  click: () => {
                    this.handleEdit($index)
                  }
                }
              })
            } 
          }
       ]
    }
  }
}
</script>
```

### 工具函数  
```
import { utils } from 'admin-toolkit'
```

`component`  
组件相关的工具函数

```
const componentUtil = utils.component
```

`wrapService`  
用于包装服务, 统一处理服务调用错误  


## 更多组件  
请查看 [issues](http://gitlab.skysri.com/liangweiliang/admin-toolkit/issues)  

## 开发  
开发新的组件需要先添加 issue, 然后讨论和定义接口, 然后再开始开发  

```
// 安装依赖
npm install

// 安装同级依赖  
npm install vue element-ui gateschema gateschema-form-vue @stateform/element --save

```
// 本地运行docs 
npx vuepress dev docs

// 文档打包
npx vuepress build docs
