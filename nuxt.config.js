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
      { hid: 'description', name: 'description', content: '¿Estás empezando en abrir tu propio negocio en línea? ¿Tienes ideas o proyectos por desarrollar y no sabes cómo empezar? ¡Déjame darte una mano!' },
      { name: 'theme-color', content: "#093140" }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway' },
      { rel: 'shorcut icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-touch-icon-114x114.png' },
      { rel: 'icon', sizes: '180x180', href: '/touch-icon-180x180.png' }
    ]
  },
  modules: [
    ['@nuxtjs/google-analytics', { id: 'UA-113293096-1' }],
    ['bootstrap-vue/nuxt']
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#FFA13C' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: [
      'vue-awesome',
      'vue-multiple-progress',
      'vue-is-visible',
      '@tweenjs/tween.js',
      'scrollreveal',
      'vee-validate',
      'vue-notification'
    ],
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
          })
        ]
      }
    }
  },
  css: [ '@/assets/css/main.scss' ],
  plugins: [
    { src: '~/plugins/vue-awesome.js', ssr: true },
    { src: '~/plugins/vue-is-visible.js', ssr: false },
    { src: '~/plugins/vue-multiple-progress.js', ssr: false },
    { src: '~/plugins/vue-scroll-reveal.js', ssr: false },
    { src: '~/plugins/vee-validate.js', ssr: true },
    { src: '~/plugins/vue-notifications.js', ssr: false }
  ]
}
