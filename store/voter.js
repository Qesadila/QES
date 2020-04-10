const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

export const actions = {
  async performAddVoter({ commit, dispatch }, { email, file, isQES }) {
    const encodedFile = await toBase64(file)

    const fd = new FormData()
    fd.append('voterEmail', email)
    fd.append('isQes', isQES)
    fd.append(
      'base64File',
      encodedFile.replace('data:application/octet-stream;base64,', '')
    )
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
