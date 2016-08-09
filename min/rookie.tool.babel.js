/**
 * Copyright (c) 2016, 王磊 <rookielei@gameil.com>.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * https://raw.githubusercontent.com/rookieking/js-tool/master/LICENSE file.
 */
!function(n){"use strict"
function t(n){setTimeout(n,0)}function r(n){return E(n)||B(n)}function e(n){return function(){return H[A][j](n,arguments)}}function u(n){return function(){return H[j][j](n,arguments)}}function i(){var t
return o(arguments,function(r){return r!==n?(t=r,M):n}),t}function o(n,t){if("[object Array]"===C(n))for(var r=0,e=n[S];e>r&&t(n[r],r)!==M;r++);else for(var u in n)if(t(n[u],u)===M)return}function c(n,t){var r=x
return o(n,function(n){return r=t(n)}),r}function f(n){return o(_(arguments,1),function(t){for(var r in t)n[r]=t[r]}),n}function a(n,t){var r=E(n)?[]:{}
return o(n,function(e,u){r[u]=t(e,u,n)}),r}function s(n){var t
if(E(n))t=[]
else{if(!B(n))return n
t={}}return a(n,function(n){return r(n)?s(n):n})}function h(n){return a(Array(n),function(n,t){return t})}function l(t){var r=M
return function(){r&&(r=n,t[j](n,_(arguments)))}}function m(n,t,r){for(var e="",t=i(t,2),r=i(r,"0"),u=t;u--;e+=r);return(e+n).slice(-t)}function g(n){return new Promise(function(t,r){function e(n){try{u(i.next(n))}catch(t){r(t)}}function u(n){n.done?t(n.value):n.value.then(e,function(n){try{u(i["throw"](n))}catch(t){r(t)}})}var i=n[j](this,_(arguments,1))
e()})}function p(n,t,r){return $(t)&&(r=t,t=3),(""+n).replace(/([^.]+)/,function(n,e){return e.reverse().replace(RegExp(v("\\d{{0}}(?=\\d)",t||3),"g"),function(n){return n+(r||",")}).reverse()})}var v,y,d,w="dead loop",b="undefined"!=typeof global?global:window,x=!1,M=!0,k=null,P="prototype",A="call",j="apply",T="bind",S="length",F=[],N=String[P],O=RegExp[P],H=Function,R=u(F.push),D=u(F.concat),_=e(F.slice),I=e(O.exec),C=e({}.toString)
o("Null,Undefined,Boolean,RegExp,Function,Array,Object,Number,String,Date".split(","),function(n){b["is"+n]=function(t){return C(t)==="[object "+n+"]"}})
var U=isFunction,E=isArray,B=isObject,$=isString
H[P][T]||(H[P][T]=function(n){var t=this,r=_(arguments,1)
return function(){return t[j](n,D(r,_(arguments)))}}),function(){function r(r){return function(){t(r[T][j](r,D([n],[_(arguments)])))}}function e(f){function h(n,t,r,e,u){var i
try{i=t(n)}catch(o){u(o)}e(i)}function l(n,t,r,e,u){var i
try{i=r(n)}catch(o){u(o===v?n:o)}e(i)}function m(){this[c]=s[u],this[a]=n}var g=M,p=new m,v={},y=[]
return m[P]["catch"]=function(t){return this.then(n,t)},m[P].then=function(n,t){return n=U(n)?n:function(n){return n},t=U(t)?t:function(){throw v},new e(function(r,e){var u=p[a]
switch(p[c]){case s[i]:h(u,n,t,r,e)
break
case s[o]:l(u,n,t,r,e)
break
default:y.push([n,t,r,e])}})},t(function(){f(r(function(r){if(g)for(g=x,p[c]=s[i],p[a]=r;y[S];)!function(e){t(function(){h[j](n,D([r],e))})}(y.shift())}),r(function(r){if(g){if(g=x,p[c]=s[o],p[a]=r,!y[S])throw"(in promise) "+r
for(;y[S];)!function(e){t(function(){l[j](n,D([r],e))})}(y.shift())}}))}),p}var u="pending",i="resolved",o="rejected",c="[[PromiseStatus]]",a="[[PromiseValue]]",s={}
s[u]=u,s[i]=i,s[o]=o,f(e,{all:function(n){return new e(function(t,r){var e=[]
eachAsync(n,function(n,t,r){t.then(function(t){e[r]=t,n()},function(t){n(t)})},function(n){n?r(n):t(e)})})},race:function(n){return new e(function(t,r){eachAsync(n,function(n,e){e.then(function(r){n(M),t(r)},function(t){n(M),r(t)})})})},resolve:function(n){return new e(function(t){t(n)})},reject:function(n){return new e(function(t,r){r(n)})}}),b.Promise__=e,b.Promise||(b.Promise=e)}(),O.run=function(n,t){if(!this.global)throw w
for(var r,e=0;(r=I(this,n))&&t[j](this,r.concat(++e))!==M;);},O.exec=function(n,t){if(!U(t))return I(this,n)
if(!this.global)throw w
for(var r,e=0;(r=I(this,n))&&t[A](this,r,++e)!==M;);},Date[P].format=function(n){var t=this,r=t.getHours(),e=t.getMilliseconds(),u={MM:t.getMonth()+1,dd:t.getDate(),HH:r,hh:r%12||12,mm:t.getMinutes(),ss:t.getSeconds()}
return v((n||"yyyy-MM-dd").replace(/(yyyy|MM|M|dd|d|HH|H|hh|h|tt|mm|m|ss|s|fff|f)/g,"{$1}"),f({yyyy:t.getFullYear(),M:u.MM,H:r,d:u.dd,h:u.hh,m:u.mm,s:u.ss,f:e,fff:m(e,3),tt:12>r?"AM":"PM"},a(u,function(n){return m(n)})))},N.format=function(n){return this.replace(r(n)?/{(.+?)}/g:(n=_(arguments),/{(\d+)}/g),function(t,r){return i(n[r],t)})},N.reverse=function(){return this.split("").reverse().join("")},N.formatMoney=Number[P].formatMoney=function(){return p[j](n,D([this],arguments))},v=y=d=function(n){return n.format[j](n,_(arguments,1))},f(b,{eachAsync:function(r,e,u,i){function o(u){s++
var a=[l(function(n){m++,c=n||c,c?f=[]:f[S]&&o(f.pop()),!f[S]&&s==m&&i&&i(c)}),r[u],u,r]
t(function(){y?g[j](n,D([e],a))["catch"](i):e[j](n,a)})}U(u)&&(i=u,u=r[S]),u===n&&(u=r[S])
for(var c,f=h(r[S]).reverse(),a=0,s=0,m=0,p=e.constructor,v=p.name||p.displayName,y="GeneratorFunction"==v;u>a&&a<r[S];a++)o(f.pop())},uniq:function(n){var t=[]
return o(n,function(n){c(t,function(t){return t===n})||t.push(n)}),t},range:function(n,t){return n>t&&(n^=t,t^=n,n^=t),Math.floor(Math.random()*(t-n+1))+n},safeHTML:function(n){return n.replace(/[&<>"`']/g,function(n){return"&#x"+n.charCodeAt(0).toString(16)+";"})},processor:function(t,r,e){U(r)||(e=r)
var u,i=function(){clearTimeout(u)
var i=arguments
u=setTimeout(function(){U(r)?r(t[j](n,i)):t[j](n,i)},e||400)}
return function(){i[j](n,arguments)}},getObj:function(n,t){var e=n
return r(n)&&/[^.]+/g.run(t,function(n){return r(e)&&n in e?(e=e[n],x):(e=k,M)}),e===n?k:e},setObj:function(n,t,e){var u
if(r(n))return/([^.]+)(?=\.([^.]+)|$)/g.run(t,function(t,i,o){o?(r(n[i])||(n[i]={}),n=n[i]):u=n[i]=e}),u
throw"is not Object: "+n},curry:function(t){var r=[],e=function u(){return arguments[S]?(R(r,arguments),u):t[j](n,r)}
return e.clear=function(){r=[]},e},defaults:function(n){return o(_(arguments,1),function(t){o(t,function(t,r){n[r]=i(n[r],t)})}),n},keys:function(n){var t=[]
return o(n,function(n,r){t.push(r)}),t},delay:function(n){return new Promise(function(t){setTimeout(t,n)})},promiseify:function(t,r){return function(){var e=_(arguments)
return new Promise(function(u,i){e.push(function(n,t){n?i(n):u(r?_(arguments,1):t)}),t[j](n,e)})}},unpromiseify:function(t){return function(){var r=_(arguments),e=r.pop()
t[j](n,r).then(function(t){e(n,t)},e)}},eachGen:function(n,t){return g(regeneratorRuntime.mark(function r(){var e,u,i
return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!E(n)){r.next=15
break}e=0,u=n[S]
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
case 10:case"end":return e.stop()}},e,this)}))},nextTick:t,go:g,createArr:h,onceFn:l,callSlice:_,likeObj:r,getFirstDefined:i,each:o,any:c,extend:f,map:a,clone:s,uncurryCall:e,uncurryApply:u,format:v,formatString:y,formatDate:d,formatMoney:p,strFill:m})}()
