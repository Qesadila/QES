(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{505:function(n,t,o){"use strict";o.r(t);var c=o(483),e={data:function(){return{authenticated:"Unauthenticated",connection:null}},mounted:function(){var n=this;this.connection=(new c.a).withUrl("http://localhost:58080/hubs/signin").configureLogging(c.b.Information).build(),this.connection.start(),this.connection.on("Authenticate",(function(t,o){console.log("on('Authenticate)",t,o),n.authenticated="Authenticate "+o})),this.connection.on("Logout",(function(t,o){console.log("on('Logout)",t,o),n.authenticated="Unauthenticated"}))},methods:{onclick:function(){return console.log("click"),this.connection.invoke("SignMessage",btoa("click"))}}},l=o(60),component=Object(l.a)(e,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("button",{staticClass:"btn btn-primary",on:{click:this.onclick}},[this._v("Click")])])}),[],!1,null,null,null);t.default=component.exports}}]);