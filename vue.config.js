const ENV = process.env.NODE_ENV
const isPro = ENV === 'production'
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
const JoinFileContentPlugin = require('join-file-content-plugin')
let themeColor = '#409EFF'
const path = require('path')
const proConfig = {

  // externals: {
  '@stateform/element': '@stateform/element',
  'gateschema-form-vue': 'gateschema-form-vue',
  'element-ui': 'element-ui',
  gateschema: 'gateschema'
  // }
}
module.exports = {
  // configureWebpack: isPro ? proConfig : undefined
  configureWebpack: config => {
    config['externals'] = isPro ? proConfig : undefined

    // 更换 ElementUI 主题色
    // 需要 npm i -D webpack-theme-color-replacer
    const plugins = []
    plugins.push(
      // 将theme-changed.scss应用到element-ui，供babel-plugin-component按需加载
      new JoinFileContentPlugin({
        file: 'node_modules/element-theme-chalk/src/common/var.scss',
        prependFile: 'src/css/element-var-changed.scss'
      }),
      // 生成仅包含颜色的替换样式（主题色等）
      new ThemeColorReplacer({

        fileName: 'css/theme-colors.[contenthash:8].css',
        matchColors: [
          ...forElementUI.getElementUISeries(themeColor), // element-ui主色系列
          '#0cdd3a', // 自定义颜色
          '#c655dd'
        ],
        changeSelector: forElementUI.changeSelector,
        isJsUgly: isPro
        // injectCss: false,
        // resolveCss(resultCss) { // optional. Resolve result css code as you wish.
        //     return resultCss + youCssCode
        // }
      })
    )

    config.plugins = [...config.plugins, ...plugins]
  },

  css: {
    loaderOptions: {
      // 配置全局sass/scss变量
      sass: {
        // sass 版本 9 中使用 additionalData 版本 8 中使用 prependData
        additionalData: `@import "@/css/defines.scss";`
      }
    }
  },

  // chainWebpack: config => {
  //   const oneOfsMap = config.module.rule('scss').oneOfs.store
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

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/css/defines.scss')
      ]
    }
  }
}
