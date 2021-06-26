import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: {
      username: ""
    }
  },
  mutations: {
    SetLogin(state, payload) {
      state.login = payload
    }
  },
  actions: {
    Login({ commit }, payload) {
      commit('SetLogin', payload)
    }
  },
  modules: {
  }
})
