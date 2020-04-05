<template>
    <demo-card :heading="$t('Results')">
        <b-card class="main-card mb-4">
            <b-card-sub-title>{{$t('totalVotes') +': 30' }}</b-card-sub-title>
            <b-card-sub-title>{{$t('totalEligible') + ': 50'}}</b-card-sub-title>
            <b-card-sub-title>{{$t('Result')+ ': '+ resultAnswer}}</b-card-sub-title>
            <div class="example">
                <apexchart ref="donut" width="350" type="donut" :options="chartOptions" :series="series"></apexchart>
            </div>
        </b-card>
        <v-btn @click="updateChart">{{$t('refreshResults')}}</v-btn>
    </demo-card>
</template>

<script>
    import DemoCard from "../Layout/Components/DemoCard";
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "VoteResults",
        components: {
            DemoCard,
            'apexchart': VueApexCharts
        },
        computed: {
            resultAnswer() {
                //TODO
                return this.chartOptions.labels[0];
            }
        },
        data: function () {
            return {
                chartOptions: {
                    labels: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                },
                series: [11, 32, 45, 32],
            }
        },
        methods: {
            updateChart() {
                const max = 90;
                const min = 20;
                this.series = this.series.map(() => {
                    return Math.floor(Math.random() * (max - min + 1)) + min
                })
            }
        }
    }
</script>

<style scoped>

</style>
