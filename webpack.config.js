//entry point of the application
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = env => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("stles.css");
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"), //absolute path on your machine to where you wanna output the output file
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};