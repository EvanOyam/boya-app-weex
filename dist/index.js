// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(62);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _vue2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(55)
)

/* script */
__vue_exports__ = __webpack_require__(56)

/* template */
var __vue_template__ = __webpack_require__(63)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\components\\TopBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7a7ab78e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(64)
)

/* script */
__vue_exports__ = __webpack_require__(65)

/* template */
var __vue_template__ = __webpack_require__(66)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\components\\HeadBlock.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-35d0962d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(16);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(30);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X or iPhoneXS or iPhoneXR or iPhoneXS Max
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && (parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812 || parseInt(window.screen.width, 10) === 414 && parseInt(window.screen.height, 10) === 896);
      }
      return Utils.env.isIOS() && (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight == 1792);
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      console.log(e);
    }
    return obj;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(50);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(67)
)

/* script */
__vue_exports__ = __webpack_require__(68)

/* template */
var __vue_template__ = __webpack_require__(69)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\components\\MyCard.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4ea34e28"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(82);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getImg = __webpack_require__(9);

var _getImg2 = _interopRequireDefault(_getImg);

var _getIcon = __webpack_require__(10);

var _getIcon2 = _interopRequireDefault(_getIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Vue */

//全局引入图片路径处理方法
Vue.prototype.$getImg = _getImg2.default;
Vue.prototype.$getIcon = _getIcon2.default;
/* weex initialized here, please do not move this line */

var _require = __webpack_require__(11),
    router = _require.router;

var App = __webpack_require__(131);
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router: router }, App));
router.push('/');

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// e.g. 图片文件名是 test.jpg, 转换得到的图片地址为
// - H5      : images/test.jpg        images和所在html路径同级
// - Android : local:///test          local代表项目各dpi目录,一般放在hdpi里一张即可
// - iOS     : local///test.jpg       local代表从项目中全局扫描 test.jpg可放至项目中任何目录
var getImg = function getImg(imgName) {
  // 获取图片在三端上不同的路径
  var platform = weex.config.env.platform;
  var imgPath = '';
  if (platform === 'Web') {
    imgPath = 'src/images/' + imgName;
  } else if (platform === 'android') {
    // android不需要后缀
    imgName = imgName.substr(0, imgName.lastIndexOf('.'));
    imgPath = 'local:///' + imgName;
  } else {
    imgPath = 'local:///' + imgName; // imgPath = `../images/${imgName}`
  }
  return imgPath;
};

// 导出接口
exports.default = getImg;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// 初始化iconfont文件位置
// - H5      : 使用在线资源
// - Android : local:///font
// - iOS     : 未测试
var getIcon = function getIcon() {
  var dom = weex.requireModule('dom');
  // 通过获取platform判断加载字体文件的路径,(待完善,在手机的playground中,是无法加载本地文件的)
  var platform = weex.config.env.platform.toLowerCase();
  var url = void 0;
  if (platform === 'android') {
    // 本地资源采用'local:// '的方式加载
    // 第三个斜杠是代表当前目录,对于android来说,如果加载的是字体,那么就是assets目录,同理`/iconfont.ttf'`就是加载`assets`目录下的iconfont.ttf文件
    // 注意这里将字体文件放在'assets/font/'目录下
    url = "url('local:///font/iconfont.ttf')";
  } else if (platform === 'ios') {
    // ios未测试
    url = "url('local:///font/iconfont.ttf')";
  } else {
    url = "url('//at.alicdn.com/t/font_1068180_zc7lw2l7jma.ttf')";
  }
  dom.addRule('fontFace', {
    fontFamily: 'iconfont',
    src: url
  });
};

// 导出接口
exports.default = getIcon;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _vueRouter = __webpack_require__(12);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Welcome = __webpack_require__(13);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Result = __webpack_require__(22);

var _Result2 = _interopRequireDefault(_Result);

var _AdPage = __webpack_require__(35);

var _AdPage2 = _interopRequireDefault(_AdPage);

var _Index = __webpack_require__(39);

var _Index2 = _interopRequireDefault(_Index);

var _Test = __webpack_require__(93);

var _Test2 = _interopRequireDefault(_Test);

var _Login = __webpack_require__(97);

var _Login2 = _interopRequireDefault(_Login);

var _Booking = __webpack_require__(101);

var _Booking2 = _interopRequireDefault(_Booking);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Vue */
Vue.use(_vueRouter2.default);

