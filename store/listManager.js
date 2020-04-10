export const actions = {
  async performAddList({ commit, dispatch }, { name, isPublished }) {
    const fd = new FormData()
    fd.append('voterListName', name)
    fd.append('isPublic', isPublished)

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
  async performFetchList({ dispatch }) {
    let response = null

    try {
      response = await await this.$axios.get('v1/VoterList/GetPublicLists')
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
      response = await await this.$axios.put('v1/VoterList/GetPublicLists')
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  },
  async performAssignVoterToList({ dispatch }, { listId, userId }) {
    let response = null

    try {
      response = await await this.$axios.put('v1/VoterList/GetPublicLists')
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  }
}
