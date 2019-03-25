<script>
import GateSchemaForm from './GateSchemaForm'
import { Pagination } from 'element-ui'
const defaultPaginationProps = {
  background: true,
  pageSizes: [10, 20, 50, 100],
  pageSize: 10,
  layout: 'total, prev, pager, next, sizes, jumper'
}
export default {
  props: ['filter', 'filterSchema', 'pagination'],
  created () {},
  methods: {
    handleFilter (err) {
      if (!err || err.length === 0) {
        this.emitFilterChange('query')
      }
    },
    handlePageSizeChange (size) {
      this.$set(this.pagination, 'pageSize', size)
      this.emitFilterChange('pagination')
    },
    handlePageChange (page) {
      this.$set(this.pagination, 'currentPage', page)
      this.emitFilterChange('pagination')
    },
    handleResetFilterForm () {
      this.$emit('filter-reset')
    },
    emitFilterChange (type) {
      this.$emit('filter-change', type)
    }
  },
  render (h) {
    const $slots = this.$slots
    let filterForm
    if (this.filterSchema) {
      filterForm = h(GateSchemaForm, {
        ref: 'filterForm',
        class: 'filter-form',
        props: {
          value: this.filter,
          schema: this.filterSchema
        },
        on: {
          submit: this.handleFilter,
          reset: this.handleResetFilterForm
        }
      })
    } else {
      filterForm = $slots.filterForm
    }

    const {
      handlePageSizeChange,
      handlePageChange
    } = this
    const pagination = h(Pagination, {
      ref: 'pagination',
      props: {
        ...defaultPaginationProps,
        ...this.pagination
      },
      on: {
        'size-change': handlePageSizeChange,
        'current-change': handlePageChange
      }
    })
    return h('div', { class: 'content-list' }, [filterForm, this.$slots.actionList, this.$slots.default, pagination])
  }
}
</script>
<style lang="stylus" scoped>
.content-list
    margin-top 20px
    .filter-form >>> .el-form
    >>> .el-pagination
        display flex
        flex-direction row
        justify-content flex-end
    >>> .filter-form
            .sf-item__label
                text-align right
                width auto
            .sf-item--inline
                margin-right 10px
            .sf-footer
                margin-right 0
                width auto
    >>> .el-pagination
        padding 0
        margin-top 30px
        button:last-child
            margin-right 0
    >>> .el-pagination__total
        margin-right auto
</style>
