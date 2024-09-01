import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Certifique-se de que o Vue Router está configurado corretamente

createApp(App).use(router).mount('#app');
