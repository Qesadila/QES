<template>
  <div>
    <h1>{{ $t('welcome') }}</h1>

    {{ $store.state.auth.auth }}
  </div>
</template>

<script>
export default {}
</script>
