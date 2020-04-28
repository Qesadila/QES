export const actions = {
  async getSinglePublicVoting({ dispatch }, { votingFormId }) {
    let response = null

    const fd = new FormData()
    fd.append('votingFormId', votingFormId)
    try {
      response = await await this.$axios.post(
        'v1/Voting/GetSinglePublicVoting',
        fd
      )
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  },
  async getSingleVoterVoting({ dispatch }, { votingFormId }) {
    let response = null

    const fd = new FormData()
    fd.append('votingFormId', votingFormId)
    try {
      response = await await this.$axios.post(
        'v1/Voting/GetSingleVoterVoting',
        fd
      )
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  },
  async getSingleManagerVoting({ dispatch }, { votingFormId }) {
    let response = null

    const fd = new FormData()
    fd.append('votingFormId', votingFormId)
    try {
      response = await await this.$axios.post(
        'v1/Voting/GetSingleManagerVoting',
        fd
      )
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  }
}
