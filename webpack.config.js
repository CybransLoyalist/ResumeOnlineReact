var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js', './style/scss/style.scss'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|jpeg|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'waypoints': 'waypoints/lib/jquery.waypoints.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      waypoints: "waypoints",
      'window.jQuery': 'jquery',
      Popper: [
        'popper.js', 'default'
      ],
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
    })]
};
