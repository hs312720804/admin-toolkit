<template>
  <el-form :model="form" ref="form" label-width="140px">
    <c-app-params prop-prefix="appParams" v-model="form.appParams" />
    <el-form-item>
      <el-button @click="submitBtn">保存</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      form: {
        appParams: {
          packagename: undefined,
          versioncode: undefined,
          dowhat: undefined,
          bywhat: undefined,
          byvalue: undefined,
          params: [],
          exception: {}
        }
      }
    }
  },
  methods: {
    submitBtn () {
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('提交')
        }
      })
    }
  }
}
</script>