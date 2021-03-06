export const state = () => ({
  message: '',
  type: 'info',
})

export const mutations = {
  SET_ALERT_MESSAGE(state, { type = 'info', message = '' }) {
    state.message = message
    state.type = type
  },
  RESET_ALERT_MESSAGE(state) {
    state.message = ''
  },
}

export const actions = {
  show({ commit }, payload) {
    commit('SET_ALERT_MESSAGE', payload)
  },
  hide({ commit }) {
    commit('RESET_ALERT_MESSAGE')
  },
}
