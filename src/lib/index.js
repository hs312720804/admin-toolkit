import CMenu from './components/menu/index'
import CBreadcrumb from './components/breadcrumb/index'
import CTable from './components/table/index'
import CCardList from './components/card-list/index'
import CActionList from './components/action-list/index'

import ContentWrapper from './components/ContentWrapper'
import RemoteSelect from './components/RemoteSelect'
import TagNav from './components/TagNav'
import pop from './components/pop'
import carousel from './components/Carousel'
import ContentEllipsis from './components/ContentEllipsis'
import TypeList from './components/TypeList'
import GateSchemaForm from './components/GateSchemaForm'
import IconSelect from './components/IconSelect'
import ContentCard from './components/ContentCard'
import DownloadFile from './components/DownloadFile'
import Upload from './components/Upload'
import AppParams from './bizComponents/AppParams'
import AppParamsRead from './bizComponents/AppParamsRead'
import utils from './utils'
import FormFatherAndSonLink from './components/FormFatherAndSonLink'
import probability from './components/probability'
import ClickEventSelector from './bizComponents/ClickEventSelector'
import ClickAndSelectWrapper from './components/ClickAndSelectWrapper'
import InputOrder from './components/InputOrder'
import InputPositiveInt from './components/InputPositiveInt'
import InputPosibility from './components/InputPosibility'
import OrderableTable from './components/OrderableTable'
import BaseSelector from './components/BaseSelector'
import ContextMenu from './components/ContextMenu'
import VideoTags from './components/VideoTags'
import CnRegionPicker from './components/CnRegionPicker'
import AddMultiObj from './components/AddMultiObj'
import FixHeaderAndFooter from './components/FixHeaderAndFooter'
import ProductList from './components/ProductList'
import VideoFilter from './components/VideoFilter'
import AddFormObj from './components/AddFormObj'
import InputIconEdit from './components/InputIconEdit'
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
  CFormEnumList
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
  ContentWrapper,
  RemoteSelect,
  CActionList,
  TagNav,
  GateSchemaForm,
  utils,
  pop,
  carousel,
  ContentEllipsis,
  IconSelect,
  ContentCard,
  DownloadFile,
  Upload,
  AppParams,
  AppParamsRead,
  TypeList,
  FormFatherAndSonLink,
  probability,
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
  CnRegionPicker,
  AddMultiObj,
  FixHeaderAndFooter,
  ProductList,
  VideoFilter,
  AddFormObj,
  InputIconEdit,
  CoocaaCascaderPanel,
  CooTable
}
