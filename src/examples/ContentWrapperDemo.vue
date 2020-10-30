<template>
  <component
    :filter="filter"
    :filterSchema="filterSchema"
    :pagination="pagination"
    @filter-change="handleFilterChange"
    @filter-reset="handleFilterReset"
    v-if="dynamicComponent"
    :is="dynamicComponent"
  >
    <c-table :props="table.props" :header="table.header" :data="table.data" />
  </component>

  <!-- <component v-if="dynamicComponent" :is="dynamicComponent">
        <c-table :props="table.props" :header="table.header" :data="table.data" />
  </component> -->
</template>

<script>
//  <c-content-wrapper
import aa from '../lib/components/content-wrapper/src/ContentWrapper'
import _ from 'gateschema'
export default {
  data () {
    return {
      dynamicComponent: null,
      filter: {},
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
      tableHeader: [],
      pagination: {
        currentPage: 3,
        total: 250
      },
      table: {
        props: {
          border: true
        },
        header: [
          {
            label: 'ID',
            prop: 'id',
            sortable: false
          },
          {
            label: '名称',
            prop: 'name',
            sortable: true
          }
        ],
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
        selection: 'multiple',
        selected: []
      }
    }
  },
  methods: {
    fetchData () {
      this.$message('数据过滤条件已改变, 这时会重新拉去数据')
    },
    handleFilterChange (type, filter) {
      if (type === 'pagination') {
        this.$message('分页数据发生改变')
      } else {
        this.filter = filter
        this.$message('筛选条件发生变更')
      }
    },
    handleFilterReset () {
      this.filter = {}
      this.$message('筛选条件需要重置')
    }
  },
  mounted () {
    import('../lib/components/content-wrapper/src/ContentWrapper').then(module => {
      this.dynamicComponent = module.default
      // use code
    })
    // this.dynamicComponent = 'c-content-wrapper'
  }
}
</script>
