const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Luis Agapito',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My personal webpage on Nuxt.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway' },
      { rel: 'shorcut icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-touch-icon-114x114.png' }
    ]
  },
  // Simple usage
  modules: [
    ['@nuxtjs/google-analytics', { id: 'UA-113293096-1' }]
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#CCC214' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    babel: {
      presets: ['vue-app', 'stage-3']
    },
    vendor: [
      'jquery',
      'bootstrap',
      'vue-awesome',
      '@tweenjs/tween.js',
      'scrollreveal',
      'vee-validate',
      'vue-notification'
    ],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
          })
        ]
      }
    }
  },
  css: ['bootstrap/dist/css/bootstrap.css'],
  plugins: [
    { src: '~plugins/jquery.js', ssr: false },
    { src: '~plugins/bootstrap.js', ssr: false },
    { src: '~plugins/vue-awesome.js', ssr: true },
    { src: '~/plugins/vue-scroll-reveal.js', ssr: false },
    { src: '~/plugins/vee-validate.js', ssr: true },
    { src: '~/plugins/vue-notifications.js', ssr: false }
  ]
}
