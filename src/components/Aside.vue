<template>
    <div class="layout-aside-container">
      <!-- 左侧边栏列表 -->
      <ul class="user-select-none menu">
        <li class="menu-item">
            <router-link to="/main/customer">客户管理</router-link>
            
        </li>
        <li class="menu-item">
          送水工管理
        </li>
        <li class="menu-item">
          送水历史管理
        </li>
        <li class="menu-item">
          计算工资
        </li>
        <li class="menu-item">
          送水数量统计
        </li>
      </ul>
    </div>
  </template>
   
  <script>

  export default {

  }
  </script>
   
  <style lang="less" scoped>
  .layout-aside-container {
    width: 250px;
    height: 100%;
    border-right: 1px solid #eaeaea;
  }
   
  .menu {
    list-style-type: none;
    padding: 0;
    .menu-item {
      line-height: 50px;
      font-weight: bold;
      font-size: 14px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
      &:hover {
        background-color: #efefef;
        cursor: pointer;
      }
      a {
        display: block;
        color: black;
        padding-left: 30px;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
   
  // 设置路由高亮效果
  .router-link-active {
    background-color: #efefef;
    box-sizing: border-box;
    position: relative;
    // 伪元素实现路由高亮效果
    &::before {
      content: ' ';
      display: block;
      width: 4px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #42b983;
    }
  }
  </style>