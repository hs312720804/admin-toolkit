<template>
  <div>
    <DataForm label-width="120px" :model="form"  :readonly="isReadonly">
      <EffectiveTime label="有效期" v-model="form.effectiveTime" prop="effectiveTime" :rules="rules.noEmpty"/>
    </DataForm>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      form: {
        effectiveTime: ''
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
