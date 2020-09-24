module.exports = {
  base: '/admin-toolkit/',
  title: 'Admin Toolkit',
  description: '酷开 Vue 组件库',
  themeConfig: {
    nav: [
      {text: '文档', link: '/'},
      {text: 'Changelog', link: 'http://gitlab.skysri.com/FrontEnd/admin-toolkit/blob/master/CHANGELOG.md'},
      {text: 'GitLab', link: 'http://gitlab.skysri.com/FrontEnd/admin-toolkit'}
    ],
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        title: 'VuePress',
        description: 'Vue-powered Static Site Generator',
        sidebar: [
          {
            title: '指南',
            collapsable: false,
            children: [
              '/',
            ]
          },
          {
            title: '组件',
            collapsable: false,
            children: [
              'components/Menu.md',
              'components/ActionList.md',
              'components/Breadcrumb.md',
              'components/TagNav.md',
               'components/GateSchemaForm.md',
              'components/Table.md',
              'components/TableTree.md',
              'components/CardList.md',
              'components/ContentWrapper.md',
              'components/RemoteSelect.md',
              'components/Card.md',
              'components/IconSelect.md',
              'components/Upload.md',
              'components/DownloadFile.md',
              // 'components/TypeList.md',
              'components/FatherSonLink.md',
              'components/ContentEllipsis.md',
              // 'components/probability.md',
              'components/SelectDialog.md',
              'components/BaseSelector.md',
              'components/CellEdit.md',
              'components/InputOrder.md',
              'components/InputPositiveInt.md',
              'components/InputPosibility.md',
              // 'components/OrderableTable.md',
              'components/ContextMenu.md',
              
              'components/CnRegionPicker.md',
              'components/FixPage.md',
              'components/AddMultiObj.md',
              //'components/ProductList.md',
              // 'components/VideoFilter.md',
             
              'components/CascaderPanel.md',
              'components/FilterTree.md',
              'components/InputThousands.md',
              'components/SearchDropdown.md',
              'components/TreeSelect.md',
            ]
          },
          {
            title: '业务组件',
            children: [
              'bizComponents/AppParams.md',
              'bizComponents/AppParamsRead.md',
              'bizComponents/ClickEventSelector.md',
              'components/VideoTags.md',
              'components/AddFormObj.md'
            ]
          },
          {
            title: '数据表单',
            children: [
              'form/DataForm.md',
              'form/Boolean.md',
              'form/Number.md',
              'form/String.md',
              'form/Enum.md',
              'form/EnumList.md',
              'form/Any.md',
              'form/Mac.md',
              'form/EffectiveTime.md'
            ]
          }
        ]
      }
    }
  },
}
