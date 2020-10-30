<template>
  <div>
    <c-lazy-remote-select
      v-model="id"
      :filter="filter"
      :primaryKey="primaryKey"
      :optionsMap="optionsMap"
      :serviceName="serviceName"
      :filterable="true"
      :clearable="true"
      ref="commonLazySelect"
    ></c-lazy-remote-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      filter: {
        name: ''
      }, // 查询条件
      optionsMap: {
        key: 'id',
        label: 'name'
      }, // 接口返回格式化options
      primaryKey: 'id', // select的唯一标示
      serviceName: '' // 接口请求名称
    }
  }
}
</script>
