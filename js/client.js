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
/******/ 	return __webpack_require__(__webpack_require__.s = "../lib/mini/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../pizzajs/dist/pizza.js":
/*!********************************************************!*\
  !*** /Users/zhanghao/Code/pizza/pizzajs/dist/pizza.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports) :
    undefined;
}(this, (function (exports) { 'use strict';

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
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var util = {
        proxy: function (context, object, getter, setter) {
            var _this = this;
            if (typeof object == 'object') {
                this.keys(object).forEach(function (key) { return _this.proxy(context, key, getter, setter); });
            }
            else {
                Object.defineProperty(context, object, {
                    get: function () { return getter.call(context, object); },
                    set: setter ? function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return setter.call.apply(setter, __spreadArrays([context, object], args));
                    } : function () { }
                });
            }
        },
        throttle: function (fn, wait) {
            var timer;
            return function () {
                var _this = this;
                var args = arguments;
                if (timer == null) {
                    timer = setTimeout(function () {
                        fn.apply(_this, args);
                        timer = null;
                    }, wait);
                }
            };
        },
        obj2str: function (obj) {
            var _this = this;
            if (typeof obj == 'object') {
                return '{' + Object.keys(obj).map(function (key) { return "\"" + key + "\": " + _this.obj2str(obj[key]); }).join(',') + '}';
            }
            else {
                return obj;
            }
        },
        map: function (obj, fn) {
            if (obj === void 0) { obj = []; }
            if (typeof obj == 'number') {
                var _ = [], i = 0;
                while (i++ < obj)
                    _.push(i);
                return _;
            }
            else if ('length' in obj) {
                return [].map.call(obj, fn);
            }
            else {
                return this.keys(obj).map(function (key) {
                    return fn(obj[key], key);
                });
            }
        },
        pick: function (obj, keys) {
            if (obj === void 0) { obj = {}; }
            var _ = {};
            keys.forEach(function (key) {
                key in obj && (_[key] = obj[key]);
            });
            return _;
        },
        keys: function (object) {
            if (object === void 0) { object = {}; }
            return Object.keys(object);
        },
        camel2ul: function (str) {
            return str.replace(/[A-Z]/g, function (all, index) { return (index == 0 ? '' : '-') + all.toLowerCase(); });
        },
        camelKeys2ul: function (object) {
            if (object === void 0) { object = {}; }
            var _ = {};
            for (var key in object) {
                _[this.camel2ul(key)] = object[key];
            }
            return _;
        },
        same: function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
        },
        clone: function (obj) {
            return JSON.parse(JSON.stringify(obj));
        }
    };

    var ATTR_MAPS = {
        'class': 'className',
        'dataset': '$dataset',
    };
    var dom = {
        createElement: function (node) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return this.updateElement.apply(this, __spreadArrays([document.createElement(node)], args));
        },
        updateElement: function (node, attrs, listeners) {
            var _this = this;
            //@ts-ignore
            attrs && util.map(attrs, function (val, key) {
                _this.setAttr(node, key, val);
            });
            listeners && util.map(listeners, function (fn, key) { return _this.on(node, key, fn); });
            return node;
        },
        setAttr: function (node, name, value) {
            name = ATTR_MAPS[name] || name;
            node[name] = value;
        },
        on: function (node, name, fn) {
            var $$listeners = node['$$listeners'] || {};
            var _a = name.split('.'), event = _a[0], action = _a[1];
            $$listeners[event] = fn;
            node.addEventListener(event, function (e) {
                e.dataset = node['$dataset'];
                $$listeners[event] && $$listeners[event].call(node, e);
                action == 'stop' ? e.stopPropagation() : action == 'prevent' ? e.preventDefault() : null;
            }, false);
            node['$$listeners'] = $$listeners;
        },
        off: function (node, name) {
            var $$listeners = node['$$listeners'] || {};
            delete $$listeners[name];
            node['$$listeners'] = $$listeners;
        },
        fragment: function () {
            return document.createDocumentFragment();
        },
        createText: function (text) {
            return document.createTextNode(text);
        },
        createComment: function (comment) {
            if (comment === void 0) { comment = ''; }
            return document.createComment(comment);
        },
        insert: function (parent, el, index) {
            if (index < 0)
                return false;
            var children = parent.childNodes;
            return children.length == 0 || children.length < index ? parent.appendChild(el) : parent.insertBefore(el, children[index]);
        },
        remove: function (el) {
            el && el.remove();
        }
    };

    var helper = {
        util: util,
        dom: dom,
    };

    var EventEmitter = /** @class */ (function () {
        function EventEmitter() {
            this.$events = {};
        }
        EventEmitter.prototype.$on = function (name, fn) {
            var _a;
            var events = (_a = this.$events[name]) !== null && _a !== void 0 ? _a : [];
            events.push(fn);
            this.$events[name] = events;
        };
        EventEmitter.prototype.$emit = function (name) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            (this.$events[name] || []).slice(0).forEach(function (fn) { return fn.call.apply(fn, __spreadArrays([_this], args)); });
        };
        EventEmitter.prototype.$off = function (name, fn) {
            if (!fn) {
                delete this.$events[name];
            }
            else {
                var i = this.$events[name].indexOf(fn);
                i > -1 && this.$events[name].splice(i, 1);
            }
        };
        EventEmitter.prototype.$offByPrefix = function (name) {
            var _this = this;
            helper.util.map(this.$events, function (events, key) {
                key.indexOf(name) == 0 && _this.$off(key);
            });
        };
        EventEmitter.prototype.$once = function (name, fn) {
            var _this = this;
            var f = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                fn.call.apply(fn, __spreadArrays([_this], args));
                _this.$off(name, f);
            };
            this.$on(name, f);
        };
        return EventEmitter;
    }());

    var EMPTY_VNODE = {};

    var Compiler = /** @class */ (function () {
        function Compiler(html) {
            this.now = { children: [] };
            this.html = html;
            this.stack = [this.now];
        }
        Compiler.prototype.analyse = function () {
            if (!this.html)
                return null;
            var match;
            while (match = Compiler.REGEXP.exec(this.html)) {
                if (!this.collect.apply(this, match.slice(1))) {
                    throw new Error("template parsing error, not a valid structure ~\r\n[" + match.index + "]: " + match[0] + "\r\n" + this.html);
                }
            }
            return this.now;
        };
        Compiler.prototype.collect = function (comment, node, props, single, close, text) {
            do {
                if (node) {
                    var vnode = {
                        node: node.toLocaleLowerCase(),
                        props: this.collectAttrs(props),
                        children: [],
                    };
                    !single && this.stack.push(vnode);
                    this.now.children.push(vnode);
                }
                else if (close) {
                    if (close.toLocaleLowerCase() != this.now.node) {
                        break;
                    }
                    else {
                        this.stack.pop();
                    }
                }
                else if (comment) {
                    this.now.children.push({
                        isComment: true,
                        text: comment
                    });
                }
                else if (text.trim()) {
                    this.now.children.push({
                        text: text,
                    });
                }
                this.now = this.stack[this.stack.length - 1];
                return true;
            } while (0);
            return false;
        };
        Compiler.prototype.collectAttrs = function (str) {
            var attrs = {};
            if (str) {
                var match = void 0;
                while (match = Compiler.ATTR_REPEXP.exec(str)) {
                    attrs[match[1]] = match[2] == null ? match[1] : match[2];
                }
            }
            return attrs;
        };
        Compiler.REGEXP = /<!--((?:(?!-->)[\s\S])*?)-->|<([a-z]+(?:(?:-[a-z]+)+)?)(\s[\s\S]+?)?(\s*\/)?>|<\/([a-z]+(?:(?:-[a-z]+)+)?)>|([\s\S]+?)(?=<|$)/ig;
        Compiler.ATTR_REPEXP = /\s*([^\s"=>\/]+)(?:="([^"]+)")?/g;
        return Compiler;
    }());

    var config = {
        logo: 'v',
        prefixs: {
            event: '@',
            bind: ':',
            data: 'data-',
        },
        delimitter: ['{{', '}}']
    };

    function $l(obj, fn) {
        return {
            children: helper.util.map(obj, fn).filter(function (vnode) { return vnode !== EMPTY_VNODE; })
        };
    }
    function $n(node, options, children) {
        var component = this.$components[node];
        return __assign(__assign({ node: node }, options), { children: children, componentOptions: component });
    }
    function $t(text) {
        return {
            text: text
        };
    }
    function $m(comment) {
        return {
            isComment: true,
            text: comment
        };
    }
    function pick(vnode) {
        var logics = {}, events = {}, props = {}, dataset = {};
        for (var key in vnode.props) {
            var val = vnode.props[key];
            if (key.indexOf(config.logo + '-') == 0) {
                logics[key.substr(config.logo.length + 1)] = val;
            }
            else if (key.indexOf(config.prefixs.event) == 0) {
                events[key.substr(config.prefixs.event.length)] = "\"" + val + "\"";
            }
            else if (key.indexOf(config.prefixs.bind) == 0) {
                props[key.substr(config.prefixs.bind.length)] = val;
            }
            else if (key.indexOf(config.prefixs.data) == 0) {
                dataset[key.substr(config.prefixs.data.length)] = val;
            }
            else {
                props[key] = JSON.stringify(val);
            }
        }
        props['dataset'] = dataset;
        return {
            logics: logics,
            events: events,
            props: props,
        };
    }
    function stringify(str, format) {
        if (format === void 0) { format = false; }
        return str
            .replace(/[\s]+/g, ' ')
            .replace(new RegExp(config.delimitter[0], 'g'), "\" + " + (format ? 'JSON.stringify' : '') + "(")
            .replace(new RegExp(config.delimitter[1], 'g'), ') + "');
    }
    function nodeSerialize(vnode) {
        var expression;
        var _a = pick(vnode), logics = _a.logics, events = _a.events, props = _a.props;
        var _for = logics['for'], _if = logics['if'], _elseif = logics['elseif'] || logics['else-if'], _else = logics['else'];
        var index = logics['for-index'] || '$index', item = logics['for-item'] || '$item';
        expression = "_$n(\"" + vnode.node + "\", {\n      " + (_for && logics['key'] ? 'key: ' + logics['key'] + ',' : '') + "\n      props: " + helper.util.obj2str(props) + ",\n      events: " + helper.util.obj2str(events) + ",\n    }, [" + vnode.children.map(function (child, i) { return serialize(child); }) + "])";
        if (_if) {
            expression = _if + " ? " + expression + " : _$e";
        }
        else if (_elseif) {
            expression = " && " + _elseif + " ? " + expression + " : _$e";
        }
        else if (_else) {
            expression = " && " + expression;
        }
        if (_for) {
            expression = "_$l(" + _for + ", function(" + item + ", " + index + ") { return " + expression + "; })";
        }
        return expression;
    }
    function serialize(vnode) {
        var expression;
        if (vnode.node) {
            expression = nodeSerialize(vnode);
        }
        else if (vnode.isComment) {
            expression = "_$m(" + JSON.stringify(vnode.text) + ")";
        }
        else if (vnode.text) {
            expression = "_$t(\"" + stringify(vnode.text, true) + "\")";
        }
        return expression;
    }
    function makeVNodeFn(template, context) {
        if (!template)
            return function () { };
        var compiler = new Compiler(template);
        var data = compiler.analyse();
        compiler = null;
        if (!data || data.children.length == 0) {
            throw new Error("instance must be a root element!\r\n " + template);
        }
        else if (data.children.length > 1) {
            throw new Error("template's root must be only one !\r\n " + template);
        }
        var props = helper.util.keys(context.props);
        var methods = helper.util.keys(context.methods);
        var computed = helper.util.keys(context.computed);
        var datas = helper.util.keys(typeof context.data == 'function' ? context.data.call({}) : (context.data || {}));
        var vars = props.concat(methods, datas, computed).map(function (key) { return key + " = this." + key; }).join(', ');
        return (new Function('_$l', '_$n', '_$t', '_$m', '_$e', "\n    return function() {\n      " + (vars != '' ? "var " + vars + ";" : '') + ";\n      _$n = _$n.bind(this);\n      return " + serialize(data.children[0]) + ";\n    };\n  "))($l, $n, $t, $m, EMPTY_VNODE);
    }

    var Options = /** @class */ (function () {
        function Options(options) {
            this._ = options;
            this.props = options.props || {};
            this.data = options.data || {};
            this.lifetimes = options.lifetimes || {};
            this.methods = options.methods || {};
            this.watch = options.watch || {};
            this.computed = options.computed || {};
            this.style = options.style;
            this.components = options.components = helper.util.camelKeys2ul(options.components);
            this.render = options.render = options.render || makeVNodeFn(options.template, options);
        }
        return Options;
    }());

    var PatchType;
    (function (PatchType) {
        PatchType[PatchType["ADD"] = 0] = "ADD";
        PatchType[PatchType["DEL"] = 1] = "DEL";
        PatchType[PatchType["UPDATE"] = 2] = "UPDATE";
        PatchType[PatchType["BATCH"] = 3] = "BATCH";
        PatchType[PatchType["NONE"] = 4] = "NONE";
    })(PatchType || (PatchType = {}));

    var constructor;
    var contructor = {
        set: function (F) {
            return constructor = F;
        },
        get: function () {
            return constructor;
        }
    };

    function on(instance, events) {
        if (events === void 0) { events = {}; }
        helper.util.map(events, function (event, name) {
            instance.$on("" + contructor.get().$PROPS_EVENT_PREFIX + name, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                this.$invoke.apply(this, __spreadArrays([event], args));
            });
        });
    }
    function patchComponent (now, old, context) {
        var instance = old === null || old === void 0 ? void 0 : old.componentInstance, type;
        var nodeAttrs = helper.util.pick(now.props, ['slot', 'style', 'class']);
        if (!instance) {
            now.el = helper.dom.createElement(config.logo + "-" + now.node, nodeAttrs);
            now.el.$root = now.el.attachShadow({ mode: 'open' });
            instance = new (contructor.get())(now.componentOptions, {
                props: helper.util.clone(now.props),
                context: context,
                componentName: now.node,
            });
            on(instance, now.events);
            instance.$mount(now.el.$root);
            type = PatchType.ADD;
            if (instance.$options.style) {
                var style = document.createElement('style');
                style.textContent = instance.$options.style;
                now.el.$root.appendChild(style);
            }
        }
        else if (!helper.util.same(now.props, instance.$propsData)) {
            now.el = old.el;
            helper.dom.updateElement(now.el, nodeAttrs);
            instance.$setPropsData(helper.util.clone(now.props));
            instance.$offByPrefix(contructor.get().$PROPS_EVENT_PREFIX);
            on(instance, now.events);
            instance.$update();
            type = PatchType.UPDATE;
        }
        else {
            now.el = old.el;
            type = PatchType.NONE;
        }
        now.componentInstance = instance;
        return {
            type: type,
            vnode: now,
        };
    }

    function patchNode (now, old, context) {
        var type;
        var events = {};
        helper.util.map(now.events || {}, function (event, key) {
            events[key] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                context.$invoke.apply(context, __spreadArrays([event], args));
            };
        });
        if (!old.el) {
            now.el = helper.dom.createElement(now.node, now.props, events);
            type = PatchType.ADD;
        }
        else if (!helper.util.same(now.props, old.props)) {
            now.el = helper.dom.updateElement(old.el, now.props, event);
            type = PatchType.UPDATE;
        }
        else {
            now.el = old.el;
            type = PatchType.NONE;
        }
        return {
            type: type,
            vnode: now,
        };
    }

    function patchText (now, old) {
        var type;
        if (old.el) {
            now.el = old.el;
            now.text != old.text && (now.el.textContent = now.text);
            type = PatchType.UPDATE;
        }
        else {
            now.el = helper.dom.createText(now.text);
            type = PatchType.ADD;
        }
        return {
            type: type,
            vnode: now,
        };
    }

    function patchComment (now, old) {
        var type;
        if (!old.el) {
            now.el = helper.dom.createComment(now.text);
            type = PatchType.ADD;
        }
        else {
            now.el = old.el;
            type = PatchType.NONE;
        }
        return {
            type: type,
            vnode: now,
        };
    }

    function del(old) {
        if (!old)
            return false;
        old.componentInstance && old.componentInstance.$destroy();
        helper.dom.remove(old.el);
        old.el = null;
        return old;
    }
    function children2keys(children) {
        var first = children[0], keysChildren = {};
        if (!first || first.key == null)
            return children.slice(0);
        children.forEach(function (child) {
            keysChildren[child.key] = child;
        });
        return keysChildren;
    }
    function pick$1(children, key) {
        var child = children[key];
        children[key] = null;
        return child;
    }
    function patchChildren(now, old, context) {
        var elIndex = 0, oldChildren = children2keys((old === null || old === void 0 ? void 0 : old.children) || []);
        now.el.$$fc = 0;
        helper.util.map(now.children, function (child, i) {
            var oldChild = pick$1(oldChildren, child.key || i);
            var patch = patchVNode(child, oldChild, context);
            switch (patch.type) {
                case PatchType.BATCH:
                    elIndex += child.el.$$fc;
                    helper.dom.insert(now.el, child.el, elIndex);
                    elIndex += child.el.childNodes.length;
                    return;
                case PatchType.DEL:
                    del(oldChild);
                    return;
                case PatchType.ADD:
                    helper.dom.insert(now.el, child.el, elIndex);
                    break;
                default:
                    now.el.$$fc++;
                    break;
            }
            elIndex++;
        });
        helper.util.map(oldChildren, del);
    }
    function patchVNode(now, old, context) {
        if (old === void 0) { old = {}; }
        var patch;
        do {
            if (now.componentOptions) {
                patch = patchComponent(now, old, context);
                now.componentInstance.$children = now.children;
            }
            else if (now.node) {
                patch = patchNode(now, old, context);
            }
            else if (now.isComment) {
                patch = patchComment(now, old);
                break;
            }
            else if (now.text) {
                patch = patchText(now, old);
                break;
            }
            else if (now == EMPTY_VNODE) {
                patch = { vnode: old, type: PatchType.DEL };
                break;
            }
            else if (!now.el && now.children) {
                now.el = helper.dom.fragment();
                patch = { vnode: now, type: PatchType.BATCH };
            }
            else {
                patch = { vnode: now, type: PatchType.NONE };
            }
            patchChildren(now, old, context);
        } while (0);
        return patch;
    }
    function patchVNode$1 (now, old, context) {
        if (old === void 0) { old = {}; }
        return patchVNode(now, old, context).vnode;
    }

    var COMPONENTS = {};
    var $update = helper.util.throttle(function () {
        this.$forceUpdate();
    }, 0);
    var Pizza = /** @class */ (function (_super) {
        __extends(Pizza, _super);
        function Pizza(componentOptions, options) {
            if (componentOptions === void 0) { componentOptions = {}; }
            if (options === void 0) { options = {}; }
            var _this = _super.call(this) || this;
            _this.$mounted = false;
            _this.$destroyed = false;
            _this.$options = new Options(componentOptions);
            _this.$render = _this.$options.render;
            _this.$propsData = options.props || {};
            _this.$context = options.context;
            _this.$componentName = options.componentName;
            _this.$componentId = options.componentId ? options.componentId : Pizza.$$id++;
            _this._init();
            return _this;
        }
        Pizza.prototype._init = function () {
            //inject lifecycles hook
            this._injectHooks();
            //proxy methods and data
            helper.util.proxy(this, __assign(__assign({}, this.$options.props), this.$options.methods), this.$get);
            if (typeof this.$options.data == 'function') {
                this.$data = this.$options.data.call(this);
            }
            else {
                this.$data = this.$options.data;
            }
            helper.util.proxy(this, this.$data, this.$get, this.$set);
            helper.util.proxy(this, this.$options.computed, this.$get);
            this.$emit('hook:created');
        };
        Object.defineProperty(Pizza.prototype, "$methods", {
            get: function () {
                return this.$options.methods;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pizza.prototype, "$components", {
            get: function () {
                return __assign(__assign({}, COMPONENTS), this.$options.components);
            },
            enumerable: true,
            configurable: true
        });
        Pizza.prototype.$set = function (key, value) {
            if (!(key in this.$data) || value === this.$data[key])
                return;
            var old = this.$data[key];
            this.$data[key] = value;
            this._invokeWatch(key, value, old);
            this.$update();
        };
        Pizza.prototype.$get = function (key, _default) {
            var _a, _b, _c, _d;
            if (this.$options.computed[key]) {
                return this.$options.computed[key].call(this);
            }
            return (_d = (_c = (_b = (_a = this.$methods[key]) !== null && _a !== void 0 ? _a : this.$propsData[key]) !== null && _b !== void 0 ? _b : this.$data[key]) !== null && _c !== void 0 ? _c : this.$options.props[key]) !== null && _d !== void 0 ? _d : _default;
        };
        Pizza.prototype.$setPropsData = function (data) {
            var _this = this;
            helper.util.map(data, function (val, key) {
                var old = _this.$propsData[key];
                key in _this.$options.props && old !== val && _this._invokeWatch(key, _this.$propsData[key] = val, old);
            });
            this.$update();
        };
        Pizza.prototype._injectHooks = function () {
            var _this = this;
            helper.util.map(this.$options.lifetimes, function (fn, lifetime) { return _this.$on("hook:" + lifetime, fn); });
        };
        Pizza.prototype.$emit = function (name) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            _super.prototype.$emit.apply(this, __spreadArrays([name], args));
            _super.prototype.$emit.apply(this, __spreadArrays(["" + Pizza.$PROPS_EVENT_PREFIX + name], args));
        };
        Pizza.prototype.$invoke = function (method) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return (_a = this[method]).call.apply(_a, __spreadArrays([this], args));
        };
        Pizza.prototype._invokeWatch = function (key, now, old) {
            var fn = this.$options.watch[key];
            fn && fn.call(this, now, old);
        };
        Pizza.prototype.$update = function () {
            $update.call(this);
        };
        Pizza.prototype.$forceUpdate = function () {
            if (!this.$mounted || this.$destroyed)
                return false;
            this._render();
            this.$emit('hook:updated');
            this.$emit('hook:$nextTick');
        };
        Pizza.prototype.$nextTick = function (fn) {
            this.$once('hook:$nextTick', fn);
        };
        Pizza.prototype._render = function () {
            var vnode = this.$render.call(this);
            if (!vnode)
                return false;
            if (this._mountElement) {
                vnode = { el: this._mountElement, children: [vnode] };
            }
            this._patch(vnode);
        };
        Pizza.prototype._patch = function (vnode) {
            this.$vnode = patchVNode$1(vnode, this.$vnode, this);
            this.$el = this.$vnode.el;
        };
        Pizza.prototype.$mount = function (element) {
            if (this.$mounted)
                return;
            if (element) {
                this._mountElement = element;
            }
            this._render();
            this.$mounted = true;
            this.$emit('hook:mounted');
            this.$emit('hook:$nextTick');
        };
        Pizza.prototype.$destroy = function () {
            this.$destroyed = true;
            this.$emit('hook:destroyed');
        };
        Pizza.register = function (name, options) {
            if (!options)
                return COMPONENTS[name];
            return COMPONENTS[name] = options;
        };
        Pizza.$$id = 0;
        Pizza.$PROPS_EVENT_PREFIX = 'PROPS_EVENT:';
        return Pizza;
    }(EventEmitter));

    contructor.set(Pizza);

    exports.Pizza = Pizza;
    exports.PizzaContructor = contructor;
    exports.default = Pizza;
    exports.helper = helper;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


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

/***/ "../lib/mini/client/class.js":
/*!***********************************!*\
  !*** ../lib/mini/client/class.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "../lib/mini/base.js");
/* harmony import */ var pizza__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pizza */ "../../pizzajs/dist/pizza.js");
/* harmony import */ var pizza__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pizza__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messager */ "../lib/mini/client/messager.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ "../lib/mini/client/helper.js");





