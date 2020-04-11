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
    this.connection.on('Authenticate', (cert, name) => {
      console.log("on('Authenticate)", cert, name)
      this.authenticated = 'Authenticate ' + name
      // questionHub.$emit('score-changed', { questionId, score })
    })
    this.connection.on('Logout', (questionId, score) => {
      console.log("on('Logout)", questionId, score)
      this.authenticated = 'Unauthenticated'
      // questionHub.$emit('score-changed', { questionId, score })
    })
  },
  methods: {
    onclick() {
      console.log('click')
      return this.connection.invoke('SignMessage', btoa('click'))
    }
  }
}
</script>
