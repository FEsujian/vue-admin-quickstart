import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';
import axios from 'axios';

export default async function() {
  Vue.use(ElementUI);
  Vue.prototype.$axios = axios;
  axios.defaults.baseURL = 'http://localhost:8086';
}
