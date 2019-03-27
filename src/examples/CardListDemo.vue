<template>
  <CardList
    :data="table.data"
    :selection-type="table.selectionType"
    :selected="table.selected"
    @row-selection-add="handleRowSelectionAdd"
    @row-selection-remove="handleRowSelectionRemove"
    @row-selection-change="handleRowSelectionChange"
    :select-on-row-click="true"
  >
    <div class="card-content" slot="row" slot-scope="{row}">
        id: {{ row.id }}
    </div>
  </CardList>
</template>
<script>
export default {
  data () {
    return {
      table: {
        data: [
          {
            id: '1',
            name: '名称1'
          },
          {
            id: '2',
            name: '名称2'
          }
        ],
        selectionType: 'single',
        selected: []
      }
    }
  },
  methods: {
    handleRowSelectionAdd (item, index) {
      this.table.selected = this.table.selected.concat(index)
    },
    handleRowSelectionRemove (item, index) {
      this.table.selected = this.table.selected.filter(item => item !== index)
    },
    handleRowSelectionChange(item, index) {
      this.table.selected = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-content
  min-width 200px
  border 1px solid #ccc
  padding 10px
  margin-right 10px
</style>
