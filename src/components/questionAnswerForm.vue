<template>
    <div>
        <b-card-sub-title style="padding: 10px; margin-bottom: 10px">
        </b-card-sub-title>
        <v-combobox
                v-model="chips"
                :items="items"
                :label="$t('SelectMore')"
                chips
                clearable
                prepend-icon="filter_list"
                solo
                multiple
        >
            <template v-slot:selection="data">
                <v-chip
                        :selected="data.selected"
                        close
                        @input="remove(data.item)"
                >
                    <strong>{{ data.item }}</strong>&nbsp;
                    <!--                    <span>(interest)</span>-->
                </v-chip>
            </template>
        </v-combobox>
        <v-radio-group v-model="one" row>
            <v-radio v-for="(question,idx) of question.answers"
                     :label="question.text"
                     :value="idx"
                     :key="idx"/>
        </v-radio-group>
        <b-file/>
    </div>
</template>

<script>
    export default {
        name: "questionAnswerForm",
        props: {
            question: Object
        },
        data() {
            return {
                chips: [],
                items: this.question.answers.map(ans => ans.text),
                one: null
            }
        },
        methods: {
            remove(item) {
                this.chips.splice(this.chips.indexOf(item), 1);
                this.chips = [...this.chips]
            }
        }
    }
</script>

<style scoped>

</style>
