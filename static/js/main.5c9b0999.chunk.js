(window.webpackJsonppomodoro_clock=window.webpackJsonppomodoro_clock||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(14),n(3)),i=n(4),s=n(7),m=n(5),u=n(8),d=(n(15),n(6)),E=n.n(d),v=function(){return r.a.createElement("h1",null,"Pomodoro Clock")},h=function(e){var t=e.type,n=e.value;return r.a.createElement("div",null,r.a.createElement("h2",{id:"".concat(t,"-label")},"session"==="".concat(t)?"Session ":"Break ","Length"),r.a.createElement("div",{id:"setTimers-controls"},r.a.createElement("button",{id:"".concat(t,"-decrement")},"\u2193"),"\xa0",r.a.createElement("div",{id:"".concat(t,"-length")},n),"\xa0",r.a.createElement("button",{id:"".concat(t,"-increment")},"\u2191")))},b=function(e){var t=e.mode,n=e.time;return r.a.createElement("div",null,r.a.createElement("h2",{id:"timer-label"},"session"===t?"Session":"Break"),r.a.createElement("p",{id:"time-left"},n))},p=function(e){var t=e.active;return r.a.createElement("div",{id:"controls"},r.a.createElement("button",{id:"start_stop"},t?r.a.createElement("span",null,"\u275a\u275a"):r.a.createElement("span",null,"\u25ba")),"\xa0\xa0",r.a.createElement("button",{id:"reset"},r.a.createElement("span",null,"\u21ba")))},f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={breakValue:5,sessionValue:25,mode:"session",time:15e5,active:!1},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement("br",null),r.a.createElement("div",{id:"setting"},r.a.createElement(h,{type:"break",value:this.state.breakValue}),r.a.createElement(h,{type:"session",value:this.state.sessionValue})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(b,{mode:this.state.mode,time:E()(this.state.time).format("mm:ss")}),r.a.createElement(p,{active:this.state.active})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.5c9b0999.chunk.js.map