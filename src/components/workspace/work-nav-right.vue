<template>
  <section class="component work-nav-right flex-align-center">
    <svg-icon iconName="logo" iconSize="60"></svg-icon>
    <svg-icon iconName="logo" iconSize="60"></svg-icon>
    <svg-icon iconName="logo" iconSize="60"></svg-icon>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SvgIcon from '@/components/common/svg-icon.vue';

@Component({
  components: {
    SvgIcon,
  },
})
export default class WorkNavRight extends Vue {}
</script>

<style lang="less" scoped>
.component.work-nav-right {
  height: 80px;
  width: 300px;
  float: right;
  background-color: red;
}
</style>
