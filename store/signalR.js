export const state = () => ({
  signalRStatus: '',
  signalRIdentity: '',
  signalRCertHash: '',
  signalRStatusText: ''
})

export const mutations = {
  onStatusUpdate(state, { status, identity, certHash }) {
    state.signalRStatus = status
    state.signalRIdentity = identity
    state.signalRCertHash = certHash
  },
  setSignalRStatus(state) {
    const st = state.signalRStatus

    switch (st) {
      case 'not-connected':
        state.signalRStatusText = 'The website is not connected to the server'
        break
      case 'identity-not-selected':
        state.signalRStatusText =
          'Please select identity first in the QesadilaAuth'
        break
      case 'identity-selected':
        state.signalRStatusText =
          'Identity selected in QesadilaAuth: ' + state.signalRIdentity
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
      default:
        state.signalRStatusText = 'Unknown state: ' + st
        break
    }
  }
}
