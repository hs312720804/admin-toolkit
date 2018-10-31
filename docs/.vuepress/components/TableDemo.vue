<template>
  <Table 
    :props="props"
    :header="header"
    :data="data"
    :selected="selected"
    :useSelection="useSelection"
    @row-selection-change="handleRowSelectionChange"
    @all-row-selection-change="handleAllRowSelectionChange"
  />
</template>

<script>
export default {
  data() {
    return {
      props: {
        border: true,
      },
      header: [
        {
          label: "ID",
          prop: "id",
          sortable: false
        },
        {
          label: "名称",
          prop: "name",
          sortable: true
        }
      ],
      data: [
        {
          id: "1",
          name: "名称1"
        },
        {
          id: "2",
          name: "名称2"
        }
      ],
      selected: [],
      useSelection: true
    }
  },
  methods: {
    handleRowSelectionChange({index}, value) {
      if (value) {
        this.selected = this.selected.concat(index)
      } else {
        this.selected = this.selected.filter(item => item !== index)
      }
    },
    handleAllRowSelectionChange(value) {
      if (value) {
        this.selected = this.data.map((_, index) => index)
      } else {
        this.selected = []
      }
    }
  }
}
</script>

