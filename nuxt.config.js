const pkg=require('./package')
const bodyParser=require('body-parser');
export default {
  mode: 'universal', //client端呈现+server端路由导航等
  //mode ->兩者模式 universal , spa
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nuxt-blog',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'My first nuxt.js blog'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css?family=Open+Sans"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */

  loading: {
    color: '#E2A553',
    height: '4px'
  },
  // loadingIndicator: {
  //   name: 'wandering-cubes',
  //   color: 'green'
  // },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/style/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/core-component',
    '~/plugins/date-filter'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
  ],
  axios:{
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-67338.firebaseio.com',
    credentials:false
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-67338.firebaseio.com',
    fbAPIKey:'AIzaSyABM2aUtbC5UcVc_aCneTA669Rh5QRvm7U'
  },
  router:{
    middleware:'log',
    extendRoutes(routes,resolve){
      routes.push({
        path:'*',
        component:resolve(__dirname,'pages/index.vue')
      })      
    }
  },
  transition:{
    name:'fade',
    mode:'out-in'
  }
  ,
  serverMiddleware:[
    bodyParser.json(),
    '~/api'
  ]
}