const $update = pizza__WEBPACK_IMPORTED_MODULE_1__["helper"].util.throttle(function () {
  _messager__WEBPACK_IMPORTED_MODULE_2__["default"].send('CLIENT_INVOKE_UPDATE', {
    id: this.$componentId,
    props: this.$propsData,
    context: this.$context ? this.$context.$componentId : null
  });
}, 0);

class MiniClientPizza extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(componentOptions, options = {}) {
    super(componentOptions, options);
    _messager__WEBPACK_IMPORTED_MODULE_2__["default"].send('CLIENT_CREATED', {
      props: this.$propsData,
      context: this.$context ? this.$context.$componentId : null,
      component: this.$componentName,
      id: this.$componentId,
    });
  }

  $invoke(method, argv1, ...args) {
    if (/\[object \w*Event\]/.test(Object.prototype.toString.call(argv1))) {
      argv1 = _helper__WEBPACK_IMPORTED_MODULE_3__["default"].formatEvent(argv1);
    }

    _messager__WEBPACK_IMPORTED_MODULE_2__["default"].send('CLIENT_INVOKE', {
      id: this.$componentId,
      method,
      args: [argv1, ...args]
    });
  }

  $update() {
    $update.call(this);
  }

  $mount(element) {
    this._mountElement = element;
  }

  $invokeMount(element) {
    super.$mount(element);
  }
}


