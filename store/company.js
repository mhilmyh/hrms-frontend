export const state = () => ({
  offices: [],
  departments: [],
  office: {},
  department: {},
})

export const mutations = {
  offices(state, value = []) {
    state.offices = value
  },
  departments(state, value = []) {
    state.departments = value
  },
  office(state, value = {}) {
    state.office = value
  },
  department(state, value = {}) {
    state.department = value
  },
}

export const actions = {
  index({ commit, state }) {},
  create({ commit, state }) {},
  update({ commit, state }) {},
  delete({ commit, state }) {},
}
