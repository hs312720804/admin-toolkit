<template>
  <div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="初始化图标" name="first">
    <TheInitIconDemo></TheInitIconDemo>
    </el-tab-pane>
    <el-tab-pane label="自定义图标" name="second">
      <TheCustomIconDemo></TheCustomIconDemo>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
import TheCustomIconDemo from './TheCustomIconDemo'
import TheInitIconDemo from './TheInitIconDemo'
export default {
  components: {
    TheCustomIconDemo,
    TheInitIconDemo
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick () {
    }
  }
}
</script>
