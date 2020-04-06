<template>
    <div>
        <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success" style="margin-bottom: 10px" @click="addNewVoter">
            <font-awesome-icon class="mr-2" icon="plus"/>
            {{ $t('addNewVoter') }}
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
                    <forms :data="row.item" :votersLists="sampleVotersLists"></forms>
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

    import forms from '@/components/voterForm';

    const blankVoter = {
        Name: '',
        SurName: '',
        Birthday: null,
        CertHash: "",
        VoterListID: 0,
        FileLinkGDPR: "",
        UserID: 0
    }

    const sampleVotersLists = [ 
                        {
                            id: 0,
                            name: 'Poslanci'
                        }, 
                        {
                            id: 1,
                            name: 'Deti'
                        }
                    ]

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

            sampleVotersLists: sampleVotersLists,
            voters: [
                        {
                            Name: 'Janko',
                            SurName: 'Mrkvicka',
                            Birthday: new Date(1970, 1, 21),
                            CertHash: "213sd23d",
                            FileLinkGDPR: "fds23fs32"
                        }, 
                        {
                            Name: 'Peter',
                            SurName: 'Zeler',
                            Birthday: new Date(1988, 10, 2),
                            CertHash: "213sd23d",
                            FileLinkGDPR: "aaa333bbb"
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
                let ret = this.voters.map(voter => {
                    return { isActive: true, label: voter.Name, surName: voter.SurName, birthDay: voter.Birthday }
                })
                this.totalRows = ret.length
                return ret
            },
            fields() {
                return [
                    { key: 'label', label: this.$t('label'), sortable: true},
                    { key: 'surName', label: this.$t('surName'), sortable: true, 'class': 'text-center' },
                    { key: 'birthDay', label: this.$t('birthDay'), sortable: true, 'class': 'text-center' },
                    { key: 'actions', label: 'Actions' }
                ]
            }
        },

        methods: {
            addNewVoter() {
                this.voters.push(blankVoter)
            },
            onFiltered (filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        }
    }


</script>
