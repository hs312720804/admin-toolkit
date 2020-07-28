import CMenu from './components/menu/index'
import CBreadcrumb from './components/breadcrumb/index'
import CTable from './components/table/index'
import CCardList from './components/card-list/index'

import ContentWrapper from './components/ContentWrapper'
import RemoteSelect from './components/RemoteSelect'
import CActionList from './components/action-list/index'
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
import Boolean from './form/Boolean'
import String from './form/String'
import Number from './form/Number'
import Enum from './form/Enum'
import EnumList from './form/EnumList'
import Any from './form/Any'
import Mac from './form/Mac'
import EffectiveTime from './form/EffectiveTime'

const components = [
  CTable,
  CMenu,
  CBreadcrumb,
  CCardList,
  CForm,
  CActionList
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
  Boolean,
  String,
  Number,
  Enum,
  EnumList,
  Any,
  Mac,
  EffectiveTime,
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
