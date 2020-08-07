<template>
  <div>
  <AddFormObj :formList="form.formList"></AddFormObj>
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
