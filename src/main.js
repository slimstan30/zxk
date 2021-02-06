import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.axios = axios;
if (window.platform) {
  var url = `http://${window.platform.ip}:${window.platform.port}/cockpit/`;
} else {
  
  var url = ''
}
Vue.prototype.$http = axios.create({
  baseURL:url,
  timeout:300000
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
