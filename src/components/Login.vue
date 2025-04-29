<template>
  <div id="login">
    <el-form label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="userName">
        <el-input type="text" v-model="userName"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="userPwd">
        <el-input type="password" v-model="userPwd"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="doLogin">登录</el-button>
        <el-button type="danger" @click="doReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>

export default {
  data() {
    return {
      userName: '',
      userPwd: ''
    }
  },
  methods: {
    //  登录业务逻辑
    doLogin() {
      if (this.userName === 'admin' && this.userPwd === 'admin') {
        this.$message.success('登录成功')
        this.$router.replace('/main')
      } else {
        this.$message.error('用户名或密码错误')
      }
    },
    doReset() {
      this.userName = ''
      this.userPwd = ''
    }
  }
}
</script>

<style>
.el-input {
  border: 1px solid red;
  border-radius: 5px;
  width: 300px;
}

.demo-ruleForm {
  max-width: 500px;
  margin: 100px auto;
}
</style>