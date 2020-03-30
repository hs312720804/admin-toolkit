<template>
  <AddFormObj :formList="form.formList"></AddFormObj>
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
