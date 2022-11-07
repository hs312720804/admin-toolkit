<template>
  <div>
    <el-button type="primary" :disabled="loading" @click="handleExportPDF">
      <template v-if="loading">
        <i class="el-icon-loading"></i>导出中
      </template>
      <span v-else>导出PDF</span>
    </el-button>
    <slot></slot>
  </div>
</template>
<script>
import JsPdf from 'jspdf'
import html2canvas from 'html2canvas'
export default {
  name: 'CExportPdf',
  props: {
    title: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: 'pageData'
    },
    titleClassName: {
      type: String,
      default: 'title'
    },
    marginLeft: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    handleExportPDF () {
      this.loading = true
      const container = document.querySelector('.' + this.className)
      const contentWidth = container.offsetWidth // 页面宽
      let [imgX, imgY] = [595.28, 841.89]
      const pdf = new JsPdf('p', 'pt', 'a4')
      const title = document.querySelector('.' + this.titleClassName)
      const titleHeight = (title.offsetHeight * imgY) / contentWidth // 标题在A4页面的高度
      const pageHeight = (contentWidth / imgX) * imgY - titleHeight
      this.drawImg(title).then(e1 => {
        const pageData = e1.base64Img
        // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        var imgWidth = imgX
        var imgHeight = (imgX / e1.width) * e1.height
        pdf.addImage(pageData, 'png', 0, 0, imgWidth, imgHeight)
        Promise.allSettled(
          Array.from(document.querySelectorAll('.' + this.className)).map(
            (e, i) => {
              return this.drawImg(e)
            }
          )
        ).then(result => {
          result.map((e1, i) => {
            const margin = this.marginLeft // 左右边距
            const pageData = e1.value.base64Img // 图片base64的字符串
            var leftHeight = e1.value.height // 图片高度
            var position = 0 // 页面偏移
            // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
            var imgWidth = imgX - 2 * margin
            var imgHeight = (imgWidth / e1.value.width) * e1.value.height
            // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
            // 当内容未超过pdf一页显示的范围，无需分页
            if (leftHeight < pageHeight) {
              pdf.addImage(
                pageData,
                'png',
                margin,
                i === 0 ? titleHeight : 2,
                imgWidth,
                imgHeight,
                'alias' + i,
                'SLOW'
              )
            } else {
              while (leftHeight > 0) {
                pdf.addImage(pageData, 'png', margin, i === 0 ? titleHeight : position + 2, imgWidth, imgHeight, 'alias' + i, 'SLOW')
                leftHeight -= pageHeight
                position -= imgY
                // 避免添加空白页
                if (leftHeight > 0) {
                  pdf.addPage()
                }
              }
            }
            if (i < result.length - 1) {
              pdf.addPage()
            }
          })
          pdf.save(this.title + '.pdf')
          this.loading = false
        })
      })
    },
    drawImg (container) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      // const container = document.querySelector('#page1')
      // 传入节点原始宽高
      const width = container.offsetWidth
      const height = container.offsetHeight
      // html2canvas 配置项
      const ops = {
        width,
        height,
        x: 0,
        scale: window.devicePixelRatio * 2,
        y: window.pageYOffset,
        windowHeight: height,
        useCORS: true,
        allowTaint: false
      }
      return html2canvas(container, ops)
        .then(canvas => {
          return {
            base64Img: canvas.toDataURL('image/jpeg', 1.0),
            height,
            width
          }
        })
        .catch(() => '')
    }
  }
}
</script>
