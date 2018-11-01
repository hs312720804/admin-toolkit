# 菜单    
`Menu`  

## 示例  

### 效果

<Demo>
  <MenuDemo />
</Demo>

### 代码  
```vue
<template>
  <Menu 
    :items="menu" 
  />
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          "title":"导航一",
          "icon":"el-icon-location",
          "route":"nav1"
        },
        {
          "title":"分组一",
          "icon":"el-icon-menu",
          "children":[
            {
              "title":"导航二",
              "route":"nav2"
            }
          ]
        }
      ]
    }
  }
}
</script>
```


## 属性  
目前只支持二级菜单  

| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| default-active | String | 默认激活的菜单对应的路由名 | |  
| items | Array | 菜单项列表 | |

菜单项属性  
| 名称 | 类型 | 描述  | 例子 |  
| ---- | ---- | ---- | ---- |  
| title | String | 菜单标题 | |  
| icon | String | 菜单图标 | | 
| route | String | 菜单对应的路由名 | |  
| children | Array | 子菜单项列表 | |

