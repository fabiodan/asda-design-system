const { resolve } = require('path')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            // TODO: figure out a way to handle relative path
            name: '/pages/ukgr/asda-design-system/assets/images/[name].[ext]',
            // name: './assets/images/[name].[ext]',
          },
        }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: './assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {

              // Create @asda alias to easly import or require global components.
              importer(url) {
                if (url.indexOf('@asda') === 0) {
                  const filePath = url.split('@asda')[1]
                  const nodeModulePath = `./src/components/${filePath}`
                  return {
                    file: resolve(nodeModulePath),
                  }
                }
                return { file: url }
              },

              outputStyle: 'expanded',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/env'],
          },
        },
      },
    ],
  },
  resolve: {

    // Create @asda alias to easly import or require global components.
    alias: {
      '@asda': resolve(__dirname, 'src/components/'),
    },
  },
}
