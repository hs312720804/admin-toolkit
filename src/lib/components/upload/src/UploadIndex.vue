<template>
  <div>
    <input
      ref="fileField"
      type="file"
      :disabled="disabled"
      :accept="accept"
      style="display:none"
      @change="handleUpload"
    />
    <div class="upload-pic-list">
      <div class="upload-pic-list__add" @click="handleSelectFile()">
        <i class="el-icon el-icon-plus"></i>
      </div>
      <div
        class="upload-pic-list__item"
        v-for="file in fileList"
        :key="file.id"
      >
        <div class="upload-pic-list__error" v-if="file.status === 'error'">
          上传失败: {{ file.message }}
        </div>
        <div
          v-if="file.status === 'uploading'"
          class="upload-pic-list__progress"
        >
          <el-progress
            :width="100"
            type="circle"
            :percentage="file.percentage"
          ></el-progress>
        </div>
        <img v-else :src="file.dataUrl" />
        <i
          v-if="file.status !== 'uploading'"
          class="upload-pic-list__remove el-icon el-icon-close"
          title="移除"
          @click="handleRemove(file)"
        ></i>
      </div>
    </div>
  </div>
</template>
<script>
const STATUS = {
  error: 'error',
  success: 'success',
  uploading: 'uploading'
}
export default {
  name: 'CUpload',
  data () {
    return {
      fileList: [],
      STATUS
    }
  },
  props: {
    accept: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    multiple: {
      type: Boolean
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    maxWidth: {
      type: Number
    },
    minWidth: {
      type: Number
    },
    maxHeight: {
      type: Number
    },
    minHeight: {
      type: Number
    },
    maxRatio: {
      type: Number
    },
    minRatio: {
      type: Number
    },
    maxSize: {
      type: Number
    },
    minSize: {
      type: Number
    }
  },
  methods: {
    handleSelectFile () {
      this.$refs.fileField.click()
    },
    getFileInfo (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = function (e) {
          resolve({
            size: file.size,
            dataUrl: e.target.result
          })
        }
        reader.readAsDataURL(file)
      })
    },
    getImageInfo (dataUrl) {
      return new Promise(function (resolve, reject) {
        var image = new Image()
        image.onload = function () {
          resolve(image)
        }
        image.src = dataUrl
      })
    },
    validateFile (file) {
      return new Promise((resolve, reject) => {
        function rejectError (message) {
          reject(new Error(message))
        }
        const {
          width,
          maxWidth,
          minWidth,
          height,
          maxHeight,
          minHeight,
          maxSize,
          minSize,
          maxRatio,
          minRatio
        } = this

        const fileSize = file.size
        if (minSize !== undefined && fileSize < minSize) {
          return rejectError(this.$t('cMessage.fileNBig'))
        }
        if (maxSize !== undefined && fileSize > maxSize) {
          return rejectError(this.$t('cMessage.fileTooBig'))
        }
        if (
          height !== undefined ||
          minHeight !== undefined ||
          maxHeight !== undefined ||
          width !== undefined ||
          minWidth !== undefined ||
          maxWidth !== undefined ||
          maxRatio !== undefined ||
          minRatio !== undefined
        ) {
          this.getImageInfo(file.dataUrl)
            .then(imgInfo => {
              const ratio = imgInfo.width / imgInfo.height
              switch (true) {
                case height !== undefined && height !== imgInfo.height:
                  rejectError(this.$t('cMessage.imgHeightError'))
                  break
                case minHeight !== undefined && minHeight > imgInfo.height:
                  rejectError(this.$t('cMessage.imgHeightError'))
                  break
                case maxHeight !== undefined && maxHeight < imgInfo.height:
                  rejectError(this.$t('cMessage.imgHeightError'))
                  break
                case width !== undefined && width !== imgInfo.width:
                  rejectError(this.$t('cMessage.imgHeightError'))
                  break
                case minWidth !== undefined && minWidth > imgInfo.width:
                  rejectError(this.$t('cMessage.imgHeightError'))
                  break
                case maxWidth !== undefined && maxWidth < imgInfo.width:
                  rejectError(this.$t('cMessage.imgHeightError'))
                  break
                case maxRatio !== undefined && ratio > maxRatio:
                  rejectError(this.$t('cMessage.imgHeightError'))
                  break
                case minRatio !== undefined && ratio < minRatio:
                  rejectError(this.$t('cMessage.imgHeightError'))
                  break
                default:
                  resolve()
              }
            })
            .catch(reject)
        } else {
          resolve()
        }
      })
    },
    handleUpload (event) {
      const target = event.target
      const files = [].slice.call(target.files)
      const STATUS = this.STATUS
      if (files.length > 0) {
        target.value = ''
        files.forEach(file => {
          this.getFileInfo(file).then(fileInfo => {
            const fileListItem = {
              id:
                Math.random()
                  .toString()
                  .slice(-15) + Date.now(),
              size: fileInfo.size,
              dataUrl: fileInfo.dataUrl,
              status: STATUS.uploading,
              value: undefined,
              percentage: 0
            }
            if (!this.multiple) {
              this.fileList = [fileListItem]
            } else {
              this.fileList.push(fileListItem)
            }
            this.validateFile(fileInfo)
              .then(() => {
                this.$emit('upload', file, fileListItem)
              })
              .catch(err => {
                fileListItem.status = STATUS.error
                fileListItem.message = err.message
              })
          })
        })
      }
    },
    handleRemove (file) {
      this.fileList = this.fileList.filter(item => item !== file)
    }
  }
}
</script>
<style lang="stylus" scoped>
$height = 100px
$width = 100px
.upload-pic-list__progress
  position: absolute
.upload-pic-list__add, .upload-pic-list__item
  height: $height
  width: $width
  margin-right: 10px
  display: inline-block
  vertical-align: top
  border: 1px solid #ccc
.upload-pic-list__add
  cursor: pointer
  i
    position: relative
    top: 50%
    margin: -10px auto
    display: block
    font-size: 20px
    text-align: center
.upload-pic-list__item
  position: relative
  img
    max-width: 100%
    max-height: 100%
.upload-pic-list__error
  position: absolute
  background: #000
  opacity: 0.7
  color: #fff
  width: 100%
  font-size: 12px
  padding: 5px
  display: block
  box-sizing: border-box
.upload-pic-list__remove
  position: absolute
  color: red
  cursor: pointer
  top: 0
  right: 0
</style>
