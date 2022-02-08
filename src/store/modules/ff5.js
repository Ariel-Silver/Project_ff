import Firebase from 'firebase'

export const ff5 = {
  namespaced: true,
  state: {
    characters: [],
    character: null
  },
  getters: {
  
  },
  mutations: {
    SET_CHARACTERS(state, newCharacter) {
      state.characters = newCharacter
    },
    ADD_CHARACTER_TO_CHARACTERS(state, newCharacter) {
      state.characters.push(newCharacter)
    },
    DELETE_CHARACTER(state, character) {
      state.characters.splice(character, 1)
    }
  },
  actions: {
    getAllCharacters(context) {
      Firebase.firestore()
        .collection('V').orderBy('name')
        .get()
        .then((collection) => {
          const characters = []
          collection.forEach((document) => {
            characters.push({ id: document.id, ...document.data() })
          })
          context.commit('SET_CHARACTERS', characters)
        })
    },
    addCharacter(context, newCharacter) {
      Firebase.firestore()
        .collection('V')
        .add({
          ...newCharacter
        })
        .then(() => {
          console.log('Document successfully written!')
        })
        .catch((error) => {
          console.error('Error writing document: ', error)
        })
      context.commit('ADD_CHARACTER_TO_CHARACTERS', newCharacter)
    },
    deleteCharacter(context, character) {
      Firebase.firestore()
        .collection('V')
        .doc(character)
        .delete()
        .then(() => {
          console.log('Document successfully deleted!')
        })
        .catch((error) => {
          console.error('Error removing document: ', error)
        })
      context.commit('DELETE_CHARACTER', character)
    }
  }
}

