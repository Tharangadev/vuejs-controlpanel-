import Vue from 'vue'
import App from './layout.vue'
///vue router
import Router from './router/Router.js'

///vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
//material icons
import 'material-design-icons-iconfont/dist/material-design-icons.css'
////

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:Router
}).$mount('#app')
