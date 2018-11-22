<script>
import createStateForm from "@stateform/element";
import "@stateform/element/dist/stateform-element.css";
import { createForm } from "gateschema-form-vue";
const StateForm = createStateForm({
  upload: {
    handleUpload() {
      if (this.$upload) {
        return this.$upload.upload.apply(this, arguments)
      }
    },
    handleRemove() {
      if (this.$upload && this.$upload.remove) {
        return this.$upload.remove.apply(this, arguments);
      }
    }
  }
});
const GateSchemaForm = createForm({
  StateForm
});
export default GateSchemaForm;
</script>
