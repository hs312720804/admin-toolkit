/***********************************************************************************************
 *@name   : ProductList
 *@desc   : 产品包选择器
 ***********************************************************************************************/
 <template>
  <div class="cc-product-list-cont" v-loading="loading">
    <div v-for="(item, index) in productList" :key="index" class="pro-sel">
      <el-select v-model="item.sourceId" @change="productChange(index)">
        <el-option v-for="product in item.child" :key="product.sourceId" :label="product.sourceName" :value="product.sourceId">{{companyStr2isSource(product.company)}}{{product.sourceName}}</el-option>
      </el-select>
      <el-switch v-model="item.isVip" disabled active-color="#4db3ff"></el-switch>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    proData: {
      type: Array,
      default: function () {
        return []
      }
    },
    setProductAttr: {
      type: Object,
      default: function () {
        return {
          businessType: 0, //  业务类型切换产品包展示
          partnerArr: [], //  根据渠道切换产品包
          productCurrList: [] //  反写产品包数据
        }
      }
    },
    partnerList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      loading: false,
      productList: []
    }
  },
  watch: {
    proData: {
      handler: function () {
        this.getProductList(this.setProductAttr.businessType)
      },
      deep: true // 深度观察
    },
    setProductAttr: {
      handler: function () {
        this.getProductList(this.setProductAttr.businessType)
      },
      deep: true // 深度观察
    }
  },
  methods: {
    productChange (index) {
      let proList = this.productList[index]
      if (proList.sourceId !== 0) {
        proList.isVip = true
      } else {
        proList.isVip = false
      }
      let child = proList.child
      for (let i = 0; i < child.length; i++) {
        if (child[i].sourceId === proList.sourceId) {
          proList.proSource = child[i]
          break
        }
      }
      this.productList[index] = proList
    },
    getProductList (busType) {
      let params = {}
      params.businessType = busType
      this.loading = true
      let proData = this.proData
      this.productList = []
      if (busType === 0 || busType === -1) {
        this.partnerList.forEach(part => {
          if (part.partnerName !== '') {
            let proList = {
              partnerName: part.partnerName,
              partnerValue: part.partnerValue,
              partnerCode: part.partnerCode,
              sourceId: 0,
              proSource: {
                sourceId: 0,
                sourceName: '选择' + part.sourceName + '产品包',
                sourceSign: ''
              },
              isVip: false,
              child: [{
                sourceId: 0,
                sourceName: '选择' + part.sourceName + '产品包',
                sourceSign: ''
              }]
            }
            proData.forEach(item => {
              if (item.sourceSign !== 'yinhe-gold') {
                if (item.company === part.partnerName) {
                  proList.child.push(item)
                } else {
                  if (item.company === '4KGarden') {
                    item.sourceName = '4K花园VIP'
                    proList.child.push(item)
                  }
                }
                if (part.partnerName === 'tencent' && item.company === 'tencent_yst') {
                  proList.child.push(item)
                } else if (part.partnerName === 'yinhe' && item.company === 'yinhe_mix_voole') {
                  proList.child.push(item)
                }
              }
            })
            this.productList.push(proList)
          }
        })
      } else if (busType === 1) {
        let proList = {
          partnerName: 'teach',
          partnerValue: '',
          partnerCode: '',
          sourceId: 0,
          proSource: {
            sourceId: 0,
            sourceName: '选择教育产品包',
            sourceSign: ''
          },
          isVip: false,
          child: [{
            sourceId: 0,
            sourceName: '选择教育产品包',
            sourceSign: ''
          }].concat(proData)
        }
        this.productList.push(proList)
      }
      if (this.setProductAttr.productCurrList.length > 0) {
        this.writeProductList()
      }
      this.loading = false
    },
    getSelectProductList () {
      return this.productList
    },
    writeProductList () {
      const pCurrList = this.setProductAttr.productCurrList
      if (this.setProductAttr.businessType !== 1) {
        const proList = this.productList.map(item => {
          for (let i = 0; i < pCurrList.length; i++) {
            if (item.partnerValue === pCurrList[i].partnerValue) {
              item.sourceId = pCurrList[i].sourceId
              item.isVip = true
              item.proSource.sourceId = pCurrList[i].sourceId
              item.proSource.sourceName = pCurrList[i].sourceName
              item.proSource.sourceSign = pCurrList[i].sourceSign
              break
            }
          }
          return item
        })
        this.productList = proList
      } else {
        this.productList[0].sourceId = pCurrList[0].sourceId
        this.productList[0].isVip = true
        this.productList[0].proSource.sourceId = pCurrList[0].sourceId
        this.productList[0].proSource.sourceName = pCurrList[0].sourceName
        this.productList[0].proSource.sourceSign = pCurrList[0].sourceSign
      }
    },
    companyStr2isSource (str) {
      let content
      switch (str) {
        case 'yinhe':
          content = '爱奇艺'
          break
        case 'tencent':
          content = '腾讯'
          break
        case 'tencent_yst':
          content = '腾讯应用商店'
          break
        case 'yinhe_mix_voole':
          content = '优朋混爱奇艺'
          break
        case 'coocaa':
          content = '酷开'
          break
        default:
          content = ''
      }
      return content
    }
  },
  created () {
    this.getProductList(this.setProductAttr.businessType)
  }
}
</script>

<style lang='stylus' scoped>
.cc-product-list-cont .pro-sel
  margin 5px 0px
</style>
