(()=>{"use strict";var t={192:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(537),r=n.n(o),i=n(645),s=n.n(i)()(r());s.push([t.id,'html{height:100vh}body{margin:0;padding:0;min-height:100vh;background-color:#a32f2f}#title{text-align:center;grid-row:1;grid-column:1/3;font-size:60px;font-family:"Ubuntu",sans-serif;color:#fff;text-shadow:5px 2px 0px #000;margin-top:0;padding-top:50px}#timer{text-align:center;font-size:80px;font-family:"Josefin Sans",sans-serif;text-shadow:5px 2px 0px #000;color:#fff}#form{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:20px 50px 100px;max-width:800px;margin:0 auto;align-items:center}#form>label{color:#fff;font-family:"Montserrat",sans-serif;font-weight:bold;text-shadow:2px 2px 1px #000;font-size:20px}#form>input{border:0;border-radius:5px;box-shadow:3px 3px #000;font-size:15px}#form>button{border:0;border-radius:20px;background-color:#000;box-shadow:2px 2px #fff;color:#fff;font-size:20px;font-family:"Nunito",sans-serif;font-weight:bold;width:100px;height:30px}#form>button:active{background-color:#fff;color:#000;box-shadow:2px 2px #000}#label-pomodoro{grid-row:1;grid-column:1;text-align:center;justify-self:end;margin-right:35px}#time-pomodoro{grid-row:2;grid-column:1;text-align:center;justify-self:end;margin-right:10px}#label-rest{grid-row:1;grid-column:2;text-align:center;justify-self:start;margin-left:70px}#time-rest{grid-row:2;grid-column:2;text-align:center;justify-self:start;margin-left:10px}#btn-start{justify-self:end;margin-right:10px}#btn-reset{justify-self:start;margin-left:10px}#counter{font-size:25px;font-family:"Montserrat",sans-serif;color:#fff;text-shadow:2px 2px 0px #000;text-align:center}',"",{version:3,sources:["webpack://./src/style.scss"],names:[],mappings:"AAAA,KACE,YAAA,CAGF,KACE,QAAA,CACA,SAAA,CACA,gBAAA,CACA,wBAAA,CAGF,OACE,iBAAA,CACA,UAAA,CACA,eAAA,CACA,cAAA,CACA,+BAAA,CACA,UAAA,CACA,4BAAA,CACA,YAAA,CACA,gBAAA,CAGF,OACE,iBAAA,CACA,cAAA,CACA,qCAAA,CACA,4BAAA,CACA,UAAA,CAGF,MACE,YAAA,CACA,6BAAA,CACA,kCAAA,CACA,eAAA,CACA,aAAA,CACA,kBAAA,CAGF,YACE,UAAA,CACA,mCAAA,CACA,gBAAA,CACA,4BAAA,CACA,cAAA,CAGF,YACE,QAAA,CACA,iBAAA,CACA,uBAAA,CACA,cAAA,CAGF,aACE,QAAA,CACA,kBAAA,CACA,qBAAA,CACA,uBAAA,CACA,UAAA,CACA,cAAA,CACA,+BAAA,CACA,gBAAA,CACA,WAAA,CACA,WAAA,CAGF,oBACE,qBAAA,CACA,UAAA,CACA,uBAAA,CAGF,gBACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,gBAAA,CACA,iBAAA,CAGF,eACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,gBAAA,CACA,iBAAA,CAGF,YACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,kBAAA,CACA,gBAAA,CAGF,WACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,kBAAA,CACA,gBAAA,CAGF,WACE,gBAAA,CACA,iBAAA,CAGF,WACE,kBAAA,CACA,gBAAA,CAGF,SACE,cAAA,CACA,mCAAA,CACA,UAAA,CACA,4BAAA,CACA,iBAAA",sourcesContent:["html {\n  height: 100vh;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  background-color: rgb(163, 47, 47);\n}\n\n#title {\n  text-align: center;\n  grid-row: 1;\n  grid-column: 1/3;\n  font-size: 60px;\n  font-family: 'Ubuntu', sans-serif;\n  color: white;\n  text-shadow: 5px 2px 0px black;\n  margin-top: 0;\n  padding-top: 50px;\n}\n\n#timer {\n  text-align: center;\n  font-size: 80px;\n  font-family: 'Josefin Sans', sans-serif;\n  text-shadow: 5px 2px 0px black;\n  color: white;\n}\n\n#form {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 20px 50px 100px;\n  max-width: 800px;\n  margin: 0 auto;\n  align-items: center;\n}\n\n#form > label {\n  color: white;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: bold;\n  text-shadow: 2px 2px 1px black;\n  font-size: 20px;\n}\n\n#form > input {\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 3px 3px black;\n  font-size: 15px;\n}\n\n#form > button {\n  border: 0;\n  border-radius: 20px;\n  background-color: black;\n  box-shadow: 2px 2px white;\n  color: white;\n  font-size: 20px;\n  font-family: 'Nunito', sans-serif;\n  font-weight: bold;\n  width: 100px;\n  height: 30px;\n}\n\n#form > button:active {\n  background-color: white;\n  color: black;\n  box-shadow: 2px 2px black;\n}\n\n#label-pomodoro {\n  grid-row: 1;\n  grid-column: 1;\n  text-align: center;\n  justify-self: end;\n  margin-right: 35px;\n}\n\n#time-pomodoro {\n  grid-row: 2;\n  grid-column: 1;\n  text-align: center;\n  justify-self: end;\n  margin-right: 10px;\n}\n\n#label-rest {\n  grid-row: 1;\n  grid-column: 2;\n  text-align: center;\n  justify-self: start;\n  margin-left: 70px;\n}\n\n#time-rest {\n  grid-row: 2;\n  grid-column: 2;\n  text-align: center;\n  justify-self: start;\n  margin-left: 10px;\n}\n\n#btn-start {\n  justify-self: end;\n  margin-right: 10px;\n}\n\n#btn-reset {\n  justify-self: start;\n  margin-left: 10px;\n}\n\n#counter {\n  font-size: 25px;\n  font-family: 'Montserrat', sans-serif;\n  color: white;\n  text-shadow: 2px 2px 0px black;\n  text-align: center;\n}\n"],sourceRoot:""}]);const a=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var A=this[a][0];null!=A&&(s[A]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);o&&s[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},537:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */"),s=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(s).concat([i]).join("\n")}return[e].join("\n")}},404:(t,e,n)=>{n.r(e),n.d(e,{default:()=>h});var o=n(379),r=n.n(o),i=n(795),s=n.n(i),a=n(569),A=n.n(a),c=n(565),u=n.n(c),d=n(216),p=n.n(d),l=n(589),f=n.n(l),m=n(192),C={};C.styleTagTransform=f(),C.setAttributes=u(),C.insert=A().bind(null,"head"),C.domAPI=s(),C.insertStyleElement=p(),r()(m.Z,C);const h=m.Z&&m.Z.locals?m.Z.locals:void 0},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},s=[],a=0;a<t.length;a++){var A=t[a],c=o.base?A[0]+o.base:A[0],u=i[c]||0,d="".concat(c," ").concat(u);i[c]=u+1;var p=n(d),l={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(l);else{var f=r(l,o);o.byIndex=a,e.splice(a,0,{identifier:d,updater:f,references:1})}s.push(d)}return s}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var a=n(i[s]);e[a].references--}for(var A=o(t,r),c=0;c<i.length;c++){var u=n(i[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=A}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},322:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});const o=class{constructor({interval:t=1e3,stopwatch:e=!1}={}){var n;this._duration=0,this._endTime=0,this._pauseTime=0,this._status="stopped",this._emitter={all:n=n||new Map,on:function(t,e){var o=n.get(t);o&&o.push(e)||n.set(t,[e])},off:function(t,e){var o=n.get(t);o&&o.splice(o.indexOf(e)>>>0,1)},emit:function(t,e){(n.get(t)||[]).slice().map((function(t){t(e)})),(n.get("*")||[]).slice().map((function(n){n(t,e)}))}},this.tick=()=>{"paused"!==this.status&&(Date.now()>=this._endTime?(this.stop(),this._emitter.emit("tick",this._stopwatch?this._duration:0),this._emitter.emit("done")):this._emitter.emit("tick",this.time))},this._interval=t,this._stopwatch=e}start(t,e){if("stopped"===this.status){if(null==t)throw new TypeError("Must provide duration parameter");this._duration=t,this._endTime=Date.now()+t,this._changeStatus("running"),this._emitter.emit("tick",this._stopwatch?0:this._duration),this._timeoutID=setInterval(this.tick,e||this._interval)}}stop(){this._timeoutID&&clearInterval(this._timeoutID),this._changeStatus("stopped")}pause(){"running"===this.status&&(this._pauseTime=Date.now(),this._changeStatus("paused"))}resume(){"paused"===this.status&&(this._endTime+=Date.now()-this._pauseTime,this._pauseTime=0,this._changeStatus("running"))}_changeStatus(t){this._status=t,this._emitter.emit("statusChanged",this.status)}get time(){if("stopped"===this.status)return 0;const t="paused"===this.status?this._pauseTime:Date.now(),e=this._endTime-t;return this._stopwatch?this._duration-e:e}get duration(){return this._duration}get status(){return this._status}on(t,e){this._emitter.on(t,e)}off(t,e){this._emitter.off(t,e)}}},29:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.changeTimerColor=e.updatePomodoroCounter=e.updateStartButton=e.updateTimer=void 0;const o=n(56),r=document.querySelector("#timer"),i=document.querySelector("#btn-start"),s=document.querySelector("#counter");e.updateTimer=function(t){let e=(0,o.millisecondsToMinutesAndSeconds)(t);r.textContent=e},e.updateStartButton=function(t){switch(t){case"running":i.textContent="Pause";break;case"paused":case"stopped":i.textContent="Start"}},e.updatePomodoroCounter=function(t){s.textContent=`You have completed ${t} pomodoro(s)`},e.changeTimerColor=function(t){r.style.color=t}},56:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.millisecondsToMinutesAndSeconds=void 0,e.millisecondsToMinutesAndSeconds=function(t){const e=new Date(t);return`${e.getMinutes()}:${e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds()}`}},607:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=o(n(322));n(404);const i=n(29),s=n(28);var a;!function(t){t[t.POMODORO=0]="POMODORO",t[t.REST=1]="REST"}(a||(a={}));let A=a.POMODORO,c=0;(0,i.updatePomodoroCounter)(c);let u=new Audio(s);const d=document.querySelector("#time-pomodoro"),p=document.querySelector("#time-rest");function l(){return{pomodoro:6e4*parseInt(d.value),rest:6e4*parseInt(p.value)}}const f=document.querySelector("#btn-start"),m=document.querySelector("#btn-reset"),C=new r.default({interval:100});(0,i.updateTimer)(l().pomodoro),d.addEventListener("change",(()=>{(0,i.updateTimer)(l().pomodoro)})),f.addEventListener("click",(()=>{"stopped"===C.status?(C.start(l().pomodoro),(0,i.updateTimer)(l().pomodoro)):"paused"===C.status?C.resume():C.pause(),(0,i.updateStartButton)(C.status)})),m.addEventListener("click",(()=>{C.stop(),(0,i.updateStartButton)(C.status),(0,i.updateTimer)(l().pomodoro),(0,i.changeTimerColor)("white")})),C.on("tick",(t=>{(0,i.updateTimer)(t)})),C.on("done",(()=>{C.stop(),A==a.POMODORO?(A=a.REST,C.start(l().rest),(0,i.updateTimer)(l().rest),(0,i.changeTimerColor)("orange")):(A=a.POMODORO,C.start(l().pomodoro),(0,i.updateTimer)(l().pomodoro),(0,i.updatePomodoroCounter)(++c),(0,i.changeTimerColor)("white")),u.play()}))},28:(t,e,n)=>{t.exports=n.p+"27b3348844183796ddd1.wav"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.p="",n.nc=void 0,n(607)})();
//# sourceMappingURL=bundle.js.map