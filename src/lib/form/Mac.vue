<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth" :rules="macRules">
    <el-input
      v-if="!isReadonly"
      :value="value"
      :type="type"
      :clearable="clearable"
      :placeholder="placeholder"
      :maxlength="type!=='textarea' ? 12 : undefined"
      show-word-limit
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
    />
    <template v-else>{{ value }}</template>
  </el-form-item>
</template>

<script>
import formItemMixin from './formItemMixin'
import _ from 'lodash'
export default {
  mixins: [formItemMixin],
  data () {
    var validateMac = (rule, value, callback) => {
      const reg = /^[a-fA-F0-9]{12}$/
      value = _.trim(value)
      if (value !== '' && !reg.test(value)) {
        callback(new Error('请输入以a-f、A-F、0-9组成的12位MAC地址'))
      } else {
        callback()
      }
    }
    var validateMacs = (rule, value, callback) => {
      const reg = /^[a-fA-F0-9]{12}$/
      if (value.indexOf('，') > -1) {
        callback(new Error('只能用英文逗号隔开'))
      }
      value = value.split(',')
      try {
        value.forEach((e, index) => {
          if (e !== '' && !reg.test(_.trim(e))) {
            throw Error('第' + (index + 1) + '个MAC地址不符合要求，请输入以a-f、A-F、0-9组成的12位MAC地址')
          }
        })
        callback()
      } catch (e) {
        callback(new Error(e.message))
      }
    }
    return {
      macRules: [],
      customRules: {
        singleMac: [
          { validator: validateMac, trigger: 'blur' }
        ],
        multipleMac: [
          { validator: validateMacs, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    if (this.type === 'textarea') {
      this.macRules = this.rules ? this.customRules.multipleMac.concat(this.rules) : this.customRules.multipleMac
    } else {
      this.macRules = this.rules ? this.customRules.singleMac.concat(this.rules) : this.customRules.singleMac
    }
  }
}
</script>

<style>
</style>
