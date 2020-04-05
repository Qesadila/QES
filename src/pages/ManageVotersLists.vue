<template>
    <div>
        <layout-wrapper>
            <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success" style="margin-bottom: 10px" @click="addNewVotersList">
                <font-awesome-icon class="mr-2" icon="plus"/>
                {{ $t('AddNewVotersList') }}
            </button>
            <li v-for="votersList in votersLists" style="list-style-type: none;">
                <demo-card :heading="$t('EditVotersList')" >
                    <forms :data="votersList" :voters="voters"></forms>
                </demo-card>
            </li>
        </layout-wrapper>
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
                            name: 'Deti'
                        }
                    ]
        }),

        methods: {
            addNewVotersList() {
                this.votersLists.push(blankVotersList)
            }
        }
    }


</script>
