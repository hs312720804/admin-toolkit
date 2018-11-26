<template>
  <Table 
    :data="data" 
    :props="props"
    :header="header"
  >
  </Table>
</template>
<script>
import { createOperationRender } from "../lib/utils/component";
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
        },
        {
          label: "操作",
          render: createOperationRender(this, {
            handleRead: "查看",
            handleEdit: "编辑",
            handleDelete: "删除"
          })
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
    }
  },
  methods: {
    handleEdit({$index:index}) {
      this.$message(`编辑第${index + 1}条记录`)
    },
    handleRead({$index:index}) {
      this.$message(`阅读第${index + 1}条记录`)
    },
    handleDelete({$index:index}) {
      this.$message(`删除第${index + 1}条记录`)
    },
  }
}
</script>
