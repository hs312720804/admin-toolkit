<template>
    <ActionList
      :actions="actions"
      :target="this"
    />
</template>

<script>
export default {
  data () {
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
    handleCreate () {
      this.$message('handleCreate')
    },
    handleBatchDelete () {
      this.$message('handleBatchDelete')
    },
    handleBatchEdit () {
      this.$message('handleBatchEdit')
    }
  }
}

</script>
