(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93a41f86"],{"0bdc":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-auto"},[a("apexchart",{attrs:{width:"250",type:"radialBar",options:t.chartOptions,series:t.series}})],1)},r=[],i=a("1321"),s=a.n(i),o={name:"RadialBarExample",components:{apexchart:s.a},data:function(){return{chartOptions:{labels:["Percent"]},series:[81]}}},c=o,l=a("2877"),u=Object(l["a"])(c,n,r,!1,null,null,null);e["a"]=u.exports},"0bfb":function(t,e,a){"use strict";var n=a("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"16fe":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"example"},[a("apexchart",{attrs:{height:"350",type:"line",options:t.chartOptions,series:t.series}})],1)},r=[],i=a("1321"),s=a.n(i),o={name:"MixedExample",components:{apexchart:s.a},data:function(){return{chartOptions:{chart:{stacked:!1},stroke:{width:[0,2,5],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"},min:0},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return"undefined"!==typeof t?t.toFixed(0)+" points":t}}}},series:[{name:"TEAM A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"TEAM B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"TEAM C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}]}}},c=o,l=a("2877"),u=Object(l["a"])(c,n,r,!1,null,null,null);e["a"]=u.exports},"1a01":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-page-title"},[a("div",{staticClass:"page-title-wrapper"},[a("div",{staticClass:"page-title-heading"},[a("div",{staticClass:"page-title-icon"},[a("i",{class:t.icon})]),a("div",[t._v("\n                "+t._s(t.heading)+"\n                "),a("div",{staticClass:"page-title-subheading"},[t._v("\n                    "+t._s(t.subheading)+"\n                ")])])]),a("div",{staticClass:"page-title-actions"},[a("button",{staticClass:"btn-shadow mr-3 btn btn-dark",attrs:{type:"button"}},[a("font-awesome-icon",{attrs:{icon:"star"}})],1),a("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{type:"button"}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),t._v("\n                Create New\n            ")],1)])])])},r=[],i=a("ecee"),s=a("c074"),o=a("ad3d");i["c"].add(s["R"],s["L"]);var c={components:{"font-awesome-icon":o["a"]},props:{icon:String,heading:String,subheading:String}},l=c,u=a("2877"),p=Object(u["a"])(l,n,r,!1,null,null,null);e["a"]=p.exports},"230e":function(t,e,a){var n=a("d3f4"),r=a("7726").document,i=n(r)&&n(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},"2aba":function(t,e,a){var n=a("7726"),r=a("32e9"),i=a("69a8"),s=a("ca5a")("src"),o="toString",c=Function[o],l=(""+c).split(o);a("8378").inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,a,o){var c="function"==typeof a;c&&(i(a,"name")||r(a,"name",e)),t[e]!==a&&(c&&(i(a,s)||r(a,s,t[e]?""+t[e]:l.join(String(e)))),t===n?t[e]=a:o?t[e]?t[e]=a:r(t,e,a):(delete t[e],r(t,e,a)))})(Function.prototype,o,(function(){return"function"==typeof this&&this[s]||c.call(this)}))},"32e9":function(t,e,a){var n=a("86cc"),r=a("4630");t.exports=a("9e1e")?function(t,e,a){return n.f(t,e,r(1,a))}:function(t,e,a){return t[e]=a,t}},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},4630:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"69a8":function(t,e){var a={}.hasOwnProperty;t.exports=function(t,e){return a.call(t,e)}},"6a99":function(t,e,a){var n=a("d3f4");t.exports=function(t,e){if(!n(t))return t;var a,r;if(e&&"function"==typeof(a=t.toString)&&!n(r=a.call(t)))return r;if("function"==typeof(a=t.valueOf)&&!n(r=a.call(t)))return r;if(!e&&"function"==typeof(a=t.toString)&&!n(r=a.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},"6b54":function(t,e,a){"use strict";a("3846");var n=a("cb7c"),r=a("0bfb"),i=a("9e1e"),s="toString",o=/./[s],c=function(t){a("2aba")(RegExp.prototype,s,t,!0)};a("79e5")((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?c((function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?r.call(t):void 0)})):o.name!=s&&c((function(){return o.call(this)}))},7726:function(t,e){var a=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=a)},"79e5":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},8378:function(t,e){var a=t.exports={version:"2.6.3"};"number"==typeof __e&&(__e=a)},"86cc":function(t,e,a){var n=a("cb7c"),r=a("c69a"),i=a("6a99"),s=Object.defineProperty;e.f=a("9e1e")?Object.defineProperty:function(t,e,a){if(n(t),e=i(e,!0),n(a),r)try{return s(t,e,a)}catch(o){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(t[e]=a.value),t}},"9e1e":function(t,e,a){t.exports=!a("79e5")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},c69a:function(t,e,a){t.exports=!a("9e1e")&&!a("79e5")((function(){return 7!=Object.defineProperty(a("230e")("div"),"a",{get:function(){return 7}}).a}))},ca5a:function(t,e){var a=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++a+n).toString(36))}},cb7c:function(t,e,a){var n=a("d3f4");t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},d170:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-card",{staticClass:"main-card mb-3",attrs:{title:"Area"}},[a("AreaExample")],1),a("b-card",{staticClass:"main-card mb-3",attrs:{title:"Bar"}},[a("BarExample")],1),a("b-card",{staticClass:"main-card mb-3",attrs:{title:"Column"}},[a("ColumnExample")],1),a("b-card",{staticClass:"main-card mb-3",attrs:{title:"Scatter"}},[a("ScatterExample")],1),a("b-card",{staticClass:"main-card mb-3",attrs:{title:"Heatmap"}},[a("HeatmapExample")],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-card",{staticClass:"main-card mb-3",attrs:{title:"Mixed"}},[a("MixedExample")],1),a("b-card",{staticClass:"main-card mb-3",attrs:{title:"Donut"}},[a("DonutExample")],1),a("b-card",{staticClass:"main-card mb-3",attrs:{title:"Radial Bar"}},[a("RadialBarExample")],1),a("b-card",{staticClass:"main-card mb-3",attrs:{title:"Bubble"}},[a("BubbleExample")],1),a("b-card",{staticClass:"main-card mb-3",attrs:{title:"Line"}},[a("LineExample")],1)],1)],1)],1)},r=[],i=a("1a01"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"example"},[a("apexchart",{attrs:{height:"350",type:"area",options:t.chartOptions,series:t.series}})],1)},o=[],c=a("1321"),l=a.n(c),u={name:"AreaExample",components:{apexchart:l.a},data:function(){return{chartOptions:{dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"]},tooltip:{fixed:{enabled:!1,position:"topRight"}}},series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}]}}},p=u,m=a("2877"),d=Object(m["a"])(p,s,o,!1,null,null,null),h=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"example"},[a("apexchart",{attrs:{height:"350",type:"bar",options:t.chartOptions,series:t.series}}),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-primary",on:{click:t.updateChart}},[t._v("Update!")])])],1)},b=[],x={name:"BarExample",components:{apexchart:l.a},data:function(){return{chartOptions:{plotOptions:{bar:{horizontal:!0}},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]}},series:[{name:"series-1",data:[30,40,45,50,49,60,70,91]}]}},methods:{updateChart:function(){var t=90,e=20,a=this.series[0].data.map((function(){return Math.floor(Math.random()*(t-e+1))+e})),n=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"];this.chartOptions={colors:[n[Math.floor(Math.random()*n.length)]]},this.series=[{data:a}]}}},g=x,v=Object(m["a"])(g,f,b,!1,null,null,null),y=v.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"example"},[a("apexchart",{attrs:{height:"350",type:"bar",options:t.chartOptions,series:t.series}}),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-primary",on:{click:t.updateChart}},[t._v("Update!")])])],1)},E=[],M={name:"ColumnExample",components:{apexchart:l.a},data:function(){return{chartOptions:{plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"$ "+t+" thousands"}}}},series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,41,98,87,44,91,81,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}]}},methods:{updateChart:function(){var t=100,e=20,a=[];this.series.map((function(n){var r=n.data.map((function(){return Math.floor(Math.random()*(t-e+1))+e}));a.push({data:r})})),this.series=a}}},O=M,w=Object(m["a"])(O,C,E,!1,null,null,null),_=w.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"example"},[a("apexchart",{attrs:{height:"350",type:"scatter",options:t.chartOptions,series:t.series}})],1)},S=[],B={name:"ScatterExample",components:{apexchart:l.a},data:function(){return{chartOptions:{chart:{zoom:{enabled:!1}},xaxis:{tickAmount:10},yaxis:{tickAmount:7}},series:[{name:"SAMPLE A",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]]},{name:"SAMPLE B",data:[[6.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]]},{name:"SAMPLE C",data:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8],[24.5,.8],[21.4,0],[21.7,6.9],[28.6,7.7],[15.4,0],[18.1,0],[33.4,0],[16.4,0]]}]}}},F=B,T=Object(m["a"])(F,D,S,!1,null,null,null),A=T.exports,j=a("16fe"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"example"},[a("apexchart",{ref:"donut",attrs:{width:"350",type:"donut",options:t.chartOptions,series:t.series}}),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-primary",on:{click:t.updateChart}},[t._v("Update!")])])],1)},$=[],L={name:"DonutExample",components:{apexchart:l.a},data:function(){return{chartOptions:{labels:["Blue","Green","Yellow","Red"]},series:[11,32,45,32]}},methods:{updateChart:function(){var t=90,e=20,a=this.series.map((function(){return Math.floor(Math.random()*(t-e+1))+e}));this.series=a}}},P=L,R=Object(m["a"])(P,k,$,!1,null,null,null),J=R.exports,W=a("0bdc"),G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"example"},[a("apexchart",{attrs:{height:"350",type:"bubble",options:t.chartOptions,series:t.series}})],1)},H=[],z={name:"BubbleExample",components:{apexchart:l.a},data:function(){return{chartOptions:{dataLabels:{enabled:!1},fill:{opacity:.8,gradient:{enabled:!1}},title:{text:"Simple Bubble Chart"},xaxis:{tickAmount:12,type:"category"},yaxis:{max:70}},series:[{name:"Bubble1",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble2",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble3",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble4",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}]}},methods:{generateData:function(t,e,a){var n=0,r=[];while(n<e){var i=Math.floor(750*Math.random())+1,s=Math.floor(Math.random()*(a.max-a.min+1))+a.min,o=Math.floor(61*Math.random())+15;r.push([i,s,o]),864e5,n++}return r}}},U=z,N=Object(m["a"])(U,G,H,!1,null,null,null),V=N.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"example"},[a("apexchart",{attrs:{height:"300",type:"heatmap",options:t.chartOptions,series:t.series}})],1)},q=[],I=(a("6b54"),{name:"HeatmapExample",components:{apexchart:l.a},data:function(){return{chartOptions:{dataLabels:{enabled:!1},colors:["#008FFB"],xaxis:{type:"category"},title:{text:"HeatMap Chart (Single color)"}},series:[{name:"Metric1",data:this.generateData(20,{min:0,max:90})},{name:"Metric2",data:this.generateData(20,{min:0,max:90})},{name:"Metric3",data:this.generateData(20,{min:0,max:90})},{name:"Metric4",data:this.generateData(20,{min:0,max:90})},{name:"Metric5",data:this.generateData(20,{min:0,max:90})},{name:"Metric6",data:this.generateData(20,{min:0,max:90})},{name:"Metric7",data:this.generateData(20,{min:0,max:90})},{name:"Metric8",data:this.generateData(20,{min:0,max:90})},{name:"Metric9",data:this.generateData(20,{min:0,max:90})}]}},methods:{generateData:function(t,e){var a=0,n=[];while(a<t){var r=(a+1).toString(),i=Math.floor(Math.random()*(e.max-e.min+1))+e.min;n.push({x:r,y:i}),a++}return n}}}),K=I,Q=Object(m["a"])(K,Y,q,!1,null,null,null),X=Q.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"example"},[a("apexchart",{attrs:{height:"350",type:"line",options:t.chartOptions,series:t.series}}),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-primary",on:{click:t.updateChart}},[t._v("Update!")])])],1)},tt=[],et={name:"LineExample",components:{apexchart:l.a},data:function(){return{chartOptions:{xaxis:{type:"datetime",categories:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003"]}},series:[{name:"Series A",data:[30,40,45,50,49,60,70,91]},{name:"Series B",data:[23,43,54,12,44,52,32,11]}]}},methods:{generateDayWiseTimeSeries:function(t,e,a){var n=0,r=[];while(n<e){var i=t,s=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push([i,s]),t+=864e5,n++}return r},updateChart:function(){var t=[{name:"South",data:this.generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(),20,{min:10,max:60})},{name:"North",data:this.generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(),20,{min:10,max:20})},{name:"Central",data:this.generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(),20,{min:10,max:15})}];this.series=t}}},at=et,nt=Object(m["a"])(at,Z,tt,!1,null,null,null),rt=nt.exports,it={components:{PageTitle:i["a"],AreaExample:h,BarExample:y,ColumnExample:_,ScatterExample:A,MixedExample:j["a"],DonutExample:J,RadialBarExample:W["a"],BubbleExample:V,HeatmapExample:X,LineExample:rt},data:function(){return{heading:"Apex Charts",subheading:"Wonderful animated charts built as a Vue component.",icon:"pe-7s-graph2 icon-gradient bg-happy-green"}},methods:{}},st=it,ot=Object(m["a"])(st,n,r,!1,null,null,null);e["default"]=ot.exports},d3f4:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);