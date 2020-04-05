<template>
    <div>
        <h4>{{ $t('VotingHistory.pageHeading') }}</h4>

        <layout-wrapper>
            <li
                v-for="ballot in getBallotsForVoter(voterId)"
                :key="ballot.voterBallotId"
                class="ballot-list-item"
            >
                <ballot-with-question :ballot-data="getBallotData(ballot.voterBallotId)" />
            </li>
        </layout-wrapper>
    </div>
</template>

<script>
    import LayoutWrapper from '@/Layout/Components/LayoutWrapper';
    import BallotWithQuestion from "@/components/BallotWithQuestion";

    export default {
        name: 'VotingHistory',

        components: {
            LayoutWrapper,
            BallotWithQuestion,
        },

        data: () => ({
            pageHeading: 'Voting History',

            voterId: 1,
            votingFormId: 2,
            voterBallotId: 3,
        }),

        computed: {
            votingForms() {
                return [
                    {
                        votingFormId: this.votingFormId,
                        openFrom: new Date(),
                        openUntil: new Date(),
                        voterListId: 1,
                    },
                ];
            },

            votingFormItems() {
                return [
                    {
                        votingFormItemId: 10,
                        question: 'Otazka cislo 1?',
                        numberOfPositiveAnswers: 0,
                        numberOfNegativeNumbers: 0,
                        isMandatory: true,
                        votingFormId: this.votingFormId,
                        isPublic: true,
                    },
                    {
                        votingFormItemId: 20,
                        question: 'Otazka cislo 2?',
                        numberOfPositiveAnswers: 0,
                        numberOfNegativeNumbers: 0,
                        isMandatory: true,
                        votingFormId: this.votingFormId,
                        isPublic: true,
                    },
                ];
            },

            votingFormItemOptions() {
                return [
                    {
                        votingFormItemOptionId: 100,
                        option: 'Ano',
                        votingFormItemId: 10,
                    },
                    {
                        votingFormItemOptionId: 200,
                        option: 'Nie',
                        votingFormItemId: 10,
                    },
                    {
                        votingFormItemOptionId: 300,
                        option: 'Ano',
                        votingFormItemId: 20,
                    },
                    {
                        votingFormItemOptionId: 400,
                        option: 'Nie',
                        votingFormItemId: 20,
                    },
                    {
                        votingFormItemOptionId: 500,
                        option: 'Mozno',
                        votingFormItemId: 20,
                    },
                ];
            },

            voterBallots() {
                return [
                    {
                        voterBallotId: this.voterBallotId,
                        voterId: this.voterId,
                        votingFormId: this.votingFormId,
                        fileLink: '',
                        fileHash: '',
                    },
                ];
            },

            voterChoices() {
                return [
                    {
                        voterChoiceId: 1000,
                        votingFormItemOptionId: 100,
                        voterBallotId: this.voterBallotId,
                        isPositive: true,
                    },
                    {
                        voterChoiceId: 2000,
                        votingFormItemOptionId: 400,
                        voterBallotId: this.voterBallotId,
                        isPositive: false,
                    },
                ];
            },
        },

        methods: {
            getBallotsForVoter(voterId) {
                return this.voterBallots.filter(ballot => ballot.voterId === voterId);
            },

            getBallotWithId(ballotId) {
                return this.voterBallots.filter(ballot => ballot.voterBallotId === ballotId)[0];
            },

            getChoicesForBallot(ballotId) {
                return this.voterChoices.filter(choice => choice.voterBallotId === ballotId);
            },

            getFormWithId(formId) {
                return this.votingForms.filter(form => form.votingFormId === formId)[0];
            },

            getItemsForForm(formId) {
                return this.votingFormItems.filter(formItem => formItem.votingFormId === formId);
            },

            getOptionsForFormItem(formItemId) {
                return this.votingFormItemOptions.filter(itemOption => itemOption.votingFormItemId === formItemId);
            },

            //todo: this mocks the endpoint 'v1/Voting/BallotData', all of the methods above are just mock helpers and can be removed later
            getBallotData(ballotId) {
                const ballot = this.getBallotWithId(ballotId);

                const form = this.getFormWithId(ballot.votingFormId);
                const formItems = this.getItemsForForm(form.votingFormId);
                const formItemsWithOptions = formItems.map(
                    item => {
                        return {
                            item: item,
                            options: this.getOptionsForFormItem(item.votingFormItemId)
                        }
                    }
                );

                const choices = this.getChoicesForBallot(ballotId);
                const choicesOptionIds = choices.map(choice => choice.votingFormItemOptionId);

                const formattedItemWithOptions = formItemsWithOptions.map(
                    itemWithOptions => {
                        return {
                            ...itemWithOptions.item,
                            notChosenVotingFormItemOptions: itemWithOptions.options.filter(option => !choicesOptionIds.includes(option.votingFormItemOptionId)),
                            chosenVotingFormItemOptions: itemWithOptions.options.filter(option => choicesOptionIds.includes(option.votingFormItemOptionId))
                        }
                    }
                );

                return {
                    votingForm: form,
                    votingFormItems: formattedItemWithOptions,
                };
            },
        },
    }
</script>

<style scoped>
 .ballot-list-item {
     list-style-type: none;
 }
</style>