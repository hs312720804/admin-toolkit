<template>
  <div>
    <OrderableTable 
      :header="table.header" 
      v-model="table.data">
    </OrderableTable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: {
        header: [],
        data: [
          {
            id: '1',
            name: 'foo'
          },
          {
            id: '2',
            name: 'bar'
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
