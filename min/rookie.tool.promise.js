!function(n){"use strict"
function t(t){return function(){nextTick(t[BIND][c](t,s([n],[l(arguments)])))}}function r(e){function f(n,t,r,e,u){var i
try{i=t(n)}catch(o){u(o)}e(i)}function l(n,t,r,e,u){var i
try{i=r(n)}catch(o){u(o===x?n:o)}e(i)}function d(){this[g]=v[h],this[y]=n}var b=i,w=new d,x={},M=[]
return d[o]["catch"]=function(t){return this.then(n,t)},d[o].then=function(n,t){return n=IS_FUNCTION(n)?n:function(n){return n},t=IS_FUNCTION(t)?t:function(n){throw x},new r(function(r,e){var u=w[y]
switch(w[g]){case v[p]:f(u,n,t,r,e)
break
case v[m]:l(u,n,t,r,e)
break
default:M.push([n,t,r,e])}})},nextTick(function(){e(t(function(t){if(b)for(b=u,w[g]=v[p],w[y]=t;M[a];)!function(r){nextTick(function(){f[c](n,s([t],r))})}(M.shift())}),t(function(t){if(b){if(b=u,w[g]=v[m],w[y]=t,!M[a])throw"(in promise) "+t
for(;M[a];)!function(r){nextTick(function(){l[c](n,s([t],r))})}(M.shift())}}))}),w}var e="undefined"!=typeof global?global:window,u=!1,i=!0,o="prototype",c="apply",a="length",f=[],s=uncurryApply(f.concat),l=uncurryCall(f.slice),h="pending",p="resolved",m="rejected",g="[[PromiseStatus]]",y="[[PromiseValue]]",v={}
v[h]=h,v[p]=p,v[m]=m,extend(r,{all:function(n){return new r(function(t,r){var e=[]
eachAsync(n,function(n,t,r){t.then(function(t){e[r]=t,n()},function(t){n(t)})},function(n){n?r(n):t(e)})})},race:function(n){return new r(function(t,r){eachAsync(n,function(n,e,u){e.then(function(r){n(i),t(r)},function(t){n(i),r(t)})})})},resolve:function(n){return new r(function(t,r){t(n)})},reject:function(n){return new r(function(t,r){r(n)})}}),e.Promise__=r,e.Promise||(e.Promise=r)}()
