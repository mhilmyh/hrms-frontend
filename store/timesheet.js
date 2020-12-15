export const state = () => ({
  all: [],
  today: [],
})

export const mutations = {
  SET_TIMESHEETS(state, value = []) {
    state.all = value
  },
  SET_TODAY(state, value = []) {
    state.today = value
  },
}

export const actions = {
  async index({ commit }) {
    this.dispatch('loading/timesheet', true)
    try {
      const res = await this.$axios.$get('/api/timesheet')
      commit('SET_TIMESHEETS', res.timesheets)
      commit('SET_TODAY', res.today_timesheets)
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/timesheet')
    }
  },
  async create(_, activities) {
    this.dispatch('loading/timesheet', true)
    try {
      const res = await this.$axios.$post('/api/timesheet', { activities })
      this.$helper.showSuccess(res.message, this)
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/timesheet')
      this.dispatch('timesheet/index')
    }
  },
  async delete(_, id) {
    this.dispatch('loading/timesheet', true)
    try {
      const res = await this.$axios.$delete('/api/timesheet/' + id)
      this.$helper.showSuccess(res.message, this)
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/timesheet')
      this.dispatch('timesheet/index')
    }
  },
  async clear() {
    this.dispatch('loading/timesheet', true)
    try {
      const res = await this.$axios.$delete('/api/timesheet/clear')
      this.$helper.showSuccess(res.message, this)
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/timesheet')
      this.dispatch('dashboard/fetch')
    }
  },
  async approve(_, id) {
    this.dispatch('loading/timesheet', true)
    try {
      const res = await this.$axios.$put('/api/timesheet/approve/' + id)
      this.$helper.showSuccess(res.message, this)
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/timesheet')
      this.dispatch('timesheet/index')
    }
  },
}
