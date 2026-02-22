import Icons from 'unplugin-icons/webpack'

export default {
  publicPath: '/',
  configureWebpack: {
    plugins: [
      Icons({
        compiler: 'vue3', // default; use ?raw=true in import for raw SVG
        autoInstall: true
      })
    ]
  }
}
