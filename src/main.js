import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router/index'
import leftMenu from './layout/left-nav.vue'
import topHeader from './layout/top-header.vue'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('leftMenu',leftMenu)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
