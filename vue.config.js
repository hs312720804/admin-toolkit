const ENV = process.env.NODE_ENV
const isPro = ENV === 'production'
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
const JoinFileContentPlugin = require('join-file-content-plugin')
// const appConfig = require('./lib/config')
let themeColor = '#409EFF'

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
  }
  // themeColor: '#f67a17'
}
