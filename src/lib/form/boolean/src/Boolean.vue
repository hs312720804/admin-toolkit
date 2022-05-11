<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <template slot="label">
      <span>{{ label }}</span>
      <el-popover v-if="isPopover" trigger="hover" :placement="popoverPlacement">
        <i slot="reference" class="form-label-tip" :class="[popoverIcon]"></i>
        <slot name="popover-content"></slot>
      </el-popover>
    </template>
    <template v-if="!isReadonly">
      <el-switch
        v-if="type === 'switch'"
        :value="getBoolVal(value)"
        @input="handleInputVal"
        @change="handleChange"
        :disabled="disabled"
      ></el-switch>

      <el-checkbox
        v-else
        :value="getBoolVal(value)"
        @input="handleInputVal"
        @change="handleChange"
        :disabled="disabled"
      >
        <slot></slot>
      </el-checkbox>
    </template>

    <template v-else>
      <span v-if="type === 'switch'">{{ getBoolVal(value) ? $t('cMessage.yes') : $t('cMessage.no')  }}</span>
      <el-checkbox v-else :disabled="true" :value="getBoolVal(value)"></el-checkbox>
      <slot></slot>
    </template>
  </el-form-item>
</template>

<script>
import formItemMixin from '../../formItemMixin'
export default {
  name: 'CFormBoolean',
  mixins: [formItemMixin],
  data () {
    return {

    }
  },
  props: {
    type: String,
    trueVal: {
      default () {
        return true
      }
    },
    faseVal: {
      default () {
        return false
      }
    }
  },
  methods: {
    handleInputVal (val) {
      this.$emit('input', this.parseVal(val))
    },
    handleChange (val) {
      this.$emit('change', this.parseVal(val))
    },
    parseVal (val) {
      return val ? this.trueVal : this.faseVal
    },
    getBoolVal (val) {
      return !!val
    }
  }
}
</script>

<style>
</style>
