<template>
  <div id="app">
    <keep-alive>
      <template>
        <component :is="layout"></component>
      </template>
    </keep-alive>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';
import DefaultLauout from '@/layouts/default.layout.vue';
import WorkspaceLayout from '@/layouts/workspace.layout.vue';
@Component({
  components: {
    default: DefaultLauout,
    workspace: WorkspaceLayout,
  },
})
export default class App extends Vue {
  @State
  private layout;

  private get getCacheLayout() {
    const cache: string[] = [];

    // if (this.userToken) {
    //   cache.push('WorkSpaceLayout');
    // }

    return cache;
  }
}
</script>

<style lang="less">
@import 'style/default.less';
@import 'style/common.less';
@import 'style/theme.less';
@import 'style/layout.less';
</style>
