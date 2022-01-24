import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: [],
    gamesFilter: []
  },
  mutations: {
    setGames(state, payload) {
      state.games = payload
    },
    setGamesFilter(state, payload) {
      state.gamesFilter = payload
    }
  },
  actions: {
    async getGames({commit}) {
      try {
        const response = await fetch('https://www.moogleapi.com/api/v1/games/')

        const data = await response.json()
        commit('setGames', data)
        commit('setGamesFilter', data)
      } catch (error) {
        console.error(error)
      }
    },
   
  },
  modules: {
  }
})
