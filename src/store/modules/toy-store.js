import { toyService } from "../../services/toy-service.js"

export default {
  state: {
    toys: [],
    lastRemovedToy: null,
  },
  getters: {
    toys(state) {
      return state.toys
    },
     },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    removeToy(state, { toyId }) {
      const idx = state.toys.findIndex((t) => t._id === toyId)
      state.toys.splice(idx, 1)
    },
    clearRemoveToy(state) {
      state.lastRemovedTodo = null
    },
    undoRemoveToy(state) {
      state.toys.unshift(state.lastRemovedToy)
      state.lastRemovedToy = null
    },
    saveToy(state, { toy }) {
      const idx = state.toys.findIndex((currToy) => currToy._id === toy._id)
      if (idx !== -1) state.toys.splice(idx, 1, toy)
      else state.toys.push(toy)
    },

  },
  actions: {
    async loadToys({ commit }, { filterBy }) {
      // if(!filterBy) filterBy = {}
      try {
        const loadedToys = await toyService.query(filterBy)
        commit({ type: "setToys", toys: loadedToys })
      } catch (err) {
        throw err
      }
    },
    async removeToy({ commit , rootGetters }, payload) {
      let currUser = rootGetters.loggedInUser//goes to the getter tree
      if(currUser.isAdmin === false) return
      commit(payload) //check it out!!!
      try {
      let temp =   await toyService.remove(payload.toyId)
            commit({ type: "clearRemoveToy" })
       } catch (err) {
            commit({ type: "undoRemoveToy" })
            throw err
        }
        
    },
    async saveToy({ commit }, { toy }) {
      try{ 
        await toyService.save(toy)
        commit({ type: "saveToy", toy })
      } catch(err){
        throw err
      }
    },
  },
}
