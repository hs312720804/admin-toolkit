<template>
  <div class="tag-nav">
    <el-button class="tag-nav__btn tag-nav__left" icon="el-icon-arrow-left" @click="handleScroll('left')"></el-button>

<el-dropdown split-button class="tag-nav__btn tag-nav__right" @click="handleScroll('right')">
  <i class="el-icon-arrow-right"></i>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item @click.native="handleCloseOther">关闭其它</el-dropdown-item>
    <el-dropdown-item @click.native="handleCloseAll">关闭所有</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

    <div 
      ref="viewPort"
      class="tag-nav__view-port">
      <ul 
        class="tag-nav__list"
        ref="tagList"
        :style="{'margin-left': -cursor + 'px'}"
      >
        <li 
          v-for="(item, index) in tags" 
          :class="{
            'tag-nav__item': true,
            'tag-nav__item--active': item.name === $route.name
          }"
          :key="index" 
          @click="handleNavigate(item)"
        >
          <span class="tag-nav__dot"></span>
          <span class="tag-nav__text">{{ getTitle(item) }}</span>
          <i class="el-icon-close tag-nav__close-item" @click.stop="handleClose(item)"></i>
        </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
      cursor: 0
    }
  },
  props: {
    defaultPath: {
      type: String,
      default: '/'
    }
  },
  watch: {
    $route: 'handleRouteChange'
  },
  methods: {
    getTitle({meta, name}) {
      return (meta && meta.title) || name
    },
    handleNavigate(route) {
      this.$router.push(route.fullPath)
    },
    handleClose(route) {
      const currentRoute = this.$route
      const tags = this.tags
      const index = tags.indexOf(route)
      tags.splice(index, 1)
      const length = tags.length
      const defaultPath = this.defaultPath
      if (length === 0) {
        this.$router.push(defaultPath)
      } else if (currentRoute.name === route.name) {
        // 把后面一个激活
        // 如果后面一个不存在，
        // 如果当前不是第一个,则激活前一个
        const activeRoute = index < length
          ? tags[index]
          : index > 0
            ? tags[index-1] 
            : undefined
        const path = activeRoute ? activeRoute.fullPath : defaultPath
        this.$router.push(path)
      }
    },
    handleCloseOther() {
      this.tags = []
      this.addTag(this.$route)
    },
    handleCloseAll() {
      this.tags = []
      this.$router.push(this.defaultPath)
    },
    handleScroll(side) {
      const { viewPort, tagList } = this.$refs
      const listWidth = tagList.scrollWidth
      const value = (side === 'left' ? (-1) : 1) * Math.max(200, (listWidth/4))
      const navViewPortWidth = viewPort.clientWidth
      const maxValue= listWidth - navViewPortWidth
      const minValue = 0
      this.cursor = Math.max(minValue, Math.min(this.cursor + value, maxValue))
    },
    handleRouteChange(route) {
      this.addTag(route)
    },
    addTag(route) {
      const meta = route.meta
      if (!meta || meta.hideInNav !== false) {
        const item = this.tags.find((item) => item.name === route.name)
        if (!item) {
          this.tags.push(route)
        }
      }
    },
    scrollIntoView() {
      const activeItem = this.$el.querySelector('.tag-nav__item--active')
      if (activeItem) {
        activeItem.scrollIntoViewIfNeeded()
      }
    }
  },  
  mounted() {
    if (this.$route) {
      this.addTag(this.$route)
    }
    this.$nextTick(this.scrollIntoView)
  }
}
</script>

<style lang="stylus" scoped>
.tag-nav
  position relative
  padding 0 50px
  background #f0f0f0
  overflow hidden
  font-size 12px

.tag-nav__view-port
  overflow hidden

.tag-nav__list
  position relative
  height 40px
  padding 0
  margin 0
  border-bottom 1px solid #f0f0f0
  border-top 1px solid #f0f0f0
  user-select none
  white-space nowrap
  transition margin-left .2s ease

.tag-nav__item
  position relative
  display inline-block
  height 32px
  padding 0 30px 
  margin 4px 0 0 5px
  background #fff
  cursor pointer 

.tag-nav__dot
  position absolute
  top 50%
  left 10px
  height 12px
  width 12px
  margin-top -6px 
  border-radius 6px
  background #f0f0f0
  transition background .2s ease

.tag-nav__close-item
  position absolute
  top 50%
  right 10px
  margin-top -6px 
  opacity 0.5
  &:hover
    opacity 1

.tag-nav__text
  line-height 32px

.tag-nav__item--active
  .tag-nav__dot
    background #2d8cf0

.tag-nav__btn
  position absolute
  height 100%
  z-index 1
  >>> .el-button-group
  >>> .el-button
    height 100%

.tag-nav__left
  left 0
.tag-nav__right
  right 0
  >>> .el-dropdown__caret-button::before
    background #eee
</style>