export const state = () => ({
  all: [],
  notif: [],
})

export const mutations = {
  SET_USERS(state, payload = []) {
    state.all = payload
  },
  SET_NOTIF(state, payload = []) {
    state.notif = payload
  },
}

export const actions = {
  async index({ commit, state }) {},

  async register(_, data) {
    try {
      const res = await this.$axios.$post('/api/auth/register', { ...data })
      this.dispatch('alert/show', {
        type: 'success',
        message: res.message,
      })
      this.$router.push({ path: '/login' })
    } catch (err) {
      this.dispatch('alert/show', {
        type: 'error',
        message: this.$helper.errMsg(err),
      })
    }
  },

  async update({ commit, state }) {},

  async delete({ commit, state }) {},

  async notif({ commit }) {
    this.dispatch('loading/notif', true)
    try {
      const res = await this.$axios.$get('/api/auth/notification')
      commit('SET_NOTIF', res.notifications)
    } catch (err) {
      this.dispatch('alert/show', {
        type: 'error',
        message: this.$helper.errMsg(err),
      })
    } finally {
      this.dispatch('loading/notif')
    }
  },

  async clear(_, id = '') {
    this.dispatch('loading/notif', true)
    try {
      await this.$axios.$delete('/api/auth/notification/' + id)
    } catch (err) {
      this.dispatch('alert/show', {
        type: 'error',
        message: this.$helper.errMsg(err),
      })
    } finally {
      this.dispatch('loading/notif')
    }
  },
}
