<template>
  <v-snackbar
    :value="$store.state.snackbar.isOpen"
    :timeout="10000"
    top
    :color="$store.state.snackbar.color"
    @input="$store.commit('snackbar/setClose')"
  >
    {{ $store.state.snackbar.text }}
  </v-snackbar>
</template>

<script>
export default {}
</script>
