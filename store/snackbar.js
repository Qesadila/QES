export const state = () => {
  return {
    isOpen: false,
    text: '',
    color: ''
  }
}

export const mutations = {
  setOpen(state, { color, text }) {
    state.text = text
    state.isOpen = true
    state.color = color
  },
  setClose(state) {
    state.isOpen = false
  }
}

export const actions = {
  openError: ({ commit }, text) => {
    commit('setOpen', { text, color: 'red' })
  },
  openWarning: ({ commit }, text) => {
    commit('setOpen', { text, color: 'orange' })
  },
  openSuccess: ({ commit }, text) => {
    commit('setOpen', { text, color: 'green' })
  },
  close: ({ commit }) => {
    commit('setClose')
  }
}
