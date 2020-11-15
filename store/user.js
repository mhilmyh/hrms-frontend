export const state = () => ({
  all: [],
  current: {},
})

export const mutations = {
  all(state, value = []) {
    state.all = value
  },
  current(state, value = {}) {
    state.current = value
  },
}

export const actions = {
  index({ commit, state }) {},
  update({ commit, state }) {},
  delete({ commit, state }) {},
}
