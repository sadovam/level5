!function n(o,u,i){function f(r,e){if(!u[r]){if(!o[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(l)return l(r,!0);throw(t=new Error("Cannot find module '"+r+"'")).code="MODULE_NOT_FOUND",t}t=u[r]={exports:{}},o[r][0].call(t.exports,function(e){return f(o[r][1][e]||e)},t,t.exports,n,o,u,i)}return u[r].exports}for(var l="function"==typeof require&&require,e=0;e<i.length;e++)f(i[e]);return f}({1:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sayHello=void 0,t.sayHello=function(e){return"Hello from "+e}},{}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,u=e("./greet");n="greeting",o="Type Script",document.getElementById(n).innerText=u.sayHello(o)},{"./greet":1}]},{},[2]);
//# sourceMappingURL=bundle.js.map
