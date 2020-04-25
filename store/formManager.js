export const actions = {
  async performFetchAllManagerForms({ dispatch }) {
    let response = null

    try {
      response = await await this.$axios.get('v1/Voting/GetAllManagerVotings')
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  },
  async stopVoting({ dispatch }, { votingFormId }) {
    console.log('id', votingFormId)
    let response = null
    const fd = new FormData()
    fd.append('votingFormId', votingFormId)

    try {
      response = await await this.$axios.post('v1/Voting/EndVoting', fd)
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  }
}
