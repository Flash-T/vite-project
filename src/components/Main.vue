<template>
    <div class="home-container">
      <!-- 3 头部区域 -->
      <Header></Header>
      <!-- 页面主体区域 -->
      <div class="home-main-box">
        <!-- 4 左侧边栏 -->
        <Aside></Aside>
        <!-- 右侧内容主体区域 -->
        <div class="home-main-body">
          <!-- 5 路由占位符 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
   
  <script>
  // 1 导入头部区域组件、左侧边栏组件
  import Header from './Header.vue'
  import Aside from './Aside.vue'
   
  export default {
    // 2 注册头部区域组件、左侧边栏组件
    components:{
        Header,
        Aside
    }
  }
  </script>
   
  <style lang="less" scoped>
  .home-container {
    height: 100%;
    display: flex;
    flex-direction: column; 
    .home-main-box {
      height: 100%;
      display: flex;
      .home-main-body {
        padding: 15px;
        flex: 1;
      }
    }
  }
  </style>