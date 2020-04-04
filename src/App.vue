<template>
  <div id="app">
    <component :is="layout">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </component>
  </div>
</template>

<script>
  const default_layout = "default";

  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout) + '-layout';
      }
    },

    mounted() {
      if (!('locale' in localStorage)) {
        localStorage.setItem('locale', this.$root.$i18n.locale)
      } 
      this.$root.$i18n.locale = localStorage.locale
    }
  }
</script>

<style lang="scss">
  @import "assets/base.scss";
</style>
