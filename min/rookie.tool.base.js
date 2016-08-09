!function(n){"use strict"
function t(n){setTimeout(n,0)}function r(n){return q(n)||B(n)}function e(n){return function(){return N[F][H](n,arguments)}}function u(n){return function(){return N[H][H](n,arguments)}}function o(){var t
return i(arguments,function(r,e){return r!==n?(t=r,j):n}),t}function i(n,t){if("[object Array]"===C(n))for(var r=0,e=n[w];e>r&&t(n[r],r)!==j;r++);else for(var u in n)if(t(n[u],u)===j)return}function c(n,t){var r=b
return i(n,function(n){return r=t(n)}),r}function f(n){return i(P(arguments,1),function(t){for(var r in t)n[r]=t[r]}),n}function a(n,t){var r=q(n)?[]:{}
return i(n,function(e,u){r[u]=t(e,u,n)}),r}function s(n){var t
if(q(n))t=[]
else{if(!B(n))return n
t={}}return a(n,function(n,t){return r(n)?s(n):n})}function g(n){return a(Array(n),function(n,t){return t})}function m(t){var r=j
return function(){r&&(r=n,t[H](n,P(arguments)))}}function l(n,t,r){for(var e="",t=o(t,2),r=o(r,"0"),u=t;u--;e+=r);return(e+n).slice(-t)}function h(n,t,r){return G(t)&&(r=t,t=3),(""+n).replace(/([^.]+)/,function(n,e){return e.reverse().replace(RegExp(p("\\d{{0}}(?=\\d)",t||3),"g"),function(n){return n+(r||",")}).reverse()})}var p,y,v,d="dead loop",M="undefined"!=typeof global?global:window,b=!1,j=!0,A=null,x="prototype",F="call",H="apply",S="bind",w="length",D=[],O=String[x],T=RegExp[x],N=Function,k=u(D.push),E=u(D.concat),P=e(D.slice),R=e(T.exec),C=e({}.toString)
i("Null,Undefined,Boolean,RegExp,Function,Array,Object,Number,String,Date".split(","),function(n){M["is"+n]=function(t){return C(t)==="[object "+n+"]"}})
var $=isFunction,q=isArray,B=isObject,G=isString
isNumber,isDate
N[x][S]||(N[x][S]=function(n){var t=this,r=P(arguments,1)
return function(){return t[H](n,E(r,P(arguments)))}}),T.run=function(n,t){if(!this.global)throw d
for(var r,e=0;(r=R(this,n))&&t[H](this,r.concat(++e))!==j;);},T.exec=function(n,t){if(!$(t))return R(this,n)
if(!this.global)throw d
for(var r,e=0;(r=R(this,n))&&t[F](this,r,++e)!==j;);},Date[x].format=function(n){var t=this,r=t.getHours(),e=t.getMilliseconds(),u={MM:t.getMonth()+1,dd:t.getDate(),HH:r,hh:r%12||12,mm:t.getMinutes(),ss:t.getSeconds()}
return p((n||"yyyy-MM-dd").replace(/(yyyy|MM|M|dd|d|HH|H|hh|h|tt|mm|m|ss|s|fff|f)/g,"{$1}"),f({yyyy:t.getFullYear(),M:u.MM,H:r,d:u.dd,h:u.hh,m:u.mm,s:u.ss,f:e,fff:l(e,3),tt:12>r?"AM":"PM"},a(u,function(n){return l(n)})))},O.format=function(n){return this.replace(r(n)?/{(.+?)}/g:(n=P(arguments),/{(\d+)}/g),function(t,r){return o(n[r],t)})},O.reverse=function(){return this.split("").reverse().join("")},O.formatMoney=Number[x].formatMoney=function(){return h[H](n,E([this],arguments))},p=y=v=function(n){return n.format[H](n,P(arguments,1))},f(M,{eachAsync:function(r,e,u,o){function i(u){s++
var a=[m(function(n){l++,c=n||c,c?f=[]:f[w]&&i(f.pop()),!f[w]&&s==l&&o&&o(c)}),r[u],u,r]
t(function(){y?go[H](n,E([e],a))["catch"](o):e[H](n,a)})}$(u)&&(o=u,u=r[w]),u===n&&(u=r[w])
for(var c,f=g(r[w]).reverse(),a=0,s=0,l=0,h=e.constructor,p=h.name||h.displayName,y="GeneratorFunction"==p;u>a&&a<r[w];a++)i(f.pop())},uniq:function(n){var t=[]
return i(n,function(n){c(t,function(t){return t===n})||t.push(n)}),t},range:function(n,t){return n>t&&(n^=t,t^=n,n^=t),Math.floor(Math.random()*(t-n+1))+n},safeHTML:function(n){return n.replace(/[&<>"`']/g,function(n){return"&#x"+n.charCodeAt(0).toString(16)+";"})},processor:function(t,r,e){$(r)||(e=r)
var u,o=function(){clearTimeout(u)
var o=arguments
u=setTimeout(function(){$(r)?r(t[H](n,o)):t[H](n,o)},e||400)}
return function(){o[H](n,arguments)}},getObj:function(n,t){var e=n
return r(n)&&/[^.]+/g.run(t,function(n){return r(e)&&n in e?(e=e[n],b):(e=A,j)}),e===n?A:e},setObj:function(n,t,e){var u
if(r(n))return/([^.]+)(?=\.([^.]+)|$)/g.run(t,function(t,o,i){i?(r(n[o])||(n[o]={}),n=n[o]):u=n[o]=e}),u
throw"is not Object: "+n},curry:function(t){var r=[],e=function(){return arguments[w]?(k(r,arguments),e):t[H](n,r)}
return e.clear=function(){r=[]},e},defaults:function(n){return i(P(arguments,1),function(t){i(t,function(t,r){n[r]=o(n[r],t)})}),n},keys:function(n){var t=[]
return i(n,function(n,r){t.push(r)}),t},delay:function(n){return new Promise(function(t){setTimeout(t,n)})},promiseify:function(t,r){return function(){var e=P(arguments)
return new Promise(function(u,o){e.push(function(n,t){n?o(n):u(r?P(arguments,1):t)}),t[H](n,e)})}},unpromiseify:function(t){return function(){var r=P(arguments),e=r.pop()
t[H](n,r).then(function(t){e(n,t)},e)}},nextTick:t,createArr:g,onceFn:m,callSlice:P,likeObj:r,getFirstDefined:o,each:i,any:c,extend:f,map:a,clone:s,uncurryCall:e,uncurryApply:u,format:p,formatString:y,formatDate:v,formatMoney:h,strFill:l})}()
