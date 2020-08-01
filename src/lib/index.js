import CMenu from './components/menu/index'
import CBreadcrumb from './components/breadcrumb/index'
import CTable from './components/table/index'
import CCardList from './components/card-list/index'
import CActionList from './components/action-list/index'

import CContentWrapper from './components/content-wrapper/index'
import CRemoteSelect from './components/remote-select/index'
import CTagNav from './components/tag-nav/index'
import CPop from './components/pop/index'
import CCarousel from './components/carousel/index'
import CEllipsis from './components/ellipsis/index'
import CTypeList from './components/type-list/index'
import GateSchemaForm from './components/GateSchemaForm'
import CIconSelect from './components/icon-select/index'
import CCard from './components/card/index'
import CDownload from './components/download/index'
import CUpload from './components/upload/index'
import CAppParams from './bizComponents/app-params/index'
import AppParamsRead from './bizComponents/AppParamsRead'
import utils from './utils'
import FormFatherAndSonLink from './components/FormFatherAndSonLink'
import CProbability from './components/probability/index'
import ClickEventSelector from './bizComponents/ClickEventSelector'
import ClickAndSelectWrapper from './components/ClickAndSelectWrapper'
import InputOrder from './components/InputOrder'
import InputPositiveInt from './components/InputPositiveInt'
import InputPosibility from './components/InputPosibility'
import OrderableTable from './components/OrderableTable'
import BaseSelector from './components/BaseSelector'
import ContextMenu from './components/ContextMenu'
import VideoTags from './components/VideoTags'
import CRegionPickerCn from './components/region-picker/index'
import AddMultiObj from './components/AddMultiObj'
import FixHeaderAndFooter from './components/FixHeaderAndFooter'
import ProductList from './components/ProductList'
import VideoFilter from './components/VideoFilter'
import AddFormObj from './components/AddFormObj'
import CCellEdit from './components/cell-edit/index'
import CoocaaCascaderPanel from './components/CoocaaCascaderPanel'
import CooTable from './components/CooTable.vue'
// DataForm
import CForm from './form/form/index'
import CFormBoolean from './form/boolean/index'
import CFormString from './form/string/index'
import CFormNumber from './form/number/index'
import CFormEnum from './form/enum/index'
import CFormEnumList from './form/enum-list/index'
import CFormAny from './form/any/index'
import CFormMac from './form/mac/index'
import CFormEffectiveTime from './form/effective-time/index'

const components = [
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
  CFormEffectiveTime,
  CFormEnumList,
  CUpload,
  CTagNav,
  CCarousel,
  CEllipsis,
  CIconSelect,
  CDownload,
  CPop,
  CCard,
  CRemoteSelect,
  CTypeList,
  CContentWrapper,
  CCellEdit,
  CRegionPickerCn
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
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
  GateSchemaForm,
  utils,
  CPop,
  CCarousel,
  CEllipsis,
  CIconSelect,
  CCard,
  CDownload,
  CUpload,
  CAppParams,
  AppParamsRead,
  CTypeList,
  FormFatherAndSonLink,
  CProbability,
  ClickEventSelector,
  ClickAndSelectWrapper,
  InputOrder,
  InputPositiveInt,
  InputPosibility,
  OrderableTable,
  BaseSelector,
  ContextMenu,
  VideoTags,
  CForm,
  CFormBoolean,
  CFormString,
  CFormNumber,
  CFormEnum,
  CFormEnumList,
  CFormAny,
  CFormMac,
  CFormEffectiveTime,
  CRegionPickerCn,
  AddMultiObj,
  FixHeaderAndFooter,
  ProductList,
  VideoFilter,
  AddFormObj,
  CCellEdit,
  CoocaaCascaderPanel,
  CooTable
}
