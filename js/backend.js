(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../lib/mini/backend/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../pizzajs/dist/pizza.js":
/*!********************************************************!*\
  !*** /Users/zhanghao/Code/pizza/pizzajs/dist/pizza.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,function(t){"use strict";var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var s=function(){return(s=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function c(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var o=Array(t),i=0;for(e=0;e<n;e++)for(var r=arguments[e],s=0,c=r.length;s<c;s++,i++)o[i]=r[s];return o}var i={proxy:function(n,o,e,i){var r=this;"object"==typeof o?this.keys(o).forEach(function(t){return r.proxy(n,t,e,i)}):Object.defineProperty(n,o,{get:function(){return e.call(n,o)},set:i?function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return i.call.apply(i,c([n,o],t))}:function(){}})},throttle:function(n,o){var i;return function(){var t=this,e=arguments;null==i&&(i=setTimeout(function(){n.apply(t,e),i=null},o))}},obj2str:function(e){var n=this;return"object"==typeof e?"{"+Object.keys(e).map(function(t){return"'"+t+"': "+n.obj2str(e[t])}).join(",")+"}":e},map:function(e,n){if(void 0===e&&(e=[]),"number"!=typeof e)return"length"in e?[].map.call(e,n):this.keys(e).map(function(t){return n(e[t],t)});for(var t=[],o=0;o++<e;)t.push(o);return t},pick:function(e,t){void 0===e&&(e={});var n={};return t.forEach(function(t){t in e&&(n[t]=e[t])}),n},keys:function(t){return void 0===t&&(t={}),Object.keys(t)},camel2ul:function(t){return t.replace(/[A-Z]/g,function(t,e){return(0==e?"":"-")+t.toLowerCase()})},camelKeys2ul:function(t){void 0===t&&(t={});var e={};for(var n in t)e[this.camel2ul(n)]=t[n];return e},same:function(t,e){return JSON.stringify(t)===JSON.stringify(e)},clone:function(t){return JSON.parse(JSON.stringify(t))}},o={class:"className",dataset:"$dataset"},e={createElement:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return this.updateElement.apply(this,c([document.createElement(t)],e))},updateElement:function(n,t,e){var o=this;return t&&i.map(t,function(t,e){o.setAttr(n,e,t)}),e&&i.map(e,function(t,e){return o.on(n,e,t)}),n},setAttr:function(t,e,n){t[e=o[e]||e]=n},on:function(e,t,n){var o=e.$$listeners||{},i=t.split("."),r=i[0],s=i[1];o[r]=n,e.addEventListener(r,function(t){t.dataset=e.$dataset,o[r]&&o[r].call(e,t),"stop"==s?t.stopPropagation():"prevent"==s&&t.preventDefault()},!1),e.$$listeners=o},off:function(t,e){var n=t.$$listeners||{};delete n[e],t.$$listeners=n},fragment:function(){return document.createDocumentFragment()},createText:function(t){return document.createTextNode(t)},createComment:function(t){return void 0===t&&(t=""),document.createComment(t)},insert:function(t,e,n){if(n<0)return!1;var o=t.childNodes;return 0==o.length||o.length<n?t.appendChild(e):t.insertBefore(e,o[n])},remove:function(t){t&&t.remove()},injectStyle:function(t,e){if(!e||!t)return!1;var n=document.createElement("style");n.textContent=e,t.insertBefore(n,t.firstChild)}},f={util:i,dom:e},n=function(){function t(){this.$events={}}return t.prototype.$on=function(t,e){var n,o=null!==(n=this.$events[t])&&void 0!==n?n:[];o.push(e),this.$events[t]=o},t.prototype.$emit=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];(this.$events[t]||[]).slice(0).forEach(function(t){return t.call.apply(t,c([e],n))})},t.prototype.$off=function(t,e){if(e){var n=this.$events[t].indexOf(e);-1<n&&this.$events[t].splice(n,1)}else delete this.$events[t]},t.prototype.$offByPrefix=function(n){var o=this;f.util.map(this.$events,function(t,e){0==e.indexOf(n)&&o.$off(e)})},t.prototype.$once=function(n,o){var i=this,r=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];o.call.apply(o,c([i],t)),i.$off(n,r)};this.$on(n,r)},t}(),l={},p=function(){function o(t){this.now={children:[]},this.html=t,this.stack=[this.now]}return o.prototype.analyse=function(){if(!this.html)return null;for(var t;t=o.REGEXP.exec(this.html);)if(!this.collect.apply(this,t.slice(1)))throw new Error("template parsing error, not a valid structure ~\r\n["+t.index+"]: "+t[0]+"\r\n"+this.html);return this.now},o.prototype.collect=function(t,e,n,o,i,r){do{if(e){var s={node:e.toLocaleLowerCase(),props:this.collectAttrs(n),children:[]};!o&&this.stack.push(s),this.now.children.push(s)}else if(i){if(i.toLocaleLowerCase()!=this.now.node)break;this.stack.pop()}else t?this.now.children.push({isComment:!0,text:t}):r.trim()&&this.now.children.push({text:r});return this.now=this.stack[this.stack.length-1],!0}while(0);return!1},o.prototype.collectAttrs=function(t){var e={};if(t)for(var n=void 0;n=o.ATTR_REPEXP.exec(t);)e[n[1]]=null==n[2]?n[1]:n[2];return e},o.REGEXP=/<!--((?:(?!-->)[\s\S])*?)-->|<([a-z]+(?:(?:-[a-z]+)+)?)(\s[\s\S]+?)?(\s*\/)?>|<\/([a-z]+(?:(?:-[a-z]+)+)?)>|([\s\S]+?)(?=<|$)/gi,o.ATTR_REPEXP=/\s*([^\s"=>\/]+)(?:="([^"]+)")?/g,o}(),h={logo:"v",prefixs:{event:"@",bind:":",data:"data-",component:""},delimitter:["{{","}}"]};function u(t,e){return{children:f.util.map(t,e).filter(function(t){return t!==l})}}function d(t,e,n){var o=this.$components[t];return s(s({node:t},e),{children:n,componentOptions:o})}function m(t){return{text:t}}function $(t){return{isComment:!0,text:t}}function a(t){var e,n=function(t){var e={},n={},o={},i={};for(var r in t.props){var s=t.props[r];0==r.indexOf(h.logo+"-")?e[r.substr(h.logo.length+1)]=s:0==r.indexOf(h.prefixs.event)?n[r.substr(h.prefixs.event.length)]='"'+s+'"':0==r.indexOf(h.prefixs.bind)?o[r.substr(h.prefixs.bind.length)]=s:0==r.indexOf(h.prefixs.data)?i[r.substr(h.prefixs.data.length)]=s:o[r]=JSON.stringify(s)}return o.dataset=i,{logics:e,events:n,props:o}}(t),o=n.logics,i=n.events,r=n.props,s=o.for,c=o.if,a=o.elseif||o["else-if"],l=o.else,p=o["for-index"]||"$index",u=o["for-item"]||"$item";return e='_$n("'+t.node+'", {\n      '+(s&&o.key?"key: "+o.key+",":"")+"\n      props: "+f.util.obj2str(r)+",\n      events: "+f.util.obj2str(i)+",\n    }, ["+t.children.map(function(t,e){return v(t)})+"])",c?e=c+" ? "+e+" : _$e":a?e=" && "+a+" ? "+e+" : _$e":l&&(e=" && "+e),s&&(e="_$l("+s+", function("+u+", "+p+") { return "+e+"; })"),e}function v(t){var e,n,o;return t.node?e=a(t):t.isComment?e="_$m("+JSON.stringify(t.text)+")":t.text&&(e='_$t("'+(n=t.text,void 0===(o=!0)&&(o=!1),n.replace(/[\s]+/g," ").replace(new RegExp(h.delimitter[0],"g"),'" + '+(o?"JSON.stringify":"")+"(").replace(new RegExp(h.delimitter[1],"g"),') + "'))+'")'),e}var y,g,x,E=function(t){this._=t,this.props=t.props||{},this.data=t.data||{},this.lifetimes=t.lifetimes||{},this.methods=t.methods||{},this.watch=t.watch||{},this.computed=t.computed||{},this.style=t.style,this.components=t.components=f.util.camelKeys2ul(t.components),this.render=t.render=t.render||function(t,e){if(!t)return function(){};var n=new p(t),o=n.analyse();if(n=null,!o||0==o.children.length)throw new Error("instance must be a root element!\r\n "+t);if(1<o.children.length)throw new Error("template's root must be only one !\r\n "+t);var i=f.util.keys(e.props),r=f.util.keys(e.methods),s=f.util.keys(e.computed),c=f.util.keys("function"==typeof e.data?e.data.call({}):e.data||{}),a=i.concat(r,c,s).map(function(t){return t+" = this."+t}).join(", ");return new Function("_$l","_$n","_$t","_$m","_$e","\n    return function() {\n      "+(""!=a?"var "+a+";":"")+";\n      _$n = _$n.bind(this);\n      return "+v(o.children[0])+";\n    };\n  ")(u,d,m,$,l)}(t.template,t)};(g=y||(y={}))[g.ADD=0]="ADD",g[g.DEL=1]="DEL",g[g.UPDATE=2]="UPDATE",g[g.BATCH=3]="BATCH",g[g.NONE=4]="NONE";var _={set:function(t){return x=t},get:function(){return x}};function k(e,t){void 0===t&&(t={}),f.util.map(t,function(n,t){e.$on(""+_.get().$PROPS_EVENT_PREFIX+t,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.$invoke.apply(this,c([n],t))})})}function O(t,e,n){var o,i=null==e?void 0:e.componentInstance,r=f.util.pick(t.props,["slot","style","class"]);if(i)o=f.util.same(t.props,i.$propsData)?(t.el=e.el,y.NONE):(t.el=e.el,f.dom.updateElement(t.el,r),i.$setPropsData(f.util.clone(t.props)),i.$offByPrefix(_.get().$PROPS_EVENT_PREFIX),k(i,t.events),i.$update(),y.UPDATE);else{var s=""+(h.prefixs.component||"")+t.node;t.el=f.dom.createElement(s,r);try{t.el.$root=t.el.attachShadow({mode:"closed"})}catch(t){throw new Error("Component["+s+"] is not valid, the name must be like [xx-xx]")}k(i=new(_.get())(t.componentOptions,{props:f.util.clone(t.props),context:n,componentName:t.node}),t.events),i.$mount(t.el.$root),o=y.ADD}return t.componentInstance=i,{type:o,vnode:t}}function P(t,e,o){var i={};return f.util.map(t.events||{},function(n,t){i[t]=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];o.$invoke.apply(o,c([n],t))}}),{type:e.el?f.util.same(t.props,e.props)?(t.el=e.el,y.NONE):(t.el=f.dom.updateElement(e.el,t.props,event),y.UPDATE):(t.el=f.dom.createElement(t.node,t.props,i),y.ADD),vnode:t}}function b(t){return!!t&&(t.componentInstance&&t.componentInstance.$destroy(),f.dom.remove(t.el),t.el=null,t)}function w(s,t,c){var e,n,o,a=0,l=(e=(null==t?void 0:t.children)||[],n=e[0],o={},n&&null!=n.key?(e.forEach(function(t){o[t.key]=t}),o):e.slice(0));s.el.$$fc=0,f.util.map(s.children,function(t,e){var n,o,i,r=(n=l,o=t.key||e,i=n[o],n[o]=null,i);switch(D(t,r,c).type){case y.BATCH:return a+=t.el.$$fc,f.dom.insert(s.el,t.el,a),void(a+=t.el.childNodes.length);case y.DEL:return void b(r);case y.ADD:f.dom.insert(s.el,t.el,a);break;default:s.el.$$fc++}a++}),f.util.map(l,b)}function D(t,e,n){var o,i,r,s,c;void 0===e&&(e={});do{if(t.componentOptions)o=O(t,e,n),t.componentInstance.$children=t.children;else if(t.node)o=P(t,e,n);else{if(t.isComment){s=t,o={type:(c=e).el?(s.el=c.el,y.NONE):(s.el=f.dom.createComment(s.text),y.ADD),vnode:s};break}if(t.text){i=t,o={type:(r=e).el?(i.el=r.el,i.text!=r.text&&(i.el.textContent=i.text),y.UPDATE):(i.el=f.dom.createText(i.text),y.ADD),vnode:i};break}if(t==l){o={vnode:e,type:y.DEL};break}o=!t.el&&t.children?(t.el=f.dom.fragment(),{vnode:t,type:y.BATCH}):{vnode:t,type:y.NONE}}w(t,e,n)}while(0);return o}var N={},T=f.util.throttle(function(){this.$forceUpdate()},0),A=function(o){function i(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=o.call(this)||this;return n.$mounted=!1,n.$destroyed=!1,n.$options=new E(t),n.$render=n.$options.render,n.$propsData=e.props||{},n.$context=e.context,n.$componentName=e.componentName,n.$componentId=e.componentId?e.componentId:i.$$id++,n._init(),n}return function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(i,o),i.prototype._init=function(){this._injectHooks(),f.util.proxy(this,s(s({},this.$options.props),this.$options.methods),this.$get),"function"==typeof this.$options.data?this.$data=this.$options.data.call(this):this.$data=this.$options.data,f.util.proxy(this,this.$data,this.$get,this.$set),f.util.proxy(this,this.$options.computed,this.$get),this.$emit("hook:created")},Object.defineProperty(i.prototype,"$methods",{get:function(){return this.$options.methods},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"$components",{get:function(){return s(s({},N),this.$options.components)},enumerable:!0,configurable:!0}),i.prototype.$set=function(t,e){if(t in this.$data&&e!==this.$data[t]){var n=this.$data[t];this.$data[t]=e,this._invokeWatch(t,e,n),this.$update()}},i.prototype.$get=function(t,e){var n,o,i,r;return this.$options.computed[t]?this.$options.computed[t].call(this):null!==(r=null!==(i=null!==(o=null!==(n=this.$methods[t])&&void 0!==n?n:this.$propsData[t])&&void 0!==o?o:this.$data[t])&&void 0!==i?i:this.$options.props[t])&&void 0!==r?r:e},i.prototype.$setPropsData=function(t){var o=this;f.util.map(t,function(t,e){var n=o.$propsData[e];e in o.$options.props&&n!==t&&o._invokeWatch(e,o.$propsData[e]=t,n)}),this.$update()},i.prototype._injectHooks=function(){var n=this;f.util.map(this.$options.lifetimes,function(t,e){return n.$on("hook:"+e,t)})},i.prototype.$emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];o.prototype.$emit.apply(this,c([t],e)),o.prototype.$emit.apply(this,c([""+i.$PROPS_EVENT_PREFIX+t],e))},i.prototype.$invoke=function(t){for(var e,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return(e=this[t]).call.apply(e,c([this],n))},i.prototype._invokeWatch=function(t,e,n){var o=this.$options.watch[t];o&&o.call(this,e,n)},i.prototype.$update=function(){T.call(this)},i.prototype.$forceUpdate=function(){if(!this.$mounted||this.$destroyed)return!1;this._render(),this.$emit("hook:updated"),this.$emit("hook:$nextTick")},i.prototype.$nextTick=function(t){this.$once("hook:$nextTick",t)},i.prototype._render=function(){var t=this.$render.call(this);if(!t)return!1;this._mountElement&&(t={el:this._mountElement,children:[t]}),this._patch(t)},i.prototype._patch=function(t){var e,n;this.$vnode=(e=t,void 0===(n=this.$vnode)&&(n={}),D(e,n,this).vnode),this.$el=this.$vnode.el},i.prototype.$mount=function(t){this.$mounted||(t&&(this._mountElement=t),this._render(),this.$mounted=!0,this.$emit("hook:mounted"),this.$emit("hook:$nextTick"),f.dom.injectStyle(this.$el,this.$options.style))},i.prototype.$destroy=function(){this.$destroyed=!0,this.$emit("hook:destroyed")},i.register=function(t,e){return e?N[t]=e:N[t]},i.$$id=0,i.$PROPS_EVENT_PREFIX="PROPS_EVENT:",i}(n);_.set(A),t.Pizza=A,t.PizzaContructor=_,t.config=h,t.default=A,t.helper=f,Object.defineProperty(t,"__esModule",{value:!0})});


/***/ }),

