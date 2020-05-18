(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{250:function(t,e,n){"use strict";var r=n(193);e.a=r.a},435:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h}));var r=n(436),o=n(0),l=Object(o.h)("v-card__actions"),c=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),h=Object(o.h)("v-card__title");r.a},457:function(t,e,n){var content=n(458);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("2065bca8",content,!0,{sourceMap:!1})},458:function(t,e,n){(e=n(17)(!1)).push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=e},472:function(t,e,n){"use strict";n(15),n(12),n(9),n(7),n(13),n(30),n(35);var r=n(1),o=(n(20),n(457),n(425)),l=n(119),c=n(141),d=n(195),h=n(199),v=n(197),f=n(196),m=n(36),_=n(102),y=n(8),x=n(11),w=n(0);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=Object(y.a)(l.a,c.a,d.a,h.a,v.a,f.a,m.a);e.a=S.extend({name:"v-dialog",directives:{ClickOutside:_.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(x.d)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w.v.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:C({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=C({},data.style,{maxWidth:"none"===this.maxWidth?void 0:Object(w.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(w.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},482:function(t,e,n){var content=n(483);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("5db1c400",content,!0,{sourceMap:!1})},483:function(t,e,n){(e=n(17)(!1)).push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=e},498:function(t,e,n){"use strict";n.r(e);n(15),n(12),n(9),n(7),n(13),n(30),n(35),n(27),n(41);var r=n(10),o=n(1),l=(n(65),n(86));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=n(253),h={middleware:"authenticated",data:function(){return{signalStatusType:"warning",signalStatusText:"Detecting..",userAnwers:{},allLists:[],appRunning:!1,waitingForSign:!1}},computed:{selectedForm:function(){var t=this;return this.allLists&&this.allLists.find((function(e){return e.votingFormId===t.$route.params.id}))},openFrom:function(){var time=this.selectedForm.openFrom;return new Date(time).toLocaleString()},openUntil:function(){var time=this.selectedForm.openUntil;return new Date(time).toLocaleString()},endingType:function(){return this.selectedForm.endingType?this.$t("votingFormManager."+this.selectedForm.endingType):"Type not defined"},isPublic:function(){return this.selectedForm.isPublic?this.$t("general.yes"):this.$t("general.no")}},mounted:function(){var t=this;this.fetchList(),this.connection=(new d.HubConnectionBuilder).withUrl("http://localhost:58080/hubs/signin").build(),this.start(),this.connection.on("Status",(function(e,n,r){t.setSignalRStatus()}))},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({start:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.connection.start();case 3:t.appRunning=!0,t.getStatusFromServer(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),setTimeout((function(){return t.start()}),5e3);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getStatusFromServer:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.connection.invoke("getStatus");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t.$store.dispatch("snackbar/openError",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},Object(l.b)("voter",["performFetchAllVoterForms","performSubmitVote"]),{utf8_to_b64:function(t){return window.btoa(unescape(encodeURIComponent(t)))},b64_to_utf8:function(t){return decodeURIComponent(escape(window.atob(t)))},submitForm:function(){var t={votingForm:this.selectedForm.name,answers:this.userAnwers,time:new Date,votingFormId:this.$route.params.id};this.connection.invoke("SignMessage",this.utf8_to_b64(JSON.stringify(t)),"VoterAnswerEn"),this.$store.dispatch("snackbar/openSuccess","Please open QesadilaAuth desktop application, and sign the form")},handleUserAnswerChange:function(t,e){this.userAnwers[t]=e},fetchList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.performFetchAllVoterForms();case 2:data=e.sent,t.allLists=data,t.setSignalRStatus();case 5:case"end":return e.stop()}}),e)})))()},setSignalRStatus:function(){var t=!1;switch(this.$store.state.signalR.signalRStatus){case"not-connected":this.signalStatusText="The website is not connected to the server",this.signalStatusType="warning";break;case"identity-not-selected":this.signalStatusText="Please select identity first in the QesadilaAuth",this.signalStatusType="warning";break;case"identity-selected":this.selectedForm?this.selectedForm.listOfValidCertificatesForSignature&&(this.selectedForm.listOfValidCertificatesForSignature.includes(this.$store.state.signalR.signalRCertHash)?(this.signalStatusText="You are signed in as valid voter in QesadilaAuth: "+this.$store.state.signalR.signalRIdentity,this.signalStatusType="info",t=!0):console.log("this.selectedForm.listOfValidCertificatesForSignature, hash",this.selectedForm.listOfValidCertificatesForSignature,this.$store.state.signalR.signalRCertHash)):console.log("this.selectedForm",this.selectedForm),t||(this.signalStatusText="You are not signed in as valid voter in QesadilaAuth: "+this.$store.state.signalR.signalRIdentity,this.signalStatusType="warning");break;case"reconnecting":this.signalStatusText="reconnecting",this.signalStatusType="warning";break;case"reconnected":this.signalStatusText="reconnected",this.signalStatusType="warning";break;case"disconnected":this.signalStatusText="disconnected",this.signalStatusType="warning"}}})},v=n(64),f=n(72),m=n.n(f),_=(n(482),n(187)),y=n(250),x=n(60),w=n(36),O=n(16),C=n(2).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),S=n(8),k=n(11);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var $=Object(S.a)(_.a,w.a,C).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(y.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(x.a,{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(x.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},_.a.options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||O.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(k.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),F=n(193),A=n(436),T=n(435),B=n(472),P=n(178),I=n(173),D=n(493),R=n(494),E=n(419),V=n(452),z=n(427),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-alert",{attrs:{type:t.signalStatusType}},[t._v(t._s(t.signalStatusText))]),t._v(" "),n("v-row",{staticClass:"fill-height pa-12",attrs:{"no-gutters":"",justify:"center",align:"center"}},[t.selectedForm&&t.appRunning?n("v-card",{attrs:{width:"100%"}},[n("form",[n("div",{staticClass:"d-flex flex-row justify-center py-5 display-1"},[t._v("\n          "+t._s(t.selectedForm.name)+"\n        ")]),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[n("tr",[n("th",[t._v("Is public")]),t._v(" "),n("td",[t._v("\n                  "+t._s(t.isPublic)+"\n                ")])]),t._v(" "),n("tr",[n("th",[t._v("Voting started at")]),t._v(" "),n("td",[t._v("\n                  "+t._s(t.openFrom)+"\n                ")])]),t._v(" "),n("tr",[n("th",[t._v("Voting open until")]),t._v(" "),n("td",[t._v("\n                  "+t._s(t.openUntil)+"\n                ")])]),t._v(" "),n("tr",[n("th",[t._v("Ending type")]),t._v(" "),n("td",[t._v("\n                  "+t._s(t.endingType)+"\n                ")])])])]},proxy:!0}],null,!1,387072275)}),t._v(" "),n("v-divider",{staticClass:"mb-10"}),t._v(" "),t._l(t.selectedForm.votingFormItems,(function(e,r){return n("div",{key:e.votingFormItemId,staticClass:"px-12"},[n("div",{staticClass:"body-2 mb-2"},[t._v("\n            "+t._s(t.$t("voter.question")+" "+(r+1))+"\n          ")]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.question))]),t._v(" "),n("div",{staticClass:"pl-5"},[n("v-radio-group",{on:{change:function(n){return t.handleUserAnswerChange(e.question,n)}}},[t._l(e.votingFormItemOptions,(function(option){return n("v-radio",{key:option.votingFormItemOptionId,staticClass:"my-2",attrs:{label:option.option,value:option.option}})})),t._v(" "),n("v-radio",{staticClass:"my-2",attrs:{label:t.$t("voter.labelDoNotWantToAnswer"),value:"N/A"}})],2),t._v(" "),n("v-divider",{staticClass:"mb-10"})],1)])})),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center px-12 mb-6 body"},[n("v-btn",{attrs:{"x-large":"",color:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$t("voter.submitForm")))])],1)],2)]):n("div",[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",value:!t.appRunning,width:"500"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n          "+t._s(t.$t("voter.signAppNotFound"))+"\n        ")]),t._v(" "),n("v-card-text",{staticClass:"pa-5"},[t._v("\n          "+t._s(t.$t("voter.startSignAppForProceed"))+"\n        ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"warning",to:"/voter"}},[t._v(t._s(t.$t("voter.backButton")))])],1),t._v(" "),n("v-divider")],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",value:t.waitingForSign,width:"500"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n          "+t._s(t.$t("voter.signVoteInApp"))+"\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VAlert:$,VBtn:F.a,VCard:A.a,VCardActions:T.a,VCardText:T.b,VCardTitle:T.c,VDialog:B.a,VDivider:P.a,VProgressCircular:I.a,VRadio:D.a,VRadioGroup:R.a,VRow:E.a,VSimpleTable:V.a,VSpacer:z.a})}}]);