import Firebase from 'firebase'

export const userAdmin = {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    getUser: (state) => {
      return state.user
    },
    getUserEmail: (state) => {
      return state.user.email
    }
  },
  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser
    }
  },

  actions: {
    subscribeToAuthStateChange(context) {
      Firebase.auth().onAuthStateChanged((user) => {
        context.commit('SET_USER', user || null)
      })
    },
    async logIn(_context, credentials) {
      await Firebase.auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
          console.log('login succeful')
        })
    },
    async signOut() {
      await Firebase.auth()
        .signOut()
        .then(() => {
        })
    }
  }
}
