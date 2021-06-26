import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: {
      username: ""
    },
    items: []
  },
  mutations: {
    SetLogin(state, payload) {
      state.login = payload
    },
    SetLogout(state) {
      state.login = Object.assign({ username: "" })
    },
    SetItem(state, payload) {
      state.items.push({
        id: state.items.length +1,
        name: payload.name,
        urlImage: payload.urlImage
      })
    },
    UpdateItem(state, payload) {
      state.items = [
        ...state.items.filter(element => element.id !== payload.id),
        payload
     ]
    },
    DelItem(state, payload) {
      state.items = state.items.filter(element => element.id !== payload.id)
    }
  },
  actions: {
    Login({ commit }, payload) {
      commit('SetLogin', payload)
    },
    Logout({commit}){
      commit('SetLogout')
    },
    AddItems({ commit }, payload) {
      commit('SetItem', payload)
    },
    EditItem({ commit }, payload) {
      commit('UpdateItem', payload)
    },
    DeleteItem({commit}, payload) {
      commit('DelItem', payload)
    }
  },
  getters: {
    username(state) {
      return state.login.username
    },
    items(state) {
      return state.items
    }
  },
  modules: {
  }
})
