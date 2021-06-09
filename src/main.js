import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

const app = createApp(App);

// Connect the store to the app
app.use(store);

app.mount('#app');
