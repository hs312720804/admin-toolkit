<template>
  <el-menu
    class="menu"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :defaultActive="defaultActive"
    @select="handleSelect"
    :collapse="isCollapse"
    :mode="mode"
  >
    <MenuItem :items="items"></MenuItem>
  </el-menu>
</template>

<script>
import MenuItem from './MenuItem.vue'
export default {
  name: 'CMenu',
  props: [
    'isCollapse',
    'items',
    'defaultActive',
    'textColor',
    'activeTextColor',
    'backgroundColor',
    'mode'
  ],
  components: {
    MenuItem
  },
  methods: {
    handleSelect (name) {
      this.$router.push({ name }).catch(() => {})
    }
  },
  created () {
    // console.log(this.items)
  }
}
</script>
<style lang="stylus">
.el-submenu .el-menu-item
  padding 0
</style>
