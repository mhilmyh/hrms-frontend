export const state = () => ({
  all: [],
})

export const mutations = {
  SET_NOTIF(state, value = []) {
    state.all = value
  },
}

export const actions = {
  async index({ commit, state }) {},
  async delete({ commit, state }) {},
}
