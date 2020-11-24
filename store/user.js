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
  async index({ commit }) {
    try {
      const res = await this.$axios.$get('/api/user')
      commit('SET_USERS', res.users)
    } catch (err) {
      this.$helper.showError(err, this)
    }
  },

  async register(_, data) {
    try {
      const res = await this.$axios.$post('/api/auth/register', { ...data })
      this.$helper.showSuccess(res.message, this)
      this.$router.push({ path: '/login' })
    } catch (err) {
      this.$helper.showError(err, this)
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
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/notif')
    }
  },

  async clear(_, id = '') {
    this.dispatch('loading/notif', true)
    try {
      await this.$axios.$delete('/api/auth/notification/' + id)
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/notif')
      this.dispatch('user/notif')
    }
  },

  async upload(_, image) {
    const data = new FormData()
    data.set('image', image)

    this.dispatch('loading/profile', true)
    try {
      const res = await this.$axios.$post('/api/image/profile', data)
      this.$helper.showSuccess(res.message, this)
      this.$auth.fetchUser()
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/profile')
    }
  },

  async rating(_, { id, value }) {
    this.dispatch('loading/profile', true)
    try {
      await this.$axios.$put('/api/user', { id, rating: value })
    } catch (err) {
      this.$helper.showError(err, this)
    } finally {
      this.dispatch('loading/profile')
    }
  },
}
