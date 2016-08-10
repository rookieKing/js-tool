/**
 * Copyright (c) 2016, 王磊 <rookielei@gameil.com>.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * https://raw.githubusercontent.com/rookieking/js-tool/master/LICENSE file.
 */
!function(n){"use strict"
function t(n){setTimeout(n,0)}function r(n){return _(n)||q(n)}function e(n){return function(){return O[A][P](n,arguments)}}function u(n){return function(){return O[P][P](n,arguments)}}function i(){var t
return o(arguments,function(r){return r!==n?(t=r,M):n}),t}function o(n,t){if("[object Array]"===G(n))for(var r=0,e=n[F];e>r&&t(n[r],r)!==M;r++);else for(var u in n)if(t(n[u],u)===M)return}function c(n,t){var r=x
return o(n,function(n){return r=t(n)}),r}function f(n){return o(N(arguments,1),function(t){for(var r in t)n[r]=t[r]}),n}function a(n,t){var r=_(n)?[]:{}
return o(n,function(e,u){r[u]=t(e,u,n)}),r}function s(n){var t
if(_(n))t=[]
else{if(!q(n))return n
t={}}return a(n,function(n){return r(n)?s(n):n})}function h(n){return a(Array(n),function(n,t){return t})}function m(t){var r=M
return function(){r&&(r=n,t[P](n,N(arguments)))}}function l(n,t,r){for(var e="",t=i(t,2),r=i(r,"0"),u=t;u--;e+=r);return(e+n).slice(-t)}function g(n){var t=this,r=arguments
return new Promise(function(e,u){function i(n){try{o(c.next(n))}catch(t){u(t)}}function o(n){n.done?e(n.value):n.value.then(i,function(n){try{o(c["throw"](n))}catch(t){u(t)}})}var c=n[P](t,N(r,1))
i()})}function w(n,t,r){return B(t)&&(r=t,t=3),(""+n).replace(/([^.]+)/,function(n,e){return e.reverse().replace(RegExp(d("\\d{{0}}(?=\\d)",t||3),"g"),function(n){return n+(r||",")}).reverse()})}var d,v,p,y="dead loop",b="undefined"!=typeof global?global:window,x=!1,M=!0,k=null,j="prototype",A="call",P="apply",S="bind",F="length",H=[],R=String[j],T=RegExp[j],O=Function,D=u(H.push),E=u(H.concat),N=e(H.slice),C=e(T.exec),G=e({}.toString)
o("Null,Undefined,Boolean,RegExp,Function,Array,Object,Number,String,Date".split(","),function(n){b["is"+n]=function(t){return G(t)==="[object "+n+"]"}})
var $=isFunction,_=isArray,q=isObject,B=isString
O[j][S]||(O[j][S]=function(n){var t=this,r=N(arguments,1)
return function(){return t[P](n,E(r,N(arguments)))}}),function(){function r(r){return function(){t(r[S][P](r,E([n],[N(arguments)])))}}function e(f){function h(n,t,r,e,u){var i
try{i=t(n)}catch(o){u(o)}e(i)}function m(n,t,r,e,u){var i
try{i=r(n)}catch(o){u(o===d?n:o)}e(i)}function l(){this[c]=s[u],this[a]=n}if(!$(f))throw TypeError("Promise resolver "+f+" is not a function")
var g=M,w=new l,d={},v=[]
return l[j]["catch"]=function(t){return this.then(n,t)},l[j].then=function(n,t){return n=$(n)?n:function(n){return n},t=$(t)?t:function(){throw d},new e(function(r,e){var u=w[a]
switch(w[c]){case s[i]:h(u,n,t,r,e)
break
case s[o]:m(u,n,t,r,e)
break
default:v.push([n,t,r,e])}})},t(function(){f(r(function(r){if(g)for(g=x,w[c]=s[i],w[a]=r;v[F];)!function(e){t(function(){h[P](n,E([r],e))})}(v.shift())}),r(function(r){if(g){if(g=x,w[c]=s[o],w[a]=r,!v[F])throw"(in promise) "+r
for(;v[F];)!function(e){t(function(){m[P](n,E([r],e))})}(v.shift())}}))}),w}var u="pending",i="resolved",o="rejected",c="[[PromiseStatus]]",a="[[PromiseValue]]",s={}
s[u]=u,s[i]=i,s[o]=o,f(e,{all:function(n){return new e(function(t,r){var e=[]
eachAsync(n,function(n,t,r){t.then(function(t){e[r]=t,n()},function(t){n(t)})},function(n){n?r(n):t(e)})})},race:function(n){return new e(function(t,r){eachAsync(n,function(n,e){e.then(function(r){n(M),t(r)},function(t){n(M),r(t)})})})},resolve:function(n){return new e(function(t){t(n)})},reject:function(n){return new e(function(t,r){r(n)})}}),b.Promise__=e,b.Promise||(b.Promise=e)}(),T.run=function(n,t){if(!this.global)throw y
for(var r,e=0;(r=C(this,n))&&t[P](this,r.concat(++e))!==M;);},T.exec=function(n,t){if(!$(t))return C(this,n)
if(!this.global)throw y
for(var r,e=0;(r=C(this,n))&&t[A](this,r,++e)!==M;);},Date[j].format=function(n){var t=this,r=t.getHours(),e=t.getMilliseconds(),u={MM:t.getMonth()+1,dd:t.getDate(),HH:r,hh:r%12||12,mm:t.getMinutes(),ss:t.getSeconds()}
return d((n||"yyyy-MM-dd").replace(/(yyyy|MM|M|dd|d|HH|H|hh|h|tt|mm|m|ss|s|fff|f)/g,"{$1}"),f({yyyy:t.getFullYear(),M:u.MM,H:r,d:u.dd,h:u.hh,m:u.mm,s:u.ss,f:e,fff:l(e,3),tt:12>r?"AM":"PM"},a(u,function(n){return l(n)})))},R.format=function(n){return this.replace(r(n)?/{(.+?)}/g:(n=N(arguments),/{(\d+)}/g),function(t,r){return i(n[r],t)})},R.reverse=function(){return this.split("").reverse().join("")},R.formatMoney=Number[j].formatMoney=function(){return w[P](n,E([this],arguments))},d=v=p=function(n){return n.format[P](n,N(arguments,1))},f(b,{eachAsync:function(r,e,u,i){function o(u){s++
var a=[m(function(n){l++,c=n||c,c?f=[]:f[F]&&o(f.pop()),!f[F]&&s==l&&i&&i(c)}),r[u],u,r]
t(function(){v?g[P](n,E([e],a))["catch"](i):e[P](n,a)})}$(u)&&(i=u,u=r[F]),u===n&&(u=r[F])
for(var c,f=h(r[F]).reverse(),a=0,s=0,l=0,w=e.constructor,d=w.name||w.displayName,v="GeneratorFunction"==d;u>a&&a<r[F];a++)o(f.pop())},uniq:function(n){var t=[]
return o(n,function(n){c(t,function(t){return t===n})||t.push(n)}),t},range:function(n,t){return n>t&&(n^=t,t^=n,n^=t),Math.floor(Math.random()*(t-n+1))+n},safeHTML:function(n){return n.replace(/[&<>"`']/g,function(n){return"&#x"+n.charCodeAt(0).toString(16)+";"})},processor:function(t,r,e){$(r)||(e=r)
var u,i=function(){clearTimeout(u)
var i=arguments
u=setTimeout(function(){$(r)?r(t[P](n,i)):t[P](n,i)},e||400)}
return function(){i[P](n,arguments)}},getObj:function(n,t){var e=n
return r(n)&&/[^.]+/g.run(t,function(n){return r(e)&&n in e?(e=e[n],x):(e=k,M)}),e===n?k:e},setObj:function(n,t,e){var u
if(r(n))return/([^.]+)(?=\.([^.]+)|$)/g.run(t,function(t,i,o){o?(r(n[i])||(n[i]={}),n=n[i]):u=n[i]=e}),u
throw"is not Object: "+n},curry:function(t){var r=[],e=function u(){return arguments[F]?(D(r,arguments),u):t[P](n,r)}
return e.clear=function(){r=[]},e},defaults:function(n){return o(N(arguments,1),function(t){o(t,function(t,r){n[r]=i(n[r],t)})}),n},keys:function(n){var t=[]
return o(n,function(n,r){t.push(r)}),t},delay:function(n){return new Promise(function(t){setTimeout(t,n)})},promiseify:function(n,t){return function(){var r=this,e=N(arguments)
return new Promise(function(u,i){e.push(function(n,r){n?i(n):u(t?N(arguments,1):r)}),n[P](r,e)})}},unpromiseify:function(t){return function(){var r=this,e=N(arguments),u=e.pop()
t[P](r,e).then(function(t){u(n,t)},u)}},eachGen:function(n,t){return g(regeneratorRuntime.mark(function r(){var e,u,i
return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!_(n)){r.next=15
break}e=0,u=n[F]
case 2:if(r.t0=u>e,!r.t0){r.next=9
break}return r.next=6,g(t,n[e],e)
case 6:r.t1=r.sent,r.t2=M,r.t0=r.t1!==r.t2
case 9:if(!r.t0){r.next=13
break}case 10:e++,r.next=2
break
case 13:r.next=26
break
case 15:r.t3=regeneratorRuntime.keys(n)
case 16:if((r.t4=r.t3()).done){r.next=26
break}return i=r.t4.value,r.next=20,g(t,n[i],i)
case 20:if(r.t5=r.sent,r.t6=M,r.t5!==r.t6){r.next=24
break}return r.abrupt("return")
case 24:r.next=16
break
case 26:case"end":return r.stop()}},r,this)}))},retry:function(t,r){return g(regeneratorRuntime.mark(function e(){var u,i,o
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=0
case 1:return u=i=n,e.next=4,new Promise(function(n){g(t).then(function(t){i=t,n()},function(t){u=t,n()})})
case 4:return e.next=6,g(r,u,i,++o)
case 6:if(e.t0=e.sent,e.t1=M,e.t0!==e.t1){e.next=1
break}case 9:return e.abrupt("return",i)
case 10:case"end":return e.stop()}},e,this)}))},nextTick:t,go:g,createArr:h,onceFn:m,callSlice:N,likeObj:r,getFirstDefined:i,each:o,any:c,extend:f,map:a,clone:s,uncurryCall:e,uncurryApply:u,format:d,formatString:v,formatDate:p,formatMoney:w,strFill:l})}()
