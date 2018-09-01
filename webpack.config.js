const { resolve } = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const files = [
  {
    outputName: 'react-id-swiper',
    entryName: 'index'
  },
  {
    outputName: 'react-id-swiper.custom',
    entryName: 'custom'
  },
  {
    outputName: 'react-id-swiper.min',
    entryName: 'index',
    minimizer: true
  },
  {
    outputName: 'react-id-swiper.custom.min',
    entryName: 'custom',
    minimizer: true
  }
];

const PATHS = {
  src: resolve(__dirname, 'src'),
  output: resolve(__dirname, 'lib')
};

module.exports = files.map(({ entryName, outputName, minimizer }) => ({
  entry: `${PATHS.src}/${entryName}.js`,
  output: {
    path: PATHS.output,
    filename: `${outputName}.js`,
    libraryTarget: 'umd',
    library: 'ReactIdSwiper',
    auxiliaryComment: ''
  },
  resolve: {
    extensions: ['.js'],
    modules: ['./src', 'node_modules']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: [PATHS.src]
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  mode: 'production',
  optimization: {
    minimizer: minimizer
      ? [
          new UglifyJsPlugin({
            uglifyOptions: {
              output: {
                comments: false
              }
            }
          })
        ]
      : []
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}));
