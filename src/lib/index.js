import CMenu from './components/menu/index'
import CBreadcrumb from './components/breadcrumb/index'
import CTable from './components/table/index'
import CCardList from './components/card-list/index'
import CActionList from './components/action-list/index'
import CContentWrapper from './components/content-wrapper/index'
import CRemoteSelect from './components/remote-select/index'
import CTagNav from './components/tag-nav/index'
// import CPop from './components/pop/index'
import CEllipsis from './components/ellipsis/index'
// import CTypeList from './components/type-list_d/index'
import CIconSelect from './components/icon-select/index'
import CCard from './components/card/index'
import CDownload from './components/download/index'
import CUpload from './components/upload/index'
import CAppParams from './bizComponents/app-params/index'
import utils from './utils'
// import CProbability from './components/probability/index'
import CRegionPickerCn from './components/region-picker/index'
import CCellEdit from './components/cell-edit/index'
import CForm from './form/form/index'
import CFormBoolean from './form/boolean/index'
import CFormString from './form/string/index'
import CFormNumber from './form/number/index'
import CFormEnum from './form/enum/index'
import CFormEnumList from './form/enum-list/index'
import CFormAny from './form/any/index'
import CFormMac from './form/mac/index'
import CFormRegexp from './form/regexp/index'
import CFormEffectiveTime from './form/effective-time/index'
import CFilterTree from './components/filter-tree/index'
import CInputThousands from './components/input-thousands/index'
import CAddMulti from './components/add-multi/index'
import CBaseSelector from './components/base-selector/index'
import CSelectDialog from './components/select-dialog/index'
import CCascaderPanel from './components/cascader-panel/index'
import CTableTree from './components/table-tree/index'
import CFixPage from './components/fix-page/index'
import CTableWrapper from './components/table-wrapper/index'
import CContextMenu from './components/context-menu/index'
import CGateSchemaForm from './components/gate-schema-form/index'
import CInputOrder from './components/input-order/index'
import CInputPositiveInt from './components/input-positive-int/index'
import CInputPosibility from './components/input-posibility/index'
// import CVideoTags from './components/video-tags/index'
import CAddFormObj from './components/add-form-obj/index'
import CFatherSonLink from './components/father-son-link/index'
// import CVideoFilter from './components/video-filter_d/index'
// import CProductList from './components/product-list/index'
import COrderableTable from './components/orderable-table/index'
import CAppParamsRead from './bizComponents/app-params-read/index'
import CClickEventSelector from './bizComponents/click-event-selector/index'
import CSearchDropdown from './components/search-dropdown/index'
import CTreeSelect from './components/tree-select/index'
import CSelectChange from './components/select-change/index'
import CSelectLimit from './components/select-limit/index'
import CLazyRemoteSelect from './components/lazy-remote-select/index'
import CBoxGroup from './components/box-group/index'
import service from './service/index'
import lang from './lang/index'
import CColorPicker from './components/color-picker'
import CExportPdf from './components/export-pdf'
const components = [
  CAppParams,
  CTable,
  CMenu,
  CBreadcrumb,
  CCardList,
  CActionList,
  CForm,
  CFormBoolean,
  CFormEnum,
  CFormNumber,
  CFormString,
  CFormAny,
  CFormMac,
  CFormRegexp,
  CFormEffectiveTime,
  CFormEnumList,
  CUpload,
  CTagNav,
  CEllipsis,
  CIconSelect,
  CDownload,
  // CPop,
  CCard,
  CRemoteSelect,
  CContentWrapper,
  CCellEdit,
  CRegionPickerCn,
  CFilterTree,
  CInputThousands,
  CAddMulti,
  CBaseSelector,
  CSelectDialog,
  CCascaderPanel,
  CTableTree,
  CFixPage,
  CTableWrapper,
  CContextMenu,
  CGateSchemaForm,
  CInputOrder,
  CInputPositiveInt,
  CInputPosibility,
  // CVideoTags,
  CAddFormObj,
  CFatherSonLink,
  // CVideoFilter,
  COrderableTable,
  CAppParamsRead,
  CClickEventSelector,
  CSearchDropdown,
  CTreeSelect,
  CSelectChange,
  CSelectLimit,
  CLazyRemoteSelect,
  CBoxGroup,
  CColorPicker,
  CExportPdf
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$c_utils = utils
  Vue.prototype.$adminService = service
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  CTable,
  install,
  CMenu,
  CCardList,
  CBreadcrumb,
  CContentWrapper,
  CRemoteSelect,
  CActionList,
  CTagNav,
  utils,
  // CPop,
  CEllipsis,
  CIconSelect,
  CCard,
  CDownload,
  CUpload,
  CAppParams,
  // CProbability,
  CForm,
  CFormBoolean,
  CFormString,
  CFormNumber,
  CFormEnum,
  CFormEnumList,
  CFormAny,
  CFormMac,
  CFormRegexp,
  CFormEffectiveTime,
  CRegionPickerCn,
  CCellEdit,
  CFilterTree,
  CInputThousands,
  CAddMulti,
  CBaseSelector,
  CSelectDialog,
  CCascaderPanel,
  CTableTree,
  CFixPage,
  CTableWrapper,
  CContextMenu,
  CGateSchemaForm,
  CInputOrder,
  CInputPositiveInt,
  CInputPosibility,
  // CVideoTags,
  CAddFormObj,
  CFatherSonLink,
  // CVideoFilter,
  COrderableTable,
  CAppParamsRead,
  CClickEventSelector,
  CSelectChange,
  CSelectLimit,
  CLazyRemoteSelect,
  CBoxGroup,
  service,
  CColorPicker,
  CExportPdf
}
export default {
  CTable,
  install,
  CMenu,
  CCardList,
  CBreadcrumb,
  CContentWrapper,
  CRemoteSelect,
  CActionList,
  CTagNav,
  utils,
  // CPop,
  CEllipsis,
  CIconSelect,
  CCard,
  CDownload,
  CUpload,
  CAppParams,
  // CProbability,
  CForm,
  CFormBoolean,
  CFormString,
  CFormNumber,
  CFormEnum,
  CFormEnumList,
  CFormAny,
  CFormMac,
  CFormRegexp,
  CFormEffectiveTime,
  CRegionPickerCn,
  CCellEdit,
  CFilterTree,
  CInputThousands,
  CAddMulti,
  CBaseSelector,
  CSelectDialog,
  CCascaderPanel,
  CTableTree,
  CFixPage,
  CTableWrapper,
  CContextMenu,
  CGateSchemaForm,
  CInputOrder,
  CInputPositiveInt,
  CInputPosibility,
  // CVideoTags,
  CAddFormObj,
  CFatherSonLink,
  // CVideoFilter,
  COrderableTable,
  CAppParamsRead,
  CClickEventSelector,
  CSelectChange,
  CSelectLimit,
  CLazyRemoteSelect,
  service,
  langMessages: lang.messages,
  CBoxGroup,
  CColorPicker,
  CExportPdf
}
