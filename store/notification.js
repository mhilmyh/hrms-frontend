export const state = () => ({
  all: [],
})

export const mutations = {
  all(state, value = []) {
    state.all = value
  },
}

export const actions = {
  index({ commit, state }) {},
  delete({ commit, state }) {},
}
