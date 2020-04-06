<template>
    <div>
        <b-table show-empty
            stacked="md"
            :items="items"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            @filtered="onFiltered"
        >
            <template slot="actions" slot-scope="row">
                <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
                <b-button size="sm" @click.stop="row.toggleDetails">
                    {{ row.detailsShowing ? $t('cancel') : $t('edit') }}
                </b-button>
            </template>
            <template slot="row-details" slot-scope="row">
                <demo-card>
                    <forms :data="row.item"></forms>
                </demo-card>
            </template>
        </b-table>
    </div>
</template>

<script>

    import PageTitle from "@/Layout/Components/PageTitle2.vue";
    import LayoutWrapper from '@/Layout/Components/LayoutWrapper';
    import DemoCard from '@/Layout/Components/DemoCard';

    import forms from '@/components/votingForm';

    export default {
        components: {
            PageTitle,
            'layout-wrapper': LayoutWrapper,
            'demo-card': DemoCard,

            forms,
        },
        data: () => ({
            heading: 'Form',
            subheading: 'When it comes to form validation, Vuetify has a multitude of integrations and baked in functionality. Want to use a 3rd party validation plugin? Out of the box you can use Vee-validate and vuelidate.',
            icon: 'pe-7s-plane icon-gradient bg-tempting-azure',

            votings: [
                {
                    openFrom: "21-4-2020", 
                    openUntil: "25-4-2020",
                    name:"Politics",
                    forms: [
                        {
                            question: 'Who would you vote for a prime minister?',
                            mandatory: true,
                            public_: false,
                            numberOfPositiveAnswers: 2,
                            numberOfNegativeAnswers: 1,
                            answers: [ { text: "Igor Matovič" }, { text: "Boris Kollár" }, { text: "Richard Sulík" }, { text: "Veronika Remišová" } ]
                        }
                    ]
                },
                {
                    openFrom: "1-4-2020", 
                    openUntil: "1-6-2020",
                    name:"Others",
                    forms:
                    [
                        {
                            question: 'What would you like to have in your park?',
                            mandatory: true,
                            public_: true,
                            numberOfPositiveAnswers: 2,
                            numberOfNegativeAnswers: 1,
                            answers: [ { text: "Trees" }, { text: "Benches" }, { text: "Trashbins" } ]
                        },
                        {
                            question: 'Are you crazy enough?',
                            mandatory: false,
                            public_: false,
                            numberOfPositiveAnswers: 2,
                            numberOfNegativeAnswers: 1,
                            answers: [ { text: "Just a little bit..." }, { text: "Of course nope!" } ]
                        }
                    ]
                }
            ],

            currentPage: 1,
            perPage: 5,
            totalRows: 0,
            pageOptions: [ 5, 10, 15 ],
            sortBy: null,
            sortDesc: false,
            sortDirection: 'asc',
            filter: null,
        }),

        computed: {
            items() {
                let ret = this.votings.map(voting => {
                    return { isActive: true, label: voting.name, openFrom: voting.openFrom, openUntil: voting.openUntil, forms: voting.forms }
                })
                this.totalRows = ret.length
                return ret
            },
            fields() {
                return [
                    { key: 'label', label: this.$t('label'), sortable: false},
                    { key: 'openFrom', label: this.$t('OpenFrom'), sortable: true, 'class': 'text-center' },
                    { key: 'openUntil', label: this.$t('OpenUntil'), sortable: true, 'class': 'text-center' },
                    { key: 'actions', label: 'Actions' }
                ]
            }
        },

        methods: {
            onFiltered (filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        },

        mounted() {
        }

    }


</script>
