# 字符串  
用于输入和展示字符串值

## 示例  

### 效果
<Demo>
  <StringDemo />
</Demo>

### 代码  
```vue
<template>
  <div>
    <DataForm label-width="120px" :readonly="isReadonly"> 
      <String label="姓名" v-model="form.name" />
    </DataForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReadonly: false,
      form: {
        name: '张三',
      }
    }
  }
}
</script>

```

## 属性  
| 名称 | 类型 | 描述 | 默认 |  例子 |  
| ---- | ---- | ---- | ---- | ---- |
| label | String | 控件 label |  | |  

<Comment />