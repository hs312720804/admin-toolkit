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
      EllipsisContent: '方中大黄性味苦寒，泻火解毒，又能攻下通便，有釜底抽薪之意，故为主药；黄芩攻善清热燥湿.'
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