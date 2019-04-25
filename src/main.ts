import "@babel/polyfill";
import './hooks';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import saveInit from './components/save-init/index';

Vue.config.productionTip = false;

Vue.prototype.$test = 'test'

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
