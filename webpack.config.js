const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'none',
  devtool: 'source-map',
  entry: './src/app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    alias: {
      '@less-helpers-module': path.resolve(__dirname, 'src/assets/less/helpers'), // alias for less helpers
      '@assets-root-path': path.resolve(__dirname, 'src/assets') // alias for assets (use for images & fonts)
    }
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'less-loader'
      ]
    }, {
      test: /\.(jpg|jpeg|png|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]'
        }
      }]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    },{
      test: /\.hbs/,
      loader: 'handlebars-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          plugins: [["@babel/plugin-proposal-class-properties", {loose: true }]]
        }
      }
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new CopyWebpackPlugin([
      'src/index.html', // will copy to root of outDir (./dist folder)
      {
        from: 'src/static/',
        to: 'static'
      },
      {
        from: 'src/assets/images',
        to: 'images'
      }
    ])
  ],
  devServer: {
    contentBase: './dist',
    port: 3000,
    historyApiFallback: true
  }
};


