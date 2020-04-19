<template>
  <div>
    <h1>{{ $t('general.contentNeedsLoginMessage') }}</h1>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>

<style></style>
