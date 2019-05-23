<template>
  <div>
    <ul>
      <li class="item" v-for="(item,index) in items" :key="index + Math.random().toString()">
        <InputOrder :value="index + 1" @input="handleInputOrder(index, $event)" /> {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 'foo',
          name: 'foo',
        },
        {
          id: 'bar',
          name: 'bar'
        }
      ]
    }
  },
  methods: {
    handleInputOrder(index, order) {
      const dataList = this.items
      if (order > dataList.length) {
          order = dataList.length
      }
      const newIndex = order - 1
      const oldIndex = index
      const item = dataList[oldIndex]
      dataList.splice(oldIndex, 1)
      this.items = [].concat(dataList.slice(0, newIndex), item, dataList.slice(newIndex))
    }
  }
}
</script>

<style lang="stylus" scoped>
.item >>> .el-input
  width 100px
  display inline-block
</style>
