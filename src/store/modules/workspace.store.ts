export default {
  namespaced: true,
  state: {
    currentTab: '', // 当前选中的tab
    currentTabs: [], // 当前显示的tabs
    isCollapse: false, // 菜单是否折叠
  },
  mutations: {
    /**
     * 侧边栏折叠
     */
    updateIsCollapse(state, isCollapse) {
      state.isCollapse = isCollapse;
    },
  },
  actions: {},
};
