import Cookie from 'js-cookie'
import { hashPassword } from '~/code/helpers/hashPassword'

export const state = () => {
  return {
    auth: null,
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
  async performLogin({ commit }, { username, password }) {
    const fd = new FormData()
    fd.append('email', username)
    fd.append('passwordSHA256Hash', hashPassword(password))

    const response = await this.$axios
      .post('v1/Authorize/Login', fd)
      .catch((e) => {
        // console.log(e.response)
      })

    if (response) {
      commit('setAuth', true)
      commit('setAuthUser', response.data.user)
      this.$axios.setHeader('Authorization', 'Bearer ' + response.data.token)

      Cookie.set('JWT', response.data.token)
    }
  },

  async performRegister(
    _store,
    { username, password, name, acceptGDPR, acceptCommercial, language }
  ) {
    const fd = new FormData()

    fd.append('email', username)
    fd.append('name', name)
    fd.append('language', language)
    fd.append('passwordHash', password)
    fd.append('terms', acceptGDPR)
    fd.append('commercial', acceptCommercial)

    const response = await this.$axios
      .post('v1/Authorize/Register', fd)
      .catch((e) => {
        // console.log(e.response)
      })

    if (response) {
      this.$router.push('/auth/verify-email')
    }
  }
}
