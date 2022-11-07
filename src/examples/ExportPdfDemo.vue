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
