module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigResolverMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EngineMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SUPPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _objectSpread2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _defineProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return touchIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return toHandlerProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return dragAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pinchAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return hoverAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return moveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return parseProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return registerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return scrollAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return toDomEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return wheelAction; });
/* harmony import */ var _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

const EVENT_TYPE_MAP = {
  pointer: {
    start: 'down',
    change: 'move',
    end: 'up'
  },
  mouse: {
    start: 'down',
    change: 'move',
    end: 'up'
  },
  touch: {
    start: 'start',
    change: 'move',
    end: 'end'
  },
  gesture: {
    start: 'start',
    change: 'change',
    end: 'end'
  }
};

function capitalize(string) {
  if (!string) return '';
  return string[0].toUpperCase() + string.slice(1);
}

function toHandlerProp(device, action = '', capture = false) {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return 'on' + capitalize(device) + capitalize(actionKey) + (capture ? 'Capture' : '');
}
const pointerCaptureEvents = ['gotpointercapture', 'lostpointercapture'];
function parseProp(prop) {
  let eventKey = prop.substring(2).toLowerCase();
  const passive = !!~eventKey.indexOf('passive');
  if (passive) eventKey = eventKey.replace('passive', '');
  const captureKey = pointerCaptureEvents.includes(eventKey) ? 'capturecapture' : 'capture';
  const capture = !!~eventKey.indexOf(captureKey);
  if (capture) eventKey = eventKey.replace('capture', '');
  return {
    device: eventKey,
    capture,
    passive
  };
}
function toDomEventType(device, action = '') {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return device + actionKey;
}
function isTouch(event) {
  return 'touches' in event;
}
function getPointerType(event) {
  if (isTouch(event)) return 'touch';
  if ('pointerType' in event) return event.pointerType;
  return 'mouse';
}

function getCurrentTargetTouchList(event) {
  return Array.from(event.touches).filter(e => {
    var _event$currentTarget, _event$currentTarget$;

    return e.target === event.currentTarget || ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 ? void 0 : (_event$currentTarget$ = _event$currentTarget.contains) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, e.target));
  });
}

function getTouchList(event) {
  return event.type === 'touchend' || event.type === 'touchcancel' ? event.changedTouches : event.targetTouches;
}

function getValueEvent(event) {
  return isTouch(event) ? getTouchList(event)[0] : event;
}

function distanceAngle(P1, P2) {
  const dx = P2.clientX - P1.clientX;
  const dy = P2.clientY - P1.clientY;
  const cx = (P2.clientX + P1.clientX) / 2;
  const cy = (P2.clientY + P1.clientY) / 2;
  const distance = Math.hypot(dx, dy);
  const angle = -(Math.atan2(dx, dy) * 180) / Math.PI;
  const origin = [cx, cy];
  return {
    angle,
    distance,
    origin
  };
}
function touchIds(event) {
  return getCurrentTargetTouchList(event).map(touch => touch.identifier);
}
function touchDistanceAngle(event, ids) {
  const [P1, P2] = Array.from(event.touches).filter(touch => ids.includes(touch.identifier));
  return distanceAngle(P1, P2);
}
function pointerId(event) {
  const valueEvent = getValueEvent(event);
  return isTouch(event) ? valueEvent.identifier : valueEvent.pointerId;
}
function pointerValues(event) {
  const valueEvent = getValueEvent(event);
  return [valueEvent.clientX, valueEvent.clientY];
}
const LINE_HEIGHT = 40;
const PAGE_HEIGHT = 800;
function wheelValues(event) {
  let {
    deltaX,
    deltaY,
    deltaMode
  } = event;

  if (deltaMode === 1) {
    deltaX *= LINE_HEIGHT;
    deltaY *= LINE_HEIGHT;
  } else if (deltaMode === 2) {
    deltaX *= PAGE_HEIGHT;
    deltaY *= PAGE_HEIGHT;
  }

  return [deltaX, deltaY];
}
function scrollValues(event) {
  var _ref, _ref2;

  const {
    scrollX,
    scrollY,
    scrollLeft,
    scrollTop
  } = event.currentTarget;
  return [(_ref = scrollX !== null && scrollX !== void 0 ? scrollX : scrollLeft) !== null && _ref !== void 0 ? _ref : 0, (_ref2 = scrollY !== null && scrollY !== void 0 ? scrollY : scrollTop) !== null && _ref2 !== void 0 ? _ref2 : 0];
}
function getEventDetails(event) {
  const payload = {};
  if ('buttons' in event) payload.buttons = event.buttons;

  if ('shiftKey' in event) {
    const {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    } = event;
    Object.assign(payload, {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    });
  }

  return payload;
}

function call(v, ...args) {
  if (typeof v === 'function') {
    return v(...args);
  } else {
    return v;
  }
}
function noop() {}
function chain(...fns) {
  if (fns.length === 0) return noop;
  if (fns.length === 1) return fns[0];
  return function () {
    let result;

    for (const fn of fns) {
      result = fn.apply(this, arguments) || result;
    }

    return result;
  };
}
function assignDefault(value, fallback) {
  return Object.assign({}, fallback, value || {});
}

const BEFORE_LAST_KINEMATICS_DELAY = 32;
class Engine {
  constructor(ctrl, args, key) {
    this.ctrl = ctrl;
    this.args = args;
    this.key = key;

    if (!this.state) {
      this.state = {};
      this.computeValues([0, 0]);
      this.computeInitial();
      if (this.init) this.init();
      this.reset();
    }
  }

  get state() {
    return this.ctrl.state[this.key];
  }

  set state(state) {
    this.ctrl.state[this.key] = state;
  }

  get shared() {
    return this.ctrl.state.shared;
  }

  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }

  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }

  get config() {
    return this.ctrl.config[this.key];
  }

  get sharedConfig() {
    return this.ctrl.config.shared;
  }

  get handler() {
    return this.ctrl.handlers[this.key];
  }

  reset() {
    const {
      state,
      shared,
      ingKey,
      args
    } = this;
    shared[ingKey] = state._active = state.active = state._blocked = state._force = false;
    state._step = [false, false];
    state.intentional = false;
    state._movement = [0, 0];
    state._distance = [0, 0];
    state._direction = [0, 0];
    state._delta = [0, 0];
    state._bounds = [[-Infinity, Infinity], [-Infinity, Infinity]];
    state.args = args;
    state.axis = undefined;
    state.memo = undefined;
    state.elapsedTime = 0;
    state.direction = [0, 0];
    state.distance = [0, 0];
    state.overflow = [0, 0];
    state._movementBound = [false, false];
    state.velocity = [0, 0];
    state.movement = [0, 0];
    state.delta = [0, 0];
    state.timeStamp = 0;
  }

  start(event) {
    const state = this.state;
    const config = this.config;

    if (!state._active) {
      this.reset();
      this.computeInitial();
      state._active = true;
      state.target = event.target;
      state.currentTarget = event.currentTarget;
      state.lastOffset = config.from ? call(config.from, state) : state.offset;
      state.offset = state.lastOffset;
    }

    state.startTime = state.timeStamp = event.timeStamp;
  }

  computeValues(values) {
    const state = this.state;
    state._values = values;
    state.values = this.config.transform(values);
  }

  computeInitial() {
    const state = this.state;
    state._initial = state._values;
    state.initial = state.values;
  }

  compute(event) {
    const {
      state,
      config,
      shared
    } = this;
    state.args = this.args;
    let dt = 0;

    if (event) {
      state.event = event;
      if (config.preventDefault && event.cancelable) state.event.preventDefault();
      state.type = event.type;
      shared.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size;
      shared.locked = !!document.pointerLockElement;
      Object.assign(shared, getEventDetails(event));
      shared.down = shared.pressed = shared.buttons % 2 === 1 || shared.touches > 0;
      dt = event.timeStamp - state.timeStamp;
      state.timeStamp = event.timeStamp;
      state.elapsedTime = state.timeStamp - state.startTime;
    }

    if (state._active) {
      const _absoluteDelta = state._delta.map(Math.abs);

      _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].addTo(state._distance, _absoluteDelta);
    }

    if (this.axisIntent) this.axisIntent(event);
    const [_m0, _m1] = state._movement;
    const [t0, t1] = config.threshold;
    const {
      _step,
      values
    } = state;

    if (config.hasCustomTransform) {
      if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && values[0];
      if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && values[1];
    } else {
      if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && Math.sign(_m0) * t0;
      if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && Math.sign(_m1) * t1;
    }

    state.intentional = _step[0] !== false || _step[1] !== false;
    if (!state.intentional) return;
    const movement = [0, 0];

    if (config.hasCustomTransform) {
      const [v0, v1] = values;
      movement[0] = _step[0] !== false ? v0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? v1 - _step[1] : 0;
    } else {
      movement[0] = _step[0] !== false ? _m0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? _m1 - _step[1] : 0;
    }

    if (this.restrictToAxis && !state._blocked) this.restrictToAxis(movement);
    const previousOffset = state.offset;
    const gestureIsActive = state._active && !state._blocked || state.active;

    if (gestureIsActive) {
      state.first = state._active && !state.active;
      state.last = !state._active && state.active;
      state.active = shared[this.ingKey] = state._active;

      if (event) {
        if (state.first) {
          if ('bounds' in config) state._bounds = call(config.bounds, state);
          if (this.setup) this.setup();
        }

        state.movement = movement;
        this.computeOffset();
      }
    }

    const [ox, oy] = state.offset;
    const [[x0, x1], [y0, y1]] = state._bounds;
    state.overflow = [ox < x0 ? -1 : ox > x1 ? 1 : 0, oy < y0 ? -1 : oy > y1 ? 1 : 0];
    state._movementBound[0] = state.overflow[0] ? state._movementBound[0] === false ? state._movement[0] : state._movementBound[0] : false;
    state._movementBound[1] = state.overflow[1] ? state._movementBound[1] === false ? state._movement[1] : state._movementBound[1] : false;
    const rubberband = state._active ? config.rubberband || [0, 0] : [0, 0];
    state.offset = Object(_maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "b"])(state._bounds, state.offset, rubberband);
    state.delta = _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].sub(state.offset, previousOffset);
    this.computeMovement();

    if (gestureIsActive && (!state.last || dt > BEFORE_LAST_KINEMATICS_DELAY)) {
      state.delta = _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].sub(state.offset, previousOffset);
      const absoluteDelta = state.delta.map(Math.abs);
      _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].addTo(state.distance, absoluteDelta);
      state.direction = state.delta.map(Math.sign);
      state._direction = state._delta.map(Math.sign);

      if (!state.first && dt > 0) {
        state.velocity = [absoluteDelta[0] / dt, absoluteDelta[1] / dt];
      }
    }
  }

  emit() {
    const state = this.state;
    const shared = this.shared;
    const config = this.config;
    if (!state._active) this.clean();
    if ((state._blocked || !state.intentional) && !state._force && !config.triggerAllEvents) return;
    const memo = this.handler(_objectSpread2(_objectSpread2(_objectSpread2({}, shared), state), {}, {
      [this.aliasKey]: state.values
    }));
    if (memo !== undefined) state.memo = memo;
  }

  clean() {
    this.eventStore.clean();
    this.timeoutStore.clean();
  }

}

function selectAxis([dx, dy], threshold) {
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);

  if (absDx > absDy && absDx > threshold) {
    return 'x';
  }

  if (absDy > absDx && absDy > threshold) {
    return 'y';
  }

  return undefined;
}

class CoordinatesEngine extends Engine {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "aliasKey", 'xy');
  }

  reset() {
    super.reset();
    this.state.axis = undefined;
  }

  init() {
    this.state.offset = [0, 0];
    this.state.lastOffset = [0, 0];
  }

  computeOffset() {
    this.state.offset = _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].add(this.state.lastOffset, this.state.movement);
  }

  computeMovement() {
    this.state.movement = _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].sub(this.state.offset, this.state.lastOffset);
  }

  axisIntent(event) {
    const state = this.state;
    const config = this.config;

    if (!state.axis && event) {
      const threshold = typeof config.axisThreshold === 'object' ? config.axisThreshold[getPointerType(event)] : config.axisThreshold;
      state.axis = selectAxis(state._movement, threshold);
    }

    state._blocked = (config.lockDirection || !!config.axis) && !state.axis || !!config.axis && config.axis !== state.axis;
  }

  restrictToAxis(v) {
    if (this.config.axis || this.config.lockDirection) {
      switch (this.state.axis) {
        case 'x':
          v[1] = 0;
          break;

        case 'y':
          v[0] = 0;
          break;
      }
    }
  }

}

const identity = v => v;
const DEFAULT_RUBBERBAND = 0.15;
const commonConfigResolver = {
  enabled(value = true) {
    return value;
  },

  preventDefault(value = false) {
    return value;
  },

  triggerAllEvents(value = false) {
    return value;
  },

  rubberband(value = 0) {
    switch (value) {
      case true:
        return [DEFAULT_RUBBERBAND, DEFAULT_RUBBERBAND];

      case false:
        return [0, 0];

      default:
        return _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].toVector(value);
    }
  },

  from(value) {
    if (typeof value === 'function') return value;
    if (value != null) return _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].toVector(value);
  },

  transform(value, _k, config) {
    const transform = value || config.shared.transform;
    this.hasCustomTransform = !!transform;

    if (false) {}

    return transform || identity;
  },

  threshold(value) {
    return _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].toVector(value, 0);
  }

};

if (false) {}

const DEFAULT_AXIS_THRESHOLD = 0;
const coordinatesConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  axis(_v, _k, {
    axis
  }) {
    this.lockDirection = axis === 'lock';
    if (!this.lockDirection) return axis;
  },

  axisThreshold(value = DEFAULT_AXIS_THRESHOLD) {
    return value;
  },

  bounds(value = {}) {
    if (typeof value === 'function') {
      return state => coordinatesConfigResolver.bounds(value(state));
    }

    if ('current' in value) {
      return () => value.current;
    }

    if (typeof HTMLElement === 'function' && value instanceof HTMLElement) {
      return value;
    }

    const {
      left = -Infinity,
      right = Infinity,
      top = -Infinity,
      bottom = Infinity
    } = value;
    return [[left, right], [top, bottom]];
  }

});

