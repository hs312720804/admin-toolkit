<script>
export default {
  name: 'CForm',
  provide () {
    return {
      dataForm: this
    }
  },
  props: ['readonly'],
  render (h) {
    return h('el-form', {
      ref: 'form',
      class: this.readonly ? 'data-form data-form__readonly' : 'data-form',
      props: {
        ...this.$attrs
      }
    }, this.$slots.default)
  }
}
</script>

<style lang="stylus" scoped>
.data-form
  >>>.form-label-tip
    margin-left 5px
</style>
