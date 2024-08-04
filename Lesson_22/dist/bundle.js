(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,".slider {\n    display: flex;\n    justify-content: center;\n}\n\n.previous-slider {\n  margin: auto 0;\n}\n\n.next-slider {\n    margin: auto 0;\n\n}\n\n.slider-navigation {\n    display: flex;\n}\n\n.navigation-button {\n  width:20px;\n  height:20px;\n  background-color: rgb(204, 204, 223);\n  margin-right: 15px;\n  border-radius: 50%;\n}\n\n.slider-navigation {\n display: flex;\n justify-content: center;\n\n}\n\n\n.non-navigation {\n    display:none;\n}\n\nbutton {\n    all: unset;\n    display: inline-block;\n    cursor: pointer; \n    padding: 0; \n    margin: 0; \n    border: none; \n    background: none; \n    font: inherit;\n    color: inherit;\n    text-align: center; \n    text-decoration: none; \n}\n\n.active {\n    background-color: blue;\n}",""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),l=t(56),u=t.n(l),d=t(540),p=t.n(d),f=t(113),v=t.n(f),g=t(208),m={};m.styleTagTransform=v(),m.setAttributes=u(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=p(),o()(g.A,m),g.A&&g.A.locals&&g.A.locals;const h=t.p+"images/d854a6e6e8ddced99015.png",y=t.p+"images/70a55e75dcba02f48f3b.png",b=t.p+"images/4c7492a11f119db7097a.png",x=t.p+"images/509b06eedd737f204d70.png",S=t.p+"images/d674105a1fe967ad8df9.png",w=t.p+"images/dd8705f013f1f796bfa0.jpg",E=t.p+"images/ec8580a4113796fad475.jpg";var A=[{url:h,alt:"slider 1"},{url:y,alt:"slider 2"},{url:b,alt:"slider 3"},{url:x,alt:"slider 4"},{url:S,alt:"slider 5"}],T=0,L=document.querySelector(".sliderBox"),j=document.createElement("img");j.src=A[T].url,j.alt=A[T].alt,j.classList.add("slider-image"),L.appendChild(j);var C=document.querySelector(".previous-slider img");C.src=w,C.alt="Previous Slide";var k=document.querySelector(".next-slider img");k.src=E,k.alt="Next Slide";for(var q=document.querySelector(".previous-slider"),M=document.querySelector(".next-slider"),I=document.querySelector(".slider-navigation"),N=function(e){var n=document.createElement("button");n.classList.add("navigation-button"),I.appendChild(n),n.addEventListener("click",(function(){T=e,O()}))},P=0;P<A.length;P++)N(P);var O=function(){j.src=A[T].url,j.alt=A[T].alt,q.classList.toggle("non-navigation",0===T),M.classList.toggle("non-navigation",T===A.length-1),document.querySelectorAll(".navigation-button").forEach((function(e,n){e.classList.toggle("active",n===T)}))};q.addEventListener("click",(function(){T>0&&(T--,O())})),M.addEventListener("click",(function(){T<A.length-1&&(T++,O())})),O()})();