const DISPLACEMENT = 10;
const KEYS_DELTA_MAP = {
  ArrowRight: (factor = 1) => [DISPLACEMENT * factor, 0],
  ArrowLeft: (factor = 1) => [-DISPLACEMENT * factor, 0],
  ArrowUp: (factor = 1) => [0, -DISPLACEMENT * factor],
  ArrowDown: (factor = 1) => [0, DISPLACEMENT * factor]
};
class DragEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ingKey", 'dragging');
  }

  reset() {
    super.reset();
    const state = this.state;
    state._pointerId = undefined;
    state._pointerActive = false;
    state._keyboardActive = false;
    state._preventScroll = false;
    state._delayed = false;
    state.swipe = [0, 0];
    state.tap = false;
    state.canceled = false;
    state.cancel = this.cancel.bind(this);
  }

  setup() {
    const state = this.state;

    if (state._bounds instanceof HTMLElement) {
      const boundRect = state._bounds.getBoundingClientRect();

      const targetRect = state.currentTarget.getBoundingClientRect();
      const _bounds = {
        left: boundRect.left - targetRect.left + state.offset[0],
        right: boundRect.right - targetRect.right + state.offset[0],
        top: boundRect.top - targetRect.top + state.offset[1],
        bottom: boundRect.bottom - targetRect.bottom + state.offset[1]
      };
      state._bounds = coordinatesConfigResolver.bounds(_bounds);
    }
  }

  cancel() {
    const state = this.state;
    if (state.canceled) return;
    state.canceled = true;
    state._active = false;
    setTimeout(() => {
      this.compute();
      this.emit();
    }, 0);
  }

  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }

  clean() {
    this.pointerClean();
    this.state._pointerActive = false;
    this.state._keyboardActive = false;
    super.clean();
  }

  pointerDown(event) {
    const config = this.config;
    const state = this.state;
    if (event.buttons != null && (Array.isArray(config.pointerButtons) ? !config.pointerButtons.includes(event.buttons) : config.pointerButtons !== -1 && config.pointerButtons !== event.buttons)) return;
    this.ctrl.setEventIds(event);

    if (config.pointerCapture) {
      event.target.setPointerCapture(event.pointerId);
    }

    if (state._pointerActive) return;
    this.start(event);
    this.setupPointer(event);
    state._pointerId = pointerId(event);
    state._pointerActive = true;
    this.computeValues(pointerValues(event));
    this.computeInitial();

    if (config.preventScrollAxis && getPointerType(event) !== 'mouse') {
      state._active = false;
      this.setupScrollPrevention(event);
    } else if (config.delay > 0) {
      this.setupDelayTrigger(event);

      if (config.triggerAllEvents) {
        this.compute(event);
        this.emit();
      }
    } else {
      this.startPointerDrag(event);
    }
  }

  startPointerDrag(event) {
    const state = this.state;
    state._active = true;
    state._preventScroll = true;
    state._delayed = false;
    this.compute(event);
    this.emit();
  }

  pointerMove(event) {
    const state = this.state;
    const config = this.config;
    if (!state._pointerActive) return;
    if (state.type === event.type && event.timeStamp === state.timeStamp) return;
    const id = pointerId(event);
    if (state._pointerId !== undefined && id !== state._pointerId) return;

    const _values = pointerValues(event);

    if (document.pointerLockElement === event.target) {
      state._delta = [event.movementX, event.movementY];
    } else {
      state._delta = _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].sub(_values, state._values);
      this.computeValues(_values);
    }

    _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].addTo(state._movement, state._delta);
    this.compute(event);

    if (state._delayed && state.intentional) {
      this.timeoutStore.remove('dragDelay');
      state.active = false;
      this.startPointerDrag(event);
      return;
    }

    if (config.preventScrollAxis && !state._preventScroll) {
      if (state.axis) {
        if (state.axis === config.preventScrollAxis || config.preventScrollAxis === 'xy') {
          state._active = false;
          this.clean();
          return;
        } else {
          this.timeoutStore.remove('startPointerDrag');
          this.startPointerDrag(event);
          return;
        }
      } else {
        return;
      }
    }

    this.emit();
  }

  pointerUp(event) {
    this.ctrl.setEventIds(event);

    try {
      if (this.config.pointerCapture && event.target.hasPointerCapture(event.pointerId)) {
        ;
        event.target.releasePointerCapture(event.pointerId);
      }
    } catch (_unused) {
      if (false) {}
    }

    const state = this.state;
    const config = this.config;
    if (!state._active || !state._pointerActive) return;
    const id = pointerId(event);
    if (state._pointerId !== undefined && id !== state._pointerId) return;
    this.state._pointerActive = false;
    this.setActive();
    this.compute(event);
    const [dx, dy] = state._distance;
    state.tap = dx <= config.tapsThreshold && dy <= config.tapsThreshold;

    if (state.tap && config.filterTaps) {
      state._force = true;
    } else {
      const [dirx, diry] = state.direction;
      const [vx, vy] = state.velocity;
      const [mx, my] = state.movement;
      const [svx, svy] = config.swipe.velocity;
      const [sx, sy] = config.swipe.distance;
      const sdt = config.swipe.duration;

      if (state.elapsedTime < sdt) {
        if (Math.abs(vx) > svx && Math.abs(mx) > sx) state.swipe[0] = dirx;
        if (Math.abs(vy) > svy && Math.abs(my) > sy) state.swipe[1] = diry;
      }
    }

    this.emit();
  }

  pointerClick(event) {
    if (!this.state.tap) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  setupPointer(event) {
    const config = this.config;
    const device = config.device;

    if (false) {}

    if (config.pointerLock) {
      event.currentTarget.requestPointerLock();
    }

    if (!config.pointerCapture) {
      this.eventStore.add(this.sharedConfig.window, device, 'change', this.pointerMove.bind(this));
      this.eventStore.add(this.sharedConfig.window, device, 'end', this.pointerUp.bind(this));
      this.eventStore.add(this.sharedConfig.window, device, 'cancel', this.pointerUp.bind(this));
    }
  }

  pointerClean() {
    if (this.config.pointerLock && document.pointerLockElement === this.state.currentTarget) {
      document.exitPointerLock();
    }
  }

  preventScroll(event) {
    if (this.state._preventScroll && event.cancelable) {
      event.preventDefault();
    }
  }

  setupScrollPrevention(event) {
    persistEvent(event);
    this.eventStore.add(this.sharedConfig.window, 'touch', 'change', this.preventScroll.bind(this), {
      passive: false
    });
    this.eventStore.add(this.sharedConfig.window, 'touch', 'end', this.clean.bind(this));
    this.eventStore.add(this.sharedConfig.window, 'touch', 'cancel', this.clean.bind(this));
    this.timeoutStore.add('startPointerDrag', this.startPointerDrag.bind(this), this.config.preventScrollDelay, event);
  }

  setupDelayTrigger(event) {
    this.state._delayed = true;
    this.timeoutStore.add('dragDelay', () => {
      this.state._step = [0, 0];
      this.startPointerDrag(event);
    }, this.config.delay);
  }

  keyDown(event) {
    const deltaFn = KEYS_DELTA_MAP[event.key];

    if (deltaFn) {
      const state = this.state;
      const factor = event.shiftKey ? 10 : event.altKey ? 0.1 : 1;
      state._delta = deltaFn(factor);
      this.start(event);
      state._keyboardActive = true;
      _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].addTo(state._movement, state._delta);
      this.compute(event);
      this.emit();
    }
  }

  keyUp(event) {
    if (!(event.key in KEYS_DELTA_MAP)) return;
    this.state._keyboardActive = false;
    this.setActive();
    this.compute(event);
    this.emit();
  }

  bind(bindFunction) {
    const device = this.config.device;
    bindFunction(device, 'start', this.pointerDown.bind(this));

    if (this.config.pointerCapture) {
      bindFunction(device, 'change', this.pointerMove.bind(this));
      bindFunction(device, 'end', this.pointerUp.bind(this));
      bindFunction(device, 'cancel', this.pointerUp.bind(this));
      bindFunction('lostPointerCapture', '', this.pointerUp.bind(this));
    }

    bindFunction('key', 'down', this.keyDown.bind(this));
    bindFunction('key', 'up', this.keyUp.bind(this));

    if (this.config.filterTaps) {
      bindFunction('click', '', this.pointerClick.bind(this), {
        capture: true,
        passive: false
      });
    }
  }

}

function persistEvent(event) {
  'persist' in event && typeof event.persist === 'function' && event.persist();
}

const isBrowser = typeof window !== 'undefined' && window.document && window.document.createElement;

function supportsTouchEvents() {
  return isBrowser && 'ontouchstart' in window;
}

function isTouchScreen() {
  return supportsTouchEvents() || isBrowser && window.navigator.maxTouchPoints > 1;
}

function supportsPointerEvents() {
  return isBrowser && 'onpointerdown' in window;
}

function supportsPointerLock() {
  return isBrowser && 'exitPointerLock' in window.document;
}

function supportsGestureEvents() {
  try {
    return 'constructor' in GestureEvent;
  } catch (e) {
    return false;
  }
}

const SUPPORT = {
  isBrowser,
  gesture: supportsGestureEvents(),
  touch: isTouchScreen(),
  touchscreen: isTouchScreen(),
  pointer: supportsPointerEvents(),
  pointerLock: supportsPointerLock()
};

const DEFAULT_PREVENT_SCROLL_DELAY = 250;
const DEFAULT_DRAG_DELAY = 180;
const DEFAULT_SWIPE_VELOCITY = 0.5;
const DEFAULT_SWIPE_DISTANCE = 50;
const DEFAULT_SWIPE_DURATION = 250;
const DEFAULT_DRAG_AXIS_THRESHOLD = {
  mouse: 0,
  touch: 0,
  pen: 8
};
const dragConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  device(_v, _k, {
    pointer: {
      touch = false,
      lock = false,
      mouse = false
    } = {}
  }) {
    this.pointerLock = lock && SUPPORT.pointerLock;
    if (SUPPORT.touch && touch) return 'touch';
    if (this.pointerLock) return 'mouse';
    if (SUPPORT.pointer && !mouse) return 'pointer';
    if (SUPPORT.touch) return 'touch';
    return 'mouse';
  },

  preventScrollAxis(value, _k, {
    preventScroll
  }) {
    this.preventScrollDelay = typeof preventScroll === 'number' ? preventScroll : preventScroll || preventScroll === undefined && value ? DEFAULT_PREVENT_SCROLL_DELAY : undefined;
    if (!SUPPORT.touchscreen || preventScroll === false) return undefined;
    return value ? value : preventScroll !== undefined ? 'y' : undefined;
  },

  pointerCapture(_v, _k, {
    pointer: {
      capture = true,
      buttons = 1
    } = {}
  }) {
    this.pointerButtons = buttons;
    return !this.pointerLock && this.device === 'pointer' && capture;
  },

  threshold(value, _k, {
    filterTaps = false,
    tapsThreshold = 3,
    axis = undefined
  }) {
    const threshold = _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].toVector(value, filterTaps ? tapsThreshold : axis ? 1 : 0);
    this.filterTaps = filterTaps;
    this.tapsThreshold = tapsThreshold;
    return threshold;
  },

  swipe({
    velocity = DEFAULT_SWIPE_VELOCITY,
    distance = DEFAULT_SWIPE_DISTANCE,
    duration = DEFAULT_SWIPE_DURATION
  } = {}) {
    return {
      velocity: this.transform(_maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].toVector(velocity)),
      distance: this.transform(_maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].toVector(distance)),
      duration
    };
  },

  delay(value = 0) {
    switch (value) {
      case true:
        return DEFAULT_DRAG_DELAY;

      case false:
        return 0;

      default:
        return value;
    }
  },

  axisThreshold(value) {
    if (!value) return DEFAULT_DRAG_AXIS_THRESHOLD;
    return _objectSpread2(_objectSpread2({}, DEFAULT_DRAG_AXIS_THRESHOLD), value);
  }

});

if (false) {}

const SCALE_ANGLE_RATIO_INTENT_DEG = 30;
const PINCH_WHEEL_RATIO = 100;
class PinchEngine extends Engine {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ingKey", 'pinching');

    _defineProperty(this, "aliasKey", 'da');
  }

  init() {
    this.state.offset = [1, 0];
    this.state.lastOffset = [1, 0];
    this.state._pointerEvents = new Map();
  }

  reset() {
    super.reset();
    const state = this.state;
    state._touchIds = [];
    state.canceled = false;
    state.cancel = this.cancel.bind(this);
    state.turns = 0;
  }

  computeOffset() {
    const {
      type,
      movement,
      lastOffset
    } = this.state;

    if (type === 'wheel') {
      this.state.offset = _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].add(movement, lastOffset);
    } else {
      this.state.offset = [(1 + movement[0]) * lastOffset[0], movement[1] + lastOffset[1]];
    }
  }

  computeMovement() {
    const {
      offset,
      lastOffset
    } = this.state;
    this.state.movement = [offset[0] / lastOffset[0], offset[1] - lastOffset[1]];
  }

  axisIntent() {
    const state = this.state;
    const [_m0, _m1] = state._movement;

    if (!state.axis) {
      const axisMovementDifference = Math.abs(_m0) * SCALE_ANGLE_RATIO_INTENT_DEG - Math.abs(_m1);
      if (axisMovementDifference < 0) state.axis = 'angle';else if (axisMovementDifference > 0) state.axis = 'scale';
    }
  }

  restrictToAxis(v) {
    if (this.config.lockDirection) {
      if (this.state.axis === 'scale') v[1] = 0;else if (this.state.axis === 'angle') v[0] = 0;
    }
  }

  cancel() {
    const state = this.state;
    if (state.canceled) return;
    setTimeout(() => {
      state.canceled = true;
      state._active = false;
      this.compute();
      this.emit();
    }, 0);
  }

  touchStart(event) {
    this.ctrl.setEventIds(event);
    const state = this.state;
    const ctrlTouchIds = this.ctrl.touchIds;

    if (state._active) {
      if (state._touchIds.every(id => ctrlTouchIds.has(id))) return;
    }

    if (ctrlTouchIds.size < 2) return;
    this.start(event);
    state._touchIds = Array.from(ctrlTouchIds).slice(0, 2);
    const payload = touchDistanceAngle(event, state._touchIds);
    this.pinchStart(event, payload);
  }

  pointerStart(event) {
    if (event.buttons != null && event.buttons % 2 !== 1) return;
    this.ctrl.setEventIds(event);
    event.target.setPointerCapture(event.pointerId);
    const state = this.state;
    const _pointerEvents = state._pointerEvents;
    const ctrlPointerIds = this.ctrl.pointerIds;

    if (state._active) {
      if (Array.from(_pointerEvents.keys()).every(id => ctrlPointerIds.has(id))) return;
    }

    if (_pointerEvents.size < 2) {
      _pointerEvents.set(event.pointerId, event);
    }

    if (state._pointerEvents.size < 2) return;
    this.start(event);
    const payload = distanceAngle(...Array.from(_pointerEvents.values()));
    this.pinchStart(event, payload);
  }

  pinchStart(event, payload) {
    const state = this.state;
    state.origin = payload.origin;
    this.computeValues([payload.distance, payload.angle]);
    this.computeInitial();
    this.compute(event);
    this.emit();
  }

  touchMove(event) {
    if (!this.state._active) return;
    const payload = touchDistanceAngle(event, this.state._touchIds);
    this.pinchMove(event, payload);
  }

  pointerMove(event) {
    const _pointerEvents = this.state._pointerEvents;

    if (_pointerEvents.has(event.pointerId)) {
      _pointerEvents.set(event.pointerId, event);
    }

    if (!this.state._active) return;
    const payload = distanceAngle(...Array.from(_pointerEvents.values()));
    this.pinchMove(event, payload);
  }

  pinchMove(event, payload) {
    const state = this.state;
    const prev_a = state._values[1];
    const delta_a = payload.angle - prev_a;
    let delta_turns = 0;
    if (Math.abs(delta_a) > 270) delta_turns += Math.sign(delta_a);
    this.computeValues([payload.distance, payload.angle - 360 * delta_turns]);
    state.origin = payload.origin;
    state.turns = delta_turns;
    state._movement = [state._values[0] / state._initial[0] - 1, state._values[1] - state._initial[1]];
    this.compute(event);
    this.emit();
  }

  touchEnd(event) {
    this.ctrl.setEventIds(event);
    if (!this.state._active) return;

    if (this.state._touchIds.some(id => !this.ctrl.touchIds.has(id))) {
      this.state._active = false;
      this.compute(event);
      this.emit();
    }
  }

  pointerEnd(event) {
    const state = this.state;
    this.ctrl.setEventIds(event);

    try {
      event.target.releasePointerCapture(event.pointerId);
    } catch (_unused) {}

    if (state._pointerEvents.has(event.pointerId)) {
      state._pointerEvents.delete(event.pointerId);
    }

    if (!state._active) return;

    if (state._pointerEvents.size < 2) {
      state._active = false;
      this.compute(event);
      this.emit();
    }
  }

  gestureStart(event) {
    if (event.cancelable) event.preventDefault();
    const state = this.state;
    if (state._active) return;
    this.start(event);
    this.computeValues([event.scale, event.rotation]);
    state.origin = [event.clientX, event.clientY];
    this.compute(event);
    this.emit();
  }

  gestureMove(event) {
    if (event.cancelable) event.preventDefault();
    if (!this.state._active) return;
    const state = this.state;
    this.computeValues([event.scale, event.rotation]);
    state.origin = [event.clientX, event.clientY];
    const _previousMovement = state._movement;
    state._movement = [event.scale - 1, event.rotation];
    state._delta = _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].sub(state._movement, _previousMovement);
    this.compute(event);
    this.emit();
  }

  gestureEnd(event) {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute(event);
    this.emit();
  }

  wheel(event) {
    const modifierKey = this.config.modifierKey;
    if (modifierKey && !event[modifierKey]) return;
    if (!this.state._active) this.wheelStart(event);else this.wheelChange(event);
    this.timeoutStore.add('wheelEnd', this.wheelEnd.bind(this));
  }

  wheelStart(event) {
    this.start(event);
    this.wheelChange(event);
  }

  wheelChange(event) {
    const isR3f = ('uv' in event);

    if (!isR3f) {
      if (event.cancelable) {
        event.preventDefault();
      }

      if (false) {}
    }

    const state = this.state;
    state._delta = [-wheelValues(event)[1] / PINCH_WHEEL_RATIO * state.offset[0], 0];
    _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].addTo(state._movement, state._delta);
    this.state.origin = [event.clientX, event.clientY];
    this.compute(event);
    this.emit();
  }

  wheelEnd() {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute();
    this.emit();
  }

  bind(bindFunction) {
    const device = this.config.device;

    if (!!device) {
      bindFunction(device, 'start', this[device + 'Start'].bind(this));
      bindFunction(device, 'change', this[device + 'Move'].bind(this));
      bindFunction(device, 'end', this[device + 'End'].bind(this));
      bindFunction(device, 'cancel', this[device + 'End'].bind(this));
    } else {
      bindFunction('wheel', '', this.wheel.bind(this), {
        passive: false
      });
    }
  }

}

const pinchConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  device(_v, _k, {
    shared,
    pointer: {
      touch = false
    } = {}
  }) {
    const sharedConfig = shared;
    if (sharedConfig.target && !SUPPORT.touch && SUPPORT.gesture) return 'gesture';
    if (SUPPORT.touch && touch) return 'touch';

    if (SUPPORT.touchscreen) {
      if (SUPPORT.pointer) return 'pointer';
      if (SUPPORT.touch) return 'touch';
    }
  },

  bounds(_v, _k, {
    scaleBounds = {},
    angleBounds = {}
  }) {
    const _scaleBounds = state => {
      const D = assignDefault(call(scaleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [D.min, D.max];
    };

    const _angleBounds = state => {
      const A = assignDefault(call(angleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [A.min, A.max];
    };

    if (typeof scaleBounds !== 'function' && typeof angleBounds !== 'function') return [_scaleBounds(), _angleBounds()];
    return state => [_scaleBounds(state), _angleBounds(state)];
  },

  threshold(value, _k, config) {
    this.lockDirection = config.axis === 'lock';
    const threshold = _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].toVector(value, this.lockDirection ? [0.1, 3] : 0);
    return threshold;
  },

  modifierKey(value) {
    if (value === undefined) return 'ctrlKey';
    return value;
  }

});

class MoveEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ingKey", 'moving');
  }

  move(event) {
    if (this.config.mouseOnly && event.pointerType !== 'mouse') return;
    if (!this.state._active) this.moveStart(event);else this.moveChange(event);
    this.timeoutStore.add('moveEnd', this.moveEnd.bind(this));
  }

  moveStart(event) {
    this.start(event);
    this.computeValues(pointerValues(event));
    this.compute(event);
    this.computeInitial();
    this.emit();
  }

  moveChange(event) {
    if (!this.state._active) return;
    const values = pointerValues(event);
    const state = this.state;
    state._delta = _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].sub(values, state._values);
    _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].addTo(state._movement, state._delta);
    this.computeValues(values);
    this.compute(event);
    this.emit();
  }

  moveEnd(event) {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute(event);
    this.emit();
  }

  bind(bindFunction) {
    bindFunction('pointer', 'change', this.move.bind(this));
    bindFunction('pointer', 'leave', this.moveEnd.bind(this));
  }

}

const moveConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});

class ScrollEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ingKey", 'scrolling');
  }

  scroll(event) {
    if (!this.state._active) this.start(event);
    this.scrollChange(event);
    this.timeoutStore.add('scrollEnd', this.scrollEnd.bind(this));
  }

  scrollChange(event) {
    if (event.cancelable) event.preventDefault();
    const state = this.state;
    const values = scrollValues(event);
    state._delta = _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].sub(values, state._values);
    _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].addTo(state._movement, state._delta);
    this.computeValues(values);
    this.compute(event);
    this.emit();
  }

  scrollEnd() {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute();
    this.emit();
  }

  bind(bindFunction) {
    bindFunction('scroll', '', this.scroll.bind(this));
  }

}

const scrollConfigResolver = coordinatesConfigResolver;

class WheelEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ingKey", 'wheeling');
  }

  wheel(event) {
    if (!this.state._active) this.start(event);
    this.wheelChange(event);
    this.timeoutStore.add('wheelEnd', this.wheelEnd.bind(this));
  }

  wheelChange(event) {
    const state = this.state;
    state._delta = wheelValues(event);
    _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].addTo(state._movement, state._delta);
    const [ox, oy] = state.overflow;
    const [dx, dy] = state._delta;
    const [dirx, diry] = state._direction;

    if (ox < 0 && dx > 0 && dirx < 0 || ox > 0 && dx < 0 && dirx > 0) {
      state._movement[0] = state._movementBound[0];
    }

    if (oy < 0 && dy > 0 && diry < 0 || oy > 0 && dy < 0 && diry > 0) {
      state._movement[1] = state._movementBound[1];
    }

    this.compute(event);
    this.emit();
  }

  wheelEnd() {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute();
    this.emit();
  }

  bind(bindFunction) {
    bindFunction('wheel', '', this.wheel.bind(this));
  }

}

const wheelConfigResolver = coordinatesConfigResolver;

class HoverEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ingKey", 'hovering');
  }

  enter(event) {
    if (this.config.mouseOnly && event.pointerType !== 'mouse') return;
    this.start(event);
    this.computeValues(pointerValues(event));
    this.compute(event);
    this.emit();
  }

  leave(event) {
    if (this.config.mouseOnly && event.pointerType !== 'mouse') return;
    const state = this.state;
    if (!state._active) return;
    state._active = false;
    const values = pointerValues(event);
    state._movement = state._delta = _maths_b2a210f4_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* V */ "a"].sub(values, state._values);
    this.computeValues(values);
    this.compute(event);
    state.delta = state.movement;
    this.emit();
  }

  bind(bindFunction) {
    bindFunction('pointer', 'enter', this.enter.bind(this));
    bindFunction('pointer', 'leave', this.leave.bind(this));
  }

}

const hoverConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});

const EngineMap = new Map();
const ConfigResolverMap = new Map();
function registerAction(action) {
  EngineMap.set(action.key, action.engine);
  ConfigResolverMap.set(action.key, action.resolver);
}
const dragAction = {
  key: 'drag',
  engine: DragEngine,
  resolver: dragConfigResolver
};
const hoverAction = {
  key: 'hover',
  engine: HoverEngine,
  resolver: hoverConfigResolver
};
const moveAction = {
  key: 'move',
  engine: MoveEngine,
  resolver: moveConfigResolver
};
const pinchAction = {
  key: 'pinch',
  engine: PinchEngine,
  resolver: pinchConfigResolver
};
const scrollAction = {
  key: 'scroll',
  engine: ScrollEngine,
  resolver: scrollConfigResolver
};
const wheelAction = {
  key: 'wheel',
  engine: WheelEngine,
  resolver: wheelConfigResolver
};




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return computeRubberband; });
/* unused harmony export r */
function clamp(v, min, max) {
  return Math.max(min, Math.min(v, max));
}
const V = {
  toVector(v, fallback) {
    if (v === undefined) v = fallback;
    return Array.isArray(v) ? v : [v, v];
  },

  add(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
  },

  sub(v1, v2) {
    return [v1[0] - v2[0], v1[1] - v2[1]];
  },

  addTo(v1, v2) {
    v1[0] += v2[0];
    v1[1] += v2[1];
  },

  subTo(v1, v2) {
    v1[0] -= v2[0];
    v1[1] -= v2[1];
  }

};

function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity) return Math.pow(distance, constant * 5);
  return distance * dimension * constant / (dimension + constant * distance);
}

function rubberbandIfOutOfBounds(position, min, max, constant = 0.15) {
  if (constant === 0) return clamp(position, min, max);
  if (position < min) return -rubberband(min - position, max - min, constant) + min;
  if (position > max) return +rubberband(position - max, max - min, constant) + max;
  return position;
}
function computeRubberband(bounds, [Vx, Vy], [Rx, Ry]) {
  const [[X0, X1], [Y0, Y1]] = bounds;
  return [rubberbandIfOutOfBounds(Vx, X0, X1, Rx), rubberbandIfOutOfBounds(Vy, Y0, Y1, Ry)];
}




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _dist_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _dist_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _dist_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _dist_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _dist_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _dist_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _dist_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _dist_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__["r"]; });





/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("papaparse");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseMergedHandlers; });
/* harmony import */ var _actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);



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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

const sharedConfigResolver = {
  target(value) {
    if (value) {
      return () => 'current' in value ? value.current : value;
    }

    return undefined;
  },

  enabled(value = true) {
    return value;
  },

  window(value = _actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* S */ "c"].isBrowser ? window : undefined) {
    return value;
  },

  eventOptions({
    passive = true,
    capture = false
  } = {}) {
    return {
      passive,
      capture
    };
  },

  transform(value) {
    return value;
  }

};

const _excluded = ["target", "eventOptions", "window", "enabled", "transform"];
function resolveWith(config = {}, resolvers) {
  const result = {};

  for (const [key, resolver] of Object.entries(resolvers)) {
    switch (typeof resolver) {
      case 'function':
        if (false) {} else {
          result[key] = resolver.call(result, config[key], key, config);
        }

        break;

      case 'object':
        result[key] = resolveWith(config[key], resolver);
        break;

      case 'boolean':
        if (resolver) result[key] = config[key];
        break;
    }
  }

  return result;
}
function parse(config, gestureKey) {
  const _ref = config,
        {
    target,
    eventOptions,
    window,
    enabled,
    transform
  } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded);

  const _config = {
    shared: resolveWith({
      target,
      eventOptions,
      window,
      enabled,
      transform
    }, sharedConfigResolver)
  };

  if (gestureKey) {
    const resolver = _actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* C */ "a"].get(gestureKey);
    _config[gestureKey] = resolveWith(Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "d"])({
      shared: _config.shared
    }, rest), resolver);
  } else {
    for (const key in rest) {
      const resolver = _actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* C */ "a"].get(key);

      if (resolver) {
        _config[key] = resolveWith(Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "d"])({
          shared: _config.shared
        }, rest[key]), resolver);
      } else if (false) {}
    }
  }

  return _config;
}

class EventStore {
  constructor(ctrl) {
    Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "e"])(this, "_listeners", []);

    this._ctrl = ctrl;
  }

  add(element, device, action, handler, options) {
    const type = Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* t */ "q"])(device, action);

    const eventOptions = Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "d"])(Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "d"])({}, this._ctrl.config.shared.eventOptions), options);

    element.addEventListener(type, handler, eventOptions);

    this._listeners.push(() => element.removeEventListener(type, handler, eventOptions));
  }

  clean() {
    this._listeners.forEach(remove => remove());

    this._listeners = [];
  }

}

class TimeoutStore {
  constructor() {
    Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "e"])(this, "_timeouts", new Map());
  }

  add(key, callback, ms = 140, ...args) {
    this.remove(key);

    this._timeouts.set(key, window.setTimeout(callback, ms, ...args));
  }

  remove(key) {
    const timeout = this._timeouts.get(key);

    if (timeout) window.clearTimeout(timeout);
  }

  clean() {
    this._timeouts.forEach(timeout => void window.clearTimeout(timeout));

    this._timeouts.clear();
  }

}

class Controller {
  constructor(handlers) {
    Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "e"])(this, "gestures", new Set());

    Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "e"])(this, "_targetEventStore", new EventStore(this));

    Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "e"])(this, "gestureEventStores", {});

    Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "e"])(this, "gestureTimeoutStores", {});

    Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "e"])(this, "handlers", {});

    Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "e"])(this, "config", {});

    Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "e"])(this, "pointerIds", new Set());

    Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "e"])(this, "touchIds", new Set());

    Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "e"])(this, "state", {
      shared: {
        shiftKey: false,
        metaKey: false,
        ctrlKey: false,
        altKey: false
      }
    });

    resolveGestures(this, handlers);
  }

  setEventIds(event) {
    if (Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* i */ "l"])(event)) {
      this.touchIds = new Set(Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* b */ "f"])(event));
    } else if ('pointerId' in event) {
      if (event.type === 'pointerup' || event.type === 'pointercancel') this.pointerIds.delete(event.pointerId);else if (event.type === 'pointerdown') this.pointerIds.add(event.pointerId);
    }
  }

  applyHandlers(handlers, nativeHandlers) {
    this.handlers = handlers;
    this.nativeHandlers = nativeHandlers;
  }

  applyConfig(config, gestureKey) {
    this.config = parse(config, gestureKey);
  }

  clean() {
    this._targetEventStore.clean();

    for (const key of this.gestures) {
      this.gestureEventStores[key].clean();
      this.gestureTimeoutStores[key].clean();
    }
  }

  effect() {
    if (this.config.shared.target) this.bind();
    return () => this._targetEventStore.clean();
  }

  bind(...args) {
    const sharedConfig = this.config.shared;
    const eventOptions = sharedConfig.eventOptions;
    const props = {};
    let target;

    if (sharedConfig.target) {
      target = sharedConfig.target();
      if (!target) return;
    }

    const bindFunction = bindToProps(props, eventOptions, !!target);

    if (sharedConfig.enabled) {
      for (const gestureKey of this.gestures) {
        if (this.config[gestureKey].enabled) {
          const Engine = _actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* E */ "b"].get(gestureKey);
          new Engine(this, args, gestureKey).bind(bindFunction);
        }
      }

      for (const eventKey in this.nativeHandlers) {
        bindFunction(eventKey, '', event => this.nativeHandlers[eventKey](Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "d"])(Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "d"])({}, this.state.shared), {}, {
          event,
          args
        })), undefined, true);
      }
    }

    for (const handlerProp in props) {
      props[handlerProp] = Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "g"])(...props[handlerProp]);
    }

    if (!target) return props;

    for (const handlerProp in props) {
      const {
        device,
        capture,
        passive
      } = Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* p */ "n"])(handlerProp);

      this._targetEventStore.add(target, device, '', props[handlerProp], {
        capture,
        passive
      });
    }
  }

}

function setupGesture(ctrl, gestureKey) {
  ctrl.gestures.add(gestureKey);
  ctrl.gestureEventStores[gestureKey] = new EventStore(ctrl);
  ctrl.gestureTimeoutStores[gestureKey] = new TimeoutStore();
}

function resolveGestures(ctrl, internalHandlers) {
  if (internalHandlers.drag) setupGesture(ctrl, 'drag');
  if (internalHandlers.wheel) setupGesture(ctrl, 'wheel');
  if (internalHandlers.scroll) setupGesture(ctrl, 'scroll');
  if (internalHandlers.move) setupGesture(ctrl, 'move');
  if (internalHandlers.pinch) setupGesture(ctrl, 'pinch');
  if (internalHandlers.hover) setupGesture(ctrl, 'hover');
}

const bindToProps = (props, eventOptions, withPassiveOption) => (device, action, handler, options = {}, isNative = false) => {
  var _options$capture, _options$passive;

  const capture = (_options$capture = options.capture) !== null && _options$capture !== void 0 ? _options$capture : eventOptions.capture;
  const passive = (_options$passive = options.passive) !== null && _options$passive !== void 0 ? _options$passive : eventOptions.passive;
  let handlerProp = isNative ? device : Object(_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* d */ "h"])(device, action, capture);
  if (withPassiveOption && passive) handlerProp += 'Passive';
  props[handlerProp] = props[handlerProp] || [];
  props[handlerProp].push(handler);
};

const RE_NOT_NATIVE = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

function sortHandlers(_handlers) {
  const native = {};
  const handlers = {};
  const actions = new Set();

  for (let key in _handlers) {
    if (RE_NOT_NATIVE.test(key)) {
      actions.add(RegExp.lastMatch);
      handlers[key] = _handlers[key];
    } else {
      native[key] = _handlers[key];
    }
  }

  return [handlers, native, actions];
}

function registerGesture(actions, handlers, handlerKey, key, internalHandlers, config) {
  if (!actions.has(handlerKey)) return;

  if (!_actions_8e12537b_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* E */ "b"].has(key)) {
    if (false) {}

    return;
  }

  const startKey = handlerKey + 'Start';
  const endKey = handlerKey + 'End';

  const fn = state => {
    let memo = undefined;
    if (state.first && startKey in handlers) handlers[startKey](state);
    if (handlerKey in handlers) memo = handlers[handlerKey](state);
    if (state.last && endKey in handlers) handlers[endKey](state);
    return memo;
  };

  internalHandlers[key] = fn;
  config[key] = config[key] || {};
}

