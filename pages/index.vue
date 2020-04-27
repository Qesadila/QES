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
          <h2>Fund raising</h2>
          <p>
            Please <b>donate money</b> to support this project to transparent
            account
            <a
              href="https://ib.fio.sk/ib/transparent?a=2901594765&amp;l=ENGLISH"
              >SK3783300000002901594765/FIOBCZPPXXX</a
            >
            owned by Srdcom Doma NGO.
          </p>
          <p>
            We will use this money for further development and penetration
            bounty system
          </p>
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
