export const state = () => ({
  all: [],
})

export const mutations = {
  SET_TIMESHEETS(state, value = []) {
    state.all = value
  },
}

export const actions = {
  async index({ commit, state }) {},
  async create({ commit, state }) {},
  async delete({ commit, state }) {},
}
