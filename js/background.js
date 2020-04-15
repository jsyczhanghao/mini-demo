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
/******/ 	return __webpack_require__(__webpack_require__.s = "../lib/mini/background/index.js");
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

/***/ "../lib/mini/background/bootstrap.js":
/*!*******************************************!*\
  !*** ../lib/mini/background/bootstrap.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((app) => {
  return app;
});

/***/ }),

/***/ "../lib/mini/background/class.js":
/*!***************************************!*\
  !*** ../lib/mini/background/class.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "../lib/mini/base.js");
/* harmony import */ var pizza__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pizza */ "../../pizzajs/dist/pizza.js");
/* harmony import */ var pizza__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pizza__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query */ "../lib/mini/background/query.js");
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messager */ "../lib/mini/background/messager.js");





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

/***/ "../lib/mini/background/components/index.js":
/*!**************************************************!*\
  !*** ../lib/mini/background/components/index.js ***!
  \**************************************************/
/*! exports provided: install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var _scroll_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-view */ "../lib/mini/background/components/scroll-view/index.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper */ "../lib/mini/background/components/swiper/index.js");
/* harmony import */ var _swiper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiper-item */ "../lib/mini/background/components/swiper-item/index.js");




const install = (Pizza) => {
  Pizza.register('scroll-view', _scroll_view__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Pizza.register('swiper', _swiper__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Pizza.register('swiper-item', _swiper_item__WEBPACK_IMPORTED_MODULE_2__["default"]);
};


/***/ }),

/***/ "../lib/mini/background/components/scroll-view/index.js":
/*!**************************************************************!*\
  !*** ../lib/mini/background/components/scroll-view/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_paml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.paml */ "../lib/mini/background/components/scroll-view/index.paml");
/* harmony import */ var raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.pass */ "../node_modules/raw-loader/dist/cjs.js!../lib/mini/background/components/scroll-view/index.pass");



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

/***/ "../lib/mini/background/components/scroll-view/index.paml":
/*!****************************************************************!*\
  !*** ../lib/mini/background/components/scroll-view/index.paml ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"scroll-view\" @scroll=\"onScroll\" :style=\"style\">\n  <slot></slot>\n</div>");

/***/ }),

/***/ "../lib/mini/background/components/swiper-item/index.js":
/*!**************************************************************!*\
  !*** ../lib/mini/background/components/swiper-item/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./index.pass */ "../node_modules/raw-loader/dist/cjs.js!../lib/mini/background/components/swiper-item/index.pass");
/* harmony import */ var _index_paml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.paml */ "../lib/mini/background/components/swiper-item/index.paml");



/* harmony default export */ __webpack_exports__["default"] = ({
  style: raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_0__["default"],
  template: _index_paml__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "../lib/mini/background/components/swiper-item/index.paml":
/*!****************************************************************!*\
  !*** ../lib/mini/background/components/swiper-item/index.paml ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"swiper-item\">\n  <slot></slot>\n</div>");

/***/ }),

/***/ "../lib/mini/background/components/swiper/index.js":
/*!*********************************************************!*\
  !*** ../lib/mini/background/components/swiper/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./index.pass */ "../node_modules/raw-loader/dist/cjs.js!../lib/mini/background/components/swiper/index.pass");
/* harmony import */ var _index_paml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.paml */ "../lib/mini/background/components/swiper/index.paml");



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

/***/ "../lib/mini/background/components/swiper/index.paml":
/*!***********************************************************!*\
  !*** ../lib/mini/background/components/swiper/index.paml ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div :class=\"'swiper swiper-' + direction + (animating ? ' swiper-animation' : '')\">\n  <div class=\"swiper-inner\" :style=\"innerTransformStyle\" @touchstart=\"onTouchStart\" @touchmove=\"onTouchMove\" @touchend=\"onTouchEnd\" @webkitTransitionEnd=\"onTransitionEnd\">\n    <slot></slot>\n  </div>\n</div>");

/***/ }),

/***/ "../lib/mini/background/index.js":
/*!***************************************!*\
  !*** ../lib/mini/background/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "../lib/mini/background/class.js");
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messager */ "../lib/mini/background/messager.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap */ "../lib/mini/background/bootstrap.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "../lib/mini/background/components/index.js");
/* harmony import */ var app_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app */ "./app.js");






