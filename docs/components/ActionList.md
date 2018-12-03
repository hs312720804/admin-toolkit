# 操作按钮组    
`ActionList`  
用于快速创建一组操作按钮  

## 示例  

### 效果

<Demo>
  <ActionListDemo />
</Demo>

### 代码  
```vue
<template>
    <ActionList 
      :actions="actions"
    />
</template>

<script>
export default {
  data() {
    return {
      actions: {
        handleCreate: {
          type: 'primary',
          text: '创建'
        }, 
        handleBatchDelete: {
          text: '批量编辑'
        },
        handleBatchEdit: {
          text: '批量删除'
        }
      }
    }
  },
  methods: {
    handleCreate() {
      this.$message('handleCreate')
    },
    handleBatchDelete() {
      this.$message('handleBatchDelete')
    },
    handleBatchEdit() {
      this.$message('handleBatchEdit')
    }
  }
}

</script>

```


## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| actions | Object | key 为点击按钮时执行的方法, value 为按钮属性| 见上面例子 |

按钮属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| type | String | primary / success / warning / danger / info / text | primary |
| text | String | 按钮文字 |  |