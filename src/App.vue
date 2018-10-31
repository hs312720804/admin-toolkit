<template>
  <div id="app">
    <h2>TagNav</h2>
    <TagNav />


    <h2>Breadcrumb</h2>
    <Breadcrumb :items="breadcrumb">
    </Breadcrumb>

    <h2>Table</h2>
    <Table 
      :data="contentList.table.data" 
      :props="contentList.table.props"
      :header="contentList.table.header"
    >
    </Table>
    
    <h2>GateSchemaForm</h2>
    <GateSchemaForm 
      :schema="schemaOfCreation" 
      v-model="itemForCreate"
    >
    </GateSchemaForm>

    <h2>ContentList</h2>
    <ActionList :actions="actions" />
    <ContentList 
      :filter="contentList.filter"
      :filter-schema="contentList.filterSchema"
      :table="contentList.table"
      :pagination="contentList.pagination"
      @filter-change="fetchData"
    >
    </ContentList>


    <h2>RemoteSelect</h2>
    <RemoteSelect
      :filter="remoteSelect.filter"
      :filter-schema="remoteSelect.filterSchema"
      :table="remoteSelect.table"
      :pagination="remoteSelect.pagination"
      @filter-change="fetchData"
      @row-selection-change="handleTableRowSelectionChange"
      @all-row-selection-change="handleTableAllRowSelectionChange"
    />
  </div>
</template>

<script>
import _ from "gateschema";
import { createOperationRender } from "@/lib/utils/component";
import Breadcrumb from "@/lib/components/Breadcrumb.vue"
import ActionList from "@/lib/components/ActionList.vue";
import Table from "@/lib/components/Table.vue"
import ContentList from "@/lib/components/ContentList.vue";
import GateSchemaForm from "@/lib/components/GateSchemaForm.vue";
import TagNav from "@/lib/components/TagNav.vue"
import RemoteSelect from "@/lib/components/RemoteSelect.vue"

export default {
  name: "app",
  components: {
    Breadcrumb,
    Table,
    ActionList,
    ContentList,
    GateSchemaForm,
    TagNav,
    RemoteSelect,
  },
  data() {
    return {
      breadcrumb: [
        {
          name: '首页',
          to: {name: 'home'}
        },
        {
          name: '文章管理',
        },
        {
          name: '创建文章',
          to: {name: 'article'}
        }
      ],
      itemForCreate: {},
      actions: {
        handleCreate: {
          type: "primary",
          text: "创建"
        }
      },
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
              item: 5,
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
              render: createOperationRender(this, {
                handleRead: "查看",
                handleEdit: "编辑",
                handleDelete: "删除"
              })
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
        },
        pagination: {
          currentPage: 3,
          total: 200
        }
      },
      schemaOfCreation: _.map({
        avatar: _.o.string.other("form", {
          component: "Upload"
        })
      }),
      remoteSelect: {
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
              item: 5,
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
          selected: [],
          useSelection: true
        },
        pagination: {
          currentPage: 3,
          total: 200
        }
      }
    };
  },
  methods: {
    fetchData() {
      console.log(this.contentList.pagination);
      console.log(this.contentList.filter);
      console.log("fetchData");
    },
    handleRead(params) {
      console.log('read', params)
    },
    handleEdit(params) {
      console.log('edit', params)
    },
    handleDelete(params) {
      console.log('delete', params);
    },
    handleTableRowSelectionChange({index, row}, value) {
      const table = this.remoteSelect.table
      if (value) {
        table.selected = table.selected.concat(index)
      } else {
        table.selected = table.selected.filter((item) => item !== index)
      }
    },
    handleTableAllRowSelectionChange(value) {
      if (value) {
        this.remoteSelect.table.selected = this.remoteSelect.table.data.map((_, index) => index)
      } else {
        this.remoteSelect.table.selected = []
      }
    }
  }
};
</script>

<style>
</style>
