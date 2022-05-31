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
        <menu-item :items="item.children"></menu-item>
      </el-submenu>
      <el-menu-item v-else :key="item.route" :index="item.route">
        <template v-if="isRightClick">
          <router-link
            slot="title"
            onclick="return false;"
            class="route-link"
            :to="{name: item.route}"
          >
            <i v-if="item.icon" :class="item.icon"></i>{{ item.title }}
          </router-link>
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
    isRightClick: {
      type: Boolean,
      default: true
    }
  },
  created () {
  }
}
</script>

<style lang="stylus" scoped>
a.route-link
  color inherit
  text-decoration none
  display block
</style>
