import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        name:'Home',
        component:()=>import("@/components/Home.vue")
    },
    {
        path:'/about',
        name:'About',
        component:()=>import("@/components/About.vue")
    },

]
// 创建路由
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router