export const state = () => ({
  dashboard: false,
  notif: false,
  company: false,
  office: false,
  department: false,
  timesheet: false,
  profile: false,
})

export const mutations = {
  SET_NOTIF(state, payload) {
    state.notif = payload
  },
  SET_COMPANY(state, payload) {
    state.company = payload
  },
  SET_OFFICE(state, payload) {
    state.office = payload
  },
  SET_DEPARTMENT(state, payload) {
    state.department = payload
  },
  SET_TIMESHEET(state, payload) {
    state.timesheet = payload
  },
  SET_PROFILE(state, payload) {
    state.profile = payload
  },
  SET_DASHBOARD(state, payload) {
    state.dashboard = payload
  },
}

export const actions = {
  notif({ commit }, value = false) {
    commit('SET_NOTIF', value)
  },
  company({ commit }, value = false) {
    commit('SET_COMPANY', value)
  },
  office({ commit }, value = false) {
    commit('SET_OFFICE', value)
  },
  department({ commit }, value = false) {
    commit('SET_DEPARTMENT', value)
  },
  timesheet({ commit }, value = false) {
    commit('SET_TIMESHEET', value)
  },
  profile({ commit }, value = false) {
    commit('SET_PROFILE', value)
  },
  dashboard({ commit }, value = false) {
    commit('SET_DASHBOARD', value)
  },
}
