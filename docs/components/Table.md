# 表格  
`Table`  

## 示例  

### 效果

<Demo>
  <TableDemo />
</Demo>

### 代码  
```vue
<template>
  <Table 
    :props="props"
    :header="header"
    :data="data"
    :selected="selected"
    :selection-type="selectionType"
    @row-selection-add="handleRowSelectionAdd"
    @row-selection-remove="handleRowSelectionRemove"
    @all-row-selection-change="handleAllRowSelectionChange"
  />
</template>

<script>
export default {
  data() {
    return {
      props: {
        border: true,
      },
      header: [
        {
          label: "ID",
          prop: "id",
          sortable: false
        },
        {
          label: "名称",
          prop: "name",
          sortable: true
        }
      ],
      data: [
        {
          id: "1",
          name: "名称1"
        },
        {
          id: "2",
          name: "名称2"
        }
      ],
      selected: [],
      selectionType: 'multiple'
    }
  },
  methods: {
    handleRowSelectionAdd(item, index) {
      this.selected = this.selected.concat(index)
    },
    handleRowSelectionRemove(item, index) {
      this.selected = this.selected.filter(item => item !== index)
    },
    handleAllRowSelectionChange(value) {
      if (value) {
        this.selected = this.data.map((_, index) => index)
      } else {
        this.selected = []
      }
    }
  }
}
</script>



```


## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| props | Object | element-ui 表格属性 | |
| header | Array | 表头 | | 
| data | Array | 表格数据 | |  
| selectionType | 'none' / 'multiple' / 'single' |  none 为不使用选择功能, multiple 为多选, single 为单选| |
| selected | Array 或者 Number | 如果 selectionType 是 multiple, 那么 selected 需要是一个数组,  包含选中的 index; 如果 selectionType 是 single, 那么 selected 是被选中的 index | |  

## 事件  
| 名称 | 参数 | 描述 |  
| ---- | ---- | ---- |  
| row-selection-add | (row: Object, index: Number) | 只在 selectoinType 为 multiple 时触发 |  
| row-selection-remove | (row: Object, index: Number) | 只在 selectoinType 为 multiple 时触发 |  
| row-selection-change | (row: Object, index: Number) | 只在 selectoinType 为 single 时触发 |  
| all-row-selection-change | (value: Boolean) | 当所有行的选中状态改变时触发, value 为选中状态 |  
