import Vue from 'vue';
import App from './App.vue';
import './assets/styles.css'; // Make sure this path is correct

new Vue({
  render: h => h(App),
}).$mount('#app');
