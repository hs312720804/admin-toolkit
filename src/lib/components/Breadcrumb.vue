<template>
  <el-breadcrumb>
    <el-breadcrumb-item
      v-for="(item, index) in items"
      :key="index"
      :to="item.to"
    >
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
import { Breadcrumb, BreadcrumbItem } from 'element-ui'
export default {
  components: {
    'el-breadcrumb': Breadcrumb,
    'el-breadcrumb-item': BreadcrumbItem
  },
  props: ['items']
}
</script>
