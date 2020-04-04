<template>
    <div>
        <layout-wrapper>
            <demo-card heading="Voting">
                <v-card style="padding: 10px; margin-bottom: 10px" v-for="(question,idx) of questions" :key="idx">
                    <b-card-title>
                        {{(idx + 1) +'. ' + question.text}}
                    </b-card-title>
                        <question-answer-form :question="question"/>
                </v-card>
                <v-btn>submit</v-btn>
            </demo-card>
        </layout-wrapper>
    </div>
</template>

<script>
    import DemoCard from "./DemoCard";
    import LayoutWrapper from '@/Layout/Components/LayoutWrapper';
    import QuestionAnswerForm from '../../components/questionAnswerForm';


    export default {
        components: {
            'layout-wrapper': LayoutWrapper,
            'demo-card': DemoCard,
            'question-answer-form': QuestionAnswerForm
        },
        data: () => ({
            questions: [
                {
                    text: 'Who would you vote for a prime minister?',
                    mandatory: true,
                    public_: false,
                    from: null,
                    until: null,
                    multiple: false,
                    answers: [{text: "Igor Matovič"}, {text: "Boris Kollár"}, {text: "Richard Sulík"}, {text: "Veronika Remišová"}]
                },
                {
                    text: 'What would you like to have in youth park?',
                    mandatory: true,
                    public_: true,
                    from: null,
                    until: null,
                    multiple: true,
                    answers: [{text: "Trees"}, {text: "Benches"}, {text: "Trashbins"}]
                }
            ]
        })
    }
</script>
