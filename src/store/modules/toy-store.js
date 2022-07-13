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
    loadToys({ commit },{filterBy}) {
      // if(!filterBy) filterBy = {}
      toyService.query(filterBy).then((toys) => {
        commit({ type: "setToys", toys })
      })
    },
    removeToy({ commit }, payload) {
      commit(payload) //check it out!!!
      return toyService
        .remove(payload.toyId)
        .then(() => {
          commit({ type: "clearRemoveToy" })
        })
        .catch((err) => {
          commit({ type: "undoRemoveToy" })
          throw err
        })
    },
    saveToy({ commit }, { toy }) {
      console.log(toy);
      toyService.save(toy).then((toy) => {
        commit({ type: 'saveToy', toy })
      })
    },
  },
}
