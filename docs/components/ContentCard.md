# 标题返回
`ContentCard`   
在模版中是 content-card 组件

## 示例  
### 效果  

<Demo>
  <ContentCardDemo/>
</Demo>

### 代码  
```vue
<template>
  <div>
    <el-button type="primary" v-show="isShowMainPage" @click="openTableList">打开表格</el-button>
    <div v-show="!isShowMainPage"></div>
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



```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| title | String | 标题 |见上面例子 |
## 事件
| 名称 | 描述 | 例子 |  
| ---- | ---- | ---- |
| go-back | 返回按钮出发的事件 |见上面例子 |
<Comment />