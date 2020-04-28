<template>
  <div>
    <v-row>
      <v-col>
        <div
          v-html="$t('htmlCode.projectOverview')"
          style="padding-left:20px;"
        ></div>
      </v-col>
      <v-col>
        <div style="padding:20px;position:relative;">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/e1LkfhTwZpI"
          >
          </iframe>
          <h2>{{ $t('anonym.fundRaising') }}</h2>
          <div
            v-html="$t('htmlCode.fundRaising')"
            style="padding:20px 0;"
          ></div>
          <iframe
            width="100%"
            height="400"
            src="https://player.vimeo.com/video/406483646?byline=0&amp;portrait=0"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          >
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </v-col>
    </v-row>
    <span></span>
  </div>
</template>

<script>
export default {}
</script>
