<template>
   <div class="action-list">
       <Button
            v-for="(item, key) in actions"
            :key="key"
            :type="item.type"
            @click="owner[key]()"
        >
           {{ item.text }}
       </Button>
   </div>
</template>

<script>
import { Row, Button } from 'element-ui'
export default {
  components: {
    Row,
    Button
  },
  inject: {
    actionOwner: {
      default: null
    }
  },
  props: ['actions', 'target'],
  computed: {
    owner () {
      return this.actionOwner || this.target || this.$parent
    }
  },
  watch: {
    actions: function (newV,oldV) {
      debugger;
      this.actions = newV
    }
  }
}
</script>
<style lang="stylus" scoped>
.action-list
    display flex
    flex-direction row
    justify-content flex-end
</style>