/***/ "../lib/mini/backend/bootstrap.js":
/*!****************************************!*\
  !*** ../lib/mini/backend/bootstrap.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support */ "../lib/mini/backend/support/index.js");


let _;

_support__WEBPACK_IMPORTED_MODULE_0__["default"].getApp = () => _;

/* harmony default export */ __webpack_exports__["default"] = ((app) => {
  _ = app;
  _.onLaunch && _.onLaunch();
});

/***/ }),

/***/ "../lib/mini/backend/class.js":
/*!************************************!*\
  !*** ../lib/mini/backend/class.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "../lib/mini/base.js");
/* harmony import */ var pizza__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pizza */ "../../pizzajs/dist/pizza.js");
/* harmony import */ var pizza__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pizza__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query */ "../lib/mini/backend/query.js");
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messager */ "../lib/mini/backend/messager.js");





class MiniPizza extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _patch(vnode) {
    this.$vnode = vnode;
    _messager__WEBPACK_IMPORTED_MODULE_3__["default"].send(this.$mounted ? 'UPDATE' : 'MOUNT', {
      id: this.$componentId,
      vnode,
    });
  }

  $query() {
    if (!this.$queryInstance) {
      this.$queryInstance = new _query__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    }
    
    return this.$queryInstance;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (pizza__WEBPACK_IMPORTED_MODULE_1__["PizzaContructor"].set(MiniPizza));

/***/ }),

