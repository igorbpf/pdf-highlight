const {
  addBabelPlugin,
  override,
  addWebpackModuleRule,
} = require("customize-cra");

module.exports = override(
  (config) => ({
    ...config,
    output: {
      ...config.output,
      globalObject: "this",
    },
  }),
  addBabelPlugin([
    "babel-plugin-root-import",
    {
      rootPathSuffix: "src",
    },
  ]),
  addWebpackModuleRule({
    test: /\.worker\.js$/,
    use: "worker-loader",
  })
);
