const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtraPlugin = require("mini-css-extract-plugin")
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {minimize: true}
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins : [
    new HtmlWebPackPlugin({
      template:"./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtraPlugin({
      filename: "[name].scss",
      chunkFilename: "[id].css"
    })
  ]
}