function parseMergedHandlers(mergedHandlers, mergedConfig) {
  const [handlers, nativeHandlers, actions] = sortHandlers(mergedHandlers);
  const internalHandlers = {};
  registerGesture(actions, handlers, 'onDrag', 'drag', internalHandlers, mergedConfig);
  registerGesture(actions, handlers, 'onWheel', 'wheel', internalHandlers, mergedConfig);
  registerGesture(actions, handlers, 'onScroll', 'scroll', internalHandlers, mergedConfig);
  registerGesture(actions, handlers, 'onPinch', 'pinch', internalHandlers, mergedConfig);
  registerGesture(actions, handlers, 'onMove', 'move', internalHandlers, mergedConfig);
  registerGesture(actions, handlers, 'onHover', 'hover', internalHandlers, mergedConfig);
  return {
    handlers: internalHandlers,
    config: mergedConfig,
    nativeHandlers
  };
}




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 7 */
/***/ (function(module, exports) {




/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createUseGesture */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDrag", function() { return useDrag; });
/* unused harmony export useGesture */
/* unused harmony export useHover */
/* unused harmony export useMove */
/* unused harmony export usePinch */
/* unused harmony export useScroll */
/* unused harmony export useWheel */
/* harmony import */ var _use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_gesture_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _use_gesture_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _use_gesture_core_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _use_gesture_core_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_use_gesture_core_types__WEBPACK_IMPORTED_MODULE_4__);







function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
  const ctrl = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => new _use_gesture_core__WEBPACK_IMPORTED_MODULE_2__[/* Controller */ "a"](handlers), []);
  ctrl.applyHandlers(handlers, nativeHandlers);
  ctrl.applyConfig(config, gestureKey);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(ctrl.effect.bind(ctrl));
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    return ctrl.clean.bind(ctrl);
  }, []);

  if (config.target === undefined) {
    return ctrl.bind.bind(ctrl);
  }

  return undefined;
}

function useDrag(handler, config = {}) {
  Object(_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* registerAction */ "e"])(_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* dragAction */ "a"]);
  return useRecognizers({
    drag: handler
  }, config, 'drag');
}

function usePinch(handler, config = {}) {
  Object(_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* registerAction */ "e"])(_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* pinchAction */ "d"]);
  return useRecognizers({
    pinch: handler
  }, config, 'pinch');
}

function useWheel(handler, config = {}) {
  Object(_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* registerAction */ "e"])(_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* wheelAction */ "g"]);
  return useRecognizers({
    wheel: handler
  }, config, 'wheel');
}

function useScroll(handler, config = {}) {
  Object(_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* registerAction */ "e"])(_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* scrollAction */ "f"]);
  return useRecognizers({
    scroll: handler
  }, config, 'scroll');
}

function useMove(handler, config = {}) {
  Object(_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* registerAction */ "e"])(_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* moveAction */ "c"]);
  return useRecognizers({
    move: handler
  }, config, 'move');
}

function useHover(handler, config = {}) {
  Object(_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* registerAction */ "e"])(_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* hoverAction */ "b"]);
  return useRecognizers({
    hover: handler
  }, config, 'hover');
}

function createUseGesture(actions) {
  actions.forEach(_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* registerAction */ "e"]);
  return function useGesture(_handlers, _config = {}) {
    const {
      handlers,
      nativeHandlers,
      config
    } = Object(_use_gesture_core__WEBPACK_IMPORTED_MODULE_2__[/* parseMergedHandlers */ "b"])(_handlers, _config);
    return useRecognizers(handlers, config, undefined, nativeHandlers);
  };
}

function useGesture(handlers, config = {}) {
  const hook = createUseGesture([_use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* dragAction */ "a"], _use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* pinchAction */ "d"], _use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* scrollAction */ "f"], _use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* wheelAction */ "g"], _use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* moveAction */ "c"], _use_gesture_core_actions__WEBPACK_IMPORTED_MODULE_0__[/* hoverAction */ "b"]]);
  return hook(handlers, config);
}




/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ImporterField", function() { return /* reexport */ ImporterField; });
__webpack_require__.d(__webpack_exports__, "Importer", function() { return /* reexport */ Importer_Importer; });
__webpack_require__.d(__webpack_exports__, "enUS", function() { return /* reexport */ enUS; });
__webpack_require__.d(__webpack_exports__, "deDE", function() { return /* reexport */ deDE; });
__webpack_require__.d(__webpack_exports__, "itIT", function() { return /* reexport */ itIT; });
__webpack_require__.d(__webpack_exports__, "ptBR", function() { return /* reexport */ ptBR; });
__webpack_require__.d(__webpack_exports__, "daDK", function() { return /* reexport */ daDK; });
__webpack_require__.d(__webpack_exports__, "trTR", function() { return /* reexport */ trTR; });

// CONCATENATED MODULE: ./src/components/ImporterProps.ts


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "papaparse"
var external_papaparse_ = __webpack_require__(4);
var external_papaparse_default = /*#__PURE__*/__webpack_require__.n(external_papaparse_);

