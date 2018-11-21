<template>
  <section class="page not-found">
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Layout } from '@/core/decorator';
@Layout('default')
@Component({
  components: {},
})
export default class NotFound extends Vue {}
</script>

<style lang="less" scoped>
.not-found {
  background: url('../assets/images/not-found.jpg') center no-repeat;
}
</style>
