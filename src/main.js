/*global Kakao*/
import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import { store } from './store/index.js';
Vue.config.productionTip = false
console.log(typeof(process.env.VUE_APP_JS_KEY))
Kakao.init('2495bf6ebc1031589125c6fc21f9294b')
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')