<template>
  <div>
    <c-color-picker
      v-model="color"
      :props="props"
      @change="handleChange"
      @active-change="handleActiveChange"
    >
    </c-color-picker>
    {{ color }}
  </div>
</template>

<script>
export default {
  name: 'ColorPickerDemo',
  data () {
    return {
      color: {
        angle: 0,
        stops: [
          ['#0359b5', 0],
          ['#f6ce01', 1]
        ]
      },
      props: {
        linear: true,
        size: 'small',
        disabled: false,
        // 只支持非渐变色时设置
        showAlpha: false,
        predefine: [],
        colorFormat: 'hex',
        popperClass: ''
      }
    }
  },
  methods: {
    handleChange (color) {
      console.log('选择的颜色' + color)
    },
    handleActiveChange (color) {
      console.log('选择的颜色' + color)
    }
  }
}
</script>

<style scoped>

</style>
