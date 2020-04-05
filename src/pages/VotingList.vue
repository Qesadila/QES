<template>
    <div>
        <demo-card v-for="(voting, idx) of votings" :key="idx"
                   :heading="'Voting Form ' + (1 + idx)"
                   class="voting-card"
        >
            <b-card-title style="padding: 10px; margin-bottom: 10px">
                Status: <i class="pe-7s-check" style="font-size: 18px;color: green"></i><i class="pe-7s-close-circle" style="font-size: 18px;color: red"></i>
            </b-card-title>
            <b-card-title style="padding: 10px; margin-bottom: 10px">
                Open from: 12.3.2020 - To 25.3. 2020
            </b-card-title>
            <v-btn @click="redirectToVote(idx)">vote</v-btn>
        </demo-card>
    </div>
</template>

<script>
    import DemoCard from "../Layout/Components/DemoCard";

    export default {
        name: "VotingList",
        components: {DemoCard},
        data() {
            return {
                votings: [
                    [
                        {
                            question: 'Who would you vote for a prime minister?',
                            mandatory: true,
                            public_: false,
                            from: null,
                            until: null,
                            answers: [{text: "Igor Matovič"}, {text: "Boris Kollár"}, {text: "Richard Sulík"}, {text: "Veronika Remišová"}]
                        }
                    ],
                    [
                        {
                            question: 'What would you like to have in youth park?',
                            mandatory: true,
                            public_: true,
                            from: null,
                            until: null,
                            answers: [{text: "Trees"}, {text: "Benches"}, {text: "Trashbins"}]
                        },
                        {
                            question: 'Are you crazy enough?',
                            mandatory: false,
                            public_: false,
                            from: null,
                            until: null,
                            answers: [{text: "Just a little bit..."}, {text: "Of course nope!"}]
                        }
                    ]
                ]
            }
        },
        methods: {
            redirectToVote(idx) {
                this.$router.push('/voting/'+idx);
            }
        }
    }
</script>

<style scoped>

    .voting-card:hover {
        cursor: pointer;
    }
</style>
