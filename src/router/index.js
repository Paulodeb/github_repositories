import Home from '@/pages/Home.vue';
import SingleRepos from '@/pages/SingleRepos.vue';
import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', name: "Home", component: Home },
    { path: '/repos', name: "Repos", component:()=>import('@/pages/Repos.vue') },
    { path: '/repos/:id', name: "SingleRepos", component: SingleRepos },
    { path: '/:catchAll(.\*)', name: 'NotFound', component: ()=> import('@/pages/NotFound.vue')},
  ];

  const router = createRouter({
  
    history: createWebHashHistory(),
    routes,
  })

  export default router;