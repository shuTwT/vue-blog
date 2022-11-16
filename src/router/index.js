import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/views/home/HomeView.vue'),
        },
        {
            path: '/news',
            component: () => import('@/views/news/NewsView.vue'),
        },
        {
            path: '/comments',
            component: () => import('@/views/comments/CommentsView.vue'),
        },
        {
            path: '/about',
            component: () => import('@/views/about/AboutView.vue'),
        }
    ],
});

export default router;
