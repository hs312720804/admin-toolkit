# 导出PDF
`c-export-pdf`
快速导出pdf

### 效果
<Demo>
  <ExportPdfDemo />
</Demo>

### 代码
```vue
<template>
  <div>
    <h1 class="text-center">pdf导出例子</h1>
    <div class="pageData">
      <h4>第一页的标题</h4>
      pdf页面内容1
    </div>
    <div class="pageData">
      <h4>第二页的标题</h4>
      pdf页面内容2
    </div>
    <c-export-pdf title="导出例子" class-name="pageData" title-class-name="text-center"></c-export-pdf>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
.text-center
  text-align: center
  height: 100px
  line-height: 100px
.pageData
  border 1px solid #ccc
  margin: 20px
  padding: 10px
</style>
```

## 属性
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| title | String | 导出成pdf文件的名字|
| className | String | 导出成每页的class名称，以这个作为分页标准，默认值pageData|
| titleClassName | String | 标题的class名称|
| marginLeft | Number | 每页离两边的距离，默认为5|

## 插槽
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| slot |  | 默认插槽，和导出按钮在同一行|
