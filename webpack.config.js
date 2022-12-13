const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  output: { filename: 'app.bundle.js' },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
        }
      }
    ]
  }
}

/* const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  output: { filename: "app.bundle.js" },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
    performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
}
}; */

// Usamos path para referirnos a la carpeta donde estemos
/* const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //El resolve permite manejar las extensiones con las que trabajaremos
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        rules: [
            //Js and JSX loader
            {
//Esta configuracion des test cargara el loader con cualquier extension
                test: /\.(js|jsx)$/,
//Es importante ignorar la carpeta node_modules
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ],
//Mi configuracion del servidor
    devServer : {
        static: {
            directory: path.join(__dirname, 'dist/'),
        },
        compress: true,
        port: 3000,
        open: true,
    },
} */
