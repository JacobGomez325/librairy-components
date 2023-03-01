export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'component-library',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
      },
      {
        rel:'stylesheet',
        href:'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;1,200;1,300&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
      {
        rel:'stylesheet',
        href:"https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css",
      },
      {
        rel:'stylesheet',
        href:"https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css",
      },
      {
        rel:'stylesheet',
        href:"https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css"
      }
    ],
    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/image'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
