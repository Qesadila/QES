<template>
  <div>
    <v-row>
      <v-col>
        <div
          style="padding-left:20px;"
          v-html="$t('htmlCode.f6sComFollowWidget')"
        ></div>
        <div
          style="padding-left:20px;"
          v-html="$t('htmlCode.acknowledgment')"
        ></div>
        <div
          style="padding-left:20px;"
          v-html="$t('htmlCode.projectOverview')"
        ></div>
      </v-col>
      <v-col>
        <div
          style="padding-left:20px;"
          v-html="$t('htmlCode.vimeoExplanationVideo')"
        ></div>
        <div
          style="padding-left:20px;"
          v-html="$t('htmlCode.fundRaising')"
        ></div>
      </v-col>
    </v-row>
    <span></span>
  </div>
</template>

<script>
export default {}
</script>
