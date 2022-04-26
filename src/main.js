/*global Kakao*/
import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import { store } from './store/index.js';
Vue.config.productionTip = false
console.log(typeof(process.env.VUE_APP_JS_KEY))
Kakao.init(process.env.VUE_APP_JS_KEY)
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')