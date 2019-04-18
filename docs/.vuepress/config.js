module.exports = {
  base: '/admin-toolkit/',
  title: 'Admin Toolkit',
  description: '酷开 Vue 组件库',
  themeConfig: {
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
            children: [
              'components/Menu.md',
              'components/ActionList.md',
              'components/Breadcrumb.md',
              'components/TagNav.md',
              'components/GateSchemaForm.md',
              'components/Table.md',
              'components/CardList.md',
              'components/ContentWrapper.md',
              'components/RemoteSelect.md',
              'components/ContentCard.md',
              'components/IconSelect.md',
              'components/Upload.md',
              'components/DownloadFile.md',
              'components/TypeList.md',
              'components/FormFatherAndSonLink.md',
              'components/ContentEllipsis.md',
              'components/probability.md'
            ]
          },
          {
            title: '业务组件',
            children: [
              'bizComponents/AppParams.md',
              'bizComponents/AppParamsRead.md'
            ]
          }
        ]
      }
    }
  },
}