/* harmony default export */ __webpack_exports__["default"] = (pizza__WEBPACK_IMPORTED_MODULE_1__["PizzaContructor"].set(MiniClientPizza));

/***/ }),

/***/ "../lib/mini/client/helper.js":
/*!************************************!*\
  !*** ../lib/mini/client/helper.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pizza__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pizza */ "../../pizzajs/dist/pizza.js");
/* harmony import */ var pizza__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pizza__WEBPACK_IMPORTED_MODULE_0__);


const VIEWPORT= {
  width: window.innerWidth,
  height: window.innerHeight
};

/* harmony default export */ __webpack_exports__["default"] = ({
  pick(data) {
    let _ = {};

    for (let key in data) {
      if (typeof data[key] != 'object') _[key] = data[key];
    }

    return _;
  },

  formatEvent(e) {
    let _ = this.pick(e);
    _.touches = pizza__WEBPACK_IMPORTED_MODULE_0__["helper"].util.map(e.touches || [], (touch) => this.pick(touch));
    _.dataset = e.dataset;

    if (e.type == 'scroll') {
      _.scrollLeft = e.target.scrollLeft;
      _.scrollTop = e.target.scrollTop;
    }
    
    return _;
  }
});

/***/ }),

/***/ "../lib/mini/client/index.js":
/*!***********************************!*\
  !*** ../lib/mini/client/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "../lib/mini/client/class.js");
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messager */ "../lib/mini/client/messager.js");
/* harmony import */ var style_loader_css_loader_app_app_pass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-loader!css-loader!app/app.pass */ "../node_modules/style-loader/dist/cjs.js!../node_modules/css-loader/dist/cjs.js!./app.pass");
/* harmony import */ var style_loader_css_loader_app_app_pass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(style_loader_css_loader_app_app_pass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query */ "../lib/mini/client/query.js");





