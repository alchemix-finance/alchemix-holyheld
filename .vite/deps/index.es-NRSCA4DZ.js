import {
  require_events
} from "./chunk-OFLUJM4P.js";
import {
  __commonJS,
  __esm,
  __export,
  __reExport,
  __require,
  __toCommonJS,
  __toESM
} from "./chunk-256EKJAK.js";

// node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d4, b5) {
  extendStatics(d4, b5);
  function __() {
    this.constructor = d4;
  }
  d4.prototype = b5 === null ? Object.create(b5) : (__.prototype = b5.prototype, new __());
}
function __rest(s3, e2) {
  var t = {};
  for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5) && e2.indexOf(p5) < 0)
    t[p5] = s3[p5];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i4 = 0, p5 = Object.getOwnPropertySymbols(s3); i4 < p5.length; i4++) {
      if (e2.indexOf(p5[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p5[i4]))
        t[p5[i4]] = s3[p5[i4]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c6 = arguments.length, r3 = c6 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
  else for (var i4 = decorators.length - 1; i4 >= 0; i4--) if (d4 = decorators[i4]) r3 = (c6 < 3 ? d4(r3) : c6 > 3 ? d4(target, key, r3) : d4(target, key)) || r3;
  return c6 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f5, y7, t, g5;
  return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
    return this;
  }), g5;
  function verb(n5) {
    return function(v5) {
      return step([n5, v5]);
    };
  }
  function step(op) {
    if (f5) throw new TypeError("Generator is already executing.");
    while (_3) try {
      if (f5 = 1, y7 && (t = op[0] & 2 ? y7["return"] : op[0] ? y7["throw"] || ((t = y7["return"]) && t.call(y7), 0) : y7.next) && !(t = t.call(y7, op[1])).done) return t;
      if (y7 = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _3.label++;
          return { value: op[1], done: false };
        case 5:
          _3.label++;
          y7 = op[1];
          op = [0];
          continue;
        case 7:
          op = _3.ops.pop();
          _3.trys.pop();
          continue;
        default:
          if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _3 = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _3.label = op[1];
            break;
          }
          if (op[0] === 6 && _3.label < t[1]) {
            _3.label = t[1];
            t = op;
            break;
          }
          if (t && _3.label < t[2]) {
            _3.label = t[2];
            _3.ops.push(op);
            break;
          }
          if (t[2]) _3.ops.pop();
          _3.trys.pop();
          continue;
      }
      op = body.call(thisArg, _3);
    } catch (e2) {
      op = [6, e2];
      y7 = 0;
    } finally {
      f5 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o5, m5, k3, k22) {
  if (k22 === void 0) k22 = k3;
  o5[k22] = m5[k3];
}
function __exportStar(m5, exports) {
  for (var p5 in m5) if (p5 !== "default" && !exports.hasOwnProperty(p5)) exports[p5] = m5[p5];
}
function __values(o5) {
  var s3 = typeof Symbol === "function" && Symbol.iterator, m5 = s3 && o5[s3], i4 = 0;
  if (m5) return m5.call(o5);
  if (o5 && typeof o5.length === "number") return {
    next: function() {
      if (o5 && i4 >= o5.length) o5 = void 0;
      return { value: o5 && o5[i4++], done: !o5 };
    }
  };
  throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o5, n5) {
  var m5 = typeof Symbol === "function" && o5[Symbol.iterator];
  if (!m5) return o5;
  var i4 = m5.call(o5), r3, ar3 = [], e2;
  try {
    while ((n5 === void 0 || n5-- > 0) && !(r3 = i4.next()).done) ar3.push(r3.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r3 && !r3.done && (m5 = i4["return"])) m5.call(i4);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar3;
}
function __spread() {
  for (var ar3 = [], i4 = 0; i4 < arguments.length; i4++)
    ar3 = ar3.concat(__read(arguments[i4]));
  return ar3;
}
function __spreadArrays() {
  for (var s3 = 0, i4 = 0, il = arguments.length; i4 < il; i4++) s3 += arguments[i4].length;
  for (var r3 = Array(s3), k3 = 0, i4 = 0; i4 < il; i4++)
    for (var a4 = arguments[i4], j6 = 0, jl = a4.length; j6 < jl; j6++, k3++)
      r3[k3] = a4[j6];
  return r3;
}
function __await(v5) {
  return this instanceof __await ? (this.v = v5, this) : new __await(v5);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g5 = generator.apply(thisArg, _arguments || []), i4, q4 = [];
  return i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4;
  function verb(n5) {
    if (g5[n5]) i4[n5] = function(v5) {
      return new Promise(function(a4, b5) {
        q4.push([n5, v5, a4, b5]) > 1 || resume(n5, v5);
      });
    };
  }
  function resume(n5, v5) {
    try {
      step(g5[n5](v5));
    } catch (e2) {
      settle(q4[0][3], e2);
    }
  }
  function step(r3) {
    r3.value instanceof __await ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q4[0][2], r3);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f5, v5) {
    if (f5(v5), q4.shift(), q4.length) resume(q4[0][0], q4[0][1]);
  }
}
function __asyncDelegator(o5) {
  var i4, p5;
  return i4 = {}, verb("next"), verb("throw", function(e2) {
    throw e2;
  }), verb("return"), i4[Symbol.iterator] = function() {
    return this;
  }, i4;
  function verb(n5, f5) {
    i4[n5] = o5[n5] ? function(v5) {
      return (p5 = !p5) ? { value: __await(o5[n5](v5)), done: n5 === "return" } : f5 ? f5(v5) : v5;
    } : f5;
  }
}
function __asyncValues(o5) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m5 = o5[Symbol.asyncIterator], i4;
  return m5 ? m5.call(o5) : (o5 = typeof __values === "function" ? __values(o5) : o5[Symbol.iterator](), i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4);
  function verb(n5) {
    i4[n5] = o5[n5] && function(v5) {
      return new Promise(function(resolve, reject) {
        v5 = o5[n5](v5), settle(resolve, reject, v5.done, v5.value);
      });
    };
  }
  function settle(resolve, reject, d4, v5) {
    Promise.resolve(v5).then(function(v6) {
      resolve({ value: v6, done: d4 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k3 in mod) if (Object.hasOwnProperty.call(mod, k3)) result[k3] = mod[k3];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d4, b5) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d5, b6) {
        d5.__proto__ = b6;
      } || function(d5, b6) {
        for (var p5 in b6) if (b6.hasOwnProperty(p5)) d5[p5] = b6[p5];
      };
      return extendStatics(d4, b5);
    };
    __assign = function() {
      __assign = Object.assign || function __assign3(t) {
        for (var s3, i4 = 1, n5 = arguments.length; i4 < n5; i4++) {
          s3 = arguments[i4];
          for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5)) t[p5] = s3[p5];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
  }
});

// node_modules/@walletconnect/time/dist/cjs/utils/delay.js
var require_delay = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/utils/delay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.delay = void 0;
    function delay(timeout) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, timeout);
      });
    }
    exports.delay = delay;
  }
});

// node_modules/@walletconnect/time/dist/cjs/constants/misc.js
var require_misc = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/constants/misc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_THOUSAND = exports.ONE_HUNDRED = void 0;
    exports.ONE_HUNDRED = 100;
    exports.ONE_THOUSAND = 1e3;
  }
});

// node_modules/@walletconnect/time/dist/cjs/constants/time.js
var require_time = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/constants/time.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
    exports.ONE_SECOND = 1;
    exports.FIVE_SECONDS = 5;
    exports.TEN_SECONDS = 10;
    exports.THIRTY_SECONDS = 30;
    exports.SIXTY_SECONDS = 60;
    exports.ONE_MINUTE = exports.SIXTY_SECONDS;
    exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
    exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
    exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
    exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
    exports.ONE_HOUR = exports.SIXTY_MINUTES;
    exports.THREE_HOURS = exports.ONE_HOUR * 3;
    exports.SIX_HOURS = exports.ONE_HOUR * 6;
    exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
    exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
    exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
    exports.THREE_DAYS = exports.ONE_DAY * 3;
    exports.FIVE_DAYS = exports.ONE_DAY * 5;
    exports.SEVEN_DAYS = exports.ONE_DAY * 7;
    exports.THIRTY_DAYS = exports.ONE_DAY * 30;
    exports.ONE_WEEK = exports.SEVEN_DAYS;
    exports.TWO_WEEKS = exports.ONE_WEEK * 2;
    exports.THREE_WEEKS = exports.ONE_WEEK * 3;
    exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
    exports.ONE_YEAR = exports.ONE_DAY * 365;
  }
});

// node_modules/@walletconnect/time/dist/cjs/constants/index.js
var require_constants = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/constants/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_misc(), exports);
    tslib_1.__exportStar(require_time(), exports);
  }
});

// node_modules/@walletconnect/time/dist/cjs/utils/convert.js
var require_convert = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/utils/convert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromMiliseconds = exports.toMiliseconds = void 0;
    var constants_1 = require_constants();
    function toMiliseconds(seconds) {
      return seconds * constants_1.ONE_THOUSAND;
    }
    exports.toMiliseconds = toMiliseconds;
    function fromMiliseconds2(miliseconds) {
      return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
    }
    exports.fromMiliseconds = fromMiliseconds2;
  }
});

// node_modules/@walletconnect/time/dist/cjs/utils/index.js
var require_utils = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_delay(), exports);
    tslib_1.__exportStar(require_convert(), exports);
  }
});

// node_modules/@walletconnect/time/dist/cjs/watch.js
var require_watch = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/watch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Watch = void 0;
    var Watch = class {
      constructor() {
        this.timestamps = /* @__PURE__ */ new Map();
      }
      start(label) {
        if (this.timestamps.has(label)) {
          throw new Error(`Watch already started for label: ${label}`);
        }
        this.timestamps.set(label, { started: Date.now() });
      }
      stop(label) {
        const timestamp = this.get(label);
        if (typeof timestamp.elapsed !== "undefined") {
          throw new Error(`Watch already stopped for label: ${label}`);
        }
        const elapsed = Date.now() - timestamp.started;
        this.timestamps.set(label, { started: timestamp.started, elapsed });
      }
      get(label) {
        const timestamp = this.timestamps.get(label);
        if (typeof timestamp === "undefined") {
          throw new Error(`No timestamp found for label: ${label}`);
        }
        return timestamp;
      }
      elapsed(label) {
        const timestamp = this.get(label);
        const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
        return elapsed;
      }
    };
    exports.Watch = Watch;
    exports.default = Watch;
  }
});

// node_modules/@walletconnect/time/dist/cjs/types/watch.js
var require_watch2 = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/types/watch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IWatch = void 0;
    var IWatch = class {
    };
    exports.IWatch = IWatch;
  }
});

// node_modules/@walletconnect/time/dist/cjs/types/index.js
var require_types = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/types/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_watch2(), exports);
  }
});

// node_modules/@walletconnect/time/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_utils(), exports);
    tslib_1.__exportStar(require_watch(), exports);
    tslib_1.__exportStar(require_types(), exports);
    tslib_1.__exportStar(require_constants(), exports);
  }
});

// node_modules/@walletconnect/window-getters/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/@walletconnect/window-getters/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
    function getFromWindow(name2) {
      let res = void 0;
      if (typeof window !== "undefined" && typeof window[name2] !== "undefined") {
        res = window[name2];
      }
      return res;
    }
    exports.getFromWindow = getFromWindow;
    function getFromWindowOrThrow(name2) {
      const res = getFromWindow(name2);
      if (!res) {
        throw new Error(`${name2} is not defined in Window`);
      }
      return res;
    }
    exports.getFromWindowOrThrow = getFromWindowOrThrow;
    function getDocumentOrThrow() {
      return getFromWindowOrThrow("document");
    }
    exports.getDocumentOrThrow = getDocumentOrThrow;
    function getDocument() {
      return getFromWindow("document");
    }
    exports.getDocument = getDocument;
    function getNavigatorOrThrow() {
      return getFromWindowOrThrow("navigator");
    }
    exports.getNavigatorOrThrow = getNavigatorOrThrow;
    function getNavigator() {
      return getFromWindow("navigator");
    }
    exports.getNavigator = getNavigator;
    function getLocationOrThrow() {
      return getFromWindowOrThrow("location");
    }
    exports.getLocationOrThrow = getLocationOrThrow;
    function getLocation() {
      return getFromWindow("location");
    }
    exports.getLocation = getLocation;
    function getCryptoOrThrow() {
      return getFromWindowOrThrow("crypto");
    }
    exports.getCryptoOrThrow = getCryptoOrThrow;
    function getCrypto() {
      return getFromWindow("crypto");
    }
    exports.getCrypto = getCrypto;
    function getLocalStorageOrThrow() {
      return getFromWindowOrThrow("localStorage");
    }
    exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
    function getLocalStorage() {
      return getFromWindow("localStorage");
    }
    exports.getLocalStorage = getLocalStorage;
  }
});

// node_modules/@walletconnect/window-metadata/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "node_modules/@walletconnect/window-metadata/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getWindowMetadata = void 0;
    var window_getters_1 = require_cjs2();
    function getWindowMetadata() {
      let doc;
      let loc;
      try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
      } catch (e2) {
        return null;
      }
      function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons2 = [];
        for (let i4 = 0; i4 < links.length; i4++) {
          const link = links[i4];
          const rel = link.getAttribute("rel");
          if (rel) {
            if (rel.toLowerCase().indexOf("icon") > -1) {
              const href = link.getAttribute("href");
              if (href) {
                if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
                  let absoluteHref = loc.protocol + "//" + loc.host;
                  if (href.indexOf("/") === 0) {
                    absoluteHref += href;
                  } else {
                    const path = loc.pathname.split("/");
                    path.pop();
                    const finalPath = path.join("/");
                    absoluteHref += finalPath + "/" + href;
                  }
                  icons2.push(absoluteHref);
                } else if (href.indexOf("//") === 0) {
                  const absoluteUrl = loc.protocol + href;
                  icons2.push(absoluteUrl);
                } else {
                  icons2.push(href);
                }
              }
            }
          }
        }
        return icons2;
      }
      function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for (let i4 = 0; i4 < metaTags.length; i4++) {
          const tag = metaTags[i4];
          const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
            if (attr) {
              return args.includes(attr);
            }
            return false;
          });
          if (attributes.length && attributes) {
            const content = tag.getAttribute("content");
            if (content) {
              return content;
            }
          }
        }
        return "";
      }
      function getName() {
        let name3 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name3) {
          name3 = doc.title;
        }
        return name3;
      }
      function getDescription() {
        const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description2;
      }
      const name2 = getName();
      const description = getDescription();
      const url = loc.origin;
      const icons = getIcons();
      const meta = {
        description,
        url,
        icons,
        name: name2
      };
      return meta;
    }
    exports.getWindowMetadata = getWindowMetadata;
  }
});

// node_modules/strict-uri-encode/index.js
var require_strict_uri_encode = __commonJS({
  "node_modules/strict-uri-encode/index.js"(exports, module) {
    "use strict";
    module.exports = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x3) => `%${x3.charCodeAt(0).toString(16).toUpperCase()}`);
  }
});

// node_modules/decode-uri-component/index.js
var require_decode_uri_component = __commonJS({
  "node_modules/decode-uri-component/index.js"(exports, module) {
    "use strict";
    var token = "%[a-f0-9]{2}";
    var singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
    var multiMatcher = new RegExp("(" + token + ")+", "gi");
    function decodeComponents(components, split) {
      try {
        return [decodeURIComponent(components.join(""))];
      } catch (err) {
      }
      if (components.length === 1) {
        return components;
      }
      split = split || 1;
      var left = components.slice(0, split);
      var right = components.slice(split);
      return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
    }
    function decode6(input) {
      try {
        return decodeURIComponent(input);
      } catch (err) {
        var tokens = input.match(singleMatcher) || [];
        for (var i4 = 1; i4 < tokens.length; i4++) {
          input = decodeComponents(tokens, i4).join("");
          tokens = input.match(singleMatcher) || [];
        }
        return input;
      }
    }
    function customDecodeURIComponent(input) {
      var replaceMap = {
        "%FE%FF": "��",
        "%FF%FE": "��"
      };
      var match = multiMatcher.exec(input);
      while (match) {
        try {
          replaceMap[match[0]] = decodeURIComponent(match[0]);
        } catch (err) {
          var result = decode6(match[0]);
          if (result !== match[0]) {
            replaceMap[match[0]] = result;
          }
        }
        match = multiMatcher.exec(input);
      }
      replaceMap["%C2"] = "�";
      var entries = Object.keys(replaceMap);
      for (var i4 = 0; i4 < entries.length; i4++) {
        var key = entries[i4];
        input = input.replace(new RegExp(key, "g"), replaceMap[key]);
      }
      return input;
    }
    module.exports = function(encodedURI) {
      if (typeof encodedURI !== "string") {
        throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
      }
      try {
        encodedURI = encodedURI.replace(/\+/g, " ");
        return decodeURIComponent(encodedURI);
      } catch (err) {
        return customDecodeURIComponent(encodedURI);
      }
    };
  }
});

// node_modules/split-on-first/index.js
var require_split_on_first = __commonJS({
  "node_modules/split-on-first/index.js"(exports, module) {
    "use strict";
    module.exports = (string2, separator) => {
      if (!(typeof string2 === "string" && typeof separator === "string")) {
        throw new TypeError("Expected the arguments to be of type `string`");
      }
      if (separator === "") {
        return [string2];
      }
      const separatorIndex = string2.indexOf(separator);
      if (separatorIndex === -1) {
        return [string2];
      }
      return [
        string2.slice(0, separatorIndex),
        string2.slice(separatorIndex + separator.length)
      ];
    };
  }
});

// node_modules/filter-obj/index.js
var require_filter_obj = __commonJS({
  "node_modules/filter-obj/index.js"(exports, module) {
    "use strict";
    module.exports = function(obj, predicate) {
      var ret = {};
      var keys2 = Object.keys(obj);
      var isArr = Array.isArray(predicate);
      for (var i4 = 0; i4 < keys2.length; i4++) {
        var key = keys2[i4];
        var val = obj[key];
        if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
          ret[key] = val;
        }
      }
      return ret;
    };
  }
});

// node_modules/query-string/index.js
var require_query_string = __commonJS({
  "node_modules/query-string/index.js"(exports) {
    "use strict";
    var strictUriEncode = require_strict_uri_encode();
    var decodeComponent = require_decode_uri_component();
    var splitOnFirst = require_split_on_first();
    var filterObject = require_filter_obj();
    var isNullOrUndefined = (value) => value === null || value === void 0;
    var encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
    function encoderForArrayFormat(options) {
      switch (options.arrayFormat) {
        case "index":
          return (key) => (result, value) => {
            const index = result.length;
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, [encode5(key, options), "[", index, "]"].join("")];
            }
            return [
              ...result,
              [encode5(key, options), "[", encode5(index, options), "]=", encode5(value, options)].join("")
            ];
          };
        case "bracket":
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, [encode5(key, options), "[]"].join("")];
            }
            return [...result, [encode5(key, options), "[]=", encode5(value, options)].join("")];
          };
        case "colon-list-separator":
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, [encode5(key, options), ":list="].join("")];
            }
            return [...result, [encode5(key, options), ":list=", encode5(value, options)].join("")];
          };
        case "comma":
        case "separator":
        case "bracket-separator": {
          const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            value = value === null ? "" : value;
            if (result.length === 0) {
              return [[encode5(key, options), keyValueSep, encode5(value, options)].join("")];
            }
            return [[result, encode5(value, options)].join(options.arrayFormatSeparator)];
          };
        }
        default:
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, encode5(key, options)];
            }
            return [...result, [encode5(key, options), "=", encode5(value, options)].join("")];
          };
      }
    }
    function parserForArrayFormat(options) {
      let result;
      switch (options.arrayFormat) {
        case "index":
          return (key, value, accumulator) => {
            result = /\[(\d*)\]$/.exec(key);
            key = key.replace(/\[\d*\]$/, "");
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = {};
            }
            accumulator[key][result[1]] = value;
          };
        case "bracket":
          return (key, value, accumulator) => {
            result = /(\[\])$/.exec(key);
            key = key.replace(/\[\]$/, "");
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = [value];
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
        case "colon-list-separator":
          return (key, value, accumulator) => {
            result = /(:list)$/.exec(key);
            key = key.replace(/:list$/, "");
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = [value];
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
        case "comma":
        case "separator":
          return (key, value, accumulator) => {
            const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
            const isEncodedArray = typeof value === "string" && !isArray && decode6(value, options).includes(options.arrayFormatSeparator);
            value = isEncodedArray ? decode6(value, options) : value;
            const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode6(item, options)) : value === null ? value : decode6(value, options);
            accumulator[key] = newValue;
          };
        case "bracket-separator":
          return (key, value, accumulator) => {
            const isArray = /(\[\])$/.test(key);
            key = key.replace(/\[\]$/, "");
            if (!isArray) {
              accumulator[key] = value ? decode6(value, options) : value;
              return;
            }
            const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode6(item, options));
            if (accumulator[key] === void 0) {
              accumulator[key] = arrayValue;
              return;
            }
            accumulator[key] = [].concat(accumulator[key], arrayValue);
          };
        default:
          return (key, value, accumulator) => {
            if (accumulator[key] === void 0) {
              accumulator[key] = value;
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
      }
    }
    function validateArrayFormatSeparator(value) {
      if (typeof value !== "string" || value.length !== 1) {
        throw new TypeError("arrayFormatSeparator must be single character string");
      }
    }
    function encode5(value, options) {
      if (options.encode) {
        return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
      }
      return value;
    }
    function decode6(value, options) {
      if (options.decode) {
        return decodeComponent(value);
      }
      return value;
    }
    function keysSorter(input) {
      if (Array.isArray(input)) {
        return input.sort();
      }
      if (typeof input === "object") {
        return keysSorter(Object.keys(input)).sort((a4, b5) => Number(a4) - Number(b5)).map((key) => input[key]);
      }
      return input;
    }
    function removeHash(input) {
      const hashStart = input.indexOf("#");
      if (hashStart !== -1) {
        input = input.slice(0, hashStart);
      }
      return input;
    }
    function getHash(url) {
      let hash = "";
      const hashStart = url.indexOf("#");
      if (hashStart !== -1) {
        hash = url.slice(hashStart);
      }
      return hash;
    }
    function extract(input) {
      input = removeHash(input);
      const queryStart = input.indexOf("?");
      if (queryStart === -1) {
        return "";
      }
      return input.slice(queryStart + 1);
    }
    function parseValue(value, options) {
      if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
        value = Number(value);
      } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
        value = value.toLowerCase() === "true";
      }
      return value;
    }
    function parse2(query, options) {
      options = Object.assign({
        decode: true,
        sort: true,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: false,
        parseBooleans: false
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      const formatter = parserForArrayFormat(options);
      const ret = /* @__PURE__ */ Object.create(null);
      if (typeof query !== "string") {
        return ret;
      }
      query = query.trim().replace(/^[?#&]/, "");
      if (!query) {
        return ret;
      }
      for (const param of query.split("&")) {
        if (param === "") {
          continue;
        }
        let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, " ") : param, "=");
        value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode6(value, options);
        formatter(decode6(key, options), value, ret);
      }
      for (const key of Object.keys(ret)) {
        const value = ret[key];
        if (typeof value === "object" && value !== null) {
          for (const k3 of Object.keys(value)) {
            value[k3] = parseValue(value[k3], options);
          }
        } else {
          ret[key] = parseValue(value, options);
        }
      }
      if (options.sort === false) {
        return ret;
      }
      return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
        const value = ret[key];
        if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
          result[key] = keysSorter(value);
        } else {
          result[key] = value;
        }
        return result;
      }, /* @__PURE__ */ Object.create(null));
    }
    exports.extract = extract;
    exports.parse = parse2;
    exports.stringify = (object, options) => {
      if (!object) {
        return "";
      }
      options = Object.assign({
        encode: true,
        strict: true,
        arrayFormat: "none",
        arrayFormatSeparator: ","
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
      const formatter = encoderForArrayFormat(options);
      const objectCopy = {};
      for (const key of Object.keys(object)) {
        if (!shouldFilter(key)) {
          objectCopy[key] = object[key];
        }
      }
      const keys2 = Object.keys(objectCopy);
      if (options.sort !== false) {
        keys2.sort(options.sort);
      }
      return keys2.map((key) => {
        const value = object[key];
        if (value === void 0) {
          return "";
        }
        if (value === null) {
          return encode5(key, options);
        }
        if (Array.isArray(value)) {
          if (value.length === 0 && options.arrayFormat === "bracket-separator") {
            return encode5(key, options) + "[]";
          }
          return value.reduce(formatter(key), []).join("&");
        }
        return encode5(key, options) + "=" + encode5(value, options);
      }).filter((x3) => x3.length > 0).join("&");
    };
    exports.parseUrl = (url, options) => {
      options = Object.assign({
        decode: true
      }, options);
      const [url_, hash] = splitOnFirst(url, "#");
      return Object.assign(
        {
          url: url_.split("?")[0] || "",
          query: parse2(extract(url), options)
        },
        options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode6(hash, options) } : {}
      );
    };
    exports.stringifyUrl = (object, options) => {
      options = Object.assign({
        encode: true,
        strict: true,
        [encodeFragmentIdentifier]: true
      }, options);
      const url = removeHash(object.url).split("?")[0] || "";
      const queryFromUrl = exports.extract(object.url);
      const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
      const query = Object.assign(parsedQueryFromUrl, object.query);
      let queryString = exports.stringify(query, options);
      if (queryString) {
        queryString = `?${queryString}`;
      }
      let hash = getHash(object.url);
      if (object.fragmentIdentifier) {
        hash = `#${options[encodeFragmentIdentifier] ? encode5(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
      }
      return `${url}${queryString}${hash}`;
    };
    exports.pick = (input, filter, options) => {
      options = Object.assign({
        parseFragmentIdentifier: true,
        [encodeFragmentIdentifier]: false
      }, options);
      const { url, query, fragmentIdentifier } = exports.parseUrl(input, options);
      return exports.stringifyUrl({
        url,
        query: filterObject(query, filter),
        fragmentIdentifier
      }, options);
    };
    exports.exclude = (input, filter, options) => {
      const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
      return exports.pick(input, exclusionFilter, options);
    };
  }
});

// node_modules/@stablelib/int/lib/int.js
var require_int = __commonJS({
  "node_modules/@stablelib/int/lib/int.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function imulShim(a4, b5) {
      var ah2 = a4 >>> 16 & 65535, al = a4 & 65535;
      var bh = b5 >>> 16 & 65535, bl = b5 & 65535;
      return al * bl + (ah2 * bl + al * bh << 16 >>> 0) | 0;
    }
    exports.mul = Math.imul || imulShim;
    function add(a4, b5) {
      return a4 + b5 | 0;
    }
    exports.add = add;
    function sub(a4, b5) {
      return a4 - b5 | 0;
    }
    exports.sub = sub;
    function rotl(x3, n5) {
      return x3 << n5 | x3 >>> 32 - n5;
    }
    exports.rotl = rotl;
    function rotr(x3, n5) {
      return x3 << 32 - n5 | x3 >>> n5;
    }
    exports.rotr = rotr;
    function isIntegerShim(n5) {
      return typeof n5 === "number" && isFinite(n5) && Math.floor(n5) === n5;
    }
    exports.isInteger = Number.isInteger || isIntegerShim;
    exports.MAX_SAFE_INTEGER = 9007199254740991;
    exports.isSafeInteger = function(n5) {
      return exports.isInteger(n5) && (n5 >= -exports.MAX_SAFE_INTEGER && n5 <= exports.MAX_SAFE_INTEGER);
    };
  }
});

// node_modules/@stablelib/binary/lib/binary.js
var require_binary = __commonJS({
  "node_modules/@stablelib/binary/lib/binary.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var int_1 = require_int();
    function readInt16BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 0] << 8 | array[offset + 1]) << 16 >> 16;
    }
    exports.readInt16BE = readInt16BE;
    function readUint16BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 0] << 8 | array[offset + 1]) >>> 0;
    }
    exports.readUint16BE = readUint16BE;
    function readInt16LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 1] << 8 | array[offset]) << 16 >> 16;
    }
    exports.readInt16LE = readInt16LE;
    function readUint16LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 1] << 8 | array[offset]) >>> 0;
    }
    exports.readUint16LE = readUint16LE;
    function writeUint16BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(2);
      }
      if (offset === void 0) {
        offset = 0;
      }
      out[offset + 0] = value >>> 8;
      out[offset + 1] = value >>> 0;
      return out;
    }
    exports.writeUint16BE = writeUint16BE;
    exports.writeInt16BE = writeUint16BE;
    function writeUint16LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(2);
      }
      if (offset === void 0) {
        offset = 0;
      }
      out[offset + 0] = value >>> 0;
      out[offset + 1] = value >>> 8;
      return out;
    }
    exports.writeUint16LE = writeUint16LE;
    exports.writeInt16LE = writeUint16LE;
    function readInt32BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3];
    }
    exports.readInt32BE = readInt32BE;
    function readUint32BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3]) >>> 0;
    }
    exports.readUint32BE = readUint32BE;
    function readInt32LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset];
    }
    exports.readInt32LE = readInt32LE;
    function readUint32LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset]) >>> 0;
    }
    exports.readUint32LE = readUint32LE;
    function writeUint32BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }
      if (offset === void 0) {
        offset = 0;
      }
      out[offset + 0] = value >>> 24;
      out[offset + 1] = value >>> 16;
      out[offset + 2] = value >>> 8;
      out[offset + 3] = value >>> 0;
      return out;
    }
    exports.writeUint32BE = writeUint32BE;
    exports.writeInt32BE = writeUint32BE;
    function writeUint32LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }
      if (offset === void 0) {
        offset = 0;
      }
      out[offset + 0] = value >>> 0;
      out[offset + 1] = value >>> 8;
      out[offset + 2] = value >>> 16;
      out[offset + 3] = value >>> 24;
      return out;
    }
    exports.writeUint32LE = writeUint32LE;
    exports.writeInt32LE = writeUint32LE;
    function readInt64BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var hi2 = readInt32BE(array, offset);
      var lo2 = readInt32BE(array, offset + 4);
      return hi2 * 4294967296 + lo2 - (lo2 >> 31) * 4294967296;
    }
    exports.readInt64BE = readInt64BE;
    function readUint64BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var hi2 = readUint32BE(array, offset);
      var lo2 = readUint32BE(array, offset + 4);
      return hi2 * 4294967296 + lo2;
    }
    exports.readUint64BE = readUint64BE;
    function readInt64LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var lo2 = readInt32LE(array, offset);
      var hi2 = readInt32LE(array, offset + 4);
      return hi2 * 4294967296 + lo2 - (lo2 >> 31) * 4294967296;
    }
    exports.readInt64LE = readInt64LE;
    function readUint64LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var lo2 = readUint32LE(array, offset);
      var hi2 = readUint32LE(array, offset + 4);
      return hi2 * 4294967296 + lo2;
    }
    exports.readUint64LE = readUint64LE;
    function writeUint64BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      writeUint32BE(value / 4294967296 >>> 0, out, offset);
      writeUint32BE(value >>> 0, out, offset + 4);
      return out;
    }
    exports.writeUint64BE = writeUint64BE;
    exports.writeInt64BE = writeUint64BE;
    function writeUint64LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      writeUint32LE(value >>> 0, out, offset);
      writeUint32LE(value / 4294967296 >>> 0, out, offset + 4);
      return out;
    }
    exports.writeUint64LE = writeUint64LE;
    exports.writeInt64LE = writeUint64LE;
    function readUintBE(bitLength, array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      if (bitLength % 8 !== 0) {
        throw new Error("readUintBE supports only bitLengths divisible by 8");
      }
      if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintBE: array is too short for the given bitLength");
      }
      var result = 0;
      var mul = 1;
      for (var i4 = bitLength / 8 + offset - 1; i4 >= offset; i4--) {
        result += array[i4] * mul;
        mul *= 256;
      }
      return result;
    }
    exports.readUintBE = readUintBE;
    function readUintLE(bitLength, array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      if (bitLength % 8 !== 0) {
        throw new Error("readUintLE supports only bitLengths divisible by 8");
      }
      if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintLE: array is too short for the given bitLength");
      }
      var result = 0;
      var mul = 1;
      for (var i4 = offset; i4 < offset + bitLength / 8; i4++) {
        result += array[i4] * mul;
        mul *= 256;
      }
      return result;
    }
    exports.readUintLE = readUintLE;
    function writeUintBE(bitLength, value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(bitLength / 8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      if (bitLength % 8 !== 0) {
        throw new Error("writeUintBE supports only bitLengths divisible by 8");
      }
      if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintBE value must be an integer");
      }
      var div = 1;
      for (var i4 = bitLength / 8 + offset - 1; i4 >= offset; i4--) {
        out[i4] = value / div & 255;
        div *= 256;
      }
      return out;
    }
    exports.writeUintBE = writeUintBE;
    function writeUintLE(bitLength, value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(bitLength / 8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      if (bitLength % 8 !== 0) {
        throw new Error("writeUintLE supports only bitLengths divisible by 8");
      }
      if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintLE value must be an integer");
      }
      var div = 1;
      for (var i4 = offset; i4 < offset + bitLength / 8; i4++) {
        out[i4] = value / div & 255;
        div *= 256;
      }
      return out;
    }
    exports.writeUintLE = writeUintLE;
    function readFloat32BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat32(offset);
    }
    exports.readFloat32BE = readFloat32BE;
    function readFloat32LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat32(offset, true);
    }
    exports.readFloat32LE = readFloat32LE;
    function readFloat64BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat64(offset);
    }
    exports.readFloat64BE = readFloat64BE;
    function readFloat64LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat64(offset, true);
    }
    exports.readFloat64LE = readFloat64LE;
    function writeFloat32BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat32(offset, value);
      return out;
    }
    exports.writeFloat32BE = writeFloat32BE;
    function writeFloat32LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat32(offset, value, true);
      return out;
    }
    exports.writeFloat32LE = writeFloat32LE;
    function writeFloat64BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat64(offset, value);
      return out;
    }
    exports.writeFloat64BE = writeFloat64BE;
    function writeFloat64LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat64(offset, value, true);
      return out;
    }
    exports.writeFloat64LE = writeFloat64LE;
  }
});

// node_modules/@stablelib/wipe/lib/wipe.js
var require_wipe = __commonJS({
  "node_modules/@stablelib/wipe/lib/wipe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function wipe(array) {
      for (var i4 = 0; i4 < array.length; i4++) {
        array[i4] = 0;
      }
      return array;
    }
    exports.wipe = wipe;
  }
});

// node_modules/@stablelib/chacha/lib/chacha.js
var require_chacha = __commonJS({
  "node_modules/@stablelib/chacha/lib/chacha.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    var ROUNDS = 20;
    function core(out, input, key) {
      var j02 = 1634760805;
      var j1 = 857760878;
      var j22 = 2036477234;
      var j32 = 1797285236;
      var j42 = key[3] << 24 | key[2] << 16 | key[1] << 8 | key[0];
      var j52 = key[7] << 24 | key[6] << 16 | key[5] << 8 | key[4];
      var j6 = key[11] << 24 | key[10] << 16 | key[9] << 8 | key[8];
      var j7 = key[15] << 24 | key[14] << 16 | key[13] << 8 | key[12];
      var j8 = key[19] << 24 | key[18] << 16 | key[17] << 8 | key[16];
      var j9 = key[23] << 24 | key[22] << 16 | key[21] << 8 | key[20];
      var j10 = key[27] << 24 | key[26] << 16 | key[25] << 8 | key[24];
      var j11 = key[31] << 24 | key[30] << 16 | key[29] << 8 | key[28];
      var j12 = input[3] << 24 | input[2] << 16 | input[1] << 8 | input[0];
      var j13 = input[7] << 24 | input[6] << 16 | input[5] << 8 | input[4];
      var j14 = input[11] << 24 | input[10] << 16 | input[9] << 8 | input[8];
      var j15 = input[15] << 24 | input[14] << 16 | input[13] << 8 | input[12];
      var x02 = j02;
      var x1 = j1;
      var x22 = j22;
      var x3 = j32;
      var x4 = j42;
      var x5 = j52;
      var x6 = j6;
      var x7 = j7;
      var x8 = j8;
      var x9 = j9;
      var x10 = j10;
      var x11 = j11;
      var x12 = j12;
      var x13 = j13;
      var x14 = j14;
      var x15 = j15;
      for (var i4 = 0; i4 < ROUNDS; i4 += 2) {
        x02 = x02 + x4 | 0;
        x12 ^= x02;
        x12 = x12 >>> 32 - 16 | x12 << 16;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> 32 - 12 | x4 << 12;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> 32 - 16 | x13 << 16;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> 32 - 12 | x5 << 12;
        x22 = x22 + x6 | 0;
        x14 ^= x22;
        x14 = x14 >>> 32 - 16 | x14 << 16;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> 32 - 12 | x6 << 12;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> 32 - 16 | x15 << 16;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> 32 - 12 | x7 << 12;
        x22 = x22 + x6 | 0;
        x14 ^= x22;
        x14 = x14 >>> 32 - 8 | x14 << 8;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> 32 - 7 | x6 << 7;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> 32 - 8 | x15 << 8;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> 32 - 7 | x7 << 7;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> 32 - 8 | x13 << 8;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> 32 - 7 | x5 << 7;
        x02 = x02 + x4 | 0;
        x12 ^= x02;
        x12 = x12 >>> 32 - 8 | x12 << 8;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> 32 - 7 | x4 << 7;
        x02 = x02 + x5 | 0;
        x15 ^= x02;
        x15 = x15 >>> 32 - 16 | x15 << 16;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> 32 - 12 | x5 << 12;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> 32 - 16 | x12 << 16;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> 32 - 12 | x6 << 12;
        x22 = x22 + x7 | 0;
        x13 ^= x22;
        x13 = x13 >>> 32 - 16 | x13 << 16;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> 32 - 12 | x7 << 12;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> 32 - 16 | x14 << 16;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> 32 - 12 | x4 << 12;
        x22 = x22 + x7 | 0;
        x13 ^= x22;
        x13 = x13 >>> 32 - 8 | x13 << 8;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> 32 - 7 | x7 << 7;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> 32 - 8 | x14 << 8;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> 32 - 7 | x4 << 7;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> 32 - 8 | x12 << 8;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> 32 - 7 | x6 << 7;
        x02 = x02 + x5 | 0;
        x15 ^= x02;
        x15 = x15 >>> 32 - 8 | x15 << 8;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> 32 - 7 | x5 << 7;
      }
      binary_1.writeUint32LE(x02 + j02 | 0, out, 0);
      binary_1.writeUint32LE(x1 + j1 | 0, out, 4);
      binary_1.writeUint32LE(x22 + j22 | 0, out, 8);
      binary_1.writeUint32LE(x3 + j32 | 0, out, 12);
      binary_1.writeUint32LE(x4 + j42 | 0, out, 16);
      binary_1.writeUint32LE(x5 + j52 | 0, out, 20);
      binary_1.writeUint32LE(x6 + j6 | 0, out, 24);
      binary_1.writeUint32LE(x7 + j7 | 0, out, 28);
      binary_1.writeUint32LE(x8 + j8 | 0, out, 32);
      binary_1.writeUint32LE(x9 + j9 | 0, out, 36);
      binary_1.writeUint32LE(x10 + j10 | 0, out, 40);
      binary_1.writeUint32LE(x11 + j11 | 0, out, 44);
      binary_1.writeUint32LE(x12 + j12 | 0, out, 48);
      binary_1.writeUint32LE(x13 + j13 | 0, out, 52);
      binary_1.writeUint32LE(x14 + j14 | 0, out, 56);
      binary_1.writeUint32LE(x15 + j15 | 0, out, 60);
    }
    function streamXOR(key, nonce, src2, dst, nonceInplaceCounterLength) {
      if (nonceInplaceCounterLength === void 0) {
        nonceInplaceCounterLength = 0;
      }
      if (key.length !== 32) {
        throw new Error("ChaCha: key size must be 32 bytes");
      }
      if (dst.length < src2.length) {
        throw new Error("ChaCha: destination is shorter than source");
      }
      var nc;
      var counterLength;
      if (nonceInplaceCounterLength === 0) {
        if (nonce.length !== 8 && nonce.length !== 12) {
          throw new Error("ChaCha nonce must be 8 or 12 bytes");
        }
        nc = new Uint8Array(16);
        counterLength = nc.length - nonce.length;
        nc.set(nonce, counterLength);
      } else {
        if (nonce.length !== 16) {
          throw new Error("ChaCha nonce with counter must be 16 bytes");
        }
        nc = nonce;
        counterLength = nonceInplaceCounterLength;
      }
      var block = new Uint8Array(64);
      for (var i4 = 0; i4 < src2.length; i4 += 64) {
        core(block, nc, key);
        for (var j6 = i4; j6 < i4 + 64 && j6 < src2.length; j6++) {
          dst[j6] = src2[j6] ^ block[j6 - i4];
        }
        incrementCounter(nc, 0, counterLength);
      }
      wipe_1.wipe(block);
      if (nonceInplaceCounterLength === 0) {
        wipe_1.wipe(nc);
      }
      return dst;
    }
    exports.streamXOR = streamXOR;
    function stream(key, nonce, dst, nonceInplaceCounterLength) {
      if (nonceInplaceCounterLength === void 0) {
        nonceInplaceCounterLength = 0;
      }
      wipe_1.wipe(dst);
      return streamXOR(key, nonce, dst, dst, nonceInplaceCounterLength);
    }
    exports.stream = stream;
    function incrementCounter(counter, pos, len) {
      var carry = 1;
      while (len--) {
        carry = carry + (counter[pos] & 255) | 0;
        counter[pos] = carry & 255;
        carry >>>= 8;
        pos++;
      }
      if (carry > 0) {
        throw new Error("ChaCha: counter overflow");
      }
    }
  }
});

// node_modules/@stablelib/constant-time/lib/constant-time.js
var require_constant_time = __commonJS({
  "node_modules/@stablelib/constant-time/lib/constant-time.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function select(subject, resultIfOne, resultIfZero) {
      return ~(subject - 1) & resultIfOne | subject - 1 & resultIfZero;
    }
    exports.select = select;
    function lessOrEqual(a4, b5) {
      return (a4 | 0) - (b5 | 0) - 1 >>> 31 & 1;
    }
    exports.lessOrEqual = lessOrEqual;
    function compare2(a4, b5) {
      if (a4.length !== b5.length) {
        return 0;
      }
      var result = 0;
      for (var i4 = 0; i4 < a4.length; i4++) {
        result |= a4[i4] ^ b5[i4];
      }
      return 1 & result - 1 >>> 8;
    }
    exports.compare = compare2;
    function equal(a4, b5) {
      if (a4.length === 0 || b5.length === 0) {
        return false;
      }
      return compare2(a4, b5) !== 0;
    }
    exports.equal = equal;
  }
});

// node_modules/@stablelib/poly1305/lib/poly1305.js
var require_poly1305 = __commonJS({
  "node_modules/@stablelib/poly1305/lib/poly1305.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var constant_time_1 = require_constant_time();
    var wipe_1 = require_wipe();
    exports.DIGEST_LENGTH = 16;
    var Poly1305 = (
      /** @class */
      function() {
        function Poly13052(key) {
          this.digestLength = exports.DIGEST_LENGTH;
          this._buffer = new Uint8Array(16);
          this._r = new Uint16Array(10);
          this._h = new Uint16Array(10);
          this._pad = new Uint16Array(8);
          this._leftover = 0;
          this._fin = 0;
          this._finished = false;
          var t0 = key[0] | key[1] << 8;
          this._r[0] = t0 & 8191;
          var t1 = key[2] | key[3] << 8;
          this._r[1] = (t0 >>> 13 | t1 << 3) & 8191;
          var t2 = key[4] | key[5] << 8;
          this._r[2] = (t1 >>> 10 | t2 << 6) & 7939;
          var t3 = key[6] | key[7] << 8;
          this._r[3] = (t2 >>> 7 | t3 << 9) & 8191;
          var t4 = key[8] | key[9] << 8;
          this._r[4] = (t3 >>> 4 | t4 << 12) & 255;
          this._r[5] = t4 >>> 1 & 8190;
          var t5 = key[10] | key[11] << 8;
          this._r[6] = (t4 >>> 14 | t5 << 2) & 8191;
          var t6 = key[12] | key[13] << 8;
          this._r[7] = (t5 >>> 11 | t6 << 5) & 8065;
          var t7 = key[14] | key[15] << 8;
          this._r[8] = (t6 >>> 8 | t7 << 8) & 8191;
          this._r[9] = t7 >>> 5 & 127;
          this._pad[0] = key[16] | key[17] << 8;
          this._pad[1] = key[18] | key[19] << 8;
          this._pad[2] = key[20] | key[21] << 8;
          this._pad[3] = key[22] | key[23] << 8;
          this._pad[4] = key[24] | key[25] << 8;
          this._pad[5] = key[26] | key[27] << 8;
          this._pad[6] = key[28] | key[29] << 8;
          this._pad[7] = key[30] | key[31] << 8;
        }
        Poly13052.prototype._blocks = function(m5, mpos, bytes) {
          var hibit = this._fin ? 0 : 1 << 11;
          var h02 = this._h[0], h1 = this._h[1], h22 = this._h[2], h32 = this._h[3], h42 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
          var r0 = this._r[0], r1 = this._r[1], r22 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
          while (bytes >= 16) {
            var t0 = m5[mpos + 0] | m5[mpos + 1] << 8;
            h02 += t0 & 8191;
            var t1 = m5[mpos + 2] | m5[mpos + 3] << 8;
            h1 += (t0 >>> 13 | t1 << 3) & 8191;
            var t2 = m5[mpos + 4] | m5[mpos + 5] << 8;
            h22 += (t1 >>> 10 | t2 << 6) & 8191;
            var t3 = m5[mpos + 6] | m5[mpos + 7] << 8;
            h32 += (t2 >>> 7 | t3 << 9) & 8191;
            var t4 = m5[mpos + 8] | m5[mpos + 9] << 8;
            h42 += (t3 >>> 4 | t4 << 12) & 8191;
            h5 += t4 >>> 1 & 8191;
            var t5 = m5[mpos + 10] | m5[mpos + 11] << 8;
            h6 += (t4 >>> 14 | t5 << 2) & 8191;
            var t6 = m5[mpos + 12] | m5[mpos + 13] << 8;
            h7 += (t5 >>> 11 | t6 << 5) & 8191;
            var t7 = m5[mpos + 14] | m5[mpos + 15] << 8;
            h8 += (t6 >>> 8 | t7 << 8) & 8191;
            h9 += t7 >>> 5 | hibit;
            var c6 = 0;
            var d02 = c6;
            d02 += h02 * r0;
            d02 += h1 * (5 * r9);
            d02 += h22 * (5 * r8);
            d02 += h32 * (5 * r7);
            d02 += h42 * (5 * r6);
            c6 = d02 >>> 13;
            d02 &= 8191;
            d02 += h5 * (5 * r5);
            d02 += h6 * (5 * r4);
            d02 += h7 * (5 * r3);
            d02 += h8 * (5 * r22);
            d02 += h9 * (5 * r1);
            c6 += d02 >>> 13;
            d02 &= 8191;
            var d1 = c6;
            d1 += h02 * r1;
            d1 += h1 * r0;
            d1 += h22 * (5 * r9);
            d1 += h32 * (5 * r8);
            d1 += h42 * (5 * r7);
            c6 = d1 >>> 13;
            d1 &= 8191;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r22);
            c6 += d1 >>> 13;
            d1 &= 8191;
            var d22 = c6;
            d22 += h02 * r22;
            d22 += h1 * r1;
            d22 += h22 * r0;
            d22 += h32 * (5 * r9);
            d22 += h42 * (5 * r8);
            c6 = d22 >>> 13;
            d22 &= 8191;
            d22 += h5 * (5 * r7);
            d22 += h6 * (5 * r6);
            d22 += h7 * (5 * r5);
            d22 += h8 * (5 * r4);
            d22 += h9 * (5 * r3);
            c6 += d22 >>> 13;
            d22 &= 8191;
            var d32 = c6;
            d32 += h02 * r3;
            d32 += h1 * r22;
            d32 += h22 * r1;
            d32 += h32 * r0;
            d32 += h42 * (5 * r9);
            c6 = d32 >>> 13;
            d32 &= 8191;
            d32 += h5 * (5 * r8);
            d32 += h6 * (5 * r7);
            d32 += h7 * (5 * r6);
            d32 += h8 * (5 * r5);
            d32 += h9 * (5 * r4);
            c6 += d32 >>> 13;
            d32 &= 8191;
            var d4 = c6;
            d4 += h02 * r4;
            d4 += h1 * r3;
            d4 += h22 * r22;
            d4 += h32 * r1;
            d4 += h42 * r0;
            c6 = d4 >>> 13;
            d4 &= 8191;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c6 += d4 >>> 13;
            d4 &= 8191;
            var d5 = c6;
            d5 += h02 * r5;
            d5 += h1 * r4;
            d5 += h22 * r3;
            d5 += h32 * r22;
            d5 += h42 * r1;
            c6 = d5 >>> 13;
            d5 &= 8191;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c6 += d5 >>> 13;
            d5 &= 8191;
            var d6 = c6;
            d6 += h02 * r6;
            d6 += h1 * r5;
            d6 += h22 * r4;
            d6 += h32 * r3;
            d6 += h42 * r22;
            c6 = d6 >>> 13;
            d6 &= 8191;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c6 += d6 >>> 13;
            d6 &= 8191;
            var d7 = c6;
            d7 += h02 * r7;
            d7 += h1 * r6;
            d7 += h22 * r5;
            d7 += h32 * r4;
            d7 += h42 * r3;
            c6 = d7 >>> 13;
            d7 &= 8191;
            d7 += h5 * r22;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c6 += d7 >>> 13;
            d7 &= 8191;
            var d8 = c6;
            d8 += h02 * r8;
            d8 += h1 * r7;
            d8 += h22 * r6;
            d8 += h32 * r5;
            d8 += h42 * r4;
            c6 = d8 >>> 13;
            d8 &= 8191;
            d8 += h5 * r3;
            d8 += h6 * r22;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c6 += d8 >>> 13;
            d8 &= 8191;
            var d9 = c6;
            d9 += h02 * r9;
            d9 += h1 * r8;
            d9 += h22 * r7;
            d9 += h32 * r6;
            d9 += h42 * r5;
            c6 = d9 >>> 13;
            d9 &= 8191;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r22;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c6 += d9 >>> 13;
            d9 &= 8191;
            c6 = (c6 << 2) + c6 | 0;
            c6 = c6 + d02 | 0;
            d02 = c6 & 8191;
            c6 = c6 >>> 13;
            d1 += c6;
            h02 = d02;
            h1 = d1;
            h22 = d22;
            h32 = d32;
            h42 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes -= 16;
          }
          this._h[0] = h02;
          this._h[1] = h1;
          this._h[2] = h22;
          this._h[3] = h32;
          this._h[4] = h42;
          this._h[5] = h5;
          this._h[6] = h6;
          this._h[7] = h7;
          this._h[8] = h8;
          this._h[9] = h9;
        };
        Poly13052.prototype.finish = function(mac, macpos) {
          if (macpos === void 0) {
            macpos = 0;
          }
          var g5 = new Uint16Array(10);
          var c6;
          var mask;
          var f5;
          var i4;
          if (this._leftover) {
            i4 = this._leftover;
            this._buffer[i4++] = 1;
            for (; i4 < 16; i4++) {
              this._buffer[i4] = 0;
            }
            this._fin = 1;
            this._blocks(this._buffer, 0, 16);
          }
          c6 = this._h[1] >>> 13;
          this._h[1] &= 8191;
          for (i4 = 2; i4 < 10; i4++) {
            this._h[i4] += c6;
            c6 = this._h[i4] >>> 13;
            this._h[i4] &= 8191;
          }
          this._h[0] += c6 * 5;
          c6 = this._h[0] >>> 13;
          this._h[0] &= 8191;
          this._h[1] += c6;
          c6 = this._h[1] >>> 13;
          this._h[1] &= 8191;
          this._h[2] += c6;
          g5[0] = this._h[0] + 5;
          c6 = g5[0] >>> 13;
          g5[0] &= 8191;
          for (i4 = 1; i4 < 10; i4++) {
            g5[i4] = this._h[i4] + c6;
            c6 = g5[i4] >>> 13;
            g5[i4] &= 8191;
          }
          g5[9] -= 1 << 13;
          mask = (c6 ^ 1) - 1;
          for (i4 = 0; i4 < 10; i4++) {
            g5[i4] &= mask;
          }
          mask = ~mask;
          for (i4 = 0; i4 < 10; i4++) {
            this._h[i4] = this._h[i4] & mask | g5[i4];
          }
          this._h[0] = (this._h[0] | this._h[1] << 13) & 65535;
          this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535;
          this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535;
          this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535;
          this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535;
          this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535;
          this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535;
          this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535;
          f5 = this._h[0] + this._pad[0];
          this._h[0] = f5 & 65535;
          for (i4 = 1; i4 < 8; i4++) {
            f5 = (this._h[i4] + this._pad[i4] | 0) + (f5 >>> 16) | 0;
            this._h[i4] = f5 & 65535;
          }
          mac[macpos + 0] = this._h[0] >>> 0;
          mac[macpos + 1] = this._h[0] >>> 8;
          mac[macpos + 2] = this._h[1] >>> 0;
          mac[macpos + 3] = this._h[1] >>> 8;
          mac[macpos + 4] = this._h[2] >>> 0;
          mac[macpos + 5] = this._h[2] >>> 8;
          mac[macpos + 6] = this._h[3] >>> 0;
          mac[macpos + 7] = this._h[3] >>> 8;
          mac[macpos + 8] = this._h[4] >>> 0;
          mac[macpos + 9] = this._h[4] >>> 8;
          mac[macpos + 10] = this._h[5] >>> 0;
          mac[macpos + 11] = this._h[5] >>> 8;
          mac[macpos + 12] = this._h[6] >>> 0;
          mac[macpos + 13] = this._h[6] >>> 8;
          mac[macpos + 14] = this._h[7] >>> 0;
          mac[macpos + 15] = this._h[7] >>> 8;
          this._finished = true;
          return this;
        };
        Poly13052.prototype.update = function(m5) {
          var mpos = 0;
          var bytes = m5.length;
          var want;
          if (this._leftover) {
            want = 16 - this._leftover;
            if (want > bytes) {
              want = bytes;
            }
            for (var i4 = 0; i4 < want; i4++) {
              this._buffer[this._leftover + i4] = m5[mpos + i4];
            }
            bytes -= want;
            mpos += want;
            this._leftover += want;
            if (this._leftover < 16) {
              return this;
            }
            this._blocks(this._buffer, 0, 16);
            this._leftover = 0;
          }
          if (bytes >= 16) {
            want = bytes - bytes % 16;
            this._blocks(m5, mpos, want);
            mpos += want;
            bytes -= want;
          }
          if (bytes) {
            for (var i4 = 0; i4 < bytes; i4++) {
              this._buffer[this._leftover + i4] = m5[mpos + i4];
            }
            this._leftover += bytes;
          }
          return this;
        };
        Poly13052.prototype.digest = function() {
          if (this._finished) {
            throw new Error("Poly1305 was finished");
          }
          var mac = new Uint8Array(16);
          this.finish(mac);
          return mac;
        };
        Poly13052.prototype.clean = function() {
          wipe_1.wipe(this._buffer);
          wipe_1.wipe(this._r);
          wipe_1.wipe(this._h);
          wipe_1.wipe(this._pad);
          this._leftover = 0;
          this._fin = 0;
          this._finished = true;
          return this;
        };
        return Poly13052;
      }()
    );
    exports.Poly1305 = Poly1305;
    function oneTimeAuth(key, data) {
      var h5 = new Poly1305(key);
      h5.update(data);
      var digest2 = h5.digest();
      h5.clean();
      return digest2;
    }
    exports.oneTimeAuth = oneTimeAuth;
    function equal(a4, b5) {
      if (a4.length !== exports.DIGEST_LENGTH || b5.length !== exports.DIGEST_LENGTH) {
        return false;
      }
      return constant_time_1.equal(a4, b5);
    }
    exports.equal = equal;
  }
});

// node_modules/@stablelib/chacha20poly1305/lib/chacha20poly1305.js
var require_chacha20poly1305 = __commonJS({
  "node_modules/@stablelib/chacha20poly1305/lib/chacha20poly1305.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var chacha_1 = require_chacha();
    var poly1305_1 = require_poly1305();
    var wipe_1 = require_wipe();
    var binary_1 = require_binary();
    var constant_time_1 = require_constant_time();
    exports.KEY_LENGTH = 32;
    exports.NONCE_LENGTH = 12;
    exports.TAG_LENGTH = 16;
    var ZEROS = new Uint8Array(16);
    var ChaCha20Poly1305 = (
      /** @class */
      function() {
        function ChaCha20Poly13052(key) {
          this.nonceLength = exports.NONCE_LENGTH;
          this.tagLength = exports.TAG_LENGTH;
          if (key.length !== exports.KEY_LENGTH) {
            throw new Error("ChaCha20Poly1305 needs 32-byte key");
          }
          this._key = new Uint8Array(key);
        }
        ChaCha20Poly13052.prototype.seal = function(nonce, plaintext, associatedData, dst) {
          if (nonce.length > 16) {
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          }
          var counter = new Uint8Array(16);
          counter.set(nonce, counter.length - nonce.length);
          var authKey = new Uint8Array(32);
          chacha_1.stream(this._key, counter, authKey, 4);
          var resultLength = plaintext.length + this.tagLength;
          var result;
          if (dst) {
            if (dst.length !== resultLength) {
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            }
            result = dst;
          } else {
            result = new Uint8Array(resultLength);
          }
          chacha_1.streamXOR(this._key, counter, plaintext, result, 4);
          this._authenticate(result.subarray(result.length - this.tagLength, result.length), authKey, result.subarray(0, result.length - this.tagLength), associatedData);
          wipe_1.wipe(counter);
          return result;
        };
        ChaCha20Poly13052.prototype.open = function(nonce, sealed, associatedData, dst) {
          if (nonce.length > 16) {
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          }
          if (sealed.length < this.tagLength) {
            return null;
          }
          var counter = new Uint8Array(16);
          counter.set(nonce, counter.length - nonce.length);
          var authKey = new Uint8Array(32);
          chacha_1.stream(this._key, counter, authKey, 4);
          var calculatedTag = new Uint8Array(this.tagLength);
          this._authenticate(calculatedTag, authKey, sealed.subarray(0, sealed.length - this.tagLength), associatedData);
          if (!constant_time_1.equal(calculatedTag, sealed.subarray(sealed.length - this.tagLength, sealed.length))) {
            return null;
          }
          var resultLength = sealed.length - this.tagLength;
          var result;
          if (dst) {
            if (dst.length !== resultLength) {
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            }
            result = dst;
          } else {
            result = new Uint8Array(resultLength);
          }
          chacha_1.streamXOR(this._key, counter, sealed.subarray(0, sealed.length - this.tagLength), result, 4);
          wipe_1.wipe(counter);
          return result;
        };
        ChaCha20Poly13052.prototype.clean = function() {
          wipe_1.wipe(this._key);
          return this;
        };
        ChaCha20Poly13052.prototype._authenticate = function(tagOut, authKey, ciphertext, associatedData) {
          var h5 = new poly1305_1.Poly1305(authKey);
          if (associatedData) {
            h5.update(associatedData);
            if (associatedData.length % 16 > 0) {
              h5.update(ZEROS.subarray(associatedData.length % 16));
            }
          }
          h5.update(ciphertext);
          if (ciphertext.length % 16 > 0) {
            h5.update(ZEROS.subarray(ciphertext.length % 16));
          }
          var length2 = new Uint8Array(8);
          if (associatedData) {
            binary_1.writeUint64LE(associatedData.length, length2);
          }
          h5.update(length2);
          binary_1.writeUint64LE(ciphertext.length, length2);
          h5.update(length2);
          var tag = h5.digest();
          for (var i4 = 0; i4 < tag.length; i4++) {
            tagOut[i4] = tag[i4];
          }
          h5.clean();
          wipe_1.wipe(tag);
          wipe_1.wipe(length2);
        };
        return ChaCha20Poly13052;
      }()
    );
    exports.ChaCha20Poly1305 = ChaCha20Poly1305;
  }
});

// node_modules/@stablelib/hash/lib/hash.js
var require_hash = __commonJS({
  "node_modules/@stablelib/hash/lib/hash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isSerializableHash(h5) {
      return typeof h5.saveState !== "undefined" && typeof h5.restoreState !== "undefined" && typeof h5.cleanSavedState !== "undefined";
    }
    exports.isSerializableHash = isSerializableHash;
  }
});

// node_modules/@stablelib/hmac/lib/hmac.js
var require_hmac = __commonJS({
  "node_modules/@stablelib/hmac/lib/hmac.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var hash_1 = require_hash();
    var constant_time_1 = require_constant_time();
    var wipe_1 = require_wipe();
    var HMAC = (
      /** @class */
      function() {
        function HMAC2(hash, key) {
          this._finished = false;
          this._inner = new hash();
          this._outer = new hash();
          this.blockSize = this._outer.blockSize;
          this.digestLength = this._outer.digestLength;
          var pad = new Uint8Array(this.blockSize);
          if (key.length > this.blockSize) {
            this._inner.update(key).finish(pad).clean();
          } else {
            pad.set(key);
          }
          for (var i4 = 0; i4 < pad.length; i4++) {
            pad[i4] ^= 54;
          }
          this._inner.update(pad);
          for (var i4 = 0; i4 < pad.length; i4++) {
            pad[i4] ^= 54 ^ 92;
          }
          this._outer.update(pad);
          if (hash_1.isSerializableHash(this._inner) && hash_1.isSerializableHash(this._outer)) {
            this._innerKeyedState = this._inner.saveState();
            this._outerKeyedState = this._outer.saveState();
          }
          wipe_1.wipe(pad);
        }
        HMAC2.prototype.reset = function() {
          if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
            throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
          }
          this._inner.restoreState(this._innerKeyedState);
          this._outer.restoreState(this._outerKeyedState);
          this._finished = false;
          return this;
        };
        HMAC2.prototype.clean = function() {
          if (hash_1.isSerializableHash(this._inner)) {
            this._inner.cleanSavedState(this._innerKeyedState);
          }
          if (hash_1.isSerializableHash(this._outer)) {
            this._outer.cleanSavedState(this._outerKeyedState);
          }
          this._inner.clean();
          this._outer.clean();
        };
        HMAC2.prototype.update = function(data) {
          this._inner.update(data);
          return this;
        };
        HMAC2.prototype.finish = function(out) {
          if (this._finished) {
            this._outer.finish(out);
            return this;
          }
          this._inner.finish(out);
          this._outer.update(out.subarray(0, this.digestLength)).finish(out);
          this._finished = true;
          return this;
        };
        HMAC2.prototype.digest = function() {
          var out = new Uint8Array(this.digestLength);
          this.finish(out);
          return out;
        };
        HMAC2.prototype.saveState = function() {
          if (!hash_1.isSerializableHash(this._inner)) {
            throw new Error("hmac: can't saveState() because hash doesn't implement it");
          }
          return this._inner.saveState();
        };
        HMAC2.prototype.restoreState = function(savedState) {
          if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
            throw new Error("hmac: can't restoreState() because hash doesn't implement it");
          }
          this._inner.restoreState(savedState);
          this._outer.restoreState(this._outerKeyedState);
          this._finished = false;
          return this;
        };
        HMAC2.prototype.cleanSavedState = function(savedState) {
          if (!hash_1.isSerializableHash(this._inner)) {
            throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
          }
          this._inner.cleanSavedState(savedState);
        };
        return HMAC2;
      }()
    );
    exports.HMAC = HMAC;
    function hmac(hash, key, data) {
      var h5 = new HMAC(hash, key);
      h5.update(data);
      var digest2 = h5.digest();
      h5.clean();
      return digest2;
    }
    exports.hmac = hmac;
    exports.equal = constant_time_1.equal;
  }
});

// node_modules/@stablelib/hkdf/lib/hkdf.js
var require_hkdf = __commonJS({
  "node_modules/@stablelib/hkdf/lib/hkdf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var hmac_1 = require_hmac();
    var wipe_1 = require_wipe();
    var HKDF = (
      /** @class */
      function() {
        function HKDF2(hash, key, salt, info) {
          if (salt === void 0) {
            salt = new Uint8Array(0);
          }
          this._counter = new Uint8Array(1);
          this._hash = hash;
          this._info = info;
          var okm = hmac_1.hmac(this._hash, salt, key);
          this._hmac = new hmac_1.HMAC(hash, okm);
          this._buffer = new Uint8Array(this._hmac.digestLength);
          this._bufpos = this._buffer.length;
        }
        HKDF2.prototype._fillBuffer = function() {
          this._counter[0]++;
          var ctr = this._counter[0];
          if (ctr === 0) {
            throw new Error("hkdf: cannot expand more");
          }
          this._hmac.reset();
          if (ctr > 1) {
            this._hmac.update(this._buffer);
          }
          if (this._info) {
            this._hmac.update(this._info);
          }
          this._hmac.update(this._counter);
          this._hmac.finish(this._buffer);
          this._bufpos = 0;
        };
        HKDF2.prototype.expand = function(length2) {
          var out = new Uint8Array(length2);
          for (var i4 = 0; i4 < out.length; i4++) {
            if (this._bufpos === this._buffer.length) {
              this._fillBuffer();
            }
            out[i4] = this._buffer[this._bufpos++];
          }
          return out;
        };
        HKDF2.prototype.clean = function() {
          this._hmac.clean();
          wipe_1.wipe(this._buffer);
          wipe_1.wipe(this._counter);
          this._bufpos = 0;
        };
        return HKDF2;
      }()
    );
    exports.HKDF = HKDF;
  }
});

// node_modules/@stablelib/random/lib/source/browser.js
var require_browser = __commonJS({
  "node_modules/@stablelib/random/lib/source/browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BrowserRandomSource = void 0;
    var QUOTA = 65536;
    var BrowserRandomSource = class {
      constructor() {
        this.isAvailable = false;
        this.isInstantiated = false;
        const browserCrypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (browserCrypto && browserCrypto.getRandomValues !== void 0) {
          this._crypto = browserCrypto;
          this.isAvailable = true;
          this.isInstantiated = true;
        }
      }
      randomBytes(length2) {
        if (!this.isAvailable || !this._crypto) {
          throw new Error("Browser random byte generator is not available.");
        }
        const out = new Uint8Array(length2);
        for (let i4 = 0; i4 < out.length; i4 += QUOTA) {
          this._crypto.getRandomValues(out.subarray(i4, i4 + Math.min(out.length - i4, QUOTA)));
        }
        return out;
      }
    };
    exports.BrowserRandomSource = BrowserRandomSource;
  }
});

// browser-external:crypto
var require_crypto = __commonJS({
  "browser-external:crypto"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_3, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/@stablelib/random/lib/source/node.js
var require_node = __commonJS({
  "node_modules/@stablelib/random/lib/source/node.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NodeRandomSource = void 0;
    var wipe_1 = require_wipe();
    var NodeRandomSource = class {
      constructor() {
        this.isAvailable = false;
        this.isInstantiated = false;
        if (typeof __require !== "undefined") {
          const nodeCrypto = require_crypto();
          if (nodeCrypto && nodeCrypto.randomBytes) {
            this._crypto = nodeCrypto;
            this.isAvailable = true;
            this.isInstantiated = true;
          }
        }
      }
      randomBytes(length2) {
        if (!this.isAvailable || !this._crypto) {
          throw new Error("Node.js random byte generator is not available.");
        }
        let buffer = this._crypto.randomBytes(length2);
        if (buffer.length !== length2) {
          throw new Error("NodeRandomSource: got fewer bytes than requested");
        }
        const out = new Uint8Array(length2);
        for (let i4 = 0; i4 < out.length; i4++) {
          out[i4] = buffer[i4];
        }
        (0, wipe_1.wipe)(buffer);
        return out;
      }
    };
    exports.NodeRandomSource = NodeRandomSource;
  }
});

// node_modules/@stablelib/random/lib/source/system.js
var require_system = __commonJS({
  "node_modules/@stablelib/random/lib/source/system.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SystemRandomSource = void 0;
    var browser_1 = require_browser();
    var node_1 = require_node();
    var SystemRandomSource = class {
      constructor() {
        this.isAvailable = false;
        this.name = "";
        this._source = new browser_1.BrowserRandomSource();
        if (this._source.isAvailable) {
          this.isAvailable = true;
          this.name = "Browser";
          return;
        }
        this._source = new node_1.NodeRandomSource();
        if (this._source.isAvailable) {
          this.isAvailable = true;
          this.name = "Node";
          return;
        }
      }
      randomBytes(length2) {
        if (!this.isAvailable) {
          throw new Error("System random byte generator is not available.");
        }
        return this._source.randomBytes(length2);
      }
    };
    exports.SystemRandomSource = SystemRandomSource;
  }
});

// node_modules/@stablelib/random/lib/random.js
var require_random = __commonJS({
  "node_modules/@stablelib/random/lib/random.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.randomStringForEntropy = exports.randomString = exports.randomUint32 = exports.randomBytes = exports.defaultRandomSource = void 0;
    var system_1 = require_system();
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    exports.defaultRandomSource = new system_1.SystemRandomSource();
    function randomBytes2(length2, prng = exports.defaultRandomSource) {
      return prng.randomBytes(length2);
    }
    exports.randomBytes = randomBytes2;
    function randomUint32(prng = exports.defaultRandomSource) {
      const buf = randomBytes2(4, prng);
      const result = (0, binary_1.readUint32LE)(buf);
      (0, wipe_1.wipe)(buf);
      return result;
    }
    exports.randomUint32 = randomUint32;
    var ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function randomString(length2, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
      if (charset.length < 2) {
        throw new Error("randomString charset is too short");
      }
      if (charset.length > 256) {
        throw new Error("randomString charset is too long");
      }
      let out = "";
      const charsLen = charset.length;
      const maxByte = 256 - 256 % charsLen;
      while (length2 > 0) {
        const buf = randomBytes2(Math.ceil(length2 * 256 / maxByte), prng);
        for (let i4 = 0; i4 < buf.length && length2 > 0; i4++) {
          const randomByte = buf[i4];
          if (randomByte < maxByte) {
            out += charset.charAt(randomByte % charsLen);
            length2--;
          }
        }
        (0, wipe_1.wipe)(buf);
      }
      return out;
    }
    exports.randomString = randomString;
    function randomStringForEntropy(bits, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
      const length2 = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
      return randomString(length2, charset, prng);
    }
    exports.randomStringForEntropy = randomStringForEntropy;
  }
});

// node_modules/@stablelib/sha256/lib/sha256.js
var require_sha256 = __commonJS({
  "node_modules/@stablelib/sha256/lib/sha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    exports.DIGEST_LENGTH = 32;
    exports.BLOCK_SIZE = 64;
    var SHA256 = (
      /** @class */
      function() {
        function SHA2562() {
          this.digestLength = exports.DIGEST_LENGTH;
          this.blockSize = exports.BLOCK_SIZE;
          this._state = new Int32Array(8);
          this._temp = new Int32Array(64);
          this._buffer = new Uint8Array(128);
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          this.reset();
        }
        SHA2562.prototype._initState = function() {
          this._state[0] = 1779033703;
          this._state[1] = 3144134277;
          this._state[2] = 1013904242;
          this._state[3] = 2773480762;
          this._state[4] = 1359893119;
          this._state[5] = 2600822924;
          this._state[6] = 528734635;
          this._state[7] = 1541459225;
        };
        SHA2562.prototype.reset = function() {
          this._initState();
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          return this;
        };
        SHA2562.prototype.clean = function() {
          wipe_1.wipe(this._buffer);
          wipe_1.wipe(this._temp);
          this.reset();
        };
        SHA2562.prototype.update = function(data, dataLength) {
          if (dataLength === void 0) {
            dataLength = data.length;
          }
          if (this._finished) {
            throw new Error("SHA256: can't update because hash was finished.");
          }
          var dataPos = 0;
          this._bytesHashed += dataLength;
          if (this._bufferLength > 0) {
            while (this._bufferLength < this.blockSize && dataLength > 0) {
              this._buffer[this._bufferLength++] = data[dataPos++];
              dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
              hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
              this._bufferLength = 0;
            }
          }
          if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._temp, this._state, data, dataPos, dataLength);
            dataLength %= this.blockSize;
          }
          while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          return this;
        };
        SHA2562.prototype.finish = function(out) {
          if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = bytesHashed / 536870912 | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = bytesHashed % 64 < 56 ? 64 : 128;
            this._buffer[left] = 128;
            for (var i4 = left + 1; i4 < padLength - 8; i4++) {
              this._buffer[i4] = 0;
            }
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._temp, this._state, this._buffer, 0, padLength);
            this._finished = true;
          }
          for (var i4 = 0; i4 < this.digestLength / 4; i4++) {
            binary_1.writeUint32BE(this._state[i4], out, i4 * 4);
          }
          return this;
        };
        SHA2562.prototype.digest = function() {
          var out = new Uint8Array(this.digestLength);
          this.finish(out);
          return out;
        };
        SHA2562.prototype.saveState = function() {
          if (this._finished) {
            throw new Error("SHA256: cannot save finished state");
          }
          return {
            state: new Int32Array(this._state),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
          };
        };
        SHA2562.prototype.restoreState = function(savedState) {
          this._state.set(savedState.state);
          this._bufferLength = savedState.bufferLength;
          if (savedState.buffer) {
            this._buffer.set(savedState.buffer);
          }
          this._bytesHashed = savedState.bytesHashed;
          this._finished = false;
          return this;
        };
        SHA2562.prototype.cleanSavedState = function(savedState) {
          wipe_1.wipe(savedState.state);
          if (savedState.buffer) {
            wipe_1.wipe(savedState.buffer);
          }
          savedState.bufferLength = 0;
          savedState.bytesHashed = 0;
        };
        return SHA2562;
      }()
    );
    exports.SHA256 = SHA256;
    var K4 = new Int32Array([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]);
    function hashBlocks(w5, v5, p5, pos, len) {
      while (len >= 64) {
        var a4 = v5[0];
        var b5 = v5[1];
        var c6 = v5[2];
        var d4 = v5[3];
        var e2 = v5[4];
        var f5 = v5[5];
        var g5 = v5[6];
        var h5 = v5[7];
        for (var i4 = 0; i4 < 16; i4++) {
          var j6 = pos + i4 * 4;
          w5[i4] = binary_1.readUint32BE(p5, j6);
        }
        for (var i4 = 16; i4 < 64; i4++) {
          var u4 = w5[i4 - 2];
          var t1 = (u4 >>> 17 | u4 << 32 - 17) ^ (u4 >>> 19 | u4 << 32 - 19) ^ u4 >>> 10;
          u4 = w5[i4 - 15];
          var t2 = (u4 >>> 7 | u4 << 32 - 7) ^ (u4 >>> 18 | u4 << 32 - 18) ^ u4 >>> 3;
          w5[i4] = (t1 + w5[i4 - 7] | 0) + (t2 + w5[i4 - 16] | 0);
        }
        for (var i4 = 0; i4 < 64; i4++) {
          var t1 = (((e2 >>> 6 | e2 << 32 - 6) ^ (e2 >>> 11 | e2 << 32 - 11) ^ (e2 >>> 25 | e2 << 32 - 25)) + (e2 & f5 ^ ~e2 & g5) | 0) + (h5 + (K4[i4] + w5[i4] | 0) | 0) | 0;
          var t2 = ((a4 >>> 2 | a4 << 32 - 2) ^ (a4 >>> 13 | a4 << 32 - 13) ^ (a4 >>> 22 | a4 << 32 - 22)) + (a4 & b5 ^ a4 & c6 ^ b5 & c6) | 0;
          h5 = g5;
          g5 = f5;
          f5 = e2;
          e2 = d4 + t1 | 0;
          d4 = c6;
          c6 = b5;
          b5 = a4;
          a4 = t1 + t2 | 0;
        }
        v5[0] += a4;
        v5[1] += b5;
        v5[2] += c6;
        v5[3] += d4;
        v5[4] += e2;
        v5[5] += f5;
        v5[6] += g5;
        v5[7] += h5;
        pos += 64;
        len -= 64;
      }
      return pos;
    }
    function hash(data) {
      var h5 = new SHA256();
      h5.update(data);
      var digest2 = h5.digest();
      h5.clean();
      return digest2;
    }
    exports.hash = hash;
  }
});

// node_modules/@stablelib/x25519/lib/x25519.js
var require_x25519 = __commonJS({
  "node_modules/@stablelib/x25519/lib/x25519.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sharedKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.scalarMultBase = exports.scalarMult = exports.SHARED_KEY_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = void 0;
    var random_1 = require_random();
    var wipe_1 = require_wipe();
    exports.PUBLIC_KEY_LENGTH = 32;
    exports.SECRET_KEY_LENGTH = 32;
    exports.SHARED_KEY_LENGTH = 32;
    function gf2(init) {
      const r3 = new Float64Array(16);
      if (init) {
        for (let i4 = 0; i4 < init.length; i4++) {
          r3[i4] = init[i4];
        }
      }
      return r3;
    }
    var _9 = new Uint8Array(32);
    _9[0] = 9;
    var _121665 = gf2([56129, 1]);
    function car25519(o5) {
      let c6 = 1;
      for (let i4 = 0; i4 < 16; i4++) {
        let v5 = o5[i4] + c6 + 65535;
        c6 = Math.floor(v5 / 65536);
        o5[i4] = v5 - c6 * 65536;
      }
      o5[0] += c6 - 1 + 37 * (c6 - 1);
    }
    function sel25519(p5, q4, b5) {
      const c6 = ~(b5 - 1);
      for (let i4 = 0; i4 < 16; i4++) {
        const t = c6 & (p5[i4] ^ q4[i4]);
        p5[i4] ^= t;
        q4[i4] ^= t;
      }
    }
    function pack25519(o5, n5) {
      const m5 = gf2();
      const t = gf2();
      for (let i4 = 0; i4 < 16; i4++) {
        t[i4] = n5[i4];
      }
      car25519(t);
      car25519(t);
      car25519(t);
      for (let j6 = 0; j6 < 2; j6++) {
        m5[0] = t[0] - 65517;
        for (let i4 = 1; i4 < 15; i4++) {
          m5[i4] = t[i4] - 65535 - (m5[i4 - 1] >> 16 & 1);
          m5[i4 - 1] &= 65535;
        }
        m5[15] = t[15] - 32767 - (m5[14] >> 16 & 1);
        const b5 = m5[15] >> 16 & 1;
        m5[14] &= 65535;
        sel25519(t, m5, 1 - b5);
      }
      for (let i4 = 0; i4 < 16; i4++) {
        o5[2 * i4] = t[i4] & 255;
        o5[2 * i4 + 1] = t[i4] >> 8;
      }
    }
    function unpack25519(o5, n5) {
      for (let i4 = 0; i4 < 16; i4++) {
        o5[i4] = n5[2 * i4] + (n5[2 * i4 + 1] << 8);
      }
      o5[15] &= 32767;
    }
    function add(o5, a4, b5) {
      for (let i4 = 0; i4 < 16; i4++) {
        o5[i4] = a4[i4] + b5[i4];
      }
    }
    function sub(o5, a4, b5) {
      for (let i4 = 0; i4 < 16; i4++) {
        o5[i4] = a4[i4] - b5[i4];
      }
    }
    function mul(o5, a4, b5) {
      let v5, c6, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b02 = b5[0], b1 = b5[1], b22 = b5[2], b32 = b5[3], b42 = b5[4], b52 = b5[5], b6 = b5[6], b7 = b5[7], b8 = b5[8], b9 = b5[9], b10 = b5[10], b11 = b5[11], b12 = b5[12], b13 = b5[13], b14 = b5[14], b15 = b5[15];
      v5 = a4[0];
      t0 += v5 * b02;
      t1 += v5 * b1;
      t2 += v5 * b22;
      t3 += v5 * b32;
      t4 += v5 * b42;
      t5 += v5 * b52;
      t6 += v5 * b6;
      t7 += v5 * b7;
      t8 += v5 * b8;
      t9 += v5 * b9;
      t10 += v5 * b10;
      t11 += v5 * b11;
      t12 += v5 * b12;
      t13 += v5 * b13;
      t14 += v5 * b14;
      t15 += v5 * b15;
      v5 = a4[1];
      t1 += v5 * b02;
      t2 += v5 * b1;
      t3 += v5 * b22;
      t4 += v5 * b32;
      t5 += v5 * b42;
      t6 += v5 * b52;
      t7 += v5 * b6;
      t8 += v5 * b7;
      t9 += v5 * b8;
      t10 += v5 * b9;
      t11 += v5 * b10;
      t12 += v5 * b11;
      t13 += v5 * b12;
      t14 += v5 * b13;
      t15 += v5 * b14;
      t16 += v5 * b15;
      v5 = a4[2];
      t2 += v5 * b02;
      t3 += v5 * b1;
      t4 += v5 * b22;
      t5 += v5 * b32;
      t6 += v5 * b42;
      t7 += v5 * b52;
      t8 += v5 * b6;
      t9 += v5 * b7;
      t10 += v5 * b8;
      t11 += v5 * b9;
      t12 += v5 * b10;
      t13 += v5 * b11;
      t14 += v5 * b12;
      t15 += v5 * b13;
      t16 += v5 * b14;
      t17 += v5 * b15;
      v5 = a4[3];
      t3 += v5 * b02;
      t4 += v5 * b1;
      t5 += v5 * b22;
      t6 += v5 * b32;
      t7 += v5 * b42;
      t8 += v5 * b52;
      t9 += v5 * b6;
      t10 += v5 * b7;
      t11 += v5 * b8;
      t12 += v5 * b9;
      t13 += v5 * b10;
      t14 += v5 * b11;
      t15 += v5 * b12;
      t16 += v5 * b13;
      t17 += v5 * b14;
      t18 += v5 * b15;
      v5 = a4[4];
      t4 += v5 * b02;
      t5 += v5 * b1;
      t6 += v5 * b22;
      t7 += v5 * b32;
      t8 += v5 * b42;
      t9 += v5 * b52;
      t10 += v5 * b6;
      t11 += v5 * b7;
      t12 += v5 * b8;
      t13 += v5 * b9;
      t14 += v5 * b10;
      t15 += v5 * b11;
      t16 += v5 * b12;
      t17 += v5 * b13;
      t18 += v5 * b14;
      t19 += v5 * b15;
      v5 = a4[5];
      t5 += v5 * b02;
      t6 += v5 * b1;
      t7 += v5 * b22;
      t8 += v5 * b32;
      t9 += v5 * b42;
      t10 += v5 * b52;
      t11 += v5 * b6;
      t12 += v5 * b7;
      t13 += v5 * b8;
      t14 += v5 * b9;
      t15 += v5 * b10;
      t16 += v5 * b11;
      t17 += v5 * b12;
      t18 += v5 * b13;
      t19 += v5 * b14;
      t20 += v5 * b15;
      v5 = a4[6];
      t6 += v5 * b02;
      t7 += v5 * b1;
      t8 += v5 * b22;
      t9 += v5 * b32;
      t10 += v5 * b42;
      t11 += v5 * b52;
      t12 += v5 * b6;
      t13 += v5 * b7;
      t14 += v5 * b8;
      t15 += v5 * b9;
      t16 += v5 * b10;
      t17 += v5 * b11;
      t18 += v5 * b12;
      t19 += v5 * b13;
      t20 += v5 * b14;
      t21 += v5 * b15;
      v5 = a4[7];
      t7 += v5 * b02;
      t8 += v5 * b1;
      t9 += v5 * b22;
      t10 += v5 * b32;
      t11 += v5 * b42;
      t12 += v5 * b52;
      t13 += v5 * b6;
      t14 += v5 * b7;
      t15 += v5 * b8;
      t16 += v5 * b9;
      t17 += v5 * b10;
      t18 += v5 * b11;
      t19 += v5 * b12;
      t20 += v5 * b13;
      t21 += v5 * b14;
      t22 += v5 * b15;
      v5 = a4[8];
      t8 += v5 * b02;
      t9 += v5 * b1;
      t10 += v5 * b22;
      t11 += v5 * b32;
      t12 += v5 * b42;
      t13 += v5 * b52;
      t14 += v5 * b6;
      t15 += v5 * b7;
      t16 += v5 * b8;
      t17 += v5 * b9;
      t18 += v5 * b10;
      t19 += v5 * b11;
      t20 += v5 * b12;
      t21 += v5 * b13;
      t22 += v5 * b14;
      t23 += v5 * b15;
      v5 = a4[9];
      t9 += v5 * b02;
      t10 += v5 * b1;
      t11 += v5 * b22;
      t12 += v5 * b32;
      t13 += v5 * b42;
      t14 += v5 * b52;
      t15 += v5 * b6;
      t16 += v5 * b7;
      t17 += v5 * b8;
      t18 += v5 * b9;
      t19 += v5 * b10;
      t20 += v5 * b11;
      t21 += v5 * b12;
      t22 += v5 * b13;
      t23 += v5 * b14;
      t24 += v5 * b15;
      v5 = a4[10];
      t10 += v5 * b02;
      t11 += v5 * b1;
      t12 += v5 * b22;
      t13 += v5 * b32;
      t14 += v5 * b42;
      t15 += v5 * b52;
      t16 += v5 * b6;
      t17 += v5 * b7;
      t18 += v5 * b8;
      t19 += v5 * b9;
      t20 += v5 * b10;
      t21 += v5 * b11;
      t22 += v5 * b12;
      t23 += v5 * b13;
      t24 += v5 * b14;
      t25 += v5 * b15;
      v5 = a4[11];
      t11 += v5 * b02;
      t12 += v5 * b1;
      t13 += v5 * b22;
      t14 += v5 * b32;
      t15 += v5 * b42;
      t16 += v5 * b52;
      t17 += v5 * b6;
      t18 += v5 * b7;
      t19 += v5 * b8;
      t20 += v5 * b9;
      t21 += v5 * b10;
      t22 += v5 * b11;
      t23 += v5 * b12;
      t24 += v5 * b13;
      t25 += v5 * b14;
      t26 += v5 * b15;
      v5 = a4[12];
      t12 += v5 * b02;
      t13 += v5 * b1;
      t14 += v5 * b22;
      t15 += v5 * b32;
      t16 += v5 * b42;
      t17 += v5 * b52;
      t18 += v5 * b6;
      t19 += v5 * b7;
      t20 += v5 * b8;
      t21 += v5 * b9;
      t22 += v5 * b10;
      t23 += v5 * b11;
      t24 += v5 * b12;
      t25 += v5 * b13;
      t26 += v5 * b14;
      t27 += v5 * b15;
      v5 = a4[13];
      t13 += v5 * b02;
      t14 += v5 * b1;
      t15 += v5 * b22;
      t16 += v5 * b32;
      t17 += v5 * b42;
      t18 += v5 * b52;
      t19 += v5 * b6;
      t20 += v5 * b7;
      t21 += v5 * b8;
      t22 += v5 * b9;
      t23 += v5 * b10;
      t24 += v5 * b11;
      t25 += v5 * b12;
      t26 += v5 * b13;
      t27 += v5 * b14;
      t28 += v5 * b15;
      v5 = a4[14];
      t14 += v5 * b02;
      t15 += v5 * b1;
      t16 += v5 * b22;
      t17 += v5 * b32;
      t18 += v5 * b42;
      t19 += v5 * b52;
      t20 += v5 * b6;
      t21 += v5 * b7;
      t22 += v5 * b8;
      t23 += v5 * b9;
      t24 += v5 * b10;
      t25 += v5 * b11;
      t26 += v5 * b12;
      t27 += v5 * b13;
      t28 += v5 * b14;
      t29 += v5 * b15;
      v5 = a4[15];
      t15 += v5 * b02;
      t16 += v5 * b1;
      t17 += v5 * b22;
      t18 += v5 * b32;
      t19 += v5 * b42;
      t20 += v5 * b52;
      t21 += v5 * b6;
      t22 += v5 * b7;
      t23 += v5 * b8;
      t24 += v5 * b9;
      t25 += v5 * b10;
      t26 += v5 * b11;
      t27 += v5 * b12;
      t28 += v5 * b13;
      t29 += v5 * b14;
      t30 += v5 * b15;
      t0 += 38 * t16;
      t1 += 38 * t17;
      t2 += 38 * t18;
      t3 += 38 * t19;
      t4 += 38 * t20;
      t5 += 38 * t21;
      t6 += 38 * t22;
      t7 += 38 * t23;
      t8 += 38 * t24;
      t9 += 38 * t25;
      t10 += 38 * t26;
      t11 += 38 * t27;
      t12 += 38 * t28;
      t13 += 38 * t29;
      t14 += 38 * t30;
      c6 = 1;
      v5 = t0 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t0 = v5 - c6 * 65536;
      v5 = t1 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t1 = v5 - c6 * 65536;
      v5 = t2 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t2 = v5 - c6 * 65536;
      v5 = t3 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t3 = v5 - c6 * 65536;
      v5 = t4 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t4 = v5 - c6 * 65536;
      v5 = t5 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t5 = v5 - c6 * 65536;
      v5 = t6 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t6 = v5 - c6 * 65536;
      v5 = t7 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t7 = v5 - c6 * 65536;
      v5 = t8 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t8 = v5 - c6 * 65536;
      v5 = t9 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t9 = v5 - c6 * 65536;
      v5 = t10 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t10 = v5 - c6 * 65536;
      v5 = t11 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t11 = v5 - c6 * 65536;
      v5 = t12 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t12 = v5 - c6 * 65536;
      v5 = t13 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t13 = v5 - c6 * 65536;
      v5 = t14 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t14 = v5 - c6 * 65536;
      v5 = t15 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t15 = v5 - c6 * 65536;
      t0 += c6 - 1 + 37 * (c6 - 1);
      c6 = 1;
      v5 = t0 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t0 = v5 - c6 * 65536;
      v5 = t1 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t1 = v5 - c6 * 65536;
      v5 = t2 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t2 = v5 - c6 * 65536;
      v5 = t3 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t3 = v5 - c6 * 65536;
      v5 = t4 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t4 = v5 - c6 * 65536;
      v5 = t5 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t5 = v5 - c6 * 65536;
      v5 = t6 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t6 = v5 - c6 * 65536;
      v5 = t7 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t7 = v5 - c6 * 65536;
      v5 = t8 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t8 = v5 - c6 * 65536;
      v5 = t9 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t9 = v5 - c6 * 65536;
      v5 = t10 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t10 = v5 - c6 * 65536;
      v5 = t11 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t11 = v5 - c6 * 65536;
      v5 = t12 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t12 = v5 - c6 * 65536;
      v5 = t13 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t13 = v5 - c6 * 65536;
      v5 = t14 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t14 = v5 - c6 * 65536;
      v5 = t15 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t15 = v5 - c6 * 65536;
      t0 += c6 - 1 + 37 * (c6 - 1);
      o5[0] = t0;
      o5[1] = t1;
      o5[2] = t2;
      o5[3] = t3;
      o5[4] = t4;
      o5[5] = t5;
      o5[6] = t6;
      o5[7] = t7;
      o5[8] = t8;
      o5[9] = t9;
      o5[10] = t10;
      o5[11] = t11;
      o5[12] = t12;
      o5[13] = t13;
      o5[14] = t14;
      o5[15] = t15;
    }
    function square(o5, a4) {
      mul(o5, a4, a4);
    }
    function inv25519(o5, inp) {
      const c6 = gf2();
      for (let i4 = 0; i4 < 16; i4++) {
        c6[i4] = inp[i4];
      }
      for (let i4 = 253; i4 >= 0; i4--) {
        square(c6, c6);
        if (i4 !== 2 && i4 !== 4) {
          mul(c6, c6, inp);
        }
      }
      for (let i4 = 0; i4 < 16; i4++) {
        o5[i4] = c6[i4];
      }
    }
    function scalarMult(n5, p5) {
      const z5 = new Uint8Array(32);
      const x3 = new Float64Array(80);
      const a4 = gf2(), b5 = gf2(), c6 = gf2(), d4 = gf2(), e2 = gf2(), f5 = gf2();
      for (let i4 = 0; i4 < 31; i4++) {
        z5[i4] = n5[i4];
      }
      z5[31] = n5[31] & 127 | 64;
      z5[0] &= 248;
      unpack25519(x3, p5);
      for (let i4 = 0; i4 < 16; i4++) {
        b5[i4] = x3[i4];
      }
      a4[0] = d4[0] = 1;
      for (let i4 = 254; i4 >= 0; --i4) {
        const r3 = z5[i4 >>> 3] >>> (i4 & 7) & 1;
        sel25519(a4, b5, r3);
        sel25519(c6, d4, r3);
        add(e2, a4, c6);
        sub(a4, a4, c6);
        add(c6, b5, d4);
        sub(b5, b5, d4);
        square(d4, e2);
        square(f5, a4);
        mul(a4, c6, a4);
        mul(c6, b5, e2);
        add(e2, a4, c6);
        sub(a4, a4, c6);
        square(b5, a4);
        sub(c6, d4, f5);
        mul(a4, c6, _121665);
        add(a4, a4, d4);
        mul(c6, c6, a4);
        mul(a4, d4, f5);
        mul(d4, b5, x3);
        square(b5, e2);
        sel25519(a4, b5, r3);
        sel25519(c6, d4, r3);
      }
      for (let i4 = 0; i4 < 16; i4++) {
        x3[i4 + 16] = a4[i4];
        x3[i4 + 32] = c6[i4];
        x3[i4 + 48] = b5[i4];
        x3[i4 + 64] = d4[i4];
      }
      const x32 = x3.subarray(32);
      const x16 = x3.subarray(16);
      inv25519(x32, x32);
      mul(x16, x16, x32);
      const q4 = new Uint8Array(32);
      pack25519(q4, x16);
      return q4;
    }
    exports.scalarMult = scalarMult;
    function scalarMultBase(n5) {
      return scalarMult(n5, _9);
    }
    exports.scalarMultBase = scalarMultBase;
    function generateKeyPairFromSeed2(seed) {
      if (seed.length !== exports.SECRET_KEY_LENGTH) {
        throw new Error(`x25519: seed must be ${exports.SECRET_KEY_LENGTH} bytes`);
      }
      const secretKey = new Uint8Array(seed);
      const publicKey = scalarMultBase(secretKey);
      return {
        publicKey,
        secretKey
      };
    }
    exports.generateKeyPairFromSeed = generateKeyPairFromSeed2;
    function generateKeyPair3(prng) {
      const seed = (0, random_1.randomBytes)(32, prng);
      const result = generateKeyPairFromSeed2(seed);
      (0, wipe_1.wipe)(seed);
      return result;
    }
    exports.generateKeyPair = generateKeyPair3;
    function sharedKey2(mySecretKey, theirPublicKey, rejectZero = false) {
      if (mySecretKey.length !== exports.PUBLIC_KEY_LENGTH) {
        throw new Error("X25519: incorrect secret key length");
      }
      if (theirPublicKey.length !== exports.PUBLIC_KEY_LENGTH) {
        throw new Error("X25519: incorrect public key length");
      }
      const result = scalarMult(mySecretKey, theirPublicKey);
      if (rejectZero) {
        let zeros = 0;
        for (let i4 = 0; i4 < result.length; i4++) {
          zeros |= result[i4];
        }
        if (zeros === 0) {
          throw new Error("X25519: invalid shared key");
        }
      }
      return result;
    }
    exports.sharedKey = sharedKey2;
  }
});

// node_modules/quick-format-unescaped/index.js
var require_quick_format_unescaped = __commonJS({
  "node_modules/quick-format-unescaped/index.js"(exports, module) {
    "use strict";
    function tryStringify(o5) {
      try {
        return JSON.stringify(o5);
      } catch (e2) {
        return '"[Circular]"';
      }
    }
    module.exports = format;
    function format(f5, args, opts) {
      var ss4 = opts && opts.stringify || tryStringify;
      var offset = 1;
      if (typeof f5 === "object" && f5 !== null) {
        var len = args.length + offset;
        if (len === 1) return f5;
        var objects = new Array(len);
        objects[0] = ss4(f5);
        for (var index = 1; index < len; index++) {
          objects[index] = ss4(args[index]);
        }
        return objects.join(" ");
      }
      if (typeof f5 !== "string") {
        return f5;
      }
      var argLen = args.length;
      if (argLen === 0) return f5;
      var str = "";
      var a4 = 1 - offset;
      var lastPos = -1;
      var flen = f5 && f5.length || 0;
      for (var i4 = 0; i4 < flen; ) {
        if (f5.charCodeAt(i4) === 37 && i4 + 1 < flen) {
          lastPos = lastPos > -1 ? lastPos : 0;
          switch (f5.charCodeAt(i4 + 1)) {
            case 100:
            case 102:
              if (a4 >= argLen)
                break;
              if (args[a4] == null) break;
              if (lastPos < i4)
                str += f5.slice(lastPos, i4);
              str += Number(args[a4]);
              lastPos = i4 + 2;
              i4++;
              break;
            case 105:
              if (a4 >= argLen)
                break;
              if (args[a4] == null) break;
              if (lastPos < i4)
                str += f5.slice(lastPos, i4);
              str += Math.floor(Number(args[a4]));
              lastPos = i4 + 2;
              i4++;
              break;
            case 79:
            case 111:
            case 106:
              if (a4 >= argLen)
                break;
              if (args[a4] === void 0) break;
              if (lastPos < i4)
                str += f5.slice(lastPos, i4);
              var type = typeof args[a4];
              if (type === "string") {
                str += "'" + args[a4] + "'";
                lastPos = i4 + 2;
                i4++;
                break;
              }
              if (type === "function") {
                str += args[a4].name || "<anonymous>";
                lastPos = i4 + 2;
                i4++;
                break;
              }
              str += ss4(args[a4]);
              lastPos = i4 + 2;
              i4++;
              break;
            case 115:
              if (a4 >= argLen)
                break;
              if (lastPos < i4)
                str += f5.slice(lastPos, i4);
              str += String(args[a4]);
              lastPos = i4 + 2;
              i4++;
              break;
            case 37:
              if (lastPos < i4)
                str += f5.slice(lastPos, i4);
              str += "%";
              lastPos = i4 + 2;
              i4++;
              a4--;
              break;
          }
          ++a4;
        }
        ++i4;
      }
      if (lastPos === -1)
        return f5;
      else if (lastPos < flen) {
        str += f5.slice(lastPos);
      }
      return str;
    }
  }
});

// node_modules/pino/browser.js
var require_browser2 = __commonJS({
  "node_modules/pino/browser.js"(exports, module) {
    "use strict";
    var format = require_quick_format_unescaped();
    module.exports = pino;
    var _console = pfGlobalThisOrFallback().console || {};
    var stdSerializers = {
      mapHttpRequest: mock,
      mapHttpResponse: mock,
      wrapRequestSerializer: passthrough,
      wrapResponseSerializer: passthrough,
      wrapErrorSerializer: passthrough,
      req: mock,
      res: mock,
      err: asErrValue
    };
    function shouldSerialize(serialize, serializers) {
      if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k3) {
          return k3 !== "!stdSerializers.err";
        });
        return hasToFilter;
      } else if (serialize === true) {
        return Object.keys(serializers);
      }
      return false;
    }
    function pino(opts) {
      opts = opts || {};
      opts.browser = opts.browser || {};
      const transmit2 = opts.browser.transmit;
      if (transmit2 && typeof transmit2.send !== "function") {
        throw Error("pino: transmit option must have a send function");
      }
      const proto = opts.browser.write || _console;
      if (opts.browser.write) opts.browser.asObject = true;
      const serializers = opts.serializers || {};
      const serialize = shouldSerialize(opts.browser.serialize, serializers);
      let stdErrSerialize = opts.browser.serialize;
      if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
      const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
      if (typeof proto === "function") {
        proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
      }
      if (opts.enabled === false) opts.level = "silent";
      const level = opts.level || "info";
      const logger = Object.create(proto);
      if (!logger.log) logger.log = noop;
      Object.defineProperty(logger, "levelVal", {
        get: getLevelVal
      });
      Object.defineProperty(logger, "level", {
        get: getLevel,
        set: setLevel
      });
      const setOpts = {
        transmit: transmit2,
        serialize,
        asObject: opts.browser.asObject,
        levels,
        timestamp: getTimeFunction(opts)
      };
      logger.levels = pino.levels;
      logger.level = level;
      logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
      logger.serializers = serializers;
      logger._serialize = serialize;
      logger._stdErrSerialize = stdErrSerialize;
      logger.child = child;
      if (transmit2) logger._logEvent = createLogEventShape();
      function getLevelVal() {
        return this.level === "silent" ? Infinity : this.levels.values[this.level];
      }
      function getLevel() {
        return this._level;
      }
      function setLevel(level2) {
        if (level2 !== "silent" && !this.levels.values[level2]) {
          throw Error("unknown level " + level2);
        }
        this._level = level2;
        set2(setOpts, logger, "error", "log");
        set2(setOpts, logger, "fatal", "error");
        set2(setOpts, logger, "warn", "error");
        set2(setOpts, logger, "info", "log");
        set2(setOpts, logger, "debug", "log");
        set2(setOpts, logger, "trace", "log");
      }
      function child(bindings, childOptions) {
        if (!bindings) {
          throw new Error("missing bindings for child Pino");
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
          childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
          var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
          var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
          delete bindings.serializers;
          applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
          this._childLevel = (parent._childLevel | 0) + 1;
          this.error = bind(parent, bindings, "error");
          this.fatal = bind(parent, bindings, "fatal");
          this.warn = bind(parent, bindings, "warn");
          this.info = bind(parent, bindings, "info");
          this.debug = bind(parent, bindings, "debug");
          this.trace = bind(parent, bindings, "trace");
          if (childSerializers) {
            this.serializers = childSerializers;
            this._serialize = childSerialize;
          }
          if (transmit2) {
            this._logEvent = createLogEventShape(
              [].concat(parent._logEvent.bindings, bindings)
            );
          }
        }
        Child.prototype = this;
        return new Child(this);
      }
      return logger;
    }
    pino.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
      }
    };
    pino.stdSerializers = stdSerializers;
    pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
    function set2(opts, logger, level, fallback) {
      const proto = Object.getPrototypeOf(logger);
      logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
      wrap(opts, logger, level);
    }
    function wrap(opts, logger, level) {
      if (!opts.transmit && logger[level] === noop) return;
      logger[level] = /* @__PURE__ */ function(write) {
        return function LOG() {
          const ts4 = opts.timestamp();
          const args = new Array(arguments.length);
          const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
          for (var i4 = 0; i4 < args.length; i4++) args[i4] = arguments[i4];
          if (opts.serialize && !opts.asObject) {
            applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
          }
          if (opts.asObject) write.call(proto, asObject(this, level, args, ts4));
          else write.apply(proto, args);
          if (opts.transmit) {
            const transmitLevel = opts.transmit.level || logger.level;
            const transmitValue = pino.levels.values[transmitLevel];
            const methodValue = pino.levels.values[level];
            if (methodValue < transmitValue) return;
            transmit(this, {
              ts: ts4,
              methodLevel: level,
              methodValue,
              transmitLevel,
              transmitValue: pino.levels.values[opts.transmit.level || logger.level],
              send: opts.transmit.send,
              val: logger.levelVal
            }, args);
          }
        };
      }(logger[level]);
    }
    function asObject(logger, level, args, ts4) {
      if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
      const argsCloned = args.slice();
      let msg = argsCloned[0];
      const o5 = {};
      if (ts4) {
        o5.time = ts4;
      }
      o5.level = pino.levels.values[level];
      let lvl = (logger._childLevel | 0) + 1;
      if (lvl < 1) lvl = 1;
      if (msg !== null && typeof msg === "object") {
        while (lvl-- && typeof argsCloned[0] === "object") {
          Object.assign(o5, argsCloned.shift());
        }
        msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
      } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
      if (msg !== void 0) o5.msg = msg;
      return o5;
    }
    function applySerializers(args, serialize, serializers, stdErrSerialize) {
      for (const i4 in args) {
        if (stdErrSerialize && args[i4] instanceof Error) {
          args[i4] = pino.stdSerializers.err(args[i4]);
        } else if (typeof args[i4] === "object" && !Array.isArray(args[i4])) {
          for (const k3 in args[i4]) {
            if (serialize && serialize.indexOf(k3) > -1 && k3 in serializers) {
              args[i4][k3] = serializers[k3](args[i4][k3]);
            }
          }
        }
      }
    }
    function bind(parent, bindings, level) {
      return function() {
        const args = new Array(1 + arguments.length);
        args[0] = bindings;
        for (var i4 = 1; i4 < args.length; i4++) {
          args[i4] = arguments[i4 - 1];
        }
        return parent[level].apply(this, args);
      };
    }
    function transmit(logger, opts, args) {
      const send = opts.send;
      const ts4 = opts.ts;
      const methodLevel = opts.methodLevel;
      const methodValue = opts.methodValue;
      const val = opts.val;
      const bindings = logger._logEvent.bindings;
      applySerializers(
        args,
        logger._serialize || Object.keys(logger.serializers),
        logger.serializers,
        logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
      );
      logger._logEvent.ts = ts4;
      logger._logEvent.messages = args.filter(function(arg) {
        return bindings.indexOf(arg) === -1;
      });
      logger._logEvent.level.label = methodLevel;
      logger._logEvent.level.value = methodValue;
      send(methodLevel, logger._logEvent, val);
      logger._logEvent = createLogEventShape(bindings);
    }
    function createLogEventShape(bindings) {
      return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: { label: "", value: 0 }
      };
    }
    function asErrValue(err) {
      const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
      };
      for (const key in err) {
        if (obj[key] === void 0) {
          obj[key] = err[key];
        }
      }
      return obj;
    }
    function getTimeFunction(opts) {
      if (typeof opts.timestamp === "function") {
        return opts.timestamp;
      }
      if (opts.timestamp === false) {
        return nullTime;
      }
      return epochTime;
    }
    function mock() {
      return {};
    }
    function passthrough(a4) {
      return a4;
    }
    function noop() {
    }
    function nullTime() {
      return false;
    }
    function epochTime() {
      return Date.now();
    }
    function unixTime() {
      return Math.round(Date.now() / 1e3);
    }
    function isoTime() {
      return new Date(Date.now()).toISOString();
    }
    function pfGlobalThisOrFallback() {
      function defd(o5) {
        return typeof o5 !== "undefined" && o5;
      }
      try {
        if (typeof globalThis !== "undefined") return globalThis;
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function() {
            delete Object.prototype.globalThis;
            return this.globalThis = this;
          },
          configurable: true
        });
        return globalThis;
      } catch (e2) {
        return defd(self) || defd(window) || defd(this) || {};
      }
    }
  }
});

// node_modules/@stablelib/sha512/lib/sha512.js
var require_sha512 = __commonJS({
  "node_modules/@stablelib/sha512/lib/sha512.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    exports.DIGEST_LENGTH = 64;
    exports.BLOCK_SIZE = 128;
    var SHA512 = (
      /** @class */
      function() {
        function SHA5122() {
          this.digestLength = exports.DIGEST_LENGTH;
          this.blockSize = exports.BLOCK_SIZE;
          this._stateHi = new Int32Array(8);
          this._stateLo = new Int32Array(8);
          this._tempHi = new Int32Array(16);
          this._tempLo = new Int32Array(16);
          this._buffer = new Uint8Array(256);
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          this.reset();
        }
        SHA5122.prototype._initState = function() {
          this._stateHi[0] = 1779033703;
          this._stateHi[1] = 3144134277;
          this._stateHi[2] = 1013904242;
          this._stateHi[3] = 2773480762;
          this._stateHi[4] = 1359893119;
          this._stateHi[5] = 2600822924;
          this._stateHi[6] = 528734635;
          this._stateHi[7] = 1541459225;
          this._stateLo[0] = 4089235720;
          this._stateLo[1] = 2227873595;
          this._stateLo[2] = 4271175723;
          this._stateLo[3] = 1595750129;
          this._stateLo[4] = 2917565137;
          this._stateLo[5] = 725511199;
          this._stateLo[6] = 4215389547;
          this._stateLo[7] = 327033209;
        };
        SHA5122.prototype.reset = function() {
          this._initState();
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          return this;
        };
        SHA5122.prototype.clean = function() {
          wipe_1.wipe(this._buffer);
          wipe_1.wipe(this._tempHi);
          wipe_1.wipe(this._tempLo);
          this.reset();
        };
        SHA5122.prototype.update = function(data, dataLength) {
          if (dataLength === void 0) {
            dataLength = data.length;
          }
          if (this._finished) {
            throw new Error("SHA512: can't update because hash was finished.");
          }
          var dataPos = 0;
          this._bytesHashed += dataLength;
          if (this._bufferLength > 0) {
            while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
              this._buffer[this._bufferLength++] = data[dataPos++];
              dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
              hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
              this._bufferLength = 0;
            }
          }
          if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
            dataLength %= this.blockSize;
          }
          while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          return this;
        };
        SHA5122.prototype.finish = function(out) {
          if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = bytesHashed / 536870912 | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = bytesHashed % 128 < 112 ? 128 : 256;
            this._buffer[left] = 128;
            for (var i4 = left + 1; i4 < padLength - 8; i4++) {
              this._buffer[i4] = 0;
            }
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
            this._finished = true;
          }
          for (var i4 = 0; i4 < this.digestLength / 8; i4++) {
            binary_1.writeUint32BE(this._stateHi[i4], out, i4 * 8);
            binary_1.writeUint32BE(this._stateLo[i4], out, i4 * 8 + 4);
          }
          return this;
        };
        SHA5122.prototype.digest = function() {
          var out = new Uint8Array(this.digestLength);
          this.finish(out);
          return out;
        };
        SHA5122.prototype.saveState = function() {
          if (this._finished) {
            throw new Error("SHA256: cannot save finished state");
          }
          return {
            stateHi: new Int32Array(this._stateHi),
            stateLo: new Int32Array(this._stateLo),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
          };
        };
        SHA5122.prototype.restoreState = function(savedState) {
          this._stateHi.set(savedState.stateHi);
          this._stateLo.set(savedState.stateLo);
          this._bufferLength = savedState.bufferLength;
          if (savedState.buffer) {
            this._buffer.set(savedState.buffer);
          }
          this._bytesHashed = savedState.bytesHashed;
          this._finished = false;
          return this;
        };
        SHA5122.prototype.cleanSavedState = function(savedState) {
          wipe_1.wipe(savedState.stateHi);
          wipe_1.wipe(savedState.stateLo);
          if (savedState.buffer) {
            wipe_1.wipe(savedState.buffer);
          }
          savedState.bufferLength = 0;
          savedState.bytesHashed = 0;
        };
        return SHA5122;
      }()
    );
    exports.SHA512 = SHA512;
    var K4 = new Int32Array([
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ]);
    function hashBlocks(wh, wl, hh2, hl, m5, pos, len) {
      var ah0 = hh2[0], ah1 = hh2[1], ah2 = hh2[2], ah3 = hh2[3], ah4 = hh2[4], ah5 = hh2[5], ah6 = hh2[6], ah7 = hh2[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
      var h5, l5;
      var th2, tl;
      var a4, b5, c6, d4;
      while (len >= 128) {
        for (var i4 = 0; i4 < 16; i4++) {
          var j6 = 8 * i4 + pos;
          wh[i4] = binary_1.readUint32BE(m5, j6);
          wl[i4] = binary_1.readUint32BE(m5, j6 + 4);
        }
        for (var i4 = 0; i4 < 80; i4++) {
          var bh0 = ah0;
          var bh1 = ah1;
          var bh2 = ah2;
          var bh3 = ah3;
          var bh4 = ah4;
          var bh5 = ah5;
          var bh6 = ah6;
          var bh7 = ah7;
          var bl0 = al0;
          var bl1 = al1;
          var bl2 = al2;
          var bl3 = al3;
          var bl4 = al4;
          var bl5 = al5;
          var bl6 = al6;
          var bl7 = al7;
          h5 = ah7;
          l5 = al7;
          a4 = l5 & 65535;
          b5 = l5 >>> 16;
          c6 = h5 & 65535;
          d4 = h5 >>> 16;
          h5 = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
          l5 = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
          a4 += l5 & 65535;
          b5 += l5 >>> 16;
          c6 += h5 & 65535;
          d4 += h5 >>> 16;
          h5 = ah4 & ah5 ^ ~ah4 & ah6;
          l5 = al4 & al5 ^ ~al4 & al6;
          a4 += l5 & 65535;
          b5 += l5 >>> 16;
          c6 += h5 & 65535;
          d4 += h5 >>> 16;
          h5 = K4[i4 * 2];
          l5 = K4[i4 * 2 + 1];
          a4 += l5 & 65535;
          b5 += l5 >>> 16;
          c6 += h5 & 65535;
          d4 += h5 >>> 16;
          h5 = wh[i4 % 16];
          l5 = wl[i4 % 16];
          a4 += l5 & 65535;
          b5 += l5 >>> 16;
          c6 += h5 & 65535;
          d4 += h5 >>> 16;
          b5 += a4 >>> 16;
          c6 += b5 >>> 16;
          d4 += c6 >>> 16;
          th2 = c6 & 65535 | d4 << 16;
          tl = a4 & 65535 | b5 << 16;
          h5 = th2;
          l5 = tl;
          a4 = l5 & 65535;
          b5 = l5 >>> 16;
          c6 = h5 & 65535;
          d4 = h5 >>> 16;
          h5 = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
          l5 = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
          a4 += l5 & 65535;
          b5 += l5 >>> 16;
          c6 += h5 & 65535;
          d4 += h5 >>> 16;
          h5 = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
          l5 = al0 & al1 ^ al0 & al2 ^ al1 & al2;
          a4 += l5 & 65535;
          b5 += l5 >>> 16;
          c6 += h5 & 65535;
          d4 += h5 >>> 16;
          b5 += a4 >>> 16;
          c6 += b5 >>> 16;
          d4 += c6 >>> 16;
          bh7 = c6 & 65535 | d4 << 16;
          bl7 = a4 & 65535 | b5 << 16;
          h5 = bh3;
          l5 = bl3;
          a4 = l5 & 65535;
          b5 = l5 >>> 16;
          c6 = h5 & 65535;
          d4 = h5 >>> 16;
          h5 = th2;
          l5 = tl;
          a4 += l5 & 65535;
          b5 += l5 >>> 16;
          c6 += h5 & 65535;
          d4 += h5 >>> 16;
          b5 += a4 >>> 16;
          c6 += b5 >>> 16;
          d4 += c6 >>> 16;
          bh3 = c6 & 65535 | d4 << 16;
          bl3 = a4 & 65535 | b5 << 16;
          ah1 = bh0;
          ah2 = bh1;
          ah3 = bh2;
          ah4 = bh3;
          ah5 = bh4;
          ah6 = bh5;
          ah7 = bh6;
          ah0 = bh7;
          al1 = bl0;
          al2 = bl1;
          al3 = bl2;
          al4 = bl3;
          al5 = bl4;
          al6 = bl5;
          al7 = bl6;
          al0 = bl7;
          if (i4 % 16 === 15) {
            for (var j6 = 0; j6 < 16; j6++) {
              h5 = wh[j6];
              l5 = wl[j6];
              a4 = l5 & 65535;
              b5 = l5 >>> 16;
              c6 = h5 & 65535;
              d4 = h5 >>> 16;
              h5 = wh[(j6 + 9) % 16];
              l5 = wl[(j6 + 9) % 16];
              a4 += l5 & 65535;
              b5 += l5 >>> 16;
              c6 += h5 & 65535;
              d4 += h5 >>> 16;
              th2 = wh[(j6 + 1) % 16];
              tl = wl[(j6 + 1) % 16];
              h5 = (th2 >>> 1 | tl << 32 - 1) ^ (th2 >>> 8 | tl << 32 - 8) ^ th2 >>> 7;
              l5 = (tl >>> 1 | th2 << 32 - 1) ^ (tl >>> 8 | th2 << 32 - 8) ^ (tl >>> 7 | th2 << 32 - 7);
              a4 += l5 & 65535;
              b5 += l5 >>> 16;
              c6 += h5 & 65535;
              d4 += h5 >>> 16;
              th2 = wh[(j6 + 14) % 16];
              tl = wl[(j6 + 14) % 16];
              h5 = (th2 >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th2 << 32 - (61 - 32)) ^ th2 >>> 6;
              l5 = (tl >>> 19 | th2 << 32 - 19) ^ (th2 >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th2 << 32 - 6);
              a4 += l5 & 65535;
              b5 += l5 >>> 16;
              c6 += h5 & 65535;
              d4 += h5 >>> 16;
              b5 += a4 >>> 16;
              c6 += b5 >>> 16;
              d4 += c6 >>> 16;
              wh[j6] = c6 & 65535 | d4 << 16;
              wl[j6] = a4 & 65535 | b5 << 16;
            }
          }
        }
        h5 = ah0;
        l5 = al0;
        a4 = l5 & 65535;
        b5 = l5 >>> 16;
        c6 = h5 & 65535;
        d4 = h5 >>> 16;
        h5 = hh2[0];
        l5 = hl[0];
        a4 += l5 & 65535;
        b5 += l5 >>> 16;
        c6 += h5 & 65535;
        d4 += h5 >>> 16;
        b5 += a4 >>> 16;
        c6 += b5 >>> 16;
        d4 += c6 >>> 16;
        hh2[0] = ah0 = c6 & 65535 | d4 << 16;
        hl[0] = al0 = a4 & 65535 | b5 << 16;
        h5 = ah1;
        l5 = al1;
        a4 = l5 & 65535;
        b5 = l5 >>> 16;
        c6 = h5 & 65535;
        d4 = h5 >>> 16;
        h5 = hh2[1];
        l5 = hl[1];
        a4 += l5 & 65535;
        b5 += l5 >>> 16;
        c6 += h5 & 65535;
        d4 += h5 >>> 16;
        b5 += a4 >>> 16;
        c6 += b5 >>> 16;
        d4 += c6 >>> 16;
        hh2[1] = ah1 = c6 & 65535 | d4 << 16;
        hl[1] = al1 = a4 & 65535 | b5 << 16;
        h5 = ah2;
        l5 = al2;
        a4 = l5 & 65535;
        b5 = l5 >>> 16;
        c6 = h5 & 65535;
        d4 = h5 >>> 16;
        h5 = hh2[2];
        l5 = hl[2];
        a4 += l5 & 65535;
        b5 += l5 >>> 16;
        c6 += h5 & 65535;
        d4 += h5 >>> 16;
        b5 += a4 >>> 16;
        c6 += b5 >>> 16;
        d4 += c6 >>> 16;
        hh2[2] = ah2 = c6 & 65535 | d4 << 16;
        hl[2] = al2 = a4 & 65535 | b5 << 16;
        h5 = ah3;
        l5 = al3;
        a4 = l5 & 65535;
        b5 = l5 >>> 16;
        c6 = h5 & 65535;
        d4 = h5 >>> 16;
        h5 = hh2[3];
        l5 = hl[3];
        a4 += l5 & 65535;
        b5 += l5 >>> 16;
        c6 += h5 & 65535;
        d4 += h5 >>> 16;
        b5 += a4 >>> 16;
        c6 += b5 >>> 16;
        d4 += c6 >>> 16;
        hh2[3] = ah3 = c6 & 65535 | d4 << 16;
        hl[3] = al3 = a4 & 65535 | b5 << 16;
        h5 = ah4;
        l5 = al4;
        a4 = l5 & 65535;
        b5 = l5 >>> 16;
        c6 = h5 & 65535;
        d4 = h5 >>> 16;
        h5 = hh2[4];
        l5 = hl[4];
        a4 += l5 & 65535;
        b5 += l5 >>> 16;
        c6 += h5 & 65535;
        d4 += h5 >>> 16;
        b5 += a4 >>> 16;
        c6 += b5 >>> 16;
        d4 += c6 >>> 16;
        hh2[4] = ah4 = c6 & 65535 | d4 << 16;
        hl[4] = al4 = a4 & 65535 | b5 << 16;
        h5 = ah5;
        l5 = al5;
        a4 = l5 & 65535;
        b5 = l5 >>> 16;
        c6 = h5 & 65535;
        d4 = h5 >>> 16;
        h5 = hh2[5];
        l5 = hl[5];
        a4 += l5 & 65535;
        b5 += l5 >>> 16;
        c6 += h5 & 65535;
        d4 += h5 >>> 16;
        b5 += a4 >>> 16;
        c6 += b5 >>> 16;
        d4 += c6 >>> 16;
        hh2[5] = ah5 = c6 & 65535 | d4 << 16;
        hl[5] = al5 = a4 & 65535 | b5 << 16;
        h5 = ah6;
        l5 = al6;
        a4 = l5 & 65535;
        b5 = l5 >>> 16;
        c6 = h5 & 65535;
        d4 = h5 >>> 16;
        h5 = hh2[6];
        l5 = hl[6];
        a4 += l5 & 65535;
        b5 += l5 >>> 16;
        c6 += h5 & 65535;
        d4 += h5 >>> 16;
        b5 += a4 >>> 16;
        c6 += b5 >>> 16;
        d4 += c6 >>> 16;
        hh2[6] = ah6 = c6 & 65535 | d4 << 16;
        hl[6] = al6 = a4 & 65535 | b5 << 16;
        h5 = ah7;
        l5 = al7;
        a4 = l5 & 65535;
        b5 = l5 >>> 16;
        c6 = h5 & 65535;
        d4 = h5 >>> 16;
        h5 = hh2[7];
        l5 = hl[7];
        a4 += l5 & 65535;
        b5 += l5 >>> 16;
        c6 += h5 & 65535;
        d4 += h5 >>> 16;
        b5 += a4 >>> 16;
        c6 += b5 >>> 16;
        d4 += c6 >>> 16;
        hh2[7] = ah7 = c6 & 65535 | d4 << 16;
        hl[7] = al7 = a4 & 65535 | b5 << 16;
        pos += 128;
        len -= 128;
      }
      return pos;
    }
    function hash(data) {
      var h5 = new SHA512();
      h5.update(data);
      var digest2 = h5.digest();
      h5.clean();
      return digest2;
    }
    exports.hash = hash;
  }
});

// node_modules/@stablelib/ed25519/lib/ed25519.js
var require_ed25519 = __commonJS({
  "node_modules/@stablelib/ed25519/lib/ed25519.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertSecretKeyToX25519 = exports.convertPublicKeyToX25519 = exports.verify = exports.sign = exports.extractPublicKeyFromSecretKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.SEED_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = exports.SIGNATURE_LENGTH = void 0;
    var random_1 = require_random();
    var sha512_1 = require_sha512();
    var wipe_1 = require_wipe();
    exports.SIGNATURE_LENGTH = 64;
    exports.PUBLIC_KEY_LENGTH = 32;
    exports.SECRET_KEY_LENGTH = 64;
    exports.SEED_LENGTH = 32;
    function gf2(init) {
      const r3 = new Float64Array(16);
      if (init) {
        for (let i4 = 0; i4 < init.length; i4++) {
          r3[i4] = init[i4];
        }
      }
      return r3;
    }
    var _9 = new Uint8Array(32);
    _9[0] = 9;
    var gf0 = gf2();
    var gf1 = gf2([1]);
    var D4 = gf2([
      30883,
      4953,
      19914,
      30187,
      55467,
      16705,
      2637,
      112,
      59544,
      30585,
      16505,
      36039,
      65139,
      11119,
      27886,
      20995
    ]);
    var D22 = gf2([
      61785,
      9906,
      39828,
      60374,
      45398,
      33411,
      5274,
      224,
      53552,
      61171,
      33010,
      6542,
      64743,
      22239,
      55772,
      9222
    ]);
    var X2 = gf2([
      54554,
      36645,
      11616,
      51542,
      42930,
      38181,
      51040,
      26924,
      56412,
      64982,
      57905,
      49316,
      21502,
      52590,
      14035,
      8553
    ]);
    var Y = gf2([
      26200,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214
    ]);
    var I3 = gf2([
      41136,
      18958,
      6951,
      50414,
      58488,
      44335,
      6150,
      12099,
      55207,
      15867,
      153,
      11085,
      57099,
      20417,
      9344,
      11139
    ]);
    function set25519(r3, a4) {
      for (let i4 = 0; i4 < 16; i4++) {
        r3[i4] = a4[i4] | 0;
      }
    }
    function car25519(o5) {
      let c6 = 1;
      for (let i4 = 0; i4 < 16; i4++) {
        let v5 = o5[i4] + c6 + 65535;
        c6 = Math.floor(v5 / 65536);
        o5[i4] = v5 - c6 * 65536;
      }
      o5[0] += c6 - 1 + 37 * (c6 - 1);
    }
    function sel25519(p5, q4, b5) {
      const c6 = ~(b5 - 1);
      for (let i4 = 0; i4 < 16; i4++) {
        const t = c6 & (p5[i4] ^ q4[i4]);
        p5[i4] ^= t;
        q4[i4] ^= t;
      }
    }
    function pack25519(o5, n5) {
      const m5 = gf2();
      const t = gf2();
      for (let i4 = 0; i4 < 16; i4++) {
        t[i4] = n5[i4];
      }
      car25519(t);
      car25519(t);
      car25519(t);
      for (let j6 = 0; j6 < 2; j6++) {
        m5[0] = t[0] - 65517;
        for (let i4 = 1; i4 < 15; i4++) {
          m5[i4] = t[i4] - 65535 - (m5[i4 - 1] >> 16 & 1);
          m5[i4 - 1] &= 65535;
        }
        m5[15] = t[15] - 32767 - (m5[14] >> 16 & 1);
        const b5 = m5[15] >> 16 & 1;
        m5[14] &= 65535;
        sel25519(t, m5, 1 - b5);
      }
      for (let i4 = 0; i4 < 16; i4++) {
        o5[2 * i4] = t[i4] & 255;
        o5[2 * i4 + 1] = t[i4] >> 8;
      }
    }
    function verify32(x3, y7) {
      let d4 = 0;
      for (let i4 = 0; i4 < 32; i4++) {
        d4 |= x3[i4] ^ y7[i4];
      }
      return (1 & d4 - 1 >>> 8) - 1;
    }
    function neq25519(a4, b5) {
      const c6 = new Uint8Array(32);
      const d4 = new Uint8Array(32);
      pack25519(c6, a4);
      pack25519(d4, b5);
      return verify32(c6, d4);
    }
    function par25519(a4) {
      const d4 = new Uint8Array(32);
      pack25519(d4, a4);
      return d4[0] & 1;
    }
    function unpack25519(o5, n5) {
      for (let i4 = 0; i4 < 16; i4++) {
        o5[i4] = n5[2 * i4] + (n5[2 * i4 + 1] << 8);
      }
      o5[15] &= 32767;
    }
    function add(o5, a4, b5) {
      for (let i4 = 0; i4 < 16; i4++) {
        o5[i4] = a4[i4] + b5[i4];
      }
    }
    function sub(o5, a4, b5) {
      for (let i4 = 0; i4 < 16; i4++) {
        o5[i4] = a4[i4] - b5[i4];
      }
    }
    function mul(o5, a4, b5) {
      let v5, c6, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b02 = b5[0], b1 = b5[1], b22 = b5[2], b32 = b5[3], b42 = b5[4], b52 = b5[5], b6 = b5[6], b7 = b5[7], b8 = b5[8], b9 = b5[9], b10 = b5[10], b11 = b5[11], b12 = b5[12], b13 = b5[13], b14 = b5[14], b15 = b5[15];
      v5 = a4[0];
      t0 += v5 * b02;
      t1 += v5 * b1;
      t2 += v5 * b22;
      t3 += v5 * b32;
      t4 += v5 * b42;
      t5 += v5 * b52;
      t6 += v5 * b6;
      t7 += v5 * b7;
      t8 += v5 * b8;
      t9 += v5 * b9;
      t10 += v5 * b10;
      t11 += v5 * b11;
      t12 += v5 * b12;
      t13 += v5 * b13;
      t14 += v5 * b14;
      t15 += v5 * b15;
      v5 = a4[1];
      t1 += v5 * b02;
      t2 += v5 * b1;
      t3 += v5 * b22;
      t4 += v5 * b32;
      t5 += v5 * b42;
      t6 += v5 * b52;
      t7 += v5 * b6;
      t8 += v5 * b7;
      t9 += v5 * b8;
      t10 += v5 * b9;
      t11 += v5 * b10;
      t12 += v5 * b11;
      t13 += v5 * b12;
      t14 += v5 * b13;
      t15 += v5 * b14;
      t16 += v5 * b15;
      v5 = a4[2];
      t2 += v5 * b02;
      t3 += v5 * b1;
      t4 += v5 * b22;
      t5 += v5 * b32;
      t6 += v5 * b42;
      t7 += v5 * b52;
      t8 += v5 * b6;
      t9 += v5 * b7;
      t10 += v5 * b8;
      t11 += v5 * b9;
      t12 += v5 * b10;
      t13 += v5 * b11;
      t14 += v5 * b12;
      t15 += v5 * b13;
      t16 += v5 * b14;
      t17 += v5 * b15;
      v5 = a4[3];
      t3 += v5 * b02;
      t4 += v5 * b1;
      t5 += v5 * b22;
      t6 += v5 * b32;
      t7 += v5 * b42;
      t8 += v5 * b52;
      t9 += v5 * b6;
      t10 += v5 * b7;
      t11 += v5 * b8;
      t12 += v5 * b9;
      t13 += v5 * b10;
      t14 += v5 * b11;
      t15 += v5 * b12;
      t16 += v5 * b13;
      t17 += v5 * b14;
      t18 += v5 * b15;
      v5 = a4[4];
      t4 += v5 * b02;
      t5 += v5 * b1;
      t6 += v5 * b22;
      t7 += v5 * b32;
      t8 += v5 * b42;
      t9 += v5 * b52;
      t10 += v5 * b6;
      t11 += v5 * b7;
      t12 += v5 * b8;
      t13 += v5 * b9;
      t14 += v5 * b10;
      t15 += v5 * b11;
      t16 += v5 * b12;
      t17 += v5 * b13;
      t18 += v5 * b14;
      t19 += v5 * b15;
      v5 = a4[5];
      t5 += v5 * b02;
      t6 += v5 * b1;
      t7 += v5 * b22;
      t8 += v5 * b32;
      t9 += v5 * b42;
      t10 += v5 * b52;
      t11 += v5 * b6;
      t12 += v5 * b7;
      t13 += v5 * b8;
      t14 += v5 * b9;
      t15 += v5 * b10;
      t16 += v5 * b11;
      t17 += v5 * b12;
      t18 += v5 * b13;
      t19 += v5 * b14;
      t20 += v5 * b15;
      v5 = a4[6];
      t6 += v5 * b02;
      t7 += v5 * b1;
      t8 += v5 * b22;
      t9 += v5 * b32;
      t10 += v5 * b42;
      t11 += v5 * b52;
      t12 += v5 * b6;
      t13 += v5 * b7;
      t14 += v5 * b8;
      t15 += v5 * b9;
      t16 += v5 * b10;
      t17 += v5 * b11;
      t18 += v5 * b12;
      t19 += v5 * b13;
      t20 += v5 * b14;
      t21 += v5 * b15;
      v5 = a4[7];
      t7 += v5 * b02;
      t8 += v5 * b1;
      t9 += v5 * b22;
      t10 += v5 * b32;
      t11 += v5 * b42;
      t12 += v5 * b52;
      t13 += v5 * b6;
      t14 += v5 * b7;
      t15 += v5 * b8;
      t16 += v5 * b9;
      t17 += v5 * b10;
      t18 += v5 * b11;
      t19 += v5 * b12;
      t20 += v5 * b13;
      t21 += v5 * b14;
      t22 += v5 * b15;
      v5 = a4[8];
      t8 += v5 * b02;
      t9 += v5 * b1;
      t10 += v5 * b22;
      t11 += v5 * b32;
      t12 += v5 * b42;
      t13 += v5 * b52;
      t14 += v5 * b6;
      t15 += v5 * b7;
      t16 += v5 * b8;
      t17 += v5 * b9;
      t18 += v5 * b10;
      t19 += v5 * b11;
      t20 += v5 * b12;
      t21 += v5 * b13;
      t22 += v5 * b14;
      t23 += v5 * b15;
      v5 = a4[9];
      t9 += v5 * b02;
      t10 += v5 * b1;
      t11 += v5 * b22;
      t12 += v5 * b32;
      t13 += v5 * b42;
      t14 += v5 * b52;
      t15 += v5 * b6;
      t16 += v5 * b7;
      t17 += v5 * b8;
      t18 += v5 * b9;
      t19 += v5 * b10;
      t20 += v5 * b11;
      t21 += v5 * b12;
      t22 += v5 * b13;
      t23 += v5 * b14;
      t24 += v5 * b15;
      v5 = a4[10];
      t10 += v5 * b02;
      t11 += v5 * b1;
      t12 += v5 * b22;
      t13 += v5 * b32;
      t14 += v5 * b42;
      t15 += v5 * b52;
      t16 += v5 * b6;
      t17 += v5 * b7;
      t18 += v5 * b8;
      t19 += v5 * b9;
      t20 += v5 * b10;
      t21 += v5 * b11;
      t22 += v5 * b12;
      t23 += v5 * b13;
      t24 += v5 * b14;
      t25 += v5 * b15;
      v5 = a4[11];
      t11 += v5 * b02;
      t12 += v5 * b1;
      t13 += v5 * b22;
      t14 += v5 * b32;
      t15 += v5 * b42;
      t16 += v5 * b52;
      t17 += v5 * b6;
      t18 += v5 * b7;
      t19 += v5 * b8;
      t20 += v5 * b9;
      t21 += v5 * b10;
      t22 += v5 * b11;
      t23 += v5 * b12;
      t24 += v5 * b13;
      t25 += v5 * b14;
      t26 += v5 * b15;
      v5 = a4[12];
      t12 += v5 * b02;
      t13 += v5 * b1;
      t14 += v5 * b22;
      t15 += v5 * b32;
      t16 += v5 * b42;
      t17 += v5 * b52;
      t18 += v5 * b6;
      t19 += v5 * b7;
      t20 += v5 * b8;
      t21 += v5 * b9;
      t22 += v5 * b10;
      t23 += v5 * b11;
      t24 += v5 * b12;
      t25 += v5 * b13;
      t26 += v5 * b14;
      t27 += v5 * b15;
      v5 = a4[13];
      t13 += v5 * b02;
      t14 += v5 * b1;
      t15 += v5 * b22;
      t16 += v5 * b32;
      t17 += v5 * b42;
      t18 += v5 * b52;
      t19 += v5 * b6;
      t20 += v5 * b7;
      t21 += v5 * b8;
      t22 += v5 * b9;
      t23 += v5 * b10;
      t24 += v5 * b11;
      t25 += v5 * b12;
      t26 += v5 * b13;
      t27 += v5 * b14;
      t28 += v5 * b15;
      v5 = a4[14];
      t14 += v5 * b02;
      t15 += v5 * b1;
      t16 += v5 * b22;
      t17 += v5 * b32;
      t18 += v5 * b42;
      t19 += v5 * b52;
      t20 += v5 * b6;
      t21 += v5 * b7;
      t22 += v5 * b8;
      t23 += v5 * b9;
      t24 += v5 * b10;
      t25 += v5 * b11;
      t26 += v5 * b12;
      t27 += v5 * b13;
      t28 += v5 * b14;
      t29 += v5 * b15;
      v5 = a4[15];
      t15 += v5 * b02;
      t16 += v5 * b1;
      t17 += v5 * b22;
      t18 += v5 * b32;
      t19 += v5 * b42;
      t20 += v5 * b52;
      t21 += v5 * b6;
      t22 += v5 * b7;
      t23 += v5 * b8;
      t24 += v5 * b9;
      t25 += v5 * b10;
      t26 += v5 * b11;
      t27 += v5 * b12;
      t28 += v5 * b13;
      t29 += v5 * b14;
      t30 += v5 * b15;
      t0 += 38 * t16;
      t1 += 38 * t17;
      t2 += 38 * t18;
      t3 += 38 * t19;
      t4 += 38 * t20;
      t5 += 38 * t21;
      t6 += 38 * t22;
      t7 += 38 * t23;
      t8 += 38 * t24;
      t9 += 38 * t25;
      t10 += 38 * t26;
      t11 += 38 * t27;
      t12 += 38 * t28;
      t13 += 38 * t29;
      t14 += 38 * t30;
      c6 = 1;
      v5 = t0 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t0 = v5 - c6 * 65536;
      v5 = t1 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t1 = v5 - c6 * 65536;
      v5 = t2 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t2 = v5 - c6 * 65536;
      v5 = t3 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t3 = v5 - c6 * 65536;
      v5 = t4 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t4 = v5 - c6 * 65536;
      v5 = t5 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t5 = v5 - c6 * 65536;
      v5 = t6 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t6 = v5 - c6 * 65536;
      v5 = t7 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t7 = v5 - c6 * 65536;
      v5 = t8 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t8 = v5 - c6 * 65536;
      v5 = t9 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t9 = v5 - c6 * 65536;
      v5 = t10 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t10 = v5 - c6 * 65536;
      v5 = t11 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t11 = v5 - c6 * 65536;
      v5 = t12 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t12 = v5 - c6 * 65536;
      v5 = t13 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t13 = v5 - c6 * 65536;
      v5 = t14 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t14 = v5 - c6 * 65536;
      v5 = t15 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t15 = v5 - c6 * 65536;
      t0 += c6 - 1 + 37 * (c6 - 1);
      c6 = 1;
      v5 = t0 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t0 = v5 - c6 * 65536;
      v5 = t1 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t1 = v5 - c6 * 65536;
      v5 = t2 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t2 = v5 - c6 * 65536;
      v5 = t3 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t3 = v5 - c6 * 65536;
      v5 = t4 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t4 = v5 - c6 * 65536;
      v5 = t5 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t5 = v5 - c6 * 65536;
      v5 = t6 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t6 = v5 - c6 * 65536;
      v5 = t7 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t7 = v5 - c6 * 65536;
      v5 = t8 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t8 = v5 - c6 * 65536;
      v5 = t9 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t9 = v5 - c6 * 65536;
      v5 = t10 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t10 = v5 - c6 * 65536;
      v5 = t11 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t11 = v5 - c6 * 65536;
      v5 = t12 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t12 = v5 - c6 * 65536;
      v5 = t13 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t13 = v5 - c6 * 65536;
      v5 = t14 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t14 = v5 - c6 * 65536;
      v5 = t15 + c6 + 65535;
      c6 = Math.floor(v5 / 65536);
      t15 = v5 - c6 * 65536;
      t0 += c6 - 1 + 37 * (c6 - 1);
      o5[0] = t0;
      o5[1] = t1;
      o5[2] = t2;
      o5[3] = t3;
      o5[4] = t4;
      o5[5] = t5;
      o5[6] = t6;
      o5[7] = t7;
      o5[8] = t8;
      o5[9] = t9;
      o5[10] = t10;
      o5[11] = t11;
      o5[12] = t12;
      o5[13] = t13;
      o5[14] = t14;
      o5[15] = t15;
    }
    function square(o5, a4) {
      mul(o5, a4, a4);
    }
    function inv25519(o5, i4) {
      const c6 = gf2();
      let a4;
      for (a4 = 0; a4 < 16; a4++) {
        c6[a4] = i4[a4];
      }
      for (a4 = 253; a4 >= 0; a4--) {
        square(c6, c6);
        if (a4 !== 2 && a4 !== 4) {
          mul(c6, c6, i4);
        }
      }
      for (a4 = 0; a4 < 16; a4++) {
        o5[a4] = c6[a4];
      }
    }
    function pow2523(o5, i4) {
      const c6 = gf2();
      let a4;
      for (a4 = 0; a4 < 16; a4++) {
        c6[a4] = i4[a4];
      }
      for (a4 = 250; a4 >= 0; a4--) {
        square(c6, c6);
        if (a4 !== 1) {
          mul(c6, c6, i4);
        }
      }
      for (a4 = 0; a4 < 16; a4++) {
        o5[a4] = c6[a4];
      }
    }
    function edadd(p5, q4) {
      const a4 = gf2(), b5 = gf2(), c6 = gf2(), d4 = gf2(), e2 = gf2(), f5 = gf2(), g5 = gf2(), h5 = gf2(), t = gf2();
      sub(a4, p5[1], p5[0]);
      sub(t, q4[1], q4[0]);
      mul(a4, a4, t);
      add(b5, p5[0], p5[1]);
      add(t, q4[0], q4[1]);
      mul(b5, b5, t);
      mul(c6, p5[3], q4[3]);
      mul(c6, c6, D22);
      mul(d4, p5[2], q4[2]);
      add(d4, d4, d4);
      sub(e2, b5, a4);
      sub(f5, d4, c6);
      add(g5, d4, c6);
      add(h5, b5, a4);
      mul(p5[0], e2, f5);
      mul(p5[1], h5, g5);
      mul(p5[2], g5, f5);
      mul(p5[3], e2, h5);
    }
    function cswap(p5, q4, b5) {
      for (let i4 = 0; i4 < 4; i4++) {
        sel25519(p5[i4], q4[i4], b5);
      }
    }
    function pack(r3, p5) {
      const tx = gf2(), ty = gf2(), zi2 = gf2();
      inv25519(zi2, p5[2]);
      mul(tx, p5[0], zi2);
      mul(ty, p5[1], zi2);
      pack25519(r3, ty);
      r3[31] ^= par25519(tx) << 7;
    }
    function scalarmult(p5, q4, s3) {
      set25519(p5[0], gf0);
      set25519(p5[1], gf1);
      set25519(p5[2], gf1);
      set25519(p5[3], gf0);
      for (let i4 = 255; i4 >= 0; --i4) {
        const b5 = s3[i4 / 8 | 0] >> (i4 & 7) & 1;
        cswap(p5, q4, b5);
        edadd(q4, p5);
        edadd(p5, p5);
        cswap(p5, q4, b5);
      }
    }
    function scalarbase(p5, s3) {
      const q4 = [gf2(), gf2(), gf2(), gf2()];
      set25519(q4[0], X2);
      set25519(q4[1], Y);
      set25519(q4[2], gf1);
      mul(q4[3], X2, Y);
      scalarmult(p5, q4, s3);
    }
    function generateKeyPairFromSeed2(seed) {
      if (seed.length !== exports.SEED_LENGTH) {
        throw new Error(`ed25519: seed must be ${exports.SEED_LENGTH} bytes`);
      }
      const d4 = (0, sha512_1.hash)(seed);
      d4[0] &= 248;
      d4[31] &= 127;
      d4[31] |= 64;
      const publicKey = new Uint8Array(32);
      const p5 = [gf2(), gf2(), gf2(), gf2()];
      scalarbase(p5, d4);
      pack(publicKey, p5);
      const secretKey = new Uint8Array(64);
      secretKey.set(seed);
      secretKey.set(publicKey, 32);
      return {
        publicKey,
        secretKey
      };
    }
    exports.generateKeyPairFromSeed = generateKeyPairFromSeed2;
    function generateKeyPair3(prng) {
      const seed = (0, random_1.randomBytes)(32, prng);
      const result = generateKeyPairFromSeed2(seed);
      (0, wipe_1.wipe)(seed);
      return result;
    }
    exports.generateKeyPair = generateKeyPair3;
    function extractPublicKeyFromSecretKey(secretKey) {
      if (secretKey.length !== exports.SECRET_KEY_LENGTH) {
        throw new Error(`ed25519: secret key must be ${exports.SECRET_KEY_LENGTH} bytes`);
      }
      return new Uint8Array(secretKey.subarray(32));
    }
    exports.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
    var L6 = new Float64Array([
      237,
      211,
      245,
      92,
      26,
      99,
      18,
      88,
      214,
      156,
      247,
      162,
      222,
      249,
      222,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      16
    ]);
    function modL(r3, x3) {
      let carry;
      let i4;
      let j6;
      let k3;
      for (i4 = 63; i4 >= 32; --i4) {
        carry = 0;
        for (j6 = i4 - 32, k3 = i4 - 12; j6 < k3; ++j6) {
          x3[j6] += carry - 16 * x3[i4] * L6[j6 - (i4 - 32)];
          carry = Math.floor((x3[j6] + 128) / 256);
          x3[j6] -= carry * 256;
        }
        x3[j6] += carry;
        x3[i4] = 0;
      }
      carry = 0;
      for (j6 = 0; j6 < 32; j6++) {
        x3[j6] += carry - (x3[31] >> 4) * L6[j6];
        carry = x3[j6] >> 8;
        x3[j6] &= 255;
      }
      for (j6 = 0; j6 < 32; j6++) {
        x3[j6] -= carry * L6[j6];
      }
      for (i4 = 0; i4 < 32; i4++) {
        x3[i4 + 1] += x3[i4] >> 8;
        r3[i4] = x3[i4] & 255;
      }
    }
    function reduce(r3) {
      const x3 = new Float64Array(64);
      for (let i4 = 0; i4 < 64; i4++) {
        x3[i4] = r3[i4];
      }
      for (let i4 = 0; i4 < 64; i4++) {
        r3[i4] = 0;
      }
      modL(r3, x3);
    }
    function sign2(secretKey, message) {
      const x3 = new Float64Array(64);
      const p5 = [gf2(), gf2(), gf2(), gf2()];
      const d4 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
      d4[0] &= 248;
      d4[31] &= 127;
      d4[31] |= 64;
      const signature = new Uint8Array(64);
      signature.set(d4.subarray(32), 32);
      const hs3 = new sha512_1.SHA512();
      hs3.update(signature.subarray(32));
      hs3.update(message);
      const r3 = hs3.digest();
      hs3.clean();
      reduce(r3);
      scalarbase(p5, r3);
      pack(signature, p5);
      hs3.reset();
      hs3.update(signature.subarray(0, 32));
      hs3.update(secretKey.subarray(32));
      hs3.update(message);
      const h5 = hs3.digest();
      reduce(h5);
      for (let i4 = 0; i4 < 32; i4++) {
        x3[i4] = r3[i4];
      }
      for (let i4 = 0; i4 < 32; i4++) {
        for (let j6 = 0; j6 < 32; j6++) {
          x3[i4 + j6] += h5[i4] * d4[j6];
        }
      }
      modL(signature.subarray(32), x3);
      return signature;
    }
    exports.sign = sign2;
    function unpackneg(r3, p5) {
      const t = gf2(), chk = gf2(), num = gf2(), den = gf2(), den2 = gf2(), den4 = gf2(), den6 = gf2();
      set25519(r3[2], gf1);
      unpack25519(r3[1], p5);
      square(num, r3[1]);
      mul(den, num, D4);
      sub(num, num, r3[2]);
      add(den, r3[2], den);
      square(den2, den);
      square(den4, den2);
      mul(den6, den4, den2);
      mul(t, den6, num);
      mul(t, t, den);
      pow2523(t, t);
      mul(t, t, num);
      mul(t, t, den);
      mul(t, t, den);
      mul(r3[0], t, den);
      square(chk, r3[0]);
      mul(chk, chk, den);
      if (neq25519(chk, num)) {
        mul(r3[0], r3[0], I3);
      }
      square(chk, r3[0]);
      mul(chk, chk, den);
      if (neq25519(chk, num)) {
        return -1;
      }
      if (par25519(r3[0]) === p5[31] >> 7) {
        sub(r3[0], gf0, r3[0]);
      }
      mul(r3[3], r3[0], r3[1]);
      return 0;
    }
    function verify2(publicKey, message, signature) {
      const t = new Uint8Array(32);
      const p5 = [gf2(), gf2(), gf2(), gf2()];
      const q4 = [gf2(), gf2(), gf2(), gf2()];
      if (signature.length !== exports.SIGNATURE_LENGTH) {
        throw new Error(`ed25519: signature must be ${exports.SIGNATURE_LENGTH} bytes`);
      }
      if (unpackneg(q4, publicKey)) {
        return false;
      }
      const hs3 = new sha512_1.SHA512();
      hs3.update(signature.subarray(0, 32));
      hs3.update(publicKey);
      hs3.update(message);
      const h5 = hs3.digest();
      reduce(h5);
      scalarmult(p5, q4, h5);
      scalarbase(q4, signature.subarray(32));
      edadd(p5, q4);
      pack(t, p5);
      if (verify32(signature, t)) {
        return false;
      }
      return true;
    }
    exports.verify = verify2;
    function convertPublicKeyToX25519(publicKey) {
      let q4 = [gf2(), gf2(), gf2(), gf2()];
      if (unpackneg(q4, publicKey)) {
        throw new Error("Ed25519: invalid public key");
      }
      let a4 = gf2();
      let b5 = gf2();
      let y7 = q4[1];
      add(a4, gf1, y7);
      sub(b5, gf1, y7);
      inv25519(b5, b5);
      mul(a4, a4, b5);
      let z5 = new Uint8Array(32);
      pack25519(z5, a4);
      return z5;
    }
    exports.convertPublicKeyToX25519 = convertPublicKeyToX25519;
    function convertSecretKeyToX25519(secretKey) {
      const d4 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
      d4[0] &= 248;
      d4[31] &= 127;
      d4[31] |= 64;
      const o5 = new Uint8Array(d4.subarray(0, 32));
      (0, wipe_1.wipe)(d4);
      return o5;
    }
    exports.convertSecretKeyToX25519 = convertSecretKeyToX25519;
  }
});

// node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js
var tslib_es6_exports2 = {};
__export(tslib_es6_exports2, {
  __assign: () => __assign2,
  __asyncDelegator: () => __asyncDelegator2,
  __asyncGenerator: () => __asyncGenerator2,
  __asyncValues: () => __asyncValues2,
  __await: () => __await2,
  __awaiter: () => __awaiter2,
  __classPrivateFieldGet: () => __classPrivateFieldGet2,
  __classPrivateFieldSet: () => __classPrivateFieldSet2,
  __createBinding: () => __createBinding2,
  __decorate: () => __decorate2,
  __exportStar: () => __exportStar2,
  __extends: () => __extends2,
  __generator: () => __generator2,
  __importDefault: () => __importDefault2,
  __importStar: () => __importStar2,
  __makeTemplateObject: () => __makeTemplateObject2,
  __metadata: () => __metadata2,
  __param: () => __param2,
  __read: () => __read2,
  __rest: () => __rest2,
  __spread: () => __spread2,
  __spreadArrays: () => __spreadArrays2,
  __values: () => __values2
});
function __extends2(d4, b5) {
  extendStatics2(d4, b5);
  function __() {
    this.constructor = d4;
  }
  d4.prototype = b5 === null ? Object.create(b5) : (__.prototype = b5.prototype, new __());
}
function __rest2(s3, e2) {
  var t = {};
  for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5) && e2.indexOf(p5) < 0)
    t[p5] = s3[p5];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i4 = 0, p5 = Object.getOwnPropertySymbols(s3); i4 < p5.length; i4++) {
      if (e2.indexOf(p5[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p5[i4]))
        t[p5[i4]] = s3[p5[i4]];
    }
  return t;
}
function __decorate2(decorators, target, key, desc) {
  var c6 = arguments.length, r3 = c6 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
  else for (var i4 = decorators.length - 1; i4 >= 0; i4--) if (d4 = decorators[i4]) r3 = (c6 < 3 ? d4(r3) : c6 > 3 ? d4(target, key, r3) : d4(target, key)) || r3;
  return c6 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
}
function __param2(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata2(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter2(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator2(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f5, y7, t, g5;
  return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
    return this;
  }), g5;
  function verb(n5) {
    return function(v5) {
      return step([n5, v5]);
    };
  }
  function step(op) {
    if (f5) throw new TypeError("Generator is already executing.");
    while (_3) try {
      if (f5 = 1, y7 && (t = op[0] & 2 ? y7["return"] : op[0] ? y7["throw"] || ((t = y7["return"]) && t.call(y7), 0) : y7.next) && !(t = t.call(y7, op[1])).done) return t;
      if (y7 = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _3.label++;
          return { value: op[1], done: false };
        case 5:
          _3.label++;
          y7 = op[1];
          op = [0];
          continue;
        case 7:
          op = _3.ops.pop();
          _3.trys.pop();
          continue;
        default:
          if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _3 = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _3.label = op[1];
            break;
          }
          if (op[0] === 6 && _3.label < t[1]) {
            _3.label = t[1];
            t = op;
            break;
          }
          if (t && _3.label < t[2]) {
            _3.label = t[2];
            _3.ops.push(op);
            break;
          }
          if (t[2]) _3.ops.pop();
          _3.trys.pop();
          continue;
      }
      op = body.call(thisArg, _3);
    } catch (e2) {
      op = [6, e2];
      y7 = 0;
    } finally {
      f5 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding2(o5, m5, k3, k22) {
  if (k22 === void 0) k22 = k3;
  o5[k22] = m5[k3];
}
function __exportStar2(m5, exports) {
  for (var p5 in m5) if (p5 !== "default" && !exports.hasOwnProperty(p5)) exports[p5] = m5[p5];
}
function __values2(o5) {
  var s3 = typeof Symbol === "function" && Symbol.iterator, m5 = s3 && o5[s3], i4 = 0;
  if (m5) return m5.call(o5);
  if (o5 && typeof o5.length === "number") return {
    next: function() {
      if (o5 && i4 >= o5.length) o5 = void 0;
      return { value: o5 && o5[i4++], done: !o5 };
    }
  };
  throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read2(o5, n5) {
  var m5 = typeof Symbol === "function" && o5[Symbol.iterator];
  if (!m5) return o5;
  var i4 = m5.call(o5), r3, ar3 = [], e2;
  try {
    while ((n5 === void 0 || n5-- > 0) && !(r3 = i4.next()).done) ar3.push(r3.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r3 && !r3.done && (m5 = i4["return"])) m5.call(i4);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar3;
}
function __spread2() {
  for (var ar3 = [], i4 = 0; i4 < arguments.length; i4++)
    ar3 = ar3.concat(__read2(arguments[i4]));
  return ar3;
}
function __spreadArrays2() {
  for (var s3 = 0, i4 = 0, il = arguments.length; i4 < il; i4++) s3 += arguments[i4].length;
  for (var r3 = Array(s3), k3 = 0, i4 = 0; i4 < il; i4++)
    for (var a4 = arguments[i4], j6 = 0, jl = a4.length; j6 < jl; j6++, k3++)
      r3[k3] = a4[j6];
  return r3;
}
function __await2(v5) {
  return this instanceof __await2 ? (this.v = v5, this) : new __await2(v5);
}
function __asyncGenerator2(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g5 = generator.apply(thisArg, _arguments || []), i4, q4 = [];
  return i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4;
  function verb(n5) {
    if (g5[n5]) i4[n5] = function(v5) {
      return new Promise(function(a4, b5) {
        q4.push([n5, v5, a4, b5]) > 1 || resume(n5, v5);
      });
    };
  }
  function resume(n5, v5) {
    try {
      step(g5[n5](v5));
    } catch (e2) {
      settle(q4[0][3], e2);
    }
  }
  function step(r3) {
    r3.value instanceof __await2 ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q4[0][2], r3);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f5, v5) {
    if (f5(v5), q4.shift(), q4.length) resume(q4[0][0], q4[0][1]);
  }
}
function __asyncDelegator2(o5) {
  var i4, p5;
  return i4 = {}, verb("next"), verb("throw", function(e2) {
    throw e2;
  }), verb("return"), i4[Symbol.iterator] = function() {
    return this;
  }, i4;
  function verb(n5, f5) {
    i4[n5] = o5[n5] ? function(v5) {
      return (p5 = !p5) ? { value: __await2(o5[n5](v5)), done: n5 === "return" } : f5 ? f5(v5) : v5;
    } : f5;
  }
}
function __asyncValues2(o5) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m5 = o5[Symbol.asyncIterator], i4;
  return m5 ? m5.call(o5) : (o5 = typeof __values2 === "function" ? __values2(o5) : o5[Symbol.iterator](), i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4);
  function verb(n5) {
    i4[n5] = o5[n5] && function(v5) {
      return new Promise(function(resolve, reject) {
        v5 = o5[n5](v5), settle(resolve, reject, v5.done, v5.value);
      });
    };
  }
  function settle(resolve, reject, d4, v5) {
    Promise.resolve(v5).then(function(v6) {
      resolve({ value: v6, done: d4 });
    }, reject);
  }
}
function __makeTemplateObject2(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar2(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k3 in mod) if (Object.hasOwnProperty.call(mod, k3)) result[k3] = mod[k3];
  }
  result.default = mod;
  return result;
}
function __importDefault2(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet2(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet2(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics2, __assign2;
var init_tslib_es62 = __esm({
  "node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js"() {
    extendStatics2 = function(d4, b5) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d5, b6) {
        d5.__proto__ = b6;
      } || function(d5, b6) {
        for (var p5 in b6) if (b6.hasOwnProperty(p5)) d5[p5] = b6[p5];
      };
      return extendStatics2(d4, b5);
    };
    __assign2 = function() {
      __assign2 = Object.assign || function __assign3(t) {
        for (var s3, i4 = 1, n5 = arguments.length; i4 < n5; i4++) {
          s3 = arguments[i4];
          for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5)) t[p5] = s3[p5];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
  }
});

// node_modules/@walletconnect/environment/dist/cjs/crypto.js
var require_crypto2 = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
    function getBrowerCrypto() {
      return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};
    }
    exports.getBrowerCrypto = getBrowerCrypto;
    function getSubtleCrypto() {
      const browserCrypto = getBrowerCrypto();
      return browserCrypto.subtle || browserCrypto.webkitSubtle;
    }
    exports.getSubtleCrypto = getSubtleCrypto;
    function isBrowserCryptoAvailable() {
      return !!getBrowerCrypto() && !!getSubtleCrypto();
    }
    exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
  }
});

// node_modules/@walletconnect/environment/dist/cjs/env.js
var require_env = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
    function isReactNative() {
      return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
    }
    exports.isReactNative = isReactNative;
    function isNode2() {
      return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
    }
    exports.isNode = isNode2;
    function isBrowser() {
      return !isReactNative() && !isNode2();
    }
    exports.isBrowser = isBrowser;
  }
});

// node_modules/@walletconnect/environment/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    tslib_1.__exportStar(require_crypto2(), exports);
    tslib_1.__exportStar(require_env(), exports);
  }
});

// node_modules/@walletconnect/jsonrpc-ws-connection/node_modules/ws/browser.js
var require_browser3 = __commonJS({
  "node_modules/@walletconnect/jsonrpc-ws-connection/node_modules/ws/browser.js"(exports, module) {
    "use strict";
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// node_modules/lodash.isequal/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.isequal/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e2) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayFilter(array, predicate) {
      var index = -1, length2 = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length2) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length2 = values.length, offset = array.length;
      while (++index < length2) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arraySome(array, predicate) {
      var index = -1, length2 = array == null ? 0 : array.length;
      while (++index < length2) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseTimes(n5, iteratee) {
      var index = -1, result = Array(n5);
      while (++index < n5) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set2) {
      var index = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView2 = getNative(root, "DataView");
    var Map2 = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set2 = getNative(root, "Set");
    var WeakMap = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length2) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length2) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length2) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length2 = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length2) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length2 = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length2)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf(array, key) {
      var length2 = array.length;
      while (length2--) {
        if (eq(array[length2][0], key)) {
          return length2;
        }
      }
      return -1;
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys2, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e2) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function isIndex(value, length2) {
      length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
      return !!length2 && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e2) {
        }
        try {
          return func + "";
        } catch (e2) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function keys2(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = isEqual;
  }
});

// node_modules/unfetch/dist/unfetch.module.js
var unfetch_module_exports = {};
__export(unfetch_module_exports, {
  default: () => unfetch_module_default
});
function unfetch_module_default(e2, n5) {
  return n5 = n5 || {}, new Promise(function(t, r3) {
    var s3 = new XMLHttpRequest(), o5 = [], u4 = [], i4 = {}, a4 = function() {
      return { ok: 2 == (s3.status / 100 | 0), statusText: s3.statusText, status: s3.status, url: s3.responseURL, text: function() {
        return Promise.resolve(s3.responseText);
      }, json: function() {
        return Promise.resolve(s3.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([s3.response]));
      }, clone: a4, headers: { keys: function() {
        return o5;
      }, entries: function() {
        return u4;
      }, get: function(e3) {
        return i4[e3.toLowerCase()];
      }, has: function(e3) {
        return e3.toLowerCase() in i4;
      } } };
    };
    for (var l5 in s3.open(n5.method || "get", e2, true), s3.onload = function() {
      s3.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e3, n6, t2) {
        o5.push(n6 = n6.toLowerCase()), u4.push([n6, t2]), i4[n6] = i4[n6] ? i4[n6] + "," + t2 : t2;
      }), t(a4());
    }, s3.onerror = r3, s3.withCredentials = "include" == n5.credentials, n5.headers) s3.setRequestHeader(l5, n5.headers[l5]);
    s3.send(n5.body || null);
  });
}
var init_unfetch_module = __esm({
  "node_modules/unfetch/dist/unfetch.module.js"() {
  }
});

// node_modules/isomorphic-unfetch/browser.js
var require_browser4 = __commonJS({
  "node_modules/isomorphic-unfetch/browser.js"(exports, module) {
    module.exports = self.fetch || (self.fetch = (init_unfetch_module(), __toCommonJS(unfetch_module_exports)).default || (init_unfetch_module(), __toCommonJS(unfetch_module_exports)));
  }
});

// node_modules/@walletconnect/jsonrpc-http-connection/node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
  "node_modules/@walletconnect/jsonrpc-http-connection/node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    var global2 = typeof self !== "undefined" ? self : exports;
    var __self__ = function() {
      function F() {
        this.fetch = false;
        this.DOMException = global2.DOMException;
      }
      F.prototype = global2;
      return new F();
    }();
    (function(self2) {
      var irrelevant = function(exports2) {
        var support = {
          searchParams: "URLSearchParams" in self2,
          iterable: "Symbol" in self2 && "iterator" in Symbol,
          blob: "FileReader" in self2 && "Blob" in self2 && function() {
            try {
              new Blob();
              return true;
            } catch (e2) {
              return false;
            }
          }(),
          formData: "FormData" in self2,
          arrayBuffer: "ArrayBuffer" in self2
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name2) {
          if (typeof name2 !== "string") {
            name2 = String(name2);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name2)) {
            throw new TypeError("Invalid character in header field name");
          }
          return name2.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers(headers) {
          this.map = {};
          if (headers instanceof Headers) {
            headers.forEach(function(value, name2) {
              this.append(name2, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name2) {
              this.append(name2, headers[name2]);
            }, this);
          }
        }
        Headers.prototype.append = function(name2, value) {
          name2 = normalizeName(name2);
          value = normalizeValue(value);
          var oldValue = this.map[name2];
          this.map[name2] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name2) {
          delete this.map[normalizeName(name2)];
        };
        Headers.prototype.get = function(name2) {
          name2 = normalizeName(name2);
          return this.has(name2) ? this.map[name2] : null;
        };
        Headers.prototype.has = function(name2) {
          return this.map.hasOwnProperty(normalizeName(name2));
        };
        Headers.prototype.set = function(name2, value) {
          this.map[normalizeName(name2)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
          for (var name2 in this.map) {
            if (this.map.hasOwnProperty(name2)) {
              callback.call(thisArg, this.map[name2], name2, this);
            }
          }
        };
        Headers.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name2) {
            items.push(name2);
          });
          return iteratorFor(items);
        };
        Headers.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name2) {
            items.push([name2, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        }
        function consumed(body) {
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsText(blob);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);
          for (var i4 = 0; i4 < view.length; i4++) {
            chars[i4] = String.fromCharCode(view[i4]);
          }
          return chars.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this._bodyInit = body;
            if (!body) {
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
            this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) {
                return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
              } else {
                return this.blob().then(readBlobAsArrayBuffer);
              }
            };
          }
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode6);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
          options = options || {};
          var body = options.body;
          if (input instanceof Request) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal;
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
        }
        Request.prototype.clone = function() {
          return new Request(this, { body: this._bodyInit });
        };
        function decode6(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name2 = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name2), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              headers.append(key, value);
            }
          });
          return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = "statusText" in options ? options.statusText : "OK";
          this.headers = new Headers(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
          });
        };
        Response.error = function() {
          var response = new Response(null, { status: 0, statusText: "" });
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response(null, { status, headers: { location: url } });
        };
        exports2.DOMException = self2.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name2) {
            this.message = message;
            this.name = name2;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init) {
          return new Promise(function(resolve, reject) {
            var request = new Request(input, init);
            if (request.signal && request.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              resolve(new Response(body, options));
            };
            xhr.onerror = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.ontimeout = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.onabort = function() {
              reject(new exports2.DOMException("Aborted", "AbortError"));
            };
            xhr.open(request.method, request.url, true);
            if (request.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr && support.blob) {
              xhr.responseType = "blob";
            }
            request.headers.forEach(function(value, name2) {
              xhr.setRequestHeader(name2, value);
            });
            if (request.signal) {
              request.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!self2.fetch) {
          self2.fetch = fetch2;
          self2.Headers = Headers;
          self2.Request = Request;
          self2.Response = Response;
        }
        exports2.Headers = Headers;
        exports2.Request = Request;
        exports2.Response = Response;
        exports2.fetch = fetch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
        return exports2;
      }({});
    })(__self__);
    __self__.fetch.ponyfill = true;
    delete __self__.fetch.polyfill;
    var ctx = __self__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});

// node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var import_events11 = __toESM(require_events());

// node_modules/detect-browser/es/index.js
var __spreadArray = function(to2, from3, pack) {
  if (pack || arguments.length === 2) for (var i4 = 0, l5 = from3.length, ar3; i4 < l5; i4++) {
    if (ar3 || !(i4 in from3)) {
      if (!ar3) ar3 = Array.prototype.slice.call(from3, 0, i4);
      ar3[i4] = from3[i4];
    }
  }
  return to2.concat(ar3 || Array.prototype.slice.call(from3));
};
var BrowserInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function BrowserInfo2(name2, version2, os3) {
      this.name = name2;
      this.version = version2;
      this.os = os3;
      this.type = "browser";
    }
    return BrowserInfo2;
  }()
);
var NodeInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function NodeInfo2(version2) {
      this.version = version2;
      this.type = "node";
      this.name = "node";
      this.os = process.platform;
    }
    return NodeInfo2;
  }()
);
var SearchBotDeviceInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function SearchBotDeviceInfo2(name2, version2, os3, bot) {
      this.name = name2;
      this.version = version2;
      this.os = os3;
      this.bot = bot;
      this.type = "bot-device";
    }
    return SearchBotDeviceInfo2;
  }()
);
var BotInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function BotInfo2() {
      this.type = "bot";
      this.bot = true;
      this.name = "bot";
      this.version = null;
      this.os = null;
    }
    return BotInfo2;
  }()
);
var ReactNativeInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function ReactNativeInfo2() {
      this.type = "react-native";
      this.name = "react-native";
      this.version = null;
      this.os = null;
    }
    return ReactNativeInfo2;
  }()
);
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", SEARCHBOX_UA_REGEX]
];
var operatingSystemRules = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function detect(userAgent) {
  if (!!userAgent) {
    return parseUserAgent(userAgent);
  }
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua2) {
  return ua2 !== "" && userAgentRules.reduce(function(matched, _a2) {
    var browser = _a2[0], regex = _a2[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua2);
    return !!uaMatch && [browser, uaMatch];
  }, false);
}
function parseUserAgent(ua2) {
  var matchedRule = matchUserAgent(ua2);
  if (!matchedRule) {
    return null;
  }
  var name2 = matchedRule[0], match = matchedRule[1];
  if (name2 === "searchbot") {
    return new BotInfo();
  }
  var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
    }
  } else {
    versionParts = [];
  }
  var version2 = versionParts.join(".");
  var os3 = detectOS(ua2);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua2);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name2, version2, os3, searchBotMatch[1]);
  }
  return new BrowserInfo(name2, version2, os3);
}
function detectOS(ua2) {
  for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
    var _a2 = operatingSystemRules[ii], os3 = _a2[0], regex = _a2[1];
    var match = regex.exec(ua2);
    if (match) {
      return os3;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode2 = typeof process !== "undefined" && process.version;
  return isNode2 ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii = 0; ii < count; ii++) {
    output.push("0");
  }
  return output;
}

// node_modules/@walletconnect/utils/dist/index.es.js
var import_time = __toESM(require_cjs());
var import_window_getters = __toESM(require_cjs2());
var import_window_metadata = __toESM(require_cjs3());
var Nr = __toESM(require_query_string());
var import_chacha20poly1305 = __toESM(require_chacha20poly1305());
var import_hkdf = __toESM(require_hkdf());
var import_random = __toESM(require_random());
var import_sha256 = __toESM(require_sha256());
var cn = __toESM(require_x25519());

// node_modules/uint8arrays/esm/src/alloc.js
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return globalThis.Buffer.allocUnsafe(size);
  }
  return new Uint8Array(size);
}

// node_modules/uint8arrays/esm/src/concat.js
function concat(arrays, length2) {
  if (!length2) {
    length2 = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length2);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}

// node_modules/multiformats/esm/src/bases/identity.js
var identity_exports = {};
__export(identity_exports, {
  identity: () => identity
});

// node_modules/multiformats/esm/vendor/base-x.js
function base(ALPHABET, name2) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j6 = 0; j6 < BASE_MAP.length; j6++) {
    BASE_MAP[j6] = 255;
  }
  for (var i4 = 0; i4 < ALPHABET.length; i4++) {
    var x3 = ALPHABET.charAt(i4);
    var xc = x3.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x3 + " is ambiguous");
    }
    BASE_MAP[xc] = i4;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode5(source) {
    if (source instanceof Uint8Array) ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length2 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i5 = 0;
      for (var it1 = size - 1; (carry !== 0 || i5 < length2) && it1 !== -1; it1--, i5++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i5;
      pbegin++;
    }
    var it2 = size - length2;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length2 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i5 = 0;
      for (var it3 = size - 1; (carry !== 0 || i5 < length2) && it3 !== -1; it3--, i5++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i5;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length2;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j7 = zeroes;
    while (it4 !== size) {
      vch[j7++] = b256[it4++];
    }
    return vch;
  }
  function decode6(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name2} character`);
  }
  return {
    encode: encode5,
    decodeUnsafe,
    decode: decode6
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
var base_x_default = _brrp__multiformats_scope_baseX;

// node_modules/multiformats/esm/src/bytes.js
var empty = new Uint8Array(0);
var equals = (aa2, bb) => {
  if (aa2 === bb)
    return true;
  if (aa2.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa2.byteLength; ii++) {
    if (aa2[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
var coerce = (o5) => {
  if (o5 instanceof Uint8Array && o5.constructor.name === "Uint8Array")
    return o5;
  if (o5 instanceof ArrayBuffer)
    return new Uint8Array(o5);
  if (ArrayBuffer.isView(o5)) {
    return new Uint8Array(o5.buffer, o5.byteOffset, o5.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
var fromString = (str) => new TextEncoder().encode(str);
var toString = (b5) => new TextDecoder().decode(b5);

// node_modules/multiformats/esm/src/bases/base.js
var Encoder = class {
  constructor(name2, prefix, baseEncode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};
var Decoder = class {
  constructor(name2, prefix, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or(this, decoder);
  }
};
var ComposedDecoder = class {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
};
var or = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
var Codec = class {
  constructor(name2, prefix, baseEncode, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name2, prefix, baseEncode);
    this.decoder = new Decoder(name2, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
};
var from = ({ name: name2, prefix, encode: encode5, decode: decode6 }) => new Codec(name2, prefix, encode5, decode6);
var baseX = ({ prefix, name: name2, alphabet: alphabet2 }) => {
  const { encode: encode5, decode: decode6 } = base_x_default(alphabet2, name2);
  return from({
    prefix,
    name: name2,
    encode: encode5,
    decode: (text) => coerce(decode6(text))
  });
};
var decode = (string2, alphabet2, bitsPerChar, name2) => {
  const codes = {};
  for (let i4 = 0; i4 < alphabet2.length; ++i4) {
    codes[alphabet2[i4]] = i4;
  }
  let end = string2.length;
  while (string2[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i4 = 0; i4 < end; ++i4) {
    const value = codes[string2[i4]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name2} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
var encode = (data, alphabet2, bitsPerChar) => {
  const pad = alphabet2[alphabet2.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i4 = 0; i4 < data.length; ++i4) {
    buffer = buffer << 8 | data[i4];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet2[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet2[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
var rfc4648 = ({ name: name2, prefix, bitsPerChar, alphabet: alphabet2 }) => {
  return from({
    prefix,
    name: name2,
    encode(input) {
      return encode(input, alphabet2, bitsPerChar);
    },
    decode(input) {
      return decode(input, alphabet2, bitsPerChar, name2);
    }
  });
};

// node_modules/multiformats/esm/src/bases/identity.js
var identity = from({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString(buf),
  decode: (str) => fromString(str)
});

// node_modules/multiformats/esm/src/bases/base2.js
var base2_exports = {};
__export(base2_exports, {
  base2: () => base2
});
var base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});

// node_modules/multiformats/esm/src/bases/base8.js
var base8_exports = {};
__export(base8_exports, {
  base8: () => base8
});
var base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});

// node_modules/multiformats/esm/src/bases/base10.js
var base10_exports = {};
__export(base10_exports, {
  base10: () => base10
});
var base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});

// node_modules/multiformats/esm/src/bases/base16.js
var base16_exports = {};
__export(base16_exports, {
  base16: () => base16,
  base16upper: () => base16upper
});
var base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
var base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});

// node_modules/multiformats/esm/src/bases/base32.js
var base32_exports = {};
__export(base32_exports, {
  base32: () => base32,
  base32hex: () => base32hex,
  base32hexpad: () => base32hexpad,
  base32hexpadupper: () => base32hexpadupper,
  base32hexupper: () => base32hexupper,
  base32pad: () => base32pad,
  base32padupper: () => base32padupper,
  base32upper: () => base32upper,
  base32z: () => base32z
});
var base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
var base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
var base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
var base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
var base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
var base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
var base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
var base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
var base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});

// node_modules/multiformats/esm/src/bases/base36.js
var base36_exports = {};
__export(base36_exports, {
  base36: () => base36,
  base36upper: () => base36upper
});
var base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
var base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});

// node_modules/multiformats/esm/src/bases/base58.js
var base58_exports = {};
__export(base58_exports, {
  base58btc: () => base58btc,
  base58flickr: () => base58flickr
});
var base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
var base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});

// node_modules/multiformats/esm/src/bases/base64.js
var base64_exports = {};
__export(base64_exports, {
  base64: () => base64,
  base64pad: () => base64pad,
  base64url: () => base64url,
  base64urlpad: () => base64urlpad
});
var base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
var base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
var base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
var base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});

// node_modules/multiformats/esm/src/bases/base256emoji.js
var base256emoji_exports = {};
__export(base256emoji_exports, {
  base256emoji: () => base256emoji
});
var alphabet = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var alphabetBytesToChars = alphabet.reduce((p5, c6, i4) => {
  p5[i4] = c6;
  return p5;
}, []);
var alphabetCharsToBytes = alphabet.reduce((p5, c6, i4) => {
  p5[c6.codePointAt(0)] = i4;
  return p5;
}, []);
function encode2(data) {
  return data.reduce((p5, c6) => {
    p5 += alphabetBytesToChars[c6];
    return p5;
  }, "");
}
function decode2(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
var base256emoji = from({
  prefix: "🚀",
  name: "base256emoji",
  encode: encode2,
  decode: decode2
});

// node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2_browser_exports = {};
__export(sha2_browser_exports, {
  sha256: () => sha256,
  sha512: () => sha512
});

// node_modules/multiformats/esm/vendor/varint.js
var encode_1 = encode3;
var MSB = 128;
var REST = 127;
var MSBALL = ~REST;
var INT = Math.pow(2, 31);
function encode3(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode3.bytes = offset - oldOffset + 1;
  return out;
}
var decode3 = read;
var MSB$1 = 128;
var REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b5, l5 = buf.length;
  do {
    if (counter >= l5) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b5 = buf[counter++];
    res += shift < 28 ? (b5 & REST$1) << shift : (b5 & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b5 >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode3,
  encodingLength: length
};
var _brrp_varint = varint;
var varint_default = _brrp_varint;

// node_modules/multiformats/esm/src/varint.js
var decode4 = (data, offset = 0) => {
  const code2 = varint_default.decode(data, offset);
  return [
    code2,
    varint_default.decode.bytes
  ];
};
var encodeTo = (int, target, offset = 0) => {
  varint_default.encode(int, target, offset);
  return target;
};
var encodingLength = (int) => {
  return varint_default.encodingLength(int);
};

// node_modules/multiformats/esm/src/hashes/digest.js
var create = (code2, digest2) => {
  const size = digest2.byteLength;
  const sizeOffset = encodingLength(code2);
  const digestOffset = sizeOffset + encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  encodeTo(code2, bytes, 0);
  encodeTo(size, bytes, sizeOffset);
  bytes.set(digest2, digestOffset);
  return new Digest(code2, size, digest2, bytes);
};
var decode5 = (multihash) => {
  const bytes = coerce(multihash);
  const [code2, sizeOffset] = decode4(bytes);
  const [size, digestOffset] = decode4(bytes.subarray(sizeOffset));
  const digest2 = bytes.subarray(sizeOffset + digestOffset);
  if (digest2.byteLength !== size) {
    throw new Error("Incorrect length");
  }
  return new Digest(code2, size, digest2, bytes);
};
var equals2 = (a4, b5) => {
  if (a4 === b5) {
    return true;
  } else {
    return a4.code === b5.code && a4.size === b5.size && equals(a4.bytes, b5.bytes);
  }
};
var Digest = class {
  constructor(code2, size, digest2, bytes) {
    this.code = code2;
    this.size = size;
    this.digest = digest2;
    this.bytes = bytes;
  }
};

// node_modules/multiformats/esm/src/hashes/hasher.js
var from2 = ({ name: name2, code: code2, encode: encode5 }) => new Hasher(name2, code2, encode5);
var Hasher = class {
  constructor(name2, code2, encode5) {
    this.name = name2;
    this.code = code2;
    this.encode = encode5;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create(this.code, result) : result.then((digest2) => create(this.code, digest2));
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};

// node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha = (name2) => async (data) => new Uint8Array(await crypto.subtle.digest(name2, data));
var sha256 = from2({
  name: "sha2-256",
  code: 18,
  encode: sha("SHA-256")
});
var sha512 = from2({
  name: "sha2-512",
  code: 19,
  encode: sha("SHA-512")
});

// node_modules/multiformats/esm/src/hashes/identity.js
var identity_exports2 = {};
__export(identity_exports2, {
  identity: () => identity2
});
var code = 0;
var name = "identity";
var encode4 = coerce;
var digest = (input) => create(code, encode4(input));
var identity2 = {
  code,
  name,
  encode: encode4,
  digest
};

// node_modules/multiformats/esm/src/codecs/json.js
var textEncoder = new TextEncoder();
var textDecoder = new TextDecoder();

// node_modules/multiformats/esm/src/cid.js
var CID = class _CID {
  constructor(version2, code2, multihash, bytes) {
    this.code = code2;
    this.version = version2;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = /* @__PURE__ */ new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: hidden,
      asCID: hidden
    });
  }
  toV0() {
    switch (this.version) {
      case 0: {
        return this;
      }
      default: {
        const { code: code2, multihash } = this;
        if (code2 !== DAG_PB_CODE) {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        return _CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
      case 0: {
        const { code: code2, digest: digest2 } = this.multihash;
        const multihash = create(code2, digest2);
        return _CID.createV1(this.code, multihash);
      }
      case 1: {
        return this;
      }
      default: {
        throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && equals2(this.multihash, other.multihash);
  }
  toString(base3) {
    const { bytes, version: version2, _baseCache } = this;
    switch (version2) {
      case 0:
        return toStringV0(bytes, _baseCache, base3 || base58btc.encoder);
      default:
        return toStringV1(bytes, _baseCache, base3 || base32.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return "CID";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "CID(" + this.toString() + ")";
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error("Deprecated, use .toString()");
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof _CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const { version: version2, code: code2, multihash, bytes } = value;
      return new _CID(version2, code2, multihash, bytes || encodeCID(version2, code2, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const { version: version2, multihash, code: code2 } = value;
      const digest2 = decode5(multihash);
      return _CID.create(version2, code2, digest2);
    } else {
      return null;
    }
  }
  static create(version2, code2, digest2) {
    if (typeof code2 !== "number") {
      throw new Error("String codecs are no longer supported");
    }
    switch (version2) {
      case 0: {
        if (code2 !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
        } else {
          return new _CID(version2, code2, digest2, digest2.bytes);
        }
      }
      case 1: {
        const bytes = encodeCID(version2, code2, digest2.bytes);
        return new _CID(version2, code2, digest2, bytes);
      }
      default: {
        throw new Error("Invalid version");
      }
    }
  }
  static createV0(digest2) {
    return _CID.create(0, DAG_PB_CODE, digest2);
  }
  static createV1(code2, digest2) {
    return _CID.create(1, code2, digest2);
  }
  static decode(bytes) {
    const [cid, remainder] = _CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error("Incorrect length");
    }
    return cid;
  }
  static decodeFirst(bytes) {
    const specs = _CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error("Incorrect length");
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest2 = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
    return [
      cid,
      bytes.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i4, length2] = decode4(initialBytes.subarray(offset));
      offset += length2;
      return i4;
    };
    let version2 = next();
    let codec = DAG_PB_CODE;
    if (version2 === 18) {
      version2 = 0;
      offset = 0;
    } else if (version2 === 1) {
      codec = next();
    }
    if (version2 !== 0 && version2 !== 1) {
      throw new RangeError(`Invalid CID version ${version2}`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return {
      version: version2,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size
    };
  }
  static parse(source, base3) {
    const [prefix, bytes] = parseCIDtoBytes(source, base3);
    const cid = _CID.decode(bytes);
    cid._baseCache.set(prefix, source);
    return cid;
  }
};
var parseCIDtoBytes = (source, base3) => {
  switch (source[0]) {
    case "Q": {
      const decoder = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(`${base58btc.prefix}${source}`)
      ];
    }
    case base58btc.prefix: {
      const decoder = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(source)
      ];
    }
    case base32.prefix: {
      const decoder = base3 || base32;
      return [
        base32.prefix,
        decoder.decode(source)
      ];
    }
    default: {
      if (base3 == null) {
        throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
      }
      return [
        source[0],
        base3.decode(source)
      ];
    }
  }
};
var toStringV0 = (bytes, cache, base3) => {
  const { prefix } = base3;
  if (prefix !== base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
  }
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes).slice(1);
    cache.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var toStringV1 = (bytes, cache, base3) => {
  const { prefix } = base3;
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes);
    cache.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var DAG_PB_CODE = 112;
var SHA_256_CODE = 18;
var encodeCID = (version2, code2, multihash) => {
  const codeOffset = encodingLength(version2);
  const hashOffset = codeOffset + encodingLength(code2);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo(version2, bytes, 0);
  encodeTo(code2, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
var cidSymbol = Symbol.for("@ipld/js-cid/CID");
var readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
var hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
var version = "0.0.0-dev";
var deprecate = (range, message) => {
  if (range.test(version)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
var IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

// node_modules/multiformats/esm/src/basics.js
var bases = {
  ...identity_exports,
  ...base2_exports,
  ...base8_exports,
  ...base10_exports,
  ...base16_exports,
  ...base32_exports,
  ...base36_exports,
  ...base58_exports,
  ...base64_exports,
  ...base256emoji_exports
};
var hashes = {
  ...sha2_browser_exports,
  ...identity_exports2
};

// node_modules/uint8arrays/esm/src/util/bases.js
function createCodec(name2, prefix, encode5, decode6) {
  return {
    name: name2,
    prefix,
    encoder: {
      name: name2,
      prefix,
      encode: encode5
    },
    decoder: { decode: decode6 }
  };
}
var string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
var ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i4 = 0; i4 < buf.length; i4++) {
    string2 += String.fromCharCode(buf[i4]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i4 = 0; i4 < str.length; i4++) {
    buf[i4] = str.charCodeAt(i4);
  }
  return buf;
});
var BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
var bases_default = BASES;

// node_modules/uint8arrays/esm/src/from-string.js
function fromString2(string2, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(string2, "utf8");
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}

// node_modules/uint8arrays/esm/src/to-string.js
function toString2(array, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}

// node_modules/@walletconnect/relay-api/dist/index.es.js
var C = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } };

// node_modules/@walletconnect/utils/dist/index.es.js
var Ir = ":";
function dn(e2) {
  const [t, r3] = e2.split(Ir);
  return { namespace: t, reference: r3 };
}
function zo(e2, t = []) {
  const r3 = [];
  return Object.keys(e2).forEach((i4) => {
    if (t.length && !t.includes(i4)) return;
    const n5 = e2[i4];
    r3.push(...n5.accounts);
  }), r3;
}
function _r(e2, t) {
  return e2.includes(":") ? [e2] : t.chains || [];
}
var Qo = Object.defineProperty;
var bn = Object.getOwnPropertySymbols;
var Jo = Object.prototype.hasOwnProperty;
var Go = Object.prototype.propertyIsEnumerable;
var yn = (e2, t, r3) => t in e2 ? Qo(e2, t, { enumerable: true, configurable: true, writable: true, value: r3 }) : e2[t] = r3;
var wn = (e2, t) => {
  for (var r3 in t || (t = {})) Jo.call(t, r3) && yn(e2, r3, t[r3]);
  if (bn) for (var r3 of bn(t)) Go.call(t, r3) && yn(e2, r3, t[r3]);
  return e2;
};
var xn = "ReactNative";
var qt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" };
var En = "js";
function pi() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function er() {
  return !(0, import_window_getters.getDocument)() && !!(0, import_window_getters.getNavigator)() && navigator.product === xn;
}
function pr() {
  return !pi() && !!(0, import_window_getters.getNavigator)() && !!(0, import_window_getters.getDocument)();
}
function We() {
  return er() ? qt.reactNative : pi() ? qt.node : pr() ? qt.browser : qt.unknown;
}
function Wo() {
  var e2;
  try {
    return er() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (e2 = global.Application) == null ? void 0 : e2.applicationId : void 0;
  } catch {
    return;
  }
}
function Sn(e2, t) {
  let r3 = Nr.parse(e2);
  return r3 = wn(wn({}, r3), t), e2 = Nr.stringify(r3), e2;
}
function Xo() {
  return (0, import_window_metadata.getWindowMetadata)() || { name: "", description: "", url: "", icons: [""] };
}
function Nn() {
  if (We() === qt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r3, Version: i4 } = global.Platform;
    return [r3, i4].join("-");
  }
  const e2 = detect();
  if (e2 === null) return "unknown";
  const t = e2.os ? e2.os.replace(" ", "").toLowerCase() : "unknown";
  return e2.type === "browser" ? [t, e2.name, e2.version].join("-") : [t, e2.version].join("-");
}
function In() {
  var e2;
  const t = We();
  return t === qt.browser ? [t, ((e2 = (0, import_window_getters.getLocation)()) == null ? void 0 : e2.host) || "unknown"].join(":") : t;
}
function _n(e2, t, r3) {
  const i4 = Nn(), n5 = In();
  return [[e2, t].join("-"), [En, r3].join("-"), i4, n5].join("/");
}
function $o({ protocol: e2, version: t, relayUrl: r3, sdkVersion: i4, auth: n5, projectId: o5, useOnCloseEvent: h5, bundleId: p5 }) {
  const b5 = r3.split("?"), m5 = _n(e2, t, i4), w5 = { auth: n5, ua: m5, projectId: o5, useOnCloseEvent: h5 || void 0, origin: p5 || void 0 }, y7 = Sn(b5[1] || "", w5);
  return b5[0] + "?" + y7;
}
function _e(e2, t) {
  return e2.filter((r3) => t.includes(r3)).length === e2.length;
}
function i0(e2) {
  return Object.fromEntries(e2.entries());
}
function n0(e2) {
  return new Map(Object.entries(e2));
}
function a0(e2 = import_time.FIVE_MINUTES, t) {
  const r3 = (0, import_time.toMiliseconds)(e2 || import_time.FIVE_MINUTES);
  let i4, n5, o5;
  return { resolve: (h5) => {
    o5 && i4 && (clearTimeout(o5), i4(h5));
  }, reject: (h5) => {
    o5 && n5 && (clearTimeout(o5), n5(h5));
  }, done: () => new Promise((h5, p5) => {
    o5 = setTimeout(() => {
      p5(new Error(t));
    }, r3), i4 = h5, n5 = p5;
  }) };
}
function u0(e2, t, r3) {
  return new Promise(async (i4, n5) => {
    const o5 = setTimeout(() => n5(new Error(r3)), t);
    try {
      const h5 = await e2;
      i4(h5);
    } catch (h5) {
      n5(h5);
    }
    clearTimeout(o5);
  });
}
function vi(e2, t) {
  if (typeof t == "string" && t.startsWith(`${e2}:`)) return t;
  if (e2.toLowerCase() === "topic") {
    if (typeof t != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (e2.toLowerCase() === "id") {
    if (typeof t != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${e2}`);
}
function h0(e2) {
  return vi("topic", e2);
}
function c0(e2) {
  return vi("id", e2);
}
function l0(e2) {
  const [t, r3] = e2.split(":"), i4 = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r3 == "string") i4.topic = r3;
  else if (t === "id" && Number.isInteger(Number(r3))) i4.id = Number(r3);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r3}`);
  return i4;
}
function d0(e2, t) {
  return (0, import_time.fromMiliseconds)((t || Date.now()) + (0, import_time.toMiliseconds)(e2));
}
function p0(e2) {
  return Date.now() >= (0, import_time.toMiliseconds)(e2);
}
function v0(e2, t) {
  return `${e2}${t ? `:${t}` : ""}`;
}
function ge(e2 = [], t = []) {
  return [.../* @__PURE__ */ new Set([...e2, ...t])];
}
async function m0({ id: e2, topic: t, wcDeepLink: r3 }) {
  try {
    if (!r3) return;
    const i4 = typeof r3 == "string" ? JSON.parse(r3) : r3;
    let n5 = i4 == null ? void 0 : i4.href;
    if (typeof n5 != "string") return;
    n5.endsWith("/") && (n5 = n5.slice(0, -1));
    const o5 = `${n5}/wc?requestId=${e2}&sessionTopic=${t}`, h5 = We();
    h5 === qt.browser ? o5.startsWith("https://") || o5.startsWith("http://") ? window.open(o5, "_blank", "noreferrer noopener") : window.open(o5, "_self", "noreferrer noopener") : h5 === qt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(o5);
  } catch (i4) {
    console.error(i4);
  }
}
async function g0(e2, t) {
  try {
    return await e2.getItem(t) || (pr() ? localStorage.getItem(t) : void 0);
  } catch (r3) {
    console.error(r3);
  }
}
var On = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function A0(e2) {
  var t = e2.default;
  if (typeof t == "function") {
    var r3 = function() {
      return t.apply(this, arguments);
    };
    r3.prototype = t.prototype;
  } else r3 = {};
  return Object.defineProperty(r3, "__esModule", { value: true }), Object.keys(e2).forEach(function(i4) {
    var n5 = Object.getOwnPropertyDescriptor(e2, i4);
    Object.defineProperty(r3, i4, n5.get ? n5 : { enumerable: true, get: function() {
      return e2[i4];
    } });
  }), r3;
}
var Pn = { exports: {} };
(function(e2) {
  (function() {
    var t = "input is invalid type", r3 = "finalize already called", i4 = typeof window == "object", n5 = i4 ? window : {};
    n5.JS_SHA3_NO_WINDOW && (i4 = false);
    var o5 = !i4 && typeof self == "object", h5 = !n5.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    h5 ? n5 = On : o5 && (n5 = self);
    var p5 = !n5.JS_SHA3_NO_COMMON_JS && true && e2.exports, b5 = !n5.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", m5 = "0123456789abcdef".split(""), w5 = [31, 7936, 2031616, 520093696], y7 = [4, 1024, 262144, 67108864], S5 = [1, 256, 65536, 16777216], I3 = [6, 1536, 393216, 100663296], N11 = [0, 8, 16, 24], C5 = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], F = [224, 256, 384, 512], U4 = [128, 256], J2 = ["hex", "buffer", "arrayBuffer", "array", "digest"], Bt3 = { 128: 168, 256: 136 };
    (n5.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(u4) {
      return Object.prototype.toString.call(u4) === "[object Array]";
    }), b5 && (n5.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(u4) {
      return typeof u4 == "object" && u4.buffer && u4.buffer.constructor === ArrayBuffer;
    });
    for (var G = function(u4, E7, _3) {
      return function(B3) {
        return new s3(u4, E7, u4).update(B3)[_3]();
      };
    }, H = function(u4, E7, _3) {
      return function(B3, R3) {
        return new s3(u4, E7, R3).update(B3)[_3]();
      };
    }, z5 = function(u4, E7, _3) {
      return function(B3, R3, T4, P2) {
        return f5["cshake" + u4].update(B3, R3, T4, P2)[_3]();
      };
    }, Pt2 = function(u4, E7, _3) {
      return function(B3, R3, T4, P2) {
        return f5["kmac" + u4].update(B3, R3, T4, P2)[_3]();
      };
    }, W2 = function(u4, E7, _3, B3) {
      for (var R3 = 0; R3 < J2.length; ++R3) {
        var T4 = J2[R3];
        u4[T4] = E7(_3, B3, T4);
      }
      return u4;
    }, Rt2 = function(u4, E7) {
      var _3 = G(u4, E7, "hex");
      return _3.create = function() {
        return new s3(u4, E7, u4);
      }, _3.update = function(B3) {
        return _3.create().update(B3);
      }, W2(_3, G, u4, E7);
    }, Yt3 = function(u4, E7) {
      var _3 = H(u4, E7, "hex");
      return _3.create = function(B3) {
        return new s3(u4, E7, B3);
      }, _3.update = function(B3, R3) {
        return _3.create(R3).update(B3);
      }, W2(_3, H, u4, E7);
    }, Y = function(u4, E7) {
      var _3 = Bt3[u4], B3 = z5(u4, E7, "hex");
      return B3.create = function(R3, T4, P2) {
        return !T4 && !P2 ? f5["shake" + u4].create(R3) : new s3(u4, E7, R3).bytepad([T4, P2], _3);
      }, B3.update = function(R3, T4, P2, O5) {
        return B3.create(T4, P2, O5).update(R3);
      }, W2(B3, z5, u4, E7);
    }, Vt3 = function(u4, E7) {
      var _3 = Bt3[u4], B3 = Pt2(u4, E7, "hex");
      return B3.create = function(R3, T4, P2) {
        return new v5(u4, E7, T4).bytepad(["KMAC", P2], _3).bytepad([R3], _3);
      }, B3.update = function(R3, T4, P2, O5) {
        return B3.create(R3, P2, O5).update(T4);
      }, W2(B3, Pt2, u4, E7);
    }, A3 = [{ name: "keccak", padding: S5, bits: F, createMethod: Rt2 }, { name: "sha3", padding: I3, bits: F, createMethod: Rt2 }, { name: "shake", padding: w5, bits: U4, createMethod: Yt3 }, { name: "cshake", padding: y7, bits: U4, createMethod: Y }, { name: "kmac", padding: y7, bits: U4, createMethod: Vt3 }], f5 = {}, a4 = [], c6 = 0; c6 < A3.length; ++c6) for (var d4 = A3[c6], g5 = d4.bits, x3 = 0; x3 < g5.length; ++x3) {
      var M4 = d4.name + "_" + g5[x3];
      if (a4.push(M4), f5[M4] = d4.createMethod(g5[x3], d4.padding), d4.name !== "sha3") {
        var l5 = d4.name + g5[x3];
        a4.push(l5), f5[l5] = f5[M4];
      }
    }
    function s3(u4, E7, _3) {
      this.blocks = [], this.s = [], this.padding = E7, this.outputBits = _3, this.reset = true, this.finalized = false, this.block = 0, this.start = 0, this.blockCount = 1600 - (u4 << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = _3 >> 5, this.extraBytes = (_3 & 31) >> 3;
      for (var B3 = 0; B3 < 50; ++B3) this.s[B3] = 0;
    }
    s3.prototype.update = function(u4) {
      if (this.finalized) throw new Error(r3);
      var E7, _3 = typeof u4;
      if (_3 !== "string") {
        if (_3 === "object") {
          if (u4 === null) throw new Error(t);
          if (b5 && u4.constructor === ArrayBuffer) u4 = new Uint8Array(u4);
          else if (!Array.isArray(u4) && (!b5 || !ArrayBuffer.isView(u4))) throw new Error(t);
        } else throw new Error(t);
        E7 = true;
      }
      for (var B3 = this.blocks, R3 = this.byteCount, T4 = u4.length, P2 = this.blockCount, O5 = 0, Ct3 = this.s, D4, q4; O5 < T4; ) {
        if (this.reset) for (this.reset = false, B3[0] = this.block, D4 = 1; D4 < P2 + 1; ++D4) B3[D4] = 0;
        if (E7) for (D4 = this.start; O5 < T4 && D4 < R3; ++O5) B3[D4 >> 2] |= u4[O5] << N11[D4++ & 3];
        else for (D4 = this.start; O5 < T4 && D4 < R3; ++O5) q4 = u4.charCodeAt(O5), q4 < 128 ? B3[D4 >> 2] |= q4 << N11[D4++ & 3] : q4 < 2048 ? (B3[D4 >> 2] |= (192 | q4 >> 6) << N11[D4++ & 3], B3[D4 >> 2] |= (128 | q4 & 63) << N11[D4++ & 3]) : q4 < 55296 || q4 >= 57344 ? (B3[D4 >> 2] |= (224 | q4 >> 12) << N11[D4++ & 3], B3[D4 >> 2] |= (128 | q4 >> 6 & 63) << N11[D4++ & 3], B3[D4 >> 2] |= (128 | q4 & 63) << N11[D4++ & 3]) : (q4 = 65536 + ((q4 & 1023) << 10 | u4.charCodeAt(++O5) & 1023), B3[D4 >> 2] |= (240 | q4 >> 18) << N11[D4++ & 3], B3[D4 >> 2] |= (128 | q4 >> 12 & 63) << N11[D4++ & 3], B3[D4 >> 2] |= (128 | q4 >> 6 & 63) << N11[D4++ & 3], B3[D4 >> 2] |= (128 | q4 & 63) << N11[D4++ & 3]);
        if (this.lastByteIndex = D4, D4 >= R3) {
          for (this.start = D4 - R3, this.block = B3[P2], D4 = 0; D4 < P2; ++D4) Ct3[D4] ^= B3[D4];
          k3(Ct3), this.reset = true;
        } else this.start = D4;
      }
      return this;
    }, s3.prototype.encode = function(u4, E7) {
      var _3 = u4 & 255, B3 = 1, R3 = [_3];
      for (u4 = u4 >> 8, _3 = u4 & 255; _3 > 0; ) R3.unshift(_3), u4 = u4 >> 8, _3 = u4 & 255, ++B3;
      return E7 ? R3.push(B3) : R3.unshift(B3), this.update(R3), R3.length;
    }, s3.prototype.encodeString = function(u4) {
      var E7, _3 = typeof u4;
      if (_3 !== "string") {
        if (_3 === "object") {
          if (u4 === null) throw new Error(t);
          if (b5 && u4.constructor === ArrayBuffer) u4 = new Uint8Array(u4);
          else if (!Array.isArray(u4) && (!b5 || !ArrayBuffer.isView(u4))) throw new Error(t);
        } else throw new Error(t);
        E7 = true;
      }
      var B3 = 0, R3 = u4.length;
      if (E7) B3 = R3;
      else for (var T4 = 0; T4 < u4.length; ++T4) {
        var P2 = u4.charCodeAt(T4);
        P2 < 128 ? B3 += 1 : P2 < 2048 ? B3 += 2 : P2 < 55296 || P2 >= 57344 ? B3 += 3 : (P2 = 65536 + ((P2 & 1023) << 10 | u4.charCodeAt(++T4) & 1023), B3 += 4);
      }
      return B3 += this.encode(B3 * 8), this.update(u4), B3;
    }, s3.prototype.bytepad = function(u4, E7) {
      for (var _3 = this.encode(E7), B3 = 0; B3 < u4.length; ++B3) _3 += this.encodeString(u4[B3]);
      var R3 = E7 - _3 % E7, T4 = [];
      return T4.length = R3, this.update(T4), this;
    }, s3.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = true;
        var u4 = this.blocks, E7 = this.lastByteIndex, _3 = this.blockCount, B3 = this.s;
        if (u4[E7 >> 2] |= this.padding[E7 & 3], this.lastByteIndex === this.byteCount) for (u4[0] = u4[_3], E7 = 1; E7 < _3 + 1; ++E7) u4[E7] = 0;
        for (u4[_3 - 1] |= 2147483648, E7 = 0; E7 < _3; ++E7) B3[E7] ^= u4[E7];
        k3(B3);
      }
    }, s3.prototype.toString = s3.prototype.hex = function() {
      this.finalize();
      for (var u4 = this.blockCount, E7 = this.s, _3 = this.outputBlocks, B3 = this.extraBytes, R3 = 0, T4 = 0, P2 = "", O5; T4 < _3; ) {
        for (R3 = 0; R3 < u4 && T4 < _3; ++R3, ++T4) O5 = E7[R3], P2 += m5[O5 >> 4 & 15] + m5[O5 & 15] + m5[O5 >> 12 & 15] + m5[O5 >> 8 & 15] + m5[O5 >> 20 & 15] + m5[O5 >> 16 & 15] + m5[O5 >> 28 & 15] + m5[O5 >> 24 & 15];
        T4 % u4 === 0 && (k3(E7), R3 = 0);
      }
      return B3 && (O5 = E7[R3], P2 += m5[O5 >> 4 & 15] + m5[O5 & 15], B3 > 1 && (P2 += m5[O5 >> 12 & 15] + m5[O5 >> 8 & 15]), B3 > 2 && (P2 += m5[O5 >> 20 & 15] + m5[O5 >> 16 & 15])), P2;
    }, s3.prototype.arrayBuffer = function() {
      this.finalize();
      var u4 = this.blockCount, E7 = this.s, _3 = this.outputBlocks, B3 = this.extraBytes, R3 = 0, T4 = 0, P2 = this.outputBits >> 3, O5;
      B3 ? O5 = new ArrayBuffer(_3 + 1 << 2) : O5 = new ArrayBuffer(P2);
      for (var Ct3 = new Uint32Array(O5); T4 < _3; ) {
        for (R3 = 0; R3 < u4 && T4 < _3; ++R3, ++T4) Ct3[T4] = E7[R3];
        T4 % u4 === 0 && k3(E7);
      }
      return B3 && (Ct3[R3] = E7[R3], O5 = O5.slice(0, P2)), O5;
    }, s3.prototype.buffer = s3.prototype.arrayBuffer, s3.prototype.digest = s3.prototype.array = function() {
      this.finalize();
      for (var u4 = this.blockCount, E7 = this.s, _3 = this.outputBlocks, B3 = this.extraBytes, R3 = 0, T4 = 0, P2 = [], O5, Ct3; T4 < _3; ) {
        for (R3 = 0; R3 < u4 && T4 < _3; ++R3, ++T4) O5 = T4 << 2, Ct3 = E7[R3], P2[O5] = Ct3 & 255, P2[O5 + 1] = Ct3 >> 8 & 255, P2[O5 + 2] = Ct3 >> 16 & 255, P2[O5 + 3] = Ct3 >> 24 & 255;
        T4 % u4 === 0 && k3(E7);
      }
      return B3 && (O5 = T4 << 2, Ct3 = E7[R3], P2[O5] = Ct3 & 255, B3 > 1 && (P2[O5 + 1] = Ct3 >> 8 & 255), B3 > 2 && (P2[O5 + 2] = Ct3 >> 16 & 255)), P2;
    };
    function v5(u4, E7, _3) {
      s3.call(this, u4, E7, _3);
    }
    v5.prototype = new s3(), v5.prototype.finalize = function() {
      return this.encode(this.outputBits, true), s3.prototype.finalize.call(this);
    };
    var k3 = function(u4) {
      var E7, _3, B3, R3, T4, P2, O5, Ct3, D4, q4, De2, X2, Z2, Fe3, $4, tt2, Te, et2, rt2, Ue3, it2, nt2, ke3, ft2, ot2, qe2, st2, at2, Ke3, ut2, ht2, He3, ct2, lt2, ze2, dt2, pt2, Le3, vt2, mt2, je3, gt2, At2, Qe3, bt3, yt2, Je3, wt2, xt2, Ge3, Mt3, Et2, Ye3, St2, Nt2, Ve2, It2, _t2, Me2, Ee2, Se2, Ne2, Ie;
      for (B3 = 0; B3 < 48; B3 += 2) R3 = u4[0] ^ u4[10] ^ u4[20] ^ u4[30] ^ u4[40], T4 = u4[1] ^ u4[11] ^ u4[21] ^ u4[31] ^ u4[41], P2 = u4[2] ^ u4[12] ^ u4[22] ^ u4[32] ^ u4[42], O5 = u4[3] ^ u4[13] ^ u4[23] ^ u4[33] ^ u4[43], Ct3 = u4[4] ^ u4[14] ^ u4[24] ^ u4[34] ^ u4[44], D4 = u4[5] ^ u4[15] ^ u4[25] ^ u4[35] ^ u4[45], q4 = u4[6] ^ u4[16] ^ u4[26] ^ u4[36] ^ u4[46], De2 = u4[7] ^ u4[17] ^ u4[27] ^ u4[37] ^ u4[47], X2 = u4[8] ^ u4[18] ^ u4[28] ^ u4[38] ^ u4[48], Z2 = u4[9] ^ u4[19] ^ u4[29] ^ u4[39] ^ u4[49], E7 = X2 ^ (P2 << 1 | O5 >>> 31), _3 = Z2 ^ (O5 << 1 | P2 >>> 31), u4[0] ^= E7, u4[1] ^= _3, u4[10] ^= E7, u4[11] ^= _3, u4[20] ^= E7, u4[21] ^= _3, u4[30] ^= E7, u4[31] ^= _3, u4[40] ^= E7, u4[41] ^= _3, E7 = R3 ^ (Ct3 << 1 | D4 >>> 31), _3 = T4 ^ (D4 << 1 | Ct3 >>> 31), u4[2] ^= E7, u4[3] ^= _3, u4[12] ^= E7, u4[13] ^= _3, u4[22] ^= E7, u4[23] ^= _3, u4[32] ^= E7, u4[33] ^= _3, u4[42] ^= E7, u4[43] ^= _3, E7 = P2 ^ (q4 << 1 | De2 >>> 31), _3 = O5 ^ (De2 << 1 | q4 >>> 31), u4[4] ^= E7, u4[5] ^= _3, u4[14] ^= E7, u4[15] ^= _3, u4[24] ^= E7, u4[25] ^= _3, u4[34] ^= E7, u4[35] ^= _3, u4[44] ^= E7, u4[45] ^= _3, E7 = Ct3 ^ (X2 << 1 | Z2 >>> 31), _3 = D4 ^ (Z2 << 1 | X2 >>> 31), u4[6] ^= E7, u4[7] ^= _3, u4[16] ^= E7, u4[17] ^= _3, u4[26] ^= E7, u4[27] ^= _3, u4[36] ^= E7, u4[37] ^= _3, u4[46] ^= E7, u4[47] ^= _3, E7 = q4 ^ (R3 << 1 | T4 >>> 31), _3 = De2 ^ (T4 << 1 | R3 >>> 31), u4[8] ^= E7, u4[9] ^= _3, u4[18] ^= E7, u4[19] ^= _3, u4[28] ^= E7, u4[29] ^= _3, u4[38] ^= E7, u4[39] ^= _3, u4[48] ^= E7, u4[49] ^= _3, Fe3 = u4[0], $4 = u4[1], yt2 = u4[11] << 4 | u4[10] >>> 28, Je3 = u4[10] << 4 | u4[11] >>> 28, at2 = u4[20] << 3 | u4[21] >>> 29, Ke3 = u4[21] << 3 | u4[20] >>> 29, Ee2 = u4[31] << 9 | u4[30] >>> 23, Se2 = u4[30] << 9 | u4[31] >>> 23, gt2 = u4[40] << 18 | u4[41] >>> 14, At2 = u4[41] << 18 | u4[40] >>> 14, lt2 = u4[2] << 1 | u4[3] >>> 31, ze2 = u4[3] << 1 | u4[2] >>> 31, tt2 = u4[13] << 12 | u4[12] >>> 20, Te = u4[12] << 12 | u4[13] >>> 20, wt2 = u4[22] << 10 | u4[23] >>> 22, xt2 = u4[23] << 10 | u4[22] >>> 22, ut2 = u4[33] << 13 | u4[32] >>> 19, ht2 = u4[32] << 13 | u4[33] >>> 19, Ne2 = u4[42] << 2 | u4[43] >>> 30, Ie = u4[43] << 2 | u4[42] >>> 30, St2 = u4[5] << 30 | u4[4] >>> 2, Nt2 = u4[4] << 30 | u4[5] >>> 2, dt2 = u4[14] << 6 | u4[15] >>> 26, pt2 = u4[15] << 6 | u4[14] >>> 26, et2 = u4[25] << 11 | u4[24] >>> 21, rt2 = u4[24] << 11 | u4[25] >>> 21, Ge3 = u4[34] << 15 | u4[35] >>> 17, Mt3 = u4[35] << 15 | u4[34] >>> 17, He3 = u4[45] << 29 | u4[44] >>> 3, ct2 = u4[44] << 29 | u4[45] >>> 3, ft2 = u4[6] << 28 | u4[7] >>> 4, ot2 = u4[7] << 28 | u4[6] >>> 4, Ve2 = u4[17] << 23 | u4[16] >>> 9, It2 = u4[16] << 23 | u4[17] >>> 9, Le3 = u4[26] << 25 | u4[27] >>> 7, vt2 = u4[27] << 25 | u4[26] >>> 7, Ue3 = u4[36] << 21 | u4[37] >>> 11, it2 = u4[37] << 21 | u4[36] >>> 11, Et2 = u4[47] << 24 | u4[46] >>> 8, Ye3 = u4[46] << 24 | u4[47] >>> 8, Qe3 = u4[8] << 27 | u4[9] >>> 5, bt3 = u4[9] << 27 | u4[8] >>> 5, qe2 = u4[18] << 20 | u4[19] >>> 12, st2 = u4[19] << 20 | u4[18] >>> 12, _t2 = u4[29] << 7 | u4[28] >>> 25, Me2 = u4[28] << 7 | u4[29] >>> 25, mt2 = u4[38] << 8 | u4[39] >>> 24, je3 = u4[39] << 8 | u4[38] >>> 24, nt2 = u4[48] << 14 | u4[49] >>> 18, ke3 = u4[49] << 14 | u4[48] >>> 18, u4[0] = Fe3 ^ ~tt2 & et2, u4[1] = $4 ^ ~Te & rt2, u4[10] = ft2 ^ ~qe2 & at2, u4[11] = ot2 ^ ~st2 & Ke3, u4[20] = lt2 ^ ~dt2 & Le3, u4[21] = ze2 ^ ~pt2 & vt2, u4[30] = Qe3 ^ ~yt2 & wt2, u4[31] = bt3 ^ ~Je3 & xt2, u4[40] = St2 ^ ~Ve2 & _t2, u4[41] = Nt2 ^ ~It2 & Me2, u4[2] = tt2 ^ ~et2 & Ue3, u4[3] = Te ^ ~rt2 & it2, u4[12] = qe2 ^ ~at2 & ut2, u4[13] = st2 ^ ~Ke3 & ht2, u4[22] = dt2 ^ ~Le3 & mt2, u4[23] = pt2 ^ ~vt2 & je3, u4[32] = yt2 ^ ~wt2 & Ge3, u4[33] = Je3 ^ ~xt2 & Mt3, u4[42] = Ve2 ^ ~_t2 & Ee2, u4[43] = It2 ^ ~Me2 & Se2, u4[4] = et2 ^ ~Ue3 & nt2, u4[5] = rt2 ^ ~it2 & ke3, u4[14] = at2 ^ ~ut2 & He3, u4[15] = Ke3 ^ ~ht2 & ct2, u4[24] = Le3 ^ ~mt2 & gt2, u4[25] = vt2 ^ ~je3 & At2, u4[34] = wt2 ^ ~Ge3 & Et2, u4[35] = xt2 ^ ~Mt3 & Ye3, u4[44] = _t2 ^ ~Ee2 & Ne2, u4[45] = Me2 ^ ~Se2 & Ie, u4[6] = Ue3 ^ ~nt2 & Fe3, u4[7] = it2 ^ ~ke3 & $4, u4[16] = ut2 ^ ~He3 & ft2, u4[17] = ht2 ^ ~ct2 & ot2, u4[26] = mt2 ^ ~gt2 & lt2, u4[27] = je3 ^ ~At2 & ze2, u4[36] = Ge3 ^ ~Et2 & Qe3, u4[37] = Mt3 ^ ~Ye3 & bt3, u4[46] = Ee2 ^ ~Ne2 & St2, u4[47] = Se2 ^ ~Ie & Nt2, u4[8] = nt2 ^ ~Fe3 & tt2, u4[9] = ke3 ^ ~$4 & Te, u4[18] = He3 ^ ~ft2 & qe2, u4[19] = ct2 ^ ~ot2 & st2, u4[28] = gt2 ^ ~lt2 & dt2, u4[29] = At2 ^ ~ze2 & pt2, u4[38] = Et2 ^ ~Qe3 & yt2, u4[39] = Ye3 ^ ~bt3 & Je3, u4[48] = Ne2 ^ ~St2 & Ve2, u4[49] = Ie ^ ~Nt2 & It2, u4[0] ^= C5[B3], u4[1] ^= C5[B3 + 1];
    };
    if (p5) e2.exports = f5;
    else for (c6 = 0; c6 < a4.length; ++c6) n5[a4[c6]] = f5[a4[c6]];
  })();
})(Pn);
var b0 = Pn.exports;
var y0 = "logger/5.7.0";
var Dn = false;
var Fn = false;
var Cr = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
var Tn = Cr.default;
var gi = null;
function w0() {
  try {
    const e2 = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
      try {
        if ("test".normalize(t) !== "test") throw new Error("bad normalize");
      } catch {
        e2.push(t);
      }
    }), e2.length) throw new Error("missing " + e2.join(", "));
    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation");
  } catch (e2) {
    return e2.message;
  }
  return null;
}
var Un = w0();
var Ai;
(function(e2) {
  e2.DEBUG = "DEBUG", e2.INFO = "INFO", e2.WARNING = "WARNING", e2.ERROR = "ERROR", e2.OFF = "OFF";
})(Ai || (Ai = {}));
var re;
(function(e2) {
  e2.UNKNOWN_ERROR = "UNKNOWN_ERROR", e2.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e2.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e2.NETWORK_ERROR = "NETWORK_ERROR", e2.SERVER_ERROR = "SERVER_ERROR", e2.TIMEOUT = "TIMEOUT", e2.BUFFER_OVERRUN = "BUFFER_OVERRUN", e2.NUMERIC_FAULT = "NUMERIC_FAULT", e2.MISSING_NEW = "MISSING_NEW", e2.INVALID_ARGUMENT = "INVALID_ARGUMENT", e2.MISSING_ARGUMENT = "MISSING_ARGUMENT", e2.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e2.CALL_EXCEPTION = "CALL_EXCEPTION", e2.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e2.NONCE_EXPIRED = "NONCE_EXPIRED", e2.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e2.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e2.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e2.ACTION_REJECTED = "ACTION_REJECTED";
})(re || (re = {}));
var kn = "0123456789abcdef";
var L = class _L {
  constructor(t) {
    Object.defineProperty(this, "version", { enumerable: true, value: t, writable: false });
  }
  _log(t, r3) {
    const i4 = t.toLowerCase();
    Cr[i4] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(Tn > Cr[i4]) && console.log.apply(console, r3);
  }
  debug(...t) {
    this._log(_L.levels.DEBUG, t);
  }
  info(...t) {
    this._log(_L.levels.INFO, t);
  }
  warn(...t) {
    this._log(_L.levels.WARNING, t);
  }
  makeError(t, r3, i4) {
    if (Fn) return this.makeError("censored error", r3, {});
    r3 || (r3 = _L.errors.UNKNOWN_ERROR), i4 || (i4 = {});
    const n5 = [];
    Object.keys(i4).forEach((b5) => {
      const m5 = i4[b5];
      try {
        if (m5 instanceof Uint8Array) {
          let w5 = "";
          for (let y7 = 0; y7 < m5.length; y7++) w5 += kn[m5[y7] >> 4], w5 += kn[m5[y7] & 15];
          n5.push(b5 + "=Uint8Array(0x" + w5 + ")");
        } else n5.push(b5 + "=" + JSON.stringify(m5));
      } catch {
        n5.push(b5 + "=" + JSON.stringify(i4[b5].toString()));
      }
    }), n5.push(`code=${r3}`), n5.push(`version=${this.version}`);
    const o5 = t;
    let h5 = "";
    switch (r3) {
      case re.NUMERIC_FAULT: {
        h5 = "NUMERIC_FAULT";
        const b5 = t;
        switch (b5) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            h5 += "-" + b5;
            break;
          case "negative-power":
          case "negative-width":
            h5 += "-unsupported";
            break;
          case "unbound-bitwise-result":
            h5 += "-unbound-result";
            break;
        }
        break;
      }
      case re.CALL_EXCEPTION:
      case re.INSUFFICIENT_FUNDS:
      case re.MISSING_NEW:
      case re.NONCE_EXPIRED:
      case re.REPLACEMENT_UNDERPRICED:
      case re.TRANSACTION_REPLACED:
      case re.UNPREDICTABLE_GAS_LIMIT:
        h5 = r3;
        break;
    }
    h5 && (t += " [ See: https://links.ethers.org/v5-errors-" + h5 + " ]"), n5.length && (t += " (" + n5.join(", ") + ")");
    const p5 = new Error(t);
    return p5.reason = o5, p5.code = r3, Object.keys(i4).forEach(function(b5) {
      p5[b5] = i4[b5];
    }), p5;
  }
  throwError(t, r3, i4) {
    throw this.makeError(t, r3, i4);
  }
  throwArgumentError(t, r3, i4) {
    return this.throwError(t, _L.errors.INVALID_ARGUMENT, { argument: r3, value: i4 });
  }
  assert(t, r3, i4, n5) {
    t || this.throwError(r3, i4, n5);
  }
  assertArgument(t, r3, i4, n5) {
    t || this.throwArgumentError(r3, i4, n5);
  }
  checkNormalize(t) {
    Un && this.throwError("platform missing String.prototype.normalize", _L.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: Un });
  }
  checkSafeUint53(t, r3) {
    typeof t == "number" && (r3 == null && (r3 = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r3, _L.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: t }), t % 1 && this.throwError(r3, _L.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: t }));
  }
  checkArgumentCount(t, r3, i4) {
    i4 ? i4 = ": " + i4 : i4 = "", t < r3 && this.throwError("missing argument" + i4, _L.errors.MISSING_ARGUMENT, { count: t, expectedCount: r3 }), t > r3 && this.throwError("too many arguments" + i4, _L.errors.UNEXPECTED_ARGUMENT, { count: t, expectedCount: r3 });
  }
  checkNew(t, r3) {
    (t === Object || t == null) && this.throwError("missing new", _L.errors.MISSING_NEW, { name: r3.name });
  }
  checkAbstract(t, r3) {
    t === r3 ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r3.name) + " directly; use a sub-class", _L.errors.UNSUPPORTED_OPERATION, { name: t.name, operation: "new" }) : (t === Object || t == null) && this.throwError("missing new", _L.errors.MISSING_NEW, { name: r3.name });
  }
  static globalLogger() {
    return gi || (gi = new _L(y0)), gi;
  }
  static setCensorship(t, r3) {
    if (!t && r3 && this.globalLogger().throwError("cannot permanently disable censorship", _L.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), Dn) {
      if (!t) return;
      this.globalLogger().throwError("error censorship permanent", _L.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" });
    }
    Fn = !!t, Dn = !!r3;
  }
  static setLogLevel(t) {
    const r3 = Cr[t.toLowerCase()];
    if (r3 == null) {
      _L.globalLogger().warn("invalid log level - " + t);
      return;
    }
    Tn = r3;
  }
  static from(t) {
    return new _L(t);
  }
};
L.errors = re, L.levels = Ai;
var x0 = "bytes/5.7.0";
var Dt = new L(x0);
function qn(e2) {
  return !!e2.toHexString;
}
function rr(e2) {
  return e2.slice || (e2.slice = function() {
    const t = Array.prototype.slice.call(arguments);
    return rr(new Uint8Array(Array.prototype.slice.apply(e2, t)));
  }), e2;
}
function M0(e2) {
  return Qt(e2) && !(e2.length % 2) || ir(e2);
}
function Kn(e2) {
  return typeof e2 == "number" && e2 == e2 && e2 % 1 === 0;
}
function ir(e2) {
  if (e2 == null) return false;
  if (e2.constructor === Uint8Array) return true;
  if (typeof e2 == "string" || !Kn(e2.length) || e2.length < 0) return false;
  for (let t = 0; t < e2.length; t++) {
    const r3 = e2[t];
    if (!Kn(r3) || r3 < 0 || r3 >= 256) return false;
  }
  return true;
}
function Ot(e2, t) {
  if (t || (t = {}), typeof e2 == "number") {
    Dt.checkSafeUint53(e2, "invalid arrayify value");
    const r3 = [];
    for (; e2; ) r3.unshift(e2 & 255), e2 = parseInt(String(e2 / 256));
    return r3.length === 0 && r3.push(0), rr(new Uint8Array(r3));
  }
  if (t.allowMissingPrefix && typeof e2 == "string" && e2.substring(0, 2) !== "0x" && (e2 = "0x" + e2), qn(e2) && (e2 = e2.toHexString()), Qt(e2)) {
    let r3 = e2.substring(2);
    r3.length % 2 && (t.hexPad === "left" ? r3 = "0" + r3 : t.hexPad === "right" ? r3 += "0" : Dt.throwArgumentError("hex data is odd-length", "value", e2));
    const i4 = [];
    for (let n5 = 0; n5 < r3.length; n5 += 2) i4.push(parseInt(r3.substring(n5, n5 + 2), 16));
    return rr(new Uint8Array(i4));
  }
  return ir(e2) ? rr(new Uint8Array(e2)) : Dt.throwArgumentError("invalid arrayify value", "value", e2);
}
function E0(e2) {
  const t = e2.map((n5) => Ot(n5)), r3 = t.reduce((n5, o5) => n5 + o5.length, 0), i4 = new Uint8Array(r3);
  return t.reduce((n5, o5) => (i4.set(o5, n5), n5 + o5.length), 0), rr(i4);
}
function S0(e2, t) {
  e2 = Ot(e2), e2.length > t && Dt.throwArgumentError("value out of range", "value", arguments[0]);
  const r3 = new Uint8Array(t);
  return r3.set(e2, t - e2.length), rr(r3);
}
function Qt(e2, t) {
  return !(typeof e2 != "string" || !e2.match(/^0x[0-9A-Fa-f]*$/) || t && e2.length !== 2 + 2 * t);
}
var bi = "0123456789abcdef";
function Kt(e2, t) {
  if (t || (t = {}), typeof e2 == "number") {
    Dt.checkSafeUint53(e2, "invalid hexlify value");
    let r3 = "";
    for (; e2; ) r3 = bi[e2 & 15] + r3, e2 = Math.floor(e2 / 16);
    return r3.length ? (r3.length % 2 && (r3 = "0" + r3), "0x" + r3) : "0x00";
  }
  if (typeof e2 == "bigint") return e2 = e2.toString(16), e2.length % 2 ? "0x0" + e2 : "0x" + e2;
  if (t.allowMissingPrefix && typeof e2 == "string" && e2.substring(0, 2) !== "0x" && (e2 = "0x" + e2), qn(e2)) return e2.toHexString();
  if (Qt(e2)) return e2.length % 2 && (t.hexPad === "left" ? e2 = "0x0" + e2.substring(2) : t.hexPad === "right" ? e2 += "0" : Dt.throwArgumentError("hex data is odd-length", "value", e2)), e2.toLowerCase();
  if (ir(e2)) {
    let r3 = "0x";
    for (let i4 = 0; i4 < e2.length; i4++) {
      let n5 = e2[i4];
      r3 += bi[(n5 & 240) >> 4] + bi[n5 & 15];
    }
    return r3;
  }
  return Dt.throwArgumentError("invalid hexlify value", "value", e2);
}
function N0(e2) {
  if (typeof e2 != "string") e2 = Kt(e2);
  else if (!Qt(e2) || e2.length % 2) return null;
  return (e2.length - 2) / 2;
}
function Hn(e2, t, r3) {
  return typeof e2 != "string" ? e2 = Kt(e2) : (!Qt(e2) || e2.length % 2) && Dt.throwArgumentError("invalid hexData", "value", e2), t = 2 + 2 * t, r3 != null ? "0x" + e2.substring(t, 2 + 2 * r3) : "0x" + e2.substring(t);
}
function oe(e2, t) {
  for (typeof e2 != "string" ? e2 = Kt(e2) : Qt(e2) || Dt.throwArgumentError("invalid hex string", "value", e2), e2.length > 2 * t + 2 && Dt.throwArgumentError("value out of range", "value", arguments[1]); e2.length < 2 * t + 2; ) e2 = "0x0" + e2.substring(2);
  return e2;
}
function zn(e2) {
  const t = { r: "0x", s: "0x", _vs: "0x", recoveryParam: 0, v: 0, yParityAndS: "0x", compact: "0x" };
  if (M0(e2)) {
    let r3 = Ot(e2);
    r3.length === 64 ? (t.v = 27 + (r3[32] >> 7), r3[32] &= 127, t.r = Kt(r3.slice(0, 32)), t.s = Kt(r3.slice(32, 64))) : r3.length === 65 ? (t.r = Kt(r3.slice(0, 32)), t.s = Kt(r3.slice(32, 64)), t.v = r3[64]) : Dt.throwArgumentError("invalid signature string", "signature", e2), t.v < 27 && (t.v === 0 || t.v === 1 ? t.v += 27 : Dt.throwArgumentError("signature invalid v byte", "signature", e2)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (r3[32] |= 128), t._vs = Kt(r3.slice(32, 64));
  } else {
    if (t.r = e2.r, t.s = e2.s, t.v = e2.v, t.recoveryParam = e2.recoveryParam, t._vs = e2._vs, t._vs != null) {
      const n5 = S0(Ot(t._vs), 32);
      t._vs = Kt(n5);
      const o5 = n5[0] >= 128 ? 1 : 0;
      t.recoveryParam == null ? t.recoveryParam = o5 : t.recoveryParam !== o5 && Dt.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e2), n5[0] &= 127;
      const h5 = Kt(n5);
      t.s == null ? t.s = h5 : t.s !== h5 && Dt.throwArgumentError("signature v mismatch _vs", "signature", e2);
    }
    if (t.recoveryParam == null) t.v == null ? Dt.throwArgumentError("signature missing v and recoveryParam", "signature", e2) : t.v === 0 || t.v === 1 ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2;
    else if (t.v == null) t.v = 27 + t.recoveryParam;
    else {
      const n5 = t.v === 0 || t.v === 1 ? t.v : 1 - t.v % 2;
      t.recoveryParam !== n5 && Dt.throwArgumentError("signature recoveryParam mismatch v", "signature", e2);
    }
    t.r == null || !Qt(t.r) ? Dt.throwArgumentError("signature missing or invalid r", "signature", e2) : t.r = oe(t.r, 32), t.s == null || !Qt(t.s) ? Dt.throwArgumentError("signature missing or invalid s", "signature", e2) : t.s = oe(t.s, 32);
    const r3 = Ot(t.s);
    r3[0] >= 128 && Dt.throwArgumentError("signature s out of range", "signature", e2), t.recoveryParam && (r3[0] |= 128);
    const i4 = Kt(r3);
    t._vs && (Qt(t._vs) || Dt.throwArgumentError("signature invalid _vs", "signature", e2), t._vs = oe(t._vs, 32)), t._vs == null ? t._vs = i4 : t._vs !== i4 && Dt.throwArgumentError("signature _vs mismatch v and s", "signature", e2);
  }
  return t.yParityAndS = t._vs, t.compact = t.r + t.yParityAndS.substring(2), t;
}
function yi(e2) {
  return "0x" + b0.keccak_256(Ot(e2));
}
var Ln = { exports: {} };
var I0 = {};
var _0 = Object.freeze({ __proto__: null, default: I0 });
var B0 = A0(_0);
(function(e2) {
  (function(t, r3) {
    function i4(A3, f5) {
      if (!A3) throw new Error(f5 || "Assertion failed");
    }
    function n5(A3, f5) {
      A3.super_ = f5;
      var a4 = function() {
      };
      a4.prototype = f5.prototype, A3.prototype = new a4(), A3.prototype.constructor = A3;
    }
    function o5(A3, f5, a4) {
      if (o5.isBN(A3)) return A3;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, A3 !== null && ((f5 === "le" || f5 === "be") && (a4 = f5, f5 = 10), this._init(A3 || 0, f5 || 10, a4 || "be"));
    }
    typeof t == "object" ? t.exports = o5 : r3.BN = o5, o5.BN = o5, o5.wordSize = 26;
    var h5;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? h5 = window.Buffer : h5 = B0.Buffer;
    } catch {
    }
    o5.isBN = function(f5) {
      return f5 instanceof o5 ? true : f5 !== null && typeof f5 == "object" && f5.constructor.wordSize === o5.wordSize && Array.isArray(f5.words);
    }, o5.max = function(f5, a4) {
      return f5.cmp(a4) > 0 ? f5 : a4;
    }, o5.min = function(f5, a4) {
      return f5.cmp(a4) < 0 ? f5 : a4;
    }, o5.prototype._init = function(f5, a4, c6) {
      if (typeof f5 == "number") return this._initNumber(f5, a4, c6);
      if (typeof f5 == "object") return this._initArray(f5, a4, c6);
      a4 === "hex" && (a4 = 16), i4(a4 === (a4 | 0) && a4 >= 2 && a4 <= 36), f5 = f5.toString().replace(/\s+/g, "");
      var d4 = 0;
      f5[0] === "-" && (d4++, this.negative = 1), d4 < f5.length && (a4 === 16 ? this._parseHex(f5, d4, c6) : (this._parseBase(f5, a4, d4), c6 === "le" && this._initArray(this.toArray(), a4, c6)));
    }, o5.prototype._initNumber = function(f5, a4, c6) {
      f5 < 0 && (this.negative = 1, f5 = -f5), f5 < 67108864 ? (this.words = [f5 & 67108863], this.length = 1) : f5 < 4503599627370496 ? (this.words = [f5 & 67108863, f5 / 67108864 & 67108863], this.length = 2) : (i4(f5 < 9007199254740992), this.words = [f5 & 67108863, f5 / 67108864 & 67108863, 1], this.length = 3), c6 === "le" && this._initArray(this.toArray(), a4, c6);
    }, o5.prototype._initArray = function(f5, a4, c6) {
      if (i4(typeof f5.length == "number"), f5.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f5.length / 3), this.words = new Array(this.length);
      for (var d4 = 0; d4 < this.length; d4++) this.words[d4] = 0;
      var g5, x3, M4 = 0;
      if (c6 === "be") for (d4 = f5.length - 1, g5 = 0; d4 >= 0; d4 -= 3) x3 = f5[d4] | f5[d4 - 1] << 8 | f5[d4 - 2] << 16, this.words[g5] |= x3 << M4 & 67108863, this.words[g5 + 1] = x3 >>> 26 - M4 & 67108863, M4 += 24, M4 >= 26 && (M4 -= 26, g5++);
      else if (c6 === "le") for (d4 = 0, g5 = 0; d4 < f5.length; d4 += 3) x3 = f5[d4] | f5[d4 + 1] << 8 | f5[d4 + 2] << 16, this.words[g5] |= x3 << M4 & 67108863, this.words[g5 + 1] = x3 >>> 26 - M4 & 67108863, M4 += 24, M4 >= 26 && (M4 -= 26, g5++);
      return this._strip();
    };
    function p5(A3, f5) {
      var a4 = A3.charCodeAt(f5);
      if (a4 >= 48 && a4 <= 57) return a4 - 48;
      if (a4 >= 65 && a4 <= 70) return a4 - 55;
      if (a4 >= 97 && a4 <= 102) return a4 - 87;
      i4(false, "Invalid character in " + A3);
    }
    function b5(A3, f5, a4) {
      var c6 = p5(A3, a4);
      return a4 - 1 >= f5 && (c6 |= p5(A3, a4 - 1) << 4), c6;
    }
    o5.prototype._parseHex = function(f5, a4, c6) {
      this.length = Math.ceil((f5.length - a4) / 6), this.words = new Array(this.length);
      for (var d4 = 0; d4 < this.length; d4++) this.words[d4] = 0;
      var g5 = 0, x3 = 0, M4;
      if (c6 === "be") for (d4 = f5.length - 1; d4 >= a4; d4 -= 2) M4 = b5(f5, a4, d4) << g5, this.words[x3] |= M4 & 67108863, g5 >= 18 ? (g5 -= 18, x3 += 1, this.words[x3] |= M4 >>> 26) : g5 += 8;
      else {
        var l5 = f5.length - a4;
        for (d4 = l5 % 2 === 0 ? a4 + 1 : a4; d4 < f5.length; d4 += 2) M4 = b5(f5, a4, d4) << g5, this.words[x3] |= M4 & 67108863, g5 >= 18 ? (g5 -= 18, x3 += 1, this.words[x3] |= M4 >>> 26) : g5 += 8;
      }
      this._strip();
    };
    function m5(A3, f5, a4, c6) {
      for (var d4 = 0, g5 = 0, x3 = Math.min(A3.length, a4), M4 = f5; M4 < x3; M4++) {
        var l5 = A3.charCodeAt(M4) - 48;
        d4 *= c6, l5 >= 49 ? g5 = l5 - 49 + 10 : l5 >= 17 ? g5 = l5 - 17 + 10 : g5 = l5, i4(l5 >= 0 && g5 < c6, "Invalid character"), d4 += g5;
      }
      return d4;
    }
    o5.prototype._parseBase = function(f5, a4, c6) {
      this.words = [0], this.length = 1;
      for (var d4 = 0, g5 = 1; g5 <= 67108863; g5 *= a4) d4++;
      d4--, g5 = g5 / a4 | 0;
      for (var x3 = f5.length - c6, M4 = x3 % d4, l5 = Math.min(x3, x3 - M4) + c6, s3 = 0, v5 = c6; v5 < l5; v5 += d4) s3 = m5(f5, v5, v5 + d4, a4), this.imuln(g5), this.words[0] + s3 < 67108864 ? this.words[0] += s3 : this._iaddn(s3);
      if (M4 !== 0) {
        var k3 = 1;
        for (s3 = m5(f5, v5, f5.length, a4), v5 = 0; v5 < M4; v5++) k3 *= a4;
        this.imuln(k3), this.words[0] + s3 < 67108864 ? this.words[0] += s3 : this._iaddn(s3);
      }
      this._strip();
    }, o5.prototype.copy = function(f5) {
      f5.words = new Array(this.length);
      for (var a4 = 0; a4 < this.length; a4++) f5.words[a4] = this.words[a4];
      f5.length = this.length, f5.negative = this.negative, f5.red = this.red;
    };
    function w5(A3, f5) {
      A3.words = f5.words, A3.length = f5.length, A3.negative = f5.negative, A3.red = f5.red;
    }
    if (o5.prototype._move = function(f5) {
      w5(f5, this);
    }, o5.prototype.clone = function() {
      var f5 = new o5(null);
      return this.copy(f5), f5;
    }, o5.prototype._expand = function(f5) {
      for (; this.length < f5; ) this.words[this.length++] = 0;
      return this;
    }, o5.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
      return this._normSign();
    }, o5.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
      o5.prototype[Symbol.for("nodejs.util.inspect.custom")] = y7;
    } catch {
      o5.prototype.inspect = y7;
    }
    else o5.prototype.inspect = y7;
    function y7() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var S5 = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], I3 = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], N11 = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    o5.prototype.toString = function(f5, a4) {
      f5 = f5 || 10, a4 = a4 | 0 || 1;
      var c6;
      if (f5 === 16 || f5 === "hex") {
        c6 = "";
        for (var d4 = 0, g5 = 0, x3 = 0; x3 < this.length; x3++) {
          var M4 = this.words[x3], l5 = ((M4 << d4 | g5) & 16777215).toString(16);
          g5 = M4 >>> 24 - d4 & 16777215, d4 += 2, d4 >= 26 && (d4 -= 26, x3--), g5 !== 0 || x3 !== this.length - 1 ? c6 = S5[6 - l5.length] + l5 + c6 : c6 = l5 + c6;
        }
        for (g5 !== 0 && (c6 = g5.toString(16) + c6); c6.length % a4 !== 0; ) c6 = "0" + c6;
        return this.negative !== 0 && (c6 = "-" + c6), c6;
      }
      if (f5 === (f5 | 0) && f5 >= 2 && f5 <= 36) {
        var s3 = I3[f5], v5 = N11[f5];
        c6 = "";
        var k3 = this.clone();
        for (k3.negative = 0; !k3.isZero(); ) {
          var u4 = k3.modrn(v5).toString(f5);
          k3 = k3.idivn(v5), k3.isZero() ? c6 = u4 + c6 : c6 = S5[s3 - u4.length] + u4 + c6;
        }
        for (this.isZero() && (c6 = "0" + c6); c6.length % a4 !== 0; ) c6 = "0" + c6;
        return this.negative !== 0 && (c6 = "-" + c6), c6;
      }
      i4(false, "Base should be between 2 and 36");
    }, o5.prototype.toNumber = function() {
      var f5 = this.words[0];
      return this.length === 2 ? f5 += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f5 += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i4(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f5 : f5;
    }, o5.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, h5 && (o5.prototype.toBuffer = function(f5, a4) {
      return this.toArrayLike(h5, f5, a4);
    }), o5.prototype.toArray = function(f5, a4) {
      return this.toArrayLike(Array, f5, a4);
    };
    var C5 = function(f5, a4) {
      return f5.allocUnsafe ? f5.allocUnsafe(a4) : new f5(a4);
    };
    o5.prototype.toArrayLike = function(f5, a4, c6) {
      this._strip();
      var d4 = this.byteLength(), g5 = c6 || Math.max(1, d4);
      i4(d4 <= g5, "byte array longer than desired length"), i4(g5 > 0, "Requested array length <= 0");
      var x3 = C5(f5, g5), M4 = a4 === "le" ? "LE" : "BE";
      return this["_toArrayLike" + M4](x3, d4), x3;
    }, o5.prototype._toArrayLikeLE = function(f5, a4) {
      for (var c6 = 0, d4 = 0, g5 = 0, x3 = 0; g5 < this.length; g5++) {
        var M4 = this.words[g5] << x3 | d4;
        f5[c6++] = M4 & 255, c6 < f5.length && (f5[c6++] = M4 >> 8 & 255), c6 < f5.length && (f5[c6++] = M4 >> 16 & 255), x3 === 6 ? (c6 < f5.length && (f5[c6++] = M4 >> 24 & 255), d4 = 0, x3 = 0) : (d4 = M4 >>> 24, x3 += 2);
      }
      if (c6 < f5.length) for (f5[c6++] = d4; c6 < f5.length; ) f5[c6++] = 0;
    }, o5.prototype._toArrayLikeBE = function(f5, a4) {
      for (var c6 = f5.length - 1, d4 = 0, g5 = 0, x3 = 0; g5 < this.length; g5++) {
        var M4 = this.words[g5] << x3 | d4;
        f5[c6--] = M4 & 255, c6 >= 0 && (f5[c6--] = M4 >> 8 & 255), c6 >= 0 && (f5[c6--] = M4 >> 16 & 255), x3 === 6 ? (c6 >= 0 && (f5[c6--] = M4 >> 24 & 255), d4 = 0, x3 = 0) : (d4 = M4 >>> 24, x3 += 2);
      }
      if (c6 >= 0) for (f5[c6--] = d4; c6 >= 0; ) f5[c6--] = 0;
    }, Math.clz32 ? o5.prototype._countBits = function(f5) {
      return 32 - Math.clz32(f5);
    } : o5.prototype._countBits = function(f5) {
      var a4 = f5, c6 = 0;
      return a4 >= 4096 && (c6 += 13, a4 >>>= 13), a4 >= 64 && (c6 += 7, a4 >>>= 7), a4 >= 8 && (c6 += 4, a4 >>>= 4), a4 >= 2 && (c6 += 2, a4 >>>= 2), c6 + a4;
    }, o5.prototype._zeroBits = function(f5) {
      if (f5 === 0) return 26;
      var a4 = f5, c6 = 0;
      return a4 & 8191 || (c6 += 13, a4 >>>= 13), a4 & 127 || (c6 += 7, a4 >>>= 7), a4 & 15 || (c6 += 4, a4 >>>= 4), a4 & 3 || (c6 += 2, a4 >>>= 2), a4 & 1 || c6++, c6;
    }, o5.prototype.bitLength = function() {
      var f5 = this.words[this.length - 1], a4 = this._countBits(f5);
      return (this.length - 1) * 26 + a4;
    };
    function F(A3) {
      for (var f5 = new Array(A3.bitLength()), a4 = 0; a4 < f5.length; a4++) {
        var c6 = a4 / 26 | 0, d4 = a4 % 26;
        f5[a4] = A3.words[c6] >>> d4 & 1;
      }
      return f5;
    }
    o5.prototype.zeroBits = function() {
      if (this.isZero()) return 0;
      for (var f5 = 0, a4 = 0; a4 < this.length; a4++) {
        var c6 = this._zeroBits(this.words[a4]);
        if (f5 += c6, c6 !== 26) break;
      }
      return f5;
    }, o5.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, o5.prototype.toTwos = function(f5) {
      return this.negative !== 0 ? this.abs().inotn(f5).iaddn(1) : this.clone();
    }, o5.prototype.fromTwos = function(f5) {
      return this.testn(f5 - 1) ? this.notn(f5).iaddn(1).ineg() : this.clone();
    }, o5.prototype.isNeg = function() {
      return this.negative !== 0;
    }, o5.prototype.neg = function() {
      return this.clone().ineg();
    }, o5.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, o5.prototype.iuor = function(f5) {
      for (; this.length < f5.length; ) this.words[this.length++] = 0;
      for (var a4 = 0; a4 < f5.length; a4++) this.words[a4] = this.words[a4] | f5.words[a4];
      return this._strip();
    }, o5.prototype.ior = function(f5) {
      return i4((this.negative | f5.negative) === 0), this.iuor(f5);
    }, o5.prototype.or = function(f5) {
      return this.length > f5.length ? this.clone().ior(f5) : f5.clone().ior(this);
    }, o5.prototype.uor = function(f5) {
      return this.length > f5.length ? this.clone().iuor(f5) : f5.clone().iuor(this);
    }, o5.prototype.iuand = function(f5) {
      var a4;
      this.length > f5.length ? a4 = f5 : a4 = this;
      for (var c6 = 0; c6 < a4.length; c6++) this.words[c6] = this.words[c6] & f5.words[c6];
      return this.length = a4.length, this._strip();
    }, o5.prototype.iand = function(f5) {
      return i4((this.negative | f5.negative) === 0), this.iuand(f5);
    }, o5.prototype.and = function(f5) {
      return this.length > f5.length ? this.clone().iand(f5) : f5.clone().iand(this);
    }, o5.prototype.uand = function(f5) {
      return this.length > f5.length ? this.clone().iuand(f5) : f5.clone().iuand(this);
    }, o5.prototype.iuxor = function(f5) {
      var a4, c6;
      this.length > f5.length ? (a4 = this, c6 = f5) : (a4 = f5, c6 = this);
      for (var d4 = 0; d4 < c6.length; d4++) this.words[d4] = a4.words[d4] ^ c6.words[d4];
      if (this !== a4) for (; d4 < a4.length; d4++) this.words[d4] = a4.words[d4];
      return this.length = a4.length, this._strip();
    }, o5.prototype.ixor = function(f5) {
      return i4((this.negative | f5.negative) === 0), this.iuxor(f5);
    }, o5.prototype.xor = function(f5) {
      return this.length > f5.length ? this.clone().ixor(f5) : f5.clone().ixor(this);
    }, o5.prototype.uxor = function(f5) {
      return this.length > f5.length ? this.clone().iuxor(f5) : f5.clone().iuxor(this);
    }, o5.prototype.inotn = function(f5) {
      i4(typeof f5 == "number" && f5 >= 0);
      var a4 = Math.ceil(f5 / 26) | 0, c6 = f5 % 26;
      this._expand(a4), c6 > 0 && a4--;
      for (var d4 = 0; d4 < a4; d4++) this.words[d4] = ~this.words[d4] & 67108863;
      return c6 > 0 && (this.words[d4] = ~this.words[d4] & 67108863 >> 26 - c6), this._strip();
    }, o5.prototype.notn = function(f5) {
      return this.clone().inotn(f5);
    }, o5.prototype.setn = function(f5, a4) {
      i4(typeof f5 == "number" && f5 >= 0);
      var c6 = f5 / 26 | 0, d4 = f5 % 26;
      return this._expand(c6 + 1), a4 ? this.words[c6] = this.words[c6] | 1 << d4 : this.words[c6] = this.words[c6] & ~(1 << d4), this._strip();
    }, o5.prototype.iadd = function(f5) {
      var a4;
      if (this.negative !== 0 && f5.negative === 0) return this.negative = 0, a4 = this.isub(f5), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f5.negative !== 0) return f5.negative = 0, a4 = this.isub(f5), f5.negative = 1, a4._normSign();
      var c6, d4;
      this.length > f5.length ? (c6 = this, d4 = f5) : (c6 = f5, d4 = this);
      for (var g5 = 0, x3 = 0; x3 < d4.length; x3++) a4 = (c6.words[x3] | 0) + (d4.words[x3] | 0) + g5, this.words[x3] = a4 & 67108863, g5 = a4 >>> 26;
      for (; g5 !== 0 && x3 < c6.length; x3++) a4 = (c6.words[x3] | 0) + g5, this.words[x3] = a4 & 67108863, g5 = a4 >>> 26;
      if (this.length = c6.length, g5 !== 0) this.words[this.length] = g5, this.length++;
      else if (c6 !== this) for (; x3 < c6.length; x3++) this.words[x3] = c6.words[x3];
      return this;
    }, o5.prototype.add = function(f5) {
      var a4;
      return f5.negative !== 0 && this.negative === 0 ? (f5.negative = 0, a4 = this.sub(f5), f5.negative ^= 1, a4) : f5.negative === 0 && this.negative !== 0 ? (this.negative = 0, a4 = f5.sub(this), this.negative = 1, a4) : this.length > f5.length ? this.clone().iadd(f5) : f5.clone().iadd(this);
    }, o5.prototype.isub = function(f5) {
      if (f5.negative !== 0) {
        f5.negative = 0;
        var a4 = this.iadd(f5);
        return f5.negative = 1, a4._normSign();
      } else if (this.negative !== 0) return this.negative = 0, this.iadd(f5), this.negative = 1, this._normSign();
      var c6 = this.cmp(f5);
      if (c6 === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var d4, g5;
      c6 > 0 ? (d4 = this, g5 = f5) : (d4 = f5, g5 = this);
      for (var x3 = 0, M4 = 0; M4 < g5.length; M4++) a4 = (d4.words[M4] | 0) - (g5.words[M4] | 0) + x3, x3 = a4 >> 26, this.words[M4] = a4 & 67108863;
      for (; x3 !== 0 && M4 < d4.length; M4++) a4 = (d4.words[M4] | 0) + x3, x3 = a4 >> 26, this.words[M4] = a4 & 67108863;
      if (x3 === 0 && M4 < d4.length && d4 !== this) for (; M4 < d4.length; M4++) this.words[M4] = d4.words[M4];
      return this.length = Math.max(this.length, M4), d4 !== this && (this.negative = 1), this._strip();
    }, o5.prototype.sub = function(f5) {
      return this.clone().isub(f5);
    };
    function U4(A3, f5, a4) {
      a4.negative = f5.negative ^ A3.negative;
      var c6 = A3.length + f5.length | 0;
      a4.length = c6, c6 = c6 - 1 | 0;
      var d4 = A3.words[0] | 0, g5 = f5.words[0] | 0, x3 = d4 * g5, M4 = x3 & 67108863, l5 = x3 / 67108864 | 0;
      a4.words[0] = M4;
      for (var s3 = 1; s3 < c6; s3++) {
        for (var v5 = l5 >>> 26, k3 = l5 & 67108863, u4 = Math.min(s3, f5.length - 1), E7 = Math.max(0, s3 - A3.length + 1); E7 <= u4; E7++) {
          var _3 = s3 - E7 | 0;
          d4 = A3.words[_3] | 0, g5 = f5.words[E7] | 0, x3 = d4 * g5 + k3, v5 += x3 / 67108864 | 0, k3 = x3 & 67108863;
        }
        a4.words[s3] = k3 | 0, l5 = v5 | 0;
      }
      return l5 !== 0 ? a4.words[s3] = l5 | 0 : a4.length--, a4._strip();
    }
    var J2 = function(f5, a4, c6) {
      var d4 = f5.words, g5 = a4.words, x3 = c6.words, M4 = 0, l5, s3, v5, k3 = d4[0] | 0, u4 = k3 & 8191, E7 = k3 >>> 13, _3 = d4[1] | 0, B3 = _3 & 8191, R3 = _3 >>> 13, T4 = d4[2] | 0, P2 = T4 & 8191, O5 = T4 >>> 13, Ct3 = d4[3] | 0, D4 = Ct3 & 8191, q4 = Ct3 >>> 13, De2 = d4[4] | 0, X2 = De2 & 8191, Z2 = De2 >>> 13, Fe3 = d4[5] | 0, $4 = Fe3 & 8191, tt2 = Fe3 >>> 13, Te = d4[6] | 0, et2 = Te & 8191, rt2 = Te >>> 13, Ue3 = d4[7] | 0, it2 = Ue3 & 8191, nt2 = Ue3 >>> 13, ke3 = d4[8] | 0, ft2 = ke3 & 8191, ot2 = ke3 >>> 13, qe2 = d4[9] | 0, st2 = qe2 & 8191, at2 = qe2 >>> 13, Ke3 = g5[0] | 0, ut2 = Ke3 & 8191, ht2 = Ke3 >>> 13, He3 = g5[1] | 0, ct2 = He3 & 8191, lt2 = He3 >>> 13, ze2 = g5[2] | 0, dt2 = ze2 & 8191, pt2 = ze2 >>> 13, Le3 = g5[3] | 0, vt2 = Le3 & 8191, mt2 = Le3 >>> 13, je3 = g5[4] | 0, gt2 = je3 & 8191, At2 = je3 >>> 13, Qe3 = g5[5] | 0, bt3 = Qe3 & 8191, yt2 = Qe3 >>> 13, Je3 = g5[6] | 0, wt2 = Je3 & 8191, xt2 = Je3 >>> 13, Ge3 = g5[7] | 0, Mt3 = Ge3 & 8191, Et2 = Ge3 >>> 13, Ye3 = g5[8] | 0, St2 = Ye3 & 8191, Nt2 = Ye3 >>> 13, Ve2 = g5[9] | 0, It2 = Ve2 & 8191, _t2 = Ve2 >>> 13;
      c6.negative = f5.negative ^ a4.negative, c6.length = 19, l5 = Math.imul(u4, ut2), s3 = Math.imul(u4, ht2), s3 = s3 + Math.imul(E7, ut2) | 0, v5 = Math.imul(E7, ht2);
      var Me2 = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (Me2 >>> 26) | 0, Me2 &= 67108863, l5 = Math.imul(B3, ut2), s3 = Math.imul(B3, ht2), s3 = s3 + Math.imul(R3, ut2) | 0, v5 = Math.imul(R3, ht2), l5 = l5 + Math.imul(u4, ct2) | 0, s3 = s3 + Math.imul(u4, lt2) | 0, s3 = s3 + Math.imul(E7, ct2) | 0, v5 = v5 + Math.imul(E7, lt2) | 0;
      var Ee2 = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (Ee2 >>> 26) | 0, Ee2 &= 67108863, l5 = Math.imul(P2, ut2), s3 = Math.imul(P2, ht2), s3 = s3 + Math.imul(O5, ut2) | 0, v5 = Math.imul(O5, ht2), l5 = l5 + Math.imul(B3, ct2) | 0, s3 = s3 + Math.imul(B3, lt2) | 0, s3 = s3 + Math.imul(R3, ct2) | 0, v5 = v5 + Math.imul(R3, lt2) | 0, l5 = l5 + Math.imul(u4, dt2) | 0, s3 = s3 + Math.imul(u4, pt2) | 0, s3 = s3 + Math.imul(E7, dt2) | 0, v5 = v5 + Math.imul(E7, pt2) | 0;
      var Se2 = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (Se2 >>> 26) | 0, Se2 &= 67108863, l5 = Math.imul(D4, ut2), s3 = Math.imul(D4, ht2), s3 = s3 + Math.imul(q4, ut2) | 0, v5 = Math.imul(q4, ht2), l5 = l5 + Math.imul(P2, ct2) | 0, s3 = s3 + Math.imul(P2, lt2) | 0, s3 = s3 + Math.imul(O5, ct2) | 0, v5 = v5 + Math.imul(O5, lt2) | 0, l5 = l5 + Math.imul(B3, dt2) | 0, s3 = s3 + Math.imul(B3, pt2) | 0, s3 = s3 + Math.imul(R3, dt2) | 0, v5 = v5 + Math.imul(R3, pt2) | 0, l5 = l5 + Math.imul(u4, vt2) | 0, s3 = s3 + Math.imul(u4, mt2) | 0, s3 = s3 + Math.imul(E7, vt2) | 0, v5 = v5 + Math.imul(E7, mt2) | 0;
      var Ne2 = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (Ne2 >>> 26) | 0, Ne2 &= 67108863, l5 = Math.imul(X2, ut2), s3 = Math.imul(X2, ht2), s3 = s3 + Math.imul(Z2, ut2) | 0, v5 = Math.imul(Z2, ht2), l5 = l5 + Math.imul(D4, ct2) | 0, s3 = s3 + Math.imul(D4, lt2) | 0, s3 = s3 + Math.imul(q4, ct2) | 0, v5 = v5 + Math.imul(q4, lt2) | 0, l5 = l5 + Math.imul(P2, dt2) | 0, s3 = s3 + Math.imul(P2, pt2) | 0, s3 = s3 + Math.imul(O5, dt2) | 0, v5 = v5 + Math.imul(O5, pt2) | 0, l5 = l5 + Math.imul(B3, vt2) | 0, s3 = s3 + Math.imul(B3, mt2) | 0, s3 = s3 + Math.imul(R3, vt2) | 0, v5 = v5 + Math.imul(R3, mt2) | 0, l5 = l5 + Math.imul(u4, gt2) | 0, s3 = s3 + Math.imul(u4, At2) | 0, s3 = s3 + Math.imul(E7, gt2) | 0, v5 = v5 + Math.imul(E7, At2) | 0;
      var Ie = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, l5 = Math.imul($4, ut2), s3 = Math.imul($4, ht2), s3 = s3 + Math.imul(tt2, ut2) | 0, v5 = Math.imul(tt2, ht2), l5 = l5 + Math.imul(X2, ct2) | 0, s3 = s3 + Math.imul(X2, lt2) | 0, s3 = s3 + Math.imul(Z2, ct2) | 0, v5 = v5 + Math.imul(Z2, lt2) | 0, l5 = l5 + Math.imul(D4, dt2) | 0, s3 = s3 + Math.imul(D4, pt2) | 0, s3 = s3 + Math.imul(q4, dt2) | 0, v5 = v5 + Math.imul(q4, pt2) | 0, l5 = l5 + Math.imul(P2, vt2) | 0, s3 = s3 + Math.imul(P2, mt2) | 0, s3 = s3 + Math.imul(O5, vt2) | 0, v5 = v5 + Math.imul(O5, mt2) | 0, l5 = l5 + Math.imul(B3, gt2) | 0, s3 = s3 + Math.imul(B3, At2) | 0, s3 = s3 + Math.imul(R3, gt2) | 0, v5 = v5 + Math.imul(R3, At2) | 0, l5 = l5 + Math.imul(u4, bt3) | 0, s3 = s3 + Math.imul(u4, yt2) | 0, s3 = s3 + Math.imul(E7, bt3) | 0, v5 = v5 + Math.imul(E7, yt2) | 0;
      var Wr = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (Wr >>> 26) | 0, Wr &= 67108863, l5 = Math.imul(et2, ut2), s3 = Math.imul(et2, ht2), s3 = s3 + Math.imul(rt2, ut2) | 0, v5 = Math.imul(rt2, ht2), l5 = l5 + Math.imul($4, ct2) | 0, s3 = s3 + Math.imul($4, lt2) | 0, s3 = s3 + Math.imul(tt2, ct2) | 0, v5 = v5 + Math.imul(tt2, lt2) | 0, l5 = l5 + Math.imul(X2, dt2) | 0, s3 = s3 + Math.imul(X2, pt2) | 0, s3 = s3 + Math.imul(Z2, dt2) | 0, v5 = v5 + Math.imul(Z2, pt2) | 0, l5 = l5 + Math.imul(D4, vt2) | 0, s3 = s3 + Math.imul(D4, mt2) | 0, s3 = s3 + Math.imul(q4, vt2) | 0, v5 = v5 + Math.imul(q4, mt2) | 0, l5 = l5 + Math.imul(P2, gt2) | 0, s3 = s3 + Math.imul(P2, At2) | 0, s3 = s3 + Math.imul(O5, gt2) | 0, v5 = v5 + Math.imul(O5, At2) | 0, l5 = l5 + Math.imul(B3, bt3) | 0, s3 = s3 + Math.imul(B3, yt2) | 0, s3 = s3 + Math.imul(R3, bt3) | 0, v5 = v5 + Math.imul(R3, yt2) | 0, l5 = l5 + Math.imul(u4, wt2) | 0, s3 = s3 + Math.imul(u4, xt2) | 0, s3 = s3 + Math.imul(E7, wt2) | 0, v5 = v5 + Math.imul(E7, xt2) | 0;
      var Xr = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (Xr >>> 26) | 0, Xr &= 67108863, l5 = Math.imul(it2, ut2), s3 = Math.imul(it2, ht2), s3 = s3 + Math.imul(nt2, ut2) | 0, v5 = Math.imul(nt2, ht2), l5 = l5 + Math.imul(et2, ct2) | 0, s3 = s3 + Math.imul(et2, lt2) | 0, s3 = s3 + Math.imul(rt2, ct2) | 0, v5 = v5 + Math.imul(rt2, lt2) | 0, l5 = l5 + Math.imul($4, dt2) | 0, s3 = s3 + Math.imul($4, pt2) | 0, s3 = s3 + Math.imul(tt2, dt2) | 0, v5 = v5 + Math.imul(tt2, pt2) | 0, l5 = l5 + Math.imul(X2, vt2) | 0, s3 = s3 + Math.imul(X2, mt2) | 0, s3 = s3 + Math.imul(Z2, vt2) | 0, v5 = v5 + Math.imul(Z2, mt2) | 0, l5 = l5 + Math.imul(D4, gt2) | 0, s3 = s3 + Math.imul(D4, At2) | 0, s3 = s3 + Math.imul(q4, gt2) | 0, v5 = v5 + Math.imul(q4, At2) | 0, l5 = l5 + Math.imul(P2, bt3) | 0, s3 = s3 + Math.imul(P2, yt2) | 0, s3 = s3 + Math.imul(O5, bt3) | 0, v5 = v5 + Math.imul(O5, yt2) | 0, l5 = l5 + Math.imul(B3, wt2) | 0, s3 = s3 + Math.imul(B3, xt2) | 0, s3 = s3 + Math.imul(R3, wt2) | 0, v5 = v5 + Math.imul(R3, xt2) | 0, l5 = l5 + Math.imul(u4, Mt3) | 0, s3 = s3 + Math.imul(u4, Et2) | 0, s3 = s3 + Math.imul(E7, Mt3) | 0, v5 = v5 + Math.imul(E7, Et2) | 0;
      var Zr = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (Zr >>> 26) | 0, Zr &= 67108863, l5 = Math.imul(ft2, ut2), s3 = Math.imul(ft2, ht2), s3 = s3 + Math.imul(ot2, ut2) | 0, v5 = Math.imul(ot2, ht2), l5 = l5 + Math.imul(it2, ct2) | 0, s3 = s3 + Math.imul(it2, lt2) | 0, s3 = s3 + Math.imul(nt2, ct2) | 0, v5 = v5 + Math.imul(nt2, lt2) | 0, l5 = l5 + Math.imul(et2, dt2) | 0, s3 = s3 + Math.imul(et2, pt2) | 0, s3 = s3 + Math.imul(rt2, dt2) | 0, v5 = v5 + Math.imul(rt2, pt2) | 0, l5 = l5 + Math.imul($4, vt2) | 0, s3 = s3 + Math.imul($4, mt2) | 0, s3 = s3 + Math.imul(tt2, vt2) | 0, v5 = v5 + Math.imul(tt2, mt2) | 0, l5 = l5 + Math.imul(X2, gt2) | 0, s3 = s3 + Math.imul(X2, At2) | 0, s3 = s3 + Math.imul(Z2, gt2) | 0, v5 = v5 + Math.imul(Z2, At2) | 0, l5 = l5 + Math.imul(D4, bt3) | 0, s3 = s3 + Math.imul(D4, yt2) | 0, s3 = s3 + Math.imul(q4, bt3) | 0, v5 = v5 + Math.imul(q4, yt2) | 0, l5 = l5 + Math.imul(P2, wt2) | 0, s3 = s3 + Math.imul(P2, xt2) | 0, s3 = s3 + Math.imul(O5, wt2) | 0, v5 = v5 + Math.imul(O5, xt2) | 0, l5 = l5 + Math.imul(B3, Mt3) | 0, s3 = s3 + Math.imul(B3, Et2) | 0, s3 = s3 + Math.imul(R3, Mt3) | 0, v5 = v5 + Math.imul(R3, Et2) | 0, l5 = l5 + Math.imul(u4, St2) | 0, s3 = s3 + Math.imul(u4, Nt2) | 0, s3 = s3 + Math.imul(E7, St2) | 0, v5 = v5 + Math.imul(E7, Nt2) | 0;
      var $r2 = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + ($r2 >>> 26) | 0, $r2 &= 67108863, l5 = Math.imul(st2, ut2), s3 = Math.imul(st2, ht2), s3 = s3 + Math.imul(at2, ut2) | 0, v5 = Math.imul(at2, ht2), l5 = l5 + Math.imul(ft2, ct2) | 0, s3 = s3 + Math.imul(ft2, lt2) | 0, s3 = s3 + Math.imul(ot2, ct2) | 0, v5 = v5 + Math.imul(ot2, lt2) | 0, l5 = l5 + Math.imul(it2, dt2) | 0, s3 = s3 + Math.imul(it2, pt2) | 0, s3 = s3 + Math.imul(nt2, dt2) | 0, v5 = v5 + Math.imul(nt2, pt2) | 0, l5 = l5 + Math.imul(et2, vt2) | 0, s3 = s3 + Math.imul(et2, mt2) | 0, s3 = s3 + Math.imul(rt2, vt2) | 0, v5 = v5 + Math.imul(rt2, mt2) | 0, l5 = l5 + Math.imul($4, gt2) | 0, s3 = s3 + Math.imul($4, At2) | 0, s3 = s3 + Math.imul(tt2, gt2) | 0, v5 = v5 + Math.imul(tt2, At2) | 0, l5 = l5 + Math.imul(X2, bt3) | 0, s3 = s3 + Math.imul(X2, yt2) | 0, s3 = s3 + Math.imul(Z2, bt3) | 0, v5 = v5 + Math.imul(Z2, yt2) | 0, l5 = l5 + Math.imul(D4, wt2) | 0, s3 = s3 + Math.imul(D4, xt2) | 0, s3 = s3 + Math.imul(q4, wt2) | 0, v5 = v5 + Math.imul(q4, xt2) | 0, l5 = l5 + Math.imul(P2, Mt3) | 0, s3 = s3 + Math.imul(P2, Et2) | 0, s3 = s3 + Math.imul(O5, Mt3) | 0, v5 = v5 + Math.imul(O5, Et2) | 0, l5 = l5 + Math.imul(B3, St2) | 0, s3 = s3 + Math.imul(B3, Nt2) | 0, s3 = s3 + Math.imul(R3, St2) | 0, v5 = v5 + Math.imul(R3, Nt2) | 0, l5 = l5 + Math.imul(u4, It2) | 0, s3 = s3 + Math.imul(u4, _t2) | 0, s3 = s3 + Math.imul(E7, It2) | 0, v5 = v5 + Math.imul(E7, _t2) | 0;
      var ti = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (ti >>> 26) | 0, ti &= 67108863, l5 = Math.imul(st2, ct2), s3 = Math.imul(st2, lt2), s3 = s3 + Math.imul(at2, ct2) | 0, v5 = Math.imul(at2, lt2), l5 = l5 + Math.imul(ft2, dt2) | 0, s3 = s3 + Math.imul(ft2, pt2) | 0, s3 = s3 + Math.imul(ot2, dt2) | 0, v5 = v5 + Math.imul(ot2, pt2) | 0, l5 = l5 + Math.imul(it2, vt2) | 0, s3 = s3 + Math.imul(it2, mt2) | 0, s3 = s3 + Math.imul(nt2, vt2) | 0, v5 = v5 + Math.imul(nt2, mt2) | 0, l5 = l5 + Math.imul(et2, gt2) | 0, s3 = s3 + Math.imul(et2, At2) | 0, s3 = s3 + Math.imul(rt2, gt2) | 0, v5 = v5 + Math.imul(rt2, At2) | 0, l5 = l5 + Math.imul($4, bt3) | 0, s3 = s3 + Math.imul($4, yt2) | 0, s3 = s3 + Math.imul(tt2, bt3) | 0, v5 = v5 + Math.imul(tt2, yt2) | 0, l5 = l5 + Math.imul(X2, wt2) | 0, s3 = s3 + Math.imul(X2, xt2) | 0, s3 = s3 + Math.imul(Z2, wt2) | 0, v5 = v5 + Math.imul(Z2, xt2) | 0, l5 = l5 + Math.imul(D4, Mt3) | 0, s3 = s3 + Math.imul(D4, Et2) | 0, s3 = s3 + Math.imul(q4, Mt3) | 0, v5 = v5 + Math.imul(q4, Et2) | 0, l5 = l5 + Math.imul(P2, St2) | 0, s3 = s3 + Math.imul(P2, Nt2) | 0, s3 = s3 + Math.imul(O5, St2) | 0, v5 = v5 + Math.imul(O5, Nt2) | 0, l5 = l5 + Math.imul(B3, It2) | 0, s3 = s3 + Math.imul(B3, _t2) | 0, s3 = s3 + Math.imul(R3, It2) | 0, v5 = v5 + Math.imul(R3, _t2) | 0;
      var ei = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (ei >>> 26) | 0, ei &= 67108863, l5 = Math.imul(st2, dt2), s3 = Math.imul(st2, pt2), s3 = s3 + Math.imul(at2, dt2) | 0, v5 = Math.imul(at2, pt2), l5 = l5 + Math.imul(ft2, vt2) | 0, s3 = s3 + Math.imul(ft2, mt2) | 0, s3 = s3 + Math.imul(ot2, vt2) | 0, v5 = v5 + Math.imul(ot2, mt2) | 0, l5 = l5 + Math.imul(it2, gt2) | 0, s3 = s3 + Math.imul(it2, At2) | 0, s3 = s3 + Math.imul(nt2, gt2) | 0, v5 = v5 + Math.imul(nt2, At2) | 0, l5 = l5 + Math.imul(et2, bt3) | 0, s3 = s3 + Math.imul(et2, yt2) | 0, s3 = s3 + Math.imul(rt2, bt3) | 0, v5 = v5 + Math.imul(rt2, yt2) | 0, l5 = l5 + Math.imul($4, wt2) | 0, s3 = s3 + Math.imul($4, xt2) | 0, s3 = s3 + Math.imul(tt2, wt2) | 0, v5 = v5 + Math.imul(tt2, xt2) | 0, l5 = l5 + Math.imul(X2, Mt3) | 0, s3 = s3 + Math.imul(X2, Et2) | 0, s3 = s3 + Math.imul(Z2, Mt3) | 0, v5 = v5 + Math.imul(Z2, Et2) | 0, l5 = l5 + Math.imul(D4, St2) | 0, s3 = s3 + Math.imul(D4, Nt2) | 0, s3 = s3 + Math.imul(q4, St2) | 0, v5 = v5 + Math.imul(q4, Nt2) | 0, l5 = l5 + Math.imul(P2, It2) | 0, s3 = s3 + Math.imul(P2, _t2) | 0, s3 = s3 + Math.imul(O5, It2) | 0, v5 = v5 + Math.imul(O5, _t2) | 0;
      var ri = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (ri >>> 26) | 0, ri &= 67108863, l5 = Math.imul(st2, vt2), s3 = Math.imul(st2, mt2), s3 = s3 + Math.imul(at2, vt2) | 0, v5 = Math.imul(at2, mt2), l5 = l5 + Math.imul(ft2, gt2) | 0, s3 = s3 + Math.imul(ft2, At2) | 0, s3 = s3 + Math.imul(ot2, gt2) | 0, v5 = v5 + Math.imul(ot2, At2) | 0, l5 = l5 + Math.imul(it2, bt3) | 0, s3 = s3 + Math.imul(it2, yt2) | 0, s3 = s3 + Math.imul(nt2, bt3) | 0, v5 = v5 + Math.imul(nt2, yt2) | 0, l5 = l5 + Math.imul(et2, wt2) | 0, s3 = s3 + Math.imul(et2, xt2) | 0, s3 = s3 + Math.imul(rt2, wt2) | 0, v5 = v5 + Math.imul(rt2, xt2) | 0, l5 = l5 + Math.imul($4, Mt3) | 0, s3 = s3 + Math.imul($4, Et2) | 0, s3 = s3 + Math.imul(tt2, Mt3) | 0, v5 = v5 + Math.imul(tt2, Et2) | 0, l5 = l5 + Math.imul(X2, St2) | 0, s3 = s3 + Math.imul(X2, Nt2) | 0, s3 = s3 + Math.imul(Z2, St2) | 0, v5 = v5 + Math.imul(Z2, Nt2) | 0, l5 = l5 + Math.imul(D4, It2) | 0, s3 = s3 + Math.imul(D4, _t2) | 0, s3 = s3 + Math.imul(q4, It2) | 0, v5 = v5 + Math.imul(q4, _t2) | 0;
      var ii = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (ii >>> 26) | 0, ii &= 67108863, l5 = Math.imul(st2, gt2), s3 = Math.imul(st2, At2), s3 = s3 + Math.imul(at2, gt2) | 0, v5 = Math.imul(at2, At2), l5 = l5 + Math.imul(ft2, bt3) | 0, s3 = s3 + Math.imul(ft2, yt2) | 0, s3 = s3 + Math.imul(ot2, bt3) | 0, v5 = v5 + Math.imul(ot2, yt2) | 0, l5 = l5 + Math.imul(it2, wt2) | 0, s3 = s3 + Math.imul(it2, xt2) | 0, s3 = s3 + Math.imul(nt2, wt2) | 0, v5 = v5 + Math.imul(nt2, xt2) | 0, l5 = l5 + Math.imul(et2, Mt3) | 0, s3 = s3 + Math.imul(et2, Et2) | 0, s3 = s3 + Math.imul(rt2, Mt3) | 0, v5 = v5 + Math.imul(rt2, Et2) | 0, l5 = l5 + Math.imul($4, St2) | 0, s3 = s3 + Math.imul($4, Nt2) | 0, s3 = s3 + Math.imul(tt2, St2) | 0, v5 = v5 + Math.imul(tt2, Nt2) | 0, l5 = l5 + Math.imul(X2, It2) | 0, s3 = s3 + Math.imul(X2, _t2) | 0, s3 = s3 + Math.imul(Z2, It2) | 0, v5 = v5 + Math.imul(Z2, _t2) | 0;
      var ni = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (ni >>> 26) | 0, ni &= 67108863, l5 = Math.imul(st2, bt3), s3 = Math.imul(st2, yt2), s3 = s3 + Math.imul(at2, bt3) | 0, v5 = Math.imul(at2, yt2), l5 = l5 + Math.imul(ft2, wt2) | 0, s3 = s3 + Math.imul(ft2, xt2) | 0, s3 = s3 + Math.imul(ot2, wt2) | 0, v5 = v5 + Math.imul(ot2, xt2) | 0, l5 = l5 + Math.imul(it2, Mt3) | 0, s3 = s3 + Math.imul(it2, Et2) | 0, s3 = s3 + Math.imul(nt2, Mt3) | 0, v5 = v5 + Math.imul(nt2, Et2) | 0, l5 = l5 + Math.imul(et2, St2) | 0, s3 = s3 + Math.imul(et2, Nt2) | 0, s3 = s3 + Math.imul(rt2, St2) | 0, v5 = v5 + Math.imul(rt2, Nt2) | 0, l5 = l5 + Math.imul($4, It2) | 0, s3 = s3 + Math.imul($4, _t2) | 0, s3 = s3 + Math.imul(tt2, It2) | 0, v5 = v5 + Math.imul(tt2, _t2) | 0;
      var fi = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (fi >>> 26) | 0, fi &= 67108863, l5 = Math.imul(st2, wt2), s3 = Math.imul(st2, xt2), s3 = s3 + Math.imul(at2, wt2) | 0, v5 = Math.imul(at2, xt2), l5 = l5 + Math.imul(ft2, Mt3) | 0, s3 = s3 + Math.imul(ft2, Et2) | 0, s3 = s3 + Math.imul(ot2, Mt3) | 0, v5 = v5 + Math.imul(ot2, Et2) | 0, l5 = l5 + Math.imul(it2, St2) | 0, s3 = s3 + Math.imul(it2, Nt2) | 0, s3 = s3 + Math.imul(nt2, St2) | 0, v5 = v5 + Math.imul(nt2, Nt2) | 0, l5 = l5 + Math.imul(et2, It2) | 0, s3 = s3 + Math.imul(et2, _t2) | 0, s3 = s3 + Math.imul(rt2, It2) | 0, v5 = v5 + Math.imul(rt2, _t2) | 0;
      var oi = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (oi >>> 26) | 0, oi &= 67108863, l5 = Math.imul(st2, Mt3), s3 = Math.imul(st2, Et2), s3 = s3 + Math.imul(at2, Mt3) | 0, v5 = Math.imul(at2, Et2), l5 = l5 + Math.imul(ft2, St2) | 0, s3 = s3 + Math.imul(ft2, Nt2) | 0, s3 = s3 + Math.imul(ot2, St2) | 0, v5 = v5 + Math.imul(ot2, Nt2) | 0, l5 = l5 + Math.imul(it2, It2) | 0, s3 = s3 + Math.imul(it2, _t2) | 0, s3 = s3 + Math.imul(nt2, It2) | 0, v5 = v5 + Math.imul(nt2, _t2) | 0;
      var si = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (si >>> 26) | 0, si &= 67108863, l5 = Math.imul(st2, St2), s3 = Math.imul(st2, Nt2), s3 = s3 + Math.imul(at2, St2) | 0, v5 = Math.imul(at2, Nt2), l5 = l5 + Math.imul(ft2, It2) | 0, s3 = s3 + Math.imul(ft2, _t2) | 0, s3 = s3 + Math.imul(ot2, It2) | 0, v5 = v5 + Math.imul(ot2, _t2) | 0;
      var ai = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      M4 = (v5 + (s3 >>> 13) | 0) + (ai >>> 26) | 0, ai &= 67108863, l5 = Math.imul(st2, It2), s3 = Math.imul(st2, _t2), s3 = s3 + Math.imul(at2, It2) | 0, v5 = Math.imul(at2, _t2);
      var ui = (M4 + l5 | 0) + ((s3 & 8191) << 13) | 0;
      return M4 = (v5 + (s3 >>> 13) | 0) + (ui >>> 26) | 0, ui &= 67108863, x3[0] = Me2, x3[1] = Ee2, x3[2] = Se2, x3[3] = Ne2, x3[4] = Ie, x3[5] = Wr, x3[6] = Xr, x3[7] = Zr, x3[8] = $r2, x3[9] = ti, x3[10] = ei, x3[11] = ri, x3[12] = ii, x3[13] = ni, x3[14] = fi, x3[15] = oi, x3[16] = si, x3[17] = ai, x3[18] = ui, M4 !== 0 && (x3[19] = M4, c6.length++), c6;
    };
    Math.imul || (J2 = U4);
    function Bt3(A3, f5, a4) {
      a4.negative = f5.negative ^ A3.negative, a4.length = A3.length + f5.length;
      for (var c6 = 0, d4 = 0, g5 = 0; g5 < a4.length - 1; g5++) {
        var x3 = d4;
        d4 = 0;
        for (var M4 = c6 & 67108863, l5 = Math.min(g5, f5.length - 1), s3 = Math.max(0, g5 - A3.length + 1); s3 <= l5; s3++) {
          var v5 = g5 - s3, k3 = A3.words[v5] | 0, u4 = f5.words[s3] | 0, E7 = k3 * u4, _3 = E7 & 67108863;
          x3 = x3 + (E7 / 67108864 | 0) | 0, _3 = _3 + M4 | 0, M4 = _3 & 67108863, x3 = x3 + (_3 >>> 26) | 0, d4 += x3 >>> 26, x3 &= 67108863;
        }
        a4.words[g5] = M4, c6 = x3, x3 = d4;
      }
      return c6 !== 0 ? a4.words[g5] = c6 : a4.length--, a4._strip();
    }
    function G(A3, f5, a4) {
      return Bt3(A3, f5, a4);
    }
    o5.prototype.mulTo = function(f5, a4) {
      var c6, d4 = this.length + f5.length;
      return this.length === 10 && f5.length === 10 ? c6 = J2(this, f5, a4) : d4 < 63 ? c6 = U4(this, f5, a4) : d4 < 1024 ? c6 = Bt3(this, f5, a4) : c6 = G(this, f5, a4), c6;
    }, o5.prototype.mul = function(f5) {
      var a4 = new o5(null);
      return a4.words = new Array(this.length + f5.length), this.mulTo(f5, a4);
    }, o5.prototype.mulf = function(f5) {
      var a4 = new o5(null);
      return a4.words = new Array(this.length + f5.length), G(this, f5, a4);
    }, o5.prototype.imul = function(f5) {
      return this.clone().mulTo(f5, this);
    }, o5.prototype.imuln = function(f5) {
      var a4 = f5 < 0;
      a4 && (f5 = -f5), i4(typeof f5 == "number"), i4(f5 < 67108864);
      for (var c6 = 0, d4 = 0; d4 < this.length; d4++) {
        var g5 = (this.words[d4] | 0) * f5, x3 = (g5 & 67108863) + (c6 & 67108863);
        c6 >>= 26, c6 += g5 / 67108864 | 0, c6 += x3 >>> 26, this.words[d4] = x3 & 67108863;
      }
      return c6 !== 0 && (this.words[d4] = c6, this.length++), a4 ? this.ineg() : this;
    }, o5.prototype.muln = function(f5) {
      return this.clone().imuln(f5);
    }, o5.prototype.sqr = function() {
      return this.mul(this);
    }, o5.prototype.isqr = function() {
      return this.imul(this.clone());
    }, o5.prototype.pow = function(f5) {
      var a4 = F(f5);
      if (a4.length === 0) return new o5(1);
      for (var c6 = this, d4 = 0; d4 < a4.length && a4[d4] === 0; d4++, c6 = c6.sqr()) ;
      if (++d4 < a4.length) for (var g5 = c6.sqr(); d4 < a4.length; d4++, g5 = g5.sqr()) a4[d4] !== 0 && (c6 = c6.mul(g5));
      return c6;
    }, o5.prototype.iushln = function(f5) {
      i4(typeof f5 == "number" && f5 >= 0);
      var a4 = f5 % 26, c6 = (f5 - a4) / 26, d4 = 67108863 >>> 26 - a4 << 26 - a4, g5;
      if (a4 !== 0) {
        var x3 = 0;
        for (g5 = 0; g5 < this.length; g5++) {
          var M4 = this.words[g5] & d4, l5 = (this.words[g5] | 0) - M4 << a4;
          this.words[g5] = l5 | x3, x3 = M4 >>> 26 - a4;
        }
        x3 && (this.words[g5] = x3, this.length++);
      }
      if (c6 !== 0) {
        for (g5 = this.length - 1; g5 >= 0; g5--) this.words[g5 + c6] = this.words[g5];
        for (g5 = 0; g5 < c6; g5++) this.words[g5] = 0;
        this.length += c6;
      }
      return this._strip();
    }, o5.prototype.ishln = function(f5) {
      return i4(this.negative === 0), this.iushln(f5);
    }, o5.prototype.iushrn = function(f5, a4, c6) {
      i4(typeof f5 == "number" && f5 >= 0);
      var d4;
      a4 ? d4 = (a4 - a4 % 26) / 26 : d4 = 0;
      var g5 = f5 % 26, x3 = Math.min((f5 - g5) / 26, this.length), M4 = 67108863 ^ 67108863 >>> g5 << g5, l5 = c6;
      if (d4 -= x3, d4 = Math.max(0, d4), l5) {
        for (var s3 = 0; s3 < x3; s3++) l5.words[s3] = this.words[s3];
        l5.length = x3;
      }
      if (x3 !== 0) if (this.length > x3) for (this.length -= x3, s3 = 0; s3 < this.length; s3++) this.words[s3] = this.words[s3 + x3];
      else this.words[0] = 0, this.length = 1;
      var v5 = 0;
      for (s3 = this.length - 1; s3 >= 0 && (v5 !== 0 || s3 >= d4); s3--) {
        var k3 = this.words[s3] | 0;
        this.words[s3] = v5 << 26 - g5 | k3 >>> g5, v5 = k3 & M4;
      }
      return l5 && v5 !== 0 && (l5.words[l5.length++] = v5), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, o5.prototype.ishrn = function(f5, a4, c6) {
      return i4(this.negative === 0), this.iushrn(f5, a4, c6);
    }, o5.prototype.shln = function(f5) {
      return this.clone().ishln(f5);
    }, o5.prototype.ushln = function(f5) {
      return this.clone().iushln(f5);
    }, o5.prototype.shrn = function(f5) {
      return this.clone().ishrn(f5);
    }, o5.prototype.ushrn = function(f5) {
      return this.clone().iushrn(f5);
    }, o5.prototype.testn = function(f5) {
      i4(typeof f5 == "number" && f5 >= 0);
      var a4 = f5 % 26, c6 = (f5 - a4) / 26, d4 = 1 << a4;
      if (this.length <= c6) return false;
      var g5 = this.words[c6];
      return !!(g5 & d4);
    }, o5.prototype.imaskn = function(f5) {
      i4(typeof f5 == "number" && f5 >= 0);
      var a4 = f5 % 26, c6 = (f5 - a4) / 26;
      if (i4(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c6) return this;
      if (a4 !== 0 && c6++, this.length = Math.min(c6, this.length), a4 !== 0) {
        var d4 = 67108863 ^ 67108863 >>> a4 << a4;
        this.words[this.length - 1] &= d4;
      }
      return this._strip();
    }, o5.prototype.maskn = function(f5) {
      return this.clone().imaskn(f5);
    }, o5.prototype.iaddn = function(f5) {
      return i4(typeof f5 == "number"), i4(f5 < 67108864), f5 < 0 ? this.isubn(-f5) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f5 ? (this.words[0] = f5 - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f5), this.negative = 1, this) : this._iaddn(f5);
    }, o5.prototype._iaddn = function(f5) {
      this.words[0] += f5;
      for (var a4 = 0; a4 < this.length && this.words[a4] >= 67108864; a4++) this.words[a4] -= 67108864, a4 === this.length - 1 ? this.words[a4 + 1] = 1 : this.words[a4 + 1]++;
      return this.length = Math.max(this.length, a4 + 1), this;
    }, o5.prototype.isubn = function(f5) {
      if (i4(typeof f5 == "number"), i4(f5 < 67108864), f5 < 0) return this.iaddn(-f5);
      if (this.negative !== 0) return this.negative = 0, this.iaddn(f5), this.negative = 1, this;
      if (this.words[0] -= f5, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
      else for (var a4 = 0; a4 < this.length && this.words[a4] < 0; a4++) this.words[a4] += 67108864, this.words[a4 + 1] -= 1;
      return this._strip();
    }, o5.prototype.addn = function(f5) {
      return this.clone().iaddn(f5);
    }, o5.prototype.subn = function(f5) {
      return this.clone().isubn(f5);
    }, o5.prototype.iabs = function() {
      return this.negative = 0, this;
    }, o5.prototype.abs = function() {
      return this.clone().iabs();
    }, o5.prototype._ishlnsubmul = function(f5, a4, c6) {
      var d4 = f5.length + c6, g5;
      this._expand(d4);
      var x3, M4 = 0;
      for (g5 = 0; g5 < f5.length; g5++) {
        x3 = (this.words[g5 + c6] | 0) + M4;
        var l5 = (f5.words[g5] | 0) * a4;
        x3 -= l5 & 67108863, M4 = (x3 >> 26) - (l5 / 67108864 | 0), this.words[g5 + c6] = x3 & 67108863;
      }
      for (; g5 < this.length - c6; g5++) x3 = (this.words[g5 + c6] | 0) + M4, M4 = x3 >> 26, this.words[g5 + c6] = x3 & 67108863;
      if (M4 === 0) return this._strip();
      for (i4(M4 === -1), M4 = 0, g5 = 0; g5 < this.length; g5++) x3 = -(this.words[g5] | 0) + M4, M4 = x3 >> 26, this.words[g5] = x3 & 67108863;
      return this.negative = 1, this._strip();
    }, o5.prototype._wordDiv = function(f5, a4) {
      var c6 = this.length - f5.length, d4 = this.clone(), g5 = f5, x3 = g5.words[g5.length - 1] | 0, M4 = this._countBits(x3);
      c6 = 26 - M4, c6 !== 0 && (g5 = g5.ushln(c6), d4.iushln(c6), x3 = g5.words[g5.length - 1] | 0);
      var l5 = d4.length - g5.length, s3;
      if (a4 !== "mod") {
        s3 = new o5(null), s3.length = l5 + 1, s3.words = new Array(s3.length);
        for (var v5 = 0; v5 < s3.length; v5++) s3.words[v5] = 0;
      }
      var k3 = d4.clone()._ishlnsubmul(g5, 1, l5);
      k3.negative === 0 && (d4 = k3, s3 && (s3.words[l5] = 1));
      for (var u4 = l5 - 1; u4 >= 0; u4--) {
        var E7 = (d4.words[g5.length + u4] | 0) * 67108864 + (d4.words[g5.length + u4 - 1] | 0);
        for (E7 = Math.min(E7 / x3 | 0, 67108863), d4._ishlnsubmul(g5, E7, u4); d4.negative !== 0; ) E7--, d4.negative = 0, d4._ishlnsubmul(g5, 1, u4), d4.isZero() || (d4.negative ^= 1);
        s3 && (s3.words[u4] = E7);
      }
      return s3 && s3._strip(), d4._strip(), a4 !== "div" && c6 !== 0 && d4.iushrn(c6), { div: s3 || null, mod: d4 };
    }, o5.prototype.divmod = function(f5, a4, c6) {
      if (i4(!f5.isZero()), this.isZero()) return { div: new o5(0), mod: new o5(0) };
      var d4, g5, x3;
      return this.negative !== 0 && f5.negative === 0 ? (x3 = this.neg().divmod(f5, a4), a4 !== "mod" && (d4 = x3.div.neg()), a4 !== "div" && (g5 = x3.mod.neg(), c6 && g5.negative !== 0 && g5.iadd(f5)), { div: d4, mod: g5 }) : this.negative === 0 && f5.negative !== 0 ? (x3 = this.divmod(f5.neg(), a4), a4 !== "mod" && (d4 = x3.div.neg()), { div: d4, mod: x3.mod }) : this.negative & f5.negative ? (x3 = this.neg().divmod(f5.neg(), a4), a4 !== "div" && (g5 = x3.mod.neg(), c6 && g5.negative !== 0 && g5.isub(f5)), { div: x3.div, mod: g5 }) : f5.length > this.length || this.cmp(f5) < 0 ? { div: new o5(0), mod: this } : f5.length === 1 ? a4 === "div" ? { div: this.divn(f5.words[0]), mod: null } : a4 === "mod" ? { div: null, mod: new o5(this.modrn(f5.words[0])) } : { div: this.divn(f5.words[0]), mod: new o5(this.modrn(f5.words[0])) } : this._wordDiv(f5, a4);
    }, o5.prototype.div = function(f5) {
      return this.divmod(f5, "div", false).div;
    }, o5.prototype.mod = function(f5) {
      return this.divmod(f5, "mod", false).mod;
    }, o5.prototype.umod = function(f5) {
      return this.divmod(f5, "mod", true).mod;
    }, o5.prototype.divRound = function(f5) {
      var a4 = this.divmod(f5);
      if (a4.mod.isZero()) return a4.div;
      var c6 = a4.div.negative !== 0 ? a4.mod.isub(f5) : a4.mod, d4 = f5.ushrn(1), g5 = f5.andln(1), x3 = c6.cmp(d4);
      return x3 < 0 || g5 === 1 && x3 === 0 ? a4.div : a4.div.negative !== 0 ? a4.div.isubn(1) : a4.div.iaddn(1);
    }, o5.prototype.modrn = function(f5) {
      var a4 = f5 < 0;
      a4 && (f5 = -f5), i4(f5 <= 67108863);
      for (var c6 = (1 << 26) % f5, d4 = 0, g5 = this.length - 1; g5 >= 0; g5--) d4 = (c6 * d4 + (this.words[g5] | 0)) % f5;
      return a4 ? -d4 : d4;
    }, o5.prototype.modn = function(f5) {
      return this.modrn(f5);
    }, o5.prototype.idivn = function(f5) {
      var a4 = f5 < 0;
      a4 && (f5 = -f5), i4(f5 <= 67108863);
      for (var c6 = 0, d4 = this.length - 1; d4 >= 0; d4--) {
        var g5 = (this.words[d4] | 0) + c6 * 67108864;
        this.words[d4] = g5 / f5 | 0, c6 = g5 % f5;
      }
      return this._strip(), a4 ? this.ineg() : this;
    }, o5.prototype.divn = function(f5) {
      return this.clone().idivn(f5);
    }, o5.prototype.egcd = function(f5) {
      i4(f5.negative === 0), i4(!f5.isZero());
      var a4 = this, c6 = f5.clone();
      a4.negative !== 0 ? a4 = a4.umod(f5) : a4 = a4.clone();
      for (var d4 = new o5(1), g5 = new o5(0), x3 = new o5(0), M4 = new o5(1), l5 = 0; a4.isEven() && c6.isEven(); ) a4.iushrn(1), c6.iushrn(1), ++l5;
      for (var s3 = c6.clone(), v5 = a4.clone(); !a4.isZero(); ) {
        for (var k3 = 0, u4 = 1; !(a4.words[0] & u4) && k3 < 26; ++k3, u4 <<= 1) ;
        if (k3 > 0) for (a4.iushrn(k3); k3-- > 0; ) (d4.isOdd() || g5.isOdd()) && (d4.iadd(s3), g5.isub(v5)), d4.iushrn(1), g5.iushrn(1);
        for (var E7 = 0, _3 = 1; !(c6.words[0] & _3) && E7 < 26; ++E7, _3 <<= 1) ;
        if (E7 > 0) for (c6.iushrn(E7); E7-- > 0; ) (x3.isOdd() || M4.isOdd()) && (x3.iadd(s3), M4.isub(v5)), x3.iushrn(1), M4.iushrn(1);
        a4.cmp(c6) >= 0 ? (a4.isub(c6), d4.isub(x3), g5.isub(M4)) : (c6.isub(a4), x3.isub(d4), M4.isub(g5));
      }
      return { a: x3, b: M4, gcd: c6.iushln(l5) };
    }, o5.prototype._invmp = function(f5) {
      i4(f5.negative === 0), i4(!f5.isZero());
      var a4 = this, c6 = f5.clone();
      a4.negative !== 0 ? a4 = a4.umod(f5) : a4 = a4.clone();
      for (var d4 = new o5(1), g5 = new o5(0), x3 = c6.clone(); a4.cmpn(1) > 0 && c6.cmpn(1) > 0; ) {
        for (var M4 = 0, l5 = 1; !(a4.words[0] & l5) && M4 < 26; ++M4, l5 <<= 1) ;
        if (M4 > 0) for (a4.iushrn(M4); M4-- > 0; ) d4.isOdd() && d4.iadd(x3), d4.iushrn(1);
        for (var s3 = 0, v5 = 1; !(c6.words[0] & v5) && s3 < 26; ++s3, v5 <<= 1) ;
        if (s3 > 0) for (c6.iushrn(s3); s3-- > 0; ) g5.isOdd() && g5.iadd(x3), g5.iushrn(1);
        a4.cmp(c6) >= 0 ? (a4.isub(c6), d4.isub(g5)) : (c6.isub(a4), g5.isub(d4));
      }
      var k3;
      return a4.cmpn(1) === 0 ? k3 = d4 : k3 = g5, k3.cmpn(0) < 0 && k3.iadd(f5), k3;
    }, o5.prototype.gcd = function(f5) {
      if (this.isZero()) return f5.abs();
      if (f5.isZero()) return this.abs();
      var a4 = this.clone(), c6 = f5.clone();
      a4.negative = 0, c6.negative = 0;
      for (var d4 = 0; a4.isEven() && c6.isEven(); d4++) a4.iushrn(1), c6.iushrn(1);
      do {
        for (; a4.isEven(); ) a4.iushrn(1);
        for (; c6.isEven(); ) c6.iushrn(1);
        var g5 = a4.cmp(c6);
        if (g5 < 0) {
          var x3 = a4;
          a4 = c6, c6 = x3;
        } else if (g5 === 0 || c6.cmpn(1) === 0) break;
        a4.isub(c6);
      } while (true);
      return c6.iushln(d4);
    }, o5.prototype.invm = function(f5) {
      return this.egcd(f5).a.umod(f5);
    }, o5.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, o5.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, o5.prototype.andln = function(f5) {
      return this.words[0] & f5;
    }, o5.prototype.bincn = function(f5) {
      i4(typeof f5 == "number");
      var a4 = f5 % 26, c6 = (f5 - a4) / 26, d4 = 1 << a4;
      if (this.length <= c6) return this._expand(c6 + 1), this.words[c6] |= d4, this;
      for (var g5 = d4, x3 = c6; g5 !== 0 && x3 < this.length; x3++) {
        var M4 = this.words[x3] | 0;
        M4 += g5, g5 = M4 >>> 26, M4 &= 67108863, this.words[x3] = M4;
      }
      return g5 !== 0 && (this.words[x3] = g5, this.length++), this;
    }, o5.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, o5.prototype.cmpn = function(f5) {
      var a4 = f5 < 0;
      if (this.negative !== 0 && !a4) return -1;
      if (this.negative === 0 && a4) return 1;
      this._strip();
      var c6;
      if (this.length > 1) c6 = 1;
      else {
        a4 && (f5 = -f5), i4(f5 <= 67108863, "Number is too big");
        var d4 = this.words[0] | 0;
        c6 = d4 === f5 ? 0 : d4 < f5 ? -1 : 1;
      }
      return this.negative !== 0 ? -c6 | 0 : c6;
    }, o5.prototype.cmp = function(f5) {
      if (this.negative !== 0 && f5.negative === 0) return -1;
      if (this.negative === 0 && f5.negative !== 0) return 1;
      var a4 = this.ucmp(f5);
      return this.negative !== 0 ? -a4 | 0 : a4;
    }, o5.prototype.ucmp = function(f5) {
      if (this.length > f5.length) return 1;
      if (this.length < f5.length) return -1;
      for (var a4 = 0, c6 = this.length - 1; c6 >= 0; c6--) {
        var d4 = this.words[c6] | 0, g5 = f5.words[c6] | 0;
        if (d4 !== g5) {
          d4 < g5 ? a4 = -1 : d4 > g5 && (a4 = 1);
          break;
        }
      }
      return a4;
    }, o5.prototype.gtn = function(f5) {
      return this.cmpn(f5) === 1;
    }, o5.prototype.gt = function(f5) {
      return this.cmp(f5) === 1;
    }, o5.prototype.gten = function(f5) {
      return this.cmpn(f5) >= 0;
    }, o5.prototype.gte = function(f5) {
      return this.cmp(f5) >= 0;
    }, o5.prototype.ltn = function(f5) {
      return this.cmpn(f5) === -1;
    }, o5.prototype.lt = function(f5) {
      return this.cmp(f5) === -1;
    }, o5.prototype.lten = function(f5) {
      return this.cmpn(f5) <= 0;
    }, o5.prototype.lte = function(f5) {
      return this.cmp(f5) <= 0;
    }, o5.prototype.eqn = function(f5) {
      return this.cmpn(f5) === 0;
    }, o5.prototype.eq = function(f5) {
      return this.cmp(f5) === 0;
    }, o5.red = function(f5) {
      return new Y(f5);
    }, o5.prototype.toRed = function(f5) {
      return i4(!this.red, "Already a number in reduction context"), i4(this.negative === 0, "red works only with positives"), f5.convertTo(this)._forceRed(f5);
    }, o5.prototype.fromRed = function() {
      return i4(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o5.prototype._forceRed = function(f5) {
      return this.red = f5, this;
    }, o5.prototype.forceRed = function(f5) {
      return i4(!this.red, "Already a number in reduction context"), this._forceRed(f5);
    }, o5.prototype.redAdd = function(f5) {
      return i4(this.red, "redAdd works only with red numbers"), this.red.add(this, f5);
    }, o5.prototype.redIAdd = function(f5) {
      return i4(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f5);
    }, o5.prototype.redSub = function(f5) {
      return i4(this.red, "redSub works only with red numbers"), this.red.sub(this, f5);
    }, o5.prototype.redISub = function(f5) {
      return i4(this.red, "redISub works only with red numbers"), this.red.isub(this, f5);
    }, o5.prototype.redShl = function(f5) {
      return i4(this.red, "redShl works only with red numbers"), this.red.shl(this, f5);
    }, o5.prototype.redMul = function(f5) {
      return i4(this.red, "redMul works only with red numbers"), this.red._verify2(this, f5), this.red.mul(this, f5);
    }, o5.prototype.redIMul = function(f5) {
      return i4(this.red, "redMul works only with red numbers"), this.red._verify2(this, f5), this.red.imul(this, f5);
    }, o5.prototype.redSqr = function() {
      return i4(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o5.prototype.redISqr = function() {
      return i4(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o5.prototype.redSqrt = function() {
      return i4(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o5.prototype.redInvm = function() {
      return i4(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o5.prototype.redNeg = function() {
      return i4(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o5.prototype.redPow = function(f5) {
      return i4(this.red && !f5.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f5);
    };
    var H = { k256: null, p224: null, p192: null, p25519: null };
    function z5(A3, f5) {
      this.name = A3, this.p = new o5(f5, 16), this.n = this.p.bitLength(), this.k = new o5(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    z5.prototype._tmp = function() {
      var f5 = new o5(null);
      return f5.words = new Array(Math.ceil(this.n / 13)), f5;
    }, z5.prototype.ireduce = function(f5) {
      var a4 = f5, c6;
      do
        this.split(a4, this.tmp), a4 = this.imulK(a4), a4 = a4.iadd(this.tmp), c6 = a4.bitLength();
      while (c6 > this.n);
      var d4 = c6 < this.n ? -1 : a4.ucmp(this.p);
      return d4 === 0 ? (a4.words[0] = 0, a4.length = 1) : d4 > 0 ? a4.isub(this.p) : a4.strip !== void 0 ? a4.strip() : a4._strip(), a4;
    }, z5.prototype.split = function(f5, a4) {
      f5.iushrn(this.n, 0, a4);
    }, z5.prototype.imulK = function(f5) {
      return f5.imul(this.k);
    };
    function Pt2() {
      z5.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    n5(Pt2, z5), Pt2.prototype.split = function(f5, a4) {
      for (var c6 = 4194303, d4 = Math.min(f5.length, 9), g5 = 0; g5 < d4; g5++) a4.words[g5] = f5.words[g5];
      if (a4.length = d4, f5.length <= 9) {
        f5.words[0] = 0, f5.length = 1;
        return;
      }
      var x3 = f5.words[9];
      for (a4.words[a4.length++] = x3 & c6, g5 = 10; g5 < f5.length; g5++) {
        var M4 = f5.words[g5] | 0;
        f5.words[g5 - 10] = (M4 & c6) << 4 | x3 >>> 22, x3 = M4;
      }
      x3 >>>= 22, f5.words[g5 - 10] = x3, x3 === 0 && f5.length > 10 ? f5.length -= 10 : f5.length -= 9;
    }, Pt2.prototype.imulK = function(f5) {
      f5.words[f5.length] = 0, f5.words[f5.length + 1] = 0, f5.length += 2;
      for (var a4 = 0, c6 = 0; c6 < f5.length; c6++) {
        var d4 = f5.words[c6] | 0;
        a4 += d4 * 977, f5.words[c6] = a4 & 67108863, a4 = d4 * 64 + (a4 / 67108864 | 0);
      }
      return f5.words[f5.length - 1] === 0 && (f5.length--, f5.words[f5.length - 1] === 0 && f5.length--), f5;
    };
    function W2() {
      z5.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    n5(W2, z5);
    function Rt2() {
      z5.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    n5(Rt2, z5);
    function Yt3() {
      z5.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    n5(Yt3, z5), Yt3.prototype.imulK = function(f5) {
      for (var a4 = 0, c6 = 0; c6 < f5.length; c6++) {
        var d4 = (f5.words[c6] | 0) * 19 + a4, g5 = d4 & 67108863;
        d4 >>>= 26, f5.words[c6] = g5, a4 = d4;
      }
      return a4 !== 0 && (f5.words[f5.length++] = a4), f5;
    }, o5._prime = function(f5) {
      if (H[f5]) return H[f5];
      var a4;
      if (f5 === "k256") a4 = new Pt2();
      else if (f5 === "p224") a4 = new W2();
      else if (f5 === "p192") a4 = new Rt2();
      else if (f5 === "p25519") a4 = new Yt3();
      else throw new Error("Unknown prime " + f5);
      return H[f5] = a4, a4;
    };
    function Y(A3) {
      if (typeof A3 == "string") {
        var f5 = o5._prime(A3);
        this.m = f5.p, this.prime = f5;
      } else i4(A3.gtn(1), "modulus must be greater than 1"), this.m = A3, this.prime = null;
    }
    Y.prototype._verify1 = function(f5) {
      i4(f5.negative === 0, "red works only with positives"), i4(f5.red, "red works only with red numbers");
    }, Y.prototype._verify2 = function(f5, a4) {
      i4((f5.negative | a4.negative) === 0, "red works only with positives"), i4(f5.red && f5.red === a4.red, "red works only with red numbers");
    }, Y.prototype.imod = function(f5) {
      return this.prime ? this.prime.ireduce(f5)._forceRed(this) : (w5(f5, f5.umod(this.m)._forceRed(this)), f5);
    }, Y.prototype.neg = function(f5) {
      return f5.isZero() ? f5.clone() : this.m.sub(f5)._forceRed(this);
    }, Y.prototype.add = function(f5, a4) {
      this._verify2(f5, a4);
      var c6 = f5.add(a4);
      return c6.cmp(this.m) >= 0 && c6.isub(this.m), c6._forceRed(this);
    }, Y.prototype.iadd = function(f5, a4) {
      this._verify2(f5, a4);
      var c6 = f5.iadd(a4);
      return c6.cmp(this.m) >= 0 && c6.isub(this.m), c6;
    }, Y.prototype.sub = function(f5, a4) {
      this._verify2(f5, a4);
      var c6 = f5.sub(a4);
      return c6.cmpn(0) < 0 && c6.iadd(this.m), c6._forceRed(this);
    }, Y.prototype.isub = function(f5, a4) {
      this._verify2(f5, a4);
      var c6 = f5.isub(a4);
      return c6.cmpn(0) < 0 && c6.iadd(this.m), c6;
    }, Y.prototype.shl = function(f5, a4) {
      return this._verify1(f5), this.imod(f5.ushln(a4));
    }, Y.prototype.imul = function(f5, a4) {
      return this._verify2(f5, a4), this.imod(f5.imul(a4));
    }, Y.prototype.mul = function(f5, a4) {
      return this._verify2(f5, a4), this.imod(f5.mul(a4));
    }, Y.prototype.isqr = function(f5) {
      return this.imul(f5, f5.clone());
    }, Y.prototype.sqr = function(f5) {
      return this.mul(f5, f5);
    }, Y.prototype.sqrt = function(f5) {
      if (f5.isZero()) return f5.clone();
      var a4 = this.m.andln(3);
      if (i4(a4 % 2 === 1), a4 === 3) {
        var c6 = this.m.add(new o5(1)).iushrn(2);
        return this.pow(f5, c6);
      }
      for (var d4 = this.m.subn(1), g5 = 0; !d4.isZero() && d4.andln(1) === 0; ) g5++, d4.iushrn(1);
      i4(!d4.isZero());
      var x3 = new o5(1).toRed(this), M4 = x3.redNeg(), l5 = this.m.subn(1).iushrn(1), s3 = this.m.bitLength();
      for (s3 = new o5(2 * s3 * s3).toRed(this); this.pow(s3, l5).cmp(M4) !== 0; ) s3.redIAdd(M4);
      for (var v5 = this.pow(s3, d4), k3 = this.pow(f5, d4.addn(1).iushrn(1)), u4 = this.pow(f5, d4), E7 = g5; u4.cmp(x3) !== 0; ) {
        for (var _3 = u4, B3 = 0; _3.cmp(x3) !== 0; B3++) _3 = _3.redSqr();
        i4(B3 < E7);
        var R3 = this.pow(v5, new o5(1).iushln(E7 - B3 - 1));
        k3 = k3.redMul(R3), v5 = R3.redSqr(), u4 = u4.redMul(v5), E7 = B3;
      }
      return k3;
    }, Y.prototype.invm = function(f5) {
      var a4 = f5._invmp(this.m);
      return a4.negative !== 0 ? (a4.negative = 0, this.imod(a4).redNeg()) : this.imod(a4);
    }, Y.prototype.pow = function(f5, a4) {
      if (a4.isZero()) return new o5(1).toRed(this);
      if (a4.cmpn(1) === 0) return f5.clone();
      var c6 = 4, d4 = new Array(1 << c6);
      d4[0] = new o5(1).toRed(this), d4[1] = f5;
      for (var g5 = 2; g5 < d4.length; g5++) d4[g5] = this.mul(d4[g5 - 1], f5);
      var x3 = d4[0], M4 = 0, l5 = 0, s3 = a4.bitLength() % 26;
      for (s3 === 0 && (s3 = 26), g5 = a4.length - 1; g5 >= 0; g5--) {
        for (var v5 = a4.words[g5], k3 = s3 - 1; k3 >= 0; k3--) {
          var u4 = v5 >> k3 & 1;
          if (x3 !== d4[0] && (x3 = this.sqr(x3)), u4 === 0 && M4 === 0) {
            l5 = 0;
            continue;
          }
          M4 <<= 1, M4 |= u4, l5++, !(l5 !== c6 && (g5 !== 0 || k3 !== 0)) && (x3 = this.mul(x3, d4[M4]), l5 = 0, M4 = 0);
        }
        s3 = 26;
      }
      return x3;
    }, Y.prototype.convertTo = function(f5) {
      var a4 = f5.umod(this.m);
      return a4 === f5 ? a4.clone() : a4;
    }, Y.prototype.convertFrom = function(f5) {
      var a4 = f5.clone();
      return a4.red = null, a4;
    }, o5.mont = function(f5) {
      return new Vt3(f5);
    };
    function Vt3(A3) {
      Y.call(this, A3), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o5(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    n5(Vt3, Y), Vt3.prototype.convertTo = function(f5) {
      return this.imod(f5.ushln(this.shift));
    }, Vt3.prototype.convertFrom = function(f5) {
      var a4 = this.imod(f5.mul(this.rinv));
      return a4.red = null, a4;
    }, Vt3.prototype.imul = function(f5, a4) {
      if (f5.isZero() || a4.isZero()) return f5.words[0] = 0, f5.length = 1, f5;
      var c6 = f5.imul(a4), d4 = c6.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g5 = c6.isub(d4).iushrn(this.shift), x3 = g5;
      return g5.cmp(this.m) >= 0 ? x3 = g5.isub(this.m) : g5.cmpn(0) < 0 && (x3 = g5.iadd(this.m)), x3._forceRed(this);
    }, Vt3.prototype.mul = function(f5, a4) {
      if (f5.isZero() || a4.isZero()) return new o5(0)._forceRed(this);
      var c6 = f5.mul(a4), d4 = c6.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g5 = c6.isub(d4).iushrn(this.shift), x3 = g5;
      return g5.cmp(this.m) >= 0 ? x3 = g5.isub(this.m) : g5.cmpn(0) < 0 && (x3 = g5.iadd(this.m)), x3._forceRed(this);
    }, Vt3.prototype.invm = function(f5) {
      var a4 = this.imod(f5._invmp(this.m).mul(this.r2));
      return a4._forceRed(this);
    };
  })(e2, On);
})(Ln);
var K = Ln.exports;
var jn = "bignumber/5.7.0";
var Rr = K.BN;
var Ae = new L(jn);
var wi = {};
var Qn = 9007199254740991;
function C0(e2) {
  return e2 != null && (V.isBigNumber(e2) || typeof e2 == "number" && e2 % 1 === 0 || typeof e2 == "string" && !!e2.match(/^-?[0-9]+$/) || Qt(e2) || typeof e2 == "bigint" || ir(e2));
}
var Jn = false;
var V = class _V {
  constructor(t, r3) {
    t !== wi && Ae.throwError("cannot call constructor directly; use BigNumber.from", L.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = r3, this._isBigNumber = true, Object.freeze(this);
  }
  fromTwos(t) {
    return Lt(j(this).fromTwos(t));
  }
  toTwos(t) {
    return Lt(j(this).toTwos(t));
  }
  abs() {
    return this._hex[0] === "-" ? _V.from(this._hex.substring(1)) : this;
  }
  add(t) {
    return Lt(j(this).add(j(t)));
  }
  sub(t) {
    return Lt(j(this).sub(j(t)));
  }
  div(t) {
    return _V.from(t).isZero() && Wt("division-by-zero", "div"), Lt(j(this).div(j(t)));
  }
  mul(t) {
    return Lt(j(this).mul(j(t)));
  }
  mod(t) {
    const r3 = j(t);
    return r3.isNeg() && Wt("division-by-zero", "mod"), Lt(j(this).umod(r3));
  }
  pow(t) {
    const r3 = j(t);
    return r3.isNeg() && Wt("negative-power", "pow"), Lt(j(this).pow(r3));
  }
  and(t) {
    const r3 = j(t);
    return (this.isNegative() || r3.isNeg()) && Wt("unbound-bitwise-result", "and"), Lt(j(this).and(r3));
  }
  or(t) {
    const r3 = j(t);
    return (this.isNegative() || r3.isNeg()) && Wt("unbound-bitwise-result", "or"), Lt(j(this).or(r3));
  }
  xor(t) {
    const r3 = j(t);
    return (this.isNegative() || r3.isNeg()) && Wt("unbound-bitwise-result", "xor"), Lt(j(this).xor(r3));
  }
  mask(t) {
    return (this.isNegative() || t < 0) && Wt("negative-width", "mask"), Lt(j(this).maskn(t));
  }
  shl(t) {
    return (this.isNegative() || t < 0) && Wt("negative-width", "shl"), Lt(j(this).shln(t));
  }
  shr(t) {
    return (this.isNegative() || t < 0) && Wt("negative-width", "shr"), Lt(j(this).shrn(t));
  }
  eq(t) {
    return j(this).eq(j(t));
  }
  lt(t) {
    return j(this).lt(j(t));
  }
  lte(t) {
    return j(this).lte(j(t));
  }
  gt(t) {
    return j(this).gt(j(t));
  }
  gte(t) {
    return j(this).gte(j(t));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return j(this).isZero();
  }
  toNumber() {
    try {
      return j(this).toNumber();
    } catch {
      Wt("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Ae.throwError("this platform does not support BigInt", L.errors.UNSUPPORTED_OPERATION, { value: this.toString() });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? Jn || (Jn = true, Ae.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Ae.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", L.errors.UNEXPECTED_ARGUMENT, {}) : Ae.throwError("BigNumber.toString does not accept parameters", L.errors.UNEXPECTED_ARGUMENT, {})), j(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(t) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(t) {
    if (t instanceof _V) return t;
    if (typeof t == "string") return t.match(/^-?0x[0-9a-f]+$/i) ? new _V(wi, vr(t)) : t.match(/^-?[0-9]+$/) ? new _V(wi, vr(new Rr(t))) : Ae.throwArgumentError("invalid BigNumber string", "value", t);
    if (typeof t == "number") return t % 1 && Wt("underflow", "BigNumber.from", t), (t >= Qn || t <= -Qn) && Wt("overflow", "BigNumber.from", t), _V.from(String(t));
    const r3 = t;
    if (typeof r3 == "bigint") return _V.from(r3.toString());
    if (ir(r3)) return _V.from(Kt(r3));
    if (r3) if (r3.toHexString) {
      const i4 = r3.toHexString();
      if (typeof i4 == "string") return _V.from(i4);
    } else {
      let i4 = r3._hex;
      if (i4 == null && r3.type === "BigNumber" && (i4 = r3.hex), typeof i4 == "string" && (Qt(i4) || i4[0] === "-" && Qt(i4.substring(1)))) return _V.from(i4);
    }
    return Ae.throwArgumentError("invalid BigNumber value", "value", t);
  }
  static isBigNumber(t) {
    return !!(t && t._isBigNumber);
  }
};
function vr(e2) {
  if (typeof e2 != "string") return vr(e2.toString(16));
  if (e2[0] === "-") return e2 = e2.substring(1), e2[0] === "-" && Ae.throwArgumentError("invalid hex", "value", e2), e2 = vr(e2), e2 === "0x00" ? e2 : "-" + e2;
  if (e2.substring(0, 2) !== "0x" && (e2 = "0x" + e2), e2 === "0x") return "0x00";
  for (e2.length % 2 && (e2 = "0x0" + e2.substring(2)); e2.length > 4 && e2.substring(0, 4) === "0x00"; ) e2 = "0x" + e2.substring(4);
  return e2;
}
function Lt(e2) {
  return V.from(vr(e2));
}
function j(e2) {
  const t = V.from(e2).toHexString();
  return t[0] === "-" ? new Rr("-" + t.substring(3), 16) : new Rr(t.substring(2), 16);
}
function Wt(e2, t, r3) {
  const i4 = { fault: e2, operation: t };
  return r3 != null && (i4.value = r3), Ae.throwError(e2, L.errors.NUMERIC_FAULT, i4);
}
function R0(e2) {
  return new Rr(e2, 36).toString(16);
}
var Ht = new L(jn);
var mr = {};
var Gn = V.from(0);
var Yn = V.from(-1);
function Vn(e2, t, r3, i4) {
  const n5 = { fault: t, operation: r3 };
  return i4 !== void 0 && (n5.value = i4), Ht.throwError(e2, L.errors.NUMERIC_FAULT, n5);
}
var gr = "0";
for (; gr.length < 256; ) gr += gr;
function xi(e2) {
  if (typeof e2 != "number") try {
    e2 = V.from(e2).toNumber();
  } catch {
  }
  return typeof e2 == "number" && e2 >= 0 && e2 <= 256 && !(e2 % 1) ? "1" + gr.substring(0, e2) : Ht.throwArgumentError("invalid decimal size", "decimals", e2);
}
function Mi(e2, t) {
  t == null && (t = 0);
  const r3 = xi(t);
  e2 = V.from(e2);
  const i4 = e2.lt(Gn);
  i4 && (e2 = e2.mul(Yn));
  let n5 = e2.mod(r3).toString();
  for (; n5.length < r3.length - 1; ) n5 = "0" + n5;
  n5 = n5.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const o5 = e2.div(r3).toString();
  return r3.length === 1 ? e2 = o5 : e2 = o5 + "." + n5, i4 && (e2 = "-" + e2), e2;
}
function be(e2, t) {
  t == null && (t = 0);
  const r3 = xi(t);
  (typeof e2 != "string" || !e2.match(/^-?[0-9.]+$/)) && Ht.throwArgumentError("invalid decimal value", "value", e2);
  const i4 = e2.substring(0, 1) === "-";
  i4 && (e2 = e2.substring(1)), e2 === "." && Ht.throwArgumentError("missing value", "value", e2);
  const n5 = e2.split(".");
  n5.length > 2 && Ht.throwArgumentError("too many decimal points", "value", e2);
  let o5 = n5[0], h5 = n5[1];
  for (o5 || (o5 = "0"), h5 || (h5 = "0"); h5[h5.length - 1] === "0"; ) h5 = h5.substring(0, h5.length - 1);
  for (h5.length > r3.length - 1 && Vn("fractional component exceeds decimals", "underflow", "parseFixed"), h5 === "" && (h5 = "0"); h5.length < r3.length - 1; ) h5 += "0";
  const p5 = V.from(o5), b5 = V.from(h5);
  let m5 = p5.mul(r3).add(b5);
  return i4 && (m5 = m5.mul(Yn)), m5;
}
var dr = class _dr {
  constructor(t, r3, i4, n5) {
    t !== mr && Ht.throwError("cannot use FixedFormat constructor; use FixedFormat.from", L.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.signed = r3, this.width = i4, this.decimals = n5, this.name = (r3 ? "" : "u") + "fixed" + String(i4) + "x" + String(n5), this._multiplier = xi(n5), Object.freeze(this);
  }
  static from(t) {
    if (t instanceof _dr) return t;
    typeof t == "number" && (t = `fixed128x${t}`);
    let r3 = true, i4 = 128, n5 = 18;
    if (typeof t == "string") {
      if (t !== "fixed") if (t === "ufixed") r3 = false;
      else {
        const o5 = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
        o5 || Ht.throwArgumentError("invalid fixed format", "format", t), r3 = o5[1] !== "u", i4 = parseInt(o5[2]), n5 = parseInt(o5[3]);
      }
    } else if (t) {
      const o5 = (h5, p5, b5) => t[h5] == null ? b5 : (typeof t[h5] !== p5 && Ht.throwArgumentError("invalid fixed format (" + h5 + " not " + p5 + ")", "format." + h5, t[h5]), t[h5]);
      r3 = o5("signed", "boolean", r3), i4 = o5("width", "number", i4), n5 = o5("decimals", "number", n5);
    }
    return i4 % 8 && Ht.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i4), n5 > 80 && Ht.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n5), new _dr(mr, r3, i4, n5);
  }
};
var Ut = class _Ut {
  constructor(t, r3, i4, n5) {
    t !== mr && Ht.throwError("cannot use FixedNumber constructor; use FixedNumber.from", L.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.format = n5, this._hex = r3, this._value = i4, this._isFixedNumber = true, Object.freeze(this);
  }
  _checkFormat(t) {
    this.format.name !== t.format.name && Ht.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t);
  }
  addUnsafe(t) {
    this._checkFormat(t);
    const r3 = be(this._value, this.format.decimals), i4 = be(t._value, t.format.decimals);
    return _Ut.fromValue(r3.add(i4), this.format.decimals, this.format);
  }
  subUnsafe(t) {
    this._checkFormat(t);
    const r3 = be(this._value, this.format.decimals), i4 = be(t._value, t.format.decimals);
    return _Ut.fromValue(r3.sub(i4), this.format.decimals, this.format);
  }
  mulUnsafe(t) {
    this._checkFormat(t);
    const r3 = be(this._value, this.format.decimals), i4 = be(t._value, t.format.decimals);
    return _Ut.fromValue(r3.mul(i4).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(t) {
    this._checkFormat(t);
    const r3 = be(this._value, this.format.decimals), i4 = be(t._value, t.format.decimals);
    return _Ut.fromValue(r3.mul(this.format._multiplier).div(i4), this.format.decimals, this.format);
  }
  floor() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r3 = _Ut.from(t[0], this.format);
    const i4 = !t[1].match(/^(0*)$/);
    return this.isNegative() && i4 && (r3 = r3.subUnsafe(Wn.toFormat(r3.format))), r3;
  }
  ceiling() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r3 = _Ut.from(t[0], this.format);
    const i4 = !t[1].match(/^(0*)$/);
    return !this.isNegative() && i4 && (r3 = r3.addUnsafe(Wn.toFormat(r3.format))), r3;
  }
  round(t) {
    t == null && (t = 0);
    const r3 = this.toString().split(".");
    if (r3.length === 1 && r3.push("0"), (t < 0 || t > 80 || t % 1) && Ht.throwArgumentError("invalid decimal count", "decimals", t), r3[1].length <= t) return this;
    const i4 = _Ut.from("1" + gr.substring(0, t), this.format), n5 = O0.toFormat(this.format);
    return this.mulUnsafe(i4).addUnsafe(n5).floor().divUnsafe(i4);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(t) {
    if (t == null) return this._hex;
    t % 8 && Ht.throwArgumentError("invalid byte width", "width", t);
    const r3 = V.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
    return oe(r3, t / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(t) {
    return _Ut.fromString(this._value, t);
  }
  static fromValue(t, r3, i4) {
    return i4 == null && r3 != null && !C0(r3) && (i4 = r3, r3 = null), r3 == null && (r3 = 0), i4 == null && (i4 = "fixed"), _Ut.fromString(Mi(t, r3), dr.from(i4));
  }
  static fromString(t, r3) {
    r3 == null && (r3 = "fixed");
    const i4 = dr.from(r3), n5 = be(t, i4.decimals);
    !i4.signed && n5.lt(Gn) && Vn("unsigned value cannot be negative", "overflow", "value", t);
    let o5 = null;
    i4.signed ? o5 = n5.toTwos(i4.width).toHexString() : (o5 = n5.toHexString(), o5 = oe(o5, i4.width / 8));
    const h5 = Mi(n5, i4.decimals);
    return new _Ut(mr, o5, h5, i4);
  }
  static fromBytes(t, r3) {
    r3 == null && (r3 = "fixed");
    const i4 = dr.from(r3);
    if (Ot(t).length > i4.width / 8) throw new Error("overflow");
    let n5 = V.from(t);
    i4.signed && (n5 = n5.fromTwos(i4.width));
    const o5 = n5.toTwos((i4.signed ? 0 : 1) + i4.width).toHexString(), h5 = Mi(n5, i4.decimals);
    return new _Ut(mr, o5, h5, i4);
  }
  static from(t, r3) {
    if (typeof t == "string") return _Ut.fromString(t, r3);
    if (ir(t)) return _Ut.fromBytes(t, r3);
    try {
      return _Ut.fromValue(t, 0, r3);
    } catch (i4) {
      if (i4.code !== L.errors.INVALID_ARGUMENT) throw i4;
    }
    return Ht.throwArgumentError("invalid FixedNumber value", "value", t);
  }
  static isFixedNumber(t) {
    return !!(t && t._isFixedNumber);
  }
};
var Wn = Ut.from(1);
var O0 = Ut.from("0.5");
var P0 = "strings/5.7.0";
var Xn = new L(P0);
var Or;
(function(e2) {
  e2.current = "", e2.NFC = "NFC", e2.NFD = "NFD", e2.NFKC = "NFKC", e2.NFKD = "NFKD";
})(Or || (Or = {}));
var nr;
(function(e2) {
  e2.UNEXPECTED_CONTINUE = "unexpected continuation byte", e2.BAD_PREFIX = "bad codepoint prefix", e2.OVERRUN = "string overrun", e2.MISSING_CONTINUE = "missing continuation byte", e2.OUT_OF_RANGE = "out of UTF-8 range", e2.UTF16_SURROGATE = "UTF-16 surrogate", e2.OVERLONG = "overlong representation";
})(nr || (nr = {}));
function D0(e2, t, r3, i4, n5) {
  return Xn.throwArgumentError(`invalid codepoint at offset ${t}; ${e2}`, "bytes", r3);
}
function Zn(e2, t, r3, i4, n5) {
  if (e2 === nr.BAD_PREFIX || e2 === nr.UNEXPECTED_CONTINUE) {
    let o5 = 0;
    for (let h5 = t + 1; h5 < r3.length && r3[h5] >> 6 === 2; h5++) o5++;
    return o5;
  }
  return e2 === nr.OVERRUN ? r3.length - t - 1 : 0;
}
function F0(e2, t, r3, i4, n5) {
  return e2 === nr.OVERLONG ? (i4.push(n5), 0) : (i4.push(65533), Zn(e2, t, r3));
}
Object.freeze({ error: D0, ignore: Zn, replace: F0 });
function Ei(e2, t = Or.current) {
  t != Or.current && (Xn.checkNormalize(), e2 = e2.normalize(t));
  let r3 = [];
  for (let i4 = 0; i4 < e2.length; i4++) {
    const n5 = e2.charCodeAt(i4);
    if (n5 < 128) r3.push(n5);
    else if (n5 < 2048) r3.push(n5 >> 6 | 192), r3.push(n5 & 63 | 128);
    else if ((n5 & 64512) == 55296) {
      i4++;
      const o5 = e2.charCodeAt(i4);
      if (i4 >= e2.length || (o5 & 64512) !== 56320) throw new Error("invalid utf-8 string");
      const h5 = 65536 + ((n5 & 1023) << 10) + (o5 & 1023);
      r3.push(h5 >> 18 | 240), r3.push(h5 >> 12 & 63 | 128), r3.push(h5 >> 6 & 63 | 128), r3.push(h5 & 63 | 128);
    } else r3.push(n5 >> 12 | 224), r3.push(n5 >> 6 & 63 | 128), r3.push(n5 & 63 | 128);
  }
  return Ot(r3);
}
function T0(e2) {
  if (e2.length % 4 !== 0) throw new Error("bad data");
  let t = [];
  for (let r3 = 0; r3 < e2.length; r3 += 4) t.push(parseInt(e2.substring(r3, r3 + 4), 16));
  return t;
}
function Si(e2, t) {
  t || (t = function(n5) {
    return [parseInt(n5, 16)];
  });
  let r3 = 0, i4 = {};
  return e2.split(",").forEach((n5) => {
    let o5 = n5.split(":");
    r3 += parseInt(o5[0], 16), i4[r3] = t(o5[1]);
  }), i4;
}
function $n(e2) {
  let t = 0;
  return e2.split(",").map((r3) => {
    let i4 = r3.split("-");
    i4.length === 1 ? i4[1] = "0" : i4[1] === "" && (i4[1] = "1");
    let n5 = t + parseInt(i4[0], 16);
    return t = parseInt(i4[1], 16), { l: n5, h: t };
  });
}
$n("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e2) => parseInt(e2, 16)), Si("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Si("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Si("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", T0), $n("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
var tf = "hash/5.7.0";
function U0(e2) {
  e2 = atob(e2);
  const t = [];
  for (let r3 = 0; r3 < e2.length; r3++) t.push(e2.charCodeAt(r3));
  return Ot(t);
}
function ef(e2, t) {
  t == null && (t = 1);
  const r3 = [], i4 = r3.forEach, n5 = function(o5, h5) {
    i4.call(o5, function(p5) {
      h5 > 0 && Array.isArray(p5) ? n5(p5, h5 - 1) : r3.push(p5);
    });
  };
  return n5(e2, t), r3;
}
function k0(e2) {
  const t = {};
  for (let r3 = 0; r3 < e2.length; r3++) {
    const i4 = e2[r3];
    t[i4[0]] = i4[1];
  }
  return t;
}
function q0(e2) {
  let t = 0;
  function r3() {
    return e2[t++] << 8 | e2[t++];
  }
  let i4 = r3(), n5 = 1, o5 = [0, 1];
  for (let H = 1; H < i4; H++) o5.push(n5 += r3());
  let h5 = r3(), p5 = t;
  t += h5;
  let b5 = 0, m5 = 0;
  function w5() {
    return b5 == 0 && (m5 = m5 << 8 | e2[t++], b5 = 8), m5 >> --b5 & 1;
  }
  const y7 = 31, S5 = Math.pow(2, y7), I3 = S5 >>> 1, N11 = I3 >> 1, C5 = S5 - 1;
  let F = 0;
  for (let H = 0; H < y7; H++) F = F << 1 | w5();
  let U4 = [], J2 = 0, Bt3 = S5;
  for (; ; ) {
    let H = Math.floor(((F - J2 + 1) * n5 - 1) / Bt3), z5 = 0, Pt2 = i4;
    for (; Pt2 - z5 > 1; ) {
      let Yt3 = z5 + Pt2 >>> 1;
      H < o5[Yt3] ? Pt2 = Yt3 : z5 = Yt3;
    }
    if (z5 == 0) break;
    U4.push(z5);
    let W2 = J2 + Math.floor(Bt3 * o5[z5] / n5), Rt2 = J2 + Math.floor(Bt3 * o5[z5 + 1] / n5) - 1;
    for (; !((W2 ^ Rt2) & I3); ) F = F << 1 & C5 | w5(), W2 = W2 << 1 & C5, Rt2 = Rt2 << 1 & C5 | 1;
    for (; W2 & ~Rt2 & N11; ) F = F & I3 | F << 1 & C5 >>> 1 | w5(), W2 = W2 << 1 ^ I3, Rt2 = (Rt2 ^ I3) << 1 | I3 | 1;
    J2 = W2, Bt3 = 1 + Rt2 - W2;
  }
  let G = i4 - 4;
  return U4.map((H) => {
    switch (H - G) {
      case 3:
        return G + 65792 + (e2[p5++] << 16 | e2[p5++] << 8 | e2[p5++]);
      case 2:
        return G + 256 + (e2[p5++] << 8 | e2[p5++]);
      case 1:
        return G + e2[p5++];
      default:
        return H - 1;
    }
  });
}
function K0(e2) {
  let t = 0;
  return () => e2[t++];
}
function H0(e2) {
  return K0(q0(e2));
}
function z0(e2) {
  return e2 & 1 ? ~e2 >> 1 : e2 >> 1;
}
function L0(e2, t) {
  let r3 = Array(e2);
  for (let i4 = 0; i4 < e2; i4++) r3[i4] = 1 + t();
  return r3;
}
function rf(e2, t) {
  let r3 = Array(e2);
  for (let i4 = 0, n5 = -1; i4 < e2; i4++) r3[i4] = n5 += 1 + t();
  return r3;
}
function j0(e2, t) {
  let r3 = Array(e2);
  for (let i4 = 0, n5 = 0; i4 < e2; i4++) r3[i4] = n5 += z0(t());
  return r3;
}
function Pr(e2, t) {
  let r3 = rf(e2(), e2), i4 = e2(), n5 = rf(i4, e2), o5 = L0(i4, e2);
  for (let h5 = 0; h5 < i4; h5++) for (let p5 = 0; p5 < o5[h5]; p5++) r3.push(n5[h5] + p5);
  return t ? r3.map((h5) => t[h5]) : r3;
}
function Q0(e2) {
  let t = [];
  for (; ; ) {
    let r3 = e2();
    if (r3 == 0) break;
    t.push(G0(r3, e2));
  }
  for (; ; ) {
    let r3 = e2() - 1;
    if (r3 < 0) break;
    t.push(Y0(r3, e2));
  }
  return k0(ef(t));
}
function J0(e2) {
  let t = [];
  for (; ; ) {
    let r3 = e2();
    if (r3 == 0) break;
    t.push(r3);
  }
  return t;
}
function nf(e2, t, r3) {
  let i4 = Array(e2).fill(void 0).map(() => []);
  for (let n5 = 0; n5 < t; n5++) j0(e2, r3).forEach((o5, h5) => i4[h5].push(o5));
  return i4;
}
function G0(e2, t) {
  let r3 = 1 + t(), i4 = t(), n5 = J0(t), o5 = nf(n5.length, 1 + e2, t);
  return ef(o5.map((h5, p5) => {
    const b5 = h5[0], m5 = h5.slice(1);
    return Array(n5[p5]).fill(void 0).map((w5, y7) => {
      let S5 = y7 * i4;
      return [b5 + y7 * r3, m5.map((I3) => I3 + S5)];
    });
  }));
}
function Y0(e2, t) {
  let r3 = 1 + t();
  return nf(r3, 1 + e2, t).map((n5) => [n5[0], n5.slice(1)]);
}
function V0(e2) {
  let t = Pr(e2).sort((i4, n5) => i4 - n5);
  return r3();
  function r3() {
    let i4 = [];
    for (; ; ) {
      let m5 = Pr(e2, t);
      if (m5.length == 0) break;
      i4.push({ set: new Set(m5), node: r3() });
    }
    i4.sort((m5, w5) => w5.set.size - m5.set.size);
    let n5 = e2(), o5 = n5 % 3;
    n5 = n5 / 3 | 0;
    let h5 = !!(n5 & 1);
    n5 >>= 1;
    let p5 = n5 == 1, b5 = n5 == 2;
    return { branches: i4, valid: o5, fe0f: h5, save: p5, check: b5 };
  }
}
function W0() {
  return H0(U0("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
var Dr = W0();
new Set(Pr(Dr)), new Set(Pr(Dr)), Q0(Dr), V0(Dr), new L(tf);
var X0 = new Uint8Array(32);
X0.fill(0);
var Z0 = `Ethereum Signed Message:
`;
function ff(e2) {
  return typeof e2 == "string" && (e2 = Ei(e2)), yi(E0([Ei(Z0), Ei(String(e2.length)), e2]));
}
var $0 = "rlp/5.7.0";
new L($0);
var ts = "address/5.7.0";
var Ar = new L(ts);
function of(e2) {
  Qt(e2, 20) || Ar.throwArgumentError("invalid address", "address", e2), e2 = e2.toLowerCase();
  const t = e2.substring(2).split(""), r3 = new Uint8Array(40);
  for (let n5 = 0; n5 < 40; n5++) r3[n5] = t[n5].charCodeAt(0);
  const i4 = Ot(yi(r3));
  for (let n5 = 0; n5 < 40; n5 += 2) i4[n5 >> 1] >> 4 >= 8 && (t[n5] = t[n5].toUpperCase()), (i4[n5 >> 1] & 15) >= 8 && (t[n5 + 1] = t[n5 + 1].toUpperCase());
  return "0x" + t.join("");
}
var es = 9007199254740991;
function rs(e2) {
  return Math.log10 ? Math.log10(e2) : Math.log(e2) / Math.LN10;
}
var Ni = {};
for (let e2 = 0; e2 < 10; e2++) Ni[String(e2)] = String(e2);
for (let e2 = 0; e2 < 26; e2++) Ni[String.fromCharCode(65 + e2)] = String(10 + e2);
var sf = Math.floor(rs(es));
function is(e2) {
  e2 = e2.toUpperCase(), e2 = e2.substring(4) + e2.substring(0, 2) + "00";
  let t = e2.split("").map((i4) => Ni[i4]).join("");
  for (; t.length >= sf; ) {
    let i4 = t.substring(0, sf);
    t = parseInt(i4, 10) % 97 + t.substring(i4.length);
  }
  let r3 = String(98 - parseInt(t, 10) % 97);
  for (; r3.length < 2; ) r3 = "0" + r3;
  return r3;
}
function ns(e2) {
  let t = null;
  if (typeof e2 != "string" && Ar.throwArgumentError("invalid address", "address", e2), e2.match(/^(0x)?[0-9a-fA-F]{40}$/)) e2.substring(0, 2) !== "0x" && (e2 = "0x" + e2), t = of(e2), e2.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e2 && Ar.throwArgumentError("bad address checksum", "address", e2);
  else if (e2.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (e2.substring(2, 4) !== is(e2) && Ar.throwArgumentError("bad icap checksum", "address", e2), t = R0(e2.substring(4)); t.length < 40; ) t = "0" + t;
    t = of("0x" + t);
  } else Ar.throwArgumentError("invalid address", "address", e2);
  return t;
}
var fs = "properties/5.7.0";
new L(fs);
function br(e2, t, r3) {
  Object.defineProperty(e2, t, { enumerable: true, value: r3, writable: false });
}
new L(tf);
var os = new Uint8Array(32);
os.fill(0), V.from(-1);
var ss = V.from(0);
var as = V.from(1);
V.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), oe(as.toHexString(), 32), oe(ss.toHexString(), 32);
var se = {};
var Q = {};
var yr = af;
function af(e2, t) {
  if (!e2) throw new Error(t || "Assertion failed");
}
af.equal = function(t, r3, i4) {
  if (t != r3) throw new Error(i4 || "Assertion failed: " + t + " != " + r3);
};
var Ii = { exports: {} };
typeof Object.create == "function" ? Ii.exports = function(t, r3) {
  r3 && (t.super_ = r3, t.prototype = Object.create(r3.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }));
} : Ii.exports = function(t, r3) {
  if (r3) {
    t.super_ = r3;
    var i4 = function() {
    };
    i4.prototype = r3.prototype, t.prototype = new i4(), t.prototype.constructor = t;
  }
};
var us = yr;
var hs = Ii.exports;
Q.inherits = hs;
function cs(e2, t) {
  return (e2.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= e2.length ? false : (e2.charCodeAt(t + 1) & 64512) === 56320;
}
function ls(e2, t) {
  if (Array.isArray(e2)) return e2.slice();
  if (!e2) return [];
  var r3 = [];
  if (typeof e2 == "string") if (t) {
    if (t === "hex") for (e2 = e2.replace(/[^a-z0-9]+/ig, ""), e2.length % 2 !== 0 && (e2 = "0" + e2), n5 = 0; n5 < e2.length; n5 += 2) r3.push(parseInt(e2[n5] + e2[n5 + 1], 16));
  } else for (var i4 = 0, n5 = 0; n5 < e2.length; n5++) {
    var o5 = e2.charCodeAt(n5);
    o5 < 128 ? r3[i4++] = o5 : o5 < 2048 ? (r3[i4++] = o5 >> 6 | 192, r3[i4++] = o5 & 63 | 128) : cs(e2, n5) ? (o5 = 65536 + ((o5 & 1023) << 10) + (e2.charCodeAt(++n5) & 1023), r3[i4++] = o5 >> 18 | 240, r3[i4++] = o5 >> 12 & 63 | 128, r3[i4++] = o5 >> 6 & 63 | 128, r3[i4++] = o5 & 63 | 128) : (r3[i4++] = o5 >> 12 | 224, r3[i4++] = o5 >> 6 & 63 | 128, r3[i4++] = o5 & 63 | 128);
  }
  else for (n5 = 0; n5 < e2.length; n5++) r3[n5] = e2[n5] | 0;
  return r3;
}
Q.toArray = ls;
function ds(e2) {
  for (var t = "", r3 = 0; r3 < e2.length; r3++) t += hf(e2[r3].toString(16));
  return t;
}
Q.toHex = ds;
function uf(e2) {
  var t = e2 >>> 24 | e2 >>> 8 & 65280 | e2 << 8 & 16711680 | (e2 & 255) << 24;
  return t >>> 0;
}
Q.htonl = uf;
function ps(e2, t) {
  for (var r3 = "", i4 = 0; i4 < e2.length; i4++) {
    var n5 = e2[i4];
    t === "little" && (n5 = uf(n5)), r3 += cf(n5.toString(16));
  }
  return r3;
}
Q.toHex32 = ps;
function hf(e2) {
  return e2.length === 1 ? "0" + e2 : e2;
}
Q.zero2 = hf;
function cf(e2) {
  return e2.length === 7 ? "0" + e2 : e2.length === 6 ? "00" + e2 : e2.length === 5 ? "000" + e2 : e2.length === 4 ? "0000" + e2 : e2.length === 3 ? "00000" + e2 : e2.length === 2 ? "000000" + e2 : e2.length === 1 ? "0000000" + e2 : e2;
}
Q.zero8 = cf;
function vs(e2, t, r3, i4) {
  var n5 = r3 - t;
  us(n5 % 4 === 0);
  for (var o5 = new Array(n5 / 4), h5 = 0, p5 = t; h5 < o5.length; h5++, p5 += 4) {
    var b5;
    i4 === "big" ? b5 = e2[p5] << 24 | e2[p5 + 1] << 16 | e2[p5 + 2] << 8 | e2[p5 + 3] : b5 = e2[p5 + 3] << 24 | e2[p5 + 2] << 16 | e2[p5 + 1] << 8 | e2[p5], o5[h5] = b5 >>> 0;
  }
  return o5;
}
Q.join32 = vs;
function ms(e2, t) {
  for (var r3 = new Array(e2.length * 4), i4 = 0, n5 = 0; i4 < e2.length; i4++, n5 += 4) {
    var o5 = e2[i4];
    t === "big" ? (r3[n5] = o5 >>> 24, r3[n5 + 1] = o5 >>> 16 & 255, r3[n5 + 2] = o5 >>> 8 & 255, r3[n5 + 3] = o5 & 255) : (r3[n5 + 3] = o5 >>> 24, r3[n5 + 2] = o5 >>> 16 & 255, r3[n5 + 1] = o5 >>> 8 & 255, r3[n5] = o5 & 255);
  }
  return r3;
}
Q.split32 = ms;
function gs(e2, t) {
  return e2 >>> t | e2 << 32 - t;
}
Q.rotr32 = gs;
function As(e2, t) {
  return e2 << t | e2 >>> 32 - t;
}
Q.rotl32 = As;
function bs(e2, t) {
  return e2 + t >>> 0;
}
Q.sum32 = bs;
function ys(e2, t, r3) {
  return e2 + t + r3 >>> 0;
}
Q.sum32_3 = ys;
function ws(e2, t, r3, i4) {
  return e2 + t + r3 + i4 >>> 0;
}
Q.sum32_4 = ws;
function xs(e2, t, r3, i4, n5) {
  return e2 + t + r3 + i4 + n5 >>> 0;
}
Q.sum32_5 = xs;
function Ms(e2, t, r3, i4) {
  var n5 = e2[t], o5 = e2[t + 1], h5 = i4 + o5 >>> 0, p5 = (h5 < i4 ? 1 : 0) + r3 + n5;
  e2[t] = p5 >>> 0, e2[t + 1] = h5;
}
Q.sum64 = Ms;
function Es(e2, t, r3, i4) {
  var n5 = t + i4 >>> 0, o5 = (n5 < t ? 1 : 0) + e2 + r3;
  return o5 >>> 0;
}
Q.sum64_hi = Es;
function Ss(e2, t, r3, i4) {
  var n5 = t + i4;
  return n5 >>> 0;
}
Q.sum64_lo = Ss;
function Ns(e2, t, r3, i4, n5, o5, h5, p5) {
  var b5 = 0, m5 = t;
  m5 = m5 + i4 >>> 0, b5 += m5 < t ? 1 : 0, m5 = m5 + o5 >>> 0, b5 += m5 < o5 ? 1 : 0, m5 = m5 + p5 >>> 0, b5 += m5 < p5 ? 1 : 0;
  var w5 = e2 + r3 + n5 + h5 + b5;
  return w5 >>> 0;
}
Q.sum64_4_hi = Ns;
function Is(e2, t, r3, i4, n5, o5, h5, p5) {
  var b5 = t + i4 + o5 + p5;
  return b5 >>> 0;
}
Q.sum64_4_lo = Is;
function _s(e2, t, r3, i4, n5, o5, h5, p5, b5, m5) {
  var w5 = 0, y7 = t;
  y7 = y7 + i4 >>> 0, w5 += y7 < t ? 1 : 0, y7 = y7 + o5 >>> 0, w5 += y7 < o5 ? 1 : 0, y7 = y7 + p5 >>> 0, w5 += y7 < p5 ? 1 : 0, y7 = y7 + m5 >>> 0, w5 += y7 < m5 ? 1 : 0;
  var S5 = e2 + r3 + n5 + h5 + b5 + w5;
  return S5 >>> 0;
}
Q.sum64_5_hi = _s;
function Bs(e2, t, r3, i4, n5, o5, h5, p5, b5, m5) {
  var w5 = t + i4 + o5 + p5 + m5;
  return w5 >>> 0;
}
Q.sum64_5_lo = Bs;
function Cs(e2, t, r3) {
  var i4 = t << 32 - r3 | e2 >>> r3;
  return i4 >>> 0;
}
Q.rotr64_hi = Cs;
function Rs(e2, t, r3) {
  var i4 = e2 << 32 - r3 | t >>> r3;
  return i4 >>> 0;
}
Q.rotr64_lo = Rs;
function Os(e2, t, r3) {
  return e2 >>> r3;
}
Q.shr64_hi = Os;
function Ps(e2, t, r3) {
  var i4 = e2 << 32 - r3 | t >>> r3;
  return i4 >>> 0;
}
Q.shr64_lo = Ps;
var fr = {};
var lf = Q;
var Ds = yr;
function Fr() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
fr.BlockHash = Fr, Fr.prototype.update = function(t, r3) {
  if (t = lf.toArray(t, r3), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
    t = this.pending;
    var i4 = t.length % this._delta8;
    this.pending = t.slice(t.length - i4, t.length), this.pending.length === 0 && (this.pending = null), t = lf.join32(t, 0, t.length - i4, this.endian);
    for (var n5 = 0; n5 < t.length; n5 += this._delta32) this._update(t, n5, n5 + this._delta32);
  }
  return this;
}, Fr.prototype.digest = function(t) {
  return this.update(this._pad()), Ds(this.pending === null), this._digest(t);
}, Fr.prototype._pad = function() {
  var t = this.pendingTotal, r3 = this._delta8, i4 = r3 - (t + this.padLength) % r3, n5 = new Array(i4 + this.padLength);
  n5[0] = 128;
  for (var o5 = 1; o5 < i4; o5++) n5[o5] = 0;
  if (t <<= 3, this.endian === "big") {
    for (var h5 = 8; h5 < this.padLength; h5++) n5[o5++] = 0;
    n5[o5++] = 0, n5[o5++] = 0, n5[o5++] = 0, n5[o5++] = 0, n5[o5++] = t >>> 24 & 255, n5[o5++] = t >>> 16 & 255, n5[o5++] = t >>> 8 & 255, n5[o5++] = t & 255;
  } else for (n5[o5++] = t & 255, n5[o5++] = t >>> 8 & 255, n5[o5++] = t >>> 16 & 255, n5[o5++] = t >>> 24 & 255, n5[o5++] = 0, n5[o5++] = 0, n5[o5++] = 0, n5[o5++] = 0, h5 = 8; h5 < this.padLength; h5++) n5[o5++] = 0;
  return n5;
};
var or2 = {};
var ae = {};
var Fs = Q;
var ue = Fs.rotr32;
function Ts(e2, t, r3, i4) {
  if (e2 === 0) return df(t, r3, i4);
  if (e2 === 1 || e2 === 3) return vf(t, r3, i4);
  if (e2 === 2) return pf(t, r3, i4);
}
ae.ft_1 = Ts;
function df(e2, t, r3) {
  return e2 & t ^ ~e2 & r3;
}
ae.ch32 = df;
function pf(e2, t, r3) {
  return e2 & t ^ e2 & r3 ^ t & r3;
}
ae.maj32 = pf;
function vf(e2, t, r3) {
  return e2 ^ t ^ r3;
}
ae.p32 = vf;
function Us(e2) {
  return ue(e2, 2) ^ ue(e2, 13) ^ ue(e2, 22);
}
ae.s0_256 = Us;
function ks(e2) {
  return ue(e2, 6) ^ ue(e2, 11) ^ ue(e2, 25);
}
ae.s1_256 = ks;
function qs(e2) {
  return ue(e2, 7) ^ ue(e2, 18) ^ e2 >>> 3;
}
ae.g0_256 = qs;
function Ks(e2) {
  return ue(e2, 17) ^ ue(e2, 19) ^ e2 >>> 10;
}
ae.g1_256 = Ks;
var sr = Q;
var Hs = fr;
var zs = ae;
var _i = sr.rotl32;
var wr = sr.sum32;
var Ls = sr.sum32_5;
var js = zs.ft_1;
var mf = Hs.BlockHash;
var Qs = [1518500249, 1859775393, 2400959708, 3395469782];
function he() {
  if (!(this instanceof he)) return new he();
  mf.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
}
sr.inherits(he, mf);
var Js = he;
he.blockSize = 512, he.outSize = 160, he.hmacStrength = 80, he.padLength = 64, he.prototype._update = function(t, r3) {
  for (var i4 = this.W, n5 = 0; n5 < 16; n5++) i4[n5] = t[r3 + n5];
  for (; n5 < i4.length; n5++) i4[n5] = _i(i4[n5 - 3] ^ i4[n5 - 8] ^ i4[n5 - 14] ^ i4[n5 - 16], 1);
  var o5 = this.h[0], h5 = this.h[1], p5 = this.h[2], b5 = this.h[3], m5 = this.h[4];
  for (n5 = 0; n5 < i4.length; n5++) {
    var w5 = ~~(n5 / 20), y7 = Ls(_i(o5, 5), js(w5, h5, p5, b5), m5, i4[n5], Qs[w5]);
    m5 = b5, b5 = p5, p5 = _i(h5, 30), h5 = o5, o5 = y7;
  }
  this.h[0] = wr(this.h[0], o5), this.h[1] = wr(this.h[1], h5), this.h[2] = wr(this.h[2], p5), this.h[3] = wr(this.h[3], b5), this.h[4] = wr(this.h[4], m5);
}, he.prototype._digest = function(t) {
  return t === "hex" ? sr.toHex32(this.h, "big") : sr.split32(this.h, "big");
};
var ar = Q;
var Gs = fr;
var ur = ae;
var Ys = yr;
var ie = ar.sum32;
var Vs = ar.sum32_4;
var Ws = ar.sum32_5;
var Xs = ur.ch32;
var Zs = ur.maj32;
var $s = ur.s0_256;
var ta = ur.s1_256;
var ea = ur.g0_256;
var ra = ur.g1_256;
var gf = Gs.BlockHash;
var ia = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function ce() {
  if (!(this instanceof ce)) return new ce();
  gf.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = ia, this.W = new Array(64);
}
ar.inherits(ce, gf);
var Af = ce;
ce.blockSize = 512, ce.outSize = 256, ce.hmacStrength = 192, ce.padLength = 64, ce.prototype._update = function(t, r3) {
  for (var i4 = this.W, n5 = 0; n5 < 16; n5++) i4[n5] = t[r3 + n5];
  for (; n5 < i4.length; n5++) i4[n5] = Vs(ra(i4[n5 - 2]), i4[n5 - 7], ea(i4[n5 - 15]), i4[n5 - 16]);
  var o5 = this.h[0], h5 = this.h[1], p5 = this.h[2], b5 = this.h[3], m5 = this.h[4], w5 = this.h[5], y7 = this.h[6], S5 = this.h[7];
  for (Ys(this.k.length === i4.length), n5 = 0; n5 < i4.length; n5++) {
    var I3 = Ws(S5, ta(m5), Xs(m5, w5, y7), this.k[n5], i4[n5]), N11 = ie($s(o5), Zs(o5, h5, p5));
    S5 = y7, y7 = w5, w5 = m5, m5 = ie(b5, I3), b5 = p5, p5 = h5, h5 = o5, o5 = ie(I3, N11);
  }
  this.h[0] = ie(this.h[0], o5), this.h[1] = ie(this.h[1], h5), this.h[2] = ie(this.h[2], p5), this.h[3] = ie(this.h[3], b5), this.h[4] = ie(this.h[4], m5), this.h[5] = ie(this.h[5], w5), this.h[6] = ie(this.h[6], y7), this.h[7] = ie(this.h[7], S5);
}, ce.prototype._digest = function(t) {
  return t === "hex" ? ar.toHex32(this.h, "big") : ar.split32(this.h, "big");
};
var Bi = Q;
var bf = Af;
function ye() {
  if (!(this instanceof ye)) return new ye();
  bf.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
}
Bi.inherits(ye, bf);
var na = ye;
ye.blockSize = 512, ye.outSize = 224, ye.hmacStrength = 192, ye.padLength = 64, ye.prototype._digest = function(t) {
  return t === "hex" ? Bi.toHex32(this.h.slice(0, 7), "big") : Bi.split32(this.h.slice(0, 7), "big");
};
var jt = Q;
var fa = fr;
var oa = yr;
var le = jt.rotr64_hi;
var de = jt.rotr64_lo;
var yf = jt.shr64_hi;
var wf = jt.shr64_lo;
var Be = jt.sum64;
var Ci = jt.sum64_hi;
var Ri = jt.sum64_lo;
var sa = jt.sum64_4_hi;
var aa = jt.sum64_4_lo;
var ua = jt.sum64_5_hi;
var ha = jt.sum64_5_lo;
var xf = fa.BlockHash;
var ca = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
function ne() {
  if (!(this instanceof ne)) return new ne();
  xf.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = ca, this.W = new Array(160);
}
jt.inherits(ne, xf);
var Mf = ne;
ne.blockSize = 1024, ne.outSize = 512, ne.hmacStrength = 192, ne.padLength = 128, ne.prototype._prepareBlock = function(t, r3) {
  for (var i4 = this.W, n5 = 0; n5 < 32; n5++) i4[n5] = t[r3 + n5];
  for (; n5 < i4.length; n5 += 2) {
    var o5 = xa(i4[n5 - 4], i4[n5 - 3]), h5 = Ma(i4[n5 - 4], i4[n5 - 3]), p5 = i4[n5 - 14], b5 = i4[n5 - 13], m5 = ya(i4[n5 - 30], i4[n5 - 29]), w5 = wa(i4[n5 - 30], i4[n5 - 29]), y7 = i4[n5 - 32], S5 = i4[n5 - 31];
    i4[n5] = sa(o5, h5, p5, b5, m5, w5, y7, S5), i4[n5 + 1] = aa(o5, h5, p5, b5, m5, w5, y7, S5);
  }
}, ne.prototype._update = function(t, r3) {
  this._prepareBlock(t, r3);
  var i4 = this.W, n5 = this.h[0], o5 = this.h[1], h5 = this.h[2], p5 = this.h[3], b5 = this.h[4], m5 = this.h[5], w5 = this.h[6], y7 = this.h[7], S5 = this.h[8], I3 = this.h[9], N11 = this.h[10], C5 = this.h[11], F = this.h[12], U4 = this.h[13], J2 = this.h[14], Bt3 = this.h[15];
  oa(this.k.length === i4.length);
  for (var G = 0; G < i4.length; G += 2) {
    var H = J2, z5 = Bt3, Pt2 = Aa(S5, I3), W2 = ba(S5, I3), Rt2 = la(S5, I3, N11, C5, F), Yt3 = da(S5, I3, N11, C5, F, U4), Y = this.k[G], Vt3 = this.k[G + 1], A3 = i4[G], f5 = i4[G + 1], a4 = ua(H, z5, Pt2, W2, Rt2, Yt3, Y, Vt3, A3, f5), c6 = ha(H, z5, Pt2, W2, Rt2, Yt3, Y, Vt3, A3, f5);
    H = ma(n5, o5), z5 = ga(n5, o5), Pt2 = pa(n5, o5, h5, p5, b5), W2 = va(n5, o5, h5, p5, b5, m5);
    var d4 = Ci(H, z5, Pt2, W2), g5 = Ri(H, z5, Pt2, W2);
    J2 = F, Bt3 = U4, F = N11, U4 = C5, N11 = S5, C5 = I3, S5 = Ci(w5, y7, a4, c6), I3 = Ri(y7, y7, a4, c6), w5 = b5, y7 = m5, b5 = h5, m5 = p5, h5 = n5, p5 = o5, n5 = Ci(a4, c6, d4, g5), o5 = Ri(a4, c6, d4, g5);
  }
  Be(this.h, 0, n5, o5), Be(this.h, 2, h5, p5), Be(this.h, 4, b5, m5), Be(this.h, 6, w5, y7), Be(this.h, 8, S5, I3), Be(this.h, 10, N11, C5), Be(this.h, 12, F, U4), Be(this.h, 14, J2, Bt3);
}, ne.prototype._digest = function(t) {
  return t === "hex" ? jt.toHex32(this.h, "big") : jt.split32(this.h, "big");
};
function la(e2, t, r3, i4, n5) {
  var o5 = e2 & r3 ^ ~e2 & n5;
  return o5 < 0 && (o5 += 4294967296), o5;
}
function da(e2, t, r3, i4, n5, o5) {
  var h5 = t & i4 ^ ~t & o5;
  return h5 < 0 && (h5 += 4294967296), h5;
}
function pa(e2, t, r3, i4, n5) {
  var o5 = e2 & r3 ^ e2 & n5 ^ r3 & n5;
  return o5 < 0 && (o5 += 4294967296), o5;
}
function va(e2, t, r3, i4, n5, o5) {
  var h5 = t & i4 ^ t & o5 ^ i4 & o5;
  return h5 < 0 && (h5 += 4294967296), h5;
}
function ma(e2, t) {
  var r3 = le(e2, t, 28), i4 = le(t, e2, 2), n5 = le(t, e2, 7), o5 = r3 ^ i4 ^ n5;
  return o5 < 0 && (o5 += 4294967296), o5;
}
function ga(e2, t) {
  var r3 = de(e2, t, 28), i4 = de(t, e2, 2), n5 = de(t, e2, 7), o5 = r3 ^ i4 ^ n5;
  return o5 < 0 && (o5 += 4294967296), o5;
}
function Aa(e2, t) {
  var r3 = le(e2, t, 14), i4 = le(e2, t, 18), n5 = le(t, e2, 9), o5 = r3 ^ i4 ^ n5;
  return o5 < 0 && (o5 += 4294967296), o5;
}
function ba(e2, t) {
  var r3 = de(e2, t, 14), i4 = de(e2, t, 18), n5 = de(t, e2, 9), o5 = r3 ^ i4 ^ n5;
  return o5 < 0 && (o5 += 4294967296), o5;
}
function ya(e2, t) {
  var r3 = le(e2, t, 1), i4 = le(e2, t, 8), n5 = yf(e2, t, 7), o5 = r3 ^ i4 ^ n5;
  return o5 < 0 && (o5 += 4294967296), o5;
}
function wa(e2, t) {
  var r3 = de(e2, t, 1), i4 = de(e2, t, 8), n5 = wf(e2, t, 7), o5 = r3 ^ i4 ^ n5;
  return o5 < 0 && (o5 += 4294967296), o5;
}
function xa(e2, t) {
  var r3 = le(e2, t, 19), i4 = le(t, e2, 29), n5 = yf(e2, t, 6), o5 = r3 ^ i4 ^ n5;
  return o5 < 0 && (o5 += 4294967296), o5;
}
function Ma(e2, t) {
  var r3 = de(e2, t, 19), i4 = de(t, e2, 29), n5 = wf(e2, t, 6), o5 = r3 ^ i4 ^ n5;
  return o5 < 0 && (o5 += 4294967296), o5;
}
var Oi = Q;
var Ef = Mf;
function we() {
  if (!(this instanceof we)) return new we();
  Ef.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
}
Oi.inherits(we, Ef);
var Ea = we;
we.blockSize = 1024, we.outSize = 384, we.hmacStrength = 192, we.padLength = 128, we.prototype._digest = function(t) {
  return t === "hex" ? Oi.toHex32(this.h.slice(0, 12), "big") : Oi.split32(this.h.slice(0, 12), "big");
}, or2.sha1 = Js, or2.sha224 = na, or2.sha256 = Af, or2.sha384 = Ea, or2.sha512 = Mf;
var Sf = {};
var Xe = Q;
var Sa = fr;
var Tr = Xe.rotl32;
var Nf = Xe.sum32;
var xr = Xe.sum32_3;
var If = Xe.sum32_4;
var _f = Sa.BlockHash;
function pe() {
  if (!(this instanceof pe)) return new pe();
  _f.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
Xe.inherits(pe, _f), Sf.ripemd160 = pe, pe.blockSize = 512, pe.outSize = 160, pe.hmacStrength = 192, pe.padLength = 64, pe.prototype._update = function(t, r3) {
  for (var i4 = this.h[0], n5 = this.h[1], o5 = this.h[2], h5 = this.h[3], p5 = this.h[4], b5 = i4, m5 = n5, w5 = o5, y7 = h5, S5 = p5, I3 = 0; I3 < 80; I3++) {
    var N11 = Nf(Tr(If(i4, Bf(I3, n5, o5, h5), t[_a[I3] + r3], Na(I3)), Ca[I3]), p5);
    i4 = p5, p5 = h5, h5 = Tr(o5, 10), o5 = n5, n5 = N11, N11 = Nf(Tr(If(b5, Bf(79 - I3, m5, w5, y7), t[Ba[I3] + r3], Ia(I3)), Ra[I3]), S5), b5 = S5, S5 = y7, y7 = Tr(w5, 10), w5 = m5, m5 = N11;
  }
  N11 = xr(this.h[1], o5, y7), this.h[1] = xr(this.h[2], h5, S5), this.h[2] = xr(this.h[3], p5, b5), this.h[3] = xr(this.h[4], i4, m5), this.h[4] = xr(this.h[0], n5, w5), this.h[0] = N11;
}, pe.prototype._digest = function(t) {
  return t === "hex" ? Xe.toHex32(this.h, "little") : Xe.split32(this.h, "little");
};
function Bf(e2, t, r3, i4) {
  return e2 <= 15 ? t ^ r3 ^ i4 : e2 <= 31 ? t & r3 | ~t & i4 : e2 <= 47 ? (t | ~r3) ^ i4 : e2 <= 63 ? t & i4 | r3 & ~i4 : t ^ (r3 | ~i4);
}
function Na(e2) {
  return e2 <= 15 ? 0 : e2 <= 31 ? 1518500249 : e2 <= 47 ? 1859775393 : e2 <= 63 ? 2400959708 : 2840853838;
}
function Ia(e2) {
  return e2 <= 15 ? 1352829926 : e2 <= 31 ? 1548603684 : e2 <= 47 ? 1836072691 : e2 <= 63 ? 2053994217 : 0;
}
var _a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
var Ba = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
var Ca = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
var Ra = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
var Oa = Q;
var Pa = yr;
function hr(e2, t, r3) {
  if (!(this instanceof hr)) return new hr(e2, t, r3);
  this.Hash = e2, this.blockSize = e2.blockSize / 8, this.outSize = e2.outSize / 8, this.inner = null, this.outer = null, this._init(Oa.toArray(t, r3));
}
var Da = hr;
hr.prototype._init = function(t) {
  t.length > this.blockSize && (t = new this.Hash().update(t).digest()), Pa(t.length <= this.blockSize);
  for (var r3 = t.length; r3 < this.blockSize; r3++) t.push(0);
  for (r3 = 0; r3 < t.length; r3++) t[r3] ^= 54;
  for (this.inner = new this.Hash().update(t), r3 = 0; r3 < t.length; r3++) t[r3] ^= 106;
  this.outer = new this.Hash().update(t);
}, hr.prototype.update = function(t, r3) {
  return this.inner.update(t, r3), this;
}, hr.prototype.digest = function(t) {
  return this.outer.update(this.inner.digest()), this.outer.digest(t);
}, function(e2) {
  var t = e2;
  t.utils = Q, t.common = fr, t.sha = or2, t.ripemd = Sf, t.hmac = Da, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160;
}(se);
function cr(e2, t, r3) {
  return r3 = { path: t, exports: {}, require: function(i4, n5) {
    return Fa(i4, n5 ?? r3.path);
  } }, e2(r3, r3.exports), r3.exports;
}
function Fa() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var Pi = Cf;
function Cf(e2, t) {
  if (!e2) throw new Error(t || "Assertion failed");
}
Cf.equal = function(t, r3, i4) {
  if (t != r3) throw new Error(i4 || "Assertion failed: " + t + " != " + r3);
};
var fe = cr(function(e2, t) {
  var r3 = t;
  function i4(h5, p5) {
    if (Array.isArray(h5)) return h5.slice();
    if (!h5) return [];
    var b5 = [];
    if (typeof h5 != "string") {
      for (var m5 = 0; m5 < h5.length; m5++) b5[m5] = h5[m5] | 0;
      return b5;
    }
    if (p5 === "hex") {
      h5 = h5.replace(/[^a-z0-9]+/ig, ""), h5.length % 2 !== 0 && (h5 = "0" + h5);
      for (var m5 = 0; m5 < h5.length; m5 += 2) b5.push(parseInt(h5[m5] + h5[m5 + 1], 16));
    } else for (var m5 = 0; m5 < h5.length; m5++) {
      var w5 = h5.charCodeAt(m5), y7 = w5 >> 8, S5 = w5 & 255;
      y7 ? b5.push(y7, S5) : b5.push(S5);
    }
    return b5;
  }
  r3.toArray = i4;
  function n5(h5) {
    return h5.length === 1 ? "0" + h5 : h5;
  }
  r3.zero2 = n5;
  function o5(h5) {
    for (var p5 = "", b5 = 0; b5 < h5.length; b5++) p5 += n5(h5[b5].toString(16));
    return p5;
  }
  r3.toHex = o5, r3.encode = function(p5, b5) {
    return b5 === "hex" ? o5(p5) : p5;
  };
});
var Jt = cr(function(e2, t) {
  var r3 = t;
  r3.assert = Pi, r3.toArray = fe.toArray, r3.zero2 = fe.zero2, r3.toHex = fe.toHex, r3.encode = fe.encode;
  function i4(b5, m5, w5) {
    var y7 = new Array(Math.max(b5.bitLength(), w5) + 1);
    y7.fill(0);
    for (var S5 = 1 << m5 + 1, I3 = b5.clone(), N11 = 0; N11 < y7.length; N11++) {
      var C5, F = I3.andln(S5 - 1);
      I3.isOdd() ? (F > (S5 >> 1) - 1 ? C5 = (S5 >> 1) - F : C5 = F, I3.isubn(C5)) : C5 = 0, y7[N11] = C5, I3.iushrn(1);
    }
    return y7;
  }
  r3.getNAF = i4;
  function n5(b5, m5) {
    var w5 = [[], []];
    b5 = b5.clone(), m5 = m5.clone();
    for (var y7 = 0, S5 = 0, I3; b5.cmpn(-y7) > 0 || m5.cmpn(-S5) > 0; ) {
      var N11 = b5.andln(3) + y7 & 3, C5 = m5.andln(3) + S5 & 3;
      N11 === 3 && (N11 = -1), C5 === 3 && (C5 = -1);
      var F;
      N11 & 1 ? (I3 = b5.andln(7) + y7 & 7, (I3 === 3 || I3 === 5) && C5 === 2 ? F = -N11 : F = N11) : F = 0, w5[0].push(F);
      var U4;
      C5 & 1 ? (I3 = m5.andln(7) + S5 & 7, (I3 === 3 || I3 === 5) && N11 === 2 ? U4 = -C5 : U4 = C5) : U4 = 0, w5[1].push(U4), 2 * y7 === F + 1 && (y7 = 1 - y7), 2 * S5 === U4 + 1 && (S5 = 1 - S5), b5.iushrn(1), m5.iushrn(1);
    }
    return w5;
  }
  r3.getJSF = n5;
  function o5(b5, m5, w5) {
    var y7 = "_" + m5;
    b5.prototype[m5] = function() {
      return this[y7] !== void 0 ? this[y7] : this[y7] = w5.call(this);
    };
  }
  r3.cachedProperty = o5;
  function h5(b5) {
    return typeof b5 == "string" ? r3.toArray(b5, "hex") : b5;
  }
  r3.parseBytes = h5;
  function p5(b5) {
    return new K(b5, "hex", "le");
  }
  r3.intFromLE = p5;
});
var Ur = Jt.getNAF;
var Ta = Jt.getJSF;
var kr = Jt.assert;
function Ce(e2, t) {
  this.type = e2, this.p = new K(t.p, 16), this.red = t.prime ? K.red(t.prime) : K.mont(this.p), this.zero = new K(0).toRed(this.red), this.one = new K(1).toRed(this.red), this.two = new K(2).toRed(this.red), this.n = t.n && new K(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r3 = this.n && this.p.div(this.n);
  !r3 || r3.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = true, this.redN = this.n.toRed(this.red));
}
var Ze = Ce;
Ce.prototype.point = function() {
  throw new Error("Not implemented");
}, Ce.prototype.validate = function() {
  throw new Error("Not implemented");
}, Ce.prototype._fixedNafMul = function(t, r3) {
  kr(t.precomputed);
  var i4 = t._getDoubles(), n5 = Ur(r3, 1, this._bitLength), o5 = (1 << i4.step + 1) - (i4.step % 2 === 0 ? 2 : 1);
  o5 /= 3;
  var h5 = [], p5, b5;
  for (p5 = 0; p5 < n5.length; p5 += i4.step) {
    b5 = 0;
    for (var m5 = p5 + i4.step - 1; m5 >= p5; m5--) b5 = (b5 << 1) + n5[m5];
    h5.push(b5);
  }
  for (var w5 = this.jpoint(null, null, null), y7 = this.jpoint(null, null, null), S5 = o5; S5 > 0; S5--) {
    for (p5 = 0; p5 < h5.length; p5++) b5 = h5[p5], b5 === S5 ? y7 = y7.mixedAdd(i4.points[p5]) : b5 === -S5 && (y7 = y7.mixedAdd(i4.points[p5].neg()));
    w5 = w5.add(y7);
  }
  return w5.toP();
}, Ce.prototype._wnafMul = function(t, r3) {
  var i4 = 4, n5 = t._getNAFPoints(i4);
  i4 = n5.wnd;
  for (var o5 = n5.points, h5 = Ur(r3, i4, this._bitLength), p5 = this.jpoint(null, null, null), b5 = h5.length - 1; b5 >= 0; b5--) {
    for (var m5 = 0; b5 >= 0 && h5[b5] === 0; b5--) m5++;
    if (b5 >= 0 && m5++, p5 = p5.dblp(m5), b5 < 0) break;
    var w5 = h5[b5];
    kr(w5 !== 0), t.type === "affine" ? w5 > 0 ? p5 = p5.mixedAdd(o5[w5 - 1 >> 1]) : p5 = p5.mixedAdd(o5[-w5 - 1 >> 1].neg()) : w5 > 0 ? p5 = p5.add(o5[w5 - 1 >> 1]) : p5 = p5.add(o5[-w5 - 1 >> 1].neg());
  }
  return t.type === "affine" ? p5.toP() : p5;
}, Ce.prototype._wnafMulAdd = function(t, r3, i4, n5, o5) {
  var h5 = this._wnafT1, p5 = this._wnafT2, b5 = this._wnafT3, m5 = 0, w5, y7, S5;
  for (w5 = 0; w5 < n5; w5++) {
    S5 = r3[w5];
    var I3 = S5._getNAFPoints(t);
    h5[w5] = I3.wnd, p5[w5] = I3.points;
  }
  for (w5 = n5 - 1; w5 >= 1; w5 -= 2) {
    var N11 = w5 - 1, C5 = w5;
    if (h5[N11] !== 1 || h5[C5] !== 1) {
      b5[N11] = Ur(i4[N11], h5[N11], this._bitLength), b5[C5] = Ur(i4[C5], h5[C5], this._bitLength), m5 = Math.max(b5[N11].length, m5), m5 = Math.max(b5[C5].length, m5);
      continue;
    }
    var F = [r3[N11], null, null, r3[C5]];
    r3[N11].y.cmp(r3[C5].y) === 0 ? (F[1] = r3[N11].add(r3[C5]), F[2] = r3[N11].toJ().mixedAdd(r3[C5].neg())) : r3[N11].y.cmp(r3[C5].y.redNeg()) === 0 ? (F[1] = r3[N11].toJ().mixedAdd(r3[C5]), F[2] = r3[N11].add(r3[C5].neg())) : (F[1] = r3[N11].toJ().mixedAdd(r3[C5]), F[2] = r3[N11].toJ().mixedAdd(r3[C5].neg()));
    var U4 = [-3, -1, -5, -7, 0, 7, 5, 1, 3], J2 = Ta(i4[N11], i4[C5]);
    for (m5 = Math.max(J2[0].length, m5), b5[N11] = new Array(m5), b5[C5] = new Array(m5), y7 = 0; y7 < m5; y7++) {
      var Bt3 = J2[0][y7] | 0, G = J2[1][y7] | 0;
      b5[N11][y7] = U4[(Bt3 + 1) * 3 + (G + 1)], b5[C5][y7] = 0, p5[N11] = F;
    }
  }
  var H = this.jpoint(null, null, null), z5 = this._wnafT4;
  for (w5 = m5; w5 >= 0; w5--) {
    for (var Pt2 = 0; w5 >= 0; ) {
      var W2 = true;
      for (y7 = 0; y7 < n5; y7++) z5[y7] = b5[y7][w5] | 0, z5[y7] !== 0 && (W2 = false);
      if (!W2) break;
      Pt2++, w5--;
    }
    if (w5 >= 0 && Pt2++, H = H.dblp(Pt2), w5 < 0) break;
    for (y7 = 0; y7 < n5; y7++) {
      var Rt2 = z5[y7];
      Rt2 !== 0 && (Rt2 > 0 ? S5 = p5[y7][Rt2 - 1 >> 1] : Rt2 < 0 && (S5 = p5[y7][-Rt2 - 1 >> 1].neg()), S5.type === "affine" ? H = H.mixedAdd(S5) : H = H.add(S5));
    }
  }
  for (w5 = 0; w5 < n5; w5++) p5[w5] = null;
  return o5 ? H : H.toP();
};
function Xt(e2, t) {
  this.curve = e2, this.type = t, this.precomputed = null;
}
Ce.BasePoint = Xt, Xt.prototype.eq = function() {
  throw new Error("Not implemented");
}, Xt.prototype.validate = function() {
  return this.curve.validate(this);
}, Ce.prototype.decodePoint = function(t, r3) {
  t = Jt.toArray(t, r3);
  var i4 = this.p.byteLength();
  if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * i4) {
    t[0] === 6 ? kr(t[t.length - 1] % 2 === 0) : t[0] === 7 && kr(t[t.length - 1] % 2 === 1);
    var n5 = this.point(t.slice(1, 1 + i4), t.slice(1 + i4, 1 + 2 * i4));
    return n5;
  } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === i4) return this.pointFromX(t.slice(1, 1 + i4), t[0] === 3);
  throw new Error("Unknown point format");
}, Xt.prototype.encodeCompressed = function(t) {
  return this.encode(t, true);
}, Xt.prototype._encode = function(t) {
  var r3 = this.curve.p.byteLength(), i4 = this.getX().toArray("be", r3);
  return t ? [this.getY().isEven() ? 2 : 3].concat(i4) : [4].concat(i4, this.getY().toArray("be", r3));
}, Xt.prototype.encode = function(t, r3) {
  return Jt.encode(this._encode(r3), t);
}, Xt.prototype.precompute = function(t) {
  if (this.precomputed) return this;
  var r3 = { doubles: null, naf: null, beta: null };
  return r3.naf = this._getNAFPoints(8), r3.doubles = this._getDoubles(4, t), r3.beta = this._getBeta(), this.precomputed = r3, this;
}, Xt.prototype._hasDoubles = function(t) {
  if (!this.precomputed) return false;
  var r3 = this.precomputed.doubles;
  return r3 ? r3.points.length >= Math.ceil((t.bitLength() + 1) / r3.step) : false;
}, Xt.prototype._getDoubles = function(t, r3) {
  if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
  for (var i4 = [this], n5 = this, o5 = 0; o5 < r3; o5 += t) {
    for (var h5 = 0; h5 < t; h5++) n5 = n5.dbl();
    i4.push(n5);
  }
  return { step: t, points: i4 };
}, Xt.prototype._getNAFPoints = function(t) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  for (var r3 = [this], i4 = (1 << t) - 1, n5 = i4 === 1 ? null : this.dbl(), o5 = 1; o5 < i4; o5++) r3[o5] = r3[o5 - 1].add(n5);
  return { wnd: t, points: r3 };
}, Xt.prototype._getBeta = function() {
  return null;
}, Xt.prototype.dblp = function(t) {
  for (var r3 = this, i4 = 0; i4 < t; i4++) r3 = r3.dbl();
  return r3;
};
var Di = cr(function(e2) {
  typeof Object.create == "function" ? e2.exports = function(r3, i4) {
    i4 && (r3.super_ = i4, r3.prototype = Object.create(i4.prototype, { constructor: { value: r3, enumerable: false, writable: true, configurable: true } }));
  } : e2.exports = function(r3, i4) {
    if (i4) {
      r3.super_ = i4;
      var n5 = function() {
      };
      n5.prototype = i4.prototype, r3.prototype = new n5(), r3.prototype.constructor = r3;
    }
  };
});
var Ua = Jt.assert;
function Zt(e2) {
  Ze.call(this, "short", e2), this.a = new K(e2.a, 16).toRed(this.red), this.b = new K(e2.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(e2), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
Di(Zt, Ze);
var ka = Zt;
Zt.prototype._getEndomorphism = function(t) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var r3, i4;
    if (t.beta) r3 = new K(t.beta, 16).toRed(this.red);
    else {
      var n5 = this._getEndoRoots(this.p);
      r3 = n5[0].cmp(n5[1]) < 0 ? n5[0] : n5[1], r3 = r3.toRed(this.red);
    }
    if (t.lambda) i4 = new K(t.lambda, 16);
    else {
      var o5 = this._getEndoRoots(this.n);
      this.g.mul(o5[0]).x.cmp(this.g.x.redMul(r3)) === 0 ? i4 = o5[0] : (i4 = o5[1], Ua(this.g.mul(i4).x.cmp(this.g.x.redMul(r3)) === 0));
    }
    var h5;
    return t.basis ? h5 = t.basis.map(function(p5) {
      return { a: new K(p5.a, 16), b: new K(p5.b, 16) };
    }) : h5 = this._getEndoBasis(i4), { beta: r3, lambda: i4, basis: h5 };
  }
}, Zt.prototype._getEndoRoots = function(t) {
  var r3 = t === this.p ? this.red : K.mont(t), i4 = new K(2).toRed(r3).redInvm(), n5 = i4.redNeg(), o5 = new K(3).toRed(r3).redNeg().redSqrt().redMul(i4), h5 = n5.redAdd(o5).fromRed(), p5 = n5.redSub(o5).fromRed();
  return [h5, p5];
}, Zt.prototype._getEndoBasis = function(t) {
  for (var r3 = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), i4 = t, n5 = this.n.clone(), o5 = new K(1), h5 = new K(0), p5 = new K(0), b5 = new K(1), m5, w5, y7, S5, I3, N11, C5, F = 0, U4, J2; i4.cmpn(0) !== 0; ) {
    var Bt3 = n5.div(i4);
    U4 = n5.sub(Bt3.mul(i4)), J2 = p5.sub(Bt3.mul(o5));
    var G = b5.sub(Bt3.mul(h5));
    if (!y7 && U4.cmp(r3) < 0) m5 = C5.neg(), w5 = o5, y7 = U4.neg(), S5 = J2;
    else if (y7 && ++F === 2) break;
    C5 = U4, n5 = i4, i4 = U4, p5 = o5, o5 = J2, b5 = h5, h5 = G;
  }
  I3 = U4.neg(), N11 = J2;
  var H = y7.sqr().add(S5.sqr()), z5 = I3.sqr().add(N11.sqr());
  return z5.cmp(H) >= 0 && (I3 = m5, N11 = w5), y7.negative && (y7 = y7.neg(), S5 = S5.neg()), I3.negative && (I3 = I3.neg(), N11 = N11.neg()), [{ a: y7, b: S5 }, { a: I3, b: N11 }];
}, Zt.prototype._endoSplit = function(t) {
  var r3 = this.endo.basis, i4 = r3[0], n5 = r3[1], o5 = n5.b.mul(t).divRound(this.n), h5 = i4.b.neg().mul(t).divRound(this.n), p5 = o5.mul(i4.a), b5 = h5.mul(n5.a), m5 = o5.mul(i4.b), w5 = h5.mul(n5.b), y7 = t.sub(p5).sub(b5), S5 = m5.add(w5).neg();
  return { k1: y7, k2: S5 };
}, Zt.prototype.pointFromX = function(t, r3) {
  t = new K(t, 16), t.red || (t = t.toRed(this.red));
  var i4 = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), n5 = i4.redSqrt();
  if (n5.redSqr().redSub(i4).cmp(this.zero) !== 0) throw new Error("invalid point");
  var o5 = n5.fromRed().isOdd();
  return (r3 && !o5 || !r3 && o5) && (n5 = n5.redNeg()), this.point(t, n5);
}, Zt.prototype.validate = function(t) {
  if (t.inf) return true;
  var r3 = t.x, i4 = t.y, n5 = this.a.redMul(r3), o5 = r3.redSqr().redMul(r3).redIAdd(n5).redIAdd(this.b);
  return i4.redSqr().redISub(o5).cmpn(0) === 0;
}, Zt.prototype._endoWnafMulAdd = function(t, r3, i4) {
  for (var n5 = this._endoWnafT1, o5 = this._endoWnafT2, h5 = 0; h5 < t.length; h5++) {
    var p5 = this._endoSplit(r3[h5]), b5 = t[h5], m5 = b5._getBeta();
    p5.k1.negative && (p5.k1.ineg(), b5 = b5.neg(true)), p5.k2.negative && (p5.k2.ineg(), m5 = m5.neg(true)), n5[h5 * 2] = b5, n5[h5 * 2 + 1] = m5, o5[h5 * 2] = p5.k1, o5[h5 * 2 + 1] = p5.k2;
  }
  for (var w5 = this._wnafMulAdd(1, n5, o5, h5 * 2, i4), y7 = 0; y7 < h5 * 2; y7++) n5[y7] = null, o5[y7] = null;
  return w5;
};
function Ft(e2, t, r3, i4) {
  Ze.BasePoint.call(this, e2, "affine"), t === null && r3 === null ? (this.x = null, this.y = null, this.inf = true) : (this.x = new K(t, 16), this.y = new K(r3, 16), i4 && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = false);
}
Di(Ft, Ze.BasePoint), Zt.prototype.point = function(t, r3, i4) {
  return new Ft(this, t, r3, i4);
}, Zt.prototype.pointFromJSON = function(t, r3) {
  return Ft.fromJSON(this, t, r3);
}, Ft.prototype._getBeta = function() {
  if (this.curve.endo) {
    var t = this.precomputed;
    if (t && t.beta) return t.beta;
    var r3 = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (t) {
      var i4 = this.curve, n5 = function(o5) {
        return i4.point(o5.x.redMul(i4.endo.beta), o5.y);
      };
      t.beta = r3, r3.precomputed = { beta: null, naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n5) }, doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(n5) } };
    }
    return r3;
  }
}, Ft.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
}, Ft.fromJSON = function(t, r3, i4) {
  typeof r3 == "string" && (r3 = JSON.parse(r3));
  var n5 = t.point(r3[0], r3[1], i4);
  if (!r3[2]) return n5;
  function o5(p5) {
    return t.point(p5[0], p5[1], i4);
  }
  var h5 = r3[2];
  return n5.precomputed = { beta: null, doubles: h5.doubles && { step: h5.doubles.step, points: [n5].concat(h5.doubles.points.map(o5)) }, naf: h5.naf && { wnd: h5.naf.wnd, points: [n5].concat(h5.naf.points.map(o5)) } }, n5;
}, Ft.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, Ft.prototype.isInfinity = function() {
  return this.inf;
}, Ft.prototype.add = function(t) {
  if (this.inf) return t;
  if (t.inf) return this;
  if (this.eq(t)) return this.dbl();
  if (this.neg().eq(t)) return this.curve.point(null, null);
  if (this.x.cmp(t.x) === 0) return this.curve.point(null, null);
  var r3 = this.y.redSub(t.y);
  r3.cmpn(0) !== 0 && (r3 = r3.redMul(this.x.redSub(t.x).redInvm()));
  var i4 = r3.redSqr().redISub(this.x).redISub(t.x), n5 = r3.redMul(this.x.redSub(i4)).redISub(this.y);
  return this.curve.point(i4, n5);
}, Ft.prototype.dbl = function() {
  if (this.inf) return this;
  var t = this.y.redAdd(this.y);
  if (t.cmpn(0) === 0) return this.curve.point(null, null);
  var r3 = this.curve.a, i4 = this.x.redSqr(), n5 = t.redInvm(), o5 = i4.redAdd(i4).redIAdd(i4).redIAdd(r3).redMul(n5), h5 = o5.redSqr().redISub(this.x.redAdd(this.x)), p5 = o5.redMul(this.x.redSub(h5)).redISub(this.y);
  return this.curve.point(h5, p5);
}, Ft.prototype.getX = function() {
  return this.x.fromRed();
}, Ft.prototype.getY = function() {
  return this.y.fromRed();
}, Ft.prototype.mul = function(t) {
  return t = new K(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t);
}, Ft.prototype.mulAdd = function(t, r3, i4) {
  var n5 = [this, r3], o5 = [t, i4];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n5, o5) : this.curve._wnafMulAdd(1, n5, o5, 2);
}, Ft.prototype.jmulAdd = function(t, r3, i4) {
  var n5 = [this, r3], o5 = [t, i4];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n5, o5, true) : this.curve._wnafMulAdd(1, n5, o5, 2, true);
}, Ft.prototype.eq = function(t) {
  return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
}, Ft.prototype.neg = function(t) {
  if (this.inf) return this;
  var r3 = this.curve.point(this.x, this.y.redNeg());
  if (t && this.precomputed) {
    var i4 = this.precomputed, n5 = function(o5) {
      return o5.neg();
    };
    r3.precomputed = { naf: i4.naf && { wnd: i4.naf.wnd, points: i4.naf.points.map(n5) }, doubles: i4.doubles && { step: i4.doubles.step, points: i4.doubles.points.map(n5) } };
  }
  return r3;
}, Ft.prototype.toJ = function() {
  if (this.inf) return this.curve.jpoint(null, null, null);
  var t = this.curve.jpoint(this.x, this.y, this.curve.one);
  return t;
};
function Tt(e2, t, r3, i4) {
  Ze.BasePoint.call(this, e2, "jacobian"), t === null && r3 === null && i4 === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new K(0)) : (this.x = new K(t, 16), this.y = new K(r3, 16), this.z = new K(i4, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
Di(Tt, Ze.BasePoint), Zt.prototype.jpoint = function(t, r3, i4) {
  return new Tt(this, t, r3, i4);
}, Tt.prototype.toP = function() {
  if (this.isInfinity()) return this.curve.point(null, null);
  var t = this.z.redInvm(), r3 = t.redSqr(), i4 = this.x.redMul(r3), n5 = this.y.redMul(r3).redMul(t);
  return this.curve.point(i4, n5);
}, Tt.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Tt.prototype.add = function(t) {
  if (this.isInfinity()) return t;
  if (t.isInfinity()) return this;
  var r3 = t.z.redSqr(), i4 = this.z.redSqr(), n5 = this.x.redMul(r3), o5 = t.x.redMul(i4), h5 = this.y.redMul(r3.redMul(t.z)), p5 = t.y.redMul(i4.redMul(this.z)), b5 = n5.redSub(o5), m5 = h5.redSub(p5);
  if (b5.cmpn(0) === 0) return m5.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var w5 = b5.redSqr(), y7 = w5.redMul(b5), S5 = n5.redMul(w5), I3 = m5.redSqr().redIAdd(y7).redISub(S5).redISub(S5), N11 = m5.redMul(S5.redISub(I3)).redISub(h5.redMul(y7)), C5 = this.z.redMul(t.z).redMul(b5);
  return this.curve.jpoint(I3, N11, C5);
}, Tt.prototype.mixedAdd = function(t) {
  if (this.isInfinity()) return t.toJ();
  if (t.isInfinity()) return this;
  var r3 = this.z.redSqr(), i4 = this.x, n5 = t.x.redMul(r3), o5 = this.y, h5 = t.y.redMul(r3).redMul(this.z), p5 = i4.redSub(n5), b5 = o5.redSub(h5);
  if (p5.cmpn(0) === 0) return b5.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var m5 = p5.redSqr(), w5 = m5.redMul(p5), y7 = i4.redMul(m5), S5 = b5.redSqr().redIAdd(w5).redISub(y7).redISub(y7), I3 = b5.redMul(y7.redISub(S5)).redISub(o5.redMul(w5)), N11 = this.z.redMul(p5);
  return this.curve.jpoint(S5, I3, N11);
}, Tt.prototype.dblp = function(t) {
  if (t === 0) return this;
  if (this.isInfinity()) return this;
  if (!t) return this.dbl();
  var r3;
  if (this.curve.zeroA || this.curve.threeA) {
    var i4 = this;
    for (r3 = 0; r3 < t; r3++) i4 = i4.dbl();
    return i4;
  }
  var n5 = this.curve.a, o5 = this.curve.tinv, h5 = this.x, p5 = this.y, b5 = this.z, m5 = b5.redSqr().redSqr(), w5 = p5.redAdd(p5);
  for (r3 = 0; r3 < t; r3++) {
    var y7 = h5.redSqr(), S5 = w5.redSqr(), I3 = S5.redSqr(), N11 = y7.redAdd(y7).redIAdd(y7).redIAdd(n5.redMul(m5)), C5 = h5.redMul(S5), F = N11.redSqr().redISub(C5.redAdd(C5)), U4 = C5.redISub(F), J2 = N11.redMul(U4);
    J2 = J2.redIAdd(J2).redISub(I3);
    var Bt3 = w5.redMul(b5);
    r3 + 1 < t && (m5 = m5.redMul(I3)), h5 = F, b5 = Bt3, w5 = J2;
  }
  return this.curve.jpoint(h5, w5.redMul(o5), b5);
}, Tt.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Tt.prototype._zeroDbl = function() {
  var t, r3, i4;
  if (this.zOne) {
    var n5 = this.x.redSqr(), o5 = this.y.redSqr(), h5 = o5.redSqr(), p5 = this.x.redAdd(o5).redSqr().redISub(n5).redISub(h5);
    p5 = p5.redIAdd(p5);
    var b5 = n5.redAdd(n5).redIAdd(n5), m5 = b5.redSqr().redISub(p5).redISub(p5), w5 = h5.redIAdd(h5);
    w5 = w5.redIAdd(w5), w5 = w5.redIAdd(w5), t = m5, r3 = b5.redMul(p5.redISub(m5)).redISub(w5), i4 = this.y.redAdd(this.y);
  } else {
    var y7 = this.x.redSqr(), S5 = this.y.redSqr(), I3 = S5.redSqr(), N11 = this.x.redAdd(S5).redSqr().redISub(y7).redISub(I3);
    N11 = N11.redIAdd(N11);
    var C5 = y7.redAdd(y7).redIAdd(y7), F = C5.redSqr(), U4 = I3.redIAdd(I3);
    U4 = U4.redIAdd(U4), U4 = U4.redIAdd(U4), t = F.redISub(N11).redISub(N11), r3 = C5.redMul(N11.redISub(t)).redISub(U4), i4 = this.y.redMul(this.z), i4 = i4.redIAdd(i4);
  }
  return this.curve.jpoint(t, r3, i4);
}, Tt.prototype._threeDbl = function() {
  var t, r3, i4;
  if (this.zOne) {
    var n5 = this.x.redSqr(), o5 = this.y.redSqr(), h5 = o5.redSqr(), p5 = this.x.redAdd(o5).redSqr().redISub(n5).redISub(h5);
    p5 = p5.redIAdd(p5);
    var b5 = n5.redAdd(n5).redIAdd(n5).redIAdd(this.curve.a), m5 = b5.redSqr().redISub(p5).redISub(p5);
    t = m5;
    var w5 = h5.redIAdd(h5);
    w5 = w5.redIAdd(w5), w5 = w5.redIAdd(w5), r3 = b5.redMul(p5.redISub(m5)).redISub(w5), i4 = this.y.redAdd(this.y);
  } else {
    var y7 = this.z.redSqr(), S5 = this.y.redSqr(), I3 = this.x.redMul(S5), N11 = this.x.redSub(y7).redMul(this.x.redAdd(y7));
    N11 = N11.redAdd(N11).redIAdd(N11);
    var C5 = I3.redIAdd(I3);
    C5 = C5.redIAdd(C5);
    var F = C5.redAdd(C5);
    t = N11.redSqr().redISub(F), i4 = this.y.redAdd(this.z).redSqr().redISub(S5).redISub(y7);
    var U4 = S5.redSqr();
    U4 = U4.redIAdd(U4), U4 = U4.redIAdd(U4), U4 = U4.redIAdd(U4), r3 = N11.redMul(C5.redISub(t)).redISub(U4);
  }
  return this.curve.jpoint(t, r3, i4);
}, Tt.prototype._dbl = function() {
  var t = this.curve.a, r3 = this.x, i4 = this.y, n5 = this.z, o5 = n5.redSqr().redSqr(), h5 = r3.redSqr(), p5 = i4.redSqr(), b5 = h5.redAdd(h5).redIAdd(h5).redIAdd(t.redMul(o5)), m5 = r3.redAdd(r3);
  m5 = m5.redIAdd(m5);
  var w5 = m5.redMul(p5), y7 = b5.redSqr().redISub(w5.redAdd(w5)), S5 = w5.redISub(y7), I3 = p5.redSqr();
  I3 = I3.redIAdd(I3), I3 = I3.redIAdd(I3), I3 = I3.redIAdd(I3);
  var N11 = b5.redMul(S5).redISub(I3), C5 = i4.redAdd(i4).redMul(n5);
  return this.curve.jpoint(y7, N11, C5);
}, Tt.prototype.trpl = function() {
  if (!this.curve.zeroA) return this.dbl().add(this);
  var t = this.x.redSqr(), r3 = this.y.redSqr(), i4 = this.z.redSqr(), n5 = r3.redSqr(), o5 = t.redAdd(t).redIAdd(t), h5 = o5.redSqr(), p5 = this.x.redAdd(r3).redSqr().redISub(t).redISub(n5);
  p5 = p5.redIAdd(p5), p5 = p5.redAdd(p5).redIAdd(p5), p5 = p5.redISub(h5);
  var b5 = p5.redSqr(), m5 = n5.redIAdd(n5);
  m5 = m5.redIAdd(m5), m5 = m5.redIAdd(m5), m5 = m5.redIAdd(m5);
  var w5 = o5.redIAdd(p5).redSqr().redISub(h5).redISub(b5).redISub(m5), y7 = r3.redMul(w5);
  y7 = y7.redIAdd(y7), y7 = y7.redIAdd(y7);
  var S5 = this.x.redMul(b5).redISub(y7);
  S5 = S5.redIAdd(S5), S5 = S5.redIAdd(S5);
  var I3 = this.y.redMul(w5.redMul(m5.redISub(w5)).redISub(p5.redMul(b5)));
  I3 = I3.redIAdd(I3), I3 = I3.redIAdd(I3), I3 = I3.redIAdd(I3);
  var N11 = this.z.redAdd(p5).redSqr().redISub(i4).redISub(b5);
  return this.curve.jpoint(S5, I3, N11);
}, Tt.prototype.mul = function(t, r3) {
  return t = new K(t, r3), this.curve._wnafMul(this, t);
}, Tt.prototype.eq = function(t) {
  if (t.type === "affine") return this.eq(t.toJ());
  if (this === t) return true;
  var r3 = this.z.redSqr(), i4 = t.z.redSqr();
  if (this.x.redMul(i4).redISub(t.x.redMul(r3)).cmpn(0) !== 0) return false;
  var n5 = r3.redMul(this.z), o5 = i4.redMul(t.z);
  return this.y.redMul(o5).redISub(t.y.redMul(n5)).cmpn(0) === 0;
}, Tt.prototype.eqXToP = function(t) {
  var r3 = this.z.redSqr(), i4 = t.toRed(this.curve.red).redMul(r3);
  if (this.x.cmp(i4) === 0) return true;
  for (var n5 = t.clone(), o5 = this.curve.redN.redMul(r3); ; ) {
    if (n5.iadd(this.curve.n), n5.cmp(this.curve.p) >= 0) return false;
    if (i4.redIAdd(o5), this.x.cmp(i4) === 0) return true;
  }
}, Tt.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Tt.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var qr = cr(function(e2, t) {
  var r3 = t;
  r3.base = Ze, r3.short = ka, r3.mont = null, r3.edwards = null;
});
var Kr = cr(function(e2, t) {
  var r3 = t, i4 = Jt.assert;
  function n5(p5) {
    p5.type === "short" ? this.curve = new qr.short(p5) : p5.type === "edwards" ? this.curve = new qr.edwards(p5) : this.curve = new qr.mont(p5), this.g = this.curve.g, this.n = this.curve.n, this.hash = p5.hash, i4(this.g.validate(), "Invalid curve"), i4(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  r3.PresetCurve = n5;
  function o5(p5, b5) {
    Object.defineProperty(r3, p5, { configurable: true, enumerable: true, get: function() {
      var m5 = new n5(b5);
      return Object.defineProperty(r3, p5, { configurable: true, enumerable: true, value: m5 }), m5;
    } });
  }
  o5("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: se.sha256, gRed: false, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), o5("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: se.sha256, gRed: false, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), o5("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: se.sha256, gRed: false, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), o5("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: se.sha384, gRed: false, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), o5("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: se.sha512, gRed: false, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), o5("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se.sha256, gRed: false, g: ["9"] }), o5("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se.sha256, gRed: false, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
  var h5;
  try {
    h5 = null.crash();
  } catch {
    h5 = void 0;
  }
  o5("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: se.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: false, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", h5] });
});
function Re(e2) {
  if (!(this instanceof Re)) return new Re(e2);
  this.hash = e2.hash, this.predResist = !!e2.predResist, this.outLen = this.hash.outSize, this.minEntropy = e2.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var t = fe.toArray(e2.entropy, e2.entropyEnc || "hex"), r3 = fe.toArray(e2.nonce, e2.nonceEnc || "hex"), i4 = fe.toArray(e2.pers, e2.persEnc || "hex");
  Pi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r3, i4);
}
var Rf = Re;
Re.prototype._init = function(t, r3, i4) {
  var n5 = t.concat(r3).concat(i4);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var o5 = 0; o5 < this.V.length; o5++) this.K[o5] = 0, this.V[o5] = 1;
  this._update(n5), this._reseed = 1, this.reseedInterval = 281474976710656;
}, Re.prototype._hmac = function() {
  return new se.hmac(this.hash, this.K);
}, Re.prototype._update = function(t) {
  var r3 = this._hmac().update(this.V).update([0]);
  t && (r3 = r3.update(t)), this.K = r3.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
}, Re.prototype.reseed = function(t, r3, i4, n5) {
  typeof r3 != "string" && (n5 = i4, i4 = r3, r3 = null), t = fe.toArray(t, r3), i4 = fe.toArray(i4, n5), Pi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(i4 || [])), this._reseed = 1;
}, Re.prototype.generate = function(t, r3, i4, n5) {
  if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
  typeof r3 != "string" && (n5 = i4, i4 = r3, r3 = null), i4 && (i4 = fe.toArray(i4, n5 || "hex"), this._update(i4));
  for (var o5 = []; o5.length < t; ) this.V = this._hmac().update(this.V).digest(), o5 = o5.concat(this.V);
  var h5 = o5.slice(0, t);
  return this._update(i4), this._reseed++, fe.encode(h5, r3);
};
var Fi = Jt.assert;
function kt(e2, t) {
  this.ec = e2, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
var Ti = kt;
kt.fromPublic = function(t, r3, i4) {
  return r3 instanceof kt ? r3 : new kt(t, { pub: r3, pubEnc: i4 });
}, kt.fromPrivate = function(t, r3, i4) {
  return r3 instanceof kt ? r3 : new kt(t, { priv: r3, privEnc: i4 });
}, kt.prototype.validate = function() {
  var t = this.getPublic();
  return t.isInfinity() ? { result: false, reason: "Invalid public key" } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? { result: true, reason: null } : { result: false, reason: "Public key * N != O" } : { result: false, reason: "Public key is not a point" };
}, kt.prototype.getPublic = function(t, r3) {
  return typeof t == "string" && (r3 = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r3 ? this.pub.encode(r3, t) : this.pub;
}, kt.prototype.getPrivate = function(t) {
  return t === "hex" ? this.priv.toString(16, 2) : this.priv;
}, kt.prototype._importPrivate = function(t, r3) {
  this.priv = new K(t, r3 || 16), this.priv = this.priv.umod(this.ec.curve.n);
}, kt.prototype._importPublic = function(t, r3) {
  if (t.x || t.y) {
    this.ec.curve.type === "mont" ? Fi(t.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Fi(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(t, r3);
}, kt.prototype.derive = function(t) {
  return t.validate() || Fi(t.validate(), "public point not validated"), t.mul(this.priv).getX();
}, kt.prototype.sign = function(t, r3, i4) {
  return this.ec.sign(t, this, r3, i4);
}, kt.prototype.verify = function(t, r3) {
  return this.ec.verify(t, r3, this);
}, kt.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var qa = Jt.assert;
function Hr(e2, t) {
  if (e2 instanceof Hr) return e2;
  this._importDER(e2, t) || (qa(e2.r && e2.s, "Signature without r or s"), this.r = new K(e2.r, 16), this.s = new K(e2.s, 16), e2.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = e2.recoveryParam);
}
var zr = Hr;
function Ka() {
  this.place = 0;
}
function Ui(e2, t) {
  var r3 = e2[t.place++];
  if (!(r3 & 128)) return r3;
  var i4 = r3 & 15;
  if (i4 === 0 || i4 > 4) return false;
  for (var n5 = 0, o5 = 0, h5 = t.place; o5 < i4; o5++, h5++) n5 <<= 8, n5 |= e2[h5], n5 >>>= 0;
  return n5 <= 127 ? false : (t.place = h5, n5);
}
function Of(e2) {
  for (var t = 0, r3 = e2.length - 1; !e2[t] && !(e2[t + 1] & 128) && t < r3; ) t++;
  return t === 0 ? e2 : e2.slice(t);
}
Hr.prototype._importDER = function(t, r3) {
  t = Jt.toArray(t, r3);
  var i4 = new Ka();
  if (t[i4.place++] !== 48) return false;
  var n5 = Ui(t, i4);
  if (n5 === false || n5 + i4.place !== t.length || t[i4.place++] !== 2) return false;
  var o5 = Ui(t, i4);
  if (o5 === false) return false;
  var h5 = t.slice(i4.place, o5 + i4.place);
  if (i4.place += o5, t[i4.place++] !== 2) return false;
  var p5 = Ui(t, i4);
  if (p5 === false || t.length !== p5 + i4.place) return false;
  var b5 = t.slice(i4.place, p5 + i4.place);
  if (h5[0] === 0) if (h5[1] & 128) h5 = h5.slice(1);
  else return false;
  if (b5[0] === 0) if (b5[1] & 128) b5 = b5.slice(1);
  else return false;
  return this.r = new K(h5), this.s = new K(b5), this.recoveryParam = null, true;
};
function ki(e2, t) {
  if (t < 128) {
    e2.push(t);
    return;
  }
  var r3 = 1 + (Math.log(t) / Math.LN2 >>> 3);
  for (e2.push(r3 | 128); --r3; ) e2.push(t >>> (r3 << 3) & 255);
  e2.push(t);
}
Hr.prototype.toDER = function(t) {
  var r3 = this.r.toArray(), i4 = this.s.toArray();
  for (r3[0] & 128 && (r3 = [0].concat(r3)), i4[0] & 128 && (i4 = [0].concat(i4)), r3 = Of(r3), i4 = Of(i4); !i4[0] && !(i4[1] & 128); ) i4 = i4.slice(1);
  var n5 = [2];
  ki(n5, r3.length), n5 = n5.concat(r3), n5.push(2), ki(n5, i4.length);
  var o5 = n5.concat(i4), h5 = [48];
  return ki(h5, o5.length), h5 = h5.concat(o5), Jt.encode(h5, t);
};
var Ha = function() {
  throw new Error("unsupported");
};
var Pf = Jt.assert;
function $t(e2) {
  if (!(this instanceof $t)) return new $t(e2);
  typeof e2 == "string" && (Pf(Object.prototype.hasOwnProperty.call(Kr, e2), "Unknown curve " + e2), e2 = Kr[e2]), e2 instanceof Kr.PresetCurve && (e2 = { curve: e2 }), this.curve = e2.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e2.curve.g, this.g.precompute(e2.curve.n.bitLength() + 1), this.hash = e2.hash || e2.curve.hash;
}
var za = $t;
$t.prototype.keyPair = function(t) {
  return new Ti(this, t);
}, $t.prototype.keyFromPrivate = function(t, r3) {
  return Ti.fromPrivate(this, t, r3);
}, $t.prototype.keyFromPublic = function(t, r3) {
  return Ti.fromPublic(this, t, r3);
}, $t.prototype.genKeyPair = function(t) {
  t || (t = {});
  for (var r3 = new Rf({ hash: this.hash, pers: t.pers, persEnc: t.persEnc || "utf8", entropy: t.entropy || Ha(this.hash.hmacStrength), entropyEnc: t.entropy && t.entropyEnc || "utf8", nonce: this.n.toArray() }), i4 = this.n.byteLength(), n5 = this.n.sub(new K(2)); ; ) {
    var o5 = new K(r3.generate(i4));
    if (!(o5.cmp(n5) > 0)) return o5.iaddn(1), this.keyFromPrivate(o5);
  }
}, $t.prototype._truncateToN = function(t, r3) {
  var i4 = t.byteLength() * 8 - this.n.bitLength();
  return i4 > 0 && (t = t.ushrn(i4)), !r3 && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
}, $t.prototype.sign = function(t, r3, i4, n5) {
  typeof i4 == "object" && (n5 = i4, i4 = null), n5 || (n5 = {}), r3 = this.keyFromPrivate(r3, i4), t = this._truncateToN(new K(t, 16));
  for (var o5 = this.n.byteLength(), h5 = r3.getPrivate().toArray("be", o5), p5 = t.toArray("be", o5), b5 = new Rf({ hash: this.hash, entropy: h5, nonce: p5, pers: n5.pers, persEnc: n5.persEnc || "utf8" }), m5 = this.n.sub(new K(1)), w5 = 0; ; w5++) {
    var y7 = n5.k ? n5.k(w5) : new K(b5.generate(this.n.byteLength()));
    if (y7 = this._truncateToN(y7, true), !(y7.cmpn(1) <= 0 || y7.cmp(m5) >= 0)) {
      var S5 = this.g.mul(y7);
      if (!S5.isInfinity()) {
        var I3 = S5.getX(), N11 = I3.umod(this.n);
        if (N11.cmpn(0) !== 0) {
          var C5 = y7.invm(this.n).mul(N11.mul(r3.getPrivate()).iadd(t));
          if (C5 = C5.umod(this.n), C5.cmpn(0) !== 0) {
            var F = (S5.getY().isOdd() ? 1 : 0) | (I3.cmp(N11) !== 0 ? 2 : 0);
            return n5.canonical && C5.cmp(this.nh) > 0 && (C5 = this.n.sub(C5), F ^= 1), new zr({ r: N11, s: C5, recoveryParam: F });
          }
        }
      }
    }
  }
}, $t.prototype.verify = function(t, r3, i4, n5) {
  t = this._truncateToN(new K(t, 16)), i4 = this.keyFromPublic(i4, n5), r3 = new zr(r3, "hex");
  var o5 = r3.r, h5 = r3.s;
  if (o5.cmpn(1) < 0 || o5.cmp(this.n) >= 0 || h5.cmpn(1) < 0 || h5.cmp(this.n) >= 0) return false;
  var p5 = h5.invm(this.n), b5 = p5.mul(t).umod(this.n), m5 = p5.mul(o5).umod(this.n), w5;
  return this.curve._maxwellTrick ? (w5 = this.g.jmulAdd(b5, i4.getPublic(), m5), w5.isInfinity() ? false : w5.eqXToP(o5)) : (w5 = this.g.mulAdd(b5, i4.getPublic(), m5), w5.isInfinity() ? false : w5.getX().umod(this.n).cmp(o5) === 0);
}, $t.prototype.recoverPubKey = function(e2, t, r3, i4) {
  Pf((3 & r3) === r3, "The recovery param is more than two bits"), t = new zr(t, i4);
  var n5 = this.n, o5 = new K(e2), h5 = t.r, p5 = t.s, b5 = r3 & 1, m5 = r3 >> 1;
  if (h5.cmp(this.curve.p.umod(this.curve.n)) >= 0 && m5) throw new Error("Unable to find sencond key candinate");
  m5 ? h5 = this.curve.pointFromX(h5.add(this.curve.n), b5) : h5 = this.curve.pointFromX(h5, b5);
  var w5 = t.r.invm(n5), y7 = n5.sub(o5).mul(w5).umod(n5), S5 = p5.mul(w5).umod(n5);
  return this.g.mulAdd(y7, h5, S5);
}, $t.prototype.getKeyRecoveryParam = function(e2, t, r3, i4) {
  if (t = new zr(t, i4), t.recoveryParam !== null) return t.recoveryParam;
  for (var n5 = 0; n5 < 4; n5++) {
    var o5;
    try {
      o5 = this.recoverPubKey(e2, t, n5);
    } catch {
      continue;
    }
    if (o5.eq(r3)) return n5;
  }
  throw new Error("Unable to find valid recovery factor");
};
var La = cr(function(e2, t) {
  var r3 = t;
  r3.version = "6.5.4", r3.utils = Jt, r3.rand = function() {
    throw new Error("unsupported");
  }, r3.curve = qr, r3.curves = Kr, r3.ec = za, r3.eddsa = null;
});
var ja = La.ec;
var Qa = "signing-key/5.7.0";
var qi = new L(Qa);
var Ki = null;
function ve() {
  return Ki || (Ki = new ja("secp256k1")), Ki;
}
var Ja = class {
  constructor(t) {
    br(this, "curve", "secp256k1"), br(this, "privateKey", Kt(t)), N0(this.privateKey) !== 32 && qi.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
    const r3 = ve().keyFromPrivate(Ot(this.privateKey));
    br(this, "publicKey", "0x" + r3.getPublic(false, "hex")), br(this, "compressedPublicKey", "0x" + r3.getPublic(true, "hex")), br(this, "_isSigningKey", true);
  }
  _addPoint(t) {
    const r3 = ve().keyFromPublic(Ot(this.publicKey)), i4 = ve().keyFromPublic(Ot(t));
    return "0x" + r3.pub.add(i4.pub).encodeCompressed("hex");
  }
  signDigest(t) {
    const r3 = ve().keyFromPrivate(Ot(this.privateKey)), i4 = Ot(t);
    i4.length !== 32 && qi.throwArgumentError("bad digest length", "digest", t);
    const n5 = r3.sign(i4, { canonical: true });
    return zn({ recoveryParam: n5.recoveryParam, r: oe("0x" + n5.r.toString(16), 32), s: oe("0x" + n5.s.toString(16), 32) });
  }
  computeSharedSecret(t) {
    const r3 = ve().keyFromPrivate(Ot(this.privateKey)), i4 = ve().keyFromPublic(Ot(Df(t)));
    return oe("0x" + r3.derive(i4.getPublic()).toString(16), 32);
  }
  static isSigningKey(t) {
    return !!(t && t._isSigningKey);
  }
};
function Ga(e2, t) {
  const r3 = zn(t), i4 = { r: Ot(r3.r), s: Ot(r3.s) };
  return "0x" + ve().recoverPubKey(Ot(e2), i4, r3.recoveryParam).encode("hex", false);
}
function Df(e2, t) {
  const r3 = Ot(e2);
  if (r3.length === 32) {
    const i4 = new Ja(r3);
    return t ? "0x" + ve().keyFromPrivate(r3).getPublic(true, "hex") : i4.publicKey;
  } else {
    if (r3.length === 33) return t ? Kt(r3) : "0x" + ve().keyFromPublic(r3).getPublic(false, "hex");
    if (r3.length === 65) return t ? "0x" + ve().keyFromPublic(r3).getPublic(true, "hex") : Kt(r3);
  }
  return qi.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
var Ya = "transactions/5.7.0";
new L(Ya);
var Ff;
(function(e2) {
  e2[e2.legacy = 0] = "legacy", e2[e2.eip2930 = 1] = "eip2930", e2[e2.eip1559 = 2] = "eip1559";
})(Ff || (Ff = {}));
function Va(e2) {
  const t = Df(e2);
  return ns(Hn(yi(Hn(t, 1)), 12));
}
function Wa(e2, t) {
  return Va(Ga(Ot(e2), t));
}
var Xa = "https://rpc.walletconnect.com/v1";
async function Tf(e2, t, r3, i4, n5, o5) {
  switch (r3.t) {
    case "eip191":
      return Uf(e2, t, r3.s);
    case "eip1271":
      return await kf(e2, t, r3.s, i4, n5, o5);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r3.t}`);
  }
}
function Uf(e2, t, r3) {
  return Wa(ff(t), r3).toLowerCase() === e2.toLowerCase();
}
async function kf(e2, t, r3, i4, n5, o5) {
  try {
    const h5 = "0x1626ba7e", p5 = "0000000000000000000000000000000000000000000000000000000000000040", b5 = "0000000000000000000000000000000000000000000000000000000000000041", m5 = r3.substring(2), w5 = ff(t).substring(2), y7 = h5 + w5 + p5 + b5 + m5, S5 = await fetch(`${o5 || Xa}/?chainId=${i4}&projectId=${n5}`, { method: "POST", body: JSON.stringify({ id: Za(), jsonrpc: "2.0", method: "eth_call", params: [{ to: e2, data: y7 }, "latest"] }) }), { result: I3 } = await S5.json();
    return I3 ? I3.slice(0, h5.length).toLowerCase() === h5.toLowerCase() : false;
  } catch (h5) {
    return console.error("isValidEip1271Signature: ", h5), false;
  }
}
function Za() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var $a = Object.defineProperty;
var tu = Object.defineProperties;
var eu = Object.getOwnPropertyDescriptors;
var qf = Object.getOwnPropertySymbols;
var ru = Object.prototype.hasOwnProperty;
var iu = Object.prototype.propertyIsEnumerable;
var Kf = (e2, t, r3) => t in e2 ? $a(e2, t, { enumerable: true, configurable: true, writable: true, value: r3 }) : e2[t] = r3;
var Hi = (e2, t) => {
  for (var r3 in t || (t = {})) ru.call(t, r3) && Kf(e2, r3, t[r3]);
  if (qf) for (var r3 of qf(t)) iu.call(t, r3) && Kf(e2, r3, t[r3]);
  return e2;
};
var Hf = (e2, t) => tu(e2, eu(t));
var nu = "did:pkh:";
var Lr = (e2) => e2 == null ? void 0 : e2.split(":");
var zi = (e2) => {
  const t = e2 && Lr(e2);
  if (t) return e2.includes(nu) ? t[3] : t[1];
};
var fu = (e2) => {
  const t = e2 && Lr(e2);
  if (t) return t[2] + ":" + t[3];
};
var Li = (e2) => {
  const t = e2 && Lr(e2);
  if (t) return t.pop();
};
async function ou(e2) {
  const { cacao: t, projectId: r3 } = e2, { s: i4, p: n5 } = t, o5 = zf(n5, n5.iss), h5 = Li(n5.iss);
  return await Tf(h5, o5, i4, zi(n5.iss), r3);
}
var zf = (e2, t) => {
  const r3 = `${e2.domain} wants you to sign in with your Ethereum account:`, i4 = Li(t);
  if (!e2.aud && !e2.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let n5 = e2.statement || void 0;
  const o5 = `URI: ${e2.aud || e2.uri}`, h5 = `Version: ${e2.version}`, p5 = `Chain ID: ${zi(t)}`, b5 = `Nonce: ${e2.nonce}`, m5 = `Issued At: ${e2.iat}`, w5 = e2.exp ? `Expiration Time: ${e2.exp}` : void 0, y7 = e2.nbf ? `Not Before: ${e2.nbf}` : void 0, S5 = e2.requestId ? `Request ID: ${e2.requestId}` : void 0, I3 = e2.resources ? `Resources:${e2.resources.map((C5) => `
- ${C5}`).join("")}` : void 0, N11 = Qr(e2.resources);
  if (N11) {
    const C5 = Oe(N11);
    n5 = Ji(n5, C5);
  }
  return [r3, i4, "", n5, "", o5, h5, p5, b5, m5, w5, y7, S5, I3].filter((C5) => C5 != null).join(`
`);
};
function Jf(e2) {
  return Buffer.from(JSON.stringify(e2)).toString("base64");
}
function Gf(e2) {
  return JSON.parse(Buffer.from(e2, "base64").toString("utf-8"));
}
function me(e2) {
  if (!e2) throw new Error("No recap provided, value is undefined");
  if (!e2.att) throw new Error("No `att` property found");
  const t = Object.keys(e2.att);
  if (!(t != null && t.length)) throw new Error("No resources found in `att` property");
  t.forEach((r3) => {
    const i4 = e2.att[r3];
    if (Array.isArray(i4)) throw new Error(`Resource must be an object: ${r3}`);
    if (typeof i4 != "object") throw new Error(`Resource must be an object: ${r3}`);
    if (!Object.keys(i4).length) throw new Error(`Resource object is empty: ${r3}`);
    Object.keys(i4).forEach((n5) => {
      const o5 = i4[n5];
      if (!Array.isArray(o5)) throw new Error(`Ability limits ${n5} must be an array of objects, found: ${o5}`);
      if (!o5.length) throw new Error(`Value of ${n5} is empty array, must be an array with objects`);
      o5.forEach((h5) => {
        if (typeof h5 != "object") throw new Error(`Ability limits (${n5}) must be an array of objects, found: ${h5}`);
      });
    });
  });
}
function Yf(e2, t, r3, i4 = {}) {
  return r3 == null ? void 0 : r3.sort((n5, o5) => n5.localeCompare(o5)), { att: { [e2]: ji(t, r3, i4) } };
}
function ji(e2, t, r3 = {}) {
  t = t == null ? void 0 : t.sort((n5, o5) => n5.localeCompare(o5));
  const i4 = t.map((n5) => ({ [`${e2}/${n5}`]: [r3] }));
  return Object.assign({}, ...i4);
}
function jr(e2) {
  return me(e2), `urn:recap:${Jf(e2).replace(/=/g, "")}`;
}
function Oe(e2) {
  const t = Gf(e2.replace("urn:recap:", ""));
  return me(t), t;
}
function cu(e2, t, r3) {
  const i4 = Yf(e2, t, r3);
  return jr(i4);
}
function Qi(e2) {
  return e2 && e2.includes("urn:recap:");
}
function lu(e2, t) {
  const r3 = Oe(e2), i4 = Oe(t), n5 = Wf(r3, i4);
  return jr(n5);
}
function Wf(e2, t) {
  me(e2), me(t);
  const r3 = Object.keys(e2.att).concat(Object.keys(t.att)).sort((n5, o5) => n5.localeCompare(o5)), i4 = { att: {} };
  return r3.forEach((n5) => {
    var o5, h5;
    Object.keys(((o5 = e2.att) == null ? void 0 : o5[n5]) || {}).concat(Object.keys(((h5 = t.att) == null ? void 0 : h5[n5]) || {})).sort((p5, b5) => p5.localeCompare(b5)).forEach((p5) => {
      var b5, m5;
      i4.att[n5] = Hf(Hi({}, i4.att[n5]), { [p5]: ((b5 = e2.att[n5]) == null ? void 0 : b5[p5]) || ((m5 = t.att[n5]) == null ? void 0 : m5[p5]) });
    });
  }), i4;
}
function Ji(e2 = "", t) {
  me(t);
  const r3 = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (e2.includes(r3)) return e2;
  const i4 = [];
  let n5 = 0;
  Object.keys(t.att).forEach((p5) => {
    const b5 = Object.keys(t.att[p5]).map((y7) => ({ ability: y7.split("/")[0], action: y7.split("/")[1] }));
    b5.sort((y7, S5) => y7.action.localeCompare(S5.action));
    const m5 = {};
    b5.forEach((y7) => {
      m5[y7.ability] || (m5[y7.ability] = []), m5[y7.ability].push(y7.action);
    });
    const w5 = Object.keys(m5).map((y7) => (n5++, `(${n5}) '${y7}': '${m5[y7].join("', '")}' for '${p5}'.`));
    i4.push(w5.join(", ").replace(".,", "."));
  });
  const o5 = i4.join(" "), h5 = `${r3}${o5}`;
  return `${e2 ? e2 + " " : ""}${h5}`;
}
function du(e2) {
  var t;
  const r3 = Oe(e2);
  me(r3);
  const i4 = (t = r3.att) == null ? void 0 : t.eip155;
  return i4 ? Object.keys(i4).map((n5) => n5.split("/")[1]) : [];
}
function pu(e2) {
  const t = Oe(e2);
  me(t);
  const r3 = [];
  return Object.values(t.att).forEach((i4) => {
    Object.values(i4).forEach((n5) => {
      var o5;
      (o5 = n5 == null ? void 0 : n5[0]) != null && o5.chains && r3.push(n5[0].chains);
    });
  }), [...new Set(r3.flat())];
}
function Qr(e2) {
  if (!e2) return;
  const t = e2 == null ? void 0 : e2[e2.length - 1];
  return Qi(t) ? t : void 0;
}
var Gi = "base10";
var zt = "base16";
var Jr = "base64pad";
var Gr = "utf8";
var Yi = 0;
var lr = 1;
var vu = 0;
var Zf = 1;
var Vi = 12;
var Wi = 32;
function mu() {
  const e2 = cn.generateKeyPair();
  return { privateKey: toString2(e2.secretKey, zt), publicKey: toString2(e2.publicKey, zt) };
}
function gu() {
  const e2 = (0, import_random.randomBytes)(Wi);
  return toString2(e2, zt);
}
function Au(e2, t) {
  const r3 = cn.sharedKey(fromString2(e2, zt), fromString2(t, zt), true), i4 = new import_hkdf.HKDF(import_sha256.SHA256, r3).expand(Wi);
  return toString2(i4, zt);
}
function bu(e2) {
  const t = (0, import_sha256.hash)(fromString2(e2, zt));
  return toString2(t, zt);
}
function yu(e2) {
  const t = (0, import_sha256.hash)(fromString2(e2, Gr));
  return toString2(t, zt);
}
function $f(e2) {
  return fromString2(`${e2}`, Gi);
}
function Mr(e2) {
  return Number(toString2(e2, Gi));
}
function wu(e2) {
  const t = $f(typeof e2.type < "u" ? e2.type : Yi);
  if (Mr(t) === lr && typeof e2.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const r3 = typeof e2.senderPublicKey < "u" ? fromString2(e2.senderPublicKey, zt) : void 0, i4 = typeof e2.iv < "u" ? fromString2(e2.iv, zt) : (0, import_random.randomBytes)(Vi), n5 = new import_chacha20poly1305.ChaCha20Poly1305(fromString2(e2.symKey, zt)).seal(i4, fromString2(e2.message, Gr));
  return to({ type: t, sealed: n5, iv: i4, senderPublicKey: r3 });
}
function xu(e2) {
  const t = new import_chacha20poly1305.ChaCha20Poly1305(fromString2(e2.symKey, zt)), { sealed: r3, iv: i4 } = Xi(e2.encoded), n5 = t.open(i4, r3);
  if (n5 === null) throw new Error("Failed to decrypt");
  return toString2(n5, Gr);
}
function to(e2) {
  if (Mr(e2.type) === lr) {
    if (typeof e2.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return toString2(concat([e2.type, e2.senderPublicKey, e2.iv, e2.sealed]), Jr);
  }
  return toString2(concat([e2.type, e2.iv, e2.sealed]), Jr);
}
function Xi(e2) {
  const t = fromString2(e2, Jr), r3 = t.slice(vu, Zf), i4 = Zf;
  if (Mr(r3) === lr) {
    const p5 = i4 + Wi, b5 = p5 + Vi, m5 = t.slice(i4, p5), w5 = t.slice(p5, b5), y7 = t.slice(b5);
    return { type: r3, sealed: y7, iv: w5, senderPublicKey: m5 };
  }
  const n5 = i4 + Vi, o5 = t.slice(i4, n5), h5 = t.slice(n5);
  return { type: r3, sealed: h5, iv: o5 };
}
function Mu(e2, t) {
  const r3 = Xi(e2);
  return eo({ type: Mr(r3.type), senderPublicKey: typeof r3.senderPublicKey < "u" ? toString2(r3.senderPublicKey, zt) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function eo(e2) {
  const t = (e2 == null ? void 0 : e2.type) || Yi;
  if (t === lr) {
    if (typeof (e2 == null ? void 0 : e2.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (e2 == null ? void 0 : e2.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e2 == null ? void 0 : e2.senderPublicKey, receiverPublicKey: e2 == null ? void 0 : e2.receiverPublicKey };
}
function Eu(e2) {
  return e2.type === lr && typeof e2.senderPublicKey == "string" && typeof e2.receiverPublicKey == "string";
}
var ro = "irn";
function Su(e2) {
  return (e2 == null ? void 0 : e2.relay) || { protocol: ro };
}
function Nu(e2) {
  const t = C[e2];
  if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e2}`);
  return t;
}
var Iu = Object.defineProperty;
var _u = Object.defineProperties;
var Bu = Object.getOwnPropertyDescriptors;
var io = Object.getOwnPropertySymbols;
var Cu = Object.prototype.hasOwnProperty;
var Ru = Object.prototype.propertyIsEnumerable;
var no = (e2, t, r3) => t in e2 ? Iu(e2, t, { enumerable: true, configurable: true, writable: true, value: r3 }) : e2[t] = r3;
var fo = (e2, t) => {
  for (var r3 in t || (t = {})) Cu.call(t, r3) && no(e2, r3, t[r3]);
  if (io) for (var r3 of io(t)) Ru.call(t, r3) && no(e2, r3, t[r3]);
  return e2;
};
var Ou = (e2, t) => _u(e2, Bu(t));
function oo(e2, t = "-") {
  const r3 = {}, i4 = "relay" + t;
  return Object.keys(e2).forEach((n5) => {
    if (n5.startsWith(i4)) {
      const o5 = n5.replace(i4, ""), h5 = e2[n5];
      r3[o5] = h5;
    }
  }), r3;
}
function Pu(e2) {
  e2 = e2.includes("wc://") ? e2.replace("wc://", "") : e2, e2 = e2.includes("wc:") ? e2.replace("wc:", "") : e2;
  const t = e2.indexOf(":"), r3 = e2.indexOf("?") !== -1 ? e2.indexOf("?") : void 0, i4 = e2.substring(0, t), n5 = e2.substring(t + 1, r3).split("@"), o5 = typeof r3 < "u" ? e2.substring(r3) : "", h5 = Nr.parse(o5), p5 = typeof h5.methods == "string" ? h5.methods.split(",") : void 0;
  return { protocol: i4, topic: so(n5[0]), version: parseInt(n5[1], 10), symKey: h5.symKey, relay: oo(h5), methods: p5, expiryTimestamp: h5.expiryTimestamp ? parseInt(h5.expiryTimestamp, 10) : void 0 };
}
function so(e2) {
  return e2.startsWith("//") ? e2.substring(2) : e2;
}
function ao(e2, t = "-") {
  const r3 = "relay", i4 = {};
  return Object.keys(e2).forEach((n5) => {
    const o5 = r3 + t + n5;
    e2[n5] && (i4[o5] = e2[n5]);
  }), i4;
}
function Du(e2) {
  return `${e2.protocol}:${e2.topic}@${e2.version}?` + Nr.stringify(fo(Ou(fo({ symKey: e2.symKey }, ao(e2.relay)), { expiryTimestamp: e2.expiryTimestamp }), e2.methods ? { methods: e2.methods.join(",") } : {}));
}
function $e(e2) {
  const t = [];
  return e2.forEach((r3) => {
    const [i4, n5] = r3.split(":");
    t.push(`${i4}:${n5}`);
  }), t;
}
function co(e2) {
  const t = [];
  return Object.values(e2).forEach((r3) => {
    t.push(...$e(r3.accounts));
  }), t;
}
function lo(e2, t) {
  const r3 = [];
  return Object.values(e2).forEach((i4) => {
    $e(i4.accounts).includes(t) && r3.push(...i4.methods);
  }), r3;
}
function po(e2, t) {
  const r3 = [];
  return Object.values(e2).forEach((i4) => {
    $e(i4.accounts).includes(t) && r3.push(...i4.events);
  }), r3;
}
function Zi(e2) {
  return e2.includes(":");
}
function vo(e2) {
  return Zi(e2) ? e2.split(":")[0] : e2;
}
function mo(e2) {
  const t = {};
  return e2 == null ? void 0 : e2.forEach((r3) => {
    const [i4, n5] = r3.split(":");
    t[i4] || (t[i4] = { accounts: [], chains: [], events: [] }), t[i4].accounts.push(r3), t[i4].chains.push(`${i4}:${n5}`);
  }), t;
}
function ju(e2, t) {
  t = t.map((i4) => i4.replace("did:pkh:", ""));
  const r3 = mo(t);
  for (const [i4, n5] of Object.entries(r3)) n5.methods ? n5.methods = ge(n5.methods, e2) : n5.methods = e2, n5.events = ["chainChanged", "accountsChanged"];
  return r3;
}
var go = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
var Ao = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function xe(e2, t) {
  const { message: r3, code: i4 } = Ao[e2];
  return { message: t ? `${r3} ${t}` : r3, code: i4 };
}
function tr(e2, t) {
  const { message: r3, code: i4 } = go[e2];
  return { message: t ? `${r3} ${t}` : r3, code: i4 };
}
function Er(e2, t) {
  return Array.isArray(e2) ? typeof t < "u" && e2.length ? e2.every(t) : true : false;
}
function Yr(e2) {
  return Object.getPrototypeOf(e2) === Object.prototype && Object.keys(e2).length;
}
function Pe(e2) {
  return typeof e2 > "u";
}
function Gt(e2, t) {
  return t && Pe(e2) ? true : typeof e2 == "string" && !!e2.trim().length;
}
function Vr(e2, t) {
  return t && Pe(e2) ? true : typeof e2 == "number" && !isNaN(e2);
}
function Qu(e2, t) {
  const { requiredNamespaces: r3 } = t, i4 = Object.keys(e2.namespaces), n5 = Object.keys(r3);
  let o5 = true;
  return _e(n5, i4) ? (i4.forEach((h5) => {
    const { accounts: p5, methods: b5, events: m5 } = e2.namespaces[h5], w5 = $e(p5), y7 = r3[h5];
    (!_e(_r(h5, y7), w5) || !_e(y7.methods, b5) || !_e(y7.events, m5)) && (o5 = false);
  }), o5) : false;
}
function Sr(e2) {
  return Gt(e2, false) && e2.includes(":") ? e2.split(":").length === 2 : false;
}
function bo(e2) {
  if (Gt(e2, false) && e2.includes(":")) {
    const t = e2.split(":");
    if (t.length === 3) {
      const r3 = t[0] + ":" + t[1];
      return !!t[2] && Sr(r3);
    }
  }
  return false;
}
function Ju(e2) {
  if (Gt(e2, false)) try {
    return typeof new URL(e2) < "u";
  } catch {
    return false;
  }
  return false;
}
function Gu(e2) {
  var t;
  return (t = e2 == null ? void 0 : e2.proposer) == null ? void 0 : t.publicKey;
}
function Yu(e2) {
  return e2 == null ? void 0 : e2.topic;
}
function Vu(e2, t) {
  let r3 = null;
  return Gt(e2 == null ? void 0 : e2.publicKey, false) || (r3 = xe("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r3;
}
function tn(e2) {
  let t = true;
  return Er(e2) ? e2.length && (t = e2.every((r3) => Gt(r3, false))) : t = false, t;
}
function yo(e2, t, r3) {
  let i4 = null;
  return Er(t) && t.length ? t.forEach((n5) => {
    i4 || Sr(n5) || (i4 = tr("UNSUPPORTED_CHAINS", `${r3}, chain ${n5} should be a string and conform to "namespace:chainId" format`));
  }) : Sr(e2) || (i4 = tr("UNSUPPORTED_CHAINS", `${r3}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i4;
}
function wo(e2, t, r3) {
  let i4 = null;
  return Object.entries(e2).forEach(([n5, o5]) => {
    if (i4) return;
    const h5 = yo(n5, _r(n5, o5), `${t} ${r3}`);
    h5 && (i4 = h5);
  }), i4;
}
function xo(e2, t) {
  let r3 = null;
  return Er(e2) ? e2.forEach((i4) => {
    r3 || bo(i4) || (r3 = tr("UNSUPPORTED_ACCOUNTS", `${t}, account ${i4} should be a string and conform to "namespace:chainId:address" format`));
  }) : r3 = tr("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r3;
}
function Mo(e2, t) {
  let r3 = null;
  return Object.values(e2).forEach((i4) => {
    if (r3) return;
    const n5 = xo(i4 == null ? void 0 : i4.accounts, `${t} namespace`);
    n5 && (r3 = n5);
  }), r3;
}
function Eo(e2, t) {
  let r3 = null;
  return tn(e2 == null ? void 0 : e2.methods) ? tn(e2 == null ? void 0 : e2.events) || (r3 = tr("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r3 = tr("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r3;
}
function en(e2, t) {
  let r3 = null;
  return Object.values(e2).forEach((i4) => {
    if (r3) return;
    const n5 = Eo(i4, `${t}, namespace`);
    n5 && (r3 = n5);
  }), r3;
}
function Wu(e2, t, r3) {
  let i4 = null;
  if (e2 && Yr(e2)) {
    const n5 = en(e2, t);
    n5 && (i4 = n5);
    const o5 = wo(e2, t, r3);
    o5 && (i4 = o5);
  } else i4 = xe("MISSING_OR_INVALID", `${t}, ${r3} should be an object with data`);
  return i4;
}
function So(e2, t) {
  let r3 = null;
  if (e2 && Yr(e2)) {
    const i4 = en(e2, t);
    i4 && (r3 = i4);
    const n5 = Mo(e2, t);
    n5 && (r3 = n5);
  } else r3 = xe("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r3;
}
function No(e2) {
  return Gt(e2.protocol, true);
}
function Xu(e2, t) {
  let r3 = false;
  return t && !e2 ? r3 = true : e2 && Er(e2) && e2.length && e2.forEach((i4) => {
    r3 = No(i4);
  }), r3;
}
function Zu(e2) {
  return typeof e2 == "number";
}
function $u(e2) {
  return typeof e2 < "u" && typeof e2 !== null;
}
function th(e2) {
  return !(!e2 || typeof e2 != "object" || !e2.code || !Vr(e2.code, false) || !e2.message || !Gt(e2.message, false));
}
function eh(e2) {
  return !(Pe(e2) || !Gt(e2.method, false));
}
function rh(e2) {
  return !(Pe(e2) || Pe(e2.result) && Pe(e2.error) || !Vr(e2.id, false) || !Gt(e2.jsonrpc, false));
}
function ih(e2) {
  return !(Pe(e2) || !Gt(e2.name, false));
}
function nh(e2, t) {
  return !(!Sr(t) || !co(e2).includes(t));
}
function fh(e2, t, r3) {
  return Gt(r3, false) ? lo(e2, t).includes(r3) : false;
}
function oh(e2, t, r3) {
  return Gt(r3, false) ? po(e2, t).includes(r3) : false;
}
function Io(e2, t, r3) {
  let i4 = null;
  const n5 = sh(e2), o5 = ah(t), h5 = Object.keys(n5), p5 = Object.keys(o5), b5 = _o(Object.keys(e2)), m5 = _o(Object.keys(t)), w5 = b5.filter((y7) => !m5.includes(y7));
  return w5.length && (i4 = xe("NON_CONFORMING_NAMESPACES", `${r3} namespaces keys don't satisfy requiredNamespaces.
      Required: ${w5.toString()}
      Received: ${Object.keys(t).toString()}`)), _e(h5, p5) || (i4 = xe("NON_CONFORMING_NAMESPACES", `${r3} namespaces chains don't satisfy required namespaces.
      Required: ${h5.toString()}
      Approved: ${p5.toString()}`)), Object.keys(t).forEach((y7) => {
    if (!y7.includes(":") || i4) return;
    const S5 = $e(t[y7].accounts);
    S5.includes(y7) || (i4 = xe("NON_CONFORMING_NAMESPACES", `${r3} namespaces accounts don't satisfy namespace accounts for ${y7}
        Required: ${y7}
        Approved: ${S5.toString()}`));
  }), h5.forEach((y7) => {
    i4 || (_e(n5[y7].methods, o5[y7].methods) ? _e(n5[y7].events, o5[y7].events) || (i4 = xe("NON_CONFORMING_NAMESPACES", `${r3} namespaces events don't satisfy namespace events for ${y7}`)) : i4 = xe("NON_CONFORMING_NAMESPACES", `${r3} namespaces methods don't satisfy namespace methods for ${y7}`));
  }), i4;
}
function sh(e2) {
  const t = {};
  return Object.keys(e2).forEach((r3) => {
    var i4;
    r3.includes(":") ? t[r3] = e2[r3] : (i4 = e2[r3].chains) == null || i4.forEach((n5) => {
      t[n5] = { methods: e2[r3].methods, events: e2[r3].events };
    });
  }), t;
}
function _o(e2) {
  return [...new Set(e2.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function ah(e2) {
  const t = {};
  return Object.keys(e2).forEach((r3) => {
    if (r3.includes(":")) t[r3] = e2[r3];
    else {
      const i4 = $e(e2[r3].accounts);
      i4 == null ? void 0 : i4.forEach((n5) => {
        t[n5] = { accounts: e2[r3].accounts.filter((o5) => o5.includes(`${n5}:`)), methods: e2[r3].methods, events: e2[r3].events };
      });
    }
  }), t;
}
function uh(e2, t) {
  return Vr(e2, false) && e2 <= t.max && e2 >= t.min;
}
function hh() {
  const e2 = We();
  return new Promise((t) => {
    switch (e2) {
      case qt.browser:
        t(Bo());
        break;
      case qt.reactNative:
        t(Co());
        break;
      case qt.node:
        t(Ro());
        break;
      default:
        t(true);
    }
  });
}
function Bo() {
  return pr() && (navigator == null ? void 0 : navigator.onLine);
}
async function Co() {
  if (er() && typeof global < "u" && global != null && global.NetInfo) {
    const e2 = await (global == null ? void 0 : global.NetInfo.fetch());
    return e2 == null ? void 0 : e2.isConnected;
  }
  return true;
}
function Ro() {
  return true;
}
function ch(e2) {
  switch (We()) {
    case qt.browser:
      Oo(e2);
      break;
    case qt.reactNative:
      Po(e2);
      break;
    case qt.node:
      break;
  }
}
function Oo(e2) {
  !er() && pr() && (window.addEventListener("online", () => e2(true)), window.addEventListener("offline", () => e2(false)));
}
function Po(e2) {
  er() && typeof global < "u" && global != null && global.NetInfo && (global == null ? void 0 : global.NetInfo.addEventListener((t) => e2(t == null ? void 0 : t.isConnected)));
}
var rn = {};
var lh = class {
  static get(t) {
    return rn[t];
  }
  static set(t, r3) {
    rn[t] = r3;
  }
  static delete(t) {
    delete rn[t];
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
var import_events7 = __toESM(require_events());

// node_modules/destr/dist/index.mjs
var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

// node_modules/unstorage/dist/shared/unstorage.d569726e.mjs
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify2(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify2(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === "undefined") {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
var BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base642 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base642;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys2) {
  return normalizeKey(keys2.join(":"));
}
function normalizeBaseKey(base3) {
  base3 = normalizeKey(base3);
  return base3 ? base3 + ":" : "";
}

// node_modules/unstorage/dist/index.mjs
function defineDriver(factory) {
  return factory;
}
var DRIVER_NAME = "memory";
var memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});
function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base3 of context.mountpoints) {
      if (key.startsWith(base3)) {
        return {
          base: base3,
          relativeKey: key.slice(base3.length),
          driver: context.mounts[base3]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base3, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base3) || includeParent && base3.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base3.length > mountpoint.length ? base3.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r3) => r3.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r3) => r3.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify2(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify2(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify2(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      const mounts = getMounts(base3, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey(key);
          if (!maskedMounts.some((p5) => fullKey.startsWith(p5))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p5) => !p5.startsWith(mount.mountpoint))
        ];
      }
      return base3 ? allKeys.filter(
        (key) => key.startsWith(base3) && key[key.length - 1] !== "$"
      ) : allKeys.filter((key) => key[key.length - 1] !== "$");
    },
    // Utils
    async clear(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      await Promise.all(
        getMounts(base3, false).map(async (m5) => {
          if (m5.driver.clear) {
            return asyncCall(m5.driver.clear, m5.relativeBase, opts);
          }
          if (m5.driver.removeItem) {
            const keys2 = await m5.driver.getKeys(m5.relativeBase || "", opts);
            return Promise.all(
              keys2.map((key) => m5.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base3, driver) {
      base3 = normalizeBaseKey(base3);
      if (base3 && context.mounts[base3]) {
        throw new Error(`already mounted at ${base3}`);
      }
      if (base3) {
        context.mountpoints.push(base3);
        context.mountpoints.sort((a4, b5) => b5.length - a4.length);
      }
      context.mounts[base3] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base3)).then((unwatcher) => {
          context.unwatch[base3] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base3, _dispose = true) {
      base3 = normalizeBaseKey(base3);
      if (!base3 || !context.mounts[base3]) {
        return;
      }
      if (context.watching && base3 in context.unwatch) {
        context.unwatch[base3]();
        delete context.unwatch[base3];
      }
      if (_dispose) {
        await dispose(context.mounts[base3]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base3);
      delete context.mounts[base3];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m5 = getMount(key);
      return {
        driver: m5.driver,
        base: m5.base
      };
    },
    getMounts(base3 = "", opts = {}) {
      base3 = normalizeKey(base3);
      const mounts = getMounts(base3, opts.parents);
      return mounts.map((m5) => ({
        driver: m5.driver,
        base: m5.mountpoint
      }));
    },
    // Aliases
    keys: (base3, opts = {}) => storage.getKeys(base3, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base3) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base3 + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

// node_modules/idb-keyval/dist/index.js
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  const request = indexedDB.open(dbName);
  request.onupgradeneeded = () => request.result.createObjectStore(storeName);
  const dbp = promisifyRequest(request);
  return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
var defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
function clear(customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.clear();
    return promisifyRequest(store.transaction);
  });
}
function eachCursor(store, callback) {
  store.openCursor().onsuccess = function() {
    if (!this.result)
      return;
    callback(this.result);
    this.result.continue();
  };
  return promisifyRequest(store.transaction);
}
function keys(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAllKeys) {
      return promisifyRequest(store.getAllKeys());
    }
    const items = [];
    return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
  });
}

// node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONStringify = (data) => JSON.stringify(data, (_3, value) => typeof value === "bigint" ? value.toString() + "n" : value);
var JSONParse = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_3, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse(value);
  } catch (_a2) {
    return value;
  }
}
function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSONStringify(value) || "";
}

// node_modules/@walletconnect/keyvaluestorage/dist/index.es.js
var x = "idb-keyval";
var z = (i4 = {}) => {
  const t = i4.base && i4.base.length > 0 ? `${i4.base}:` : "", e2 = (s3) => t + s3;
  let n5;
  return i4.dbName && i4.storeName && (n5 = createStore(i4.dbName, i4.storeName)), { name: x, options: i4, async hasItem(s3) {
    return !(typeof await get(e2(s3), n5) > "u");
  }, async getItem(s3) {
    return await get(e2(s3), n5) ?? null;
  }, setItem(s3, a4) {
    return set(e2(s3), a4, n5);
  }, removeItem(s3) {
    return del(e2(s3), n5);
  }, getKeys() {
    return keys(n5);
  }, clear() {
    return clear(n5);
  } };
};
var D = "WALLET_CONNECT_V2_INDEXED_DB";
var E = "keyvaluestorage";
var _ = class {
  constructor() {
    this.indexedDb = createStorage({ driver: z({ dbName: D, storeName: E }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
  }
  async getItem(t) {
    const e2 = await this.indexedDb.getItem(t);
    if (e2 !== null) return e2;
  }
  async setItem(t, e2) {
    await this.indexedDb.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var l = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var c = { exports: {} };
(function() {
  let i4;
  function t() {
  }
  i4 = t, i4.prototype.getItem = function(e2) {
    return this.hasOwnProperty(e2) ? String(this[e2]) : null;
  }, i4.prototype.setItem = function(e2, n5) {
    this[e2] = String(n5);
  }, i4.prototype.removeItem = function(e2) {
    delete this[e2];
  }, i4.prototype.clear = function() {
    const e2 = this;
    Object.keys(e2).forEach(function(n5) {
      e2[n5] = void 0, delete e2[n5];
    });
  }, i4.prototype.key = function(e2) {
    return e2 = e2 || 0, Object.keys(this)[e2];
  }, i4.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof l < "u" && l.localStorage ? c.exports = l.localStorage : typeof window < "u" && window.localStorage ? c.exports = window.localStorage : c.exports = new t();
})();
function k(i4) {
  var t;
  return [i4[0], safeJsonParse((t = i4[1]) != null ? t : "")];
}
var K2 = class {
  constructor() {
    this.localStorage = c.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(k);
  }
  async getItem(t) {
    const e2 = this.localStorage.getItem(t);
    if (e2 !== null) return safeJsonParse(e2);
  }
  async setItem(t, e2) {
    this.localStorage.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
};
var N = "wc_storage_version";
var y = 1;
var O = async (i4, t, e2) => {
  const n5 = N, s3 = await t.getItem(n5);
  if (s3 && s3 >= y) {
    e2(t);
    return;
  }
  const a4 = await i4.getKeys();
  if (!a4.length) {
    e2(t);
    return;
  }
  const m5 = [];
  for (; a4.length; ) {
    const r3 = a4.shift();
    if (!r3) continue;
    const o5 = r3.toLowerCase();
    if (o5.includes("wc@") || o5.includes("walletconnect") || o5.includes("wc_") || o5.includes("wallet_connect")) {
      const f5 = await i4.getItem(r3);
      await t.setItem(r3, f5), m5.push(r3);
    }
  }
  await t.setItem(n5, y), e2(t), j2(i4, m5);
};
var j2 = async (i4, t) => {
  t.length && t.forEach(async (e2) => {
    await i4.removeItem(e2);
  });
};
var h = class {
  constructor() {
    this.initialized = false, this.setInitialized = (e2) => {
      this.storage = e2, this.initialized = true;
    };
    const t = new K2();
    this.storage = t;
    try {
      const e2 = new _();
      O(t, e2, this.setInitialized);
    } catch {
      this.initialized = true;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, e2) {
    return await this.initialize(), this.storage.setItem(t, e2);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized || await new Promise((t) => {
      const e2 = setInterval(() => {
        this.initialized && (clearInterval(e2), t());
      }, 20);
    });
  }
};

// node_modules/@walletconnect/heartbeat/dist/index.es.js
var import_events = __toESM(require_events());
var import_time2 = __toESM(require_cjs());

// node_modules/@walletconnect/events/dist/esm/events.js
var IEvents = class {
};

// node_modules/@walletconnect/heartbeat/dist/index.es.js
var n = class extends IEvents {
  constructor(e2) {
    super();
  }
};
var s = import_time2.FIVE_SECONDS;
var r = { pulse: "heartbeat_pulse" };
var i = class _i2 extends n {
  constructor(e2) {
    super(e2), this.events = new import_events.EventEmitter(), this.interval = s, this.interval = (e2 == null ? void 0 : e2.interval) || s;
  }
  static async init(e2) {
    const t = new _i2(e2);
    return await t.init(), t;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async initialize() {
    this.intervalRef = setInterval(() => this.pulse(), (0, import_time2.toMiliseconds)(this.interval));
  }
  pulse() {
    this.events.emit(r.pulse);
  }
};

// node_modules/@walletconnect/logger/dist/index.es.js
var import_pino = __toESM(require_browser2());
var import_pino2 = __toESM(require_browser2());
var c2 = { level: "info" };
var n2 = "custom_context";
var l3 = 1e3 * 1024;
var O2 = class {
  constructor(e2) {
    this.nodeValue = e2, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
};
var d = class {
  constructor(e2) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e2, this.sizeInBytes = 0;
  }
  append(e2) {
    const t = new O2(e2);
    if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e2} with size ${t.size}`);
    for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
  }
  shift() {
    if (!this.head) return;
    const e2 = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e2.size;
  }
  toArray() {
    const e2 = [];
    let t = this.head;
    for (; t !== null; ) e2.push(t.value), t = t.next;
    return e2;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e2 = this.head;
    return { next: () => {
      if (!e2) return { done: true, value: null };
      const t = e2.value;
      return e2 = e2.next, { done: false, value: t };
    } };
  }
};
var L2 = class {
  constructor(e2, t = l3) {
    this.level = e2 ?? "error", this.levelValue = import_pino.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new d(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e2, t) {
    t === import_pino.levels.values.error ? console.error(e2) : t === import_pino.levels.values.warn ? console.warn(e2) : t === import_pino.levels.values.debug ? console.debug(e2) : t === import_pino.levels.values.trace ? console.trace(e2) : console.log(e2);
  }
  appendToLogs(e2) {
    this.logs.append(safeJsonStringify({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e2 }));
    const t = typeof e2 == "string" ? JSON.parse(e2).level : e2.level;
    t >= this.levelValue && this.forwardToConsole(e2, t);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new d(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e2) {
    const t = this.getLogArray();
    return t.push(safeJsonStringify({ extraMetadata: e2 })), new Blob(t, { type: "application/json" });
  }
};
var m = class {
  constructor(e2, t = l3) {
    this.baseChunkLogger = new L2(e2, t);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
  downloadLogsBlobInBrowser(e2) {
    const t = URL.createObjectURL(this.logsToBlob(e2)), o5 = document.createElement("a");
    o5.href = t, o5.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(o5), o5.click(), document.body.removeChild(o5), URL.revokeObjectURL(t);
  }
};
var B = class {
  constructor(e2, t = l3) {
    this.baseChunkLogger = new L2(e2, t);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
};
var x2 = Object.defineProperty;
var S = Object.defineProperties;
var _2 = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty;
var z2 = Object.prototype.propertyIsEnumerable;
var f = (r3, e2, t) => e2 in r3 ? x2(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var i2 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) T.call(e2, t) && f(r3, t, e2[t]);
  if (p) for (var t of p(e2)) z2.call(e2, t) && f(r3, t, e2[t]);
  return r3;
};
var g = (r3, e2) => S(r3, _2(e2));
function k2(r3) {
  return g(i2({}, r3), { level: (r3 == null ? void 0 : r3.level) || c2.level });
}
function v(r3, e2 = n2) {
  return r3[e2] || "";
}
function b(r3, e2, t = n2) {
  return r3[t] = e2, r3;
}
function y2(r3, e2 = n2) {
  let t = "";
  return typeof r3.bindings > "u" ? t = v(r3, e2) : t = r3.bindings().context || "", t;
}
function w(r3, e2, t = n2) {
  const o5 = y2(r3, t);
  return o5.trim() ? `${o5}/${e2}` : e2;
}
function E2(r3, e2, t = n2) {
  const o5 = w(r3, e2, t), a4 = r3.child({ context: o5 });
  return b(a4, o5, t);
}
function C2(r3) {
  var e2, t;
  const o5 = new m((e2 = r3.opts) == null ? void 0 : e2.level, r3.maxSizeInBytes);
  return { logger: (0, import_pino.default)(g(i2({}, r3.opts), { level: "trace", browser: g(i2({}, (t = r3.opts) == null ? void 0 : t.browser), { write: (a4) => o5.write(a4) }) })), chunkLoggerController: o5 };
}
function I(r3) {
  var e2;
  const t = new B((e2 = r3.opts) == null ? void 0 : e2.level, r3.maxSizeInBytes);
  return { logger: (0, import_pino.default)(g(i2({}, r3.opts), { level: "trace" }), t), chunkLoggerController: t };
}
function A(r3) {
  return typeof r3.loggerOverride < "u" && typeof r3.loggerOverride != "string" ? { logger: r3.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? C2(r3) : I(r3);
}

// node_modules/@walletconnect/types/dist/index.es.js
var import_events4 = __toESM(require_events());
var n3 = class extends IEvents {
  constructor(s3) {
    super(), this.opts = s3, this.protocol = "wc", this.version = 2;
  }
};
var h3 = class extends IEvents {
  constructor(s3, t) {
    super(), this.core = s3, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
};
var a2 = class {
  constructor(s3, t) {
    this.logger = s3, this.core = t;
  }
};
var u = class extends IEvents {
  constructor(s3, t) {
    super(), this.relayer = s3, this.logger = t;
  }
};
var g2 = class extends IEvents {
  constructor(s3) {
    super();
  }
};
var p2 = class {
  constructor(s3, t, o5, M4) {
    this.core = s3, this.logger = t, this.name = o5;
  }
};
var d2 = class extends IEvents {
  constructor(s3, t) {
    super(), this.relayer = s3, this.logger = t;
  }
};
var E3 = class extends IEvents {
  constructor(s3, t) {
    super(), this.core = s3, this.logger = t;
  }
};
var y3 = class {
  constructor(s3, t) {
    this.projectId = s3, this.logger = t;
  }
};
var v2 = class {
  constructor(s3, t) {
    this.projectId = s3, this.logger = t;
  }
};
var b2 = class {
  constructor(s3) {
    this.opts = s3, this.protocol = "wc", this.version = 2;
  }
};
var w2 = class {
  constructor(s3) {
    this.client = s3;
  }
};

// node_modules/@walletconnect/relay-auth/dist/esm/api.js
var ed25519 = __toESM(require_ed25519());
var import_random2 = __toESM(require_random());
var import_time3 = __toESM(require_cjs());

// node_modules/@walletconnect/relay-auth/dist/esm/constants.js
var JWT_IRIDIUM_ALG = "EdDSA";
var JWT_IRIDIUM_TYP = "JWT";
var JWT_DELIMITER = ".";
var JWT_ENCODING = "base64url";
var JSON_ENCODING = "utf8";
var DATA_ENCODING = "utf8";
var DID_DELIMITER = ":";
var DID_PREFIX = "did";
var DID_METHOD = "key";
var MULTICODEC_ED25519_ENCODING = "base58btc";
var MULTICODEC_ED25519_BASE = "z";
var MULTICODEC_ED25519_HEADER = "K36";
var KEY_PAIR_SEED_LENGTH = 32;

// node_modules/@walletconnect/relay-auth/dist/esm/utils.js
function encodeJSON(val) {
  return toString2(fromString2(safeJsonStringify(val), JSON_ENCODING), JWT_ENCODING);
}
function encodeIss(publicKey) {
  const header = fromString2(MULTICODEC_ED25519_HEADER, MULTICODEC_ED25519_ENCODING);
  const multicodec = MULTICODEC_ED25519_BASE + toString2(concat([header, publicKey]), MULTICODEC_ED25519_ENCODING);
  return [DID_PREFIX, DID_METHOD, multicodec].join(DID_DELIMITER);
}
function encodeSig(bytes) {
  return toString2(bytes, JWT_ENCODING);
}
function encodeData(params) {
  return fromString2([encodeJSON(params.header), encodeJSON(params.payload)].join(JWT_DELIMITER), DATA_ENCODING);
}
function encodeJWT(params) {
  return [
    encodeJSON(params.header),
    encodeJSON(params.payload),
    encodeSig(params.signature)
  ].join(JWT_DELIMITER);
}

// node_modules/@walletconnect/relay-auth/dist/esm/api.js
function generateKeyPair2(seed = (0, import_random2.randomBytes)(KEY_PAIR_SEED_LENGTH)) {
  return ed25519.generateKeyPairFromSeed(seed);
}
async function signJWT(sub, aud, ttl, keyPair, iat = (0, import_time3.fromMiliseconds)(Date.now())) {
  const header = { alg: JWT_IRIDIUM_ALG, typ: JWT_IRIDIUM_TYP };
  const iss = encodeIss(keyPair.publicKey);
  const exp = iat + ttl;
  const payload = { iss, sub, aud, iat, exp };
  const data = encodeData({ header, payload });
  const signature = ed25519.sign(keyPair.secretKey, data);
  return encodeJWT({ header, payload, signature });
}

// node_modules/@walletconnect/core/dist/index.es.js
var import_time4 = __toESM(require_cjs());

// node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
var import_events5 = __toESM(require_events());

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  DEFAULT_ERROR: () => DEFAULT_ERROR,
  IBaseJsonRpcProvider: () => n4,
  IEvents: () => e,
  IJsonRpcConnection: () => o2,
  IJsonRpcProvider: () => r2,
  INTERNAL_ERROR: () => INTERNAL_ERROR,
  INVALID_PARAMS: () => INVALID_PARAMS,
  INVALID_REQUEST: () => INVALID_REQUEST,
  METHOD_NOT_FOUND: () => METHOD_NOT_FOUND,
  PARSE_ERROR: () => PARSE_ERROR,
  RESERVED_ERROR_CODES: () => RESERVED_ERROR_CODES,
  SERVER_ERROR: () => SERVER_ERROR,
  SERVER_ERROR_CODE_RANGE: () => SERVER_ERROR_CODE_RANGE,
  STANDARD_ERROR_MAP: () => STANDARD_ERROR_MAP,
  formatErrorMessage: () => formatErrorMessage,
  formatJsonRpcError: () => formatJsonRpcError,
  formatJsonRpcRequest: () => formatJsonRpcRequest,
  formatJsonRpcResult: () => formatJsonRpcResult,
  getBigIntRpcId: () => getBigIntRpcId,
  getError: () => getError,
  getErrorByCode: () => getErrorByCode,
  isHttpUrl: () => isHttpUrl,
  isJsonRpcError: () => isJsonRpcError,
  isJsonRpcPayload: () => isJsonRpcPayload,
  isJsonRpcRequest: () => isJsonRpcRequest,
  isJsonRpcResponse: () => isJsonRpcResponse,
  isJsonRpcResult: () => isJsonRpcResult,
  isJsonRpcValidationInvalid: () => isJsonRpcValidationInvalid,
  isLocalhostUrl: () => isLocalhostUrl,
  isNodeJs: () => isNodeJs,
  isReservedErrorCode: () => isReservedErrorCode,
  isServerErrorCode: () => isServerErrorCode,
  isValidDefaultRoute: () => isValidDefaultRoute,
  isValidErrorCode: () => isValidErrorCode,
  isValidLeadingWildcardRoute: () => isValidLeadingWildcardRoute,
  isValidRoute: () => isValidRoute,
  isValidTrailingWildcardRoute: () => isValidTrailingWildcardRoute,
  isValidWildcardRoute: () => isValidWildcardRoute,
  isWsUrl: () => isWsUrl,
  parseConnectionError: () => parseConnectionError,
  payloadId: () => payloadId,
  validateJsonRpcError: () => validateJsonRpcError
});

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js
var PARSE_ERROR = "PARSE_ERROR";
var INVALID_REQUEST = "INVALID_REQUEST";
var METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
var INVALID_PARAMS = "INVALID_PARAMS";
var INTERNAL_ERROR = "INTERNAL_ERROR";
var SERVER_ERROR = "SERVER_ERROR";
var RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
var SERVER_ERROR_CODE_RANGE = [-32e3, -32099];
var STANDARD_ERROR_MAP = {
  [PARSE_ERROR]: { code: -32700, message: "Parse error" },
  [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
  [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
  [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
  [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
  [SERVER_ERROR]: { code: -32e3, message: "Server error" }
};
var DEFAULT_ERROR = SERVER_ERROR;

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js
function isServerErrorCode(code2) {
  return code2 <= SERVER_ERROR_CODE_RANGE[0] && code2 >= SERVER_ERROR_CODE_RANGE[1];
}
function isReservedErrorCode(code2) {
  return RESERVED_ERROR_CODES.includes(code2);
}
function isValidErrorCode(code2) {
  return typeof code2 === "number";
}
function getError(type) {
  if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code2) {
  const match = Object.values(STANDARD_ERROR_MAP).find((e2) => e2.code === code2);
  if (!match) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return match;
}
function validateJsonRpcError(response) {
  if (typeof response.error.code === "undefined") {
    return { valid: false, error: "Missing code for JSON-RPC error" };
  }
  if (typeof response.error.message === "undefined") {
    return { valid: false, error: "Missing message for JSON-RPC error" };
  }
  if (!isValidErrorCode(response.error.code)) {
    return {
      valid: false,
      error: `Invalid error code type for JSON-RPC: ${response.error.code}`
    };
  }
  if (isReservedErrorCode(response.error.code)) {
    const error = getErrorByCode(response.error.code);
    if (error.message !== STANDARD_ERROR_MAP[DEFAULT_ERROR].message && response.error.message === error.message) {
      return {
        valid: false,
        error: `Invalid error code message for JSON-RPC: ${response.error.code}`
      };
    }
  }
  return { valid: true };
}
function parseConnectionError(e2, url, type) {
  return e2.message.includes("getaddrinfo ENOTFOUND") || e2.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e2;
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js
var env_exports = {};
__export(env_exports, {
  isNodeJs: () => isNodeJs
});
var import_environment = __toESM(require_cjs4());
__reExport(env_exports, __toESM(require_cjs4()));
var isNodeJs = import_environment.isNode;

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
__reExport(esm_exports, env_exports);

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js
function payloadId(entropy = 3) {
  const date = Date.now() * Math.pow(10, entropy);
  const extra = Math.floor(Math.random() * Math.pow(10, entropy));
  return date + extra;
}
function getBigIntRpcId(entropy = 6) {
  return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
  return {
    id: id || payloadId(),
    jsonrpc: "2.0",
    method,
    params
  };
}
function formatJsonRpcResult(id, result) {
  return {
    id,
    jsonrpc: "2.0",
    result
  };
}
function formatJsonRpcError(id, error, data) {
  return {
    id,
    jsonrpc: "2.0",
    error: formatErrorMessage(error, data)
  };
}
function formatErrorMessage(error, data) {
  if (typeof error === "undefined") {
    return getError(INTERNAL_ERROR);
  }
  if (typeof error === "string") {
    error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
  }
  if (typeof data !== "undefined") {
    error.data = data;
  }
  if (isReservedErrorCode(error.code)) {
    error = getErrorByCode(error.code);
  }
  return error;
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js
function isValidRoute(route) {
  if (route.includes("*")) {
    return isValidWildcardRoute(route);
  }
  if (/\W/g.test(route)) {
    return false;
  }
  return true;
}
function isValidDefaultRoute(route) {
  return route === "*";
}
function isValidWildcardRoute(route) {
  if (isValidDefaultRoute(route)) {
    return true;
  }
  if (!route.includes("*")) {
    return false;
  }
  if (route.split("*").length !== 2) {
    return false;
  }
  if (route.split("*").filter((x3) => x3.trim() === "").length !== 1) {
    return false;
  }
  return true;
}
function isValidLeadingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
}
function isValidTrailingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
}

// node_modules/@walletconnect/jsonrpc-types/dist/index.es.js
var e = class {
};
var o2 = class extends e {
  constructor(c6) {
    super();
  }
};
var n4 = class extends e {
  constructor() {
    super();
  }
};
var r2 = class extends n4 {
  constructor(c6) {
    super();
  }
};

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js
var HTTP_REGEX = "^https?:";
var WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
  const matches = url.match(new RegExp(/^\w+:/, "gi"));
  if (!matches || !matches.length)
    return;
  return matches[0];
}
function matchRegexProtocol(url, regex) {
  const protocol = getUrlProtocol(url);
  if (typeof protocol === "undefined")
    return false;
  return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
  return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
  return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js
function isJsonRpcPayload(payload) {
  return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
  return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
  return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
  return "result" in payload;
}
function isJsonRpcError(payload) {
  return "error" in payload;
}
function isJsonRpcValidationInvalid(validation) {
  return "error" in validation && validation.valid === false;
}

// node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
var o3 = class extends r2 {
  constructor(t) {
    super(t), this.events = new import_events5.EventEmitter(), this.hasRegisteredEventListeners = false, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, e2) {
    this.events.on(t, e2);
  }
  once(t, e2) {
    this.events.once(t, e2);
  }
  off(t, e2) {
    this.events.off(t, e2);
  }
  removeListener(t, e2) {
    this.events.removeListener(t, e2);
  }
  async request(t, e2) {
    return this.requestStrict(formatJsonRpcRequest(t.method, t.params || [], t.id || getBigIntRpcId().toString()), e2);
  }
  async requestStrict(t, e2) {
    return new Promise(async (i4, s3) => {
      if (!this.connection.connected) try {
        await this.open();
      } catch (n5) {
        s3(n5);
      }
      this.events.on(`${t.id}`, (n5) => {
        isJsonRpcError(n5) ? s3(n5.error) : i4(n5.result);
      });
      try {
        await this.connection.send(t, e2);
      } catch (n5) {
        s3(n5);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), isJsonRpcResponse(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = true);
  }
};

// node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
var import_events6 = __toESM(require_events());
var w3 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require_browser3();
var b3 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u";
var a3 = (c6) => c6.split("?")[0];
var h4 = 10;
var S2 = w3();
var f2 = class {
  constructor(e2) {
    if (this.url = e2, this.events = new import_events6.EventEmitter(), this.registering = false, !isWsUrl(e2)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
    this.url = e2;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async open(e2 = this.url) {
    await this.register(e2);
  }
  async close() {
    return new Promise((e2, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n5) => {
        this.onClose(n5), e2();
      }, this.socket.close();
    });
  }
  async send(e2) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(safeJsonStringify(e2));
    } catch (t) {
      this.onError(e2.id, t);
    }
  }
  register(e2 = this.url) {
    if (!isWsUrl(e2)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n5, o5) => {
        this.events.once("register_error", (s3) => {
          this.resetMaxListeners(), o5(s3);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u") return o5(new Error("WebSocket connection is missing or invalid"));
          n5(this.socket);
        });
      });
    }
    return this.url = e2, this.registering = true, new Promise((t, n5) => {
      const o5 = new URLSearchParams(e2).get("origin"), s3 = (0, esm_exports.isReactNative)() ? { headers: { origin: o5 } } : { rejectUnauthorized: !isLocalhostUrl(e2) }, i4 = new S2(e2, [], s3);
      b3() ? i4.onerror = (r3) => {
        const l5 = r3;
        n5(this.emitError(l5.error));
      } : i4.on("error", (r3) => {
        n5(this.emitError(r3));
      }), i4.onopen = () => {
        this.onOpen(i4), t(i4);
      };
    });
  }
  onOpen(e2) {
    e2.onmessage = (t) => this.onPayload(t), e2.onclose = (t) => this.onClose(t), this.socket = e2, this.registering = false, this.events.emit("open");
  }
  onClose(e2) {
    this.socket = void 0, this.registering = false, this.events.emit("close", e2);
  }
  onPayload(e2) {
    if (typeof e2.data > "u") return;
    const t = typeof e2.data == "string" ? safeJsonParse(e2.data) : e2.data;
    this.events.emit("payload", t);
  }
  onError(e2, t) {
    const n5 = this.parseError(t), o5 = n5.message || n5.toString(), s3 = formatJsonRpcError(e2, o5);
    this.events.emit("payload", s3);
  }
  parseError(e2, t = this.url) {
    return parseConnectionError(e2, a3(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > h4 && this.events.setMaxListeners(h4);
  }
  emitError(e2) {
    const t = this.parseError(new Error((e2 == null ? void 0 : e2.message) || `WebSocket connection failed for host: ${a3(this.url)}`));
    return this.events.emit("register_error", t), t;
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
var import_lodash = __toESM(require_lodash());
var import_isomorphic_unfetch = __toESM(require_browser4());
function Hi2(n5, e2) {
  if (n5.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i4 = 0; i4 < t.length; i4++) t[i4] = 255;
  for (var s3 = 0; s3 < n5.length; s3++) {
    var r3 = n5.charAt(s3), o5 = r3.charCodeAt(0);
    if (t[o5] !== 255) throw new TypeError(r3 + " is ambiguous");
    t[o5] = s3;
  }
  var a4 = n5.length, h5 = n5.charAt(0), l5 = Math.log(a4) / Math.log(256), d4 = Math.log(256) / Math.log(a4);
  function g5(u4) {
    if (u4 instanceof Uint8Array || (ArrayBuffer.isView(u4) ? u4 = new Uint8Array(u4.buffer, u4.byteOffset, u4.byteLength) : Array.isArray(u4) && (u4 = Uint8Array.from(u4))), !(u4 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (u4.length === 0) return "";
    for (var p5 = 0, T4 = 0, D4 = 0, P2 = u4.length; D4 !== P2 && u4[D4] === 0; ) D4++, p5++;
    for (var x3 = (P2 - D4) * d4 + 1 >>> 0, w5 = new Uint8Array(x3); D4 !== P2; ) {
      for (var O5 = u4[D4], N11 = 0, _3 = x3 - 1; (O5 !== 0 || N11 < T4) && _3 !== -1; _3--, N11++) O5 += 256 * w5[_3] >>> 0, w5[_3] = O5 % a4 >>> 0, O5 = O5 / a4 >>> 0;
      if (O5 !== 0) throw new Error("Non-zero carry");
      T4 = N11, D4++;
    }
    for (var A3 = x3 - T4; A3 !== x3 && w5[A3] === 0; ) A3++;
    for (var G = h5.repeat(p5); A3 < x3; ++A3) G += n5.charAt(w5[A3]);
    return G;
  }
  function m5(u4) {
    if (typeof u4 != "string") throw new TypeError("Expected String");
    if (u4.length === 0) return new Uint8Array();
    var p5 = 0;
    if (u4[p5] !== " ") {
      for (var T4 = 0, D4 = 0; u4[p5] === h5; ) T4++, p5++;
      for (var P2 = (u4.length - p5) * l5 + 1 >>> 0, x3 = new Uint8Array(P2); u4[p5]; ) {
        var w5 = t[u4.charCodeAt(p5)];
        if (w5 === 255) return;
        for (var O5 = 0, N11 = P2 - 1; (w5 !== 0 || O5 < D4) && N11 !== -1; N11--, O5++) w5 += a4 * x3[N11] >>> 0, x3[N11] = w5 % 256 >>> 0, w5 = w5 / 256 >>> 0;
        if (w5 !== 0) throw new Error("Non-zero carry");
        D4 = O5, p5++;
      }
      if (u4[p5] !== " ") {
        for (var _3 = P2 - D4; _3 !== P2 && x3[_3] === 0; ) _3++;
        for (var A3 = new Uint8Array(T4 + (P2 - _3)), G = T4; _3 !== P2; ) A3[G++] = x3[_3++];
        return A3;
      }
    }
  }
  function L6(u4) {
    var p5 = m5(u4);
    if (p5) return p5;
    throw new Error(`Non-${e2} character`);
  }
  return { encode: g5, decodeUnsafe: m5, decode: L6 };
}
var Yi2 = Hi2;
var Ji2 = Yi2;
var Ne = (n5) => {
  if (n5 instanceof Uint8Array && n5.constructor.name === "Uint8Array") return n5;
  if (n5 instanceof ArrayBuffer) return new Uint8Array(n5);
  if (ArrayBuffer.isView(n5)) return new Uint8Array(n5.buffer, n5.byteOffset, n5.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var Xi2 = (n5) => new TextEncoder().encode(n5);
var Wi2 = (n5) => new TextDecoder().decode(n5);
var Qi2 = class {
  constructor(e2, t, i4) {
    this.name = e2, this.prefix = t, this.baseEncode = i4;
  }
  encode(e2) {
    if (e2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e2)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var Zi2 = class {
  constructor(e2, t, i4) {
    if (this.name = e2, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i4;
  }
  decode(e2) {
    if (typeof e2 == "string") {
      if (e2.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e2.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e2) {
    return Le(this, e2);
  }
};
var es2 = class {
  constructor(e2) {
    this.decoders = e2;
  }
  or(e2) {
    return Le(this, e2);
  }
  decode(e2) {
    const t = e2[0], i4 = this.decoders[t];
    if (i4) return i4.decode(e2);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var Le = (n5, e2) => new es2({ ...n5.decoders || { [n5.prefix]: n5 }, ...e2.decoders || { [e2.prefix]: e2 } });
var ts2 = class {
  constructor(e2, t, i4, s3) {
    this.name = e2, this.prefix = t, this.baseEncode = i4, this.baseDecode = s3, this.encoder = new Qi2(e2, t, i4), this.decoder = new Zi2(e2, t, s3);
  }
  encode(e2) {
    return this.encoder.encode(e2);
  }
  decode(e2) {
    return this.decoder.decode(e2);
  }
};
var W = ({ name: n5, prefix: e2, encode: t, decode: i4 }) => new ts2(n5, e2, t, i4);
var K3 = ({ prefix: n5, name: e2, alphabet: t }) => {
  const { encode: i4, decode: s3 } = Ji2(t, e2);
  return W({ prefix: n5, name: e2, encode: i4, decode: (r3) => Ne(s3(r3)) });
};
var is2 = (n5, e2, t, i4) => {
  const s3 = {};
  for (let d4 = 0; d4 < e2.length; ++d4) s3[e2[d4]] = d4;
  let r3 = n5.length;
  for (; n5[r3 - 1] === "="; ) --r3;
  const o5 = new Uint8Array(r3 * t / 8 | 0);
  let a4 = 0, h5 = 0, l5 = 0;
  for (let d4 = 0; d4 < r3; ++d4) {
    const g5 = s3[n5[d4]];
    if (g5 === void 0) throw new SyntaxError(`Non-${i4} character`);
    h5 = h5 << t | g5, a4 += t, a4 >= 8 && (a4 -= 8, o5[l5++] = 255 & h5 >> a4);
  }
  if (a4 >= t || 255 & h5 << 8 - a4) throw new SyntaxError("Unexpected end of data");
  return o5;
};
var ss2 = (n5, e2, t) => {
  const i4 = e2[e2.length - 1] === "=", s3 = (1 << t) - 1;
  let r3 = "", o5 = 0, a4 = 0;
  for (let h5 = 0; h5 < n5.length; ++h5) for (a4 = a4 << 8 | n5[h5], o5 += 8; o5 > t; ) o5 -= t, r3 += e2[s3 & a4 >> o5];
  if (o5 && (r3 += e2[s3 & a4 << t - o5]), i4) for (; r3.length * t & 7; ) r3 += "=";
  return r3;
};
var y5 = ({ name: n5, prefix: e2, bitsPerChar: t, alphabet: i4 }) => W({ prefix: e2, name: n5, encode(s3) {
  return ss2(s3, i4, t);
}, decode(s3) {
  return is2(s3, i4, t, n5);
} });
var rs2 = W({ prefix: "\0", name: "identity", encode: (n5) => Wi2(n5), decode: (n5) => Xi2(n5) });
var ns2 = Object.freeze({ __proto__: null, identity: rs2 });
var os2 = y5({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var as2 = Object.freeze({ __proto__: null, base2: os2 });
var hs2 = y5({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var cs2 = Object.freeze({ __proto__: null, base8: hs2 });
var ls2 = K3({ prefix: "9", name: "base10", alphabet: "0123456789" });
var us2 = Object.freeze({ __proto__: null, base10: ls2 });
var ds2 = y5({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var gs2 = y5({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var ps2 = Object.freeze({ __proto__: null, base16: ds2, base16upper: gs2 });
var Ds2 = y5({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var ys2 = y5({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var ms2 = y5({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var bs2 = y5({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var fs2 = y5({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var Es2 = y5({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var ws2 = y5({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var vs2 = y5({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var Is2 = y5({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Cs2 = Object.freeze({ __proto__: null, base32: Ds2, base32upper: ys2, base32pad: ms2, base32padupper: bs2, base32hex: fs2, base32hexupper: Es2, base32hexpad: ws2, base32hexpadupper: vs2, base32z: Is2 });
var Ts2 = K3({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var _s2 = K3({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Rs2 = Object.freeze({ __proto__: null, base36: Ts2, base36upper: _s2 });
var Ss2 = K3({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var Ps2 = K3({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var xs2 = Object.freeze({ __proto__: null, base58btc: Ss2, base58flickr: Ps2 });
var Os2 = y5({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var As2 = y5({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var zs2 = y5({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var Ns2 = y5({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Ls2 = Object.freeze({ __proto__: null, base64: Os2, base64pad: As2, base64url: zs2, base64urlpad: Ns2 });
var Ue = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var Us2 = Ue.reduce((n5, e2, t) => (n5[t] = e2, n5), []);
var Fs2 = Ue.reduce((n5, e2, t) => (n5[e2.codePointAt(0)] = t, n5), []);
function $s2(n5) {
  return n5.reduce((e2, t) => (e2 += Us2[t], e2), "");
}
function Ms2(n5) {
  const e2 = [];
  for (const t of n5) {
    const i4 = Fs2[t.codePointAt(0)];
    if (i4 === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e2.push(i4);
  }
  return new Uint8Array(e2);
}
var Bs2 = W({ prefix: "🚀", name: "base256emoji", encode: $s2, decode: Ms2 });
var ks2 = Object.freeze({ __proto__: null, base256emoji: Bs2 });
var Ks2 = $e2;
var Fe = 128;
var qs2 = 127;
var Vs2 = ~qs2;
var js2 = Math.pow(2, 31);
function $e2(n5, e2, t) {
  e2 = e2 || [], t = t || 0;
  for (var i4 = t; n5 >= js2; ) e2[t++] = n5 & 255 | Fe, n5 /= 128;
  for (; n5 & Vs2; ) e2[t++] = n5 & 255 | Fe, n5 >>>= 7;
  return e2[t] = n5 | 0, $e2.bytes = t - i4 + 1, e2;
}
var Gs2 = ue2;
var Hs2 = 128;
var Me = 127;
function ue2(n5, i4) {
  var t = 0, i4 = i4 || 0, s3 = 0, r3 = i4, o5, a4 = n5.length;
  do {
    if (r3 >= a4) throw ue2.bytes = 0, new RangeError("Could not decode varint");
    o5 = n5[r3++], t += s3 < 28 ? (o5 & Me) << s3 : (o5 & Me) * Math.pow(2, s3), s3 += 7;
  } while (o5 >= Hs2);
  return ue2.bytes = r3 - i4, t;
}
var Ys2 = Math.pow(2, 7);
var Js2 = Math.pow(2, 14);
var Xs2 = Math.pow(2, 21);
var Ws2 = Math.pow(2, 28);
var Qs2 = Math.pow(2, 35);
var Zs2 = Math.pow(2, 42);
var er2 = Math.pow(2, 49);
var tr2 = Math.pow(2, 56);
var ir2 = Math.pow(2, 63);
var sr2 = function(n5) {
  return n5 < Ys2 ? 1 : n5 < Js2 ? 2 : n5 < Xs2 ? 3 : n5 < Ws2 ? 4 : n5 < Qs2 ? 5 : n5 < Zs2 ? 6 : n5 < er2 ? 7 : n5 < tr2 ? 8 : n5 < ir2 ? 9 : 10;
};
var rr2 = { encode: Ks2, decode: Gs2, encodingLength: sr2 };
var Be2 = rr2;
var ke = (n5, e2, t = 0) => (Be2.encode(n5, e2, t), e2);
var Ke = (n5) => Be2.encodingLength(n5);
var de2 = (n5, e2) => {
  const t = e2.byteLength, i4 = Ke(n5), s3 = i4 + Ke(t), r3 = new Uint8Array(s3 + t);
  return ke(n5, r3, 0), ke(t, r3, i4), r3.set(e2, s3), new nr2(n5, t, e2, r3);
};
var nr2 = class {
  constructor(e2, t, i4, s3) {
    this.code = e2, this.size = t, this.digest = i4, this.bytes = s3;
  }
};
var qe = ({ name: n5, code: e2, encode: t }) => new or3(n5, e2, t);
var or3 = class {
  constructor(e2, t, i4) {
    this.name = e2, this.code = t, this.encode = i4;
  }
  digest(e2) {
    if (e2 instanceof Uint8Array) {
      const t = this.encode(e2);
      return t instanceof Uint8Array ? de2(this.code, t) : t.then((i4) => de2(this.code, i4));
    } else throw Error("Unknown type, must be binary type");
  }
};
var Ve = (n5) => async (e2) => new Uint8Array(await crypto.subtle.digest(n5, e2));
var ar2 = qe({ name: "sha2-256", code: 18, encode: Ve("SHA-256") });
var hr2 = qe({ name: "sha2-512", code: 19, encode: Ve("SHA-512") });
var cr2 = Object.freeze({ __proto__: null, sha256: ar2, sha512: hr2 });
var je = 0;
var lr2 = "identity";
var Ge = Ne;
var ur2 = (n5) => de2(je, Ge(n5));
var dr2 = { code: je, name: lr2, encode: Ge, digest: ur2 };
var gr2 = Object.freeze({ __proto__: null, identity: dr2 });
new TextEncoder(), new TextDecoder();
var He = { ...ns2, ...as2, ...cs2, ...us2, ...ps2, ...Cs2, ...Rs2, ...xs2, ...Ls2, ...ks2 };
({ ...cr2, ...gr2 });
function pr2(n5 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(n5) : new Uint8Array(n5);
}
function Ye(n5, e2, t, i4) {
  return { name: n5, prefix: e2, encoder: { name: n5, prefix: e2, encode: t }, decoder: { decode: i4 } };
}
var Je = Ye("utf8", "u", (n5) => "u" + new TextDecoder("utf8").decode(n5), (n5) => new TextEncoder().encode(n5.substring(1)));
var ge2 = Ye("ascii", "a", (n5) => {
  let e2 = "a";
  for (let t = 0; t < n5.length; t++) e2 += String.fromCharCode(n5[t]);
  return e2;
}, (n5) => {
  n5 = n5.substring(1);
  const e2 = pr2(n5.length);
  for (let t = 0; t < n5.length; t++) e2[t] = n5.charCodeAt(t);
  return e2;
});
var Dr2 = { utf8: Je, "utf-8": Je, hex: He.base16, latin1: ge2, ascii: ge2, binary: ge2, ...He };
function yr2(n5, e2 = "utf8") {
  const t = Dr2[e2];
  if (!t) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(n5, "utf8") : t.decoder.decode(`${t.prefix}${n5}`);
}
var pe2 = "wc";
var Xe2 = 2;
var Q2 = "core";
var z3 = `${pe2}@2:${Q2}:`;
var We2 = { name: Q2, logger: "error" };
var Qe = { database: ":memory:" };
var Ze2 = "crypto";
var De = "client_ed25519_seed";
var et = import_time4.ONE_DAY;
var tt = "keychain";
var it = "0.3";
var st = "messages";
var rt = "0.3";
var nt = import_time4.SIX_HOURS;
var ot = "publisher";
var at = "irn";
var ht = "error";
var ye2 = "wss://relay.walletconnect.org";
var ct = "relayer";
var f3 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" };
var lt = "_subscription";
var E4 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" };
var ut = 0.1;
var dt = "2.14.0";
var gt = 1e4;
var pt = "0.3";
var Dt2 = "WALLETCONNECT_CLIENT_ID";
var S3 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" };
var yt = "subscription";
var mt = "0.3";
var bt = import_time4.FIVE_SECONDS * 1e3;
var ft = "pairing";
var Et = "0.3";
var M = { wc_pairingDelete: { req: { ttl: import_time4.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: import_time4.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: import_time4.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: import_time4.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: import_time4.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: import_time4.ONE_DAY, prompt: false, tag: 0 } } };
var q = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" };
var I2 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" };
var wt = "history";
var vt = "0.3";
var It = "expirer";
var C3 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" };
var Ct = "0.3";
var Z = "verify-api";
var wr2 = "https://verify.walletconnect.com";
var Tt2 = "https://verify.walletconnect.org";
var V2 = Tt2;
var _t = [wr2, Tt2];
var Rt = "echo";
var St = "https://echo.walletconnect.com";
var Pt = class {
  constructor(e2, t) {
    this.core = e2, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = tt, this.version = it, this.initialized = false, this.storagePrefix = z3, this.init = async () => {
      if (!this.initialized) {
        const i4 = await this.getKeyChain();
        typeof i4 < "u" && (this.keychain = i4), this.initialized = true;
      }
    }, this.has = (i4) => (this.isInitialized(), this.keychain.has(i4)), this.set = async (i4, s3) => {
      this.isInitialized(), this.keychain.set(i4, s3), await this.persist();
    }, this.get = (i4) => {
      this.isInitialized();
      const s3 = this.keychain.get(i4);
      if (typeof s3 > "u") {
        const { message: r3 } = xe("NO_MATCHING_KEY", `${this.name}: ${i4}`);
        throw new Error(r3);
      }
      return s3;
    }, this.del = async (i4) => {
      this.isInitialized(), this.keychain.delete(i4), await this.persist();
    }, this.core = e2, this.logger = E2(t, this.name);
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e2) {
    await this.core.storage.setItem(this.storageKey, i0(e2));
  }
  async getKeyChain() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? n0(e2) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var xt = class {
  constructor(e2, t, i4) {
    this.core = e2, this.logger = t, this.name = Ze2, this.randomSessionIdentifier = gu(), this.initialized = false, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }, this.hasKeys = (s3) => (this.isInitialized(), this.keychain.has(s3)), this.getClientId = async () => {
      this.isInitialized();
      const s3 = await this.getClientSeed(), r3 = generateKeyPair2(s3);
      return encodeIss(r3.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s3 = mu();
      return this.setPrivateKey(s3.publicKey, s3.privateKey);
    }, this.signJWT = async (s3) => {
      this.isInitialized();
      const r3 = await this.getClientSeed(), o5 = generateKeyPair2(r3), a4 = this.randomSessionIdentifier, h5 = et;
      return await signJWT(a4, s3, h5, o5);
    }, this.generateSharedKey = (s3, r3, o5) => {
      this.isInitialized();
      const a4 = this.getPrivateKey(s3), h5 = Au(a4, r3);
      return this.setSymKey(h5, o5);
    }, this.setSymKey = async (s3, r3) => {
      this.isInitialized();
      const o5 = r3 || bu(s3);
      return await this.keychain.set(o5, s3), o5;
    }, this.deleteKeyPair = async (s3) => {
      this.isInitialized(), await this.keychain.del(s3);
    }, this.deleteSymKey = async (s3) => {
      this.isInitialized(), await this.keychain.del(s3);
    }, this.encode = async (s3, r3, o5) => {
      this.isInitialized();
      const a4 = eo(o5), h5 = safeJsonStringify(r3);
      if (Eu(a4)) {
        const m5 = a4.senderPublicKey, L6 = a4.receiverPublicKey;
        s3 = await this.generateSharedKey(m5, L6);
      }
      const l5 = this.getSymKey(s3), { type: d4, senderPublicKey: g5 } = a4;
      return wu({ type: d4, symKey: l5, message: h5, senderPublicKey: g5 });
    }, this.decode = async (s3, r3, o5) => {
      this.isInitialized();
      const a4 = Mu(r3, o5);
      if (Eu(a4)) {
        const h5 = a4.receiverPublicKey, l5 = a4.senderPublicKey;
        s3 = await this.generateSharedKey(h5, l5);
      }
      try {
        const h5 = this.getSymKey(s3), l5 = xu({ symKey: h5, encoded: r3 });
        return safeJsonParse(l5);
      } catch (h5) {
        this.logger.error(`Failed to decode message from topic: '${s3}', clientId: '${await this.getClientId()}'`), this.logger.error(h5);
      }
    }, this.getPayloadType = (s3) => {
      const r3 = Xi(s3);
      return Mr(r3.type);
    }, this.getPayloadSenderPublicKey = (s3) => {
      const r3 = Xi(s3);
      return r3.senderPublicKey ? toString2(r3.senderPublicKey, zt) : void 0;
    }, this.core = e2, this.logger = E2(t, this.name), this.keychain = i4 || new Pt(this.core, this.logger);
  }
  get context() {
    return y2(this.logger);
  }
  async setPrivateKey(e2, t) {
    return await this.keychain.set(e2, t), e2;
  }
  getPrivateKey(e2) {
    return this.keychain.get(e2);
  }
  async getClientSeed() {
    let e2 = "";
    try {
      e2 = this.keychain.get(De);
    } catch {
      e2 = gu(), await this.keychain.set(De, e2);
    }
    return yr2(e2, "base16");
  }
  getSymKey(e2) {
    return this.keychain.get(e2);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Ot2 = class extends a2 {
  constructor(e2, t) {
    super(e2, t), this.logger = e2, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = st, this.version = rt, this.initialized = false, this.storagePrefix = z3, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i4 = await this.getRelayerMessages();
          typeof i4 < "u" && (this.messages = i4), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i4) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i4);
        } finally {
          this.initialized = true;
        }
      }
    }, this.set = async (i4, s3) => {
      this.isInitialized();
      const r3 = yu(s3);
      let o5 = this.messages.get(i4);
      return typeof o5 > "u" && (o5 = {}), typeof o5[r3] < "u" || (o5[r3] = s3, this.messages.set(i4, o5), await this.persist()), r3;
    }, this.get = (i4) => {
      this.isInitialized();
      let s3 = this.messages.get(i4);
      return typeof s3 > "u" && (s3 = {}), s3;
    }, this.has = (i4, s3) => {
      this.isInitialized();
      const r3 = this.get(i4), o5 = yu(s3);
      return typeof r3[o5] < "u";
    }, this.del = async (i4) => {
      this.isInitialized(), this.messages.delete(i4), await this.persist();
    }, this.logger = E2(e2, this.name), this.core = t;
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e2) {
    await this.core.storage.setItem(this.storageKey, i0(e2));
  }
  async getRelayerMessages() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? n0(e2) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var vr2 = class extends u {
  constructor(e2, t) {
    super(e2, t), this.relayer = e2, this.logger = t, this.events = new import_events7.EventEmitter(), this.name = ot, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = (0, import_time4.toMiliseconds)(import_time4.ONE_MINUTE), this.failedPublishTimeout = (0, import_time4.toMiliseconds)(import_time4.ONE_SECOND), this.needsTransportRestart = false, this.publish = async (i4, s3, r3) => {
      var o5;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i4, message: s3, opts: r3 } });
      const a4 = (r3 == null ? void 0 : r3.ttl) || nt, h5 = Su(r3), l5 = (r3 == null ? void 0 : r3.prompt) || false, d4 = (r3 == null ? void 0 : r3.tag) || 0, g5 = (r3 == null ? void 0 : r3.id) || getBigIntRpcId().toString(), m5 = { topic: i4, message: s3, opts: { ttl: a4, relay: h5, prompt: l5, tag: d4, id: g5 } }, L6 = `Failed to publish payload, please try again. id:${g5} tag:${d4}`, u4 = Date.now();
      let p5, T4 = 1;
      try {
        for (; p5 === void 0; ) {
          if (Date.now() - u4 > this.publishTimeout) throw new Error(L6);
          this.logger.trace({ id: g5, attempts: T4 }, `publisher.publish - attempt ${T4}`), p5 = await await u0(this.rpcPublish(i4, s3, a4, h5, l5, d4, g5).catch((D4) => this.logger.warn(D4)), this.publishTimeout, L6), T4++, p5 || await new Promise((D4) => setTimeout(D4, this.failedPublishTimeout));
        }
        this.relayer.events.emit(f3.publish, m5), this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { id: g5, topic: i4, message: s3, opts: r3 } });
      } catch (D4) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(D4), (o5 = r3 == null ? void 0 : r3.internal) != null && o5.throwOnFailedPublish) throw D4;
        this.queue.set(g5, m5);
      }
    }, this.on = (i4, s3) => {
      this.events.on(i4, s3);
    }, this.once = (i4, s3) => {
      this.events.once(i4, s3);
    }, this.off = (i4, s3) => {
      this.events.off(i4, s3);
    }, this.removeListener = (i4, s3) => {
      this.events.removeListener(i4, s3);
    }, this.relayer = e2, this.logger = E2(t, this.name), this.registerEventListeners();
  }
  get context() {
    return y2(this.logger);
  }
  rpcPublish(e2, t, i4, s3, r3, o5, a4) {
    var h5, l5, d4, g5;
    const m5 = { method: Nu(s3.protocol).publish, params: { topic: e2, message: t, ttl: i4, prompt: r3, tag: o5 }, id: a4 };
    return Pe((h5 = m5.params) == null ? void 0 : h5.prompt) && ((l5 = m5.params) == null || delete l5.prompt), Pe((d4 = m5.params) == null ? void 0 : d4.tag) && ((g5 = m5.params) == null || delete g5.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: m5 }), this.relayer.request(m5);
  }
  removeRequestFromQueue(e2) {
    this.queue.delete(e2);
  }
  checkQueue() {
    this.queue.forEach(async (e2) => {
      const { topic: t, message: i4, opts: s3 } = e2;
      await this.publish(t, i4, s3);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(f3.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(f3.message_ack, (e2) => {
      this.removeRequestFromQueue(e2.id.toString());
    });
  }
};
var Ir2 = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e2, t) => {
      const i4 = this.get(e2);
      this.exists(e2, t) || this.map.set(e2, [...i4, t]);
    }, this.get = (e2) => this.map.get(e2) || [], this.exists = (e2, t) => this.get(e2).includes(t), this.delete = (e2, t) => {
      if (typeof t > "u") {
        this.map.delete(e2);
        return;
      }
      if (!this.map.has(e2)) return;
      const i4 = this.get(e2);
      if (!this.exists(e2, t)) return;
      const s3 = i4.filter((r3) => r3 !== t);
      if (!s3.length) {
        this.map.delete(e2);
        return;
      }
      this.map.set(e2, s3);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var Cr2 = Object.defineProperty;
var Tr2 = Object.defineProperties;
var _r2 = Object.getOwnPropertyDescriptors;
var At = Object.getOwnPropertySymbols;
var Rr2 = Object.prototype.hasOwnProperty;
var Sr2 = Object.prototype.propertyIsEnumerable;
var zt2 = (n5, e2, t) => e2 in n5 ? Cr2(n5, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n5[e2] = t;
var j3 = (n5, e2) => {
  for (var t in e2 || (e2 = {})) Rr2.call(e2, t) && zt2(n5, t, e2[t]);
  if (At) for (var t of At(e2)) Sr2.call(e2, t) && zt2(n5, t, e2[t]);
  return n5;
};
var me2 = (n5, e2) => Tr2(n5, _r2(e2));
var Nt = class extends d2 {
  constructor(e2, t) {
    super(e2, t), this.relayer = e2, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Ir2(), this.events = new import_events7.EventEmitter(), this.name = yt, this.version = mt, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = z3, this.subscribeTimeout = (0, import_time4.toMiliseconds)(import_time4.ONE_MINUTE), this.restartInProgress = false, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i4, s3) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i4, opts: s3 } });
      try {
        const r3 = Su(s3), o5 = { topic: i4, relay: r3 };
        this.pending.set(i4, o5);
        const a4 = await this.rpcSubscribe(i4, r3);
        return typeof a4 == "string" && (this.onSubscribe(a4, o5), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i4, opts: s3 } })), a4;
      } catch (r3) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r3), r3;
      }
    }, this.unsubscribe = async (i4, s3) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s3 == null ? void 0 : s3.id) < "u" ? await this.unsubscribeById(i4, s3.id, s3) : await this.unsubscribeByTopic(i4, s3);
    }, this.isSubscribed = async (i4) => {
      if (this.topics.includes(i4)) return true;
      const s3 = `${this.pendingSubscriptionWatchLabel}_${i4}`;
      return await new Promise((r3, o5) => {
        const a4 = new import_time4.Watch();
        a4.start(s3);
        const h5 = setInterval(() => {
          !this.pending.has(i4) && this.topics.includes(i4) && (clearInterval(h5), a4.stop(s3), r3(true)), a4.elapsed(s3) >= bt && (clearInterval(h5), a4.stop(s3), o5(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => false);
    }, this.on = (i4, s3) => {
      this.events.on(i4, s3);
    }, this.once = (i4, s3) => {
      this.events.once(i4, s3);
    }, this.off = (i4, s3) => {
      this.events.off(i4, s3);
    }, this.removeListener = (i4, s3) => {
      this.events.removeListener(i4, s3);
    }, this.start = async () => {
      await this.onConnect();
    }, this.stop = async () => {
      await this.onDisconnect();
    }, this.restart = async () => {
      this.restartInProgress = true, await this.restore(), await this.reset(), this.restartInProgress = false;
    }, this.relayer = e2, this.logger = E2(t, this.name), this.clientId = "";
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e2, t) {
    let i4 = false;
    try {
      i4 = this.getSubscription(e2).topic === t;
    } catch {
    }
    return i4;
  }
  onEnable() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e2, t) {
    const i4 = this.topicMap.get(e2);
    await Promise.all(i4.map(async (s3) => await this.unsubscribeById(e2, s3, t)));
  }
  async unsubscribeById(e2, t, i4) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: i4 } });
    try {
      const s3 = Su(i4);
      await this.rpcUnsubscribe(e2, t, s3);
      const r3 = tr("USER_DISCONNECTED", `${this.name}, ${e2}`);
      await this.onUnsubscribe(e2, t, r3), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: i4 } });
    } catch (s3) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s3), s3;
    }
  }
  async rpcSubscribe(e2, t) {
    const i4 = { method: Nu(t.protocol).subscribe, params: { topic: e2 } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i4 });
    try {
      return await await u0(this.relayer.request(i4).catch((s3) => this.logger.warn(s3)), this.subscribeTimeout) ? yu(e2 + this.clientId) : null;
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(f3.connection_stalled);
    }
    return null;
  }
  async rpcBatchSubscribe(e2) {
    if (!e2.length) return;
    const t = e2[0].relay, i4 = { method: Nu(t.protocol).batchSubscribe, params: { topics: e2.map((s3) => s3.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i4 });
    try {
      return await await u0(this.relayer.request(i4).catch((s3) => this.logger.warn(s3)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(f3.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e2) {
    if (!e2.length) return;
    const t = e2[0].relay, i4 = { method: Nu(t.protocol).batchFetchMessages, params: { topics: e2.map((r3) => r3.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i4 });
    let s3;
    try {
      s3 = await await u0(this.relayer.request(i4).catch((r3) => this.logger.warn(r3)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(f3.connection_stalled);
    }
    return s3;
  }
  rpcUnsubscribe(e2, t, i4) {
    const s3 = { method: Nu(i4.protocol).unsubscribe, params: { topic: e2, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s3 }), this.relayer.request(s3);
  }
  onSubscribe(e2, t) {
    this.setSubscription(e2, me2(j3({}, t), { id: e2 })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e2) {
    e2.length && e2.forEach((t) => {
      this.setSubscription(t.id, j3({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e2, t, i4) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e2) && this.deleteSubscription(t, i4), await this.relayer.messages.del(e2);
  }
  async setRelayerSubscriptions(e2) {
    await this.relayer.core.storage.setItem(this.storageKey, e2);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e2, t) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e2, subscription: t }), this.addSubscription(e2, t);
  }
  addSubscription(e2, t) {
    this.subscriptions.set(e2, j3({}, t)), this.topicMap.set(t.topic, e2), this.events.emit(S3.created, t);
  }
  getSubscription(e2) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e2 });
    const t = this.subscriptions.get(e2);
    if (!t) {
      const { message: i4 } = xe("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(i4);
    }
    return t;
  }
  deleteSubscription(e2, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e2, reason: t });
    const i4 = this.getSubscription(e2);
    this.subscriptions.delete(e2), this.topicMap.delete(i4.topic, e2), this.events.emit(S3.deleted, me2(j3({}, i4), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(S3.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e2 = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e2; t++) {
        const i4 = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchFetchMessages(i4), await this.batchSubscribe(i4);
      }
    }
    this.events.emit(S3.resubscribed);
  }
  async restore() {
    try {
      const e2 = await this.getRelayerSubscriptions();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.subscriptions.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e2);
    }
  }
  async batchSubscribe(e2) {
    if (!e2.length) return;
    const t = await this.rpcBatchSubscribe(e2);
    Er(t) && this.onBatchSubscribe(t.map((i4, s3) => me2(j3({}, e2[s3]), { id: i4 })));
  }
  async batchFetchMessages(e2) {
    if (!e2.length) return;
    this.logger.trace(`Fetching batch messages for ${e2.length} subscriptions`);
    const t = await this.rpcBatchFetchMessages(e2);
    t && t.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(t.messages));
  }
  async onConnect() {
    await this.restart(), this.onEnable();
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || !this.relayer.connected) return;
    const e2 = [];
    this.pending.forEach((t) => {
      e2.push(t);
    }), await this.batchSubscribe(e2), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = []);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r.pulse, async () => {
      await this.checkPending();
    }), this.events.on(S3.created, async (e2) => {
      const t = S3.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), await this.persist();
    }), this.events.on(S3.deleted, async (e2) => {
      const t = S3.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e2) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e2());
      }, this.pollingInterval);
    });
  }
};
var Pr2 = Object.defineProperty;
var Lt2 = Object.getOwnPropertySymbols;
var xr2 = Object.prototype.hasOwnProperty;
var Or2 = Object.prototype.propertyIsEnumerable;
var Ut2 = (n5, e2, t) => e2 in n5 ? Pr2(n5, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n5[e2] = t;
var Ar2 = (n5, e2) => {
  for (var t in e2 || (e2 = {})) xr2.call(e2, t) && Ut2(n5, t, e2[t]);
  if (Lt2) for (var t of Lt2(e2)) Or2.call(e2, t) && Ut2(n5, t, e2[t]);
  return n5;
};
var Ft2 = class extends g2 {
  constructor(e2) {
    super(e2), this.protocol = "wc", this.version = 2, this.events = new import_events7.EventEmitter(), this.name = ct, this.transportExplicitlyClosed = false, this.initialized = false, this.connectionAttemptInProgress = false, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "stalled", "interrupted"], this.hasExperiencedNetworkDisruption = false, this.requestsInFlight = /* @__PURE__ */ new Map(), this.heartBeatTimeout = (0, import_time4.toMiliseconds)(import_time4.THIRTY_SECONDS + import_time4.ONE_SECOND), this.request = async (t) => {
      var i4, s3;
      this.logger.debug("Publishing Request Payload");
      const r3 = t.id || getBigIntRpcId().toString();
      await this.toEstablishConnection();
      try {
        const o5 = this.provider.request(t);
        this.requestsInFlight.set(r3, { promise: o5, request: t }), this.logger.trace({ id: r3, method: t.method, topic: (i4 = t.params) == null ? void 0 : i4.topic }, "relayer.request - attempt to publish...");
        const a4 = await new Promise(async (h5, l5) => {
          const d4 = () => {
            l5(new Error(`relayer.request - publish interrupted, id: ${r3}`));
          };
          this.provider.on(E4.disconnect, d4);
          const g5 = await o5;
          this.provider.off(E4.disconnect, d4), h5(g5);
        });
        return this.logger.trace({ id: r3, method: t.method, topic: (s3 = t.params) == null ? void 0 : s3.topic }, "relayer.request - published"), a4;
      } catch (o5) {
        throw this.logger.debug(`Failed to Publish Request: ${r3}`), o5;
      } finally {
        this.requestsInFlight.delete(r3);
      }
    }, this.resetPingTimeout = () => {
      if (pi()) try {
        clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
          var t, i4, s3;
          (s3 = (i4 = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : i4.socket) == null || s3.terminate();
        }, this.heartBeatTimeout);
      } catch (t) {
        this.logger.warn(t);
      }
    }, this.onPayloadHandler = (t) => {
      this.onProviderPayload(t), this.resetPingTimeout();
    }, this.onConnectHandler = () => {
      this.logger.trace("relayer connected"), this.startPingTimeout(), this.events.emit(f3.connect);
    }, this.onDisconnectHandler = () => {
      this.logger.trace("relayer disconnected"), this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (t) => {
      this.logger.error(t), this.events.emit(f3.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(E4.payload, this.onPayloadHandler), this.provider.on(E4.connect, this.onConnectHandler), this.provider.on(E4.disconnect, this.onDisconnectHandler), this.provider.on(E4.error, this.onProviderErrorHandler);
    }, this.core = e2.core, this.logger = typeof e2.logger < "u" && typeof e2.logger != "string" ? E2(e2.logger, this.name) : (0, import_pino2.default)(k2({ level: e2.logger || ht })), this.messages = new Ot2(this.logger, e2.core), this.subscriber = new Nt(this, this.logger), this.publisher = new vr2(this, this.logger), this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || ye2, this.projectId = e2.projectId, this.bundleId = Wo(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), await this.transportOpen(), this.initialized = true, setTimeout(async () => {
      this.subscriber.topics.length === 0 && this.subscriber.pending.size === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = false);
    }, gt);
  }
  get context() {
    return y2(this.logger);
  }
  get connected() {
    var e2, t, i4;
    return ((i4 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : i4.readyState) === 1;
  }
  get connecting() {
    var e2, t, i4;
    return ((i4 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : i4.readyState) === 0;
  }
  async publish(e2, t, i4) {
    this.isInitialized(), await this.publisher.publish(e2, t, i4), await this.recordMessageEvent({ topic: e2, message: t, publishedAt: Date.now() });
  }
  async subscribe(e2, t) {
    var i4;
    this.isInitialized();
    let s3 = ((i4 = this.subscriber.topicMap.get(e2)) == null ? void 0 : i4[0]) || "", r3;
    const o5 = (a4) => {
      a4.topic === e2 && (this.subscriber.off(S3.created, o5), r3());
    };
    return await Promise.all([new Promise((a4) => {
      r3 = a4, this.subscriber.on(S3.created, o5);
    }), new Promise(async (a4) => {
      s3 = await this.subscriber.subscribe(e2, t) || s3, a4();
    })]), s3;
  }
  async unsubscribe(e2, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e2, t);
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async transportDisconnect() {
    if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0) try {
      await Promise.all(Array.from(this.requestsInFlight.values()).map((e2) => e2.promise));
    } catch (e2) {
      this.logger.warn(e2);
    }
    this.hasExperiencedNetworkDisruption || this.connected ? await u0(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, await this.transportDisconnect();
  }
  async transportOpen(e2) {
    await this.confirmOnlineStateOrThrow(), e2 && e2 !== this.relayUrl && (this.relayUrl = e2, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
    try {
      await new Promise(async (t, i4) => {
        const s3 = () => {
          this.provider.off(E4.disconnect, s3), i4(new Error("Connection interrupted while trying to subscribe"));
        };
        this.provider.on(E4.disconnect, s3), await u0(this.provider.connect(), (0, import_time4.toMiliseconds)(import_time4.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch((r3) => {
          i4(r3);
        }), this.subscriber.start().catch((r3) => {
          this.logger.error(r3), this.onDisconnectHandler();
        }), this.hasExperiencedNetworkDisruption = false, t();
      });
    } catch (t) {
      this.logger.error(t);
      const i4 = t;
      if (this.hasExperiencedNetworkDisruption = true, !this.isConnectionStalled(i4.message)) throw t;
    } finally {
      this.connectionAttemptInProgress = false;
    }
  }
  async restartTransport(e2) {
    this.connectionAttemptInProgress || (this.relayUrl = e2 || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await hh()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e2) {
    if ((e2 == null ? void 0 : e2.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t = e2.sort((i4, s3) => i4.publishedAt - s3.publishedAt);
    this.logger.trace(`Batch of ${t.length} message events sorted`);
    for (const i4 of t) try {
      await this.onMessageEvent(i4);
    } catch (s3) {
      this.logger.warn(s3);
    }
    this.logger.trace(`Batch of ${t.length} message events processed`);
  }
  startPingTimeout() {
    var e2, t, i4, s3, r3;
    if (pi()) try {
      (t = (e2 = this.provider) == null ? void 0 : e2.connection) != null && t.socket && ((r3 = (s3 = (i4 = this.provider) == null ? void 0 : i4.connection) == null ? void 0 : s3.socket) == null || r3.once("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o5) {
      this.logger.warn(o5);
    }
  }
  isConnectionStalled(e2) {
    return this.staleConnectionErrors.some((t) => e2.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e2 = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new o3(new f2($o({ sdkVersion: dt, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e2, useOnCloseEvent: true, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e2) {
    const { topic: t, message: i4 } = e2;
    await this.messages.set(t, i4);
  }
  async shouldIgnoreMessageEvent(e2) {
    const { topic: t, message: i4 } = e2;
    if (!i4 || i4.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${i4}`), true;
    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), true;
    const s3 = this.messages.has(t, i4);
    return s3 && this.logger.debug(`Ignoring duplicate message: ${i4}`), s3;
  }
  async onProviderPayload(e2) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e2 }), isJsonRpcRequest(e2)) {
      if (!e2.method.endsWith(lt)) return;
      const t = e2.params, { topic: i4, message: s3, publishedAt: r3 } = t.data, o5 = { topic: i4, message: s3, publishedAt: r3 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ar2({ type: "event", event: t.id }, o5)), this.events.emit(t.id, o5), await this.acknowledgePayload(e2), await this.onMessageEvent(o5);
    } else isJsonRpcResponse(e2) && this.events.emit(f3.message_ack, e2);
  }
  async onMessageEvent(e2) {
    await this.shouldIgnoreMessageEvent(e2) || (this.events.emit(f3.message, e2), await this.recordMessageEvent(e2));
  }
  async acknowledgePayload(e2) {
    const t = formatJsonRpcResult(e2.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(E4.payload, this.onPayloadHandler), this.provider.off(E4.connect, this.onConnectHandler), this.provider.off(E4.disconnect, this.onDisconnectHandler), this.provider.off(E4.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e2 = await hh();
    ch(async (t) => {
      e2 !== t && (e2 = t, t ? await this.restartTransport().catch((i4) => this.logger.error(i4)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
    });
  }
  async onProviderDisconnect() {
    await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit(f3.disconnect), this.connectionAttemptInProgress = false, !this.transportExplicitlyClosed && setTimeout(async () => {
      await this.transportOpen().catch((e2) => this.logger.error(e2));
    }, (0, import_time4.toMiliseconds)(ut));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  async toEstablishConnection() {
    await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise((e2) => {
      const t = setInterval(() => {
        this.connected && (clearInterval(t), e2());
      }, this.connectionStatusPollingInterval);
    }), await this.transportOpen());
  }
};
var zr2 = Object.defineProperty;
var $t2 = Object.getOwnPropertySymbols;
var Nr2 = Object.prototype.hasOwnProperty;
var Lr2 = Object.prototype.propertyIsEnumerable;
var Mt = (n5, e2, t) => e2 in n5 ? zr2(n5, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n5[e2] = t;
var Bt = (n5, e2) => {
  for (var t in e2 || (e2 = {})) Nr2.call(e2, t) && Mt(n5, t, e2[t]);
  if ($t2) for (var t of $t2(e2)) Lr2.call(e2, t) && Mt(n5, t, e2[t]);
  return n5;
};
var kt2 = class extends p2 {
  constructor(e2, t, i4, s3 = z3, r3 = void 0) {
    super(e2, t, i4, s3), this.core = e2, this.logger = t, this.name = i4, this.map = /* @__PURE__ */ new Map(), this.version = pt, this.cached = [], this.initialized = false, this.storagePrefix = z3, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o5) => {
        this.getKey && o5 !== null && !Pe(o5) ? this.map.set(this.getKey(o5), o5) : Gu(o5) ? this.map.set(o5.id, o5) : Yu(o5) && this.map.set(o5.topic, o5);
      }), this.cached = [], this.initialized = true);
    }, this.set = async (o5, a4) => {
      this.isInitialized(), this.map.has(o5) ? await this.update(o5, a4) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o5, value: a4 }), this.map.set(o5, a4), await this.persist());
    }, this.get = (o5) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o5 }), this.getData(o5)), this.getAll = (o5) => (this.isInitialized(), o5 ? this.values.filter((a4) => Object.keys(o5).every((h5) => (0, import_lodash.default)(a4[h5], o5[h5]))) : this.values), this.update = async (o5, a4) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o5, update: a4 });
      const h5 = Bt(Bt({}, this.getData(o5)), a4);
      this.map.set(o5, h5), await this.persist();
    }, this.delete = async (o5, a4) => {
      this.isInitialized(), this.map.has(o5) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o5, reason: a4 }), this.map.delete(o5), this.addToRecentlyDeleted(o5), await this.persist());
    }, this.logger = E2(t, this.name), this.storagePrefix = s3, this.getKey = r3;
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e2) {
    this.recentlyDeleted.push(e2), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e2) {
    const t = this.map.get(e2);
    if (!t) {
      if (this.recentlyDeleted.includes(e2)) {
        const { message: s3 } = xe("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e2}`);
        throw this.logger.error(s3), new Error(s3);
      }
      const { message: i4 } = xe("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.error(i4), new Error(i4);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e2 = await this.getDataStore();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.map.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Kt2 = class {
  constructor(e2, t) {
    this.core = e2, this.logger = t, this.name = ft, this.version = Et, this.events = new import_events7.default(), this.initialized = false, this.storagePrefix = z3, this.ignoredPayloadTypes = [lr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i4 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i4])];
    }, this.create = async (i4) => {
      this.isInitialized();
      const s3 = gu(), r3 = await this.core.crypto.setSymKey(s3), o5 = d0(import_time4.FIVE_MINUTES), a4 = { protocol: at }, h5 = { topic: r3, expiry: o5, relay: a4, active: false }, l5 = Du({ protocol: this.core.protocol, version: this.core.version, topic: r3, symKey: s3, relay: a4, expiryTimestamp: o5, methods: i4 == null ? void 0 : i4.methods });
      return this.core.expirer.set(r3, o5), await this.pairings.set(r3, h5), await this.core.relayer.subscribe(r3), { topic: r3, uri: l5 };
    }, this.pair = async (i4) => {
      this.isInitialized(), this.isValidPair(i4);
      const { topic: s3, symKey: r3, relay: o5, expiryTimestamp: a4, methods: h5 } = Pu(i4.uri);
      let l5;
      if (this.pairings.keys.includes(s3) && (l5 = this.pairings.get(s3), l5.active)) throw new Error(`Pairing already exists: ${s3}. Please try again with a new connection URI.`);
      const d4 = a4 || d0(import_time4.FIVE_MINUTES), g5 = { topic: s3, relay: o5, expiry: d4, active: false, methods: h5 };
      return this.core.expirer.set(s3, d4), await this.pairings.set(s3, g5), i4.activatePairing && await this.activate({ topic: s3 }), this.events.emit(q.create, g5), this.core.crypto.keychain.has(s3) || await this.core.crypto.setSymKey(r3, s3), await this.core.relayer.subscribe(s3, { relay: o5 }), g5;
    }, this.activate = async ({ topic: i4 }) => {
      this.isInitialized();
      const s3 = d0(import_time4.THIRTY_DAYS);
      this.core.expirer.set(i4, s3), await this.pairings.update(i4, { active: true, expiry: s3 });
    }, this.ping = async (i4) => {
      this.isInitialized(), await this.isValidPing(i4);
      const { topic: s3 } = i4;
      if (this.pairings.keys.includes(s3)) {
        const r3 = await this.sendRequest(s3, "wc_pairingPing", {}), { done: o5, resolve: a4, reject: h5 } = a0();
        this.events.once(v0("pairing_ping", r3), ({ error: l5 }) => {
          l5 ? h5(l5) : a4();
        }), await o5();
      }
    }, this.updateExpiry = async ({ topic: i4, expiry: s3 }) => {
      this.isInitialized(), await this.pairings.update(i4, { expiry: s3 });
    }, this.updateMetadata = async ({ topic: i4, metadata: s3 }) => {
      this.isInitialized(), await this.pairings.update(i4, { peerMetadata: s3 });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i4) => {
      this.isInitialized(), await this.isValidDisconnect(i4);
      const { topic: s3 } = i4;
      this.pairings.keys.includes(s3) && (await this.sendRequest(s3, "wc_pairingDelete", tr("USER_DISCONNECTED")), await this.deletePairing(s3));
    }, this.sendRequest = async (i4, s3, r3) => {
      const o5 = formatJsonRpcRequest(s3, r3), a4 = await this.core.crypto.encode(i4, o5), h5 = M[s3].req;
      return this.core.history.set(i4, o5), this.core.relayer.publish(i4, a4, h5), o5.id;
    }, this.sendResult = async (i4, s3, r3) => {
      const o5 = formatJsonRpcResult(i4, r3), a4 = await this.core.crypto.encode(s3, o5), h5 = await this.core.history.get(s3, i4), l5 = M[h5.request.method].res;
      await this.core.relayer.publish(s3, a4, l5), await this.core.history.resolve(o5);
    }, this.sendError = async (i4, s3, r3) => {
      const o5 = formatJsonRpcError(i4, r3), a4 = await this.core.crypto.encode(s3, o5), h5 = await this.core.history.get(s3, i4), l5 = M[h5.request.method] ? M[h5.request.method].res : M.unregistered_method.res;
      await this.core.relayer.publish(s3, a4, l5), await this.core.history.resolve(o5);
    }, this.deletePairing = async (i4, s3) => {
      await this.core.relayer.unsubscribe(i4), await Promise.all([this.pairings.delete(i4, tr("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i4), s3 ? Promise.resolve() : this.core.expirer.del(i4)]);
    }, this.cleanup = async () => {
      const i4 = this.pairings.getAll().filter((s3) => p0(s3.expiry));
      await Promise.all(i4.map((s3) => this.deletePairing(s3.topic)));
    }, this.onRelayEventRequest = (i4) => {
      const { topic: s3, payload: r3 } = i4;
      switch (r3.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(s3, r3);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(s3, r3);
        default:
          return this.onUnknownRpcMethodRequest(s3, r3);
      }
    }, this.onRelayEventResponse = async (i4) => {
      const { topic: s3, payload: r3 } = i4, o5 = (await this.core.history.get(s3, r3.id)).request.method;
      switch (o5) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s3, r3);
        default:
          return this.onUnknownRpcMethodResponse(o5);
      }
    }, this.onPairingPingRequest = async (i4, s3) => {
      const { id: r3 } = s3;
      try {
        this.isValidPing({ topic: i4 }), await this.sendResult(r3, i4, true), this.events.emit(q.ping, { id: r3, topic: i4 });
      } catch (o5) {
        await this.sendError(r3, i4, o5), this.logger.error(o5);
      }
    }, this.onPairingPingResponse = (i4, s3) => {
      const { id: r3 } = s3;
      setTimeout(() => {
        isJsonRpcResult(s3) ? this.events.emit(v0("pairing_ping", r3), {}) : isJsonRpcError(s3) && this.events.emit(v0("pairing_ping", r3), { error: s3.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i4, s3) => {
      const { id: r3 } = s3;
      try {
        this.isValidDisconnect({ topic: i4 }), await this.deletePairing(i4), this.events.emit(q.delete, { id: r3, topic: i4 });
      } catch (o5) {
        await this.sendError(r3, i4, o5), this.logger.error(o5);
      }
    }, this.onUnknownRpcMethodRequest = async (i4, s3) => {
      const { id: r3, method: o5 } = s3;
      try {
        if (this.registeredMethods.includes(o5)) return;
        const a4 = tr("WC_METHOD_UNSUPPORTED", o5);
        await this.sendError(r3, i4, a4), this.logger.error(a4);
      } catch (a4) {
        await this.sendError(r3, i4, a4), this.logger.error(a4);
      }
    }, this.onUnknownRpcMethodResponse = (i4) => {
      this.registeredMethods.includes(i4) || this.logger.error(tr("WC_METHOD_UNSUPPORTED", i4));
    }, this.isValidPair = (i4) => {
      var s3;
      if (!$u(i4)) {
        const { message: o5 } = xe("MISSING_OR_INVALID", `pair() params: ${i4}`);
        throw new Error(o5);
      }
      if (!Ju(i4.uri)) {
        const { message: o5 } = xe("MISSING_OR_INVALID", `pair() uri: ${i4.uri}`);
        throw new Error(o5);
      }
      const r3 = Pu(i4.uri);
      if (!((s3 = r3 == null ? void 0 : r3.relay) != null && s3.protocol)) {
        const { message: o5 } = xe("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(o5);
      }
      if (!(r3 != null && r3.symKey)) {
        const { message: o5 } = xe("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(o5);
      }
      if (r3 != null && r3.expiryTimestamp && (0, import_time4.toMiliseconds)(r3 == null ? void 0 : r3.expiryTimestamp) < Date.now()) {
        const { message: o5 } = xe("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(o5);
      }
    }, this.isValidPing = async (i4) => {
      if (!$u(i4)) {
        const { message: r3 } = xe("MISSING_OR_INVALID", `ping() params: ${i4}`);
        throw new Error(r3);
      }
      const { topic: s3 } = i4;
      await this.isValidPairingTopic(s3);
    }, this.isValidDisconnect = async (i4) => {
      if (!$u(i4)) {
        const { message: r3 } = xe("MISSING_OR_INVALID", `disconnect() params: ${i4}`);
        throw new Error(r3);
      }
      const { topic: s3 } = i4;
      await this.isValidPairingTopic(s3);
    }, this.isValidPairingTopic = async (i4) => {
      if (!Gt(i4, false)) {
        const { message: s3 } = xe("MISSING_OR_INVALID", `pairing topic should be a string: ${i4}`);
        throw new Error(s3);
      }
      if (!this.pairings.keys.includes(i4)) {
        const { message: s3 } = xe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i4}`);
        throw new Error(s3);
      }
      if (p0(this.pairings.get(i4).expiry)) {
        await this.deletePairing(i4);
        const { message: s3 } = xe("EXPIRED", `pairing topic: ${i4}`);
        throw new Error(s3);
      }
    }, this.core = e2, this.logger = E2(t, this.name), this.pairings = new kt2(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y2(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(f3.message, async (e2) => {
      const { topic: t, message: i4 } = e2;
      if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i4))) return;
      const s3 = await this.core.crypto.decode(t, i4);
      try {
        isJsonRpcRequest(s3) ? (this.core.history.set(t, s3), this.onRelayEventRequest({ topic: t, payload: s3 })) : isJsonRpcResponse(s3) && (await this.core.history.resolve(s3), await this.onRelayEventResponse({ topic: t, payload: s3 }), this.core.history.delete(t, s3.id));
      } catch (r3) {
        this.logger.error(r3);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(C3.expired, async (e2) => {
      const { topic: t } = l0(e2.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(q.expire, { topic: t }));
    });
  }
};
var qt2 = class extends h3 {
  constructor(e2, t) {
    super(e2, t), this.core = e2, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new import_events7.EventEmitter(), this.name = wt, this.version = vt, this.cached = [], this.initialized = false, this.storagePrefix = z3, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i4) => this.records.set(i4.id, i4)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.set = (i4, s3, r3) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i4, request: s3, chainId: r3 }), this.records.has(s3.id)) return;
      const o5 = { id: s3.id, topic: i4, request: { method: s3.method, params: s3.params || null }, chainId: r3, expiry: d0(import_time4.THIRTY_DAYS) };
      this.records.set(o5.id, o5), this.persist(), this.events.emit(I2.created, o5);
    }, this.resolve = async (i4) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i4 }), !this.records.has(i4.id)) return;
      const s3 = await this.getRecord(i4.id);
      typeof s3.response > "u" && (s3.response = isJsonRpcError(i4) ? { error: i4.error } : { result: i4.result }, this.records.set(s3.id, s3), this.persist(), this.events.emit(I2.updated, s3));
    }, this.get = async (i4, s3) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i4, id: s3 }), await this.getRecord(s3)), this.delete = (i4, s3) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s3 }), this.values.forEach((r3) => {
        if (r3.topic === i4) {
          if (typeof s3 < "u" && r3.id !== s3) return;
          this.records.delete(r3.id), this.events.emit(I2.deleted, r3);
        }
      }), this.persist();
    }, this.exists = async (i4, s3) => (this.isInitialized(), this.records.has(s3) ? (await this.getRecord(s3)).topic === i4 : false), this.on = (i4, s3) => {
      this.events.on(i4, s3);
    }, this.once = (i4, s3) => {
      this.events.once(i4, s3);
    }, this.off = (i4, s3) => {
      this.events.off(i4, s3);
    }, this.removeListener = (i4, s3) => {
      this.events.removeListener(i4, s3);
    }, this.logger = E2(t, this.name);
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e2 = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u") return;
      const i4 = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e2.push(i4);
    }), e2;
  }
  async setJsonRpcRecords(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e2) {
    this.isInitialized();
    const t = this.records.get(e2);
    if (!t) {
      const { message: i4 } = xe("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(i4);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(I2.sync);
  }
  async restore() {
    try {
      const e2 = await this.getJsonRpcRecords();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.records.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e2);
    }
  }
  registerEventListeners() {
    this.events.on(I2.created, (e2) => {
      const t = I2.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.events.on(I2.updated, (e2) => {
      const t = I2.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.events.on(I2.deleted, (e2) => {
      const t = I2.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.core.heartbeat.on(r.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e2 = false;
      this.records.forEach((t) => {
        (0, import_time4.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(I2.deleted, t, false), e2 = true);
      }), e2 && this.persist();
    } catch (e2) {
      this.logger.warn(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Vt = class extends E3 {
  constructor(e2, t) {
    super(e2, t), this.core = e2, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new import_events7.EventEmitter(), this.name = It, this.version = Ct, this.cached = [], this.initialized = false, this.storagePrefix = z3, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i4) => this.expirations.set(i4.target, i4)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.has = (i4) => {
      try {
        const s3 = this.formatTarget(i4);
        return typeof this.getExpiration(s3) < "u";
      } catch {
        return false;
      }
    }, this.set = (i4, s3) => {
      this.isInitialized();
      const r3 = this.formatTarget(i4), o5 = { target: r3, expiry: s3 };
      this.expirations.set(r3, o5), this.checkExpiry(r3, o5), this.events.emit(C3.created, { target: r3, expiration: o5 });
    }, this.get = (i4) => {
      this.isInitialized();
      const s3 = this.formatTarget(i4);
      return this.getExpiration(s3);
    }, this.del = (i4) => {
      if (this.isInitialized(), this.has(i4)) {
        const s3 = this.formatTarget(i4), r3 = this.getExpiration(s3);
        this.expirations.delete(s3), this.events.emit(C3.deleted, { target: s3, expiration: r3 });
      }
    }, this.on = (i4, s3) => {
      this.events.on(i4, s3);
    }, this.once = (i4, s3) => {
      this.events.once(i4, s3);
    }, this.off = (i4, s3) => {
      this.events.off(i4, s3);
    }, this.removeListener = (i4, s3) => {
      this.events.removeListener(i4, s3);
    }, this.logger = E2(t, this.name);
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e2) {
    if (typeof e2 == "string") return h0(e2);
    if (typeof e2 == "number") return c0(e2);
    const { message: t } = xe("UNKNOWN_TYPE", `Target type: ${typeof e2}`);
    throw new Error(t);
  }
  async setExpirations(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(C3.sync);
  }
  async restore() {
    try {
      const e2 = await this.getExpirations();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.expirations.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e2);
    }
  }
  getExpiration(e2) {
    const t = this.expirations.get(e2);
    if (!t) {
      const { message: i4 } = xe("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.warn(i4), new Error(i4);
    }
    return t;
  }
  checkExpiry(e2, t) {
    const { expiry: i4 } = t;
    (0, import_time4.toMiliseconds)(i4) - Date.now() <= 0 && this.expire(e2, t);
  }
  expire(e2, t) {
    this.expirations.delete(e2), this.events.emit(C3.expired, { target: e2, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e2, t) => this.checkExpiry(t, e2));
  }
  registerEventListeners() {
    this.core.heartbeat.on(r.pulse, () => this.checkExpirations()), this.events.on(C3.created, (e2) => {
      const t = C3.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    }), this.events.on(C3.expired, (e2) => {
      const t = C3.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    }), this.events.on(C3.deleted, (e2) => {
      const t = C3.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var jt2 = class extends y3 {
  constructor(e2, t) {
    super(e2, t), this.projectId = e2, this.logger = t, this.name = Z, this.initialized = false, this.queue = [], this.verifyDisabled = false, this.init = async (i4) => {
      if (this.verifyDisabled || er() || !pr()) return;
      const s3 = this.getVerifyUrl(i4 == null ? void 0 : i4.verifyUrl);
      this.verifyUrl !== s3 && this.removeIframe(), this.verifyUrl = s3;
      try {
        await this.createIframe();
      } catch (r3) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r3), this.verifyDisabled = true;
      }
    }, this.register = async (i4) => {
      this.initialized ? this.sendPost(i4.attestationId) : (this.addToQueue(i4.attestationId), await this.init());
    }, this.resolve = async (i4) => {
      if (this.isDevEnv) return "";
      const s3 = this.getVerifyUrl(i4 == null ? void 0 : i4.verifyUrl);
      return this.fetchAttestation(i4.attestationId, s3);
    }, this.fetchAttestation = async (i4, s3) => {
      this.logger.info(`resolving attestation: ${i4} from url: ${s3}`);
      const r3 = this.startAbortTimer(import_time4.ONE_SECOND * 5), o5 = await fetch(`${s3}/attestation/${i4}`, { signal: this.abortController.signal });
      return clearTimeout(r3), o5.status === 200 ? await o5.json() : void 0;
    }, this.addToQueue = (i4) => {
      this.queue.push(i4);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((i4) => this.sendPost(i4)), this.queue = []);
    }, this.sendPost = (i4) => {
      var s3;
      try {
        if (!this.iframe) return;
        (s3 = this.iframe.contentWindow) == null || s3.postMessage(i4, "*"), this.logger.info(`postMessage sent: ${i4} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let i4;
      const s3 = (r3) => {
        r3.data === "verify_ready" && (this.onInit(), window.removeEventListener("message", s3), i4());
      };
      await Promise.race([new Promise((r3) => {
        const o5 = document.getElementById(Z);
        if (o5) return this.iframe = o5, this.onInit(), r3();
        window.addEventListener("message", s3);
        const a4 = document.createElement("iframe");
        a4.id = Z, a4.src = `${this.verifyUrl}/${this.projectId}`, a4.style.display = "none", document.body.append(a4), this.iframe = a4, i4 = r3;
      }), new Promise((r3, o5) => setTimeout(() => {
        window.removeEventListener("message", s3), o5("verify iframe load timeout");
      }, (0, import_time4.toMiliseconds)(import_time4.FIVE_SECONDS)))]);
    }, this.onInit = () => {
      this.initialized = true, this.processQueue();
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = false);
    }, this.getVerifyUrl = (i4) => {
      let s3 = i4 || V2;
      return _t.includes(s3) || (this.logger.info(`verify url: ${s3}, not included in trusted list, assigning default: ${V2}`), s3 = V2), s3;
    }, this.logger = E2(t, this.name), this.verifyUrl = V2, this.abortController = new AbortController(), this.isDevEnv = pi() && process.env.IS_VITEST;
  }
  get context() {
    return y2(this.logger);
  }
  startAbortTimer(e2) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), (0, import_time4.toMiliseconds)(e2));
  }
};
var Gt2 = class extends v2 {
  constructor(e2, t) {
    super(e2, t), this.projectId = e2, this.logger = t, this.context = Rt, this.registerDeviceToken = async (i4) => {
      const { clientId: s3, token: r3, notificationType: o5, enableEncrypted: a4 = false } = i4, h5 = `${St}/${this.projectId}/clients`;
      await (0, import_isomorphic_unfetch.default)(h5, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s3, type: o5, token: r3, always_raw: a4 }) });
    }, this.logger = E2(t, this.context);
  }
};
var Ur2 = Object.defineProperty;
var Ht2 = Object.getOwnPropertySymbols;
var Fr2 = Object.prototype.hasOwnProperty;
var $r = Object.prototype.propertyIsEnumerable;
var Yt = (n5, e2, t) => e2 in n5 ? Ur2(n5, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n5[e2] = t;
var Jt2 = (n5, e2) => {
  for (var t in e2 || (e2 = {})) Fr2.call(e2, t) && Yt(n5, t, e2[t]);
  if (Ht2) for (var t of Ht2(e2)) $r.call(e2, t) && Yt(n5, t, e2[t]);
  return n5;
};
var ee = class _ee extends n3 {
  constructor(e2) {
    var t;
    super(e2), this.protocol = pe2, this.version = Xe2, this.name = Q2, this.events = new import_events7.EventEmitter(), this.initialized = false, this.on = (o5, a4) => this.events.on(o5, a4), this.once = (o5, a4) => this.events.once(o5, a4), this.off = (o5, a4) => this.events.off(o5, a4), this.removeListener = (o5, a4) => this.events.removeListener(o5, a4), this.projectId = e2 == null ? void 0 : e2.projectId, this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || ye2, this.customStoragePrefix = e2 != null && e2.customStoragePrefix ? `:${e2.customStoragePrefix}` : "";
    const i4 = k2({ level: typeof (e2 == null ? void 0 : e2.logger) == "string" && e2.logger ? e2.logger : We2.logger }), { logger: s3, chunkLoggerController: r3 } = A({ opts: i4, maxSizeInBytes: e2 == null ? void 0 : e2.maxLogBlobSizeInBytes, loggerOverride: e2 == null ? void 0 : e2.logger });
    this.logChunkController = r3, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var o5, a4;
      (o5 = this.logChunkController) != null && o5.downloadLogsBlobInBrowser && ((a4 = this.logChunkController) == null || a4.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = E2(s3, this.name), this.heartbeat = new i(), this.crypto = new xt(this, this.logger, e2 == null ? void 0 : e2.keychain), this.history = new qt2(this, this.logger), this.expirer = new Vt(this, this.logger), this.storage = e2 != null && e2.storage ? e2.storage : new h(Jt2(Jt2({}, Qe), e2 == null ? void 0 : e2.storageOptions)), this.relayer = new Ft2({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Kt2(this, this.logger), this.verify = new jt2(this.projectId || "", this.logger), this.echoClient = new Gt2(this.projectId || "", this.logger);
  }
  static async init(e2) {
    const t = new _ee(e2);
    await t.initialize();
    const i4 = await t.crypto.getClientId();
    return await t.storage.setItem(Dt2, i4), t;
  }
  get context() {
    return y2(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e2;
    return (e2 = this.logChunkController) == null ? void 0 : e2.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e2) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e2), this.logger.error(e2.message), e2;
    }
  }
};
var Mr2 = ee;

// node_modules/@walletconnect/sign-client/dist/index.es.js
var import_events8 = __toESM(require_events());
var import_time5 = __toESM(require_cjs());
var Ee = "wc";
var Se = 2;
var _e3 = "client";
var ie2 = `${Ee}@${Se}:${_e3}:`;
var re2 = { name: _e3, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.com" };
var fe2 = "WALLETCONNECT_DEEPLINK_CHOICE";
var Ue2 = "proposal";
var Ge2 = "Proposal expired";
var ke2 = "session";
var $2 = import_time5.SEVEN_DAYS;
var je2 = "engine";
var R2 = { wc_sessionPropose: { req: { ttl: import_time5.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1101 }, reject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1120 }, autoReject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1121 } }, wc_sessionSettle: { req: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: import_time5.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: import_time5.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1114 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: import_time5.ONE_HOUR, prompt: true, tag: 1116 }, res: { ttl: import_time5.ONE_HOUR, prompt: false, tag: 1117 }, reject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1118 }, autoReject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1119 } } };
var ne2 = { min: import_time5.FIVE_MINUTES, max: import_time5.SEVEN_DAYS };
var D2 = { idle: "IDLE", active: "ACTIVE" };
var Fe2 = "request";
var Qe2 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"];
var ze = "wc";
var He2 = "auth";
var Ye2 = "authKeys";
var Xe3 = "pairingTopics";
var Je2 = "requests";
var J = `${ze}@${1.5}:${He2}:`;
var B2 = `${J}:PUB_KEY`;
var Yt2 = Object.defineProperty;
var Xt3 = Object.defineProperties;
var Jt3 = Object.getOwnPropertyDescriptors;
var Be3 = Object.getOwnPropertySymbols;
var Bt2 = Object.prototype.hasOwnProperty;
var Wt2 = Object.prototype.propertyIsEnumerable;
var We3 = (E7, n5, t) => n5 in E7 ? Yt2(E7, n5, { enumerable: true, configurable: true, writable: true, value: t }) : E7[n5] = t;
var m2 = (E7, n5) => {
  for (var t in n5 || (n5 = {})) Bt2.call(n5, t) && We3(E7, t, n5[t]);
  if (Be3) for (var t of Be3(n5)) Wt2.call(n5, t) && We3(E7, t, n5[t]);
  return E7;
};
var L3 = (E7, n5) => Xt3(E7, Jt3(n5));
var Zt2 = class extends w2 {
  constructor(n5) {
    super(n5), this.name = je2, this.events = new import_events8.default(), this.initialized = false, this.requestQueue = { state: D2.idle, queue: [] }, this.sessionRequestQueue = { state: D2.idle, queue: [] }, this.requestQueueDelay = import_time5.ONE_SECOND, this.expectedPairingMethodMap = /* @__PURE__ */ new Map(), this.recentlyDeletedMap = /* @__PURE__ */ new Map(), this.recentlyDeletedLimit = 200, this.relayMessageCache = [], this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(R2) }), this.initialized = true, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, (0, import_time5.toMiliseconds)(this.requestQueueDelay)));
    }, this.connect = async (t) => {
      await this.isInitialized();
      const e2 = L3(m2({}, t), { requiredNamespaces: t.requiredNamespaces || {}, optionalNamespaces: t.optionalNamespaces || {} });
      await this.isValidConnect(e2);
      const { pairingTopic: s3, requiredNamespaces: i4, optionalNamespaces: r3, sessionProperties: o5, relays: a4 } = e2;
      let c6 = s3, h5, d4 = false;
      try {
        c6 && (d4 = this.client.core.pairing.pairings.get(c6).active);
      } catch (v5) {
        throw this.client.logger.error(`connect() -> pairing.get(${c6}) failed`), v5;
      }
      if (!c6 || !d4) {
        const { topic: v5, uri: O5 } = await this.client.core.pairing.create();
        c6 = v5, h5 = O5;
      }
      if (!c6) {
        const { message: v5 } = xe("NO_MATCHING_KEY", `connect() pairing topic: ${c6}`);
        throw new Error(v5);
      }
      const u4 = await this.client.core.crypto.generateKeyPair(), p5 = R2.wc_sessionPropose.req.ttl || import_time5.FIVE_MINUTES, w5 = d0(p5), y7 = m2({ requiredNamespaces: i4, optionalNamespaces: r3, relays: a4 ?? [{ protocol: at }], proposer: { publicKey: u4, metadata: this.client.metadata }, expiryTimestamp: w5, pairingTopic: c6 }, o5 && { sessionProperties: o5 }), { reject: S5, resolve: T4, done: _3 } = a0(p5, Ge2);
      this.events.once(v0("session_connect"), async ({ error: v5, session: O5 }) => {
        if (v5) S5(v5);
        else if (O5) {
          O5.self.publicKey = u4;
          const Q4 = L3(m2({}, O5), { pairingTopic: y7.pairingTopic, requiredNamespaces: y7.requiredNamespaces, optionalNamespaces: y7.optionalNamespaces });
          await this.client.session.set(O5.topic, Q4), await this.setExpiry(O5.topic, O5.expiry), c6 && await this.client.core.pairing.updateMetadata({ topic: c6, metadata: O5.peer.metadata }), this.cleanupDuplicatePairings(Q4), T4(Q4);
        }
      });
      const P2 = await this.sendRequest({ topic: c6, method: "wc_sessionPropose", params: y7, throwOnFailedPublish: true });
      return await this.setProposal(P2, m2({ id: P2 }, y7)), { uri: h5, approval: _3 };
    }, this.pair = async (t) => {
      await this.isInitialized();
      try {
        return await this.client.core.pairing.pair(t);
      } catch (e2) {
        throw this.client.logger.error("pair() failed"), e2;
      }
    }, this.approve = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidApprove(t);
      } catch (_3) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), _3;
      }
      const { id: e2, relayProtocol: s3, namespaces: i4, sessionProperties: r3, sessionConfig: o5 } = t;
      let a4;
      try {
        a4 = this.client.proposal.get(e2);
      } catch (_3) {
        throw this.client.logger.error(`approve() -> proposal.get(${e2}) failed`), _3;
      }
      const { pairingTopic: c6, proposer: h5, requiredNamespaces: d4, optionalNamespaces: u4 } = a4, p5 = await this.client.core.crypto.generateKeyPair(), w5 = h5.publicKey, y7 = await this.client.core.crypto.generateSharedKey(p5, w5), S5 = m2(m2({ relay: { protocol: s3 ?? "irn" }, namespaces: i4, controller: { publicKey: p5, metadata: this.client.metadata }, expiry: d0($2) }, r3 && { sessionProperties: r3 }), o5 && { sessionConfig: o5 });
      await this.client.core.relayer.subscribe(y7);
      const T4 = L3(m2({}, S5), { topic: y7, requiredNamespaces: d4, optionalNamespaces: u4, pairingTopic: c6, acknowledged: false, self: S5.controller, peer: { publicKey: h5.publicKey, metadata: h5.metadata }, controller: p5 });
      await this.client.session.set(y7, T4);
      try {
        await this.sendResult({ id: e2, topic: c6, result: { relay: { protocol: s3 ?? "irn" }, responderPublicKey: p5 }, throwOnFailedPublish: true }), await this.sendRequest({ topic: y7, method: "wc_sessionSettle", params: S5, throwOnFailedPublish: true });
      } catch (_3) {
        throw this.client.logger.error(_3), this.client.session.delete(y7, tr("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(y7), _3;
      }
      return await this.client.core.pairing.updateMetadata({ topic: c6, metadata: h5.metadata }), await this.client.proposal.delete(e2, tr("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: c6 }), await this.setExpiry(y7, d0($2)), { topic: y7, acknowledged: () => new Promise((_3) => setTimeout(() => _3(this.client.session.get(y7)), 500)) };
    }, this.reject = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidReject(t);
      } catch (r3) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), r3;
      }
      const { id: e2, reason: s3 } = t;
      let i4;
      try {
        i4 = this.client.proposal.get(e2).pairingTopic;
      } catch (r3) {
        throw this.client.logger.error(`reject() -> proposal.get(${e2}) failed`), r3;
      }
      i4 && (await this.sendError({ id: e2, topic: i4, error: s3, rpcOpts: R2.wc_sessionPropose.reject }), await this.client.proposal.delete(e2, tr("USER_DISCONNECTED")));
    }, this.update = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidUpdate(t);
      } catch (d4) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), d4;
      }
      const { topic: e2, namespaces: s3 } = t, { done: i4, resolve: r3, reject: o5 } = a0(), a4 = payloadId(), c6 = getBigIntRpcId().toString(), h5 = this.client.session.get(e2).namespaces;
      return this.events.once(v0("session_update", a4), ({ error: d4 }) => {
        d4 ? o5(d4) : r3();
      }), await this.client.session.update(e2, { namespaces: s3 }), await this.sendRequest({ topic: e2, method: "wc_sessionUpdate", params: { namespaces: s3 }, throwOnFailedPublish: true, clientRpcId: a4, relayRpcId: c6 }).catch((d4) => {
        this.client.logger.error(d4), this.client.session.update(e2, { namespaces: h5 }), o5(d4);
      }), { acknowledged: i4 };
    }, this.extend = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidExtend(t);
      } catch (a4) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), a4;
      }
      const { topic: e2 } = t, s3 = payloadId(), { done: i4, resolve: r3, reject: o5 } = a0();
      return this.events.once(v0("session_extend", s3), ({ error: a4 }) => {
        a4 ? o5(a4) : r3();
      }), await this.setExpiry(e2, d0($2)), this.sendRequest({ topic: e2, method: "wc_sessionExtend", params: {}, clientRpcId: s3, throwOnFailedPublish: true }).catch((a4) => {
        o5(a4);
      }), { acknowledged: i4 };
    }, this.request = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidRequest(t);
      } catch (p5) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), p5;
      }
      const { chainId: e2, request: s3, topic: i4, expiry: r3 = R2.wc_sessionRequest.req.ttl } = t, o5 = this.client.session.get(i4), a4 = payloadId(), c6 = getBigIntRpcId().toString(), { done: h5, resolve: d4, reject: u4 } = a0(r3, "Request expired. Please try again.");
      return this.events.once(v0("session_request", a4), ({ error: p5, result: w5 }) => {
        p5 ? u4(p5) : d4(w5);
      }), await Promise.all([new Promise(async (p5) => {
        await this.sendRequest({ clientRpcId: a4, relayRpcId: c6, topic: i4, method: "wc_sessionRequest", params: { request: L3(m2({}, s3), { expiryTimestamp: d0(r3) }), chainId: e2 }, expiry: r3, throwOnFailedPublish: true }).catch((w5) => u4(w5)), this.client.events.emit("session_request_sent", { topic: i4, request: s3, chainId: e2, id: a4 }), p5();
      }), new Promise(async (p5) => {
        var w5;
        if (!((w5 = o5.sessionConfig) != null && w5.disableDeepLink)) {
          const y7 = await g0(this.client.core.storage, fe2);
          m0({ id: a4, topic: i4, wcDeepLink: y7 });
        }
        p5();
      }), h5()]).then((p5) => p5[2]);
    }, this.respond = async (t) => {
      await this.isInitialized(), await this.isValidRespond(t);
      const { topic: e2, response: s3 } = t, { id: i4 } = s3;
      isJsonRpcResult(s3) ? await this.sendResult({ id: i4, topic: e2, result: s3.result, throwOnFailedPublish: true }) : isJsonRpcError(s3) && await this.sendError({ id: i4, topic: e2, error: s3.error }), this.cleanupAfterResponse(t);
    }, this.ping = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidPing(t);
      } catch (s3) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s3;
      }
      const { topic: e2 } = t;
      if (this.client.session.keys.includes(e2)) {
        const s3 = payloadId(), i4 = getBigIntRpcId().toString(), { done: r3, resolve: o5, reject: a4 } = a0();
        this.events.once(v0("session_ping", s3), ({ error: c6 }) => {
          c6 ? a4(c6) : o5();
        }), await Promise.all([this.sendRequest({ topic: e2, method: "wc_sessionPing", params: {}, throwOnFailedPublish: true, clientRpcId: s3, relayRpcId: i4 }), r3()]);
      } else this.client.core.pairing.pairings.keys.includes(e2) && await this.client.core.pairing.ping({ topic: e2 });
    }, this.emit = async (t) => {
      await this.isInitialized(), await this.isValidEmit(t);
      const { topic: e2, event: s3, chainId: i4 } = t, r3 = getBigIntRpcId().toString();
      await this.sendRequest({ topic: e2, method: "wc_sessionEvent", params: { event: s3, chainId: i4 }, throwOnFailedPublish: true, relayRpcId: r3 });
    }, this.disconnect = async (t) => {
      await this.isInitialized(), await this.isValidDisconnect(t);
      const { topic: e2 } = t;
      if (this.client.session.keys.includes(e2)) await this.sendRequest({ topic: e2, method: "wc_sessionDelete", params: tr("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: e2, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(e2)) await this.client.core.pairing.disconnect({ topic: e2 });
      else {
        const { message: s3 } = xe("MISMATCHED_TOPIC", `Session or pairing topic not found: ${e2}`);
        throw new Error(s3);
      }
    }, this.find = (t) => (this.isInitialized(), this.client.session.getAll().filter((e2) => Qu(e2, t))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async (t) => {
      this.isInitialized(), this.isValidAuthenticate(t);
      const { chains: e2, statement: s3 = "", uri: i4, domain: r3, nonce: o5, type: a4, exp: c6, nbf: h5, methods: d4 = [], expiry: u4 } = t, p5 = [...t.resources || []], { topic: w5, uri: y7 } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"] });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: w5, uri: y7 } });
      const S5 = await this.client.core.crypto.generateKeyPair(), T4 = bu(S5);
      if (await Promise.all([this.client.auth.authKeys.set(B2, { responseTopic: T4, publicKey: S5 }), this.client.auth.pairingTopics.set(T4, { topic: T4, pairingTopic: w5 })]), await this.client.core.relayer.subscribe(T4), this.client.logger.info(`sending request to new pairing topic: ${w5}`), d4.length > 0) {
        const { namespace: A3 } = dn(e2[0]);
        let f5 = cu(A3, "request", d4);
        Qr(p5) && (f5 = lu(f5, p5.pop())), p5.push(f5);
      }
      const _3 = u4 && u4 > R2.wc_sessionAuthenticate.req.ttl ? u4 : R2.wc_sessionAuthenticate.req.ttl, P2 = { authPayload: { type: a4 ?? "caip122", chains: e2, statement: s3, aud: i4, domain: r3, version: "1", nonce: o5, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: c6, nbf: h5, resources: p5 }, requester: { publicKey: S5, metadata: this.client.metadata }, expiryTimestamp: d0(_3) }, v5 = { eip155: { chains: e2, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...d4])], events: ["chainChanged", "accountsChanged"] } }, O5 = { requiredNamespaces: {}, optionalNamespaces: v5, relays: [{ protocol: "irn" }], pairingTopic: w5, proposer: { publicKey: S5, metadata: this.client.metadata }, expiryTimestamp: d0(R2.wc_sessionPropose.req.ttl) }, { done: Q4, resolve: Ie, reject: ae2 } = a0(_3, "Request expired"), W2 = async ({ error: A3, session: f5 }) => {
        if (this.events.off(v0("session_request", K4), ce3), A3) ae2(A3);
        else if (f5) {
          f5.self.publicKey = S5, await this.client.session.set(f5.topic, f5), await this.setExpiry(f5.topic, f5.expiry), w5 && await this.client.core.pairing.updateMetadata({ topic: w5, metadata: f5.peer.metadata });
          const U4 = this.client.session.get(f5.topic);
          await this.deleteProposal(z5), Ie({ session: U4 });
        }
      }, ce3 = async (A3) => {
        if (await this.deletePendingAuthRequest(K4, { message: "fulfilled", code: 0 }), A3.error) {
          const H = tr("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return A3.error.code === H.code ? void 0 : (this.events.off(v0("session_connect"), W2), ae2(A3.error.message));
        }
        await this.deleteProposal(z5), this.events.off(v0("session_connect"), W2);
        const { cacaos: f5, responder: U4 } = A3.result, le3 = [], qe2 = [];
        for (const H of f5) {
          await ou({ cacao: H, projectId: this.client.core.projectId }) || (this.client.logger.error(H, "Signature verification failed"), ae2(tr("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: he3 } = H, pe3 = Qr(he3.resources), Ne2 = [fu(he3.iss)], et2 = Li(he3.iss);
          if (pe3) {
            const de3 = du(pe3), tt2 = pu(pe3);
            le3.push(...de3), Ne2.push(...tt2);
          }
          for (const de3 of Ne2) qe2.push(`${de3}:${et2}`);
        }
        const Z2 = await this.client.core.crypto.generateSharedKey(S5, U4.publicKey);
        let ee2;
        le3.length > 0 && (ee2 = { topic: Z2, acknowledged: true, self: { publicKey: S5, metadata: this.client.metadata }, peer: U4, controller: U4.publicKey, expiry: d0($2), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: w5, namespaces: ju([...new Set(le3)], [...new Set(qe2)]) }, await this.client.core.relayer.subscribe(Z2), await this.client.session.set(Z2, ee2), w5 && await this.client.core.pairing.updateMetadata({ topic: w5, metadata: U4.metadata }), ee2 = this.client.session.get(Z2)), Ie({ auths: f5, session: ee2 });
      }, K4 = payloadId(), z5 = payloadId();
      this.events.once(v0("session_connect"), W2), this.events.once(v0("session_request", K4), ce3);
      try {
        await Promise.all([this.sendRequest({ topic: w5, method: "wc_sessionAuthenticate", params: P2, expiry: t.expiry, throwOnFailedPublish: true, clientRpcId: K4 }), this.sendRequest({ topic: w5, method: "wc_sessionPropose", params: O5, expiry: R2.wc_sessionPropose.req.ttl, throwOnFailedPublish: true, clientRpcId: z5 })]);
      } catch (A3) {
        throw this.events.off(v0("session_connect"), W2), this.events.off(v0("session_request", K4), ce3), A3;
      }
      return await this.setProposal(z5, m2({ id: z5 }, O5)), await this.setAuthRequest(K4, { request: L3(m2({}, P2), { verifyContext: {} }), pairingTopic: w5 }), { uri: y7, response: Q4 };
    }, this.approveSessionAuthenticate = async (t) => {
      this.isInitialized();
      const { id: e2, auths: s3 } = t, i4 = this.getPendingAuthRequest(e2);
      if (!i4) throw new Error(`Could not find pending auth request with id ${e2}`);
      const r3 = i4.requester.publicKey, o5 = await this.client.core.crypto.generateKeyPair(), a4 = bu(r3), c6 = { type: lr, receiverPublicKey: r3, senderPublicKey: o5 }, h5 = [], d4 = [];
      for (const w5 of s3) {
        if (!await ou({ cacao: w5, projectId: this.client.core.projectId })) {
          const P2 = tr("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: e2, topic: a4, error: P2, encodeOpts: c6 }), new Error(P2.message);
        }
        const { p: y7 } = w5, S5 = Qr(y7.resources), T4 = [fu(y7.iss)], _3 = Li(y7.iss);
        if (S5) {
          const P2 = du(S5), v5 = pu(S5);
          h5.push(...P2), T4.push(...v5);
        }
        for (const P2 of T4) d4.push(`${P2}:${_3}`);
      }
      const u4 = await this.client.core.crypto.generateSharedKey(o5, r3);
      let p5;
      return (h5 == null ? void 0 : h5.length) > 0 && (p5 = { topic: u4, acknowledged: true, self: { publicKey: o5, metadata: this.client.metadata }, peer: { publicKey: r3, metadata: i4.requester.metadata }, controller: r3, expiry: d0($2), authentication: s3, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: i4.pairingTopic, namespaces: ju([...new Set(h5)], [...new Set(d4)]) }, await this.client.core.relayer.subscribe(u4), await this.client.session.set(u4, p5), await this.client.core.pairing.updateMetadata({ topic: i4.pairingTopic, metadata: i4.requester.metadata })), await this.sendResult({ topic: a4, id: e2, result: { cacaos: s3, responder: { publicKey: o5, metadata: this.client.metadata } }, encodeOpts: c6, throwOnFailedPublish: true }), await this.client.auth.requests.delete(e2, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: i4.pairingTopic }), { session: p5 };
    }, this.rejectSessionAuthenticate = async (t) => {
      await this.isInitialized();
      const { id: e2, reason: s3 } = t, i4 = this.getPendingAuthRequest(e2);
      if (!i4) throw new Error(`Could not find pending auth request with id ${e2}`);
      const r3 = i4.requester.publicKey, o5 = await this.client.core.crypto.generateKeyPair(), a4 = bu(r3), c6 = { type: lr, receiverPublicKey: r3, senderPublicKey: o5 };
      await this.sendError({ id: e2, topic: a4, error: s3, encodeOpts: c6, rpcOpts: R2.wc_sessionAuthenticate.reject }), await this.client.auth.requests.delete(e2, { message: "rejected", code: 0 }), await this.client.proposal.delete(e2, tr("USER_DISCONNECTED"));
    }, this.formatAuthMessage = (t) => {
      this.isInitialized();
      const { request: e2, iss: s3 } = t;
      return zf(e2, s3);
    }, this.processRelayMessageCache = () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const t = this.relayMessageCache.shift();
          t && await this.onRelayMessage(t);
        } catch (t) {
          this.client.logger.error(t);
        }
      }, 50);
    }, this.cleanupDuplicatePairings = async (t) => {
      if (t.pairingTopic) try {
        const e2 = this.client.core.pairing.pairings.get(t.pairingTopic), s3 = this.client.core.pairing.pairings.getAll().filter((i4) => {
          var r3, o5;
          return ((r3 = i4.peerMetadata) == null ? void 0 : r3.url) && ((o5 = i4.peerMetadata) == null ? void 0 : o5.url) === t.peer.metadata.url && i4.topic && i4.topic !== e2.topic;
        });
        if (s3.length === 0) return;
        this.client.logger.info(`Cleaning up ${s3.length} duplicate pairing(s)`), await Promise.all(s3.map((i4) => this.client.core.pairing.disconnect({ topic: i4.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (e2) {
        this.client.logger.error(e2);
      }
    }, this.deleteSession = async (t) => {
      var e2;
      const { topic: s3, expirerHasDeleted: i4 = false, emitEvent: r3 = true, id: o5 = 0 } = t, { self: a4 } = this.client.session.get(s3);
      await this.client.core.relayer.unsubscribe(s3), await this.client.session.delete(s3, tr("USER_DISCONNECTED")), this.addToRecentlyDeleted(s3, "session"), this.client.core.crypto.keychain.has(a4.publicKey) && await this.client.core.crypto.deleteKeyPair(a4.publicKey), this.client.core.crypto.keychain.has(s3) && await this.client.core.crypto.deleteSymKey(s3), i4 || this.client.core.expirer.del(s3), this.client.core.storage.removeItem(fe2).catch((c6) => this.client.logger.warn(c6)), this.getPendingSessionRequests().forEach((c6) => {
        c6.topic === s3 && this.deletePendingSessionRequest(c6.id, tr("USER_DISCONNECTED"));
      }), s3 === ((e2 = this.sessionRequestQueue.queue[0]) == null ? void 0 : e2.topic) && (this.sessionRequestQueue.state = D2.idle), r3 && this.client.events.emit("session_delete", { id: o5, topic: s3 });
    }, this.deleteProposal = async (t, e2) => {
      await Promise.all([this.client.proposal.delete(t, tr("USER_DISCONNECTED")), e2 ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "proposal");
    }, this.deletePendingSessionRequest = async (t, e2, s3 = false) => {
      await Promise.all([this.client.pendingRequest.delete(t, e2), s3 ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i4) => i4.id !== t), s3 && (this.sessionRequestQueue.state = D2.idle, this.client.events.emit("session_request_expire", { id: t }));
    }, this.deletePendingAuthRequest = async (t, e2, s3 = false) => {
      await Promise.all([this.client.auth.requests.delete(t, e2), s3 ? Promise.resolve() : this.client.core.expirer.del(t)]);
    }, this.setExpiry = async (t, e2) => {
      this.client.session.keys.includes(t) && (this.client.core.expirer.set(t, e2), await this.client.session.update(t, { expiry: e2 }));
    }, this.setProposal = async (t, e2) => {
      this.client.core.expirer.set(t, d0(R2.wc_sessionPropose.req.ttl)), await this.client.proposal.set(t, e2);
    }, this.setAuthRequest = async (t, e2) => {
      const { request: s3, pairingTopic: i4 } = e2;
      this.client.core.expirer.set(t, s3.expiryTimestamp), await this.client.auth.requests.set(t, { authPayload: s3.authPayload, requester: s3.requester, expiryTimestamp: s3.expiryTimestamp, id: t, pairingTopic: i4, verifyContext: s3.verifyContext });
    }, this.setPendingSessionRequest = async (t) => {
      const { id: e2, topic: s3, params: i4, verifyContext: r3 } = t, o5 = i4.request.expiryTimestamp || d0(R2.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(e2, o5), await this.client.pendingRequest.set(e2, { id: e2, topic: s3, params: i4, verifyContext: r3 });
    }, this.sendRequest = async (t) => {
      const { topic: e2, method: s3, params: i4, expiry: r3, relayRpcId: o5, clientRpcId: a4, throwOnFailedPublish: c6 } = t, h5 = formatJsonRpcRequest(s3, i4, a4);
      if (pr() && Qe2.includes(s3)) {
        const p5 = yu(JSON.stringify(h5));
        this.client.core.verify.register({ attestationId: p5 });
      }
      let d4;
      try {
        d4 = await this.client.core.crypto.encode(e2, h5);
      } catch (p5) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${e2} failed`), p5;
      }
      const u4 = R2[s3].req;
      return r3 && (u4.ttl = r3), o5 && (u4.id = o5), this.client.core.history.set(e2, h5), c6 ? (u4.internal = L3(m2({}, u4.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(e2, d4, u4)) : this.client.core.relayer.publish(e2, d4, u4).catch((p5) => this.client.logger.error(p5)), h5.id;
    }, this.sendResult = async (t) => {
      const { id: e2, topic: s3, result: i4, throwOnFailedPublish: r3, encodeOpts: o5 } = t, a4 = formatJsonRpcResult(e2, i4);
      let c6;
      try {
        c6 = await this.client.core.crypto.encode(s3, a4, o5);
      } catch (u4) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s3} failed`), u4;
      }
      let h5;
      try {
        h5 = await this.client.core.history.get(s3, e2);
      } catch (u4) {
        throw this.client.logger.error(`sendResult() -> history.get(${s3}, ${e2}) failed`), u4;
      }
      const d4 = R2[h5.request.method].res;
      r3 ? (d4.internal = L3(m2({}, d4.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s3, c6, d4)) : this.client.core.relayer.publish(s3, c6, d4).catch((u4) => this.client.logger.error(u4)), await this.client.core.history.resolve(a4);
    }, this.sendError = async (t) => {
      const { id: e2, topic: s3, error: i4, encodeOpts: r3, rpcOpts: o5 } = t, a4 = formatJsonRpcError(e2, i4);
      let c6;
      try {
        c6 = await this.client.core.crypto.encode(s3, a4, r3);
      } catch (u4) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s3} failed`), u4;
      }
      let h5;
      try {
        h5 = await this.client.core.history.get(s3, e2);
      } catch (u4) {
        throw this.client.logger.error(`sendError() -> history.get(${s3}, ${e2}) failed`), u4;
      }
      const d4 = o5 || R2[h5.request.method].res;
      this.client.core.relayer.publish(s3, c6, d4), await this.client.core.history.resolve(a4);
    }, this.cleanup = async () => {
      const t = [], e2 = [];
      this.client.session.getAll().forEach((s3) => {
        let i4 = false;
        p0(s3.expiry) && (i4 = true), this.client.core.crypto.keychain.has(s3.topic) || (i4 = true), i4 && t.push(s3.topic);
      }), this.client.proposal.getAll().forEach((s3) => {
        p0(s3.expiryTimestamp) && e2.push(s3.id);
      }), await Promise.all([...t.map((s3) => this.deleteSession({ topic: s3 })), ...e2.map((s3) => this.deleteProposal(s3))]);
    }, this.onRelayEventRequest = async (t) => {
      this.requestQueue.queue.push(t), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === D2.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = D2.active;
        const t = this.requestQueue.queue.shift();
        if (t) try {
          await this.processRequest(t);
        } catch (e2) {
          this.client.logger.warn(e2);
        }
      }
      this.requestQueue.state = D2.idle;
    }, this.processRequest = async (t) => {
      const { topic: e2, payload: s3 } = t, i4 = s3.method;
      if (!this.shouldIgnorePairingRequest({ topic: e2, requestMethod: i4 })) switch (i4) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest(e2, s3);
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(e2, s3);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(e2, s3);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(e2, s3);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(e2, s3);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(e2, s3);
        case "wc_sessionRequest":
          return await this.onSessionRequest(e2, s3);
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(e2, s3);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest(e2, s3);
        default:
          return this.client.logger.info(`Unsupported request method ${i4}`);
      }
    }, this.onRelayEventResponse = async (t) => {
      const { topic: e2, payload: s3 } = t, i4 = (await this.client.core.history.get(e2, s3.id)).request.method;
      switch (i4) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(e2, s3);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(e2, s3);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(e2, s3);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(e2, s3);
        case "wc_sessionPing":
          return this.onSessionPingResponse(e2, s3);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(e2, s3);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(e2, s3);
        default:
          return this.client.logger.info(`Unsupported response method ${i4}`);
      }
    }, this.onRelayEventUnknownPayload = (t) => {
      const { topic: e2 } = t, { message: s3 } = xe("MISSING_OR_INVALID", `Decoded payload on topic ${e2} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s3);
    }, this.shouldIgnorePairingRequest = (t) => {
      const { topic: e2, requestMethod: s3 } = t, i4 = this.expectedPairingMethodMap.get(e2);
      return !i4 || i4.includes(s3) ? false : !!(i4.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }, this.onSessionProposeRequest = async (t, e2) => {
      const { params: s3, id: i4 } = e2;
      try {
        this.isValidConnect(m2({}, e2.params));
        const r3 = s3.expiryTimestamp || d0(R2.wc_sessionPropose.req.ttl), o5 = m2({ id: i4, pairingTopic: t, expiryTimestamp: r3 }, s3);
        await this.setProposal(i4, o5);
        const a4 = yu(JSON.stringify(e2)), c6 = await this.getVerifyContext(a4, o5.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i4, params: o5, verifyContext: c6 });
      } catch (r3) {
        await this.sendError({ id: i4, topic: t, error: r3, rpcOpts: R2.wc_sessionPropose.autoReject }), this.client.logger.error(r3);
      }
    }, this.onSessionProposeResponse = async (t, e2) => {
      const { id: s3 } = e2;
      if (isJsonRpcResult(e2)) {
        const { result: i4 } = e2;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i4 });
        const r3 = this.client.proposal.get(s3);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: r3 });
        const o5 = r3.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o5 });
        const a4 = i4.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: a4 });
        const c6 = await this.client.core.crypto.generateSharedKey(o5, a4);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: c6 });
        const h5 = await this.client.core.relayer.subscribe(c6);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: h5 }), await this.client.core.pairing.activate({ topic: t });
      } else if (isJsonRpcError(e2)) {
        await this.client.proposal.delete(s3, tr("USER_DISCONNECTED"));
        const i4 = v0("session_connect");
        if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners, 954`);
        this.events.emit(v0("session_connect"), { error: e2.error });
      }
    }, this.onSessionSettleRequest = async (t, e2) => {
      const { id: s3, params: i4 } = e2;
      try {
        this.isValidSessionSettleRequest(i4);
        const { relay: r3, controller: o5, expiry: a4, namespaces: c6, sessionProperties: h5, sessionConfig: d4 } = e2.params, u4 = m2(m2({ topic: t, relay: r3, expiry: a4, namespaces: c6, acknowledged: true, pairingTopic: "", requiredNamespaces: {}, optionalNamespaces: {}, controller: o5.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o5.publicKey, metadata: o5.metadata } }, h5 && { sessionProperties: h5 }), d4 && { sessionConfig: d4 });
        await this.sendResult({ id: e2.id, topic: t, result: true, throwOnFailedPublish: true });
        const p5 = v0("session_connect");
        if (this.events.listenerCount(p5) === 0) throw new Error(`emitting ${p5} without any listeners 997`);
        this.events.emit(v0("session_connect"), { session: u4 });
      } catch (r3) {
        await this.sendError({ id: s3, topic: t, error: r3 }), this.client.logger.error(r3);
      }
    }, this.onSessionSettleResponse = async (t, e2) => {
      const { id: s3 } = e2;
      isJsonRpcResult(e2) ? (await this.client.session.update(t, { acknowledged: true }), this.events.emit(v0("session_approve", s3), {})) : isJsonRpcError(e2) && (await this.client.session.delete(t, tr("USER_DISCONNECTED")), this.events.emit(v0("session_approve", s3), { error: e2.error }));
    }, this.onSessionUpdateRequest = async (t, e2) => {
      const { params: s3, id: i4 } = e2;
      try {
        const r3 = `${t}_session_update`, o5 = lh.get(r3);
        if (o5 && this.isRequestOutOfSync(o5, i4)) {
          this.client.logger.info(`Discarding out of sync request - ${i4}`), this.sendError({ id: i4, topic: t, error: tr("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(m2({ topic: t }, s3));
        try {
          lh.set(r3, i4), await this.client.session.update(t, { namespaces: s3.namespaces }), await this.sendResult({ id: i4, topic: t, result: true, throwOnFailedPublish: true });
        } catch (a4) {
          throw lh.delete(r3), a4;
        }
        this.client.events.emit("session_update", { id: i4, topic: t, params: s3 });
      } catch (r3) {
        await this.sendError({ id: i4, topic: t, error: r3 }), this.client.logger.error(r3);
      }
    }, this.isRequestOutOfSync = (t, e2) => parseInt(e2.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, e2) => {
      const { id: s3 } = e2, i4 = v0("session_update", s3);
      if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners`);
      isJsonRpcResult(e2) ? this.events.emit(v0("session_update", s3), {}) : isJsonRpcError(e2) && this.events.emit(v0("session_update", s3), { error: e2.error });
    }, this.onSessionExtendRequest = async (t, e2) => {
      const { id: s3 } = e2;
      try {
        this.isValidExtend({ topic: t }), await this.setExpiry(t, d0($2)), await this.sendResult({ id: s3, topic: t, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_extend", { id: s3, topic: t });
      } catch (i4) {
        await this.sendError({ id: s3, topic: t, error: i4 }), this.client.logger.error(i4);
      }
    }, this.onSessionExtendResponse = (t, e2) => {
      const { id: s3 } = e2, i4 = v0("session_extend", s3);
      if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners`);
      isJsonRpcResult(e2) ? this.events.emit(v0("session_extend", s3), {}) : isJsonRpcError(e2) && this.events.emit(v0("session_extend", s3), { error: e2.error });
    }, this.onSessionPingRequest = async (t, e2) => {
      const { id: s3 } = e2;
      try {
        this.isValidPing({ topic: t }), await this.sendResult({ id: s3, topic: t, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_ping", { id: s3, topic: t });
      } catch (i4) {
        await this.sendError({ id: s3, topic: t, error: i4 }), this.client.logger.error(i4);
      }
    }, this.onSessionPingResponse = (t, e2) => {
      const { id: s3 } = e2, i4 = v0("session_ping", s3);
      if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners`);
      setTimeout(() => {
        isJsonRpcResult(e2) ? this.events.emit(v0("session_ping", s3), {}) : isJsonRpcError(e2) && this.events.emit(v0("session_ping", s3), { error: e2.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (t, e2) => {
      const { id: s3 } = e2;
      try {
        this.isValidDisconnect({ topic: t, reason: e2.params }), await Promise.all([new Promise((i4) => {
          this.client.core.relayer.once(f3.publish, async () => {
            i4(await this.deleteSession({ topic: t, id: s3 }));
          });
        }), this.sendResult({ id: s3, topic: t, result: true, throwOnFailedPublish: true }), this.cleanupPendingSentRequestsForTopic({ topic: t, error: tr("USER_DISCONNECTED") })]);
      } catch (i4) {
        this.client.logger.error(i4);
      }
    }, this.onSessionRequest = async (t, e2) => {
      var s3;
      const { id: i4, params: r3 } = e2;
      try {
        await this.isValidRequest(m2({ topic: t }, r3));
        const o5 = yu(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", r3, i4))), a4 = this.client.session.get(t), c6 = await this.getVerifyContext(o5, a4.peer.metadata), h5 = { id: i4, topic: t, params: r3, verifyContext: c6 };
        await this.setPendingSessionRequest(h5), (s3 = this.client.signConfig) != null && s3.disableRequestQueue ? this.emitSessionRequest(h5) : (this.addSessionRequestToSessionRequestQueue(h5), this.processSessionRequestQueue());
      } catch (o5) {
        await this.sendError({ id: i4, topic: t, error: o5 }), this.client.logger.error(o5);
      }
    }, this.onSessionRequestResponse = (t, e2) => {
      const { id: s3 } = e2, i4 = v0("session_request", s3);
      if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners`);
      isJsonRpcResult(e2) ? this.events.emit(v0("session_request", s3), { result: e2.result }) : isJsonRpcError(e2) && this.events.emit(v0("session_request", s3), { error: e2.error });
    }, this.onSessionEventRequest = async (t, e2) => {
      const { id: s3, params: i4 } = e2;
      try {
        const r3 = `${t}_session_event_${i4.event.name}`, o5 = lh.get(r3);
        if (o5 && this.isRequestOutOfSync(o5, s3)) {
          this.client.logger.info(`Discarding out of sync request - ${s3}`);
          return;
        }
        this.isValidEmit(m2({ topic: t }, i4)), this.client.events.emit("session_event", { id: s3, topic: t, params: i4 }), lh.set(r3, s3);
      } catch (r3) {
        await this.sendError({ id: s3, topic: t, error: r3 }), this.client.logger.error(r3);
      }
    }, this.onSessionAuthenticateResponse = (t, e2) => {
      const { id: s3 } = e2;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: t, payload: e2 }), isJsonRpcResult(e2) ? this.events.emit(v0("session_request", s3), { result: e2.result }) : isJsonRpcError(e2) && this.events.emit(v0("session_request", s3), { error: e2.error });
    }, this.onSessionAuthenticateRequest = async (t, e2) => {
      try {
        const { requester: s3, authPayload: i4, expiryTimestamp: r3 } = e2.params, o5 = yu(JSON.stringify(e2)), a4 = await this.getVerifyContext(o5, this.client.metadata), c6 = { requester: s3, pairingTopic: t, id: e2.id, authPayload: i4, verifyContext: a4, expiryTimestamp: r3 };
        await this.setAuthRequest(e2.id, { request: c6, pairingTopic: t }), this.client.events.emit("session_authenticate", { topic: t, params: e2.params, id: e2.id, verifyContext: a4 });
      } catch (s3) {
        this.client.logger.error(s3);
        const i4 = e2.params.requester.publicKey, r3 = await this.client.core.crypto.generateKeyPair(), o5 = { type: lr, receiverPublicKey: i4, senderPublicKey: r3 };
        await this.sendError({ id: e2.id, topic: t, error: s3, encodeOpts: o5, rpcOpts: R2.wc_sessionAuthenticate.autoReject });
      }
    }, this.addSessionRequestToSessionRequestQueue = (t) => {
      this.sessionRequestQueue.queue.push(t);
    }, this.cleanupAfterResponse = (t) => {
      this.deletePendingSessionRequest(t.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = D2.idle, this.processSessionRequestQueue();
      }, (0, import_time5.toMiliseconds)(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: e2 }) => {
      const s3 = this.client.core.history.pending;
      s3.length > 0 && s3.filter((i4) => i4.topic === t && i4.request.method === "wc_sessionRequest").forEach((i4) => {
        const r3 = i4.request.id, o5 = v0("session_request", r3);
        if (this.events.listenerCount(o5) === 0) throw new Error(`emitting ${o5} without any listeners`);
        this.events.emit(v0("session_request", i4.request.id), { error: e2 });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === D2.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const t = this.sessionRequestQueue.queue[0];
      if (!t) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = D2.active, this.emitSessionRequest(t);
      } catch (e2) {
        this.client.logger.error(e2);
      }
    }, this.emitSessionRequest = (t) => {
      this.client.events.emit("session_request", t);
    }, this.onPairingCreated = (t) => {
      if (t.methods && this.expectedPairingMethodMap.set(t.topic, t.methods), t.active) return;
      const e2 = this.client.proposal.getAll().find((s3) => s3.pairingTopic === t.topic);
      e2 && this.onSessionProposeRequest(t.topic, formatJsonRpcRequest("wc_sessionPropose", { requiredNamespaces: e2.requiredNamespaces, optionalNamespaces: e2.optionalNamespaces, relays: e2.relays, proposer: e2.proposer, sessionProperties: e2.sessionProperties }, e2.id));
    }, this.isValidConnect = async (t) => {
      if (!$u(t)) {
        const { message: a4 } = xe("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
        throw new Error(a4);
      }
      const { pairingTopic: e2, requiredNamespaces: s3, optionalNamespaces: i4, sessionProperties: r3, relays: o5 } = t;
      if (Pe(e2) || await this.isValidPairingTopic(e2), !Xu(o5, true)) {
        const { message: a4 } = xe("MISSING_OR_INVALID", `connect() relays: ${o5}`);
        throw new Error(a4);
      }
      !Pe(s3) && Yr(s3) !== 0 && this.validateNamespaces(s3, "requiredNamespaces"), !Pe(i4) && Yr(i4) !== 0 && this.validateNamespaces(i4, "optionalNamespaces"), Pe(r3) || this.validateSessionProps(r3, "sessionProperties");
    }, this.validateNamespaces = (t, e2) => {
      const s3 = Wu(t, "connect()", e2);
      if (s3) throw new Error(s3.message);
    }, this.isValidApprove = async (t) => {
      if (!$u(t)) throw new Error(xe("MISSING_OR_INVALID", `approve() params: ${t}`).message);
      const { id: e2, namespaces: s3, relayProtocol: i4, sessionProperties: r3 } = t;
      this.checkRecentlyDeleted(e2), await this.isValidProposalId(e2);
      const o5 = this.client.proposal.get(e2), a4 = So(s3, "approve()");
      if (a4) throw new Error(a4.message);
      const c6 = Io(o5.requiredNamespaces, s3, "approve()");
      if (c6) throw new Error(c6.message);
      if (!Gt(i4, true)) {
        const { message: h5 } = xe("MISSING_OR_INVALID", `approve() relayProtocol: ${i4}`);
        throw new Error(h5);
      }
      Pe(r3) || this.validateSessionProps(r3, "sessionProperties");
    }, this.isValidReject = async (t) => {
      if (!$u(t)) {
        const { message: i4 } = xe("MISSING_OR_INVALID", `reject() params: ${t}`);
        throw new Error(i4);
      }
      const { id: e2, reason: s3 } = t;
      if (this.checkRecentlyDeleted(e2), await this.isValidProposalId(e2), !th(s3)) {
        const { message: i4 } = xe("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s3)}`);
        throw new Error(i4);
      }
    }, this.isValidSessionSettleRequest = (t) => {
      if (!$u(t)) {
        const { message: c6 } = xe("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
        throw new Error(c6);
      }
      const { relay: e2, controller: s3, namespaces: i4, expiry: r3 } = t;
      if (!No(e2)) {
        const { message: c6 } = xe("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(c6);
      }
      const o5 = Vu(s3, "onSessionSettleRequest()");
      if (o5) throw new Error(o5.message);
      const a4 = So(i4, "onSessionSettleRequest()");
      if (a4) throw new Error(a4.message);
      if (p0(r3)) {
        const { message: c6 } = xe("EXPIRED", "onSessionSettleRequest()");
        throw new Error(c6);
      }
    }, this.isValidUpdate = async (t) => {
      if (!$u(t)) {
        const { message: a4 } = xe("MISSING_OR_INVALID", `update() params: ${t}`);
        throw new Error(a4);
      }
      const { topic: e2, namespaces: s3 } = t;
      this.checkRecentlyDeleted(e2), await this.isValidSessionTopic(e2);
      const i4 = this.client.session.get(e2), r3 = So(s3, "update()");
      if (r3) throw new Error(r3.message);
      const o5 = Io(i4.requiredNamespaces, s3, "update()");
      if (o5) throw new Error(o5.message);
    }, this.isValidExtend = async (t) => {
      if (!$u(t)) {
        const { message: s3 } = xe("MISSING_OR_INVALID", `extend() params: ${t}`);
        throw new Error(s3);
      }
      const { topic: e2 } = t;
      this.checkRecentlyDeleted(e2), await this.isValidSessionTopic(e2);
    }, this.isValidRequest = async (t) => {
      if (!$u(t)) {
        const { message: a4 } = xe("MISSING_OR_INVALID", `request() params: ${t}`);
        throw new Error(a4);
      }
      const { topic: e2, request: s3, chainId: i4, expiry: r3 } = t;
      this.checkRecentlyDeleted(e2), await this.isValidSessionTopic(e2);
      const { namespaces: o5 } = this.client.session.get(e2);
      if (!nh(o5, i4)) {
        const { message: a4 } = xe("MISSING_OR_INVALID", `request() chainId: ${i4}`);
        throw new Error(a4);
      }
      if (!eh(s3)) {
        const { message: a4 } = xe("MISSING_OR_INVALID", `request() ${JSON.stringify(s3)}`);
        throw new Error(a4);
      }
      if (!fh(o5, i4, s3.method)) {
        const { message: a4 } = xe("MISSING_OR_INVALID", `request() method: ${s3.method}`);
        throw new Error(a4);
      }
      if (r3 && !uh(r3, ne2)) {
        const { message: a4 } = xe("MISSING_OR_INVALID", `request() expiry: ${r3}. Expiry must be a number (in seconds) between ${ne2.min} and ${ne2.max}`);
        throw new Error(a4);
      }
    }, this.isValidRespond = async (t) => {
      var e2;
      if (!$u(t)) {
        const { message: r3 } = xe("MISSING_OR_INVALID", `respond() params: ${t}`);
        throw new Error(r3);
      }
      const { topic: s3, response: i4 } = t;
      try {
        await this.isValidSessionTopic(s3);
      } catch (r3) {
        throw (e2 = t == null ? void 0 : t.response) != null && e2.id && this.cleanupAfterResponse(t), r3;
      }
      if (!rh(i4)) {
        const { message: r3 } = xe("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i4)}`);
        throw new Error(r3);
      }
    }, this.isValidPing = async (t) => {
      if (!$u(t)) {
        const { message: s3 } = xe("MISSING_OR_INVALID", `ping() params: ${t}`);
        throw new Error(s3);
      }
      const { topic: e2 } = t;
      await this.isValidSessionOrPairingTopic(e2);
    }, this.isValidEmit = async (t) => {
      if (!$u(t)) {
        const { message: o5 } = xe("MISSING_OR_INVALID", `emit() params: ${t}`);
        throw new Error(o5);
      }
      const { topic: e2, event: s3, chainId: i4 } = t;
      await this.isValidSessionTopic(e2);
      const { namespaces: r3 } = this.client.session.get(e2);
      if (!nh(r3, i4)) {
        const { message: o5 } = xe("MISSING_OR_INVALID", `emit() chainId: ${i4}`);
        throw new Error(o5);
      }
      if (!ih(s3)) {
        const { message: o5 } = xe("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s3)}`);
        throw new Error(o5);
      }
      if (!oh(r3, i4, s3.name)) {
        const { message: o5 } = xe("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s3)}`);
        throw new Error(o5);
      }
    }, this.isValidDisconnect = async (t) => {
      if (!$u(t)) {
        const { message: s3 } = xe("MISSING_OR_INVALID", `disconnect() params: ${t}`);
        throw new Error(s3);
      }
      const { topic: e2 } = t;
      await this.isValidSessionOrPairingTopic(e2);
    }, this.isValidAuthenticate = (t) => {
      const { chains: e2, uri: s3, domain: i4, nonce: r3 } = t;
      if (!Array.isArray(e2) || e2.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!Gt(s3, false)) throw new Error("uri is required parameter");
      if (!Gt(i4, false)) throw new Error("domain is required parameter");
      if (!Gt(r3, false)) throw new Error("nonce is required parameter");
      if ([...new Set(e2.map((a4) => dn(a4).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: o5 } = dn(e2[0]);
      if (o5 !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }, this.getVerifyContext = async (t, e2) => {
      const s3 = { verified: { verifyUrl: e2.verifyUrl || V2, validation: "UNKNOWN", origin: e2.url || "" } };
      try {
        const i4 = await this.client.core.verify.resolve({ attestationId: t, verifyUrl: e2.verifyUrl });
        i4 && (s3.verified.origin = i4.origin, s3.verified.isScam = i4.isScam, s3.verified.validation = i4.origin === new URL(e2.url).origin ? "VALID" : "INVALID");
      } catch (i4) {
        this.client.logger.info(i4);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(s3)}`), s3;
    }, this.validateSessionProps = (t, e2) => {
      Object.values(t).forEach((s3) => {
        if (!Gt(s3, false)) {
          const { message: i4 } = xe("MISSING_OR_INVALID", `${e2} must be in Record<string, string> format. Received: ${JSON.stringify(s3)}`);
          throw new Error(i4);
        }
      });
    }, this.getPendingAuthRequest = (t) => {
      const e2 = this.client.auth.requests.get(t);
      return typeof e2 == "object" ? e2 : void 0;
    }, this.addToRecentlyDeleted = (t, e2) => {
      if (this.recentlyDeletedMap.set(t, e2), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s3 = 0;
        const i4 = this.recentlyDeletedLimit / 2;
        for (const r3 of this.recentlyDeletedMap.keys()) {
          if (s3++ >= i4) break;
          this.recentlyDeletedMap.delete(r3);
        }
      }
    }, this.checkRecentlyDeleted = (t) => {
      const e2 = this.recentlyDeletedMap.get(t);
      if (e2) {
        const { message: s3 } = xe("MISSING_OR_INVALID", `Record was recently deleted - ${e2}: ${t}`);
        throw new Error(s3);
      }
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: n5 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(n5);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(f3.message, (n5) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(n5) : this.onRelayMessage(n5);
    });
  }
  async onRelayMessage(n5) {
    const { topic: t, message: e2 } = n5, { publicKey: s3 } = this.client.auth.authKeys.keys.includes(B2) ? this.client.auth.authKeys.get(B2) : { responseTopic: void 0, publicKey: void 0 }, i4 = await this.client.core.crypto.decode(t, e2, { receiverPublicKey: s3 });
    try {
      isJsonRpcRequest(i4) ? (this.client.core.history.set(t, i4), this.onRelayEventRequest({ topic: t, payload: i4 })) : isJsonRpcResponse(i4) ? (await this.client.core.history.resolve(i4), await this.onRelayEventResponse({ topic: t, payload: i4 }), this.client.core.history.delete(t, i4.id)) : this.onRelayEventUnknownPayload({ topic: t, payload: i4 });
    } catch (r3) {
      this.client.logger.error(r3);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(C3.expired, async (n5) => {
      const { topic: t, id: e2 } = l0(n5.target);
      if (e2 && this.client.pendingRequest.keys.includes(e2)) return await this.deletePendingSessionRequest(e2, xe("EXPIRED"), true);
      if (e2 && this.client.auth.requests.keys.includes(e2)) return await this.deletePendingAuthRequest(e2, xe("EXPIRED"), true);
      t ? this.client.session.keys.includes(t) && (await this.deleteSession({ topic: t, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: t })) : e2 && (await this.deleteProposal(e2, true), this.client.events.emit("proposal_expire", { id: e2 }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(q.create, (n5) => this.onPairingCreated(n5)), this.client.core.pairing.events.on(q.delete, (n5) => {
      this.addToRecentlyDeleted(n5.topic, "pairing");
    });
  }
  isValidPairingTopic(n5) {
    if (!Gt(n5, false)) {
      const { message: t } = xe("MISSING_OR_INVALID", `pairing topic should be a string: ${n5}`);
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(n5)) {
      const { message: t } = xe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n5}`);
      throw new Error(t);
    }
    if (p0(this.client.core.pairing.pairings.get(n5).expiry)) {
      const { message: t } = xe("EXPIRED", `pairing topic: ${n5}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(n5) {
    if (!Gt(n5, false)) {
      const { message: t } = xe("MISSING_OR_INVALID", `session topic should be a string: ${n5}`);
      throw new Error(t);
    }
    if (this.checkRecentlyDeleted(n5), !this.client.session.keys.includes(n5)) {
      const { message: t } = xe("NO_MATCHING_KEY", `session topic doesn't exist: ${n5}`);
      throw new Error(t);
    }
    if (p0(this.client.session.get(n5).expiry)) {
      await this.deleteSession({ topic: n5 });
      const { message: t } = xe("EXPIRED", `session topic: ${n5}`);
      throw new Error(t);
    }
    if (!this.client.core.crypto.keychain.has(n5)) {
      const { message: t } = xe("MISSING_OR_INVALID", `session topic does not exist in keychain: ${n5}`);
      throw await this.deleteSession({ topic: n5 }), new Error(t);
    }
  }
  async isValidSessionOrPairingTopic(n5) {
    if (this.checkRecentlyDeleted(n5), this.client.session.keys.includes(n5)) await this.isValidSessionTopic(n5);
    else if (this.client.core.pairing.pairings.keys.includes(n5)) this.isValidPairingTopic(n5);
    else if (Gt(n5, false)) {
      const { message: t } = xe("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${n5}`);
      throw new Error(t);
    } else {
      const { message: t } = xe("MISSING_OR_INVALID", `session or pairing topic should be a string: ${n5}`);
      throw new Error(t);
    }
  }
  async isValidProposalId(n5) {
    if (!Zu(n5)) {
      const { message: t } = xe("MISSING_OR_INVALID", `proposal id should be a number: ${n5}`);
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(n5)) {
      const { message: t } = xe("NO_MATCHING_KEY", `proposal id doesn't exist: ${n5}`);
      throw new Error(t);
    }
    if (p0(this.client.proposal.get(n5).expiryTimestamp)) {
      await this.deleteProposal(n5);
      const { message: t } = xe("EXPIRED", `proposal id: ${n5}`);
      throw new Error(t);
    }
  }
};
var es3 = class extends kt2 {
  constructor(n5, t) {
    super(n5, t, Ue2, ie2), this.core = n5, this.logger = t;
  }
};
var Ze3 = class extends kt2 {
  constructor(n5, t) {
    super(n5, t, ke2, ie2), this.core = n5, this.logger = t;
  }
};
var ts3 = class extends kt2 {
  constructor(n5, t) {
    super(n5, t, Fe2, ie2, (e2) => e2.id), this.core = n5, this.logger = t;
  }
};
var ss3 = class extends kt2 {
  constructor(n5, t) {
    super(n5, t, Ye2, J, () => B2), this.core = n5, this.logger = t;
  }
};
var is3 = class extends kt2 {
  constructor(n5, t) {
    super(n5, t, Xe3, J), this.core = n5, this.logger = t;
  }
};
var rs3 = class extends kt2 {
  constructor(n5, t) {
    super(n5, t, Je2, J, (e2) => e2.id), this.core = n5, this.logger = t;
  }
};
var ns3 = class {
  constructor(n5, t) {
    this.core = n5, this.logger = t, this.authKeys = new ss3(this.core, this.logger), this.pairingTopics = new is3(this.core, this.logger), this.requests = new rs3(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
};
var oe2 = class _oe extends b2 {
  constructor(n5) {
    super(n5), this.protocol = Ee, this.version = Se, this.name = re2.name, this.events = new import_events8.EventEmitter(), this.on = (e2, s3) => this.events.on(e2, s3), this.once = (e2, s3) => this.events.once(e2, s3), this.off = (e2, s3) => this.events.off(e2, s3), this.removeListener = (e2, s3) => this.events.removeListener(e2, s3), this.removeAllListeners = (e2) => this.events.removeAllListeners(e2), this.connect = async (e2) => {
      try {
        return await this.engine.connect(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.pair = async (e2) => {
      try {
        return await this.engine.pair(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.approve = async (e2) => {
      try {
        return await this.engine.approve(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.reject = async (e2) => {
      try {
        return await this.engine.reject(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.update = async (e2) => {
      try {
        return await this.engine.update(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.extend = async (e2) => {
      try {
        return await this.engine.extend(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.request = async (e2) => {
      try {
        return await this.engine.request(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.respond = async (e2) => {
      try {
        return await this.engine.respond(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.ping = async (e2) => {
      try {
        return await this.engine.ping(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.emit = async (e2) => {
      try {
        return await this.engine.emit(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.disconnect = async (e2) => {
      try {
        return await this.engine.disconnect(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.find = (e2) => {
      try {
        return this.engine.find(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (e2) {
        throw this.logger.error(e2.message), e2;
      }
    }, this.authenticate = async (e2) => {
      try {
        return await this.engine.authenticate(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.formatAuthMessage = (e2) => {
      try {
        return this.engine.formatAuthMessage(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.approveSessionAuthenticate = async (e2) => {
      try {
        return await this.engine.approveSessionAuthenticate(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.rejectSessionAuthenticate = async (e2) => {
      try {
        return await this.engine.rejectSessionAuthenticate(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }, this.name = (n5 == null ? void 0 : n5.name) || re2.name, this.metadata = (n5 == null ? void 0 : n5.metadata) || Xo(), this.signConfig = n5 == null ? void 0 : n5.signConfig;
    const t = typeof (n5 == null ? void 0 : n5.logger) < "u" && typeof (n5 == null ? void 0 : n5.logger) != "string" ? n5.logger : (0, import_pino2.default)(k2({ level: (n5 == null ? void 0 : n5.logger) || re2.logger }));
    this.core = (n5 == null ? void 0 : n5.core) || new Mr2(n5), this.logger = E2(t, this.name), this.session = new Ze3(this.core, this.logger), this.proposal = new es3(this.core, this.logger), this.pendingRequest = new ts3(this.core, this.logger), this.engine = new Zt2(this), this.auth = new ns3(this.core, this.logger);
  }
  static async init(n5) {
    const t = new _oe(n5);
    return await t.initialize(), t;
  }
  get context() {
    return y2(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), await this.auth.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success"), this.engine.processRelayMessageCache();
    } catch (n5) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(n5.message), n5;
    }
  }
};

// node_modules/@walletconnect/jsonrpc-http-connection/dist/index.es.js
var import_events9 = __toESM(require_events());
var import_cross_fetch = __toESM(require_browser_ponyfill());
var P = Object.defineProperty;
var w4 = Object.defineProperties;
var E5 = Object.getOwnPropertyDescriptors;
var c5 = Object.getOwnPropertySymbols;
var L4 = Object.prototype.hasOwnProperty;
var O3 = Object.prototype.propertyIsEnumerable;
var l4 = (r3, t, e2) => t in r3 ? P(r3, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : r3[t] = e2;
var p3 = (r3, t) => {
  for (var e2 in t || (t = {})) L4.call(t, e2) && l4(r3, e2, t[e2]);
  if (c5) for (var e2 of c5(t)) O3.call(t, e2) && l4(r3, e2, t[e2]);
  return r3;
};
var v3 = (r3, t) => w4(r3, E5(t));
var j4 = { Accept: "application/json", "Content-Type": "application/json" };
var T2 = "POST";
var d3 = { headers: j4, method: T2 };
var g3 = 10;
var f4 = class {
  constructor(t, e2 = false) {
    if (this.url = t, this.disableProviderPing = e2, this.events = new import_events9.EventEmitter(), this.isAvailable = false, this.registering = false, !isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    this.url = t, this.disableProviderPing = e2;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, e2) {
    this.events.on(t, e2);
  }
  once(t, e2) {
    this.events.once(t, e2);
  }
  off(t, e2) {
    this.events.off(t, e2);
  }
  removeListener(t, e2) {
    this.events.removeListener(t, e2);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t) {
    this.isAvailable || await this.register();
    try {
      const e2 = safeJsonStringify(t), s3 = await (await (0, import_cross_fetch.default)(this.url, v3(p3({}, d3), { body: e2 }))).json();
      this.onPayload({ data: s3 });
    } catch (e2) {
      this.onError(t.id, e2);
    }
  }
  async register(t = this.url) {
    if (!isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    if (this.registering) {
      const e2 = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= e2 || this.events.listenerCount("open") >= e2) && this.events.setMaxListeners(e2 + 1), new Promise((s3, i4) => {
        this.events.once("register_error", (n5) => {
          this.resetMaxListeners(), i4(n5);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u") return i4(new Error("HTTP connection is missing or invalid"));
          s3();
        });
      });
    }
    this.url = t, this.registering = true;
    try {
      if (!this.disableProviderPing) {
        const e2 = safeJsonStringify({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await (0, import_cross_fetch.default)(t, v3(p3({}, d3), { body: e2 }));
      }
      this.onOpen();
    } catch (e2) {
      const s3 = this.parseError(e2);
      throw this.events.emit("register_error", s3), this.onClose(), s3;
    }
  }
  onOpen() {
    this.isAvailable = true, this.registering = false, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = false, this.registering = false, this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const e2 = typeof t.data == "string" ? safeJsonParse(t.data) : t.data;
    this.events.emit("payload", e2);
  }
  onError(t, e2) {
    const s3 = this.parseError(e2), i4 = s3.message || s3.toString(), n5 = formatJsonRpcError(t, i4);
    this.events.emit("payload", n5);
  }
  parseError(t, e2 = this.url) {
    return parseConnectionError(t, e2, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > g3 && this.events.setMaxListeners(g3);
  }
};

// node_modules/@walletconnect/universal-provider/dist/index.es.js
var import_events10 = __toESM(require_events());
var ya2 = "error";
var Kg = "wss://relay.walletconnect.com";
var Jg = "wc";
var Yg = "universal_provider";
var Sa2 = `${Jg}@2:${Yg}:`;
var Zg = "https://rpc.walletconnect.com/v1/";
var Kn2 = "generic";
var qt3 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var _e4 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var qi2 = { exports: {} };
(function(P2, s3) {
  (function() {
    var i4, p5 = "4.17.21", w5 = 200, x3 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", R3 = "Expected a function", k3 = "Invalid `variable` option passed into `_.template`", jt3 = "__lodash_hash_undefined__", Jn2 = 500, xn2 = "__lodash_placeholder__", Tt3 = 1, Ft3 = 2, En2 = 4, yn2 = 1, me3 = 2, vt2 = 1, ln = 2, Gi3 = 4, Lt3 = 8, Sn2 = 16, Dt3 = 32, On2 = 64, Wt3 = 128, Yn2 = 256, gr3 = 512, Wa2 = 30, Ma2 = "...", Ba2 = 800, Ga2 = 16, zi2 = 1, za2 = 2, Ka2 = 3, pn = 1 / 0, tn2 = 9007199254740991, Ja2 = 17976931348623157e292, we2 = 0 / 0, Ht3 = 4294967295, Ya2 = Ht3 - 1, Za2 = Ht3 >>> 1, Xa2 = [["ary", Wt3], ["bind", vt2], ["bindKey", ln], ["curry", Lt3], ["curryRight", Sn2], ["flip", gr3], ["partial", Dt3], ["partialRight", On2], ["rearg", Yn2]], Rn = "[object Arguments]", Pe2 = "[object Array]", Qa2 = "[object AsyncFunction]", Zn2 = "[object Boolean]", Xn2 = "[object Date]", Va2 = "[object DOMException]", Ce2 = "[object Error]", Ae2 = "[object Function]", Ki2 = "[object GeneratorFunction]", Et2 = "[object Map]", Qn2 = "[object Number]", ka2 = "[object Null]", Mt3 = "[object Object]", Ji3 = "[object Promise]", ja2 = "[object Proxy]", Vn2 = "[object RegExp]", yt2 = "[object Set]", kn2 = "[object String]", Ie = "[object Symbol]", to2 = "[object Undefined]", jn2 = "[object WeakMap]", no2 = "[object WeakSet]", te = "[object ArrayBuffer]", bn2 = "[object DataView]", vr3 = "[object Float32Array]", _r3 = "[object Float64Array]", mr2 = "[object Int8Array]", wr3 = "[object Int16Array]", Pr3 = "[object Int32Array]", Cr3 = "[object Uint8Array]", Ar3 = "[object Uint8ClampedArray]", Ir3 = "[object Uint16Array]", xr3 = "[object Uint32Array]", eo2 = /\b__p \+= '';/g, ro2 = /\b(__p \+=) '' \+/g, io2 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Yi3 = /&(?:amp|lt|gt|quot|#39);/g, Zi3 = /[&<>"']/g, so2 = RegExp(Yi3.source), uo = RegExp(Zi3.source), ao2 = /<%-([\s\S]+?)%>/g, oo2 = /<%([\s\S]+?)%>/g, Xi3 = /<%=([\s\S]+?)%>/g, fo2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, co2 = /^\w*$/, ho = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Er2 = /[\\^$.*+?()[\]{}|]/g, lo2 = RegExp(Er2.source), yr3 = /^\s+/, po2 = /\s/, go2 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, vo2 = /\{\n\/\* \[wrapped with (.+)\] \*/, _o2 = /,? & /, mo2 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, wo2 = /[()=,{}\[\]\/\s]/, Po2 = /\\(\\)?/g, Co2 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Qi3 = /\w*$/, Ao2 = /^[-+]0x[0-9a-f]+$/i, Io2 = /^0b[01]+$/i, xo2 = /^\[object .+?Constructor\]$/, Eo2 = /^0o[0-7]+$/i, yo2 = /^(?:0|[1-9]\d*)$/, So2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, xe2 = /($^)/, Oo2 = /['\n\r\u2028\u2029\\]/g, Ee2 = "\\ud800-\\udfff", Ro2 = "\\u0300-\\u036f", bo2 = "\\ufe20-\\ufe2f", To2 = "\\u20d0-\\u20ff", Vi2 = Ro2 + bo2 + To2, ki2 = "\\u2700-\\u27bf", ji3 = "a-z\\xdf-\\xf6\\xf8-\\xff", Lo = "\\xac\\xb1\\xd7\\xf7", Do = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ho = "\\u2000-\\u206f", No2 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ts4 = "A-Z\\xc0-\\xd6\\xd8-\\xde", ns4 = "\\ufe0e\\ufe0f", es4 = Lo + Do + Ho + No2, Sr3 = "['’]", $o2 = "[" + Ee2 + "]", rs4 = "[" + es4 + "]", ye3 = "[" + Vi2 + "]", is4 = "\\d+", Uo2 = "[" + ki2 + "]", ss4 = "[" + ji3 + "]", us3 = "[^" + Ee2 + es4 + is4 + ki2 + ji3 + ts4 + "]", Or3 = "\\ud83c[\\udffb-\\udfff]", qo = "(?:" + ye3 + "|" + Or3 + ")", as3 = "[^" + Ee2 + "]", Rr3 = "(?:\\ud83c[\\udde6-\\uddff]){2}", br2 = "[\\ud800-\\udbff][\\udc00-\\udfff]", Tn2 = "[" + ts4 + "]", os3 = "\\u200d", fs3 = "(?:" + ss4 + "|" + us3 + ")", Fo2 = "(?:" + Tn2 + "|" + us3 + ")", cs3 = "(?:" + Sr3 + "(?:d|ll|m|re|s|t|ve))?", hs3 = "(?:" + Sr3 + "(?:D|LL|M|RE|S|T|VE))?", ls3 = qo + "?", ps3 = "[" + ns4 + "]?", Wo2 = "(?:" + os3 + "(?:" + [as3, Rr3, br2].join("|") + ")" + ps3 + ls3 + ")*", Mo2 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Bo2 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ds3 = ps3 + ls3 + Wo2, Go2 = "(?:" + [Uo2, Rr3, br2].join("|") + ")" + ds3, zo2 = "(?:" + [as3 + ye3 + "?", ye3, Rr3, br2, $o2].join("|") + ")", Ko = RegExp(Sr3, "g"), Jo2 = RegExp(ye3, "g"), Tr3 = RegExp(Or3 + "(?=" + Or3 + ")|" + zo2 + ds3, "g"), Yo = RegExp([Tn2 + "?" + ss4 + "+" + cs3 + "(?=" + [rs4, Tn2, "$"].join("|") + ")", Fo2 + "+" + hs3 + "(?=" + [rs4, Tn2 + fs3, "$"].join("|") + ")", Tn2 + "?" + fs3 + "+" + cs3, Tn2 + "+" + hs3, Bo2, Mo2, is4, Go2].join("|"), "g"), Zo = RegExp("[" + os3 + Ee2 + Vi2 + ns4 + "]"), Xo2 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Qo2 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Vo = -1, G = {};
    G[vr3] = G[_r3] = G[mr2] = G[wr3] = G[Pr3] = G[Cr3] = G[Ar3] = G[Ir3] = G[xr3] = true, G[Rn] = G[Pe2] = G[te] = G[Zn2] = G[bn2] = G[Xn2] = G[Ce2] = G[Ae2] = G[Et2] = G[Qn2] = G[Mt3] = G[Vn2] = G[yt2] = G[kn2] = G[jn2] = false;
    var B3 = {};
    B3[Rn] = B3[Pe2] = B3[te] = B3[bn2] = B3[Zn2] = B3[Xn2] = B3[vr3] = B3[_r3] = B3[mr2] = B3[wr3] = B3[Pr3] = B3[Et2] = B3[Qn2] = B3[Mt3] = B3[Vn2] = B3[yt2] = B3[kn2] = B3[Ie] = B3[Cr3] = B3[Ar3] = B3[Ir3] = B3[xr3] = true, B3[Ce2] = B3[Ae2] = B3[jn2] = false;
    var ko2 = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, jo = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, tf2 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, nf2 = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, ef2 = parseFloat, rf2 = parseInt, gs3 = typeof _e4 == "object" && _e4 && _e4.Object === Object && _e4, sf2 = typeof self == "object" && self && self.Object === Object && self, j6 = gs3 || sf2 || Function("return this")(), Lr3 = s3 && !s3.nodeType && s3, dn2 = Lr3 && true && P2 && !P2.nodeType && P2, vs3 = dn2 && dn2.exports === Lr3, Dr3 = vs3 && gs3.process, _t2 = function() {
      try {
        var h5 = dn2 && dn2.require && dn2.require("util").types;
        return h5 || Dr3 && Dr3.binding && Dr3.binding("util");
      } catch {
      }
    }(), _s3 = _t2 && _t2.isArrayBuffer, ms3 = _t2 && _t2.isDate, ws3 = _t2 && _t2.isMap, Ps3 = _t2 && _t2.isRegExp, Cs3 = _t2 && _t2.isSet, As3 = _t2 && _t2.isTypedArray;
    function ct2(h5, g5, d4) {
      switch (d4.length) {
        case 0:
          return h5.call(g5);
        case 1:
          return h5.call(g5, d4[0]);
        case 2:
          return h5.call(g5, d4[0], d4[1]);
        case 3:
          return h5.call(g5, d4[0], d4[1], d4[2]);
      }
      return h5.apply(g5, d4);
    }
    function uf2(h5, g5, d4, A3) {
      for (var O5 = -1, U4 = h5 == null ? 0 : h5.length; ++O5 < U4; ) {
        var X2 = h5[O5];
        g5(A3, X2, d4(X2), h5);
      }
      return A3;
    }
    function mt2(h5, g5) {
      for (var d4 = -1, A3 = h5 == null ? 0 : h5.length; ++d4 < A3 && g5(h5[d4], d4, h5) !== false; ) ;
      return h5;
    }
    function af2(h5, g5) {
      for (var d4 = h5 == null ? 0 : h5.length; d4-- && g5(h5[d4], d4, h5) !== false; ) ;
      return h5;
    }
    function Is3(h5, g5) {
      for (var d4 = -1, A3 = h5 == null ? 0 : h5.length; ++d4 < A3; ) if (!g5(h5[d4], d4, h5)) return false;
      return true;
    }
    function nn2(h5, g5) {
      for (var d4 = -1, A3 = h5 == null ? 0 : h5.length, O5 = 0, U4 = []; ++d4 < A3; ) {
        var X2 = h5[d4];
        g5(X2, d4, h5) && (U4[O5++] = X2);
      }
      return U4;
    }
    function Se2(h5, g5) {
      var d4 = h5 == null ? 0 : h5.length;
      return !!d4 && Ln2(h5, g5, 0) > -1;
    }
    function Hr2(h5, g5, d4) {
      for (var A3 = -1, O5 = h5 == null ? 0 : h5.length; ++A3 < O5; ) if (d4(g5, h5[A3])) return true;
      return false;
    }
    function z5(h5, g5) {
      for (var d4 = -1, A3 = h5 == null ? 0 : h5.length, O5 = Array(A3); ++d4 < A3; ) O5[d4] = g5(h5[d4], d4, h5);
      return O5;
    }
    function en2(h5, g5) {
      for (var d4 = -1, A3 = g5.length, O5 = h5.length; ++d4 < A3; ) h5[O5 + d4] = g5[d4];
      return h5;
    }
    function Nr3(h5, g5, d4, A3) {
      var O5 = -1, U4 = h5 == null ? 0 : h5.length;
      for (A3 && U4 && (d4 = h5[++O5]); ++O5 < U4; ) d4 = g5(d4, h5[O5], O5, h5);
      return d4;
    }
    function of2(h5, g5, d4, A3) {
      var O5 = h5 == null ? 0 : h5.length;
      for (A3 && O5 && (d4 = h5[--O5]); O5--; ) d4 = g5(d4, h5[O5], O5, h5);
      return d4;
    }
    function $r2(h5, g5) {
      for (var d4 = -1, A3 = h5 == null ? 0 : h5.length; ++d4 < A3; ) if (g5(h5[d4], d4, h5)) return true;
      return false;
    }
    var ff2 = Ur3("length");
    function cf2(h5) {
      return h5.split("");
    }
    function hf2(h5) {
      return h5.match(mo2) || [];
    }
    function xs3(h5, g5, d4) {
      var A3;
      return d4(h5, function(O5, U4, X2) {
        if (g5(O5, U4, X2)) return A3 = U4, false;
      }), A3;
    }
    function Oe2(h5, g5, d4, A3) {
      for (var O5 = h5.length, U4 = d4 + (A3 ? 1 : -1); A3 ? U4-- : ++U4 < O5; ) if (g5(h5[U4], U4, h5)) return U4;
      return -1;
    }
    function Ln2(h5, g5, d4) {
      return g5 === g5 ? If2(h5, g5, d4) : Oe2(h5, Es3, d4);
    }
    function lf2(h5, g5, d4, A3) {
      for (var O5 = d4 - 1, U4 = h5.length; ++O5 < U4; ) if (A3(h5[O5], g5)) return O5;
      return -1;
    }
    function Es3(h5) {
      return h5 !== h5;
    }
    function ys3(h5, g5) {
      var d4 = h5 == null ? 0 : h5.length;
      return d4 ? Fr3(h5, g5) / d4 : we2;
    }
    function Ur3(h5) {
      return function(g5) {
        return g5 == null ? i4 : g5[h5];
      };
    }
    function qr2(h5) {
      return function(g5) {
        return h5 == null ? i4 : h5[g5];
      };
    }
    function Ss3(h5, g5, d4, A3, O5) {
      return O5(h5, function(U4, X2, W2) {
        d4 = A3 ? (A3 = false, U4) : g5(d4, U4, X2, W2);
      }), d4;
    }
    function pf2(h5, g5) {
      var d4 = h5.length;
      for (h5.sort(g5); d4--; ) h5[d4] = h5[d4].value;
      return h5;
    }
    function Fr3(h5, g5) {
      for (var d4, A3 = -1, O5 = h5.length; ++A3 < O5; ) {
        var U4 = g5(h5[A3]);
        U4 !== i4 && (d4 = d4 === i4 ? U4 : d4 + U4);
      }
      return d4;
    }
    function Wr(h5, g5) {
      for (var d4 = -1, A3 = Array(h5); ++d4 < h5; ) A3[d4] = g5(d4);
      return A3;
    }
    function df2(h5, g5) {
      return z5(g5, function(d4) {
        return [d4, h5[d4]];
      });
    }
    function Os3(h5) {
      return h5 && h5.slice(0, Ls3(h5) + 1).replace(yr3, "");
    }
    function ht2(h5) {
      return function(g5) {
        return h5(g5);
      };
    }
    function Mr3(h5, g5) {
      return z5(g5, function(d4) {
        return h5[d4];
      });
    }
    function ne3(h5, g5) {
      return h5.has(g5);
    }
    function Rs3(h5, g5) {
      for (var d4 = -1, A3 = h5.length; ++d4 < A3 && Ln2(g5, h5[d4], 0) > -1; ) ;
      return d4;
    }
    function bs3(h5, g5) {
      for (var d4 = h5.length; d4-- && Ln2(g5, h5[d4], 0) > -1; ) ;
      return d4;
    }
    function gf2(h5, g5) {
      for (var d4 = h5.length, A3 = 0; d4--; ) h5[d4] === g5 && ++A3;
      return A3;
    }
    var vf2 = qr2(ko2), _f2 = qr2(jo);
    function mf2(h5) {
      return "\\" + nf2[h5];
    }
    function wf2(h5, g5) {
      return h5 == null ? i4 : h5[g5];
    }
    function Dn2(h5) {
      return Zo.test(h5);
    }
    function Pf2(h5) {
      return Xo2.test(h5);
    }
    function Cf2(h5) {
      for (var g5, d4 = []; !(g5 = h5.next()).done; ) d4.push(g5.value);
      return d4;
    }
    function Br(h5) {
      var g5 = -1, d4 = Array(h5.size);
      return h5.forEach(function(A3, O5) {
        d4[++g5] = [O5, A3];
      }), d4;
    }
    function Ts3(h5, g5) {
      return function(d4) {
        return h5(g5(d4));
      };
    }
    function rn2(h5, g5) {
      for (var d4 = -1, A3 = h5.length, O5 = 0, U4 = []; ++d4 < A3; ) {
        var X2 = h5[d4];
        (X2 === g5 || X2 === xn2) && (h5[d4] = xn2, U4[O5++] = d4);
      }
      return U4;
    }
    function Re3(h5) {
      var g5 = -1, d4 = Array(h5.size);
      return h5.forEach(function(A3) {
        d4[++g5] = A3;
      }), d4;
    }
    function Af2(h5) {
      var g5 = -1, d4 = Array(h5.size);
      return h5.forEach(function(A3) {
        d4[++g5] = [A3, A3];
      }), d4;
    }
    function If2(h5, g5, d4) {
      for (var A3 = d4 - 1, O5 = h5.length; ++A3 < O5; ) if (h5[A3] === g5) return A3;
      return -1;
    }
    function xf2(h5, g5, d4) {
      for (var A3 = d4 + 1; A3--; ) if (h5[A3] === g5) return A3;
      return A3;
    }
    function Hn2(h5) {
      return Dn2(h5) ? yf2(h5) : ff2(h5);
    }
    function St2(h5) {
      return Dn2(h5) ? Sf2(h5) : cf2(h5);
    }
    function Ls3(h5) {
      for (var g5 = h5.length; g5-- && po2.test(h5.charAt(g5)); ) ;
      return g5;
    }
    var Ef2 = qr2(tf2);
    function yf2(h5) {
      for (var g5 = Tr3.lastIndex = 0; Tr3.test(h5); ) ++g5;
      return g5;
    }
    function Sf2(h5) {
      return h5.match(Tr3) || [];
    }
    function Of2(h5) {
      return h5.match(Yo) || [];
    }
    var Rf2 = function h5(g5) {
      g5 = g5 == null ? j6 : Nn2.defaults(j6.Object(), g5, Nn2.pick(j6, Qo2));
      var d4 = g5.Array, A3 = g5.Date, O5 = g5.Error, U4 = g5.Function, X2 = g5.Math, W2 = g5.Object, Gr2 = g5.RegExp, bf2 = g5.String, wt2 = g5.TypeError, be2 = d4.prototype, Tf2 = U4.prototype, $n2 = W2.prototype, Te = g5["__core-js_shared__"], Le3 = Tf2.toString, F = $n2.hasOwnProperty, Lf = 0, Ds3 = function() {
        var t = /[^.]+$/.exec(Te && Te.keys && Te.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), De2 = $n2.toString, Df2 = Le3.call(W2), Hf2 = j6._, Nf2 = Gr2("^" + Le3.call(F).replace(Er2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), He3 = vs3 ? g5.Buffer : i4, sn2 = g5.Symbol, Ne2 = g5.Uint8Array, Hs3 = He3 ? He3.allocUnsafe : i4, $e4 = Ts3(W2.getPrototypeOf, W2), Ns3 = W2.create, $s3 = $n2.propertyIsEnumerable, Ue3 = be2.splice, Us3 = sn2 ? sn2.isConcatSpreadable : i4, ee2 = sn2 ? sn2.iterator : i4, gn = sn2 ? sn2.toStringTag : i4, qe2 = function() {
        try {
          var t = Pn2(W2, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), $f2 = g5.clearTimeout !== j6.clearTimeout && g5.clearTimeout, Uf2 = A3 && A3.now !== j6.Date.now && A3.now, qf2 = g5.setTimeout !== j6.setTimeout && g5.setTimeout, Fe3 = X2.ceil, We4 = X2.floor, zr3 = W2.getOwnPropertySymbols, Ff2 = He3 ? He3.isBuffer : i4, qs3 = g5.isFinite, Wf2 = be2.join, Mf2 = Ts3(W2.keys, W2), Q4 = X2.max, nt2 = X2.min, Bf2 = A3.now, Gf2 = g5.parseInt, Fs3 = X2.random, zf2 = be2.reverse, Kr2 = Pn2(g5, "DataView"), re3 = Pn2(g5, "Map"), Jr2 = Pn2(g5, "Promise"), Un2 = Pn2(g5, "Set"), ie3 = Pn2(g5, "WeakMap"), se2 = Pn2(W2, "create"), Me2 = ie3 && new ie3(), qn2 = {}, Kf2 = Cn(Kr2), Jf2 = Cn(re3), Yf2 = Cn(Jr2), Zf2 = Cn(Un2), Xf = Cn(ie3), Be4 = sn2 ? sn2.prototype : i4, ue3 = Be4 ? Be4.valueOf : i4, Ws3 = Be4 ? Be4.toString : i4;
      function a4(t) {
        if (J2(t) && !b5(t) && !(t instanceof N11)) {
          if (t instanceof Pt2) return t;
          if (F.call(t, "__wrapped__")) return Mu2(t);
        }
        return new Pt2(t);
      }
      var Fn2 = /* @__PURE__ */ function() {
        function t() {
        }
        return function(n5) {
          if (!K4(n5)) return {};
          if (Ns3) return Ns3(n5);
          t.prototype = n5;
          var e2 = new t();
          return t.prototype = i4, e2;
        };
      }();
      function Ge3() {
      }
      function Pt2(t, n5) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n5, this.__index__ = 0, this.__values__ = i4;
      }
      a4.templateSettings = { escape: ao2, evaluate: oo2, interpolate: Xi3, variable: "", imports: { _: a4 } }, a4.prototype = Ge3.prototype, a4.prototype.constructor = a4, Pt2.prototype = Fn2(Ge3.prototype), Pt2.prototype.constructor = Pt2;
      function N11(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Ht3, this.__views__ = [];
      }
      function Qf() {
        var t = new N11(this.__wrapped__);
        return t.__actions__ = ut2(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ut2(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ut2(this.__views__), t;
      }
      function Vf() {
        if (this.__filtered__) {
          var t = new N11(this);
          t.__dir__ = -1, t.__filtered__ = true;
        } else t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function kf2() {
        var t = this.__wrapped__.value(), n5 = this.__dir__, e2 = b5(t), r3 = n5 < 0, u4 = e2 ? t.length : 0, o5 = ch2(0, u4, this.__views__), f5 = o5.start, c6 = o5.end, l5 = c6 - f5, v5 = r3 ? c6 : f5 - 1, _3 = this.__iteratees__, m5 = _3.length, C5 = 0, I3 = nt2(l5, this.__takeCount__);
        if (!e2 || !r3 && u4 == l5 && I3 == l5) return cu2(t, this.__actions__);
        var y7 = [];
        t: for (; l5-- && C5 < I3; ) {
          v5 += n5;
          for (var L6 = -1, S5 = t[v5]; ++L6 < m5; ) {
            var H = _3[L6], $4 = H.iteratee, dt2 = H.type, st2 = $4(S5);
            if (dt2 == za2) S5 = st2;
            else if (!st2) {
              if (dt2 == zi2) continue t;
              break t;
            }
          }
          y7[C5++] = S5;
        }
        return y7;
      }
      N11.prototype = Fn2(Ge3.prototype), N11.prototype.constructor = N11;
      function vn(t) {
        var n5 = -1, e2 = t == null ? 0 : t.length;
        for (this.clear(); ++n5 < e2; ) {
          var r3 = t[n5];
          this.set(r3[0], r3[1]);
        }
      }
      function jf() {
        this.__data__ = se2 ? se2(null) : {}, this.size = 0;
      }
      function tc(t) {
        var n5 = this.has(t) && delete this.__data__[t];
        return this.size -= n5 ? 1 : 0, n5;
      }
      function nc(t) {
        var n5 = this.__data__;
        if (se2) {
          var e2 = n5[t];
          return e2 === jt3 ? i4 : e2;
        }
        return F.call(n5, t) ? n5[t] : i4;
      }
      function ec(t) {
        var n5 = this.__data__;
        return se2 ? n5[t] !== i4 : F.call(n5, t);
      }
      function rc(t, n5) {
        var e2 = this.__data__;
        return this.size += this.has(t) ? 0 : 1, e2[t] = se2 && n5 === i4 ? jt3 : n5, this;
      }
      vn.prototype.clear = jf, vn.prototype.delete = tc, vn.prototype.get = nc, vn.prototype.has = ec, vn.prototype.set = rc;
      function Bt3(t) {
        var n5 = -1, e2 = t == null ? 0 : t.length;
        for (this.clear(); ++n5 < e2; ) {
          var r3 = t[n5];
          this.set(r3[0], r3[1]);
        }
      }
      function ic() {
        this.__data__ = [], this.size = 0;
      }
      function sc(t) {
        var n5 = this.__data__, e2 = ze2(n5, t);
        if (e2 < 0) return false;
        var r3 = n5.length - 1;
        return e2 == r3 ? n5.pop() : Ue3.call(n5, e2, 1), --this.size, true;
      }
      function uc(t) {
        var n5 = this.__data__, e2 = ze2(n5, t);
        return e2 < 0 ? i4 : n5[e2][1];
      }
      function ac(t) {
        return ze2(this.__data__, t) > -1;
      }
      function oc(t, n5) {
        var e2 = this.__data__, r3 = ze2(e2, t);
        return r3 < 0 ? (++this.size, e2.push([t, n5])) : e2[r3][1] = n5, this;
      }
      Bt3.prototype.clear = ic, Bt3.prototype.delete = sc, Bt3.prototype.get = uc, Bt3.prototype.has = ac, Bt3.prototype.set = oc;
      function Gt3(t) {
        var n5 = -1, e2 = t == null ? 0 : t.length;
        for (this.clear(); ++n5 < e2; ) {
          var r3 = t[n5];
          this.set(r3[0], r3[1]);
        }
      }
      function fc() {
        this.size = 0, this.__data__ = { hash: new vn(), map: new (re3 || Bt3)(), string: new vn() };
      }
      function cc(t) {
        var n5 = er3(this, t).delete(t);
        return this.size -= n5 ? 1 : 0, n5;
      }
      function hc(t) {
        return er3(this, t).get(t);
      }
      function lc(t) {
        return er3(this, t).has(t);
      }
      function pc(t, n5) {
        var e2 = er3(this, t), r3 = e2.size;
        return e2.set(t, n5), this.size += e2.size == r3 ? 0 : 1, this;
      }
      Gt3.prototype.clear = fc, Gt3.prototype.delete = cc, Gt3.prototype.get = hc, Gt3.prototype.has = lc, Gt3.prototype.set = pc;
      function _n2(t) {
        var n5 = -1, e2 = t == null ? 0 : t.length;
        for (this.__data__ = new Gt3(); ++n5 < e2; ) this.add(t[n5]);
      }
      function dc(t) {
        return this.__data__.set(t, jt3), this;
      }
      function gc(t) {
        return this.__data__.has(t);
      }
      _n2.prototype.add = _n2.prototype.push = dc, _n2.prototype.has = gc;
      function Ot3(t) {
        var n5 = this.__data__ = new Bt3(t);
        this.size = n5.size;
      }
      function vc() {
        this.__data__ = new Bt3(), this.size = 0;
      }
      function _c(t) {
        var n5 = this.__data__, e2 = n5.delete(t);
        return this.size = n5.size, e2;
      }
      function mc(t) {
        return this.__data__.get(t);
      }
      function wc(t) {
        return this.__data__.has(t);
      }
      function Pc(t, n5) {
        var e2 = this.__data__;
        if (e2 instanceof Bt3) {
          var r3 = e2.__data__;
          if (!re3 || r3.length < w5 - 1) return r3.push([t, n5]), this.size = ++e2.size, this;
          e2 = this.__data__ = new Gt3(r3);
        }
        return e2.set(t, n5), this.size = e2.size, this;
      }
      Ot3.prototype.clear = vc, Ot3.prototype.delete = _c, Ot3.prototype.get = mc, Ot3.prototype.has = wc, Ot3.prototype.set = Pc;
      function Ms3(t, n5) {
        var e2 = b5(t), r3 = !e2 && An(t), u4 = !e2 && !r3 && cn2(t), o5 = !e2 && !r3 && !u4 && Gn2(t), f5 = e2 || r3 || u4 || o5, c6 = f5 ? Wr(t.length, bf2) : [], l5 = c6.length;
        for (var v5 in t) (n5 || F.call(t, v5)) && !(f5 && (v5 == "length" || u4 && (v5 == "offset" || v5 == "parent") || o5 && (v5 == "buffer" || v5 == "byteLength" || v5 == "byteOffset") || Yt3(v5, l5))) && c6.push(v5);
        return c6;
      }
      function Bs3(t) {
        var n5 = t.length;
        return n5 ? t[ri(0, n5 - 1)] : i4;
      }
      function Cc(t, n5) {
        return rr3(ut2(t), mn(n5, 0, t.length));
      }
      function Ac(t) {
        return rr3(ut2(t));
      }
      function Yr2(t, n5, e2) {
        (e2 !== i4 && !Rt2(t[n5], e2) || e2 === i4 && !(n5 in t)) && zt3(t, n5, e2);
      }
      function ae2(t, n5, e2) {
        var r3 = t[n5];
        (!(F.call(t, n5) && Rt2(r3, e2)) || e2 === i4 && !(n5 in t)) && zt3(t, n5, e2);
      }
      function ze2(t, n5) {
        for (var e2 = t.length; e2--; ) if (Rt2(t[e2][0], n5)) return e2;
        return -1;
      }
      function Ic(t, n5, e2, r3) {
        return un2(t, function(u4, o5, f5) {
          n5(r3, u4, e2(u4), f5);
        }), r3;
      }
      function Gs3(t, n5) {
        return t && $t3(n5, V4(n5), t);
      }
      function xc(t, n5) {
        return t && $t3(n5, ot2(n5), t);
      }
      function zt3(t, n5, e2) {
        n5 == "__proto__" && qe2 ? qe2(t, n5, { configurable: true, enumerable: true, value: e2, writable: true }) : t[n5] = e2;
      }
      function Zr(t, n5) {
        for (var e2 = -1, r3 = n5.length, u4 = d4(r3), o5 = t == null; ++e2 < r3; ) u4[e2] = o5 ? i4 : Oi2(t, n5[e2]);
        return u4;
      }
      function mn(t, n5, e2) {
        return t === t && (e2 !== i4 && (t = t <= e2 ? t : e2), n5 !== i4 && (t = t >= n5 ? t : n5)), t;
      }
      function Ct3(t, n5, e2, r3, u4, o5) {
        var f5, c6 = n5 & Tt3, l5 = n5 & Ft3, v5 = n5 & En2;
        if (e2 && (f5 = u4 ? e2(t, r3, u4, o5) : e2(t)), f5 !== i4) return f5;
        if (!K4(t)) return t;
        var _3 = b5(t);
        if (_3) {
          if (f5 = lh2(t), !c6) return ut2(t, f5);
        } else {
          var m5 = et2(t), C5 = m5 == Ae2 || m5 == Ki2;
          if (cn2(t)) return pu2(t, c6);
          if (m5 == Mt3 || m5 == Rn || C5 && !u4) {
            if (f5 = l5 || C5 ? {} : Lu(t), !c6) return l5 ? nh2(t, xc(f5, t)) : th2(t, Gs3(f5, t));
          } else {
            if (!B3[m5]) return u4 ? t : {};
            f5 = ph(t, m5, c6);
          }
        }
        o5 || (o5 = new Ot3());
        var I3 = o5.get(t);
        if (I3) return I3;
        o5.set(t, f5), aa2(t) ? t.forEach(function(S5) {
          f5.add(Ct3(S5, n5, e2, S5, t, o5));
        }) : sa2(t) && t.forEach(function(S5, H) {
          f5.set(H, Ct3(S5, n5, e2, H, t, o5));
        });
        var y7 = v5 ? l5 ? di : pi2 : l5 ? ot2 : V4, L6 = _3 ? i4 : y7(t);
        return mt2(L6 || t, function(S5, H) {
          L6 && (H = S5, S5 = t[H]), ae2(f5, H, Ct3(S5, n5, e2, H, t, o5));
        }), f5;
      }
      function Ec(t) {
        var n5 = V4(t);
        return function(e2) {
          return zs3(e2, t, n5);
        };
      }
      function zs3(t, n5, e2) {
        var r3 = e2.length;
        if (t == null) return !r3;
        for (t = W2(t); r3--; ) {
          var u4 = e2[r3], o5 = n5[u4], f5 = t[u4];
          if (f5 === i4 && !(u4 in t) || !o5(f5)) return false;
        }
        return true;
      }
      function Ks3(t, n5, e2) {
        if (typeof t != "function") throw new wt2(R3);
        return de3(function() {
          t.apply(i4, e2);
        }, n5);
      }
      function oe3(t, n5, e2, r3) {
        var u4 = -1, o5 = Se2, f5 = true, c6 = t.length, l5 = [], v5 = n5.length;
        if (!c6) return l5;
        e2 && (n5 = z5(n5, ht2(e2))), r3 ? (o5 = Hr2, f5 = false) : n5.length >= w5 && (o5 = ne3, f5 = false, n5 = new _n2(n5));
        t: for (; ++u4 < c6; ) {
          var _3 = t[u4], m5 = e2 == null ? _3 : e2(_3);
          if (_3 = r3 || _3 !== 0 ? _3 : 0, f5 && m5 === m5) {
            for (var C5 = v5; C5--; ) if (n5[C5] === m5) continue t;
            l5.push(_3);
          } else o5(n5, m5, r3) || l5.push(_3);
        }
        return l5;
      }
      var un2 = mu2(Nt2), Js3 = mu2(Qr2, true);
      function yc(t, n5) {
        var e2 = true;
        return un2(t, function(r3, u4, o5) {
          return e2 = !!n5(r3, u4, o5), e2;
        }), e2;
      }
      function Ke3(t, n5, e2) {
        for (var r3 = -1, u4 = t.length; ++r3 < u4; ) {
          var o5 = t[r3], f5 = n5(o5);
          if (f5 != null && (c6 === i4 ? f5 === f5 && !pt2(f5) : e2(f5, c6))) var c6 = f5, l5 = o5;
        }
        return l5;
      }
      function Sc(t, n5, e2, r3) {
        var u4 = t.length;
        for (e2 = T4(e2), e2 < 0 && (e2 = -e2 > u4 ? 0 : u4 + e2), r3 = r3 === i4 || r3 > u4 ? u4 : T4(r3), r3 < 0 && (r3 += u4), r3 = e2 > r3 ? 0 : fa2(r3); e2 < r3; ) t[e2++] = n5;
        return t;
      }
      function Ys3(t, n5) {
        var e2 = [];
        return un2(t, function(r3, u4, o5) {
          n5(r3, u4, o5) && e2.push(r3);
        }), e2;
      }
      function tt2(t, n5, e2, r3, u4) {
        var o5 = -1, f5 = t.length;
        for (e2 || (e2 = gh), u4 || (u4 = []); ++o5 < f5; ) {
          var c6 = t[o5];
          n5 > 0 && e2(c6) ? n5 > 1 ? tt2(c6, n5 - 1, e2, r3, u4) : en2(u4, c6) : r3 || (u4[u4.length] = c6);
        }
        return u4;
      }
      var Xr = wu2(), Zs3 = wu2(true);
      function Nt2(t, n5) {
        return t && Xr(t, n5, V4);
      }
      function Qr2(t, n5) {
        return t && Zs3(t, n5, V4);
      }
      function Je3(t, n5) {
        return nn2(n5, function(e2) {
          return Zt3(t[e2]);
        });
      }
      function wn2(t, n5) {
        n5 = on2(n5, t);
        for (var e2 = 0, r3 = n5.length; t != null && e2 < r3; ) t = t[Ut3(n5[e2++])];
        return e2 && e2 == r3 ? t : i4;
      }
      function Xs3(t, n5, e2) {
        var r3 = n5(t);
        return b5(t) ? r3 : en2(r3, e2(t));
      }
      function rt2(t) {
        return t == null ? t === i4 ? to2 : ka2 : gn && gn in W2(t) ? fh2(t) : Ah(t);
      }
      function Vr2(t, n5) {
        return t > n5;
      }
      function Oc(t, n5) {
        return t != null && F.call(t, n5);
      }
      function Rc(t, n5) {
        return t != null && n5 in W2(t);
      }
      function bc(t, n5, e2) {
        return t >= nt2(n5, e2) && t < Q4(n5, e2);
      }
      function kr2(t, n5, e2) {
        for (var r3 = e2 ? Hr2 : Se2, u4 = t[0].length, o5 = t.length, f5 = o5, c6 = d4(o5), l5 = 1 / 0, v5 = []; f5--; ) {
          var _3 = t[f5];
          f5 && n5 && (_3 = z5(_3, ht2(n5))), l5 = nt2(_3.length, l5), c6[f5] = !e2 && (n5 || u4 >= 120 && _3.length >= 120) ? new _n2(f5 && _3) : i4;
        }
        _3 = t[0];
        var m5 = -1, C5 = c6[0];
        t: for (; ++m5 < u4 && v5.length < l5; ) {
          var I3 = _3[m5], y7 = n5 ? n5(I3) : I3;
          if (I3 = e2 || I3 !== 0 ? I3 : 0, !(C5 ? ne3(C5, y7) : r3(v5, y7, e2))) {
            for (f5 = o5; --f5; ) {
              var L6 = c6[f5];
              if (!(L6 ? ne3(L6, y7) : r3(t[f5], y7, e2))) continue t;
            }
            C5 && C5.push(y7), v5.push(I3);
          }
        }
        return v5;
      }
      function Tc(t, n5, e2, r3) {
        return Nt2(t, function(u4, o5, f5) {
          n5(r3, e2(u4), o5, f5);
        }), r3;
      }
      function fe3(t, n5, e2) {
        n5 = on2(n5, t), t = $u2(t, n5);
        var r3 = t == null ? t : t[Ut3(It2(n5))];
        return r3 == null ? i4 : ct2(r3, t, e2);
      }
      function Qs3(t) {
        return J2(t) && rt2(t) == Rn;
      }
      function Lc(t) {
        return J2(t) && rt2(t) == te;
      }
      function Dc(t) {
        return J2(t) && rt2(t) == Xn2;
      }
      function ce3(t, n5, e2, r3, u4) {
        return t === n5 ? true : t == null || n5 == null || !J2(t) && !J2(n5) ? t !== t && n5 !== n5 : Hc(t, n5, e2, r3, ce3, u4);
      }
      function Hc(t, n5, e2, r3, u4, o5) {
        var f5 = b5(t), c6 = b5(n5), l5 = f5 ? Pe2 : et2(t), v5 = c6 ? Pe2 : et2(n5);
        l5 = l5 == Rn ? Mt3 : l5, v5 = v5 == Rn ? Mt3 : v5;
        var _3 = l5 == Mt3, m5 = v5 == Mt3, C5 = l5 == v5;
        if (C5 && cn2(t)) {
          if (!cn2(n5)) return false;
          f5 = true, _3 = false;
        }
        if (C5 && !_3) return o5 || (o5 = new Ot3()), f5 || Gn2(t) ? Ru2(t, n5, e2, r3, u4, o5) : ah2(t, n5, l5, e2, r3, u4, o5);
        if (!(e2 & yn2)) {
          var I3 = _3 && F.call(t, "__wrapped__"), y7 = m5 && F.call(n5, "__wrapped__");
          if (I3 || y7) {
            var L6 = I3 ? t.value() : t, S5 = y7 ? n5.value() : n5;
            return o5 || (o5 = new Ot3()), u4(L6, S5, e2, r3, o5);
          }
        }
        return C5 ? (o5 || (o5 = new Ot3()), oh2(t, n5, e2, r3, u4, o5)) : false;
      }
      function Nc(t) {
        return J2(t) && et2(t) == Et2;
      }
      function jr2(t, n5, e2, r3) {
        var u4 = e2.length, o5 = u4, f5 = !r3;
        if (t == null) return !o5;
        for (t = W2(t); u4--; ) {
          var c6 = e2[u4];
          if (f5 && c6[2] ? c6[1] !== t[c6[0]] : !(c6[0] in t)) return false;
        }
        for (; ++u4 < o5; ) {
          c6 = e2[u4];
          var l5 = c6[0], v5 = t[l5], _3 = c6[1];
          if (f5 && c6[2]) {
            if (v5 === i4 && !(l5 in t)) return false;
          } else {
            var m5 = new Ot3();
            if (r3) var C5 = r3(v5, _3, l5, t, n5, m5);
            if (!(C5 === i4 ? ce3(_3, v5, yn2 | me3, r3, m5) : C5)) return false;
          }
        }
        return true;
      }
      function Vs3(t) {
        if (!K4(t) || _h(t)) return false;
        var n5 = Zt3(t) ? Nf2 : xo2;
        return n5.test(Cn(t));
      }
      function $c(t) {
        return J2(t) && rt2(t) == Vn2;
      }
      function Uc(t) {
        return J2(t) && et2(t) == yt2;
      }
      function qc(t) {
        return J2(t) && fr2(t.length) && !!G[rt2(t)];
      }
      function ks3(t) {
        return typeof t == "function" ? t : t == null ? ft2 : typeof t == "object" ? b5(t) ? nu2(t[0], t[1]) : tu2(t) : Pa2(t);
      }
      function ti(t) {
        if (!pe3(t)) return Mf2(t);
        var n5 = [];
        for (var e2 in W2(t)) F.call(t, e2) && e2 != "constructor" && n5.push(e2);
        return n5;
      }
      function Fc(t) {
        if (!K4(t)) return Ch(t);
        var n5 = pe3(t), e2 = [];
        for (var r3 in t) r3 == "constructor" && (n5 || !F.call(t, r3)) || e2.push(r3);
        return e2;
      }
      function ni(t, n5) {
        return t < n5;
      }
      function js3(t, n5) {
        var e2 = -1, r3 = at2(t) ? d4(t.length) : [];
        return un2(t, function(u4, o5, f5) {
          r3[++e2] = n5(u4, o5, f5);
        }), r3;
      }
      function tu2(t) {
        var n5 = vi2(t);
        return n5.length == 1 && n5[0][2] ? Hu(n5[0][0], n5[0][1]) : function(e2) {
          return e2 === t || jr2(e2, t, n5);
        };
      }
      function nu2(t, n5) {
        return mi(t) && Du2(n5) ? Hu(Ut3(t), n5) : function(e2) {
          var r3 = Oi2(e2, t);
          return r3 === i4 && r3 === n5 ? Ri2(e2, t) : ce3(n5, r3, yn2 | me3);
        };
      }
      function Ye3(t, n5, e2, r3, u4) {
        t !== n5 && Xr(n5, function(o5, f5) {
          if (u4 || (u4 = new Ot3()), K4(o5)) Wc(t, n5, f5, e2, Ye3, r3, u4);
          else {
            var c6 = r3 ? r3(Pi2(t, f5), o5, f5 + "", t, n5, u4) : i4;
            c6 === i4 && (c6 = o5), Yr2(t, f5, c6);
          }
        }, ot2);
      }
      function Wc(t, n5, e2, r3, u4, o5, f5) {
        var c6 = Pi2(t, e2), l5 = Pi2(n5, e2), v5 = f5.get(l5);
        if (v5) {
          Yr2(t, e2, v5);
          return;
        }
        var _3 = o5 ? o5(c6, l5, e2 + "", t, n5, f5) : i4, m5 = _3 === i4;
        if (m5) {
          var C5 = b5(l5), I3 = !C5 && cn2(l5), y7 = !C5 && !I3 && Gn2(l5);
          _3 = l5, C5 || I3 || y7 ? b5(c6) ? _3 = c6 : Y(c6) ? _3 = ut2(c6) : I3 ? (m5 = false, _3 = pu2(l5, true)) : y7 ? (m5 = false, _3 = du2(l5, true)) : _3 = [] : ge3(l5) || An(l5) ? (_3 = c6, An(c6) ? _3 = ca2(c6) : (!K4(c6) || Zt3(c6)) && (_3 = Lu(l5))) : m5 = false;
        }
        m5 && (f5.set(l5, _3), u4(_3, l5, r3, o5, f5), f5.delete(l5)), Yr2(t, e2, _3);
      }
      function eu2(t, n5) {
        var e2 = t.length;
        if (e2) return n5 += n5 < 0 ? e2 : 0, Yt3(n5, e2) ? t[n5] : i4;
      }
      function ru2(t, n5, e2) {
        n5.length ? n5 = z5(n5, function(o5) {
          return b5(o5) ? function(f5) {
            return wn2(f5, o5.length === 1 ? o5[0] : o5);
          } : o5;
        }) : n5 = [ft2];
        var r3 = -1;
        n5 = z5(n5, ht2(E7()));
        var u4 = js3(t, function(o5, f5, c6) {
          var l5 = z5(n5, function(v5) {
            return v5(o5);
          });
          return { criteria: l5, index: ++r3, value: o5 };
        });
        return pf2(u4, function(o5, f5) {
          return jc(o5, f5, e2);
        });
      }
      function Mc(t, n5) {
        return iu2(t, n5, function(e2, r3) {
          return Ri2(t, r3);
        });
      }
      function iu2(t, n5, e2) {
        for (var r3 = -1, u4 = n5.length, o5 = {}; ++r3 < u4; ) {
          var f5 = n5[r3], c6 = wn2(t, f5);
          e2(c6, f5) && he3(o5, on2(f5, t), c6);
        }
        return o5;
      }
      function Bc(t) {
        return function(n5) {
          return wn2(n5, t);
        };
      }
      function ei(t, n5, e2, r3) {
        var u4 = r3 ? lf2 : Ln2, o5 = -1, f5 = n5.length, c6 = t;
        for (t === n5 && (n5 = ut2(n5)), e2 && (c6 = z5(t, ht2(e2))); ++o5 < f5; ) for (var l5 = 0, v5 = n5[o5], _3 = e2 ? e2(v5) : v5; (l5 = u4(c6, _3, l5, r3)) > -1; ) c6 !== t && Ue3.call(c6, l5, 1), Ue3.call(t, l5, 1);
        return t;
      }
      function su(t, n5) {
        for (var e2 = t ? n5.length : 0, r3 = e2 - 1; e2--; ) {
          var u4 = n5[e2];
          if (e2 == r3 || u4 !== o5) {
            var o5 = u4;
            Yt3(u4) ? Ue3.call(t, u4, 1) : ui(t, u4);
          }
        }
        return t;
      }
      function ri(t, n5) {
        return t + We4(Fs3() * (n5 - t + 1));
      }
      function Gc(t, n5, e2, r3) {
        for (var u4 = -1, o5 = Q4(Fe3((n5 - t) / (e2 || 1)), 0), f5 = d4(o5); o5--; ) f5[r3 ? o5 : ++u4] = t, t += e2;
        return f5;
      }
      function ii(t, n5) {
        var e2 = "";
        if (!t || n5 < 1 || n5 > tn2) return e2;
        do
          n5 % 2 && (e2 += t), n5 = We4(n5 / 2), n5 && (t += t);
        while (n5);
        return e2;
      }
      function D4(t, n5) {
        return Ci2(Nu2(t, n5, ft2), t + "");
      }
      function zc(t) {
        return Bs3(zn2(t));
      }
      function Kc(t, n5) {
        var e2 = zn2(t);
        return rr3(e2, mn(n5, 0, e2.length));
      }
      function he3(t, n5, e2, r3) {
        if (!K4(t)) return t;
        n5 = on2(n5, t);
        for (var u4 = -1, o5 = n5.length, f5 = o5 - 1, c6 = t; c6 != null && ++u4 < o5; ) {
          var l5 = Ut3(n5[u4]), v5 = e2;
          if (l5 === "__proto__" || l5 === "constructor" || l5 === "prototype") return t;
          if (u4 != f5) {
            var _3 = c6[l5];
            v5 = r3 ? r3(_3, l5, c6) : i4, v5 === i4 && (v5 = K4(_3) ? _3 : Yt3(n5[u4 + 1]) ? [] : {});
          }
          ae2(c6, l5, v5), c6 = c6[l5];
        }
        return t;
      }
      var uu = Me2 ? function(t, n5) {
        return Me2.set(t, n5), t;
      } : ft2, Jc = qe2 ? function(t, n5) {
        return qe2(t, "toString", { configurable: true, enumerable: false, value: Ti2(n5), writable: true });
      } : ft2;
      function Yc(t) {
        return rr3(zn2(t));
      }
      function At2(t, n5, e2) {
        var r3 = -1, u4 = t.length;
        n5 < 0 && (n5 = -n5 > u4 ? 0 : u4 + n5), e2 = e2 > u4 ? u4 : e2, e2 < 0 && (e2 += u4), u4 = n5 > e2 ? 0 : e2 - n5 >>> 0, n5 >>>= 0;
        for (var o5 = d4(u4); ++r3 < u4; ) o5[r3] = t[r3 + n5];
        return o5;
      }
      function Zc(t, n5) {
        var e2;
        return un2(t, function(r3, u4, o5) {
          return e2 = n5(r3, u4, o5), !e2;
        }), !!e2;
      }
      function Ze4(t, n5, e2) {
        var r3 = 0, u4 = t == null ? r3 : t.length;
        if (typeof n5 == "number" && n5 === n5 && u4 <= Za2) {
          for (; r3 < u4; ) {
            var o5 = r3 + u4 >>> 1, f5 = t[o5];
            f5 !== null && !pt2(f5) && (e2 ? f5 <= n5 : f5 < n5) ? r3 = o5 + 1 : u4 = o5;
          }
          return u4;
        }
        return si(t, n5, ft2, e2);
      }
      function si(t, n5, e2, r3) {
        var u4 = 0, o5 = t == null ? 0 : t.length;
        if (o5 === 0) return 0;
        n5 = e2(n5);
        for (var f5 = n5 !== n5, c6 = n5 === null, l5 = pt2(n5), v5 = n5 === i4; u4 < o5; ) {
          var _3 = We4((u4 + o5) / 2), m5 = e2(t[_3]), C5 = m5 !== i4, I3 = m5 === null, y7 = m5 === m5, L6 = pt2(m5);
          if (f5) var S5 = r3 || y7;
          else v5 ? S5 = y7 && (r3 || C5) : c6 ? S5 = y7 && C5 && (r3 || !I3) : l5 ? S5 = y7 && C5 && !I3 && (r3 || !L6) : I3 || L6 ? S5 = false : S5 = r3 ? m5 <= n5 : m5 < n5;
          S5 ? u4 = _3 + 1 : o5 = _3;
        }
        return nt2(o5, Ya2);
      }
      function au(t, n5) {
        for (var e2 = -1, r3 = t.length, u4 = 0, o5 = []; ++e2 < r3; ) {
          var f5 = t[e2], c6 = n5 ? n5(f5) : f5;
          if (!e2 || !Rt2(c6, l5)) {
            var l5 = c6;
            o5[u4++] = f5 === 0 ? 0 : f5;
          }
        }
        return o5;
      }
      function ou2(t) {
        return typeof t == "number" ? t : pt2(t) ? we2 : +t;
      }
      function lt2(t) {
        if (typeof t == "string") return t;
        if (b5(t)) return z5(t, lt2) + "";
        if (pt2(t)) return Ws3 ? Ws3.call(t) : "";
        var n5 = t + "";
        return n5 == "0" && 1 / t == -pn ? "-0" : n5;
      }
      function an2(t, n5, e2) {
        var r3 = -1, u4 = Se2, o5 = t.length, f5 = true, c6 = [], l5 = c6;
        if (e2) f5 = false, u4 = Hr2;
        else if (o5 >= w5) {
          var v5 = n5 ? null : sh2(t);
          if (v5) return Re3(v5);
          f5 = false, u4 = ne3, l5 = new _n2();
        } else l5 = n5 ? [] : c6;
        t: for (; ++r3 < o5; ) {
          var _3 = t[r3], m5 = n5 ? n5(_3) : _3;
          if (_3 = e2 || _3 !== 0 ? _3 : 0, f5 && m5 === m5) {
            for (var C5 = l5.length; C5--; ) if (l5[C5] === m5) continue t;
            n5 && l5.push(m5), c6.push(_3);
          } else u4(l5, m5, e2) || (l5 !== c6 && l5.push(m5), c6.push(_3));
        }
        return c6;
      }
      function ui(t, n5) {
        return n5 = on2(n5, t), t = $u2(t, n5), t == null || delete t[Ut3(It2(n5))];
      }
      function fu2(t, n5, e2, r3) {
        return he3(t, n5, e2(wn2(t, n5)), r3);
      }
      function Xe4(t, n5, e2, r3) {
        for (var u4 = t.length, o5 = r3 ? u4 : -1; (r3 ? o5-- : ++o5 < u4) && n5(t[o5], o5, t); ) ;
        return e2 ? At2(t, r3 ? 0 : o5, r3 ? o5 + 1 : u4) : At2(t, r3 ? o5 + 1 : 0, r3 ? u4 : o5);
      }
      function cu2(t, n5) {
        var e2 = t;
        return e2 instanceof N11 && (e2 = e2.value()), Nr3(n5, function(r3, u4) {
          return u4.func.apply(u4.thisArg, en2([r3], u4.args));
        }, e2);
      }
      function ai(t, n5, e2) {
        var r3 = t.length;
        if (r3 < 2) return r3 ? an2(t[0]) : [];
        for (var u4 = -1, o5 = d4(r3); ++u4 < r3; ) for (var f5 = t[u4], c6 = -1; ++c6 < r3; ) c6 != u4 && (o5[u4] = oe3(o5[u4] || f5, t[c6], n5, e2));
        return an2(tt2(o5, 1), n5, e2);
      }
      function hu(t, n5, e2) {
        for (var r3 = -1, u4 = t.length, o5 = n5.length, f5 = {}; ++r3 < u4; ) {
          var c6 = r3 < o5 ? n5[r3] : i4;
          e2(f5, t[r3], c6);
        }
        return f5;
      }
      function oi(t) {
        return Y(t) ? t : [];
      }
      function fi(t) {
        return typeof t == "function" ? t : ft2;
      }
      function on2(t, n5) {
        return b5(t) ? t : mi(t, n5) ? [t] : Wu2(q4(t));
      }
      var Xc = D4;
      function fn2(t, n5, e2) {
        var r3 = t.length;
        return e2 = e2 === i4 ? r3 : e2, !n5 && e2 >= r3 ? t : At2(t, n5, e2);
      }
      var lu2 = $f2 || function(t) {
        return j6.clearTimeout(t);
      };
      function pu2(t, n5) {
        if (n5) return t.slice();
        var e2 = t.length, r3 = Hs3 ? Hs3(e2) : new t.constructor(e2);
        return t.copy(r3), r3;
      }
      function ci(t) {
        var n5 = new t.constructor(t.byteLength);
        return new Ne2(n5).set(new Ne2(t)), n5;
      }
      function Qc(t, n5) {
        var e2 = n5 ? ci(t.buffer) : t.buffer;
        return new t.constructor(e2, t.byteOffset, t.byteLength);
      }
      function Vc(t) {
        var n5 = new t.constructor(t.source, Qi3.exec(t));
        return n5.lastIndex = t.lastIndex, n5;
      }
      function kc(t) {
        return ue3 ? W2(ue3.call(t)) : {};
      }
      function du2(t, n5) {
        var e2 = n5 ? ci(t.buffer) : t.buffer;
        return new t.constructor(e2, t.byteOffset, t.length);
      }
      function gu2(t, n5) {
        if (t !== n5) {
          var e2 = t !== i4, r3 = t === null, u4 = t === t, o5 = pt2(t), f5 = n5 !== i4, c6 = n5 === null, l5 = n5 === n5, v5 = pt2(n5);
          if (!c6 && !v5 && !o5 && t > n5 || o5 && f5 && l5 && !c6 && !v5 || r3 && f5 && l5 || !e2 && l5 || !u4) return 1;
          if (!r3 && !o5 && !v5 && t < n5 || v5 && e2 && u4 && !r3 && !o5 || c6 && e2 && u4 || !f5 && u4 || !l5) return -1;
        }
        return 0;
      }
      function jc(t, n5, e2) {
        for (var r3 = -1, u4 = t.criteria, o5 = n5.criteria, f5 = u4.length, c6 = e2.length; ++r3 < f5; ) {
          var l5 = gu2(u4[r3], o5[r3]);
          if (l5) {
            if (r3 >= c6) return l5;
            var v5 = e2[r3];
            return l5 * (v5 == "desc" ? -1 : 1);
          }
        }
        return t.index - n5.index;
      }
      function vu2(t, n5, e2, r3) {
        for (var u4 = -1, o5 = t.length, f5 = e2.length, c6 = -1, l5 = n5.length, v5 = Q4(o5 - f5, 0), _3 = d4(l5 + v5), m5 = !r3; ++c6 < l5; ) _3[c6] = n5[c6];
        for (; ++u4 < f5; ) (m5 || u4 < o5) && (_3[e2[u4]] = t[u4]);
        for (; v5--; ) _3[c6++] = t[u4++];
        return _3;
      }
      function _u2(t, n5, e2, r3) {
        for (var u4 = -1, o5 = t.length, f5 = -1, c6 = e2.length, l5 = -1, v5 = n5.length, _3 = Q4(o5 - c6, 0), m5 = d4(_3 + v5), C5 = !r3; ++u4 < _3; ) m5[u4] = t[u4];
        for (var I3 = u4; ++l5 < v5; ) m5[I3 + l5] = n5[l5];
        for (; ++f5 < c6; ) (C5 || u4 < o5) && (m5[I3 + e2[f5]] = t[u4++]);
        return m5;
      }
      function ut2(t, n5) {
        var e2 = -1, r3 = t.length;
        for (n5 || (n5 = d4(r3)); ++e2 < r3; ) n5[e2] = t[e2];
        return n5;
      }
      function $t3(t, n5, e2, r3) {
        var u4 = !e2;
        e2 || (e2 = {});
        for (var o5 = -1, f5 = n5.length; ++o5 < f5; ) {
          var c6 = n5[o5], l5 = r3 ? r3(e2[c6], t[c6], c6, e2, t) : i4;
          l5 === i4 && (l5 = t[c6]), u4 ? zt3(e2, c6, l5) : ae2(e2, c6, l5);
        }
        return e2;
      }
      function th2(t, n5) {
        return $t3(t, _i2(t), n5);
      }
      function nh2(t, n5) {
        return $t3(t, bu2(t), n5);
      }
      function Qe3(t, n5) {
        return function(e2, r3) {
          var u4 = b5(e2) ? uf2 : Ic, o5 = n5 ? n5() : {};
          return u4(e2, t, E7(r3, 2), o5);
        };
      }
      function Wn2(t) {
        return D4(function(n5, e2) {
          var r3 = -1, u4 = e2.length, o5 = u4 > 1 ? e2[u4 - 1] : i4, f5 = u4 > 2 ? e2[2] : i4;
          for (o5 = t.length > 3 && typeof o5 == "function" ? (u4--, o5) : i4, f5 && it2(e2[0], e2[1], f5) && (o5 = u4 < 3 ? i4 : o5, u4 = 1), n5 = W2(n5); ++r3 < u4; ) {
            var c6 = e2[r3];
            c6 && t(n5, c6, r3, o5);
          }
          return n5;
        });
      }
      function mu2(t, n5) {
        return function(e2, r3) {
          if (e2 == null) return e2;
          if (!at2(e2)) return t(e2, r3);
          for (var u4 = e2.length, o5 = n5 ? u4 : -1, f5 = W2(e2); (n5 ? o5-- : ++o5 < u4) && r3(f5[o5], o5, f5) !== false; ) ;
          return e2;
        };
      }
      function wu2(t) {
        return function(n5, e2, r3) {
          for (var u4 = -1, o5 = W2(n5), f5 = r3(n5), c6 = f5.length; c6--; ) {
            var l5 = f5[t ? c6 : ++u4];
            if (e2(o5[l5], l5, o5) === false) break;
          }
          return n5;
        };
      }
      function eh2(t, n5, e2) {
        var r3 = n5 & vt2, u4 = le3(t);
        function o5() {
          var f5 = this && this !== j6 && this instanceof o5 ? u4 : t;
          return f5.apply(r3 ? e2 : this, arguments);
        }
        return o5;
      }
      function Pu2(t) {
        return function(n5) {
          n5 = q4(n5);
          var e2 = Dn2(n5) ? St2(n5) : i4, r3 = e2 ? e2[0] : n5.charAt(0), u4 = e2 ? fn2(e2, 1).join("") : n5.slice(1);
          return r3[t]() + u4;
        };
      }
      function Mn(t) {
        return function(n5) {
          return Nr3(ma2(_a2(n5).replace(Ko, "")), t, "");
        };
      }
      function le3(t) {
        return function() {
          var n5 = arguments;
          switch (n5.length) {
            case 0:
              return new t();
            case 1:
              return new t(n5[0]);
            case 2:
              return new t(n5[0], n5[1]);
            case 3:
              return new t(n5[0], n5[1], n5[2]);
            case 4:
              return new t(n5[0], n5[1], n5[2], n5[3]);
            case 5:
              return new t(n5[0], n5[1], n5[2], n5[3], n5[4]);
            case 6:
              return new t(n5[0], n5[1], n5[2], n5[3], n5[4], n5[5]);
            case 7:
              return new t(n5[0], n5[1], n5[2], n5[3], n5[4], n5[5], n5[6]);
          }
          var e2 = Fn2(t.prototype), r3 = t.apply(e2, n5);
          return K4(r3) ? r3 : e2;
        };
      }
      function rh2(t, n5, e2) {
        var r3 = le3(t);
        function u4() {
          for (var o5 = arguments.length, f5 = d4(o5), c6 = o5, l5 = Bn(u4); c6--; ) f5[c6] = arguments[c6];
          var v5 = o5 < 3 && f5[0] !== l5 && f5[o5 - 1] !== l5 ? [] : rn2(f5, l5);
          if (o5 -= v5.length, o5 < e2) return Eu2(t, n5, Ve2, u4.placeholder, i4, f5, v5, i4, i4, e2 - o5);
          var _3 = this && this !== j6 && this instanceof u4 ? r3 : t;
          return ct2(_3, this, f5);
        }
        return u4;
      }
      function Cu2(t) {
        return function(n5, e2, r3) {
          var u4 = W2(n5);
          if (!at2(n5)) {
            var o5 = E7(e2, 3);
            n5 = V4(n5), e2 = function(c6) {
              return o5(u4[c6], c6, u4);
            };
          }
          var f5 = t(n5, e2, r3);
          return f5 > -1 ? u4[o5 ? n5[f5] : f5] : i4;
        };
      }
      function Au2(t) {
        return Jt4(function(n5) {
          var e2 = n5.length, r3 = e2, u4 = Pt2.prototype.thru;
          for (t && n5.reverse(); r3--; ) {
            var o5 = n5[r3];
            if (typeof o5 != "function") throw new wt2(R3);
            if (u4 && !f5 && nr3(o5) == "wrapper") var f5 = new Pt2([], true);
          }
          for (r3 = f5 ? r3 : e2; ++r3 < e2; ) {
            o5 = n5[r3];
            var c6 = nr3(o5), l5 = c6 == "wrapper" ? gi2(o5) : i4;
            l5 && wi2(l5[0]) && l5[1] == (Wt3 | Lt3 | Dt3 | Yn2) && !l5[4].length && l5[9] == 1 ? f5 = f5[nr3(l5[0])].apply(f5, l5[3]) : f5 = o5.length == 1 && wi2(o5) ? f5[c6]() : f5.thru(o5);
          }
          return function() {
            var v5 = arguments, _3 = v5[0];
            if (f5 && v5.length == 1 && b5(_3)) return f5.plant(_3).value();
            for (var m5 = 0, C5 = e2 ? n5[m5].apply(this, v5) : _3; ++m5 < e2; ) C5 = n5[m5].call(this, C5);
            return C5;
          };
        });
      }
      function Ve2(t, n5, e2, r3, u4, o5, f5, c6, l5, v5) {
        var _3 = n5 & Wt3, m5 = n5 & vt2, C5 = n5 & ln, I3 = n5 & (Lt3 | Sn2), y7 = n5 & gr3, L6 = C5 ? i4 : le3(t);
        function S5() {
          for (var H = arguments.length, $4 = d4(H), dt2 = H; dt2--; ) $4[dt2] = arguments[dt2];
          if (I3) var st2 = Bn(S5), gt2 = gf2($4, st2);
          if (r3 && ($4 = vu2($4, r3, u4, I3)), o5 && ($4 = _u2($4, o5, f5, I3)), H -= gt2, I3 && H < v5) {
            var Z2 = rn2($4, st2);
            return Eu2(t, n5, Ve2, S5.placeholder, e2, $4, Z2, c6, l5, v5 - H);
          }
          var bt3 = m5 ? e2 : this, Qt2 = C5 ? bt3[t] : t;
          return H = $4.length, c6 ? $4 = Ih($4, c6) : y7 && H > 1 && $4.reverse(), _3 && l5 < H && ($4.length = l5), this && this !== j6 && this instanceof S5 && (Qt2 = L6 || le3(Qt2)), Qt2.apply(bt3, $4);
        }
        return S5;
      }
      function Iu2(t, n5) {
        return function(e2, r3) {
          return Tc(e2, t, n5(r3), {});
        };
      }
      function ke3(t, n5) {
        return function(e2, r3) {
          var u4;
          if (e2 === i4 && r3 === i4) return n5;
          if (e2 !== i4 && (u4 = e2), r3 !== i4) {
            if (u4 === i4) return r3;
            typeof e2 == "string" || typeof r3 == "string" ? (e2 = lt2(e2), r3 = lt2(r3)) : (e2 = ou2(e2), r3 = ou2(r3)), u4 = t(e2, r3);
          }
          return u4;
        };
      }
      function hi2(t) {
        return Jt4(function(n5) {
          return n5 = z5(n5, ht2(E7())), D4(function(e2) {
            var r3 = this;
            return t(n5, function(u4) {
              return ct2(u4, r3, e2);
            });
          });
        });
      }
      function je3(t, n5) {
        n5 = n5 === i4 ? " " : lt2(n5);
        var e2 = n5.length;
        if (e2 < 2) return e2 ? ii(n5, t) : n5;
        var r3 = ii(n5, Fe3(t / Hn2(n5)));
        return Dn2(n5) ? fn2(St2(r3), 0, t).join("") : r3.slice(0, t);
      }
      function ih2(t, n5, e2, r3) {
        var u4 = n5 & vt2, o5 = le3(t);
        function f5() {
          for (var c6 = -1, l5 = arguments.length, v5 = -1, _3 = r3.length, m5 = d4(_3 + l5), C5 = this && this !== j6 && this instanceof f5 ? o5 : t; ++v5 < _3; ) m5[v5] = r3[v5];
          for (; l5--; ) m5[v5++] = arguments[++c6];
          return ct2(C5, u4 ? e2 : this, m5);
        }
        return f5;
      }
      function xu2(t) {
        return function(n5, e2, r3) {
          return r3 && typeof r3 != "number" && it2(n5, e2, r3) && (e2 = r3 = i4), n5 = Xt4(n5), e2 === i4 ? (e2 = n5, n5 = 0) : e2 = Xt4(e2), r3 = r3 === i4 ? n5 < e2 ? 1 : -1 : Xt4(r3), Gc(n5, e2, r3, t);
        };
      }
      function tr3(t) {
        return function(n5, e2) {
          return typeof n5 == "string" && typeof e2 == "string" || (n5 = xt2(n5), e2 = xt2(e2)), t(n5, e2);
        };
      }
      function Eu2(t, n5, e2, r3, u4, o5, f5, c6, l5, v5) {
        var _3 = n5 & Lt3, m5 = _3 ? f5 : i4, C5 = _3 ? i4 : f5, I3 = _3 ? o5 : i4, y7 = _3 ? i4 : o5;
        n5 |= _3 ? Dt3 : On2, n5 &= ~(_3 ? On2 : Dt3), n5 & Gi3 || (n5 &= ~(vt2 | ln));
        var L6 = [t, n5, u4, I3, m5, y7, C5, c6, l5, v5], S5 = e2.apply(i4, L6);
        return wi2(t) && Uu(S5, L6), S5.placeholder = r3, qu(S5, t, n5);
      }
      function li(t) {
        var n5 = X2[t];
        return function(e2, r3) {
          if (e2 = xt2(e2), r3 = r3 == null ? 0 : nt2(T4(r3), 292), r3 && qs3(e2)) {
            var u4 = (q4(e2) + "e").split("e"), o5 = n5(u4[0] + "e" + (+u4[1] + r3));
            return u4 = (q4(o5) + "e").split("e"), +(u4[0] + "e" + (+u4[1] - r3));
          }
          return n5(e2);
        };
      }
      var sh2 = Un2 && 1 / Re3(new Un2([, -0]))[1] == pn ? function(t) {
        return new Un2(t);
      } : Hi3;
      function yu2(t) {
        return function(n5) {
          var e2 = et2(n5);
          return e2 == Et2 ? Br(n5) : e2 == yt2 ? Af2(n5) : df2(n5, t(n5));
        };
      }
      function Kt3(t, n5, e2, r3, u4, o5, f5, c6) {
        var l5 = n5 & ln;
        if (!l5 && typeof t != "function") throw new wt2(R3);
        var v5 = r3 ? r3.length : 0;
        if (v5 || (n5 &= ~(Dt3 | On2), r3 = u4 = i4), f5 = f5 === i4 ? f5 : Q4(T4(f5), 0), c6 = c6 === i4 ? c6 : T4(c6), v5 -= u4 ? u4.length : 0, n5 & On2) {
          var _3 = r3, m5 = u4;
          r3 = u4 = i4;
        }
        var C5 = l5 ? i4 : gi2(t), I3 = [t, n5, e2, r3, u4, _3, m5, o5, f5, c6];
        if (C5 && Ph(I3, C5), t = I3[0], n5 = I3[1], e2 = I3[2], r3 = I3[3], u4 = I3[4], c6 = I3[9] = I3[9] === i4 ? l5 ? 0 : t.length : Q4(I3[9] - v5, 0), !c6 && n5 & (Lt3 | Sn2) && (n5 &= ~(Lt3 | Sn2)), !n5 || n5 == vt2) var y7 = eh2(t, n5, e2);
        else n5 == Lt3 || n5 == Sn2 ? y7 = rh2(t, n5, c6) : (n5 == Dt3 || n5 == (vt2 | Dt3)) && !u4.length ? y7 = ih2(t, n5, e2, r3) : y7 = Ve2.apply(i4, I3);
        var L6 = C5 ? uu : Uu;
        return qu(L6(y7, I3), t, n5);
      }
      function Su2(t, n5, e2, r3) {
        return t === i4 || Rt2(t, $n2[e2]) && !F.call(r3, e2) ? n5 : t;
      }
      function Ou2(t, n5, e2, r3, u4, o5) {
        return K4(t) && K4(n5) && (o5.set(n5, t), Ye3(t, n5, i4, Ou2, o5), o5.delete(n5)), t;
      }
      function uh2(t) {
        return ge3(t) ? i4 : t;
      }
      function Ru2(t, n5, e2, r3, u4, o5) {
        var f5 = e2 & yn2, c6 = t.length, l5 = n5.length;
        if (c6 != l5 && !(f5 && l5 > c6)) return false;
        var v5 = o5.get(t), _3 = o5.get(n5);
        if (v5 && _3) return v5 == n5 && _3 == t;
        var m5 = -1, C5 = true, I3 = e2 & me3 ? new _n2() : i4;
        for (o5.set(t, n5), o5.set(n5, t); ++m5 < c6; ) {
          var y7 = t[m5], L6 = n5[m5];
          if (r3) var S5 = f5 ? r3(L6, y7, m5, n5, t, o5) : r3(y7, L6, m5, t, n5, o5);
          if (S5 !== i4) {
            if (S5) continue;
            C5 = false;
            break;
          }
          if (I3) {
            if (!$r2(n5, function(H, $4) {
              if (!ne3(I3, $4) && (y7 === H || u4(y7, H, e2, r3, o5))) return I3.push($4);
            })) {
              C5 = false;
              break;
            }
          } else if (!(y7 === L6 || u4(y7, L6, e2, r3, o5))) {
            C5 = false;
            break;
          }
        }
        return o5.delete(t), o5.delete(n5), C5;
      }
      function ah2(t, n5, e2, r3, u4, o5, f5) {
        switch (e2) {
          case bn2:
            if (t.byteLength != n5.byteLength || t.byteOffset != n5.byteOffset) return false;
            t = t.buffer, n5 = n5.buffer;
          case te:
            return !(t.byteLength != n5.byteLength || !o5(new Ne2(t), new Ne2(n5)));
          case Zn2:
          case Xn2:
          case Qn2:
            return Rt2(+t, +n5);
          case Ce2:
            return t.name == n5.name && t.message == n5.message;
          case Vn2:
          case kn2:
            return t == n5 + "";
          case Et2:
            var c6 = Br;
          case yt2:
            var l5 = r3 & yn2;
            if (c6 || (c6 = Re3), t.size != n5.size && !l5) return false;
            var v5 = f5.get(t);
            if (v5) return v5 == n5;
            r3 |= me3, f5.set(t, n5);
            var _3 = Ru2(c6(t), c6(n5), r3, u4, o5, f5);
            return f5.delete(t), _3;
          case Ie:
            if (ue3) return ue3.call(t) == ue3.call(n5);
        }
        return false;
      }
      function oh2(t, n5, e2, r3, u4, o5) {
        var f5 = e2 & yn2, c6 = pi2(t), l5 = c6.length, v5 = pi2(n5), _3 = v5.length;
        if (l5 != _3 && !f5) return false;
        for (var m5 = l5; m5--; ) {
          var C5 = c6[m5];
          if (!(f5 ? C5 in n5 : F.call(n5, C5))) return false;
        }
        var I3 = o5.get(t), y7 = o5.get(n5);
        if (I3 && y7) return I3 == n5 && y7 == t;
        var L6 = true;
        o5.set(t, n5), o5.set(n5, t);
        for (var S5 = f5; ++m5 < l5; ) {
          C5 = c6[m5];
          var H = t[C5], $4 = n5[C5];
          if (r3) var dt2 = f5 ? r3($4, H, C5, n5, t, o5) : r3(H, $4, C5, t, n5, o5);
          if (!(dt2 === i4 ? H === $4 || u4(H, $4, e2, r3, o5) : dt2)) {
            L6 = false;
            break;
          }
          S5 || (S5 = C5 == "constructor");
        }
        if (L6 && !S5) {
          var st2 = t.constructor, gt2 = n5.constructor;
          st2 != gt2 && "constructor" in t && "constructor" in n5 && !(typeof st2 == "function" && st2 instanceof st2 && typeof gt2 == "function" && gt2 instanceof gt2) && (L6 = false);
        }
        return o5.delete(t), o5.delete(n5), L6;
      }
      function Jt4(t) {
        return Ci2(Nu2(t, i4, zu), t + "");
      }
      function pi2(t) {
        return Xs3(t, V4, _i2);
      }
      function di(t) {
        return Xs3(t, ot2, bu2);
      }
      var gi2 = Me2 ? function(t) {
        return Me2.get(t);
      } : Hi3;
      function nr3(t) {
        for (var n5 = t.name + "", e2 = qn2[n5], r3 = F.call(qn2, n5) ? e2.length : 0; r3--; ) {
          var u4 = e2[r3], o5 = u4.func;
          if (o5 == null || o5 == t) return u4.name;
        }
        return n5;
      }
      function Bn(t) {
        var n5 = F.call(a4, "placeholder") ? a4 : t;
        return n5.placeholder;
      }
      function E7() {
        var t = a4.iteratee || Li2;
        return t = t === Li2 ? ks3 : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function er3(t, n5) {
        var e2 = t.__data__;
        return vh(n5) ? e2[typeof n5 == "string" ? "string" : "hash"] : e2.map;
      }
      function vi2(t) {
        for (var n5 = V4(t), e2 = n5.length; e2--; ) {
          var r3 = n5[e2], u4 = t[r3];
          n5[e2] = [r3, u4, Du2(u4)];
        }
        return n5;
      }
      function Pn2(t, n5) {
        var e2 = wf2(t, n5);
        return Vs3(e2) ? e2 : i4;
      }
      function fh2(t) {
        var n5 = F.call(t, gn), e2 = t[gn];
        try {
          t[gn] = i4;
          var r3 = true;
        } catch {
        }
        var u4 = De2.call(t);
        return r3 && (n5 ? t[gn] = e2 : delete t[gn]), u4;
      }
      var _i2 = zr3 ? function(t) {
        return t == null ? [] : (t = W2(t), nn2(zr3(t), function(n5) {
          return $s3.call(t, n5);
        }));
      } : Ni2, bu2 = zr3 ? function(t) {
        for (var n5 = []; t; ) en2(n5, _i2(t)), t = $e4(t);
        return n5;
      } : Ni2, et2 = rt2;
      (Kr2 && et2(new Kr2(new ArrayBuffer(1))) != bn2 || re3 && et2(new re3()) != Et2 || Jr2 && et2(Jr2.resolve()) != Ji3 || Un2 && et2(new Un2()) != yt2 || ie3 && et2(new ie3()) != jn2) && (et2 = function(t) {
        var n5 = rt2(t), e2 = n5 == Mt3 ? t.constructor : i4, r3 = e2 ? Cn(e2) : "";
        if (r3) switch (r3) {
          case Kf2:
            return bn2;
          case Jf2:
            return Et2;
          case Yf2:
            return Ji3;
          case Zf2:
            return yt2;
          case Xf:
            return jn2;
        }
        return n5;
      });
      function ch2(t, n5, e2) {
        for (var r3 = -1, u4 = e2.length; ++r3 < u4; ) {
          var o5 = e2[r3], f5 = o5.size;
          switch (o5.type) {
            case "drop":
              t += f5;
              break;
            case "dropRight":
              n5 -= f5;
              break;
            case "take":
              n5 = nt2(n5, t + f5);
              break;
            case "takeRight":
              t = Q4(t, n5 - f5);
              break;
          }
        }
        return { start: t, end: n5 };
      }
      function hh2(t) {
        var n5 = t.match(vo2);
        return n5 ? n5[1].split(_o2) : [];
      }
      function Tu(t, n5, e2) {
        n5 = on2(n5, t);
        for (var r3 = -1, u4 = n5.length, o5 = false; ++r3 < u4; ) {
          var f5 = Ut3(n5[r3]);
          if (!(o5 = t != null && e2(t, f5))) break;
          t = t[f5];
        }
        return o5 || ++r3 != u4 ? o5 : (u4 = t == null ? 0 : t.length, !!u4 && fr2(u4) && Yt3(f5, u4) && (b5(t) || An(t)));
      }
      function lh2(t) {
        var n5 = t.length, e2 = new t.constructor(n5);
        return n5 && typeof t[0] == "string" && F.call(t, "index") && (e2.index = t.index, e2.input = t.input), e2;
      }
      function Lu(t) {
        return typeof t.constructor == "function" && !pe3(t) ? Fn2($e4(t)) : {};
      }
      function ph(t, n5, e2) {
        var r3 = t.constructor;
        switch (n5) {
          case te:
            return ci(t);
          case Zn2:
          case Xn2:
            return new r3(+t);
          case bn2:
            return Qc(t, e2);
          case vr3:
          case _r3:
          case mr2:
          case wr3:
          case Pr3:
          case Cr3:
          case Ar3:
          case Ir3:
          case xr3:
            return du2(t, e2);
          case Et2:
            return new r3();
          case Qn2:
          case kn2:
            return new r3(t);
          case Vn2:
            return Vc(t);
          case yt2:
            return new r3();
          case Ie:
            return kc(t);
        }
      }
      function dh(t, n5) {
        var e2 = n5.length;
        if (!e2) return t;
        var r3 = e2 - 1;
        return n5[r3] = (e2 > 1 ? "& " : "") + n5[r3], n5 = n5.join(e2 > 2 ? ", " : " "), t.replace(go2, `{
/* [wrapped with ` + n5 + `] */
`);
      }
      function gh(t) {
        return b5(t) || An(t) || !!(Us3 && t && t[Us3]);
      }
      function Yt3(t, n5) {
        var e2 = typeof t;
        return n5 = n5 ?? tn2, !!n5 && (e2 == "number" || e2 != "symbol" && yo2.test(t)) && t > -1 && t % 1 == 0 && t < n5;
      }
      function it2(t, n5, e2) {
        if (!K4(e2)) return false;
        var r3 = typeof n5;
        return (r3 == "number" ? at2(e2) && Yt3(n5, e2.length) : r3 == "string" && n5 in e2) ? Rt2(e2[n5], t) : false;
      }
      function mi(t, n5) {
        if (b5(t)) return false;
        var e2 = typeof t;
        return e2 == "number" || e2 == "symbol" || e2 == "boolean" || t == null || pt2(t) ? true : co2.test(t) || !fo2.test(t) || n5 != null && t in W2(n5);
      }
      function vh(t) {
        var n5 = typeof t;
        return n5 == "string" || n5 == "number" || n5 == "symbol" || n5 == "boolean" ? t !== "__proto__" : t === null;
      }
      function wi2(t) {
        var n5 = nr3(t), e2 = a4[n5];
        if (typeof e2 != "function" || !(n5 in N11.prototype)) return false;
        if (t === e2) return true;
        var r3 = gi2(e2);
        return !!r3 && t === r3[0];
      }
      function _h(t) {
        return !!Ds3 && Ds3 in t;
      }
      var mh = Te ? Zt3 : $i;
      function pe3(t) {
        var n5 = t && t.constructor, e2 = typeof n5 == "function" && n5.prototype || $n2;
        return t === e2;
      }
      function Du2(t) {
        return t === t && !K4(t);
      }
      function Hu(t, n5) {
        return function(e2) {
          return e2 == null ? false : e2[t] === n5 && (n5 !== i4 || t in W2(e2));
        };
      }
      function wh(t) {
        var n5 = ar3(t, function(r3) {
          return e2.size === Jn2 && e2.clear(), r3;
        }), e2 = n5.cache;
        return n5;
      }
      function Ph(t, n5) {
        var e2 = t[1], r3 = n5[1], u4 = e2 | r3, o5 = u4 < (vt2 | ln | Wt3), f5 = r3 == Wt3 && e2 == Lt3 || r3 == Wt3 && e2 == Yn2 && t[7].length <= n5[8] || r3 == (Wt3 | Yn2) && n5[7].length <= n5[8] && e2 == Lt3;
        if (!(o5 || f5)) return t;
        r3 & vt2 && (t[2] = n5[2], u4 |= e2 & vt2 ? 0 : Gi3);
        var c6 = n5[3];
        if (c6) {
          var l5 = t[3];
          t[3] = l5 ? vu2(l5, c6, n5[4]) : c6, t[4] = l5 ? rn2(t[3], xn2) : n5[4];
        }
        return c6 = n5[5], c6 && (l5 = t[5], t[5] = l5 ? _u2(l5, c6, n5[6]) : c6, t[6] = l5 ? rn2(t[5], xn2) : n5[6]), c6 = n5[7], c6 && (t[7] = c6), r3 & Wt3 && (t[8] = t[8] == null ? n5[8] : nt2(t[8], n5[8])), t[9] == null && (t[9] = n5[9]), t[0] = n5[0], t[1] = u4, t;
      }
      function Ch(t) {
        var n5 = [];
        if (t != null) for (var e2 in W2(t)) n5.push(e2);
        return n5;
      }
      function Ah(t) {
        return De2.call(t);
      }
      function Nu2(t, n5, e2) {
        return n5 = Q4(n5 === i4 ? t.length - 1 : n5, 0), function() {
          for (var r3 = arguments, u4 = -1, o5 = Q4(r3.length - n5, 0), f5 = d4(o5); ++u4 < o5; ) f5[u4] = r3[n5 + u4];
          u4 = -1;
          for (var c6 = d4(n5 + 1); ++u4 < n5; ) c6[u4] = r3[u4];
          return c6[n5] = e2(f5), ct2(t, this, c6);
        };
      }
      function $u2(t, n5) {
        return n5.length < 2 ? t : wn2(t, At2(n5, 0, -1));
      }
      function Ih(t, n5) {
        for (var e2 = t.length, r3 = nt2(n5.length, e2), u4 = ut2(t); r3--; ) {
          var o5 = n5[r3];
          t[r3] = Yt3(o5, e2) ? u4[o5] : i4;
        }
        return t;
      }
      function Pi2(t, n5) {
        if (!(n5 === "constructor" && typeof t[n5] == "function") && n5 != "__proto__") return t[n5];
      }
      var Uu = Fu(uu), de3 = qf2 || function(t, n5) {
        return j6.setTimeout(t, n5);
      }, Ci2 = Fu(Jc);
      function qu(t, n5, e2) {
        var r3 = n5 + "";
        return Ci2(t, dh(r3, xh(hh2(r3), e2)));
      }
      function Fu(t) {
        var n5 = 0, e2 = 0;
        return function() {
          var r3 = Bf2(), u4 = Ga2 - (r3 - e2);
          if (e2 = r3, u4 > 0) {
            if (++n5 >= Ba2) return arguments[0];
          } else n5 = 0;
          return t.apply(i4, arguments);
        };
      }
      function rr3(t, n5) {
        var e2 = -1, r3 = t.length, u4 = r3 - 1;
        for (n5 = n5 === i4 ? r3 : n5; ++e2 < n5; ) {
          var o5 = ri(e2, u4), f5 = t[o5];
          t[o5] = t[e2], t[e2] = f5;
        }
        return t.length = n5, t;
      }
      var Wu2 = wh(function(t) {
        var n5 = [];
        return t.charCodeAt(0) === 46 && n5.push(""), t.replace(ho, function(e2, r3, u4, o5) {
          n5.push(u4 ? o5.replace(Po2, "$1") : r3 || e2);
        }), n5;
      });
      function Ut3(t) {
        if (typeof t == "string" || pt2(t)) return t;
        var n5 = t + "";
        return n5 == "0" && 1 / t == -pn ? "-0" : n5;
      }
      function Cn(t) {
        if (t != null) {
          try {
            return Le3.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function xh(t, n5) {
        return mt2(Xa2, function(e2) {
          var r3 = "_." + e2[0];
          n5 & e2[1] && !Se2(t, r3) && t.push(r3);
        }), t.sort();
      }
      function Mu2(t) {
        if (t instanceof N11) return t.clone();
        var n5 = new Pt2(t.__wrapped__, t.__chain__);
        return n5.__actions__ = ut2(t.__actions__), n5.__index__ = t.__index__, n5.__values__ = t.__values__, n5;
      }
      function Eh(t, n5, e2) {
        (e2 ? it2(t, n5, e2) : n5 === i4) ? n5 = 1 : n5 = Q4(T4(n5), 0);
        var r3 = t == null ? 0 : t.length;
        if (!r3 || n5 < 1) return [];
        for (var u4 = 0, o5 = 0, f5 = d4(Fe3(r3 / n5)); u4 < r3; ) f5[o5++] = At2(t, u4, u4 += n5);
        return f5;
      }
      function yh(t) {
        for (var n5 = -1, e2 = t == null ? 0 : t.length, r3 = 0, u4 = []; ++n5 < e2; ) {
          var o5 = t[n5];
          o5 && (u4[r3++] = o5);
        }
        return u4;
      }
      function Sh() {
        var t = arguments.length;
        if (!t) return [];
        for (var n5 = d4(t - 1), e2 = arguments[0], r3 = t; r3--; ) n5[r3 - 1] = arguments[r3];
        return en2(b5(e2) ? ut2(e2) : [e2], tt2(n5, 1));
      }
      var Oh = D4(function(t, n5) {
        return Y(t) ? oe3(t, tt2(n5, 1, Y, true)) : [];
      }), Rh = D4(function(t, n5) {
        var e2 = It2(n5);
        return Y(e2) && (e2 = i4), Y(t) ? oe3(t, tt2(n5, 1, Y, true), E7(e2, 2)) : [];
      }), bh = D4(function(t, n5) {
        var e2 = It2(n5);
        return Y(e2) && (e2 = i4), Y(t) ? oe3(t, tt2(n5, 1, Y, true), i4, e2) : [];
      });
      function Th(t, n5, e2) {
        var r3 = t == null ? 0 : t.length;
        return r3 ? (n5 = e2 || n5 === i4 ? 1 : T4(n5), At2(t, n5 < 0 ? 0 : n5, r3)) : [];
      }
      function Lh(t, n5, e2) {
        var r3 = t == null ? 0 : t.length;
        return r3 ? (n5 = e2 || n5 === i4 ? 1 : T4(n5), n5 = r3 - n5, At2(t, 0, n5 < 0 ? 0 : n5)) : [];
      }
      function Dh(t, n5) {
        return t && t.length ? Xe4(t, E7(n5, 3), true, true) : [];
      }
      function Hh(t, n5) {
        return t && t.length ? Xe4(t, E7(n5, 3), true) : [];
      }
      function Nh(t, n5, e2, r3) {
        var u4 = t == null ? 0 : t.length;
        return u4 ? (e2 && typeof e2 != "number" && it2(t, n5, e2) && (e2 = 0, r3 = u4), Sc(t, n5, e2, r3)) : [];
      }
      function Bu2(t, n5, e2) {
        var r3 = t == null ? 0 : t.length;
        if (!r3) return -1;
        var u4 = e2 == null ? 0 : T4(e2);
        return u4 < 0 && (u4 = Q4(r3 + u4, 0)), Oe2(t, E7(n5, 3), u4);
      }
      function Gu2(t, n5, e2) {
        var r3 = t == null ? 0 : t.length;
        if (!r3) return -1;
        var u4 = r3 - 1;
        return e2 !== i4 && (u4 = T4(e2), u4 = e2 < 0 ? Q4(r3 + u4, 0) : nt2(u4, r3 - 1)), Oe2(t, E7(n5, 3), u4, true);
      }
      function zu(t) {
        var n5 = t == null ? 0 : t.length;
        return n5 ? tt2(t, 1) : [];
      }
      function $h(t) {
        var n5 = t == null ? 0 : t.length;
        return n5 ? tt2(t, pn) : [];
      }
      function Uh(t, n5) {
        var e2 = t == null ? 0 : t.length;
        return e2 ? (n5 = n5 === i4 ? 1 : T4(n5), tt2(t, n5)) : [];
      }
      function qh(t) {
        for (var n5 = -1, e2 = t == null ? 0 : t.length, r3 = {}; ++n5 < e2; ) {
          var u4 = t[n5];
          r3[u4[0]] = u4[1];
        }
        return r3;
      }
      function Ku(t) {
        return t && t.length ? t[0] : i4;
      }
      function Fh(t, n5, e2) {
        var r3 = t == null ? 0 : t.length;
        if (!r3) return -1;
        var u4 = e2 == null ? 0 : T4(e2);
        return u4 < 0 && (u4 = Q4(r3 + u4, 0)), Ln2(t, n5, u4);
      }
      function Wh(t) {
        var n5 = t == null ? 0 : t.length;
        return n5 ? At2(t, 0, -1) : [];
      }
      var Mh = D4(function(t) {
        var n5 = z5(t, oi);
        return n5.length && n5[0] === t[0] ? kr2(n5) : [];
      }), Bh = D4(function(t) {
        var n5 = It2(t), e2 = z5(t, oi);
        return n5 === It2(e2) ? n5 = i4 : e2.pop(), e2.length && e2[0] === t[0] ? kr2(e2, E7(n5, 2)) : [];
      }), Gh = D4(function(t) {
        var n5 = It2(t), e2 = z5(t, oi);
        return n5 = typeof n5 == "function" ? n5 : i4, n5 && e2.pop(), e2.length && e2[0] === t[0] ? kr2(e2, i4, n5) : [];
      });
      function zh(t, n5) {
        return t == null ? "" : Wf2.call(t, n5);
      }
      function It2(t) {
        var n5 = t == null ? 0 : t.length;
        return n5 ? t[n5 - 1] : i4;
      }
      function Kh(t, n5, e2) {
        var r3 = t == null ? 0 : t.length;
        if (!r3) return -1;
        var u4 = r3;
        return e2 !== i4 && (u4 = T4(e2), u4 = u4 < 0 ? Q4(r3 + u4, 0) : nt2(u4, r3 - 1)), n5 === n5 ? xf2(t, n5, u4) : Oe2(t, Es3, u4, true);
      }
      function Jh(t, n5) {
        return t && t.length ? eu2(t, T4(n5)) : i4;
      }
      var Yh = D4(Ju2);
      function Ju2(t, n5) {
        return t && t.length && n5 && n5.length ? ei(t, n5) : t;
      }
      function Zh(t, n5, e2) {
        return t && t.length && n5 && n5.length ? ei(t, n5, E7(e2, 2)) : t;
      }
      function Xh(t, n5, e2) {
        return t && t.length && n5 && n5.length ? ei(t, n5, i4, e2) : t;
      }
      var Qh = Jt4(function(t, n5) {
        var e2 = t == null ? 0 : t.length, r3 = Zr(t, n5);
        return su(t, z5(n5, function(u4) {
          return Yt3(u4, e2) ? +u4 : u4;
        }).sort(gu2)), r3;
      });
      function Vh(t, n5) {
        var e2 = [];
        if (!(t && t.length)) return e2;
        var r3 = -1, u4 = [], o5 = t.length;
        for (n5 = E7(n5, 3); ++r3 < o5; ) {
          var f5 = t[r3];
          n5(f5, r3, t) && (e2.push(f5), u4.push(r3));
        }
        return su(t, u4), e2;
      }
      function Ai2(t) {
        return t == null ? t : zf2.call(t);
      }
      function kh(t, n5, e2) {
        var r3 = t == null ? 0 : t.length;
        return r3 ? (e2 && typeof e2 != "number" && it2(t, n5, e2) ? (n5 = 0, e2 = r3) : (n5 = n5 == null ? 0 : T4(n5), e2 = e2 === i4 ? r3 : T4(e2)), At2(t, n5, e2)) : [];
      }
      function jh(t, n5) {
        return Ze4(t, n5);
      }
      function tl(t, n5, e2) {
        return si(t, n5, E7(e2, 2));
      }
      function nl(t, n5) {
        var e2 = t == null ? 0 : t.length;
        if (e2) {
          var r3 = Ze4(t, n5);
          if (r3 < e2 && Rt2(t[r3], n5)) return r3;
        }
        return -1;
      }
      function el(t, n5) {
        return Ze4(t, n5, true);
      }
      function rl(t, n5, e2) {
        return si(t, n5, E7(e2, 2), true);
      }
      function il(t, n5) {
        var e2 = t == null ? 0 : t.length;
        if (e2) {
          var r3 = Ze4(t, n5, true) - 1;
          if (Rt2(t[r3], n5)) return r3;
        }
        return -1;
      }
      function sl(t) {
        return t && t.length ? au(t) : [];
      }
      function ul(t, n5) {
        return t && t.length ? au(t, E7(n5, 2)) : [];
      }
      function al(t) {
        var n5 = t == null ? 0 : t.length;
        return n5 ? At2(t, 1, n5) : [];
      }
      function ol(t, n5, e2) {
        return t && t.length ? (n5 = e2 || n5 === i4 ? 1 : T4(n5), At2(t, 0, n5 < 0 ? 0 : n5)) : [];
      }
      function fl(t, n5, e2) {
        var r3 = t == null ? 0 : t.length;
        return r3 ? (n5 = e2 || n5 === i4 ? 1 : T4(n5), n5 = r3 - n5, At2(t, n5 < 0 ? 0 : n5, r3)) : [];
      }
      function cl(t, n5) {
        return t && t.length ? Xe4(t, E7(n5, 3), false, true) : [];
      }
      function hl(t, n5) {
        return t && t.length ? Xe4(t, E7(n5, 3)) : [];
      }
      var ll = D4(function(t) {
        return an2(tt2(t, 1, Y, true));
      }), pl = D4(function(t) {
        var n5 = It2(t);
        return Y(n5) && (n5 = i4), an2(tt2(t, 1, Y, true), E7(n5, 2));
      }), dl = D4(function(t) {
        var n5 = It2(t);
        return n5 = typeof n5 == "function" ? n5 : i4, an2(tt2(t, 1, Y, true), i4, n5);
      });
      function gl(t) {
        return t && t.length ? an2(t) : [];
      }
      function vl(t, n5) {
        return t && t.length ? an2(t, E7(n5, 2)) : [];
      }
      function _l(t, n5) {
        return n5 = typeof n5 == "function" ? n5 : i4, t && t.length ? an2(t, i4, n5) : [];
      }
      function Ii2(t) {
        if (!(t && t.length)) return [];
        var n5 = 0;
        return t = nn2(t, function(e2) {
          if (Y(e2)) return n5 = Q4(e2.length, n5), true;
        }), Wr(n5, function(e2) {
          return z5(t, Ur3(e2));
        });
      }
      function Yu2(t, n5) {
        if (!(t && t.length)) return [];
        var e2 = Ii2(t);
        return n5 == null ? e2 : z5(e2, function(r3) {
          return ct2(n5, i4, r3);
        });
      }
      var ml = D4(function(t, n5) {
        return Y(t) ? oe3(t, n5) : [];
      }), wl = D4(function(t) {
        return ai(nn2(t, Y));
      }), Pl = D4(function(t) {
        var n5 = It2(t);
        return Y(n5) && (n5 = i4), ai(nn2(t, Y), E7(n5, 2));
      }), Cl = D4(function(t) {
        var n5 = It2(t);
        return n5 = typeof n5 == "function" ? n5 : i4, ai(nn2(t, Y), i4, n5);
      }), Al = D4(Ii2);
      function Il(t, n5) {
        return hu(t || [], n5 || [], ae2);
      }
      function xl(t, n5) {
        return hu(t || [], n5 || [], he3);
      }
      var El = D4(function(t) {
        var n5 = t.length, e2 = n5 > 1 ? t[n5 - 1] : i4;
        return e2 = typeof e2 == "function" ? (t.pop(), e2) : i4, Yu2(t, e2);
      });
      function Zu2(t) {
        var n5 = a4(t);
        return n5.__chain__ = true, n5;
      }
      function yl(t, n5) {
        return n5(t), t;
      }
      function ir3(t, n5) {
        return n5(t);
      }
      var Sl = Jt4(function(t) {
        var n5 = t.length, e2 = n5 ? t[0] : 0, r3 = this.__wrapped__, u4 = function(o5) {
          return Zr(o5, t);
        };
        return n5 > 1 || this.__actions__.length || !(r3 instanceof N11) || !Yt3(e2) ? this.thru(u4) : (r3 = r3.slice(e2, +e2 + (n5 ? 1 : 0)), r3.__actions__.push({ func: ir3, args: [u4], thisArg: i4 }), new Pt2(r3, this.__chain__).thru(function(o5) {
          return n5 && !o5.length && o5.push(i4), o5;
        }));
      });
      function Ol() {
        return Zu2(this);
      }
      function Rl() {
        return new Pt2(this.value(), this.__chain__);
      }
      function bl() {
        this.__values__ === i4 && (this.__values__ = oa2(this.value()));
        var t = this.__index__ >= this.__values__.length, n5 = t ? i4 : this.__values__[this.__index__++];
        return { done: t, value: n5 };
      }
      function Tl() {
        return this;
      }
      function Ll(t) {
        for (var n5, e2 = this; e2 instanceof Ge3; ) {
          var r3 = Mu2(e2);
          r3.__index__ = 0, r3.__values__ = i4, n5 ? u4.__wrapped__ = r3 : n5 = r3;
          var u4 = r3;
          e2 = e2.__wrapped__;
        }
        return u4.__wrapped__ = t, n5;
      }
      function Dl() {
        var t = this.__wrapped__;
        if (t instanceof N11) {
          var n5 = t;
          return this.__actions__.length && (n5 = new N11(this)), n5 = n5.reverse(), n5.__actions__.push({ func: ir3, args: [Ai2], thisArg: i4 }), new Pt2(n5, this.__chain__);
        }
        return this.thru(Ai2);
      }
      function Hl() {
        return cu2(this.__wrapped__, this.__actions__);
      }
      var Nl = Qe3(function(t, n5, e2) {
        F.call(t, e2) ? ++t[e2] : zt3(t, e2, 1);
      });
      function $l(t, n5, e2) {
        var r3 = b5(t) ? Is3 : yc;
        return e2 && it2(t, n5, e2) && (n5 = i4), r3(t, E7(n5, 3));
      }
      function Ul(t, n5) {
        var e2 = b5(t) ? nn2 : Ys3;
        return e2(t, E7(n5, 3));
      }
      var ql = Cu2(Bu2), Fl = Cu2(Gu2);
      function Wl(t, n5) {
        return tt2(sr3(t, n5), 1);
      }
      function Ml(t, n5) {
        return tt2(sr3(t, n5), pn);
      }
      function Bl(t, n5, e2) {
        return e2 = e2 === i4 ? 1 : T4(e2), tt2(sr3(t, n5), e2);
      }
      function Xu2(t, n5) {
        var e2 = b5(t) ? mt2 : un2;
        return e2(t, E7(n5, 3));
      }
      function Qu2(t, n5) {
        var e2 = b5(t) ? af2 : Js3;
        return e2(t, E7(n5, 3));
      }
      var Gl = Qe3(function(t, n5, e2) {
        F.call(t, e2) ? t[e2].push(n5) : zt3(t, e2, [n5]);
      });
      function zl(t, n5, e2, r3) {
        t = at2(t) ? t : zn2(t), e2 = e2 && !r3 ? T4(e2) : 0;
        var u4 = t.length;
        return e2 < 0 && (e2 = Q4(u4 + e2, 0)), cr3(t) ? e2 <= u4 && t.indexOf(n5, e2) > -1 : !!u4 && Ln2(t, n5, e2) > -1;
      }
      var Kl = D4(function(t, n5, e2) {
        var r3 = -1, u4 = typeof n5 == "function", o5 = at2(t) ? d4(t.length) : [];
        return un2(t, function(f5) {
          o5[++r3] = u4 ? ct2(n5, f5, e2) : fe3(f5, n5, e2);
        }), o5;
      }), Jl = Qe3(function(t, n5, e2) {
        zt3(t, e2, n5);
      });
      function sr3(t, n5) {
        var e2 = b5(t) ? z5 : js3;
        return e2(t, E7(n5, 3));
      }
      function Yl(t, n5, e2, r3) {
        return t == null ? [] : (b5(n5) || (n5 = n5 == null ? [] : [n5]), e2 = r3 ? i4 : e2, b5(e2) || (e2 = e2 == null ? [] : [e2]), ru2(t, n5, e2));
      }
      var Zl = Qe3(function(t, n5, e2) {
        t[e2 ? 0 : 1].push(n5);
      }, function() {
        return [[], []];
      });
      function Xl(t, n5, e2) {
        var r3 = b5(t) ? Nr3 : Ss3, u4 = arguments.length < 3;
        return r3(t, E7(n5, 4), e2, u4, un2);
      }
      function Ql(t, n5, e2) {
        var r3 = b5(t) ? of2 : Ss3, u4 = arguments.length < 3;
        return r3(t, E7(n5, 4), e2, u4, Js3);
      }
      function Vl(t, n5) {
        var e2 = b5(t) ? nn2 : Ys3;
        return e2(t, or4(E7(n5, 3)));
      }
      function kl(t) {
        var n5 = b5(t) ? Bs3 : zc;
        return n5(t);
      }
      function jl(t, n5, e2) {
        (e2 ? it2(t, n5, e2) : n5 === i4) ? n5 = 1 : n5 = T4(n5);
        var r3 = b5(t) ? Cc : Kc;
        return r3(t, n5);
      }
      function tp(t) {
        var n5 = b5(t) ? Ac : Yc;
        return n5(t);
      }
      function np(t) {
        if (t == null) return 0;
        if (at2(t)) return cr3(t) ? Hn2(t) : t.length;
        var n5 = et2(t);
        return n5 == Et2 || n5 == yt2 ? t.size : ti(t).length;
      }
      function ep(t, n5, e2) {
        var r3 = b5(t) ? $r2 : Zc;
        return e2 && it2(t, n5, e2) && (n5 = i4), r3(t, E7(n5, 3));
      }
      var rp = D4(function(t, n5) {
        if (t == null) return [];
        var e2 = n5.length;
        return e2 > 1 && it2(t, n5[0], n5[1]) ? n5 = [] : e2 > 2 && it2(n5[0], n5[1], n5[2]) && (n5 = [n5[0]]), ru2(t, tt2(n5, 1), []);
      }), ur3 = Uf2 || function() {
        return j6.Date.now();
      };
      function ip(t, n5) {
        if (typeof n5 != "function") throw new wt2(R3);
        return t = T4(t), function() {
          if (--t < 1) return n5.apply(this, arguments);
        };
      }
      function Vu2(t, n5, e2) {
        return n5 = e2 ? i4 : n5, n5 = t && n5 == null ? t.length : n5, Kt3(t, Wt3, i4, i4, i4, i4, n5);
      }
      function ku(t, n5) {
        var e2;
        if (typeof n5 != "function") throw new wt2(R3);
        return t = T4(t), function() {
          return --t > 0 && (e2 = n5.apply(this, arguments)), t <= 1 && (n5 = i4), e2;
        };
      }
      var xi2 = D4(function(t, n5, e2) {
        var r3 = vt2;
        if (e2.length) {
          var u4 = rn2(e2, Bn(xi2));
          r3 |= Dt3;
        }
        return Kt3(t, r3, n5, e2, u4);
      }), ju2 = D4(function(t, n5, e2) {
        var r3 = vt2 | ln;
        if (e2.length) {
          var u4 = rn2(e2, Bn(ju2));
          r3 |= Dt3;
        }
        return Kt3(n5, r3, t, e2, u4);
      });
      function ta2(t, n5, e2) {
        n5 = e2 ? i4 : n5;
        var r3 = Kt3(t, Lt3, i4, i4, i4, i4, i4, n5);
        return r3.placeholder = ta2.placeholder, r3;
      }
      function na2(t, n5, e2) {
        n5 = e2 ? i4 : n5;
        var r3 = Kt3(t, Sn2, i4, i4, i4, i4, i4, n5);
        return r3.placeholder = na2.placeholder, r3;
      }
      function ea2(t, n5, e2) {
        var r3, u4, o5, f5, c6, l5, v5 = 0, _3 = false, m5 = false, C5 = true;
        if (typeof t != "function") throw new wt2(R3);
        n5 = xt2(n5) || 0, K4(e2) && (_3 = !!e2.leading, m5 = "maxWait" in e2, o5 = m5 ? Q4(xt2(e2.maxWait) || 0, n5) : o5, C5 = "trailing" in e2 ? !!e2.trailing : C5);
        function I3(Z2) {
          var bt3 = r3, Qt2 = u4;
          return r3 = u4 = i4, v5 = Z2, f5 = t.apply(Qt2, bt3), f5;
        }
        function y7(Z2) {
          return v5 = Z2, c6 = de3(H, n5), _3 ? I3(Z2) : f5;
        }
        function L6(Z2) {
          var bt3 = Z2 - l5, Qt2 = Z2 - v5, Ca2 = n5 - bt3;
          return m5 ? nt2(Ca2, o5 - Qt2) : Ca2;
        }
        function S5(Z2) {
          var bt3 = Z2 - l5, Qt2 = Z2 - v5;
          return l5 === i4 || bt3 >= n5 || bt3 < 0 || m5 && Qt2 >= o5;
        }
        function H() {
          var Z2 = ur3();
          if (S5(Z2)) return $4(Z2);
          c6 = de3(H, L6(Z2));
        }
        function $4(Z2) {
          return c6 = i4, C5 && r3 ? I3(Z2) : (r3 = u4 = i4, f5);
        }
        function dt2() {
          c6 !== i4 && lu2(c6), v5 = 0, r3 = l5 = u4 = c6 = i4;
        }
        function st2() {
          return c6 === i4 ? f5 : $4(ur3());
        }
        function gt2() {
          var Z2 = ur3(), bt3 = S5(Z2);
          if (r3 = arguments, u4 = this, l5 = Z2, bt3) {
            if (c6 === i4) return y7(l5);
            if (m5) return lu2(c6), c6 = de3(H, n5), I3(l5);
          }
          return c6 === i4 && (c6 = de3(H, n5)), f5;
        }
        return gt2.cancel = dt2, gt2.flush = st2, gt2;
      }
      var sp = D4(function(t, n5) {
        return Ks3(t, 1, n5);
      }), up = D4(function(t, n5, e2) {
        return Ks3(t, xt2(n5) || 0, e2);
      });
      function ap(t) {
        return Kt3(t, gr3);
      }
      function ar3(t, n5) {
        if (typeof t != "function" || n5 != null && typeof n5 != "function") throw new wt2(R3);
        var e2 = function() {
          var r3 = arguments, u4 = n5 ? n5.apply(this, r3) : r3[0], o5 = e2.cache;
          if (o5.has(u4)) return o5.get(u4);
          var f5 = t.apply(this, r3);
          return e2.cache = o5.set(u4, f5) || o5, f5;
        };
        return e2.cache = new (ar3.Cache || Gt3)(), e2;
      }
      ar3.Cache = Gt3;
      function or4(t) {
        if (typeof t != "function") throw new wt2(R3);
        return function() {
          var n5 = arguments;
          switch (n5.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, n5[0]);
            case 2:
              return !t.call(this, n5[0], n5[1]);
            case 3:
              return !t.call(this, n5[0], n5[1], n5[2]);
          }
          return !t.apply(this, n5);
        };
      }
      function op(t) {
        return ku(2, t);
      }
      var fp = Xc(function(t, n5) {
        n5 = n5.length == 1 && b5(n5[0]) ? z5(n5[0], ht2(E7())) : z5(tt2(n5, 1), ht2(E7()));
        var e2 = n5.length;
        return D4(function(r3) {
          for (var u4 = -1, o5 = nt2(r3.length, e2); ++u4 < o5; ) r3[u4] = n5[u4].call(this, r3[u4]);
          return ct2(t, this, r3);
        });
      }), Ei2 = D4(function(t, n5) {
        var e2 = rn2(n5, Bn(Ei2));
        return Kt3(t, Dt3, i4, n5, e2);
      }), ra2 = D4(function(t, n5) {
        var e2 = rn2(n5, Bn(ra2));
        return Kt3(t, On2, i4, n5, e2);
      }), cp = Jt4(function(t, n5) {
        return Kt3(t, Yn2, i4, i4, i4, n5);
      });
      function hp(t, n5) {
        if (typeof t != "function") throw new wt2(R3);
        return n5 = n5 === i4 ? n5 : T4(n5), D4(t, n5);
      }
      function lp(t, n5) {
        if (typeof t != "function") throw new wt2(R3);
        return n5 = n5 == null ? 0 : Q4(T4(n5), 0), D4(function(e2) {
          var r3 = e2[n5], u4 = fn2(e2, 0, n5);
          return r3 && en2(u4, r3), ct2(t, this, u4);
        });
      }
      function pp(t, n5, e2) {
        var r3 = true, u4 = true;
        if (typeof t != "function") throw new wt2(R3);
        return K4(e2) && (r3 = "leading" in e2 ? !!e2.leading : r3, u4 = "trailing" in e2 ? !!e2.trailing : u4), ea2(t, n5, { leading: r3, maxWait: n5, trailing: u4 });
      }
      function dp(t) {
        return Vu2(t, 1);
      }
      function gp(t, n5) {
        return Ei2(fi(n5), t);
      }
      function vp() {
        if (!arguments.length) return [];
        var t = arguments[0];
        return b5(t) ? t : [t];
      }
      function _p(t) {
        return Ct3(t, En2);
      }
      function mp(t, n5) {
        return n5 = typeof n5 == "function" ? n5 : i4, Ct3(t, En2, n5);
      }
      function wp(t) {
        return Ct3(t, Tt3 | En2);
      }
      function Pp(t, n5) {
        return n5 = typeof n5 == "function" ? n5 : i4, Ct3(t, Tt3 | En2, n5);
      }
      function Cp(t, n5) {
        return n5 == null || zs3(t, n5, V4(n5));
      }
      function Rt2(t, n5) {
        return t === n5 || t !== t && n5 !== n5;
      }
      var Ap = tr3(Vr2), Ip = tr3(function(t, n5) {
        return t >= n5;
      }), An = Qs3(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Qs3 : function(t) {
        return J2(t) && F.call(t, "callee") && !$s3.call(t, "callee");
      }, b5 = d4.isArray, xp = _s3 ? ht2(_s3) : Lc;
      function at2(t) {
        return t != null && fr2(t.length) && !Zt3(t);
      }
      function Y(t) {
        return J2(t) && at2(t);
      }
      function Ep(t) {
        return t === true || t === false || J2(t) && rt2(t) == Zn2;
      }
      var cn2 = Ff2 || $i, yp = ms3 ? ht2(ms3) : Dc;
      function Sp(t) {
        return J2(t) && t.nodeType === 1 && !ge3(t);
      }
      function Op(t) {
        if (t == null) return true;
        if (at2(t) && (b5(t) || typeof t == "string" || typeof t.splice == "function" || cn2(t) || Gn2(t) || An(t))) return !t.length;
        var n5 = et2(t);
        if (n5 == Et2 || n5 == yt2) return !t.size;
        if (pe3(t)) return !ti(t).length;
        for (var e2 in t) if (F.call(t, e2)) return false;
        return true;
      }
      function Rp(t, n5) {
        return ce3(t, n5);
      }
      function bp(t, n5, e2) {
        e2 = typeof e2 == "function" ? e2 : i4;
        var r3 = e2 ? e2(t, n5) : i4;
        return r3 === i4 ? ce3(t, n5, i4, e2) : !!r3;
      }
      function yi2(t) {
        if (!J2(t)) return false;
        var n5 = rt2(t);
        return n5 == Ce2 || n5 == Va2 || typeof t.message == "string" && typeof t.name == "string" && !ge3(t);
      }
      function Tp(t) {
        return typeof t == "number" && qs3(t);
      }
      function Zt3(t) {
        if (!K4(t)) return false;
        var n5 = rt2(t);
        return n5 == Ae2 || n5 == Ki2 || n5 == Qa2 || n5 == ja2;
      }
      function ia2(t) {
        return typeof t == "number" && t == T4(t);
      }
      function fr2(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= tn2;
      }
      function K4(t) {
        var n5 = typeof t;
        return t != null && (n5 == "object" || n5 == "function");
      }
      function J2(t) {
        return t != null && typeof t == "object";
      }
      var sa2 = ws3 ? ht2(ws3) : Nc;
      function Lp(t, n5) {
        return t === n5 || jr2(t, n5, vi2(n5));
      }
      function Dp(t, n5, e2) {
        return e2 = typeof e2 == "function" ? e2 : i4, jr2(t, n5, vi2(n5), e2);
      }
      function Hp(t) {
        return ua2(t) && t != +t;
      }
      function Np(t) {
        if (mh(t)) throw new O5(x3);
        return Vs3(t);
      }
      function $p(t) {
        return t === null;
      }
      function Up(t) {
        return t == null;
      }
      function ua2(t) {
        return typeof t == "number" || J2(t) && rt2(t) == Qn2;
      }
      function ge3(t) {
        if (!J2(t) || rt2(t) != Mt3) return false;
        var n5 = $e4(t);
        if (n5 === null) return true;
        var e2 = F.call(n5, "constructor") && n5.constructor;
        return typeof e2 == "function" && e2 instanceof e2 && Le3.call(e2) == Df2;
      }
      var Si2 = Ps3 ? ht2(Ps3) : $c;
      function qp(t) {
        return ia2(t) && t >= -tn2 && t <= tn2;
      }
      var aa2 = Cs3 ? ht2(Cs3) : Uc;
      function cr3(t) {
        return typeof t == "string" || !b5(t) && J2(t) && rt2(t) == kn2;
      }
      function pt2(t) {
        return typeof t == "symbol" || J2(t) && rt2(t) == Ie;
      }
      var Gn2 = As3 ? ht2(As3) : qc;
      function Fp(t) {
        return t === i4;
      }
      function Wp(t) {
        return J2(t) && et2(t) == jn2;
      }
      function Mp(t) {
        return J2(t) && rt2(t) == no2;
      }
      var Bp = tr3(ni), Gp = tr3(function(t, n5) {
        return t <= n5;
      });
      function oa2(t) {
        if (!t) return [];
        if (at2(t)) return cr3(t) ? St2(t) : ut2(t);
        if (ee2 && t[ee2]) return Cf2(t[ee2]());
        var n5 = et2(t), e2 = n5 == Et2 ? Br : n5 == yt2 ? Re3 : zn2;
        return e2(t);
      }
      function Xt4(t) {
        if (!t) return t === 0 ? t : 0;
        if (t = xt2(t), t === pn || t === -pn) {
          var n5 = t < 0 ? -1 : 1;
          return n5 * Ja2;
        }
        return t === t ? t : 0;
      }
      function T4(t) {
        var n5 = Xt4(t), e2 = n5 % 1;
        return n5 === n5 ? e2 ? n5 - e2 : n5 : 0;
      }
      function fa2(t) {
        return t ? mn(T4(t), 0, Ht3) : 0;
      }
      function xt2(t) {
        if (typeof t == "number") return t;
        if (pt2(t)) return we2;
        if (K4(t)) {
          var n5 = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = K4(n5) ? n5 + "" : n5;
        }
        if (typeof t != "string") return t === 0 ? t : +t;
        t = Os3(t);
        var e2 = Io2.test(t);
        return e2 || Eo2.test(t) ? rf2(t.slice(2), e2 ? 2 : 8) : Ao2.test(t) ? we2 : +t;
      }
      function ca2(t) {
        return $t3(t, ot2(t));
      }
      function zp(t) {
        return t ? mn(T4(t), -tn2, tn2) : t === 0 ? t : 0;
      }
      function q4(t) {
        return t == null ? "" : lt2(t);
      }
      var Kp = Wn2(function(t, n5) {
        if (pe3(n5) || at2(n5)) {
          $t3(n5, V4(n5), t);
          return;
        }
        for (var e2 in n5) F.call(n5, e2) && ae2(t, e2, n5[e2]);
      }), ha2 = Wn2(function(t, n5) {
        $t3(n5, ot2(n5), t);
      }), hr3 = Wn2(function(t, n5, e2, r3) {
        $t3(n5, ot2(n5), t, r3);
      }), Jp = Wn2(function(t, n5, e2, r3) {
        $t3(n5, V4(n5), t, r3);
      }), Yp = Jt4(Zr);
      function Zp(t, n5) {
        var e2 = Fn2(t);
        return n5 == null ? e2 : Gs3(e2, n5);
      }
      var Xp = D4(function(t, n5) {
        t = W2(t);
        var e2 = -1, r3 = n5.length, u4 = r3 > 2 ? n5[2] : i4;
        for (u4 && it2(n5[0], n5[1], u4) && (r3 = 1); ++e2 < r3; ) for (var o5 = n5[e2], f5 = ot2(o5), c6 = -1, l5 = f5.length; ++c6 < l5; ) {
          var v5 = f5[c6], _3 = t[v5];
          (_3 === i4 || Rt2(_3, $n2[v5]) && !F.call(t, v5)) && (t[v5] = o5[v5]);
        }
        return t;
      }), Qp = D4(function(t) {
        return t.push(i4, Ou2), ct2(la2, i4, t);
      });
      function Vp(t, n5) {
        return xs3(t, E7(n5, 3), Nt2);
      }
      function kp(t, n5) {
        return xs3(t, E7(n5, 3), Qr2);
      }
      function jp(t, n5) {
        return t == null ? t : Xr(t, E7(n5, 3), ot2);
      }
      function td(t, n5) {
        return t == null ? t : Zs3(t, E7(n5, 3), ot2);
      }
      function nd(t, n5) {
        return t && Nt2(t, E7(n5, 3));
      }
      function ed(t, n5) {
        return t && Qr2(t, E7(n5, 3));
      }
      function rd(t) {
        return t == null ? [] : Je3(t, V4(t));
      }
      function id(t) {
        return t == null ? [] : Je3(t, ot2(t));
      }
      function Oi2(t, n5, e2) {
        var r3 = t == null ? i4 : wn2(t, n5);
        return r3 === i4 ? e2 : r3;
      }
      function sd(t, n5) {
        return t != null && Tu(t, n5, Oc);
      }
      function Ri2(t, n5) {
        return t != null && Tu(t, n5, Rc);
      }
      var ud = Iu2(function(t, n5, e2) {
        n5 != null && typeof n5.toString != "function" && (n5 = De2.call(n5)), t[n5] = e2;
      }, Ti2(ft2)), ad = Iu2(function(t, n5, e2) {
        n5 != null && typeof n5.toString != "function" && (n5 = De2.call(n5)), F.call(t, n5) ? t[n5].push(e2) : t[n5] = [e2];
      }, E7), od = D4(fe3);
      function V4(t) {
        return at2(t) ? Ms3(t) : ti(t);
      }
      function ot2(t) {
        return at2(t) ? Ms3(t, true) : Fc(t);
      }
      function fd(t, n5) {
        var e2 = {};
        return n5 = E7(n5, 3), Nt2(t, function(r3, u4, o5) {
          zt3(e2, n5(r3, u4, o5), r3);
        }), e2;
      }
      function cd(t, n5) {
        var e2 = {};
        return n5 = E7(n5, 3), Nt2(t, function(r3, u4, o5) {
          zt3(e2, u4, n5(r3, u4, o5));
        }), e2;
      }
      var hd = Wn2(function(t, n5, e2) {
        Ye3(t, n5, e2);
      }), la2 = Wn2(function(t, n5, e2, r3) {
        Ye3(t, n5, e2, r3);
      }), ld = Jt4(function(t, n5) {
        var e2 = {};
        if (t == null) return e2;
        var r3 = false;
        n5 = z5(n5, function(o5) {
          return o5 = on2(o5, t), r3 || (r3 = o5.length > 1), o5;
        }), $t3(t, di(t), e2), r3 && (e2 = Ct3(e2, Tt3 | Ft3 | En2, uh2));
        for (var u4 = n5.length; u4--; ) ui(e2, n5[u4]);
        return e2;
      });
      function pd(t, n5) {
        return pa2(t, or4(E7(n5)));
      }
      var dd = Jt4(function(t, n5) {
        return t == null ? {} : Mc(t, n5);
      });
      function pa2(t, n5) {
        if (t == null) return {};
        var e2 = z5(di(t), function(r3) {
          return [r3];
        });
        return n5 = E7(n5), iu2(t, e2, function(r3, u4) {
          return n5(r3, u4[0]);
        });
      }
      function gd(t, n5, e2) {
        n5 = on2(n5, t);
        var r3 = -1, u4 = n5.length;
        for (u4 || (u4 = 1, t = i4); ++r3 < u4; ) {
          var o5 = t == null ? i4 : t[Ut3(n5[r3])];
          o5 === i4 && (r3 = u4, o5 = e2), t = Zt3(o5) ? o5.call(t) : o5;
        }
        return t;
      }
      function vd(t, n5, e2) {
        return t == null ? t : he3(t, n5, e2);
      }
      function _d(t, n5, e2, r3) {
        return r3 = typeof r3 == "function" ? r3 : i4, t == null ? t : he3(t, n5, e2, r3);
      }
      var da2 = yu2(V4), ga2 = yu2(ot2);
      function md(t, n5, e2) {
        var r3 = b5(t), u4 = r3 || cn2(t) || Gn2(t);
        if (n5 = E7(n5, 4), e2 == null) {
          var o5 = t && t.constructor;
          u4 ? e2 = r3 ? new o5() : [] : K4(t) ? e2 = Zt3(o5) ? Fn2($e4(t)) : {} : e2 = {};
        }
        return (u4 ? mt2 : Nt2)(t, function(f5, c6, l5) {
          return n5(e2, f5, c6, l5);
        }), e2;
      }
      function wd(t, n5) {
        return t == null ? true : ui(t, n5);
      }
      function Pd(t, n5, e2) {
        return t == null ? t : fu2(t, n5, fi(e2));
      }
      function Cd(t, n5, e2, r3) {
        return r3 = typeof r3 == "function" ? r3 : i4, t == null ? t : fu2(t, n5, fi(e2), r3);
      }
      function zn2(t) {
        return t == null ? [] : Mr3(t, V4(t));
      }
      function Ad(t) {
        return t == null ? [] : Mr3(t, ot2(t));
      }
      function Id(t, n5, e2) {
        return e2 === i4 && (e2 = n5, n5 = i4), e2 !== i4 && (e2 = xt2(e2), e2 = e2 === e2 ? e2 : 0), n5 !== i4 && (n5 = xt2(n5), n5 = n5 === n5 ? n5 : 0), mn(xt2(t), n5, e2);
      }
      function xd(t, n5, e2) {
        return n5 = Xt4(n5), e2 === i4 ? (e2 = n5, n5 = 0) : e2 = Xt4(e2), t = xt2(t), bc(t, n5, e2);
      }
      function Ed(t, n5, e2) {
        if (e2 && typeof e2 != "boolean" && it2(t, n5, e2) && (n5 = e2 = i4), e2 === i4 && (typeof n5 == "boolean" ? (e2 = n5, n5 = i4) : typeof t == "boolean" && (e2 = t, t = i4)), t === i4 && n5 === i4 ? (t = 0, n5 = 1) : (t = Xt4(t), n5 === i4 ? (n5 = t, t = 0) : n5 = Xt4(n5)), t > n5) {
          var r3 = t;
          t = n5, n5 = r3;
        }
        if (e2 || t % 1 || n5 % 1) {
          var u4 = Fs3();
          return nt2(t + u4 * (n5 - t + ef2("1e-" + ((u4 + "").length - 1))), n5);
        }
        return ri(t, n5);
      }
      var yd = Mn(function(t, n5, e2) {
        return n5 = n5.toLowerCase(), t + (e2 ? va2(n5) : n5);
      });
      function va2(t) {
        return bi2(q4(t).toLowerCase());
      }
      function _a2(t) {
        return t = q4(t), t && t.replace(So2, vf2).replace(Jo2, "");
      }
      function Sd(t, n5, e2) {
        t = q4(t), n5 = lt2(n5);
        var r3 = t.length;
        e2 = e2 === i4 ? r3 : mn(T4(e2), 0, r3);
        var u4 = e2;
        return e2 -= n5.length, e2 >= 0 && t.slice(e2, u4) == n5;
      }
      function Od(t) {
        return t = q4(t), t && uo.test(t) ? t.replace(Zi3, _f2) : t;
      }
      function Rd(t) {
        return t = q4(t), t && lo2.test(t) ? t.replace(Er2, "\\$&") : t;
      }
      var bd = Mn(function(t, n5, e2) {
        return t + (e2 ? "-" : "") + n5.toLowerCase();
      }), Td = Mn(function(t, n5, e2) {
        return t + (e2 ? " " : "") + n5.toLowerCase();
      }), Ld = Pu2("toLowerCase");
      function Dd(t, n5, e2) {
        t = q4(t), n5 = T4(n5);
        var r3 = n5 ? Hn2(t) : 0;
        if (!n5 || r3 >= n5) return t;
        var u4 = (n5 - r3) / 2;
        return je3(We4(u4), e2) + t + je3(Fe3(u4), e2);
      }
      function Hd(t, n5, e2) {
        t = q4(t), n5 = T4(n5);
        var r3 = n5 ? Hn2(t) : 0;
        return n5 && r3 < n5 ? t + je3(n5 - r3, e2) : t;
      }
      function Nd(t, n5, e2) {
        t = q4(t), n5 = T4(n5);
        var r3 = n5 ? Hn2(t) : 0;
        return n5 && r3 < n5 ? je3(n5 - r3, e2) + t : t;
      }
      function $d(t, n5, e2) {
        return e2 || n5 == null ? n5 = 0 : n5 && (n5 = +n5), Gf2(q4(t).replace(yr3, ""), n5 || 0);
      }
      function Ud(t, n5, e2) {
        return (e2 ? it2(t, n5, e2) : n5 === i4) ? n5 = 1 : n5 = T4(n5), ii(q4(t), n5);
      }
      function qd() {
        var t = arguments, n5 = q4(t[0]);
        return t.length < 3 ? n5 : n5.replace(t[1], t[2]);
      }
      var Fd = Mn(function(t, n5, e2) {
        return t + (e2 ? "_" : "") + n5.toLowerCase();
      });
      function Wd(t, n5, e2) {
        return e2 && typeof e2 != "number" && it2(t, n5, e2) && (n5 = e2 = i4), e2 = e2 === i4 ? Ht3 : e2 >>> 0, e2 ? (t = q4(t), t && (typeof n5 == "string" || n5 != null && !Si2(n5)) && (n5 = lt2(n5), !n5 && Dn2(t)) ? fn2(St2(t), 0, e2) : t.split(n5, e2)) : [];
      }
      var Md = Mn(function(t, n5, e2) {
        return t + (e2 ? " " : "") + bi2(n5);
      });
      function Bd(t, n5, e2) {
        return t = q4(t), e2 = e2 == null ? 0 : mn(T4(e2), 0, t.length), n5 = lt2(n5), t.slice(e2, e2 + n5.length) == n5;
      }
      function Gd(t, n5, e2) {
        var r3 = a4.templateSettings;
        e2 && it2(t, n5, e2) && (n5 = i4), t = q4(t), n5 = hr3({}, n5, r3, Su2);
        var u4 = hr3({}, n5.imports, r3.imports, Su2), o5 = V4(u4), f5 = Mr3(u4, o5), c6, l5, v5 = 0, _3 = n5.interpolate || xe2, m5 = "__p += '", C5 = Gr2((n5.escape || xe2).source + "|" + _3.source + "|" + (_3 === Xi3 ? Co2 : xe2).source + "|" + (n5.evaluate || xe2).source + "|$", "g"), I3 = "//# sourceURL=" + (F.call(n5, "sourceURL") ? (n5.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Vo + "]") + `
`;
        t.replace(C5, function(S5, H, $4, dt2, st2, gt2) {
          return $4 || ($4 = dt2), m5 += t.slice(v5, gt2).replace(Oo2, mf2), H && (c6 = true, m5 += `' +
__e(` + H + `) +
'`), st2 && (l5 = true, m5 += `';
` + st2 + `;
__p += '`), $4 && (m5 += `' +
((__t = (` + $4 + `)) == null ? '' : __t) +
'`), v5 = gt2 + S5.length, S5;
        }), m5 += `';
`;
        var y7 = F.call(n5, "variable") && n5.variable;
        if (!y7) m5 = `with (obj) {
` + m5 + `
}
`;
        else if (wo2.test(y7)) throw new O5(k3);
        m5 = (l5 ? m5.replace(eo2, "") : m5).replace(ro2, "$1").replace(io2, "$1;"), m5 = "function(" + (y7 || "obj") + `) {
` + (y7 ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (c6 ? ", __e = _.escape" : "") + (l5 ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m5 + `return __p
}`;
        var L6 = wa2(function() {
          return U4(o5, I3 + "return " + m5).apply(i4, f5);
        });
        if (L6.source = m5, yi2(L6)) throw L6;
        return L6;
      }
      function zd(t) {
        return q4(t).toLowerCase();
      }
      function Kd(t) {
        return q4(t).toUpperCase();
      }
      function Jd(t, n5, e2) {
        if (t = q4(t), t && (e2 || n5 === i4)) return Os3(t);
        if (!t || !(n5 = lt2(n5))) return t;
        var r3 = St2(t), u4 = St2(n5), o5 = Rs3(r3, u4), f5 = bs3(r3, u4) + 1;
        return fn2(r3, o5, f5).join("");
      }
      function Yd(t, n5, e2) {
        if (t = q4(t), t && (e2 || n5 === i4)) return t.slice(0, Ls3(t) + 1);
        if (!t || !(n5 = lt2(n5))) return t;
        var r3 = St2(t), u4 = bs3(r3, St2(n5)) + 1;
        return fn2(r3, 0, u4).join("");
      }
      function Zd(t, n5, e2) {
        if (t = q4(t), t && (e2 || n5 === i4)) return t.replace(yr3, "");
        if (!t || !(n5 = lt2(n5))) return t;
        var r3 = St2(t), u4 = Rs3(r3, St2(n5));
        return fn2(r3, u4).join("");
      }
      function Xd(t, n5) {
        var e2 = Wa2, r3 = Ma2;
        if (K4(n5)) {
          var u4 = "separator" in n5 ? n5.separator : u4;
          e2 = "length" in n5 ? T4(n5.length) : e2, r3 = "omission" in n5 ? lt2(n5.omission) : r3;
        }
        t = q4(t);
        var o5 = t.length;
        if (Dn2(t)) {
          var f5 = St2(t);
          o5 = f5.length;
        }
        if (e2 >= o5) return t;
        var c6 = e2 - Hn2(r3);
        if (c6 < 1) return r3;
        var l5 = f5 ? fn2(f5, 0, c6).join("") : t.slice(0, c6);
        if (u4 === i4) return l5 + r3;
        if (f5 && (c6 += l5.length - c6), Si2(u4)) {
          if (t.slice(c6).search(u4)) {
            var v5, _3 = l5;
            for (u4.global || (u4 = Gr2(u4.source, q4(Qi3.exec(u4)) + "g")), u4.lastIndex = 0; v5 = u4.exec(_3); ) var m5 = v5.index;
            l5 = l5.slice(0, m5 === i4 ? c6 : m5);
          }
        } else if (t.indexOf(lt2(u4), c6) != c6) {
          var C5 = l5.lastIndexOf(u4);
          C5 > -1 && (l5 = l5.slice(0, C5));
        }
        return l5 + r3;
      }
      function Qd(t) {
        return t = q4(t), t && so2.test(t) ? t.replace(Yi3, Ef2) : t;
      }
      var Vd = Mn(function(t, n5, e2) {
        return t + (e2 ? " " : "") + n5.toUpperCase();
      }), bi2 = Pu2("toUpperCase");
      function ma2(t, n5, e2) {
        return t = q4(t), n5 = e2 ? i4 : n5, n5 === i4 ? Pf2(t) ? Of2(t) : hf2(t) : t.match(n5) || [];
      }
      var wa2 = D4(function(t, n5) {
        try {
          return ct2(t, i4, n5);
        } catch (e2) {
          return yi2(e2) ? e2 : new O5(e2);
        }
      }), kd = Jt4(function(t, n5) {
        return mt2(n5, function(e2) {
          e2 = Ut3(e2), zt3(t, e2, xi2(t[e2], t));
        }), t;
      });
      function jd(t) {
        var n5 = t == null ? 0 : t.length, e2 = E7();
        return t = n5 ? z5(t, function(r3) {
          if (typeof r3[1] != "function") throw new wt2(R3);
          return [e2(r3[0]), r3[1]];
        }) : [], D4(function(r3) {
          for (var u4 = -1; ++u4 < n5; ) {
            var o5 = t[u4];
            if (ct2(o5[0], this, r3)) return ct2(o5[1], this, r3);
          }
        });
      }
      function tg(t) {
        return Ec(Ct3(t, Tt3));
      }
      function Ti2(t) {
        return function() {
          return t;
        };
      }
      function ng(t, n5) {
        return t == null || t !== t ? n5 : t;
      }
      var eg = Au2(), rg = Au2(true);
      function ft2(t) {
        return t;
      }
      function Li2(t) {
        return ks3(typeof t == "function" ? t : Ct3(t, Tt3));
      }
      function ig(t) {
        return tu2(Ct3(t, Tt3));
      }
      function sg(t, n5) {
        return nu2(t, Ct3(n5, Tt3));
      }
      var ug = D4(function(t, n5) {
        return function(e2) {
          return fe3(e2, t, n5);
        };
      }), ag = D4(function(t, n5) {
        return function(e2) {
          return fe3(t, e2, n5);
        };
      });
      function Di2(t, n5, e2) {
        var r3 = V4(n5), u4 = Je3(n5, r3);
        e2 == null && !(K4(n5) && (u4.length || !r3.length)) && (e2 = n5, n5 = t, t = this, u4 = Je3(n5, V4(n5)));
        var o5 = !(K4(e2) && "chain" in e2) || !!e2.chain, f5 = Zt3(t);
        return mt2(u4, function(c6) {
          var l5 = n5[c6];
          t[c6] = l5, f5 && (t.prototype[c6] = function() {
            var v5 = this.__chain__;
            if (o5 || v5) {
              var _3 = t(this.__wrapped__), m5 = _3.__actions__ = ut2(this.__actions__);
              return m5.push({ func: l5, args: arguments, thisArg: t }), _3.__chain__ = v5, _3;
            }
            return l5.apply(t, en2([this.value()], arguments));
          });
        }), t;
      }
      function og() {
        return j6._ === this && (j6._ = Hf2), this;
      }
      function Hi3() {
      }
      function fg(t) {
        return t = T4(t), D4(function(n5) {
          return eu2(n5, t);
        });
      }
      var cg = hi2(z5), hg = hi2(Is3), lg = hi2($r2);
      function Pa2(t) {
        return mi(t) ? Ur3(Ut3(t)) : Bc(t);
      }
      function pg(t) {
        return function(n5) {
          return t == null ? i4 : wn2(t, n5);
        };
      }
      var dg = xu2(), gg = xu2(true);
      function Ni2() {
        return [];
      }
      function $i() {
        return false;
      }
      function vg() {
        return {};
      }
      function _g() {
        return "";
      }
      function mg() {
        return true;
      }
      function wg(t, n5) {
        if (t = T4(t), t < 1 || t > tn2) return [];
        var e2 = Ht3, r3 = nt2(t, Ht3);
        n5 = E7(n5), t -= Ht3;
        for (var u4 = Wr(r3, n5); ++e2 < t; ) n5(e2);
        return u4;
      }
      function Pg(t) {
        return b5(t) ? z5(t, Ut3) : pt2(t) ? [t] : ut2(Wu2(q4(t)));
      }
      function Cg(t) {
        var n5 = ++Lf;
        return q4(t) + n5;
      }
      var Ag = ke3(function(t, n5) {
        return t + n5;
      }, 0), Ig = li("ceil"), xg = ke3(function(t, n5) {
        return t / n5;
      }, 1), Eg = li("floor");
      function yg(t) {
        return t && t.length ? Ke3(t, ft2, Vr2) : i4;
      }
      function Sg(t, n5) {
        return t && t.length ? Ke3(t, E7(n5, 2), Vr2) : i4;
      }
      function Og(t) {
        return ys3(t, ft2);
      }
      function Rg(t, n5) {
        return ys3(t, E7(n5, 2));
      }
      function bg(t) {
        return t && t.length ? Ke3(t, ft2, ni) : i4;
      }
      function Tg(t, n5) {
        return t && t.length ? Ke3(t, E7(n5, 2), ni) : i4;
      }
      var Lg = ke3(function(t, n5) {
        return t * n5;
      }, 1), Dg = li("round"), Hg = ke3(function(t, n5) {
        return t - n5;
      }, 0);
      function Ng(t) {
        return t && t.length ? Fr3(t, ft2) : 0;
      }
      function $g(t, n5) {
        return t && t.length ? Fr3(t, E7(n5, 2)) : 0;
      }
      return a4.after = ip, a4.ary = Vu2, a4.assign = Kp, a4.assignIn = ha2, a4.assignInWith = hr3, a4.assignWith = Jp, a4.at = Yp, a4.before = ku, a4.bind = xi2, a4.bindAll = kd, a4.bindKey = ju2, a4.castArray = vp, a4.chain = Zu2, a4.chunk = Eh, a4.compact = yh, a4.concat = Sh, a4.cond = jd, a4.conforms = tg, a4.constant = Ti2, a4.countBy = Nl, a4.create = Zp, a4.curry = ta2, a4.curryRight = na2, a4.debounce = ea2, a4.defaults = Xp, a4.defaultsDeep = Qp, a4.defer = sp, a4.delay = up, a4.difference = Oh, a4.differenceBy = Rh, a4.differenceWith = bh, a4.drop = Th, a4.dropRight = Lh, a4.dropRightWhile = Dh, a4.dropWhile = Hh, a4.fill = Nh, a4.filter = Ul, a4.flatMap = Wl, a4.flatMapDeep = Ml, a4.flatMapDepth = Bl, a4.flatten = zu, a4.flattenDeep = $h, a4.flattenDepth = Uh, a4.flip = ap, a4.flow = eg, a4.flowRight = rg, a4.fromPairs = qh, a4.functions = rd, a4.functionsIn = id, a4.groupBy = Gl, a4.initial = Wh, a4.intersection = Mh, a4.intersectionBy = Bh, a4.intersectionWith = Gh, a4.invert = ud, a4.invertBy = ad, a4.invokeMap = Kl, a4.iteratee = Li2, a4.keyBy = Jl, a4.keys = V4, a4.keysIn = ot2, a4.map = sr3, a4.mapKeys = fd, a4.mapValues = cd, a4.matches = ig, a4.matchesProperty = sg, a4.memoize = ar3, a4.merge = hd, a4.mergeWith = la2, a4.method = ug, a4.methodOf = ag, a4.mixin = Di2, a4.negate = or4, a4.nthArg = fg, a4.omit = ld, a4.omitBy = pd, a4.once = op, a4.orderBy = Yl, a4.over = cg, a4.overArgs = fp, a4.overEvery = hg, a4.overSome = lg, a4.partial = Ei2, a4.partialRight = ra2, a4.partition = Zl, a4.pick = dd, a4.pickBy = pa2, a4.property = Pa2, a4.propertyOf = pg, a4.pull = Yh, a4.pullAll = Ju2, a4.pullAllBy = Zh, a4.pullAllWith = Xh, a4.pullAt = Qh, a4.range = dg, a4.rangeRight = gg, a4.rearg = cp, a4.reject = Vl, a4.remove = Vh, a4.rest = hp, a4.reverse = Ai2, a4.sampleSize = jl, a4.set = vd, a4.setWith = _d, a4.shuffle = tp, a4.slice = kh, a4.sortBy = rp, a4.sortedUniq = sl, a4.sortedUniqBy = ul, a4.split = Wd, a4.spread = lp, a4.tail = al, a4.take = ol, a4.takeRight = fl, a4.takeRightWhile = cl, a4.takeWhile = hl, a4.tap = yl, a4.throttle = pp, a4.thru = ir3, a4.toArray = oa2, a4.toPairs = da2, a4.toPairsIn = ga2, a4.toPath = Pg, a4.toPlainObject = ca2, a4.transform = md, a4.unary = dp, a4.union = ll, a4.unionBy = pl, a4.unionWith = dl, a4.uniq = gl, a4.uniqBy = vl, a4.uniqWith = _l, a4.unset = wd, a4.unzip = Ii2, a4.unzipWith = Yu2, a4.update = Pd, a4.updateWith = Cd, a4.values = zn2, a4.valuesIn = Ad, a4.without = ml, a4.words = ma2, a4.wrap = gp, a4.xor = wl, a4.xorBy = Pl, a4.xorWith = Cl, a4.zip = Al, a4.zipObject = Il, a4.zipObjectDeep = xl, a4.zipWith = El, a4.entries = da2, a4.entriesIn = ga2, a4.extend = ha2, a4.extendWith = hr3, Di2(a4, a4), a4.add = Ag, a4.attempt = wa2, a4.camelCase = yd, a4.capitalize = va2, a4.ceil = Ig, a4.clamp = Id, a4.clone = _p, a4.cloneDeep = wp, a4.cloneDeepWith = Pp, a4.cloneWith = mp, a4.conformsTo = Cp, a4.deburr = _a2, a4.defaultTo = ng, a4.divide = xg, a4.endsWith = Sd, a4.eq = Rt2, a4.escape = Od, a4.escapeRegExp = Rd, a4.every = $l, a4.find = ql, a4.findIndex = Bu2, a4.findKey = Vp, a4.findLast = Fl, a4.findLastIndex = Gu2, a4.findLastKey = kp, a4.floor = Eg, a4.forEach = Xu2, a4.forEachRight = Qu2, a4.forIn = jp, a4.forInRight = td, a4.forOwn = nd, a4.forOwnRight = ed, a4.get = Oi2, a4.gt = Ap, a4.gte = Ip, a4.has = sd, a4.hasIn = Ri2, a4.head = Ku, a4.identity = ft2, a4.includes = zl, a4.indexOf = Fh, a4.inRange = xd, a4.invoke = od, a4.isArguments = An, a4.isArray = b5, a4.isArrayBuffer = xp, a4.isArrayLike = at2, a4.isArrayLikeObject = Y, a4.isBoolean = Ep, a4.isBuffer = cn2, a4.isDate = yp, a4.isElement = Sp, a4.isEmpty = Op, a4.isEqual = Rp, a4.isEqualWith = bp, a4.isError = yi2, a4.isFinite = Tp, a4.isFunction = Zt3, a4.isInteger = ia2, a4.isLength = fr2, a4.isMap = sa2, a4.isMatch = Lp, a4.isMatchWith = Dp, a4.isNaN = Hp, a4.isNative = Np, a4.isNil = Up, a4.isNull = $p, a4.isNumber = ua2, a4.isObject = K4, a4.isObjectLike = J2, a4.isPlainObject = ge3, a4.isRegExp = Si2, a4.isSafeInteger = qp, a4.isSet = aa2, a4.isString = cr3, a4.isSymbol = pt2, a4.isTypedArray = Gn2, a4.isUndefined = Fp, a4.isWeakMap = Wp, a4.isWeakSet = Mp, a4.join = zh, a4.kebabCase = bd, a4.last = It2, a4.lastIndexOf = Kh, a4.lowerCase = Td, a4.lowerFirst = Ld, a4.lt = Bp, a4.lte = Gp, a4.max = yg, a4.maxBy = Sg, a4.mean = Og, a4.meanBy = Rg, a4.min = bg, a4.minBy = Tg, a4.stubArray = Ni2, a4.stubFalse = $i, a4.stubObject = vg, a4.stubString = _g, a4.stubTrue = mg, a4.multiply = Lg, a4.nth = Jh, a4.noConflict = og, a4.noop = Hi3, a4.now = ur3, a4.pad = Dd, a4.padEnd = Hd, a4.padStart = Nd, a4.parseInt = $d, a4.random = Ed, a4.reduce = Xl, a4.reduceRight = Ql, a4.repeat = Ud, a4.replace = qd, a4.result = gd, a4.round = Dg, a4.runInContext = h5, a4.sample = kl, a4.size = np, a4.snakeCase = Fd, a4.some = ep, a4.sortedIndex = jh, a4.sortedIndexBy = tl, a4.sortedIndexOf = nl, a4.sortedLastIndex = el, a4.sortedLastIndexBy = rl, a4.sortedLastIndexOf = il, a4.startCase = Md, a4.startsWith = Bd, a4.subtract = Hg, a4.sum = Ng, a4.sumBy = $g, a4.template = Gd, a4.times = wg, a4.toFinite = Xt4, a4.toInteger = T4, a4.toLength = fa2, a4.toLower = zd, a4.toNumber = xt2, a4.toSafeInteger = zp, a4.toString = q4, a4.toUpper = Kd, a4.trim = Jd, a4.trimEnd = Yd, a4.trimStart = Zd, a4.truncate = Xd, a4.unescape = Qd, a4.uniqueId = Cg, a4.upperCase = Vd, a4.upperFirst = bi2, a4.each = Xu2, a4.eachRight = Qu2, a4.first = Ku, Di2(a4, function() {
        var t = {};
        return Nt2(a4, function(n5, e2) {
          F.call(a4.prototype, e2) || (t[e2] = n5);
        }), t;
      }(), { chain: false }), a4.VERSION = p5, mt2(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        a4[t].placeholder = a4;
      }), mt2(["drop", "take"], function(t, n5) {
        N11.prototype[t] = function(e2) {
          e2 = e2 === i4 ? 1 : Q4(T4(e2), 0);
          var r3 = this.__filtered__ && !n5 ? new N11(this) : this.clone();
          return r3.__filtered__ ? r3.__takeCount__ = nt2(e2, r3.__takeCount__) : r3.__views__.push({ size: nt2(e2, Ht3), type: t + (r3.__dir__ < 0 ? "Right" : "") }), r3;
        }, N11.prototype[t + "Right"] = function(e2) {
          return this.reverse()[t](e2).reverse();
        };
      }), mt2(["filter", "map", "takeWhile"], function(t, n5) {
        var e2 = n5 + 1, r3 = e2 == zi2 || e2 == Ka2;
        N11.prototype[t] = function(u4) {
          var o5 = this.clone();
          return o5.__iteratees__.push({ iteratee: E7(u4, 3), type: e2 }), o5.__filtered__ = o5.__filtered__ || r3, o5;
        };
      }), mt2(["head", "last"], function(t, n5) {
        var e2 = "take" + (n5 ? "Right" : "");
        N11.prototype[t] = function() {
          return this[e2](1).value()[0];
        };
      }), mt2(["initial", "tail"], function(t, n5) {
        var e2 = "drop" + (n5 ? "" : "Right");
        N11.prototype[t] = function() {
          return this.__filtered__ ? new N11(this) : this[e2](1);
        };
      }), N11.prototype.compact = function() {
        return this.filter(ft2);
      }, N11.prototype.find = function(t) {
        return this.filter(t).head();
      }, N11.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, N11.prototype.invokeMap = D4(function(t, n5) {
        return typeof t == "function" ? new N11(this) : this.map(function(e2) {
          return fe3(e2, t, n5);
        });
      }), N11.prototype.reject = function(t) {
        return this.filter(or4(E7(t)));
      }, N11.prototype.slice = function(t, n5) {
        t = T4(t);
        var e2 = this;
        return e2.__filtered__ && (t > 0 || n5 < 0) ? new N11(e2) : (t < 0 ? e2 = e2.takeRight(-t) : t && (e2 = e2.drop(t)), n5 !== i4 && (n5 = T4(n5), e2 = n5 < 0 ? e2.dropRight(-n5) : e2.take(n5 - t)), e2);
      }, N11.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, N11.prototype.toArray = function() {
        return this.take(Ht3);
      }, Nt2(N11.prototype, function(t, n5) {
        var e2 = /^(?:filter|find|map|reject)|While$/.test(n5), r3 = /^(?:head|last)$/.test(n5), u4 = a4[r3 ? "take" + (n5 == "last" ? "Right" : "") : n5], o5 = r3 || /^find/.test(n5);
        u4 && (a4.prototype[n5] = function() {
          var f5 = this.__wrapped__, c6 = r3 ? [1] : arguments, l5 = f5 instanceof N11, v5 = c6[0], _3 = l5 || b5(f5), m5 = function(H) {
            var $4 = u4.apply(a4, en2([H], c6));
            return r3 && C5 ? $4[0] : $4;
          };
          _3 && e2 && typeof v5 == "function" && v5.length != 1 && (l5 = _3 = false);
          var C5 = this.__chain__, I3 = !!this.__actions__.length, y7 = o5 && !C5, L6 = l5 && !I3;
          if (!o5 && _3) {
            f5 = L6 ? f5 : new N11(this);
            var S5 = t.apply(f5, c6);
            return S5.__actions__.push({ func: ir3, args: [m5], thisArg: i4 }), new Pt2(S5, C5);
          }
          return y7 && L6 ? t.apply(this, c6) : (S5 = this.thru(m5), y7 ? r3 ? S5.value()[0] : S5.value() : S5);
        });
      }), mt2(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n5 = be2[t], e2 = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", r3 = /^(?:pop|shift)$/.test(t);
        a4.prototype[t] = function() {
          var u4 = arguments;
          if (r3 && !this.__chain__) {
            var o5 = this.value();
            return n5.apply(b5(o5) ? o5 : [], u4);
          }
          return this[e2](function(f5) {
            return n5.apply(b5(f5) ? f5 : [], u4);
          });
        };
      }), Nt2(N11.prototype, function(t, n5) {
        var e2 = a4[n5];
        if (e2) {
          var r3 = e2.name + "";
          F.call(qn2, r3) || (qn2[r3] = []), qn2[r3].push({ name: n5, func: e2 });
        }
      }), qn2[Ve2(i4, ln).name] = [{ name: "wrapper", func: i4 }], N11.prototype.clone = Qf, N11.prototype.reverse = Vf, N11.prototype.value = kf2, a4.prototype.at = Sl, a4.prototype.chain = Ol, a4.prototype.commit = Rl, a4.prototype.next = bl, a4.prototype.plant = Ll, a4.prototype.reverse = Dl, a4.prototype.toJSON = a4.prototype.valueOf = a4.prototype.value = Hl, a4.prototype.first = a4.prototype.head, ee2 && (a4.prototype[ee2] = Tl), a4;
    }, Nn2 = Rf2();
    dn2 ? ((dn2.exports = Nn2)._ = Nn2, Lr3._ = Nn2) : j6._ = Nn2;
  }).call(_e4);
})(qi2, qi2.exports);
var Xg = Object.defineProperty;
var Qg = Object.defineProperties;
var Vg = Object.getOwnPropertyDescriptors;
var Oa2 = Object.getOwnPropertySymbols;
var kg = Object.prototype.hasOwnProperty;
var jg = Object.prototype.propertyIsEnumerable;
var Ra2 = (P2, s3, i4) => s3 in P2 ? Xg(P2, s3, { enumerable: true, configurable: true, writable: true, value: i4 }) : P2[s3] = i4;
var lr3 = (P2, s3) => {
  for (var i4 in s3 || (s3 = {})) kg.call(s3, i4) && Ra2(P2, i4, s3[i4]);
  if (Oa2) for (var i4 of Oa2(s3)) jg.call(s3, i4) && Ra2(P2, i4, s3[i4]);
  return P2;
};
var tv = (P2, s3) => Qg(P2, Vg(s3));
function kt3(P2, s3, i4) {
  var p5;
  const w5 = dn(P2);
  return ((p5 = s3.rpcMap) == null ? void 0 : p5[w5.reference]) || `${Zg}?chainId=${w5.namespace}:${w5.reference}&projectId=${i4}`;
}
function In2(P2) {
  return P2.includes(":") ? P2.split(":")[1] : P2;
}
function ba2(P2) {
  return P2.map((s3) => `${s3.split(":")[0]}:${s3.split(":")[1]}`);
}
function nv(P2, s3) {
  const i4 = Object.keys(s3.namespaces).filter((w5) => w5.includes(P2));
  if (!i4.length) return [];
  const p5 = [];
  return i4.forEach((w5) => {
    const x3 = s3.namespaces[w5].accounts;
    p5.push(...x3);
  }), p5;
}
function Fi2(P2 = {}, s3 = {}) {
  const i4 = Ta2(P2), p5 = Ta2(s3);
  return qi2.exports.merge(i4, p5);
}
function Ta2(P2) {
  var s3, i4, p5, w5;
  const x3 = {};
  if (!Yr(P2)) return x3;
  for (const [R3, k3] of Object.entries(P2)) {
    const jt3 = Zi(R3) ? [R3] : k3.chains, Jn2 = k3.methods || [], xn2 = k3.events || [], Tt3 = k3.rpcMap || {}, Ft3 = vo(R3);
    x3[Ft3] = tv(lr3(lr3({}, x3[Ft3]), k3), { chains: ge(jt3, (s3 = x3[Ft3]) == null ? void 0 : s3.chains), methods: ge(Jn2, (i4 = x3[Ft3]) == null ? void 0 : i4.methods), events: ge(xn2, (p5 = x3[Ft3]) == null ? void 0 : p5.events), rpcMap: lr3(lr3({}, Tt3), (w5 = x3[Ft3]) == null ? void 0 : w5.rpcMap) });
  }
  return x3;
}
function ev(P2) {
  return P2.includes(":") ? P2.split(":")[2] : P2;
}
function La2(P2) {
  const s3 = {};
  for (const [i4, p5] of Object.entries(P2)) {
    const w5 = p5.methods || [], x3 = p5.events || [], R3 = p5.accounts || [], k3 = Zi(i4) ? [i4] : p5.chains ? p5.chains : ba2(p5.accounts);
    s3[i4] = { chains: k3, methods: w5, events: x3, accounts: R3 };
  }
  return s3;
}
function Wi3(P2) {
  return typeof P2 == "number" ? P2 : P2.includes("0x") ? parseInt(P2, 16) : (P2 = P2.includes(":") ? P2.split(":")[1] : P2, isNaN(Number(P2)) ? P2 : Number(P2));
}
var Da2 = {};
var M2 = (P2) => Da2[P2];
var Mi3 = (P2, s3) => {
  Da2[P2] = s3;
};
var rv = class {
  constructor(s3) {
    this.name = "polkadot", this.namespace = s3.namespace, this.events = M2("events"), this.client = M2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s3) {
    this.namespace = Object.assign(this.namespace, s3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const s3 = this.namespace.chains[0];
    if (!s3) throw new Error("ChainId not found");
    return s3.split(":")[1];
  }
  request(s3) {
    return this.namespace.methods.includes(s3.request.method) ? this.client.request(s3) : this.getHttpProvider().request(s3.request);
  }
  setDefaultChain(s3, i4) {
    this.httpProviders[s3] || this.setHttpProvider(s3, i4), this.chainId = s3, this.events.emit(qt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${s3}`);
  }
  getAccounts() {
    const s3 = this.namespace.accounts;
    return s3 ? s3.filter((i4) => i4.split(":")[1] === this.chainId.toString()).map((i4) => i4.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const s3 = {};
    return this.namespace.chains.forEach((i4) => {
      var p5;
      const w5 = In2(i4);
      s3[w5] = this.createHttpProvider(w5, (p5 = this.namespace.rpcMap) == null ? void 0 : p5[i4]);
    }), s3;
  }
  getHttpProvider() {
    const s3 = `${this.name}:${this.chainId}`, i4 = this.httpProviders[s3];
    if (typeof i4 > "u") throw new Error(`JSON-RPC provider for ${s3} not found`);
    return i4;
  }
  setHttpProvider(s3, i4) {
    const p5 = this.createHttpProvider(s3, i4);
    p5 && (this.httpProviders[s3] = p5);
  }
  createHttpProvider(s3, i4) {
    const p5 = i4 || kt3(s3, this.namespace, this.client.core.projectId);
    if (!p5) throw new Error(`No RPC url provided for chainId: ${s3}`);
    return new o3(new f4(p5, M2("disableProviderPing")));
  }
};
var iv = Object.defineProperty;
var sv = Object.defineProperties;
var uv = Object.getOwnPropertyDescriptors;
var Ha2 = Object.getOwnPropertySymbols;
var av = Object.prototype.hasOwnProperty;
var ov = Object.prototype.propertyIsEnumerable;
var Na2 = (P2, s3, i4) => s3 in P2 ? iv(P2, s3, { enumerable: true, configurable: true, writable: true, value: i4 }) : P2[s3] = i4;
var $a2 = (P2, s3) => {
  for (var i4 in s3 || (s3 = {})) av.call(s3, i4) && Na2(P2, i4, s3[i4]);
  if (Ha2) for (var i4 of Ha2(s3)) ov.call(s3, i4) && Na2(P2, i4, s3[i4]);
  return P2;
};
var Ua2 = (P2, s3) => sv(P2, uv(s3));
var fv = class {
  constructor(s3) {
    this.name = "eip155", this.namespace = s3.namespace, this.events = M2("events"), this.client = M2("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(s3) {
    switch (s3.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(s3);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(s3);
    }
    return this.namespace.methods.includes(s3.request.method) ? await this.client.request(s3) : this.getHttpProvider().request(s3.request);
  }
  updateNamespace(s3) {
    this.namespace = Object.assign(this.namespace, s3);
  }
  setDefaultChain(s3, i4) {
    this.httpProviders[s3] || this.setHttpProvider(parseInt(s3), i4), this.chainId = parseInt(s3), this.events.emit(qt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${s3}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const s3 = this.namespace.chains[0];
    if (!s3) throw new Error("ChainId not found");
    return s3.split(":")[1];
  }
  createHttpProvider(s3, i4) {
    const p5 = i4 || kt3(`${this.name}:${s3}`, this.namespace, this.client.core.projectId);
    if (!p5) throw new Error(`No RPC url provided for chainId: ${s3}`);
    return new o3(new f4(p5, M2("disableProviderPing")));
  }
  setHttpProvider(s3, i4) {
    const p5 = this.createHttpProvider(s3, i4);
    p5 && (this.httpProviders[s3] = p5);
  }
  createHttpProviders() {
    const s3 = {};
    return this.namespace.chains.forEach((i4) => {
      var p5;
      const w5 = parseInt(In2(i4));
      s3[w5] = this.createHttpProvider(w5, (p5 = this.namespace.rpcMap) == null ? void 0 : p5[i4]);
    }), s3;
  }
  getAccounts() {
    const s3 = this.namespace.accounts;
    return s3 ? [...new Set(s3.filter((i4) => i4.split(":")[1] === this.chainId.toString()).map((i4) => i4.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const s3 = this.chainId, i4 = this.httpProviders[s3];
    if (typeof i4 > "u") throw new Error(`JSON-RPC provider for ${s3} not found`);
    return i4;
  }
  async handleSwitchChain(s3) {
    var i4, p5;
    let w5 = s3.request.params ? (i4 = s3.request.params[0]) == null ? void 0 : i4.chainId : "0x0";
    w5 = w5.startsWith("0x") ? w5 : `0x${w5}`;
    const x3 = parseInt(w5, 16);
    if (this.isChainApproved(x3)) this.setDefaultChain(`${x3}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: s3.topic, request: { method: s3.request.method, params: [{ chainId: w5 }] }, chainId: (p5 = this.namespace.chains) == null ? void 0 : p5[0] }), this.setDefaultChain(`${x3}`);
    else throw new Error(`Failed to switch to chain 'eip155:${x3}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(s3) {
    return this.namespace.chains.includes(`${this.name}:${s3}`);
  }
  async getCapabilities(s3) {
    var i4, p5, w5;
    const x3 = (p5 = (i4 = s3.request) == null ? void 0 : i4.params) == null ? void 0 : p5[0];
    if (!x3) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const R3 = this.client.session.get(s3.topic), k3 = ((w5 = R3 == null ? void 0 : R3.sessionProperties) == null ? void 0 : w5.capabilities) || {};
    if (k3 != null && k3[x3]) return k3 == null ? void 0 : k3[x3];
    const jt3 = await this.client.request(s3);
    try {
      await this.client.session.update(s3.topic, { sessionProperties: Ua2($a2({}, R3.sessionProperties || {}), { capabilities: Ua2($a2({}, k3 || {}), { [x3]: jt3 }) }) });
    } catch (Jn2) {
      console.warn("Failed to update session with capabilities", Jn2);
    }
    return jt3;
  }
};
var cv = class {
  constructor(s3) {
    this.name = "solana", this.namespace = s3.namespace, this.events = M2("events"), this.client = M2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s3) {
    this.namespace = Object.assign(this.namespace, s3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(s3) {
    return this.namespace.methods.includes(s3.request.method) ? this.client.request(s3) : this.getHttpProvider().request(s3.request);
  }
  setDefaultChain(s3, i4) {
    this.httpProviders[s3] || this.setHttpProvider(s3, i4), this.chainId = s3, this.events.emit(qt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${s3}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const s3 = this.namespace.chains[0];
    if (!s3) throw new Error("ChainId not found");
    return s3.split(":")[1];
  }
  getAccounts() {
    const s3 = this.namespace.accounts;
    return s3 ? [...new Set(s3.filter((i4) => i4.split(":")[1] === this.chainId.toString()).map((i4) => i4.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const s3 = {};
    return this.namespace.chains.forEach((i4) => {
      var p5;
      const w5 = In2(i4);
      s3[w5] = this.createHttpProvider(w5, (p5 = this.namespace.rpcMap) == null ? void 0 : p5[i4]);
    }), s3;
  }
  getHttpProvider() {
    const s3 = `${this.name}:${this.chainId}`, i4 = this.httpProviders[s3];
    if (typeof i4 > "u") throw new Error(`JSON-RPC provider for ${s3} not found`);
    return i4;
  }
  setHttpProvider(s3, i4) {
    const p5 = this.createHttpProvider(s3, i4);
    p5 && (this.httpProviders[s3] = p5);
  }
  createHttpProvider(s3, i4) {
    const p5 = i4 || kt3(s3, this.namespace, this.client.core.projectId);
    if (!p5) throw new Error(`No RPC url provided for chainId: ${s3}`);
    return new o3(new f4(p5, M2("disableProviderPing")));
  }
};
var hv = class {
  constructor(s3) {
    this.name = "cosmos", this.namespace = s3.namespace, this.events = M2("events"), this.client = M2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s3) {
    this.namespace = Object.assign(this.namespace, s3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const s3 = this.namespace.chains[0];
    if (!s3) throw new Error("ChainId not found");
    return s3.split(":")[1];
  }
  request(s3) {
    return this.namespace.methods.includes(s3.request.method) ? this.client.request(s3) : this.getHttpProvider().request(s3.request);
  }
  setDefaultChain(s3, i4) {
    this.httpProviders[s3] || this.setHttpProvider(s3, i4), this.chainId = s3, this.events.emit(qt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const s3 = this.namespace.accounts;
    return s3 ? [...new Set(s3.filter((i4) => i4.split(":")[1] === this.chainId.toString()).map((i4) => i4.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const s3 = {};
    return this.namespace.chains.forEach((i4) => {
      var p5;
      const w5 = In2(i4);
      s3[w5] = this.createHttpProvider(w5, (p5 = this.namespace.rpcMap) == null ? void 0 : p5[i4]);
    }), s3;
  }
  getHttpProvider() {
    const s3 = `${this.name}:${this.chainId}`, i4 = this.httpProviders[s3];
    if (typeof i4 > "u") throw new Error(`JSON-RPC provider for ${s3} not found`);
    return i4;
  }
  setHttpProvider(s3, i4) {
    const p5 = this.createHttpProvider(s3, i4);
    p5 && (this.httpProviders[s3] = p5);
  }
  createHttpProvider(s3, i4) {
    const p5 = i4 || kt3(s3, this.namespace, this.client.core.projectId);
    if (!p5) throw new Error(`No RPC url provided for chainId: ${s3}`);
    return new o3(new f4(p5, M2("disableProviderPing")));
  }
};
var lv = class {
  constructor(s3) {
    this.name = "cip34", this.namespace = s3.namespace, this.events = M2("events"), this.client = M2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s3) {
    this.namespace = Object.assign(this.namespace, s3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const s3 = this.namespace.chains[0];
    if (!s3) throw new Error("ChainId not found");
    return s3.split(":")[1];
  }
  request(s3) {
    return this.namespace.methods.includes(s3.request.method) ? this.client.request(s3) : this.getHttpProvider().request(s3.request);
  }
  setDefaultChain(s3, i4) {
    this.httpProviders[s3] || this.setHttpProvider(s3, i4), this.chainId = s3, this.events.emit(qt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const s3 = this.namespace.accounts;
    return s3 ? [...new Set(s3.filter((i4) => i4.split(":")[1] === this.chainId.toString()).map((i4) => i4.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const s3 = {};
    return this.namespace.chains.forEach((i4) => {
      const p5 = this.getCardanoRPCUrl(i4), w5 = In2(i4);
      s3[w5] = this.createHttpProvider(w5, p5);
    }), s3;
  }
  getHttpProvider() {
    const s3 = `${this.name}:${this.chainId}`, i4 = this.httpProviders[s3];
    if (typeof i4 > "u") throw new Error(`JSON-RPC provider for ${s3} not found`);
    return i4;
  }
  getCardanoRPCUrl(s3) {
    const i4 = this.namespace.rpcMap;
    if (i4) return i4[s3];
  }
  setHttpProvider(s3, i4) {
    const p5 = this.createHttpProvider(s3, i4);
    p5 && (this.httpProviders[s3] = p5);
  }
  createHttpProvider(s3, i4) {
    const p5 = i4 || this.getCardanoRPCUrl(s3);
    if (!p5) throw new Error(`No RPC url provided for chainId: ${s3}`);
    return new o3(new f4(p5, M2("disableProviderPing")));
  }
};
var pv = class {
  constructor(s3) {
    this.name = "elrond", this.namespace = s3.namespace, this.events = M2("events"), this.client = M2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s3) {
    this.namespace = Object.assign(this.namespace, s3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(s3) {
    return this.namespace.methods.includes(s3.request.method) ? this.client.request(s3) : this.getHttpProvider().request(s3.request);
  }
  setDefaultChain(s3, i4) {
    this.httpProviders[s3] || this.setHttpProvider(s3, i4), this.chainId = s3, this.events.emit(qt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${s3}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const s3 = this.namespace.chains[0];
    if (!s3) throw new Error("ChainId not found");
    return s3.split(":")[1];
  }
  getAccounts() {
    const s3 = this.namespace.accounts;
    return s3 ? [...new Set(s3.filter((i4) => i4.split(":")[1] === this.chainId.toString()).map((i4) => i4.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const s3 = {};
    return this.namespace.chains.forEach((i4) => {
      var p5;
      const w5 = In2(i4);
      s3[w5] = this.createHttpProvider(w5, (p5 = this.namespace.rpcMap) == null ? void 0 : p5[i4]);
    }), s3;
  }
  getHttpProvider() {
    const s3 = `${this.name}:${this.chainId}`, i4 = this.httpProviders[s3];
    if (typeof i4 > "u") throw new Error(`JSON-RPC provider for ${s3} not found`);
    return i4;
  }
  setHttpProvider(s3, i4) {
    const p5 = this.createHttpProvider(s3, i4);
    p5 && (this.httpProviders[s3] = p5);
  }
  createHttpProvider(s3, i4) {
    const p5 = i4 || kt3(s3, this.namespace, this.client.core.projectId);
    if (!p5) throw new Error(`No RPC url provided for chainId: ${s3}`);
    return new o3(new f4(p5, M2("disableProviderPing")));
  }
};
var dv = class {
  constructor(s3) {
    this.name = "multiversx", this.namespace = s3.namespace, this.events = M2("events"), this.client = M2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s3) {
    this.namespace = Object.assign(this.namespace, s3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(s3) {
    return this.namespace.methods.includes(s3.request.method) ? this.client.request(s3) : this.getHttpProvider().request(s3.request);
  }
  setDefaultChain(s3, i4) {
    this.httpProviders[s3] || this.setHttpProvider(s3, i4), this.chainId = s3, this.events.emit(qt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${s3}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const s3 = this.namespace.chains[0];
    if (!s3) throw new Error("ChainId not found");
    return s3.split(":")[1];
  }
  getAccounts() {
    const s3 = this.namespace.accounts;
    return s3 ? [...new Set(s3.filter((i4) => i4.split(":")[1] === this.chainId.toString()).map((i4) => i4.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const s3 = {};
    return this.namespace.chains.forEach((i4) => {
      var p5;
      const w5 = In2(i4);
      s3[w5] = this.createHttpProvider(w5, (p5 = this.namespace.rpcMap) == null ? void 0 : p5[i4]);
    }), s3;
  }
  getHttpProvider() {
    const s3 = `${this.name}:${this.chainId}`, i4 = this.httpProviders[s3];
    if (typeof i4 > "u") throw new Error(`JSON-RPC provider for ${s3} not found`);
    return i4;
  }
  setHttpProvider(s3, i4) {
    const p5 = this.createHttpProvider(s3, i4);
    p5 && (this.httpProviders[s3] = p5);
  }
  createHttpProvider(s3, i4) {
    const p5 = i4 || kt3(s3, this.namespace, this.client.core.projectId);
    if (!p5) throw new Error(`No RPC url provided for chainId: ${s3}`);
    return new o3(new f4(p5, M2("disableProviderPing")));
  }
};
var gv = class {
  constructor(s3) {
    this.name = "near", this.namespace = s3.namespace, this.events = M2("events"), this.client = M2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s3) {
    this.namespace = Object.assign(this.namespace, s3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const s3 = this.namespace.chains[0];
    if (!s3) throw new Error("ChainId not found");
    return s3.split(":")[1];
  }
  request(s3) {
    return this.namespace.methods.includes(s3.request.method) ? this.client.request(s3) : this.getHttpProvider().request(s3.request);
  }
  setDefaultChain(s3, i4) {
    if (this.chainId = s3, !this.httpProviders[s3]) {
      const p5 = i4 || kt3(`${this.name}:${s3}`, this.namespace);
      if (!p5) throw new Error(`No RPC url provided for chainId: ${s3}`);
      this.setHttpProvider(s3, p5);
    }
    this.events.emit(qt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const s3 = this.namespace.accounts;
    return s3 ? s3.filter((i4) => i4.split(":")[1] === this.chainId.toString()).map((i4) => i4.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const s3 = {};
    return this.namespace.chains.forEach((i4) => {
      var p5;
      s3[i4] = this.createHttpProvider(i4, (p5 = this.namespace.rpcMap) == null ? void 0 : p5[i4]);
    }), s3;
  }
  getHttpProvider() {
    const s3 = `${this.name}:${this.chainId}`, i4 = this.httpProviders[s3];
    if (typeof i4 > "u") throw new Error(`JSON-RPC provider for ${s3} not found`);
    return i4;
  }
  setHttpProvider(s3, i4) {
    const p5 = this.createHttpProvider(s3, i4);
    p5 && (this.httpProviders[s3] = p5);
  }
  createHttpProvider(s3, i4) {
    const p5 = i4 || kt3(s3, this.namespace);
    return typeof p5 > "u" ? void 0 : new o3(new f4(p5, M2("disableProviderPing")));
  }
};
var vv = class {
  constructor(s3) {
    this.name = Kn2, this.namespace = s3.namespace, this.events = M2("events"), this.client = M2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s3) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(s3.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(s3.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(s3.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(s3.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(s3) {
    return this.namespace.methods.includes(s3.request.method) ? this.client.request(s3) : this.getHttpProvider(s3.chainId).request(s3.request);
  }
  setDefaultChain(s3, i4) {
    this.httpProviders[s3] || this.setHttpProvider(s3, i4), this.chainId = s3, this.events.emit(qt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${s3}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const s3 = this.namespace.chains[0];
    if (!s3) throw new Error("ChainId not found");
    return s3.split(":")[1];
  }
  getAccounts() {
    const s3 = this.namespace.accounts;
    return s3 ? [...new Set(s3.filter((i4) => i4.split(":")[1] === this.chainId.toString()).map((i4) => i4.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var s3, i4;
    const p5 = {};
    return (i4 = (s3 = this.namespace) == null ? void 0 : s3.accounts) == null || i4.forEach((w5) => {
      const x3 = dn(w5);
      p5[`${x3.namespace}:${x3.reference}`] = this.createHttpProvider(w5);
    }), p5;
  }
  getHttpProvider(s3) {
    const i4 = this.httpProviders[s3];
    if (typeof i4 > "u") throw new Error(`JSON-RPC provider for ${s3} not found`);
    return i4;
  }
  setHttpProvider(s3, i4) {
    const p5 = this.createHttpProvider(s3, i4);
    p5 && (this.httpProviders[s3] = p5);
  }
  createHttpProvider(s3, i4) {
    const p5 = i4 || kt3(s3, this.namespace, this.client.core.projectId);
    if (!p5) throw new Error(`No RPC url provided for chainId: ${s3}`);
    return new o3(new f4(p5, M2("disableProviderPing")));
  }
};
var _v = Object.defineProperty;
var mv = Object.defineProperties;
var wv = Object.getOwnPropertyDescriptors;
var qa2 = Object.getOwnPropertySymbols;
var Pv = Object.prototype.hasOwnProperty;
var Cv = Object.prototype.propertyIsEnumerable;
var Fa2 = (P2, s3, i4) => s3 in P2 ? _v(P2, s3, { enumerable: true, configurable: true, writable: true, value: i4 }) : P2[s3] = i4;
var pr3 = (P2, s3) => {
  for (var i4 in s3 || (s3 = {})) Pv.call(s3, i4) && Fa2(P2, i4, s3[i4]);
  if (qa2) for (var i4 of qa2(s3)) Cv.call(s3, i4) && Fa2(P2, i4, s3[i4]);
  return P2;
};
var Bi3 = (P2, s3) => mv(P2, wv(s3));
var dr3 = class _dr {
  constructor(s3) {
    this.events = new import_events10.default(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = false, this.maxPairingAttempts = 10, this.disableProviderPing = false, this.providerOpts = s3, this.logger = typeof (s3 == null ? void 0 : s3.logger) < "u" && typeof (s3 == null ? void 0 : s3.logger) != "string" ? s3.logger : (0, import_pino2.default)(k2({ level: (s3 == null ? void 0 : s3.logger) || ya2 })), this.disableProviderPing = (s3 == null ? void 0 : s3.disableProviderPing) || false;
  }
  static async init(s3) {
    const i4 = new _dr(s3);
    return await i4.initialize(), i4;
  }
  async request(s3, i4, p5) {
    const [w5, x3] = this.validateChain(i4);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(w5).request({ request: pr3({}, s3), chainId: `${w5}:${x3}`, topic: this.session.topic, expiry: p5 });
  }
  sendAsync(s3, i4, p5, w5) {
    const x3 = (/* @__PURE__ */ new Date()).getTime();
    this.request(s3, p5, w5).then((R3) => i4(null, formatJsonRpcResult(x3, R3))).catch((R3) => i4(R3, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var s3;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (s3 = this.session) == null ? void 0 : s3.topic, reason: tr("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(s3) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(s3), await this.cleanupPendingPairings(), !s3.skipPairing) return await this.pair(s3.pairingTopic);
  }
  async authenticate(s3) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(s3), await this.cleanupPendingPairings();
    const { uri: i4, response: p5 } = await this.client.authenticate(s3);
    i4 && (this.uri = i4, this.events.emit("display_uri", i4));
    const w5 = await p5();
    if (this.session = w5.session, this.session) {
      const x3 = La2(this.session.namespaces);
      this.namespaces = Fi2(this.namespaces, x3), this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return w5;
  }
  on(s3, i4) {
    this.events.on(s3, i4);
  }
  once(s3, i4) {
    this.events.once(s3, i4);
  }
  removeListener(s3, i4) {
    this.events.removeListener(s3, i4);
  }
  off(s3, i4) {
    this.events.off(s3, i4);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(s3) {
    this.shouldAbortPairingAttempt = false;
    let i4 = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (i4 >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
      const { uri: p5, approval: w5 } = await this.client.connect({ pairingTopic: s3, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      p5 && (this.uri = p5, this.events.emit("display_uri", p5)), await w5().then((x3) => {
        this.session = x3;
        const R3 = La2(x3.namespaces);
        this.namespaces = Fi2(this.namespaces, R3), this.persist("namespaces", this.namespaces);
      }).catch((x3) => {
        if (x3.message !== Ge2) throw x3;
        i4++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(s3, i4) {
    try {
      if (!this.session) return;
      const [p5, w5] = this.validateChain(s3), x3 = this.getProvider(p5);
      x3.name === Kn2 ? x3.setDefaultChain(`${p5}:${w5}`, i4) : x3.setDefaultChain(w5, i4);
    } catch (p5) {
      if (!/Please call connect/.test(p5.message)) throw p5;
    }
  }
  async cleanupPendingPairings(s3 = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const i4 = this.client.pairing.getAll();
    if (Er(i4)) {
      for (const p5 of i4) s3.deletePairings ? this.client.core.expirer.set(p5.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(p5.topic);
      this.logger.info(`Inactive pairings cleared: ${i4.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = true;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const s3 = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[s3]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await oe2.init({ logger: this.providerOpts.logger || ya2, relayUrl: this.providerOpts.relayUrl || Kg, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const s3 = [...new Set(Object.keys(this.session.namespaces).map((i4) => vo(i4)))];
    Mi3("client", this.client), Mi3("events", this.events), Mi3("disableProviderPing", this.disableProviderPing), s3.forEach((i4) => {
      if (!this.session) return;
      const p5 = nv(i4, this.session), w5 = ba2(p5), x3 = Fi2(this.namespaces, this.optionalNamespaces), R3 = Bi3(pr3({}, x3[i4]), { accounts: p5, chains: w5 });
      switch (i4) {
        case "eip155":
          this.rpcProviders[i4] = new fv({ namespace: R3 });
          break;
        case "solana":
          this.rpcProviders[i4] = new cv({ namespace: R3 });
          break;
        case "cosmos":
          this.rpcProviders[i4] = new hv({ namespace: R3 });
          break;
        case "polkadot":
          this.rpcProviders[i4] = new rv({ namespace: R3 });
          break;
        case "cip34":
          this.rpcProviders[i4] = new lv({ namespace: R3 });
          break;
        case "elrond":
          this.rpcProviders[i4] = new pv({ namespace: R3 });
          break;
        case "multiversx":
          this.rpcProviders[i4] = new dv({ namespace: R3 });
          break;
        case "near":
          this.rpcProviders[i4] = new gv({ namespace: R3 });
          break;
        default:
          this.rpcProviders[Kn2] ? this.rpcProviders[Kn2].updateNamespace(R3) : this.rpcProviders[Kn2] = new vv({ namespace: R3 });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (s3) => {
      this.events.emit("session_ping", s3);
    }), this.client.on("session_event", (s3) => {
      const { params: i4 } = s3, { event: p5 } = i4;
      if (p5.name === "accountsChanged") {
        const w5 = p5.data;
        w5 && Er(w5) && this.events.emit("accountsChanged", w5.map(ev));
      } else if (p5.name === "chainChanged") {
        const w5 = i4.chainId, x3 = i4.event.data, R3 = vo(w5), k3 = Wi3(w5) !== Wi3(x3) ? `${R3}:${Wi3(x3)}` : w5;
        this.onChainChanged(k3);
      } else this.events.emit(p5.name, p5.data);
      this.events.emit("session_event", s3);
    }), this.client.on("session_update", ({ topic: s3, params: i4 }) => {
      var p5;
      const { namespaces: w5 } = i4, x3 = (p5 = this.client) == null ? void 0 : p5.session.get(s3);
      this.session = Bi3(pr3({}, x3), { namespaces: w5 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: s3, params: i4 });
    }), this.client.on("session_delete", async (s3) => {
      await this.cleanup(), this.events.emit("session_delete", s3), this.events.emit("disconnect", Bi3(pr3({}, tr("USER_DISCONNECTED")), { data: s3.topic }));
    }), this.on(qt3.DEFAULT_CHAIN_CHANGED, (s3) => {
      this.onChainChanged(s3, true);
    });
  }
  getProvider(s3) {
    return this.rpcProviders[s3] || this.rpcProviders[Kn2];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((s3) => {
      var i4;
      this.getProvider(s3).updateNamespace((i4 = this.session) == null ? void 0 : i4.namespaces[s3]);
    });
  }
  setNamespaces(s3) {
    const { namespaces: i4, optionalNamespaces: p5, sessionProperties: w5 } = s3;
    i4 && Object.keys(i4).length && (this.namespaces = i4), p5 && Object.keys(p5).length && (this.optionalNamespaces = p5), this.sessionProperties = w5, this.persist("namespaces", i4), this.persist("optionalNamespaces", p5);
  }
  validateChain(s3) {
    const [i4, p5] = (s3 == null ? void 0 : s3.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [i4, p5];
    if (i4 && !Object.keys(this.namespaces || {}).map((R3) => vo(R3)).includes(i4)) throw new Error(`Namespace '${i4}' is not configured. Please call connect() first with namespace config.`);
    if (i4 && p5) return [i4, p5];
    const w5 = vo(Object.keys(this.namespaces)[0]), x3 = this.rpcProviders[w5].getDefaultChain();
    return [w5, x3];
  }
  async requestAccounts() {
    const [s3] = this.validateChain();
    return await this.getProvider(s3).requestAccounts();
  }
  onChainChanged(s3, i4 = false) {
    if (!this.namespaces) return;
    const [p5, w5] = this.validateChain(s3);
    w5 && (i4 || this.getProvider(p5).setDefaultChain(w5), this.namespaces[p5] ? this.namespaces[p5].defaultChain = w5 : this.namespaces[`${p5}:${w5}`] ? this.namespaces[`${p5}:${w5}`].defaultChain = w5 : this.namespaces[`${p5}:${w5}`] = { defaultChain: w5 }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", w5));
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: true });
  }
  persist(s3, i4) {
    this.client.core.storage.setItem(`${Sa2}/${s3}`, i4);
  }
  async getFromStore(s3) {
    return await this.client.core.storage.getItem(`${Sa2}/${s3}`);
  }
};
var Av = dr3;

// node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var T3 = "wc";
var S4 = "ethereum_provider";
var $3 = `${T3}@2:${S4}:`;
var j5 = "https://rpc.walletconnect.com/v1/";
var u3 = ["eth_sendTransaction", "personal_sign"];
var y6 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"];
var g4 = ["chainChanged", "accountsChanged"];
var M3 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var q3 = Object.defineProperty;
var N10 = Object.defineProperties;
var D3 = Object.getOwnPropertyDescriptors;
var O4 = Object.getOwnPropertySymbols;
var U3 = Object.prototype.hasOwnProperty;
var Q3 = Object.prototype.propertyIsEnumerable;
var b4 = (a4, t, s3) => t in a4 ? q3(a4, t, { enumerable: true, configurable: true, writable: true, value: s3 }) : a4[t] = s3;
var p4 = (a4, t) => {
  for (var s3 in t || (t = {})) U3.call(t, s3) && b4(a4, s3, t[s3]);
  if (O4) for (var s3 of O4(t)) Q3.call(t, s3) && b4(a4, s3, t[s3]);
  return a4;
};
var E6 = (a4, t) => N10(a4, D3(t));
function m4(a4) {
  return Number(a4[0].split(":")[1]);
}
function v4(a4) {
  return `0x${a4.toString(16)}`;
}
function L5(a4) {
  const { chains: t, optionalChains: s3, methods: i4, optionalMethods: e2, events: n5, optionalEvents: o5, rpcMap: r3 } = a4;
  if (!Er(t)) throw new Error("Invalid chains");
  const c6 = { chains: t, methods: i4 || u3, events: n5 || g4, rpcMap: p4({}, t.length ? { [m4(t)]: r3[m4(t)] } : {}) }, h5 = n5 == null ? void 0 : n5.filter((l5) => !g4.includes(l5)), d4 = i4 == null ? void 0 : i4.filter((l5) => !u3.includes(l5));
  if (!s3 && !o5 && !e2 && !(h5 != null && h5.length) && !(d4 != null && d4.length)) return { required: t.length ? c6 : void 0 };
  const w5 = (h5 == null ? void 0 : h5.length) && (d4 == null ? void 0 : d4.length) || !s3, I3 = { chains: [...new Set(w5 ? c6.chains.concat(s3 || []) : s3)], methods: [...new Set(c6.methods.concat(e2 != null && e2.length ? e2 : y6))], events: [...new Set(c6.events.concat(o5 != null && o5.length ? o5 : M3))], rpcMap: r3 };
  return { required: t.length ? c6 : void 0, optional: s3.length ? I3 : void 0 };
}
var C4 = class _C {
  constructor() {
    this.events = new import_events11.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = $3, this.on = (t, s3) => (this.events.on(t, s3), this), this.once = (t, s3) => (this.events.once(t, s3), this), this.removeListener = (t, s3) => (this.events.removeListener(t, s3), this), this.off = (t, s3) => (this.events.off(t, s3), this), this.parseAccount = (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const s3 = new _C();
    return await s3.initialize(t), s3;
  }
  async request(t, s3) {
    return await this.signer.request(t, this.formatChainId(this.chainId), s3);
  }
  sendAsync(t, s3, i4) {
    this.signer.sendAsync(t, s3, this.formatChainId(this.chainId), i4);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : false;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : false;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t) {
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: s3, optional: i4 } = L5(this.rpc);
    try {
      const e2 = await new Promise(async (o5, r3) => {
        var c6;
        this.rpc.showQrModal && ((c6 = this.modal) == null || c6.subscribeModal((h5) => {
          !h5.open && !this.signer.session && (this.signer.abortPairingAttempt(), r3(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(E6(p4({ namespaces: p4({}, s3 && { [this.namespace]: s3 }) }, i4 && { optionalNamespaces: { [this.namespace]: i4 } }), { pairingTopic: t == null ? void 0 : t.pairingTopic })).then((h5) => {
          o5(h5);
        }).catch((h5) => {
          r3(new Error(h5.message));
        });
      });
      if (!e2) return;
      const n5 = zo(e2.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n5), this.setAccounts(n5), this.events.emit("connect", { chainId: v4(this.chainId) });
    } catch (e2) {
      throw this.signer.logger.error(e2), e2;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async authenticate(t) {
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: t == null ? void 0 : t.chains });
    try {
      const s3 = await new Promise(async (e2, n5) => {
        var o5;
        this.rpc.showQrModal && ((o5 = this.modal) == null || o5.subscribeModal((r3) => {
          !r3.open && !this.signer.session && (this.signer.abortPairingAttempt(), n5(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate(E6(p4({}, t), { chains: this.rpc.chains })).then((r3) => {
          e2(r3);
        }).catch((r3) => {
          n5(new Error(r3.message));
        });
      }), i4 = s3.session;
      if (i4) {
        const e2 = zo(i4.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e2), this.setAccounts(e2), this.events.emit("connect", { chainId: v4(this.chainId) });
      }
      return s3;
    } catch (s3) {
      throw this.signer.logger.error(s3), s3;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return true;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: s3 } = t, { event: i4 } = s3;
      i4.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i4.data), this.events.emit("accountsChanged", this.accounts)) : i4.name === "chainChanged" ? this.setChainId(this.formatChainId(i4.data)) : this.events.emit(i4.name, i4.data), this.events.emit("session_event", t);
    }), this.signer.on("chainChanged", (t) => {
      const s3 = parseInt(t);
      this.chainId = s3, this.events.emit("chainChanged", v4(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", E6(p4({}, tr("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var s3, i4;
      this.rpc.showQrModal && ((s3 = this.modal) == null || s3.closeModal(), (i4 = this.modal) == null || i4.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : false;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const s3 = t.filter((i4) => this.isCompatibleChainId(i4)).map((i4) => this.parseChainId(i4));
    s3.length && (this.chainId = s3[0], this.events.emit("chainChanged", v4(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const s3 = this.parseChainId(t);
      this.chainId = s3, this.switchEthereumChain(s3);
    }
  }
  parseAccountId(t) {
    const [s3, i4, e2] = t.split(":");
    return { chainId: `${s3}:${i4}`, address: e2 };
  }
  setAccounts(t) {
    this.accounts = t.filter((s3) => this.parseChainId(this.parseAccountId(s3).chainId) === this.chainId).map((s3) => this.parseAccountId(s3).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var s3, i4;
    const e2 = (s3 = t == null ? void 0 : t.chains) != null ? s3 : [], n5 = (i4 = t == null ? void 0 : t.optionalChains) != null ? i4 : [], o5 = e2.concat(n5);
    if (!o5.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
    const r3 = e2.length ? (t == null ? void 0 : t.methods) || u3 : [], c6 = e2.length ? (t == null ? void 0 : t.events) || g4 : [], h5 = (t == null ? void 0 : t.optionalMethods) || [], d4 = (t == null ? void 0 : t.optionalEvents) || [], w5 = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(o5, t.projectId), I3 = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: e2 == null ? void 0 : e2.map((l5) => this.formatChainId(l5)), optionalChains: n5.map((l5) => this.formatChainId(l5)), methods: r3, events: c6, optionalMethods: h5, optionalEvents: d4, rpcMap: w5, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: I3, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, s3) {
    const i4 = {};
    return t.forEach((e2) => {
      i4[e2] = this.getRpcUrl(e2, s3);
    }), i4;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? m4(this.rpc.chains) : m4(this.rpc.optionalChains), this.signer = await Av.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storageOptions: t.storageOptions }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let s3;
      try {
        const { WalletConnectModal: i4 } = await import("./dist-3GPK7MDI.js");
        s3 = i4;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (s3) try {
        this.modal = new s3(p4({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
      } catch (i4) {
        throw this.signer.logger.error(i4), new Error("Could not generate WalletConnectModal Instance");
      }
    }
  }
  loadConnectOpts(t) {
    if (!t) return;
    const { chains: s3, optionalChains: i4, rpcMap: e2 } = t;
    s3 && Er(s3) && (this.rpc.chains = s3.map((n5) => this.formatChainId(n5)), s3.forEach((n5) => {
      this.rpc.rpcMap[n5] = (e2 == null ? void 0 : e2[n5]) || this.getRpcUrl(n5);
    })), i4 && Er(i4) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i4 == null ? void 0 : i4.map((n5) => this.formatChainId(n5)), i4.forEach((n5) => {
      this.rpc.rpcMap[n5] = (e2 == null ? void 0 : e2[n5]) || this.getRpcUrl(n5);
    }));
  }
  getRpcUrl(t, s3) {
    var i4;
    return ((i4 = this.rpc.rpcMap) == null ? void 0 : i4[t]) || `${j5}?chainId=eip155:${t}&projectId=${s3 || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session) try {
      const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), s3 = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
      this.setChainIds(t ? [this.formatChainId(t)] : s3 == null ? void 0 : s3.accounts), this.setAccounts(s3 == null ? void 0 : s3.accounts);
    } catch (t) {
      this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(t), await this.disconnect().catch((s3) => this.signer.logger.warn(s3));
    }
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((s3) => this.parseAccount(s3));
  }
};
var z4 = C4;
export {
  z4 as EthereumProvider,
  M3 as OPTIONAL_EVENTS,
  y6 as OPTIONAL_METHODS,
  g4 as REQUIRED_EVENTS,
  u3 as REQUIRED_METHODS,
  C4 as default
};
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@walletconnect/utils/dist/index.es.js:
  (**
  * [js-sha3]{@link https://github.com/emn178/js-sha3}
  *
  * @version 0.8.0
  * @author Chen, Yi-Cyuan [emn178@gmail.com]
  * @copyright Chen, Yi-Cyuan 2015-2018
  * @license MIT
  *)

@walletconnect/universal-provider/dist/index.es.js:
  (**
  * @license
  * Lodash <https://lodash.com/>
  * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
  * Released under MIT license <https://lodash.com/license>
  * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
  * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  *)
*/
//# sourceMappingURL=index.es-NRSCA4DZ.js.map
