<template>
  <v-snackbar
    :value="$store.state.snackbar.isOpen"
    :timeout="6000"
    top
    right
    :color="$store.state.snackbar.color"
  >
    {{ $store.state.snackbar.text }}
  </v-snackbar>
</template>

<script>
export default {}
</script>
