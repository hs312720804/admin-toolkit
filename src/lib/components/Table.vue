<script>
import { Table, TableColumn } from "element-ui";
const defaultTableProps = {
  border: true,
  "highlight-current-row": true
};
export default {
    props: ['props', 'data', 'header'],
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