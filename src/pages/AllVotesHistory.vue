<template>
    <div>
        <ListVoterLists :voterListId="voterListId"></ListVoterLists>
        <ListVotings :voterListId="voterListId"></ListVotings>
    </div>
</template>

<script>
    import ListVotings from "../components/ListVotings";
    import ListVoterLists from "../components/ListVoterLists";

    export default {
        name: "AllVotesHistory",
        props: {
            // customizable button's class attribute - you can use your own CSS class
            'voterListId': {
                type: String,
                default: ''
            },
        },
        components: {ListVotings,ListVoterLists},
    }
</script>

<style scoped>

</style>
