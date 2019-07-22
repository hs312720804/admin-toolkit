<template>
  <div>
    <DataForm label-width="120px" :readonly="isReadonly"> 
      <Boolean type="switch" label="是否正式员工" v-model="form.isRegular" />
      <Boolean label="" v-model="form.isIn">
        参加活动
      </Boolean>
    </DataForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReadonly: false,
      form: {
        isRegular: 1,
        isIn: 0
      }
    }
  }

}
</script>
