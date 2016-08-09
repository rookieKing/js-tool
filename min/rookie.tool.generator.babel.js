!function(n){"use strict"
function t(n){return new Promise(function(t,r){function e(n){try{u(i.next(n))}catch(t){r(t)}}function u(n){n.done?t(n.value):n.value.then(e,function(n){try{u(i["throw"](n))}catch(t){r(t)}})}var i=n[APPLY](this,callSlice(arguments,1))
e()})}var r="undefined"!=typeof global?global:window,e=isArray
extend(r,{go:t,eachGen:function(n,r){return t(regeneratorRuntime.mark(function u(){var i,o,c
return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!e(n)){u.next=15
break}i=0,o=n[LEN]
case 2:if(u.t0=o>i,!u.t0){u.next=9
break}return u.next=6,t(r,n[i],i)
case 6:u.t1=u.sent,u.t2=TRUE,u.t0=u.t1!==u.t2
case 9:if(!u.t0){u.next=13
break}case 10:i++,u.next=2
break
case 13:u.next=26
break
case 15:u.t3=regeneratorRuntime.keys(n)
case 16:if((u.t4=u.t3()).done){u.next=26
break}return c=u.t4.value,u.next=20,t(r,n[c],c)
case 20:if(u.t5=u.sent,u.t6=TRUE,u.t5!==u.t6){u.next=24
break}return u.abrupt("return")
case 24:u.next=16
break
case 26:case"end":return u.stop()}},u,this)}))},retry:function(r,e){return t(regeneratorRuntime.mark(function u(){var i,o,c
return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:c=0
case 1:return i=o=n,u.next=4,new Promise(function(n){t(r).then(function(t){o=t,n()},function(t){i=t,n()})})
case 4:return u.next=6,t(e,i,o,++c)
case 6:if(u.t0=u.sent,u.t1=TRUE,u.t0!==u.t1){u.next=1
break}case 9:return u.abrupt("return",o)
case 10:case"end":return u.stop()}},u,this)}))}})}()
