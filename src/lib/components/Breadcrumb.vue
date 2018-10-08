<template>
  <Breadcrumb>
    <BreadcrumbItem 
      v-for="(item, index) in items" 
      :key="index"
      :to="item.to"
    >
      {{ item.name }}
    </BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
import { Breadcrumb, BreadcrumbItem } from 'element-ui'
export default {
  components: {
    Breadcrumb,
    BreadcrumbItem
  },
  props: ['items']
}
</script>