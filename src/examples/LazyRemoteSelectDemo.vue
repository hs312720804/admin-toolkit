<template>
  <div>
  <c-lazy-remote-select
    v-model="selectedValue"
    :filter="filter"
    :primaryKey="primaryKey"
    :optionsMap="optionsMap"
    serviceName="getList"
></c-lazy-remote-select>
{{selectedValue}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedValue: undefined,
      filter: {
        label: ''
      },
      primaryKey: {
        value: ''
      },
      optionsMap: {
        key: 'id',
        label: 'name'
      }
    }
  }
}
</script>