/***/ "../lib/mini/backend/components/index.js":
/*!***********************************************!*\
  !*** ../lib/mini/backend/components/index.js ***!
  \***********************************************/
/*! exports provided: install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var _scroll_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-view */ "../lib/mini/backend/components/scroll-view/index.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper */ "../lib/mini/backend/components/swiper/index.js");
/* harmony import */ var _swiper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiper-item */ "../lib/mini/backend/components/swiper-item/index.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ "../lib/mini/backend/components/page/index.js");
/* harmony import */ var _navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigator */ "../lib/mini/backend/components/navigator/index.js");






const install = (Pizza) => {
  Pizza.register('scroll-view', _scroll_view__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Pizza.register('swiper', _swiper__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Pizza.register('swiper-item', _swiper_item__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Pizza.register('page', _page__WEBPACK_IMPORTED_MODULE_3__["default"]);
  Pizza.register('navigator', _navigator__WEBPACK_IMPORTED_MODULE_4__["default"]);
};


/***/ }),

/***/ "../lib/mini/backend/components/navigator/index.js":
/*!*********************************************************!*\
  !*** ../lib/mini/backend/components/navigator/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_paml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.paml */ "../lib/mini/backend/components/navigator/index.paml");


/* harmony default export */ __webpack_exports__["default"] = ({
  template: _index_paml__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    url: null
  },
  methods: {
    onClick() {
      this.url && mini.navigator.push(this.url);
    }
  }
});

