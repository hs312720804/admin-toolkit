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
      :filterSchema="contentList.filterSchema"
      :table="contentList.table"
      :pagination="contentList.pagination"
      @filter-change="fetchData"
    >
    </ContentList>
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

export default {
  name: "app",
  components: {
    Breadcrumb,
    Table,
    ActionList,
    ContentList,
    GateSchemaForm,
    TagNav
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
        tableHeader: [
        ],
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
          ]
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
      })
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
    }
  }
};
</script>

<style>
</style>
