// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { store } from './store/store';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;

Vue.filter('currency', (value) => {
  return `$${value.toLocaleString()}`;
});

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-77464.firebaseio.com/';

export const eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
