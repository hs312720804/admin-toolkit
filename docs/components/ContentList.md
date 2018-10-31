# 内容列表  
`ContentList`  
本组件把内容列表分成3 个组成部分, 分别是  
* 过滤表单  
* 表格内容  
* 分页  

然后组合了其他几个组件来展示这些内容  

## 示例  

### 效果

<Demo>
  <ContentListDemo />
</Demo>

### 代码  
```vue
<template>
    <ContentList 
      :filter="contentList.filter"
      :filterSchema="contentList.filterSchema"
      :table="contentList.table"
      :pagination="contentList.pagination"
      @filter-change="fetchData"
    />
</template>

<script>
import _ from 'gateschema'
export default {
  data() {
    return {
      contentList: {
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
        table: {
          props: {
            border: true,
          },
          header: [
            {
              type: "selection",
              width: "55"
            },
            {
              label: "ID",
              prop: "id",
              sortable: false
            },
            {
              label: "名称",
              prop: "name",
              sortable: true
            },
            {
              label: "操作",
              render: (h, params) => {
                const actions = {
                  handleRead: "查看",
                  handleEdit: "编辑",
                  handleDelete: "删除"
                }
                return Object.keys(actions).map(key => {
                  return h(
                    "el-button",
                    {
                      props: {
                        type: "text"
                      },
                      on: {
                        click: () => {
                          this[key](params);
                        }
                      }
                    },
                    actions[key]
                  );
                });
              }
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
          ]
        },
        pagination: {
          currentPage: 3,
          total: 25
        }
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
      this.$message('数据过滤条件已改变, 这是会重新拉去数据'
      )
    }
  }
}
</script>
```


## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| filterSchema | Object | 表格内容过滤表单 schema |  |
| filter | Object | 过滤表单绑定的数据对象 |  |
| table | Object | 表格数据和属性 | | 
| pagination | Object | element-ui 分页组件属性 | |
