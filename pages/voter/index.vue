<template>
  <div>
    Toto vidí pouze přihlášený voter

    <router-link to="voter/form/1">To form</router-link>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>

<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>
