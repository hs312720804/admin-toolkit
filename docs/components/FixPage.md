# 头尾固定
`FixPage`
新增编辑页面当内容超过可视窗口时，希望头尾固定，中间内容滚动
备注：大部分情况下该组件的直接父组件需要为相对定位，并且高度为100vh，特殊情况特殊处理

## 示例
### 效果

<Demo>
  <FixPageDemo/>
</Demo>

### 代码
```vue
<template>
    <div class="fix-header-footer">
        <div  class="fix-header-footer__header">
          <div class="title">
            <slot name="title">
            </slot>
          </div>
           <div class="actions">
                <slot name="actions">
                    <el-button type="text" @click="$emit('go-back')">返回</el-button>
                </slot>
            </div>
        </div>
        <div class="fix-header-footer__main">
            <slot name="default" />
        </div>
        <div class="fix-header-footer__footer" v-if="$slots.footer">
          <slot name ="footer"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CFixPage',
  data () {
    return {

    }
  },
  created () {

  }
}
</script>
<style lang="stylus" scoped>
.fix-header-footer
  overflow auto
  height 100vh
  padding-bottom 85px
  box-sizing border-box
  display flex
  flex-direction column
  position absolute
  top 0px
  left 0px
  z-index 100
  width 100%
.fix-header-footer__main
  position relative
  padding 20px
  background #fff
  flex 1
  overflow auto
.fix-header-footer__footer
  height 50px
  line-height 50px
  background-color white
  border-top 1px solid #f0f0f0
  .sub-foot
    text-align right
    padding-right 50px
.fix-header-footer__header
  position relative
  height 50px
  text-indent 20px
  line-height 50px
  font-size 18px
  font-weight bold
  border-bottom 1px solid #f0f0f0
  background #fff
  .actions
    padding 0 20px
    float right
  .title
    padding 0 20px
    float left
</style>

```

## 属性
| 名称 | 类型 | 描述 | 例子 |
| ---- | ---- | ---- | ---- |
<!-- | FixHeaderAndFooter | String | 头尾固定 |见上面例子 | -->
## slot
| 名称 | 描述 |
| ---- | ---- |
| default | main 内容 |
| title | header 部分 |
| actions | header右侧动作按钮 |
| footer | footer 部分 |
<Comment />
