 <template>
  <c-base-selector 
    ref="baseSelector"
    id-field="id"
    :is-live="isLive"
    selection-type="multiple"
    :table="table" 
    :pagination="pagination"
    :filter="filter"
    :filter-schema="filterSchema"
    @pagination-change="fetchData"
    @filter-change="fetchData"
    @filter-reset="handleFilterReset"
    @select-cancel="$emit('select-cancel')"
    @select-end="$emit('select-end')">
  </c-base-selector>
</template>
<script>
import _ from 'gateschema'
export default {
  data() {
    return {
      pagination: {
        currentPage: 1,
        pageSize: 15
      },
      filter: this.getDefaultFilter(),
      filterSchema: _.map({
        id: _.o.string.other('form', {
          placeholder: '请输入 id'
        }),
        name: _.o.string.other('form', {
          placeholder: '请输入 name'
        })
      }).other('form', {
        cols: {
          item: 4,
          label: 0,
          wrapper: 20
        },
        layout: 'inline',
        footer: {
          cols: {
            label: 0,
            wrapper: 24
          },
          showSubmit: true,
          submitText: '查询',
          showReset: true,
          resetText: '重置'
        }
      }),
      table: {
        props: {},
        header: [
          {
            label: "ID",
            prop: "id",
            width: "70"
          },
           {
            label: "名称",
            prop: "name",
          },
        ],
        data: [
          {
            id: 1,
            name: 'foo'
          },
          {
            id: 2,
            name: 'bar'
          }
        ] 
      }
    }
  },
  computed: {
    selected() {
      return this.$refs.baseSelector.selected.slice()
    }
  },
  props: ['isLive', 'selectionType'],
  methods: {
    getDefaultFilter() {
      return {
      }
    },
    getFilter() {
      const pagination = this.pagination
      const filter = Object.assign({}, this.filter)
      if (pagination) {
        filter.page = pagination.currentPage
        filter.rows = pagination.pageSize
      }
      return filter
    },
    handleFilterReset() {
      this.filter = this.getDefaultFilter()
      this.pagination.currentPage = 1
      this.fetchData()
    },
    fetchData() {
    }
  },
  created() {
    this.fetchData()
  }
}
</script>
 
 <style lang='stylus' scoped>
</style>