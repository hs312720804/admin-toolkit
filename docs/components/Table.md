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
    :useSelection="useSelection"
    @row-selection-change="handleRowSelectionChange"
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
      useSelection: true
    }
  },
  methods: {
    handleRowSelectionChange({index}, value) {
      if (value) {
        this.selected = this.selected.concat(index)
      } else {
        this.selected = this.selected.filter(item => item !== index)
      }
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
| useSelection | Boolean | 是否启动选择功能 | |  
| selectionType | 'multiple' 或者 'single' |  如果开启选择功能, 这里设置选择的类型, 默认 multiple | |
| selected | Array 或者 Number | 如果 selectionType 是 multiple, 那么 selected 需要是一个数组,  包含选中的 index; 如果 selectionType 是 single, 那么 selected 是被选中的 index | |  

## 事件  
| 名称 | 参数 | 描述 |  
| ---- | ---- | ---- |  
| row-selection-change | ({index: Number, row: Object}, value: Boolean) | 当某行的选中状态改变时触发, index 为行索引, value 为选中状态 |  
| all-row-selection-change | (value: Boolean) | 当所有行的选中状态改变时触发, value 为选中状态 |  
