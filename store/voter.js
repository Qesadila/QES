export const state = () => ({
  lastSubmittedVoteResult: ''
})

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

export const mutations = {
  setLastSubmittedVoteResult(state, lastSubmittedVoteResult) {
    state.lastSubmittedVoteResult = lastSubmittedVoteResult
  }
}
export const actions = {
  async performFetchVoterForm({ dispatch }) {
    let response = null

    try {
      response = await await this.$axios.get('v1/Voting/GetAllVoterVotings')
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  },
  async performVerifyVoter({ dispatch }, { token }) {
    let response = null

    const fd = new FormData()

    fd.append('token', token)

    try {
      response = await await this.$axios.post(
        'v1/Voter/ConfirmRegistration',
        fd
      )
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      this.$router.push('/')
      dispatch(
        'snackbar/openSuccess',
        'Succesfully verified! Please authenticate using the QesadilaAuth deksktop app.',
        {
          root: true
        }
      )
    }
  },
  async performAddVoter({ commit, dispatch }, { email, file, isQes }) {
    const encodedFile = await toBase64(file)

    const fd = new FormData()
    fd.append('voterEmail', email)
    fd.append('isQes', isQes)
    fd.append(
      'fileContent',
      encodedFile
        .replace('data:application/octet-stream;base64,', '')
        .replace('data:application/vnd.etsi.asic-e+zip;base64,', '')
    )

    let response = null

    try {
      response = await await this.$axios.post('v1/Voter/SubmitGDPR', fd)
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      dispatch('snackbar/openSuccess', 'Voter has been added to the voter list')
      return response.data
    }
  },
  async performSubmitVote({ commit, dispatch, router }, { data }) {
    const fd = new FormData()
    fd.append('base64message', data)
    let response = null
    try {
      response = await await this.$axios.post('v1/Voter/SubmitVote', fd)
    } catch (e) {
      if (e.response.data && e.response.data.detail) {
        dispatch('snackbar/openError', e.response.data.detail, { root: true })
      } else {
        dispatch('snackbar/openError', e.response, { root: true })
      }
    }

    if (response) {
      commit('setLastSubmittedVoteResult', response.data)
      return response.data
    }
  }
}
