!function(t,e){for(var n in e)t[n]=e[n]}(this,function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){!function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,n)},n=function(){return(n=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function o(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var o=Array(t),r=0;for(e=0;e<n;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,r++)o[r]=i[s];return o}var r={proxy:function(t,e,n,r){var i=this;"object"==typeof e?this.keys(e).forEach((function(e){return i.proxy(t,e,n,r)})):Object.defineProperty(t,e,{get:function(){return n.call(t,e)},set:r?function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return r.call.apply(r,o([t,e],n))}:function(){}})},throttle:function(t,e){var n;return function(){var o=this,r=arguments;null==n&&(n=setTimeout((function(){t.apply(o,r),n=null}),e))}},obj2str:function(t){var e=this;return"object"==typeof t?"{"+Object.keys(t).map((function(n){return'"'+n+'": '+e.obj2str(t[n])})).join(",")+"}":t},map:function(t,e){if(void 0===t&&(t=[]),"number"==typeof t){for(var n=[],o=0;o++<t;)n.push(o);return n}return"length"in t?[].map.call(t,e):this.keys(t).map((function(n){return e(t[n],n)}))},pick:function(t,e){void 0===t&&(t={});var n={};return e.forEach((function(e){e in t&&(n[e]=t[e])})),n},keys:function(t){return void 0===t&&(t={}),Object.keys(t)},camel2ul:function(t){return t.replace(/[A-Z]/g,(function(t,e){return(0==e?"":"-")+t.toLowerCase()}))},camelKeys2ul:function(t){void 0===t&&(t={});var e={};for(var n in t)e[this.camel2ul(n)]=t[n];return e},same:function(t,e){return JSON.stringify(t)===JSON.stringify(e)},clone:function(t){return JSON.parse(JSON.stringify(t))}},i={class:"className",dataset:"$dataset"},s={createElement:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return this.updateElement.apply(this,o([document.createElement(t)],e))},updateElement:function(t,e,n){var o=this;return e&&r.map(e,(function(e,n){o.setAttr(t,n,e)})),n&&r.map(n,(function(e,n){return o.on(t,n,e)})),t},setAttr:function(t,e,n){t[e=i[e]||e]=n},on:function(t,e,n){var o=t.$$listeners||{},r=e.split("."),i=r[0],s=r[1];o[i]=n,t.addEventListener(i,(function(e){e.dataset=t.$dataset,o[i]&&o[i].call(t,e),"stop"==s?e.stopPropagation():"prevent"==s&&e.preventDefault()}),!1),t.$$listeners=o},off:function(t,e){var n=t.$$listeners||{};delete n[e],t.$$listeners=n},fragment:function(){return document.createDocumentFragment()},createText:function(t){return document.createTextNode(t)},createComment:function(t){return void 0===t&&(t=""),document.createComment(t)},insert:function(t,e,n){if(n<0)return!1;var o=t.childNodes;return 0==o.length||o.length<n?t.appendChild(e):t.insertBefore(e,o[n])},remove:function(t){t&&t.remove()}},a={util:r,dom:s},c=function(){function t(){this.$events={}}return t.prototype.$on=function(t,e){var n,o=null!==(n=this.$events[t])&&void 0!==n?n:[];o.push(e),this.$events[t]=o},t.prototype.$emit=function(t){for(var e=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];(this.$events[t]||[]).slice(0).forEach((function(t){return t.call.apply(t,o([e],n))}))},t.prototype.$off=function(t,e){if(e){var n=this.$events[t].indexOf(e);n>-1&&this.$events[t].splice(n,1)}else delete this.$events[t]},t.prototype.$offByPrefix=function(t){var e=this;a.util.map(this.$events,(function(n,o){0==o.indexOf(t)&&e.$off(o)}))},t.prototype.$once=function(t,e){var n=this,r=function(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];e.call.apply(e,o([n],i)),n.$off(t,r)};this.$on(t,r)},t}(),u={},l=function(){function t(t){this.now={children:[]},this.html=t,this.stack=[this.now]}return t.prototype.analyse=function(){if(!this.html)return null;for(var e;e=t.REGEXP.exec(this.html);)if(!this.collect.apply(this,e.slice(1)))throw new Error("template parsing error, not a valid structure ~\r\n["+e.index+"]: "+e[0]+"\r\n"+this.html);return this.now},t.prototype.collect=function(t,e,n,o,r,i){do{if(e){var s={node:e.toLocaleLowerCase(),props:this.collectAttrs(n),children:[]};!o&&this.stack.push(s),this.now.children.push(s)}else if(r){if(r.toLocaleLowerCase()!=this.now.node)break;this.stack.pop()}else t?this.now.children.push({isComment:!0,text:t}):i.trim()&&this.now.children.push({text:i});return this.now=this.stack[this.stack.length-1],!0}while(0);return!1},t.prototype.collectAttrs=function(e){var n={};if(e)for(var o=void 0;o=t.ATTR_REPEXP.exec(e);)n[o[1]]=null==o[2]?o[1]:o[2];return n},t.REGEXP=/<!--((?:(?!-->)[\s\S])*?)-->|<([a-z]+(?:(?:-[a-z]+)+)?)(\s[\s\S]+?)?(\s*\/)?>|<\/([a-z]+(?:(?:-[a-z]+)+)?)>|([\s\S]+?)(?=<|$)/gi,t.ATTR_REPEXP=/\s*([^\s"=>\/]+)(?:="([^"]+)")?/g,t}(),p="v",f={event:"@",bind:":",data:"data-"},d=["{{","}}"];function h(t,e){return{children:a.util.map(t,e).filter((function(t){return t!==u}))}}function m(t,e,o){var r=this.$components[t];return n(n({node:t},e),{children:o,componentOptions:r})}function v(t){return{text:t}}function $(t){return{isComment:!0,text:t}}function y(t){var e,n=function(t){var e={},n={},o={},r={};for(var i in t.props){var s=t.props[i];0==i.indexOf(p+"-")?e[i.substr(p.length+1)]=s:0==i.indexOf(f.event)?n[i.substr(f.event.length)]='"'+s+'"':0==i.indexOf(f.bind)?o[i.substr(f.bind.length)]=s:0==i.indexOf(f.data)?r[i.substr(f.data.length)]=s:o[i]=JSON.stringify(s)}return o.dataset=r,{logics:e,events:n,props:o}}(t),o=n.logics,r=n.events,i=n.props,s=o.for,c=o.if,u=o.elseif||o["else-if"],l=o.else,d=o["for-index"]||"$index",h=o["for-item"]||"$item";return e='_$n("'+t.node+'", {\n      '+(s&&o.key?"key: "+o.key+",":"")+"\n      props: "+a.util.obj2str(i)+",\n      events: "+a.util.obj2str(r)+",\n    }, ["+t.children.map((function(t,e){return g(t)}))+"])",c?e=c+" ? "+e+" : _$e":u?e=" && "+u+" ? "+e+" : _$e":l&&(e=" && "+e),s&&(e="_$l("+s+", function("+h+", "+d+") { return "+e+"; })"),e}function g(t){var e,n,o;return t.node?e=y(t):t.isComment?e="_$m("+JSON.stringify(t.text)+")":t.text&&(e='_$t("'+(n=t.text,void 0===(o=!0)&&(o=!1),n.replace(/[\s]+/g," ").replace(new RegExp(d[0],"g"),'" + '+(o?"JSON.stringify":"")+"(").replace(new RegExp(d[1],"g"),') + "'))+'")'),e}var E,b,x=function(t){this._=t,this.props=t.props||{},this.data=t.data||{},this.lifetimes=t.lifetimes||{},this.methods=t.methods||{},this.watch=t.watch||{},this.computed=t.computed||{},this.style=t.style,this.components=t.components=a.util.camelKeys2ul(t.components),this.render=t.render=t.render||function(t,e){if(!t)return function(){};var n=new l(t),o=n.analyse();if(n=null,!o||0==o.children.length)throw new Error("instance must be a root element!\r\n "+t);if(o.children.length>1)throw new Error("template's root must be only one !\r\n "+t);var r=a.util.keys(e.props),i=a.util.keys(e.methods),s=a.util.keys(e.computed),c=a.util.keys("function"==typeof e.data?e.data.call({}):e.data||{}),p=r.concat(i,c,s).map((function(t){return t+" = this."+t})).join(", ");return new Function("_$l","_$n","_$t","_$m","_$e","\n    return function() {\n      "+(""!=p?"var "+p+";":"")+";\n      _$n = _$n.bind(this);\n      return "+g(o.children[0])+";\n    };\n  ")(h,m,v,$,u)}(t.template,t)};!function(t){t[t.ADD=0]="ADD",t[t.DEL=1]="DEL",t[t.UPDATE=2]="UPDATE",t[t.BATCH=3]="BATCH",t[t.NONE=4]="NONE"}(E||(E={}));var _={set:function(t){return b=t},get:function(){return b}};function w(t,e){void 0===e&&(e={}),a.util.map(e,(function(e,n){t.$on(""+_.get().$PROPS_EVENT_PREFIX+n,(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this.$invoke.apply(this,o([e],t))}))}))}function O(t,e,n){var o,r=null==e?void 0:e.componentInstance,i=a.util.pick(t.props,["slot","style","class"]);if(r)a.util.same(t.props,r.$propsData)?(t.el=e.el,o=E.NONE):(t.el=e.el,a.dom.updateElement(t.el,i),r.$setPropsData(a.util.clone(t.props)),r.$offByPrefix(_.get().$PROPS_EVENT_PREFIX),w(r,t.events),r.$update(),o=E.UPDATE);else if(t.el=a.dom.createElement(p+"-"+t.node,i),t.el.$root=t.el.attachShadow({mode:"open"}),w(r=new(_.get())(t.componentOptions,{props:a.util.clone(t.props),context:n,componentName:t.node}),t.events),r.$mount(t.el.$root),o=E.ADD,r.$options.style){var s=document.createElement("style");s.textContent=r.$options.style,t.el.$root.appendChild(s)}return t.componentInstance=r,{type:o,vnode:t}}function k(t,e,n){var r,i={};return a.util.map(t.events||{},(function(t,e){i[e]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];n.$invoke.apply(n,o([t],e))}})),e.el?a.util.same(t.props,e.props)?(t.el=e.el,r=E.NONE):(t.el=a.dom.updateElement(e.el,t.props,event),r=E.UPDATE):(t.el=a.dom.createElement(t.node,t.props,i),r=E.ADD),{type:r,vnode:t}}function P(t,e){var n;return e.el?(t.el=e.el,t.text!=e.text&&(t.el.textContent=t.text),n=E.UPDATE):(t.el=a.dom.createText(t.text),n=E.ADD),{type:n,vnode:t}}function N(t,e){var n;return e.el?(t.el=e.el,n=E.NONE):(t.el=a.dom.createComment(t.text),n=E.ADD),{type:n,vnode:t}}function T(t){return!!t&&(t.componentInstance&&t.componentInstance.$destroy(),a.dom.remove(t.el),t.el=null,t)}function D(t,e,n){var o,r,i,s=0,c=(o=(null==e?void 0:e.children)||[],r=o[0],i={},r&&null!=r.key?(o.forEach((function(t){i[t.key]=t})),i):o.slice(0));t.el.$$fc=0,a.util.map(t.children,(function(e,o){var r=function(t,e){var n=t[e];return t[e]=null,n}(c,e.key||o);switch(j(e,r,n).type){case E.BATCH:return s+=e.el.$$fc,a.dom.insert(t.el,e.el,s),void(s+=e.el.childNodes.length);case E.DEL:return void T(r);case E.ADD:a.dom.insert(t.el,e.el,s);break;default:t.el.$$fc++}s++})),a.util.map(c,T)}function j(t,e,n){var o;void 0===e&&(e={});do{if(t.componentOptions)o=O(t,e,n),t.componentInstance.$children=t.children;else if(t.node)o=k(t,e,n);else{if(t.isComment){o=N(t,e);break}if(t.text){o=P(t,e);break}if(t==u){o={vnode:e,type:E.DEL};break}!t.el&&t.children?(t.el=a.dom.fragment(),o={vnode:t,type:E.BATCH}):o={vnode:t,type:E.NONE}}D(t,e,n)}while(0);return o}var A={},C=a.util.throttle((function(){this.$forceUpdate()}),0),S=function(t){function r(e,n){void 0===e&&(e={}),void 0===n&&(n={});var o=t.call(this)||this;return o.$mounted=!1,o.$destroyed=!1,o.$options=new x(e),o.$render=o.$options.render,o.$propsData=n.props||{},o.$context=n.context,o.$componentName=n.componentName,o.$componentId=n.componentId?n.componentId:r.$$id++,o._init(),o}return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}(r,t),r.prototype._init=function(){this._injectHooks(),a.util.proxy(this,n(n({},this.$options.props),this.$options.methods),this.$get),"function"==typeof this.$options.data?this.$data=this.$options.data.call(this):this.$data=this.$options.data,a.util.proxy(this,this.$data,this.$get,this.$set),a.util.proxy(this,this.$options.computed,this.$get),this.$emit("hook:created")},Object.defineProperty(r.prototype,"$methods",{get:function(){return this.$options.methods},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"$components",{get:function(){return n(n({},A),this.$options.components)},enumerable:!0,configurable:!0}),r.prototype.$set=function(t,e){if(t in this.$data&&e!==this.$data[t]){var n=this.$data[t];this.$data[t]=e,this._invokeWatch(t,e,n),this.$update()}},r.prototype.$get=function(t,e){var n,o,r,i;return this.$options.computed[t]?this.$options.computed[t].call(this):null!==(i=null!==(r=null!==(o=null!==(n=this.$methods[t])&&void 0!==n?n:this.$propsData[t])&&void 0!==o?o:this.$data[t])&&void 0!==r?r:this.$options.props[t])&&void 0!==i?i:e},r.prototype.$setPropsData=function(t){var e=this;a.util.map(t,(function(t,n){var o=e.$propsData[n];n in e.$options.props&&o!==t&&e._invokeWatch(n,e.$propsData[n]=t,o)})),this.$update()},r.prototype._injectHooks=function(){var t=this;a.util.map(this.$options.lifetimes,(function(e,n){return t.$on("hook:"+n,e)}))},r.prototype.$emit=function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];t.prototype.$emit.apply(this,o([e],n)),t.prototype.$emit.apply(this,o([""+r.$PROPS_EVENT_PREFIX+e],n))},r.prototype.$invoke=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return(e=this[t]).call.apply(e,o([this],n))},r.prototype._invokeWatch=function(t,e,n){var o=this.$options.watch[t];o&&o.call(this,e,n)},r.prototype.$update=function(){C.call(this)},r.prototype.$forceUpdate=function(){if(!this.$mounted||this.$destroyed)return!1;this._render(),this.$emit("hook:updated"),this.$emit("hook:$nextTick")},r.prototype.$nextTick=function(t){this.$once("hook:$nextTick",t)},r.prototype._render=function(){var t=this.$render.call(this);if(!t)return!1;this._mountElement&&(t={el:this._mountElement,children:[t]}),this._patch(t)},r.prototype._patch=function(t){var e,n;this.$vnode=(e=t,void 0===(n=this.$vnode)&&(n={}),j(e,n,this).vnode),this.$el=this.$vnode.el},r.prototype.$mount=function(t){this.$mounted||(t&&(this._mountElement=t),this._render(),this.$mounted=!0,this.$emit("hook:mounted"),this.$emit("hook:$nextTick"))},r.prototype.$destroy=function(){this.$destroyed=!0,this.$emit("hook:destroyed")},r.register=function(t,e){return e?A[t]=e:A[t]},r.$$id=0,r.$PROPS_EVENT_PREFIX="PROPS_EVENT:",r}(c);_.set(S),t.Pizza=S,t.PizzaContructor=_,t.default=S,t.helper=a,Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e,n){"use strict";var o=n(0),r=n.n(o);let i={};e.a=class extends r.a{constructor(t,e={}){super(t,e),i[this.$componentId]=this}static instance(t){return i[t]}}},function(t,e,n){"use strict";e.a=class{constructor(t){this.messager=t,this.listeners={},this.messager.addEventListener("message",t=>{let{id:e,type:n,data:o}=t.data;o=null==o?o:JSON.parse(o),this.listeners[n]&&this.listeners[n](o,this.send.bind(this,e))})}recevie(t,e,n){return this.listeners[t]=(...o)=>{e(...o),n&&delete this.listeners[t]},this}send(t,e,n){let o=`${Math.random()}#${Math.random()}`;this.messager.postMessage({id:o,data:e?JSON.stringify(e):null,type:t},void 0),n&&this.recevie(o,n,!0)}}},,,function(t,e,n){var o=n(6),r=n(7);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},s=(o(r,i),r.locals?r.locals:{});t.exports=s},function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),s=[];function a(t){for(var e=-1,n=0;n<s.length;n++)if(s[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},o=[],r=0;r<t.length;r++){var i=t[r],c=e.base?i[0]+e.base:i[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var p=a(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(s[p].references++,s[p].updater(f)):s.push({identifier:l,updater:v(f,e),references:1}),o.push(l)}return o}function u(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,p=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=p(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function d(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,m=0;function v(t,e){var n,o,r;if(e.singleton){var i=m++;n=h||(h=u(e)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=u(e),o=d.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=a(n[o]);s[r].references--}for(var i=c(t,e),u=0;u<n.length;u++){var l=a(n[u]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}n=i}}}},function(t,e,n){(e=n(8)(!1)).push([t.i,".container {\n  height: 300px;\n}",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(s=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([r]).join("\n")}var s,a,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},,function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(0),i=new(n(2).a)((()=>{let t;return window.JsBridgePostMessage=function(e){t.call(this,{type:"message",data:e})},{addEventListener(e,n){t=n},postMessage(t){window.flutter_inappwebview.callHandler("postMessage",t)}}})());window.innerWidth,window.innerHeight;var s={pick(t){let e={};for(let n in t)"object"!=typeof t[n]&&(e[n]=t[n]);return e},formatEvent(t){let e=this.pick(t);return e.touches=r.helper.util.map(t.touches||[],t=>this.pick(t)),e.dataset=t.dataset,"scroll"==t.type&&(e.scrollLeft=t.target.scrollLeft,e.scrollTop=t.target.scrollTop),e}};const a=r.helper.util.throttle((function(){i.send("CLIENT_INVOKE_UPDATE",{id:this.$componentId,props:this.$propsData,context:this.$context?this.$context.$componentId:null})}),0);class c extends o.a{constructor(t,e={}){super(t,e),i.send("CLIENT_CREATED",{props:this.$propsData,context:this.$context?this.$context.$componentId:null,component:this.$componentName,id:this.$componentId})}$invoke(t,e,...n){/\[object \w*Event\]/.test(Object.prototype.toString.call(e))&&(e=s.formatEvent(e)),i.send("CLIENT_INVOKE",{id:this.$componentId,method:t,args:[e,...n]})}$update(){a.call(this)}$mount(t){this._mountElement=t}$invokeMount(t){super.$mount(t)}}var u=r.PizzaContructor.set(c),l=(n(5),{getBoundingClientRect:t=>t.getBoundingClientRect(),screen:()=>({width:window.innerWidth,height:window.innerHeight}),exec(t,e){let{method:n,args:o,selector:r,selectorAll:i}=e;if(!n in this)return this.error();let s,a=t.$el;return s=r?this[n](a.querySelector(r)):i?Array.from(a.querySelectorAll(i)).map(t=>this[n](t)):this[n](a),{status:1,data:s}},error:()=>({status:0})});let p="pages/index/index";i.recevie("UPDATE",t=>{let e=u.instance(t.id);e.$render=()=>t.vnode,e.$forceUpdate()}).recevie("MOUNT",t=>{let e=u.instance(t.id);e.$render=()=>t.vnode,e.$invokeMount(t.id==p?document.getElementById("app"):void 0)}).send("PAGE_LOADED",p,t=>{new u(t,{componentId:p})}),i.recevie("QUERY",(t,e)=>{e(l.exec(u.instance(t.id),t))})}]));
//# sourceMappingURL=client.js.map