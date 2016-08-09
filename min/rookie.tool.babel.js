/**
 * Copyright (c) 2016, 王磊 <rookielei@gameil.com>.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * https://raw.githubusercontent.com/rookieking/js-tool/master/LICENSE file.
 */
!function(n){"use strict"
function t(n){setTimeout(n,0)}function r(n){return q(n)||B(n)}function e(n){return function(){return P[S][F](n,arguments)}}function u(n){return function(){return P[F][F](n,arguments)}}function i(){var t
return o(arguments,function(r){return r!==n?(t=r,w):n}),t}function o(n,t){if("[object Array]"===$(n))for(var r=0,e=n[k];e>r&&t(n[r],r)!==w;r++);else for(var u in n)if(t(n[u],u)===w)return}function c(n,t){var r=x
return o(n,function(n){return r=t(n)}),r}function f(n){return o(E(arguments,1),function(t){for(var r in t)n[r]=t[r]}),n}function a(n,t){var r=q(n)?[]:{}
return o(n,function(e,u){r[u]=t(e,u,n)}),r}function s(n){var t
if(q(n))t=[]
else{if(!B(n))return n
t={}}return a(n,function(n){return r(n)?s(n):n})}function m(n){return a(Array(n),function(n,t){return t})}function g(t){var r=w
return function(){r&&(r=n,t[F](n,E(arguments)))}}function l(n,t,r){for(var e="",t=i(t,2),r=i(r,"0"),u=t;u--;e+=r);return(e+n).slice(-t)}function h(n){var t=this,r=arguments
return new Promise(function(e,u){function i(n){try{o(c.next(n))}catch(t){u(t)}}function o(n){n.done?e(n.value):n.value.then(i,function(n){try{o(c["throw"](n))}catch(t){u(t)}})}var c=n[F](t,E(r,1))
i()})}function v(n,t,r){return L(t)&&(r=t,t=3),(""+n).replace(/([^.]+)/,function(n,e){return e.reverse().replace(RegExp(p("\\d{{0}}(?=\\d)",t||3),"g"),function(n){return n+(r||",")}).reverse()})}var p,y,d,M="dead loop",b="undefined"!=typeof global?global:window,x=!1,w=!0,j=null,A="prototype",S="call",F="apply",H="bind",k="length",O=[],T=String[A],D=RegExp[A],P=Function,N=u(O.push),R=u(O.concat),E=e(O.slice),C=e(D.exec),$=e({}.toString)
o("Null,Undefined,Boolean,RegExp,Function,Array,Object,Number,String,Date".split(","),function(n){b["is"+n]=function(t){return $(t)==="[object "+n+"]"}})
var G=isFunction,q=isArray,B=isObject,L=isString
P[A][H]||(P[A][H]=function(n){var t=this,r=E(arguments,1)
return function(){return t[F](n,R(r,E(arguments)))}}),function(){function r(r){return function(){t(r[H][F](r,R([n],[E(arguments)])))}}function e(f){function m(n,t,r,e,u){var i
try{i=t(n)}catch(o){u(o)}e(i)}function g(n,t,r,e,u){var i
try{i=r(n)}catch(o){u(o===p?n:o)}e(i)}function l(){this[c]=s[u],this[a]=n}var h=w,v=new l,p={},y=[]
return l[A]["catch"]=function(t){return this.then(n,t)},l[A].then=function(n,t){return n=G(n)?n:function(n){return n},t=G(t)?t:function(){throw p},new e(function(r,e){var u=v[a]
switch(v[c]){case s[i]:m(u,n,t,r,e)
break
case s[o]:g(u,n,t,r,e)
break
default:y.push([n,t,r,e])}})},t(function(){f(r(function(r){if(h)for(h=x,v[c]=s[i],v[a]=r;y[k];)!function(e){t(function(){m[F](n,R([r],e))})}(y.shift())}),r(function(r){if(h){if(h=x,v[c]=s[o],v[a]=r,!y[k])throw"(in promise) "+r
for(;y[k];)!function(e){t(function(){g[F](n,R([r],e))})}(y.shift())}}))}),v}var u="pending",i="resolved",o="rejected",c="[[PromiseStatus]]",a="[[PromiseValue]]",s={}
s[u]=u,s[i]=i,s[o]=o,f(e,{all:function(n){return new e(function(t,r){var e=[]
eachAsync(n,function(n,t,r){t.then(function(t){e[r]=t,n()},function(t){n(t)})},function(n){n?r(n):t(e)})})},race:function(n){return new e(function(t,r){eachAsync(n,function(n,e){e.then(function(r){n(w),t(r)},function(t){n(w),r(t)})})})},resolve:function(n){return new e(function(t){t(n)})},reject:function(n){return new e(function(t,r){r(n)})}}),b.Promise__=e,b.Promise||(b.Promise=e)}(),D.run=function(n,t){if(!this.global)throw M
for(var r,e=0;(r=C(this,n))&&t[F](this,r.concat(++e))!==w;);},D.exec=function(n,t){if(!G(t))return C(this,n)
if(!this.global)throw M
for(var r,e=0;(r=C(this,n))&&t[S](this,r,++e)!==w;);},Date[A].format=function(n){var t=this,r=t.getHours(),e=t.getMilliseconds(),u={MM:t.getMonth()+1,dd:t.getDate(),HH:r,hh:r%12||12,mm:t.getMinutes(),ss:t.getSeconds()}
return p((n||"yyyy-MM-dd").replace(/(yyyy|MM|M|dd|d|HH|H|hh|h|tt|mm|m|ss|s|fff|f)/g,"{$1}"),f({yyyy:t.getFullYear(),M:u.MM,H:r,d:u.dd,h:u.hh,m:u.mm,s:u.ss,f:e,fff:l(e,3),tt:12>r?"AM":"PM"},a(u,function(n){return l(n)})))},T.format=function(n){return this.replace(r(n)?/{(.+?)}/g:(n=E(arguments),/{(\d+)}/g),function(t,r){return i(n[r],t)})},T.reverse=function(){return this.split("").reverse().join("")},T.formatMoney=Number[A].formatMoney=function(){return v[F](n,R([this],arguments))},p=y=d=function(n){return n.format[F](n,E(arguments,1))},f(b,{eachAsync:function(r,e,u,i){function o(u){s++
var a=[g(function(n){l++,c=n||c,c?f=[]:f[k]&&o(f.pop()),!f[k]&&s==l&&i&&i(c)}),r[u],u,r]
t(function(){y?h[F](n,R([e],a))["catch"](i):e[F](n,a)})}G(u)&&(i=u,u=r[k]),u===n&&(u=r[k])
for(var c,f=m(r[k]).reverse(),a=0,s=0,l=0,v=e.constructor,p=v.name||v.displayName,y="GeneratorFunction"==p;u>a&&a<r[k];a++)o(f.pop())},uniq:function(n){var t=[]
return o(n,function(n){c(t,function(t){return t===n})||t.push(n)}),t},range:function(n,t){return n>t&&(n^=t,t^=n,n^=t),Math.floor(Math.random()*(t-n+1))+n},safeHTML:function(n){return n.replace(/[&<>"`']/g,function(n){return"&#x"+n.charCodeAt(0).toString(16)+";"})},processor:function(t,r,e){G(r)||(e=r)
var u,i=function(){clearTimeout(u)
var i=arguments
u=setTimeout(function(){G(r)?r(t[F](n,i)):t[F](n,i)},e||400)}
return function(){i[F](n,arguments)}},getObj:function(n,t){var e=n
return r(n)&&/[^.]+/g.run(t,function(n){return r(e)&&n in e?(e=e[n],x):(e=j,w)}),e===n?j:e},setObj:function(n,t,e){var u
if(r(n))return/([^.]+)(?=\.([^.]+)|$)/g.run(t,function(t,i,o){o?(r(n[i])||(n[i]={}),n=n[i]):u=n[i]=e}),u
throw"is not Object: "+n},curry:function(t){var r=[],e=function u(){return arguments[k]?(N(r,arguments),u):t[F](n,r)}
return e.clear=function(){r=[]},e},defaults:function(n){return o(E(arguments,1),function(t){o(t,function(t,r){n[r]=i(n[r],t)})}),n},keys:function(n){var t=[]
return o(n,function(n,r){t.push(r)}),t},delay:function(n){return new Promise(function(t){setTimeout(t,n)})},promiseify:function(n,t){return function(){var r=this,e=E(arguments)
return new Promise(function(u,i){e.push(function(n,r){n?i(n):u(t?E(arguments,1):r)}),n[F](r,e)})}},unpromiseify:function(t){return function(){var r=this,e=E(arguments),u=e.pop()
t[F](r,e).then(function(t){u(n,t)},u)}},eachGen:function(n,t){return h(regeneratorRuntime.mark(function r(){var e,u,i
return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!q(n)){r.next=15
break}e=0,u=n[k]
case 2:if(r.t0=u>e,!r.t0){r.next=9
break}return r.next=6,h(t,n[e],e)
case 6:r.t1=r.sent,r.t2=w,r.t0=r.t1!==r.t2
case 9:if(!r.t0){r.next=13
break}case 10:e++,r.next=2
break
case 13:r.next=26
break
case 15:r.t3=regeneratorRuntime.keys(n)
case 16:if((r.t4=r.t3()).done){r.next=26
break}return i=r.t4.value,r.next=20,h(t,n[i],i)
case 20:if(r.t5=r.sent,r.t6=w,r.t5!==r.t6){r.next=24
break}return r.abrupt("return")
case 24:r.next=16
break
case 26:case"end":return r.stop()}},r,this)}))},retry:function(t,r){return h(regeneratorRuntime.mark(function e(){var u,i,o
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=0
case 1:return u=i=n,e.next=4,new Promise(function(n){h(t).then(function(t){i=t,n()},function(t){u=t,n()})})
case 4:return e.next=6,h(r,u,i,++o)
case 6:if(e.t0=e.sent,e.t1=w,e.t0!==e.t1){e.next=1
break}case 9:return e.abrupt("return",i)
case 10:case"end":return e.stop()}},e,this)}))},nextTick:t,go:h,createArr:m,onceFn:g,callSlice:E,likeObj:r,getFirstDefined:i,each:o,any:c,extend:f,map:a,clone:s,uncurryCall:e,uncurryApply:u,format:p,formatString:y,formatDate:d,formatMoney:v,strFill:l})}()
