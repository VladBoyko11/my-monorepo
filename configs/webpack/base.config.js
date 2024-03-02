const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

const config = (env, options) => ({
  devtool: (options.mode === 'development') ? 'inline-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react',
    ['react-dom']: 'react-dom'
  },
  watch: Boolean(options.mode === 'development'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: [
          /node_modules/,
          /__tests__/,
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
});

module.exports = (env, options) => config(env, options);
