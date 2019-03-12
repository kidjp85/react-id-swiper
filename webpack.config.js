const { resolve } = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const files = [
  {
    outputName: 'react-id-swiper',
    entryName: 'index'
  },
  {
    outputName: 'react-id-swiper.min',
    entryName: 'index',
    minimizer: true
  }
];

const PATHS = {
  src: resolve(__dirname, 'src'),
  output: resolve(__dirname, 'lib')
};

module.exports = files.map(({ entryName, outputName, minimizer }) => ({
  entry: `${PATHS.src}/${entryName}.tsx`,
  output: {
    path: PATHS.output,
    filename: `${outputName}.js`,
    libraryTarget: 'umd',
    library: 'ReactIdSwiper',
    auxiliaryComment: ''
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['./src', 'node_modules']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'awesome-typescript',
        include: [PATHS.src]
      }
    ]
  },
  externals: {
    react: 'React',
    swiper: 'Swiper'
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
