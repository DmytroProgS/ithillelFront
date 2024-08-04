const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Початкова точка входу
  output: {
    filename: 'bundle.js', // Ім'я вихідного файлу
    path: path.resolve(__dirname, 'dist') // Директорія для вихідних файлів
  },
  mode: 'development', // Режим (development або production)
  module: {
    rules: [
      {
        test: /\.css$/, // Обробка CSS файлів
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // Обробка зображень
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]' // Зміна імені вихідних файлів зображень
        }
      },
      {
        test: /\.js$/, // Обробка JavaScript файлів
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Використання Babel для трансформації JS
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // Шаблон HTML-файлу
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Директорія для дев-сервера
    },
    compress: true,
    port: 9000,
    open: true, // Відкривати браузер після запуску сервера
  }
};
