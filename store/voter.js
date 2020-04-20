const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

export const actions = {
  async performFetchAllVoterForms({ dispatch }) {
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
  async performAddVoter({ commit, dispatch }, { email, file, isQes }) {
    const encodedFile = await toBase64(file)

    const fd = new FormData()
    fd.append('voterEmail', email)
    fd.append('isQes', isQes)
    fd.append(
      'fileContent',
      encodedFile.replace('data:application/octet-stream;base64,', '')
    )

    let response = null

    try {
      response = await await this.$axios.post('v1/Voter/SubmitGDPR', fd)
    } catch (e) {
      dispatch('snackbar/openError', e.response.data.detail, { root: true })
    }

    if (response) {
      return response.data
    }
  }
}
