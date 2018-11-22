<template>
  <section class="page login bg">
    <header></header>
    <main>
      <div class="ft24 text-center mt10">登录</div>
      <img src="../assets/images/bg.jpg" alt="">
      <el-input type="primary" placeholder="请输入账号" v-model="admin"></el-input>
      <el-input type="primary" placeholder="请输入密码" v-model="password"></el-input>
      <el-button type="primary" @click="login" style="width:100%">登录</el-button>
    </main>
    <div class="footer" style="">123456</div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Login extends Vue {
  private admin: string = '';
  private password: string = '';
  private login() {
    if (!this.admin) {
      this.$message.error('请输入账号');
    } else if (!this.password) {
      this.$message.error('请输入密码');
    } else {
      this.$router.push({ path: '/admin' });
    }
  }
}
</script>
<style lang="less" scoped>
.bg {
  background: url('../assets/images/bg.jpg') center no-repeat;
  background-size: 100%;
}
header,
.footer {
  height: 80px;
  border: 1px solid grey;
  width: 100%;
  line-height: 80px;
  text-align: center;
}
main {
  width: 250px;
  height: 250px;
  // border: 1px solid grey;
  padding: 50px;
  border-radius: 5px;
  position: fixed;
  top: 220px;
  right: 400px;
  box-shadow: 5px 5px 5px #949292;
  background-color: rgba(000, 000, 000, 0.1);
}
main div {
  height: 60px;
}
.footer {
  position: fixed;
  bottom: 0;
}
</style>