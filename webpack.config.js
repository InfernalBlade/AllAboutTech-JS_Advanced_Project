const HtmlWebpackPlugin = require("html-webpack-plugin");
/* */
const path = require("path");

module.exports = () => {
    return {
      entry: "./src/js/index.js",

      output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
      },

      module: {
        rules:[
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
      },

      devServer: {
        static: "./dist",
        open: true,
        watchFiles: ["./src/*"],
        hot: true,
      },

      plugins: [
        new HtmlWebpackPlugin({
          title: "AllAboutTech - Daily News",
          template: path.resolve(__dirname, "./src/index.html"),
        }),
      ],
    };
  };