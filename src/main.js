//引入vue
import { createApp } from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import './assets/defaut.css'
import router from './router'

//应用插件

createApp(App).use(router).mount('#app')