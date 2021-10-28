<template>
  <div>
    <c-form label-width="120px" :model="form" :readonly="isReadonly">
      <c-form-regexp
        v-model="form.value"
        label="自定义正则输入"
        prop="value"
        placeholder="仅可输入-1 0 正整数"
        :regexp="/^(-1|0|[1-9]*)$/"
      ></c-form-regexp>
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      form: {
        value: ''
      }
    }
  }
}
</script>
