# 序号输入  
用于输入序号然后调整数据的顺序， 封装了对序号的格式控制，以及输入非法序号时还原圆数据  

## 示例  
<Demo>
  <InputOrderDemo />
</Demo>

### 代码
``` vue
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


```

## 属性  
| 名称 | 类型 | 描述 | 例子 |
| ---- | ---- | ---- | ---- |
| value | String | 输入的排序值 | ---- |
## 事件  
| 名称 | 参数 |描述| 例子 |  
| ---- | ---- | ---- | ---- |
| input | value | 实际的排序值 | ---- |

<Comment />