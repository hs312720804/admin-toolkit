<template>
  <div>
    <el-button type="primary" v-show="isShowMainPage" @click="openTableList">打开表格</el-button>
    <div v-show="!isShowMainPage">
      <content-card :title="title" @go-back="goBack">
        <table-demo></table-demo>
      </content-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowMainPage: true,//当为true时，展示主页
      title: '表格列表'
    };
  },
  methods: {
    /**  
     * 打开表格列表页面
    */
    openTableList() {
      this.isShowMainPage = false;
    },
    /** 
     * 返回
    */
    goBack() {
       this.isShowMainPage = true;
    }
  }
};
</script>

