import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { ff1 } from './modules/ff1'
import { ff2 } from './modules/ff2'
import { ff3 } from './modules/ff3'
import { ff4 } from './modules/ff4'
import { ff5 } from './modules/ff5'
import { ff6 } from './modules/ff6'
import { ff7 } from './modules/ff7'
import { ff8 } from './modules/ff8'
import { ff9 } from './modules/ff9'
import { ff10 } from './modules/ff10'
import { ff12 } from './modules/ff12'
import { ff13 } from './modules/ff13'
import { ff15 } from './modules/ff15'
import { userModule } from './modules/user'


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
    ff1,
    ff2,
    ff3,
    ff4,
    ff5,
    ff6,
    ff7,
    ff8,
    ff9,
    ff10,
    ff12,
    ff13,
    ff15,
    userModule
  }
})
