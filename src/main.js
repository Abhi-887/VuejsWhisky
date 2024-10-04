import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Ensure this line imports your router
import './index.css'; // or your main CSS file


const app = createApp(App);

app.use(router); // Ensure to use the router here

app.mount('#app');
