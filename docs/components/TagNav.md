# 标签导航  
`TagNav`  
自动获取路由历史生成一个标签导航

## 示例  

### 效果
<Demo>
  <TagNavDemo />
</Demo>

### 代码  
```vue
<template>
  <TagNav />
</template>
```

## 属性  
需要跟 vue-router 配合使用, 每个 route 需要有一个唯一的 `name` 属性.  
另外, 可以在 route 对象里添加一个 meta 属性, meta 里可以包含下面属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |  
| title | String | 标签导航里该标签显示的内容 | |  
