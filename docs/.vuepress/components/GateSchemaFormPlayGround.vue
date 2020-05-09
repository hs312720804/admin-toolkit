<template>
  <div class="wrapper">
    <div class="quick-demo">
      示例 
      <el-button @click="schemaText=postSchemaText">文章表单</el-button>
      <el-button @click="schemaText=uploadSchemaText">上传表单</el-button>
      <el-button @click="schemaText=loginSchemaText">登录</el-button>
    </div>
    <textarea
      :class="{
        code: true,
        'code--error': isError
      }"
      v-model="schemaText" 
      @keydown.tab.prevent="tabber($event)"
    />
    <div class="form">
      <GateSchemaForm :schema="schema" v-model="formData" />
    </div>
  </div>
</template>
<script>
import _ from 'gateschema'
const postSchemaText = `_.map({
  title: _.required.string,
  content: _.required.string.other('form', {
    type: 'textarea'
  })
})
`

const loginSchemaText = `_.map({
    name: _.required.string.notEmpty.other("form", {
      placeholder: "User Name"
    }),
    password: _.required.string.notEmpty.other("form", {
      type: "password",
      placeholder: "Password"
    }),
    rememberme: _.optional.boolean.other("form", {
      hidden: true
    })
  })
  .other("form", {
    footer: {
      showSubmit: true,
      submitText: "Login"
    },
    cols: {
      label: 0,
      wrapper: 24
    }
  });
`

const uploadSchemaText = `_.map({
    image: _.required
      .$msg("Please upload a file")
      .string.notEmpty.other("form", {
        component: "Upload",
        listType: "picture"
      }),
    imageList: _.list(_.string).other("form", {
      component: "UploadList",
      listType: "picture"
    })
  })
  .other("form", {
    cols: {
      label: 6,
      wrapper: 18
    }
  });
` 

export default {
  data() {
    return {
      formData: {},
      schemaText: postSchemaText,
      schema: null,
      isError: false,
      loginSchemaText,
      uploadSchemaText,
      postSchemaText,
    }
  },
  watch: {
    'schemaText': 'updateSchema'
  },
  methods: {
    updateSchema(value) {
      try {
        this.schema = (new Function('_', 'return ' + value))(_)
        this.isError = false
      } catch(e) {
        this.isError = true
      }
    },
    tabber (event) {
      if (event) {
        event.preventDefault()
        const target = event.target
        const { selectionStart, selectionEnd } = target
        const start = target.selectionStart
        let startText = this.schemaText.slice(0, selectionStart)
        let endText = this.schemaText.slice(selectionStart)
        this.schemaText = `${startText}  ${endText}`
        this.$nextTick(()=> {
          target.selectionEnd = selectionStart + 1
        })
      }
    }
  },
  created() {
    this.updateSchema(postSchemaText)
  }
}
</script>
<style lang="stylus">
.quick-demo
  margin 10px 0
.code
  width 100%
  padding 10px
  min-height 200px
.code--error
  border 1px solid red
  background #f9d2d25c
.form 
  margin-top 10px
  padding 10px
  width 100%
  border 1px solid #ccc
</style>
