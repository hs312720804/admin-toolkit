<template>
  <div>
    <input
      ref="fileField"
      type="file"
      :disabled="disabled"
      :multiple="multiple"
      :accept="accept"
      style="display:none"
      @change="handleUpload"
    />
    <slot name="preview" :file-list="fileList"></slot>
  </div>
</template>
<script>
const STATUS = {
  error: 'error',
  success: 'success',
  uploading: 'uploading'
}
export default {
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
          return rejectError(`文件不够大`)
        }

        if (maxSize !== undefined && fileSize > maxSize) {
          return rejectError('文件太大')
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
                  rejectError('图片高度不符合要求')
                  break
                case minHeight !== undefined && minHeight > imgInfo.height:
                  rejectError('图片高度不符合要求')
                  break
                case maxHeight !== undefined && maxHeight < imgInfo.height:
                  rejectError('图片高度不符合要求')
                  break
                case width !== undefined && width !== imgInfo.width:
                  rejectError('图片宽度不符合要求')
                  break
                case minWidth !== undefined && minWidth > imgInfo.width:
                  rejectError('图片宽度不符合要求')
                  break
                case maxWidth !== undefined && maxWidth < imgInfo.width:
                  rejectError('图片宽度不符合要求')
                  break
                case maxRatio !== undefined && ratio > maxRatio:
                  rejectError('图片尺寸比例不符合要求')
                  break
                case minRatio !== undefined && ratio < minRatio:
                  rejectError('图片尺寸比例不符合要求')
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
      console.log('文件上传。。。。。。。')
      const target = event.target
      const files = [].slice.call(target.files)
      const STATUS = this.STATUS
      if (files.length > 0) {
        target.value = ''
        files.forEach((file) => {
          this.getFileInfo(file).then(fileInfo => {
            const fileListItem = {
              id: Math.random().toString().slice(-15) + Date.now(),
              size: fileInfo.size,
              dataUrl: fileInfo.dataUrl,
              status: STATUS.uploading,
              value: undefined,
              percentage: 0
            }
            this.fileList.push(fileListItem)
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
