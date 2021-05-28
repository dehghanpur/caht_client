export const state = () => ({
  name: '',
  community: '',
  form: false
});
export const mutations = {
  setName(state, name) {
    state.name = name;
  },
  setCommunity(state, community) {
    state.community = community
  },
  toggleForm(state) {
    state.form = !state.form
  }
};
export const actions = {
  nameAction({commit}, payload) {
    commit('setName', payload.name);
  },
  communityAction({commit}, payload) {
    commit('setCommunity', payload.community)
  },
  toggleAction({commit}){
    commit('toggleForm')
  }
};
