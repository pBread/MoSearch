!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lodash.difference"),require("lodash.intersection"),require("lodash.isplainobject"),require("lodash.mergewith")):"function"==typeof define&&define.amd?define(["exports","lodash.difference","lodash.intersection","lodash.isplainobject","lodash.mergewith"],e):e((t=t||self).entityQuery={},t.difference,t.intersection,t.isObj,t.mergeWith)}(this,function(t,e,n,r,u){function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t,e,n){return(f=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var u=new(Function.bind.apply(t,r));return n&&i(u,n.prototype),u}).apply(null,arguments)}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,u=u&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u;var a=Symbol(),l=new WeakMap;function s(t,i,c){if(void 0===i&&(i=a),i===a)return Object.keys(t);var s,p=l.get(t)||l.set(t,(s=t,Object.values(s).flatMap(function(t){return function(t){return function t(e,n){var u=function(t,e){if(null==t)return{};var n,r,u={},o=Object.keys(t);for(r=0;r<o.length;r++)e.indexOf(n=o[r])>=0||(u[n]=t[n]);return u}(e,["id"]);return Object.entries(u).flatMap(function(e){var u=e[0],o=e[1];return r(o)?t(o,y(u,n)):y(u+"__."+o,n)})}(t).map(function(e){return function(t,e){return e.reduceRight(function(n,r,u){var o,i;return e.length-1<=u?((o={})[r]=t,o):((i={})[r]=n,i)},{})}([t.id],e.split("__."))})}(t)}).reduce(function(t,e){return u(t,e,function(t,e){if(Array.isArray(t))return t.concat(e)})},{}))).get(t),v=(Array.isArray(i)?i:[i]).map(function(t){return function(t,e){return n.apply(void 0,function t(e,n){return Object.keys(e).flatMap(function(u){var o;return r(e[u])?t(e[u],y(u,n)):((o={})[y(u,n)]=e[u],o)})}(e).map(function(e){return function t(e,n,r){if(!n.length)return d(r)?h(e,O(r)).map(function(t){return e[t]}).flat():e[""+r];var u,i=n[0],c=n.slice(1);if(d(i)){var f=h(e,O(i));if(!f.length)return[];u=f.reduce(function(t,n){return o({},t,e[n]||{})},{})}else u=e[i];return u?t(u,c,r):[]}(t,Object.keys(e)[0].split("__."),Object.values(e)[0])}))}(p,t)});switch(c.conditions){case"all":return n.apply(void 0,v);case"any":return[].concat(f(Set,v));case"diff":return v.length>=2?e.apply(void 0,[v[0]].concat(v.slice(1))):[];case"none":return e.apply(void 0,[Object.keys(t)].concat(v));default:return n.apply(void 0,v)}}function p(t){return{conditions:null==t?void 0:t.conditions}}function d(t){try{return"string"==typeof t&&!!O(t)}catch(t){return!1}}function y(t,e){return void 0===e&&(e=a),e===a?""+t:e+"__."+t}function h(t,e){return Object.keys(t).filter(function(t){return e.test(t)})}function O(t){var e=t.slice(1,t.lastIndexOf("/")),n=t.slice(t.lastIndexOf("/")+1);return new RegExp(e,n)}t.EntityQuery=function(t){return{filter:function(e,n){return s(t,e,p(n)).map(function(e){return t[e]})},search:function(e,n){return s(t,e,p(n))}}}});
//# sourceMappingURL=index.umd.js.map
