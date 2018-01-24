const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      filename: './lib/react-id-swiper.js',
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
          include: [path.join(__dirname, 'src')]
        }
      ]
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  {
    entry: './src/index.js',
    output: {
      filename: './lib/react-id-swiper.min.js',
      libraryTarget: 'umd',
      library: 'ReactIdSwiper'
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
          include: [path.join(__dirname, 'src')]
        }
      ]
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      })
    ]
  }
];
