# 文件下载
`DownloadFile`   
通过接口请求数据，然后触发下载

## 示例  
### 效果  

<Demo>
  <DownloadFileDemo/>
</Demo>

### 代码  
```vue
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
       this.downloadUrl = 'http://172.20.155.102/fakeData.xlsx?_r='+Math.random()
       /** 
        * 注释的代码是接口请求的例子
       */
      // this.$service.downloadRareData(this.filterForRare).then(data => {
      //   this.downloadUrl = "admin-api/remember/export?sign=" + data.sign;
      // });
    }
  }
};
</script>


```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| downloadUrl | String | 下载地址 |见上面例子 |
## 事件
| 名称 | 参数 | 描述 |  
| ---- | ---- | ---- |
| download-data | 无 |当用户点击按钮触发 |
<Comment />