(window.webpackJsonppomodoro_clock=window.webpackJsonppomodoro_clock||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),o=n.n(r),c=(n(15),n(3)),i=n(4),s=n(5),u=n(8),m=n(6),d=n(9),h=(n(16),n(7)),v=n.n(h),E=function(){return l.a.createElement("h1",null,"Pomodoro Clock")},b=function(e){var t=e.type,n=e.value,a=e.handleClick;return l.a.createElement("div",null,l.a.createElement("h2",{id:"".concat(t,"-label")},"session"==="".concat(t)?"Session ":"Break ","Length"),l.a.createElement("div",{id:"setTimers-controls"},l.a.createElement("button",{id:"".concat(t,"-decrement"),onClick:function(){return a(!1,"".concat(t,"Value"))}},"\u2193"),"\xa0",l.a.createElement("div",{id:"".concat(t,"-length")},n),"\xa0",l.a.createElement("button",{id:"".concat(t,"-increment"),onClick:function(){return a(!0,"".concat(t,"Value"))}},"\u2191")))},k=function(e){var t=e.mode,n=e.time;return l.a.createElement("div",null,l.a.createElement("h2",{id:"timer-label"},"session"===t?"Session":"Break"),l.a.createElement("p",{id:"time-left"},n))},p=function(e){var t=e.active,n=e.handleReset,a=e.handlePlayPause;return l.a.createElement("div",{id:"controls"},l.a.createElement("button",{id:"start_stop",onClick:a},t?l.a.createElement("span",null,"\u275a\u275a"):l.a.createElement("span",null,"\u25ba")),"\xa0\xa0",l.a.createElement("button",{id:"reset",onClick:n},l.a.createElement("span",null,"\u21ba")))},f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleReset=function(){n.setState({breakValue:5,sessionValue:25,time:15e5,active:!1}),clearInterval(n.pomodro)},n.handlePlayPause=function(){return n.pomodro=setInterval(function(){return n.setState({time:n.state.time-1e3,active:!0})},1e3)},n.handleSetTimers=function(e,t){return n.setState(Object(c.a)({},t,n.state[t]+(e?1:-1)))},n.state={breakValue:5,sessionValue:25,mode:"session",time:15e5,active:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement("br",null),l.a.createElement("div",{id:"setting"},l.a.createElement(b,{type:"break",value:this.state.breakValue,handleClick:this.handleSetTimers}),l.a.createElement(b,{type:"session",value:this.state.sessionValue,handleClick:this.handleSetTimers})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(k,{mode:this.state.mode,time:v()(this.state.time).format("mm:ss")}),l.a.createElement(p,{active:this.state.active,handleReset:this.handleReset,handlePlayPause:this.handlePlayPause})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.61e7b3bc.chunk.js.map