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
}
</script>

<style lang="less">
</style>
