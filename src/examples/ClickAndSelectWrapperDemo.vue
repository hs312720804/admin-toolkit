<template>
  <div>
    <section>
    <h2>默认按钮</h2>
    <ClickAndSelectWrapper 
      title="选择数据2" 
      @select-start="handleSelectStart" 
      @select-cancel="handleSelectCancel">
      <div slot="content">
        通过content slot 插入数据列表
      </div>
    </ClickAndSelectWrapper>
    </section>
    <section>
      <h2>自定义点击元素</h2>
      <ClickAndSelectWrapper 
        title="选择海报" 
        @select-start="handleSelectStart" 
        @select-cancel="handleSelectCancel">
        <el-button type="primary">请选择</el-button>
        <div slot="title" style="color: red">
          自定义标题
        </div>
        <div slot="content" slot-scope="{isShow}">
          <template v-show="isShow">
            通过content slot 插入数据列表, 可以通过 isShow 来控制内容的渲染
          </template>
        </div>
      </ClickAndSelectWrapper>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelectStart() {
    },
    handleSelectCancel() {
    }
  }
}
</script>

<style>

</style>
