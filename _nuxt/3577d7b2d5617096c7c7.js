(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{453:function(t,e,r){var content=r(474);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("37cb66d6",content,!0,{sourceMap:!1})},473:function(t,e,r){"use strict";var o=r(453);r.n(o).a},474:function(t,e,r){(e=r(17)(!1)).push([t.i,".form-generator-background{background-color:rgba(0,0,0,.03)}",""]),t.exports=e},494:function(t,e,r){"use strict";r.r(e);r(15),r(11),r(9),r(12),r(44);var o=r(13),n=(r(30),r(24),r(25),r(6),r(27),r(1)),l=r(470),d=r.n(l),m=(r(471),r(86)),c=(r(20),{props:{answerNumber:{type:Number,required:!0}},data:function(){return{textFieldValue:""}},methods:{emitAnswer:function(){this.$emit("answer-text-changed",this.textFieldValue)}}}),v=r(64),f=r(72),h=r.n(f),F=r(93),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-row align-center pa-6"},[r("div",{staticClass:"title mr-5"},[t._v(t._s(t.answerNumber)+".")]),t._v(" "),r("v-text-field",{attrs:{"hide-details":"",outlined:""},on:{change:t.emitAnswer},model:{value:t.textFieldValue,callback:function(e){t.textFieldValue=e},expression:"textFieldValue"}})],1)}),[],!1,null,null,null),_=component.exports;h()(component,{VTextField:F.a});var x={components:{PossibleAnswerRow:_},props:{questionId:{type:String,required:!0},questionOrder:{type:Number,required:!0}},data:function(){return{numberOfOptions:2,order:this.questionOrder,questionData:{question:"",order:this.questionOrder,votingFormItemOptions:[{option:"",order:1},{option:"",order:2}]}}},methods:{saveOption:function(t,e){t-1>this.questionData.votingFormItemOptions.length&&this.questionData.votingFormItemOptions.push({}),this.questionData.votingFormItemOptions[t-1]={option:e,order:t},this.saveQuestion()},updateQestionText:function(){this.saveQuestion()},saveQuestion:function(){this.$emit("save-question",this.questionId,this.questionData)},remvoeQuestion:function(){this.$emit("remove-question",this.questionId)}}},I=r(192),V=r(435),O=r(178),w=r(146),y=Object(v.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{width:"100%",elevation:"0"}},[r("div",{staticClass:"pa-6"},[r("div",{staticClass:"mb-5 font-weight-bold"},[t._v("\n      "+t._s(t.$t("votingFormManager.questionText"))+"\n    ")]),t._v(" "),r("v-text-field",{attrs:{outlined:"","hide-details":""},on:{change:t.updateQestionText},model:{value:t.questionData.question,callback:function(e){t.$set(t.questionData,"question",e)},expression:"questionData.question"}})],1),t._v(" "),r("div",{staticClass:"px-6 pt-6"},[t._v(t._s(t.$t("votingFormManager.possibleAnswers")))]),t._v(" "),t._l(t.numberOfOptions,(function(e){return r("div",{key:e},[r("possible-answer-row",{attrs:{"answer-number":e},on:{"answer-text-changed":function(r){return t.saveOption(e,r)}}})],1)})),t._v(" "),r("v-divider",{}),t._v(" "),r("div",{staticClass:"d-flex flex-row justify-space-between pa-5 form-generator-background"},[r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.numberOfOptions++}}},[r("v-icon",[t._v("mdi-plus")]),t._v(t._s(t.$t("votingFormManager.addNewPossibleAnswer")))],1),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.remvoeQuestion}},[r("v-icon",[t._v("mdi-minus")]),t._v(t._s(t.$t("votingFormManager.removeQuestion")))],1)],1)],2)}),[],!1,null,null,null),$=y.exports;function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}h()(y,{VBtn:I.a,VCard:V.a,VDivider:O.a,VIcon:w.a,VTextField:F.a});var k={middleware:"authenticated",components:{AddQuestionModal:$,VueCtkDateTimePicker:d.a},data:function(){return{numberOfQuestions:1,questionIds:{},questionIter:0,createdForm:{name:"",endingType:"AutoClosingWhenAllHasVoted",openUntil:null,voterListId:"",votingFormItems:[]},voterLists:[],formIsValid:!1,formValidationError:"Please fill in the form",endingTypes:[{value:"AutoClosingWhenAllHasVoted",name:this.$t("votingFormManager.AutoClosingWhenAllHasVoted")},{value:"TimeoutOnly",name:this.$t("votingFormManager.TimeoutOnly")},{value:"VoterManagerCanCloseAnyTime",name:this.$t("votingFormManager.VoterManagerCanCloseAnyTime")},{value:"VoterManagerCanCloseIfAllHasVoted",name:this.$t("votingFormManager.VoterManagerCanCloseIfAllHasVoted")}]}},mounted:function(){this.fetchVoterLists(),this.addQuestion()},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.b)("listManager",["performFetchList"]),{selectText:function(t){return t.name},selectValue:function(t){return t.value},saveQuestion:function(t,e){this.$set(this.createdForm.votingFormItems,t,e),this.validateForm()},removeQuestion:function(t){this.$delete(this.questionIds,t),this.$delete(this.createdForm.votingFormItems,t)},addQuestion:function(){this.questionIter++,this.$set(this.questionIds,this.questionIter.toString(),this.questionIter.toString())},questionIdToOrder:function(t){var i=0;for(var e in this.questionIds)if(i++,e.toString()===t.toString())return i;return-1},validateForm:function(){if(""===this.createdForm.name)return this.formValidationError="Please fill in form name",void(this.formIsValid=!1);for(var t in this.createdForm.votingFormItems)if(""===this.createdForm.votingFormItems[t].question)return this.formValidationError="Each question must have text of the question filled in",void(this.formIsValid=!1);var e=[];for(var r in this.createdForm.votingFormItems){if(e.includes(this.createdForm.votingFormItems[r].question))return this.formValidationError="Each question must have unique text of the question",void(this.formIsValid=!1);e.push(this.createdForm.votingFormItems[r].question)}for(var o in this.createdForm.votingFormItems){var n=[];for(var l in this.createdForm.votingFormItems[o].votingFormItemOptions)if(""!==this.createdForm.votingFormItems[o].votingFormItemOptions[l].option){if(n.includes(this.createdForm.votingFormItems[o].votingFormItemOptions[l].option))return this.formValidationError="Each option in question must have unique text",void(this.formIsValid=!1);n.push(this.createdForm.votingFormItems[o].votingFormItemOptions[l].option)}if(0===n.length)return this.formValidationError="Each question must have at least one possible answer filled in",void(this.formIsValid=!1)}this.formValidationError="",this.formIsValid=!0},saveForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.validateForm(),t.formIsValid){e.next=3;break}return e.abrupt("return");case 3:return r=new FormData,o=JSON.stringify(t.createdForm),r.append("msg",o),e.next=8,t.$axios.put("v1/Voting/CreateVotingForm",r).then((function(e){t.$store.dispatch("snackbar/openSuccess","Successfuly created!"),t.$router.push("/voting-form-manager")}));case 8:case"end":return e.stop()}}),e)})))()},fetchVoterLists:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.performFetchList();case 2:r=e.sent,t.voterLists=r;case 4:case"end":return e.stop()}}),e)})))()}})},M=(r(473),r(418)),T=r(408),j=Object(v.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"fill-height pa-12",attrs:{"no-gutters":"",justify:"center",align:"center"}},[r("v-card",{attrs:{width:"100%"}},[r("div",{staticClass:"d-flex flex-row justify-end mr-5 mt-5"},[r("v-btn",{attrs:{icon:"",to:"/voting-form-manager"}},[r("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),r("div",{staticClass:"d-flex flex-row justify-center py-5 display-1"},[t._v("\n      "+t._s(t.$t("votingFormManager.createFormTitleText"))+"\n    ")]),t._v(" "),r("div",{staticClass:"pa-12"},[r("v-divider",{staticClass:"mb-5"}),t._v(" "),r("div",[t._v(t._s(t.$t("votingFormManager.formName")))]),t._v(" "),r("v-text-field",{attrs:{outlined:"",placeholder:t.$t("votingFormManager.placeholderFormName")},model:{value:t.createdForm.name,callback:function(e){t.$set(t.createdForm,"name",e)},expression:"createdForm.name"}}),t._v(" "),r("div",[t._v(t._s(t.$t("votingFormManager.endingType")))]),t._v(" "),r("v-select",{attrs:{items:t.endingTypes,"item-text":t.selectText,"item-value":t.selectValue},model:{value:t.createdForm.endingType,callback:function(e){t.$set(t.createdForm,"endingType",e)},expression:"createdForm.endingType"}}),t._v(" "),r("div",[t._v(t._s(t.$t("votingFormManager.formOpenUntil")))]),t._v(" "),r("VueCtkDateTimePicker",{attrs:{format:"YYYY-MM-DDTHH:mm:ssZ"},model:{value:t.createdForm.openUntil,callback:function(e){t.$set(t.createdForm,"openUntil",e)},expression:"createdForm.openUntil"}}),t._v(" "),r("v-divider",{staticClass:"mb-5"}),t._v(" "),r("div",[t._v(t._s(t.$t("votingFormManager.voterListId")))]),t._v(" "),r("v-select",{attrs:{outlined:"",items:t.voterLists,placeholder:t.$t("votingFormManager.placeholderVoterListId"),"item-value":"voterListId","item-text":"voterListName"},model:{value:t.createdForm.voterListId,callback:function(e){t.$set(t.createdForm,"voterListId",e)},expression:"createdForm.voterListId"}}),t._v(" "),r("v-divider",{staticClass:"mb-5"}),t._v(" "),r("div",{staticClass:"display-1 mb-10"},[t._v("\n        "+t._s(t.$t("votingFormManager.questions"))+"\n      ")]),t._v(" "),t._l(t.questionIds,(function(e){return r("div",{key:e,staticClass:"mb-12"},[r("div",{staticClass:"d-flex flex-row"},[r("v-card",{attrs:{width:"100%",elevation:"3"}},[r("add-question-modal",{attrs:{"question-id":e,"question-order":t.questionIdToOrder(e)},on:{"save-question":t.saveQuestion,"remove-question":t.removeQuestion}})],1)],1)])}))],2),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"d-flex flex-row justify-space-between pa-5 form-generator-background"},[r("v-btn",{attrs:{text:"",color:"primary","x-large":""},on:{click:t.addQuestion}},[t._v("\n        "+t._s(t.$t("votingFormManager.addNewQuestion")))]),t._v(" "),t.formIsValid?r("v-btn",{attrs:{color:"primary","x-large":""},on:{click:t.saveForm}},[r("span",{staticClass:"white--text d-flex align-center"},[r("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v("\n          "+t._s(t.$t("votingFormManager.saveForm"))+"\n        ")],1)]):t._e(),t._v(" "),t.formValidationError?r("div",{staticClass:"badge badge-error"},[t._v("\n        "+t._s(t.formValidationError)+"\n      ")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=j.exports;h()(j,{VBtn:I.a,VCard:V.a,VDivider:O.a,VIcon:w.a,VRow:M.a,VSelect:T.a,VTextField:F.a})}}]);