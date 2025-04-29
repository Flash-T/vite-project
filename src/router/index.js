import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/Login.vue"),
  },
  // 为登录组件配置重定向
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("@/components/Main.vue"),
    redirect: "/main/customer",
    children:[
        {
            path:"customer",
            name:"Customer",
            component:()=>import("@/components/Customer.vue")
        }
    ]
  },
  // {
  //     path:'/',
  //     name:'Home',
  //     component:()=>import("@/components/Home.vue")
  // },
  // {
  //     path:'/about',
  //     name:'About',
  //     component:()=>import("@/components/About.vue")
  // },
];
// 创建路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
