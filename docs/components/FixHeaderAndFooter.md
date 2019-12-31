# 头尾固定
`FixHeaderAndFooter`
新增编辑页面当内容超过可视窗口时，希望头尾固定，中间内容滚动
备注：该组件的直接父组件需要为相对定位，并且高度为100vh

## 示例
### 效果

<Demo>
  <FixHeaderAndFooterDemo/>
</Demo>

### 代码
```vue
<template>
  <FixHeaderAndFooter @go-back="$emit('go-back')">
   <div slot="actions">
     <el-button type="text"  size="mini" icon="el-icon-back" @click="$emit('go-back')">返回</el-button>
   </div>
   <div slot="title">
       标题
   </div>
    <div>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
测试</br>
    </div>
    <div class="sub-foot" slot="footer">
        <el-button
          type="success"
          @click="saveForm('draft')"
        >保存草稿</el-button>
        <el-button
          type="primary"
          @click="saveForm()"
        >提交审核
        </el-button>
    </div>
  </FixHeaderAndFooter>
</template>
<script>
import FixHeaderAndFooter from '../lib/components/FixHeaderAndFooter'
export default {
  components: {
    FixHeaderAndFooter
  },
  data () {

  }
}
</script>
<style lang="stylus" scoped>

</style>


```

## 属性
| 名称 | 类型 | 描述 | 例子 |
| ---- | ---- | ---- | ---- |
| FixHeaderAndFooter | String | 头尾固定 |见上面例子 |
<Comment />
