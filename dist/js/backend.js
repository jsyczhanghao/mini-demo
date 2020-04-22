!function(t,e){for(var n in e)t[n]=e[n]}(this,function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=20)}([function(t,e,n){var o,r,i;function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(n,a){"object"==s(e)&&void 0!==t?a(e):(r=[e],void 0===(i="function"==typeof(o=a)?o.apply(e,r):o)||(t.exports=i))}(0,(function(t){"use strict";var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,n)},n=function(){return(n=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function o(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var o=Array(t),r=0;for(e=0;e<n;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,r++)o[r]=i[s];return o}var r={proxy:function(t,e,n,r){var i=this;"object"==s(e)?this.keys(e).forEach((function(e){return i.proxy(t,e,n,r)})):Object.defineProperty(t,e,{get:function(){return n.call(t,e)},set:r?function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return r.call.apply(r,o([t,e],n))}:function(){}})},throttle:function(t,e){var n;return function(){var o=this,r=arguments;null==n&&(n=setTimeout((function(){t.apply(o,r),n=null}),e))}},obj2str:function(t){var e=this;return"object"==s(t)?"{"+Object.keys(t).map((function(n){return"'"+n+"': "+e.obj2str(t[n])})).join(",")+"}":t},map:function(t,e){if(void 0===t&&(t=[]),"number"!=typeof t)return"length"in t?[].map.call(t,e):this.keys(t).map((function(n){return e(t[n],n)}));for(var n=[],o=0;o++<t;)n.push(o);return n},pick:function(t,e){void 0===t&&(t={});var n={};return e.forEach((function(e){e in t&&(n[e]=t[e])})),n},keys:function(t){return void 0===t&&(t={}),Object.keys(t)},camel2ul:function(t){return t.replace(/[A-Z]/g,(function(t,e){return(0==e?"":"-")+t.toLowerCase()}))},camelKeys2ul:function(t){void 0===t&&(t={});var e={};for(var n in t)e[this.camel2ul(n)]=t[n];return e},same:function(t,e){return JSON.stringify(t)===JSON.stringify(e)},clone:function(t){return JSON.parse(JSON.stringify(t))}},i={class:"className",dataset:"$dataset"},a={createElement:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return this.updateElement.apply(this,o([document.createElement(t)],e))},updateElement:function(t,e,n){var o=this;return e&&r.map(e,(function(e,n){o.setAttr(t,n,e)})),n&&r.map(n,(function(e,n){return o.on(t,n,e)})),t},setAttr:function(t,e,n){t[e=i[e]||e]=n},on:function(t,e,n){var o=t.$$listeners||{},r=e.split("."),i=r[0],s=r[1];o[i]=n,t.addEventListener(i,(function(e){e.dataset=t.$dataset,o[i]&&o[i].call(t,e),"stop"==s?e.stopPropagation():"prevent"==s&&e.preventDefault()}),!1),t.$$listeners=o},off:function(t,e){var n=t.$$listeners||{};delete n[e],t.$$listeners=n},fragment:function(){return document.createDocumentFragment()},createText:function(t){return document.createTextNode(t)},createComment:function(t){return void 0===t&&(t=""),document.createComment(t)},insert:function(t,e,n){if(n<0)return!1;var o=t.childNodes;return 0==o.length||o.length<n?t.appendChild(e):t.insertBefore(e,o[n])},remove:function(t){t&&t.remove()},injectStyle:function(t,e){if(!e||!t)return!1;var n=document.createElement("style");n.textContent=e,t.insertBefore(n,t.firstChild)}},c={util:r,dom:a},u=function(){function t(){this.$events={}}return t.prototype.$on=function(t,e){var n,o=null!==(n=this.$events[t])&&void 0!==n?n:[];o.push(e),this.$events[t]=o},t.prototype.$emit=function(t){for(var e=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];(this.$events[t]||[]).slice(0).forEach((function(t){return t.call.apply(t,o([e],n))}))},t.prototype.$off=function(t,e){if(e){var n=this.$events[t].indexOf(e);-1<n&&this.$events[t].splice(n,1)}else delete this.$events[t]},t.prototype.$offByPrefix=function(t){var e=this;c.util.map(this.$events,(function(n,o){0==o.indexOf(t)&&e.$off(o)}))},t.prototype.$once=function(t,e){var n=this;this.$on(t,(function r(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];e.call.apply(e,o([n],i)),n.$off(t,r)}))},t}(),l={},p=function(){function t(t){this.now={children:[]},this.html=t,this.stack=[this.now]}return t.prototype.analyse=function(){if(!this.html)return null;for(var e;e=t.REGEXP.exec(this.html);)if(!this.collect.apply(this,e.slice(1)))throw new Error("template parsing error, not a valid structure ~\r\n["+e.index+"]: "+e[0]+"\r\n"+this.html);return this.now},t.prototype.collect=function(t,e,n,o,r,i){do{if(e){var s={node:e.toLocaleLowerCase(),props:this.collectAttrs(n),children:[]};!o&&this.stack.push(s),this.now.children.push(s)}else if(r){if(r.toLocaleLowerCase()!=this.now.node)break;this.stack.pop()}else t?this.now.children.push({isComment:!0,text:t}):i.trim()&&this.now.children.push({text:i});return this.now=this.stack[this.stack.length-1],!0}while(0);return!1},t.prototype.collectAttrs=function(e){var n={};if(e)for(var o=void 0;o=t.ATTR_REPEXP.exec(e);)n[o[1]]=null==o[2]?o[1]:o[2];return n},t.REGEXP=/<!--((?:(?!-->)[\s\S])*?)-->|<([a-z]+(?:(?:-[a-z]+)+)?)(\s[\s\S]+?)?(\s*\/)?>|<\/([a-z]+(?:(?:-[a-z]+)+)?)>|([\s\S]+?)(?=<|$)/gi,t.ATTR_REPEXP=/\s*([^\s"=>\/]+)(?:="([^"]+)")?/g,t}(),f={logo:"v",prefixs:{event:"@",bind:":",data:"data-",component:""},delimitter:["{{","}}"]};function h(t,e){return{children:c.util.map(t,e).filter((function(t){return t!==l}))}}function d(t,e,o){var r=this.$components[t];return n(n({node:t},e),{children:o,componentOptions:r})}function m(t){return{text:t}}function y(t){return{isComment:!0,text:t}}function v(t){var e,n;return t.node?e=function(t){var e,n=function(t){var e={},n={},o={},r={};for(var i in t.props){var s=t.props[i];0==i.indexOf(f.logo+"-")?e[i.substr(f.logo.length+1)]=s:0==i.indexOf(f.prefixs.event)?n[i.substr(f.prefixs.event.length)]='"'+s+'"':0==i.indexOf(f.prefixs.bind)?o[i.substr(f.prefixs.bind.length)]=s:0==i.indexOf(f.prefixs.data)?r[i.substr(f.prefixs.data.length)]=s:o[i]=JSON.stringify(s)}return o.dataset=r,{logics:e,events:n,props:o}}(t),o=n.logics,r=n.events,i=n.props,s=o.for,a=o.if,u=o.elseif||o["else-if"],l=o.else,p=o["for-index"]||"$index",h=o["for-item"]||"$item";return e='_$n("'+t.node+'", {\n      '+(s&&o.key?"key: "+o.key+",":"")+"\n      props: "+c.util.obj2str(i)+",\n      events: "+c.util.obj2str(r)+",\n    }, ["+t.children.map((function(t,e){return v(t)}))+"])",a?e=a+" ? "+e+" : _$e":u?e=" && "+u+" ? "+e+" : _$e":l&&(e=" && "+e),s&&(e="_$l("+s+", function("+h+", "+p+") { return "+e+"; })"),e}(t):t.isComment?e="_$m("+JSON.stringify(t.text)+")":t.text&&(e='_$t("'+(void 0===(n=!0)&&(n=!1),t.text.replace(/[\s]+/g," ").replace(new RegExp(f.delimitter[0],"g"),'" + '+(n?"JSON.stringify":"")+"(").replace(new RegExp(f.delimitter[1],"g"),') + "'))+'")'),e}var g,b,$,w=function(t){this._=t,this.props=t.props||{},this.data=t.data||{},this.lifetimes=t.lifetimes||{},this.methods=t.methods||{},this.watch=t.watch||{},this.computed=t.computed||{},this.style=t.style,this.components=t.components=c.util.camelKeys2ul(t.components),this.render=t.render=t.render||function(t,e){if(!t)return function(){};var n=new p(t),o=n.analyse();if(n=null,!o||0==o.children.length)throw new Error("instance must be a root element!\r\n "+t);if(1<o.children.length)throw new Error("template's root must be only one !\r\n "+t);var r=c.util.keys(e.props),i=c.util.keys(e.methods),s=c.util.keys(e.computed),a=c.util.keys("function"==typeof e.data?e.data.call({}):e.data||{}),u=r.concat(i,a,s).map((function(t){return t+" = this."+t})).join(", ");return new Function("_$l","_$n","_$t","_$m","_$e","\n    return function() {\n      "+(""!=u?"var "+u+";":"")+";\n      _$n = _$n.bind(this);\n      return "+v(o.children[0])+";\n    };\n  ")(h,d,m,y,l)}(t.template,t)};(b=g||(g={}))[b.ADD=0]="ADD",b[b.DEL=1]="DEL",b[b.UPDATE=2]="UPDATE",b[b.BATCH=3]="BATCH",b[b.NONE=4]="NONE";var x={set:function(t){return $=t},get:function(){return $}};function E(t,e,n){var o,r=null==e?void 0:e.componentInstance,i=c.util.pick(t.props,["slot","style","class"]);if(r)o=c.util.same(t.props,r.$propsData)?(t.el=e.el,g.NONE):(t.el=e.el,c.dom.updateElement(t.el,i),r.$update({props:c.util.clone(t.props),events:t.events}),r.$setPropsData(c.util.clone(t.props)),r.$setEventsData(t.events),r.$update(),g.UPDATE);else{var s=""+(f.prefixs.component||"")+t.node;t.el=c.dom.createElement(s,i);try{t.el.$root=t.el.attachShadow({mode:"closed"})}catch(t){throw new Error("Component["+s+"] is not valid, the name must be like [xx-xx]")}(r=new(x.get())(t.componentOptions,{props:c.util.clone(t.props),context:n,events:t.events,componentName:t.node})).$mount(t.el.$root),o=g.ADD}return t.componentInstance=r,{type:o,vnode:t}}function O(t,e,n){var r={};return c.util.map(t.events||{},(function(t,e){r[e]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];n.$invoke.apply(n,o([t],e))}})),{type:e.el?c.util.same(t.props,e.props)?(t.el=e.el,g.NONE):(t.el=c.dom.updateElement(e.el,t.props,event),g.UPDATE):(t.el=c.dom.createElement(t.node,t.props,r),g.ADD),vnode:t}}function _(t){return!!t&&(t.componentInstance&&t.componentInstance.$destroy(),c.dom.remove(t.el),t.el=null,t)}function S(t,e,n){var o,r,i,s=0,a=(r=(o=(null==e?void 0:e.children)||[])[0],i={},r&&null!=r.key?(o.forEach((function(t){i[t.key]=t})),i):o.slice(0));t.el.$$fc=0,c.util.map(t.children,(function(e,o){var r,i,u,l=(u=(r=a)[i=e.key||o],r[i]=null,u);switch(P(e,l,n).type){case g.BATCH:return s+=e.el.$$fc,c.dom.insert(t.el,e.el,s),void(s+=e.el.childNodes.length);case g.DEL:return void _(l);case g.ADD:c.dom.insert(t.el,e.el,s);break;default:t.el.$$fc++}s++})),c.util.map(a,_)}function P(t,e,n){var o,r,i,s,a;void 0===e&&(e={});do{if(t.componentOptions)o=E(t,e,n),t.componentInstance.$children=t.children;else if(t.node)o=O(t,e,n);else{if(t.isComment){s=t,o={type:(a=e).el?(s.el=a.el,g.NONE):(s.el=c.dom.createComment(s.text),g.ADD),vnode:s};break}if(t.text){r=t,o={type:(i=e).el?(r.el=i.el,r.text!=i.text&&(r.el.textContent=r.text),g.UPDATE):(r.el=c.dom.createText(r.text),g.ADD),vnode:r};break}if(t==l){o={vnode:e,type:g.DEL};break}o=!t.el&&t.children?(t.el=c.dom.fragment(),{vnode:t,type:g.BATCH}):{vnode:t,type:g.NONE}}S(t,e,n)}while(0);return o}var k={},j=c.util.throttle((function(){this.$forceUpdate()}),0),T=function(t){function r(e,n){void 0===e&&(e={}),void 0===n&&(n={});var o=t.call(this)||this;return o.$mounted=!1,o.$destroyed=!1,o.$options=new w(e),o.$render=o.$options.render,o.$propsData=n.props||{},o.$context=n.context,o.$componentName=n.componentName,o.$componentId=n.componentId?n.componentId:r.$$id++,o.$setEventsData(n.events),o._init(),o}return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}(r,t),r.prototype._init=function(){this._injectHooks(),c.util.proxy(this,n(n({},this.$options.props),this.$options.methods),this.$get),"function"==typeof this.$options.data?this.$data=this.$options.data.call(this):this.$data=this.$options.data,c.util.proxy(this,this.$data,this.$get,this.$set),c.util.proxy(this,this.$options.computed,this.$get),this.$emit("hook:created")},Object.defineProperty(r.prototype,"$methods",{get:function(){return this.$options.methods},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"$components",{get:function(){return n(n({},k),this.$options.components)},enumerable:!0,configurable:!0}),r.prototype.$set=function(t,e){if(t in this.$data&&e!==this.$data[t]){var n=this.$data[t];this.$data[t]=e,this._invokeWatch(t,e,n),this.$update()}},r.prototype.$get=function(t,e){var n,o,r,i;return this.$options.computed[t]?this.$options.computed[t].call(this):null!==(i=null!==(r=null!==(o=null!==(n=this.$methods[t])&&void 0!==n?n:this.$propsData[t])&&void 0!==o?o:this.$data[t])&&void 0!==r?r:this.$options.props[t])&&void 0!==i?i:e},r.prototype.$setPropsData=function(t){var e=this;c.util.map(t,(function(t,n){var o=e.$propsData[n];n in e.$options.props&&o!==t&&e._invokeWatch(n,e.$propsData[n]=t,o)})),this.$update()},r.prototype.$setEventsData=function(t){var e=this;this.$offByPrefix(r.$PROPS_EVENT_PREFIX),c.util.map(this.$eventsData=t||{},(function(t,n){e.$on(""+r.$PROPS_EVENT_PREFIX+n,(function(){for(var e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];(e=this.$context).$invoke.apply(e,o([t],n))}))}))},r.prototype._injectHooks=function(){var t=this;c.util.map(this.$options.lifetimes,(function(e,n){return t.$on("hook:"+n,e)}))},r.prototype.$emit=function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];t.prototype.$emit.apply(this,o([e],n)),t.prototype.$emit.apply(this,o([""+r.$PROPS_EVENT_PREFIX+e],n))},r.prototype.$invoke=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return(e=this[t]).call.apply(e,o([this],n))},r.prototype._invokeWatch=function(t,e,n){var o=this.$options.watch[t];o&&o.call(this,e,n)},r.prototype.$update=function(){j.call(this)},r.prototype.$forceUpdate=function(){if(!this.$mounted||this.$destroyed)return!1;this._render(),this.$emit("hook:updated"),this.$emit("hook:$nextTick")},r.prototype.$nextTick=function(t){this.$once("hook:$nextTick",t)},r.prototype._render=function(){var t=this.$render.call(this);if(!t)return!1;this._mountElement&&(t={el:this._mountElement,children:[t]}),this._patch(t)},r.prototype._patch=function(t){var e,n;this.$vnode=(e=t,void 0===(n=this.$vnode)&&(n={}),P(e,n,this).vnode),this.$el=this.$vnode.el},r.prototype.$mount=function(t){this.$mounted||(t&&(this._mountElement=t),this._render(),this.$mounted=!0,this.$emit("hook:mounted"),this.$emit("hook:$nextTick"),c.dom.injectStyle(this.$el,this.$options.style))},r.prototype.$destroy=function(){this.$destroyed=!0,this.$emit("hook:destroyed")},r.register=function(t,e){return e?k[t]=e:k[t]},r.$$id=0,r.$PROPS_EVENT_PREFIX="PROPS_EVENT:",r}(u);x.set(T),t.Pizza=T,t.PizzaContructor=x,t.config=f,t.default=T,t.helper=c,Object.defineProperty(t,"__esModule",{value:!0})}))},function(t,e,n){"use strict";var o=n(2);e.a=function(t,e){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return new Promise((function(n,i){o.a.send("API_CALL",{method:t,args:e?e.apply(void 0,r):r[0]},(function(t){t.status;var e=t.data,o=t.err;return o?i(o):n(e)}))}))}}},function(t,e,n){"use strict";var o=n(4);e.a=new o.a(self)},function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var o=n(0);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f={},h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(d,t);var e,n,o,r,h=(e=d,function(){var t,n=p(e);if(l()){var o=p(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return c(this,t)});function d(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(this,d),e=h.call(this,t,n),f[e.$componentId]=u(e),e}return n=d,r=[{key:"instance",value:function(t){return f[t]}}],(o=null)&&s(n.prototype,o),r&&s(n,r),d}(n.n(o).a)},function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.d(e,"a",(function(){return r}));var r=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.messager=e,this.listeners={},this.messager.addEventListener("message",(function(t){var e=t.data,o=e.id,r=e.type,i=e.data;i=null==i?i:JSON.parse(i),n.listeners[r]&&n.listeners[r](i,n.send.bind(n,o))}))}var e,n,r;return e=t,(n=[{key:"recevie",value:function(t,e,n){var o=this;return this.listeners[t]=function(){e.apply(void 0,arguments),n&&delete o.listeners[t]},this}},{key:"send",value:function(t,e,n){var o="".concat(Math.random(),"#").concat(Math.random());this.messager.postMessage({id:o,data:e?JSON.stringify(e):null,type:t},void 0),n&&this.recevie(o,n,!0)}}])&&o(e.prototype,n),r&&o(e,r),t}()},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}t.exports=o},function(t,e,n){"use strict";(function(t){var o=n(7),r=n(8),i=n(9),s=n(10);e.a=t.mini={navigator:o.a,toast:r.a,dom:i.a,system:s.a}}).call(this,n(5))},function(t,e,n){"use strict";var o=n(1);e.a={push:Object(o.a)("navigator.push"),back:function(){}}},function(t,e,n){"use strict";var o=n(1);e.a={show:Object(o.a)("toast.show",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return{message:t,duration:e}}))}},function(t,e,n){"use strict";var o=n(1);e.a={boundingClientRect:Object(o.a)("dom.boundingClientRect",(function(t,e){return{id:t.$componentId,selector:e}})),screen:Object(o.a)("dom.screen")}},function(t,e,n){"use strict";var o=n(1);e.a={config:Object(o.a)("system.config")}},function(t,e,n){"use strict";(function(t){var n;t.getApp=function(){return n},e.a=function(t){(n=t).onLaunch&&n.onLaunch()}}).call(this,n(5))},function(t){t.exports=JSON.parse('{"usingComponents":{"banner":"./components/banner/index"},"navigationBarTitleText":"购物车"}')},function(t){t.exports=JSON.parse('{"component":true}')},function(t){t.exports=JSON.parse('{"navigationBarTitleText":"用户中心"}')},,,,,function(t,e,n){var o;self.addEventListener=function(t,e){"message"==t&&(o=e)},self.postMessage=function(t){jsPostMessage2native(t)},self.nativePostMessage2js=function(t){o.call(this,{event:"message",data:t})}},function(t,e,n){"use strict";n.r(e);n(19);var o=n(6),r=n(3),i=n(0),s=n(2);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(a,t);var e,n,o,r,i=(e=a,function(){var t,n=h(e);if(f()){var o=h(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return p(this,t)});function a(){return c(this,a),i.apply(this,arguments)}return n=a,(o=[{key:"_patch",value:function(t){this.$vnode=t,s.a.send(this.$mounted?"UPDATE":"MOUNT",{id:this.$componentId,vnode:t})}}])&&u(n.prototype,o),r&&u(n,r),a}(r.a),m=i.PizzaContructor.set(d),y=n(11),v={template:'<div class="scroll-view" @scroll="onScroll" :style="style">\n  <slot></slot>\n</div>',style:".scroll-view {\n  height: 100%;\n  overflow: auto;\n}\n\n:host {\n  display: block;\n  max-height: 100vh;\n}\n\na, b, c {\n  font-size: 22px;\n}",props:{style:""},methods:{onScroll:function(t){this.$emit("scroll",t)}}};function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var $={style:".swiper {\n  width: 100vw;\n  height: 100%;\n  overflow: hidden;\n}\n\n.swiper-horizontal, .swiper-inner {\n  display: flex;\n}\n\n.swiper-horizontal .swiper-inner {\n  height: 100%;\n}\n\n.swiper-vertical .swiper-inner {\n  flex-direction: column;\n  width: 100%;\n}\n\n.swiper-animation {\n  overflow: hidden;\n}\n\n.swiper-animation .swiper-inner {\n  transition: transform 600ms ease-in;\n}\n\n:host {\n  max-height: 100%;\n  display: block;\n}",template:'<div :class="\'swiper swiper-\' + direction + (animating ? \' swiper-animation\' : \'\')">\n  <div class="swiper-inner" :style="innerTransformStyle" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" @webkitTransitionEnd="onTransitionEnd">\n    <slot></slot>\n  </div>\n</div>',props:{direction:"horizontal"},data:{index:0,animating:!1,innerTransformStyle:""},computed:{isVertical:function(){return"horizontal"!=this.direction},wh:function(){return this.isVertical?"height":"width"},xy:function(){return this.isVertical?"pageY":"pageX"}},lifetimes:{mounted:function(){this.pos=0,this.perScreenTranslate=0,this.count=0}},methods:{onTouchStart:function(t){var e=this;this.animating||(this.touch=t.touches[0],Promise.all([mini.dom.boundingClientRect(this,".swiper"),mini.dom.boundingClientRect(this,".swiper-inner")]).then((function(t){var n=g(t,2),o=n[0],r=n[1];e.perScreenTranslate=o[e.wh],e.count=Math.ceil(r[e.wh]/o[e.wh])})))},onTouchMove:function(t){if(!this.touch)return!1;this.nowPos=t.touches[0][this.xy]-this.touch[this.xy],this.setPos(this.nowPos+this.pos)},onTouchEnd:function(){if(!this.touch)return!1;this.touch=null,this.pos=this.nowPos+this.pos;var t=this.pos/this.perScreenTranslate;this.animateTo(this.pos>0?0:Math.round(Math.abs(t)))},onTransitionEnd:function(){this.animating=!1},animateTo:function(t){this.index=Math.max(Math.min(t,this.count-1),0),this.$emit("switch",this.index),this.animating=!0,this.setPos(this.pos=-this.perScreenTranslate*this.index)},setPos:function(t){this.innerTransformStyle="transform: translate3d(".concat(this.isVertical?0:t,"px, ").concat(this.isVertical?t:0,"px, 0px)")}}},w={style:":host {\n  width: 100vw;\n  height: 100%;\n  display: block;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}",template:"<slot></slot>"},x={template:"<slot></slot>"},E={template:'<a href="javascript:" @click="onClick">\n  <slot></slot>\n</a>',style:":host {\n  display: inline-block;\n}",props:{url:null},methods:{onClick:function(){this.url&&mini.navigator.push(this.url),this.$emit("click")}}},O=n(12),_=n(13),S={data:function(){return{images:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586432186139&di=76509761988388611631741afacafa3b&imgtype=0&src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F161203%2F3-1612030ZG5.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586432186139&di=3a5ab5857bc955aa87ca66dee8663e53&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181118%2Fe553a90bb9fa4574822c5de49f08d3b2.jpeg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586432186139&di=b4a948e2d461c75aec19aff4069e7756&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201508%2F10%2F20150810150356_hnves.jpeg"]}},lifetimes:{mounted:function(){}},methods:{onTouchStart:function(){},onSwitch:function(t){console.log("banner switch "+t)}},template:'<swiper style="height: 200px" direction="horizontal" @switch="onSwitch">\n  <swiper-item v-for="images">\n    <img :src="$item" style="width: 100vw; height: 200px;" />\n  </swiper-item>\n</swiper>',style:"",components:{}};S.configs=_;for(var P=S,k="pizza-banner {\n  flex: 1;\n}\n\n.center {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  justify-content: space-around;\n}",j=[{name:"A",fav:["eat","drink"]},{name:"B",fav:["eat","play"]}],T=[],A=0;A<2;A++)j.forEach((function(t,e){T.push({name:t.name,fav:t.fav})}));var D=T,N={data:function(){return{users:D}},methods:{showToast:function(t){console.log(t),mini.toast.show(getApp().globalData,2e3)}},template:'<page style="display: flex; flex-direction: column; height: 100%;">\n  <scroll-view style="height: 100%;">\n    <scroll-view style="height: 300px;">\n      <scroll-view style="height: 150px; background: red;">\n        <div style="height: 1000px;">\n          内层scroll-view\n        </div>\n      </scroll-view>\n  \n      <div style="height: 1000px; background: green;">\n        外层\n      </div>\n    </scroll-view>\n\n    <div class="center">\n      <navigator url="pages/user/index">跳转user</navigator>\n      <navigator @click="showToast">啦啦</navigator>\n      <div @click="showToast">弹出toast</div>\n    </div>\n    \n    <banner></banner>\n  </scroll-view>\n</page>'};N.style=k,N.components={banner:P},N.configs=O;var C=N,R=n(14),I={template:'<page>\n  <div>用户中心</div>\n  <navigator url="pages/index/index">前进到index页面，不是后退</navigator>\n</page>',style:"pizza-div {\n  font-size: 28px;\n}",components:{}};I.configs=R;var F,z,L={"pages/index/index":C,"pages/user/index":I};function M(t){return function(t){if(Array.isArray(t))return J(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return J(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}(z=m).register("scroll-view",v),z.register("swiper",$),z.register("swiper-item",w),z.register("page",x),z.register("navigator",E),s.a.recevie("PAGE_LOADED",(function(t,e){e(F=L[t]),o.a.system.config(L[t].configs)})).recevie("CLIENT_CREATED",(function(t){var e=t.context?m.instance(t.context):null,n=e?e.$components[t.component]:F;new m(n,{context:e,props:t.props,events:t.events,componentName:t.component,componentId:t.id}).$mount()})).recevie("CLIENT_INVOKE_UPDATE",(function(t){var e=m.instance(t.id);e.$setPropsData(t.props),e.$setEventsData(t.events),e.$update()})).recevie("CLIENT_INVOKE",(function(t){var e;(e=m.instance(t.id)).$invoke.apply(e,[t.method].concat(M(t.args)))})),Object(y.a)({globalData:{},onLaunch:function(){this.globalData={message:"hello, world"}}})}]));
//# sourceMappingURL=backend.js.map