module.exports = {
  entry: './client/RenderWebsite.js',
  output: {
    path: './public',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 4444,
    contentBase: 'public/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: 'node_modules',
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css/,
        loader: 'style!css'
      }
    ]
  }
}