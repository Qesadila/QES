<template>
  <div>
    <h1>Qesadila Dashboard</h1>
    <p>{{ $store.state.auth.user.name }}, vitajte v qesadile.</p>
    <p
      v-if="
        $store.state &&
          $store.state.auth &&
          $store.state.auth.tokenData &&
          $store.state.auth.tokenData.iss === 'Qesadila'
      "
    >
      Ste prihlásený cez štátnu autorizačnú bránu
    </p>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  mounted() {
    // console.log('$store.state.tokenData', this.$store.state.auth.tokenData)
  }
}
</script>
