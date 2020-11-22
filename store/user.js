export const state = () => ({
  all: [],
})

export const mutations = {
  SET_USERS(state, value = []) {
    state.all = value
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
}
