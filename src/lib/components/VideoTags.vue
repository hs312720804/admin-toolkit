<template>
  <div class="global-media-tag-data">
        <ul class="global-media-tag-ul">
            <li v-for="(tag, pIndex) in tagData">
                <div class="global-media-tag-data-intro">
                    <span>第<b>{{sectionToChinese(pIndex+1)}}</b>层</span>
                </div>
                <div class="global-media-tag-data-cont">
                    <el-checkbox-group v-model="tag.tagNode" size="small" @change="changeTag(pIndex, tag.tagNode)">
                        <el-checkbox-button v-for="(item, cIndex) in tag.child" :key="item.tagCode" :label="item" :class="[item.nodeType === 0 ? 'is-node-type' : 'is-node-tag', isCurrClass(item, tag.tagNode) ? 'is-checked' : '']">{{ item.tagCnName }}<label><!--<i @click.stop="getChildTagNode(pIndex, item)" :class="item.tagCode === tag.tagCodeOn ? 'el-icon-remove' : 'el-icon-circle-plus'"></i>--><input v-if="item.nodeType === 1" @click.stop="clickCheckedTagNode(pIndex, item)" class="global-media-tag-data-cont-input" type="checkbox" :checked="isCurrClass(item, tag.tagNode)"></label></el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div v-if="tag.nodeTotal > pageSize && tag.currentPage < tag.nodePage" class="global-media-tag-data-more text-center">
                    <span @click="getMoreNode(pIndex, tag.nodeTotal, tag.nodePage)">加载更多</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
      tagData: {
          type: Array,
          default: function () {
              return []
          }
      },
      movieTags: {
          type: Array,
          default: function () {
              return []
          }
      },
      tagDataBakInit: {
          type: Array,
          default: function () {
              return []
          }
      },
      pageSize: {
          type: Number,
          default: function () {
              return 0
          }
      }
  },
  data() {
      var _this = this;
      return {
          loading: false,
          tagDataBak: [],
          tagNodeIndex: 0,
          tagParentCode: '-1',
          tagCodeValue: '',
          tagNodeName: '',
          currentPage: 1, // 当前页
          isMoreIndex: 0
      }
  },
  computed: {
  },
  methods: {
      clone: function (obj) {
          var _this = this;
          var o;
          switch (typeof obj) {
              case 'undefined':
                  break;
              case 'string':
                  o = obj + '';
                  break;
              case 'number':
                  o = obj - 0;
                  break;
              case 'boolean':
                  o = obj;
                  break;
              case 'object':
                  if (obj === null) {
                      o = null;
                  } else {
                      if (obj instanceof Array) {
                          o = [];
                          for (var i = 0, len = obj.length; i < len; i++) {
                              o.push(_this.clone(obj[i]));
                          }
                      } else {
                          o = {};
                          for (var k in obj) {
                              o[k] = _this.clone(obj[k]);
                          }
                      }
                  }
                  break;
              default:
                  o = obj;
                  break;
          }
          return o;
      },
      isCurrClass: function (item, tags) {
          let flag = false;
          if (this.tags) {
            this.tags.forEach(function (tag, i) {
                if (item.tagCode === tag.tagCode) {
                    flag = true;
                    return false
                }
            })
          }
          return flag
      },
      changeTag: function (index, tags) {
          let _this = this;
          if (tags === undefined) {
              return false
          }
          let tagNodes = [];
          if (_this.tagData) {
            _this.tagData.forEach(function (item, i) {
                tagNodes = tagNodes.concat(item.tagNode)
            });
          }
          _this.tagDataBak = _this.tagDataBakInit;
          let tagDataBakNode = _this.tagDataBak[index].tagNode;
          let tagDataNode = _this.tagData[index].tagNode;
          if (tagDataBakNode.length > tagDataNode.length) {
              //减
              if (tagDataBakNode) {
                tagDataBakNode.forEach(function (tag, t) {
                    let flag = true;
                    tagDataNode.forEach(function (item, i) {
                        if (tag.tagCode === item.tagCode) {
                            flag = false;
                            return false
                        }
                    });
                    if (flag && tag.nodeType === 1) {
                        _this.movieTags.forEach(function (item, i) {
                            if (tag.tagCode === item.tagCode) {
                                _this.movieTags.splice(i, 1);
                                _this.tagData.splice(index+1, _this.tagData.length);
                                _this.tagDataBak.splice(index+1, _this.tagData.length);
                                return false
                            }
                        });
                        return false
                    } else if (flag) {
                        _this.tagData.splice(index+1, _this.tagData.length);
                        _this.tagDataBak.splice(index+1, _this.tagData.length);
                        return false
                    }
                });
              }
          } else {
              //增
              let tagLast = tags[tags.length-1];
              let flag = true;
              if (tagLast.nodeType === 1) {
                  if (_this.movieTags) {
                    _this.movieTags.forEach(function (tag, i) {
                        if (tagLast.tagCode === tag.tagCode) {
                            flag = false;
                            return false
                        }
                    });
                  }
                  if (flag && tagLast.nodeType === 1) {
                      _this.movieTags.push(tagLast)
                  }
              } else {
                  let arrList = [];
                  if (tagDataNode) {
                    tagDataNode.forEach(function (item, i) {
                        if (item.nodeType === 1 || i === tagDataNode.length-1) {
                            arrList.push(item)
                        }
                    });
                  }
                  _this.tagData[index].tagNode = [].concat(arrList)
              }
              _this.getChildTagNode(index, tagLast);
          }
          _this.tagDataBak = _this.clone(_this.tagData);
          _this.$emit('getTagNodes', _this.movieTags, _this.tagDataBak)
      },
      getChildTagNode: function (index, tags) {
          if (tags === undefined) {
              return false
          }
          this.isMoreIndex = 0;
          this.currentPage = 1;
          this.tagCodeValue = tags.tagCode;
          this.tagParentCode = tags.tagCode;
          this.tagNodeIndex = index+1;
          this.tagData[index].currentPage = 1;
          this.tagData[index].tagCodeOn = tags.tagCode;
          this.tagData.splice(index+1, this.tagData.length);
          //this.getTagPageList()
          this.$emit('updateTagData', this.tagData);
          this.$emit('currTagData', this.tagParentCode, this.tagNodeIndex)
      },
      clickCheckedTagNode: function (index, tag) {
          let _this = this;
          if (tag === undefined) {
              return false
          }
          let flag = true;
          if (_this.tagData[index].tagNode) {
            _this.tagData[index].tagNode.forEach(function (item, i) {
                if (tag.tagCode === item.tagCode) {
                    _this.tagData[index].tagNode.splice(i, 1);
                    flag = false;
                    return false
                }
            });
          }
          if (flag) {
              this.tagData[index].tagNode.push(tag)
          }
          this.changeTag(index, this.tagData[index].tagNode)
      },
      getMoreNode: function (index, total, page) {
          if (total < this.pageSize) {
              return
          }
          if (index === 0) {
              this.tagCodeValue = ''
          } else {
              this.tagCodeValue = this.tagData[index-1].tagNode.tagCode;
              this.tagParentCode = this.tagData[index-1].tagNode.tagCode;
              this.tagNodeIndex = index;
          }
          this.isMoreIndex = index;
          this.tagData[index-1].currentPage++;
          if (this.tagData[index-1].currentPage <= page) {
              this.currentPage = this.tagData[index-1].currentPage;
              //this.getTagPageList()
              this.$emit('updateTagData', this.tagData);
              this.$emit('currTagData', this.tagParentCode, this.tagNodeIndex)
          }
      },
      sectionToChinese: function(section){
          var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
          var chnUnitChar = ["","十","百","千"];
          var strIns = '', chnStr = '';
          var unitPos = 0;
          var zero = true;
          while(section > 0){
              var v = section % 10;
              if(v === 0){
                  if(!zero){
                      zero = true;
                      chnStr = chnNumChar[v] + chnStr;
                  }
              }else{
                  zero = false;
                  strIns = chnNumChar[v];
                  strIns += chnUnitChar[unitPos];
                  chnStr = strIns + chnStr;
              }
              unitPos++;
              section = Math.floor(section / 10);
          }
          return chnStr;
      }
  }
}
</script>
<style lang="stylus">
    ul, li {
        list-style: none;
    }
    .global-media-tag-data .custom-collapse .el-checkbox-button, .global-media-tag-data .el-checkbox-button, .global-media-tag-data .el-radio-button {
        margin: 5px;
    }
    .global-media-tag-data .custom-collapse .el-checkbox-button__inner {
        width: 120px;
        border-left: 1px solid #dcdfe6;
        border-radius: 4px;
    }
    .global-media-tag-data .el-checkbox-button__inner, .global-media-tag-data .el-radio-button__inner {
        min-width: 120px;
        border-left: 1px solid #dcdfe6;
        border-radius: 4px;
    }
    .global-media-tag-data .custom-collapse .el-checkbox-button.is-checked .el-checkbox-button__inner,
    .global-media-tag-data .el-checkbox-button.is-checked .el-checkbox-button__inner,
    .global-media-tag-data .el-radio-button.is-active .el-radio-button__inner {
        border-left: 0;
    }
    .global-media-tag-data .el-checkbox-button:last-child .el-checkbox-button__inner,
    .global-media-tag-data .el-checkbox-button:first-child .el-checkbox-button__inner,
    .global-media-tag-data .el-radio-button:last-child .el-radio-button__inner {
        border-radius: 4px;
    }
    .global-media-tag-ul li {
        margin-bottom: 10px;
    }
    .el-checkbox-button.is-node-tag.is-checked .el-checkbox-button__inner {
        background-color: #20a0ff;
    }
    .el-checkbox-button.is-node-tag .el-checkbox-button__inner {
        border-color: #20a0ff;
    }
    .is-node-tag .el-checkbox-button__inner, .is-node-tag .el-radio-button__inner {
        border-left: 1px solid #20a0ff;
    }
    .el-checkbox-button.is-node-type.is-checked .el-checkbox-button__inner {
        background-color: #999;
        border-color: #999;
        box-shadow: -1px 0 0 0 #999;
    }
    .global-media-tag-data-cont label.el-checkbox-button {
        position: relative;
        margin-right: 26px;
    }
    .el-checkbox-button__inner .el-icon-remove, .el-checkbox-button__inner .el-icon-circle-plus {
        position: absolute;
        right: -18px;
        top: 5px;
        font-size: 14px;
        color: #333;
        width: 15px;
        height: 15px;
        line-height: 14px;
        font-weight: bold;
        border: 1px solid #ddd;
        border-radius: 15px;
        text-align: center;
        cursor: pointer;
    }
    .el-checkbox-button__inner .global-media-tag-data-cont-input {
        position: absolute;
        right: -28px;
        top: 1px;
        font-size: 14px;
        color: #333;
        width: 20px;
        height: 20px;
        line-height: 14px;
        font-weight: bold;
        border: 1px solid #ddd;
        border-radius: 15px;
        text-align: center;
        cursor: pointer;
    }
    .el-checkbox-button__inner .el-icon-remove, .el-checkbox-button__inner .el-icon-circle-plus:hover {
        background: #20a0ff;
        color: #FFF;
    }
    .el-icon-remove:before {
        content: "-";
    }
    .el-icon-circle-plus:before {
        content: "+";
    }
    .global-media-tag-data-more {
        font-size: 14px;
        color: #00b7ee;
        cursor: pointer;
    }
    .global-media-tag-data-cont {
        max-height:350px;
        overflow-y: auto;
    }
</style>