(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25461704"],{"56b4":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"h-100 bg-premium-dark"},[a("div",{staticClass:"d-flex h-100 justify-content-center align-items-center"},[a("b-col",{staticClass:"mx-auto app-login-box",attrs:{md:"8"}},[a("div",{staticClass:"app-logo-inverse mx-auto mb-3"}),a("div",{staticClass:"modal-dialog w-100"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("h5",{staticClass:"modal-title"},[a("h4",{staticClass:"mt-2"},[a("div",[e._v("Welcome,")]),a("span",[e._v("It only takes a\n                    "),a("span",{staticClass:"text-success"},[e._v("few seconds")]),e._v(" to create\n                    your account")])])]),a("div",{staticClass:"divider"}),a("b-form-group",{attrs:{id:"exampleInputGroup1","label-for":"exampleInput1",description:"We'll never share your email with anyone else."}},[a("b-form-input",{attrs:{id:"exampleInput1",type:"email",required:"",placeholder:"Enter email..."},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("b-form-group",{attrs:{id:"exampleInputGroup12","label-for":"exampleInput12"}},[a("b-form-input",{attrs:{id:"exampleInput12",type:"text",required:"",placeholder:"Enter name..."},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("b-form-group",{attrs:{id:"exampleInputGroup2","label-for":"exampleInput1"}},[a("b-form-input",{attrs:{id:"exampleInput2",type:"password",required:"",placeholder:"Enter password..."},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),a("div",{staticClass:"col-md-6"},[a("b-form-group",{attrs:{id:"exampleInputGroup2","label-for":"exampleInput2"}},[a("b-form-input",{attrs:{id:"exampleInput3",type:"password",required:"",placeholder:"Repeat password..."},model:{value:e.form.repeatPassword,callback:function(t){e.$set(e.form,"repeatPassword",t)},expression:"form.repeatPassword"}})],1)],1)]),a("b-form-checkbox",{attrs:{name:"check",id:"exampleCheck"},model:{value:e.form.acceptedTermOfUse,callback:function(t){e.$set(e.form,"acceptedTermOfUse",t)},expression:"form.acceptedTermOfUse"}},[e._v("\n                Accept our\n                "),a("a",{attrs:{href:"javascript:void(0);"}},[e._v("Terms and Conditions")]),e._v(".\n              ")]),a("div",{staticClass:"divider"}),a("h6",{staticClass:"mb-0"},[e._v("\n                Already have an account?\n                "),a("router-link",{staticClass:"text-primary",attrs:{to:"/login"}},[e._v("Sign in")]),e._v("\n                |\n                "),a("a",{staticClass:"text-primary",attrs:{href:"javascript:void(0);"}},[e._v("Recover Password")])],1)],1),a("div",{staticClass:"modal-footer d-block text-center"},[a("b-button",{staticClass:"btn-wide btn-pill btn-shadow btn-hover-shine",attrs:{color:"primary",size:"lg"},on:{click:e.register}},[e._v("Create Account\n              ")])],1)])]),a("div",{staticClass:"text-center text-white opacity-8 mt-3"},[e._v("\n          Copyright © ArchitectUI 2019\n        ")])])],1)])])},r=[],o=a("f499"),n=a.n(o),i=(a("7f7f"),a("96cf"),a("3b8d")),c=a("69f2"),l=a.n(c),p={data:function(){return{form:{email:"",name:"",password:"",repeatPassword:"",language:"",acceptedTermOfUse:!1}}},computed:{passwordMatchCheck:function(){return this.form.password&&this.form.repeatPassword&&this.form.password===this.form.repeatPassword}},methods:{register:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.form.acceptedTermOfUse){e.next=26;break}if(!this.passwordMatchCheck){e.next=23;break}return e.prev=2,t=new FormData,t.append("email",this.form.email),t.append("name",this.form.name),t.append("language",this.$i18n.locale),t.append("passwordHash",l()("sha256").update(this.form.password).digest("hex")),e.next=10,this.$http.post("http://qesadila.azurewebsites.net/v1/Authorize/Register",t);case 10:a=e.sent,s=a.data,localStorage.setItem("token",s.token),localStorage.setItem("loggedIn",!0),localStorage.setItem("user",n()(s.user)),this.$router.push("/"),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](2),console.log(e.t0);case 21:e.next=24;break;case 23:console.log("Musíte zadat hesla, která se shodují.");case 24:e.next=27;break;case 26:console.log("Bez souhlasu není možné registrovat");case 27:case"end":return e.stop()}}),e,this,[[2,18]])})));function t(){return e.apply(this,arguments)}return t}()}},d=p,m=a("2877"),u=Object(m["a"])(d,s,r,!1,null,null,null);t["default"]=u.exports},"7f7f":function(e,t,a){var s=a("86cc").f,r=Function.prototype,o=/^\s*function ([^ (]*)/,n="name";n in r||a("9e1e")&&s(r,n,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);