let page = 'pages/index/index';

_messager__WEBPACK_IMPORTED_MODULE_1__["default"]
  .recevie('UPDATE', (data) => {
    let instance = _class__WEBPACK_IMPORTED_MODULE_0__["default"].instance(data.id);
    instance.$render = () => data.vnode;
    instance.$forceUpdate();
  }).recevie('MOUNT', (data) => {
    let instance = _class__WEBPACK_IMPORTED_MODULE_0__["default"].instance(data.id);
    instance.$render = () => data.vnode;
    instance.$invokeMount(data.id == page ? document.getElementById('app') : void 0);
  }).send('PAGE_LOADED', page, (data) => {
    new _class__WEBPACK_IMPORTED_MODULE_0__["default"](data, {
      componentId: page
    });
  });

_messager__WEBPACK_IMPORTED_MODULE_1__["default"].recevie('QUERY', (data, callback) => {
  callback(_query__WEBPACK_IMPORTED_MODULE_3__["default"].exec(_class__WEBPACK_IMPORTED_MODULE_0__["default"].instance(data.id), data));
});

/***/ }),

/***/ "../lib/mini/client/messager.js":
/*!**************************************!*\
  !*** ../lib/mini/client/messager.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../messager */ "../lib/mini/messager.js");

/* harmony default export */ __webpack_exports__["default"] = (new _messager__WEBPACK_IMPORTED_MODULE_0__["default"](new Worker('./js/background.js')));

/***/ }),

/***/ "../lib/mini/client/query.js":
/*!***********************************!*\
  !*** ../lib/mini/client/query.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  getBoundingClientRect(el) {
    return el.getBoundingClientRect();
  },

  screen() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  exec(instance, data) {
    let {method, args, selector, selectorAll} = data;

    if (!method in this) return this.error();

    let el = instance.$el, res;

    if (selector) {
      res = this[method](el.querySelector(selector));
    } else if (selectorAll) {
      res = Array.from(el.querySelectorAll(selectorAll)).map((el) => {
        return this[method](el);
      })
    } else {
      res = this[method](el);
    }

    return {
      status: 1,
      data: res,
    };
  },

  error() {
    return {status: 0};
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

/***/ "../node_modules/css-loader/dist/cjs.js!./app.pass":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./app.pass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container {\n  height: 300px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/cjs.js!../node_modules/css-loader/dist/cjs.js!./app.pass":
/*!**************************************************************************************************!*\
  !*** ../node_modules/style-loader/dist/cjs.js!../node_modules/css-loader/dist/cjs.js!./app.pass ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./app.pass */ "../node_modules/css-loader/dist/cjs.js!./app.pass");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ })));
//# sourceMappingURL=client.js.map