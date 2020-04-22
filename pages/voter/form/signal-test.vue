<template>
  <div>
    <button class="btn btn-primary" @click="onclick">Click</button>
  </div>
</template>

<script>
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

export default {
  data: () => ({
    authenticated: 'Unauthenticated',
    connection: null
  }),
  mounted() {
    this.connection = new HubConnectionBuilder()
      .withUrl('http://localhost:58080/hubs/signin')
      .configureLogging(LogLevel.Information)
      .build()

    this.connection.start()
    this.connection.on('Authenticate', (cert) => {
      const fd = new FormData()
      fd.append('base64message', cert)
      this.$axios.post('v1/Voter/SubmitVote', fd)
    })
    this.connection.on('Logout', (questionId, score) => {
      this.authenticated = 'Unauthenticated'
      // questionHub.$emit('score-changed', { questionId, score })
    })
  },
  methods: {
    onclick() {
      return this.connection.invoke(
        'SignMessage',
        btoa('{"value": "test"}'),
        'EnVoterAnswer'
      )
    }
  }
}
</script>
