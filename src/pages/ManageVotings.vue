<template>
    <div>
        <layout-wrapper>
            <li v-for="voting in votings" style="list-style-type: none;">
                <demo-card heading="Edit the voting" >
                    <forms :data="voting"></forms>
                </demo-card>
            </li>
        </layout-wrapper>
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
                [ 
                    {
                        question: 'Who would you vote for a prime minister?',
                        mandatory: true,
                        public_: false,
                        from: null,
                        until: null,      
                        answers: [ { text: "Igor Matovič" }, { text: "Boris Kollár" }, { text: "Richard Sulík" }, { text: "Veronika Remišová" } ]                        
                    } 
                ],
                [ 
                    {
                        question: 'What would you like to have in yout park?',
                        mandatory: true,
                        public_: true,
                        from: null,
                        until: null,      
                        answers: [ { text: "Trees" }, { text: "Benches" }, { text: "Trashbins" } ]
                    },
                    {
                        question: 'Are you crazy enough?',
                        mandatory: false,
                        public_: false,
                        from: null,
                        until: null,      
                        answers: [ { text: "Just a little bit..." }, { text: "Of course nope!" } ]
                    } 
                ]
            ]
        }),

        methods: {},

        mounted() {
            if (localStorage.loggedIn === undefined || !localStorage.loggedIn) {
                this.$router.replace(this.$route.query.redirect || '/login')
            }
        }

    }


</script>
