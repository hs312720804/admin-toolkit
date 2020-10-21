<template>
  <div class="step-row">
    <el-card class="step-card" shadow="never">
      <div :class=" item.status === '1' ? 'step-block create active' : item.status === '0' ? 'step-block create forbidden' : 'step-block create complete'" v-for="(item,index) in stepList" :key="index">
        <div class="main-title">
          <div :class="item.status === '1' ? 'nav-icon is-active' : item.status === '0' ? 'nav-icon' : 'nav-icon is-complete'">
            <template v-if="item.status !== '2'">{{index + 1}}</template>
            <template v-else><i class="el-icon-check"></i></template>
          </div>
          <span :class="item.status === '1' ? 'is-active' : ''">{{item.parent}}</span>
        </div>
        <div :class="index === stepList.length - 1 ? 'sub-title'  : 'sub-title sub-title-dashed' ">
          <ul>
          <li :class="child.status === '1' ? 'active' : '' " v-for="(child,index) in item.children" :key="index" @click="getStep(child)">
            {{child.label}}
          </li>
        </ul>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  // props: [ 'stepList' ],
  name: 'CAnchorStep',
  props: {
    stepList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      active: 1,
      step: [
        {
          parent: '步骤1',
          status: '0',
          children: [
            {
              label: '订单设置',
              status: '0'
            }]
        },
        {
          parent: '步骤2',
          status: '0'
        }
      ]
    }
  },
  methods: {
    getStep (e) {
      this.$emit('stepChange', e)
    }
  },
  created () {
  }
}
</script>

<style lang="stylus" scoped>
.step-row
  width 200px
  background #ffffff
>>>.el-card
  height 100%
  border-radius 0px
.step-row.step-card
  position absolute
  overflow auto
  height 100%
  overflow-y auto
  overflow-x hidden
.step-card>>>.el-card__body
  padding 0px
.step-block
  user-select none
  padding 16px 0px 0 24px
.main-title
  position: relative;
  color #666
  font-size 16px
  font-weight 600
  margin-bottom 16px
  height 22px
.nav-icon
  display inline-block
  width 20px
  height 20px
  text-align center
  line-height 20px
  border 1px solid #000
  border-radius 50%
.step-block .main-title span
  font-size 14px
  padding-left 8px
  position absolute
  top 3px
  left 26px
.sub-title
  margin-left 5px
  padding 1px 0 1px 0px
.step-block .sub-title-dashed
  background-repeat repeat-y
  background-image radial-gradient(#598FE6 15%, transparent 0),radial-gradient(#598FE6 15%, transparent 0)
  background-size 14px 14px
.step-block.active.sub-title-dashed
  background-repeat repeat-y
  background-image radial-gradient(#ccc 15%, transparent 0),radial-gradient(#ccc 15%, transparent 0)
  background-size 14px 14px
ul
  margin 0 0 0 20px
  padding 0 0 0 9px
.sub-title ul li
  font-weight 300
  color #C1C1C1
  // cursor not-allowed
  list-style none
  margin-bottom 13px !important
  display block
  text-decoration: none
  color #C1C1C1
  font-size 14px
.step-block .sub-title ul li:last-child
  margin-bottom 0px !important
.step-block .main-title .nav-icon.is-active
  color #FF8B00
  border-color #FF8B00
.step-block.complete .main-title .nav-icon.is-complete
  color #FF8B00
  border-color #FF8B00
.step-block .main-title span.is-active
  color #FF8B00
.step-block.active .sub-title li.active
  color #ff8b00
.step-block.active .sub-title li
  cursor pointer
</style>
