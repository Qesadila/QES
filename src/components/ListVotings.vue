<template>
    <div>
        <demo-card :heading="$t('votingsHeader')">
            <b-card class="main-card mb-4">
                <b-row>
                    <b-col md="6" class="my-1">
                        <b-form-group horizontal :label="$t('filterByName')" class="mb-0">
                            <b-input-group>
                                <b-form-input v-model="filter" :placeholder="$t('Type to Search')"/>
                                <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''">{{$t('Clear')}}</b-btn>
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
                    <template slot="numberOfPossibleVoters">{{55}}</template>
                    <template slot="numberOfVotes">{{30}}</template>
                    <template slot="active" slot-scope="row">
                        <!--                        TODO userVoted boolean-->
                        <span v-if="!row.item.active" style="color: green">Active</span>
                        <span v-if="row.item.active">Finished</span>
                    </template>
                    <template slot="actions" slot-scope="row">
                        <b-button v-if="!row.item.active" size="sm" class="ml-2" @click="redirectToResults(1)"
                                style="width: 80px">
                            {{$t('Results')}}
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
    import VotingService from "../services/votingService";
    import DemoCard from "../Layout/Components/DemoCard";

    export default {
        name: "AllVotesHistory",
        components: {DemoCard},
        computed: {
            sortOptions() {
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => {
                        return {text: f.label, value: f.key}
                    })
            },
            fields() {
                return [
                    {key: 'name', label: this.$t('Voting'), sortable: false},
                    {key: 'openFrom', label: this.$t('votingFrom'), sortable: true},
                    {key: 'openUntil', label: this.$t('votingTo')},
                    {key: 'numberOfPossibleVoters', label: 'Počet účastníkov', 'class': 'text-center'},
                    {key: 'numberOfVotes', label: 'Počet hlasov', 'class': 'text-center'},
                    {key: 'active', label: 'Status', 'class': 'text-center'},
                    {key: 'actions', label: this.$t('actions'), 'class': 'text-center'},
                ]
            }
        },
        data() {
            return {
                items: Object,
                currentPage: 1,
                perPage: 5,
                totalRows: Number,
                pageOptions: [5, 10, 15],
                sortBy: null,
                sortDesc: false,
                sortDirection: 'asc',
                filter: null,
            }
        },
        mounted() {
            VotingService.getAllVotings()
                .then(res => {
                    let active = this.isActive(this.moment(res.data.openFrom), this.moment(res.data.openUntil))
                    this.items = res.data.map(voting => voting = {
                        ...voting,
                        openFrom: this.moment(voting.openFrom).format('MMM Do YYYY'),
                        openUntil: this.moment(voting.openUntil).format('MMM Do YYYY'),
                        active: active,
                        _rowVariant: active ? 'success' : 'none'
                    });
                    this.totalRows = this.items.length
                });
        },
        methods: {
            redirectToResults(idx) {
                this.$router.push('/vote-results/' + idx);
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
        }
    }
</script>

<style scoped>

</style>
