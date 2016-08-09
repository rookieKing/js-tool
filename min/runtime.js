/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */
!function(n){"use strict"
function t(n,t,r,u){var i=Object.create((t||e).prototype),o=new h(u||[])
return i._invoke=f(n,r,o),i}function r(n,t,r){try{return{type:"normal",arg:n.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function e(){}function u(){}function i(){}function o(n){["next","throw","return"].forEach(function(t){n[t]=function(n){return this._invoke(t,n)}})}function c(n){this.arg=n}function a(n){function t(e,u,i,o){var a=r(n[e],n,u)
if("throw"!==a.type){var f=a.arg,s=f.value
return s instanceof c?Promise.resolve(s.arg).then(function(n){t("next",n,i,o)},function(n){t("throw",n,i,o)}):Promise.resolve(s).then(function(n){f.value=n,i(f)},o)}o(a.arg)}function e(n,r){function e(){return new Promise(function(e,u){t(n,r,e,u)})}return u=u?u.then(e,e):e()}"object"==typeof process&&process.domain&&(t=process.domain.bind(t))
var u
this._invoke=e}function f(n,t,e){var u=M
return function(i,o){if(u===P)throw Error("Generator is already running")
if(u===j){if("throw"===i)throw o
return p()}for(;;){var c=e.delegate
if(c){if("return"===i||"throw"===i&&c.iterator[i]===g){e.delegate=null
var a=c.iterator["return"]
if(a){var f=r(a,c.iterator,o)
if("throw"===f.type){i="throw",o=f.arg
continue}}if("return"===i)continue}var f=r(c.iterator[i],c.iterator,o)
if("throw"===f.type){e.delegate=null,i="throw",o=f.arg
continue}i="next",o=g
var s=f.arg
if(!s.done)return u=k,s
e[c.resultName]=s.value,e.next=c.nextLoc,e.delegate=null}if("next"===i)e.sent=e._sent=o
else if("throw"===i){if(u===M)throw u=j,o
e.dispatchException(o)&&(i="next",o=g)}else"return"===i&&e.abrupt("return",o)
u=P
var f=r(n,t,e)
if("normal"===f.type){u=e.done?j:k
var s={value:f.arg,done:e.done}
if(f.arg!==A)return s
e.delegate&&"next"===i&&(o=g)}else"throw"===f.type&&(u=j,i="throw",o=f.arg)}}}function s(n){var t={tryLoc:n[0]}
1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function l(n){var t=n.completion||{}
t.type="normal",delete t.arg,n.completion=t}function h(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(s,this),this.reset(!0)}function m(n){if(n){var t=n[d]
if(t)return t.call(n)
if("function"==typeof n.next)return n
if(!isNaN(n.length)){var r=-1,e=function u(){for(;++r<n.length;)if(y.call(n,r))return u.value=n[r],u.done=!1,u
return u.value=g,u.done=!0,u}
return e.next=e}}return{next:p}}function p(){return{value:g,done:!0}}var g,y=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol:{},d=v.iterator||"@@iterator",b=v.toStringTag||"@@toStringTag",w="object"==typeof module,x=n.regeneratorRuntime
if(x)return w&&(module.exports=x),g
x=n.regeneratorRuntime=w?module.exports:{},x.wrap=t
var M="suspendedStart",k="suspendedYield",P="executing",j="completed",A={},S=i.prototype=e.prototype
u.prototype=S.constructor=i,i.constructor=u,i[b]=u.displayName="GeneratorFunction",x.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor
return t?t===u||"GeneratorFunction"===(t.displayName||t.name):!1},x.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,i):(n.__proto__=i,b in n||(n[b]="GeneratorFunction")),n.prototype=Object.create(S),n},x.awrap=function(n){return new c(n)},o(a.prototype),x.async=function(n,r,e,u){var i=new a(t(n,r,e,u))
return x.isGeneratorFunction(r)?i:i.next().then(function(n){return n.done?n.value:i.next()})},o(S),S[d]=function(){return this},S[b]="Generator",S.toString=function(){return"[object Generator]"},x.keys=function(n){var t=[]
for(var r in n)t.push(r)
return t.reverse(),function e(){for(;t.length;){var r=t.pop()
if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},x.values=m,h.prototype={constructor:h,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.tryEntries.forEach(l),!n)for(var t in this)"t"===t.charAt(0)&&y.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=g)},stop:function(){this.done=!0
var n=this.tryEntries[0],t=n.completion
if("throw"===t.type)throw t.arg
return this.rval},dispatchException:function(n){function t(t,e){return i.type="throw",i.arg=n,r.next=t,!!e}if(this.done)throw n
for(var r=this,e=this.tryEntries.length-1;e>=0;--e){var u=this.tryEntries[e],i=u.completion
if("root"===u.tryLoc)return t("end")
if(u.tryLoc<=this.prev){var o=y.call(u,"catchLoc"),c=y.call(u,"finallyLoc")
if(o&&c){if(this.prev<u.catchLoc)return t(u.catchLoc,!0)
if(this.prev<u.finallyLoc)return t(u.finallyLoc)}else if(o){if(this.prev<u.catchLoc)return t(u.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally")
if(this.prev<u.finallyLoc)return t(u.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r]
if(e.tryLoc<=this.prev&&y.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var u=e
break}}u&&("break"===n||"continue"===n)&&u.tryLoc<=t&&t<=u.finallyLoc&&(u=null)
var i=u?u.completion:{}
return i.type=n,i.arg=t,u?this.next=u.finallyLoc:this.complete(i),A},complete:function(n,t){if("throw"===n.type)throw n.arg
"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=n.arg,this.next="end"):"normal"===n.type&&t&&(this.next=t)},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.finallyLoc===n)return this.complete(r.completion,r.afterLoc),l(r),A}},"catch":function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.tryLoc===n){var e=r.completion
if("throw"===e.type){var u=e.arg
l(r)}return u}}throw Error("illegal catch attempt")},delegateYield:function(n,t,r){return this.delegate={iterator:m(n),resultName:t,nextLoc:r},A}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this)
