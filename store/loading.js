export const state = () => ({
  loading: true
});
export const mutations = {
  setLoading(state, condition) {
    state.loading = condition;
  }
};
export const actions = {
  loading({commit}, payload) {
    commit('setLoading', payload.condition);
  }
};
