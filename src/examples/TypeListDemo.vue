<template>
  <div>
    <div><el-button type="primary" icon="el-icon-edit" @click="clickEdit">{{eidtText}}</el-button></div>
    <TypeList :tagData="datas" :defaultProps="defaultProps" @currData="getNodeData" @clickTypeHandler="clickTypeHandler" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      eidtText: '编辑',
      datas: [{
          createdDate: "2019-05-17 13:09:20",
          lastUpdateDate: "2019-05-17 13:08:08",
          level: 1,
          modifier: 96,
          nodeType: 0,
          parentCode: "-1",
          path: "1",
          tagCnName: "媒资",
          tagCode: "1",
          tagId: 1,
          tagStatus: 1,
          videoCount: 0
      },
      {
          createdDate: "2019-05-27 17:12:34",
          lastUpdateDate: "2019-05-17 13:04:49",
          level: 1,
          modifier: 96,
          nodeType: 0,
          parentCode: "-1",
          path: "4",
          tagCnName: "应用",
          tagCode: "4",
          tagId: 4,
          tagStatus: 1,
          videoCount: 0
      },
      {
          createdDate: "2019-05-27 17:12:32",
          lastUpdateDate: "2019-05-06 10:53:49",
          level: 1,
          nodeType: 0,
          parentCode: "-1",
          path: "9",
          tagCnName: "购物",
          tagCode: "9",
          tagId: 9,
          tagStatus: 1,
          videoCount: 0
      }],
      defaultProps: {
        children: 'children',
        label: 'label',
        id: 'id',
        isShowCheckBox: false
      }
    };
  },
  methods: {
    clickEdit() {
      this.defaultProps.isShowCheckBox = !this.defaultProps.isShowCheckBox
      if (this.defaultProps.isShowCheckBox) this.eidtText = '退出'
      else this.eidtText = '编辑'
    },
    getNodeData(data) {
      console.log(data)
    },
    clickTypeHandler(node) {
    	console.log(node)
    }
  }
};
</script>

<style lang="stylus">
.tree-type div.is-current > .el-tree-node__content
  color #fff
  background #57b0f7

.tree-type .is-out-icon, .tree-type .is-down-icon, .tree-type .is-show-icon
    display  inline-block
    text-indent 24px
    width  20px
    height  20px
    line-height  20px
    vertical-align  middle
    background-image  url(../assets/imgs/folder-closed-grey.png)
    background-size  cover

.tree-type .is-down-icon 
    background-image url(../assets/imgs/folder-closed-blue.png)
.tree-type .is-show-icon 
    background-image url(../assets/imgs/folder-closed-green.png)

</style>