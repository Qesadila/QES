<template>
  <div>
    <button class="btn btn-primary"  @click="onclick">Click</button>
    </div>
</template>

<script>

import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'
 
const connection = new HubConnectionBuilder()
      .withUrl('http://localhost:58080/hubs/signin')
      .configureLogging(LogLevel.Information)
      .build()
export default {
    data: () => ({
        authenticated: 'Unauthenticated',
    }),
    mounted(){
        connection.start()

        connection.on('Authenticate', (cert, name) => {
            console.log("on('Authenticate)",cert, name);
            this.authenticated = "Authenticate "+name;
            //questionHub.$emit('score-changed', { questionId, score })
        });
        connection.on('Logout', (questionId, score) => {
            console.log("on('Logout)",questionId, score);
            this.authenticated = "Unauthenticated";
            //questionHub.$emit('score-changed', { questionId, score })
        });
    },
    methods: {
        async onclick() {
            console.log("click");
            return connection.invoke('Ping', 'click')
        }
    }
};
</script>
