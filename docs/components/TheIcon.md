# 图标组件
`TheIcon`   
图标组件依赖于阿里图标库，所以需要引入iconfont.css样式

## 示例  
### 效果  

<Demo>
  <TheIconDemo/>
</Demo>

### 代码  
```vue
<template>
  <div>
    <div v-show="isShowMainPage">
      <el-form :inline="true"  class="demo-form-inline">
        <el-form-item label="选择图标">
          <el-input v-model="iconName" placeholder="选择图标"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="selectIcon">选择图标</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-show="!isShowMainPage">
      <TheIcon @get-icon="getIcon" :title="title" @go-back="goBack"></TheIcon>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowMainPage: true,
      iconName: "",
      title: '选择图标'
    };
  },
  methods: {
    selectIcon() {
      this.isShowMainPage = false;
    },
    /**  
     * 得到icon
    */
    getIcon(iconName) {
      this.iconName = iconName;
      this.isShowMainPage = true;
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
| get-icon | 得到图标icon值 |见上面例子 |
<Comment />