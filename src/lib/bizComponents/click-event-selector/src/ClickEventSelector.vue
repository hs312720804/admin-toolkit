<template>
  <div class="click-event-selector">
    <Button type="primary" @click="handleSelectStart">
      {{ title }}
    </Button>
    <Dialog
      :title="title"
      :visible.sync="showDialog"
      :append-to-body="true"
      :fullscreen="fullscreen"
    >
      <c-content-wrapper
        :pagination="pagination"
      >
        <slot name="filter"></slot>
        <c-card-list
          class="click-event-list"
          :data="data"
          :selection-type="table.selectionType"
          :selected="table.selected"
          @row-selection-change="handleRowSelectionChange"
          :select-on-row-click="true"
        >
          <div class="card-content" slot="row" slot-scope="{row}" :title="row.label">
            {{ row.label }}
          </div>
        </c-card-list>
      </c-content-wrapper>
    </Dialog>
  </div>
</template>

<script>
import { Button, Dialog } from 'element-ui'
export default {
  components: {
    Button,
    Dialog
  },
  name: 'CClickEventSelector',
  data () {
    return {
      showDialog: false,
      table: {
        selected: undefined,
        selectionType: 'single'
      },
    }
  },
  props: ['title', 'fullscreen', 'data', 'pagination'],
  methods: {
    handleSelectStart() {
      this.showDialog = true
    },
    handleRowSelectionChange(row, index) {
      this.table.selected = index
      this.showDialog = false
      this.$emit('select-end', row)
    }
  }
}

</script>
<style lang="stylus" scoped>
.card-content
  width 105px
  padding 10px
  border 1px solid #ccc
  margin 10px
  cursor pointer
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
  &:hover
    border 1px solid #606266
.click-event-list >>> .card-item__selection 
  display none
</style>