// CONCATENATED MODULE: ./src/parser.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const PREVIEW_ROW_COUNT = 5;
// polyfill as implemented in https://github.com/eligrey/Blob.js/blob/master/Blob.js#L653
// (this is for Safari pre v14.1)
function streamForBlob(blob) {
    if (blob.stream) {
        return blob.stream();
    }
    const res = new Response(blob);
    if (res.body) {
        return res.body;
    }
    throw new Error('This browser does not support client-side file reads');
}
// incredibly cheap wrapper exposing a subset of stream.Readable interface just for PapaParse usage
// @todo chunk size
function nodeStreamWrapper(stream, encoding) {
    let dataHandler = null;
    let endHandler = null;
    let errorHandler = null;
    let isStopped = false;
    let pausePromise = null;
    let pauseResolver = null;
    function runReaderPump() {
        return __awaiter(this, void 0, void 0, function* () {
            // ensure this is truly in the next tick after uncorking
            yield Promise.resolve();
            const streamReader = stream.getReader();
            const decoder = new TextDecoder(encoding); // this also strips BOM by default
            try {
                // main reader pump loop
                while (!isStopped) {
                    // perform read from upstream
                    const { done, value } = yield streamReader.read();
                    // wait if we became paused since last data event
                    if (pausePromise) {
                        yield pausePromise;
                    }
                    // check again if stopped and unlistened
                    if (isStopped || !dataHandler || !endHandler) {
                        return;
                    }
                    // final data flush and end notification
                    if (done) {
                        const lastChunkString = decoder.decode(value); // value is empty but pass just in case
                        if (lastChunkString) {
                            dataHandler(lastChunkString);
                        }
                        endHandler(undefined);
                        return;
                    }
                    // otherwise, normal data event after stream-safe decoding
                    const chunkString = decoder.decode(value, { stream: true });
                    dataHandler(chunkString);
                }
            }
            finally {
                // always release the lock
                streamReader.releaseLock();
            }
        });
    }
    const self = {
        // marker properties to make PapaParse think this is a Readable object
        readable: true,
        read() {
            throw new Error('only flowing mode is emulated');
        },
        on(event, callback) {
            switch (event) {
                case 'data':
                    if (dataHandler) {
                        throw new Error('two data handlers not supported');
                    }
                    dataHandler = callback;
                    // flowing state started, run the main pump loop
                    runReaderPump().catch((error) => {
                        if (errorHandler) {
                            errorHandler(error);
                        }
                        else {
                            // rethrow to show error in console
                            throw error;
                        }
                    });
                    return;
                case 'end':
                    if (endHandler) {
                        throw new Error('two end handlers not supported');
                    }
                    endHandler = callback;
                    return;
                case 'error':
                    if (errorHandler) {
                        throw new Error('two error handlers not supported');
                    }
                    errorHandler = callback;
                    return;
            }
            throw new Error('unknown stream shim event: ' + event);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        removeListener(event, callback) {
            // stop and clear everything for simplicity
            isStopped = true;
            dataHandler = null;
            endHandler = null;
            errorHandler = null;
        },
        pause() {
            if (!pausePromise) {
                pausePromise = new Promise((resolve) => {
                    pauseResolver = resolve;
                });
            }
            return self;
        },
        resume() {
            if (pauseResolver) {
                pauseResolver(); // waiting code will proceed in next tick
                pausePromise = null;
                pauseResolver = null;
            }
            return self;
        }
    };
    // pass ourselves off as a real Node stream
    return self;
}
function parsePreview(file, customConfig) {
    // wrap synchronous errors in promise
    return new Promise((resolve) => {
        let firstChunk = null;
        let firstWarning = undefined;
        const rowAccumulator = [];
        function reportSuccess() {
            // PapaParse normally complains first anyway, but might as well flag it
            if (rowAccumulator.length === 0) {
                return {
                    parseError: new Error('File is empty'),
                    file
                };
            }
            // remember whether this file has only one line
            const isSingleLine = rowAccumulator.length === 1;
            // fill preview with blanks if needed
            while (rowAccumulator.length < PREVIEW_ROW_COUNT) {
                rowAccumulator.push([]);
            }
            resolve({
                file,
                parseError: undefined,
                parseWarning: firstWarning || undefined,
                firstChunk: firstChunk || '',
                firstRows: rowAccumulator,
                isSingleLine
            });
        }
        // use our own multibyte-safe streamer, bail after first chunk
        // (this used to add skipEmptyLines but that was hiding possible parse errors)
        // @todo wait for upstream multibyte fix in PapaParse: https://github.com/mholt/PapaParse/issues/908
        const nodeStream = nodeStreamWrapper(streamForBlob(file), customConfig.encoding || 'utf-8');
        external_papaparse_default.a.parse(nodeStream, Object.assign(Object.assign({}, customConfig), { chunkSize: 10000, preview: PREVIEW_ROW_COUNT, error: (error) => {
                resolve({
                    parseError: error,
                    file
                });
            }, beforeFirstChunk: (chunk) => {
                firstChunk = chunk;
            }, chunk: ({ data, errors }, parser) => {
                data.forEach((row) => {
                    const stringRow = row.map((item) => typeof item === 'string' ? item : '');
                    rowAccumulator.push(stringRow);
                });
                if (errors.length > 0 && !firstWarning) {
                    firstWarning = errors[0];
                }
                // finish parsing once we got enough data, otherwise try for more
                // (in some cases PapaParse flushes out last line as separate chunk)
                if (rowAccumulator.length >= PREVIEW_ROW_COUNT) {
                    nodeStream.pause(); // parser does not pause source stream, do it here explicitly
                    parser.abort();
                    reportSuccess();
                }
            }, complete: reportSuccess }));
    }).catch((error) => {
        return {
            parseError: error,
            file
        };
    });
}
function processFile(input, reportProgress, callback) {
    const { file, hasHeaders, papaParseConfig, fieldAssignments } = input;
    const fieldNames = Object.keys(fieldAssignments);
    // wrap synchronous errors in promise
    return new Promise((resolve, reject) => {
        // skip first line if needed
        let skipLine = hasHeaders;
        let processedCount = 0;
        // use our own multibyte-safe decoding streamer
        // @todo wait for upstream multibyte fix in PapaParse: https://github.com/mholt/PapaParse/issues/908
        const nodeStream = nodeStreamWrapper(streamForBlob(file), papaParseConfig.encoding || 'utf-8');
        external_papaparse_default.a.parse(nodeStream, Object.assign(Object.assign({}, papaParseConfig), { chunkSize: papaParseConfig.chunkSize || 10000, error: (error) => {
                reject(error);
            }, chunk: ({ data }, parser) => {
                // pause to wait until the rows are consumed
                nodeStream.pause(); // parser does not pause source stream, do it here explicitly
                parser.pause();
                const skipped = skipLine && data.length > 0;
                const rows = (skipped ? data.slice(1) : data).map((row) => {
                    const stringRow = row.map((item) => typeof item === 'string' ? item : '');
                    const record = {};
                    fieldNames.forEach((fieldName) => {
                        const columnIndex = fieldAssignments[fieldName];
                        if (columnIndex !== undefined) {
                            record[fieldName] = stringRow[columnIndex];
                        }
                    });
                    return record; // @todo look into a more precise setup
                });
                // clear line skip flag if there was anything to skip
                if (skipped) {
                    skipLine = false;
                }
                // info snapshot for processing callback
                const info = {
                    startIndex: processedCount
                };
                processedCount += rows.length;
                // @todo collect errors
                reportProgress(rows.length);
                // wrap sync errors in promise
                // (avoid invoking callback if there are no rows to consume)
                const whenConsumed = new Promise((resolve) => {
                    const result = rows.length ? callback(rows, info) : undefined;
                    // introduce delay to allow a frame render
                    setTimeout(() => resolve(result), 0);
                });
                // unpause parsing when done
                whenConsumed.then(() => {
                    nodeStream.resume();
                    parser.resume();
                }, () => {
                    // @todo collect errors
                    nodeStream.resume();
                    parser.resume();
                });
            }, complete: () => {
                resolve();
            } }));
    });
}

// EXTERNAL MODULE: ./src/components/TextButton.scss
var TextButton = __webpack_require__(11);

// CONCATENATED MODULE: ./src/components/TextButton.tsx


const TextButton_TextButton = ({ disabled, onClick, children }) => {
    return (external_react_default.a.createElement("button", { className: "CSVImporter_TextButton", type: "button" // avoid triggering form submit
        , disabled: disabled, onClick: onClick }, children));
};

// EXTERNAL MODULE: ./src/components/IconButton.scss
var IconButton = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/IconButton.tsx


const IconButton_IconButton = ({ type, label, small, focusOnly, disabled, onClick }) => {
    return (external_react_default.a.createElement("button", { className: "CSVImporter_IconButton", type: "button" // avoid triggering form submit
        , "aria-label": label, disabled: disabled, onClick: onClick, "data-small": !!small, "data-focus-only": !!focusOnly },
        external_react_default.a.createElement("span", { "data-type": type })));
};

// EXTERNAL MODULE: ./src/components/ImporterFrame.scss
var ImporterFrame = __webpack_require__(13);

// CONCATENATED MODULE: ./src/locale/locale_enUS.ts
/* eslint-disable @typescript-eslint/explicit-module-boundary-types -- all exports are ImporterLocale which is already fully typed */
const enUS = {
    general: {
        goToPreviousStepTooltip: 'Go to previous step'
    },
    fileStep: {
        initialDragDropPrompt: 'Drag-and-drop CSV file here, or click to select in folder',
        activeDragDropPrompt: 'Drop CSV file here...',
        getImportError: (message) => `Import error: ${message}`,
        getDataFormatError: (message) => `Please check data formatting: ${message}`,
        goBackButton: 'Go Back',
        nextButton: 'Choose columns',
        rawFileContentsHeading: 'Raw File Contents',
        previewImportHeading: 'Preview Import',
        dataHasHeadersCheckbox: 'Data has headers',
        previewLoadingStatus: 'Loading preview...'
    },
    fieldsStep: {
        stepSubtitle: 'Select Columns',
        requiredFieldsError: 'Please assign all required fields',
        nextButton: 'Import',
        dragSourceAreaCaption: 'Columns to import',
        getDragSourcePageIndicator: (currentPage, pageCount) => `Page ${currentPage} of ${pageCount}`,
        getDragSourceActiveStatus: (columnCode) => `Assigning column ${columnCode}`,
        nextColumnsTooltip: 'Show next columns',
        previousColumnsTooltip: 'Show previous columns',
        clearAssignmentTooltip: 'Clear column assignment',
        selectColumnTooltip: 'Select column for assignment',
        unselectColumnTooltip: 'Unselect column',
        dragTargetAreaCaption: 'Target fields',
        getDragTargetOptionalCaption: (field) => `${field} (optional)`,
        getDragTargetRequiredCaption: (field) => `${field} (required)`,
        dragTargetPlaceholder: 'Drag column here',
        getDragTargetAssignTooltip: (columnCode) => `Assign column ${columnCode}`,
        dragTargetClearTooltip: 'Clear column assignment',
        columnCardDummyHeader: 'Unassigned field',
        getColumnCardHeader: (code) => `Column ${code}`
    },
    progressStep: {
        stepSubtitle: 'Import',
        uploadMoreButton: 'Upload More',
        finishButton: 'Finish',
        statusError: 'Could not import',
        statusComplete: 'Complete',
        statusPending: 'Importing...',
        processedRowsLabel: 'Processed rows:'
    }
};

// CONCATENATED MODULE: ./src/locale/locale_deDE.ts
/* eslint-disable @typescript-eslint/explicit-module-boundary-types -- all exports are ImporterLocale which is already fully typed */
const deDE = {
    general: {
        goToPreviousStepTooltip: 'Zum vorherigen Schritt'
    },
    fileStep: {
        initialDragDropPrompt: 'CSV-Datei auf dieses Feld ziehen, oder klicken um eine Datei auszuwählen',
        activeDragDropPrompt: 'CSV-Datei auf dieses Feld ziehen...',
        nextButton: 'Spalten auswählen',
        getImportError: (message) => `Fehler beim Import: ${message}`,
        getDataFormatError: (message) => `Bitte Datenformat überprüfen: ${message}`,
        goBackButton: 'Zurück',
        rawFileContentsHeading: 'Originaler Datei-Inhalt',
        previewImportHeading: 'Import-Vorschau',
        dataHasHeadersCheckbox: 'Mit Kopfzeile',
        previewLoadingStatus: 'Vorschau wird geladen...'
    },
    fieldsStep: {
        stepSubtitle: 'Spalten auswählen',
        requiredFieldsError: 'Bitte weise allen nicht optionalen Spalten einen Wert zu',
        nextButton: 'Importieren',
        dragSourceAreaCaption: 'Zu importierende Spalte',
        getDragSourcePageIndicator: (currentPage, pageCount) => `Seite ${currentPage} von ${pageCount}`,
        getDragSourceActiveStatus: (columnCode) => `Spalte ${columnCode} zuweisen`,
        nextColumnsTooltip: 'Nächste Spalten anzeigen',
        previousColumnsTooltip: 'Vorherige Spalten anzeigen',
        clearAssignmentTooltip: 'Zugewiesene Spalte entfernen',
        selectColumnTooltip: 'Spalte zum Zuweisen auswählen',
        unselectColumnTooltip: 'Spalte abwählen',
        dragTargetAreaCaption: 'Zielfelder',
        getDragTargetOptionalCaption: (field) => `${field} (optional)`,
        getDragTargetRequiredCaption: (field) => `${field} (erforderlich)`,
        dragTargetPlaceholder: 'Spalte hierher ziehen',
        getDragTargetAssignTooltip: (columnCode) => `Spalte ${columnCode} zuweisen`,
        dragTargetClearTooltip: 'Zugewiesene Spalte entfernen',
        columnCardDummyHeader: 'Nicht zugewiesenes Feld',
        getColumnCardHeader: (code) => `Spalte ${code}`
    },
    progressStep: {
        stepSubtitle: 'Importieren',
        uploadMoreButton: 'Weitere hochladen',
        finishButton: 'Abschließen',
        statusError: 'Konnte nicht importiert werden',
        statusComplete: 'Fertig',
        statusPending: 'Wird importiert...',
        processedRowsLabel: 'Verarbeitete Zeilen:'
    }
};

// CONCATENATED MODULE: ./src/locale/locale_itIT.ts
/* eslint-disable @typescript-eslint/explicit-module-boundary-types -- all exports are ImporterLocale which is already fully typed */
const itIT = {
    general: {
        goToPreviousStepTooltip: 'Torna indietro'
    },
    fileStep: {
        initialDragDropPrompt: 'Trascina qui il file CSV, o clicca per selezionarlo dal PC',
        activeDragDropPrompt: 'Rilascia qui il file CSV...',
        getImportError: (message) => `Errore durante l'importazione: ${message}`,
        getDataFormatError: (message) => `Si prega di controllare il formato dei dati: ${message}`,
        goBackButton: 'Torna indietro',
        nextButton: 'Seleziona le colonne',
        rawFileContentsHeading: 'Contenuto delfile caricato',
        previewImportHeading: 'Anteprima dei dati',
        dataHasHeadersCheckbox: 'Intestazione presente nel file',
        previewLoadingStatus: 'Caricamento anteprima...'
    },
    fieldsStep: {
        stepSubtitle: 'Seleziona le colonne',
        requiredFieldsError: 'Si prega di assegnare tutte le colonne richieste',
        nextButton: 'Importa',
        dragSourceAreaCaption: 'Colonne da importare',
        getDragSourcePageIndicator: (currentPage, pageCount) => `Pagina ${currentPage} di ${pageCount}`,
        getDragSourceActiveStatus: (columnCode) => `Assegnamento alla colonna ${columnCode}`,
        nextColumnsTooltip: 'Mostra colonna successiva',
        previousColumnsTooltip: 'Mostra colonna precedente',
        clearAssignmentTooltip: 'Cancella tutti gli assegnamenti delle colonne',
        selectColumnTooltip: 'Seleziona una colonna da assegnare',
        unselectColumnTooltip: 'Deseleziona colonna',
        dragTargetAreaCaption: 'Campi richiesti',
        getDragTargetOptionalCaption: (field) => `${field} (opzionale)`,
        getDragTargetRequiredCaption: (field) => `${field} (obbligatorio)`,
        dragTargetPlaceholder: 'Trascina qui la colonna',
        getDragTargetAssignTooltip: (columnCode) => `Assegnamento alla colonna ${columnCode}`,
        dragTargetClearTooltip: 'Cancella gli assegnamenti alla colonna',
        columnCardDummyHeader: 'Campo non assegnato',
        getColumnCardHeader: (code) => `Column ${code}`
    },
    progressStep: {
        stepSubtitle: 'Importa',
        uploadMoreButton: 'Carica altri dati',
        finishButton: 'Fine',
        statusError: 'Errore di caricamento',
        statusComplete: 'Completato',
        statusPending: 'Caricamento...',
        processedRowsLabel: 'Righe processate:'
    }
};

// CONCATENATED MODULE: ./src/locale/locale_ptBR.ts
/* eslint-disable @typescript-eslint/explicit-module-boundary-types -- all exports are ImporterLocale which is already fully typed */
const ptBR = {
    general: {
        goToPreviousStepTooltip: 'Voltar a etapa anterior'
    },
    fileStep: {
        initialDragDropPrompt: 'Arraste e solte o arquivo CSV aqui ou clique para selecionar na pasta',
        activeDragDropPrompt: 'Arraste e solte o arquivo CSV aqui...',
        getImportError: (message) => `Erro ao importar: ${message}`,
        getDataFormatError: (message) => `Por favor confira a formatação dos dados: ${message}`,
        goBackButton: 'Voltar',
        nextButton: 'Escolher Colunas',
        rawFileContentsHeading: 'Conteúdo Bruto do Arquivo',
        previewImportHeading: 'Visualizar Importação',
        dataHasHeadersCheckbox: 'Os dados têm cabeçalhos',
        previewLoadingStatus: 'Carregando visualização...'
    },
    fieldsStep: {
        stepSubtitle: 'Selecionar Colunas',
        requiredFieldsError: 'Atribua todos os campos obrigatórios',
        nextButton: 'Importar',
        dragSourceAreaCaption: 'Colunas para importar',
        getDragSourcePageIndicator: (currentPage, pageCount) => `Página ${currentPage} de ${pageCount}`,
        getDragSourceActiveStatus: (columnCode) => `Atribuindo coluna ${columnCode}`,
        nextColumnsTooltip: 'Mostrar as próximas colunas',
        previousColumnsTooltip: 'Mostrar colunas anteriores',
        clearAssignmentTooltip: 'Limpar atribuição de coluna',
        selectColumnTooltip: 'Selecione a coluna para atribuição',
        unselectColumnTooltip: 'Desmarcar coluna',
        dragTargetAreaCaption: 'Campos de destino',
        getDragTargetOptionalCaption: (field) => `${field} (opcional)`,
        getDragTargetRequiredCaption: (field) => `${field} (obrigatório)`,
        dragTargetPlaceholder: 'Arraste a coluna aqui',
        getDragTargetAssignTooltip: (columnCode) => `Atribuir coluna ${columnCode}`,
        dragTargetClearTooltip: 'Limpar atribuição de coluna',
        columnCardDummyHeader: 'Campo não atribuído',
        getColumnCardHeader: (code) => `Coluna ${code}`
    },
    progressStep: {
        stepSubtitle: 'Importar',
        uploadMoreButton: 'Carregar mais',
        finishButton: 'Finalizar',
        statusError: 'Não foi possível importar',
        statusComplete: 'Completo',
        statusPending: 'Importando...',
        processedRowsLabel: 'Linhas processadas:'
    }
};

// CONCATENATED MODULE: ./src/locale/locale_daDK.ts
/* eslint-disable @typescript-eslint/explicit-module-boundary-types -- all exports are ImporterLocale which is already fully typed */
const daDK = {
    general: {
        goToPreviousStepTooltip: 'Gå til forrige trin'
    },
    fileStep: {
        initialDragDropPrompt: 'Træk og slip CSV-fil her eller klik for at vælge fra en mappe',
        activeDragDropPrompt: 'Slip CSV-fil her...',
        getImportError: (message) => `Import-fejl: ${message}`,
        getDataFormatError: (message) => `Kontrollér venligst data-formatering: ${message}`,
        goBackButton: 'Gå tilbage',
        nextButton: 'Vælg kolonner',
        rawFileContentsHeading: 'Rå filindhold',
        previewImportHeading: 'Forhåndsvis Import',
        dataHasHeadersCheckbox: 'Data sidehoved',
        previewLoadingStatus: 'Indlæser forhåndsvisning...'
    },
    fieldsStep: {
        stepSubtitle: 'Vælg kolonner',
        requiredFieldsError: 'Tildel venligst alle påkrævede felter',
        nextButton: 'Importér',
        dragSourceAreaCaption: 'Kolonner til import',
        getDragSourcePageIndicator: (currentPage, pageCount) => `Side ${currentPage} af ${pageCount}`,
        getDragSourceActiveStatus: (columnCode) => `Tildeler kolonne ${columnCode}`,
        nextColumnsTooltip: 'Vis næste kolonner',
        previousColumnsTooltip: 'Vis forrige kolonner',
        clearAssignmentTooltip: 'Ryd kolonne-tildeling',
        selectColumnTooltip: 'Vælg kolonne til tildeling',
        unselectColumnTooltip: 'Fravælg kolonne',
        dragTargetAreaCaption: 'Mål-felter',
        getDragTargetOptionalCaption: (field) => `${field} (valgfri)`,
        getDragTargetRequiredCaption: (field) => `${field} (påkrævet)`,
        dragTargetPlaceholder: 'Træk kolonne hertil',
        getDragTargetAssignTooltip: (columnCode) => `Tildel kolonne ${columnCode}`,
        dragTargetClearTooltip: 'Ryd kolonne-tildeling',
        columnCardDummyHeader: 'Disponibelt felt',
        getColumnCardHeader: (code) => `Column ${code}`
    },
    progressStep: {
        stepSubtitle: 'Importér',
        uploadMoreButton: 'Upload Mere',
        finishButton: 'Færdiggør',
        statusError: 'Kunne ikke importere',
        statusComplete: 'Færdig',
        statusPending: 'Importerer...',
        processedRowsLabel: 'Processerede rækker:'
    }
};

// CONCATENATED MODULE: ./src/locale/locale_trTR.ts
/* eslint-disable @typescript-eslint/explicit-module-boundary-types -- all exports are ImporterLocale which is already fully typed */
const trTR = {
    general: {
        goToPreviousStepTooltip: 'Bir önceki adıma geri dön'
    },
    fileStep: {
        initialDragDropPrompt: 'CSV dosyasını sürükleyin veya kutunun içine tıklayıp dosyayı seçin',
        activeDragDropPrompt: 'CSV dosyasını buraya bırakın...',
        getImportError: (message) => `Import hatası: ${message}`,
        getDataFormatError: (message) => `Lütfen veri formatını kontrol edin: ${message}`,
        goBackButton: 'Geri',
        nextButton: 'Kolonları Seç',
        rawFileContentsHeading: 'CSV dosyası içeriği',
        previewImportHeading: 'Import önizleme',
        dataHasHeadersCheckbox: 'Veride başlıklar var',
        previewLoadingStatus: 'Önizleme yükleniyor...'
    },
    fieldsStep: {
        stepSubtitle: 'Kolonları seçin',
        requiredFieldsError: 'Lütfen zorunlu tüm alanları doldurun.',
        nextButton: 'Import',
        dragSourceAreaCaption: 'Import edilecek kolonlar',
        getDragSourcePageIndicator: (currentPage, pageCount) => `${pageCount} sayfadan ${currentPage}. sayfadasınız`,
        getDragSourceActiveStatus: (columnCode) => `${columnCode}. kolon atanıyor`,
        nextColumnsTooltip: 'Sıradaki kolonları göster',
        previousColumnsTooltip: 'Önceki kolonları göster',
        clearAssignmentTooltip: 'Kolon atamayı temizle',
        selectColumnTooltip: 'Atamak için kolon seçiniz',
        unselectColumnTooltip: 'Kolonu seçmeyi bırak',
        dragTargetAreaCaption: 'Hedef alanlar',
        getDragTargetOptionalCaption: (field) => `${field} (opsiyonel)`,
        getDragTargetRequiredCaption: (field) => `${field} (zorunlu)`,
        dragTargetPlaceholder: 'Kolonu buraya sürükle',
        getDragTargetAssignTooltip: (columnCode) => `${columnCode}. kolonu ata`,
        dragTargetClearTooltip: 'Kolon atamayı temizle',
        columnCardDummyHeader: 'Atanmamış alan',
        getColumnCardHeader: (code) => `Kolon ${code}`
    },
    progressStep: {
        stepSubtitle: 'Import',
        uploadMoreButton: 'Sonrakileri yükle',
        finishButton: 'Bitir',
        statusError: 'Import edilemedi',
        statusComplete: 'Tamamlandı',
        statusPending: 'Import ediliyor...',
        processedRowsLabel: 'İşlenen satır sayısı:'
    }
};

// CONCATENATED MODULE: ./src/locale/index.ts







// CONCATENATED MODULE: ./src/locale/LocaleContext.tsx



const LocaleContext = external_react_default.a.createContext(enUS);
function useLocale(namespace) {
    const locale = Object(external_react_["useContext"])(LocaleContext);
    return locale[namespace]; // not using memo for basic property getter
}

// CONCATENATED MODULE: ./src/components/ImporterFrame.tsx





const ImporterFrame_ImporterFrame = ({ fileName, subtitle, secondaryDisabled, secondaryLabel, nextDisabled, nextLabel, error, onSecondary, onNext, onCancel, children }) => {
    const titleRef = Object(external_react_["useRef"])(null);
    const subtitleRef = Object(external_react_["useRef"])(null);
    Object(external_react_["useEffect"])(() => {
        if (subtitleRef.current) {
            subtitleRef.current.focus();
        }
        else if (titleRef.current) {
            titleRef.current.focus();
        }
    }, []);
    const l10n = useLocale('general');
    return (external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame" },
        external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__header" },
            external_react_default.a.createElement(IconButton_IconButton, { label: l10n.goToPreviousStepTooltip, type: "arrowBack", disabled: !onCancel, onClick: onCancel }),
            external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__headerTitle", tabIndex: -1, ref: titleRef }, fileName),
            subtitle ? (external_react_default.a.createElement(external_react_default.a.Fragment, null,
                external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__headerCrumbSeparator" },
                    external_react_default.a.createElement("span", null)),
                external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__headerSubtitle", tabIndex: -1, ref: subtitleRef }, subtitle))) : null),
        children,
        external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__footer" },
            external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__footerFill" }),
            error ? (external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__footerError", role: "status" }, error)) : null,
            secondaryLabel ? (external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__footerSecondary" },
                external_react_default.a.createElement(TextButton_TextButton, { disabled: !!secondaryDisabled, onClick: onSecondary }, secondaryLabel))) : null,
            nextLabel !== false ? (external_react_default.a.createElement("div", { className: "CSVImporter_ImporterFrame__footerNext" },
                external_react_default.a.createElement(TextButton_TextButton, { disabled: !!nextDisabled, onClick: onNext }, nextLabel))) : null)));
};

// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__(8);

// EXTERNAL MODULE: ./src/components/file-step/FileSelector.scss
var FileSelector = __webpack_require__(14);

// CONCATENATED MODULE: ./src/components/file-step/FileSelector.tsx




