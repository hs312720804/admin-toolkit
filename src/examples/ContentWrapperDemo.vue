<template>
    <ContentWrapper 
      :filter="filter"
      :filterSchema="filterSchema"
      :pagination="pagination"
      @filter-change="fetchData"
    >
      <Table 
        :props="table.props"
        :header="table.header"
        :data="table.data"
      />
    </ContentWrapper>
</template>

<script>
import _ from 'gateschema'
export default {
  data() {
    return {
      filter: {},
      filterSchema: _.map({
        id: _.o.string.other("form", {
          placeholder: "请输入 id",
          cols: {
            item: 5,
            label: 6,
            wrapper: 16,
            xsLabel: 0,
            xsWrapper: 24
          }
        }),
        name: _.o.string.other("form", {
          placeholder: "请输入 name",
          cols: {
            item: 7,
            label: 8,
            wrapper: 16,
            xsLabel: 0,
            xsWrapper: {
              offset: 2,
              span: 22
            }
          }
        })
      }).other("form", {
        layout: "inline",
        footer: {
          cols: {
            label: 0,
            wrapper: 24
          },
          showSubmit: true,
          submitText: "查询"
        }
      }),
      tableHeader: [
      ],
      pagination: {
        currentPage: 3,
        total: 25
      },
      table: {
        props: {
          border: true,
        },
        header: [
          {
            label: "ID",
            prop: "id",
            sortable: false
          },
          {
            label: "名称",
            prop: "name",
            sortable: true
          }
        ],
        data: [
          {
            id: "1",
            name: "名称1"
          },
          {
            id: "2",
            name: "名称2"
          }
        ],
        selection: 'multiple',
        selected: [],
    }
    }
  },
  methods: {
    handleEdit({$index:index}) {
      this.$message(`编辑第${index + 1}条记录`)
    },
    handleRead({$index:index}) {
      this.$message(`阅读第${index + 1}条记录`)
    },
    handleDelete({$index:index}) {
      this.$message(`删除第${index + 1}条记录`)
    },
    fetchData() {
      this.$message('数据过滤条件已改变, 这时会重新拉去数据'
      )
    }
  }
}
</script>