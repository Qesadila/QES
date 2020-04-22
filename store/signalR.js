export const state = () => ({
  signalRStatus: '',
  signalRIdentity: '',
  signalRCertHash: '',
  signalRStatusText: ''
})

export const mutations = {
  onStatusUpdate(state, { status, identity, certHash }) {
    console.log('state.signalRStatus', status)
    console.log('state.context', state)
    state.signalRStatus = status
    state.signalRIdentity = identity
    state.signalRCertHash = certHash
    // state.signalRStatusText = this.getSignalRStatus(state, status)
    console.log('state.signalRStatusText', state.signalRStatusText)
  },
  setSignalRStatus(state) {
    switch (state.signalRStatus) {
      case 'not-connected':
        state.signalRStatusText = 'The website is not connected to the server'
        break
      case 'identity-not-selected':
        state.signalRStatusText =
          'Please select identity first in the QesadilaAuth'
        break
      case 'identity-selected':
        state.signalRStatusText =
          'You are not signed in QesadilaAuth: ' + state.signalRIdentity
        break
      case 'reconnecting':
        state.signalRStatusText = 'Reconnecting to QesadilaAuth'
        break
      case 'reconnected':
        state.signalRStatusText =
          'Reconnected to QesadilaAuth, checking current state'
        break
      case 'disconnected':
        state.signalRStatusText = 'Disconnected from QesadilaAuth'
        break
    }
    state.signalRStatusText = 'Unknown state: ' + state.signalRStatus
  }
}
