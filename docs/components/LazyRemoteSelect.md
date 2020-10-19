# 支持远程搜索的分页加载
`c-lazy-remote-select`
支持远程搜索的分页加载

## 示例
### 效果

<Demo>
  <LazyRemoteSelect/>
</Demo>

### 代码
```vue
<template>
<c-lazy-remote-select  
      v-model="id"
      :filter="filter"
      :primaryKey="primaryKey"
      :optionsMap="optionsMap"
      :serviceName="serviceName"
      ></c-lazy-remote-select>
</template>
<script>
export default {
  data () {
    return {
      id: '',
      filter: {
        name: ''
      }, // 查询条件
      optionsMap: {
        key: 'id',
        label: 'name'
      }, // 接口返回格式化options
      primaryKey: 'id', // select的唯一标示
      serviceName: 'getList', // 接口请求名称
    }
  }
}
</script>


```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| id | String | 绑定值 |见上面例子 |
| filter | Object | 查询条件 | 见上面例子 |
| primaryKey | String | 唯一值 |见上面例子 |
| optionsMap | Obecjt | options格式化 |见上面例子 |
| serviceName | String | 接口名称 |见上面例子 |
<Comment />