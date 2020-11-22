export const state = () => ({
  offices: [],
  departments: [],
})

export const mutations = {
  SET_OFFICES(state, value = []) {
    state.offices = value
  },
  SET_DEPARTMENTS(state, value = []) {
    state.departments = value
  },
}

export const actions = {
  async index({ commit, state }) {},
  async create({ commit, state }) {},
  async update({ commit, state }) {},
  async delete({ commit, state }) {},
}
