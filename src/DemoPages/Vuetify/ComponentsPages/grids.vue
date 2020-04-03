<template>
    <div>
        <page-title :heading=heading :subheading=subheading></page-title>
        <layout-wrapper>
            <demo-card heading="Basic" subheading="Alerts can have a contextual color and are hidden by default.">

            </demo-card>
        </layout-wrapper>
    </div>
</template>

<script>

    import PageTitle from "../../../Layout/Components/PageTitle2.vue";
    import LayoutWrapper from '../../../Layout/Components/LayoutWrapper';
    import DemoCard from '../../../Layout/Components/DemoCard';

    import alert1 from '../Components/alerts/closable';
    import alert2 from '../Components/alerts/outline';
    import alert3 from '../Components/alerts/transition';
    import alert4 from '../Components/alerts/usage';
    import alert5 from '../Components/alerts/icon';


    export default {
        components: {
            PageTitle,
            'layout-wrapper': LayoutWrapper,
            'demo-card': DemoCard,
        },
        data: () => ({
            heading: 'Alerts',
            subheading: 'This is an example dashboard created using build-in elements and components.',
            icon: 'pe-7s-plane icon-gradient bg-tempting-azure',
        }),

        methods: {},

    }


</script>
