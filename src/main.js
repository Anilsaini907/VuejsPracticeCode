import Vue from 'vue'
import App from './App.vue'
import router from './router'
var VueResource = require('vue-resource');
Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
