import Cookie from "js-cookie";

export const state = () => ({
  isAuth: false,
  id: null,
  name: null
});

export const mutations = {
  setInfo(state, info) {
    state.isAuth = true;
    state.id = info.id;
    state.name = info.name

  }
}
export const actions = {

  authenticateUser({commit}, info) {
    localStorage.setItem("id", info.id);
    localStorage.setItem("name", info.name);
    Cookie.set("id", info.id,{ expires: 90 });
    Cookie.set("name", info.name,{ expires: 90 });
    commit('setInfo', info);
  },
  initAuth(context, req) {
    let id, name;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("id="));
      const nameCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("name="));
      if (!jwtCookie) {
        return;
      }
      id = jwtCookie.split("=")[1];
      name = nameCookie.split("=")[1];

    } else {
      id = localStorage.getItem("id");
      name = localStorage.getItem("name");
    }

    if (id) {

      context.commit("setInfo", {id: id, name: name});
    }


  }

};

export const getters = {
  getAuth: (state) => {
    return state.isAuth
  }
};
