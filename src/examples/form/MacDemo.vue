<template>
  <div>
    <c-form label-width="120px" :model="form"  :readonly="isReadonly">
      <Mac label="MAC" v-model="form.mac" prop="mac"/>
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      form: {
        mac: ''
      },
      rules: {
        // 表单规则
        noEmpty: [
          { required: true, message: '不能为空', trigger: ['blur', 'change'] } ]
      }
    }
  }
}
</script>
