//引入vue
import { createApp } from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import './assets/defaut.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
//应用插件

const app=createApp(App)
app.use(VueAxios,axios)
app.use(router).mount('#app')
