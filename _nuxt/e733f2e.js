(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{453:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return h}));var o=r(454),n=r(0),c=Object(n.h)("v-card__actions"),d=Object(n.h)("v-card__subtitle"),l=Object(n.h)("v-card__text"),h=Object(n.h)("v-card__title");o.a},454:function(e,t,r){"use strict";r(15),r(12),r(10),r(7),r(13);var o=r(2),n=(r(21),r(455),r(197)),c=r(198),d=r(62),l=r(8);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(l.a)(c.a,d.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},d.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=v({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=c.a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},455:function(e,t,r){var content=r(456);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("e23b7040",content,!0,{sourceMap:!1})},456:function(e,t,r){(t=r(17)(!1)).push([e.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),e.exports=t},540:function(e,t,r){"use strict";r.r(t);var o=r(67),n=r(77),c=r.n(n),d=r(454),l=r(453),component=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("v-card",[t("v-card-title",[t("h1",[this._v("Information on the processing of personal data")])]),this._v(" "),t("v-card-text",[this._v('\n    Srdcom doma o.z., Sibirska 65, 83102 Bratislava - Nove Mesto, IČO:\n    52089207 (hereinafter referred to as the “Operator”), hereby apply in\n    accordance with Art. 13 Regulation (EU) 2016/679 of the European\n    Parliament and of the Council on natural persons with regard to the\n    processing of personal data (Name, Surname, personal ID if included in\n    certificate, certificate with public key) and on the free movement of such\n    data and repealing Directive 95/46 / EC (hereinafter "the Regulation")\n    processing your personal data as necessary person concerned person for and\n    for the purpose of properly filing the ordered services / system. The\n    provided personal data will be processed only by other workplaces of the\n    Operators or intermediaries of the Operators. The data provided are\n    neither available nor available to the recipients who are members of the\n    law enforcement agency, the courts and other public authorities in the\n    exercise of their legal competencies. With respect to the aforementioned\n    purposes of processing personal data, their disclosure is obligatory (your\n    consent is not necessary), as their processing is necessary for the\n    purposes of the legitimate interests of the Controller. In accordance with\n    the Regulation, your personal data will only be retained for as long as is\n    necessary for the purpose of processing it, and for as long as your\n    account is registered with the system. Provided that the requirements laid\n    down in Regulation (EU) 2016/679 of the European Parliament and of the\n    Council on the protection of individuals with regard to the processing of\n    personal data and on the free movement of such data are repealed and\n    repealing Directive 95/46 / EC (GDPR) respectively. in Act No.18 / 2018\n    Coll. on the protection of personal data, you have (i) the right to access\n    your personal data, (ii) the right to correct incorrect personal data,\n    (iii) the right to restrict (block) the processing of personal data, (iv)\n    the right to object (v) the right to delete personal data; (vi) the right\n    to data transfer; The rights of the data subject are specified in more\n    detail in Articles 12 to 22 of the GDPR. You have the right to object at\n    any time to the processing of personal data, which is carried out based on\n    the legitimate interest of the Operator. The controller may not further\n    process this personal data unless the necessary legitimate reasons for\n    such processing outweigh your interests, rights and freedoms, or the\n    reasons for proving, asserting or defending legal claims. You can exercise\n    your rights under the Regulation as a data subject through our system or\n    by email at: qesadila.com@gmail.com. You are responsible for the\n    completeness, truthfulness and correctness of the personal data provided.\n    If you change your personal information, you must notify us of any change.\n    In the event that the personal data provided are outdated, after the\n    purpose or expiry of the time necessary for the processing of personal\n    data has elapsed, or if storage for any legal reasons is inadmissible, the\n    stored personal data will be deleted.\n  ')])],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:d.a,VCardText:l.b,VCardTitle:l.c})}}]);