var router = exports.router = new _vueRouter2.default({
  routes: [{
    path: '/',
    redirect: '/welcome'
  }, {
    path: '/welcome',
    name: 'Welcome',
    component: _Welcome2.default
  }, {
    path: '/result',
    name: 'Result',
    component: _Result2.default
  }, {
    path: '/adpage',
    name: 'AdPage',
    component: _AdPage2.default
  }, {
    path: '/index',
    name: 'Index',
    component: _Index2.default
  }, {
    path: '/test',
    name: 'Test',
    component: _Test2.default
  }, {
    path: '/login',
    name: 'Login',
    component: _Login2.default
  }, {
    path: '/booking',
    name: 'Booking',
    component: _Booking2.default
  }]
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
  * vue-router v3.0.2
  * (c) 2018 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
      ? 'router-link-active'
      : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
      ? 'router-link-exact-active'
      : globalExactActiveClass;
    var activeClass = this.activeClass == null
      ? activeClassFallback
      : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
      ? exactActiveClassFallback
      : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
}

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  window.history.replaceState({ key: getStateKey() }, '', window.location.href.replace(window.location.origin, ''));
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(router, to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : decodeURI(href.slice(index + 1))
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.2';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(21)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\views\\Welcome.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-75a5423e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "welcome-wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "flexDirection": "column",
    "alignItems": "stretch"
  },
  "welcome-wrapper-top": {
    "backgroundImage": "linear-gradient(to bottom, #126d40, #116f77)",
    "height": "460",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "welcome-wrapper-bottom": {
    "backgroundColor": "#E6EFEA",
    "flex": 1,
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "welcome-title-zh": {
    "fontWeight": "bold",
    "color": "#E6EFEA",
    "fontSize": "96"
  },
  "welcome-title-en": {
    "color": "#E6EFEA",
    "fontSize": "72",
    "marginBottom": "80"
  },
  "welcome-logo": {
    "position": "absolute",
    "width": "260",
    "height": "260",
    "left": "375",
    "marginLeft": "-130",
    "top": "460",
    "marginTop": "-130"
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcButton = __webpack_require__(3);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Welcome',
  components: {
    WxcButton: _wxcButton2.default
  },
  data: function data() {
    return {
      logoSrc: this.$getImg('logo2.png')
    };
  },

  methods: {
    enterSystem: function enterSystem() {
      this.$router.push('/adpage');
    },
    gotoGithub: function gotoGithub(e) {
      this.$router.push('/result');
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(20)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-77c133fc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-btn": {
    "width": "702",
    "height": "88",
    "alignItems": "center",
    "justifyContent": "center",
    "borderTopLeftRadius": "12",
    "borderTopRightRadius": "12",
    "borderBottomRightRadius": "12",
    "borderBottomLeftRadius": "12",
    "opacity": 1
  },
  "btn-text": {
    "textOverflow": "ellipsis",
    "lines": 1,
    "fontSize": "36",
    "color": "#ffffff"
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//

var _type = __webpack_require__(19);

exports.default = {
  props: {
    text: {
      type: String,
      default: '确认'
    },
    size: {
      type: String,
      default: 'none'
    },
    type: {
      type: String,
      default: 'red'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: Object,
    textStyle: Object,
    disabledStyle: Object
  },
  computed: {
    mrBtnStyle: function mrBtnStyle() {
      var type = this.type,
          disabled = this.disabled,
          btnStyle = this.btnStyle,
          size = this.size,
          disabledStyle = this.disabledStyle;


      var mrBtnStyle = _extends({}, _type.STYLE_MAP[type], btnStyle, _type.BUTTON_STYLE_MAP[size]);

      var disabledInStyle = { opacity: 0.2 };
      if (type === 'white') {
        disabledInStyle = { backgroundColor: 'rgba(0, 0, 0, 0.1)' };
      }

      return disabled ? _extends({}, mrBtnStyle, disabledInStyle, disabledStyle, {
        borderWidth: 0
      }) : mrBtnStyle;
    },
    mrTextStyle: function mrTextStyle() {
      var type = this.type,
          disabled = this.disabled,
          textStyle = this.textStyle,
          size = this.size;

      var mrTextStyle = _extends({}, _type.TEXT_STYLE_MAP[type], textStyle, _type.TEXT_FONTSIZE_STYLE_MAP[size]);
      return disabled ? _extends({}, mrTextStyle, { color: '#FFFFFF' }) : mrTextStyle;
    }
  },
  methods: {
    onClicked: function onClicked(e) {
      var type = this.type,
          disabled = this.disabled;

      this.$emit('wxcButtonClicked', { e: e, type: type, disabled: disabled });
    }
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLE_MAP = exports.STYLE_MAP = {
  red: {
    backgroundColor: '#FF5000'
  },
  yellow: {
    backgroundColor: '#FFC900'
  },
  white: {
    backgroundColor: '#FFFFFF',
    borderColor: '#A5A5A5',
    borderWidth: '1px'
  },
  blue: {
    backgroundColor: '#0F8DE8'
  },
  green: {
    backgroundColor: '#19be6b'
  }
};

var TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {
  red: {
    color: '#FFFFFF'
  },
  yellow: {
    color: '#FFFFFF'
  },
  blue: {
    color: '#FFFFFF'
  },
  white: {
    color: '#3D3D3D'
  },
  green: {
    color: '#FFFFFF'
  }
};

var BUTTON_STYLE_MAP = exports.BUTTON_STYLE_MAP = {
  full: {
    width: '702px',
    height: '88px'
  },
  big: {
    width: '339px',
    height: '70px'
  },
  medium: {
    width: '218px',
    height: '60px'
  },
  small: {
    width: '157px',
    height: '44px'
  }
};

var TEXT_FONTSIZE_STYLE_MAP = exports.TEXT_FONTSIZE_STYLE_MAP = {
  full: {
    fontSize: '36px'
  },
  big: {
    fontSize: '32px'
  },
  medium: {
    fontSize: '28px'
  },
  small: {
    fontSize: '24px'
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-btn"],
    style: _vm.mrBtnStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.text
    },
    on: {
      "click": _vm.onClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: _vm.mrTextStyle
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["welcome-wrapper"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["welcome-wrapper-bottom"]
  }, [_c('wxc-button', {
    attrs: {
      "text": "进入系统",
      "type": "green",
      "btnStyle": {
        height: '110px',
        marginBottom: '20px'
      },
      "textStyle": {
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#E6EFEA'
      }
    },
    on: {
      "wxcButtonClicked": _vm.enterSystem
    }
  }), _c('wxc-button', {
    attrs: {
      "text": "Github",
      "type": "blue",
      "btnStyle": {
        height: '110px',
        marginTop: '20px'
      },
      "textStyle": {
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#E6EFEA'
      }
    },
    on: {
      "wxcButtonClicked": _vm.gotoGithub
    }
  })], 1), _c('image', {
    staticClass: ["welcome-logo"],
    attrs: {
      "src": _vm.logoSrc
    }
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["welcome-wrapper-top"]
  }, [_c('text', {
    staticClass: ["welcome-title-zh"]
  }, [_vm._v("伯雅音乐")]), _c('text', {
    staticClass: ["welcome-title-en"]
  }, [_vm._v("Boya Music")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(23)
)

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(34)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\views\\Result.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5543f671"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
  "result-wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "flexDirection": "column",
    "alignItems": "stretch"
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcResult = __webpack_require__(25);

var _wxcResult2 = _interopRequireDefault(_wxcResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Result',
  components: {
    WxcResult: _wxcResult2.default
  },
  data: function data() {
    return {
      show: true,
      customSet: {
        errorPage: {
          button: '返回',
          content: 'Github更新后不许在iframe中内嵌，请手动打开',
          desc: 'https://github.com/EvanOyam/boya-app-weex'
        }
      }
    };
  },

  methods: {
    goBack: function goBack() {
      this.$router.go(-1);
    }
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(26);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(33)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\node_modules\\weex-ui\\packages\\wxc-result\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9b19c5a6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "wrap": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "wxc-result": {
    "width": "750",
    "flex": 1,
    "alignItems": "center",
    "backgroundColor": "#f2f3f4"
  },
  "result-image": {
    "width": "320",
    "height": "320"
  },
  "result-content": {
    "marginTop": "36",
    "alignItems": "center"
  },
  "content-text": {
    "fontSize": "30",
    "color": "#A5A5A5",
    "height": "42",
    "lineHeight": "42",
    "textAlign": "center"
  },
  "content-desc": {
    "marginTop": "10"
  },
  "result-button": {
    "marginTop": "60",
    "borderWidth": "1",
    "borderColor": "#979797",
    "backgroundColor": "#FFFFFF",
    "borderTopLeftRadius": "6",
    "borderTopRightRadius": "6",
    "borderBottomRightRadius": "6",
    "borderBottomLeftRadius": "6",
    "width": "240",
    "height": "72",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "button-text": {
    "color": "#666666",
    "fontSize": "30"
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(29);

var _type2 = _interopRequireDefault(_type);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    type: {
      type: String,
      default: 'errorPage'
    },
    show: {
      type: Boolean,
      default: true
    },
    wrapStyle: Object,
    paddingTop: {
      type: [Number, String],
      default: 232
    },
    customSet: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    resultType: function resultType() {
      var type = this.type,
          customSet = this.customSet;

      var allTypes = _utils2.default.isEmptyObject(customSet) ? _type2.default : _utils2.default.mergeDeep(_type2.default, customSet);
      var types = allTypes['errorPage'];
      if (Object.keys(allTypes).indexOf(type) > -1) {
        types = allTypes[type];
      }
      return types;
    },
    setPaddingTop: function setPaddingTop() {
      var paddingTop = this.paddingTop;
      return paddingTop + 'px';
    }
  },
  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // web上面有点击穿透问题
      var platform = weex.config.env.platform;

      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    onClick: function onClick() {
      var type = this.type;
      this.$emit('wxcResultButtonClicked', { type: type });
    }
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2016/11/4.
 */

exports.default = {
  errorPage: {
    pic: 'https://img.alicdn.com/tfs/TB17blphfDH8KJjy1XcXXcpdXXa-320-320.png',
    content: '抱歉出错了，我们正在全力解决中',
    button: '再试一次',
    title: '出错啦'
  },
  noGoods: {
    pic: 'https://img.alicdn.com/tfs/TB1mPWEeOqAXuNjy1XdXXaYcVXa-320-320.png',
    content: '主人，这里什么都没有找到',
    button: '再试一次',
    title: '暂无商品'
  },
  noNetwork: {
    pic: 'https://img.alicdn.com/tfs/TB1jkA5g9_I8KJjy0FoXXaFnVXa-320-320.png',
    content: '哎呀，没有网络了......',
    button: '刷新一下',
    title: '无网络'
  },
  errorLocation: {
    pic: 'https://img.alicdn.com/tfs/TB1zXXahhrI8KJjy0FpXXb5hVXa-320-320.png',
    content: '哎呀，定位失败了......',
    button: '刷新一下',
    title: '定位失败'
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(31)
  , qs = __webpack_require__(32)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(value));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wrap"],
    style: _vm.wrapStyle
  }, [_c('div', {
    staticClass: ["wxc-result"],
    style: {
      paddingTop: _vm.setPaddingTop
    }
  }, [_c('image', {
    staticClass: ["result-image"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.resultType.pic
    }
  }), (_vm.resultType.content) ? _c('div', {
    staticClass: ["result-content"]
  }, [_c('text', {
    staticClass: ["content-text"]
  }, [_vm._v(_vm._s(_vm.resultType.content))]), (_vm.resultType.desc) ? _c('text', {
    staticClass: ["content-text", "content-desc"]
  }, [_vm._v(_vm._s(_vm.resultType.desc))]) : _vm._e()]) : _vm._e(), (_vm.resultType.button) ? _c('div', {
    staticClass: ["result-button"],
    on: {
      "touchend": _vm.handleTouchEnd,
      "click": _vm.onClick
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v(_vm._s(_vm.resultType.button))])]) : _vm._e()])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["result-wrapper"]
  }, [_c('wxc-result', {
    attrs: {
      "type": "errorPage",
      "show": _vm.show,
      "paddingTop": "232",
      "customSet": _vm.customSet
    },
    on: {
      "wxcResultButtonClicked": _vm.goBack
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(36)
)

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(38)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\views\\AdPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-28fda526"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
  "ad-page-wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "flexDirection": "column",
    "alignItems": "center",
    "backgroundColor": "#e6efea",
    "justifyContent": "space-between"
  },
  "ad-page-logo": {
    "width": "210",
    "height": "160",
    "opacity": 0,
    "marginBottom": "100"
  },
  "text": {
    "textAlign": "center",
    "fontWeight": "bold"
  },
  "title": {
    "marginTop": "400",
    "fontSize": "50",
    "color": "#ffb74c"
  },
  "introduction": {
    "fontSize": "36",
    "color": "#8e8e8e"
  },
  "title-box": {
    "opacity": 0
  },
  "timer": {
    "position": "absolute",
    "top": "54",
    "right": "54",
    "width": "54",
    "height": "54",
    "borderTopLeftRadius": "54",
    "borderTopRightRadius": "54",
    "borderBottomRightRadius": "54",
    "borderBottomLeftRadius": "54",
    "borderTopWidth": "2",
    "borderTopStyle": "solid",
    "borderTopColor": "#5e5e5e",
    "borderRightWidth": "2",
    "borderRightStyle": "solid",
    "borderRightColor": "#5e5e5e",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#5e5e5e",
    "borderLeftWidth": "2",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#5e5e5e",
    "backgroundColor": "#ededed",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "timerText": {
    "fontSize": "22",
    "textAlign": "center",
    "color": "#5e5e5e"
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  name: 'AdPage',
  components: {},
  mounted: function mounted() {
    this.timer = 3;
    this.showLogo();
    this.showAdBox();
    this.handleTimer();
  },
  data: function data() {
    return {
      logoSrc: this.$getImg('logo3.png'),
      timer: 3
    };
  },

  methods: {
    handleTimer: function handleTimer() {
      var _this = this;
      var timerStart = setInterval(function () {
        _this.timer = _this.timer - 1;
        if (_this.timer === 0) {
          clearInterval(timerStart);
          _this.$router.push('/index');
        }
      }, 1000);
    },
    showLogo: function showLogo() {
      var logo = this.$refs.logo;
      animation.transition(logo, {
        styles: {
          opacity: 1
        },
        duration: 2000,
        timingFunction: 'ease',
        delay: 0
      });
    },
    showAdBox: function showAdBox() {
      var adBox = this.$refs.adBox;
      animation.transition(adBox, {
        styles: {
          opacity: 1
        },
        duration: 2000,
        timingFunction: 'ease',
        delay: 0
      });
    }
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["ad-page-wrapper"]
  }, [_c('div', {
    ref: "adBox",
    staticClass: ["title-box"]
  }, [_c('text', {
    staticClass: ["text", "title"]
  }, [_vm._v("伯雅音乐")]), _c('text', {
    staticClass: ["text", "introduction"]
  }, [_vm._v("Your dream tutor")])]), _c('image', {
    ref: "logo",
    staticClass: ["ad-page-logo"],
    attrs: {
      "src": _vm.logoSrc
    }
  }), _c('div', {
    staticClass: ["timer"]
  }, [_c('text', {
    staticClass: ["timerText"]
  }, [_vm._v(_vm._s(_vm.timer))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(40)
)

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(92)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\views\\Index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8a3dcea4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {
  "index-wrap": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(42);

var _Home2 = _interopRequireDefault(_Home);

var _MyTabBar = __webpack_require__(75);

var _MyTabBar2 = _interopRequireDefault(_MyTabBar);

var _Me = __webpack_require__(79);

var _Me2 = _interopRequireDefault(_Me);

var _bus = __webpack_require__(0);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
  name: 'Index',
  components: {
    Home: _Home2.default,
    Me: _Me2.default,
    MyTabBar: _MyTabBar2.default
  },
  created: function created() {
    var _this2 = this;

    var _this = this;
    _bus2.default.$on('handleView', function (view) {
      _this2.setView(view);
    });
    _bus2.default.$on('handleLogin', function () {
      modal.alert({
        message: '请先登录！',
        okTitle: '确认'
      }, function () {
        _this.$router.push('/login');
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    console.log('destroy');
    _bus2.default.$off('handleLogin');
  },
  data: function data() {
    return {
      viewComponent: 'Home'
    };
  },

  methods: {
    setView: function setView(view) {
      if (view === 0) {
        this.viewComponent = 'Home';
      } else if (view === 1) {
        this.viewComponent = 'Me';
      }
    }
  }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(43)
)
__vue_styles__.push(__webpack_require__(44)
)

/* script */
__vue_exports__ = __webpack_require__(45)

/* template */
var __vue_template__ = __webpack_require__(74)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\views\\Home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5e265133"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {
  "weex-scroller-inner": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "wxc-popup": {
    "zIndex": 999
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "right": 0,
    "backgroundColor": "#e6efea",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "home-wrapper": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "home-card": {
    "marginTop": "-100"
  },
  "slider": {
    "width": "680",
    "height": "460",
    "borderTopLeftRadius": "16",
    "borderTopRightRadius": "16",
    "borderBottomRightRadius": "16",
    "borderBottomLeftRadius": "16"
  },
  "frame": {
    "width": "680",
    "height": "460",
    "borderTopLeftRadius": "16",
    "borderTopRightRadius": "16",
    "borderBottomRightRadius": "16",
    "borderBottomLeftRadius": "16",
    "position": "relative"
  },
  "image": {
    "width": "680",
    "height": "460",
    "borderTopLeftRadius": "16",
    "borderTopRightRadius": "16",
    "borderBottomRightRadius": "16",
    "borderBottomLeftRadius": "16"
  },
  "ad-title-box": {
    "width": "680",
    "height": "100",
    "lineHeight": "100",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": "26"
  },
  "ad-card-title": {
    "fontSize": "38",
    "fontWeight": "bold",
    "color": "#333333"
  },
  "ad-card-more": {
    "color": "#6e8ca0",
    "fontSize": "32"
  },
  "home-message-card": {
    "marginBottom": "10"
  },
  "clearBox": {
    "width": "750",
    "height": "200"
  },
  "ad-card-box": {
    "marginBottom": "40"
  },
  "msg-popup-content": {
    "height": "400",
    "width": "680",
    "backgroundColor": "rgba(255,255,255,0.7)",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "marginTop": "50",
    "marginLeft": "35",
    "paddingTop": "40",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "30"
  },
  "msg-popup-desc": {
    "color": "#666666",
    "fontSize": "30",
    "marginTop": "30"
  },
  "msg-popup-title": {
    "color": "#666666",
    "fontSize": "40",
    "fontWeight": "bold",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis",
    "overflow": "hidden",
    "lines": 1
  },
  "msg-popup-time": {
    "color": "#999999",
    "fontSize": "28"
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcPopup = __webpack_require__(46);

var _wxcPopup2 = _interopRequireDefault(_wxcPopup);

var _TopBar = __webpack_require__(1);

var _TopBar2 = _interopRequireDefault(_TopBar);

var _HeadBlock = __webpack_require__(2);

var _HeadBlock2 = _interopRequireDefault(_HeadBlock);

var _MyCard = __webpack_require__(6);

var _MyCard2 = _interopRequireDefault(_MyCard);

var _MessageCard = __webpack_require__(70);

var _MessageCard2 = _interopRequireDefault(_MessageCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'HomePage',
  components: {
    TopBar: _TopBar2.default,
    HeadBlock: _HeadBlock2.default,
    MyCard: _MyCard2.default,
    MessageCard: _MessageCard2.default,
    WxcPopup: _wxcPopup2.default
  },
  data: function data() {
    return {
      isBottomShow: false,
      popupTitle: '标题',
      popupTime: new Date().toLocaleString(),
      popupDesc: '与 Web App、HTML5 App 或 hybrid App 不同，您可以使用 Weex 构建一个真正的原生应用。更贴心的是你的代码只需使用 HTML、CSS、JavaScript 可以构建原生应用，上手非常简单。',
      imageList: [{
        src: 'https://s2.ax1x.com/2019/03/04/kOsGD0.png'
      }, {
        src: 'https://s2.ax1x.com/2019/03/04/kOs8uq.png'
      }, {
        src: 'https://s2.ax1x.com/2019/03/04/kOsJbV.png'
      }, {
        src: 'https://s2.ax1x.com/2019/03/04/kOs1vn.png'
      }, {
        src: 'https://s2.ax1x.com/2019/03/04/kOslgs.png'
      }],
      messageList: [{
        cardTextTitle: '吉他大班本周9折',
        cardTextDescription: '为了迎接新学期的到来，同时祝贺本店成立3周年，本周报名吉他大班，一律享受9折优惠！三人报名，每人折上再打8折！',
        cardTextTime: new Date().toLocaleString(),
        iconType: 'course'
      }, {
        cardTextTitle: 'saga吉他到货',
        cardTextDescription: '网红款吉他，saga-sf700现货发售！980元送琴箱，送背带，送拨片，送变调夹！全网最低价，欢迎比价淘宝京东！',
        cardTextTime: new Date().toLocaleString(),
        iconType: 'commodity'
      }, {
        cardTextTitle: 'bandlive音乐节',
        cardTextDescription: 'bandlive摇滚音乐之夜将于5月13号在风雨球场举行，伯雅音乐社独家送票！参演乐队包括曾书记007乐队，北京特邀嘉宾超级童颜，以及bandlive的4支校乐队！',
        cardTextTime: new Date().toLocaleString(),
        iconType: 'message'
      }, {
        cardTextTitle: '报名送琴',
        cardTextDescription: '即日起至月底，凡是在伯雅音乐社报名尤克里里小班的小伙伴，只要将报名链接发送至朋友圈，将免费获赠uku尤克里里一把。赶快拉上小伙伴一起来吧！',
        cardTextTime: new Date().toLocaleString(),
        iconType: 'message'
      }]
    };
  },

  methods: {
    gotoTest: function gotoTest() {
      this.$router.push('/test');
    },
    showPopup: function showPopup(i) {
      this.popupTitle = this.messageList[i].cardTextTitle;
      this.popupTime = this.messageList[i].cardTextTime;
      this.popupDesc = this.messageList[i].cardTextDescription;
      this.isBottomShow = true;
    },

    // 非状态组件，需要在这里关闭
    popupOverlayBottomClick: function popupOverlayBottomClick() {
      this.isBottomShow = false;
    }
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(47);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(48)
)

/* script */
__vue_exports__ = __webpack_require__(49)

/* template */
var __vue_template__ = __webpack_require__(54)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ef24f190"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-popup": {
    "position": "fixed",
    "width": "750"
  },
  "top": {
    "left": 0,
    "right": 0
  },
  "bottom": {
    "left": 0,
    "right": 0
  },
  "left": {
    "bottom": 0,
    "top": 0
  },
  "right": {
    "bottom": 0,
    "top": 0
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _wxcOverlay = __webpack_require__(5);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
var platform = weex.config.env.platform;

var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
exports.default = {
  components: { WxcOverlay: _wxcOverlay2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: 'bottom'
    },
    popupColor: {
      type: String,
      default: '#FFFFFF'
    },
    overlayCfg: {
      type: Object,
      default: function _default() {
        return {
          hasAnimation: true,
          timingFunction: ['ease-in', 'ease-out'],
          duration: 300,
          opacity: 0.6
        };
      }
    },
    height: {
      type: [Number, String],
      default: 840
    },
    standOut: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 750
    },
    animation: {
      type: Object,
      default: function _default() {
        return {
          timingFunction: 'ease-in'
        };
      }
    }
  },
  data: function data() {
    return {
      haveOverlay: true,
      isOverShow: true
    };
  },
  computed: {
    isNeedShow: function isNeedShow() {
      var _this = this;

      setTimeout(function () {
        _this.appearPopup(_this.show);
      }, 50);
      return this.show;
    },
    _height: function _height() {
      this.appearPopup(this.show, 150);
      return this.height;
    },
    padStyle: function padStyle() {
      var pos = this.pos,
          width = this.width,
          height = this.height,
          popupColor = this.popupColor,
          standOut = this.standOut;

      var stand = parseInt(standOut, 10);
      var style = {
        width: width + 'px',
        backgroundColor: popupColor
      };
      pos === 'top' && (style = _extends({}, style, {
        top: -height + stand + 'px',
        height: height + 'px'
      }));
      pos === 'bottom' && (style = _extends({}, style, {
        bottom: -height + stand + 'px',
        height: height + 'px'
      }));
      pos === 'left' && (style = _extends({}, style, {
        left: -width + stand + 'px'
      }));
      pos === 'right' && (style = _extends({}, style, {
        right: -width + stand + 'px'
      }));
      return style;
    }
  },
  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // 在支付宝上面有点击穿透问题
      var platform = weex.config.env.platform;

      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    hide: function hide() {
      this.appearPopup(false);
      this.$refs.overlay.appearOverlay(false);
    },
    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
      this.isShow && this.appearPopup(false);
    },
    appearPopup: function appearPopup(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

      this.isShow = bool;
      var popupEl = this.$refs['wxc-popup'];
      if (!popupEl) {
        return;
      }
      animation.transition(popupEl, _extends({
        styles: {
          transform: this.getTransform(this.pos, this.width, this.height, !bool)
        },
        duration: duration,
        delay: 0
      }, this.animation), function () {
        if (!bool) {
          _this2.$emit('wxcPopupOverlayClicked', { pos: _this2.pos });
        }
      });
    },
    getTransform: function getTransform(pos, width, height, bool) {
      var _size = pos === 'top' || pos === 'bottom' ? height : width;
      bool && (_size = 0);
      var _transform = void 0;
      switch (pos) {
        case 'top':
          _transform = 'translateY(' + _size + 'px)';
          break;
        case 'bottom':
          _transform = 'translateY(-' + _size + 'px)';
          break;
        case 'left':
          _transform = 'translateX(' + _size + 'px)';
          break;
        case 'right':
          _transform = 'translateX(-' + _size + 'px)';
          break;
      }
      return _transform;
    }
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(51)
)

/* script */
__vue_exports__ = __webpack_require__(52)

/* template */
var __vue_template__ = __webpack_require__(53)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5dc5d348"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    on: {
      "touchend": _vm.handleTouchEnd
    }
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    ref: "overlay",
    attrs: {
      "show": _vm.haveOverlay && _vm.isOverShow
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking
    }
  }, 'wxc-overlay', _vm.overlayCfg, false)) : _vm._e()], 1), (_vm.show) ? _c('div', {
    ref: "wxc-popup",
    class: ['wxc-popup', _vm.pos],
    style: _vm.padStyle,
    attrs: {
      "height": _vm._height,
      "hack": _vm.isNeedShow
    },
    on: {
      "click": function () {}
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  }
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcMinibar = __webpack_require__(57);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

var _bus = __webpack_require__(0);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'TopBar',
  components: { WxcMinibar: _wxcMinibar2.default },
  created: function created() {
    this.$getIcon();
  },
  data: function data() {
    return {};
  },

  methods: {
    minibarLeftButtonClick: function minibarLeftButtonClick() {
      if (this.$route.path === '/index') {
        _bus2.default.$emit('topBarLeftClick');
      } else {
        this.$router.go(-1);
      }
    },
    minibarRightButtonClick: function minibarRightButtonClick() {
      _bus2.default.$emit('topBarLeftClick');
      this.$router.push('/index');
    }
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(58);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(59)
)

/* script */
__vue_exports__ = __webpack_require__(60)

/* template */
var __vue_template__ = __webpack_require__(61)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e026d130"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-minibar": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#009ff0"
  },
  "left": {
    "width": "180",
    "paddingLeft": "32"
  },
  "middle-title": {
    "fontSize": "30",
    "color": "#ffffff",
    "height": "36",
    "lineHeight": "34"
  },
  "right": {
    "width": "180",
    "paddingRight": "32",
    "alignItems": "flex-end"
  },
  "left-button": {
    "width": "21",
    "height": "36"
  },
  "right-button": {
    "width": "32",
    "height": "32"
  },
  "icon-text": {
    "fontSize": "28",
    "color": "#ffffff"
  }
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Navigator = weex.requireModule('navigator');
exports.default = {
  props: {
    backgroundColor: {
      type: String,
      default: '#FFC900'
    },
    leftButton: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png'
    },
    textColor: {
      type: String,
      default: '#3D3D3D'
    },
    rightButton: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '标题'
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    useDefaultReturn: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    },
    barStyle: {
      type: Object
    }
  },
  computed: {
    newBarStyle: function newBarStyle() {
      var backgroundColor = this.backgroundColor,
          barStyle = this.barStyle;

      return _extends({
        backgroundColor: backgroundColor
      }, barStyle);
    }
  },
  methods: {
    leftButtonClicked: function leftButtonClicked() {
      if (this.useDefaultReturn) {
        Navigator.pop({}, function (e) {});
      }
      this.$emit('wxcMinibarLeftButtonClicked', {});
    },
    rightButtonClicked: function rightButtonClicked() {
      var hasRightContent = this.rightText || this.rightButton || this.$slots && this.$slots.right;
      hasRightContent && this.$emit('wxcMinibarRightButtonClicked', {});
    }
  }
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wxc-minibar"],
    style: _vm.newBarStyle
  }, [_c('div', {
    staticClass: ["left"],
    attrs: {
      "ariaLabel": "返回",
      "accessible": true
    },
    on: {
      "click": _vm.leftButtonClicked
    }
  }, [_vm._t("left", [(_vm.leftButton && !_vm.leftText) ? _c('image', {
    staticClass: ["left-button"],
    attrs: {
      "src": _vm.leftButton
    }
  }) : _vm._e(), (_vm.leftText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.leftText))]) : _vm._e()])], 2), _vm._t("middle", [_c('text', {
    staticClass: ["middle-title"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.rightButtonClicked
    }
  }, [_vm._t("right", [(_vm.rightButton && !_vm.rightText) ? _c('image', {
    staticClass: ["right-button"],
    attrs: {
      "src": _vm.rightButton,
      "ariaHidden": true
    }
  }) : _vm._e(), (_vm.rightText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e()])], 2)], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * Vue.js v2.6.7
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeLetters = 'a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD';

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + unicodeLetters + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ("development" !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + unicodeLetters + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res)) {
      // issue #9511
      // reassign to res to avoid catch triggering multiple times when nested calls
      res = res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var isStable = slots ? !!slots.$stable : true;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    Object.keys(normalSlots).length === 0
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && res.length === 0
      ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        if (!(key in hash) && !(camelizedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + camelizedKey)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ("development" !== 'production' && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ("development" !== 'production' && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  var owner = currentRenderingInstance;
  if (isDef(factory.owners)) {
    // already pending
    factory.owners.push(owner);
  } else {
    var owners = factory.owners = [owner];
    var sync = true;

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
if (inBrowser && getNow() > document.createEvent('Event').timeStamp) {
  // if the low-res timestamp which is bigger than the event timestamp
  // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
  // and we need to use the hi-res version for event listeners as well.
  getNow = function () { return performance.now(); };
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ("development" !== 'production' && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.7';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // #9462 bail for iOS 9 bug: event.timeStamp is 0 after history.pushState
        e.timeStamp === 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["top-bar"]
  }, [_c('wxc-minibar', {
    attrs: {
      "title": "BOYA",
      "backgroundColor": "#54ad7b",
      "textColor": "#FFFFFF",
      "rightText": "更多",
      "useDefaultReturn": false
    },
    on: {
      "wxcMinibarLeftButtonClicked": _vm.minibarLeftButtonClick,
      "wxcMinibarRightButtonClicked": _vm.minibarRightButtonClick
    }
  }, [_c('text', {
    staticClass: ["iconfont"],
    staticStyle: {
      color: "#fff",
      fontSize: "50px"
    },
    attrs: {
      "slot": "right"
    },
    slot: "right"
  }, [_vm._v("")]), _c('text', {
    staticClass: ["iconfont"],
    staticStyle: {
      color: "#fff",
      fontSize: "50px"
    },
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }, [_vm._v("")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = {
  "head-block": {
    "width": "750",
    "height": "240",
    "backgroundColor": "#54ad7b",
    "justifyContent": "center",
    "marginTop": "-1"
  },
  "head-block-username": {
    "textAlign": "center",
    "fontSize": "48",
    "fontWeight": "bold",
    "color": "#ffffff",
    "marginTop": "-120"
  }
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

var storage = weex.requireModule('storage');
exports.default = {
  name: 'HeadBlock',
  created: function created() {
    var _this = this;

    storage.getItem('userInfo', function (event) {
      var userInfo = event.data;
      if (userInfo === 'undefined' || userInfo === undefined) {
        _this.username = '尚未登录';
      } else {
        userInfo = JSON.parse(userInfo);
        _this.username = userInfo.username;
      }
    });
  },
  data: function data() {
    return {
      username: '尚未登录'
    };
  },

  methods: {}
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["head-block"]
  }, [_c('text', {
    staticClass: ["head-block-username"]
  }, [_vm._v(_vm._s(_vm.username))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = {
  "front-card": {
    "width": "680",
    "height": "200",
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "20",
    "paddingRight": "30",
    "paddingBottom": "20",
    "paddingLeft": "30"
  },
  "login-username": {
    "fontWeight": "bold",
    "color": "#333333",
    "textOverflow": "ellipsis",
    "fontSize": "36"
  },
  "login-introduction": {
    "color": "#777777",
    "textOverflow": "ellipsis",
    "fontSize": "30",
    "marginTop": "10"
  },
  "card-portrait": {
    "width": "146",
    "height": "146",
    "borderTopLeftRadius": "80",
    "borderTopRightRadius": "80",
    "borderBottomRightRadius": "80",
    "borderBottomLeftRadius": "80"
  },
  "login-text-box": {
    "flexDirection": "column",
    "justifyContent": "space-around",
    "alignItems": "flex-start",
    "height": "146",
    "flex": 1,
    "paddingTop": "10",
    "paddingRight": 0,
    "paddingBottom": "10",
    "paddingLeft": "30"
  },
  "unlogin-text-box": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "flex-start",
    "height": "146",
    "flex": 1,
    "paddingTop": "10",
    "paddingRight": 0,
    "paddingBottom": "10",
    "paddingLeft": "30"
  },
  "unlogin-username": {
    "fontWeight": "bold",
    "fontSize": "36",
    "color": "#333333"
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bus = __webpack_require__(0);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule('storage'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MyCard',
  created: function created() {
    var _this = this;

    storage.getItem('userInfo', function (event) {
      var userInfo = event.data;
      if (userInfo === 'undefined' || userInfo === undefined) {
        console.log('unlogin');
      } else {
        _this.userInfo = JSON.parse(userInfo);
        _this.isLogin = true;
      }
    });
  },
  data: function data() {
    return {
      isLogin: false,
      userInfo: {},
      cardPortraitSrc: this.$getImg('portrait.jpg')
    };
  },

  methods: {
    login: function login() {
      storage.getItem('userInfo', function (event) {
        var userInfo = event.data;
        if (userInfo === 'undefined' || userInfo === undefined) {
          _bus2.default.$emit('handleLogin');
        } else {
          console.log(userInfo);
        }
      });
    }
  }
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["my-card"],
    on: {
      "click": _vm.login
    }
  }, [_c('div', {
    staticClass: ["front-card"]
  }, [_c('image', {
    staticClass: ["card-portrait"],
    attrs: {
      "src": _vm.cardPortraitSrc
    }
  }), (_vm.isLogin === true) ? _c('div', {
    staticClass: ["login-text-box"]
  }, [_c('text', {
    staticClass: ["login-username"]
  }, [_vm._v(_vm._s(_vm.userInfo.username))]), _c('text', {
    staticClass: ["login-introduction"]
  }, [_vm._v(_vm._s(_vm.userInfo.introduction))])]) : _vm._e(), (_vm.isLogin === false) ? _c('div', {
    staticClass: ["unlogin-text-box"]
  }, [_c('text', {
    staticClass: ["unlogin-username"]
  }, [_vm._v("尚未登录")])]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(71)
)

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(73)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\components\\MessageCard.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-496bdf52"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = {
  "front-card": {
    "width": "680",
    "height": "160",
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "20",
    "paddingRight": "30",
    "paddingBottom": "20",
    "paddingLeft": "30"
  },
  "card-shadow": {
    "width": "682",
    "height": "166",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "backgroundColor": "rgba(0,0,0,0.03)"
  },
  "logo-box": {
    "width": "120",
    "height": "120",
    "borderTopLeftRadius": "60",
    "borderTopRightRadius": "60",
    "borderBottomRightRadius": "60",
    "borderBottomLeftRadius": "60",
    "borderTopWidth": "8",
    "borderTopStyle": "solid",
    "borderTopColor": "#e2e2e2",
    "borderRightWidth": "8",
    "borderRightStyle": "solid",
    "borderRightColor": "#e2e2e2",
    "borderBottomWidth": "8",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#e2e2e2",
    "borderLeftWidth": "8",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#e2e2e2",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo-img": {
    "width": "120",
    "height": "120"
  },
  "text-box": {
    "height": "120",
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "stretch"
  },
  "text-title": {
    "fontSize": "30",
    "fontWeight": "bold",
    "color": "#666666"
  },
  "text-description": {
    "fontSize": "28",
    "color": "#999999"
  },
  "text-cardTextTime": {
    "fontSize": "26",
    "color": "#cccccc"
  },
  "common-text": {
    "lines": 1,
    "textAlign": "right",
    "paddingLeft": "30",
    "display": "block",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "icon": {
    "color": "#fafafa",
    "fontSize": "50",
    "fontWeight": "bold"
  }
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MessageCard',
  created: function created() {
    this.$getIcon();
  },

  props: {
    iconType: {
      type: String,
      default: 'course'
    },
    cardTextTitle: {
      type: String,
      default: '标题'
    },
    cardTextDescription: {
      type: String,
      default: '这里是关于这则消息的详情'
    },
    cardTextTime: {
      type: String,
      default: function _default() {
        return new Date().toLocaleString();
      }
    }
  },
  data: function data() {
    return {
      backgroundColor: ''
    };
  },

  methods: {
    openBottomPopup: function openBottomPopup() {
      this.$emit('openBottomPopup');
    }
  },
  computed: {
    handleIconType: function handleIconType() {
      var _this = this;
      var iconType = this.iconType;
      switch (iconType) {
        case 'course':
          _this.backgroundColor = '#5BC8FF';
          iconType = '\uE603';
          break;
        case 'message':
          _this.backgroundColor = '#7fc159';
          iconType = '\uE600';
          break;
        case 'commodity':
          _this.backgroundColor = '#FFAA3D';
          iconType = '\uE653';
          break;
        default:
          break;
      }
      return iconType;
    }
  }
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["message-card"],
    on: {
      "click": _vm.openBottomPopup
    }
  }, [_c('div', {
    staticClass: ["card-shadow"]
  }, [_c('div', {
    staticClass: ["front-card"]
  }, [_c('div', {
    staticClass: ["logo-box"],
    style: {
      backgroundColor: _vm.backgroundColor
    }
  }, [_c('text', {
    staticClass: ["iconfont", "icon"]
  }, [_vm._v(_vm._s(_vm.handleIconType))])]), _c('div', {
    staticClass: ["text-box"]
  }, [_c('div', [_c('text', {
    staticClass: ["text-title", "common-text"]
  }, [_vm._v(_vm._s(_vm.cardTextTitle) + ">>")])]), _c('div', [_c('text', {
    staticClass: ["text-description", "common-text"]
  }, [_vm._v(_vm._s(_vm.cardTextDescription))])]), _c('div', [_c('text', {
    staticClass: ["text-cardTextTime", "common-text"]
  }, [_vm._v(_vm._s(_vm.cardTextTime))])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["home-wrapper"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_c('TopBar'), _c('HeadBlock'), _c('MyCard', {
    staticClass: ["home-card"]
  }), _c('div', {
    staticClass: ["ad-card-box"]
  }, [_c('div', {
    staticClass: ["ad-title-box"]
  }, [_vm._m(0), _c('div', [_c('text', {
    staticClass: ["ad-card-more"],
    on: {
      "click": _vm.gotoTest
    }
  }, [_vm._v("查看更多>")])])]), _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "keepIndex": "false",
      "autoPlay": "true"
    }
  }, _vm._l((_vm.imageList), function(img, index) {
    return _c('div', {
      key: index,
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  }))]), _vm._l((_vm.messageList), function(item, index) {
    return _c('MessageCard', {
      key: index,
      staticClass: ["home-message-card"],
      attrs: {
        "cardTextTitle": item.cardTextTitle,
        "cardTextDescription": item.cardTextDescription,
        "cardTextTime": item.cardTextTime,
        "iconType": item.iconType
      },
      on: {
        "openBottomPopup": function($event) {
          _vm.showPopup(index)
        }
      }
    })
  }), _c('div', {
    staticClass: ["clearBox"]
  })], 2), _c('wxc-popup', {
    attrs: {
      "popupColor": "#e6efea",
      "show": _vm.isBottomShow,
      "pos": "bottom",
      "height": "500"
    },
    on: {
      "wxcPopupOverlayClicked": _vm.popupOverlayBottomClick
    }
  }, [_c('div', {
    staticClass: ["msg-popup-content"]
  }, [_c('text', {
    staticClass: ["msg-popup-title"]
  }, [_vm._v(_vm._s(_vm.popupTitle))]), _c('text', {
    staticClass: ["msg-popup-time"]
  }, [_vm._v(_vm._s(_vm.popupTime))]), _c('text', {
    staticClass: ["msg-popup-desc"]
  }, [_vm._v(_vm._s(_vm.popupDesc))])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["ad-card-title"]
  }, [_vm._v("推荐的课程")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(76)
)

/* script */
__vue_exports__ = __webpack_require__(77)

/* template */
var __vue_template__ = __webpack_require__(78)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\components\\MyTabBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7164761a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = {
  "my-tab-bar-wrap": {
    "position": "fixed",
    "height": "200",
    "width": "750",
    "bottom": 0,
    "backgroundColor": "#e6efea"
  },
  "tab-bar": {
    "width": "750",
    "height": "120",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center",
    "position": "fixed",
    "bottom": 0
  },
  "icon-box": {
    "flex": 1,
    "height": "120",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "stretch"
  },
  "title": {
    "fontSize": "28",
    "textAlign": "center"
  },
  "active": {
    "color": "#ff9900"
  },
  "tarbar-icon": {
    "fontSize": "48",
    "textAlign": "center"
  },
  "booking-btn-outer": {
    "width": "180",
    "height": "180",
    "borderTopLeftRadius": "80",
    "borderTopRightRadius": "80",
    "borderBottomRightRadius": "80",
    "borderBottomLeftRadius": "80",
    "backgroundColor": "#ffffff",
    "justifyContent": "center",
    "alignItems": "center",
    "position": "fixed",
    "bottom": 0,
    "left": "375",
    "marginLeft": "-90"
  },
  "booking-btn-inner": {
    "width": "134",
    "height": "134",
    "borderTopLeftRadius": "134",
    "borderTopRightRadius": "134",
    "borderBottomRightRadius": "134",
    "borderBottomLeftRadius": "134",
    "backgroundColor": "#ff9900",
    "textAlign": "center",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "iconText": {
    "fontSize": "60",
    "color": "#e6efea"
  }
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bus = __webpack_require__(0);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule('storage'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MyTabbar',
  data: function data() {
    return {
      isActived: 0
    };
  },
  created: function created() {
    var _this = this;

    this.$getIcon();
    _bus2.default.$on('topBarLeftClick', function () {
      _this.gotoHome();
    });
  },

  methods: {
    gotoHome: function gotoHome() {
      this.isActived = 0;
      _bus2.default.$emit('handleView', 0);
    },
    gotoMe: function gotoMe() {
      var _this2 = this;

      storage.getItem('userInfo', function (event) {
        var userInfo = event.data;
        if (userInfo === 'undefined' || userInfo === undefined) {
          _bus2.default.$emit('handleLogin');
        } else {
          _this2.isActived = 1;
          _bus2.default.$emit('handleView', 1);
        }
      });
      // if (this.isLogin) {
      // } else if (!this.isLogin) {
      //   Bus.$emit('handleLogin')
      // }
    },
    booking: function booking() {
      var _this3 = this;

      storage.getItem('userInfo', function (event) {
        var userInfo = event.data;
        if (userInfo === 'undefined' || userInfo === undefined) {
          _bus2.default.$emit('handleLogin');
        } else {
          _this3.$router.push('/booking');
        }
      });
      // if (!this.isLogin) {
      //   Bus.$emit('handleLogin')
      // }
    }
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["my-tab-bar-wrap"]
  }, [_c('div', {
    staticClass: ["tab-bar"]
  }, [_c('div', {
    staticClass: ["icon-box"],
    on: {
      "click": _vm.gotoHome
    }
  }, [_c('div', {
    staticClass: ["icon"]
  }, [_c('text', {
    staticClass: ["iconfont", "tarbar-icon"],
    class: [_vm.isActived === 0 ? 'active' : '']
  }, [_vm._v("")])]), _c('div', [_c('text', {
    staticClass: ["title"],
    class: [_vm.isActived === 0 ? 'active' : '']
  }, [_vm._v("首页")])])]), _c('div', {
    staticClass: ["icon-box"],
    on: {
      "click": _vm.gotoMe
    }
  }, [_c('div', {
    staticClass: ["icon"]
  }, [_c('text', {
    staticClass: ["iconfont", "tarbar-icon"],
    class: [_vm.isActived === 1 ? 'active' : '']
  }, [_vm._v("")])]), _c('div', [_c('text', {
    staticClass: ["title"],
    class: [_vm.isActived === 1 ? 'active' : '']
  }, [_vm._v("我的")])])])]), _c('div', {
    staticClass: ["booking-btn-outer"],
    on: {
      "click": _vm.booking
    }
  }, [_vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["booking-btn-inner"]
  }, [_c('text', {
    staticClass: ["iconfont", "iconText"]
  }, [_vm._v("")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(80)
)

/* script */
__vue_exports__ = __webpack_require__(81)

/* template */
var __vue_template__ = __webpack_require__(91)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\views\\Me.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1228f728"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = {
  "me-wrap": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "right": 0,
    "left": 0,
    "backgroundColor": "#e6efea"
  },
  "home-card": {
    "marginTop": "-100"
  },
  "scroller": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "right": 0,
    "backgroundColor": "#e6efea",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "info-front-card": {
    "width": "680",
    "marginTop": "30",
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "overflow": "hidden",
    "alignItems": "stretch",
    "marginBottom": "200"
  },
  "bar": {
    "height": "80",
    "backgroundColor": "#9ACD32",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "bar-title": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "content": {
    "height": "700",
    "width": "640",
    "borderTopLeftRadius": "12",
    "borderTopRightRadius": "12",
    "borderBottomRightRadius": "12",
    "borderBottomLeftRadius": "12",
    "backgroundColor": "#ffffff",
    "overflow": "hidden",
    "marginLeft": "31",
    "marginTop": "50",
    "justifyContent": "space-around"
  },
  "mask-title": {
    "fontSize": "50",
    "color": "#666666",
    "fontWeight": "bold",
    "textAlign": "center"
  }
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcMask = __webpack_require__(7);

var _wxcMask2 = _interopRequireDefault(_wxcMask);

var _wxcCell = __webpack_require__(86);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _TopBar = __webpack_require__(1);

var _TopBar2 = _interopRequireDefault(_TopBar);

var _HeadBlock = __webpack_require__(2);

var _HeadBlock2 = _interopRequireDefault(_HeadBlock);

var _MyCard = __webpack_require__(6);

var _MyCard2 = _interopRequireDefault(_MyCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Me',
  components: {
    TopBar: _TopBar2.default,
    HeadBlock: _HeadBlock2.default,
    MyCard: _MyCard2.default,
    WxcCell: _wxcCell2.default,
    WxcMask: _wxcMask2.default
  },
  data: function data() {
    return {
      show: false,
      maskType: 'course',
      maskInfo: {
        title: '吉他大班课程',
        time: new Date().toLocaleString(),
        teacher: 'Evan',
        courseNum: 6,
        classroom: '207'
      },
      cellStyle: {
        marginLeft: '20px',
        marginRight: '20px'
      },
      messageList: [{
        label: '课程信息',
        title: '吉他大班课程',
        desc: new Date().toLocaleDateString()
      }, {
        label: '预约消息',
        title: '琴房预约消息',
        desc: new Date().toLocaleDateString()
      }, {
        label: '课程信息',
        title: '尤克里里一对一课程',
        desc: new Date().toLocaleDateString()
      }, {
        label: '课程信息',
        title: '尤克里里一对一课程',
        desc: new Date().toLocaleDateString()
      }, {
        label: '课程信息',
        title: '尤克里里一对一课程',
        desc: new Date().toLocaleDateString()
      }, {
        label: '课程信息',
        title: '尤克里里一对一课程',
        desc: new Date().toLocaleDateString()
      }, {
        label: '预约消息',
        title: '琴房预约消息',
        desc: new Date().toLocaleDateString()
      }]
    };
  },

  methods: {
    openMask: function openMask(e) {
      this.show = true;
    },
    wxcMaskSetHidden: function wxcMaskSetHidden() {
      this.show = false;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(83)
)

/* script */
__vue_exports__ = __webpack_require__(84)

/* template */
var __vue_template__ = __webpack_require__(85)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\node_modules\\weex-ui\\packages\\wxc-mask\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1d536dbc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "width": "750",
    "zIndex": 99999
  },
  "wxc-mask": {
    "position": "fixed",
    "top": "300",
    "left": "60",
    "width": "702",
    "height": "800"
  },
  "mask-bottom": {
    "width": "100",
    "height": "100",
    "backgroundColor": "rgba(0,0,0,0)",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "mask-close-icon": {
    "width": "64",
    "height": "64"
  }
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _wxcOverlay = __webpack_require__(5);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  components: { WxcOverlay: _wxcOverlay2.default },
  props: {
    height: {
      type: [String, Number],
      default: 800
    },
    width: {
      type: [String, Number],
      default: 702
    },
    top: {
      type: Number,
      default: 0
    },
    show: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    },
    duration: {
      type: [String, Number],
      default: 300
    },
    hasOverlay: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    overlayCfg: {
      type: Object,
      default: function _default() {
        return {
          hasAnimation: true,
          timingFunction: ['ease-in', 'ease-out'],
          canAutoClose: true,
          duration: 300,
          opacity: 0.6
        };
      }
    },
    borderRadius: {
      type: [String, Number],
      default: 0
    },
    overlayCanClose: {
      type: Boolean,
      default: true
    },
    maskBgColor: {
      type: String,
      default: '#ffffff'
    }
  },
  data: function data() {
    return {
      closeIcon: 'https://gw.alicdn.com/tfs/TB1qDJUpwMPMeJjy1XdXXasrXXa-64-64.png',
      maskTop: 264,
      opened: false
    };
  },
  computed: {
    mergeOverlayCfg: function mergeOverlayCfg() {
      return _extends({}, this.overlayCfg, {
        hasAnimation: this.hasAnimation
      });
    },
    maskStyle: function maskStyle() {
      var width = this.width,
          height = this.height,
          showClose = this.showClose,
          hasAnimation = this.hasAnimation,
          opened = this.opened,
          top = this.top;

      var newHeight = showClose ? height - 0 + 100 : height;
      var _weex$config$env = weex.config.env,
          deviceHeight = _weex$config$env.deviceHeight,
          deviceWidth = _weex$config$env.deviceWidth,
          platform = _weex$config$env.platform;

      var _deviceHeight = deviceHeight || 1334;
      var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
      var navHeight = isWeb ? 0 : 130;
      var pageHeight = _deviceHeight / deviceWidth * 750 - navHeight;
      return {
        width: width + 'px',
        height: newHeight + 'px',
        left: (750 - width) / 2 + 'px',
        top: (top || (pageHeight - height) / 2) + 'px',
        opacity: hasAnimation && !opened ? 0 : 1
      };
    },
    contentStyle: function contentStyle() {
      return {
        width: this.width + 'px',
        backgroundColor: this.maskBgColor,
        height: this.height + 'px',
        borderRadius: this.borderRadius + 'px'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearMask(show);
      }, 50);
      return show;
    }
  },
  methods: {
    closeIconClicked: function closeIconClicked() {
      this.appearMask(false);
    },
    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
      if (this.hasAnimation) {
        this.appearMask(false);
        this.$emit('wxcOverlayBodyClicking', {});
      }
    },
    wxcOverlayBodyClicked: function wxcOverlayBodyClicked() {
      if (!this.hasAnimation) {
        this.appearMask(false);
        this.$emit('wxcOverlayBodyClicked', {});
      }
    },
    needEmit: function needEmit() {
      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.opened = bool;
      !bool && this.$emit('wxcMaskSetHidden', {});
    },
    appearMask: function appearMask(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction;

      var maskEl = this.$refs['wxc-mask'];
      if (hasAnimation && maskEl) {
        animation.transition(maskEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          _this2.needEmit(bool);
        });
      } else {
        this.needEmit(bool);
      }
    }
  }
};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    attrs: {
      "show": _vm.show && _vm.hasOverlay,
      "canAutoClose": _vm.overlayCanClose
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking,
      "wxcOverlayBodyClicked": _vm.wxcOverlayBodyClicked
    }
  }, 'wxc-overlay', _vm.mergeOverlayCfg, false)) : _vm._e(), (_vm.show) ? _c('div', {
    ref: "wxc-mask",
    staticClass: ["wxc-mask"],
    style: _vm.maskStyle,
    attrs: {
      "hack": _vm.shouldShow
    }
  }, [_c('div', {
    style: _vm.contentStyle
  }, [_vm._t("default")], 2), (_vm.showClose) ? _c('div', {
    staticClass: ["mask-bottom"],
    style: {
      width: _vm.width + 'px'
    },
    on: {
      "click": _vm.closeIconClicked
    }
  }, [_c('image', {
    staticClass: ["mask-close-icon"],
    attrs: {
      "src": _vm.closeIcon,
      "ariaLabel": "关闭"
    }
  })]) : _vm._e()]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(87);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(88)
)

/* script */
__vue_exports__ = __webpack_require__(89)

/* template */
var __vue_template__ = __webpack_require__(90)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-63bed4b2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#ffffff"
  },
  "cell-margin": {
    "marginBottom": "24"
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": "30",
    "paddingTop": "30"
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#e2e2e2",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "10"
  },
  "cell-arrow-icon": {
    "width": "22",
    "height": "22"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4",
    "marginRight": "30"
  },
  "extra-content-text": {
    "fontSize": "28",
    "color": "#999999",
    "marginRight": "4"
  }
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extraContent: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasMargin: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    arrowIcon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'
    },
    hasVerticalIndent: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    autoAccessible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cellClicked: function cellClicked(e) {
      var link = this.link;
      this.$emit('wxcCellClicked', { e: e });
      link && _utils2.default.goToH5Page(link, true);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    },
    on: {
      "click": _vm.cellClicked
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.extraContent) ? _c('text', {
    staticClass: ["extra-content-text"]
  }, [_vm._v(_vm._s(_vm.extraContent))]) : _vm._e(), (_vm.hasArrow) ? _c('image', {
    staticClass: ["cell-arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["me-wrap"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_c('TopBar'), _c('HeadBlock'), _c('MyCard', {
    staticClass: ["home-card"]
  }), _c('div', {
    staticClass: ["info-front-card"]
  }, [_vm._m(0), _vm._l((_vm.messageList), function(item, index) {
    return _c('wxc-cell', {
      key: index,
      attrs: {
        "label": item.label,
        "title": item.title,
        "desc": item.desc,
        "cellStyle": _vm.cellStyle,
        "hasArrow": true
      },
      on: {
        "wxcCellClicked": _vm.openMask
      }
    })
  })], 2), _c('wxc-mask', {
    attrs: {
      "borderRadius": "30",
      "maskBgColor": "#e6efea",
      "showClose": true,
      "show": _vm.show,
      "hasAnimation": false
    },
    on: {
      "wxcMaskSetHidden": _vm.wxcMaskSetHidden
    }
  }, [(_vm.maskType === 'course') ? _c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["mask-title"]
  }, [_vm._v(_vm._s(_vm.maskInfo.title))]), _c('wxc-cell', {
    attrs: {
      "label": "时间",
      "title": _vm.maskInfo.time,
      "cellStyle": _vm.cellStyle
    }
  }), _c('wxc-cell', {
    attrs: {
      "label": "老师",
      "title": _vm.maskInfo.teacher,
      "cellStyle": _vm.cellStyle
    }
  }), _c('wxc-cell', {
    attrs: {
      "label": "课室",
      "title": _vm.maskInfo.classroom,
      "cellStyle": _vm.cellStyle
    }
  }), _c('wxc-cell', {
    attrs: {
      "label": "当前课时",
      "title": ("第" + (_vm.maskInfo.courseNum) + "节课"),
      "cellStyle": _vm.cellStyle
    }
  })], 1) : _vm._e(), (_vm.maskType === 'practice') ? _c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["mask-title"]
  }, [_vm._v(_vm._s(_vm.maskInfo.title))]), _c('wxc-cell', {
    attrs: {
      "label": "开始时间",
      "title": _vm.maskInfo.time,
      "cellStyle": _vm.cellStyle
    }
  }), _c('wxc-cell', {
    attrs: {
      "label": "结束时间",
      "title": _vm.maskInfo.time,
      "cellStyle": _vm.cellStyle
    }
  }), _c('wxc-cell', {
    attrs: {
      "label": "琴房",
      "title": _vm.maskInfo.classroom,
      "cellStyle": _vm.cellStyle
    }
  })], 1) : _vm._e()])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bar"]
  }, [_c('text', {
    staticClass: ["bar-title"]
  }, [_vm._v("消息列表")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["index-wrap"]
  }, [_c(_vm.viewComponent, {
    tag: "component"
  }), _c('MyTabBar')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(94)
)

/* script */
__vue_exports__ = __webpack_require__(95)

/* template */
var __vue_template__ = __webpack_require__(96)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\views\\Test.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-36c68f66"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = {
  "outter-box": {
    "width": "750",
    "height": "200",
    "backgroundColor": "#ADFF2F"
  },
  "wrap": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  }
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcMask = __webpack_require__(7);

var _wxcMask2 = _interopRequireDefault(_wxcMask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule('storage'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: { WxcMask: _wxcMask2.default },
  created: function created() {
    var _this = this;
    storage.getItem('userInfo', function (event) {
      _this.userInfo = event.data;
    });
  },
  data: function data() {
    return {
      show: false,
      userInfo: 'init'
    };
  },

  methods: {
    openMask: function openMask(e) {
      this.show = true;
      this.hasAnimation = true;
    },
    wxcMaskSetHidden: function wxcMaskSetHidden() {
      this.show = false;
    }
  }
};

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrap"]
  }, [_c('div', {
    staticClass: ["outter-box"],
    on: {
      "click": _vm.openMask
    }
  }), _c('wxc-mask', {
    attrs: {
      "height": "800",
      "width": "702",
      "borderRadius": "0",
      "duration": "200",
      "maskBgColor": "#FFFFFF",
      "hasAnimation": true,
      "hasOverlay": true,
      "showClose": true,
      "show": _vm.show
    },
    on: {
      "wxcMaskSetHidden": _vm.wxcMaskSetHidden
    }
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["demo-title"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Weex帮助你构建原生应用")])]), _c('text', {
    staticClass: ["content-text"]
  }, [_vm._v("\n        " + _vm._s(_vm.userInfo) + "\n      ")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(98)
)

/* script */
__vue_exports__ = __webpack_require__(99)

/* template */
var __vue_template__ = __webpack_require__(100)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\views\\Login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f6ee8876"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = {
  "login-wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "flexDirection": "column",
    "alignItems": "stretch"
  },
  "login-wrapper-top": {
    "backgroundImage": "linear-gradient(to bottom, #126d40, #116f77)",
    "height": "460",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "login-wrapper-bottom": {
    "backgroundColor": "#e6efea",
    "flex": 1,
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "login-title-zh": {
    "fontWeight": "bold",
    "color": "#e6efea",
    "fontSize": "96"
  },
  "login-title-en": {
    "color": "#e6efea",
    "fontSize": "72",
    "marginBottom": "80"
  },
  "login-logo": {
    "position": "absolute",
    "width": "260",
    "height": "260",
    "left": "375",
    "marginLeft": "-130",
    "top": "460",
    "marginTop": "-130"
  },
  "input": {
    "height": "110",
    "width": "702",
    "paddingTop": "10",
    "paddingRight": "20",
    "paddingBottom": "10",
    "paddingLeft": "86",
    "borderTopLeftRadius": "6",
    "borderTopRightRadius": "6",
    "borderBottomRightRadius": "6",
    "borderBottomLeftRadius": "6"
  },
  "input-box": {
    "height": "110",
    "width": "702",
    "marginBottom": "20",
    "position": "relative",
    "overflow": "hidden"
  },
  "input-icon": {
    "width": "70",
    "height": "70",
    "position": "absolute",
    "left": "12",
    "top": "55",
    "marginTop": "-35",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "icon": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#666666"
  },
  "change-to-register": {
    "position": "absolute",
    "bottom": "30",
    "right": "30",
    "fontSize": "30",
    "color": "#19be6b"
  }
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcButton = __webpack_require__(3);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var storage = weex.requireModule('storage');
exports.default = {
  name: 'Login',
  components: {
    WxcButton: _wxcButton2.default
  },
  data: function data() {
    return {
      logoSrc: this.$getImg('logo2.png'),
      formText: '注册用户',
      formType: 'login',
      userName: '',
      password: '',
      comfirmPassword: ''
    };
  },

  methods: {
    login: function login() {
      var _this = this;
      var rawbody = {
        username: this.userName,
        password: this.password
      };
      var body = JSON.stringify(rawbody);
      stream.fetch({
        method: 'POST',
        url: 'https://www.easy-mock.com/mock/5c8e1696c12de836b263653b/weexapi/login',
        type: 'json',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      }, function (res) {
        console.log(res.data);
        var strData = JSON.stringify(res.data.data);
        modal.toast({
          message: res.data.msg,
          duration: 1
        });
        if (res.data.code === 1) {
          storage.setItem('userInfo', strData);
          setTimeout(function () {
            _this.$router.push('/index');
          }, 1000);
        }
      });
    },
    register: function register() {
      console.log('username', this.userName);
      console.log('password', this.password);
      console.log('comfirmPassword', this.comfirmPassword);
      modal.toast({
        message: 'register',
        duration: 1
      });
    },
    onInputUsername: function onInputUsername(e) {
      this.userName = e.value;
    },
    onInputPassword: function onInputPassword(e) {
      this.password = e.value;
    },
    onInputconfirm: function onInputconfirm(e) {
      this.comfirmPassword = e.value;
    },
    changeForm: function changeForm() {
      if (this.formType === 'login') {
        this.formText = '返回登录';
        this.formType = 'register';
      } else {
        this.formText = '注册用户';
        this.formType = 'login';
      }
    }
  }
};

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["login-wrapper"]
  }, [_vm._m(0), (_vm.formType === 'login') ? _c('div', {
    staticClass: ["login-wrapper-bottom"]
  }, [_c('div', {
    staticClass: ["input-box"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入用户名",
      "autocomplete": "off",
      "returnKeyType": "next"
    },
    on: {
      "input": _vm.onInputUsername
    }
  }), _vm._m(1)]), _c('div', {
    staticClass: ["input-box"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": "请输入密码",
      "autocomplete": "off",
      "returnKeyType": "done"
    },
    on: {
      "input": _vm.onInputPassword
    }
  }), _vm._m(2)]), _c('wxc-button', {
    attrs: {
      "text": "登录",
      "type": "green",
      "btnStyle": {
        height: '110px',
        marginBottom: '20px'
      },
      "textStyle": {
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#E6EFEA'
      }
    },
    on: {
      "wxcButtonClicked": _vm.login
    }
  })], 1) : _vm._e(), (_vm.formType === 'register') ? _c('div', {
    staticClass: ["login-wrapper-bottom"]
  }, [_c('div', {
    staticClass: ["input-box"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入用户名",
      "autocomplete": "off",
      "returnKeyType": "next"
    },
    on: {
      "input": _vm.onInputUsername
    }
  }), _vm._m(3)]), _c('div', {
    staticClass: ["input-box"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": "请输入密码",
      "autocomplete": "off",
      "returnKeyType": "next"
    },
    on: {
      "input": _vm.onInputPassword
    }
  }), _vm._m(4)]), _c('div', {
    staticClass: ["input-box"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": "确认密码",
      "autocomplete": "off",
      "returnKeyType": "done"
    },
    on: {
      "input": _vm.onInputconfirm
    }
  }), _vm._m(5)]), _c('wxc-button', {
    attrs: {
      "text": "注册",
      "type": "green",
      "btnStyle": {
        height: '110px',
        marginBottom: '20px'
      },
      "textStyle": {
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#E6EFEA'
      }
    },
    on: {
      "wxcButtonClicked": _vm.register
    }
  })], 1) : _vm._e(), _c('text', {
    staticClass: ["change-to-register"],
    on: {
      "click": _vm.changeForm
    }
  }, [_vm._v(_vm._s(_vm.formText))]), _c('image', {
    staticClass: ["login-logo"],
    attrs: {
      "src": _vm.logoSrc
    }
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["login-wrapper-top"]
  }, [_c('text', {
    staticClass: ["login-title-zh"]
  }, [_vm._v("伯雅音乐")]), _c('text', {
    staticClass: ["login-title-en"]
  }, [_vm._v("Boya Music")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["input-icon"]
  }, [_c('text', {
    staticClass: ["iconfont", "icon"]
  }, [_vm._v("")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["input-icon"]
  }, [_c('text', {
    staticClass: ["iconfont", "icon"]
  }, [_vm._v("")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["input-icon"]
  }, [_c('text', {
    staticClass: ["iconfont", "icon"]
  }, [_vm._v("")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["input-icon"]
  }, [_c('text', {
    staticClass: ["iconfont", "icon"]
  }, [_vm._v("")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["input-icon"]
  }, [_c('text', {
    staticClass: ["iconfont", "icon"]
  }, [_vm._v("")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(102)
)

/* script */
__vue_exports__ = __webpack_require__(103)

/* template */
var __vue_template__ = __webpack_require__(130)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\views\\Booking.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ebf94896"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = {
  "booking-wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "scroller": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "right": 0,
    "backgroundColor": "#e6efea",
    "alignItems": "center"
  },
  "front-card": {
    "width": "680",
    "height": "650",
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "position": "absolute",
    "top": "330",
    "marginTop": "-100",
    "left": "375",
    "marginLeft": "-340",
    "overflow": "hidden",
    "alignItems": "center"
  },
  "checkbox-position-box": {
    "paddingTop": "30",
    "paddingRight": "20",
    "paddingBottom": "30",
    "paddingLeft": "20",
    "width": "680"
  },
  "bar": {
    "width": "680",
    "height": "99",
    "backgroundColor": "#ffb200",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "bar-label": {
    "color": "#ffffff",
    "fontSize": "32"
  },
  "select-bar": {
    "width": "646",
    "height": "80",
    "borderTopColor": "#aaaaaa",
    "borderTopStyle": "solid",
    "borderTopWidth": "2",
    "borderRightColor": "#aaaaaa",
    "borderRightStyle": "solid",
    "borderRightWidth": "2",
    "borderBottomColor": "#aaaaaa",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "2",
    "borderLeftColor": "#aaaaaa",
    "borderLeftStyle": "solid",
    "borderLeftWidth": "2",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "marginTop": "30",
    "paddingTop": "10",
    "paddingRight": "100",
    "paddingBottom": "10",
    "paddingLeft": "40",
    "justifyContent": "center",
    "position": "relative"
  },
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "select-icon": {
    "position": "absolute",
    "right": "20",
    "fontSize": "46",
    "color": "#aaaaaa"
  },
  "select-date": {
    "fontSize": "36",
    "color": "#666666"
  },
  "search-btn": {
    "width": "130",
    "height": "130",
    "position": "absolute",
    "top": "880",
    "borderTopLeftRadius": "130",
    "borderTopRightRadius": "130",
    "borderBottomRightRadius": "130",
    "borderBottomLeftRadius": "130",
    "backgroundColor": "#ff9900",
    "marginTop": "-65",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "search-icon": {
    "fontSize": "110",
    "color": "#ffffff"
  },
  "search-list-warp": {
    "width": "680",
    "position": "absolute",
    "top": "980",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "marginBottom": "30"
  }
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcCell = __webpack_require__(86);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _wxcGridSelect = __webpack_require__(104);

var _wxcGridSelect2 = _interopRequireDefault(_wxcGridSelect);

var _TopBar = __webpack_require__(1);

var _TopBar2 = _interopRequireDefault(_TopBar);

var _HeadBlock = __webpack_require__(2);

var _HeadBlock2 = _interopRequireDefault(_HeadBlock);

var _weexXPicker = __webpack_require__(113);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Booking',
  components: {
    HeadBlock: _HeadBlock2.default,
    TopBar: _TopBar2.default,
    WxcGridSelect: _wxcGridSelect2.default,
    XPicker: _weexXPicker.XPicker,
    WxcCell: _wxcCell2.default
  },
  computed: {
    getYearSection: function getYearSection() {
      var startYear = new Date().getFullYear();
      var endYear = new Date().getFullYear();
      return [startYear, endYear];
    }
  },
  data: function data() {
    return {
      // 选择组件初始化时有闪烁的bug，用isShow延迟60毫秒处理闪烁问题
      isShow: false,
      showPicker: false,
      selectDate: '',
      customStyles: {
        lineSpacing: '14px',
        width: '200px',
        height: '90px',
        icon: '',
        color: '#333333',
        checkedColor: '#ffffff',
        disabledColor: '#eeeeee',
        borderColor: '#666666',
        checkedBorderColor: '#54AD7B',
        backgroundColor: '#ffffff',
        checkedBackgroundColor: '#54AD7B'
      },
      roomTypeList: [{
        title: '吉他',
        checked: true
      }, {
        title: '钢琴'
      }, {
        title: '尤克里里'
      }, {
        title: '古筝'
      }, {
        title: '架子鼓'
      }, {
        title: '小提琴'
      }],
      roomList: [{
        room: '201',
        time: '9:00-10:00'
      }, {
        room: '207',
        time: '9:00-10:00'
      }, {
        room: '210',
        time: '13:00-14:00'
      }, {
        room: '201',
        time: '13:00-14:00'
      }, {
        room: '210',
        time: '10:00-11:00'
      }, {
        room: '207',
        time: '19:00-20:00'
      }, {
        room: '201',
        time: '15:00-16:00'
      }]
    };
  },

  methods: {
    selectRoom: function selectRoom() {
      console.log('select room');
    },
    openPicker: function openPicker() {
      var _this = this;
      this.showPicker = true;
      setTimeout(function () {
        _this.isShow = true;
      }, 60);
    },
    pickerOverlayClick: function pickerOverlayClick(e) {
      this.showPicker = false;
      this.isShow = false;
    },

    // 日期选择事件
    change: function change(e) {
      console.log(e);
      var date = new Date(e.titles.join('-')).toLocaleDateString();
      this.selectDate = date;
    },

    // 预约点击事件
    wxcCellClicked: function wxcCellClicked(e) {
      console.log(e);
    },

    // 搜索琴房
    search: function search() {
      console.log('search');
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(105);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(106)
)

/* script */
__vue_exports__ = __webpack_require__(107)

/* template */
var __vue_template__ = __webpack_require__(112)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\node_modules\\weex-ui\\packages\\wxc-grid-select\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-39973ea2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = {
  "grid-select": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  }
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _option = __webpack_require__(108);

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { Option: _option2.default },
  props: {
    // 标识, 当界面展示多个grid, 防止v-for :key重复
    id: {
      type: String,
      default: 'one'
    },
    // 列数
    cols: {
      type: Number,
      default: 4
    },
    // 是否单选
    single: {
      type: Boolean,
      default: false
    },
    // 数据
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 选择个数限制
    limit: {
      type: Number
    },
    // 用户自定义样式，用于个性化设置option样式
    customStyles: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      dList: this.initList()
    };
  },

  computed: {
    cHackList: function cHackList() {
      var list = this.list,
          cols = this.cols;

      var remainder = list.length % cols;
      var len = remainder ? cols - remainder : 0;

      return Array.apply(null, { length: len });
    }
  },
  watch: {
    list: function list() {
      this.dList = this.initList();
    }
  },
  created: function created() {
    // 行间距
    this.lineSpacing = this.customStyles.lineSpacing || '12px';
  },

  methods: {
    onSelect: function onSelect(index) {
      var checked = this.dList[index].checked;
      if (this.limit <= this.checkedCount && !checked) {
        this.$emit('overLimit', this.limit);
      } else {
        this.updateList(index);
        this.$emit('select', {
          selectIndex: index,
          checked: !checked,
          checkedList: this.dList.filter(function (item) {
            return item.checked;
          })
        });
      }
    },
    initList: function initList() {
      var single = this.single;
      var checkedCount = 0;

      var dList = this.list.map(function (item, i) {
        var checked = item.checked,
            disabled = item.disabled;

        disabled = !!disabled;
        // disabled为true时认为checked无效，同时单选模式下只认为第一个checked为true的为有效值
        checked = !disabled && !!checked && (!single || checkedCount === 0);
        if (item.checked) checkedCount += 1;
        return _extends({}, item, {
          checked: checked,
          disabled: disabled
        });
      });

      this.checkedCount = checkedCount;
      return dList;
    },
    updateList: function updateList(index) {
      var single = this.single;
      var checkedCount = 0;
      this.dList = this.dList.map(function (item, i) {
        if (single) {
          item.checked = index === i && !item.checked;
        } else {
          if (i === index) item.checked = !item.checked;
        }
        if (item.checked) checkedCount += 1;
        return item;
      });
      this.checkedCount = checkedCount;
    }
  }
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(109)
)

/* script */
__vue_exports__ = __webpack_require__(110)

/* template */
var __vue_template__ = __webpack_require__(111)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\node_modules\\weex-ui\\packages\\wxc-grid-select\\option.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a962fa30"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = {
  "grid-option": {
    "justifyContent": "center",
    "borderTopLeftRadius": "8",
    "borderTopRightRadius": "8",
    "borderBottomRightRadius": "8",
    "borderBottomLeftRadius": "8",
    "borderWidth": "2",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "text-title": {
    "lines": 2,
    "lineHeight": "30",
    "textOverflow": "ellipsis",
    "textAlign": "center",
    "fontSize": "26"
  },
  "image-checked": {
    "position": "absolute",
    "right": 0,
    "bottom": 0,
    "width": "38",
    "height": "34"
  }
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    index: {
      type: Number,
      default: -1
    },
    // 是否选中
    checked: {
      type: Boolean,
      default: false
    },
    // 是否可选
    disabled: {
      type: Boolean,
      default: false
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '166px'
    },
    height: {
      type: String,
      default: '72px'
    },
    // 默认 x
    icon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB1IAByhgMPMeJjy1XdXXasrXXa-38-34.png'
    },
    // 正常状态文字色值
    color: {
      type: String,
      default: '#3d3d3d'
    },
    // 选中状态文字色值
    checkedColor: {
      type: String,
      default: '#3d3d3d'
    },
    // 不可选状态文字色值
    disabledColor: {
      type: String,
      default: '#9b9b9b'
    },
    // 正常状态边框色值
    borderColor: {
      type: String,
      default: 'transparent'
    },
    // 选中状态边框色值
    checkedBorderColor: {
      type: String,
      default: '#ffb200'
    },
    // 不可选状态边框色值
    disabledBorderColor: {
      type: String,
      default: 'transparent'
    },
    // 正常状态背景色值
    backgroundColor: {
      type: String,
      default: '#f6f6f6'
    },
    // 选中状态背景色值
    checkedBackgroundColor: {
      type: String,
      default: '#ffffff'
    },
    // 不可选状态背景色值
    disabledBackgroundColor: {
      type: String,
      default: '#f6f6f6'
    }
  },
  computed: {
    cWrapperStyle: function cWrapperStyle() {
      var checked = this.checked,
          disabled = this.disabled,
          width = this.width,
          height = this.height,
          borderColor = this.borderColor,
          checkedBorderColor = this.checkedBorderColor,
          disabledBorderColor = this.disabledBorderColor,
          backgroundColor = this.backgroundColor,
          checkedBackgroundColor = this.checkedBackgroundColor,
          disabledBackgroundColor = this.disabledBackgroundColor;

      return {
        width: width,
        height: height,
        borderColor: disabled ? disabledBorderColor : checked ? checkedBorderColor : borderColor,
        backgroundColor: disabled ? disabledBackgroundColor : checked ? checkedBackgroundColor : backgroundColor
      };
    },
    cTitleStyle: function cTitleStyle() {
      var checked = this.checked,
          disabled = this.disabled,
          color = this.color,
          checkedColor = this.checkedColor,
          disabledColor = this.disabledColor;

      return {
        color: disabled ? disabledColor : checked ? checkedColor : color
      };
    }
  },
  methods: {
    onClick: function onClick() {
      if (!this.disabled) {
        this.$emit('select', this.index);
      }
    }
  }
};

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid-option"],
    style: _vm.cWrapperStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": (_vm.title + "," + (_vm.checked?'已选中':'未选中'))
    },
    on: {
      "click": _vm.onClick
    }
  }, [(_vm.title) ? _c('text', {
    staticClass: ["text-title"],
    style: _vm.cTitleStyle
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (_vm.checked && _vm.icon) ? _c('image', {
    staticClass: ["image-checked"],
    attrs: {
      "src": _vm.icon
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid-select"]
  }, [_vm._l((_vm.dList), function(item, index) {
    return _c('option', _vm._b({
      key: index,
      style: {
        marginTop: index >= _vm.cols ? _vm.lineSpacing : null
      },
      attrs: {
        "index": index
      },
      on: {
        "select": function($event) {
          _vm.onSelect(index)
        }
      }
    }, 'option', Object.assign({}, _vm.customStyles, item), false))
  }), _vm._l((_vm.cHackList), function(item, index) {
    return _c('option', _vm._b({
      key: _vm.id + index,
      style: {
        opacity: 0,
        marginTop: _vm.dList.length >= _vm.cols ? _vm.lineSpacing : null
      }
    }, 'option', Object.assign({}, _vm.customStyles, item), false))
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XPicker = undefined;

var _index = __webpack_require__(114);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.XPicker = _index2.default;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(115)
)

/* script */
__vue_exports__ = __webpack_require__(116)

/* template */
var __vue_template__ = __webpack_require__(129)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\node_modules\\weex-x-picker\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-59f0a001"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = {
  "picker": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "width": "750",
    "flex": 1
  },
  "picker-content": {
    "width": "750",
    "height": "450",
    "flexDirection": "row"
  },
  "picker-btn": {
    "width": "750",
    "height": "100",
    "textAlign": "right",
    "flexDirection": "row-reverse"
  },
  "picker-btn-text": {
    "color": "#FA4D50",
    "fontSize": "32",
    "marginRight": "40",
    "lineHeight": "100"
  },
  "picker-item": {
    "position": "relative",
    "top": 0,
    "height": "450",
    "paddingLeft": 0,
    "paddingRight": 0,
    "paddingTop": 0,
    "paddingBottom": 0,
    "overflowX": "hidden",
    "overflowY": "scroll"
  },
  "picker-item-list": {
    "height": "448",
    "paddingLeft": "4",
    "paddingRight": "4"
  },
  "picker-item-text": {
    "height": "90",
    "lineHeight": "90",
    "fontSize": "40",
    "textAlign": "center",
    "wordWrap": "normal",
    "whiteSpace": "nowrap"
  },
  "picker-bar": {
    "position": "absolute",
    "borderTopWidth": "4",
    "borderTopStyle": "solid",
    "borderTopColor": "#FA4D50",
    "borderBottomWidth": "4",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#FA4D50"
  },
  "ipx-bottom": {
    "paddingBottom": "30"
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcPopup = __webpack_require__(117);

var _wxcPopup2 = _interopRequireDefault(_wxcPopup);

var _type = __webpack_require__(127);

var _type2 = _interopRequireDefault(_type);

var _area = __webpack_require__(128);

var _area2 = _interopRequireDefault(_area);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var componentWidth = '750';
var platform = weex.config.env.platform.toLowerCase();
var defaultPadding = 15;

var dom = weex.requireModule('dom');

exports.default = {
  name: "x-picker",
  components: { WxcPopup: _wxcPopup2.default },
  data: function data() {
    return {
      showPopup: false,

      pickerWidth: 750,

      pickerHeight: 450,

      pickerBarHeight: 90,

      pickerItemTextHeight: 90,

      column: 3,

      col_1_ref: 'picker_col_1',

      col_2_ref: 'picker_col_2',

      col_3_ref: 'picker_col_3',

      col_1_list: [],

      col_2_list: [],

      col_3_list: [],

      checked_col_1: 0,

      checked_col_2: 0,

      checked_col_3: 0,

      webPickerTimer: null

    };
  },
  props: {
    // 是否显示 picker
    show: {
      type: Boolean,
      default: false
    },
    // 类型   signle（单选） area（区域） section(区间) date（日期） time（时间）
    type: {
      type: String,
      default: 'single'
    },
    dataset: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    yearSection: {
      type: Array,
      default: function _default() {
        return [1949, new Date().getFullYear()];
      }
    },
    linkageColumn: {
      type: Number,
      default: 2
    },
    defaultTitle: {
      type: String,
      dafault: null
    }
  },
  created: function created() {

    // 初始化列数
    this.changeColumn();

    // 初始化列数据
    this.initColumns();
  },

  computed: {
    pickerItemStyle: function pickerItemStyle() {
      var style = {};
      var width = this.pickerWidth / this.column;
      style['width'] = width + 'px';
      return style;
    },
    pickerItemTextStyle: function pickerItemTextStyle() {
      var style = {};
      var width = this.pickerWidth / this.column;
      style['width'] = width + 'px';
      return style;
    },
    pickerBarStyle: function pickerBarStyle() {
      var style = {};

      var margin = 4;
      var width = this.pickerWidth / this.column - margin * 2;
      var top = this.pickerHeight / 2 - this.pickerBarHeight / 2;
      style['width'] = width + 'px';
      style['top'] = top + 'px';
      style['height'] = this.pickerBarHeight + 'px';
      style['marginLeft'] = margin + 'px';
      style['marginRight'] = margin + 'px';
      if (this.isWeb()) style['position'] = 'fixed';
      return style;
    }
  },
  methods: {
    numAdd: function numAdd() {
      for (var _len = arguments.length, num = Array(_len), _key = 0; _key < _len; _key++) {
        num[_key] = arguments[_key];
      }

      return num.reduce(function (ret, item) {
        ret += item;
        return ret;
      }, 0);
    },

    // 判断 是否是iphonex
    isipx: function isipx() {
      return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
    },
    isWeb: function isWeb() {
      return 'web' === platform;
    },
    PopupOverlayClick: function PopupOverlayClick(e) {
      this.$emit('overlayClick', e);
    },
    changeColumn: function changeColumn() {
      var type = this.type;

      if (_type2.default.area === type) {
        this.column = 3;
      } else if (_type2.default.section === type) {
        this.column = 2;
      } else if (_type2.default.date === type) {
        this.column = 3;
      } else if (_type2.default.time === type) {
        this.column = 2;
      } else if (_type2.default.linkage === type) {
        this.column = this.linkageColumn;
      } else {
        this.column = 1;
      }
    },
    initColumns: function initColumns() {

      var type = this.type;
      var dataset = this.dataset;

      if (_type2.default.area === type && dataset.length == 0) {
        // 如果选择了区域，且没有指定数据集时使用默认数据集
        dataset = _area2.default;
      }

      if (_type2.default.section === type) {
        if (this.column > 0) {
          this.col_1_list = dataset[0];
          this.checked_col_1 = 0;
        }
        if (this.column > 1) {
          this.col_2_list = dataset[1];
          this.checked_col_2 = 0;
        }
      } else if (_type2.default.date === type) {
        if (this.column > 0) {
          this.col_1_list = this.generTimeYear();
          this.checked_col_1 = 0;
        }
        if (this.column > 1) {
          this.col_2_list = this.generTimeMonth();
          this.checked_col_2 = 0;
        }
        if (this.column > 2) {
          this.col_3_list = this.generTimeDate();
          this.checked_col_3 = 0;
        }
      } else if (_type2.default.time === type) {
        if (this.column > 0) {
          this.col_1_list = this.generTimeHour();
          this.checked_col_1 = 0;
        }
        if (this.column > 1) {
          this.col_2_list = this.generTimeMinute();
          this.checked_col_2 = 0;
        }
      } else {
        if (this.column > 0) {
          this.col_1_list = dataset;
          this.checked_col_1 = 0;
        }
        if (this.column > 1) {
          this.col_2_list = this.col_1_list && this.col_1_list[0] && this.col_1_list[0].children || [];
          this.checked_col_2 = 0;
        }
        if (this.column > 2) {
          this.col_3_list = this.col_2_list && this.col_2_list[0] && this.col_2_list[0].children || [];
          this.checked_col_3 = 0;
        }
      }

      if (this.defaultTitle) {
        this.refreshCheckedByDefaultTitle();
      }

      this.refreshColumns();
    },
    refreshColumns: function refreshColumns() {
      var _self = this;
      var timer = setTimeout(function () {
        clearTimeout(timer);
        _self.checkedItem(_self.col_1_ref, _self.checked_col_1);
        timer = setTimeout(function () {
          clearTimeout(timer);
          _self.checkedItem(_self.col_2_ref, _self.checked_col_2);
          timer = setTimeout(function () {
            clearTimeout(timer);
            _self.checkedItem(_self.col_3_ref, _self.checked_col_3);
          }, 30);
        }, 15);
      }, 5);
    },
    onScroll: function onScroll(e) {},
    scrollEnd: function scrollEnd(e, ref) {

      console.log('scroll end');
      console.log('current checked', this.checked_col_1);

      var check_col = 0;
      if (this.col_1_ref == ref) {
        check_col = this.checked_col_1;
      } else if (this.col_2_ref == ref) {
        check_col = this.checked_col_2;
      } else if (this.col_3_ref == ref) {
        check_col = this.checked_col_3;
      }

      this.checkedItem(ref, check_col);

      if (this.column > 1) {
        var refarr = ref.split('_');
        var crt_col = parseInt(refarr[2]);

        if (!~[_type2.default.time, _type2.default.section].indexOf(this.type)) {
          this.updateOtherCol(crt_col + 1);
        }
      }
    },
    appearPickItem: function appearPickItem(e, ref, index) {

      if (!e.direction) {
        return;
      }

      console.log('appear ', ref, ' ', index, e.direction);

      var checked_index = index + (e.direction == 'down' ? 2 : -2);
      checked_index -= 2;
      if (checked_index < 0) {
        checked_index = 0;
      }

      if (this.col_1_ref == ref) {
        this.checked_col_1 = checked_index >= this.col_1_list.length ? this.col_1_list.length - 1 : checked_index;
      } else if (this.col_2_ref == ref) {
        this.checked_col_2 = checked_index >= this.col_2_list.length ? this.col_2_list.length - 1 : checked_index;
      } else if (this.col_3_ref == ref) {
        this.checked_col_3 = checked_index >= this.col_3_list.length ? this.col_3_list.length - 1 : checked_index;
      }

      if (this.isWeb()) {
        var _self = this;
        if (this.webPickerTimer) {
          clearTimeout(this.webPickerTimer);
        }
        this.webPickerTimer = setTimeout(function () {
          clearTimeout(_self.webPickerTimer);
          _self.webPickerTimer = null;
          _self.scrollEnd(e, ref);
        }, 500);
      }
    },
    disAppearPickItem: function disAppearPickItem(e, ref, index) {

      if (!e.direction) {
        return;
      }

      console.log('disappear ', ref, ' ', index, e.direction);

      var checked_index = index + (e.direction == 'up' ? 3 : -3);
      checked_index -= 2;
      if (checked_index < 0) {
        checked_index = 0;
      }

      if (this.col_1_ref == ref) {
        this.checked_col_1 = checked_index >= this.col_1_list.length ? this.col_1_list.length - 1 : checked_index;
      } else if (this.col_2_ref == ref) {
        this.checked_col_2 = checked_index >= this.col_2_list.length ? this.col_2_list.length - 1 : checked_index;
      } else if (this.col_3_ref == ref) {
        this.checked_col_3 = checked_index >= this.col_3_list.length ? this.col_3_list.length - 1 : checked_index;
      }

      if (this.isWeb()) {
        var _self = this;

        if (this.webPickerTimer) {
          clearTimeout(this.webPickerTimer);
        }
        this.webPickerTimer = setTimeout(function () {
          clearTimeout(_self.webPickerTimer);
          _self.webPickerTimer = null;
          _self.scrollEnd(e, ref);
        }, 500);
      }
    },


    // 更新其他列
    updateOtherCol: function updateOtherCol(col) {

      var col_ref = null;

      if (_type2.default.date === this.type) {
        if (col == 2) {
          col_ref = this.col_2_ref;
          this.col_2_list = this.generTimeMonth();
          this.checked_col_2 = 0;
        } else if (col == 3) {
          col_ref = this.col_3_ref;
          this.col_3_list = this.generTimeDate();
          this.checked_col_3 = 0;
        }
      } else {
        if (col == 2) {
          col_ref = this.col_2_ref;
          var prt_item = this.col_1_list[this.checked_col_1] || {};
          this.col_2_list = 'children' in prt_item ? prt_item.children : [];
          this.checked_col_2 = 0;
        } else if (col == 3) {
          col_ref = this.col_3_ref;
          var prt_item = this.col_2_list[this.checked_col_2] || {};
          this.col_3_list = 'children' in prt_item ? prt_item.children : [];
          this.checked_col_3 = 0;
        }
      }
      if (col_ref) {
        this.checkedItem(col_ref, 0);

        if (this.column > col) {
          this.updateOtherCol(col + 1);
        }
      }
    },


    // 选择 某列 某项
    checkedItem: function checkedItem(ref, idx) {
      var scrollToItem = null;
      if (!ref) return;

      scrollToItem = this.$refs[ref + '_text_' + idx];

      if (scrollToItem) {
        scrollToItem = Array.isArray(scrollToItem) ? scrollToItem.length > 0 ? scrollToItem[0] : null : scrollToItem;
        if (scrollToItem) {
          dom.scrollToElement(scrollToItem, { animated: true });
        }
      }
    },
    generTimeYear: function generTimeYear() {
      var yearSection = this.yearSection;
      var maxYear = Math.max.apply(Math, _toConsumableArray(yearSection)) || new Date().getFullYear();
      var minYear = Math.min.apply(Math, _toConsumableArray(yearSection)) || 1949;
      var dataset = Array.from({ length: maxYear - minYear + 1 }).map(function (item, index) {
        return {
          title: maxYear - index + '',
          value: maxYear - index
        };
      });
      return dataset;
    },
    generTimeMonth: function generTimeMonth() {
      var dataset = Array.from({ length: 12 }).map(function (item, index) {
        return {
          title: index + 1 > 9 ? index + 1 + '' : '0' + (index + 1),
          value: index + 1
        };
      });
      return dataset;
    },
    generTimeDate: function generTimeDate() {
      var result = this.getResult();
      var values = result.values;
      var year = values[0];
      var month = values[1];
      var dateCount = new Date(year, month, 0).getDate();
      var dataset = Array.from({ length: dateCount }).map(function (item, index) {
        return {
          title: index + 1 > 9 ? index + 1 + '' : '0' + (index + 1),
          value: index + 1
        };
      });
      return dataset;
    },
    generTimeHour: function generTimeHour() {
      var dataset = Array.from({ length: 24 }).map(function (item, index) {
        return {
          title: index > 9 ? '' + index : '0' + index,
          value: index
        };
      });
      return dataset;
    },
    generTimeMinute: function generTimeMinute() {
      var dataset = Array.from({ length: 60 }).map(function (item, index) {
        return {
          title: index > 9 ? '' + index : '0' + index,
          value: index
        };
      });
      return dataset;
    },
    findItemByTitle: function findItemByTitle(ref, title) {
      var arr = null;
      if (this.col_1_ref == ref) {
        arr = this.col_1_list;
      } else if (this.col_2_ref == ref) {
        arr = this.col_2_list;
      } else if (this.col_3_ref == ref) {
        arr = this.col_3_list;
      }
      return this.findIndexByTitle(arr, title);
    },
    findIndexByTitle: function findIndexByTitle(arr, t) {
      var idx = -1;
      if (!arr) {
        return idx;
      }
      console.log('find index title ,arr length :', arr.length);
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var title = item.title;
        if (t === title) {
          idx = i;
          break;
        }
      }
      return idx;
    },
    getResult: function getResult() {
      var rst = {};
      var titles = [];
      var values = [];
      var checked = [];

      if (this.col_1_list.length > 0) {
        if (this.checked_col_1 >= 0 && this.checked_col_1 < this.col_1_list.length && this.col_1_list[this.checked_col_1]) {
          var checkobj = Object.assign({}, this.col_1_list[this.checked_col_1] || {});
          var title = 'title' in checkobj ? checkobj.title : '';
          var value = 'value' in checkobj ? checkobj.value : title;
          titles.push(title);
          values.push(value);
          checkobj.children && delete checkobj.children;
          checked.push(checkobj);
        } else {
          titles.push(null);
          values.push(null);
          checked.push(null);
        }
      } else {
        titles.push(null);
        values.push(null);
        checked.push(null);
      }

      if (this.column > 1) {
        if (this.col_2_list.length > 0) {
          if (this.checked_col_2 >= 0 && this.checked_col_2 < this.col_2_list.length && this.col_2_list[this.checked_col_2]) {
            var checkobj = Object.assign({}, this.col_2_list[this.checked_col_2] || {});
            var title = 'title' in checkobj ? checkobj.title : '';
            var value = 'value' in checkobj ? checkobj.value : title;
            titles.push(title);
            values.push(value);
            checkobj.children && delete checkobj.children;
            checked.push(checkobj);
          } else {
            titles.push(null);
            values.push(null);
            checked.push(null);
          }
        } else {
          titles.push(null);
          values.push(null);
          checked.push(null);
        }
      }

      if (this.column > 2) {
        if (this.col_3_list.length > 0) {
          if (this.checked_col_3 >= 0 && this.checked_col_3 < this.col_3_list.length && this.col_3_list[this.checked_col_3]) {
            var checkobj = Object.assign({}, this.col_3_list[this.checked_col_3] || {});
            var title = 'title' in checkobj ? checkobj.title : '';
            var value = 'value' in checkobj ? checkobj.value : title;
            titles.push(title);
            values.push(value);
            checkobj.children && delete checkobj.children;
            checked.push(checkobj);
          } else {
            titles.push(null);
            values.push(null);
            checked.push(null);
          }
        } else {
          titles.push(null);
          values.push(null);
          checked.push(null);
        }
      }
      rst['titles'] = titles;
      rst['values'] = values;
      rst['title'] = titles.join(' ');
      rst['value'] = values.join(' ');
      rst['checked'] = checked;
      return rst;
    },


    // 当点击确定时
    change: function change(e) {

      var event = this.getResult();

      this.$emit('onchange', event);

      this.cancel(e);
    },
    cancel: function cancel(e) {
      this.PopupOverlayClick(e);
    },
    refreshCheckedByDefaultTitle: function refreshCheckedByDefaultTitle() {
      var defaultTitle = this.defaultTitle || '';

      var arr = defaultTitle.split(' ');
      if (arr.length > 0) {
        this.checked_col_1 = this.findItemByTitle(this.col_1_ref, arr[0]);
        this.checked_col_1 = this.checked_col_1 < 0 ? 0 : this.checked_col_1;
      }
      if (arr.length > 1) {
        this.checked_col_2 = this.findItemByTitle(this.col_2_ref, arr[1]);
        this.checked_col_2 = this.checked_col_2 < 0 ? 0 : this.checked_col_2;
      }
      if (arr.length > 2) {
        this.checked_col_3 = this.findItemByTitle(this.col_3_ref, arr[2]);
        this.checked_col_3 = this.checked_col_3 < 0 ? 0 : this.checked_col_3;
      }
    }
  },
  watch: {
    show: function show(crt) {
      if (crt) {
        this.refreshCheckedByDefaultTitle();
        this.refreshColumns();
      }
    },
    type: function type() {
      this.changeColumn();
      this.initColumns();
    },
    dataset: function dataset(crt) {
      if (!crt) this.dataset = [];
      this.changeColumn();
      this.initColumns();
    },
    linkageColumn: function linkageColumn(crt) {
      this.column = crt;
    },
    defaultTitle: function defaultTitle(crt, old) {
      if (crt == old) return;
      this.refreshCheckedByDefaultTitle();
      this.refreshColumns();
    }
  }
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(118);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(119)
)

/* script */
__vue_exports__ = __webpack_require__(120)

/* template */
var __vue_template__ = __webpack_require__(126)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\node_modules\\weex-x-picker\\wxc-popup\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6a6749e6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-popup": {
    "position": "fixed",
    "width": "750"
  },
  "top": {
    "left": 0,
    "right": 0
  },
  "bottom": {
    "left": 0,
    "right": 0
  },
  "left": {
    "bottom": 0,
    "top": 0
  },
  "right": {
    "bottom": 0,
    "top": 0
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _wxcOverlay = __webpack_require__(121);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
var platform = weex.config.env.platform;

var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
exports.default = {
  components: { WxcOverlay: _wxcOverlay2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: 'bottom'
    },
    popupColor: {
      type: String,
      default: '#FFFFFF'
    },
    overlayCfg: {
      type: Object,
      default: function _default() {
        return {
          hasAnimation: true,
          timingFunction: ['ease-in', 'ease-out'],
          duration: 300,
          opacity: 0.6
        };
      }
    },
    height: {
      type: [Number, String],
      default: 840
    },
    standOut: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 750
    },
    animation: {
      type: Object,
      default: function _default() {
        return {
          timingFunction: 'ease-in'
        };
      }
    }
  },
  data: function data() {
    return {
      haveOverlay: true,
      isOverShow: true
    };
  },
  computed: {
    isNeedShow: function isNeedShow() {
      var _this = this;

      setTimeout(function () {
        _this.appearPopup(_this.show);
      }, 50);
      return this.show;
    },
    _height: function _height() {
      this.appearPopup(this.show, 150);
      return this.height;
    },
    padStyle: function padStyle() {
      var pos = this.pos,
          width = this.width,
          height = this.height,
          popupColor = this.popupColor,
          standOut = this.standOut;

      var style = {
        width: width + 'px',
        backgroundColor: popupColor
      };
      pos === 'top' && (style = _extends({}, style, {
        top: -height + standOut + 'px',
        height: height + 'px'
      }));
      pos === 'bottom' && (style = _extends({}, style, {
        bottom: -height + standOut + 'px',
        height: height + 'px'
      }));
      pos === 'left' && (style = _extends({}, style, {
        left: -width + standOut + 'px'
      }));
      pos === 'right' && (style = _extends({}, style, {
        right: -width + standOut + 'px'
      }));
      return style;
    }
  },
  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // 在支付宝上面有点击穿透问题
      var platform = weex.config.env.platform;

      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    hide: function hide() {
      this.appearPopup(false);
      this.$refs.overlay.appearOverlay(false);
    },
    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
      this.isShow && this.appearPopup(false);
    },
    appearPopup: function appearPopup(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

      this.isShow = bool;
      var popupEl = this.$refs['wxc-popup'];
      if (!popupEl) {
        return;
      }
      animation.transition(popupEl, _extends({
        styles: {
          transform: this.getTransform(this.pos, this.width, this.height, !bool)
        },
        duration: duration,
        delay: 0
      }, this.animation), function () {
        if (!bool) {
          _this2.$emit('wxcPopupOverlayClicked', { pos: _this2.pos });
        }
      });
    },
    getTransform: function getTransform(pos, width, height, bool) {
      var _size = pos === 'top' || pos === 'bottom' ? height : width;
      bool && (_size = 0);
      var _transform = void 0;
      switch (pos) {
        case 'top':
          _transform = 'translateY(' + _size + 'px)';
          break;
        case 'bottom':
          _transform = 'translateY(-' + _size + 'px)';
          break;
        case 'left':
          _transform = 'translateX(' + _size + 'px)';
          break;
        case 'right':
          _transform = 'translateX(-' + _size + 'px)';
          break;
      }
      return _transform;
    }
  }
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(122);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(123)
)

/* script */
__vue_exports__ = __webpack_require__(124)

/* template */
var __vue_template__ = __webpack_require__(125)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\node_modules\\weex-x-picker\\wxc-overlay\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1bb0e58a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
};

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    on: {
      "touchend": _vm.handleTouchEnd
    }
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    ref: "overlay",
    attrs: {
      "show": _vm.haveOverlay && _vm.isOverShow
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking
    }
  }, 'wxc-overlay', _vm.overlayCfg, false)) : _vm._e()], 1), (_vm.show) ? _c('div', {
    ref: "wxc-popup",
    class: ['wxc-popup', _vm.pos],
    style: _vm.padStyle,
    attrs: {
      "height": _vm._height,
      "hack": _vm.isNeedShow
    },
    on: {
      "click": function () {}
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  // 单选
  single: 'single',

  // 区域
  area: 'area',

  // 区间
  section: 'section',

  // 日期
  date: 'date',

  // 时间
  time: 'time',

  // 联动
  linkage: 'linkage'
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{ "title": "北京", "children": [{ "title": "北京", "children": [{ "title": "东城区" }, { "title": "西城区" }, { "title": "崇文区" }, { "title": "宣武区" }, { "title": "朝阳区" }, { "title": "丰台区" }, { "title": "石景山区" }, { "title": "海淀区" }, { "title": "门头沟区" }, { "title": "房山区" }, { "title": "通州区" }, { "title": "顺义区" }, { "title": "昌平区" }, { "title": "大兴区" }, { "title": "平谷区" }, { "title": "怀柔区" }, { "title": "密云县" }, { "title": "延庆县" }] }] }, { "title": "天津", "children": [{ "title": "天津", "children": [{ "title": "和平区" }, { "title": "河东区" }, { "title": "河西区" }, { "title": "南开区" }, { "title": "河北区" }, { "title": "红桥区" }, { "title": "塘沽区" }, { "title": "汉沽区" }, { "title": "大港区" }, { "title": "东丽区" }, { "title": "西青区" }, { "title": "津南区" }, { "title": "北辰区" }, { "title": "武清区" }, { "title": "宝坻区" }, { "title": "宁河县" }, { "title": "静海县" }, { "title": "蓟县" }] }] }, { "title": "河北", "children": [{ "title": "石家庄", "children": [{ "title": "长安区" }, { "title": "桥东区" }, { "title": "桥西区" }, { "title": "新华区" }, { "title": "郊区" }, { "title": "井陉矿区" }, { "title": "井陉县" }, { "title": "正定县" }, { "title": "栾城县" }, { "title": "行唐县" }, { "title": "灵寿县" }, { "title": "高邑县" }, { "title": "深泽县" }, { "title": "赞皇县" }, { "title": "无极县" }, { "title": "平山县" }, { "title": "元氏县" }, { "title": "赵县" }, { "title": "辛集市" }, { "title": "藁" }, { "title": "晋州市" }, { "title": "新乐市" }, { "title": "鹿泉市" }] }, { "title": "唐山", "children": [{ "title": "路南区" }, { "title": "路北区" }, { "title": "古冶区" }, { "title": "开平区" }, { "title": "新区" }, { "title": "丰润县" }, { "title": "滦县" }, { "title": "滦南县" }, { "title": "乐亭县" }, { "title": "迁西县" }, { "title": "玉田县" }, { "title": "唐海县" }, { "title": "遵化市" }, { "title": "丰南市" }, { "title": "迁安市" }] }, { "title": "秦皇岛", "children": [{ "title": "海港区" }, { "title": "山海关区" }, { "title": "北戴河区" }, { "title": "青龙满族自治县" }, { "title": "昌黎县" }, { "title": "抚宁县" }, { "title": "卢龙县" }] }, { "title": "邯郸", "children": [{ "title": "邯山区" }, { "title": "丛台区" }, { "title": "复兴区" }, { "title": "峰峰矿区" }, { "title": "邯郸县" }, { "title": "临漳县" }, { "title": "成安县" }, { "title": "大名县" }, { "title": "涉县" }, { "title": "磁县" }, { "title": "肥乡县" }, { "title": "永年县" }, { "title": "邱县" }, { "title": "鸡泽县" }, { "title": "广平县" }, { "title": "馆陶县" }, { "title": "魏县" }, { "title": "曲周县" }, { "title": "武安市" }] }, { "title": "邢台", "children": [{ "title": "桥东区" }, { "title": "桥西区" }, { "title": "邢台县" }, { "title": "临城县" }, { "title": "内丘县" }, { "title": "柏乡县" }, { "title": "隆尧县" }, { "title": "任县" }, { "title": "南和县" }, { "title": "宁晋县" }, { "title": "巨鹿县" }, { "title": "新河县" }, { "title": "广宗县" }, { "title": "平乡县" }, { "title": "威县" }, { "title": "清河县" }, { "title": "临西县" }, { "title": "南宫市" }, { "title": "沙河市" }] }, { "title": "保定", "children": [{ "title": "新市区" }, { "title": "北市区" }, { "title": "南市区" }, { "title": "满城县" }, { "title": "清苑县" }, { "title": "涞水县" }, { "title": "阜平县" }, { "title": "徐水县" }, { "title": "定兴县" }, { "title": "唐县" }, { "title": "高阳县" }, { "title": "容城县" }, { "title": "涞源县" }, { "title": "望都县" }, { "title": "安新县" }, { "title": "易县" }, { "title": "曲阳县" }, { "title": "蠡县" }, { "title": "顺平县" }, { "title": "博野" }, { "title": "雄县" }, { "title": "涿州市" }, { "title": "定州市" }, { "title": "安国市" }, { "title": "高碑店市" }] }, { "title": "张家口", "children": [{ "title": "桥东区" }, { "title": "桥西区" }, { "title": "宣化区" }, { "title": "下花园区" }, { "title": "宣化县" }, { "title": "张北县" }, { "title": "康保县" }, { "title": "沽源县" }, { "title": "尚义县" }, { "title": "蔚县" }, { "title": "阳原县" }, { "title": "怀安县" }, { "title": "万全县" }, { "title": "怀来县" }, { "title": "涿鹿县" }, { "title": "赤城县" }, { "title": "崇礼县" }] }, { "title": "承德", "children": [{ "title": "双桥区" }, { "title": "双滦区" }, { "title": "鹰手营子矿区" }, { "title": "承德县" }, { "title": "兴隆县" }, { "title": "平泉县" }, { "title": "滦平县" }, { "title": "隆化县" }, { "title": "丰宁满族自治县" }, { "title": "宽城满族自治县" }, { "title": "围场满族蒙古族自治县" }] }, { "title": "沧州", "children": [{ "title": "新华区" }, { "title": "运河区" }, { "title": "沧县" }, { "title": "青县" }, { "title": "东光县" }, { "title": "海兴县" }, { "title": "盐山县" }, { "title": "肃宁县" }, { "title": "南皮县" }, { "title": "吴桥县" }, { "title": "献县" }, { "title": "孟村回族自治县" }, { "title": "泊头市" }, { "title": "任丘市" }, { "title": "黄骅市" }, { "title": "河间市" }] }, { "title": "廊坊", "children": [{ "title": "安次区" }, { "title": "固安县" }, { "title": "永清县" }, { "title": "香河县" }, { "title": "大城县" }, { "title": "文安县" }, { "title": "大厂回族自治县" }, { "title": "霸州市" }, { "title": "三河市" }] }, { "title": "衡水", "children": [{ "title": "桃城区" }, { "title": "枣强县" }, { "title": "武邑县" }, { "title": "武强县" }, { "title": "饶阳县" }, { "title": "安平县" }, { "title": "故城县" }, { "title": "景县" }, { "title": "阜城县" }, { "title": "冀州市" }, { "title": "深州市" }] }] }, { "title": "山西", "children": [{ "title": "太原", "children": [{ "title": "小店区" }, { "title": "迎泽区" }, { "title": "杏花岭区" }, { "title": "尖草坪区" }, { "title": "万柏林区" }, { "title": "晋源区" }, { "title": "清徐县" }, { "title": "阳曲县" }, { "title": "娄烦县" }, { "title": "古交市" }] }, { "title": "大同", "children": [{ "title": "城区" }, { "title": "矿区" }, { "title": "南郊区" }, { "title": "新荣区" }, { "title": "阳高县" }, { "title": "天镇县" }, { "title": "广灵县" }, { "title": "灵丘县" }, { "title": "浑源县" }, { "title": "左云县" }, { "title": "大同县" }] }, { "title": "阳泉", "children": [{ "title": "城区" }, { "title": "矿区" }, { "title": "郊区" }, { "title": "平定县" }, { "title": "盂县" }] }, { "title": "长治", "children": [{ "title": "城区" }, { "title": "郊区" }, { "title": "长治县" }, { "title": "襄垣县" }, { "title": "屯留县" }, { "title": "平顺县" }, { "title": "黎城县" }, { "title": "壶关县" }, { "title": "长子县" }, { "title": "武乡县" }, { "title": "沁县" }, { "title": "沁源县" }, { "title": "潞城市" }] }, { "title": "晋城", "children": [{ "title": "城区" }, { "title": "沁水县" }, { "title": "阳城县" }, { "title": "陵川县" }, { "title": "泽州县" }, { "title": "高平市" }] }, { "title": "朔州", "children": [{ "title": "朔城区" }, { "title": "平鲁区" }, { "title": "山阴县" }, { "title": "应县" }, { "title": "右玉县" }, { "title": "怀仁县" }] }, { "title": "忻州", "children": [{ "title": "忻府区" }, { "title": "原平市" }, { "title": "定襄县" }, { "title": "五台县" }, { "title": "代县" }, { "title": "繁峙县" }, { "title": "宁武县" }, { "title": "静乐县" }, { "title": "神池县" }, { "title": "五寨县" }, { "title": "岢岚县" }, { "title": "河曲县" }, { "title": "保德县" }, { "title": "偏关县" }] }, { "title": "吕梁", "children": [{ "title": "离石区" }, { "title": "孝义市" }, { "title": "汾阳市" }, { "title": "文水县" }, { "title": "交城县" }, { "title": "兴县" }, { "title": "临县" }, { "title": "柳林县" }, { "title": "石楼县" }, { "title": "岚县" }, { "title": "方山县" }, { "title": "中阳县" }, { "title": "交口县" }] }, { "title": "晋中", "children": [{ "title": "榆次市" }, { "title": "介休市" }, { "title": "榆社县" }, { "title": "左权县" }, { "title": "和顺县" }, { "title": "昔阳县" }, { "title": "寿阳县" }, { "title": "太谷县" }, { "title": "祁县" }, { "title": "平遥县" }, { "title": "灵石县" }] }, { "title": "临汾", "children": [{ "title": "临汾市" }, { "title": "侯马市" }, { "title": "霍州市" }, { "title": "曲沃县" }, { "title": "翼城县" }, { "title": "襄汾县" }, { "title": "洪洞县" }, { "title": "古县" }, { "title": "安泽县" }, { "title": "浮山县" }, { "title": "吉县" }, { "title": "乡宁县" }, { "title": "蒲县" }, { "title": "大宁县" }, { "title": "永和县" }, { "title": "隰县" }, { "title": "汾西县" }] }, { "title": "运城", "children": [{ "title": "运城市" }, { "title": "永济市" }, { "title": "河津市" }, { "title": "芮城县" }, { "title": "临猗县" }, { "title": "万荣县" }, { "title": "新绛县" }, { "title": "稷山县" }, { "title": "闻喜县" }, { "title": "夏县" }, { "title": "绛县" }, { "title": "平陆县" }, { "title": "垣曲县" }] }] }, { "title": "内蒙古", "children": [{ "title": "呼和浩特", "children": [{ "title": "新城区" }, { "title": "回民区" }, { "title": "玉泉区" }, { "title": "郊区" }, { "title": "土默特左旗" }, { "title": "托克托县" }, { "title": "和林格尔县" }, { "title": "清水河县" }, { "title": "武川县" }] }, { "title": "包头", "children": [{ "title": "东河区" }, { "title": "昆都伦区" }, { "title": "青山区" }, { "title": "石拐矿区" }, { "title": "白云矿区" }, { "title": "郊区" }, { "title": "土默特右旗" }, { "title": "固阳县" }, { "title": "达尔罕茂明安联合旗" }] }, { "title": "乌海", "children": [{ "title": "海勃湾区" }, { "title": "海南区" }, { "title": "乌达区" }] }, { "title": "赤峰", "children": [{ "title": "红山区" }, { "title": "元宝山区" }, { "title": "松山区" }, { "title": "阿鲁科尔沁旗" }, { "title": "巴林左旗" }, { "title": "巴林右旗" }, { "title": "林西县" }, { "title": "克什克腾旗" }, { "title": "翁牛特旗" }, { "title": "喀喇沁旗" }, { "title": "宁城县" }, { "title": "敖汉旗" }] }, { "title": "呼伦贝尔", "children": [{ "title": "海拉尔市" }, { "title": "满洲里市" }, { "title": "扎兰屯市" }, { "title": "牙克石市" }, { "title": "根河市" }, { "title": "额尔古纳市" }, { "title": "阿荣旗" }, { "title": "莫力达瓦达斡尔族自治旗" }, { "title": "鄂伦春自治旗" }, { "title": "鄂温克族自治旗" }, { "title": "新巴尔虎右旗" }, { "title": "新巴尔虎左旗" }, { "title": "陈巴尔虎旗" }] }, { "title": "兴安盟", "children": [{ "title": "乌兰浩特市" }, { "title": "阿尔山市" }, { "title": "科尔沁右翼前旗" }, { "title": "科尔沁右翼中旗" }, { "title": "扎赉特旗" }, { "title": "突泉县" }] }, { "title": "通辽", "children": [{ "title": "科尔沁区" }, { "title": "霍林郭勒市" }, { "title": "科尔沁左翼中旗" }, { "title": "科尔沁左翼后旗" }, { "title": "开鲁县" }, { "title": "库伦旗" }, { "title": "奈曼旗" }, { "title": "扎鲁特旗" }] }, { "title": "锡林郭勒盟", "children": [{ "title": "二连浩特市" }, { "title": "锡林浩特市" }, { "title": "阿巴嘎旗" }, { "title": "苏尼特左旗" }, { "title": "苏尼特右旗" }, { "title": "东乌珠穆沁旗" }, { "title": "西乌珠穆沁旗" }, { "title": "太仆寺旗" }, { "title": "镶黄旗" }, { "title": "正镶白旗" }, { "title": "正蓝旗" }, { "title": "多伦县" }] }, { "title": "乌兰察布盟", "children": [{ "title": "集宁市" }, { "title": "丰镇市" }, { "title": "卓资县" }, { "title": "化德县" }, { "title": "商都县" }, { "title": "兴和县" }, { "title": "凉城县" }, { "title": "察哈尔右翼前旗" }, { "title": "察哈尔右翼中旗" }, { "title": "察哈尔右翼后旗" }, { "title": "四子王旗" }] }, { "title": "伊克昭盟", "children": [{ "title": "东胜市" }, { "title": "达拉特旗" }, { "title": "准格尔旗" }, { "title": "鄂托克前旗" }, { "title": "鄂托克旗" }, { "title": "杭锦旗" }, { "title": "乌审旗" }, { "title": "伊金霍洛旗" }] }, { "title": "巴彦淖尔盟", "children": [{ "title": "临河市" }, { "title": "五原县" }, { "title": "磴口县" }, { "title": "乌拉特前旗" }, { "title": "乌拉特中旗" }, { "title": "乌拉特后旗" }, { "title": "杭锦后旗" }] }, { "title": "阿拉善盟", "children": [{ "title": "阿拉善左旗" }, { "title": "阿拉善右旗" }, { "title": "额济纳旗" }] }] }, { "title": "辽宁", "children": [{ "title": "沈阳", "children": [{ "title": "沈河区" }, { "title": "皇姑区" }, { "title": "和平区" }, { "title": "大东区" }, { "title": "铁西区" }, { "title": "苏家屯区" }, { "title": "东陵区" }, { "title": "于洪区" }, { "title": "新民市" }, { "title": "法库县" }, { "title": "辽中县" }, { "title": "康平县" }, { "title": "新城子区" }, { "title": "其他" }] }, { "title": "大连", "children": [{ "title": "西岗区" }, { "title": "中山区" }, { "title": "沙河口区" }, { "title": "甘井子区" }, { "title": "旅顺口区" }, { "title": "金州区" }, { "title": "瓦房店市" }, { "title": "普兰店市" }, { "title": "庄河市" }, { "title": "长海县" }, { "title": "其他" }] }, { "title": "鞍山", "children": [{ "title": "铁东区" }, { "title": "铁西区" }, { "title": "立山区" }, { "title": "千山区" }, { "title": "海城市" }, { "title": "台安县" }, { "title": "岫岩满族自治县" }, { "title": "其他" }] }, { "title": "抚顺", "children": [{ "title": "顺城区" }, { "title": "新抚区" }, { "title": "东洲区" }, { "title": "望花区" }, { "title": "抚顺县" }, { "title": "清原满族自治县" }, { "title": "新宾满族自治县" }, { "title": "其他" }] }, { "title": "本溪", "children": [{ "title": "平山区" }, { "title": "明山区" }, { "title": "溪湖区" }, { "title": "南芬区" }, { "title": "本溪满族自治县" }, { "title": "桓仁满族自治县" }, { "title": "其他" }] }, { "title": "丹东", "children": [{ "title": "振兴区" }, { "title": "元宝区" }, { "title": "振安区" }, { "title": "东港市" }, { "title": "凤城市" }, { "title": "宽甸满族自治县" }, { "title": "其他" }] }, { "title": "锦州", "children": [{ "title": "太和区" }, { "title": "古塔区" }, { "title": "凌河区" }, { "title": "凌海市" }, { "title": "黑山县" }, { "title": "义县" }, { "title": "北宁市" }, { "title": "其他" }] }, { "title": "营口", "children": [{ "title": "站前区" }, { "title": "西市区" }, { "title": "鲅鱼圈区" }, { "title": "老边区" }, { "title": "大石桥市" }, { "title": "盖州市" }, { "title": "其他" }] }, { "title": "阜新", "children": [{ "title": "海州区" }, { "title": "新邱区" }, { "title": "太平区" }, { "title": "清河门区" }, { "title": "细河区" }, { "title": "彰武县" }, { "title": "阜新蒙古族自治县" }, { "title": "其他" }] }, { "title": "辽阳", "children": [{ "title": "白塔区" }, { "title": "文圣区" }, { "title": "宏伟区" }, { "title": "太子河区" }, { "title": "弓长岭区" }, { "title": "灯塔市" }, { "title": "辽阳县" }, { "title": "其他" }] }, { "title": "盘锦", "children": [{ "title": "双台子区" }, { "title": "兴隆台区" }, { "title": "盘山县" }, { "title": "大洼县" }, { "title": "其他" }] }, { "title": "铁岭", "children": [{ "title": "银州区" }, { "title": "清河区" }, { "title": "调兵山市" }, { "title": "开原市" }, { "title": "铁岭县" }, { "title": "昌图县" }, { "title": "西丰县" }, { "title": "其他" }] }, { "title": "朝阳", "children": [{ "title": "双塔区" }, { "title": "龙城区" }, { "title": "凌源市" }, { "title": "北票市" }, { "title": "朝阳县" }, { "title": "建平县" }, { "title": "喀喇沁左翼蒙古族自治县" }, { "title": "其他" }] }, { "title": "葫芦岛", "children": [{ "title": "龙港区" }, { "title": "南票区" }, { "title": "连山区" }, { "title": "兴城市" }, { "title": "绥中县" }, { "title": "建昌县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "吉林", "children": [{ "title": "长春", "children": [{ "title": "朝阳区" }, { "title": "宽城区" }, { "title": "二道区" }, { "title": "南关区" }, { "title": "绿园区" }, { "title": "双阳区" }, { "title": "九台市" }, { "title": "榆树市" }, { "title": "德惠市" }, { "title": "农安县" }, { "title": "其他" }] }, { "title": "吉林", "children": [{ "title": "船营区" }, { "title": "昌邑区" }, { "title": "龙潭区" }, { "title": "丰满区" }, { "title": "舒兰市" }, { "title": "桦甸市" }, { "title": "蛟河市" }, { "title": "磐石市" }, { "title": "永吉县" }, { "title": "其他" }] }, { "title": "四平", "children": [{ "title": "铁西区" }, { "title": "铁东区" }, { "title": "公主岭市" }, { "title": "双辽市" }, { "title": "梨树县" }, { "title": "伊通满族自治县" }, { "title": "其他" }] }, { "title": "辽源", "children": [{ "title": "龙山区" }, { "title": "西安区" }, { "title": "东辽县" }, { "title": "东丰县" }, { "title": "其他" }] }, { "title": "通化", "children": [{ "title": "东昌区" }, { "title": "二道江区" }, { "title": "梅河口市" }, { "title": "集安市" }, { "title": "通化县" }, { "title": "辉南县" }, { "title": "柳河县" }, { "title": "其他" }] }, { "title": "白山", "children": [{ "title": "八道江区" }, { "title": "江源区" }, { "title": "临江市" }, { "title": "靖宇县" }, { "title": "抚松县" }, { "title": "长白朝鲜族自治县" }, { "title": "其他" }] }, { "title": "松原", "children": [{ "title": "宁江区" }, { "title": "乾安县" }, { "title": "长岭县" }, { "title": "扶余县" }, { "title": "前郭尔罗斯蒙古族自治县" }, { "title": "其他" }] }, { "title": "白城", "children": [{ "title": "洮北区" }, { "title": "大安市" }, { "title": "洮南市" }, { "title": "镇赉县" }, { "title": "通榆县" }, { "title": "其他" }] }, { "title": "延边朝鲜族自治州", "children": [{ "title": "延吉市" }, { "title": "图们市" }, { "title": "敦化市" }, { "title": "龙井市" }, { "title": "珲春市" }, { "title": "和龙市" }, { "title": "安图县" }, { "title": "汪清县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "黑龙江", "children": [{ "title": "哈尔滨", "children": [{ "title": "松北区" }, { "title": "道里区" }, { "title": "南岗区" }, { "title": "平房区" }, { "title": "香坊区" }, { "title": "道外区" }, { "title": "呼兰区" }, { "title": "阿城区" }, { "title": "双城市" }, { "title": "尚志市" }, { "title": "五常市" }, { "title": "宾县" }, { "title": "方正县" }, { "title": "通河县" }, { "title": "巴彦县" }, { "title": "延寿县" }, { "title": "木兰县" }, { "title": "依兰县" }, { "title": "其他" }] }, { "title": "齐齐哈尔", "children": [{ "title": "龙沙区" }, { "title": "昂昂溪区" }, { "title": "铁锋区" }, { "title": "建华区" }, { "title": "富拉尔基区" }, { "title": "碾子山区" }, { "title": "梅里斯达斡尔族区" }, { "title": "讷河市" }, { "title": "富裕县" }, { "title": "拜泉县" }, { "title": "甘南县" }, { "title": "依安县" }, { "title": "克山县" }, { "title": "泰来县" }, { "title": "克东县" }, { "title": "龙江县" }, { "title": "其他" }] }, { "title": "鹤岗", "children": [{ "title": "兴山区" }, { "title": "工农区" }, { "title": "南山区" }, { "title": "兴安区" }, { "title": "向阳区" }, { "title": "东山区" }, { "title": "萝北县" }, { "title": "绥滨县" }, { "title": "其他" }] }, { "title": "双鸭山", "children": [{ "title": "尖山区" }, { "title": "岭东区" }, { "title": "四方台区" }, { "title": "宝山区" }, { "title": "集贤县" }, { "title": "宝清县" }, { "title": "友谊县" }, { "title": "饶河县" }, { "title": "其他" }] }, { "title": "鸡西", "children": [{ "title": "鸡冠区" }, { "title": "恒山区" }, { "title": "城子河区" }, { "title": "滴道区" }, { "title": "梨树区" }, { "title": "麻山区" }, { "title": "密山市" }, { "title": "虎林市" }, { "title": "鸡东县" }, { "title": "其他" }] }, { "title": "大庆", "children": [{ "title": "萨尔图区" }, { "title": "红岗区" }, { "title": "龙凤区" }, { "title": "让胡路区" }, { "title": "大同区" }, { "title": "林甸县" }, { "title": "肇州县" }, { "title": "肇源县" }, { "title": "杜尔伯特蒙古族自治县" }, { "title": "其他" }] }, { "title": "伊春", "children": [{ "title": "伊春区" }, { "title": "带岭区" }, { "title": "南岔区" }, { "title": "金山屯区" }, { "title": "西林区" }, { "title": "美溪区" }, { "title": "乌马河区" }, { "title": "翠峦区" }, { "title": "友好区" }, { "title": "上甘岭区" }, { "title": "五营区" }, { "title": "红星区" }, { "title": "新青区" }, { "title": "汤旺河区" }, { "title": "乌伊岭区" }, { "title": "铁力市" }, { "title": "嘉荫县" }, { "title": "其他" }] }, { "title": "牡丹江", "children": [{ "title": "爱民区" }, { "title": "东安区" }, { "title": "阳明区" }, { "title": "西安区" }, { "title": "绥芬河市" }, { "title": "宁安市" }, { "title": "海林市" }, { "title": "穆棱市" }, { "title": "林口县" }, { "title": "东宁县" }, { "title": "其他" }] }, { "title": "佳木斯", "children": [{ "title": "向阳区" }, { "title": "前进区" }, { "title": "东风区" }, { "title": "郊区" }, { "title": "同江市" }, { "title": "富锦市" }, { "title": "桦川县" }, { "title": "抚远县" }, { "title": "桦南县" }, { "title": "汤原县" }, { "title": "其他" }] }, { "title": "七台河", "children": [{ "title": "桃山区" }, { "title": "新兴区" }, { "title": "茄子河区" }, { "title": "勃利县" }, { "title": "其他" }] }, { "title": "黑河", "children": [{ "title": "爱辉区" }, { "title": "北安市" }, { "title": "五大连池市" }, { "title": "逊克县" }, { "title": "嫩江县" }, { "title": "孙吴县" }, { "title": "其他" }] }, { "title": "绥化", "children": [{ "title": "北林区" }, { "title": "安达市" }, { "title": "肇东市" }, { "title": "海伦市" }, { "title": "绥棱县" }, { "title": "兰西县" }, { "title": "明水县" }, { "title": "青冈县" }, { "title": "庆安县" }, { "title": "望奎县" }, { "title": "其他" }] }, { "title": "大兴安岭地区", "children": [{ "title": "呼玛县" }, { "title": "塔河县" }, { "title": "漠河县" }, { "title": "大兴安岭辖区" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "上海", "children": [{ "title": "上海", "children": [{ "title": "黄浦区" }, { "title": "卢湾区" }, { "title": "徐汇区" }, { "title": "长宁区" }, { "title": "静安区" }, { "title": "普陀区" }, { "title": "闸北区" }, { "title": "虹口区" }, { "title": "杨浦区" }, { "title": "宝山区" }, { "title": "闵行区" }, { "title": "嘉定区" }, { "title": "松江区" }, { "title": "金山区" }, { "title": "青浦区" }, { "title": "南汇区" }, { "title": "奉贤区" }, { "title": "浦东新区" }, { "title": "崇明县" }, { "title": "其他" }] }] }, { "title": "江苏", "children": [{ "title": "南京", "children": [{ "title": "玄武区" }, { "title": "白下区" }, { "title": "秦淮区" }, { "title": "建邺区" }, { "title": "鼓楼区" }, { "title": "下关区" }, { "title": "栖霞区" }, { "title": "雨花台区" }, { "title": "浦口区" }, { "title": "江宁区" }, { "title": "六合区" }, { "title": "溧水县" }, { "title": "高淳县" }, { "title": "其他" }] }, { "title": "苏州", "children": [{ "title": "金阊区" }, { "title": "平江区" }, { "title": "沧浪区" }, { "title": "虎丘区" }, { "title": "吴中区" }, { "title": "相城区" }, { "title": "常熟市" }, { "title": "张家港市" }, { "title": "昆山市" }, { "title": "吴江市" }, { "title": "太仓市" }, { "title": "其他" }] }, { "title": "无锡", "children": [{ "title": "崇安区" }, { "title": "南长区" }, { "title": "北塘区" }, { "title": "滨湖区" }, { "title": "锡山区" }, { "title": "惠山区" }, { "title": "江阴市" }, { "title": "宜兴市" }, { "title": "其他" }] }, { "title": "常州", "children": [{ "title": "钟楼区" }, { "title": "天宁区" }, { "title": "戚墅堰区" }, { "title": "新北区" }, { "title": "武进区" }, { "title": "金坛市" }, { "title": "溧阳市" }, { "title": "其他" }] }, { "title": "镇江", "children": [{ "title": "京口区" }, { "title": "润州区" }, { "title": "丹徒区" }, { "title": "丹阳市" }, { "title": "扬中市" }, { "title": "句容市" }, { "title": "其他" }] }, { "title": "南通", "children": [{ "title": "崇川区" }, { "title": "港闸区" }, { "title": "通州市" }, { "title": "如皋市" }, { "title": "海门市" }, { "title": "启东市" }, { "title": "海安县" }, { "title": "如东县" }, { "title": "其他" }] }, { "title": "泰州", "children": [{ "title": "海陵区" }, { "title": "高港区" }, { "title": "姜堰市" }, { "title": "泰兴市" }, { "title": "靖江市" }, { "title": "兴化市" }, { "title": "其他" }] }, { "title": "扬州", "children": [{ "title": "广陵区" }, { "title": "维扬区" }, { "title": "邗江区" }, { "title": "江都市" }, { "title": "仪征市" }, { "title": "高邮市" }, { "title": "宝应县" }, { "title": "其他" }] }, { "title": "盐城", "children": [{ "title": "亭湖区" }, { "title": "盐都区" }, { "title": "大丰市" }, { "title": "东台市" }, { "title": "建湖县" }, { "title": "射阳县" }, { "title": "阜宁县" }, { "title": "滨海县" }, { "title": "响水县" }, { "title": "其他" }] }, { "title": "连云港", "children": [{ "title": "新浦区" }, { "title": "海州区" }, { "title": "连云区" }, { "title": "东海县" }, { "title": "灌云县" }, { "title": "赣榆县" }, { "title": "灌南县" }, { "title": "其他" }] }, { "title": "徐州", "children": [{ "title": "云龙区" }, { "title": "鼓楼区" }, { "title": "九里区" }, { "title": "泉山区" }, { "title": "贾汪区" }, { "title": "邳州市" }, { "title": "新沂市" }, { "title": "铜山县" }, { "title": "睢宁县" }, { "title": "沛县" }, { "title": "丰县" }, { "title": "其他" }] }, { "title": "淮安", "children": [{ "title": "清河区" }, { "title": "清浦区" }, { "title": "楚州区" }, { "title": "淮阴区" }, { "title": "涟水县" }, { "title": "洪泽县" }, { "title": "金湖县" }, { "title": "盱眙县" }, { "title": "其他" }] }, { "title": "宿迁", "children": [{ "title": "宿城区" }, { "title": "宿豫区" }, { "title": "沭阳县" }, { "title": "泗阳县" }, { "title": "泗洪县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "浙江", "children": [{ "title": "杭州", "children": [{ "title": "拱墅区" }, { "title": "西湖区" }, { "title": "上城区" }, { "title": "下城区" }, { "title": "江干区" }, { "title": "滨江区" }, { "title": "余杭区" }, { "title": "萧山区" }, { "title": "建德市" }, { "title": "富阳市" }, { "title": "临安市" }, { "title": "桐庐县" }, { "title": "淳安县" }, { "title": "其他" }] }, { "title": "宁波", "children": [{ "title": "海曙区" }, { "title": "江东区" }, { "title": "江北区" }, { "title": "镇海区" }, { "title": "北仑区" }, { "title": "鄞州区" }, { "title": "余姚市" }, { "title": "慈溪市" }, { "title": "奉化市" }, { "title": "宁海县" }, { "title": "象山县" }, { "title": "其他" }] }, { "title": "温州", "children": [{ "title": "鹿城区" }, { "title": "龙湾区" }, { "title": "瓯海区" }, { "title": "瑞安市" }, { "title": "乐清市" }, { "title": "永嘉县" }, { "title": "洞头县" }, { "title": "平阳县" }, { "title": "苍南县" }, { "title": "文成县" }, { "title": "泰顺县" }, { "title": "其他" }] }, { "title": "嘉兴", "children": [{ "title": "秀城区" }, { "title": "秀洲区" }, { "title": "海宁市" }, { "title": "平湖市" }, { "title": "桐乡市" }, { "title": "嘉善县" }, { "title": "海盐县" }, { "title": "其他" }] }, { "title": "湖州", "children": [{ "title": "吴兴区" }, { "title": "南浔区" }, { "title": "长兴县" }, { "title": "德清县" }, { "title": "安吉县" }, { "title": "其他" }] }, { "title": "绍兴", "children": [{ "title": "越城区" }, { "title": "诸暨市" }, { "title": "上虞市" }, { "title": "嵊州市" }, { "title": "绍兴县" }, { "title": "新昌县" }, { "title": "其他" }] }, { "title": "金华", "children": [{ "title": "婺城区" }, { "title": "金东区" }, { "title": "兰溪市" }, { "title": "义乌市" }, { "title": "东阳市" }, { "title": "永康市" }, { "title": "武义县" }, { "title": "浦江县" }, { "title": "磐安县" }, { "title": "其他" }] }, { "title": "衢州", "children": [{ "title": "柯城区" }, { "title": "衢江区" }, { "title": "江山市" }, { "title": "龙游县" }, { "title": "常山县" }, { "title": "开化县" }, { "title": "其他" }] }, { "title": "舟山", "children": [{ "title": "定海区" }, { "title": "普陀区" }, { "title": "岱山县" }, { "title": "嵊泗县" }, { "title": "其他" }] }, { "title": "台州", "children": [{ "title": "椒江区" }, { "title": "黄岩区" }, { "title": "路桥区" }, { "title": "临海市" }, { "title": "温岭市" }, { "title": "玉环县" }, { "title": "天台县" }, { "title": "仙居县" }, { "title": "三门县" }, { "title": "其他" }] }, { "title": "丽水", "children": [{ "title": "莲都区" }, { "title": "龙泉市" }, { "title": "缙云县" }, { "title": "青田县" }, { "title": "云和县" }, { "title": "遂昌县" }, { "title": "松阳县" }, { "title": "庆元县" }, { "title": "景宁畲族自治县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "安徽", "children": [{ "title": "合肥", "children": [{ "title": "庐阳区" }, { "title": "瑶海区" }, { "title": "蜀山区" }, { "title": "包河区" }, { "title": "长丰县" }, { "title": "肥东县" }, { "title": "肥西县" }, { "title": "其他" }] }, { "title": "芜湖", "children": [{ "title": "镜湖区" }, { "title": "弋江区" }, { "title": "鸠江区" }, { "title": "三山区" }, { "title": "芜湖县" }, { "title": "南陵县" }, { "title": "繁昌县" }, { "title": "其他" }] }, { "title": "蚌埠", "children": [{ "title": "蚌山区" }, { "title": "龙子湖区" }, { "title": "禹会区" }, { "title": "淮上区" }, { "title": "怀远县" }, { "title": "固镇县" }, { "title": "五河县" }, { "title": "其他" }] }, { "title": "淮南", "children": [{ "title": "田家庵区" }, { "title": "大通区" }, { "title": "谢家集区" }, { "title": "八公山区" }, { "title": "潘集区" }, { "title": "凤台县" }, { "title": "其他" }] }, { "title": "马鞍山", "children": [{ "title": "雨山区" }, { "title": "花山区" }, { "title": "金家庄区" }, { "title": "当涂县" }, { "title": "其他" }] }, { "title": "淮北", "children": [{ "title": "相山区" }, { "title": "杜集区" }, { "title": "烈山区" }, { "title": "濉溪县" }, { "title": "其他" }] }, { "title": "铜陵", "children": [{ "title": "铜官山区" }, { "title": "狮子山区" }, { "title": "郊区" }, { "title": "铜陵县" }, { "title": "其他" }] }, { "title": "安庆", "children": [{ "title": "迎江区" }, { "title": "大观区" }, { "title": "宜秀区" }, { "title": "桐城市" }, { "title": "宿松县" }, { "title": "枞阳县" }, { "title": "太湖县" }, { "title": "怀宁县" }, { "title": "岳西县" }, { "title": "望江县" }, { "title": "潜山县" }, { "title": "其他" }] }, { "title": "黄山", "children": [{ "title": "屯溪区" }, { "title": "黄山区" }, { "title": "徽州区" }, { "title": "休宁县" }, { "title": "歙县" }, { "title": "祁门县" }, { "title": "黟县" }, { "title": "其他" }] }, { "title": "滁州", "children": [{ "title": "琅琊区" }, { "title": "南谯区" }, { "title": "天长市" }, { "title": "明光市" }, { "title": "全椒县" }, { "title": "来安县" }, { "title": "定远县" }, { "title": "凤阳县" }, { "title": "其他" }] }, { "title": "阜阳", "children": [{ "title": "颍州区" }, { "title": "颍东区" }, { "title": "颍泉区" }, { "title": "界首市" }, { "title": "临泉县" }, { "title": "颍上县" }, { "title": "阜南县" }, { "title": "太和县" }, { "title": "其他" }] }, { "title": "宿州", "children": [{ "title": "埇桥区" }, { "title": "萧县" }, { "title": "泗县" }, { "title": "砀山县" }, { "title": "灵璧县" }, { "title": "其他" }] }, { "title": "巢湖", "children": [{ "title": "居巢区" }, { "title": "含山县" }, { "title": "无为县" }, { "title": "庐江县" }, { "title": "和县" }, { "title": "其他" }] }, { "title": "六安", "children": [{ "title": "金安区" }, { "title": "裕安区" }, { "title": "寿县" }, { "title": "霍山县" }, { "title": "霍邱县" }, { "title": "舒城县" }, { "title": "金寨县" }, { "title": "其他" }] }, { "title": "亳州", "children": [{ "title": "谯城区" }, { "title": "利辛县" }, { "title": "涡阳县" }, { "title": "蒙城县" }, { "title": "其他" }] }, { "title": "池州", "children": [{ "title": "贵池区" }, { "title": "东至县" }, { "title": "石台县" }, { "title": "青阳县" }, { "title": "其他" }] }, { "title": "宣城", "children": [{ "title": "宣州区" }, { "title": "宁国市" }, { "title": "广德县" }, { "title": "郎溪县" }, { "title": "泾县" }, { "title": "旌德县" }, { "title": "绩溪县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "福建", "children": [{ "title": "福州", "children": [{ "title": "鼓楼区" }, { "title": "台江区" }, { "title": "仓山区" }, { "title": "马尾区" }, { "title": "晋安区" }, { "title": "福清市" }, { "title": "长乐市" }, { "title": "闽侯县" }, { "title": "闽清县" }, { "title": "永泰县" }, { "title": "连江县" }, { "title": "罗源县" }, { "title": "平潭县" }, { "title": "其他" }] }, { "title": "厦门", "children": [{ "title": "思明区" }, { "title": "海沧区" }, { "title": "湖里区" }, { "title": "集美区" }, { "title": "同安区" }, { "title": "翔安区" }, { "title": "其他" }] }, { "title": "莆田", "children": [{ "title": "城厢区" }, { "title": "涵江区" }, { "title": "荔城区" }, { "title": "秀屿区" }, { "title": "仙游县" }, { "title": "其他" }] }, { "title": "三明", "children": [{ "title": "梅列区" }, { "title": "三元区" }, { "title": "永安市" }, { "title": "明溪县" }, { "title": "将乐县" }, { "title": "大田县" }, { "title": "宁化县" }, { "title": "建宁县" }, { "title": "沙县" }, { "title": "尤溪县" }, { "title": "清流县" }, { "title": "泰宁县" }, { "title": "其他" }] }, { "title": "泉州", "children": [{ "title": "鲤城区" }, { "title": "丰泽区" }, { "title": "洛江区" }, { "title": "泉港区" }, { "title": "石狮市" }, { "title": "晋江市" }, { "title": "南安市" }, { "title": "惠安县" }, { "title": "永春县" }, { "title": "安溪县" }, { "title": "德化县" }, { "title": "金门县" }, { "title": "其他" }] }, { "title": "漳州", "children": [{ "title": "芗城区" }, { "title": "龙文区" }, { "title": "龙海市" }, { "title": "平和县" }, { "title": "南靖县" }, { "title": "诏安县" }, { "title": "漳浦县" }, { "title": "华安县" }, { "title": "东山县" }, { "title": "长泰县" }, { "title": "云霄县" }, { "title": "其他" }] }, { "title": "南平", "children": [{ "title": "延平区" }, { "title": "建瓯市" }, { "title": "邵武市" }, { "title": "武夷山市" }, { "title": "建阳市" }, { "title": "松溪县" }, { "title": "光泽县" }, { "title": "顺昌县" }, { "title": "浦城县" }, { "title": "政和县" }, { "title": "其他" }] }, { "title": "龙岩", "children": [{ "title": "新罗区" }, { "title": "漳平市" }, { "title": "长汀县" }, { "title": "武平县" }, { "title": "上杭县" }, { "title": "永定县" }, { "title": "连城县" }, { "title": "其他" }] }, { "title": "宁德", "children": [{ "title": "蕉城区" }, { "title": "福安市" }, { "title": "福鼎市" }, { "title": "寿宁县" }, { "title": "霞浦县" }, { "title": "柘荣县" }, { "title": "屏南县" }, { "title": "古田县" }, { "title": "周宁县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "江西", "children": [{ "title": "南昌", "children": [{ "title": "东湖区" }, { "title": "西湖区" }, { "title": "青云谱区" }, { "title": "湾里区" }, { "title": "青山湖区" }, { "title": "新建县" }, { "title": "南昌县" }, { "title": "进贤县" }, { "title": "安义县" }, { "title": "其他" }] }, { "title": "景德镇", "children": [{ "title": "珠山区" }, { "title": "昌江区" }, { "title": "乐平市" }, { "title": "浮梁县" }, { "title": "其他" }] }, { "title": "萍乡", "children": [{ "title": "安源区" }, { "title": "湘东区" }, { "title": "莲花县" }, { "title": "上栗县" }, { "title": "芦溪县" }, { "title": "其他" }] }, { "title": "九江", "children": [{ "title": "浔阳区" }, { "title": "庐山区" }, { "title": "瑞昌市" }, { "title": "九江县" }, { "title": "星子县" }, { "title": "武宁县" }, { "title": "彭泽县" }, { "title": "永修县" }, { "title": "修水县" }, { "title": "湖口县" }, { "title": "德安县" }, { "title": "都昌县" }, { "title": "其他" }] }, { "title": "新余", "children": [{ "title": "渝水区" }, { "title": "分宜县" }, { "title": "其他" }] }, { "title": "鹰潭", "children": [{ "title": "月湖区" }, { "title": "贵溪市" }, { "title": "余江县" }, { "title": "其他" }] }, { "title": "赣州", "children": [{ "title": "章贡区" }, { "title": "瑞金市" }, { "title": "南康市" }, { "title": "石城县" }, { "title": "安远县" }, { "title": "赣县" }, { "title": "宁都县" }, { "title": "寻乌县" }, { "title": "兴国县" }, { "title": "定南县" }, { "title": "上犹县" }, { "title": "于都县" }, { "title": "龙南县" }, { "title": "崇义县" }, { "title": "信丰县" }, { "title": "全南县" }, { "title": "大余县" }, { "title": "会昌县" }, { "title": "其他" }] }, { "title": "吉安", "children": [{ "title": "吉州区" }, { "title": "青原区" }, { "title": "井冈山市" }, { "title": "吉安县" }, { "title": "永丰县" }, { "title": "永新县" }, { "title": "新干县" }, { "title": "泰和县" }, { "title": "峡江县" }, { "title": "遂川县" }, { "title": "安福县" }, { "title": "吉水县" }, { "title": "万安县" }, { "title": "其他" }] }, { "title": "宜春", "children": [{ "title": "袁州区" }, { "title": "丰城市" }, { "title": "樟树市" }, { "title": "高安市" }, { "title": "铜鼓县" }, { "title": "靖安县" }, { "title": "宜丰县" }, { "title": "奉新县" }, { "title": "万载县" }, { "title": "上高县" }, { "title": "其他" }] }, { "title": "抚州", "children": [{ "title": "临川区" }, { "title": "南丰县" }, { "title": "乐安县" }, { "title": "金溪县" }, { "title": "南城县" }, { "title": "东乡县" }, { "title": "资溪县" }, { "title": "宜黄县" }, { "title": "广昌县" }, { "title": "黎川县" }, { "title": "崇仁县" }, { "title": "其他" }] }, { "title": "上饶", "children": [{ "title": "信州区" }, { "title": "德兴市" }, { "title": "上饶县" }, { "title": "广丰县" }, { "title": "鄱阳县" }, { "title": "婺源县" }, { "title": "铅山县" }, { "title": "余干县" }, { "title": "横峰县" }, { "title": "弋阳县" }, { "title": "玉山县" }, { "title": "万年县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "山东", "children": [{ "title": "济南", "children": [{ "title": "市中区" }, { "title": "历下区" }, { "title": "天桥区" }, { "title": "槐荫区" }, { "title": "历城区" }, { "title": "长清区" }, { "title": "章丘市" }, { "title": "平阴县" }, { "title": "济阳县" }, { "title": "商河县" }, { "title": "其他" }] }, { "title": "青岛", "children": [{ "title": "市南区" }, { "title": "市北区" }, { "title": "城阳区" }, { "title": "四方区" }, { "title": "李沧区" }, { "title": "黄岛区" }, { "title": "崂山区" }, { "title": "胶南市" }, { "title": "胶州市" }, { "title": "平度市" }, { "title": "莱西市" }, { "title": "即墨市" }, { "title": "其他" }] }, { "title": "淄博", "children": [{ "title": "张店区" }, { "title": "临淄区" }, { "title": "淄川区" }, { "title": "博山区" }, { "title": "周村区" }, { "title": "桓台县" }, { "title": "高青县" }, { "title": "沂源县" }, { "title": "其他" }] }, { "title": "枣庄", "children": [{ "title": "市中区" }, { "title": "山亭区" }, { "title": "峄城区" }, { "title": "台儿庄区" }, { "title": "薛城区" }, { "title": "滕州市" }, { "title": "其他" }] }, { "title": "东营", "children": [{ "title": "东营区" }, { "title": "河口区" }, { "title": "垦利县" }, { "title": "广饶县" }, { "title": "利津县" }, { "title": "其他" }] }, { "title": "烟台", "children": [{ "title": "芝罘区" }, { "title": "福山区" }, { "title": "牟平区" }, { "title": "莱山区" }, { "title": "龙口市" }, { "title": "莱阳市" }, { "title": "莱州市" }, { "title": "招远市" }, { "title": "蓬莱市" }, { "title": "栖霞市" }, { "title": "海阳市" }, { "title": "长岛县" }, { "title": "其他" }] }, { "title": "潍坊", "children": [{ "title": "潍城区" }, { "title": "寒亭区" }, { "title": "坊子区" }, { "title": "奎文区" }, { "title": "青州市" }, { "title": "诸城市" }, { "title": "寿光市" }, { "title": "安丘市" }, { "title": "高密市" }, { "title": "昌邑市" }, { "title": "昌乐县" }, { "title": "临朐县" }, { "title": "其他" }] }, { "title": "济宁", "children": [{ "title": "市中区" }, { "title": "任城区" }, { "title": "曲阜市" }, { "title": "兖州市" }, { "title": "邹城市" }, { "title": "鱼台县" }, { "title": "金乡县" }, { "title": "嘉祥县" }, { "title": "微山县" }, { "title": "汶上县" }, { "title": "泗水县" }, { "title": "梁山县" }, { "title": "其他" }] }, { "title": "泰安", "children": [{ "title": "泰山区" }, { "title": "岱岳区" }, { "title": "新泰市" }, { "title": "肥城市" }, { "title": "宁阳县" }, { "title": "东平县" }, { "title": "其他" }] }, { "title": "威海", "children": [{ "title": "环翠区" }, { "title": "乳山市" }, { "title": "文登市" }, { "title": "荣成市" }, { "title": "其他" }] }, { "title": "日照", "children": [{ "title": "东港区" }, { "title": "岚山区" }, { "title": "五莲县" }, { "title": "莒县" }, { "title": "其他" }] }, { "title": "莱芜", "children": [{ "title": "莱城区" }, { "title": "钢城区" }, { "title": "其他" }] }, { "title": "临沂", "children": [{ "title": "兰山区" }, { "title": "罗庄区" }, { "title": "河东区" }, { "title": "沂南县" }, { "title": "郯城县" }, { "title": "沂水县" }, { "title": "苍山县" }, { "title": "费县" }, { "title": "平邑县" }, { "title": "莒南县" }, { "title": "蒙阴县" }, { "title": "临沭县" }, { "title": "其他" }] }, { "title": "德州", "children": [{ "title": "德城区" }, { "title": "乐陵市" }, { "title": "禹城市" }, { "title": "陵县" }, { "title": "宁津县" }, { "title": "齐河县" }, { "title": "武城县" }, { "title": "庆云县" }, { "title": "平原县" }, { "title": "夏津县" }, { "title": "临邑县" }, { "title": "其他" }] }, { "title": "聊城", "children": [{ "title": "东昌府区" }, { "title": "临清市" }, { "title": "高唐县" }, { "title": "阳谷县" }, { "title": "茌平县" }, { "title": "莘县" }, { "title": "东阿县" }, { "title": "冠县" }, { "title": "其他" }] }, { "title": "滨州", "children": [{ "title": "滨城区" }, { "title": "邹平县" }, { "title": "沾化县" }, { "title": "惠民县" }, { "title": "博兴县" }, { "title": "阳信县" }, { "title": "无棣县" }, { "title": "其他" }] }, { "title": "菏泽", "children": [{ "title": "牡丹区" }, { "title": "鄄城县" }, { "title": "单县" }, { "title": "郓城县" }, { "title": "曹县" }, { "title": "定陶县" }, { "title": "巨野县" }, { "title": "东明县" }, { "title": "成武县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "河南", "children": [{ "title": "郑州", "children": [{ "title": "中原区" }, { "title": "金水区" }, { "title": "二七区" }, { "title": "管城回族区" }, { "title": "上街区" }, { "title": "惠济区" }, { "title": "巩义市" }, { "title": "新郑市" }, { "title": "新密市" }, { "title": "登封市" }, { "title": "荥阳市" }, { "title": "中牟县" }, { "title": "其他" }] }, { "title": "开封", "children": [{ "title": "鼓楼区" }, { "title": "龙亭区" }, { "title": "顺河回族区" }, { "title": "禹王台区" }, { "title": "金明区" }, { "title": "开封县" }, { "title": "尉氏县" }, { "title": "兰考县" }, { "title": "杞县" }, { "title": "通许县" }, { "title": "其他" }] }, { "title": "洛阳", "children": [{ "title": "西工区" }, { "title": "老城区" }, { "title": "涧西区" }, { "title": "瀍河回族区" }, { "title": "洛龙区" }, { "title": "吉利区" }, { "title": "偃师市" }, { "title": "孟津县" }, { "title": "汝阳县" }, { "title": "伊川县" }, { "title": "洛宁县" }, { "title": "嵩县" }, { "title": "宜阳县" }, { "title": "新安县" }, { "title": "栾川县" }, { "title": "其他" }] }, { "title": "平顶山", "children": [{ "title": "新华区" }, { "title": "卫东区" }, { "title": "湛河区" }, { "title": "石龙区" }, { "title": "汝州市" }, { "title": "舞钢市" }, { "title": "宝丰县" }, { "title": "叶县" }, { "title": "郏县" }, { "title": "鲁山县" }, { "title": "其他" }] }, { "title": "安阳", "children": [{ "title": "北关区" }, { "title": "文峰区" }, { "title": "殷都区" }, { "title": "龙安区" }, { "title": "林州市" }, { "title": "安阳县" }, { "title": "滑县" }, { "title": "内黄县" }, { "title": "汤阴县" }, { "title": "其他" }] }, { "title": "鹤壁", "children": [{ "title": "淇滨区" }, { "title": "山城区" }, { "title": "鹤山区" }, { "title": "浚县" }, { "title": "淇县" }, { "title": "其他" }] }, { "title": "新乡", "children": [{ "title": "卫滨区" }, { "title": "红旗区" }, { "title": "凤泉区" }, { "title": "牧野区" }, { "title": "卫辉市" }, { "title": "辉县市" }, { "title": "新乡县" }, { "title": "获嘉县" }, { "title": "原阳县" }, { "title": "长垣县" }, { "title": "封丘县" }, { "title": "延津县" }, { "title": "其他" }] }, { "title": "焦作", "children": [{ "title": "解放区" }, { "title": "中站区" }, { "title": "马村区" }, { "title": "山阳区" }, { "title": "沁阳市" }, { "title": "孟州市" }, { "title": "修武县" }, { "title": "温县" }, { "title": "武陟县" }, { "title": "博爱县" }, { "title": "其他" }] }, { "title": "濮阳", "children": [{ "title": "华龙区" }, { "title": "濮阳县" }, { "title": "南乐县" }, { "title": "台前县" }, { "title": "清丰县" }, { "title": "范县" }, { "title": "其他" }] }, { "title": "许昌", "children": [{ "title": "魏都区" }, { "title": "禹州市" }, { "title": "长葛市" }, { "title": "许昌县" }, { "title": "鄢陵县" }, { "title": "襄城县" }, { "title": "其他" }] }, { "title": "漯河", "children": [{ "title": "源汇区" }, { "title": "郾城区" }, { "title": "召陵区" }, { "title": "临颍县" }, { "title": "舞阳县" }, { "title": "其他" }] }, { "title": "三门峡", "children": [{ "title": "湖滨区" }, { "title": "义马市" }, { "title": "灵宝市" }, { "title": "渑池县" }, { "title": "卢氏县" }, { "title": "陕县" }, { "title": "其他" }] }, { "title": "南阳", "children": [{ "title": "卧龙区" }, { "title": "宛城区" }, { "title": "邓州市" }, { "title": "桐柏县" }, { "title": "方城县" }, { "title": "淅川县" }, { "title": "镇平县" }, { "title": "唐河县" }, { "title": "南召县" }, { "title": "内乡县" }, { "title": "新野县" }, { "title": "社旗县" }, { "title": "西峡县" }, { "title": "其他" }] }, { "title": "商丘", "children": [{ "title": "梁园区" }, { "title": "睢阳区" }, { "title": "永城市" }, { "title": "宁陵县" }, { "title": "虞城县" }, { "title": "民权县" }, { "title": "夏邑县" }, { "title": "柘城县" }, { "title": "睢县" }, { "title": "其他" }] }, { "title": "信阳", "children": [{ "title": "浉河区" }, { "title": "平桥区" }, { "title": "潢川县" }, { "title": "淮滨县" }, { "title": "息县" }, { "title": "新县" }, { "title": "商城县" }, { "title": "固始县" }, { "title": "罗山县" }, { "title": "光山县" }, { "title": "其他" }] }, { "title": "周口", "children": [{ "title": "川汇区" }, { "title": "项城市" }, { "title": "商水县" }, { "title": "淮阳县" }, { "title": "太康县" }, { "title": "鹿邑县" }, { "title": "西华县" }, { "title": "扶沟县" }, { "title": "沈丘县" }, { "title": "郸城县" }, { "title": "其他" }] }, { "title": "驻马店", "children": [{ "title": "驿城区" }, { "title": "确山县" }, { "title": "新蔡县" }, { "title": "上蔡县" }, { "title": "西平县" }, { "title": "泌阳县" }, { "title": "平舆县" }, { "title": "汝南县" }, { "title": "遂平县" }, { "title": "正阳县" }, { "title": "其他" }] }, { "title": "焦作", "children": [{ "title": "济源市" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "湖北", "children": [{ "title": "武汉", "children": [{ "title": "江岸区" }, { "title": "武昌区" }, { "title": "江汉区" }, { "title": "硚口区" }, { "title": "汉阳区" }, { "title": "青山区" }, { "title": "洪山区" }, { "title": "东西湖区" }, { "title": "汉南区" }, { "title": "蔡甸区" }, { "title": "江夏区" }, { "title": "黄陂区" }, { "title": "新洲区" }, { "title": "其他" }] }, { "title": "黄石", "children": [{ "title": "黄石港区" }, { "title": "西塞山区" }, { "title": "下陆区" }, { "title": "铁山区" }, { "title": "大冶市" }, { "title": "阳新县" }, { "title": "其他" }] }, { "title": "十堰", "children": [{ "title": "张湾区" }, { "title": "茅箭区" }, { "title": "丹江口市" }, { "title": "郧县" }, { "title": "竹山县" }, { "title": "房县" }, { "title": "郧西县" }, { "title": "竹溪县" }, { "title": "其他" }] }, { "title": "荆州", "children": [{ "title": "沙市区" }, { "title": "荆州区" }, { "title": "洪湖市" }, { "title": "石首市" }, { "title": "松滋市" }, { "title": "监利县" }, { "title": "公安县" }, { "title": "江陵县" }, { "title": "其他" }] }, { "title": "宜昌", "children": [{ "title": "西陵区" }, { "title": "伍家岗区" }, { "title": "点军区" }, { "title": "猇亭区" }, { "title": "夷陵区" }, { "title": "宜都市" }, { "title": "当阳市" }, { "title": "枝江市" }, { "title": "秭归县" }, { "title": "远安县" }, { "title": "兴山县" }, { "title": "五峰土家族自治县" }, { "title": "长阳土家族自治县" }, { "title": "其他" }] }, { "title": "襄樊", "children": [{ "title": "襄城区" }, { "title": "樊城区" }, { "title": "襄阳区" }, { "title": "老河口市" }, { "title": "枣阳市" }, { "title": "宜城市" }, { "title": "南漳县" }, { "title": "谷城县" }, { "title": "保康县" }, { "title": "其他" }] }, { "title": "鄂州", "children": [{ "title": "鄂城区" }, { "title": "华容区" }, { "title": "梁子湖区" }, { "title": "其他" }] }, { "title": "荆门", "children": [{ "title": "东宝区" }, { "title": "掇刀区" }, { "title": "钟祥市" }, { "title": "京山县" }, { "title": "沙洋县" }, { "title": "其他" }] }, { "title": "孝感", "children": [{ "title": "孝南区" }, { "title": "应城市" }, { "title": "安陆市" }, { "title": "汉川市" }, { "title": "云梦县" }, { "title": "大悟县" }, { "title": "孝昌县" }, { "title": "其他" }] }, { "title": "黄冈", "children": [{ "title": "黄州区" }, { "title": "麻城市" }, { "title": "武穴市" }, { "title": "红安县" }, { "title": "罗田县" }, { "title": "浠水县" }, { "title": "蕲春县" }, { "title": "黄梅县" }, { "title": "英山县" }, { "title": "团风县" }, { "title": "其他" }] }, { "title": "咸宁", "children": [{ "title": "咸安区" }, { "title": "赤壁市" }, { "title": "嘉鱼县" }, { "title": "通山县" }, { "title": "崇阳县" }, { "title": "通城县" }, { "title": "其他" }] }, { "title": "随州", "children": [{ "title": "曾都区" }, { "title": "广水市" }, { "title": "其他" }] }, { "title": "恩施土家族苗族自治州", "children": [{ "title": "恩施市" }, { "title": "利川市" }, { "title": "建始县" }, { "title": "来凤县" }, { "title": "巴东县" }, { "title": "鹤峰县" }, { "title": "宣恩县" }, { "title": "咸丰县" }, { "title": "其他" }] }, { "title": "仙桃", "children": [{ "title": "仙桃" }] }, { "title": "天门", "children": [{ "title": "天门" }] }, { "title": "潜江", "children": [{ "title": "潜江" }] }, { "title": "神农架林区", "children": [{ "title": "神农架林区" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "湖南", "children": [{ "title": "长沙", "children": [{ "title": "岳麓区" }, { "title": "芙蓉区" }, { "title": "天心区" }, { "title": "开福区" }, { "title": "雨花区" }, { "title": "浏阳市" }, { "title": "长沙县" }, { "title": "望城县" }, { "title": "宁乡县" }, { "title": "其他" }] }, { "title": "株洲", "children": [{ "title": "天元区" }, { "title": "荷塘区" }, { "title": "芦淞区" }, { "title": "石峰区" }, { "title": "醴陵市" }, { "title": "株洲县" }, { "title": "炎陵县" }, { "title": "茶陵县" }, { "title": "攸县" }, { "title": "其他" }] }, { "title": "湘潭", "children": [{ "title": "岳塘区" }, { "title": "雨湖区" }, { "title": "湘乡市" }, { "title": "韶山市" }, { "title": "湘潭县" }, { "title": "其他" }] }, { "title": "衡阳", "children": [{ "title": "雁峰区" }, { "title": "珠晖区" }, { "title": "石鼓区" }, { "title": "蒸湘区" }, { "title": "南岳区" }, { "title": "耒阳市" }, { "title": "常宁市" }, { "title": "衡阳县" }, { "title": "衡东县" }, { "title": "衡山县" }, { "title": "衡南县" }, { "title": "祁东县" }, { "title": "其他" }] }, { "title": "邵阳", "children": [{ "title": "双清区" }, { "title": "大祥区" }, { "title": "北塔区" }, { "title": "武冈市" }, { "title": "邵东县" }, { "title": "洞口县" }, { "title": "新邵县" }, { "title": "绥宁县" }, { "title": "新宁县" }, { "title": "邵阳县" }, { "title": "隆回县" }, { "title": "城步苗族自治县" }, { "title": "其他" }] }, { "title": "岳阳", "children": [{ "title": "岳阳楼区" }, { "title": "云溪区" }, { "title": "君山区" }, { "title": "临湘市" }, { "title": "汨罗市" }, { "title": "岳阳县" }, { "title": "湘阴县" }, { "title": "平江县" }, { "title": "华容县" }, { "title": "其他" }] }, { "title": "常德", "children": [{ "title": "武陵区" }, { "title": "鼎城区" }, { "title": "津市市" }, { "title": "澧县" }, { "title": "临澧县" }, { "title": "桃源县" }, { "title": "汉寿县" }, { "title": "安乡县" }, { "title": "石门县" }, { "title": "其他" }] }, { "title": "张家界", "children": [{ "title": "永定区" }, { "title": "武陵源区" }, { "title": "慈利县" }, { "title": "桑植县" }, { "title": "其他" }] }, { "title": "益阳", "children": [{ "title": "赫山区" }, { "title": "资阳区" }, { "title": "沅江市" }, { "title": "桃江县" }, { "title": "南县" }, { "title": "安化县" }, { "title": "其他" }] }, { "title": "郴州", "children": [{ "title": "北湖区" }, { "title": "苏仙区" }, { "title": "资兴市" }, { "title": "宜章县" }, { "title": "汝城县" }, { "title": "安仁县" }, { "title": "嘉禾县" }, { "title": "临武县" }, { "title": "桂东县" }, { "title": "永兴县" }, { "title": "桂阳县" }, { "title": "其他" }] }, { "title": "永州", "children": [{ "title": "冷水滩区" }, { "title": "零陵区" }, { "title": "祁阳县" }, { "title": "蓝山县" }, { "title": "宁远县" }, { "title": "新田县" }, { "title": "东安县" }, { "title": "江永县" }, { "title": "道县" }, { "title": "双牌县" }, { "title": "江华瑶族自治县" }, { "title": "其他" }] }, { "title": "怀化", "children": [{ "title": "鹤城区" }, { "title": "洪江市" }, { "title": "会同县" }, { "title": "沅陵县" }, { "title": "辰溪县" }, { "title": "溆浦县" }, { "title": "中方县" }, { "title": "新晃侗族自治县" }, { "title": "芷江侗族自治县" }, { "title": "通道侗族自治县" }, { "title": "靖州苗族侗族自治县" }, { "title": "麻阳苗族自治县" }, { "title": "其他" }] }, { "title": "娄底", "children": [{ "title": "娄星区" }, { "title": "冷水江市" }, { "title": "涟源市" }, { "title": "新化县" }, { "title": "双峰县" }, { "title": "其他" }] }, { "title": "湘西土家族苗族自治州", "children": [{ "title": "吉首市" }, { "title": "古丈县" }, { "title": "龙山县" }, { "title": "永顺县" }, { "title": "凤凰县" }, { "title": "泸溪县" }, { "title": "保靖县" }, { "title": "花垣县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "广东", "children": [{ "title": "广州", "children": [{ "title": "越秀区" }, { "title": "荔湾区" }, { "title": "海珠区" }, { "title": "天河区" }, { "title": "白云区" }, { "title": "黄埔区" }, { "title": "番禺区" }, { "title": "花都区" }, { "title": "南沙区" }, { "title": "萝岗区" }, { "title": "增城市" }, { "title": "从化市" }, { "title": "其他" }] }, { "title": "深圳", "children": [{ "title": "福田区" }, { "title": "罗湖区" }, { "title": "南山区" }, { "title": "宝安区" }, { "title": "龙岗区" }, { "title": "盐田区" }, { "title": "其他" }] }, { "title": "东莞", "children": [{ "title": "莞城" }, { "title": "常平" }, { "title": "塘厦" }, { "title": "塘厦" }, { "title": "塘厦" }, { "title": "其他" }] }, { "title": "中山", "children": [{ "title": "中山" }] }, { "title": "潮州", "children": [{ "title": "湘桥区" }, { "title": "潮安县" }, { "title": "饶平县" }, { "title": "其他" }] }, { "title": "揭阳", "children": [{ "title": "榕城区" }, { "title": "揭东县" }, { "title": "揭西县" }, { "title": "惠来县" }, { "title": "普宁市" }, { "title": "其他" }] }, { "title": "云浮", "children": [{ "title": "云城区" }, { "title": "新兴县" }, { "title": "郁南县" }, { "title": "云安县" }, { "title": "罗定市" }, { "title": "其他" }] }, { "title": "珠海", "children": [{ "title": "香洲区" }, { "title": "斗门区" }, { "title": "金湾区" }, { "title": "其他" }] }, { "title": "汕头", "children": [{ "title": "金平区" }, { "title": "濠江区" }, { "title": "龙湖区" }, { "title": "潮阳区" }, { "title": "潮南区" }, { "title": "澄海区" }, { "title": "南澳县" }, { "title": "其他" }] }, { "title": "韶关", "children": [{ "title": "浈江区" }, { "title": "武江区" }, { "title": "曲江区" }, { "title": "乐昌市" }, { "title": "南雄市" }, { "title": "始兴县" }, { "title": "仁化县" }, { "title": "翁源县" }, { "title": "新丰县" }, { "title": "乳源瑶族自治县" }, { "title": "其他" }] }, { "title": "佛山", "children": [{ "title": "禅城区" }, { "title": "南海区" }, { "title": "顺德区" }, { "title": "三水区" }, { "title": "高明区" }, { "title": "其他" }] }, { "title": "江门", "children": [{ "title": "蓬江区" }, { "title": "江海区" }, { "title": "新会区" }, { "title": "恩平市" }, { "title": "台山市" }, { "title": "开平市" }, { "title": "鹤山市" }, { "title": "其他" }] }, { "title": "湛江", "children": [{ "title": "赤坎区" }, { "title": "霞山区" }, { "title": "坡头区" }, { "title": "麻章区" }, { "title": "吴川市" }, { "title": "廉江市" }, { "title": "雷州市" }, { "title": "遂溪县" }, { "title": "徐闻县" }, { "title": "其他" }] }, { "title": "茂名", "children": [{ "title": "茂南区" }, { "title": "茂港区" }, { "title": "化州市" }, { "title": "信宜市" }, { "title": "高州市" }, { "title": "电白县" }, { "title": "其他" }] }, { "title": "肇庆", "children": [{ "title": "端州区" }, { "title": "鼎湖区" }, { "title": "高要市" }, { "title": "四会市" }, { "title": "广宁县" }, { "title": "怀集县" }, { "title": "封开县" }, { "title": "德庆县" }, { "title": "其他" }] }, { "title": "惠州", "children": [{ "title": "惠城区" }, { "title": "惠阳区" }, { "title": "博罗县" }, { "title": "惠东县" }, { "title": "龙门县" }, { "title": "其他" }] }, { "title": "梅州", "children": [{ "title": "梅江区" }, { "title": "兴宁市" }, { "title": "梅县" }, { "title": "大埔县" }, { "title": "丰顺县" }, { "title": "五华县" }, { "title": "平远县" }, { "title": "蕉岭县" }, { "title": "其他" }] }, { "title": "汕尾", "children": [{ "title": "城区" }, { "title": "陆丰市" }, { "title": "海丰县" }, { "title": "陆河县" }, { "title": "其他" }] }, { "title": "河源", "children": [{ "title": "源城区" }, { "title": "紫金县" }, { "title": "龙川县" }, { "title": "连平县" }, { "title": "和平县" }, { "title": "东源县" }, { "title": "其他" }] }, { "title": "阳江", "children": [{ "title": "江城区" }, { "title": "阳春市" }, { "title": "阳西县" }, { "title": "阳东县" }, { "title": "其他" }] }, { "title": "清远", "children": [{ "title": "清城区" }, { "title": "英德市" }, { "title": "连州市" }, { "title": "佛冈县" }, { "title": "阳山县" }, { "title": "清新县" }, { "title": "连山壮族瑶族自治县" }, { "title": "连南瑶族自治县" }, { "title": "其他" }] }] }, { "title": "广西", "children": [{ "title": "南宁", "children": [{ "title": "青秀区" }, { "title": "兴宁区" }, { "title": "西乡塘区" }, { "title": "良庆区" }, { "title": "江南区" }, { "title": "邕宁区" }, { "title": "武鸣县" }, { "title": "隆安县" }, { "title": "马山县" }, { "title": "上林县" }, { "title": "宾阳县" }, { "title": "横县" }, { "title": "其他" }] }, { "title": "柳州", "children": [{ "title": "城中区" }, { "title": "鱼峰区" }, { "title": "柳北区" }, { "title": "柳南区" }, { "title": "柳江县" }, { "title": "柳城县" }, { "title": "鹿寨县" }, { "title": "融安县" }, { "title": "融水苗族自治县" }, { "title": "三江侗族自治县" }, { "title": "其他" }] }, { "title": "桂林", "children": [{ "title": "象山区" }, { "title": "秀峰区" }, { "title": "叠彩区" }, { "title": "七星区" }, { "title": "雁山区" }, { "title": "阳朔县" }, { "title": "临桂县" }, { "title": "灵川县" }, { "title": "全州县" }, { "title": "平乐县" }, { "title": "兴安县" }, { "title": "灌阳县" }, { "title": "荔浦县" }, { "title": "资源县" }, { "title": "永福县" }, { "title": "龙胜各族自治县" }, { "title": "恭城瑶族自治县" }, { "title": "其他" }] }, { "title": "梧州", "children": [{ "title": "万秀区" }, { "title": "蝶山区" }, { "title": "长洲区" }, { "title": "岑溪市" }, { "title": "苍梧县" }, { "title": "藤县" }, { "title": "蒙山县" }, { "title": "其他" }] }, { "title": "北海", "children": [{ "title": "海城区" }, { "title": "银海区" }, { "title": "铁山港区" }, { "title": "合浦县" }, { "title": "其他" }] }, { "title": "防城港", "children": [{ "title": "港口区" }, { "title": "防城区" }, { "title": "东兴市" }, { "title": "上思县" }, { "title": "其他" }] }, { "title": "钦州", "children": [{ "title": "钦南区" }, { "title": "钦北区" }, { "title": "灵山县" }, { "title": "浦北县" }, { "title": "其他" }] }, { "title": "贵港", "children": [{ "title": "港北区" }, { "title": "港南区" }, { "title": "覃塘区" }, { "title": "桂平市" }, { "title": "平南县" }, { "title": "其他" }] }, { "title": "玉林", "children": [{ "title": "玉州区" }, { "title": "北流市" }, { "title": "容县" }, { "title": "陆川县" }, { "title": "博白县" }, { "title": "兴业县" }, { "title": "其他" }] }, { "title": "百色", "children": [{ "title": "右江区" }, { "title": "凌云县" }, { "title": "平果县" }, { "title": "西林县" }, { "title": "乐业县" }, { "title": "德保县" }, { "title": "田林县" }, { "title": "田阳县" }, { "title": "靖西县" }, { "title": "田东县" }, { "title": "那坡县" }, { "title": "隆林各族自治县" }, { "title": "其他" }] }, { "title": "贺州", "children": [{ "title": "八步区" }, { "title": "钟山县" }, { "title": "昭平县" }, { "title": "富川瑶族自治县" }, { "title": "其他" }] }, { "title": "河池", "children": [{ "title": "金城江区" }, { "title": "宜州市" }, { "title": "天峨县" }, { "title": "凤山县" }, { "title": "南丹县" }, { "title": "东兰县" }, { "title": "都安瑶族自治县" }, { "title": "罗城仫佬族自治县" }, { "title": "巴马瑶族自治县" }, { "title": "环江毛南族自治县" }, { "title": "大化瑶族自治县" }, { "title": "其他" }] }, { "title": "来宾", "children": [{ "title": "兴宾区" }, { "title": "合山市" }, { "title": "象州县" }, { "title": "武宣县" }, { "title": "忻城县" }, { "title": "金秀瑶族自治县" }, { "title": "其他" }] }, { "title": "崇左", "children": [{ "title": "江州区" }, { "title": "凭祥市" }, { "title": "宁明县" }, { "title": "扶绥县" }, { "title": "龙州县" }, { "title": "大新县" }, { "title": "天等县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "海南", "children": [{ "title": "海口", "children": [{ "title": "龙华区" }, { "title": "秀英区" }, { "title": "琼山区" }, { "title": "美兰区" }, { "title": "其他" }] }, { "title": "三亚", "children": [{ "title": "三亚市" }, { "title": "其他" }] }, { "title": "五指山", "children": [{ "title": "五指山" }] }, { "title": "琼海", "children": [{ "title": "琼海" }] }, { "title": "儋州", "children": [{ "title": "儋州" }] }, { "title": "文昌", "children": [{ "title": "文昌" }] }, { "title": "万宁", "children": [{ "title": "万宁" }] }, { "title": "东方", "children": [{ "title": "东方" }] }, { "title": "澄迈县", "children": [{ "title": "澄迈县" }] }, { "title": "定安县", "children": [{ "title": "定安县" }] }, { "title": "屯昌县", "children": [{ "title": "屯昌县" }] }, { "title": "临高县", "children": [{ "title": "临高县" }] }, { "title": "白沙黎族自治县", "children": [{ "title": "白沙黎族自治县" }] }, { "title": "昌江黎族自治县", "children": [{ "title": "昌江黎族自治县" }] }, { "title": "乐东黎族自治县", "children": [{ "title": "乐东黎族自治县" }] }, { "title": "陵水黎族自治县", "children": [{ "title": "陵水黎族自治县" }] }, { "title": "保亭黎族苗族自治县", "children": [{ "title": "保亭黎族苗族自治县" }] }, { "title": "琼中黎族苗族自治县", "children": [{ "title": "琼中黎族苗族自治县" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "重庆", "children": [{ "title": "重庆", "children": [{ "title": "渝中区" }, { "title": "大渡口区" }, { "title": "江北区" }, { "title": "南岸区" }, { "title": "北碚区" }, { "title": "渝北区" }, { "title": "巴南区" }, { "title": "长寿区" }, { "title": "双桥区" }, { "title": "沙坪坝区" }, { "title": "万盛区" }, { "title": "万州区" }, { "title": "涪陵区" }, { "title": "黔江区" }, { "title": "永川区" }, { "title": "合川区" }, { "title": "江津区" }, { "title": "九龙坡区" }, { "title": "南川区" }, { "title": "綦江县" }, { "title": "潼南县" }, { "title": "荣昌县" }, { "title": "璧山县" }, { "title": "大足县" }, { "title": "铜梁县" }, { "title": "梁平县" }, { "title": "开县" }, { "title": "忠县" }, { "title": "城口县" }, { "title": "垫江县" }, { "title": "武隆县" }, { "title": "丰都县" }, { "title": "奉节县" }, { "title": "云阳县" }, { "title": "巫溪县" }, { "title": "巫山县" }, { "title": "石柱土家族自治县" }, { "title": "秀山土家族苗族自治县" }, { "title": "酉阳土家族苗族自治县" }, { "title": "彭水苗族土家族自治县" }, { "title": "其他" }] }] }, { "title": "四川", "children": [{ "title": "成都", "children": [{ "title": "青羊区" }, { "title": "锦江区" }, { "title": "金牛区" }, { "title": "武侯区" }, { "title": "成华区" }, { "title": "龙泉驿区" }, { "title": "青白江区" }, { "title": "新都区" }, { "title": "温江区" }, { "title": "都江堰市" }, { "title": "彭州市" }, { "title": "邛崃市" }, { "title": "崇州市" }, { "title": "金堂县" }, { "title": "郫县" }, { "title": "新津县" }, { "title": "双流县" }, { "title": "蒲江县" }, { "title": "大邑县" }, { "title": "其他" }] }, { "title": "自贡", "children": [{ "title": "大安区" }, { "title": "自流井区" }, { "title": "贡井区" }, { "title": "沿滩区" }, { "title": "荣县" }, { "title": "富顺县" }, { "title": "其他" }] }, { "title": "攀枝花", "children": [{ "title": "仁和区" }, { "title": "米易县" }, { "title": "盐边县" }, { "title": "东区" }, { "title": "西区" }, { "title": "其他" }] }, { "title": "泸州", "children": [{ "title": "江阳区" }, { "title": "纳溪区" }, { "title": "龙马潭区" }, { "title": "泸县" }, { "title": "合江县" }, { "title": "叙永县" }, { "title": "古蔺县" }, { "title": "其他" }] }, { "title": "德阳", "children": [{ "title": "旌阳区" }, { "title": "广汉市" }, { "title": "什邡市" }, { "title": "绵竹市" }, { "title": "罗江县" }, { "title": "中江县" }, { "title": "其他" }] }, { "title": "绵阳", "children": [{ "title": "涪城区" }, { "title": "游仙区" }, { "title": "江油市" }, { "title": "盐亭县" }, { "title": "三台县" }, { "title": "平武县" }, { "title": "安县" }, { "title": "梓潼县" }, { "title": "北川羌族自治县" }, { "title": "其他" }] }, { "title": "广元", "children": [{ "title": "元坝区" }, { "title": "朝天区" }, { "title": "青川县" }, { "title": "旺苍县" }, { "title": "剑阁县" }, { "title": "苍溪县" }, { "title": "市中区" }, { "title": "其他" }] }, { "title": "遂宁", "children": [{ "title": "船山区" }, { "title": "安居区" }, { "title": "射洪县" }, { "title": "蓬溪县" }, { "title": "大英县" }, { "title": "其他" }] }, { "title": "内江", "children": [{ "title": "市中区" }, { "title": "东兴区" }, { "title": "资中县" }, { "title": "隆昌县" }, { "title": "威远县" }, { "title": "其他" }] }, { "title": "乐山", "children": [{ "title": "市中区" }, { "title": "五通桥区" }, { "title": "沙湾区" }, { "title": "金口河区" }, { "title": "峨眉山市" }, { "title": "夹江县" }, { "title": "井研县" }, { "title": "犍为县" }, { "title": "沐川县" }, { "title": "马边彝族自治县" }, { "title": "峨边彝族自治县" }, { "title": "其他" }] }, { "title": "南充", "children": [{ "title": "顺庆区" }, { "title": "高坪区" }, { "title": "嘉陵区" }, { "title": "阆中市" }, { "title": "营山县" }, { "title": "蓬安县" }, { "title": "仪陇县" }, { "title": "南部县" }, { "title": "西充县" }, { "title": "其他" }] }, { "title": "眉山", "children": [{ "title": "东坡区" }, { "title": "仁寿县" }, { "title": "彭山县" }, { "title": "洪雅县" }, { "title": "丹棱县" }, { "title": "青神县" }, { "title": "其他" }] }, { "title": "宜宾", "children": [{ "title": "翠屏区" }, { "title": "宜宾县" }, { "title": "兴文县" }, { "title": "南溪县" }, { "title": "珙县" }, { "title": "长宁县" }, { "title": "高县" }, { "title": "江安县" }, { "title": "筠连县" }, { "title": "屏山县" }, { "title": "其他" }] }, { "title": "广安", "children": [{ "title": "广安区" }, { "title": "华蓥市" }, { "title": "岳池县" }, { "title": "邻水县" }, { "title": "武胜县" }, { "title": "其他" }] }, { "title": "达州", "children": [{ "title": "通川区" }, { "title": "万源市" }, { "title": "达县" }, { "title": "渠县" }, { "title": "宣汉县" }, { "title": "开江县" }, { "title": "大竹县" }, { "title": "其他" }] }, { "title": "雅安", "children": [{ "title": "雨城区" }, { "title": "芦山县" }, { "title": "石棉县" }, { "title": "名山县" }, { "title": "天全县" }, { "title": "荥经县" }, { "title": "宝兴县" }, { "title": "汉源县" }, { "title": "其他" }] }, { "title": "巴中", "children": [{ "title": "巴州区" }, { "title": "南江县" }, { "title": "平昌县" }, { "title": "通江县" }, { "title": "其他" }] }, { "title": "资阳", "children": [{ "title": "雁江区" }, { "title": "简阳市" }, { "title": "安岳县" }, { "title": "乐至县" }, { "title": "其他" }] }, { "title": "阿坝藏族羌族自治州", "children": [{ "title": "马尔康县" }, { "title": "九寨沟县" }, { "title": "红原县" }, { "title": "汶川县" }, { "title": "阿坝县" }, { "title": "理县" }, { "title": "若尔盖县" }, { "title": "小金县" }, { "title": "黑水县" }, { "title": "金川县" }, { "title": "松潘县" }, { "title": "壤塘县" }, { "title": "茂县" }, { "title": "其他" }] }, { "title": "甘孜藏族自治州", "children": [{ "title": "康定县" }, { "title": "丹巴县" }, { "title": "炉霍县" }, { "title": "九龙县" }, { "title": "甘孜县" }, { "title": "雅江县" }, { "title": "新龙县" }, { "title": "道孚县" }, { "title": "白玉县" }, { "title": "理塘县" }, { "title": "德格县" }, { "title": "乡城县" }, { "title": "石渠县" }, { "title": "稻城县" }, { "title": "色达县" }, { "title": "巴塘县" }, { "title": "泸定县" }, { "title": "得荣县" }, { "title": "其他" }] }, { "title": "凉山彝族自治州", "children": [{ "title": "西昌市" }, { "title": "美姑县" }, { "title": "昭觉县" }, { "title": "金阳县" }, { "title": "甘洛县" }, { "title": "布拖县" }, { "title": "雷波县" }, { "title": "普格县" }, { "title": "宁南县" }, { "title": "喜德县" }, { "title": "会东县" }, { "title": "越西县" }, { "title": "会理县" }, { "title": "盐源县" }, { "title": "德昌县" }, { "title": "冕宁县" }, { "title": "木里藏族自治县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "贵州", "children": [{ "title": "贵阳", "children": [{ "title": "南明区" }, { "title": "云岩区" }, { "title": "花溪区" }, { "title": "乌当区" }, { "title": "白云区" }, { "title": "小河区" }, { "title": "清镇市" }, { "title": "开阳县" }, { "title": "修文县" }, { "title": "息烽县" }, { "title": "其他" }] }, { "title": "六盘水", "children": [{ "title": "钟山区" }, { "title": "水城县" }, { "title": "盘县" }, { "title": "六枝特区" }, { "title": "其他" }] }, { "title": "遵义", "children": [{ "title": "红花岗区" }, { "title": "汇川区" }, { "title": "赤水市" }, { "title": "仁怀市" }, { "title": "遵义县" }, { "title": "绥阳县" }, { "title": "桐梓县" }, { "title": "习水县" }, { "title": "凤冈县" }, { "title": "正安县" }, { "title": "余庆县" }, { "title": "湄潭县" }, { "title": "道真仡佬族苗族自治县" }, { "title": "务川仡佬族苗族自治县" }, { "title": "其他" }] }, { "title": "安顺", "children": [{ "title": "西秀区" }, { "title": "普定县" }, { "title": "平坝县" }, { "title": "镇宁布依族苗族自治县" }, { "title": "紫云苗族布依族自治县" }, { "title": "关岭布依族苗族自治县" }, { "title": "其他" }] }, { "title": "铜仁地区", "children": [{ "title": "铜仁市" }, { "title": "德江县" }, { "title": "江口县" }, { "title": "思南县" }, { "title": "石阡县" }, { "title": "玉屏侗族自治县" }, { "title": "松桃苗族自治县" }, { "title": "印江土家族苗族自治县" }, { "title": "沿河土家族自治县" }, { "title": "万山特区" }, { "title": "其他" }] }, { "title": "毕节地区", "children": [{ "title": "毕节市" }, { "title": "黔西县" }, { "title": "大方县" }, { "title": "织金县" }, { "title": "金沙县" }, { "title": "赫章县" }, { "title": "纳雍县" }, { "title": "威宁彝族回族苗族自治县" }, { "title": "其他" }] }, { "title": "黔西南布依族苗族自治州", "children": [{ "title": "兴义市" }, { "title": "望谟县" }, { "title": "兴仁县" }, { "title": "普安县" }, { "title": "册亨县" }, { "title": "晴隆县" }, { "title": "贞丰县" }, { "title": "安龙县" }, { "title": "其他" }] }, { "title": "黔东南苗族侗族自治州", "children": [{ "title": "凯里市" }, { "title": "施秉县" }, { "title": "从江县" }, { "title": "锦屏县" }, { "title": "镇远县" }, { "title": "麻江县" }, { "title": "台江县" }, { "title": "天柱县" }, { "title": "黄平县" }, { "title": "榕江县" }, { "title": "剑河县" }, { "title": "三穗县" }, { "title": "雷山县" }, { "title": "黎平县" }, { "title": "岑巩县" }, { "title": "丹寨县" }, { "title": "其他" }] }, { "title": "黔南布依族苗族自治州", "children": [{ "title": "都匀市" }, { "title": "福泉市" }, { "title": "贵定县" }, { "title": "惠水县" }, { "title": "罗甸县" }, { "title": "瓮安县" }, { "title": "荔波县" }, { "title": "龙里县" }, { "title": "平塘县" }, { "title": "长顺县" }, { "title": "独山县" }, { "title": "三都水族自治县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "云南", "children": [{ "title": "昆明", "children": [{ "title": "盘龙区" }, { "title": "五华区" }, { "title": "官渡区" }, { "title": "西山区" }, { "title": "东川区" }, { "title": "安宁市" }, { "title": "呈贡县" }, { "title": "晋宁县" }, { "title": "富民县" }, { "title": "宜良县" }, { "title": "嵩明县" }, { "title": "石林彝族自治县" }, { "title": "禄劝彝族苗族自治县" }, { "title": "寻甸回族彝族自治县" }, { "title": "其他" }] }, { "title": "曲靖", "children": [{ "title": "麒麟区" }, { "title": "宣威市" }, { "title": "马龙县" }, { "title": "沾益县" }, { "title": "富源县" }, { "title": "罗平县" }, { "title": "师宗县" }, { "title": "陆良县" }, { "title": "会泽县" }, { "title": "其他" }] }, { "title": "玉溪", "children": [{ "title": "红塔区" }, { "title": "江川县" }, { "title": "澄江县" }, { "title": "通海县" }, { "title": "华宁县" }, { "title": "易门县" }, { "title": "峨山彝族自治县" }, { "title": "新平彝族傣族自治县" }, { "title": "元江哈尼族彝族傣族自治县" }, { "title": "其他" }] }, { "title": "保山", "children": [{ "title": "隆阳区" }, { "title": "施甸县" }, { "title": "腾冲县" }, { "title": "龙陵县" }, { "title": "昌宁县" }, { "title": "其他" }] }, { "title": "昭通", "children": [{ "title": "昭阳区" }, { "title": "鲁甸县" }, { "title": "巧家县" }, { "title": "盐津县" }, { "title": "大关县" }, { "title": "永善县" }, { "title": "绥江县" }, { "title": "镇雄县" }, { "title": "彝良县" }, { "title": "威信县" }, { "title": "水富县" }, { "title": "其他" }] }, { "title": "丽江", "children": [{ "title": "古城区" }, { "title": "永胜县" }, { "title": "华坪县" }, { "title": "玉龙纳西族自治县" }, { "title": "宁蒗彝族自治县" }, { "title": "其他" }] }, { "title": "普洱", "children": [{ "title": "思茅区" }, { "title": "普洱哈尼族彝族自治县" }, { "title": "墨江哈尼族自治县" }, { "title": "景东彝族自治县" }, { "title": "景谷傣族彝族自治县" }, { "title": "镇沅彝族哈尼族拉祜族自治县" }, { "title": "江城哈尼族彝族自治县" }, { "title": "孟连傣族拉祜族佤族自治县" }, { "title": "澜沧拉祜族自治县" }, { "title": "西盟佤族自治县" }, { "title": "其他" }] }, { "title": "临沧", "children": [{ "title": "临翔区" }, { "title": "凤庆县" }, { "title": "云县" }, { "title": "永德县" }, { "title": "镇康县" }, { "title": "双江拉祜族佤族布朗族傣族自治县" }, { "title": "耿马傣族佤族自治县" }, { "title": "沧源佤族自治县" }, { "title": "其他" }] }, { "title": "德宏傣族景颇族自治州", "children": [{ "title": "潞西市" }, { "title": "瑞丽市" }, { "title": "梁河县" }, { "title": "盈江县" }, { "title": "陇川县" }, { "title": "其他" }] }, { "title": "怒江傈僳族自治州", "children": [{ "title": "泸水县" }, { "title": "福贡县" }, { "title": "贡山独龙族怒族自治县" }, { "title": "兰坪白族普米族自治县" }, { "title": "其他" }] }, { "title": "迪庆藏族自治州", "children": [{ "title": "香格里拉县" }, { "title": "德钦县" }, { "title": "维西傈僳族自治县" }, { "title": "其他" }] }, { "title": "大理白族自治州", "children": [{ "title": "大理市" }, { "title": "祥云县" }, { "title": "宾川县" }, { "title": "弥渡县" }, { "title": "永平县" }, { "title": "云龙县" }, { "title": "洱源县" }, { "title": "剑川县" }, { "title": "鹤庆县" }, { "title": "漾濞彝族自治县" }, { "title": "南涧彝族自治县" }, { "title": "巍山彝族回族自治县" }, { "title": "其他" }] }, { "title": "楚雄彝族自治州", "children": [{ "title": "楚雄市" }, { "title": "双柏县" }, { "title": "牟定县" }, { "title": "南华县" }, { "title": "姚安县" }, { "title": "大姚县" }, { "title": "永仁县" }, { "title": "元谋县" }, { "title": "武定县" }, { "title": "禄丰县" }, { "title": "其他" }] }, { "title": "红河哈尼族彝族自治州", "children": [{ "title": "蒙自县" }, { "title": "个旧市" }, { "title": "开远市" }, { "title": "绿春县" }, { "title": "建水县" }, { "title": "石屏县" }, { "title": "弥勒县" }, { "title": "泸西县" }, { "title": "元阳县" }, { "title": "红河县" }, { "title": "金平苗族瑶族傣族自治县" }, { "title": "河口瑶族自治县" }, { "title": "屏边苗族自治县" }, { "title": "其他" }] }, { "title": "文山壮族苗族自治州", "children": [{ "title": "文山县" }, { "title": "砚山县" }, { "title": "西畴县" }, { "title": "麻栗坡县" }, { "title": "马关县" }, { "title": "丘北县" }, { "title": "广南县" }, { "title": "富宁县" }, { "title": "其他" }] }, { "title": "西双版纳傣族自治州", "children": [{ "title": "景洪市" }, { "title": "勐海县" }, { "title": "勐腊县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "西藏", "children": [{ "title": "拉萨", "children": [{ "title": "城关区" }, { "title": "林周县" }, { "title": "当雄县" }, { "title": "尼木县" }, { "title": "曲水县" }, { "title": "堆龙德庆县" }, { "title": "达孜县" }, { "title": "墨竹工卡县" }, { "title": "其他" }] }, { "title": "那曲地区", "children": [{ "title": "那曲县" }, { "title": "嘉黎县" }, { "title": "比如县" }, { "title": "聂荣县" }, { "title": "安多县" }, { "title": "申扎县" }, { "title": "索县" }, { "title": "班戈县" }, { "title": "巴青县" }, { "title": "尼玛县" }, { "title": "其他" }] }, { "title": "昌都地区", "children": [{ "title": "昌都县" }, { "title": "江达县" }, { "title": "贡觉县" }, { "title": "类乌齐县" }, { "title": "丁青县" }, { "title": "察雅县" }, { "title": "八宿县" }, { "title": "左贡县" }, { "title": "芒康县" }, { "title": "洛隆县" }, { "title": "边坝县" }, { "title": "其他" }] }, { "title": "林芝地区", "children": [{ "title": "林芝县" }, { "title": "工布江达县" }, { "title": "米林县" }, { "title": "墨脱县" }, { "title": "波密县" }, { "title": "察隅县" }, { "title": "朗县" }, { "title": "其他" }] }, { "title": "山南地区", "children": [{ "title": "乃东县" }, { "title": "扎囊县" }, { "title": "贡嘎县" }, { "title": "桑日县" }, { "title": "琼结县" }, { "title": "曲松县" }, { "title": "措美县" }, { "title": "洛扎县" }, { "title": "加查县" }, { "title": "隆子县" }, { "title": "错那县" }, { "title": "浪卡子县" }, { "title": "其他" }] }, { "title": "日喀则地区", "children": [{ "title": "日喀则市" }, { "title": "南木林县" }, { "title": "江孜县" }, { "title": "定日县" }, { "title": "萨迦县" }, { "title": "拉孜县" }, { "title": "昂仁县" }, { "title": "谢通门县" }, { "title": "白朗县" }, { "title": "仁布县" }, { "title": "康马县" }, { "title": "定结县" }, { "title": "仲巴县" }, { "title": "亚东县" }, { "title": "吉隆县" }, { "title": "聂拉木县" }, { "title": "萨嘎县" }, { "title": "岗巴县" }, { "title": "其他" }] }, { "title": "阿里地区", "children": [{ "title": "噶尔县" }, { "title": "普兰县" }, { "title": "札达县" }, { "title": "日土县" }, { "title": "革吉县" }, { "title": "改则县" }, { "title": "措勤县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "陕西", "children": [{ "title": "西安", "children": [{ "title": "莲湖区" }, { "title": "新城区" }, { "title": "碑林区" }, { "title": "雁塔区" }, { "title": "灞桥区" }, { "title": "未央区" }, { "title": "阎良区" }, { "title": "临潼区" }, { "title": "长安区" }, { "title": "高陵县" }, { "title": "蓝田县" }, { "title": "户县" }, { "title": "周至县" }, { "title": "其他" }] }, { "title": "铜川", "children": [{ "title": "耀州区" }, { "title": "王益区" }, { "title": "印台区" }, { "title": "宜君县" }, { "title": "其他" }] }, { "title": "宝鸡", "children": [{ "title": "渭滨区" }, { "title": "金台区" }, { "title": "陈仓区" }, { "title": "岐山县" }, { "title": "凤翔县" }, { "title": "陇县" }, { "title": "太白县" }, { "title": "麟游县" }, { "title": "扶风县" }, { "title": "千阳县" }, { "title": "眉县" }, { "title": "凤县" }, { "title": "其他" }] }, { "title": "咸阳", "children": [{ "title": "秦都区" }, { "title": "渭城区" }, { "title": "杨陵区" }, { "title": "兴平市" }, { "title": "礼泉县" }, { "title": "泾阳县" }, { "title": "永寿县" }, { "title": "三原县" }, { "title": "彬县" }, { "title": "旬邑县" }, { "title": "长武县" }, { "title": "乾县" }, { "title": "武功县" }, { "title": "淳化县" }, { "title": "其他" }] }, { "title": "渭南", "children": [{ "title": "临渭区" }, { "title": "韩城市" }, { "title": "华阴市" }, { "title": "蒲城县" }, { "title": "潼关县" }, { "title": "白水县" }, { "title": "澄城县" }, { "title": "华县" }, { "title": "合阳县" }, { "title": "富平县" }, { "title": "大荔县" }, { "title": "其他" }] }, { "title": "延安", "children": [{ "title": "宝塔区" }, { "title": "安塞县" }, { "title": "洛川县" }, { "title": "子长县" }, { "title": "黄陵县" }, { "title": "延川县" }, { "title": "富县" }, { "title": "延长县" }, { "title": "甘泉县" }, { "title": "宜川县" }, { "title": "志丹县" }, { "title": "黄龙县" }, { "title": "吴起县" }, { "title": "其他" }] }, { "title": "汉中", "children": [{ "title": "汉台区" }, { "title": "留坝县" }, { "title": "镇巴县" }, { "title": "城固县" }, { "title": "南郑县" }, { "title": "洋县" }, { "title": "宁强县" }, { "title": "佛坪县" }, { "title": "勉县" }, { "title": "西乡县" }, { "title": "略阳县" }, { "title": "其他" }] }, { "title": "榆林", "children": [{ "title": "榆阳区" }, { "title": "清涧县" }, { "title": "绥德县" }, { "title": "神木县" }, { "title": "佳县" }, { "title": "府谷县" }, { "title": "子洲县" }, { "title": "靖边县" }, { "title": "横山县" }, { "title": "米脂县" }, { "title": "吴堡县" }, { "title": "定边县" }, { "title": "其他" }] }, { "title": "安康", "children": [{ "title": "汉滨区" }, { "title": "紫阳县" }, { "title": "岚皋县" }, { "title": "旬阳县" }, { "title": "镇坪县" }, { "title": "平利县" }, { "title": "石泉县" }, { "title": "宁陕县" }, { "title": "白河县" }, { "title": "汉阴县" }, { "title": "其他" }] }, { "title": "商洛", "children": [{ "title": "商州区" }, { "title": "镇安县" }, { "title": "山阳县" }, { "title": "洛南县" }, { "title": "商南县" }, { "title": "丹凤县" }, { "title": "柞水县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "甘肃", "children": [{ "title": "兰州", "children": [{ "title": "城关区" }, { "title": "七里河区" }, { "title": "西固区" }, { "title": "安宁区" }, { "title": "红古区" }, { "title": "永登县" }, { "title": "皋兰县" }, { "title": "榆中县" }, { "title": "其他" }] }, { "title": "嘉峪关", "children": [{ "title": "嘉峪关市" }, { "title": "其他" }] }, { "title": "金昌", "children": [{ "title": "金川区" }, { "title": "永昌县" }, { "title": "其他" }] }, { "title": "白银", "children": [{ "title": "白银区" }, { "title": "平川区" }, { "title": "靖远县" }, { "title": "会宁县" }, { "title": "景泰县" }, { "title": "其他" }] }, { "title": "天水", "children": [{ "title": "清水县" }, { "title": "秦安县" }, { "title": "甘谷县" }, { "title": "武山县" }, { "title": "张家川回族自治县" }, { "title": "北道区" }, { "title": "秦城区" }, { "title": "其他" }] }, { "title": "武威", "children": [{ "title": "凉州区" }, { "title": "民勤县" }, { "title": "古浪县" }, { "title": "天祝藏族自治县" }, { "title": "其他" }] }, { "title": "酒泉", "children": [{ "title": "肃州区" }, { "title": "玉门市" }, { "title": "敦煌市" }, { "title": "金塔县" }, { "title": "肃北蒙古族自治县" }, { "title": "阿克塞哈萨克族自治县" }, { "title": "安西县" }, { "title": "其他" }] }, { "title": "张掖", "children": [{ "title": "甘州区" }, { "title": "民乐县" }, { "title": "临泽县" }, { "title": "高台县" }, { "title": "山丹县" }, { "title": "肃南裕固族自治县" }, { "title": "其他" }] }, { "title": "庆阳", "children": [{ "title": "西峰区" }, { "title": "庆城县" }, { "title": "环县" }, { "title": "华池县" }, { "title": "合水县" }, { "title": "正宁县" }, { "title": "宁县" }, { "title": "镇原县" }, { "title": "其他" }] }, { "title": "平凉", "children": [{ "title": "崆峒区" }, { "title": "泾川县" }, { "title": "灵台县" }, { "title": "崇信县" }, { "title": "华亭县" }, { "title": "庄浪县" }, { "title": "静宁县" }, { "title": "其他" }] }, { "title": "定西", "children": [{ "title": "安定区" }, { "title": "通渭县" }, { "title": "临洮县" }, { "title": "漳县" }, { "title": "岷县" }, { "title": "渭源县" }, { "title": "陇西县" }, { "title": "其他" }] }, { "title": "陇南", "children": [{ "title": "武都区" }, { "title": "成县" }, { "title": "宕昌县" }, { "title": "康县" }, { "title": "文县" }, { "title": "西和县" }, { "title": "礼县" }, { "title": "两当县" }, { "title": "徽县" }, { "title": "其他" }] }, { "title": "临夏回族自治州", "children": [{ "title": "临夏市" }, { "title": "临夏县" }, { "title": "康乐县" }, { "title": "永靖县" }, { "title": "广河县" }, { "title": "和政县" }, { "title": "东乡族自治县" }, { "title": "积石山保安族东乡族撒拉族自治县" }, { "title": "其他" }] }, { "title": "甘南藏族自治州", "children": [{ "title": "合作市" }, { "title": "临潭县" }, { "title": "卓尼县" }, { "title": "舟曲县" }, { "title": "迭部县" }, { "title": "玛曲县" }, { "title": "碌曲县" }, { "title": "夏河县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "青海", "children": [{ "title": "西宁", "children": [{ "title": "城中区" }, { "title": "城东区" }, { "title": "城西区" }, { "title": "城北区" }, { "title": "湟源县" }, { "title": "湟中县" }, { "title": "大通回族土族自治县" }, { "title": "其他" }] }, { "title": "海东地区", "children": [{ "title": "平安县" }, { "title": "乐都县" }, { "title": "民和回族土族自治县" }, { "title": "互助土族自治县" }, { "title": "化隆回族自治县" }, { "title": "循化撒拉族自治县" }, { "title": "其他" }] }, { "title": "海北藏族自治州", "children": [{ "title": "海晏县" }, { "title": "祁连县" }, { "title": "刚察县" }, { "title": "门源回族自治县" }, { "title": "其他" }] }, { "title": "海南藏族自治州", "children": [{ "title": "共和县" }, { "title": "同德县" }, { "title": "贵德县" }, { "title": "兴海县" }, { "title": "贵南县" }, { "title": "其他" }] }, { "title": "黄南藏族自治州", "children": [{ "title": "同仁县" }, { "title": "尖扎县" }, { "title": "泽库县" }, { "title": "河南蒙古族自治县" }, { "title": "其他" }] }, { "title": "果洛藏族自治州", "children": [{ "title": "玛沁县" }, { "title": "班玛县" }, { "title": "甘德县" }, { "title": "达日县" }, { "title": "久治县" }, { "title": "玛多县" }, { "title": "其他" }] }, { "title": "玉树藏族自治州", "children": [{ "title": "玉树县" }, { "title": "杂多县" }, { "title": "称多县" }, { "title": "治多县" }, { "title": "囊谦县" }, { "title": "曲麻莱县" }, { "title": "其他" }] }, { "title": "海西蒙古族藏族自治州", "children": [{ "title": "德令哈市" }, { "title": "格尔木市" }, { "title": "乌兰县" }, { "title": "都兰县" }, { "title": "天峻县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "宁夏", "children": [{ "title": "银川", "children": [{ "title": "兴庆区" }, { "title": "西夏区" }, { "title": "金凤区" }, { "title": "灵武市" }, { "title": "永宁县" }, { "title": "贺兰县" }, { "title": "其他" }] }, { "title": "石嘴山", "children": [{ "title": "大武口区" }, { "title": "惠农区" }, { "title": "平罗县" }, { "title": "其他" }] }, { "title": "吴忠", "children": [{ "title": "利通区" }, { "title": "青铜峡市" }, { "title": "盐池县" }, { "title": "同心县" }, { "title": "其他" }] }, { "title": "固原", "children": [{ "title": "原州区" }, { "title": "西吉县" }, { "title": "隆德县" }, { "title": "泾源县" }, { "title": "彭阳县" }, { "title": "其他" }] }, { "title": "中卫", "children": [{ "title": "沙坡头区" }, { "title": "中宁县" }, { "title": "海原县" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "新疆", "children": [{ "title": "乌鲁木齐", "children": [{ "title": "天山区" }, { "title": "沙依巴克区" }, { "title": "新市区" }, { "title": "水磨沟区" }, { "title": "头屯河区" }, { "title": "达坂城区" }, { "title": "东山区" }, { "title": "乌鲁木齐县" }, { "title": "其他" }] }, { "title": "克拉玛依", "children": [{ "title": "克拉玛依区" }, { "title": "独山子区" }, { "title": "白碱滩区" }, { "title": "乌尔禾区" }, { "title": "其他" }] }, { "title": "吐鲁番地区", "children": [{ "title": "吐鲁番市" }, { "title": "托克逊县" }, { "title": "鄯善县" }, { "title": "其他" }] }, { "title": "哈密地区", "children": [{ "title": "哈密市" }, { "title": "伊吾县" }, { "title": "巴里坤哈萨克自治县" }, { "title": "其他" }] }, { "title": "和田地区", "children": [{ "title": "和田市" }, { "title": "和田县" }, { "title": "洛浦县" }, { "title": "民丰县" }, { "title": "皮山县" }, { "title": "策勒县" }, { "title": "于田县" }, { "title": "墨玉县" }, { "title": "其他" }] }, { "title": "阿克苏地区", "children": [{ "title": "阿克苏市" }, { "title": "温宿县" }, { "title": "沙雅县" }, { "title": "拜城县" }, { "title": "阿瓦提县" }, { "title": "库车县" }, { "title": "柯坪县" }, { "title": "新和县" }, { "title": "乌什县" }, { "title": "其他" }] }, { "title": "喀什地区", "children": [{ "title": "喀什市" }, { "title": "巴楚县" }, { "title": "泽普县" }, { "title": "伽师县" }, { "title": "叶城县" }, { "title": "岳普湖县" }, { "title": "疏勒县" }, { "title": "麦盖提县" }, { "title": "英吉沙县" }, { "title": "莎车县" }, { "title": "疏附县" }, { "title": "塔什库尔干塔吉克自治县" }, { "title": "其他" }] }, { "title": "克孜勒苏柯尔克孜自治州", "children": [{ "title": "阿图什市" }, { "title": "阿合奇县" }, { "title": "乌恰县" }, { "title": "阿克陶县" }, { "title": "其他" }] }, { "title": "巴音郭楞蒙古自治州", "children": [{ "title": "库尔勒市" }, { "title": "和静县" }, { "title": "尉犁县" }, { "title": "和硕县" }, { "title": "且末县" }, { "title": "博湖县" }, { "title": "轮台县" }, { "title": "若羌县" }, { "title": "焉耆回族自治县" }, { "title": "其他" }] }, { "title": "昌吉回族自治州", "children": [{ "title": "昌吉市" }, { "title": "阜康市" }, { "title": "奇台县" }, { "title": "玛纳斯县" }, { "title": "吉木萨尔县" }, { "title": "呼图壁县" }, { "title": "木垒哈萨克自治县" }, { "title": "米泉市" }, { "title": "其他" }] }, { "title": "博尔塔拉蒙古自治州", "children": [{ "title": "博乐市" }, { "title": "精河县" }, { "title": "温泉县" }, { "title": "其他" }] }, { "title": "石河子", "children": [{ "title": "石河子" }] }, { "title": "阿拉尔", "children": [{ "title": "阿拉尔" }] }, { "title": "图木舒克", "children": [{ "title": "图木舒克" }] }, { "title": "五家渠", "children": [{ "title": "五家渠" }] }, { "title": "伊犁哈萨克自治州", "children": [{ "title": "伊宁市" }, { "title": "奎屯市" }, { "title": "伊宁县" }, { "title": "特克斯县" }, { "title": "尼勒克县" }, { "title": "昭苏县" }, { "title": "新源县" }, { "title": "霍城县" }, { "title": "巩留县" }, { "title": "察布查尔锡伯自治县" }, { "title": "塔城地区" }, { "title": "阿勒泰地区" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "台湾", "children": [{ "title": "台湾", "children": [{ "title": "台北市" }, { "title": "高雄市" }, { "title": "台北县" }, { "title": "桃园县" }, { "title": "新竹县" }, { "title": "苗栗县" }, { "title": "台中县" }, { "title": "彰化县" }, { "title": "南投县" }, { "title": "云林县" }, { "title": "嘉义县" }, { "title": "台南县" }, { "title": "高雄县" }, { "title": "屏东县" }, { "title": "宜兰县" }, { "title": "花莲县" }, { "title": "台东县" }, { "title": "澎湖县" }, { "title": "基隆市" }, { "title": "新竹市" }, { "title": "台中市" }, { "title": "嘉义市" }, { "title": "台南市" }, { "title": "其他" }] }, { "title": "其他", "children": [{ "title": "其他" }] }] }, { "title": "澳门", "children": [{ "title": "澳门", "children": [{ "title": "花地玛堂区" }, { "title": "圣安多尼堂区" }, { "title": "大堂区" }, { "title": "望德堂区" }, { "title": "风顺堂区" }, { "title": "嘉模堂区" }, { "title": "圣方济各堂区" }, { "title": "路凼" }, { "title": "其他" }] }] }, { "title": "香港", "children": [{ "title": "香港", "children": [{ "title": "中西区" }, { "title": "湾仔区" }, { "title": "东区" }, { "title": "南区" }, { "title": "深水埗区" }, { "title": "油尖旺区" }, { "title": "九龙城区" }, { "title": "黄大仙区" }, { "title": "观塘区" }, { "title": "北区" }, { "title": "大埔区" }, { "title": "沙田区" }, { "title": "西贡区" }, { "title": "元朗区" }, { "title": "屯门区" }, { "title": "荃湾区" }, { "title": "葵青区" }, { "title": "离岛区" }, { "title": "其他" }] }] }];

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["picker"]
  }, [_c('wxc-popup', {
    staticClass: ["popup-wrapper"],
    attrs: {
      "popupColor": "#ffffff",
      "show": _vm.show,
      "pos": "bottom",
      "width": "750",
      "height": "550"
    },
    on: {
      "wxcPopupOverlayClicked": _vm.PopupOverlayClick
    }
  }, [_c('div', {
    staticClass: ["picker-content"]
  }, [_c('div', {
    staticClass: ["picker-item"],
    style: _vm.pickerItemStyle
  }, [_c('div', {
    staticClass: ["picker-bar"],
    style: _vm.pickerBarStyle
  }), _c('scroller', {
    ref: _vm.col_1_ref,
    staticClass: ["picker-item-list"],
    style: _vm.pickerItemStyle,
    attrs: {
      "showScrollbar": "false",
      "scrollDirection": "vertical"
    },
    on: {
      "scroll": _vm.onScroll,
      "scrollend": function (e) { return _vm.scrollEnd(e, _vm.col_1_ref); }
    }
  }, [_c('text', {
    ref: _vm.col_1_ref + '_text_0',
    staticClass: ["picker-item-text"],
    style: _vm.pickerItemTextStyle,
    on: {
      "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_1_ref, 0); },
      "appear": function (e) { return _vm.appearPickItem(e, _vm.col_1_ref, 0); }
    }
  }), _c('text', {
    ref: _vm.col_1_ref + '_text_1',
    staticClass: ["picker-item-text"],
    style: _vm.pickerItemTextStyle,
    on: {
      "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_1_ref, 1); },
      "appear": function (e) { return _vm.appearPickItem(e, _vm.col_1_ref, 1); }
    }
  }), _vm._l((_vm.col_1_list), function(item, index) {
    return _c('text', {
      key: _vm.col_1_ref + '_' + index,
      ref: _vm.col_1_ref + '_text_' + _vm.numAdd(index, 2),
      refInFor: true,
      staticClass: ["picker-item-text"],
      style: _vm.pickerItemTextStyle,
      on: {
        "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_1_ref, index + 2); },
        "appear": function (e) { return _vm.appearPickItem(e, _vm.col_1_ref, index + 2); }
      }
    }, [_vm._v(_vm._s((item.title || '')) + "\n                    ")])
  }), _c('text', {
    ref: _vm.col_1_ref + '_text_' + _vm.numAdd(_vm.col_1_list.length + 3),
    staticClass: ["picker-item-text"],
    style: _vm.pickerItemTextStyle,
    on: {
      "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_1_ref, _vm.col_1_list.length + 3); },
      "appear": function (e) { return _vm.appearPickItem(e, _vm.col_1_ref, _vm.col_1_list.length + 3); }
    }
  }), _c('text', {
    ref: _vm.col_1_ref + '_text_' + _vm.numAdd(_vm.col_1_list.length + 4),
    staticClass: ["picker-item-text"],
    style: _vm.pickerItemTextStyle,
    on: {
      "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_1_ref, _vm.col_1_list.length + 4); },
      "appear": function (e) { return _vm.appearPickItem(e, _vm.col_1_ref, _vm.col_1_list.length + 4); }
    }
  })], 2)]), _c('div', {
    staticClass: ["picker-item"],
    style: _vm.pickerItemStyle
  }, [_c('div', {
    staticClass: ["picker-bar"],
    style: _vm.pickerBarStyle
  }), _c('scroller', {
    ref: _vm.col_2_ref,
    staticClass: ["picker-item-list"],
    style: _vm.pickerItemStyle,
    attrs: {
      "showScrollbar": "false",
      "scrollDirection": "vertical"
    },
    on: {
      "scroll": _vm.onScroll,
      "scrollend": function (e) { return _vm.scrollEnd(e, _vm.col_2_ref); }
    }
  }, [_c('text', {
    ref: _vm.col_2_ref + '_text_0',
    staticClass: ["picker-item-text"],
    style: _vm.pickerItemTextStyle,
    on: {
      "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_2_ref, 0); },
      "appear": function (e) { return _vm.appearPickItem(e, _vm.col_2_ref, 0); }
    }
  }), _c('text', {
    ref: _vm.col_2_ref + '_text_1',
    staticClass: ["picker-item-text"],
    style: _vm.pickerItemTextStyle,
    on: {
      "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_2_ref, 1); },
      "appear": function (e) { return _vm.appearPickItem(e, _vm.col_2_ref, 1); }
    }
  }), _vm._l((_vm.col_2_list), function(item, index) {
    return _c('text', {
      key: _vm.col_2_ref + '_' + index,
      ref: _vm.col_2_ref + '_text_' + _vm.numAdd(index, 2),
      refInFor: true,
      staticClass: ["picker-item-text"],
      style: _vm.pickerItemTextStyle,
      on: {
        "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_2_ref, index + 2); },
        "appear": function (e) { return _vm.appearPickItem(e, _vm.col_2_ref, index + 2); }
      }
    }, [_vm._v(_vm._s((item.title || '')) + "\n                    ")])
  }), _c('text', {
    ref: _vm.col_2_ref + '_text_' + _vm.numAdd(_vm.col_2_list.length + 3),
    staticClass: ["picker-item-text"],
    style: _vm.pickerItemTextStyle,
    on: {
      "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_2_ref, _vm.col_2_list.length + 3); },
      "appear": function (e) { return _vm.appearPickItem(e, _vm.col_2_ref, _vm.col_2_list.length + 3); }
    }
  }), _c('text', {
    ref: _vm.col_2_ref + '_text_' + _vm.numAdd(_vm.col_2_list.length + 4),
    staticClass: ["picker-item-text"],
    style: _vm.pickerItemTextStyle,
    on: {
      "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_2_ref, _vm.col_2_list.length + 4); },
      "appear": function (e) { return _vm.appearPickItem(e, _vm.col_2_ref, _vm.col_2_list.length + 4); }
    }
  })], 2)]), _c('div', {
    staticClass: ["picker-item"],
    style: _vm.pickerItemStyle
  }, [_c('div', {
    staticClass: ["picker-bar"],
    style: _vm.pickerBarStyle
  }), _c('scroller', {
    ref: _vm.col_3_ref,
    staticClass: ["picker-item-list"],
    style: _vm.pickerItemStyle,
    attrs: {
      "showScrollbar": "false",
      "scrollDirection": "vertical"
    },
    on: {
      "scroll": _vm.onScroll,
      "scrollend": function (e) { return _vm.scrollEnd(e, _vm.col_3_ref); }
    }
  }, [_c('text', {
    ref: _vm.col_3_ref + '_text_0',
    staticClass: ["picker-item-text"],
    style: _vm.pickerItemTextStyle,
    on: {
      "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_3_ref, 0); },
      "appear": function (e) { return _vm.appearPickItem(e, _vm.col_3_ref, 0); }
    }
  }), _c('text', {
    ref: _vm.col_3_ref + '_text_1',
    staticClass: ["picker-item-text"],
    style: _vm.pickerItemTextStyle,
    on: {
      "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_3_ref, 1); },
      "appear": function (e) { return _vm.appearPickItem(e, _vm.col_3_ref, 1); }
    }
  }), _vm._l((_vm.col_3_list), function(item, index) {
    return _c('text', {
      key: _vm.col_3_ref + '_' + index,
      ref: _vm.col_3_ref + '_text_' + _vm.numAdd(index, 2),
      refInFor: true,
      staticClass: ["picker-item-text"],
      style: _vm.pickerItemTextStyle,
      on: {
        "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_3_ref, index + 2); },
        "appear": function (e) { return _vm.appearPickItem(e, _vm.col_3_ref, index + 2); }
      }
    }, [_vm._v(_vm._s((item.title || '')) + "\n                    ")])
  }), _c('text', {
    ref: _vm.col_3_ref + '_text_' + _vm.numAdd(_vm.col_3_list.length + 3),
    staticClass: ["picker-item-text"],
    style: _vm.pickerItemTextStyle,
    on: {
      "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_3_ref, _vm.col_3_list.length + 3); },
      "appear": function (e) { return _vm.appearPickItem(e, _vm.col_3_ref, _vm.col_3_list.length + 3); }
    }
  }), _c('text', {
    ref: _vm.col_3_ref + '_text_' + _vm.numAdd(_vm.col_3_list.length + 4),
    staticClass: ["picker-item-text"],
    style: _vm.pickerItemTextStyle,
    on: {
      "disappear": function (e) { return _vm.disAppearPickItem(e, _vm.col_3_ref, _vm.col_3_list.length + 4); },
      "appear": function (e) { return _vm.appearPickItem(e, _vm.col_3_ref, _vm.col_3_list.length + 4); }
    }
  })], 2)])]), _c('div', {
    class: ['picker-btn', _vm.isipx() ? 'ipx-bottom' : '']
  }, [_c('text', {
    staticClass: ["picker-btn-text"],
    on: {
      "click": _vm.change
    }
  }, [_vm._v("确定")]), _c('text', {
    staticClass: ["picker-btn-text"],
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("取消")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["booking-wrapper"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_c('TopBar'), _c('HeadBlock'), _c('div', {
    staticClass: ["front-card"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["checkbox-position-box"]
  }, [_c('wxc-grid-select', {
    attrs: {
      "single": true,
      "cols": 3,
      "customStyles": _vm.customStyles,
      "list": _vm.roomTypeList
    },
    on: {
      "select": _vm.selectRoom
    }
  })], 1), _vm._m(1), _c('div', {
    staticClass: ["select-bar"],
    on: {
      "click": _vm.openPicker
    }
  }, [_c('text', {
    staticClass: ["select-date"]
  }, [_vm._v(_vm._s(_vm.selectDate))]), _c('text', {
    staticClass: ["iconfont", "select-icon"]
  }, [_vm._v("")])])]), _c('div', {
    staticClass: ["search-list-warp"]
  }, _vm._l((_vm.roomList), function(item, index) {
    return _c('wxc-cell', {
      key: index,
      attrs: {
        "label": item.room,
        "title": item.time,
        "hasArrow": true
      },
      on: {
        "wxcCellClicked": _vm.wxcCellClicked
      }
    })
  })), _c('div', {
    staticClass: ["search-btn"],
    on: {
      "click": _vm.search
    }
  }, [_c('text', {
    staticClass: ["iconfont", "search-icon"]
  }, [_vm._v("")])]), _c('x-picker', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }],
    attrs: {
      "type": "date",
      "show": _vm.showPicker,
      "yearSection": _vm.getYearSection
    },
    on: {
      "overlayClick": _vm.pickerOverlayClick,
      "onchange": _vm.change
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bar"]
  }, [_c('text', {
    staticClass: ["bar-label"]
  }, [_vm._v("请选择乐器类型")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bar"]
  }, [_c('text', {
    staticClass: ["bar-label"]
  }, [_vm._v("请选择日期")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(132)
)

/* script */
__vue_exports__ = __webpack_require__(133)

/* template */
var __vue_template__ = __webpack_require__(134)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\project\\GraduationProject\\boya-app-weex\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  }
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

var globalEvent = weex.requireModule('globalEvent');
var eventModule = weex.requireModule('event');
exports.default = {
  name: 'App',
  created: function created() {
    var objThis = this;
    globalEvent.addEventListener('androidback', function (e) {
      if (objThis.$route.path === '/' || objThis.$route.path === '/index') {
        eventModule.closeApp();
      } else {
        objThis.$router.go(-1);
      }
    });
  },
  data: function data() {
    return {};
  },

  methods: {}
};

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);