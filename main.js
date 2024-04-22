import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import test from './views/Test.vue';
// import vocab-test from './components/VocabTest.vue';

import 'semantic-ui-css/semantic.css';


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
