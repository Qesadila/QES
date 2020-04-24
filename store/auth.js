import Cookie from 'js-cookie'
import { hashPassword } from '~/code/helpers/hashPassword'
export const state = () => ({
  auth: false,
  user: {},
  authJWT: '',
  authData: ''
})

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },
  setAuthUser(state, user) {
    state.user = user
  },
  setAuthJWT(state, authJWT) {
    state.authJWT = authJWT
    console.log('setting jwt')
  },
  setAuthData(state, authData) {
    state.authData = authData
  }
}
export const actions = {
  async performLoginWithCertificate({ commit, dispatch }, { data }) {
    const fd = new FormData()
    fd.append('base64AuthenticateMessage', data)

    let response = null

    try {
      response = await await this.$axios.post(
        'v1/Authorize/LoginWithCertificate',
        fd
      )
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      commit('setAuth', true)
      commit('setAuthJWT', response.data.token)
      commit('setAuthData', response.data)
      if (response.data.users.length > 0) {
        commit('setAuthUser', response.data.users[0])
      } else if (response.data.voters.length > 0) {
        commit('setAuthUser', response.data.voters[0])
      }
      this.$axios.setHeader('Authorization', 'Bearer ' + response.data.token)

      this.$router.push('/')
    }
  },
  performLogoutFromCertificate({ commit, dispatch }) {
    commit('setAuthJWT', '')
    commit('setAuthData', '')

    const JWT = Cookie.get('JWT')
    const JWTUser = JSON.parse(Cookie.get('JWT_USER'))

    if (JWT) {
      commit('setAuth', true)
      commit('setAuthUser', JWTUser)
      this.$axios.setHeader('Authorization', 'Bearer ' + JWT)
    } else {
      commit('setAuth', false)
    }
  },
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
    fd.append('passwordHash', hashPassword(password))
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
  },
  async performVerifyEmail({ dispatch }, { token }) {
    let response = null

    const fd = new FormData()

    fd.append('token', token)

    try {
      response = await this.$axios.put('v1/Authorize/ConfirmEmailByToken', fd)
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      this.$router.push('/auth/login')
      dispatch('snackbar/openSuccess', 'Succesfully verified!', {
        root: true
      })
    }
  },
  async performGetResetPasswordLink({ dispatch }, { email }) {
    let response = null

    const fd = new FormData()

    fd.append('email', email)

    try {
      response = await this.$axios.post('v1/Authorize/RestorePassword', fd)
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      // this.$router.push('/auth/login')
      dispatch('snackbar/openSuccess', 'Link was sent', {
        root: true
      })
    }
  },
  async performResendToken({ dispatch }, { email }) {
    let response = null

    const fd = new URLSearchParams()

    fd.append('email', email)

    try {
      response = await this.$axios.post(
        `v1/Authorize/NewEmailConfirmationToken`,
        fd
      )
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      this.$router.push('/auth/verify-email')
      dispatch('snackbar/openSuccess', 'Succesfully resend!', {
        root: true
      })
    }
  }
}
