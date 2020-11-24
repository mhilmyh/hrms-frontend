export const state = () => ({
  count_employee: 0,
  count_office: 0,
  count_department: 0,
  count_timesheet: 0,
  latest_timesheet: [],
  best_employee: [],
})

export const mutations = {
  SET_DASHBOARD(state, payload) {
    state.count_employee = payload.count_employee
    state.count_office = payload.count_office
    state.count_department = payload.count_department
    state.count_timesheet = payload.count_timesheet
    state.latest_timesheet = payload.latest_timesheet
    state.best_employee = payload.best_employee
  },
}

export const actions = {
  async fetch({ commit }) {
    this.dispatch('loading/dashboard', true)
    try {
      const res = await this.$axios.$get('/api/dashboard')
      commit('SET_DASHBOARD', res)
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/dashboard')
    }
  },
  async reset() {
    this.dispatch('loading/dashboard', true)
    try {
      const res = await this.$axios.$delete('/api/dashboard/rating')
      this.$helper.showSuccess(res.message, this)
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/dashboard')
      this.dispatch('dashboard/fetch')
    }
  },
}
