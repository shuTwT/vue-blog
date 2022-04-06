import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import FilePage from '../pages/FilePage.vue'
import LinkPage from '../pages/LinkPage.vue'
import WordPage from '../pages/WordPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    
    {
        path: '/file',
        name: 'file',
        component: FilePage
    },
    {
        path: '/link',
        name: 'link',
        component: LinkPage
    },
    {
        path: '/word',
        name: 'word',
        component: WordPage
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
