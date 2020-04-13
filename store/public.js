export const actions = {
  async performFetchAllPublicForms({ dispatch }) {
    let response = null

    try {
      response = await await this.$axios.get('v1/Voting/GetAllPublicVotings')
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  }
}
