/**
 * Copyright (c) 2016, 王磊 <rookielei@gameil.com>.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * https://raw.githubusercontent.com/rookieking/js-tool/master/LICENSE file.
 */
!function(n){"use strict"
function t(t){return function(){nextTick(t[f][c](t,h([n],[l(arguments)])))}}function r(e){function f(n,t,r,e,u){var i
try{i=t(n)}catch(o){u(o)}e(i)}function s(n,t,r,e,u){var i
try{i=r(n)}catch(o){u(o===k?n:o)}e(i)}function l(){this[v]=y[w],this[p]=n}if(!m(e))throw TypeError("Promise resolver "+e+" is not a function")
var b=i,x=new l,k={},M=[]
return l[o]["catch"]=function(t){return this.then(n,t)},l[o].then=function(n,t){return n=m(n)?n:function(n){return n},t=m(t)?t:function(n){throw k},new r(function(r,e){var u=x[p]
switch(x[v]){case y[g]:f(u,n,t,r,e)
break
case y[d]:s(u,n,t,r,e)
break
default:M.push([n,t,r,e])}})},nextTick(function(){e(t(function(t){if(b)for(b=u,x[v]=y[g],x[p]=t;M[a];)!function(r){nextTick(function(){f[c](n,h([t],r))})}(M.shift())}),t(function(t){if(b){if(b=u,x[v]=y[d],x[p]=t,!M[a])throw"(in promise) "+t
for(;M[a];)!function(r){nextTick(function(){s[c](n,h([t],r))})}(M.shift())}}))}),x}var e="undefined"!=typeof global?global:window,u=!1,i=!0,o="prototype",c="apply",f="bind",a="length",s=[],h=uncurryApply(s.concat),l=uncurryCall(s.slice),m=isFunction,w="pending",g="resolved",d="rejected",v="[[PromiseStatus]]",p="[[PromiseValue]]",y={}
y[w]=w,y[g]=g,y[d]=d,extend(r,{all:function(n){return new r(function(t,r){var e=[]
eachAsync(n,function(n,t,r){t.then(function(t){e[r]=t,n()},function(t){n(t)})},function(n){n?r(n):t(e)})})},race:function(n){return new r(function(t,r){eachAsync(n,function(n,e,u){e.then(function(r){n(i),t(r)},function(t){n(i),r(t)})})})},resolve:function(n){return new r(function(t,r){t(n)})},reject:function(n){return new r(function(t,r){r(n)})}}),e.Promise__=r,e.Promise||(e.Promise=r)}()
