<template>
    <div>
        <demo-card :heading="$t('votingsHeader')">
            <b-card class="main-card mb-4">
                <b-row>
                    <b-col md="6" class="my-1">
                        <b-form-group horizontal :label="$t('filterByName')" class="mb-0">
                            <b-input-group>
                                <b-form-input v-model="filter" placeholder="Type to Search"/>
                                <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-card>
            <b-card class="main-card mb-4">
                <b-table show-empty
                         stacked="md"
                         :items="items"
                         :fields="fields"
                         :current-page="currentPage"
                         :per-page="perPage"
                         :filter="filter"
                         :sort-by.sync="sortBy"
                         @filtered="onFiltered"
                >
                    <template slot="label" slot-scope="row">{{row.item.label}}</template>
                    <template slot="openFrom" slot-scope="row">{{row.item.openFrom}}</template>
                    <template slot="openUntil" slot-scope="row">{{row.item.openUntil}}</template>
                    <template slot="active" slot-scope="row">
                        <i v-if="!row.item.active" class="pe-7s-check" style="font-size: 22px;color: green"></i>
                        <i v-if="row.item.active" class="pe-7s-attention" style="font-size: 22px;color: black"></i>
                    </template>
                    <template slot="actions" slot-scope="row">
                        <b-button v-if="row.item.active" size="sm" class="ml-2 green" @click="openVotingApp(1)"
                                  style="width: 80px">
                            {{$t('votingAction')}}
                        </b-button>
                        <b-button v-if="!row.item.active" size="sm" class="ml-2" @click="redirectToVote(1)"
                                  style="width: 80px">
                            {{$t('votingDetail')}}
                        </b-button>
                    </template>
                    <template slot="row-details" slot-scope="row">
                        <b-card class="no-shadow">
                            <ul class="list-group">
                                <li class="list-group-item" v-for="(value, key) in row.item" :key="key">{{ key }}: {{
                                    value}}
                                </li>
                            </ul>
                        </b-card>
                    </template>
                </b-table>
            </b-card>
        </demo-card>
    </div>
</template>

<script>
    import DemoCard from "../Layout/Components/DemoCard";
    import VotingService from "../services/votingService"

    const votings = [
        {
            label: "VotingForm 1",
            openFrom: new Date().toDateString(),
            openUntil: new Date().toDateString(),
            active: true,
            questions: [
                {
                    question: 'Who would you vote for a prime minister?',
                    mandatory: true,
                    public_: false,
                    from: null,
                    until: null,
                    answers: [{text: "Igor Matovič"}, {text: "Boris Kollár"}, {text: "Richard Sulík"}, {text: "Veronika Remišová"}]
                }
            ]
        },
        {
            label: "VotingForm 2",
            openFrom: new Date().toDateString(),
            openUntil: new Date().toDateString(),
            active: false,
            _rowVariant: 'success',
            questions: [
                {
                    question: 'What would you like to have in youth park?',
                    mandatory: true,
                    public_: true,
                    from: null,
                    until: null,
                    answers: [{text: "Trees"}, {text: "Benches"}, {text: "Trashbins"}],
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
        }
    ];


    export default {
        name: "VotingList",
        components: {DemoCard},
        data() {
            return {
                items: votings,
                fields: [
                    {key: 'name', label: this.$t('Voting'), sortable: false},
                    {key: 'openFrom', label: this.$t('votingFrom'), sortable: true},
                    {key: 'openUntil', label: this.$t('votingTo')},
                    {key: 'active', label: 'Status', 'class': 'text-center'},
                    {key: 'actions', label: this.$t('Actions'), 'class': 'text-center'}
                ],
                currentPage: 1,
                perPage: 5,
                totalRows: votings.length,
                pageOptions: [5, 10, 15],
                sortBy: null,
                sortDesc: false,
                sortDirection: 'asc',
                filter: null,
            }
        },
        mounted() {
            VotingService.getAllVotings()
                .then(res =>
                    this.items = res.data.map(voting => voting = {
                        ...voting,
                        openFrom: this.moment(voting.openFrom).format('MMM Do YYYY'),
                        openUntil: this.moment(voting.openUntil).format('MMM Do YYYY'),
                        _rowVariant: this.isActive(this.moment(voting.openFrom), this.moment(voting.openUntil)) ? 'success' : 'none'
                    }));
        },
        methods: {
            redirectToVote(idx) {
                this.$router.push('/voting/' + idx);
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            },
            openVotingApp(idx) {
                alert('open app for vote ' + idx);
            },
            isActive(from, to) {
                this.moment().isBetween(from, to)
            }
        },
        computed: {
            sortOptions() {
                // Create an options list from our fields
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => {
                        return {text: f.label, value: f.key}
                    })
            }
        }
    }
</script>

<style scoped>
    .page-item.active .page-link, .pagination .active.page-number .page-link {
        z-index: 1;
        color: #fff;
        background-color: yellow !important;
        border-color: yellow !important;
    }
</style>
