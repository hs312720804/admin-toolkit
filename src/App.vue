<template>
  <div id="app">
    <h2>TagNav</h2>
    <TagNav />


    <h2>Breadcrumb</h2>
    <Breadcrumb :items="breadcrumb">
    </Breadcrumb>

    <h2>GateSchemaForm</h2>
    <GateSchemaForm 
      :schema="schemaOfCreation" 
      v-model="itemForCreate"
    >
    </GateSchemaForm>

    <h2>Table</h2>
    <Table 
      :data="table.data" 
      :props="table.props"
      :header="table.header"
    >
    </Table>
    

    <h2>ContentList</h2>
    <ActionList :actions="actions" />
    <ContentWrapper 
      :filter="contentList.filter"
      :filter-schema="contentList.filterSchema"
      :pagination="contentList.pagination"
      @filter-change="fetchData"
    >
      <Table 
        :data="table.data" 
        :props="table.props"
        :header="table.header"
      />
    </ContentWrapper>


    <h2>RemoteSelect</h2>
    <RemoteSelect
      :title="remoteSelect.title" 
      :selected="remoteSelect.selected"
      @selection-remove="handleTableRowSelectionRemove"
      @selection-clear="handleRemoteSelectClear"
    >
      <ContentWrapper
        :filter="remoteSelect.filter"
        :filter-schema="remoteSelect.filterSchema"
        :pagination="remoteSelect.pagination"
        @filter-change="fetchData"
      >
        <Table 
          :data="remoteSelect.table.data" 
          :props="remoteSelect.table.props"
          :header="remoteSelect.table.header"
          :selected="remoteSelect.table.selected"
          :selection-type="remoteSelect.table.selectionType"
          @row-selection-add="handleTableRowSelectionAdd"
          @row-selection-remove="handleTableRowSelectionRemove"
          @all-row-selection-change="handleTableAllRowSelectionChange"
        />
      </ContentWrapper>
    </RemoteSelect>
      <h2>pop</h2>
      <pop
              :title="pop.title">

      </pop>
      <dropdown :droplist = dropdown>

      </dropdown>
  </div>
</template>

<script>
import _ from "gateschema";
import { createOperationRender } from "@/lib/utils/component";
import Breadcrumb from "@/lib/components/Breadcrumb.vue"
import ActionList from "@/lib/components/ActionList.vue";
import Table from "@/lib/components/Table.vue"
import ContentWrapper from "@/lib/components/ContentWrapper.vue";
import GateSchemaForm from "@/lib/components/GateSchemaForm.vue";
import TagNav from "@/lib/components/TagNav.vue"
import RemoteSelect from "@/lib/components/RemoteSelect.vue"
import pop from  "@/lib/components/pop.vue"
import Dropdown from  "@/lib/components/Dropdown.vue"

export default {
  name: "app",
  components: {
    Breadcrumb,
    Table,
    ActionList,
    ContentWrapper,
    GateSchemaForm,
    TagNav,
    RemoteSelect,
    pop,
      Dropdown
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
        title: '选择数据',
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
        selected: [],
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
          selectionType: 'multiple'
        },
        pagination: {
          currentPage: 3,
          total: 200
        }
      },
      pop:{
          title:'弹窗',
      },
        dropdown:[
            {
                name: '首页'
            },
            {
                name: '文章管理',
            },
            {
                name: '创建文章',
            }
        ]
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
    handleTableRowSelectionAdd(targetItem) {
      const remoteSelect = this.remoteSelect
      remoteSelect.selected = remoteSelect.selected.concat({
        id: targetItem.id,
        label: targetItem.name
      })
      this.updateTableSelected()
    },
    handleTableRowSelectionRemove(targetItem) {
      const remoteSelect = this.remoteSelect
      remoteSelect.selected = remoteSelect.selected.filter((item) => {
        return item.id !== targetItem.id
      })        
      this.updateTableSelected()
    },
    updateTableSelected() {
      const remoteSelect = this.remoteSelect
      const table = remoteSelect.table
      const newSelectedIndex = remoteSelect.selected.map(item => item.id)
      table.selected = table.data.reduce((result, item, index)=> {
        if (newSelectedIndex.indexOf(item.id) > -1) {
          result.push(index)
        }
        return result
      }, [])
    },
    handleRemoteSelectClear() {
      this.remoteSelect.selected = []
      this.remoteSelect.table.selected = []
    },
    handleTableAllRowSelectionChange(value) {
      if (value) {
        this.remoteSelect.table.data.forEach(this.handleTableRowSelectionAdd)
      } else {
        this.handleRemoteSelectClear()
      }
    },
  }
};
</script>

<style>
</style>
