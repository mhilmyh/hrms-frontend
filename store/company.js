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
  async index({ commit }) {
    this.dispatch('loading/company', true)
    try {
      const res = await this.$axios.$get('/api/company')
      commit('SET_OFFICES', res.offices)
      commit('SET_DEPARTMENTS', res.departments)
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/company')
    }
  },
  async create(_, { type, ...other }) {
    this.dispatch('loading/' + type, true)
    try {
      const res = await this.$axios.$post('/api/company/' + type, {
        ...other[type],
      })
      this.$helper.showSuccess(res.message, this)
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/' + type)
      this.dispatch('company/index')
    }
  },
  async update(_, { type, ...other }) {
    this.dispatch('loading/' + type, true)
    try {
      const res = await this.$axios.$put('/api/company/' + type, {
        ...other[type],
      })
      this.$helper.showSuccess(res.message, this)
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/' + type)
      this.dispatch('company/index')
    }
  },
  async delete(_, { type, id }) {
    this.dispatch('loading/' + type, true)
    try {
      const res = await this.$axios.$delete(`/api/company/${type}/${id}`)
      this.$helper.showSuccess(res.message, this)
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/' + type)
      this.dispatch('company/index')
    }
  },
}