/***/ }),

/***/ "../lib/mini/backend/components/navigator/index.paml":
/*!***********************************************************!*\
  !*** ../lib/mini/backend/components/navigator/index.paml ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a href=\"javascript:\" @click=\"onClick\">\n  <slot></slot>\n</a>");

/***/ }),

/***/ "../lib/mini/backend/components/page/index.js":
/*!****************************************************!*\
  !*** ../lib/mini/backend/components/page/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  template: '<slot></slot>'
});

/***/ }),

/***/ "../lib/mini/backend/components/scroll-view/index.js":
/*!***********************************************************!*\
  !*** ../lib/mini/backend/components/scroll-view/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_paml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.paml */ "../lib/mini/backend/components/scroll-view/index.paml");
/* harmony import */ var raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.pass */ "../node_modules/raw-loader/dist/cjs.js!../lib/mini/backend/components/scroll-view/index.pass");



/* harmony default export */ __webpack_exports__["default"] = ({
  template: _index_paml__WEBPACK_IMPORTED_MODULE_0__["default"],
  style: raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_1__["default"],

  props: {
    style: ''
  },

  methods: {
    onScroll(e) {
    }
  }
});

/***/ }),

/***/ "../lib/mini/backend/components/scroll-view/index.paml":
/*!*************************************************************!*\
  !*** ../lib/mini/backend/components/scroll-view/index.paml ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"scroll-view\" @scroll=\"onScroll\" :style=\"style\">\n  <slot></slot>\n</div>");

/***/ }),

