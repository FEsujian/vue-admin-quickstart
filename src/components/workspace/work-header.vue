<template>
  <section class="component work-header">
    <work-nav-right></work-nav-right>
    <div class="logo flex-center">
      <svg-icon iconName="logo" iconSize="150"></svg-icon>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SvgIcon from '@/components/common/svg-icon.vue';
import WorkNavRight from '@/components/workspace/work-nav-right.vue';

@Component({
  components: {
    SvgIcon,
    WorkNavRight,
  },
})
export default class WorkHeader extends Vue {}
</script>

<style lang="less" scoped>
.component.work-header {
  height: 80px;
  background-color: #409eff;

  .logo {
    width: 200px;
    height: 80px;
  }
}
</style>
