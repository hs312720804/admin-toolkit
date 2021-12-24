<template>
  <el-form-item :label="label" :prop="prop" :rules="regexpRules">
    <el-input
      v-if="!isReadonly"
      :value="value"
      :clearable="clearable"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('input', $event)"
    ></el-input>
    <template v-else>{{ value }}</template>
  </el-form-item>
</template>

<script>
import formItemMixin from '../../formItemMixin'
export default {
  name: 'CFormRegexp',
  mixins: [formItemMixin],
  props: {
    regexpLable: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    regexp: RegExp
  },
  data () {
    return {
      regexpRules: [
        { required: this.required, message: '请输入' + this.label },
        {
          validator: (rule, value, cb) => {
            const reg = this.regexp
            if (!reg.test(value)) {
              return cb(new Error(this.regexpLable || this.placeholder))
            }
            cb()
          }
        }
      ]
    }
  }
}
</script>

<style>

</style>
