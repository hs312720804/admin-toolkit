(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{308:function(e,t,a){"use strict";a.r(t);var r=a(298),n=a.n(r),i={data:function(){return{filter:{},filterSchema:n.a.map({id:n.a.o.string.other("form",{placeholder:"请输入 id",cols:{item:5,label:6,wrapper:16,xsLabel:0,xsWrapper:24}}),name:n.a.o.string.other("form",{placeholder:"请输入 name",cols:{item:7,label:8,wrapper:16,xsLabel:0,xsWrapper:{offset:2,span:22}}})}).other("form",{layout:"inline",footer:{cols:{label:0,wrapper:24},showSubmit:!0,submitText:"查询"}}),tableHeader:[],pagination:{currentPage:3,total:25},table:{props:{border:!0},header:[{label:"ID",prop:"id",sortable:!1},{label:"名称",prop:"name",sortable:!0}],data:[{id:"1",name:"名称1"},{id:"2",name:"名称2"}],selection:"multiple",selected:[]}}},methods:{handleEdit:function(e){var t=e.$index;this.$message("编辑第".concat(t+1,"条记录"))},handleRead:function(e){var t=e.$index;this.$message("阅读第".concat(t+1,"条记录"))},handleDelete:function(e){var t=e.$index;this.$message("删除第".concat(t+1,"条记录"))},fetchData:function(){this.$message("数据过滤条件已改变, 这是会重新拉去数据")}}},l=a(0),o=Object(l.a)(i,function(){var e=this.$createElement,t=this._self._c||e;return t("ContentWrapper",{attrs:{filter:this.filter,filterSchema:this.filterSchema,pagination:this.pagination},on:{"filter-change":this.fetchData}},[t("Table",{attrs:{props:this.table.props,header:this.table.header,data:this.table.data}})],1)},[],!1,null,null,null);o.options.__file="ContentWrapperDemo.vue";t.default=o.exports}}]);