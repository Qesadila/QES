<template>
  <div>
    <h1>Can open only after login</h1>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>

<style></style>
