import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入Element Plus组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 注册路由
import router from './router'

// createApp(App).mount('#app')
// 创建APP根组件
const app = createApp(App);
// 挂载Element Plus组件库, 并将其应用到Vue实例中
app.use(ElementPlus).use(router).mount('#app');