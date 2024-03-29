<template>
  <div class="remote-selector-main">
    <div class="remote-selector-main__filter">
      <slot name="filter">
        <gate-schema-form
          v-if="filterSchema"
          :schema="filterSchema"
          v-model="filter"
          @submit="handleFilter"
          @reset="handleResetFilterForm"
        />
      </slot>
    </div>
    <div ref="selectorContent" class="remote-selector-main__content">
      <slot name="item-list">
        <c-table
          :data="table.data"
          :header="table.header"
          :selected="tableSelected"
          :props="tableProps"
          :selection-type="selectionType || table.selectionType"
          :select-on-row-click="true"
          @row-selection-add="handleTableRowSelectionAdd"
          @row-selection-remove="handleTableRowSelectionRemove"
          @row-selection-change="handleTableRowSelectionChange"
          @all-row-selection-change="handleTableAllRowSelectionChange"
        />
      </slot>
    </div>
    <div class="remote-selector-main__footer">
      <div class="remote-selector-main__pagination">
        <slot name="pagination">
          <el-pagination
              v-if="pagination"
              @size-change="handlePageSizeChange"
              @current-change="handlePageChange"
              :current-page="pagination.currentPage"
              :page-sizes="[15, 20, 30, 50, 100, 200]"
              :page-size="pagination.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="pagination.total">
          </el-pagination>
        </slot>
      </div>
      <div class="remote-selector-main__actions">
        <slot name="actions">
            <el-button type="primary" @click="handleSelectEnd">
              {{$t('cButton.ok')}}
            </el-button>
            <el-button @click="handleSelectCancel">
              {{$t('cButton.cancel')}}
            </el-button>
        </slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import GateSchemaForm from '../../gate-schema-form/src/GateSchemaForm'
export default {
  name: 'CBaseSelector',
  components: {
    GateSchemaForm
  },
  data () {
    return {
      tableHeight: undefined,
      selected: [],
      tableSelected: []
    }
  },
  props: ['idField', 'filter', 'filterSchema', 'table', 'pagination', 'selectionType'],
  computed: {
    tableProps () {
      const originProps = this.table.Props || {}
      if (!originProps.height) {
        return { ...originProps, height: this.tableHeight }
      }
      return originProps
    }
  },
  watch: {
    data: 'updateTableSelected'
  },
  methods: {
    clearSelected () {
      this.selected = []
      this.tableSelected = []
    },
    handleSelectEnd () {
      this.$emit('select-end', this.selected.slice())
    },
    handleSelectCancel () {
      this.$emit('select-cancel')
      this.tableSelected = []
      this.selected = []
    },
    handleFilter (err) {
      if (!err || err.length === 0) {
        this.$emit('filter-change')
      }
    },
    handlePageSizeChange (size) {
      this.$set(this.pagination, 'pageSize', size)
      this.$emit('pagination-change')
    },
    handlePageChange (page) {
      this.$set(this.pagination, 'currentPage', page)
      this.$emit('pagination-change')
    },
    handleResetFilterForm () {
      this.$emit('filter-reset')
    },
    handleTableRowSelectionChange (item, index) {
      this.selected = [item]
      this.tableSelected = index
    },
    handleTableRowSelectionAdd (targetItem) {
      this.selected = this.selected.concat(targetItem)
      this.updateTableSelected()
    },
    handleTableRowSelectionRemove (targetItem) {
      const ID = this.idField
      this.selected = this.selected.filter(item => {
        return item[ID] !== targetItem[ID]
      })
      this.updateTableSelected()
    },
    handleTableAllRowSelectionChange (value) {
      if (value) {
        this.table.data.forEach(this.handleTableRowSelectionAdd)
      } else {
        this.table.data.forEach(this.handleTableRowSelectionRemove)
      }
    },
    updateTableSelected () {
      const ID = this.idField
      const table = this.table
      const newSelectedIndex = this.selected.map(item => item[ID])
      this.tableSelected = table.data.reduce((result, item, index) => {
        if (newSelectedIndex.indexOf(item[ID]) > -1) {
          result.push(index)
        }
        return result
      }, [])
    },
    setTableHeight () {
      this.tableHeight = this.$refs.selectorContent.clientHeight + 'px'
    }
  },
  created () {
  },
  mounted () {
    // window.addEventListener('resize', this.setTableHeight)
    // this.setTableHeight()
  },
  beforeDestroy () {
    // window.removeEventListener('resize', this.setTableHeight)
  }
}
</script>

<style lang="stylus" scoped>
.remote-selector-main
  height 100%
  display flex
  flex-direction column
.remote-selector-main__content
  overflow auto
  margin 10px 0
  border-top 1px solid #EBEEF5
  border-bottom 1px solid #EBEEF5
  flex 1
.remote-selector-main__footer
  height 35px
  padding 10px 0
.remote-selector-main__pagination
  display inline-block
.remote-selector-main__actions
  display inline-block
  float right
</style>
