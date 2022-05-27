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
      <slot name="edit">{{ value }}</slot>
    </template>
    <template v-else>
      <slot name="read">{{ value }}</slot>
    </template>
  </el-form-item>
</template>

<script>
import formItemMixin from '../../formItemMixin'
export default {
  name: 'CFormAny',
  mixins: [formItemMixin],
  data () {
    return {

    }
  }
}
</script>

<style></style>
