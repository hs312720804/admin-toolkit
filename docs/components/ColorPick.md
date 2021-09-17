# 渐变色选择器  
`c-color-picker`  
结合渐变色与普通颜色选择器

## 示例  

### 效果

<Demo>
  <ColorPickerDemo />
</Demo>

### 代码  
```vue
<template>
  <c-color-picker v-model="color" :props="props" />
</template>

<script>
export default {
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

```


## 属性  

| 名称        | 类型    | 描述                           | 可选值                | 默认值 |
| ----------- | ------- | ------------------------------ | --------------------- | ------ |
| linear      | boolean | 渐变色 / 普通选择器            | true / false          | true   |
| size        | string  | 尺寸                           | medium / small / mini | small  |
| disabled    | boolean | 是否禁用                       | true / false          | false  |
| showAlpha   | boolean | 是否支持透明度选择(普通选择器) | -                     | false  |
| predefine   | Array   | 预定义颜色(普通选择器)                     | -                     | -      |
| colorFormat | string  | 写入 v-model 的颜色的格式(普通选择器)      | hsl / hsv / hex / rgb | -      |
| popperClass | string  | ColorPicker 下拉框的类名(普通选择器)       | -                     | -      |

<Comment />
