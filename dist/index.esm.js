import t from"lodash.difference";import n from"lodash.intersection";import r from"lodash.isplainobject";import e from"lodash.mergewith";function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function i(t,n,r){return(i=c()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var u=new(Function.bind.apply(t,e));return r&&o(u,r.prototype),u}).apply(null,arguments)}var f=Symbol(),a=new WeakMap;function l(o,c,l){if(void 0===c&&(c=f),c===f)return Object.keys(o);var s,h=a.get(o)||a.set(o,(s=o,Object.values(s).flatMap(function(t){return function(t){return function t(n,e){var u=function(t,n){if(null==t)return{};var r,e,u={},o=Object.keys(t);for(e=0;e<o.length;e++)n.indexOf(r=o[e])>=0||(u[r]=t[r]);return u}(n,["id"]);return Object.entries(u).flatMap(function(n){var u=n[0],o=n[1];return r(o)?t(o,d(u,e)):d(u+"__."+o,e)})}(t).map(function(n){return function(t,n){return n.reduceRight(function(r,e,u){var o,c;return n.length-1<=u?((o={})[e]=t,o):((c={})[e]=r,c)},{})}([t.id],n.split("__."))})}(t)}).reduce(function(t,n){return e(t,n,function(t,n){if(Array.isArray(t))return t.concat(n)})},{}))).get(o),O=(Array.isArray(c)?c:[c]).map(function(t){return function(t,e){return n.apply(void 0,function t(n,e){return Object.keys(n).flatMap(function(u){var o;return r(n[u])?t(n[u],d(u,e)):((o={})[d(u,e)]=n[u],o)})}(e).map(function(n){return function t(n,r,e){if(!r.length)return p(e)?y(n,v(e)).map(function(t){return n[t]}).flat():n[""+e];var o=r[0],c=r.slice(1),i=p(o)?y(n,v(o)).reduce(function(t,r){return u({},t,n[r]||{})},{}):n[o];return i?t(i,c,e):[]}(t,Object.keys(n)[0].split("__."),Object.values(n)[0])}))}(h,t)});switch(l.conditions){case"all":return n.apply(void 0,O);case"any":return[].concat(i(Set,O));case"diff":return O.length>=2?t.apply(void 0,[O[0]].concat(O.slice(1))):[];case"none":return t.apply(void 0,[Object.keys(o)].concat(O));default:throw Error("Invalid Query Conditon: "+l.conditions)}}function s(t){return{conditions:(null==t?void 0:t.conditions)||"all"}}function p(t){try{return"string"==typeof t&&!!v(t)}catch(t){return!1}}function d(t,n){return void 0===n&&(n=f),n===f?""+t:n+"__."+t}function y(t,n){return Object.keys(t).filter(function(t){return n.test(t)})}function v(t){var n=t.slice(1,t.lastIndexOf("/")),r=t.slice(t.lastIndexOf("/")+1);return new RegExp(n,r)}export default function(t){return{filter:function(n,r){return l(t,n,s(r)).map(function(n){return t[n]})},search:function(n,r){return l(t,n,s(r))}}}
//# sourceMappingURL=index.esm.js.map
