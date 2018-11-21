<template>
  <el-container class="full">
    <el-header height="80px">
      <work-header></work-header>
    </el-header>
    <el-container class="full" style="bottom:0">
      <el-aside width="200px" style="background-color:#545c64">
        <work-menu></work-menu>
      </el-aside>
      <el-container>
        <el-header height="50px" style="background-color:#000"></el-header>
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

const workspace = namespace('workspace');

@Component({
  components: {
    WorkHeader,
    WorkMenu,
  },
})
export default class WorkSpaceLayout extends Vue {
  @workspace.State
  private currentTabs;
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
</style>


