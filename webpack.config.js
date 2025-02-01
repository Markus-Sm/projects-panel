const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    main: ["./src/js/master.js", "./src/style/main.scss"],
    contact: ["./src/js/contact.js", "./src/style/main.scss"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "jquery-ui": "jquery-ui-dist/jquery-ui.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src/style')]
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./contact.html",
      filename: "contact.html",
      chunks: ["contact"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: "source-map",
};
