const ENV = process.env.NODE_ENV;
const isPro = ENV === "production" ? true : false;
const proConfig = {
  externals: {
    "@stateform/element": "@stateform/element",
    "gateschema-form-vue": "gateschema-form-vue",
    "element-ui": "element-ui",
    gateschema: "gateschema"
  }
};
module.exports = {
  configureWebpack: isPro ? proConfig : undefined
};