/***/ "../lib/mini/backend/components/swiper-item/index.js":
/*!***********************************************************!*\
  !*** ../lib/mini/backend/components/swiper-item/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./index.pass */ "../node_modules/raw-loader/dist/cjs.js!../lib/mini/backend/components/swiper-item/index.pass");


/* harmony default export */ __webpack_exports__["default"] = ({
  style: raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_0__["default"],
  template: '<slot></slot>'
});

/***/ }),

/***/ "../lib/mini/backend/components/swiper/index.js":
/*!******************************************************!*\
  !*** ../lib/mini/backend/components/swiper/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./index.pass */ "../node_modules/raw-loader/dist/cjs.js!../lib/mini/backend/components/swiper/index.pass");
/* harmony import */ var _index_paml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.paml */ "../lib/mini/backend/components/swiper/index.paml");



/* harmony default export */ __webpack_exports__["default"] = ({
  style: raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_0__["default"],
  template: _index_paml__WEBPACK_IMPORTED_MODULE_1__["default"],

  props: {
    direction: 'horizontal'
  },

  data: {
    index: 0,
    animating: false,
    innerTransformStyle: ''
  },

  computed: {
    isVertical() {
      return this.direction != 'horizontal';
    },

    wh() {
      return this.isVertical ? 'height' : 'width';
    },

    xy() {
      return this.isVertical ? 'pageY' : 'pageX';
    }
  },

  lifetimes: {
    mounted() {
      this.pos = 0;
      this.perScreenTranslate = 0;
      this.count = 0;
    }
  },

  methods: {
    onTouchStart(e) {
      if (this.animating) {
        return ;
      }

      this.touch = e.touches[0];
      this.$query().selectAll('.swiper, .swiper-inner').getBoundingClientRect().then((data) => {
        this.perScreenTranslate = data[0][this.wh];
        this.count = Math.ceil(data[1][this.wh] / data[0][this.wh]);
      });
    },

    onTouchMove(e) {
      if (!this.touch) return false;

      this.nowPos = e.touches[0][this.xy] - this.touch[this.xy];
      this.setPos(this.nowPos + this.pos);
    },

    onTouchEnd() {
      if (!this.touch) return false;
      this.touch = null;
      this.pos = this.nowPos + this.pos;
      let i = this.pos / this.perScreenTranslate;
      this.animateTo(this.pos > 0 ? 0 : Math.round(Math.abs(i)));
    },

    onTransitionEnd() {
      this.animating = false;
    },

    animateTo(i) {
      this.index = Math.max(Math.min(i, this.count - 1), 0);
      this.animating = true;
      this.setPos(this.pos = -this.perScreenTranslate * this.index);
    },

    setPos(pos) {
      this.innerTransformStyle = `transform: translate3d(${this.isVertical ? 0 : pos}px, ${this.isVertical ? pos : 0}px, 0px)`;
    }
  },
});

/***/ }),

/***/ "../lib/mini/backend/components/swiper/index.paml":
/*!********************************************************!*\
  !*** ../lib/mini/backend/components/swiper/index.paml ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div :class=\"'swiper swiper-' + direction + (animating ? ' swiper-animation' : '')\">\n  <div class=\"swiper-inner\" :style=\"innerTransformStyle\" @touchstart=\"onTouchStart\" @touchmove=\"onTouchMove\" @touchend=\"onTouchEnd\" @webkitTransitionEnd=\"onTransitionEnd\">\n    <slot></slot>\n  </div>\n</div>");

/***/ }),

