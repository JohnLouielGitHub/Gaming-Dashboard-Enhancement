(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/script.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/script.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "../next-server/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src;

  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

      ScriptCache.get(src).then(onLoad, onError);
    }

    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function () {
      resolve();

      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener('error', function () {
      reject();

      if (onError) {
        onError();
      }
    });
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR

  const {
    updateScripts,
    scripts
  } = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  (0, _react.useEffect)(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([(0, _extends2.default)({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./node_modules/next/dist/client/script.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map(file => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, ["strategy"]);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var _buildManifest$lowPri;

  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce, _this$props$nonce2;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child == null ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/0, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }),  false && /*#__PURE__*/0, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\duelist-next-project\\pages\\_document.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
          integrity: "sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==",
          crossOrigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_document.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9uZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL25leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9oZWFkLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvc2NyaXB0LmpzIiwid2VicGFjazovL25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovL25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzIiwid2VicGFjazovL25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJleHBvcnRzIiwiaW5pdEhlYWRNYW5hZ2VyIiwiRE9NQXR0cmlidXRlTmFtZXMiLCJhY2NlcHRDaGFyc2V0IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImh0dHBFcXVpdiIsIm5vTW9kdWxlIiwicmVhY3RFbGVtZW50VG9ET00iLCJ0eXBlIiwicHJvcHMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsImF0dHIiLCJ0b0xvd2VyQ2FzZSIsInNldEF0dHJpYnV0ZSIsImNoaWxkcmVuIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJpbm5lckhUTUwiLCJfX2h0bWwiLCJ0ZXh0Q29udGVudCIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJ1cGRhdGVFbGVtZW50cyIsImNvbXBvbmVudHMiLCJoZWFkRWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhlYWRDb3VudEVsIiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJlcnJvciIsImhlYWRDb3VudCIsIk51bWJlciIsImNvbnRlbnQiLCJvbGRUYWdzIiwiaSIsImoiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidGFnTmFtZSIsInB1c2giLCJuZXdUYWdzIiwibWFwIiwiZmlsdGVyIiwibmV3VGFnIiwiayIsImxlbiIsImxlbmd0aCIsIm9sZFRhZyIsImlzRXF1YWxOb2RlIiwic3BsaWNlIiwiZm9yRWFjaCIsInQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJ0b1N0cmluZyIsInVwZGF0ZVByb21pc2UiLCJtb3VudGVkSW5zdGFuY2VzIiwiU2V0IiwidXBkYXRlSGVhZCIsImhlYWQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwidGFncyIsImgiLCJocmVmIiwidGl0bGVDb21wb25lbnQiLCJ0aXRsZSIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImluaXRTY3JpcHRMb2FkZXIiLCJfZXh0ZW5kczIiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfcmVhY3QiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2hlYWRNYW5hZ2VyIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJTY3JpcHRDYWNoZSIsIk1hcCIsIkxvYWRDYWNoZSIsImlnbm9yZVByb3BzIiwibG9hZFNjcmlwdCIsInNyYyIsIm9uTG9hZCIsIm9uRXJyb3IiLCJjYWNoZUtleSIsImhhcyIsImFkZCIsImdldCIsImxvYWRQcm9taXNlIiwicmVqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGwiLCJzZXQiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJpbmNsdWRlcyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhhbmRsZUNsaWVudFNjcmlwdExvYWQiLCJzdHJhdGVneSIsIndpbmRvdyIsImxvYWRMYXp5U2NyaXB0IiwicmVhZHlTdGF0ZSIsInNjcmlwdExvYWRlckl0ZW1zIiwiU2NyaXB0IiwicmVzdFByb3BzIiwiZGVmYXVsdCIsInVwZGF0ZVNjcmlwdHMiLCJzY3JpcHRzIiwidXNlQ29udGV4dCIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsInVzZUVmZmVjdCIsImJlZm9yZUludGVyYWN0aXZlIiwiY29uY2F0IiwiX2RlZmF1bHQiLCJIdG1sIiwiTWFpbiIsIl9wcm9wVHlwZXMiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zZXJ2ZXIiLCJfY29uc3RhbnRzIiwiX2RvY3VtZW50Q29udGV4dCIsIl91dGlscyIsIkRvY3VtZW50Q29udGV4dCIsIkRvY3VtZW50SW5pdGlhbFByb3BzIiwiRG9jdW1lbnRQcm9wcyIsIl9nZXRQYWdlRmlsZXMiLCJfdXRpbHMyIiwiX2h0bWxlc2NhcGUiLCJfc2NyaXB0IiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwib2JqIiwiX19lc01vZHVsZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiZGVzYyIsImdldERvY3VtZW50RmlsZXMiLCJidWlsZE1hbmlmZXN0IiwicGF0aG5hbWUiLCJpbkFtcE1vZGUiLCJzaGFyZWRGaWxlcyIsImdldFBhZ2VGaWxlcyIsInBhZ2VGaWxlcyIsImFsbEZpbGVzIiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwiY29udGV4dCIsImFzc2V0UHJlZml4IiwiZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmciLCJkaXNhYmxlT3B0aW1pemVkTG9hZGluZyIsInBvbHlmaWxsRmlsZXMiLCJwb2x5ZmlsbCIsImVuZHNXaXRoIiwiZGVmZXIiLCJub25jZSIsImNyb3NzT3JpZ2luIiwicHJvY2VzcyIsImdldFByZU5leHRTY3JpcHRzIiwic2NyaXB0TG9hZGVyIiwiZmlsZSIsInNjcmlwdFByb3BzIiwiYXNzaWduIiwiX19ORVhUX0NST1NTX09SSUdJTiIsImdldER5bmFtaWNDaHVua3MiLCJmaWxlcyIsImR5bmFtaWNJbXBvcnRzIiwiaXNEZXZlbG9wbWVudCIsImFzeW5jIiwiZW5jb2RlVVJJIiwiZ2V0U2NyaXB0cyIsIl9idWlsZE1hbmlmZXN0JGxvd1ByaSIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJsb3dQcmlvcml0eUZpbGVzIiwiRG9jdW1lbnQiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJlbmhhbmNlQXBwIiwiQXBwIiwiaHRtbCIsInJlbmRlclBhZ2UiLCJzdHlsZXMiLCJyZW5kZXJEb2N1bWVudCIsIkRvY3VtZW50Q29tcG9uZW50IiwiUHJvdmlkZXIiLCJyZW5kZXIiLCJIZWFkIiwiTmV4dFNjcmlwdCIsImRvY0NvbXBvbmVudHNSZW5kZXJlZCIsImxvY2FsZSIsImxhbmciLCJhbXAiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJnZXRDc3NMaW5rcyIsImNzc0ZpbGVzIiwiZiIsInVubWFuZ2VkRmlsZXMiLCJkeW5hbWljQ3NzRmlsZXMiLCJmcm9tIiwiZXhpc3RpbmciLCJjc3NMaW5rRWxlbWVudHMiLCJpc1NoYXJlZEZpbGUiLCJyZWwiLCJhcyIsImlzVW5tYW5hZ2VkRmlsZSIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiQm9vbGVhbiIsImdldFByZWxvYWRNYWluTGlua3MiLCJwcmVsb2FkRmlsZXMiLCJoYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zIiwiZmlsdGVyZWRDaGlsZHJlbiIsIkNoaWxkcmVuIiwiY2hpbGQiLCJfX05FWFRfREFUQV9fIiwibWFrZVN0eWxlc2hlZXRJbmVydCIsIm5vZGUiLCJjIiwiT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTIiwic29tZSIsInVybCIsInN0YXJ0c1dpdGgiLCJuZXdQcm9wcyIsImNsb25lRWxlbWVudCIsIl90aGlzJHByb3BzJG5vbmNlIiwiX3RoaXMkcHJvcHMkbm9uY2UyIiwiYW1wUGF0aCIsImh5YnJpZEFtcCIsImNhbm9uaWNhbEJhc2UiLCJkYW5nZXJvdXNBc1BhdGgiLCJoZWFkVGFncyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsInVuc3RhYmxlX0pzUHJlbG9hZCIsImRpc2FibGVSdW50aW1lSlMiLCJkaXNhYmxlSnNQcmVsb2FkIiwiY3NzUHJlbG9hZHMiLCJvdGhlckhlYWRFbGVtZW50cyIsInRvQXJyYXkiLCJfY2hpbGQkcHJvcHMiLCJpc1JlYWN0SGVsbWV0IiwiX2NoaWxkJHByb3BzMiIsIndhcm4iLCJuYW1lIiwiaGFzQW1waHRtbFJlbCIsImhhc0Nhbm9uaWNhbFJlbCIsImJhZFByb3AiLCJpbmRleE9mIiwia2V5cyIsInByb3AiLCJwYWdlIiwiY3VyU3R5bGVzIiwiaGFzU3R5bGVzIiwiX2VsJHByb3BzIiwiX2VsJHByb3BzJGRhbmdlcm91c2x5IiwiRnJhZ21lbnQiLCJjb3VudCIsImNsZWFuQW1wUGF0aCIsInN0eWxlIiwicmVwbGFjZSIsImdldEFtcFBhdGgiLCJjb250ZXh0VHlwZSIsInByb3BUeXBlcyIsInN0cmluZyIsIkFNUF9SRU5ERVJfVEFSR0VUIiwiZ2V0SW5saW5lU2NyaXB0U291cmNlIiwiZG9jdW1lbnRQcm9wcyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiaHRtbEVzY2FwZUpzb25TdHJpbmciLCJlcnIiLCJtZXNzYWdlIiwiRXJyb3IiLCJhbXBEZXZGaWxlcyIsImRldkZpbGVzIiwic2FmYXJpTm9tb2R1bGVGaXgiLCJhc1BhdGgiLCJNeURvY3VtZW50IiwiaW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7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K0NBQUQ7QUFBQSwrQkFDRTtBQUNFLGFBQUcsRUFBQyxZQUROO0FBRUUsY0FBSSxFQUFDLDRFQUZQO0FBR0UsbUJBQVMsRUFBQyxpR0FIWjtBQUlFLHFCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBU0U7QUFBQSxnQ0FDRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWdCRDs7QUF2QitCOztBQTBCbEMsK0RBQWU0RixVQUFmLEU7Ozs7Ozs7Ozs7O0FDNUJhLGtCQUFrQixNQUFNLDRCQUE0QixzQkFBc0I7QUFDdkY7QUFDQSxxQkFBcUIsaUZBQWlGLHdDQUF3QyxtQ0FBbUM7QUFDakwsc0M7Ozs7Ozs7Ozs7QUNIQSxpSEFBa0Q7Ozs7Ozs7Ozs7OztBQ0FsRCxvRTs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9aW5pdEhlYWRNYW5hZ2VyO2V4cG9ydHMuRE9NQXR0cmlidXRlTmFtZXM9dm9pZCAwO2NvbnN0IERPTUF0dHJpYnV0ZU5hbWVzPXthY2NlcHRDaGFyc2V0OidhY2NlcHQtY2hhcnNldCcsY2xhc3NOYW1lOidjbGFzcycsaHRtbEZvcjonZm9yJyxodHRwRXF1aXY6J2h0dHAtZXF1aXYnLG5vTW9kdWxlOidub01vZHVsZSd9O2V4cG9ydHMuRE9NQXR0cmlidXRlTmFtZXM9RE9NQXR0cmlidXRlTmFtZXM7ZnVuY3Rpb24gcmVhY3RFbGVtZW50VG9ET00oe3R5cGUscHJvcHN9KXtjb25zdCBlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO2Zvcihjb25zdCBwIGluIHByb3BzKXtpZighcHJvcHMuaGFzT3duUHJvcGVydHkocCkpY29udGludWU7aWYocD09PSdjaGlsZHJlbid8fHA9PT0nZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKWNvbnRpbnVlOy8vIHdlIGRvbid0IHJlbmRlciB1bmRlZmluZWQgcHJvcHMgdG8gdGhlIERPTVxuaWYocHJvcHNbcF09PT11bmRlZmluZWQpY29udGludWU7Y29uc3QgYXR0cj1ET01BdHRyaWJ1dGVOYW1lc1twXXx8cC50b0xvd2VyQ2FzZSgpO2lmKHR5cGU9PT0nc2NyaXB0JyYmKGF0dHI9PT0nYXN5bmMnfHxhdHRyPT09J2RlZmVyJ3x8YXR0cj09PSdub01vZHVsZScpKXs7ZWxbYXR0cl09ISFwcm9wc1twXTt9ZWxzZXtlbC5zZXRBdHRyaWJ1dGUoYXR0cixwcm9wc1twXSk7fX1jb25zdHtjaGlsZHJlbixkYW5nZXJvdXNseVNldElubmVySFRNTH09cHJvcHM7aWYoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpe2VsLmlubmVySFRNTD1kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx8fCcnO31lbHNlIGlmKGNoaWxkcmVuKXtlbC50ZXh0Q29udGVudD10eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJz9jaGlsZHJlbjpBcnJheS5pc0FycmF5KGNoaWxkcmVuKT9jaGlsZHJlbi5qb2luKCcnKTonJzt9cmV0dXJuIGVsO31mdW5jdGlvbiB1cGRhdGVFbGVtZW50cyh0eXBlLGNvbXBvbmVudHMpe2NvbnN0IGhlYWRFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO2NvbnN0IGhlYWRDb3VudEVsPWhlYWRFbC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9bmV4dC1oZWFkLWNvdW50XScpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighaGVhZENvdW50RWwpe2NvbnNvbGUuZXJyb3IoJ1dhcm5pbmc6IG5leHQtaGVhZC1jb3VudCBpcyBtaXNzaW5nLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWhlYWQtY291bnQtbWlzc2luZycpO3JldHVybjt9fWNvbnN0IGhlYWRDb3VudD1OdW1iZXIoaGVhZENvdW50RWwuY29udGVudCk7Y29uc3Qgb2xkVGFncz1bXTtmb3IobGV0IGk9MCxqPWhlYWRDb3VudEVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7aTxoZWFkQ291bnQ7aSsrLGo9ai5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKXtpZihqLnRhZ05hbWUudG9Mb3dlckNhc2UoKT09PXR5cGUpe29sZFRhZ3MucHVzaChqKTt9fWNvbnN0IG5ld1RhZ3M9Y29tcG9uZW50cy5tYXAocmVhY3RFbGVtZW50VG9ET00pLmZpbHRlcihuZXdUYWc9Pntmb3IobGV0IGs9MCxsZW49b2xkVGFncy5sZW5ndGg7azxsZW47aysrKXtjb25zdCBvbGRUYWc9b2xkVGFnc1trXTtpZihvbGRUYWcuaXNFcXVhbE5vZGUobmV3VGFnKSl7b2xkVGFncy5zcGxpY2UoaywxKTtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9KTtvbGRUYWdzLmZvckVhY2godD0+dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpKTtuZXdUYWdzLmZvckVhY2godD0+aGVhZEVsLmluc2VydEJlZm9yZSh0LGhlYWRDb3VudEVsKSk7aGVhZENvdW50RWwuY29udGVudD0oaGVhZENvdW50LW9sZFRhZ3MubGVuZ3RoK25ld1RhZ3MubGVuZ3RoKS50b1N0cmluZygpO31mdW5jdGlvbiBpbml0SGVhZE1hbmFnZXIoKXtsZXQgdXBkYXRlUHJvbWlzZT1udWxsO3JldHVybnttb3VudGVkSW5zdGFuY2VzOm5ldyBTZXQoKSx1cGRhdGVIZWFkOmhlYWQ9Pntjb25zdCBwcm9taXNlPXVwZGF0ZVByb21pc2U9UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+e2lmKHByb21pc2UhPT11cGRhdGVQcm9taXNlKXJldHVybjt1cGRhdGVQcm9taXNlPW51bGw7Y29uc3QgdGFncz17fTtoZWFkLmZvckVhY2goaD0+e2lmKC8vIElmIHRoZSBmb250IHRhZyBpcyBsb2FkZWQgb25seSBvbiBjbGllbnQgbmF2aWdhdGlvblxuLy8gaXQgd29uJ3QgYmUgaW5saW5lZC4gSW4gdGhpcyBjYXNlIHJldmVydCB0byB0aGUgb3JpZ2luYWwgYmVoYXZpb3JcbmgudHlwZT09PSdsaW5rJyYmaC5wcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXSYmIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHN0eWxlW2RhdGEtaHJlZj1cIiR7aC5wcm9wc1snZGF0YS1ocmVmJ119XCJdYCkpe2gucHJvcHMuaHJlZj1oLnByb3BzWydkYXRhLWhyZWYnXTtoLnByb3BzWydkYXRhLWhyZWYnXT11bmRlZmluZWQ7fWNvbnN0IGNvbXBvbmVudHM9dGFnc1toLnR5cGVdfHxbXTtjb21wb25lbnRzLnB1c2goaCk7dGFnc1toLnR5cGVdPWNvbXBvbmVudHM7fSk7Y29uc3QgdGl0bGVDb21wb25lbnQ9dGFncy50aXRsZT90YWdzLnRpdGxlWzBdOm51bGw7bGV0IHRpdGxlPScnO2lmKHRpdGxlQ29tcG9uZW50KXtjb25zdHtjaGlsZHJlbn09dGl0bGVDb21wb25lbnQucHJvcHM7dGl0bGU9dHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZyc/Y2hpbGRyZW46QXJyYXkuaXNBcnJheShjaGlsZHJlbik/Y2hpbGRyZW4uam9pbignJyk6Jyc7fWlmKHRpdGxlIT09ZG9jdW1lbnQudGl0bGUpZG9jdW1lbnQudGl0bGU9dGl0bGU7WydtZXRhJywnYmFzZScsJ2xpbmsnLCdzdHlsZScsJ3NjcmlwdCddLmZvckVhY2godHlwZT0+e3VwZGF0ZUVsZW1lbnRzKHR5cGUsdGFnc1t0eXBlXXx8W10pO30pO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQtbWFuYWdlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmluaXRTY3JpcHRMb2FkZXI9aW5pdFNjcmlwdExvYWRlcjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9oZWFkTWFuYWdlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dFwiKTt2YXIgX2hlYWRNYW5hZ2VyPXJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlclwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IFNjcmlwdENhY2hlPW5ldyBNYXAoKTtjb25zdCBMb2FkQ2FjaGU9bmV3IFNldCgpO2NvbnN0IGlnbm9yZVByb3BzPVsnb25Mb2FkJywnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLCdjaGlsZHJlbicsJ29uRXJyb3InLCdzdHJhdGVneSddO2NvbnN0IGxvYWRTY3JpcHQ9cHJvcHM9Pntjb25zdHtzcmMsaWQsb25Mb2FkPSgpPT57fSxkYW5nZXJvdXNseVNldElubmVySFRNTCxjaGlsZHJlbj0nJyxvbkVycm9yfT1wcm9wcztjb25zdCBjYWNoZUtleT1pZHx8c3JjO2lmKFNjcmlwdENhY2hlLmhhcyhzcmMpKXtpZighTG9hZENhY2hlLmhhcyhjYWNoZUtleSkpe0xvYWRDYWNoZS5hZGQoY2FjaGVLZXkpOy8vIEV4ZWN1dGUgb25Mb2FkIHNpbmNlIHRoZSBzY3JpcHQgbG9hZGluZyBoYXMgYmVndW5cblNjcmlwdENhY2hlLmdldChzcmMpLnRoZW4ob25Mb2FkLG9uRXJyb3IpO31yZXR1cm47fWNvbnN0IGVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO2NvbnN0IGxvYWRQcm9taXNlPW5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyxmdW5jdGlvbigpe3Jlc29sdmUoKTtpZihvbkxvYWQpe29uTG9hZC5jYWxsKHRoaXMpO319KTtlbC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsZnVuY3Rpb24oKXtyZWplY3QoKTtpZihvbkVycm9yKXtvbkVycm9yKCk7fX0pO30pO2lmKHNyYyl7U2NyaXB0Q2FjaGUuc2V0KHNyYyxsb2FkUHJvbWlzZSk7TG9hZENhY2hlLmFkZChjYWNoZUtleSk7fWlmKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXtlbC5pbm5lckhUTUw9ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfHwnJzt9ZWxzZSBpZihjaGlsZHJlbil7ZWwudGV4dENvbnRlbnQ9dHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZyc/Y2hpbGRyZW46QXJyYXkuaXNBcnJheShjaGlsZHJlbik/Y2hpbGRyZW4uam9pbignJyk6Jyc7fWVsc2UgaWYoc3JjKXtlbC5zcmM9c3JjO31mb3IoY29uc3Rbayx2YWx1ZV1vZiBPYmplY3QuZW50cmllcyhwcm9wcykpe2lmKHZhbHVlPT09dW5kZWZpbmVkfHxpZ25vcmVQcm9wcy5pbmNsdWRlcyhrKSl7Y29udGludWU7fWNvbnN0IGF0dHI9X2hlYWRNYW5hZ2VyLkRPTUF0dHJpYnV0ZU5hbWVzW2tdfHxrLnRvTG93ZXJDYXNlKCk7ZWwuc2V0QXR0cmlidXRlKGF0dHIsdmFsdWUpO31kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTt9O2Z1bmN0aW9uIGhhbmRsZUNsaWVudFNjcmlwdExvYWQocHJvcHMpe2NvbnN0e3N0cmF0ZWd5PSdhZnRlckludGVyYWN0aXZlJ309cHJvcHM7aWYoc3RyYXRlZ3k9PT0nYWZ0ZXJJbnRlcmFjdGl2ZScpe2xvYWRTY3JpcHQocHJvcHMpO31lbHNlIGlmKHN0cmF0ZWd5PT09J2xhenlPbmxvYWQnKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+bG9hZFNjcmlwdChwcm9wcykpO30pO319ZnVuY3Rpb24gbG9hZExhenlTY3JpcHQocHJvcHMpe2lmKGRvY3VtZW50LnJlYWR5U3RhdGU9PT0nY29tcGxldGUnKXsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+bG9hZFNjcmlwdChwcm9wcykpO31lbHNle3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5sb2FkU2NyaXB0KHByb3BzKSk7fSk7fX1mdW5jdGlvbiBpbml0U2NyaXB0TG9hZGVyKHNjcmlwdExvYWRlckl0ZW1zKXtzY3JpcHRMb2FkZXJJdGVtcy5mb3JFYWNoKGhhbmRsZUNsaWVudFNjcmlwdExvYWQpO31mdW5jdGlvbiBTY3JpcHQocHJvcHMpe2NvbnN0e3NyYz0nJyxvbkxvYWQ9KCk9Pnt9LHN0cmF0ZWd5PSdhZnRlckludGVyYWN0aXZlJyxvbkVycm9yfT1wcm9wcyxyZXN0UHJvcHM9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKHByb3BzLFtcInNyY1wiLFwib25Mb2FkXCIsXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiLFwic3RyYXRlZ3lcIixcIm9uRXJyb3JcIl0pOy8vIENvbnRleHQgaXMgYXZhaWxhYmxlIG9ubHkgZHVyaW5nIFNTUlxuY29uc3R7dXBkYXRlU2NyaXB0cyxzY3JpcHRzfT0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2hlYWRNYW5hZ2VyQ29udGV4dC5IZWFkTWFuYWdlckNvbnRleHQpOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoc3RyYXRlZ3k9PT0nYWZ0ZXJJbnRlcmFjdGl2ZScpe2xvYWRTY3JpcHQocHJvcHMpO31lbHNlIGlmKHN0cmF0ZWd5PT09J2xhenlPbmxvYWQnKXtsb2FkTGF6eVNjcmlwdChwcm9wcyk7fX0sW3Byb3BzLHN0cmF0ZWd5XSk7aWYoc3RyYXRlZ3k9PT0nYmVmb3JlSW50ZXJhY3RpdmUnKXtpZih1cGRhdGVTY3JpcHRzKXtzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlPShzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlfHxbXSkuY29uY2F0KFsoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3NyYyxvbkxvYWQsb25FcnJvcn0scmVzdFByb3BzKV0pO3VwZGF0ZVNjcmlwdHMoc2NyaXB0cyk7fX1yZXR1cm4gbnVsbDt9dmFyIF9kZWZhdWx0PVNjcmlwdDtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JpcHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5IdG1sPUh0bWw7ZXhwb3J0cy5NYWluPU1haW47ZXhwb3J0cy5OZXh0U2NyaXB0PWV4cG9ydHMuSGVhZD1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcHJvcFR5cGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3NlcnZlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKSk7dmFyIF9jb25zdGFudHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHNcIik7dmFyIF9kb2N1bWVudENvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0XCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkRvY3VtZW50Q29udGV4dD1fdXRpbHMuRG9jdW1lbnRDb250ZXh0O2V4cG9ydHMuRG9jdW1lbnRJbml0aWFsUHJvcHM9X3V0aWxzLkRvY3VtZW50SW5pdGlhbFByb3BzO2V4cG9ydHMuRG9jdW1lbnRQcm9wcz1fdXRpbHMuRG9jdW1lbnRQcm9wczt2YXIgX2dldFBhZ2VGaWxlcz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzXCIpO3ZhciBfdXRpbHMyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHNcIik7dmFyIF9odG1sZXNjYXBlPXJlcXVpcmUoXCIuLi9zZXJ2ZXIvaHRtbGVzY2FwZVwiKTt2YXIgX3NjcmlwdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jbGllbnQvc2NyaXB0XCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gZ2V0RG9jdW1lbnRGaWxlcyhidWlsZE1hbmlmZXN0LHBhdGhuYW1lLGluQW1wTW9kZSl7Y29uc3Qgc2hhcmVkRmlsZXM9KDAsX2dldFBhZ2VGaWxlcy5nZXRQYWdlRmlsZXMpKGJ1aWxkTWFuaWZlc3QsJy9fYXBwJyk7Y29uc3QgcGFnZUZpbGVzPWluQW1wTW9kZT9bXTooMCxfZ2V0UGFnZUZpbGVzLmdldFBhZ2VGaWxlcykoYnVpbGRNYW5pZmVzdCxwYXRobmFtZSk7cmV0dXJue3NoYXJlZEZpbGVzLHBhZ2VGaWxlcyxhbGxGaWxlczpbLi4ubmV3IFNldChbLi4uc2hhcmVkRmlsZXMsLi4ucGFnZUZpbGVzXSldfTt9ZnVuY3Rpb24gZ2V0UG9seWZpbGxTY3JpcHRzKGNvbnRleHQscHJvcHMpey8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG5jb25zdHthc3NldFByZWZpeCxidWlsZE1hbmlmZXN0LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfT1jb250ZXh0O3JldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMuZmlsdGVyKHBvbHlmaWxsPT5wb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykmJiFwb2x5ZmlsbC5lbmRzV2l0aCgnLm1vZHVsZS5qcycpKS5tYXAocG9seWZpbGw9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpwb2x5ZmlsbCxkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsbm9uY2U6cHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sbm9Nb2R1bGU6dHJ1ZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfSkpO31mdW5jdGlvbiBnZXRQcmVOZXh0U2NyaXB0cyhjb250ZXh0LHByb3BzKXtjb25zdHtzY3JpcHRMb2FkZXIsZGlzYWJsZU9wdGltaXplZExvYWRpbmd9PWNvbnRleHQ7cmV0dXJuKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZXx8W10pLm1hcChmaWxlPT57Y29uc3R7c3RyYXRlZ3ksLi4uc2NyaXB0UHJvcHN9PWZpbGU7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixPYmplY3QuYXNzaWduKHt9LHNjcmlwdFByb3BzLHtkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsbm9uY2U6cHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSk7fSk7fWZ1bmN0aW9uIGdldER5bmFtaWNDaHVua3MoY29udGV4dCxwcm9wcyxmaWxlcyl7Y29uc3R7ZHluYW1pY0ltcG9ydHMsYXNzZXRQcmVmaXgsaXNEZXZlbG9wbWVudCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309Y29udGV4dDtyZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKGZpbGU9PntpZighZmlsZS5lbmRzV2l0aCgnLmpzJyl8fGZpbGVzLmFsbEZpbGVzLmluY2x1ZGVzKGZpbGUpKXJldHVybiBudWxsO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOiFpc0RldmVsb3BtZW50JiZkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsa2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsbm9uY2U6cHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KTt9KTt9ZnVuY3Rpb24gZ2V0U2NyaXB0cyhjb250ZXh0LHByb3BzLGZpbGVzKXt2YXIgX2J1aWxkTWFuaWZlc3QkbG93UHJpO2NvbnN0e2Fzc2V0UHJlZml4LGJ1aWxkTWFuaWZlc3QsaXNEZXZlbG9wbWVudCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309Y29udGV4dDtjb25zdCBub3JtYWxTY3JpcHRzPWZpbGVzLmFsbEZpbGVzLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuanMnKSk7Y29uc3QgbG93UHJpb3JpdHlTY3JpcHRzPShfYnVpbGRNYW5pZmVzdCRsb3dQcmk9YnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzKT09bnVsbD92b2lkIDA6X2J1aWxkTWFuaWZlc3QkbG93UHJpLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuanMnKSk7cmV0dXJuWy4uLm5vcm1hbFNjcmlwdHMsLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoZmlsZT0+e3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLG5vbmNlOnByb3BzLm5vbmNlLGFzeW5jOiFpc0RldmVsb3BtZW50JiZkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KTt9KTt9LyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50ey8qKlxuICAgKiBgZ2V0SW5pdGlhbFByb3BzYCBob29rIHJldHVybnMgdGhlIGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGByZW5kZXJQYWdlYC5cbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXG4gICAqL3N0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KXtjb25zdCBlbmhhbmNlQXBwPUFwcD0+e3JldHVybiBwcm9wcz0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXBwLHByb3BzKTt9O2NvbnN0e2h0bWwsaGVhZH09YXdhaXQgY3R4LnJlbmRlclBhZ2Uoe2VuaGFuY2VBcHB9KTtjb25zdCBzdHlsZXM9Wy4uLigwLF9zZXJ2ZXIuZGVmYXVsdCkoKV07cmV0dXJue2h0bWwsaGVhZCxzdHlsZXN9O31zdGF0aWMgcmVuZGVyRG9jdW1lbnQoRG9jdW1lbnRDb21wb25lbnQscHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0LlByb3ZpZGVyLHt2YWx1ZTpwcm9wc30sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRG9jdW1lbnRDb21wb25lbnQscHJvcHMpKTt9cmVuZGVyKCl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSHRtbCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEhlYWQsbnVsbCksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNYWluLG51bGwpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5leHRTY3JpcHQsbnVsbCkpKTt9fWV4cG9ydHMuZGVmYXVsdD1Eb2N1bWVudDtmdW5jdGlvbiBIdG1sKHByb3BzKXtjb25zdHtpbkFtcE1vZGUsZG9jQ29tcG9uZW50c1JlbmRlcmVkLGxvY2FsZX09KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0KTtkb2NDb21wb25lbnRzUmVuZGVyZWQuSHRtbD10cnVlO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLE9iamVjdC5hc3NpZ24oe30scHJvcHMse2xhbmc6cHJvcHMubGFuZ3x8bG9jYWxlfHx1bmRlZmluZWQsYW1wOmluQW1wTW9kZT8nJzp1bmRlZmluZWQsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGUmJnByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nPycnOnVuZGVmaW5lZH0pKTt9Y2xhc3MgSGVhZCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9Z2V0Q3NzTGlua3MoZmlsZXMpe2NvbnN0e2Fzc2V0UHJlZml4LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLGR5bmFtaWNJbXBvcnRzfT10aGlzLmNvbnRleHQ7Y29uc3QgY3NzRmlsZXM9ZmlsZXMuYWxsRmlsZXMuZmlsdGVyKGY9PmYuZW5kc1dpdGgoJy5jc3MnKSk7Y29uc3Qgc2hhcmVkRmlsZXM9bmV3IFNldChmaWxlcy5zaGFyZWRGaWxlcyk7Ly8gVW5tYW5hZ2VkIGZpbGVzIGFyZSBDU1MgZmlsZXMgdGhhdCB3aWxsIGJlIGhhbmRsZWQgZGlyZWN0bHkgYnkgdGhlXG4vLyB3ZWJwYWNrIHJ1bnRpbWUgKGBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbmApLlxubGV0IHVubWFuZ2VkRmlsZXM9bmV3IFNldChbXSk7bGV0IGR5bmFtaWNDc3NGaWxlcz1BcnJheS5mcm9tKG5ldyBTZXQoZHluYW1pY0ltcG9ydHMuZmlsdGVyKGZpbGU9PmZpbGUuZW5kc1dpdGgoJy5jc3MnKSkpKTtpZihkeW5hbWljQ3NzRmlsZXMubGVuZ3RoKXtjb25zdCBleGlzdGluZz1uZXcgU2V0KGNzc0ZpbGVzKTtkeW5hbWljQ3NzRmlsZXM9ZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcihmPT4hKGV4aXN0aW5nLmhhcyhmKXx8c2hhcmVkRmlsZXMuaGFzKGYpKSk7dW5tYW5nZWRGaWxlcz1uZXcgU2V0KGR5bmFtaWNDc3NGaWxlcyk7Y3NzRmlsZXMucHVzaCguLi5keW5hbWljQ3NzRmlsZXMpO31sZXQgY3NzTGlua0VsZW1lbnRzPVtdO2Nzc0ZpbGVzLmZvckVhY2goZmlsZT0+e2NvbnN0IGlzU2hhcmVkRmlsZT1zaGFyZWRGaWxlcy5oYXMoZmlsZSk7aWYoIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1Mpe2Nzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6YCR7ZmlsZX0tcHJlbG9hZGAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLGFzOlwic3R5bGVcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSkpO31jb25zdCBpc1VubWFuYWdlZEZpbGU9dW5tYW5nZWRGaWxlcy5oYXMoZmlsZSk7Y3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpmaWxlLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwic3R5bGVzaGVldFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFwiZGF0YS1uLWdcIjppc1VubWFuYWdlZEZpbGU/dW5kZWZpbmVkOmlzU2hhcmVkRmlsZT8nJzp1bmRlZmluZWQsXCJkYXRhLW4tcFwiOmlzVW5tYW5hZ2VkRmlsZT91bmRlZmluZWQ6aXNTaGFyZWRGaWxlP3VuZGVmaW5lZDonJ30pKTt9KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdkZXZlbG9wbWVudCcmJnByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyl7Y3NzTGlua0VsZW1lbnRzPXRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjc3NMaW5rRWxlbWVudHMpO31yZXR1cm4gY3NzTGlua0VsZW1lbnRzLmxlbmd0aD09PTA/bnVsbDpjc3NMaW5rRWxlbWVudHM7fWdldFByZWxvYWREeW5hbWljQ2h1bmtzKCl7Y29uc3R7ZHluYW1pY0ltcG9ydHMsYXNzZXRQcmVmaXgsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtyZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKGZpbGU9PntpZighZmlsZS5lbmRzV2l0aCgnLmpzJykpe3JldHVybiBudWxsO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGtleTpmaWxlLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxhczpcInNjcmlwdFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pO30pLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuLmZpbHRlcihCb29sZWFuKTt9Z2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyl7Y29uc3R7YXNzZXRQcmVmaXgsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsc2NyaXB0TG9hZGVyfT10aGlzLmNvbnRleHQ7Y29uc3QgcHJlbG9hZEZpbGVzPWZpbGVzLmFsbEZpbGVzLmZpbHRlcihmaWxlPT57cmV0dXJuIGZpbGUuZW5kc1dpdGgoJy5qcycpO30pO3JldHVyblsuLi4oc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlfHxbXSkubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZS5zcmMsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpmaWxlLnNyYyxhczpcInNjcmlwdFwiLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSksLi4ucHJlbG9hZEZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLGFzOlwic2NyaXB0XCIsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pKV07fWdldER5bmFtaWNDaHVua3MoZmlsZXMpe3JldHVybiBnZXREeW5hbWljQ2h1bmtzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzLGZpbGVzKTt9Z2V0UHJlTmV4dFNjcmlwdHMoKXtyZXR1cm4gZ2V0UHJlTmV4dFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMpO31nZXRTY3JpcHRzKGZpbGVzKXtyZXR1cm4gZ2V0U2NyaXB0cyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyxmaWxlcyk7fWdldFBvbHlmaWxsU2NyaXB0cygpe3JldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMpO31oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKXtjb25zdHtzY3JpcHRMb2FkZXJ9PXRoaXMuY29udGV4dDtjb25zdCBzY3JpcHRMb2FkZXJJdGVtcz1bXTtjb25zdCBmaWx0ZXJlZENoaWxkcmVuPVtdO19yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sY2hpbGQ9PntpZihjaGlsZC50eXBlPT09X3NjcmlwdC5kZWZhdWx0KXtpZihjaGlsZC5wcm9wcy5zdHJhdGVneT09PSdiZWZvcmVJbnRlcmFjdGl2ZScpe3NjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZT0oc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlfHxbXSkuY29uY2F0KFt7Li4uY2hpbGQucHJvcHN9XSk7cmV0dXJuO31lbHNlIGlmKFsnbGF6eU9ubG9hZCcsJ2FmdGVySW50ZXJhY3RpdmUnXS5pbmNsdWRlcyhjaGlsZC5wcm9wcy5zdHJhdGVneSkpe3NjcmlwdExvYWRlckl0ZW1zLnB1c2goY2hpbGQucHJvcHMpO3JldHVybjt9fWZpbHRlcmVkQ2hpbGRyZW4ucHVzaChjaGlsZCk7fSk7dGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18uc2NyaXB0TG9hZGVyPXNjcmlwdExvYWRlckl0ZW1zO3JldHVybiBmaWx0ZXJlZENoaWxkcmVuO31tYWtlU3R5bGVzaGVldEluZXJ0KG5vZGUpe3JldHVybiBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAobm9kZSxjPT57aWYoYy50eXBlPT09J2xpbmsnJiZjLnByb3BzWydocmVmJ10mJl9jb25zdGFudHMuT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHt1cmx9KT0+Yy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSkpe2NvbnN0IG5ld1Byb3BzPXsuLi4oYy5wcm9wc3x8e30pfTtuZXdQcm9wc1snZGF0YS1ocmVmJ109bmV3UHJvcHNbJ2hyZWYnXTtuZXdQcm9wc1snaHJlZiddPXVuZGVmaW5lZDtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMsbmV3UHJvcHMpO31lbHNlIGlmKGMucHJvcHMmJmMucHJvcHNbJ2NoaWxkcmVuJ10pe2MucHJvcHNbJ2NoaWxkcmVuJ109dGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pO31yZXR1cm4gYzt9KTt9cmVuZGVyKCl7dmFyIF90aGlzJHByb3BzJG5vbmNlLF90aGlzJHByb3BzJG5vbmNlMjtjb25zdHtzdHlsZXMsYW1wUGF0aCxpbkFtcE1vZGUsaHlicmlkQW1wLGNhbm9uaWNhbEJhc2UsX19ORVhUX0RBVEFfXyxkYW5nZXJvdXNBc1BhdGgsaGVhZFRhZ3MsdW5zdGFibGVfcnVudGltZUpTLHVuc3RhYmxlX0pzUHJlbG9hZCxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309dGhpcy5jb250ZXh0O2NvbnN0IGRpc2FibGVSdW50aW1lSlM9dW5zdGFibGVfcnVudGltZUpTPT09ZmFsc2U7Y29uc3QgZGlzYWJsZUpzUHJlbG9hZD11bnN0YWJsZV9Kc1ByZWxvYWQ9PT1mYWxzZXx8IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nO3RoaXMuY29udGV4dC5kb2NDb21wb25lbnRzUmVuZGVyZWQuSGVhZD10cnVlO2xldHtoZWFkfT10aGlzLmNvbnRleHQ7bGV0IGNzc1ByZWxvYWRzPVtdO2xldCBvdGhlckhlYWRFbGVtZW50cz1bXTtpZihoZWFkKXtoZWFkLmZvckVhY2goYz0+e2lmKGMmJmMudHlwZT09PSdsaW5rJyYmYy5wcm9wc1sncmVsJ109PT0ncHJlbG9hZCcmJmMucHJvcHNbJ2FzJ109PT0nc3R5bGUnKXtjc3NQcmVsb2Fkcy5wdXNoKGMpO31lbHNle2MmJm90aGVySGVhZEVsZW1lbnRzLnB1c2goYyk7fX0pO2hlYWQ9Y3NzUHJlbG9hZHMuY29uY2F0KG90aGVySGVhZEVsZW1lbnRzKTt9bGV0IGNoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikuZmlsdGVyKEJvb2xlYW4pOy8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjaGlsZHJlbj1fcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sY2hpbGQ9Pnt2YXIgX2NoaWxkJHByb3BzO2NvbnN0IGlzUmVhY3RIZWxtZXQ9Y2hpbGQ9PW51bGw/dm9pZCAwOihfY2hpbGQkcHJvcHM9Y2hpbGQucHJvcHMpPT1udWxsP3ZvaWQgMDpfY2hpbGQkcHJvcHNbJ2RhdGEtcmVhY3QtaGVsbWV0J107aWYoIWlzUmVhY3RIZWxtZXQpe3ZhciBfY2hpbGQkcHJvcHMyO2lmKChjaGlsZD09bnVsbD92b2lkIDA6Y2hpbGQudHlwZSk9PT0ndGl0bGUnKXtjb25zb2xlLndhcm4oXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXRpdGxlXCIpO31lbHNlIGlmKChjaGlsZD09bnVsbD92b2lkIDA6Y2hpbGQudHlwZSk9PT0nbWV0YScmJihjaGlsZD09bnVsbD92b2lkIDA6KF9jaGlsZCRwcm9wczI9Y2hpbGQucHJvcHMpPT1udWxsP3ZvaWQgMDpfY2hpbGQkcHJvcHMyLm5hbWUpPT09J3ZpZXdwb3J0Jyl7Y29uc29sZS53YXJuKFwiV2FybmluZzogdmlld3BvcnQgbWV0YSB0YWdzIHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXZpZXdwb3J0LW1ldGFcIik7fX1yZXR1cm4gY2hpbGQ7fSk7aWYodGhpcy5wcm9wcy5jcm9zc09yaWdpbiljb25zb2xlLndhcm4oJ1dhcm5pbmc6IGBIZWFkYCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdkZXZlbG9wbWVudCcmJnByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyYmIWluQW1wTW9kZSl7Y2hpbGRyZW49dGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNoaWxkcmVuKTt9Y2hpbGRyZW49dGhpcy5oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKTtsZXQgaGFzQW1waHRtbFJlbD1mYWxzZTtsZXQgaGFzQ2Fub25pY2FsUmVsPWZhbHNlOy8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbmhlYWQ9X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGhlYWR8fFtdLGNoaWxkPT57aWYoIWNoaWxkKXJldHVybiBjaGlsZDtjb25zdHt0eXBlLHByb3BzfT1jaGlsZDtpZihpbkFtcE1vZGUpe2xldCBiYWRQcm9wPScnO2lmKHR5cGU9PT0nbWV0YScmJnByb3BzLm5hbWU9PT0ndmlld3BvcnQnKXtiYWRQcm9wPSduYW1lPVwidmlld3BvcnRcIic7fWVsc2UgaWYodHlwZT09PSdsaW5rJyYmcHJvcHMucmVsPT09J2Nhbm9uaWNhbCcpe2hhc0Nhbm9uaWNhbFJlbD10cnVlO31lbHNlIGlmKHR5cGU9PT0nc2NyaXB0Jyl7Ly8gb25seSBibG9jayBpZlxuLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4vLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuaWYocHJvcHMuc3JjJiZwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpPC0xfHxwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCYmKCFwcm9wcy50eXBlfHxwcm9wcy50eXBlPT09J3RleHQvamF2YXNjcmlwdCcpKXtiYWRQcm9wPSc8c2NyaXB0JztPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChwcm9wPT57YmFkUHJvcCs9YCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImA7fSk7YmFkUHJvcCs9Jy8+Jzt9fWlmKGJhZFByb3Ape2NvbnNvbGUud2FybihgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NvbmZsaWN0aW5nLWFtcC10YWdgKTtyZXR1cm4gbnVsbDt9fWVsc2V7Ly8gbm9uLWFtcCBtb2RlXG5pZih0eXBlPT09J2xpbmsnJiZwcm9wcy5yZWw9PT0nYW1waHRtbCcpe2hhc0FtcGh0bWxSZWw9dHJ1ZTt9fXJldHVybiBjaGlsZDt9KTsvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbmNvbnN0IGN1clN0eWxlcz1BcnJheS5pc0FycmF5KHN0eWxlcyk/c3R5bGVzOltdO2lmKGluQW1wTW9kZSYmc3R5bGVzJiYvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbnN0eWxlcy5wcm9wcyYmLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5BcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbikpe2NvbnN0IGhhc1N0eWxlcz1lbD0+e3ZhciBfZWwkcHJvcHMsX2VsJHByb3BzJGRhbmdlcm91c2x5O3JldHVybiBlbD09bnVsbD92b2lkIDA6KF9lbCRwcm9wcz1lbC5wcm9wcyk9PW51bGw/dm9pZCAwOihfZWwkcHJvcHMkZGFuZ2Vyb3VzbHk9X2VsJHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKT09bnVsbD92b2lkIDA6X2VsJHByb3BzJGRhbmdlcm91c2x5Ll9faHRtbDt9Oy8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQ9PntpZihBcnJheS5pc0FycmF5KGNoaWxkKSl7Y2hpbGQuZm9yRWFjaChlbD0+aGFzU3R5bGVzKGVsKSYmY3VyU3R5bGVzLnB1c2goZWwpKTt9ZWxzZSBpZihoYXNTdHlsZXMoY2hpbGQpKXtjdXJTdHlsZXMucHVzaChjaGlsZCk7fX0pO31jb25zdCBmaWxlcz1nZXREb2N1bWVudEZpbGVzKHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsaW5BbXBNb2RlKTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImhlYWRcIix0aGlzLnByb3BzLHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50JiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6dHJ1ZSxcImRhdGEtYW1wZGV2bW9kZVwiOmluQW1wTW9kZT8ndHJ1ZSc6dW5kZWZpbmVkLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7ZGlzcGxheTpub25lfWB9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjp0cnVlLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlPyd0cnVlJzp1bmRlZmluZWR9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXtkaXNwbGF5OmJsb2NrfWB9fSkpKSxjaGlsZHJlbixwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwibmV4dC1mb250LXByZWNvbm5lY3RcIn0pLGhlYWQsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJuZXh0LWhlYWQtY291bnRcIixjb250ZW50Ol9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGhlYWR8fFtdKS50b1N0cmluZygpfSksaW5BbXBNb2RlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwidmlld3BvcnRcIixjb250ZW50Olwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIn0pLCFoYXNDYW5vbmljYWxSZWwmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJjYW5vbmljYWxcIixocmVmOmNhbm9uaWNhbEJhc2UrKDAsX3V0aWxzMi5jbGVhbkFtcFBhdGgpKGRhbmdlcm91c0FzUGF0aCl9KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGFzOlwic2NyaXB0XCIsaHJlZjpcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJ9KSxzdHlsZXMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtY3VzdG9tXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmN1clN0eWxlcy5tYXAoc3R5bGU9PnN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCkuam9pbignJykucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csJycpLnJlcGxhY2UoL1xcL1xcKkAgc291cmNlVVJMPS4qP1xcKlxcLy9nLCcnKX19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YH19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YH19KSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7YXN5bmM6dHJ1ZSxzcmM6XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wifSkpLCFpbkFtcE1vZGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsIWhhc0FtcGh0bWxSZWwmJmh5YnJpZEFtcCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcImFtcGh0bWxcIixocmVmOmNhbm9uaWNhbEJhc2UrZ2V0QW1wUGF0aChhbXBQYXRoLGRhbmdlcm91c0FzUGF0aCl9KSwhcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyYmdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyksIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7XCJkYXRhLW4tY3NzXCI6KF90aGlzJHByb3BzJG5vbmNlPXRoaXMucHJvcHMubm9uY2UpIT1udWxsP190aGlzJHByb3BzJG5vbmNlOicnfSkscHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0lNQUdFUyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJuZXh0LWltYWdlLXByZWxvYWRcIn0pLCFkaXNhYmxlUnVudGltZUpTJiYhZGlzYWJsZUpzUHJlbG9hZCYmdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpLCFkaXNhYmxlUnVudGltZUpTJiYhZGlzYWJsZUpzUHJlbG9hZCYmdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKSwhZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKSwhZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpLCFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0U2NyaXB0cyhmaWxlcykscHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyYmdGhpcy5nZXRDc3NMaW5rcyhmaWxlcykscHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtcImRhdGEtbi1jc3NcIjooX3RoaXMkcHJvcHMkbm9uY2UyPXRoaXMucHJvcHMubm9uY2UpIT1udWxsP190aGlzJHByb3BzJG5vbmNlMjonJ30pLHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50JiYvKiNfX1BVUkVfXyovIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbi8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7aWQ6XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIn0pLHN0eWxlc3x8bnVsbCksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQse30sLi4uKGhlYWRUYWdzfHxbXSkpKTt9fWV4cG9ydHMuSGVhZD1IZWFkO0hlYWQuY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7SGVhZC5wcm9wVHlwZXM9e25vbmNlOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsY3Jvc3NPcmlnaW46X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ307ZnVuY3Rpb24gTWFpbigpe2NvbnN0e2luQW1wTW9kZSxodG1sLGRvY0NvbXBvbmVudHNSZW5kZXJlZH09KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0KTtkb2NDb21wb25lbnRzUmVuZGVyZWQuTWFpbj10cnVlO2lmKGluQW1wTW9kZSlyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLF9jb25zdGFudHMuQU1QX1JFTkRFUl9UQVJHRVQpO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2lkOlwiX19uZXh0XCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpodG1sfX0pO31jbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31nZXREeW5hbWljQ2h1bmtzKGZpbGVzKXtyZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyxmaWxlcyk7fWdldFByZU5leHRTY3JpcHRzKCl7cmV0dXJuIGdldFByZU5leHRTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzKTt9Z2V0U2NyaXB0cyhmaWxlcyl7cmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMsZmlsZXMpO31nZXRQb2x5ZmlsbFNjcmlwdHMoKXtyZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzKTt9c3RhdGljIGdldElubGluZVNjcmlwdFNvdXJjZShkb2N1bWVudFByb3BzKXtjb25zdHtfX05FWFRfREFUQV9ffT1kb2N1bWVudFByb3BzO3RyeXtjb25zdCBkYXRhPUpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pO3JldHVybigwLF9odG1sZXNjYXBlLmh0bWxFc2NhcGVKc29uU3RyaW5nKShkYXRhKTt9Y2F0Y2goZXJyKXtpZihlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSl7dGhyb3cgbmV3IEVycm9yKGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jaXJjdWxhci1zdHJ1Y3R1cmVgKTt9dGhyb3cgZXJyO319cmVuZGVyKCl7Y29uc3R7YXNzZXRQcmVmaXgsaW5BbXBNb2RlLGJ1aWxkTWFuaWZlc3QsdW5zdGFibGVfcnVudGltZUpTLGRvY0NvbXBvbmVudHNSZW5kZXJlZCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309dGhpcy5jb250ZXh0O2NvbnN0IGRpc2FibGVSdW50aW1lSlM9dW5zdGFibGVfcnVudGltZUpTPT09ZmFsc2U7ZG9jQ29tcG9uZW50c1JlbmRlcmVkLk5leHRTY3JpcHQ9dHJ1ZTtpZihpbkFtcE1vZGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nKXtyZXR1cm4gbnVsbDt9Y29uc3QgYW1wRGV2RmlsZXM9Wy4uLmJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMsLi4uYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXNdO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsZGlzYWJsZVJ1bnRpbWVKUz9udWxsOi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2lkOlwiX19ORVhUX0RBVEFfX1wiLHR5cGU6XCJhcHBsaWNhdGlvbi9qc29uXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KX0sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSksYW1wRGV2RmlsZXMubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSkpKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTt9Y29uc3QgZmlsZXM9Z2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCx0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLGluQW1wTW9kZSk7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwhZGlzYWJsZVJ1bnRpbWVKUyYmYnVpbGRNYW5pZmVzdC5kZXZGaWxlcz9idWlsZE1hbmlmZXN0LmRldkZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSk6bnVsbCxkaXNhYmxlUnVudGltZUpTP251bGw6LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7aWQ6XCJfX05FWFRfREFUQV9fXCIsdHlwZTpcImFwcGxpY2F0aW9uL2pzb25cIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpfX0pLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKSxkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKSxkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyksZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFNjcmlwdHMoZmlsZXMpKTt9fWV4cG9ydHMuTmV4dFNjcmlwdD1OZXh0U2NyaXB0O05leHRTY3JpcHQuY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7TmV4dFNjcmlwdC5wcm9wVHlwZXM9e25vbmNlOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsY3Jvc3NPcmlnaW46X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ307TmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeD0nIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnO2Z1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aCxhc1BhdGgpe3JldHVybiBhbXBQYXRofHxgJHthc1BhdGh9JHthc1BhdGguaW5jbHVkZXMoJz8nKT8nJic6Jz8nfWFtcD0xYDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZG9jdW1lbnQuanMubWFwIiwiaW1wb3J0IERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xyXG5cclxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgICByZXR1cm4geyAuLi5pbml0aWFsUHJvcHMgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4zL2Nzcy9hbGwubWluLmNzc1wiXHJcbiAgICAgICAgICAgIGludGVncml0eT1cInNoYTUxMi1pQkJYbThmVzkwK251TGNTS2xibXJQY0xhME9UOTJ4TzFCSXNaK3l3RFdaQ3Zxc1dnY2NWM2dGb1JCdjB6KzhkTEpneUFISWhSMzVWWmMyb00vZ0kxdz09XCJcclxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvSHRtbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeURvY3VtZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmh0bWxFc2NhcGVKc29uU3RyaW5nPWh0bWxFc2NhcGVKc29uU3RyaW5nOy8vIFRoaXMgdXRpbGl0eSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlXG4vLyBMaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlL2Jsb2IvMDUyN2NhNzE1NmE1MjRkMjU2MTAxYmIzMTBhOWY5NzBmNjMwNzhhZC9MSUNFTlNFXG5jb25zdCBFU0NBUEVfTE9PS1VQPXsnJic6J1xcXFx1MDAyNicsJz4nOidcXFxcdTAwM2UnLCc8JzonXFxcXHUwMDNjJywnXFx1MjAyOCc6J1xcXFx1MjAyOCcsJ1xcdTIwMjknOidcXFxcdTIwMjknfTtjb25zdCBFU0NBUEVfUkVHRVg9L1smPjxcXHUyMDI4XFx1MjAyOV0vZztmdW5jdGlvbiBodG1sRXNjYXBlSnNvblN0cmluZyhzdHIpe3JldHVybiBzdHIucmVwbGFjZShFU0NBUEVfUkVHRVgsbWF0Y2g9PkVTQ0FQRV9MT09LVVBbbWF0Y2hdKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sZXNjYXBlLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19kb2N1bWVudCcpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==