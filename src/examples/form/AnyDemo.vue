<template>
  <div>
    <DataForm label-width="120px" :readonly="isReadonly"> 
      <Any label="是否已婚">
        <el-switch slot="edit" :value="!!form.isMarried" @input="form.isMarried = $event ? 1 : 0"></el-switch>
        <span slot="read">{{ form.isMarried ? '是' : '否' }} </span>
      </Any>
    </DataForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReadonly: false,
      form: {
        isMarried: 0
      }
    }
  }
}
</script>
