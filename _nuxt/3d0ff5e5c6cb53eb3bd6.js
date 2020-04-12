(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{513:function(e,t,r){"use strict";r.r(t);r(12),r(10),r(8),r(5),r(11),r(25),r(50);var l=r(14),n=r(1),c=r(149);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={middleware:"authenticated",data:function(){return{headers:[{text:"E-mail",sortable:!1,value:"email"},{text:"Qualified electronic signature",sortable:!1,value:"file"},{text:"Action",sortable:!1,value:"actions",width:300}],listName:"",listId:null,voters:[],dialog:!1,isPublic:!1,user:{email:"",file:null,isQES:!0}}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)("listManager",["performAddList","performAssignVoterToList"]),{},Object(c.b)("voter",["performAddVoter"]),{handleUserAnswerChange:function(e,t){this.userAnwers[e]=t},addUsers:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.performAddList({name:e.listName,isPublic:e.isPublic});case 2:r=t.sent,e.listId=r.voterListId;case 4:case"end":return t.stop()}}),t)})))()},createAndAttachUser:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.performAddVoter({email:e.user.email,file:e.user.file,isQES:e.user.isQES});case 2:return r=t.sent,t.next=5,e.performAssignVoterToList({userEmail:r.email,voterListId:e.listId});case 5:(l=t.sent)&&e.voters.push({email:e.user.email,file:e.user.file.name,isQES:e.user.isQES,id:l.voterId}),e.user.email="",e.user.file=null,e.dialog=!1,e.user.isQES=!0;case 11:case"end":return t.stop()}}),t)})))()}})},v=r(60),f=r(68),m=r.n(f),h=r(185),w=r(419),x=r(418),_=r(499),O=r(448),y=r(171),j=r(493),V=r(402),C=r(410),A=r(483),S=r(86),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"fill-height pa-12",attrs:{"no-gutters":"",justify:"center",align:"center"}},[r("v-card",{attrs:{width:"100%"}},[r("form",[r("div",{staticClass:"d-flex flex-row justify-center py-5 display-1"},[e._v("\n        Create New Voter List\n      ")]),e._v(" "),r("v-divider",{staticClass:"mb-10"}),e._v(" "),r("div",{staticClass:"px-5"},[r("v-text-field",{attrs:{label:"List name",outlined:""},model:{value:e.listName,callback:function(t){e.listName=t},expression:"listName"}}),e._v(" "),r("v-switch",{attrs:{label:"Is public"},model:{value:e.isPublic,callback:function(t){e.isPublic=t},expression:"isPublic"}})],1),e._v(" "),r("div",{staticClass:"d-flex flex-row justify-center px-12 mb-6 body"},[r("v-btn",{attrs:{"x-large":"",color:"primary"},on:{click:e.addUsers}},[e._v("Continue")])],1),e._v(" "),null!==e.listId?r("div",{staticClass:"pa-5"},[r("h2",{staticClass:"mb-3 text-center"},[e._v("Voters")]),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.voters,"items-per-page":-1,"hide-default-footer":!0}}),e._v(" "),r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on;return[r("v-btn",e._g({staticClass:"mt-5",attrs:{color:"red lighten-2",dark:""}},l),[e._v("\n              Add user\n            ")])]}}],null,!1,3597175716),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("\n              Add user\n            ")]),e._v(" "),r("v-card-text",{staticClass:"pt-5"},[r("v-text-field",{attrs:{label:"User email",outlined:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),r("v-file-input",{attrs:{label:"Sign file",outlined:""},model:{value:e.user.file,callback:function(t){e.$set(e.user,"file",t)},expression:"user.file"}}),e._v(" "),r("v-switch",{attrs:{label:"Is QES"},model:{value:e.user.isQES,callback:function(t){e.$set(e.user,"isQES",t)},expression:"user.isQES"}})],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:e.createAndAttachUser}},[e._v("\n                Add user\n              ")])],1)],1)],1)],1):e._e()],1)])],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:h.a,VCard:w.a,VCardActions:x.a,VCardText:x.b,VCardTitle:x.c,VDataTable:_.a,VDialog:O.a,VDivider:y.a,VFileInput:j.a,VRow:V.a,VSpacer:C.a,VSwitch:A.a,VTextField:S.a})}}]);