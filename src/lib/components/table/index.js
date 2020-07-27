import CTable from './src/Table'

/* istanbul ignore next */
CTable.install = function (Vue) {
  Vue.component(CTable.name, CTable)
}

export default CTable
