<template>
  <div>
    <DownloadFile @download-data="downloadData" :downloadUrl="downloadUrl">下载真实数据</DownloadFile>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      downloadUrl: null
    };
  },
  methods: {
    downloadData() {
      debugger;
      axios.get('./../assets/fakeData.xlsx').then((res) => {
        debugger;
      })
      // this.$service.downloadRareData(this.filterForRare).then(data => {
      //   this.downloadUrl = "admin-api/remember/export?sign=" + data.sign;
      // });
    }
  }
};
</script>

