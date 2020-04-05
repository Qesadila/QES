<template>
    <div>
        <layout-wrapper>
            <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success" style="margin-bottom: 10px" @click="addNewVoter">
                <font-awesome-icon class="mr-2" icon="plus"/>
                Add New Voter
            </button>
            <li v-for="voter in voters" style="list-style-type: none;">
                <demo-card heading="Edit the voter" >
                    <forms :data="voter"></forms>
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

    import forms from '@/components/voterForm';

    const blankVoter = {
        Name: '',
        SurName: '',
        Birthday: '',
        CertHash: "",
        VoterListID: 0,
        FileLinkGDPR: "",
        UserID: 0
    }

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

            voters: [
                        {
                            Name: 'Janko',
                            SurName: 'Mrkvicka',
                            Birthday: new Date(1970, 1, 21),
                            CertHash: "213sd23d",
                            VoterListID: 0,
                            FileLinkGDPR: "fds23fs32",
                            UserID: 22
                        }, 
                        {
                            Name: 'Peter',
                            SurName: 'Zeler',
                            Birthday: new Date(1988, 10, 2),
                            CertHash: "213sd23d",
                            VoterListID: 1,
                            FileLinkGDPR: "aaa333bbb",
                            UserID: 20
                        }
                    ]
        }),

        methods: {
            addNewVoter() {
                this.voters.push(blankVoter)
            }
        }
    }


</script>
