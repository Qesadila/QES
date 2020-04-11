(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{514:function(t,e,n){"use strict";n.r(e);n(12),n(10),n(8),n(5),n(11),n(50);var r=n(14),o=n(1),c=(n(61),n(149)),l=n(449);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={middleware:"authenticated",data:function(){return{userAnwers:{},allLists:[],appRunning:!1,waitingForSign:!1}},computed:{selectedForm:function(){var t=this;return this.allLists&&this.allLists.find((function(e){return e.votingFormId===t.$route.params.id}))}},mounted:function(){var t=this;this.fetchList(),this.connection=(new l.a).withUrl("http://localhost:58080/hubs/signin").build(),this.connection.start().then((function(){t.appRunning=!0})).catch((function(t){console.log(t)})),this.connection.on("Connecting",(function(){alert("connecting")})),this.connection.on("Authenticate",(function(e){var n=new FormData;n.append("base64message",e),t.$axios.post("v1/Voter/SubmitVote",n).then((function(){t.waitingForSign=!1,t.$router.push("/voter"),t.$store.dispatch("snackbar/openSuccess","Your votes was signed and counted!")})).catch((function(e){t.waitingForSign=!1,t.$store.dispatch("snackbar/openError",e.response.data.detail)}))})),this.connection.on("Logout",(function(e,n){console.log("on('Logout)",e,n),t.authenticated="Unauthenticated"}))},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("formManager",["performFetchALlForms"]),{submitForm:function(){console.log("Form submitted! ->",this.userAnwers),this.connection.invoke("SignMessage",btoa(JSON.stringify(this.userAnwers))),this.waitingForSign=!0},handleUserAnswerChange:function(t,e){this.userAnwers[t]=e},fetchList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.performFetchALlForms();case 2:data=e.sent,t.allLists=data;case 4:case"end":return e.stop()}}),e)})))()}})},f=n(60),h=n(68),m=n.n(h),w=n(185),y=n(419),_=n(418),O=n(448),C=n(171),F=n(151),j=n(494),x=n(495),S=n(402),V=n(410),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"fill-height pa-12",attrs:{"no-gutters":"",justify:"center",align:"center"}},[t.selectedForm&&t.appRunning?n("v-card",{attrs:{width:"100%"}},[n("form",[n("div",{staticClass:"d-flex flex-row justify-center py-5 display-1"},[t._v("\n        "+t._s(t.selectedForm.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center px-12 mb-6 body"},[t._v("\n        "+t._s(t.selectedForm.infoText)+"\n      ")]),t._v(" "),n("v-divider",{staticClass:"mb-10"}),t._v(" "),t._l(t.selectedForm.votingFormItems,(function(e,r){return n("div",{key:e.votingFormItemId,staticClass:"px-12"},[n("div",{staticClass:"body-2 mb-2"},[t._v("Question "+t._s(r+1))]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.question))]),t._v(" "),n("div",{staticClass:"pl-5"},[n("v-radio-group",{on:{change:function(n){return t.handleUserAnswerChange(e.question,n)}}},[t._l(e.votingFormItemOptions,(function(option){return n("v-radio",{key:option.votingFormItemOptionId,staticClass:"my-2",attrs:{label:option.option,value:option.option}})})),t._v(" "),n("v-radio",{staticClass:"my-2",attrs:{label:"I do not want to answer",value:"N/A"}})],2),t._v(" "),n("v-divider",{staticClass:"mb-10"})],1)])})),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center px-12 mb-6 body"},[n("v-btn",{attrs:{"x-large":"",color:"primary"},on:{click:t.submitForm}},[t._v("Send form")])],1)],2)]):n("div",[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",value:!t.appRunning,width:"500"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n        Sign app not detected\n      ")]),t._v(" "),n("v-card-text",{staticClass:"pa-5"},[t._v("\n        Please start our sign app to procced on voting\n      ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"warning",to:"/voter"}},[t._v("Go back")])],1),t._v(" "),n("v-divider")],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",value:t.waitingForSign,width:"500"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n        Please sign your votes in app\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:w.a,VCard:y.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDialog:O.a,VDivider:C.a,VProgressCircular:F.a,VRadio:j.a,VRadioGroup:x.a,VRow:S.a,VSpacer:V.a})}}]);