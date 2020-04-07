<template>
    <div>
        <demo-card link="/voting-list/create" :linkTitle="$t('Create your own voting list')" :heading="$t('votingListsHeader')">
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
    import VoterListService from "../services/voterListService";
    import DemoCard from "../Layout/Components/DemoCard";

    export default {
        name: "ListVoterLists",
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
                    {key: 'name', label: this.$t('VoterListName'), sortable: true},
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
            VotingService.getPublicLists()
                .then(res => {
                    let active = this.isActive(this.moment(res.data.openFrom), this.moment(res.data.openUntil))
                    this.items = res.data.map(voting => voting = {
                        ...voting,
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
