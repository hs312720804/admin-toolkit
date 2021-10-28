# 自定义正则输入    
`c-form-regexp`
根据所给的正则表达式检测输入是否正确
## 示例  
<Demo>
  <RegexpDemo />
</Demo>

### 代码
```vue
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
```
## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| value | String | | |
| required | Boolean | 是否为必填表单项, 默认为false | |
| regexpLable | String | 未通过正则校验时提示的内容, 为空时会取placeholder的值 | |
| regexp | RegExp | value需匹配的正则表达式 | |
<Comment />