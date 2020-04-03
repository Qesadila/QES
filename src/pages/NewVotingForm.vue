<template>
    <div>
        <layout-wrapper>
            <demo-card heading="Create new referendum" >
                <forms4></forms4>
            </demo-card>
        </layout-wrapper>
    </div>
</template>

<script>

    import PageTitle from "@/Layout/Components/PageTitle2.vue";
    import LayoutWrapper from '@/Layout/Components/LayoutWrapper';
    import DemoCard from '@/Layout/Components/DemoCard';

    import forms4 from '@/components/vuelidate';

    export default {
        components: {
            PageTitle,
            'layout-wrapper': LayoutWrapper,
            'demo-card': DemoCard,

            forms4,
        },
        data: () => ({
            heading: 'Form',
            subheading: 'When it comes to form validation, Vuetify has a multitude of integrations and baked in functionality. Want to use a 3rd party validation plugin? Out of the box you can use Vee-validate and vuelidate.',
            icon: 'pe-7s-plane icon-gradient bg-tempting-azure',
        }),

        methods: {},

        mounted() {
            if (localStorage.loggedIn === undefined || !localStorage.loggedIn) {
                this.$router.replace(this.$route.query.redirect || '/voting-management/login')
            }
        }

    }


</script>
