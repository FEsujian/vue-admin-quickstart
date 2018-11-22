<template>
  <section class="page login">
    <el-button type="primary">登陆</el-button>
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
export default class Login extends Vue {}
</script>
