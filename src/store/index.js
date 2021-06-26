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
    },
    SetLogout(state) {
      state.login = Object.assign({ username: "" })
    }
  },
  actions: {
    Login({ commit }, payload) {
      commit('SetLogin', payload)
    },
    Logout({commit}){
      commit('SetLogout')
    }
  },
  getters: {
    username(state) {
      return state.login.username
    }
  },
  modules: {
  }
})
