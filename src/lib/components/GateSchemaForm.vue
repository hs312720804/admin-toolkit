<script>
import createStateForm from "@stateform/element";
import "@stateform/element/dist/stateform-element.css";
import { createForm } from "gateschema-form-vue";
const StateForm = createStateForm({
  upload: {
    handleUpload(file, cb) {
      if (this.$upload) {
        this.$upload.upload(file, cb);
      }
    },
    handleRemove(file) {
      if (this.$upload && this.$upload.remove) {
        this.$upload.remove(file);
      }
    }
  }
});
const GateSchemaForm = createForm({
  StateForm
});
export default GateSchemaForm;
</script>