const FileSelector_FileSelector = ({ onSelected }) => {
    const onSelectedRef = Object(external_react_["useRef"])(onSelected);
    onSelectedRef.current = onSelected;
    const dropHandler = Object(external_react_["useCallback"])((acceptedFiles) => {
        // silently ignore if nothing to do
        if (acceptedFiles.length < 1) {
            return;
        }
        const file = acceptedFiles[0];
        onSelectedRef.current(file);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = Object(external_react_dropzone_["useDropzone"])({
        onDrop: dropHandler
    });
    const l10n = useLocale('fileStep');
    return (external_react_default.a.createElement("div", Object.assign({ className: "CSVImporter_FileSelector", "data-active": !!isDragActive }, getRootProps()),
        external_react_default.a.createElement("input", Object.assign({}, getInputProps())),
        isDragActive ? (external_react_default.a.createElement("span", null, l10n.activeDragDropPrompt)) : (external_react_default.a.createElement("span", null, l10n.initialDragDropPrompt))));
};

// EXTERNAL MODULE: ./src/components/file-step/FormatErrorMessage.scss
var FormatErrorMessage = __webpack_require__(15);

// CONCATENATED MODULE: ./src/components/file-step/FormatErrorMessage.tsx




const FormatErrorMessage_FormatErrorMessage = external_react_default.a.memo(({ onCancelClick, children }) => {
    const l10n = useLocale('fileStep');
    return (external_react_default.a.createElement("div", { className: "CSVImporter_FormatErrorMessage" },
        external_react_default.a.createElement("span", null, children),
        external_react_default.a.createElement(TextButton_TextButton, { onClick: onCancelClick }, l10n.goBackButton)));
});

// EXTERNAL MODULE: ./src/components/file-step/FormatRawPreview.scss
var FormatRawPreview = __webpack_require__(16);

// CONCATENATED MODULE: ./src/components/file-step/FormatRawPreview.tsx




const RAW_PREVIEW_SIZE = 500;
const FormatRawPreview_FormatRawPreview = external_react_default.a.memo(({ chunk, warning, onCancelClick }) => {
    const chunkSlice = chunk.slice(0, RAW_PREVIEW_SIZE);
    const chunkHasMore = chunk.length > RAW_PREVIEW_SIZE;
    const l10n = useLocale('fileStep');
    return (external_react_default.a.createElement("div", { className: "CSVImporter_FormatRawPreview" },
        external_react_default.a.createElement("div", { className: "CSVImporter_FormatRawPreview__scroll" },
            external_react_default.a.createElement("pre", { className: "CSVImporter_FormatRawPreview__pre" },
                chunkSlice,
                chunkHasMore && external_react_default.a.createElement("aside", null, "..."))),
        warning ? (external_react_default.a.createElement(FormatErrorMessage_FormatErrorMessage, { onCancelClick: onCancelClick }, l10n.getDataFormatError(warning.message || String(warning)))) : null));
});

// EXTERNAL MODULE: ./src/components/file-step/FormatDataRowPreview.scss
var FormatDataRowPreview = __webpack_require__(17);

// CONCATENATED MODULE: ./src/components/file-step/FormatDataRowPreview.tsx


const FormatDataRowPreview_FormatDataRowPreview = external_react_default.a.memo(({ hasHeaders, rows }) => {
    const headerRow = hasHeaders ? rows[0] : null;
    const bodyRows = hasHeaders ? rows.slice(1) : rows;
    return (external_react_default.a.createElement("div", { className: "CSVImporter_FormatDataRowPreview" },
        external_react_default.a.createElement("table", { className: "CSVImporter_FormatDataRowPreview__table" },
            headerRow && (external_react_default.a.createElement("thead", null,
                external_react_default.a.createElement("tr", null, headerRow.map((item, itemIndex) => (external_react_default.a.createElement("th", { key: itemIndex }, item)))))),
            external_react_default.a.createElement("tbody", null, bodyRows.map((row, rowIndex) => (external_react_default.a.createElement("tr", { key: rowIndex }, row.map((item, itemIndex) => (external_react_default.a.createElement("td", { key: itemIndex }, item))))))))));
});

// EXTERNAL MODULE: ./src/components/file-step/FileStep.scss
var FileStep = __webpack_require__(18);

// CONCATENATED MODULE: ./src/components/file-step/FileStep.tsx









const FileStep_FileStep = ({ customConfig, defaultNoHeader, prevState, onChange, onAccept }) => {
    const l10n = useLocale('fileStep');
    // seed from previous state as needed
    const [selectedFile, setSelectedFile] = Object(external_react_["useState"])(prevState ? prevState.file : null);
    const [preview, setPreview] = Object(external_react_["useState"])(() => prevState && Object.assign({ parseError: undefined }, prevState));
    const [papaParseConfig, setPapaParseConfig] = Object(external_react_["useState"])(prevState ? prevState.papaParseConfig : customConfig);
    const [hasHeaders, setHasHeaders] = Object(external_react_["useState"])(prevState ? prevState.hasHeaders : false);
    // wrap in ref to avoid triggering effect
    const customConfigRef = Object(external_react_["useRef"])(customConfig);
    customConfigRef.current = customConfig;
    const defaultNoHeaderRef = Object(external_react_["useRef"])(defaultNoHeader);
    defaultNoHeaderRef.current = defaultNoHeader;
    const onChangeRef = Object(external_react_["useRef"])(onChange);
    onChangeRef.current = onChange;
    // notify of current state
    Object(external_react_["useEffect"])(() => {
        onChangeRef.current(preview && !preview.parseError
            ? Object.assign(Object.assign({}, preview), { papaParseConfig, hasHeaders }) : null);
    }, [preview, papaParseConfig, hasHeaders]);
    // perform async preview parse once for the given file
    const asyncLockRef = Object(external_react_["useRef"])(0);
    Object(external_react_["useEffect"])(() => {
        // clear other state when file selector is reset
        if (!selectedFile) {
            setPreview(null);
            return;
        }
        // preserve existing state when parsing for this file is already complete
        if (preview && preview.file === selectedFile) {
            return;
        }
        const oplock = asyncLockRef.current;
        // lock in the current PapaParse config instance for use in multiple spots
        const config = customConfigRef.current;
        // kick off the preview parse
        parsePreview(selectedFile, config).then((results) => {
            // ignore if stale
            if (oplock !== asyncLockRef.current) {
                return;
            }
            // save the results and the original config
            setPreview(results);
            setPapaParseConfig(config);
            // pre-fill headers flag (only possible with >1 lines)
            setHasHeaders(results.parseError
                ? false
                : !defaultNoHeaderRef.current && !results.isSingleLine);
        });
        return () => {
            // invalidate current oplock on change or unmount
            asyncLockRef.current += 1;
        };
    }, [selectedFile, preview]);
    // clear selected file
    // preview result content to display
    const reportBlock = Object(external_react_["useMemo"])(() => {
        if (!preview) {
            return null;
        }
        if (preview.parseError) {
            return (external_react_default.a.createElement("div", { className: "CSVImporter_FileStep__mainResultBlock" },
                external_react_default.a.createElement(FormatErrorMessage_FormatErrorMessage, { onCancelClick: () => setSelectedFile(null) }, l10n.getImportError(preview.parseError.message || String(preview.parseError)))));
        }
        return (external_react_default.a.createElement("div", { className: "CSVImporter_FileStep__mainResultBlock" },
            external_react_default.a.createElement("div", { className: "CSVImporter_FileStep__header" }, l10n.rawFileContentsHeading),
            external_react_default.a.createElement(FormatRawPreview_FormatRawPreview, { chunk: preview.firstChunk, warning: preview.parseWarning, onCancelClick: () => setSelectedFile(null) }),
            preview.parseWarning ? null : (external_react_default.a.createElement(external_react_default.a.Fragment, null,
                external_react_default.a.createElement("div", { className: "CSVImporter_FileStep__header" },
                    l10n.previewImportHeading,
                    !preview.isSingleLine && ( // hide setting if only one line anyway
                    external_react_default.a.createElement("label", { className: "CSVImporter_FileStep__headerToggle" },
                        external_react_default.a.createElement("input", { type: "checkbox", checked: hasHeaders, onChange: () => {
                                setHasHeaders((prev) => !prev);
                            } }),
                        external_react_default.a.createElement("span", null, l10n.dataHasHeadersCheckbox)))),
                external_react_default.a.createElement(FormatDataRowPreview_FormatDataRowPreview, { hasHeaders: hasHeaders, rows: preview.firstRows })))));
    }, [preview, hasHeaders, l10n]);
    if (!selectedFile) {
        return external_react_default.a.createElement(FileSelector_FileSelector, { onSelected: (file) => setSelectedFile(file) });
    }
    return (external_react_default.a.createElement(ImporterFrame_ImporterFrame, { fileName: selectedFile.name, nextDisabled: !preview || !!preview.parseError || !!preview.parseWarning, onNext: () => {
            if (!preview || preview.parseError) {
                throw new Error('unexpected missing preview info');
            }
            onAccept();
        }, onCancel: () => setSelectedFile(null), nextLabel: l10n.nextButton }, reportBlock || (external_react_default.a.createElement("div", { className: "CSVImporter_FileStep__mainPendingBlock" }, l10n.previewLoadingStatus))));
};

// CONCATENATED MODULE: ./src/components/fields-step/ColumnPreview.tsx
// spreadsheet-style column code computation (A, B, ..., Z, AA, AB, ..., etc)
function generateColumnCode(value) {
    // ignore dummy index
    if (value < 0) {
        return '';
    }
    // first, determine how many base-26 letters there should be
    // (because the notation is not purely positional)
    let digitCount = 1;
    let base = 0;
    let next = 26;
    while (next <= value) {
        digitCount += 1;
        base = next;
        next = next * 26 + 26;
    }
    // then, apply normal positional digit computation on remainder above base
    let remainder = value - base;
    const digits = [];
    while (digits.length < digitCount) {
        const lastDigit = remainder % 26;
        remainder = Math.floor((remainder - lastDigit) / 26); // applying floor just in case
        // store ASCII code, with A as 0
        digits.unshift(65 + lastDigit);
    }
    return String.fromCharCode.apply(null, digits);
}
// prepare spreadsheet-like column display information for given raw data preview
function generatePreviewColumns(firstRows, hasHeaders) {
    const columnStubs = [...new Array(firstRows[0].length)];
    return columnStubs.map((empty, index) => {
        const values = firstRows.map((row) => row[index] || '');
        const headerValue = hasHeaders ? values.shift() : undefined;
        return {
            index,
            header: headerValue,
            values
        };
    });
}

// EXTERNAL MODULE: ./node_modules/@use-gesture/react/dist/use-gesture-react.esm.js
var use_gesture_react_esm = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/fields-step/ColumnDragState.tsx

// state machine to represent the steps taken to assign a column to target field:
// - pick column (drag start or keyboard select)
// - hover over field (while dragging only)
// - assign picked column to field (drag end)
// @todo move the useDrag setup outside as well?
function useColumnDragState(onColumnAssignment) {
    // wrap in ref to avoid re-triggering effects
    const onColumnAssignmentRef = Object(external_react_["useRef"])(onColumnAssignment);
    onColumnAssignmentRef.current = onColumnAssignment;
    const [dragState, setDragState] = Object(external_react_["useState"])(null);
    const dragStartHandler = Object(external_react_["useCallback"])((column, startFieldName, initialClientRect) => {
        // create new pointer-based drag state
        setDragState({
            pointerStartInfo: {
                initialClientRect
            },
            column,
            dropFieldName: startFieldName !== undefined ? startFieldName : null,
            updateListeners: []
        });
    }, []);
    const dragMoveHandler = Object(external_react_["useCallback"])((movement) => {
        // @todo figure out a cleaner event stream solution
        if (dragState) {
            const listeners = dragState.updateListeners;
            for (const listener of listeners) {
                listener(movement);
            }
        }
    }, [dragState]);
    const dragEndHandler = Object(external_react_["useCallback"])(() => {
        setDragState(null);
        if (dragState) {
            onColumnAssignmentRef.current(dragState.column, dragState.dropFieldName);
        }
    }, [dragState]);
    const columnSelectHandler = Object(external_react_["useCallback"])((column) => {
        setDragState((prev) => {
            // toggle off if needed
            if (prev && prev.column === column) {
                return null;
            }
            return {
                pointerStartInfo: null,
                column,
                dropFieldName: null,
                updateListeners: []
            };
        });
    }, []);
    const dragHoverHandler = Object(external_react_["useCallback"])((fieldName, isOn) => {
        setDragState((prev) => {
            if (!prev) {
                return prev;
            }
            if (isOn) {
                // set the new drop target
                return Object.assign(Object.assign({}, prev), { dropFieldName: fieldName });
            }
            else if (prev.dropFieldName === fieldName) {
                // clear drop target if we are still the current one
                return Object.assign(Object.assign({}, prev), { dropFieldName: null });
            }
            // no changes by default
            return prev;
        });
    }, []);
    const assignHandler = Object(external_react_["useCallback"])((fieldName) => {
        // clear active drag state
        setDragState(null);
        if (dragState) {
            onColumnAssignmentRef.current(dragState.column, fieldName);
        }
    }, [dragState]);
    const unassignHandler = Object(external_react_["useCallback"])((column) => {
        // clear active drag state
        setDragState(null);
        onColumnAssignmentRef.current(column, null);
    }, []);
    return {
        dragState,
        dragStartHandler,
        dragMoveHandler,
        dragEndHandler,
        dragHoverHandler,
        columnSelectHandler,
        assignHandler,
        unassignHandler
    };
}

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(9);

// EXTERNAL MODULE: ./src/components/fields-step/ColumnDragCard.scss
var ColumnDragCard = __webpack_require__(19);

// CONCATENATED MODULE: ./src/components/fields-step/ColumnDragCard.tsx




// @todo sort out "grabbing" cursor state (does not work with pointer-events:none)
const ColumnDragCard_ColumnDragCard = ({ hasHeaders, column: optionalColumn, rowCount = PREVIEW_ROW_COUNT, hasError, isAssigned, isShadow, isDraggable, isDragged, isDropIndicator }) => {
    const isDummy = !optionalColumn;
    const column = Object(external_react_["useMemo"])(() => optionalColumn || {
        index: -1,
        code: '',
        header: hasHeaders ? '' : undefined,
        values: [...new Array(PREVIEW_ROW_COUNT)].map(() => '')
    }, [optionalColumn, hasHeaders]);
    const headerValue = column.header;
    const dataValues = column.values.slice(0, headerValue === undefined ? rowCount : rowCount - 1);
    const l10n = useLocale('fieldsStep');
    return (
    // not changing variant dynamically because it causes a height jump
    external_react_default.a.createElement("div", { key: isDummy || isShadow ? 1 : isDropIndicator ? 2 : 0, className: "CSVImporter_ColumnDragCard", "data-dummy": !!isDummy, "data-error": !!hasError, "data-shadow": !!isShadow, "data-draggable": !!isDraggable, "data-dragged": !!isDragged, "data-drop-indicator": !!isDropIndicator },
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragCard__cardHeader" },
            isDummy ? (external_react_default.a.createElement("var", { role: "text" }, l10n.columnCardDummyHeader)) : (external_react_default.a.createElement("var", { role: "text" }, l10n.getColumnCardHeader(column.code))),
            isDummy || isAssigned ? '\u00a0' : external_react_default.a.createElement("b", { "aria-hidden": true }, column.code)),
        headerValue !== undefined ? (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragCard__cardValue", "data-header": true }, headerValue || '\u00a0')) : null,
        external_react_default.a.createElement("div", { role: "text" }, dataValues.map((value, valueIndex) => (external_react_default.a.createElement("div", { key: valueIndex, className: "CSVImporter_ColumnDragCard__cardValue" }, value || '\u00a0'))))));
};

// EXTERNAL MODULE: ./src/components/fields-step/ColumnDragObject.scss
var ColumnDragObject = __webpack_require__(20);

// CONCATENATED MODULE: ./src/components/fields-step/ColumnDragObject.tsx




const ColumnDragObject_ColumnDragObject = ({ dragState }) => {
    const referenceBoxRef = Object(external_react_["useRef"])(null);
    // the dragged box is wrapped in a no-events overlay to clip against screen edges
    const dragBoxRef = Object(external_react_["useRef"])(null);
    const dragObjectPortal = dragState && dragState.pointerStartInfo
        ? Object(external_react_dom_["createPortal"])(external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragObject__overlay" },
            external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragObject__positioner", ref: dragBoxRef },
                external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragObject__holder" },
                    external_react_default.a.createElement(ColumnDragCard_ColumnDragCard, { column: dragState.column, isDragged: true })))), document.body)
        : null;
    // set up initial position when pointer-based gesture is started
    const pointerStartInfo = dragState && dragState.pointerStartInfo;
    Object(external_react_["useLayoutEffect"])(() => {
        // ignore non-pointer drag states
        if (!pointerStartInfo || !dragBoxRef.current) {
            return;
        }
        // place based on initial position + size relative to viewport overlay
        const rect = pointerStartInfo.initialClientRect;
        dragBoxRef.current.style.left = `${rect.left}px`;
        dragBoxRef.current.style.top = `${rect.top}px`;
        dragBoxRef.current.style.width = `${rect.width}px`;
        dragBoxRef.current.style.height = `${rect.height}px`;
        // copy known cascaded font style from main content into portal content
        // @todo consider other text style properties?
        if (referenceBoxRef.current) {
            const computedStyle = window.getComputedStyle(referenceBoxRef.current);
            dragBoxRef.current.style.fontFamily = computedStyle.fontFamily;
            dragBoxRef.current.style.fontSize = computedStyle.fontSize;
            dragBoxRef.current.style.fontWeight = computedStyle.fontWeight;
            dragBoxRef.current.style.fontStyle = computedStyle.fontStyle;
            dragBoxRef.current.style.letterSpacing = computedStyle.letterSpacing;
        }
    }, [pointerStartInfo]);
    // subscribe to live position updates without state changes
    Object(external_react_["useLayoutEffect"])(() => {
        if (dragState) {
            const updateListener = (movement) => {
                if (!dragBoxRef.current)
                    return;
                // update the visible offset relative to starting position
                const [x, y] = movement;
                dragBoxRef.current.style.transform = `translate(${x}px, ${y}px)`;
            };
            dragState.updateListeners.push(updateListener);
            // clean up listener
            return () => {
                const removeIndex = dragState.updateListeners.indexOf(updateListener);
                if (removeIndex !== -1) {
                    dragState.updateListeners.splice(removeIndex, 1);
                }
            };
        }
    }, [dragState]);
    return external_react_default.a.createElement("div", { ref: referenceBoxRef }, dragObjectPortal);
};