/***/ "../lib/mini/backend/index.js":
/*!************************************!*\
  !*** ../lib/mini/backend/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support */ "../lib/mini/backend/support/index.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "../lib/mini/backend/class.js");
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messager */ "../lib/mini/backend/messager.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "../lib/mini/backend/bootstrap.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "../lib/mini/backend/components/index.js");
/* harmony import */ var app_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app */ "./app.js");







let currentPageOptions;

Object(_components__WEBPACK_IMPORTED_MODULE_4__["install"])(_class__WEBPACK_IMPORTED_MODULE_1__["default"]);

_messager__WEBPACK_IMPORTED_MODULE_2__["default"]
  .recevie('PAGE_LOADED', (data, callback) => {
    callback(currentPageOptions = app_app__WEBPACK_IMPORTED_MODULE_5__["Pages"][data]);
  })
  .recevie('CLIENT_CREATED', (data) => {
    let context = data.context ? _class__WEBPACK_IMPORTED_MODULE_1__["default"].instance(data.context) : null;
    let componentOptions = !context ? currentPageOptions : context.$components[data.component];
    new _class__WEBPACK_IMPORTED_MODULE_1__["default"](componentOptions, {
      context,
      props: data.props,
      componentName: data.component,
      componentId: data.id
    }).$mount();
  })
  .recevie('CLIENT_INVOKE_UPDATE', (data) => {
    let instance = _class__WEBPACK_IMPORTED_MODULE_1__["default"].instance(data.id);
    instance.$setPropsData(data.props);
    instance.$update();
  })
  .recevie('CLIENT_INVOKE', (data) => {
    _class__WEBPACK_IMPORTED_MODULE_1__["default"].instance(data.id).$invoke(data.method, ...data.args);
  });

Object(_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"])(app_app__WEBPACK_IMPORTED_MODULE_5__["default"]);

/***/ }),

/***/ "../lib/mini/backend/messager.js":
/*!***************************************!*\
  !*** ../lib/mini/backend/messager.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../messager */ "../lib/mini/messager.js");
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support */ "../lib/mini/backend/support/index.js");


/* harmony default export */ __webpack_exports__["default"] = (new _messager__WEBPACK_IMPORTED_MODULE_0__["default"](_support__WEBPACK_IMPORTED_MODULE_1__["self"]));

/***/ }),

/***/ "../lib/mini/backend/query.js":
/*!************************************!*\
  !*** ../lib/mini/backend/query.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Query; });
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messager */ "../lib/mini/backend/messager.js");


class Query {
  constructor(context) {
    this.context = context;
    this.selector = null;
    this.selectorAll = null;
  }

  select(selector) {
    this.selector = selector;
    this.selectorAll = null;
    return this;
  }

  selectAll(selector) {
    this.selector = null;
    this.selectorAll = selector;
    return this;
  }

  getBoundingClientRect() {
    return this._invoke('getBoundingClientRect');
  }

  screen() {
    this.selectorAll = this.selector = null;
    return this._invoke('screen');
  }

  _invoke(method, args) {
    return new Promise((resolve, reject) => {
      _messager__WEBPACK_IMPORTED_MODULE_0__["default"].send('QUERY', {
        id: this.context.$componentId,
        selector: this.selector,
        selectorAll: this.selectorAll,
        method: method,
        args
      }, (data) => {
        data.status == 1 ? resolve(data.data): reject();
      });
    });
  }
}

/***/ }),

/***/ "../lib/mini/backend/support/index.js":
/*!********************************************!*\
  !*** ../lib/mini/backend/support/index.js ***!
  \********************************************/
/*! exports provided: self, global, mini */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return _; });
/* harmony import */ var _self__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./self */ "../lib/mini/backend/support/self.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "self", function() { return _self__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _mini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mini */ "../lib/mini/backend/support/mini/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mini", function() { return _mini__WEBPACK_IMPORTED_MODULE_1__["default"]; });




let _;

(function() {
  _ = typeof global == 'undefined' ? this : global;
  _.mini = _mini__WEBPACK_IMPORTED_MODULE_1__["default"];
})();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../lib/mini/backend/support/mini/index.js":
/*!*************************************************!*\
  !*** ../lib/mini/backend/support/mini/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigator */ "../lib/mini/backend/support/mini/navigator.js");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast */ "../lib/mini/backend/support/mini/toast.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  navigator: _navigator__WEBPACK_IMPORTED_MODULE_0__["default"],
  toast: _toast__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "../lib/mini/backend/support/mini/navigator.js":
/*!*****************************************************!*\
  !*** ../lib/mini/backend/support/mini/navigator.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  push(url) {
    console.log('call navigator push ' + url);
  },

  back() {

  }
});

/***/ }),

