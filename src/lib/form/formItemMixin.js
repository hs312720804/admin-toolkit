export default {
  inject: ['dataForm'],
  props: {
    value: {},
    labelWidth: String,
    label: String,
    disabled: Boolean,
    readonly: {},
    prop: String,
    placeholder: String,
    type: String,
    errors: {},
    rules: {}
  },
  computed: {
    isReadonly () {
      const readonly = this.readonly
      if (readonly !== undefined) {
        return readonly
      }
      return this.dataForm.readonly
    }
  }
}
