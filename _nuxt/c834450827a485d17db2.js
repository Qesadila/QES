(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{440:function(e,t,r){var content=r(467);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("37cb66d6",content,!0,{sourceMap:!1})},466:function(e,t,r){"use strict";var n=r(440);r.n(n).a},467:function(e,t,r){(t=r(15)(!1)).push([e.i,".form-generator-background{background-color:rgba(0,0,0,.03)}",""]),e.exports=t},487:function(e,t,r){"use strict";r.r(t);r(12),r(10),r(8),r(5),r(11),r(43);var n=r(13),o=r(1),c=r(463),l=r.n(c),d=(r(464),r(149)),v=(r(18),{props:{answerNumber:{type:Number,required:!0}},data:function(){return{textFieldValue:""}},methods:{emitAnswer:function(){this.$emit("answer-text-changed",this.textFieldValue)}}}),m=r(60),f=r(68),h=r.n(f),x=r(86),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex flex-row align-center pa-6"},[r("div",{staticClass:"title mr-5"},[e._v(e._s(e.answerNumber)+".")]),e._v(" "),r("v-text-field",{attrs:{"hide-details":"",outlined:""},on:{change:e.emitAnswer},model:{value:e.textFieldValue,callback:function(t){e.textFieldValue=t},expression:"textFieldValue"}})],1)}),[],!1,null,null,null),w=component.exports;h()(component,{VTextField:x.a});var _={components:{PossibleAnswerRow:w},props:{questionNumber:{type:Number,required:!0}},data:function(){return{numberOfOptions:2,questionData:{question:"",order:this.questionNumber+1,votingFormItemOptions:[{option:"",order:1},{option:"",order:2}]}}},methods:{saveOption:function(e,t){e-1>this.questionData.votingFormItemOptions.length&&this.questionData.votingFormItemOptions.push({}),this.questionData.votingFormItemOptions[e-1]={option:t,order:e}},saveQuestion:function(){this.$emit("save-question",this.questionData)}}},O=r(185),F=r(420),y=r(171),k=r(139),V=Object(m.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{width:"100%",elevation:"0"}},[r("div",{staticClass:"pa-6"},[r("div",{staticClass:"mb-5 font-weight-bold"},[e._v("\n      "+e._s(e.questionNumber+1)+". Question text\n    ")]),e._v(" "),r("v-text-field",{attrs:{outlined:"","hide-details":""},model:{value:e.questionData.question,callback:function(t){e.$set(e.questionData,"question",t)},expression:"questionData.question"}})],1),e._v(" "),r("div",{staticClass:"px-6 pt-6"},[e._v("Possible answers")]),e._v(" "),e._l(e.numberOfOptions,(function(t){return r("div",{key:t},[r("possible-answer-row",{attrs:{"answer-number":t},on:{"answer-text-changed":function(r){return e.saveOption(t,r)}}})],1)})),e._v(" "),r("v-divider",{}),e._v(" "),r("div",{staticClass:"d-flex flex-row justify-space-between pa-5 form-generator-background"},[r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.numberOfOptions++}}},[r("v-icon",[e._v("mdi-plus")]),e._v("Add new possible answer")],1),e._v(" "),r("v-btn",{attrs:{color:"green"},on:{click:e.saveQuestion}},[r("span",{staticClass:"white--text d-flex align-center"},[r("v-icon",{attrs:{left:""}},[e._v("mdi-check")]),e._v("Save question")],1)])],1)],2)}),[],!1,null,null,null),C=V.exports;function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}h()(V,{VBtn:O.a,VCard:F.a,VDivider:y.a,VIcon:k.a,VTextField:x.a});var D={middleware:"authenticated",components:{AddQuestionModal:C,VueCtkDateTimePicker:l.a},data:function(){return{numberOfQuestions:1,createdForm:{name:"",openUntil:null,voterListId:"",votingFormItems:[]},voterLists:[]}},mounted:function(){this.fetchVoterLists()},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(d.b)("listManager",["performFetchList"]),{saveQuestion:function(e){console.log("Question ID saved ->",e),this.createdForm.votingFormItems.push(e)},saveForm:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Form saved ->",e.createdForm),console.log("String ->",JSON.stringify(e.createdForm)),r=new FormData,n=JSON.stringify(e.createdForm),r.append("msg",n),t.next=7,e.$axios.put("v1/Voting/CreateVotingForm",r).then((function(t){e.$store.dispatch("snackbar/openSuccess","Successfuly created!"),e.$router.push("/voting-form-manager")}));case 7:case"end":return t.stop()}}),t)})))()},fetchVoterLists:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.performFetchList();case 2:r=t.sent,e.voterLists=r;case 4:case"end":return t.stop()}}),t)})))()}})},I=(r(466),r(403)),L=r(393),P=Object(m.a)(D,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"fill-height pa-12",attrs:{"no-gutters":"",justify:"center",align:"center"}},[r("v-card",{attrs:{width:"100%"}},[r("div",{staticClass:"d-flex flex-row justify-end mr-5 mt-5"},[r("v-btn",{attrs:{icon:"",to:"/voting-form-manager"}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),r("div",{staticClass:"d-flex flex-row justify-center py-5 display-1"},[e._v("\n      Hello you can create your voting form here!\n    ")]),e._v(" "),r("div",{staticClass:"pa-12"},[r("v-divider",{staticClass:"mb-5"}),e._v(" "),r("div",[e._v("Name of the voting form")]),e._v(" "),r("v-text-field",{attrs:{outlined:"",placeholder:"Provide name of the voting form"},model:{value:e.createdForm.name,callback:function(t){e.$set(e.createdForm,"name",t)},expression:"createdForm.name"}}),e._v(" "),r("div",[e._v("Form open until")]),e._v(" "),r("VueCtkDateTimePicker",{model:{value:e.createdForm.dateUntil,callback:function(t){e.$set(e.createdForm,"dateUntil",t)},expression:"createdForm.dateUntil"}}),e._v(" "),r("v-divider",{staticClass:"mb-5"}),e._v(" "),r("div",[e._v("Voter list ID")]),e._v(" "),r("v-select",{attrs:{outlined:"",items:e.voterLists,placeholder:"Select voter list","item-value":"voterListId","item-text":"voterListName"},model:{value:e.createdForm.voterListId,callback:function(t){e.$set(e.createdForm,"voterListId",t)},expression:"createdForm.voterListId"}}),e._v(" "),r("v-divider",{staticClass:"mb-5"}),e._v(" "),r("div",{staticClass:"display-1 mb-10"},[e._v("Questions:")]),e._v(" "),e._l(e.numberOfQuestions,(function(t){return r("div",{key:t,staticClass:"mb-12"},[r("div",{staticClass:"d-flex flex-row"},[r("v-card",{attrs:{width:"100%",elevation:"3"}},[r("add-question-modal",{attrs:{"question-number":t-1},on:{"save-question":e.saveQuestion}})],1)],1)])}))],2),e._v(" "),r("v-divider"),e._v(" "),r("div",{staticClass:"d-flex flex-row justify-space-between pa-5 form-generator-background"},[r("v-btn",{attrs:{color:"primary","x-large":""},on:{click:function(t){e.numberOfQuestions++}}},[e._v("Add new question")]),e._v(" "),r("v-btn",{attrs:{color:"green","x-large":""},on:{click:e.saveForm}},[r("span",{staticClass:"white--text d-flex align-center"},[r("v-icon",{attrs:{left:""}},[e._v("mdi-check")]),e._v("Save form")],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=P.exports;h()(P,{VBtn:O.a,VCard:F.a,VDivider:y.a,VIcon:k.a,VRow:I.a,VSelect:L.a,VTextField:x.a})}}]);