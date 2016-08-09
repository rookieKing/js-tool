/**
 * Copyright (c) 2016, 王磊 <rookielei@gameil.com>.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * https://raw.githubusercontent.com/rookieking/js-tool/master/LICENSE file.
 */
!function(n){"use strict"
function t(n){setTimeout(n,0)}function r(n){return q(n)||B(n)}function e(n){return function(){return N[F][H](n,arguments)}}function u(n){return function(){return N[H][H](n,arguments)}}function i(){var t
return o(arguments,function(r,e){return r!==n?(t=r,j):n}),t}function o(n,t){if("[object Array]"===C(n))for(var r=0,e=n[w];e>r&&t(n[r],r)!==j;r++);else for(var u in n)if(t(n[u],u)===j)return}function c(n,t){var r=b
return o(n,function(n){return r=t(n)}),r}function f(n){return o(P(arguments,1),function(t){for(var r in t)n[r]=t[r]}),n}function a(n,t){var r=q(n)?[]:{}
return o(n,function(e,u){r[u]=t(e,u,n)}),r}function s(n){var t
if(q(n))t=[]
else{if(!B(n))return n
t={}}return a(n,function(n,t){return r(n)?s(n):n})}function g(n){return a(Array(n),function(n,t){return t})}function m(t){var r=j
return function(){r&&(r=n,t[H](n,P(arguments)))}}function l(n,t,r){for(var e="",t=i(t,2),r=i(r,"0"),u=t;u--;e+=r);return(e+n).slice(-t)}function h(n,t,r){return G(t)&&(r=t,t=3),(""+n).replace(/([^.]+)/,function(n,e){return e.reverse().replace(RegExp(p("\\d{{0}}(?=\\d)",t||3),"g"),function(n){return n+(r||",")}).reverse()})}var p,y,v,d="dead loop",M="undefined"!=typeof global?global:window,b=!1,j=!0,A=null,x="prototype",F="call",H="apply",S="bind",w="length",D=[],O=String[x],T=RegExp[x],N=Function,k=u(D.push),E=u(D.concat),P=e(D.slice),R=e(T.exec),C=e({}.toString)
o("Null,Undefined,Boolean,RegExp,Function,Array,Object,Number,String,Date".split(","),function(n){M["is"+n]=function(t){return C(t)==="[object "+n+"]"}})
var $=isFunction,q=isArray,B=isObject,G=isString
isNumber,isDate
N[x][S]||(N[x][S]=function(n){var t=this,r=P(arguments,1)
return function(){return t[H](n,E(r,P(arguments)))}}),T.run=function(n,t){if(!this.global)throw d
for(var r,e=0;(r=R(this,n))&&t[H](this,r.concat(++e))!==j;);},T.exec=function(n,t){if(!$(t))return R(this,n)
if(!this.global)throw d
for(var r,e=0;(r=R(this,n))&&t[F](this,r,++e)!==j;);},Date[x].format=function(n){var t=this,r=t.getHours(),e=t.getMilliseconds(),u={MM:t.getMonth()+1,dd:t.getDate(),HH:r,hh:r%12||12,mm:t.getMinutes(),ss:t.getSeconds()}
return p((n||"yyyy-MM-dd").replace(/(yyyy|MM|M|dd|d|HH|H|hh|h|tt|mm|m|ss|s|fff|f)/g,"{$1}"),f({yyyy:t.getFullYear(),M:u.MM,H:r,d:u.dd,h:u.hh,m:u.mm,s:u.ss,f:e,fff:l(e,3),tt:12>r?"AM":"PM"},a(u,function(n){return l(n)})))},O.format=function(n){return this.replace(r(n)?/{(.+?)}/g:(n=P(arguments),/{(\d+)}/g),function(t,r){return i(n[r],t)})},O.reverse=function(){return this.split("").reverse().join("")},O.formatMoney=Number[x].formatMoney=function(){return h[H](n,E([this],arguments))},p=y=v=function(n){return n.format[H](n,P(arguments,1))},f(M,{eachAsync:function(r,e,u,i){function o(u){s++
var a=[m(function(n){l++,c=n||c,c?f=[]:f[w]&&o(f.pop()),!f[w]&&s==l&&i&&i(c)}),r[u],u,r]
t(function(){y?go[H](n,E([e],a))["catch"](i):e[H](n,a)})}$(u)&&(i=u,u=r[w]),u===n&&(u=r[w])
for(var c,f=g(r[w]).reverse(),a=0,s=0,l=0,h=e.constructor,p=h.name||h.displayName,y="GeneratorFunction"==p;u>a&&a<r[w];a++)o(f.pop())},uniq:function(n){var t=[]
return o(n,function(n){c(t,function(t){return t===n})||t.push(n)}),t},range:function(n,t){return n>t&&(n^=t,t^=n,n^=t),Math.floor(Math.random()*(t-n+1))+n},safeHTML:function(n){return n.replace(/[&<>"`']/g,function(n){return"&#x"+n.charCodeAt(0).toString(16)+";"})},processor:function(t,r,e){$(r)||(e=r)
var u,i=function(){clearTimeout(u)
var i=arguments
u=setTimeout(function(){$(r)?r(t[H](n,i)):t[H](n,i)},e||400)}
return function(){i[H](n,arguments)}},getObj:function(n,t){var e=n
return r(n)&&/[^.]+/g.run(t,function(n){return r(e)&&n in e?(e=e[n],b):(e=A,j)}),e===n?A:e},setObj:function(n,t,e){var u
if(r(n))return/([^.]+)(?=\.([^.]+)|$)/g.run(t,function(t,i,o){o?(r(n[i])||(n[i]={}),n=n[i]):u=n[i]=e}),u
throw"is not Object: "+n},curry:function(t){var r=[],e=function(){return arguments[w]?(k(r,arguments),e):t[H](n,r)}
return e.clear=function(){r=[]},e},defaults:function(n){return o(P(arguments,1),function(t){o(t,function(t,r){n[r]=i(n[r],t)})}),n},keys:function(n){var t=[]
return o(n,function(n,r){t.push(r)}),t},delay:function(n){return new Promise(function(t){setTimeout(t,n)})},promiseify:function(n,t){return function(){var r=this,e=P(arguments)
return new Promise(function(u,i){e.push(function(n,r){n?i(n):u(t?P(arguments,1):r)}),n[H](r,e)})}},unpromiseify:function(t){return function(){var r=this,e=P(arguments),u=e.pop()
t[H](n,e).then(function(n){u(r,n)},u)}},nextTick:t,createArr:g,onceFn:m,callSlice:P,likeObj:r,getFirstDefined:i,each:o,any:c,extend:f,map:a,clone:s,uncurryCall:e,uncurryApply:u,format:p,formatString:y,formatDate:v,formatMoney:h,strFill:l})}()
