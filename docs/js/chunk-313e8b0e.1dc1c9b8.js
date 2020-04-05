(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-313e8b0e"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("integer",/^-?[0-9]*$/);t.default=i},"25b6":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",[r("v-card",{staticStyle:{padding:"10px"}},[r("v-text-field",{attrs:{counter:255,label:e.$t("label"),required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("datepicker",{on:{fromSet:e.fromSet,untilSet:e.untilSet}}),e.dateError?r("div",{staticStyle:{color:"red"}},[e._v("\n      "+e._s(e.dateError)+"\n    ")]):e._e()],1),r("v-divider"),e._l(e.forms,(function(t,n){return r("li",{staticStyle:{"list-style-type":"none"}},[r("v-card",{staticStyle:{padding:"10px","margin-bottom":"10px"}},[r("v-text-field",{attrs:{"error-messages":e.questionErrors(n),counter:255,label:e.$t("Question"),required:""},on:{input:function(t){return e.$v.forms.$each.$iter[n].question.$touch()},blur:function(t){return e.$v.forms.$each.$iter[n].question.$touch()}},model:{value:t.question,callback:function(r){e.$set(t,"question",r)},expression:"form.question"}}),e._l(t.answers,(function(i,u){return r("li",{staticStyle:{"list-style-type":"none"}},[r("v-text-field",{staticStyle:{width:"98%"},attrs:{"error-messages":e.answerErrors(n,u),label:e.$t("Answer")+" "+(u+1),required:""},on:{input:function(t){return e.$v.forms.$each.$iter[n].answers.$each.$iter[u].text.$touch()},blur:function(t){return e.$v.forms.$each.$iter[n].answers.$each.$iter[u].text.$touch()}},model:{value:i.text,callback:function(t){e.$set(i,"text",t)},expression:"answer.text"}}),t.answers.length>1?r("div",{staticClass:"font-icon-wrapper",staticStyle:{width:"2%",border:"none",float:"right","margin-top":"-55px",color:"red"},attrs:{title:"Remove answer"},on:{click:function(r){return e.removeAnswer(t,i)}}},[r("i",{staticClass:"pe-7s-close"})]):e._e()],1)})),r("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{type:"button"},on:{click:function(r){return e.addNewAnswer(t)}}},[r("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),e._v("\n          "+e._s(e.$t("AddNewAnswer"))+"\n      ")],1),r("v-checkbox",{attrs:{label:e.$t("Public")},on:{change:function(t){return e.$v.checkbox.$touch()},blur:function(t){return e.$v.checkbox.$touch()}},model:{value:t.public_,callback:function(r){e.$set(t,"public_",r)},expression:"form.public_"}}),e.forms.length>1?r("div",{staticClass:"font-icon-wrapper",staticStyle:{width:"2%",border:"none",float:"right","margin-top":"-55px",color:"red"},attrs:{title:"Remove question"},on:{click:function(r){return e.removeForm(t)}}},[r("i",{staticClass:"pe-7s-close"})]):e._e()],2)],1)})),r("div",{staticStyle:{"margin-bottom":"10px"}},[r("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{type:"button"},on:{click:e.addNewForm}},[r("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),e._v("\n      "+e._s(e.$t("AddNewQuestion"))+"\n    ")],1)]),r("v-btn",{on:{click:e.submit}},[e._v(e._s(e.$t("submit")))]),r("v-btn",{on:{click:e.clear}},[e._v(e._s(e.$t("clear")))])],2)},i=[],u=r("1dce"),o=r("b5ae"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-text-field",e._g({staticStyle:{"margin-left":"10px"},attrs:{label:e.$t("OpenFrom"),"prepend-icon":"event",readonly:""},model:{value:e.from,callback:function(t){e.from=t},expression:"from"}},n))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[r("v-date-picker",{on:{input:function(t){e.menu=!1}},model:{value:e.from,callback:function(t){e.from=t},expression:"from"}})],1)],1),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-text-field",e._g({staticStyle:{"margin-left":"10px"},attrs:{label:e.$t("OpenUntil"),"prepend-icon":"event",readonly:""},model:{value:e.until,callback:function(t){e.until=t},expression:"until"}},n))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[r("v-date-picker",{on:{input:function(t){e.menu2=!1}},model:{value:e.until,callback:function(t){e.until=t},expression:"until"}})],1)],1),r("v-spacer")],1)},f=[],s={data:function(){return{date:(new Date).toISOString().substr(0,10),menu:!1,modal:!1,menu2:!1,from:null,until:null}},watch:{from:function(e){this.$emit("fromSet",e)},until:function(e){this.$emit("untilSet",e)}}},l=s,c=r("2877"),d=r("6544"),m=r.n(d),p=r("2e4b"),v=r("0e8f"),b=r("a722"),h=r("e449"),y=r("9910"),g=r("2677"),w=Object(c["a"])(l,a,f,!1,null,null,null),_=w.exports;m()(w,{VDatePicker:p["a"],VFlex:v["a"],VLayout:b["a"],VMenu:h["a"],VSpacer:y["a"],VTextField:g["a"]});var $=r("ad3d"),P={question:"",mandatory:!1,public_:!1,numberOfPositiveAnswers:1,numberOfNegativeAnswers:0,answers:[{text:""}]},O={mixins:[u["validationMixin"]],components:{datepicker:_,"font-awesome-icon":$["a"]},props:{data:{type:Array,description:"Existing voting forms data"}},validations:{forms:{$each:{question:{required:o["required"]},answers:{required:o["required"],$each:{text:{required:o["required"]}}}}}},data:function(){return{from:null,until:null,name:null,dateError:"",forms:[]}},computed:{},mounted:function(){this.data?this.forms=this.data:this.addNewForm()},methods:{submit:function(){this.$v.$touch(),this.from&&this.until||(this.dateError=this.$t("OpenRequired"))},clear:function(){this.$v.$reset(),this.forms=[P]},questionErrors:function(e){var t=[];return this.$v.forms.$each.$iter[e].question.$dirty?(!this.$v.forms.$each.$iter[e].question.required&&t.push(this.$t("QuestionRequired")),t):t},positiveErrors:function(e){},negativeErrors:function(e){},answerErrors:function(e,t){var r=[];return this.$v.forms.$each.$iter[e].answers.$each.$iter[t].text.$dirty?(!this.$v.forms.$each.$iter[e].answers.$each.$iter[t].text.required&&r.push(this.$t("AnswerRequired")),r):r},fromSet:function(e){this.until<e?this.dateError=this.$t("OpenUntilLessThanOpenFrom"):(this.from=e,this.dateError="")},untilSet:function(e){e<this.from?this.dateError=this.$t("OpenUntilLessThanOpenFrom"):(this.until=e,this.dateError="")},addNewAnswer:function(e){e.answers.push({text:""})},removeAnswer:function(e,t){e.answers.splice(e.answers.indexOf(t),1)},addNewForm:function(){this.forms.push(P)},removeForm:function(e){this.forms.splice(this.forms.indexOf(e),1)}}},x=O,j=r("8336"),q=r("b0af"),S=r("ac7c"),k=r("ce7e"),A=Object(c["a"])(x,n,i,!1,null,null,null);t["a"]=A.exports;m()(A,{VBtn:j["a"],VCard:q["a"],VCheckbox:S["a"],VDivider:k["a"],VTextField:g["a"]})},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=i},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=i},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=i},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("numeric",/^[0-9]*$/);t.default=i},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=i},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,u=(0,n.regex)("email",i);t.default=u},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=i},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=i},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=i},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,u=(0,n.regex)("url",i);t.default=u},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=i(r("8750"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===u(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var a=function(e){return Array.isArray(e)?e.length:"object"===u(e)?Object.keys(e).length:String(e).length};t.len=a;var f=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=f;var s=function(e,t){return(0,n.default)({type:e},(function(e){return!o(e)||t.test(e)}))};t.regex=s},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:""}).BUILD?r("cb69").withParams:r("0234").withParams,i=n;t.default=i},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(u)}))};t.default=i;var u=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=i},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return P.default}}),t.helpers=void 0;var n=j(r("6235")),i=j(r("3a54")),u=j(r("45b8")),o=j(r("ec11")),a=j(r("5d75")),f=j(r("c99d")),s=j(r("91d3")),l=j(r("2a12")),c=j(r("5db3")),d=j(r("d4f4")),m=j(r("aa82")),p=j(r("e652")),v=j(r("b6cb")),b=j(r("772d")),h=j(r("d294")),y=j(r("3360")),g=j(r("6417")),w=j(r("eb66")),_=j(r("46bc")),$=j(r("1331")),P=j(r("c301")),O=x(r("78ef"));function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function j(e){return e&&e.__esModule?e:{default:e}}t.helpers=O},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=i},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=i},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(u)}));t.default=i;var u=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},i=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},u=n.vuelidate?n.vuelidate.withParams:i;t.withParams=u}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=i},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"required"},n.req);t.default=i},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=i},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=i},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=i}}]);