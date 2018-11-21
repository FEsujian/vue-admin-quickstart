import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Login from '@/views/login.vue';
import Admin from '@/views/dashboard/admin.vue';
const NotFound = () => import('@/views/not-found.vue');

Vue.use(Router);
// 路由配置信息
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
  },
  // 404页面
  { path: '*', name: '404', component: NotFound },
];
// 生成路由实体
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

/**
 * 路由守卫
 */
// 路由前置守卫
router.beforeEach((to, from, next) => {
  const component = getComponent(to.matched);
  // 404
  if (component.path === '*') {
    next('/404');
  } else {
    next();
  }
});
// 路由后置守卫
router.afterEach((to, from) => {
  //  布局检测
  layoutCheck(to.matched);
});

// 布局监测
function layoutCheck(matched) {
  const component = getComponent(matched);
  if (component) {
    const targetLayout = component['$layout'] || 'default';
    if (store.state.layout !== targetLayout) {
      store.commit('updateLayout', targetLayout);
    }
  }
}
// 获取当前组件
function getComponent(matched) {
  if (matched && matched.length > 0) {
    const [{ components }] = matched;
    return components.default;
  }
}

export default router;
