import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import createPersistedState from 'vuex-persistedstate';

// 进入模块
import Workspace from './modules/workspace.store';

Vue.use(Vuex);

const filterList = ['ready', 'layout'];

export default new Vuex.Store({
  modules: {
    Workspace,
  },
  state,
  mutations,
  actions,
  getters,
  plugins: [
    // 持久化存储插件
    /* tslint:disable:no-shadowed-variable */
    createPersistedState({
      key: 'vuex',
      reducer: (state, paths) => {
        return { ...state, ready: false, layout: 'default' };
      },
      storage: localStorage,
      filter: ({ type, payload }) => {
        return !filterList.includes(type);
      },
    }),
  ],
});
