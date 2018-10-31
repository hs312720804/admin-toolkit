<script>
import { Table, TableColumn, Checkbox, Radio } from "element-ui";
const defaultTableProps = {
  border: true,
  "highlight-current-row": true
};
export default {
    data() {
      return {
      }
    },
    computed: {
      selectStatus() {
        const dataCount = this.data.length
        const count = this.selected.length
        if (dataCount === 0 ||  count === 0) {
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
      selection: {
        type: String,
        default() {
          return 'none'; // none, multiple, single
        }
      },
      selected: {
      }
    },
    methods: {
    },
    render(h) {

      const header = this.header.map(item => {
        let scopedSlots;
        if (item.render) {
            scopedSlots = {
              default: props => item.render(h, props)
            };
        }
        return h(TableColumn, {
            props: item,
            scopedSlots
        });
      });
      const selection = this.selection
      if (selection !== 'none') {
        const options = {
          props: {
            width: 55,
            align: 'center'
          },
          scopedSlots: {}
        }
        if (selection === 'multiple') {
          options.props.renderHeader = () => {
            return h(Checkbox, {
              props: {
                value: this.selectStatus === 'all',
                indeterminate: this.selectStatus === 'indeterminate',
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

          options.scopedSlots.default = ({$index: index, row}) => {
            return h(Checkbox, {
              props: {
                value: this.selected.indexOf(index) > -1
              },
              on: {
                input: (value) => {
                  if (value) {
                    this.$emit('row-selection-add', row)
                  } else {
                    this.$emit('row-selection-remove', row)
                  }
                }
              }
            })
          }
        }
        if (selection === 'single') {
          options.scopedSlots.default = ({$index: index, row}) => {
            return h(Radio, {
              class: 'hide-radio-label',
              props: {
                value: this.selected,
                label: index
              },
              on: {
                input: () => {
                  this.$emit('row-selection-change', row)
                }
              }
            })
          }
        }
        const selectionColumn = h(TableColumn, options)
        header.unshift(selectionColumn)
      } 

      const table = h(
        Table,
        {
          props: {
            ...defaultTableProps,
            ...this.props,
            data: this.data
          }
        },
        header
      );
      return table
    }
}

</script>
<style lang="stylus" scoped>
.hide-radio-label >>> .el-radio__label
  display none

</style>