import Cookie from 'js-cookie'
import { hashPassword } from '~/code/helpers/hashPassword'

export const state = () => {
  return {
    auth: false,
    user: {}
  }
}
export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },
  setAuthUser(state, user) {
    state.user = user
  }
}
export const actions = {
  async performLogin({ commit, dispatch }, { username, password }) {
    const fd = new FormData()
    fd.append('email', username)
    fd.append('passwordSHA256Hash', hashPassword(password))

    let response = null

    try {
      response = await await this.$axios.post('v1/Authorize/Login', fd)
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      commit('setAuth', true)
      commit('setAuthUser', response.data.user)
      this.$axios.setHeader('Authorization', 'Bearer ' + response.data.token)

      Cookie.set('JWT', response.data.token)
      Cookie.set('JWT_USER', JSON.stringify(response.data.user))
      this.$router.push('/')
    }
  },

  async performRegister(
    { dispatch },
    { username, password, name, acceptGDPR, acceptCommercial, language }
  ) {
    const fd = new FormData()

    fd.append('email', username)
    fd.append('name', name)
    fd.append('language', language)
    fd.append('passwordHash', password)
    fd.append('terms', acceptGDPR)
    fd.append('commercial', acceptCommercial)

    let response = null

    try {
      response = await this.$axios.post('v1/Authorize/Register', fd)
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      this.$router.push('/auth/verify-email')
    }
  },
  performLogout({ commit }) {
    commit('setAuth', false)
    commit('setAuthUser', {})
    Cookie.remove('JWT')
    Cookie.remove('JWT_USER')
    delete this.$axios.defaults.headers.common.Authorization

    this.$router.push('/auth/login')
  }
}
