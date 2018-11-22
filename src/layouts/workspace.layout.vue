<template>
  <el-container class="full">
    <el-header height="80px">
      <work-header></work-header>
    </el-header>
    <el-container class="full" style="bottom:0">
      <el-aside :width="asideWidth" class="scrollBar" style="background-color:#545c64;transition:all 300ms;overflow-x:hidden;overflow-y:auto;">
        <work-menu></work-menu>
      </el-aside>
      <el-container>
        <el-header height="50px" style="background-color:#ccc" class="flex-align-center">
          <hamburger :toggle-click="toggleClick" :is-active="isCollapse" class="hamburger-container" />
          <!-- 以下内容提取为组件 -->
          <el-breadcrumb separator="/" style="padding-left:10px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- 面包屑 -->
        </el-header>
        <el-header height="40px" style="background-color:#eee"></el-header>
        <el-main>
          <keep-alive :include="keepLiveList">
            <router-view />
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';
import WorkHeader from '@/components/workspace/work-header.vue';
import WorkMenu from '@/components/workspace/work-menu.vue';
import Hamburger from '@/components/common/hamburger.vue';

const workspace = namespace('workspace');

@Component({
  components: {
    WorkHeader,
    WorkMenu,
    Hamburger,
  },
})
export default class WorkSpaceLayout extends Vue {
  @workspace.State
  private currentTabs;

  @workspace.State
  private isCollapse;

  @workspace.Mutation
  private updateIsCollapse;

  /**
   * 侧边栏折叠
   */
  private toggleClick() {
    this.updateIsCollapse(!this.isCollapse);
  }

  /**
   * 获取侧边栏宽度
   */
  private get asideWidth() {
    return this.isCollapse ? '64px' : '200px';
  }

  /**
   * 缓存列表
   */
  get keepLiveList() {
    return this.currentTabs.filter((x) => x.url).map((x) => {
      const pathList = x.url.split('/');
      const name = pathList[pathList.length - 1];
      return `-${name}`.replace(/\-(\w)/g, ($0, $1) => $1.toUpperCase());
    });
  }
}
</script>

<style lang="less">
.el-header .hamburger-container {
  line-height: 50px;
  height: 50px;
  padding: 0 10px;
}
</style>


