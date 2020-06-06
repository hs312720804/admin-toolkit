<template>
  <div>
    <Table
      :data="table.data"
      :props="table.props"
      :header="table.header" />
  </div>
</template>

<script>
import Table from '../lib/components/Table'
import InputIconEdit from '../lib/components/InputIconEdit'
export default {
  components: {
    Table
  },
  props: {},
  data () {
    return {
      table: {
        props: {},
        header: [
          {
            label: '姓名',
            prop: 'name',
            render: (h, { row }) => {
              return h(
                InputIconEdit,
                {
                  props: {
                    initValue: row.name
                  },
                  on: {
                    blur: (val) => {
                      this.$message.info('传给后端的值为', val)
                    }
                  }
                }
              )
            }
          },
          {
            label: '性别',
            prop: 'sex'
          },
          {
            label: '年龄',
            prop: 'age'
          }
        ],
        data: [
          { name: '小红', sex: '女', age: '15' },
          { name: '小明', sex: '男', age: '17' },
          { name: '小蓝', sex: '男', age: '18' }
        ]
      }
    }
  },
  computed: {},
  methods: {},
  created () {}
}
</script>

<style lang="stylus" scoped>
</style>
