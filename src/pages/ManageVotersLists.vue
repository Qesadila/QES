<template>
    <div>
        <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success" style="margin-bottom: 10px" @click="addNewVotersList">
            <font-awesome-icon class="mr-2" icon="plus"/>
            {{ $t('AddNewVotersList') }}
        </button>

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
                    {{ row.detailsShowing ? 'Cancel' : 'Edit' }}
                </b-button>
            </template>
            <template slot="row-details" slot-scope="row">
                <demo-card>
                    <forms :data="row.item" :voters="voters"></forms>
                </demo-card>
            </template>
        </b-table>
    </div>
</template>

<script>

    import PageTitle from "@/Layout/Components/PageTitle2.vue";
    import LayoutWrapper from '@/Layout/Components/LayoutWrapper';
    import DemoCard from '@/Layout/Components/DemoCard';
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    import forms from '@/components/votersListForm';

    const blankVotersList = {
        id: 0,
        name: ''
    }
    const sampleVoters = [ 'Jozo', 'Peto', 'Miso' ]

    export default {
        components: {
            PageTitle,
            'layout-wrapper': LayoutWrapper,
            'demo-card': DemoCard,
            'font-awesome-icon': FontAwesomeIcon,

            forms,
        },

        data: () => ({
            heading: 'Form',
            subheading: 'When it comes to form validation, Vuetify has a multitude of integrations and baked in functionality. Want to use a 3rd party validation plugin? Out of the box you can use Vee-validate and vuelidate.',
            icon: 'pe-7s-plane icon-gradient bg-tempting-azure',

            voters: sampleVoters,
            votersLists: [ 
                        {
                            id: 0,
                            name: 'Poslanci'
                        }, 
                        {
                            id: 1,
                            name: 'Poslanci'
                        }, 
                        {
                            id: 2,
                            name: 'Deti'
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
                let ret = this.votersLists.map(votersList => {
                    return { isActive: true, label: votersList.name }
                })
                this.totalRows = ret.length
                return ret
            },
            fields() {
                return [
                    { key: 'label', label: this.$t('label'), sortable: true},
                    { key: 'actions', label: 'Actions' }
                ]
            }
        },

        methods: {
            addNewVotersList() {
                this.votersLists.push(blankVotersList)
            },
            onFiltered (filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        }
    }


</script>
