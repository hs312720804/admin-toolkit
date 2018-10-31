<template>
  <div>
    <Button type="primary" @click="handleSelectStart">
      {{ title }}
    </Button>
    <Dialog
      :title="title"
      :visible.sync="showDialog" 
      width="90vw"
    >
      <slot name="selected">
        <div class="selected">
          <span class="selected__tip">已选择: </span>
          <Tag
            v-for="item in selected"
            closable
            :key="item.id"
            @close="handleRemoveSelected(item)"
          >
            {{item.label}}
          </Tag>
        </div>
      </slot>
      <slot></slot>
      <div slot="footer" class="dialog-footer">
        <Button style="float:left" type="danger" @click="handleClearSelected">清除已选</Button>
        <Button @click="handleSelectCancel">取 消</Button>
        <Button type="primary" @click="handleSelectEnd">确 定</Button>
      </div>
    </Dialog>
  </div>
</template>
<script>
import {Button, Tag, Dialog} from 'element-ui'
export default {
  components: {
    Button,
    Dialog,
    Tag,
  },
  props: {
    title: {
      type: String,
      default() {
        return '选择'
      }
    },
    selected: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      showDialog: false,
    }
  },
  methods: {
    handleSelectStart() {
      this.showDialog = true
      this.$emit('select-start')
    },
    handleSelectEnd() {
      this.showDialog = false
      this.$emit('select-end')
    },
    handleSelectCancel() {
      this.showDialog = false
      this.$emit('select-cancel')
    },
    handleRemoveSelected(item) {
      this.$emit('select-remove', item)
    },
    handleClearSelected() {
      this.$emit('select-clear')
    }
  }
}
</script>
<style lang="stylus" scoped>
.selected >>> .el-tag 
  margin-left 10px
.selected__tip
  display inline-block
  height 24px
  line-height 22px
</style>