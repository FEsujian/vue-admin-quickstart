export default {
  /**
   * 更新页面布局
   * @param state
   * @param layout
   */
  updateLayout(state, layout) {
    state.layout = layout || 'default';
  },
};
