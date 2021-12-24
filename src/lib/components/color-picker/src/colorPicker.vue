<template>
  <div class="colorPicker-wrap">
    <el-popover
      placement="bottom"
      trigger="click"
      v-if="props.linear"
      :disabled="props.disabled"
    >
      <!--渐变色组件-->
      <vue-gpickr v-model="colorVal" />
      <div
        slot="reference"
        :class="props.size === 'medium' ?
         'color-preview-medium' : props.size === 'small'
          ? 'color-preview-small' : 'color-preview-mini'"
      >
        <div class="colorPick" :style="{background: colorVal}">
          <i class="el-icon-arrow-down dropDown"></i>
        </div>
      </div>
      <slot name="linear"></slot>
    </el-popover>
    <!--正常取色器-->
    <el-color-picker
      v-else
      v-model="colorVal"
      :disabled="props.disabled"
      :predefine="props.predefine"
      :size="props.size"
      :showAlpha="props.showAlpha"
      :colorFormat="props.colorFormat"
      :popperClass="props.popperClass"
      @change="handleChange"
      @active-change="handleActiveChange"
    ></el-color-picker>
  </div>
</template>

<script>
import { VueGpickr, LinearGradient } from 'vue-gpickr'
export default {
  name: 'CColorPicker',
  props: {
    value: {
      type: [String, Object],
      default () {
        return new LinearGradient({
          angle: 0,
          stops: [
            ['#0359b5', 0],
            ['#f6ce01', 1]
          ]
        })
      }
    },
    props: {
      type: Object
    }
  },
  computed: {
    colorVal: {
      get () {
        return typeof this.value === 'object' ? new LinearGradient(this.value) : this.value
      },
      set (val) {
        this.setEmit(val)
      }
    }
  },
  methods: {
    setEmit (val) {
      this.$emit('input', val)
    },
    handleChange (val) {
      this.$emit('change', val)
    },
    handleActiveChange (val) {
      this.$emit('active-change', val)
    }
  },
  components: {
    VueGpickr
  }
}
</script>

<style lang="stylus" scoped>
.color-preview-medium, .color-preview-small, .color-preview-mini
  width 40px
  height 40px
  padding: 4px
  border: 1px solid #e6e6e6
  border-radius: 4px
  font-size: 0
  display inline-block
  box-sizing border-box
  .colorPick
    width 100%
    height 100%
    cursor pointer
    display flex
    justify-content center
    align-items center
  .dropDown
    font-size 14px
    color #ffffff
.vue-gpickr
  box-shadow none
  >>>.vc-sketch
    padding 0
  >>>.vue-gpickr-inner-container
    padding 0 0 0 10px
.color-preview-small
  width 30px
  height 30px
.color-preview-mini
  width 20px
  height 20px
</style>
