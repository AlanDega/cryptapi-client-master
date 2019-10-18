<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
=======
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
>>>>>>> f4e68c3d91059376bde21f9754be818dc388e9a5
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

<<<<<<< HEAD

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
=======
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
>>>>>>> f4e68c3d91059376bde21f9754be818dc388e9a5
