import { createApp } from 'vue'
import './assets/base.css'
import './assets/animate.css';
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')

