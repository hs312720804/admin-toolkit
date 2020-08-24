# 动态添加
`c-add-form-obj`
一次性可以添加多个对象

## 示例
### 效果

<Demo>
  <AddFormObjDemo/>
</Demo>

### 代码
```vue
<template>
<c-add-form-obj :formList="form.formList"></c-add-form-obj>
</template>
<script>
export default {
  data () {
    return {
      form: {
        formList:[
          {
            moreMediaList:[
              {
                type: 'baoguang',
                value: [
                  {
                    code: '',
                    serviceProvider: '',
                  }
                ]
              }
            ]
          }
        ]
      }	
    }
  }
}
</script>


```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| formList | Array | 传过去的对象 |见上面例子 |
<Comment />