const app = Object(_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"])(app_app__WEBPACK_IMPORTED_MODULE_4__["default"]);

let currentPageOptions;

Object(_components__WEBPACK_IMPORTED_MODULE_3__["install"])(_class__WEBPACK_IMPORTED_MODULE_0__["default"]);

_messager__WEBPACK_IMPORTED_MODULE_1__["default"]
  .recevie('PAGE_LOADED', (data, callback) => {
    callback(currentPageOptions = app_app__WEBPACK_IMPORTED_MODULE_4__["Pages"][data]);
  })
  .recevie('CLIENT_CREATED', (data) => {
    let context = data.context ? _class__WEBPACK_IMPORTED_MODULE_0__["default"].instance(data.context) : null;
    let componentOptions = !context ? currentPageOptions : context.$components[data.component];
    new _class__WEBPACK_IMPORTED_MODULE_0__["default"](componentOptions, {
      context,
      props: data.props,
      componentName: data.component,
      componentId: data.id
    }).$mount();
  })
  .recevie('CLIENT_INVOKE_UPDATE', (data) => {
    let instance = _class__WEBPACK_IMPORTED_MODULE_0__["default"].instance(data.id);
    instance.$setPropsData(data.props);
    instance.$update();
  })
  .recevie('CLIENT_INVOKE', (data) => {
    _class__WEBPACK_IMPORTED_MODULE_0__["default"].instance(data.id).$invoke(data.method, ...data.args);
  });

/* harmony default export */ __webpack_exports__["default"] = ({
  getApp() {
    return app;
  }
});

/***/ }),

/***/ "../lib/mini/background/messager.js":
/*!******************************************!*\
  !*** ../lib/mini/background/messager.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../messager */ "../lib/mini/messager.js");


if (typeof __self == 'undefined') {
  self = {
    fns: {},
    addEventListener(type, callback) {
      this.fns[type] = callback;
    },

    dispatchEvent(type, data) {
      this.fns[type].call(this, {
        data
      });
    },

    //兼容native
    postMessage(data) {
      __nativeCall(data);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (new _messager__WEBPACK_IMPORTED_MODULE_0__["default"](self));

/***/ }),

/***/ "../lib/mini/background/query.js":
/*!***************************************!*\
  !*** ../lib/mini/background/query.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Query; });
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messager */ "../lib/mini/background/messager.js");


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

/***/ "../node_modules/raw-loader/dist/cjs.js!../lib/mini/background/components/scroll-view/index.pass":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!../lib/mini/background/components/scroll-view/index.pass ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-view {\n  height: 100%;\n  overflow: auto;\n}\n\n:host {\n  display: block;\n  max-height: 100vh;\n}");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!../lib/mini/background/components/swiper-item/index.pass":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!../lib/mini/background/components/swiper-item/index.pass ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100vw;\n  height: 100%;\n  display: block;\n}\n\n.swiper-item {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!../lib/mini/background/components/swiper/index.pass":
/*!**************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!../lib/mini/background/components/swiper/index.pass ***!
  \**************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ("page {\n  font-size: 24px;\n  color: blue;\n}");

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
  name: 1433
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
var arr = [{
  name: 'A',
  fav: ['eat', 'drink']
}, {
  name: 'B',
  fav: ['eat', 'play']
}];
let _ = [];

for (let i = 0; i < 2; i++) {
  arr.forEach((item, j) => {
    _.push({
      name: item.name,
      fav: item.fav
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



let __$$component = {
  data() {
    return {
      images: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586432186139&di=76509761988388611631741afacafa3b&imgtype=0&src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F161203%2F3-1612030ZG5.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586432186139&di=3a5ab5857bc955aa87ca66dee8663e53&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181118%2Fe553a90bb9fa4574822c5de49f08d3b2.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586432186139&di=b4a948e2d461c75aec19aff4069e7756&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201508%2F10%2F20150810150356_hnves.jpeg']
    };
  },

  lifetimes: {
    mounted() {}

  },
  methods: {
    onTouchStart() {}

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





let __$$component = {
  data() {
    return {
      users: _data_users_js__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
  },

  methods: {
    onClick(e) {
      console.log(e);
    }

  }
};
;
__$$component.template = _index_paml__WEBPACK_IMPORTED_MODULE_0__["default"];
__$$component.style = typeof raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_3__["default"] == 'undefined' ? null : raw_loader_index_pass__WEBPACK_IMPORTED_MODULE_3__["default"];
__$$component.components = {
  'banner': _components_banner_index__WEBPACK_IMPORTED_MODULE_2__["default"]
};
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
/* harmony default export */ __webpack_exports__["default"] = ("<page style=\"display: flex; flex-direction: column; height: 100%;\">\n  <scroll-view style=\"height: 100%;\">\n    <scroll-view style=\"height: 300px;\">\n      <scroll-view style=\"height: 200px; background: red;\">\n        <div style=\"height: 1000px;\">\n          内层scroll-view\n        </div>\n      </scroll-view>\n  \n      <div style=\"height: 1000px; background: green;\" @click=\"onClick\">\n        外层\n      </div>\n    </scroll-view>\n  \n    <banner style=\"flex: 1;\"></banner>\n  </scroll-view>\n</page>");

/***/ })

/******/ })));
//# sourceMappingURL=background.js.map