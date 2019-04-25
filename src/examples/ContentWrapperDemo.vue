<template>
  <ContentWrapper
    :filter="filter"
    :filterSchema="filterSchema"
    :pagination="pagination"
    @filter-change="handleFilterChange"
    @filter-reset="handleFilterReset"
  >
    <Table :props="table.props" :header="table.header" :data="table.data"/>
  </ContentWrapper>
</template>

<script>
import _ from 'gateschema'
export default {
  data() {
    return {
      filter: {},
      filterSchema: _.map({
        id: _.o.string.other('form', {
          placeholder: '请输入 id'
          // cols: {
          //   item: 5,
          //   label: 0,
          //   wrapper: 16,
          //   xsLabel: 0,
          //   xsWrapper: 24
          // }
        }),
        // height: _.o.enum({ a: 1, b: 2 }).other('form', {
        //   placeholder: '请输入 id',
        //   component: 'Select'
        // }),
        // age: _.o.string.other('form', {
        //   placeholder: '请输入 id'
        // }),
        name: _.o.string.other('form', {
          placeholder: '请输入 name'
          // cols: {
          //   item: 7,
          //   label: 0,
          //   wrapper: 16,
          //   xsLabel: 0,
          //   xsWrapper: {
          //     offset: 2,
          //     span: 22
          //   }
          // }
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
        total: 25
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
    fetchData() {
      this.$message('数据过滤条件已改变, 这时会重新拉去数据')
    },
    handleFilterChange(type) {
      if (type === 'pagination') {
        this.$message('分页数据发生改变')
      } else {
        this.$message('筛选条件发生变更')
      }
    },
    handleFilterReset() {
      this.$message('筛选条件需要重置')
    }
  }
}
</script>
