var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve (__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {},
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract ({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
      },
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   use: ExtractTextPlugin.extract ({
      //     fallback: 'style-loader',
      //     use: 'css-loader!sass-loader',
      //   }),
      //   exclude: /node_modules/,
      // },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192&name=/assets/img/[name].[ext]'
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]',
      //     outputPath:path.resolve(__dirname,'assets/img/'),
      //     context:path.relative(__dirname,'assets/img/'),
      //     useRelativePath: process.env.NODE_ENV === "development",
      //     publicPath:'assets/img/'
      //   },
      // },
//       {
// 　　　　　　test: /\.html$/,
// 　　　　　　loader: 'html-withimg-loader'
// 　　　　}
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
  },
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin ('app.css'),
  ],
};

if (process.env.NODE_ENV === 'production') {
  // module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat ([
    new webpack.DefinePlugin ({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin ({
      // sourceMap: true,
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      },
    }),
    new webpack.LoaderOptionsPlugin ({
      minimize: true,
    }),
    new ExtractTextPlugin ('app.css'),
    // new CopyWebpackPlugin ([
    //   {
    //     from: path.resolve (__dirname, './src/assets'),
    //     to: path.resolve (__dirname, './dist/assets'),
    //     ignore: ['*.css'],
    //     force: true,
    //     toType: 'dir',
    //   },
    // ])
  ]);
}