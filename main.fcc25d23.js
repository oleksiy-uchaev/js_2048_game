parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){return o(n)||e(n)||r(n)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(n,t){if(n){if("string"==typeof n)return c(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(n,t):void 0}}function e(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function o(n){if(Array.isArray(n))return c(n)}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var i,u=n(document.querySelectorAll("tr td")),a=document.querySelector(".game-score"),f=document.querySelector(".start"),l=function(n){return Math.floor(Math.random()*n)},s=function(n){return n.every(function(n){return!0===n})},d=function(n){return n[0].map(function(t,r){return n.map(function(n){return n[r]})})},m=function(n,t){return v=[n,t]},h=Array(4).fill(Array(4).fill(0)),y=h.map(function(n){return n.slice()}),v=[!1,!1],g=!1,p=[],A=0,w={ArrowUp:function(){return m(!1,!0)},ArrowDown:function(){return m(!0,!0)},ArrowLeft:function(){return m(!1,!1)},ArrowRight:function(){return m(!0,!1)}},L=new Promise(function(n){document.addEventListener("keydown",function(){return g&&n("message-win")})});function b(t,r){for(var e,o=t.filter(function(n){return n}),c=[];o.length;)o[0]===o[1]?(e=o.splice(0,2).reduce(function(n,t){return n+t}),!g&&2048===e&&(g=!0),A+=e,c.push(e)):c.push(o.splice(0,1));var i=[].concat(n(c.flat()),n(Array(t.length-c.length).fill(0)));return r.push(i.map(function(n,r){return n===t[r]}).every(function(n){return n})),i}function S(){var n=v[1]?d(y):y,t=v[0]?n.map(function(n){return b(n.reverse(),p).reverse()}):n.map(function(n){return b(n,p)});y=v[1]?d(t):t}function M(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.flat()).map(function(n,t){return n?0:t}).filter(function(n){return n});if(n.length){var t=n[l(n.length)];y[Math.floor(t/4)][t%4]=l(10)>9?4:2,i=t}}function E(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.flat();u.forEach(function(t,r){n[r]&&(t.classList.add("field-cell--".concat(n[r])),t.innerHTML="".concat(n[r]),i===r&&t.classList.add("field-cell--new"))})}function k(){u.map(function(n){n.className="field-cell",n.innerHTML=""})}function q(n){document.querySelector(".".concat(n)).classList.toggle("hidden")}function T(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];a.innerHTML=A,p=[],k(),M(),n&&M(),E(),j()}function j(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;if(16===n.flat().filter(function(n){return n}).length){var t=[],r=[];n.forEach(function(n){return b(n,t)}),d(n).forEach(function(n){return b(n,r)}),s(t)&&s(r)&&q("message-lose")}}document.addEventListener("keydown",function(n){w["".concat(n.key)]&&(w["".concat(n.key)](),S(),s(p)||T())}),f.addEventListener("click",function(n){n.target.classList.contains("start")&&(f.className="button restart",f.innerHTML="Restart",q("message-start")),document.querySelector(".message-lose").classList.add("hidden"),y=h.map(function(n){return n.slice()}),A=0,T(!0)}),L.then(q);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.fcc25d23.js.map