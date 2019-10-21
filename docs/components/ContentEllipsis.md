# 文本省略
`ContentEllipsis`   
## 示例  
### 效果  

<Demo>
  <ContentEllipsisDemo/>
</Demo>

### 代码  
```vue
<template>
       <ContentEllipsis :content='EllipsisContent' width="100" height="100" ></ContentEllipsis>
</template>
<script>
export default {
  data () {
    return {
      EllipsisContent: `Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. `
    }
  }
}
</script>

```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| content | String | 文本内容 |见上面例子 |
| width | Number | 宽度 |见上面例子 |
| height | Number | 高度 |见上面例子 |
<Comment />