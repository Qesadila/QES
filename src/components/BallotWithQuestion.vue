<template>
    <demo-card
        :heading="`Form #${ballotData.votingForm.votingFormId}`"
        :subheading="formattedFormDateRange"
    >
        <demo-card
            v-for="votingFormItem in ballotData.votingFormItems"
            :key="votingFormItem.votingFormItemId"
            :heading="votingFormItem.question"
        >
            <span>{{ $t('BallotWithQuestion.chosenOptions') }}</span>

            <br />

            <ul>
                <li
                    v-for="chosenItem in votingFormItem.chosenVotingFormItemOptions"
                    :key="chosenItem.votingFormItemOptionId"
                    class="ballot--chosen-item"
                >
                    {{ chosenItem.option }}
                </li>
            </ul>

            <span>{{ $t('BallotWithQuestion.notChosenOptions') }}</span>

            <br />

            <ul>
                <li
                    v-for="notChosenItem in votingFormItem.notChosenVotingFormItemOptions"
                    :key="notChosenItem.votingFormItemOptionId"
                    class="ballot--not-chosen-item"
                >
                    {{ notChosenItem.option }}
                </li>
            </ul>
        </demo-card>
    </demo-card>
</template>

<script>
    import DemoCard from '@/Layout/Components/DemoCard';

    export default {
        name: 'BallotWithQuestion',

        components: {
            DemoCard,
        },

        props: {
            ballotData: { default: [] },
        },

        computed: {
            formattedFormDateRange() {
                return `${this.ballotData.votingForm.openFrom.toDateString()} - ${this.ballotData.votingForm.openUntil.toDateString()}`;
            },
        },
    }
</script>

<style scoped>
    .ballot--chosen-item {
        font-weight: bold;
        color: green;
    }

    .ballot--not-chosen-item {
        color: grey;
        text-decoration: line-through;
    }
</style>