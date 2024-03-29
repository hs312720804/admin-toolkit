const path = require('path')

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
              'components/FatherSonLink.md',
              'components/ContentEllipsis.md',
              'components/SelectDialog.md',
              'components/BaseSelector.md',
              'components/CellEdit.md',
              'components/InputOrder.md',
              'components/InputPositiveInt.md',
              'components/InputPosibility.md',
              'components/ContextMenu.md',
              'components/FixPage.md',
              'components/AddMultiObj.md',
              'components/CascaderPanel.md',
              'components/FilterTree.md',
              'components/InputThousands.md',
              'components/SearchDropdown.md',
              'components/TreeSelect.md',
              'components/SelectLimit.md',
              'components/LazyRemoteSelect',
              'components/BoxGroup.md',
              'components/ColorPick.md',
              'components/ExportPdf.md'
            ]
          },
          {
            title: '业务组件',
            children: [
              'bizComponents/AppParams.md',
              'bizComponents/AppParamsRead.md',
              'bizComponents/ClickEventSelector.md',
              'components/VideoTags.md',
              'components/AddFormObj.md',
              'components/SelectChange.md'
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
              'form/Regexp.md',
              'form/EffectiveTime.md'
            ]
          }
        ]
      }
    }
  },
  // chainWebpack: config => {
  //   const oneOfsMap = config.module.rule('scss').oneOfs.store
  //   console.log(1111)
  //   oneOfsMap.forEach(item => {
  //     item
  //       .use('sass-resources-loader')
  //       .loader('sass-resources-loader')
  //       .options({
  //         // Provide path to the file with resources
  //         resources: `@import "@/css/defines.scss"`

  //         // Or array of paths
  //         // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
  //       })
  //       .end()
  //   })
  // },
  // sass: {
  //   indentedSyntax: true,
  //   additionalData: `@import "@/css/defines.scss";`
  // },
  // sass: {
  //   indentedSyntax: true,
  //   additionalData: '@import "~@/css/defines.scss"'
    // additionalData: path.resolve(__dirname, './css/defines.scss')  //注意自己的路径
    // additionalData: `@import "@/css/defines.scss";`
    // additionalData: (content, loaderContext) => {
    //   // More information about available properties https://webpack.js.org/api/loaders/
    //   const { resourcePath, rootContext } = loaderContext;
    //   const relativePath = path.relative(rootContext, resourcePath);

    //   if (relativePath === 'styles/foo.scss') {
    //     return '$value: 100px;';
    //   }

    //   return '$value: red';
    // },
    // includePaths: ['/src/css/defines.scss'],
    // sassOptions: {
    //   indentWidth: 4,

    // },
  // },
  configureWebpack: {
    resolve: {
        alias: {
          '@': path.resolve(__dirname, '../../src')
        }
    }
  },
  scss: {
    additionalData: '@import "@/css/defines.scss";'
  }
}

console.log(path.resolve(__dirname, '../../srcc'))
