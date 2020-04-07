<template>
    <div>
        <ListVoterLists></ListVoterLists>
        <ListVotings></ListVotings>
    </div>
</template>

<script>
    import ListVotings from "../components/ListVotings";
    import ListVoterLists from "../components/ListVoterLists";

    export default {
        name: "AllVotesHistory",
        components: {ListVotings,ListVoterLists},
    }
</script>

<style scoped>

</style>
