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
      useSelection: {
        type: Boolean,
        default() {
          return false
        }
      },
      selectionType: {
        type: String,
        default() {
          return 'checkbox' // radio
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
      if (this.useSelection) {
        const selectionType = this.selectionType || 'checkbox'
        const selectionComponent = selectionType === 'radio' ? Radio : Checkbox
        const options = {
          props: {
            width: 55,
            align: 'center'
          },
          scopedSlots: {}
        }
        if (selectionType === 'checkbox') {
          options.props.renderHeader = () => {
            return h(selectionComponent, {
              props: {
                value: this.selectStatus === 'all',
                indeterminate: this.selectStatus === 'indeterminate',
              },
              on: {
                input: (value) => {
                  const selectStatus = this.selectStatus
                  const status = selectStatus === 'all' || selectStatus === 'indeterminate'
                  this.$emit('all-row-selection-change', !status)
                }
              }
            })
          }

          options.scopedSlots.default = ({$index: index, row}) => {
            return h(selectionComponent, {
              props: {
                value: this.selected.indexOf(index) > -1
              },
              on: {
                input: (value) => {
                  this.$emit('row-selection-change', {index, row}, value)
                }
              }
            })
          }
        } else {
          options.scopedSlots.default = ({$index: index, row}) => {
            return h(selectionComponent, {
              class: 'hide-radio-label',
              props: {
                value: this.selected,
                label: index
              },
              on: {
                input: () => {
                  this.$emit('row-selection-change', {index, row}, true)
                }
              }
            })
          }
        }
        const selection = h(TableColumn, options)
        header.unshift(selection)
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