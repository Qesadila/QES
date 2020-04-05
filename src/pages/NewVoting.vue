<template>
    <div>
        <layout-wrapper>
            <demo-card :heading="$t('CreateNewVoting')" >
                <forms></forms>
            </demo-card>
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
        }),

        methods: {}
    }


</script>