// EXTERNAL MODULE: ./src/components/fields-step/ColumnDragSourceArea.scss
var ColumnDragSourceArea = __webpack_require__(21);

// CONCATENATED MODULE: ./src/components/fields-step/ColumnDragSourceArea.tsx





const DEFAULT_PAGE_SIZE = 5; // fraction of 10 for easier counting
// @todo readable status text if not mouse-drag
const SourceBox = ({ column, fieldAssignments, dragState, eventBinder, onSelect, onUnassign }) => {
    const isDragged = dragState ? column === dragState.column : false;
    const isAssigned = Object(external_react_["useMemo"])(() => Object.keys(fieldAssignments).some((fieldName) => fieldAssignments[fieldName] === column.index), [fieldAssignments, column]);
    const eventHandlers = Object(external_react_["useMemo"])(() => eventBinder(column), [
        eventBinder,
        column
    ]);
    const l10n = useLocale('fieldsStep');
    return (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__box" },
        external_react_default.a.createElement("div", Object.assign({}, (isAssigned ? {} : eventHandlers), { style: { touchAction: 'none' } }),
            external_react_default.a.createElement(ColumnDragCard_ColumnDragCard, { column: column, isAssigned: isAssigned, isShadow: isDragged || isAssigned, isDraggable: !dragState && !isDragged && !isAssigned })),
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__boxAction" }, isAssigned ? (external_react_default.a.createElement(IconButton_IconButton, { key: "clear" // key-prop helps clear focus on click
            , label: l10n.clearAssignmentTooltip, small: true, type: "replay", onClick: () => {
                onUnassign(column);
            } })) : (external_react_default.a.createElement(IconButton_IconButton, { key: "dragSelect" // key-prop helps clear focus on click
            , focusOnly: true, label: dragState && dragState.column === column
                ? l10n.unselectColumnTooltip
                : l10n.selectColumnTooltip, small: true, type: "back", onClick: () => {
                onSelect(column);
            } })))));
};
// @todo current page indicator (dots)
const ColumnDragSourceArea_ColumnDragSourceArea = ({ columns, columnPageSize, fieldAssignments, dragState, eventBinder, onSelect, onUnassign }) => {
    // sanitize page size setting
    const pageSize = Math.round(Math.max(1, columnPageSize !== null && columnPageSize !== void 0 ? columnPageSize : DEFAULT_PAGE_SIZE));
    // track pagination state (resilient to page size changes)
    const [pageStart, setPageStart] = Object(external_react_["useState"])(0);
    const [pageChanged, setPageChanged] = Object(external_react_["useState"])(false);
    const page = Math.floor(pageStart / pageSize); // round down in case page size changes
    const pageCount = Math.ceil(columns.length / pageSize);
    // display page items and fill up with dummy divs up to pageSize
    const pageContents = columns
        .slice(page * pageSize, (page + 1) * pageSize)
        .map((column, columnIndex) => (external_react_default.a.createElement(SourceBox, { key: columnIndex, column: column, fieldAssignments: fieldAssignments, dragState: dragState, eventBinder: eventBinder, onSelect: onSelect, onUnassign: onUnassign })));
    while (pageContents.length < pageSize) {
        pageContents.push(external_react_default.a.createElement("div", { key: pageContents.length, className: "CSVImporter_ColumnDragSourceArea__pageFiller" }));
    }
    const l10n = useLocale('fieldsStep');
    return (external_react_default.a.createElement("section", { className: "CSVImporter_ColumnDragSourceArea", "aria-label": l10n.dragSourceAreaCaption },
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__control" },
            external_react_default.a.createElement(IconButton_IconButton, { label: l10n.previousColumnsTooltip, type: "back", disabled: page === 0, onClick: () => {
                    setPageStart((prev) => Math.max(0, Math.floor(prev / pageSize) - 1) * pageSize);
                    setPageChanged(true);
                } })),
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__page" },
            dragState && !dragState.pointerStartInfo ? (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__pageIndicator", role: "status" }, l10n.getDragSourceActiveStatus(dragState.column.code))) : (
            // show page number if needed (and treat as status role if it has changed)
            // @todo changing role to status does not seem to work
            pageCount > 1 && (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__pageIndicator", role: pageChanged ? 'status' : 'text' }, l10n.getDragSourcePageIndicator(page + 1, pageCount)))),
            pageContents),
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragSourceArea__control" },
            external_react_default.a.createElement(IconButton_IconButton, { label: l10n.nextColumnsTooltip, type: "forward", disabled: page >= pageCount - 1, onClick: () => {
                    setPageStart((prev) => Math.min(pageCount - 1, Math.floor(prev / pageSize) + 1) *
                        pageSize);
                } }))));
};

// EXTERNAL MODULE: ./src/components/fields-step/ColumnDragTargetArea.scss
var ColumnDragTargetArea = __webpack_require__(22);

// CONCATENATED MODULE: ./src/components/fields-step/ColumnDragTargetArea.tsx





const TargetBox = ({ field, hasHeaders, flexBasis, touched, assignedColumn, dragState, eventBinder, onHover, onAssign, onUnassign, fieldId }) => {
    // respond to hover events when there is active mouse drag happening
    // (not keyboard-emulated one)
    const containerRef = Object(external_react_["useRef"])(null);
    // if this field is the current highlighted drop target,
    // get the originating column data for display
    const sourceColumn = dragState && dragState.dropFieldName === field.name
        ? dragState.column
        : null;
    // see if currently assigned column is being dragged again
    const isReDragged = dragState ? dragState.column === assignedColumn : false;
    // drag start handlers for columns that can be re-dragged (i.e. are assigned)
    const dragStartHandlers = Object(external_react_["useMemo"])(() => assignedColumn && !isReDragged
        ? eventBinder(assignedColumn, field.name)
        : {}, [eventBinder, assignedColumn, isReDragged, field.name]);
    const valueContents = Object(external_react_["useMemo"])(() => {
        if (sourceColumn) {
            return external_react_default.a.createElement(ColumnDragCard_ColumnDragCard, { column: sourceColumn, isDropIndicator: true });
        }
        if (assignedColumn) {
            return (external_react_default.a.createElement(ColumnDragCard_ColumnDragCard, { column: assignedColumn, isShadow: isReDragged, isDraggable: !isReDragged }));
        }
        const hasError = touched && !field.isOptional;
        return external_react_default.a.createElement(ColumnDragCard_ColumnDragCard, { hasHeaders: hasHeaders, hasError: hasError });
    }, [hasHeaders, field, touched, assignedColumn, sourceColumn, isReDragged]);
    const l10n = useLocale('fieldsStep');
    // @todo mouse cursor changes to reflect draggable state
    return (external_react_default.a.createElement("section", { className: "CSVImporter_ColumnDragTargetArea__box", "aria-label": field.isOptional
            ? l10n.getDragTargetOptionalCaption(field.label)
            : l10n.getDragTargetRequiredCaption(field.label), ref: containerRef, style: { flexBasis }, onPointerEnter: () => onHover(field.name, true), onPointerLeave: () => onHover(field.name, false), id: fieldId },
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragTargetArea__boxLabel", "aria-hidden": true },
            field.label,
            field.isOptional ? null : external_react_default.a.createElement("b", null, "*")),
        external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragTargetArea__boxValue" },
            !sourceColumn && !assignedColumn && (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragTargetArea__boxPlaceholderHelp", "aria-hidden": true }, l10n.dragTargetPlaceholder)),
            external_react_default.a.createElement("div", Object.assign({}, dragStartHandlers, { style: { touchAction: 'none' } }), valueContents),
            dragState && !dragState.pointerStartInfo ? (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragTargetArea__boxValueAction" },
                external_react_default.a.createElement(IconButton_IconButton, { label: l10n.getDragTargetAssignTooltip(dragState.column.code), small: true, type: "forward", onClick: () => onAssign(field.name) }))) : (!sourceColumn &&
                assignedColumn && (external_react_default.a.createElement("div", { className: "CSVImporter_ColumnDragTargetArea__boxValueAction" },
                external_react_default.a.createElement(IconButton_IconButton, { label: l10n.dragTargetClearTooltip, small: true, type: "close", onClick: () => onUnassign(assignedColumn) })))))));
};
const ColumnDragTargetArea_ColumnDragTargetArea = ({ hasHeaders, fields, columns, fieldRowSize, fieldTouched, fieldAssignments, dragState, eventBinder, onHover, onAssign, onUnassign }) => {
    const l10n = useLocale('fieldsStep');
    // override flex basis for unusual situations
    const flexBasis = fieldRowSize ? `${100 / fieldRowSize}%` : undefined;
    return (external_react_default.a.createElement("section", { className: "CSVImporter_ColumnDragTargetArea", "aria-label": l10n.dragTargetAreaCaption }, fields.map((field) => {
        const assignedColumnIndex = fieldAssignments[field.name];
        return (external_react_default.a.createElement(TargetBox, { key: field.name, field: field, flexBasis: flexBasis, touched: fieldTouched[field.name], hasHeaders: hasHeaders, assignedColumn: assignedColumnIndex !== undefined
                ? columns[assignedColumnIndex]
                : null, dragState: dragState, eventBinder: eventBinder, onHover: onHover, onAssign: onAssign, onUnassign: onUnassign, fieldId: field.name }));
    })));
};

// CONCATENATED MODULE: ./src/components/fields-step/FieldsStep.tsx









const FieldsStep = ({ fields, displayColumnPageSize, displayFieldRowSize, fileState, prevState, onChange, onAccept, onCancel }) => {
    const l10n = useLocale('fieldsStep');
    const onChangeRef = Object(external_react_["useRef"])(onChange);
    onChangeRef.current = onChange;
    const columns = Object(external_react_["useMemo"])(() => generatePreviewColumns(fileState.firstRows, fileState.hasHeaders).map((item) => (Object.assign(Object.assign({}, item), { code: generateColumnCode(item.index) }))), [fileState]);
    // field assignments state
    const [fieldAssignments, setFieldAssignments] = Object(external_react_["useState"])(prevState ? prevState.fieldAssignments : {});
    // make sure there are no extra fields
    Object(external_react_["useEffect"])(() => {
        const removedFieldNames = Object.keys(fieldAssignments).filter((existingFieldName) => !fields.some((field) => field.name === existingFieldName));
        if (removedFieldNames.length > 0) {
            // @todo put everything inside this setter
            setFieldAssignments((prev) => {
                const copy = Object.assign({}, prev);
                removedFieldNames.forEach((fieldName) => {
                    delete copy[fieldName];
                });
                return copy;
            });
        }
    }, [fields, fieldAssignments]);
    // for any field, try to find an automatic match from known column names
    Object(external_react_["useEffect"])(() => {
        var _a;
        // prep insensitive/fuzzy match stems for known columns
        const columnStemMap = {};
        for (const column of columns) {
            const stem = ((_a = column.header) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase()) || undefined;
            if (stem) {
                columnStemMap[stem] = column.index;
            }
        }
        setFieldAssignments((prev) => {
            // prepare a lookup of already assigned columns
            const assignedColumns = columns.map(() => false);
            for (const fieldName of Object.keys(prev)) {
                const assignedColumnIndex = prev[fieldName];
                if (assignedColumnIndex !== undefined) {
                    assignedColumns[assignedColumnIndex] = true;
                }
            }
            // augment with new auto-assignments
            const copy = Object.assign({}, prev);
            for (const field of fields) {
                // ignore if field is already assigned
                if (copy[field.name] !== undefined) {
                    continue;
                }
                // find by field stem
                const fieldLabelStem = field.label.trim().toLowerCase(); // @todo consider normalizing other whitespace/non-letters
                const matchingColumnIndex = columnStemMap[fieldLabelStem];
                // ignore if equivalent column not found
                if (matchingColumnIndex === undefined) {
                    continue;
                }
                // ignore if column is already assigned
                if (assignedColumns[matchingColumnIndex]) {
                    continue;
                }
                // auto-assign the column
                copy[field.name] = matchingColumnIndex;
            }
            return copy;
        });
    }, [fields, columns]);
    // track which fields need to show validation warning
    const [fieldTouched, setFieldTouched] = Object(external_react_["useState"])({});
    const [validationError, setValidationError] = Object(external_react_["useState"])(null);
    // clean up touched field map when dynamic field list changes
    Object(external_react_["useEffect"])(() => {
        setFieldTouched((prev) => {
            const result = {};
            for (const field of fields) {
                result[field.name] = prev[field.name];
            }
            return result;
        });
    }, [fields]);
    // abstract mouse drag/keyboard state tracker
    const { dragState, dragStartHandler, dragMoveHandler, dragEndHandler, dragHoverHandler, columnSelectHandler, assignHandler, unassignHandler } = useColumnDragState((column, fieldName) => {
        // update field assignment map state
        setFieldAssignments((prev) => {
            const currentFieldName = Object.keys(prev).find((fieldName) => prev[fieldName] === column.index);
            // see if there is nothing to do
            if (currentFieldName === undefined && fieldName === null) {
                return prev;
            }
            const copy = Object.assign({}, prev);
            // ensure dropped column does not show up elsewhere
            if (currentFieldName) {
                delete copy[currentFieldName];
            }
            // set new field column
            if (fieldName !== null) {
                copy[fieldName] = column.index;
            }
            return copy;
        });
        // mark for validation display
        if (fieldName) {
            setFieldTouched((prev) => {
                if (prev[fieldName]) {
                    return prev;
                }
                return Object.assign(Object.assign({}, prev), { [fieldName]: true });
            });
        }
    });
    // Add ref to store animation frame ID
    const scrollAnimationRef = Object(external_react_["useRef"])();
    // Add cleanup effect
    Object(external_react_["useEffect"])(() => {
        return () => {
            if (scrollAnimationRef.current) {
                cancelAnimationFrame(scrollAnimationRef.current);
            }
        };
    }, []);
    const bindDrag = Object(use_gesture_react_esm["useDrag"])(({ first, last, movement, xy, args, currentTarget }) => {
        if (first) {
            const [column, startFieldName] = args;
            const initialClientRect = currentTarget instanceof HTMLElement
                ? currentTarget.getBoundingClientRect()
                : new DOMRect(xy[0], xy[1], 0, 0);
            dragStartHandler(column, startFieldName, initialClientRect);
        }
        else if (last) {
            dragEndHandler();
            // Cancel any ongoing scroll animation
            if (scrollAnimationRef.current) {
                cancelAnimationFrame(scrollAnimationRef.current);
            }
        }
        else {
            dragMoveHandler(movement);
            // Cancel any existing animation frame
            if (scrollAnimationRef.current) {
                cancelAnimationFrame(scrollAnimationRef.current);
            }
            // Add auto-scrolling when near container edges
            const container = document.querySelector('.CSVImporter_Importer');
            if (container) {
                const rect = container.getBoundingClientRect();
                const scrollSpeed = 3;
                const scrollThreshold = 50;
                const scroll = () => {
                    if (xy[1] < rect.top + scrollThreshold) {
                        container.scrollTop -= scrollSpeed;
                        scrollAnimationRef.current = requestAnimationFrame(scroll);
                    }
                    else if (xy[1] > rect.bottom - scrollThreshold) {
                        container.scrollTop += scrollSpeed;
                        scrollAnimationRef.current = requestAnimationFrame(scroll);
                    }
                };
                scroll();
            }
        }
    }, {
        pointer: { capture: false }
    });
    // when dragging, set root-level user-select:none to prevent text selection, see Importer.scss
    // (done via class toggle to avoid interfering with any other dynamic style changes)
    Object(external_react_["useEffect"])(() => {
        if (dragState) {
            document.body.classList.add('CSVImporter_dragging');
        }
        else {
            // remove text selection prevention after a delay (otherwise on iOS it still selects something)
            const timeoutId = setTimeout(() => {
                document.body.classList.remove('CSVImporter_dragging');
            }, 200);
            return () => {
                // if another drag state comes along then cancel our delay and just clean up class right away
                clearTimeout(timeoutId);
                document.body.classList.remove('CSVImporter_dragging');
            };
        }
    }, [dragState]);
    // notify of current state
    Object(external_react_["useEffect"])(() => {
        onChangeRef.current({ fieldAssignments: Object.assign({}, fieldAssignments) });
    }, [fieldAssignments]);
    return (external_react_default.a.createElement(ImporterFrame_ImporterFrame, { fileName: fileState.file.name, subtitle: l10n.stepSubtitle, error: validationError, onCancel: onCancel, onNext: () => {
            // mark all fields as touched (to show all the errors now)
            const fullTouchedMap = {};
            fields.forEach((field) => {
                fullTouchedMap[field.name] = true;
            });
            setFieldTouched(fullTouchedMap);
            // submit if validation succeeds
            const hasUnassignedRequired = fields.some((field) => !field.isOptional && fieldAssignments[field.name] === undefined);
            if (!hasUnassignedRequired) {
                onAccept();
            }
            else {
                setValidationError(l10n.requiredFieldsError);
            }
        }, nextLabel: l10n.nextButton },
        external_react_default.a.createElement(ColumnDragSourceArea_ColumnDragSourceArea, { columns: columns, columnPageSize: displayColumnPageSize, fieldAssignments: fieldAssignments, dragState: dragState, eventBinder: bindDrag, onSelect: columnSelectHandler, onUnassign: unassignHandler }),
        external_react_default.a.createElement(ColumnDragTargetArea_ColumnDragTargetArea, { hasHeaders: fileState.hasHeaders, fieldRowSize: displayFieldRowSize, fields: fields, columns: columns, fieldTouched: fieldTouched, fieldAssignments: fieldAssignments, dragState: dragState, eventBinder: bindDrag, onHover: dragHoverHandler, onAssign: assignHandler, onUnassign: unassignHandler }),
        external_react_default.a.createElement(ColumnDragObject_ColumnDragObject, { dragState: dragState })));
};

