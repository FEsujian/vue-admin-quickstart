<template>
  <section class="component work-menu nowrap">
    <el-menu :collapse="isCollapse" default-active="2" text-color="#fff" active-text-color="#ffd04b" background-color="#545c64" :collapse-transition="false">
      <work-menu-item></work-menu-item>
    </el-menu>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';
import WorkMenuItem from '@/components/workspace/work-menu-item.vue';

const workspace = namespace('workspace');

@Component({
  components: {
    WorkMenuItem,
  },
})
export default class WorkMenu extends Vue {
  @workspace.State
  private isCollapse;
}
</script>

<style lang="less">
</style>
