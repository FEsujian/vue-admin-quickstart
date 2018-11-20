<template>
  <section class="layout col full">
    <work-header></work-header>
    <div class="row row-span">
      <work-menu></work-menu>
      <div class="col-span col">
        <keep-alive :include="keepLiveList">
          <router-view class="row-span" />
        </keep-alive>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';

const workspace = namespace('workspace');

@Component({
  components: {},
})
export default class WorkSpaceLayout extends Vue {
  @workspace.State
  private currentTab;
  /**
   * 缓存列表
   */
  get keepLiveList() {
    return this.currentTab.filter((x) => x.url).map((x) => {
      const pathList = x.url.split('/');
      const name = pathList[pathList.length - 1];
      return `-${name}`.replace(/\-(\w)/g, ($0, $1) => $1.toUpperCase());
    });
  }
}
</script>

