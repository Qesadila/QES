(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{517:function(e,t,r){"use strict";r.r(t);r(15),r(12),r(9),r(7),r(13),r(27),r(41);var o=r(10),n=r(1),l=(r(65),r(86));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var v={middleware:"authenticated",data:function(){return{headers:[{text:this.$t("voterListManager.votersTable.voterName"),sortable:!0,value:"name"},{text:this.$t("voterListManager.votersTable.identities"),sortable:!0,value:"cryptoIdentities"}],allLists:[],dialog:!1,voter:{isRegistered:!0,email:"",file:null,isQes:!0}}},computed:{selectedList:function(){var e=this;return this.allLists&&this.allLists.find((function(t){return t.voterListId===e.$route.params.id}))}},mounted:function(){this.fetchList()},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)("listManager",["performFetchPrivateInfo"]),{},Object(l.b)("listManager",["performAssignVoterToList"]),{fetchList:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.performFetchPrivateInfo();case 2:data=t.sent,e.allLists=data;case 4:case"end":return t.stop()}}),t)})))()},createAndAttachUser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.voter.isRegistered){t.next=8;break}if(void 0===e.voter.isQes){t.next=6;break}return t.next=4,e.performAddVoter({email:e.voter.email,file:e.voter.file,isQes:e.voter.isQes});case 4:t.next=8;break;case 6:return t.next=8,e.performAddVoter({email:e.voter.email,file:e.voter.file,isQes:!1});case 8:return t.next=10,e.performAssignVoterToList({userEmail:e.voter.email,voterListId:e.$route.params.id});case 10:(r=t.sent)&&(o="?",n=!1,r.voter&&(o=r.voter.name),void 0!==r.voter.isQes&&(n=r.voter.isQes),e.selectedList.voters.push({email:e.voter.email,name:o,isQes:n,id:r.voterId}),e.$store.dispatch("snackbar/openSuccess","Voter has been added to the voter list")),e.voter.email="",e.voter.file=null,e.dialog=!1,e.voter.isQes=!0;case 16:case"end":return t.stop()}}),t)})))()}})},d=r(64),f=r(72),m=r.n(f),h=r(193),L=r(436),_=r(435),x=r(497),w=r(472),V=r(178),O=r(491),$=r(173),y=r(419),j=r(427),k=r(492),P=r(93),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"fill-height pa-12",attrs:{"no-gutters":"",justify:"center",align:"center"}},[e.selectedList?r("v-card",{attrs:{width:"100%"}},[r("form",[r("div",{staticClass:"d-flex flex-row justify-center py-5 display-1"},[e._v("\n        "+e._s(e.$t("voterListManager.voters"))+"\n      ")]),e._v(" "),r("v-divider",{staticClass:"mb-10"}),e._v(" "),r("div",{staticClass:"px-5"},[r("v-text-field",{attrs:{disabled:"",label:e.$t("voterListManager.labelListName"),outlined:""},model:{value:e.selectedList.voterListName,callback:function(t){e.$set(e.selectedList,"voterListName",t)},expression:"selectedList.voterListName"}}),e._v(" "),r("v-switch",{attrs:{disabled:"",label:e.$t("voterListManager.labelIsPublic")},model:{value:e.selectedList.isPublic,callback:function(t){e.$set(e.selectedList,"isPublic",t)},expression:"selectedList.isPublic"}})],1),e._v(" "),null!==e.selectedList?r("div",{staticClass:"pa-5"},[r("h2",{staticClass:"mb-3 text-center"},[e._v(e._s(e.$t("voterListManager.voters")))]),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.selectedList.voters,"items-per-page":-1,"hide-default-footer":!0}}),e._v(" "),r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[r("v-btn",e._g({staticClass:"mt-5",attrs:{color:"red lighten-2",dark:""}},o),[e._v("\n              "+e._s(e.$t("voterListManager.addVoter"))+"\n            ")])]}}],null,!1,3132360886),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("\n              "+e._s(e.$t("voterListManager.addVoter"))+"\n            ")]),e._v(" "),r("v-card-text",{staticClass:"pt-5"},[r("v-text-field",{attrs:{label:e.$t("voterListManager.labelVoterEmail"),outlined:""},model:{value:e.voter.email,callback:function(t){e.$set(e.voter,"email",t)},expression:"voter.email"}}),e._v(" "),r("v-switch",{attrs:{label:e.$t("voterListManager.labelVoterSubmittedGDPR")},model:{value:e.voter.isRegistered,callback:function(t){e.$set(e.voter,"isRegistered",t)},expression:"voter.isRegistered"}}),e._v(" "),e.voter.isRegistered?e._e():r("v-file-input",{attrs:{label:e.$t("voterListManager.labelSignFile"),outlined:""},model:{value:e.voter.file,callback:function(t){e.$set(e.voter,"file",t)},expression:"voter.file"}}),e._v(" "),e.voter.isRegistered?e._e():r("v-switch",{attrs:{label:e.$t("voterListManager.labelIsQes")},model:{value:e.voter.isQes,callback:function(t){e.$set(e.voter,"isQes",t)},expression:"voter.isQes"}})],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:e.createAndAttachUser}},[e._v("\n                "+e._s(e.$t("voterListManager.addVoter"))+"\n              ")])],1)],1)],1)],1):e._e()],1)]):r("div",[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:h.a,VCard:L.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDataTable:x.a,VDialog:w.a,VDivider:V.a,VFileInput:O.a,VProgressCircular:$.a,VRow:y.a,VSpacer:j.a,VSwitch:k.a,VTextField:P.a})}}]);