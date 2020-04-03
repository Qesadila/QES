<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <b-card class="main-card mb-3">
      <full-calendar :events="events"></full-calendar>
    </b-card>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";
  import { FullCalendar } from 'vue-full-calendar'

  export default {
    components: {
      PageTitle,
      FullCalendar,
    },
    data: () => ({
      heading: 'Calendar',
      subheading: 'Calendars are used in a lot of apps. We thought to include one for VueJS.',
      icon: 'pe-7s-car icon-gradient bg-warm-flame',

      events: [
        {
          title  : 'event1',
          start  : '2010-01-01',
        },
        {
          title  : 'event2',
          start  : '2010-01-05',
          end    : '2010-01-07',
        },
        {
          title  : 'event3',
          start  : '2010-01-09T12:30:00',
          allDay : false,
        },
      ],

    }),

    methods: {

    },

  }
</script>
