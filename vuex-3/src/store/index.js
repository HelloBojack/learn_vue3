import Vue from 'vue'
import Vuex from 'vuex'
import MyVueX from '../MyVueX'

Vue.use(Vuex)

Vue.use(MyVueX)

export default new MyVueX.MyStore({
  state: {
    count: 1
  },
  getters: {
    countLength(state) {
      return state.count.toString().length
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    incrementN(state, playload) {
      state.count = state.count + playload
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  // modules: {
  // }
})
