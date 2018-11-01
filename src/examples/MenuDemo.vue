<template>
  <Menu 
    :items="menu" 
  />
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          "title":"导航一",
          "icon":"el-icon-location",
          "route":"nav1"
        },
        {
          "title":"分组一",
          "icon":"el-icon-menu",
          "children":[
            {
              "title":"导航二",
              "route":"nav2"
            }
          ]
        }
      ]
    }
  }
}
</script>