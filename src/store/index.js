import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import location from './location'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    location
  }
})
