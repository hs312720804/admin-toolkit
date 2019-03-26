<script>
import { Table, TableColumn, Checkbox, Radio } from 'element-ui'
import TableWrapper from './TableWrapper'
const defaultTableProps = {
  border: true,
  'highlight-current-row': true
}
export default {
  data () {
    return {
      hiddenColumns: []
    }
  },
  computed: {
    selectStatus () {
      const dataCount = this.data.length
      const count = this.selected.length
      if (dataCount === 0 || count === 0) {
        return 'none'
      }
      if (dataCount === count) {
        return 'all'
      }
      return 'indeterminate'
    }
  },
  props: {
    props: {
    },
    data: {
    },
    header: {
    },
    selectionType: {
      type: String,
      default () {
        return 'none' // none, multiple, single
      }
    },
    selected: {
    },
    selectOnRowClick: {
      type: Boolean,
      default() {
        return false
      }
    },
    fixSelection: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  methods: {
    toggleColumn (index) {
      const hiddenColumns = this.hiddenColumns
      const idx = hiddenColumns.indexOf(index)
      if (idx === -1) {
        this.hiddenColumns.push(index)
      } else {
        this.hiddenColumns.splice(idx, 1)
      }
    },
    handleSortChange () {
      this.$emit('sort-change', ...arguments)
    },
    handleRowClick(row) {
      if (this.selectOnRowClick) {
        const index = this.data.indexOf(row)
        const selected = this.selected.indexOf(index) > -1
        this.$emit(selected ? 'row-selection-remove' : 'row-selection-add', row, index)
      }
      this.$emit('row-click', ...arguments)
    },
    createEmitter(eventName) {
      return function proxy() {
        this.$emit(eventName, ...arguments)
      }.bind(this)
    }
  },
  render (h) {
    const fixSelection = this.fixSelection
    const hiddenColumns = this.hiddenColumns
    const header = this.header.reduce((result, item, index) => {
      if (hiddenColumns.indexOf(index) === -1) {
        let scopedSlots
        if (item.render) {
          scopedSlots = {
            default: props => item.render(h, props)
          }
        }
        result.push(h(TableColumn, {
          key: index,
          props: item,
          scopedSlots
        }))
      }
      return result
    }, [])
    const selectionType = this.selectionType
    if (selectionType !== 'none') {
      const options = {
        props: {
          width: 55,
          align: 'center'
        },
        scopedSlots: {}
      }
      if (fixSelection) {
        options.props.fixed = 'left'
      }
      if (selectionType === 'multiple') {
        options.props.renderHeader = () => {
          return h(Checkbox, {
            props: {
              value: this.selectStatus === 'all',
              indeterminate: this.selectStatus === 'indeterminate'
            },
            on: {
              input: () => {
                const selectStatus = this.selectStatus
                const status = selectStatus === 'all' || selectStatus === 'indeterminate'
                this.$emit('all-row-selection-change', !status)
              }
            }
          })
        }

        options.scopedSlots.default = ({ $index: index, row }) => {
          return h(Checkbox, {
            props: {
              value: this.selected.indexOf(index) > -1
            },
            on: {
              input: (value) => {
                if (value) {
                  this.$emit('row-selection-add', row, index)
                } else {
                  this.$emit('row-selection-remove', row, index)
                }
              }
            }
          })
        }
      }
      if (selectionType === 'single') {
        options.scopedSlots.default = ({ $index: index, row }) => {
          return h(Radio, {
            class: 'hide-radio-label',
            props: {
              value: this.selected,
              label: index
            },
            on: {
              input: () => {
                this.$emit('row-selection-change', row, index)
              }
            }
          })
        }
      }
      const selectionColumn = h(TableColumn, options)
      header.unshift(selectionColumn)
    }

    const elementUITableEvents = [
      'cell-mouse-enter',	
      'cell-mouse-leave',
      'cell-click', 
      'cell-dblclick',
      'row-click',
      'row-contextmenu',
      'row-dblclick',
      'header-click',
      'header-contextmenu',
      'sort-change',
      'current-change',
      'header-dragend',	
      'expand-change'
    ].reduce((result, item) => {
      result[item] = this.createEmitter(item)
      return result
    }, {})
    const table = h(
      Table,
      {
        class: 'cc-table',
        props: {
          ...defaultTableProps,
          ...this.props,
          data: this.data
        },
        on: {
          ...elementUITableEvents,
          'sort-change': this.handleSortChange,
          'row-click': this.handleRowClick
        }
      },
      header
    )
    const tableWrapper = h(TableWrapper, {
      props: {
        columns: this.header.map(item => item.label),
        hiddenColumns: this.hiddenColumns
      },
      on: {
        'toggle-column': this.toggleColumn
      }
    }, [table])
    return tableWrapper
  }
}

</script>
<style lang="stylus" scoped>
.cc-table
  >>> .hidden
    display  none

.hide-radio-label >>> .el-radio__label
  display none

</style>
