Admin Toolkit  
基于 [vuejs](https://vuejs.org/) 和 [element-ui](http://element-cn.eleme.io/#/zh-CN) 的管理后台组件和工具库  

## 安装    
```
npm install git@gitlab.skysri.com:liangweiliang/admin-toolkit.git
```
peer dependencies: [vue]() [element-ui]() [gateschema]() [gateschema-form-vue]()  [@stateform/element]()

## 使用    
### 组件列表      

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

## Todos  
* 组件  
  * 富文本编辑器   
  * 远程数据选择器      
  * 地址选择器    
* 添加测试代码    