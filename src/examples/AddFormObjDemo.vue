<template>
  <div>
  <c-add-form-obj :formList="form.formList"></c-add-form-obj>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        formList: [
          {
            moreMediaList: [
              {
                tyep: 'baoguang',
                value: [
                  {
                    code: '',
                    serviceProvider: ''
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
