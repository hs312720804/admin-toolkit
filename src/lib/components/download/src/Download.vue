<template>
  <div>
    <a :href="downloadUrl" download ref="download_Url"></a>
    <el-button :type="buttonType" class="download" @click="downloadData">
      <slot/>
    </el-button>
  </div>
</template>
<script>
export default {
  name: 'CDownload',
  props: {
    downloadUrl: {
      type: String
    },
    buttonType: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    downloadData () {
      this.$emit('download-data')
    }
  },
  watch: {
    downloadUrl: function (newValue, oldValue) {
      this.$nextTick(() => {
        this.$refs.download_Url.click()
      })
    }
  }
}
</script>
