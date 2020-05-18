export const actions = {
  async performAddList({ commit, dispatch }, { name, isPublic }) {
    const fd = new FormData()
    fd.append('voterListName', name)
    fd.append('isPublic', isPublic)

    let response = null

    try {
      response = await await this.$axios.put('v1/VoterList/CreateVoterList', fd)
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  },
  async performFetchPrivateInfo({ dispatch }) {
    let response = null

    try {
      response = await await this.$axios.get('v1/VoterList/GetPrivateInfo')
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  },
  async performFetchPrivateDataFromList({ dispatch }, { id }) {
    let response = null

    try {
      response = await await this.$axios.put('v1/VoterList/GetPrivateInfo')
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  },
  async performAssignVoterToList({ dispatch }, { voterListId, userEmail }) {
    let response = null

    const fd = new FormData()
    fd.append('voterListId', voterListId)
    fd.append('voterEmail', userEmail)

    try {
      response = await await this.$axios.put('v1/VoterList/AssignVoter', fd)
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  }
}
