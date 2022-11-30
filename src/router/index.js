import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/views/home/HomeView.vue'),
        },
        {
            path: '/about',
            component: () => import('@/views/about/AboutView.vue'),
        },
        {
            path: '/article/:year/:month/:day/:id',
            beforeEnter: (to, from, next) => {
                // if (to.params.year) {
                //     to.meta.year = to.params.year
                // }
                next()
            },
            component: () => import('@/views/article.vue'),
        }
    ],
});

export default router;
