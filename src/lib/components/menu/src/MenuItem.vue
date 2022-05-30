<template>
  <div>
    <template v-for="(item, index) in items">
      <el-submenu
        v-if="item.children && item.children.length > 0"
        :key="item.route"
        :index="index + ''"
      >
        <template slot="title">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <!-- 递归调用自己 -->
        <menu-item :items="item.children" :path="item.path"></menu-item>
      </el-submenu>
      <el-menu-item v-else :key="item.route" :index="item.route">
        <template v-if="item['path']">
          <a
            slot="title"
            :href="item.path.substring(0, 1) === '/' ? item['path'] : aHref + item.path"
            onclick="return false;"
            class="route-link"
          >
            <i v-if="item.icon" :class="item.icon"></i>{{ item.title }}
          </a>
        </template>
        <template v-else>
          <i v-if="item.icon" :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    },
    path: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      aHref: ''
    }
  },
  created () {
    if (this.$router.mode === 'hash') {
      if (this.path === '/') {
        this.aHref = '#/'
      } else {
        this.aHref = this.path
          ? this.path.substring(0, 1) === '/'
            ? `#${this.path}/`
            : `#/${this.path}/`
          : `#/`
      }
    } else {
      if (this.path === '/') {
        this.aHref = '/'
      } else {
        this.aHref = this.path
          ? this.path.substring(0, 1) === '/'
            ? `${this.path}/`
            : `/${this.path}/`
          : `/`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
a.route-link
  color inherit
  text-decoration none
  display block
</style>
