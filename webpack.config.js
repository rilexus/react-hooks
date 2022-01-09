const path = require("path");

module.exports = (dirname) => {
  return {
    mode: "production",
    entry: {
      index: "./index.ts",
    },
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    externals: {
      react: "react",
    },
    output: {
      filename: "[name].js",
      path: path.resolve(dirname, "dist"),
    },
  };
};
