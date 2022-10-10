(()=>{"use strict";var t={192:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(537),o=r.n(n),i=r(645),s=r.n(i)()(o());s.push([t.id,'html{height:100vh}body{margin:0;padding:0;min-height:100vh;background-color:#a32f2f}#title{text-align:center;grid-row:1;grid-column:1/3;font-size:60px;font-family:"Ubuntu",sans-serif;color:#fff;text-shadow:5px 2px 0px #000;margin-top:0;padding-top:50px}#timer{text-align:center;font-size:80px;font-family:"Josefin Sans",sans-serif;text-shadow:5px 2px 0px #000;color:#fff}#form{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:20px 50px 100px;max-width:800px;margin:0 auto;align-items:center}#form>label{color:#fff;font-family:"Montserrat",sans-serif;font-weight:bold;text-shadow:2px 2px 1px #000;font-size:20px}#form>input{border:0;border-radius:5px;box-shadow:3px 3px #000;font-size:15px}#form>button{border:0;border-radius:20px;background-color:#000;box-shadow:2px 2px #fff;color:#fff;font-size:20px;font-family:"Nunito",sans-serif;font-weight:bold;width:100px;height:30px}#form>button:active{background-color:#fff;color:#000;box-shadow:2px 2px #000}#label-pomodoro{grid-row:1;grid-column:1;text-align:center;justify-self:end;margin-right:35px}#time-pomodoro{grid-row:2;grid-column:1;text-align:center;justify-self:end;margin-right:10px}#label-rest{grid-row:1;grid-column:2;text-align:center;justify-self:start;margin-left:70px}#time-rest{grid-row:2;grid-column:2;text-align:center;justify-self:start;margin-left:10px}#btn-start{justify-self:end;margin-right:10px}#btn-reset{justify-self:start;margin-left:10px}#counter{font-size:25px;font-family:"Montserrat",sans-serif;color:#fff;text-shadow:2px 2px 0px #000;text-align:center}',"",{version:3,sources:["webpack://./src/style.scss"],names:[],mappings:"AAAA,KACE,YAAA,CAGF,KACE,QAAA,CACA,SAAA,CACA,gBAAA,CACA,wBAAA,CAGF,OACE,iBAAA,CACA,UAAA,CACA,eAAA,CACA,cAAA,CACA,+BAAA,CACA,UAAA,CACA,4BAAA,CACA,YAAA,CACA,gBAAA,CAGF,OACE,iBAAA,CACA,cAAA,CACA,qCAAA,CACA,4BAAA,CACA,UAAA,CAGF,MACE,YAAA,CACA,6BAAA,CACA,kCAAA,CACA,eAAA,CACA,aAAA,CACA,kBAAA,CAGF,YACE,UAAA,CACA,mCAAA,CACA,gBAAA,CACA,4BAAA,CACA,cAAA,CAGF,YACE,QAAA,CACA,iBAAA,CACA,uBAAA,CACA,cAAA,CAGF,aACE,QAAA,CACA,kBAAA,CACA,qBAAA,CACA,uBAAA,CACA,UAAA,CACA,cAAA,CACA,+BAAA,CACA,gBAAA,CACA,WAAA,CACA,WAAA,CAGF,oBACE,qBAAA,CACA,UAAA,CACA,uBAAA,CAGF,gBACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,gBAAA,CACA,iBAAA,CAGF,eACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,gBAAA,CACA,iBAAA,CAGF,YACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,kBAAA,CACA,gBAAA,CAGF,WACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,kBAAA,CACA,gBAAA,CAGF,WACE,gBAAA,CACA,iBAAA,CAGF,WACE,kBAAA,CACA,gBAAA,CAGF,SACE,cAAA,CACA,mCAAA,CACA,UAAA,CACA,4BAAA,CACA,iBAAA",sourcesContent:["html {\r\n  height: 100vh;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  min-height: 100vh;\r\n  background-color: rgb(163, 47, 47);\r\n}\r\n\r\n#title {\r\n  text-align: center;\r\n  grid-row: 1;\r\n  grid-column: 1/3;\r\n  font-size: 60px;\r\n  font-family: 'Ubuntu', sans-serif;\r\n  color: white;\r\n  text-shadow: 5px 2px 0px black;\r\n  margin-top: 0;\r\n  padding-top: 50px;\r\n}\r\n\r\n#timer {\r\n  text-align: center;\r\n  font-size: 80px;\r\n  font-family: 'Josefin Sans', sans-serif;\r\n  text-shadow: 5px 2px 0px black;\r\n  color: white;\r\n}\r\n\r\n#form {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 20px 50px 100px;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n  align-items: center;\r\n}\r\n\r\n#form > label {\r\n  color: white;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-weight: bold;\r\n  text-shadow: 2px 2px 1px black;\r\n  font-size: 20px;\r\n}\r\n\r\n#form > input {\r\n  border: 0;\r\n  border-radius: 5px;\r\n  box-shadow: 3px 3px black;\r\n  font-size: 15px;\r\n}\r\n\r\n#form > button {\r\n  border: 0;\r\n  border-radius: 20px;\r\n  background-color: black;\r\n  box-shadow: 2px 2px white;\r\n  color: white;\r\n  font-size: 20px;\r\n  font-family: 'Nunito', sans-serif;\r\n  font-weight: bold;\r\n  width: 100px;\r\n  height: 30px;\r\n}\r\n\r\n#form > button:active {\r\n  background-color: white;\r\n  color: black;\r\n  box-shadow: 2px 2px black;\r\n}\r\n\r\n#label-pomodoro {\r\n  grid-row: 1;\r\n  grid-column: 1;\r\n  text-align: center;\r\n  justify-self: end;\r\n  margin-right: 35px;\r\n}\r\n\r\n#time-pomodoro {\r\n  grid-row: 2;\r\n  grid-column: 1;\r\n  text-align: center;\r\n  justify-self: end;\r\n  margin-right: 10px;\r\n}\r\n\r\n#label-rest {\r\n  grid-row: 1;\r\n  grid-column: 2;\r\n  text-align: center;\r\n  justify-self: start;\r\n  margin-left: 70px;\r\n}\r\n\r\n#time-rest {\r\n  grid-row: 2;\r\n  grid-column: 2;\r\n  text-align: center;\r\n  justify-self: start;\r\n  margin-left: 10px;\r\n}\r\n\r\n#btn-start {\r\n  justify-self: end;\r\n  margin-right: 10px;\r\n}\r\n\r\n#btn-reset {\r\n  justify-self: start;\r\n  margin-left: 10px;\r\n}\r\n\r\n#counter {\r\n  font-size: 25px;\r\n  font-family: 'Montserrat', sans-serif;\r\n  color: white;\r\n  text-shadow: 2px 2px 0px black;\r\n  text-align: center;\r\n}\r\n"],sourceRoot:""}]);const a=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var a=0;a<this.length;a++){var A=this[a][0];null!=A&&(s[A]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);n&&s[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},537:t=>{t.exports=function(t){var e=t[1],r=t[3];if(!r)return e;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),i="/*# ".concat(o," */"),s=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(s).concat([i]).join("\n")}return[e].join("\n")}},404:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});var n=r(379),o=r.n(n),i=r(795),s=r.n(i),a=r(569),A=r.n(a),c=r(565),u=r.n(c),d=r(216),p=r.n(d),l=r(589),f=r.n(l),m=r(192),C={};C.styleTagTransform=f(),C.setAttributes=u(),C.insert=A().bind(null,"head"),C.domAPI=s(),C.insertStyleElement=p(),o()(m.Z,C);const h=m.Z&&m.Z.locals?m.Z.locals:void 0},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},s=[],a=0;a<t.length;a++){var A=t[a],c=n.base?A[0]+n.base:A[0],u=i[c]||0,d="".concat(c," ").concat(u);i[c]=u+1;var p=r(d),l={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(l);else{var f=o(l,n);n.byIndex=a,e.splice(a,0,{identifier:d,updater:f,references:1})}s.push(d)}return s}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var a=r(i[s]);e[a].references--}for(var A=n(t,o),c=0;c<i.length;c++){var u=r(i[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=A}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},322:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n=class{constructor({interval:t=1e3,stopwatch:e=!1}={}){var r;this._duration=0,this._endTime=0,this._pauseTime=0,this._status="stopped",this._emitter={all:r=r||new Map,on:function(t,e){var n=r.get(t);n&&n.push(e)||r.set(t,[e])},off:function(t,e){var n=r.get(t);n&&n.splice(n.indexOf(e)>>>0,1)},emit:function(t,e){(r.get(t)||[]).slice().map((function(t){t(e)})),(r.get("*")||[]).slice().map((function(r){r(t,e)}))}},this.tick=()=>{"paused"!==this.status&&(Date.now()>=this._endTime?(this.stop(),this._emitter.emit("tick",this._stopwatch?this._duration:0),this._emitter.emit("done")):this._emitter.emit("tick",this.time))},this._interval=t,this._stopwatch=e}start(t,e){if("stopped"===this.status){if(null==t)throw new TypeError("Must provide duration parameter");this._duration=t,this._endTime=Date.now()+t,this._changeStatus("running"),this._emitter.emit("tick",this._stopwatch?0:this._duration),this._timeoutID=setInterval(this.tick,e||this._interval)}}stop(){this._timeoutID&&clearInterval(this._timeoutID),this._changeStatus("stopped")}pause(){"running"===this.status&&(this._pauseTime=Date.now(),this._changeStatus("paused"))}resume(){"paused"===this.status&&(this._endTime+=Date.now()-this._pauseTime,this._pauseTime=0,this._changeStatus("running"))}_changeStatus(t){this._status=t,this._emitter.emit("statusChanged",this.status)}get time(){if("stopped"===this.status)return 0;const t="paused"===this.status?this._pauseTime:Date.now(),e=this._endTime-t;return this._stopwatch?this._duration-e:e}get duration(){return this._duration}get status(){return this._status}on(t,e){this._emitter.on(t,e)}off(t,e){this._emitter.off(t,e)}}},29:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.changeTimerColor=e.updatePomodoroCounter=e.updateStartButton=e.updateTimer=void 0;const n=r(56),o=document.querySelector("#timer"),i=document.querySelector("#btn-start"),s=document.querySelector("#counter");e.updateTimer=function(t){let e=(0,n.millisecondsToMinutesAndSeconds)(t);o.textContent=e,function(t){document.title=`${t} Pomodoro App `}(e)},e.updateStartButton=function(t){switch(t){case"running":i.textContent="Pause";break;case"paused":case"stopped":i.textContent="Start"}},e.updatePomodoroCounter=function(t){s.textContent=`You have completed ${t} pomodoro(s)`},e.changeTimerColor=function(t){o.style.color=t}},56:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.millisecondsToMinutesAndSeconds=void 0,e.millisecondsToMinutesAndSeconds=function(t){const e=new Date(t);return`${e.getMinutes()}:${e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds()}`}},607:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=n(r(322));r(404);const i=r(29),s=r(28);var a;!function(t){t[t.POMODORO=0]="POMODORO",t[t.REST=1]="REST"}(a||(a={}));let A=a.POMODORO,c=0;(0,i.updatePomodoroCounter)(c);let u=new Audio(s);const d=document.querySelector("#time-pomodoro"),p=document.querySelector("#time-rest");function l(){return{pomodoro:6e4*parseInt(d.value),rest:6e4*parseInt(p.value)}}const f=document.querySelector("#btn-start"),m=document.querySelector("#btn-reset"),C=new o.default({interval:100});(0,i.updateTimer)(l().pomodoro),d.addEventListener("change",(()=>{(0,i.updateTimer)(l().pomodoro)})),f.addEventListener("click",(()=>{"stopped"===C.status?(C.start(l().pomodoro),(0,i.updateTimer)(l().pomodoro)):"paused"===C.status?C.resume():C.pause(),(0,i.updateStartButton)(C.status)})),m.addEventListener("click",(()=>{C.stop(),(0,i.updateStartButton)(C.status),(0,i.updateTimer)(l().pomodoro),(0,i.changeTimerColor)("white")})),C.on("tick",(t=>{(0,i.updateTimer)(t)})),C.on("done",(()=>{C.stop(),A==a.POMODORO?(A=a.REST,C.start(l().rest),(0,i.updateTimer)(l().rest),(0,i.changeTimerColor)("orange")):(A=a.POMODORO,C.start(l().pomodoro),(0,i.updateTimer)(l().pomodoro),(0,i.updatePomodoroCounter)(++c),(0,i.changeTimerColor)("white")),u.play()}))},28:(t,e,r)=>{t.exports=r.p+"27b3348844183796ddd1.wav"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.p="",r.nc=void 0,r(607)})();
//# sourceMappingURL=bundle.js.map