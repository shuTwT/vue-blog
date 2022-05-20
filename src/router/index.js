import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: ()=>import('@/views/main/main.vue'),
      children:[{
          path:'',
          component: ()=>import('@/views/main/home/HomeView.vue'),
      },
      {
        path:'about',
        component: ()=>import('@/views/main/about/AboutView.vue'),
    }]
    },
    {
        path:'/admin',
        name:'admin',
        component:()=>import('@/views/admin/admin.vue'),
        children:[
            {
                path:'bloglist',
                component:()=>import('@/views/admin/bloglist/bloglist.vue')
            },
            {
                path:'comments',
                component:()=>import('@/views/admin/comments/comments.vue')
            },
            {
                path:'friendlist',
                component:()=>import('@/views/admin/friendlist/friendlist.vue')
            },
            {
                path:'type',
                component:()=>import('@/views/admin/type/type.vue')
            },
            {
                path:'usermanager',
                component:()=>import('@/views/admin/usermanager/usermanager.vue')
            },
            {
                path:'visitlog',
                component:()=>import('@/views/admin/visitlog/visitlog.vue')
            },
            {
                path:'visitdata',
                component:()=>import('@/views/admin/visitdata/visitdata.vue')
            },
            {
                path:'writeblog',
                component:()=>import('@/views/admin/writeblog/writeblog.vue')
            }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/login/login.vue')
    }
  ],
});

export default router;
