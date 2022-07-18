(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),a=t.n(o),c=t(645),r=t.n(c),i=t(667),s=t.n(i),d=new URL(t(358),t.b),l=r()(a()),m=s()(d);l.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\nbody {\n    background-color: #d8d8d8;\n\n    background-repeat: no-repeat;\n    font-family: 'Life Savers', cursive;\n    color: #2c4f40;\n    margin: 0;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.header-logo {\n    height: 150px;\n    margin-right: auto;\n}\n\nh1 {\n    font-size: 3.0rem;\n    letter-spacing: 0.1rem;\n}\n\n.header {\n    width: 100%;\n    background-color: #8bb679;\n    display: flex;\n    gap: 50px;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 5px 15px #2c4f40;\n\n}\n\n.nav-items {\n    display: flex;\n    padding: 30px;\n    align-items: center;\n    justify-content: space-around;\n    list-style: none;\n    cursor: pointer;\n    font-size: 1.2rem;\n    color: #13221c;\n    font-weight: 700;\n    letter-spacing: 0.08rem;\n    margin-left: auto;\n    gap: 15px;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    margin: 40px;\n    gap: 30px;\n    width: 80%;\n    align-items: center;\n}\n\n\n\n.home-topDiv,\n.home-bottomDiv {\n    display: flex;\n    width: 100%;\n    align-items: center;\n\n}\n\n.home-image {\n    height: 450px;\n    border-radius: 10px;\n}\n\n\n\n.home-bottomDiv {\n    padding: 30px;\n    border-top: 1px solid #13221c;\n}\n\n.section-home {\n    width: 50%;\n    background-color: #d8d8d8;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 30px;\n    border-radius: 5px;\n\n    opacity: .9;\n\n}\n\n.section-home h2 {\n    font-size: 2.0rem;\n    margin-bottom: 15px;\n    color: #13221c;\n}\n\n.section-home p {\n    font-size: 1.2rem;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: #13221c;\n}\n\n\n\n.menu-div {\n    display: flex;\n    border-radius: 10px;\n    box-shadow: 0px 0px 5px #2c4f40;\n    max-width: 1350px;\n}\n\n.menu-side-image,\n.home-image {\n    opacity: 0.85;\n}\n\n.menu-side-image {\n    max-width: 500px;\n    border-radius: 10px 0 0 10px;\n}\n\n.full-menu {\n\n    display: flex;\n    flex-direction: column;\n    border-radius: 5px;\n    gap: 20px;\n    align-items: center;\n}\n\n.full-menu h2 {\n    text-align: left;\n    font-size: 2rem;\n    font-weight: 700;\n    text-transform: uppercase;\n}\n\n.section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    background-color: #d8d8d8;\n\n    padding: 10px;\n    margin-top: 20px;\n    height: fit-content;\n    border-radius: 5px;\n}\n\n.menu-items {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    margin-top: 20px;\n\n}\n\n.menu-items>li {\n    font-size: 1.5rem;\n    color: #13221c;\n    list-style: none;\n    margin-bottom: 15px;\n    font-weight: 700;\n}\n\n.menu-item-description {\n    font-size: 1.2rem;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    margin-top: 10px;\n    font-weight: 400;\n}\n\n.contact-text-box {\n    background-color: #2c4f40;\n    color: #d8d8d8;\n    padding: 60px;\n    margin-bottom: auto;\n    width: 70%;\n    border-radius: 10px;\n}\n\n.contact-text-box h3 {\n    font-size: 2.0rem;\n    text-align: center;\n    margin-bottom: 20px;\n}\n\n.contact-text-box p {\n    font-size: 1.5rem;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-weight: 400;\n\n}\n\n.contact-email,\n.contact-phone {\n    text-align: center;\n    font-size: 2.0rem;\n\n}\n\n\n\n@media screen and (max-width: 1240px) {\n    .home-topDiv {\n        flex-direction: column;\n    }\n\n    .section-home {\n        width: 85%;\n    }\n}\n\n@media screen and (max-width: 1000px) {\n    .menu-side-image {\n        display: none;\n    }\n\n    .menu-div {\n        background: no-repeat center/100% url("+m+");\n        padding-bottom: 20px;\n    }\n\n    .section {\n        padding: 10px 0px;\n        width: 85%;\n    }\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,c){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&r[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var c={},r=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=c[d]||0,m="".concat(d," ").concat(l);c[d]=l+1;var u=t(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var h=a(p,o);o.byIndex=i,n.splice(i,0,{identifier:m,updater:h,references:1})}r.push(m)}return r}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var c=o(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<c.length;r++){var i=t(c[r]);n[i].references--}for(var s=o(e,a),d=0;d<c.length;d++){var l=t(c[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},358:(e,n,t)=>{e.exports=t.p+"cc6c310f1ac241c45452.jpg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var c=n[o]={id:o,exports:{}};return e[o](c,c.exports,t),c.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"d00c44c254f08183549c.png";var n=t(379),o=t.n(n),a=t(795),c=t.n(a),r=t(569),i=t.n(r),s=t(565),d=t.n(s),l=t(216),m=t.n(l),u=t(589),p=t.n(u),h=t(28),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=m(),o()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var x=t(358);const g=t.p+"7538c915f59b77b919d8.jpg";function v(){console.log("home tab clicked");const e=document.querySelector("main");e.replaceChildren(),e.classList.add("home-main");const n=document.createElement("div");n.classList.add("home-topDiv");const t=document.createElement("div");t.classList.add("home-bottomDiv");const o=document.createElement("img");o.src=g,o.classList.add("home-image");const a=document.createElement("div");a.classList.add("section-home");const c=document.createElement("h2");c.innerText="About Us";const r=document.createElement("p");r.innerText="It's complicated and I don't wish to discuss it. It's none of your concern. You know what, let's just say that I have a hell of a lot more on my mind, right now, than thinking about buying a damn car wash. Okay? So if you could just... please. \n\nStop. Stop! You keep saying that word - danger... danger! No and I have never used that word. I said things were complicated. And then you flew off the handle! ",a.append(c,r);const i=document.createElement("div");i.classList.add("section-home");const s=document.createElement("h2");s.innerText="Hours";const d=document.createElement("div");d.innerHTML="<p>Monday to Friday: 9am - 9pm </p><p>Saturday: 12pm - 10pm</p><p>Sunday: 12pm - 6pm </p>",i.append(s,d);const l=document.createElement("div");l.classList.add("section-home");const m=document.createElement("h2");m.innerText="Location";const u=document.createElement("div");u.innerHTML="<p>1234 AtoZ Street</p><p>Paradise, Earth 77777</p>",l.append(m,u),n.append(o,a),t.append(i,l),e.append(n,t)}!function(){const n=document.getElementById("content"),t=document.createElement("header");t.classList.add("header");const o=document.createElement("img");o.src=e,o.classList.add("header-logo");const a=document.createElement("div"),c=document.createElement("h1");c.classList.add("logo-text"),c.innerText="The Hungry Herbivore",a.append(c);const r=document.createElement("ul");r.classList.add("nav-items");const i=document.createElement("li");i.classList.add("home-tab"),i.innerText="Home";const s=document.createElement("li");s.classList.add("menu-tab"),s.innerText="Menu";const d=document.createElement("li");d.classList.add("contact-tab"),d.innerText="Contact",r.append(i,s,d),t.append(o,a,r),n.appendChild(t);const l=document.createElement("main");n.appendChild(l),console.log("page load is recognized")}(),v(),document.querySelector(".menu-tab").addEventListener("click",(function(){console.log("menu tab clicked");const e=document.querySelector("main");e.replaceChildren();const n=document.createElement("div");n.classList.add("menu-div");const t=document.createElement("img");t.src=x,t.classList.add("menu-side-image");const o=document.createElement("div");o.classList.add("full-menu");const a=document.createElement("div");a.classList.add("section");const c=document.createElement("h2");c.innerText="Starters";const r=document.createElement("ul");r.classList.add("menu-items");const i=document.createElement("li");i.innerText="Tofu Fritters";const s=document.createElement("p");s.innerText="Thinly sliced tofu dipped in batter & fried to perfection. Served with spicy sauce.",s.classList.add("menu-item-description"),i.appendChild(s);const d=document.createElement("li");d.innerText="Stuffed Mushrooms";const l=document.createElement("p");l.innerText="Mushroom caps stuffed with a mixture of roasted peppers, onions, fennel and cheeze. Yum!",l.classList.add("menu-item-description"),d.appendChild(l);const m=document.createElement("div");m.classList.add("section");const u=document.createElement("h2");u.innerText="Sammies";const p=document.createElement("ul");p.classList.add("menu-items");const h=document.createElement("li");h.innerText="PBLT";const f=document.createElement("p");f.innerText="Layers of tomato and lettuce stacked between pretzel buns smeared with peanut butter. Served with chips.",f.classList.add("menu-item-description"),h.appendChild(f);const g=document.createElement("li");g.innerText="BBQ Jackfruit";const v=document.createElement("p");v.innerText="Saucy, shredded jackfruit topped with fries and slaw. Served with tots.",v.classList.add("menu-item-description"),g.appendChild(v),r.append(i,d),p.append(h,g),a.append(c,r),m.append(u,p),o.append(a,m),n.append(t,o),e.appendChild(n)})),document.querySelector(".contact-tab").addEventListener("click",(function(){console.log("contact tab clicked");const e=document.querySelector("main");e.replaceChildren();const n=document.createElement("div");n.classList.add("contact-text-box");const t=document.createElement("h3");t.innerText="Questions? Comments? Concerns?";const o=document.createElement("p");o.innerText="We are happy to answer any questions you have about our kitchen. Please call or email us. We usually respond within 24 hours",n.append(t,o);const a=document.createElement("h3");a.innerText="Phone: 555-HERB",a.classList.add("contact-phone");const c=document.createElement("p");c.innerText="email: herbivore@ouremail.com",c.classList.add("contact-email"),e.append(n,a,c)})),document.querySelector(".home-tab").addEventListener("click",v),document.createElement("p").innerContent="Photo by Bruna Branco on Unsplash"})()})();