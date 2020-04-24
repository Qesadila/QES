<template>
  <div>
    <div v-html="$t('htmlCode.projectOverview')"></div>
    <span></span>
    <div style="padding:62.5% 0 0 0;position:relative;">
      <iframe
        src="https://player.vimeo.com/video/406483646?byline=0&portrait=0"
        style="position:absolute;top:0;left:0;width:640px;height:400px"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      >
      </iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>
  </div>
</template>

<script>
export default {}
</script>
