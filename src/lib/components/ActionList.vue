<template>
   <div class="action-list"> 
       <Button v-for="(item, key) in actions" :key="key" :type="item.type">
           {{ item.text }}
       </Button>
   </div>
</template>

<script>
import { Row, Button } from "element-ui";
export default {
  components: {
    Row,
    Button
  },
  props: ["actions"]
};
</script>
<style lang="stylus" scoped>
.action-list
    display flex
    flex-direction row
    justify-content flex-end
</style>
