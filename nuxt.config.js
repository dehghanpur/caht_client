

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'انجمن توسعه دهنگان اسكريپت',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '.JS communities ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/config.css'
  ],
  pageTransition: {
    name: 'my-page',
    mode: 'out-in'
  },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  env: {
    baseUrl: process.env.BASE_URL || 'https://dehghanpour10-chat-server.herokuapp.com/api'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
