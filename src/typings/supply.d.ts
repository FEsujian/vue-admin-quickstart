import Vue from 'vue';

// 扩展vue接口
declare module 'vue/types/vue' {
  interface Vue {
    $layout: string;
  }
}
