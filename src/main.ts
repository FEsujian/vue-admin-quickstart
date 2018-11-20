import Vue from 'vue';
import App from './App.vue';
import router from './route/router';
import store from './store/store';
import bootstrap from '@/bootstrap';

async function startup() {
  await bootstrap();

  Vue.config.productionTip = false;

  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
}

// 打印版本发布信息
if (process.env.BUILD_TIME) {
  console.log('当前环境:' + process.env.BUILD_ENV);
  console.log('版本发布时间:' + process.env.BUILD_TIME);
}
// 启动主程序
startup();
