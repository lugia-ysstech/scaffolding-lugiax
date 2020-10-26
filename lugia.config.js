export default {
  disableCSSModules: true,
  cssModulesWithAffix: true,
  publicPath: "/",
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "@lugia/lugia-web",
        libraryDirectory: "dist"
      }
    ]
  ],
  applyWebpack(webpackConfig, { webpack, merge }) {
    return webpackConfig;
  }
};
