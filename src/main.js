// src/main.js
import Vue from 'vue';
import App from './App.vue';
import './assets/styles.css'; // Import Tailwind CSS here

new Vue({
  render: h => h(App),
}).$mount('#app');
