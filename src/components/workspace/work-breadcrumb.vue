<template>
  <section class="component work-breadcrumb">
    <el-breadcrumb separator="/" style="padding-left:10px;">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {},
})
export default class WorkBreadcrumb extends Vue {}
</script>

<style lang="less" scoped>
</style>
