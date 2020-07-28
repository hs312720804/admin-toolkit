<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly"> 
      <Number label="年龄" v-model="form.age" />
    </c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReadonly: false,
      form: {
        age: 22,
      }
    }
  }

}
</script>