// EXTERNAL MODULE: ./src/components/ProgressDisplay.scss
var ProgressDisplay = __webpack_require__(23);

// CONCATENATED MODULE: ./src/components/ProgressDisplay.tsx





// compute actual UTF-8 bytes used by a string
// (inspired by https://stackoverflow.com/questions/10576905/how-to-convert-javascript-unicode-notation-code-to-utf-8)
function countUTF8Bytes(item) {
    // re-encode into UTF-8
    const escaped = encodeURIComponent(item);
    // convert byte escape sequences into single characters
    const normalized = escaped.replace(/%\d\d/g, '_');
    return normalized.length;
}
function ProgressDisplay_ProgressDisplay({ fileState, fieldsState, externalPreview, dataHandler, onStart, onComplete, onRestart, onClose, isGuestImport, guestImportScreen }) {
    const [progressCount, setProgressCount] = Object(external_react_["useState"])(0);
    const [isComplete, setIsComplete] = Object(external_react_["useState"])(false);
    const [error, setError] = Object(external_react_["useState"])(null);
    const [isDismissed, setIsDismissed] = Object(external_react_["useState"])(false); // prevents double-clicking finish
    // info object exposed to the progress callbacks
    const importInfo = Object(external_react_["useMemo"])(() => {
        const fieldList = Object.keys(fieldsState.fieldAssignments);
        const columnSparseList = [];
        fieldList.forEach((field) => {
            const col = fieldsState.fieldAssignments[field];
            if (col !== undefined) {
                columnSparseList[col] = field;
            }
        });
        return {
            file: fileState.file,
            preview: externalPreview,
            fields: fieldList,
            columnFields: [...columnSparseList]
        };
    }, [fileState, fieldsState, externalPreview]);
    // estimate number of rows
    const estimatedRowCount = Object(external_react_["useMemo"])(() => {
        // sum up sizes of all the parsed preview rows and get estimated average
        const totalPreviewRowBytes = fileState.firstRows.reduce((prevCount, row) => {
            const rowBytes = row.reduce((prev, item) => {
                return prev + countUTF8Bytes(item) + 1; // add a byte for separator or newline
            }, 0);
            return prevCount + rowBytes;
        }, 0);
        const averagePreviewRowSize = totalPreviewRowBytes / fileState.firstRows.length;
        // divide file size by estimated row size (or fall back to a sensible amount)
        return averagePreviewRowSize > 1
            ? fileState.file.size / averagePreviewRowSize
            : 100;
    }, [fileState]);
    // notify on start of processing
    // (separate effect in case of errors)
    const onStartRef = Object(external_react_["useRef"])(onStart); // wrap in ref to avoid re-triggering (only first instance is needed)
    Object(external_react_["useEffect"])(() => {
        if (onStartRef.current) {
            onStartRef.current(importInfo);
        }
    }, [importInfo]);
    // notify on end of processing
    // (separate effect in case of errors)
    const onCompleteRef = Object(external_react_["useRef"])(onComplete); // wrap in ref to avoid re-triggering
    onCompleteRef.current = onComplete;
    Object(external_react_["useEffect"])(() => {
        if (isComplete && onCompleteRef.current) {
            onCompleteRef.current(importInfo);
        }
    }, [importInfo, isComplete]);
    // ensure status gets focus when complete, in case status role is not read out
    const statusRef = Object(external_react_["useRef"])(null);
    Object(external_react_["useEffect"])(() => {
        if ((isComplete || error) && statusRef.current) {
            statusRef.current.focus();
        }
    }, [isComplete, error]);
    // trigger processing from an effect to mitigate React 18 double-run in dev
    const [ready, setReady] = Object(external_react_["useState"])(false);
    Object(external_react_["useEffect"])(() => {
        setReady(true);
    }, []);
    // perform main async parse
    const dataHandlerRef = Object(external_react_["useRef"])(dataHandler); // wrap in ref to avoid re-triggering
    const asyncLockRef = Object(external_react_["useRef"])(0);
    Object(external_react_["useEffect"])(() => {
        // avoid running on first render due to React 18 double-run
        if (!ready) {
            return;
        }
        const oplock = asyncLockRef.current;
        processFile(Object.assign(Object.assign({}, fileState), { fieldAssignments: fieldsState.fieldAssignments }), (deltaCount) => {
            // ignore if stale
            if (oplock !== asyncLockRef.current) {
                return; // @todo signal abort
            }
            setProgressCount((prev) => prev + deltaCount);
        }, dataHandlerRef.current).then(() => {
            // ignore if stale
            if (oplock !== asyncLockRef.current) {
                return;
            }
            setIsComplete(true);
        }, (error) => {
            // ignore if stale
            if (oplock !== asyncLockRef.current) {
                return;
            }
            setError(error);
        });
        return () => {
            // invalidate current oplock on change or unmount
            asyncLockRef.current += 1;
        };
    }, [ready, fileState, fieldsState]);
    // simulate asymptotic progress percentage
    const progressPercentage = Object(external_react_["useMemo"])(() => {
        if (isComplete) {
            return 100;
        }
        // inputs hand-picked so that correctly estimated total is about 75% of the bar
        const progressPower = 2.5 * (progressCount / estimatedRowCount);
        const progressLeft = Math.pow(0.5, progressPower);
        // convert to .1 percent precision for smoother bar display
        return Math.floor(1000 - 1000 * progressLeft) / 10;
    }, [estimatedRowCount, progressCount, isComplete]);
    const l10n = useLocale('progressStep');
    return (external_react_default.a.createElement(ImporterFrame_ImporterFrame, { fileName: fileState.file.name, subtitle: l10n.stepSubtitle, error: error && (error.message || String(error)), secondaryDisabled: !isComplete || isDismissed, secondaryLabel: onRestart && onClose ? l10n.uploadMoreButton : undefined, onSecondary: onRestart && onClose ? onRestart : undefined, nextDisabled: !isComplete || isDismissed, nextLabel: !!(onClose || onRestart) &&
            (onClose ? l10n.finishButton : l10n.uploadMoreButton), onNext: () => {
            if (onClose) {
                setIsDismissed(true);
                onClose(importInfo);
            }
            else if (onRestart) {
                onRestart();
            }
        } },
        external_react_default.a.createElement("div", { className: "CSVImporter_ProgressDisplay" },
            (isComplete && !isGuestImport) || error ? (external_react_default.a.createElement("div", { className: "CSVImporter_ProgressDisplay__status", role: "status", tabIndex: -1, ref: statusRef }, error ? l10n.statusError : l10n.statusComplete)) : (external_react_default.a.createElement("div", { className: "CSVImporter_ProgressDisplay__status -pending", role: "status" }, l10n.statusPending)),
            isGuestImport && guestImportScreen ? (guestImportScreen) : (external_react_default.a.createElement(external_react_default.a.Fragment, null,
                external_react_default.a.createElement("div", { className: "CSVImporter_ProgressDisplay__count", role: "text" },
                    external_react_default.a.createElement("var", null, l10n.processedRowsLabel),
                    " ",
                    progressCount),
                external_react_default.a.createElement("div", { className: "CSVImporter_ProgressDisplay__progressBar" },
                    external_react_default.a.createElement("div", { className: "CSVImporter_ProgressDisplay__progressBarIndicator", style: { width: `${progressPercentage}%` } })))))));
}

// CONCATENATED MODULE: ./src/components/ImporterField.tsx

const FieldDefinitionContext = external_react_default.a.createContext(null);
// internal helper to allow user code to provide field definitions
function useFieldDefinitions() {
    const [fields, setFields] = Object(external_react_["useState"])([]);
    const userFieldContentWrapper = (content) => (external_react_default.a.createElement(FieldDefinitionContext.Provider, { value: setFields }, content));
    return [fields, userFieldContentWrapper];
}
// defines a field to be filled from file column during import
const ImporterField = ({ name, label, optional }) => {
    // make unique internal ID (this is never rendered in HTML and does not affect SSR)
    const instanceId = Object(external_react_["useMemo"])(() => Symbol('internal unique field ID'), []);
    const fieldSetter = Object(external_react_["useContext"])(FieldDefinitionContext);
    // update central list as needed
    Object(external_react_["useEffect"])(() => {
        if (!fieldSetter) {
            console.error('importer field must be a child of importer'); // @todo
            return;
        }
        fieldSetter((prev) => {
            const copy = [...prev];
            const existingIndex = copy.findIndex((item) => item.instanceId === instanceId);
            // add or update the field definition instance in-place
            // (using internal field instance ID helps gracefully tolerate duplicates, renames, etc)
            const newField = {
                instanceId,
                name,
                label,
                isOptional: !!optional
            };
            if (existingIndex === -1) {
                copy.push(newField);
            }
            else {
                copy[existingIndex] = newField;
            }
            return copy;
        });
    }, [instanceId, fieldSetter, name, label, optional]);
    // on component unmount, remove this field from list by ID
    Object(external_react_["useEffect"])(() => {
        if (!fieldSetter) {
            console.error('importer field must be a child of importer'); // @todo
            return;
        }
        return () => {
            fieldSetter((prev) => prev.filter((field) => field.instanceId !== instanceId));
        };
    }, [instanceId, fieldSetter]);
    return null;
};

// EXTERNAL MODULE: ./src/components/Importer.scss
var Importer = __webpack_require__(24);

// CONCATENATED MODULE: ./src/components/Importer.tsx
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





// re-export from a central spot





function Importer_Importer(props) {
    const { dataHandler, processChunk, defaultNoHeader, assumeNoHeaders, restartable, displayFieldRowSize, displayColumnPageSize, onStart, onComplete, onClose, children: content, locale: userLocale, isGuestImport, guestImportScreen } = props, customPapaParseConfig = __rest(props, ["dataHandler", "processChunk", "defaultNoHeader", "assumeNoHeaders", "restartable", "displayFieldRowSize", "displayColumnPageSize", "onStart", "onComplete", "onClose", "children", "locale", "isGuestImport", "guestImportScreen"]);
    // helper to combine our displayed content and the user code that provides field definitions
    const [fields, userFieldContentWrapper] = useFieldDefinitions();
    const [fileState, setFileState] = Object(external_react_["useState"])(null);
    const [fileAccepted, setFileAccepted] = Object(external_react_["useState"])(false);
    const [fieldsState, setFieldsState] = Object(external_react_["useState"])(null);
    const [fieldsAccepted, setFieldsAccepted] = Object(external_react_["useState"])(false);
    // reset field assignments when file changes
    const activeFile = fileState && fileState.file;
    Object(external_react_["useEffect"])(() => {
        if (activeFile) {
            setFieldsState(null);
        }
    }, [activeFile]);
    const externalPreview = Object(external_react_["useMemo"])(() => {
        // generate stable externally-visible data objects
        const externalColumns = fileState &&
            generatePreviewColumns(fileState.firstRows, fileState.hasHeaders);
        return (fileState &&
            externalColumns && {
            rawData: fileState.firstChunk,
            columns: externalColumns,
            skipHeaders: !fileState.hasHeaders,
            parseWarning: fileState.parseWarning
        });
    }, [fileState]);
    // fall back to enUS if no locale provided
    const locale = userLocale !== null && userLocale !== void 0 ? userLocale : enUS;
    if (!fileAccepted || fileState === null || externalPreview === null) {
        return (external_react_default.a.createElement(LocaleContext.Provider, { value: locale },
            external_react_default.a.createElement("div", { className: "CSVImporter_Importer" },
                external_react_default.a.createElement(FileStep_FileStep, { customConfig: customPapaParseConfig, defaultNoHeader: defaultNoHeader !== null && defaultNoHeader !== void 0 ? defaultNoHeader : assumeNoHeaders, prevState: fileState, onChange: (parsedPreview) => {
                        setFileState(parsedPreview);
                    }, onAccept: () => {
                        setFileAccepted(true);
                    } }))));
    }
    if (!fieldsAccepted || fieldsState === null) {
        return (external_react_default.a.createElement(LocaleContext.Provider, { value: locale },
            external_react_default.a.createElement("div", { className: "CSVImporter_Importer" },
                external_react_default.a.createElement(FieldsStep, { fileState: fileState, fields: fields, prevState: fieldsState, displayFieldRowSize: displayFieldRowSize, displayColumnPageSize: displayColumnPageSize, onChange: (state) => {
                        setFieldsState(state);
                    }, onAccept: () => {
                        setFieldsAccepted(true);
                    }, onCancel: () => {
                        // keep existing preview data and assignments
                        setFileAccepted(false);
                    } }),
                userFieldContentWrapper(
                // render the provided child content that defines the fields
                typeof content === 'function'
                    ? content({
                        file: fileState && fileState.file,
                        preview: externalPreview
                    })
                    : content))));
    }
    return (external_react_default.a.createElement(LocaleContext.Provider, { value: locale },
        external_react_default.a.createElement("div", { className: "CSVImporter_Importer" },
            external_react_default.a.createElement(ProgressDisplay_ProgressDisplay, { fileState: fileState, fieldsState: fieldsState, externalPreview: externalPreview, 
                // @todo remove assertion after upgrading to TS 4.1+
                dataHandler: dataHandler !== null && dataHandler !== void 0 ? dataHandler : processChunk, onStart: onStart, onRestart: restartable
                    ? () => {
                        // reset all state
                        setFileState(null);
                        setFileAccepted(false);
                        setFieldsState(null);
                        setFieldsAccepted(false);
                    }
                    : undefined, onComplete: onComplete, onClose: onClose, isGuestImport: isGuestImport, guestImportScreen: guestImportScreen }))));
}

// CONCATENATED MODULE: ./src/index.ts





/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map