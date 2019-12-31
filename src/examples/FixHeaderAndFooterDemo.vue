<template>
  <FixHeaderAndFooter @go-back="$emit('go-back')">
   <div slot="actions">
     <el-button type="text"  size="mini" icon="el-icon-back" @click="$emit('go-back')">返回</el-button>
   </div>
   <div slot="title">
       标题
   </div>
    <div>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
    </div>
    <div class="sub-foot" slot="footer">
        <el-button
          type="success"
          @click="saveForm('draft')"
        >保存草稿</el-button>
        <el-button
          type="primary"
          @click="saveForm()"
        >提交审核
        </el-button>
    </div>
  </FixHeaderAndFooter>
</template>
<script>
import FixHeaderAndFooter from '../lib/components/FixHeaderAndFooter'
export default {
  components: {
    FixHeaderAndFooter
  },
  data () {

  }
}
</script>
<style lang="stylus" scoped>

</style>
