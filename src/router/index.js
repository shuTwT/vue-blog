import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import FilePage from '../pages/FilePage.vue'
import LinkPage from '../pages/LinkPage.vue'
import WordPage from '../pages/WordPage.vue'
import MyArticle from '../pages/MyArticle.vue'

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
    },
    {
        path: '/article',
        name: 'article',
        component: MyArticle
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
