(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{503:function(t,e,n){"use strict";n.r(e);n(12),n(10),n(8),n(5),n(11),n(28),n(32),n(25),n(43);var r=n(13),o=n(1),c=(n(61),n(149));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=n(446),v={middleware:"authenticated",data:function(){return{signalStatus:"not-connected",qaIdentity:"",qaCertHash:"",signalStatusType:"warning",signalStatusText:"",userAnwers:{},allLists:[],appRunning:!1,waitingForSign:!1}},computed:{selectedForm:function(){var t=this;return this.allLists&&this.allLists.find((function(e){return e.votingFormId===t.$route.params.id}))}},mounted:function(){var t=this;this.fetchList(),this.connection=(new d.HubConnectionBuilder).withUrl("http://localhost:58080/hubs/signin").build(),this.start(),this.connection.on("Status",(function(e,n,r){t.signalStatus=e,t.qaIdentity=n,t.qaCertHash=r,console.log("new status: "+e),t.setSignalRStatus()})),this.connection.on("Authenticate",(function(e){var n=new FormData;n.append("base64message",e),t.$axios.post("v1/Voter/SubmitVote",n).then((function(){t.waitingForSign=!1,t.$router.push("/voter"),t.$store.dispatch("snackbar/openSuccess","Your votes was signed and counted!")})).catch((function(e){t.waitingForSign=!1,t.$store.dispatch("snackbar/openError",e.response.data.detail)}))})),this.connection.on("Logout",(function(e,n){t.authenticated="Unauthenticated"})),this.setSignalRStatus()},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({start:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.connection.start();case 3:console.assert(t.connection.state===d.HubConnectionState.Connected),console.log("connected"),t.appRunning=!0,t.getStatusFromServer(),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.assert(t.connection.state===d.HubConnectionState.Disconnected),console.log(e.t0),setTimeout((function(){return t.start()}),5e3);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getStatusFromServer:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.connection.invoke("getStatus");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},Object(c.b)("voter",["performFetchAllVoterForms"]),{submitForm:function(){console.log("Form submitted! ->",this.userAnwers);var t={votingForm:this.selectedForm.name,answers:this.userAnwers,time:new Date,votingFormId:this.$route.params.id};this.connection.invoke("SignMessage",btoa(JSON.stringify(t))),this.waitingForSign=!0},handleUserAnswerChange:function(t,e){this.userAnwers[t]=e},fetchList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.performFetchAllVoterForms();case 2:data=e.sent,t.allLists=data;case 4:case"end":return e.stop()}}),e)})))()},setSignalRStatus:function(){switch(this.signalStatus){case"not-connected":this.signalStatusText="The website is not connected to the server",this.signalStatusType="warning";break;case"identity-not-selected":this.signalStatusText="Please select identity first in the QesadilaAuth",this.signalStatusType="warning";break;case"identity-selected":this.selectedForm.listOfValidCertificatesForSignature.includes(this.qaCertHash)?(this.signalStatusText="Your current identity in QesadilaAuth: "+this.qaIdentity,this.signalStatusType="info"):(this.signalStatusText="You are not signed in as valid voter in QesadilaAuth: "+this.qaIdentity,this.signalStatusType="warning");break;case"reconnecting":this.signalStatusText="reconnecting",this.signalStatusType="warning";break;case"reconnected":this.signalStatusText="reconnected",this.signalStatusType="warning";break;case"disconnected":this.signalStatusText="disconnected",this.signalStatusType="warning"}}})},h=n(60),m=n(68),f=n.n(m),w=n(506),S=n(185),y=n(420),_=n(419),x=n(468),C=n(171),F=n(151),O=n(484),T=n(485),j=n(403),k=n(411),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.signalStatusText?n("v-alert",{attrs:{type:t.signalStatusType}},[t._v(t._s(t.signalStatusText))]):t._e(),t._v(" "),n("v-row",{staticClass:"fill-height pa-12",attrs:{"no-gutters":"",justify:"center",align:"center"}},[t.selectedForm&&t.appRunning?n("v-card",{attrs:{width:"100%"}},[n("form",[n("div",{staticClass:"d-flex flex-row justify-center py-5 display-1"},[t._v("\n          "+t._s(t.selectedForm.name)+"\n        ")]),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center px-12 mb-6 body"},[t._v("\n          "+t._s(t.selectedForm.infoText)+"\n        ")]),t._v(" "),n("v-divider",{staticClass:"mb-10"}),t._v(" "),t._l(t.selectedForm.votingFormItems,(function(e,r){return n("div",{key:e.votingFormItemId,staticClass:"px-12"},[n("div",{staticClass:"body-2 mb-2"},[t._v("Question "+t._s(r+1))]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.question))]),t._v(" "),n("div",{staticClass:"pl-5"},[n("v-radio-group",{on:{change:function(n){return t.handleUserAnswerChange(e.question,n)}}},[t._l(e.votingFormItemOptions,(function(option){return n("v-radio",{key:option.votingFormItemOptionId,staticClass:"my-2",attrs:{label:option.option,value:option.option}})})),t._v(" "),n("v-radio",{staticClass:"my-2",attrs:{label:"I do not want to answer",value:"N/A"}})],2),t._v(" "),n("v-divider",{staticClass:"mb-10"})],1)])})),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center px-12 mb-6 body"},[n("v-btn",{attrs:{"x-large":"",color:"primary"},on:{click:t.submitForm}},[t._v("Send form")])],1)],2)]):n("div",[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",value:!t.appRunning,width:"500"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n          Sign app not detected\n        ")]),t._v(" "),n("v-card-text",{staticClass:"pa-5"},[t._v("\n          Please start our sign app to procced on voting\n        ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"warning",to:"/voter"}},[t._v("Go back")])],1),t._v(" "),n("v-divider")],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",value:t.waitingForSign,width:"500"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n          Please sign your votes in app\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VAlert:w.a,VBtn:S.a,VCard:y.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDialog:x.a,VDivider:C.a,VProgressCircular:F.a,VRadio:O.a,VRadioGroup:T.a,VRow:j.a,VSpacer:k.a})}}]);