/***/ "../lib/mini/backend/support/mini/toast.js":
/*!*************************************************!*\
  !*** ../lib/mini/backend/support/mini/toast.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  show(message, duration = 1000) {
    _JsBridgeCallHandler({
      method: 'mini.toast.show',
      args: {
        message,
        duration
      }
    });
  }
});

/***/ }),

/***/ "../lib/mini/backend/support/self.js":
/*!*******************************************!*\
  !*** ../lib/mini/backend/support/self.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let f;

if (typeof self == 'undefined') {
  (function() {
    this.self = {
      addEventListener(type, fn) {
        typeo == 'message' && (f = fn);
      },
  
      postMessage(data) {
        _JsBridgeCallHandler({
          method: 'postMessage',
          args: data,
        });
      },
  
      __triggerMessageFn(data) {
        f.call(this, {
          event: 'message',
          data
        });
      }
    };
  })();
}

/* harmony default export */ __webpack_exports__["default"] = (self);

/***/ }),

/***/ "../lib/mini/base.js":
/*!***************************!*\
  !*** ../lib/mini/base.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pizza__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pizza */ "../../pizzajs/dist/pizza.js");
/* harmony import */ var pizza__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pizza__WEBPACK_IMPORTED_MODULE_0__);


let INSTANCES = {};

/* harmony default export */ __webpack_exports__["default"] = (class extends pizza__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor(componentOptions, options = {}) {
    super(componentOptions, options);
    INSTANCES[this.$componentId] = this;
  }

  static instance(id) {
    return INSTANCES[id];
  }
});

/***/ }),

/***/ "../lib/mini/messager.js":
/*!*******************************!*\
  !*** ../lib/mini/messager.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class {
  constructor(messager) {
    this.messager = messager;
    this.listeners = {};
    this.messager.addEventListener('message', (event) => {
      let {id, type, data} = event.data;
      data = data == null ? data : JSON.parse(data);
      this.listeners[type] && this.listeners[type](data, this.send.bind(this, id));
    });
  }

  recevie(type, fn, once) {
    this.listeners[type] = (...args) => {
      fn(...args);
      once && delete this.listeners[type];
    };

    return this;
  }

  send(type, data, callback) {
    let id = `${Math.random()}#${Math.random()}`;
    this.messager.postMessage({
      id,
      data: data ? JSON.stringify(data) : null,
      type
    }, void 0);
    callback && this.recevie(id, callback, true);
  }
});

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!../lib/mini/backend/components/scroll-view/index.pass":
/*!****************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!../lib/mini/backend/components/scroll-view/index.pass ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-view {\n  height: 100%;\n  overflow: auto;\n}\n\n:host {\n  display: block;\n  max-height: 100vh;\n}\n\na, b, c {\n  font-size: 22px;\n}");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!../lib/mini/backend/components/swiper-item/index.pass":
/*!****************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!../lib/mini/backend/components/swiper-item/index.pass ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100vw;\n  height: 100%;\n  display: block;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!../lib/mini/backend/components/swiper/index.pass":
/*!***********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!../lib/mini/backend/components/swiper/index.pass ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swiper {\n  width: 100vw;\n  height: 100%;\n  overflow: hidden;\n}\n\n.swiper-horizontal, .swiper-inner {\n  display: flex;\n}\n\n.swiper-horizontal .swiper-inner {\n  height: 100%;\n}\n\n.swiper-vertical .swiper-inner {\n  flex-direction: column;\n  width: 100%;\n}\n\n.swiper-animation {\n  overflow: hidden;\n}\n\n.swiper-animation .swiper-inner {\n  transition: transform 600ms ease-in;\n}\n\n:host {\n  max-height: 100%;\n  display: block;\n}");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/index/components/banner/index.pass":
/*!*****************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/index/components/banner/index.pass ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/index/index.pass":
/*!***********************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/index/index.pass ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("pizza-page {\n  font-size: 24px;\n  color: blue;\n}\n\npizza-banner {\n  flex: 1;\n}");

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! exports provided: default, Pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pages", function() { return Pages; });
/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index/index */ "./pages/index/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  globalData: {},

  onLaunch() {
    this.globalData = {
      message: 'hello, world'
    }
  }
});
const Pages = {
  'pages/index/index': _pages_index_index__WEBPACK_IMPORTED_MODULE_0__["default"]
};
  

/***/ }),

/***/ "./data/users.js":
/*!***********************!*\
  !*** ./data/users.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var arr = [
  {
    name: 'A',
    fav: ['eat', 'drink']
  },

  {
    name: 'B',
    fav: ['eat', 'play']
  }
];

let _ = [];

for (let i = 0; i < 2; i++) {
  arr.forEach((item, j) => {
    _.push({
      name: item.name,
      fav: item.fav,
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (_);

/***/ }),

