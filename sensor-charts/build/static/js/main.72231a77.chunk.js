(this["webpackJsonpsensor-chart"]=this["webpackJsonpsensor-chart"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(15),i=n.n(s),j=(n(21),n(5)),a=(n(22),n(16)),o=n(10),d=n.n(o),l=n(7),u=n(8),b=n(9),h=n(11),O=n.n(h),f=n(0);function x(e){var t=Object(r.useState)({}),n=Object(j.a)(t,2),c=n[0],s=n[1],i={height:150,width:300},o=Object(r.useState)((function(){return O()("myprefix-")})),h=Object(j.a)(o,1)[0],x=Object(r.useState)((function(){return O()("myprefix-")})),p=Object(j.a)(x,1)[0],m=Object(r.useState)((function(){return O()("myprefix-")})),v=Object(j.a)(m,1)[0],y=function(){fetch(e.url,{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return s(e)}))};return Object(r.useEffect)((function(){y();var e=setInterval((function(){y()}),5e3);return function(){clearInterval(e)}}),[]),Object(f.jsx)(l.a,{children:Object(f.jsx)(u.a,{md:"3",children:Object(f.jsxs)(b.a,{xs:!0,lg:"2",children:[Object(f.jsx)("h2",{children:e.name}),Object(f.jsx)("p",{children:"Humidity"}),Object(f.jsx)(d.a,{id:h,style:i,nrOfLevels:3,percent:c.humidity/100,cornerRadius:3,colors:["#5BE12C","#F5CD19","#EA4228"],needleColor:"#345243",animate:!1}),Object(f.jsx)("p",{children:"Temperature"}),Object(f.jsx)(d.a,{id:p,style:i,nrOfLevels:30,colors:["#FF5F6D","#FFC371"],arcWidth:.3,percent:c.temperature/100,formatTextValue:function(e){return e+"\xb0C"},animate:!1}),Object(f.jsx)("p",{children:"Battery"}),Object(f.jsx)(d.a,{id:v,style:i,animate:!1,nrOfLevels:20,percent:c.battery/100,cornerRadius:3,colors:["#5BE12C","#F5CD19","#EA4228"],needleColor:"#345243"}),Object(f.jsx)(a.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Linkquality"}),Object(f.jsx)("td",{children:c.linkquality})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Pressure"}),Object(f.jsx)("td",{children:c.pressure})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Voltage"}),Object(f.jsx)("td",{children:c.voltage})]})]})})]})})})}n(42);var p=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){fetch("/nodered/sensors",{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var s=n.map((function(e){return Object(f.jsx)(u.a,{children:Object(f.jsx)(b.a,{children:Object(f.jsx)(x,{name:e.name,url:e.url})})})}));return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("header",{className:"App-header"}),Object(f.jsx)(l.a,{children:s})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.72231a77.chunk.js.map