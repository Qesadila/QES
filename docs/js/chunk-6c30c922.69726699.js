(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c30c922"],{"01f9":function(t,e,n){"use strict";var r=n("2d00"),i=n("5ca1"),a=n("2aba"),o=n("32e9"),s=n("84f2"),c=n("41a0"),u=n("7f20"),f=n("38fd"),l=n("2b4c")("iterator"),p=!([].keys&&"next"in[].keys()),v="@@iterator",d="keys",b="values",h=function(){return this};t.exports=function(t,e,n,g,m,y,x){c(n,e,g);var w,S,C,_=function(t){if(!p&&t in j)return j[t];switch(t){case d:return function(){return new n(this,t)};case b:return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",L=m==b,k=!1,j=t.prototype,T=j[l]||j[v]||m&&j[m],M=T||_(m),P=m?L?_("entries"):M:void 0,E="Array"==e&&j.entries||T;if(E&&(C=f(E.call(new t)),C!==Object.prototype&&C.next&&(u(C,O,!0),r||"function"==typeof C[l]||o(C,l,h))),L&&T&&T.name!==b&&(k=!0,M=function(){return T.call(this)}),r&&!x||!p&&!k&&j[l]||o(j,l,M),s[e]=M,s[O]=h,m)if(w={values:L?M:_(b),keys:y?M:_(d),entries:P},x)for(S in w)S in j||a(j,S,w[S]);else i(i.P+i.F*(p||k),e,w);return w}},"0d58":function(t,e,n){var r=n("ce10"),i=n("e11e");t.exports=Object.keys||function(t){return r(t,i)}},1495:function(t,e,n){var r=n("86cc"),i=n("cb7c"),a=n("0d58");t.exports=n("9e1e")?Object.defineProperties:function(t,e){i(t);var n,o=a(e),s=o.length,c=0;while(s>c)r.f(t,n=o[c++],e[n]);return t}},"1a01":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-page-title"},[n("div",{staticClass:"page-title-wrapper"},[n("div",{staticClass:"page-title-heading"},[n("div",{staticClass:"page-title-icon"},[n("i",{class:t.icon})]),n("div",[t._v("\n                "+t._s(t.heading)+"\n                "),n("div",{staticClass:"page-title-subheading"},[t._v("\n                    "+t._s(t.subheading)+"\n                ")])])]),n("div",{staticClass:"page-title-actions"},[n("button",{staticClass:"btn-shadow mr-3 btn btn-dark",attrs:{type:"button"}},[n("font-awesome-icon",{attrs:{icon:"star"}})],1),n("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{type:"button"}},[n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),t._v("\n                Create New\n            ")],1)])])])},i=[],a=n("ecee"),o=n("c074"),s=n("ad3d");a["c"].add(o["R"],o["L"]);var c={components:{"font-awesome-icon":s["a"]},props:{icon:String,heading:String,subheading:String}},u=c,f=n("2877"),l=Object(f["a"])(u,r,i,!1,null,null,null);e["a"]=l.exports},"230e":function(t,e,n){var r=n("d3f4"),i=n("7726").document,a=r(i)&&r(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},"2aba":function(t,e,n){var r=n("7726"),i=n("32e9"),a=n("69a8"),o=n("ca5a")("src"),s="toString",c=Function[s],u=(""+c).split(s);n("8378").inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,s){var c="function"==typeof n;c&&(a(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(a(n,o)||i(n,o,t[e]?""+t[e]:u.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,s,(function(){return"function"==typeof this&&this[o]||c.call(this)}))},"2aeb":function(t,e,n){var r=n("cb7c"),i=n("1495"),a=n("e11e"),o=n("613b")("IE_PROTO"),s=function(){},c="prototype",u=function(){var t,e=n("230e")("iframe"),r=a.length,i="<",o=">";e.style.display="none",n("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+o+"document.F=Object"+i+"/script"+o),t.close(),u=t.F;while(r--)delete u[c][a[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[c]=r(t),n=new s,s[c]=null,n[o]=t):n=u(),void 0===e?n:i(n,e)}},"2b4c":function(t,e,n){var r=n("5537")("wks"),i=n("ca5a"),a=n("7726").Symbol,o="function"==typeof a,s=t.exports=function(t){return r[t]||(r[t]=o&&a[t]||(o?a:i)("Symbol."+t))};s.store=r},"2d00":function(t,e){t.exports=!1},"2d95":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"32e9":function(t,e,n){var r=n("86cc"),i=n("4630");t.exports=n("9e1e")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"38fd":function(t,e,n){var r=n("69a8"),i=n("4bf8"),a=n("613b")("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},"41a0":function(t,e,n){"use strict";var r=n("2aeb"),i=n("4630"),a=n("7f20"),o={};n("32e9")(o,n("2b4c")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(o,{next:i(1,n)}),a(t,e+" Iterator")}},4588:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},4630:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"4bf8":function(t,e,n){var r=n("be13");t.exports=function(t){return Object(r(t))}},5537:function(t,e,n){var r=n("8378"),i=n("7726"),a="__core-js_shared__",o=i[a]||(i[a]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("2d00")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"5ca1":function(t,e,n){var r=n("7726"),i=n("8378"),a=n("32e9"),o=n("2aba"),s=n("9b43"),c="prototype",u=function(t,e,n){var f,l,p,v,d=t&u.F,b=t&u.G,h=t&u.S,g=t&u.P,m=t&u.B,y=b?r:h?r[e]||(r[e]={}):(r[e]||{})[c],x=b?i:i[e]||(i[e]={}),w=x[c]||(x[c]={});for(f in b&&(n=e),n)l=!d&&y&&void 0!==y[f],p=(l?y:n)[f],v=m&&l?s(p,r):g&&"function"==typeof p?s(Function.call,p):p,y&&o(y,f,p,t&u.U),x[f]!=p&&a(x,f,v),g&&w[f]!=p&&(w[f]=p)};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"613b":function(t,e,n){var r=n("5537")("keys"),i=n("ca5a");t.exports=function(t){return r[t]||(r[t]=i(t))}},"626a":function(t,e,n){var r=n("2d95");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},6821:function(t,e,n){var r=n("626a"),i=n("be13");t.exports=function(t){return r(i(t))}},"69a8":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"6a99":function(t,e,n){var r=n("d3f4");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},7726:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"77f1":function(t,e,n){var r=n("4588"),i=Math.max,a=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):a(t,e)}},"79e5":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"7f20":function(t,e,n){var r=n("86cc").f,i=n("69a8"),a=n("2b4c")("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,a)&&r(t,a,{configurable:!0,value:e})}},8378:function(t,e){var n=t.exports={version:"2.6.3"};"number"==typeof __e&&(__e=n)},"84f2":function(t,e){t.exports={}},"86cc":function(t,e,n){var r=n("cb7c"),i=n("c69a"),a=n("6a99"),o=Object.defineProperty;e.f=n("9e1e")?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),i)try{return o(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"9b43":function(t,e,n){var r=n("d8e8");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"9c6c":function(t,e,n){var r=n("2b4c")("unscopables"),i=Array.prototype;void 0==i[r]&&n("32e9")(i,r,{}),t.exports=function(t){i[r][t]=!0}},"9c6f4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("b-card",{staticClass:"mb-3",attrs:{title:"Basic"}},[n("b-progress",{attrs:{value:t.counter,max:t.max,"show-progress":"",animated:""}}),n("b-progress",{staticClass:"mt-1",attrs:{max:t.max,"show-value":""}},[n("b-progress-bar",{attrs:{value:.6*t.counter,variant:"success"}}),n("b-progress-bar",{attrs:{value:.25*t.counter,variant:"warning"}}),n("b-progress-bar",{attrs:{value:.15*t.counter,variant:"danger"}})],1),n("b-btn",{staticClass:"mt-4",on:{click:t.clicked}},[t._v("Click me")])],1),n("b-card",{staticClass:"mb-3",attrs:{title:"Colors"}},t._l(t.bars,(function(e){return n("div",{staticClass:"row mb-1"},[n("div",{staticClass:"col-sm-2"},[t._v(t._s(e.variant)+":")]),n("div",{staticClass:"col-sm-10 pt-1"},[n("b-progress",{key:e.variant,attrs:{value:e.value,variant:e.variant}})],1)])})),0)],1),n("b-col",{attrs:{md:"6"}},[n("b-card",{staticClass:"mb-3",attrs:{title:"Sizing"}},[n("b-progress",{staticClass:"mb-3",attrs:{value:t.value,"show-progress":""}}),n("b-progress",{staticClass:"mb-2",attrs:{height:"2rem",value:t.value,"show-progress":""}}),n("b-progress",{staticClass:"mb-2",attrs:{height:"20px",value:t.value,"show-progress":""}}),n("b-progress",{attrs:{height:"2px",value:t.value}})],1),n("b-card",{staticClass:"mb-3",attrs:{title:"Striped"}},[n("b-progress",{staticClass:"mb-2",attrs:{value:25,variant:"success",striped:t.striped}}),n("b-progress",{staticClass:"mb-2",attrs:{value:50,variant:"info",striped:t.striped}}),n("b-progress",{staticClass:"mb-2",attrs:{value:75,variant:"warning",striped:t.striped}}),n("b-progress",{staticClass:"mb-2",attrs:{value:100,variant:"danger",striped:t.striped}}),n("b-button",{attrs:{variant:"secondary"},on:{click:function(e){t.striped=!t.striped}}},[t._v("\n          "+t._s(t.striped?"Remove":"Add")+" Striped\n        ")])],1)],1)],1)],1)},i=[],a=(n("ac6a"),n("1a01")),o={components:{PageTitle:a["a"]},data:function(){return{heading:"Progress Bar",subheading:"You can use the progress bars on their own or in combination with other widgets.",icon:"pe-7s-filter icon-gradient bg-grow-early",counter:45,max:100,bars:[{variant:"success",value:75},{variant:"info",value:75},{variant:"warning",value:75},{variant:"danger",value:75},{variant:"primary",value:75},{variant:"secondary",value:75},{variant:"dark",value:75},{variant:"alternate",value:75},{variant:"focus",value:75}],timer:null,striped:!0,value:75}},methods:{clicked:function(){this.counter=Math.random()*this.max,console.log("Change progress to "+Math.round(100*this.counter)/100)}},mounted:function(){var t=this;this.timer=setInterval((function(){t.bars.forEach((function(t){return t.value=25+75*Math.random()}))}),2e3)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}},s=o,c=n("2877"),u=Object(c["a"])(s,r,i,!1,null,null,null);e["default"]=u.exports},"9def":function(t,e,n){var r=n("4588"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},"9e1e":function(t,e,n){t.exports=!n("79e5")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),a=n("2aba"),o=n("7726"),s=n("32e9"),c=n("84f2"),u=n("2b4c"),f=u("iterator"),l=u("toStringTag"),p=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=i(v),b=0;b<d.length;b++){var h,g=d[b],m=v[g],y=o[g],x=y&&y.prototype;if(x&&(x[f]||s(x,f,p),x[l]||s(x,l,g),c[g]=p,m))for(h in r)x[h]||a(x,h,r[h],!0)}},be13:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},c366:function(t,e,n){var r=n("6821"),i=n("9def"),a=n("77f1");t.exports=function(t){return function(e,n,o){var s,c=r(e),u=i(c.length),f=a(o,u);if(t&&n!=n){while(u>f)if(s=c[f++],s!=s)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},c69a:function(t,e,n){t.exports=!n("9e1e")&&!n("79e5")((function(){return 7!=Object.defineProperty(n("230e")("div"),"a",{get:function(){return 7}}).a}))},ca5a:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},cadf:function(t,e,n){"use strict";var r=n("9c6c"),i=n("d53b"),a=n("84f2"),o=n("6821");t.exports=n("01f9")(Array,"Array",(function(t,e){this._t=o(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),a.Arguments=a.Array,r("keys"),r("values"),r("entries")},cb7c:function(t,e,n){var r=n("d3f4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},ce10:function(t,e,n){var r=n("69a8"),i=n("6821"),a=n("c366")(!1),o=n("613b")("IE_PROTO");t.exports=function(t,e){var n,s=i(t),c=0,u=[];for(n in s)n!=o&&r(s,n)&&u.push(n);while(e.length>c)r(s,n=e[c++])&&(~a(u,n)||u.push(n));return u}},d3f4:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},d8e8:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},e11e:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},fab2:function(t,e,n){var r=n("7726").document;t.exports=r&&r.documentElement}}]);