/***/ "./pages/index/components/banner/index.js":
/*!************************************************!*\
  !*** ./pages/index/components/banner/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_paml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.paml */ "./pages/index/components/banner/index.paml");
/* harmony import */ var _index_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.json */ "./pages/index/components/banner/index.json");
var _index_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./index.json */ "./pages/index/components/banner/index.json", 1);
/* harmony import */ var raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./index.pass */ "../node_modules/raw-loader/dist/cjs.js!./pages/index/components/banner/index.pass");




  

let __$$component =  {
  data() {
    return {
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586432186139&di=76509761988388611631741afacafa3b&imgtype=0&src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F161203%2F3-1612030ZG5.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586432186139&di=3a5ab5857bc955aa87ca66dee8663e53&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181118%2Fe553a90bb9fa4574822c5de49f08d3b2.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586432186139&di=b4a948e2d461c75aec19aff4069e7756&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201508%2F10%2F20150810150356_hnves.jpeg'
      ]
    };
  },

  lifetimes: {
    mounted() {

    }
  },

  methods: {
    onTouchStart() {
      
    }
  }
};
__$$component.template = _index_paml__WEBPACK_IMPORTED_MODULE_0__["default"];
__$$component.style = typeof raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_2__["default"] == 'undefined' ? null : raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_2__["default"];
__$$component.components = {};
__$$component.configs = _index_json__WEBPACK_IMPORTED_MODULE_1__;
/* harmony default export */ __webpack_exports__["default"] = (__$$component);
  

/***/ }),

/***/ "./pages/index/components/banner/index.json":
/*!**************************************************!*\
  !*** ./pages/index/components/banner/index.json ***!
  \**************************************************/
/*! exports provided: component, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"component\":true}");

/***/ }),

/***/ "./pages/index/components/banner/index.paml":
/*!**************************************************!*\
  !*** ./pages/index/components/banner/index.paml ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div>水平滚动</div>\n  <swiper style=\"height: 200px\" direction=\"horizontal\">\n    <swiper-item v-for=\"images\">\n      <img :src=\"$item\" style=\"width: 100vw; height: 200px;\" />\n    </swiper-item>\n  </swiper>\n\n  <div>垂直滚动</div>\n  <div @touchstart.prevent=\"onTouchStart\">\n    <swiper style=\"height: 200px\" direction=\"vertical\">\n      <swiper-item v-for=\"images\">\n        <img :src=\"$item\" style=\"width: 100vw; height: 200px;\" />\n      </swiper-item>\n    </swiper>\n  </div>\n</div>");

/***/ }),

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_paml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.paml */ "./pages/index/index.paml");
/* harmony import */ var _index_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.json */ "./pages/index/index.json");
var _index_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./index.json */ "./pages/index/index.json", 1);
/* harmony import */ var _components_banner_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/banner/index */ "./pages/index/components/banner/index.js");
/* harmony import */ var raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./index.pass */ "../node_modules/raw-loader/dist/cjs.js!./pages/index/index.pass");
/* harmony import */ var _data_users_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/data/users.js */ "./data/users.js");




  




let __$$component =  {
  data() {
    return {
      users: _data_users_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    };  
  },

  methods: {
    onClick(e) {
      console.log(getApp().globalData);
    }
  }
};;
__$$component.template = _index_paml__WEBPACK_IMPORTED_MODULE_0__["default"];
__$$component.style = typeof raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_3__["default"] == 'undefined' ? null : raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_3__["default"];
__$$component.components = {'banner': _components_banner_index__WEBPACK_IMPORTED_MODULE_2__["default"]};
__$$component.configs = _index_json__WEBPACK_IMPORTED_MODULE_1__;
/* harmony default export */ __webpack_exports__["default"] = (__$$component);
  

/***/ }),

/***/ "./pages/index/index.json":
/*!********************************!*\
  !*** ./pages/index/index.json ***!
  \********************************/
/*! exports provided: usingComponents, navigationBarTitleText, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"usingComponents\":{\"banner\":\"./components/banner/index\"},\"navigationBarTitleText\":\"购物车\"}");

/***/ }),

/***/ "./pages/index/index.paml":
/*!********************************!*\
  !*** ./pages/index/index.paml ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page style=\"display: flex; flex-direction: column; height: 100%;\">\n  <scroll-view style=\"height: 100%;\">\n    <scroll-view style=\"height: 300px;\">\n      <scroll-view style=\"height: 200px; background: red;\">\n        <div style=\"height: 1000px;\">\n          内层scroll-view\n        </div>\n      </scroll-view>\n  \n      <div style=\"height: 1000px; background: green;\" @click=\"onClick\">\n        外层\n      </div>\n    </scroll-view>\n  \n    <navigator url=\"https://www.baidu.com\">点击跳转</navigator>\n\n    <banner></banner>\n  </scroll-view>\n</page>");

/***/ })

/******/ })));
//# sourceMappingURL=backend.js.map