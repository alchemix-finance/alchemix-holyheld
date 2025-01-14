import "./chunk-YS3U2Q7I.js";
import {
  BlockNotFoundError,
  estimateContractGas,
  estimateGas,
  fromRlp,
  getBlock,
  getContractError,
  getGasPrice,
  getProof,
  isErc6492Signature,
  parseErc6492Signature,
  parseUnits,
  prepareTransactionRequest,
  readContract,
  serializeSignature
} from "./chunk-VC3O4U6S.js";
import "./chunk-QQNE7WTD.js";
import {
  encodeFunctionData
} from "./chunk-LOTR7D5R.js";
import {
  contracts
} from "./chunk-HCW5W724.js";
import {
  defineChain,
  serializeTransaction,
  toRlp
} from "./chunk-KWZXG76I.js";
import "./chunk-DSWFES7F.js";
import {
  BaseError,
  CallExecutionError,
  ChainDoesNotSupportContract,
  ChainMismatchError,
  ClientChainNotConfiguredError,
  ContractFunctionRevertedError,
  ContractFunctionZeroDataError,
  ExecutionRevertedError,
  TransactionNotFoundError,
  UserRejectedRequestError,
  assertRequest,
  concat,
  encodeAbiParameters,
  formatAbiItemWithArgs,
  fromBytes,
  fromHex,
  getAbiItem,
  getChainContractAddress,
  isAddress,
  keccak256,
  maxUint160,
  maxUint256,
  numberToHex,
  pad,
  parseAccount,
  toBytes,
  toHex
} from "./chunk-QL5GCBQ7.js";
import "./chunk-ZTBOFYUR.js";
import {
  secp256k1
} from "./chunk-R7SLI22K.js";
import {
  __commonJS,
  __export,
  __publicField,
  __toESM
} from "./chunk-256EKJAK.js";

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c2 = "month", f2 = "quarter", h = "year", d = "date", l = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m2 = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m2, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m2(r2, 2, "0") + ":" + m2(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c2), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c2);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c2, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f2 }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D2 = {};
      D2[g] = M2;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D2[s2] && (i2 = s2), n2 && (D2[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D2[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b2 = v;
      b2.l = w, b2.i = S, b2.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M3(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m3 = M3.prototype;
        return m3.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b2.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($2);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m3.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m3.$utils = function() {
          return b2;
        }, m3.isValid = function() {
          return !(this.$d.toString() === l);
        }, m3.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m3.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m3.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m3.$g = function(t2, e2, n2) {
          return b2.u(t2) ? this[e2] : this.set(n2, t2);
        }, m3.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m3.valueOf = function() {
          return this.$d.getTime();
        }, m3.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b2.u(e2) || e2, f3 = b2.p(t2), l2 = function(t3, e3) {
            var i2 = b2.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $3 = function(t3, e3) {
            return b2.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M4 = this.$M, m4 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f3) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c2:
              return r2 ? l2(1, M4) : l2(0, M4 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D3 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m4 - D3 : m4 + (6 - D3), M4);
            case a:
            case d:
              return $3(v2 + "Hours", 0);
            case u:
              return $3(v2 + "Minutes", 1);
            case s:
              return $3(v2 + "Seconds", 2);
            case i:
              return $3(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m3.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m3.$set = function(t2, e2) {
          var n2, o2 = b2.p(t2), f3 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f3 + "Date", n2[d] = f3 + "Date", n2[c2] = f3 + "Month", n2[h] = f3 + "FullYear", n2[u] = f3 + "Hours", n2[s] = f3 + "Minutes", n2[i] = f3 + "Seconds", n2[r] = f3 + "Milliseconds", n2)[o2], $3 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c2 || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($3), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($3);
          return this.init(), this;
        }, m3.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m3.get = function(t2) {
          return this[b2.p(t2)]();
        }, m3.add = function(r2, f3) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $3 = b2.p(f3), y2 = function(t2) {
            var e2 = O(l2);
            return b2.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($3 === c2) return this.set(c2, this.$M + r2);
          if ($3 === h) return this.set(h, this.$y + r2);
          if ($3 === a) return y2(1);
          if ($3 === o) return y2(7);
          var M4 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$3] || 1, m4 = this.$d.getTime() + r2 * M4;
          return b2.w(m4, this);
        }, m3.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m3.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b2.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c3 = n2.months, f3 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b2.s(s2 % 12 || 12, t3, "0");
          }, $3 = f3 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b2.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b2.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c3, 3);
                case "MMMM":
                  return h2(c3, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b2.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b2.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $3(s2, u2, true);
                case "A":
                  return $3(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b2.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b2.s(e2.$s, 2, "0");
                case "SSS":
                  return b2.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m3.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m3.diff = function(r2, d2, l2) {
          var $3, y2 = this, M4 = b2.p(d2), m4 = O(r2), v2 = (m4.utcOffset() - this.utcOffset()) * e, g2 = this - m4, D3 = function() {
            return b2.m(y2, m4);
          };
          switch (M4) {
            case h:
              $3 = D3() / 12;
              break;
            case c2:
              $3 = D3();
              break;
            case f2:
              $3 = D3() / 3;
              break;
            case o:
              $3 = (g2 - v2) / 6048e5;
              break;
            case a:
              $3 = (g2 - v2) / 864e5;
              break;
            case u:
              $3 = g2 / n;
              break;
            case s:
              $3 = g2 / e;
              break;
            case i:
              $3 = g2 / t;
              break;
            default:
              $3 = g2;
          }
          return l2 ? $3 : b2.a($3);
        }, m3.daysInMonth = function() {
          return this.endOf(c2).$D;
        }, m3.$locale = function() {
          return D2[this.$L];
        }, m3.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m3.clone = function() {
          return b2.w(this.$d, this);
        }, m3.toDate = function() {
          return new Date(this.valueOf());
        }, m3.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m3.toISOString = function() {
          return this.$d.toISOString();
        }, m3.toString = function() {
          return this.$d.toUTCString();
        }, M3;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c2], ["$y", h], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D2[g], O.Ls = D2, O.p = {}, O;
    });
  }
});

// node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString } = Object.prototype;
var { getPrototypeOf } = Object;
var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
var kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
var { isArray } = Array;
var isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
var isString = typeOfTest("string");
var isFunction = typeOfTest("function");
var isNumber = typeOfTest("number");
var isObject = (thing) => thing !== null && typeof thing === "object";
var isBoolean = (thing) => thing === true || thing === false;
var isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
var isStream = (val) => isObject(val) && isFunction(val.pipe);
var isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
var isURLSearchParams = kindOfTest("URLSearchParams");
var [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
var isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
var extend = (a, b2, thisArg, { allOwnKeys } = {}) => {
  forEach(b2, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, { allOwnKeys });
  return a;
};
var stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
var inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
var endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
var toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
var forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
var matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
var isHTMLForm = kindOfTest("HTMLFormElement");
var toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer(m2, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
var isRegExp = kindOfTest("RegExp");
var reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
var freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
var toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define2 = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = () => {
};
var toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
var ALPHA = "abcdefghijklmnopqrstuvwxyz";
var DIGIT = "0123456789";
var ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
var generateString = (size2 = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  while (size2--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
var toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var isAsyncFn = kindOfTest("AsyncFunction");
var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({ source, data }) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === "function",
  isFunction(_global.postMessage)
);
var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
var utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
};

// node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  utils_default.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/axios/lib/helpers/null.js
var null_default = null;

// node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new (null_default || FormData)();
  options = utils_default.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null) return "";
    if (utils_default.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils_default.isBlob(value)) {
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    }
    if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils_default.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils_default.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils_default.forEach(value, function each(el, key) {
      const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils_default.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils_default.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode2;
  if (utils_default.isFunction(options)) {
    options = {
      serialize: options
    };
  }
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}

// node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils_default.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
};
var InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

// node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

// node_modules/axios/lib/platform/browser/classes/FormData.js
var FormData_default = typeof FormData !== "undefined" ? FormData : null;

// node_modules/axios/lib/platform/browser/classes/Blob.js
var Blob_default = typeof Blob !== "undefined" ? Blob : null;

// node_modules/axios/lib/platform/browser/index.js
var browser_default = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: Blob_default
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};

// node_modules/axios/lib/platform/common/utils.js
var utils_exports = {};
__export(utils_exports, {
  hasBrowserEnv: () => hasBrowserEnv,
  hasStandardBrowserEnv: () => hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
  navigator: () => _navigator,
  origin: () => origin
});
var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
var _navigator = typeof navigator === "object" && navigator || void 0;
var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
var hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
var origin = hasBrowserEnv && window.location.href || "http://localhost";

// node_modules/axios/lib/platform/index.js
var platform_default = {
  ...utils_exports,
  ...browser_default
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform_default.isNode && utils_default.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === "__proto__") return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils_default.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils_default.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils_default.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils_default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    const obj = {};
    utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/defaults/index.js
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils_default.isFormData(data);
    if (isFormData2) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    }
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
      return data;
    }
    if (utils_default.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils_default.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
      return data;
    }
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform_default.classes.FormData,
    Blob: platform_default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
var defaults_default = defaults;

// node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var parseHeaders_default = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};

// node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils_default.isString(value)) return;
  if (utils_default.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils_default.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils_default.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders_default(header), valueOrRewrite);
    } else if (utils_default.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils_default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils_default.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils_default.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils_default.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils_default.forEach(this, (value, header) => {
      const key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils_default.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype3 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype3, _header);
        accessors[lHeader] = true;
      }
    }
    utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  const config = this || defaults_default;
  const context = response || config;
  const headers = AxiosHeaders_default.from(context.headers);
  let data = context.data;
  utils_default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}

// node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config, request) {
  AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: true
});
var CanceledError_default = CanceledError;

// node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError_default(
      "Request failed with status code " + response.status,
      [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

// node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/axios/lib/helpers/throttle.js
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
var throttle_default = throttle;

// node_modules/axios/lib/helpers/progressEventReducer.js
var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer_default(50, 250);
  return throttle_default((e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
var progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
var asyncDecorator = (fn) => (...args) => utils_default.asap(() => fn(...args));

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
  url = new URL(url, platform_default.origin);
  return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
})(
  new URL(platform_default.origin),
  platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent)
) : () => true;

// node_modules/axios/lib/helpers/cookies.js
var cookies_default = platform_default.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + "=" + encodeURIComponent(value)];
      utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
      utils_default.isString(path) && cookie.push("path=" + path);
      utils_default.isString(domain) && cookie.push("domain=" + domain);
      secure === true && cookie.push("secure");
      document.cookie = cookie.join("; ");
    },
    read(name) {
      const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);

// node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

// node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, prop, caseless) {
    if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
      return utils_default.merge.call({ caseless }, target, source);
    } else if (utils_default.isPlainObject(source)) {
      return utils_default.merge({}, source);
    } else if (utils_default.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b2, prop, caseless) {
    if (!utils_default.isUndefined(b2)) {
      return getMergedValue(a, b2, prop, caseless);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a, prop, caseless);
    }
  }
  function valueFromConfig2(a, b2) {
    if (!utils_default.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    }
  }
  function defaultToConfig2(a, b2) {
    if (!utils_default.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b2, prop) {
    if (prop in config2) {
      return getMergedValue(a, b2);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b2, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b2), prop, true)
  };
  utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

// node_modules/axios/lib/helpers/resolveConfig.js
var resolveConfig_default = (config) => {
  const newConfig = mergeConfig({}, config);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
  newConfig.headers = headers = AxiosHeaders_default.from(headers);
  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);
  if (auth) {
    headers.set(
      "Authorization",
      "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
    );
  }
  let contentType;
  if (utils_default.isFormData(data)) {
    if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(void 0);
    } else if ((contentType = headers.getContentType()) !== false) {
      const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
    }
  }
  if (platform_default.hasStandardBrowserEnv) {
    withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};

// node_modules/axios/lib/adapters/xhr.js
var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig_default(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitional_default;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils_default.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener("progress", uploadThrottled);
      request.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/axios/lib/helpers/composeSignals.js
var composeSignals = (signals, timeout) => {
  const { length } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils_default.asap(unsubscribe);
    return signal;
  }
};
var composeSignals_default = composeSignals;

// node_modules/axios/lib/helpers/trackStream.js
var streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
var readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
var readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (; ; ) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
var trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const { done: done2, value } = await iterator.next();
        if (done2) {
          _onFinish();
          controller.close();
          return;
        }
        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  });
};

// node_modules/axios/lib/adapters/fetch.js
var isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
var isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
var encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
var test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
var supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;
  const hasContentType = new Request(platform_default.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      duplexAccessed = true;
      return "half";
    }
  }).headers.has("Content-Type");
  return duplexAccessed && !hasContentType;
});
var DEFAULT_CHUNK_SIZE = 64 * 1024;
var supportsResponseStream = isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
var resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};
isFetchSupported && ((res) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
    !resolvers[type] && (resolvers[type] = utils_default.isFunction(res[type]) ? (res2) => res2[type]() : (_, config) => {
      throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config);
    });
  });
})(new Response());
var getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }
  if (utils_default.isBlob(body)) {
    return body.size;
  }
  if (utils_default.isSpecCompliantForm(body)) {
    const _request = new Request(platform_default.origin, {
      method: "POST",
      body
    });
    return (await _request.arrayBuffer()).byteLength;
  }
  if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
    return body.byteLength;
  }
  if (utils_default.isURLSearchParams(body)) {
    body = body + "";
  }
  if (utils_default.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};
var resolveBodyLength = async (headers, body) => {
  const length = utils_default.toFiniteNumber(headers.getContentLength());
  return length == null ? getBodyLength(body) : length;
};
var fetch_default = isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = "same-origin",
    fetchOptions
  } = resolveConfig_default(config);
  responseType = responseType ? (responseType + "").toLowerCase() : "text";
  let composedSignal = composeSignals_default([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
  let request;
  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
    composedSignal.unsubscribe();
  });
  let requestContentLength;
  try {
    if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
      let _request = new Request(url, {
        method: "POST",
        body: data,
        duplex: "half"
      });
      let contentTypeHeader;
      if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
        headers.setContentType(contentTypeHeader);
      }
      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );
        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }
    if (!utils_default.isString(withCredentials)) {
      withCredentials = withCredentials ? "include" : "omit";
    }
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : void 0
    });
    let response = await fetch(request);
    const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
    if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
      const options = {};
      ["status", "statusText", "headers"].forEach((prop) => {
        options[prop] = response[prop];
      });
      const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];
      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }
    responseType = responseType || "text";
    let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config);
    !isStreamResponse && unsubscribe && unsubscribe();
    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: AxiosHeaders_default.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    });
  } catch (err) {
    unsubscribe && unsubscribe();
    if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      );
    }
    throw AxiosError_default.from(err, err && err.code, config, request);
  }
});

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: null_default,
  xhr: xhr_default,
  fetch: fetch_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var renderReason = (reason) => `- ${reason}`;
var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === void 0) {
          throw new AxiosError_default(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError_default(
        `There is no suitable adapter to dispatch the request ` + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError_default(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders_default.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders_default.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

// node_modules/axios/lib/env/data.js
var VERSION = "1.7.8";

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
validators.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === void 0 || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
    }
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators;
var Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        try {
          if (!err.stack) {
            err.stack = stack;
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
            err.stack += "\n" + stack;
          }
        } catch (e) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator_default.assertOptions(transitional2, {
        silentJSONParsing: validators2.transitional(validators2.boolean),
        forcedJSONParsing: validators2.transitional(validators2.boolean),
        clarifyTimeoutError: validators2.transitional(validators2.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils_default.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator_default.assertOptions(paramsSerializer, {
          encode: validators2.function,
          serialize: validators2.function
        }, true);
      }
    }
    validator_default.assertOptions(config, {
      baseUrl: validators2.spelling("baseURL"),
      withXsrfToken: validators2.spelling("withXSRFToken")
    }, true);
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils_default.merge(
      headers.common,
      headers[config.method]
    );
    headers && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
var CancelToken = class _CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError_default(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new _CancelToken(function executor(c2) {
      cancel = c2;
    });
    return {
      token,
      cancel
    };
  }
};
var CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === true;
}

// node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  const context = new Axios_default(defaultConfig);
  const instance = bind(Axios_default.prototype.request, context);
  utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
  utils_default.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters_default.getAdapter;
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  getAdapter,
  mergeConfig: mergeConfig2
} = axios_default;

// node_modules/@holyheld/sdk/dist/index.es.js
var import_dayjs = __toESM(require_dayjs_min());

// node_modules/bignumber.js/bignumber.mjs
var isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
var mathceil = Math.ceil;
var mathfloor = Math.floor;
var bignumberError = "[BigNumber Error] ";
var tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ";
var BASE = 1e14;
var LOG_BASE = 14;
var MAX_SAFE_INTEGER = 9007199254740991;
var POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13];
var SQRT_BASE = 1e7;
var MAX = 1e9;
function clone(configObject) {
  var div, convertBase, parseNumeric, P2 = BigNumber2.prototype = { constructor: BigNumber2, toString: null, valueOf: null }, ONE = new BigNumber2(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, ALPHABET2 = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
  function BigNumber2(v, b2) {
    var alphabet, c2, caseChanged, e, i, isNum, len, str, x = this;
    if (!(x instanceof BigNumber2)) return new BigNumber2(v, b2);
    if (b2 == null) {
      if (v && v._isBigNumber === true) {
        x.s = v.s;
        if (!v.c || v.e > MAX_EXP) {
          x.c = x.e = null;
        } else if (v.e < MIN_EXP) {
          x.c = [x.e = 0];
        } else {
          x.e = v.e;
          x.c = v.c.slice();
        }
        return;
      }
      if ((isNum = typeof v == "number") && v * 0 == 0) {
        x.s = 1 / v < 0 ? (v = -v, -1) : 1;
        if (v === ~~v) {
          for (e = 0, i = v; i >= 10; i /= 10, e++) ;
          if (e > MAX_EXP) {
            x.c = x.e = null;
          } else {
            x.e = e;
            x.c = [v];
          }
          return;
        }
        str = String(v);
      } else {
        if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);
        x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
      }
      if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
      if ((i = str.search(/e/i)) > 0) {
        if (e < 0) e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {
        e = str.length;
      }
    } else {
      intCheck(b2, 2, ALPHABET2.length, "Base");
      if (b2 == 10 && alphabetHasNormalDecimalDigits) {
        x = new BigNumber2(v);
        return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
      }
      str = String(v);
      if (isNum = typeof v == "number") {
        if (v * 0 != 0) return parseNumeric(x, str, isNum, b2);
        x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
        if (BigNumber2.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
          throw Error(tooManyDigits + v);
        }
      } else {
        x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
      }
      alphabet = ALPHABET2.slice(0, b2);
      e = i = 0;
      for (len = str.length; i < len; i++) {
        if (alphabet.indexOf(c2 = str.charAt(i)) < 0) {
          if (c2 == ".") {
            if (i > e) {
              e = len;
              continue;
            }
          } else if (!caseChanged) {
            if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
              caseChanged = true;
              i = -1;
              e = 0;
              continue;
            }
          }
          return parseNumeric(x, String(v), isNum, b2);
        }
      }
      isNum = false;
      str = convertBase(str, b2, 10, x.s);
      if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
      else e = str.length;
    }
    for (i = 0; str.charCodeAt(i) === 48; i++) ;
    for (len = str.length; str.charCodeAt(--len) === 48; ) ;
    if (str = str.slice(i, ++len)) {
      len -= i;
      if (isNum && BigNumber2.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
        throw Error(tooManyDigits + x.s * v);
      }
      if ((e = e - i - 1) > MAX_EXP) {
        x.c = x.e = null;
      } else if (e < MIN_EXP) {
        x.c = [x.e = 0];
      } else {
        x.e = e;
        x.c = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0) i += LOG_BASE;
        if (i < len) {
          if (i) x.c.push(+str.slice(0, i));
          for (len -= LOG_BASE; i < len; ) {
            x.c.push(+str.slice(i, i += LOG_BASE));
          }
          i = LOG_BASE - (str = str.slice(i)).length;
        } else {
          i -= len;
        }
        for (; i--; str += "0") ;
        x.c.push(+str);
      }
    } else {
      x.c = [x.e = 0];
    }
  }
  BigNumber2.clone = clone;
  BigNumber2.ROUND_UP = 0;
  BigNumber2.ROUND_DOWN = 1;
  BigNumber2.ROUND_CEIL = 2;
  BigNumber2.ROUND_FLOOR = 3;
  BigNumber2.ROUND_HALF_UP = 4;
  BigNumber2.ROUND_HALF_DOWN = 5;
  BigNumber2.ROUND_HALF_EVEN = 6;
  BigNumber2.ROUND_HALF_CEIL = 7;
  BigNumber2.ROUND_HALF_FLOOR = 8;
  BigNumber2.EUCLID = 9;
  BigNumber2.config = BigNumber2.set = function(obj) {
    var p, v;
    if (obj != null) {
      if (typeof obj == "object") {
        if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          DECIMAL_PLACES = v;
        }
        if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
          v = obj[p];
          intCheck(v, 0, 8, p);
          ROUNDING_MODE = v;
        }
        if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, 0, p);
            intCheck(v[1], 0, MAX, p);
            TO_EXP_NEG = v[0];
            TO_EXP_POS = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
          }
        }
        if (obj.hasOwnProperty(p = "RANGE")) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, -1, p);
            intCheck(v[1], 1, MAX, p);
            MIN_EXP = v[0];
            MAX_EXP = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            if (v) {
              MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
            } else {
              throw Error(bignumberError + p + " cannot be zero: " + v);
            }
          }
        }
        if (obj.hasOwnProperty(p = "CRYPTO")) {
          v = obj[p];
          if (v === !!v) {
            if (v) {
              if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                CRYPTO = v;
              } else {
                CRYPTO = !v;
                throw Error(bignumberError + "crypto unavailable");
              }
            } else {
              CRYPTO = v;
            }
          } else {
            throw Error(bignumberError + p + " not true or false: " + v);
          }
        }
        if (obj.hasOwnProperty(p = "MODULO_MODE")) {
          v = obj[p];
          intCheck(v, 0, 9, p);
          MODULO_MODE = v;
        }
        if (obj.hasOwnProperty(p = "POW_PRECISION")) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          POW_PRECISION = v;
        }
        if (obj.hasOwnProperty(p = "FORMAT")) {
          v = obj[p];
          if (typeof v == "object") FORMAT = v;
          else throw Error(bignumberError + p + " not an object: " + v);
        }
        if (obj.hasOwnProperty(p = "ALPHABET")) {
          v = obj[p];
          if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
            alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
            ALPHABET2 = v;
          } else {
            throw Error(bignumberError + p + " invalid: " + v);
          }
        }
      } else {
        throw Error(bignumberError + "Object expected: " + obj);
      }
    }
    return {
      DECIMAL_PLACES,
      ROUNDING_MODE,
      EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
      RANGE: [MIN_EXP, MAX_EXP],
      CRYPTO,
      MODULO_MODE,
      POW_PRECISION,
      FORMAT,
      ALPHABET: ALPHABET2
    };
  };
  BigNumber2.isBigNumber = function(v) {
    if (!v || v._isBigNumber !== true) return false;
    if (!BigNumber2.DEBUG) return true;
    var i, n, c2 = v.c, e = v.e, s = v.s;
    out: if ({}.toString.call(c2) == "[object Array]") {
      if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
        if (c2[0] === 0) {
          if (e === 0 && c2.length === 1) return true;
          break out;
        }
        i = (e + 1) % LOG_BASE;
        if (i < 1) i += LOG_BASE;
        if (String(c2[0]).length == i) {
          for (i = 0; i < c2.length; i++) {
            n = c2[i];
            if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
          }
          if (n !== 0) return true;
        }
      }
    } else if (c2 === null && e === null && (s === null || s === 1 || s === -1)) {
      return true;
    }
    throw Error(bignumberError + "Invalid BigNumber: " + v);
  };
  BigNumber2.maximum = BigNumber2.max = function() {
    return maxOrMin(arguments, -1);
  };
  BigNumber2.minimum = BigNumber2.min = function() {
    return maxOrMin(arguments, 1);
  };
  BigNumber2.random = function() {
    var pow2_53 = 9007199254740992;
    var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
      return mathfloor(Math.random() * pow2_53);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(dp) {
      var a, b2, e, k, v, i = 0, c2 = [], rand = new BigNumber2(ONE);
      if (dp == null) dp = DECIMAL_PLACES;
      else intCheck(dp, 0, MAX);
      k = mathceil(dp / LOG_BASE);
      if (CRYPTO) {
        if (crypto.getRandomValues) {
          a = crypto.getRandomValues(new Uint32Array(k *= 2));
          for (; i < k; ) {
            v = a[i] * 131072 + (a[i + 1] >>> 11);
            if (v >= 9e15) {
              b2 = crypto.getRandomValues(new Uint32Array(2));
              a[i] = b2[0];
              a[i + 1] = b2[1];
            } else {
              c2.push(v % 1e14);
              i += 2;
            }
          }
          i = k / 2;
        } else if (crypto.randomBytes) {
          a = crypto.randomBytes(k *= 7);
          for (; i < k; ) {
            v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
            if (v >= 9e15) {
              crypto.randomBytes(7).copy(a, i);
            } else {
              c2.push(v % 1e14);
              i += 7;
            }
          }
          i = k / 7;
        } else {
          CRYPTO = false;
          throw Error(bignumberError + "crypto unavailable");
        }
      }
      if (!CRYPTO) {
        for (; i < k; ) {
          v = random53bitInt();
          if (v < 9e15) c2[i++] = v % 1e14;
        }
      }
      k = c2[--i];
      dp %= LOG_BASE;
      if (k && dp) {
        v = POWS_TEN[LOG_BASE - dp];
        c2[i] = mathfloor(k / v) * v;
      }
      for (; c2[i] === 0; c2.pop(), i--) ;
      if (i < 0) {
        c2 = [e = 0];
      } else {
        for (e = -1; c2[0] === 0; c2.splice(0, 1), e -= LOG_BASE) ;
        for (i = 1, v = c2[0]; v >= 10; v /= 10, i++) ;
        if (i < LOG_BASE) e -= LOG_BASE - i;
      }
      rand.e = e;
      rand.c = c2;
      return rand;
    };
  }();
  BigNumber2.sum = function() {
    var i = 1, args = arguments, sum = new BigNumber2(args[0]);
    for (; i < args.length; ) sum = sum.plus(args[i++]);
    return sum;
  };
  convertBase = /* @__PURE__ */ function() {
    var decimal = "0123456789";
    function toBaseOut(str, baseIn, baseOut, alphabet) {
      var j, arr = [0], arrL, i = 0, len = str.length;
      for (; i < len; ) {
        for (arrL = arr.length; arrL--; arr[arrL] *= baseIn) ;
        arr[0] += alphabet.indexOf(str.charAt(i++));
        for (j = 0; j < arr.length; j++) {
          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] == null) arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }
      return arr.reverse();
    }
    return function(str, baseIn, baseOut, sign2, callerIsToString) {
      var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
      if (i >= 0) {
        k = POW_PRECISION;
        POW_PRECISION = 0;
        str = str.replace(".", "");
        y = new BigNumber2(baseIn);
        x = y.pow(str.length - i);
        POW_PRECISION = k;
        y.c = toBaseOut(
          toFixedPoint(coeffToString(x.c), x.e, "0"),
          10,
          baseOut,
          decimal
        );
        y.e = y.c.length;
      }
      xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET2, decimal) : (alphabet = decimal, ALPHABET2));
      e = k = xc.length;
      for (; xc[--k] == 0; xc.pop()) ;
      if (!xc[0]) return alphabet.charAt(0);
      if (i < 0) {
        --e;
      } else {
        x.c = xc;
        x.e = e;
        x.s = sign2;
        x = div(x, y, dp, rm, baseOut);
        xc = x.c;
        r = x.r;
        e = x.e;
      }
      d = e + dp + 1;
      i = xc[d];
      k = baseOut / 2;
      r = r || d < 0 || xc[d + 1] != null;
      r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
      if (d < 1 || !xc[0]) {
        str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
      } else {
        xc.length = d;
        if (r) {
          for (--baseOut; ++xc[--d] > baseOut; ) {
            xc[d] = 0;
            if (!d) {
              ++e;
              xc = [1].concat(xc);
            }
          }
        }
        for (k = xc.length; !xc[--k]; ) ;
        for (i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++])) ;
        str = toFixedPoint(str, e, alphabet.charAt(0));
      }
      return str;
    };
  }();
  div = /* @__PURE__ */ function() {
    function multiply(x, k, base2) {
      var m2, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
      for (x = x.slice(); i--; ) {
        xlo = x[i] % SQRT_BASE;
        xhi = x[i] / SQRT_BASE | 0;
        m2 = khi * xlo + xhi * klo;
        temp = klo * xlo + m2 % SQRT_BASE * SQRT_BASE + carry;
        carry = (temp / base2 | 0) + (m2 / SQRT_BASE | 0) + khi * xhi;
        x[i] = temp % base2;
      }
      if (carry) x = [carry].concat(x);
      return x;
    }
    function compare2(a, b2, aL, bL) {
      var i, cmp;
      if (aL != bL) {
        cmp = aL > bL ? 1 : -1;
      } else {
        for (i = cmp = 0; i < aL; i++) {
          if (a[i] != b2[i]) {
            cmp = a[i] > b2[i] ? 1 : -1;
            break;
          }
        }
      }
      return cmp;
    }
    function subtract(a, b2, aL, base2) {
      var i = 0;
      for (; aL--; ) {
        a[aL] -= i;
        i = a[aL] < b2[aL] ? 1 : 0;
        a[aL] = i * base2 + a[aL] - b2[aL];
      }
      for (; !a[0] && a.length > 1; a.splice(0, 1)) ;
    }
    return function(x, y, dp, rm, base2) {
      var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
      if (!xc || !xc[0] || !yc || !yc[0]) {
        return new BigNumber2(
          // Return NaN if either NaN, or both Infinity or 0.
          !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
          )
        );
      }
      q = new BigNumber2(s);
      qc = q.c = [];
      e = x.e - y.e;
      s = dp + e + 1;
      if (!base2) {
        base2 = BASE;
        e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
        s = s / LOG_BASE | 0;
      }
      for (i = 0; yc[i] == (xc[i] || 0); i++) ;
      if (yc[i] > (xc[i] || 0)) e--;
      if (s < 0) {
        qc.push(1);
        more = true;
      } else {
        xL = xc.length;
        yL = yc.length;
        i = 0;
        s += 2;
        n = mathfloor(base2 / (yc[0] + 1));
        if (n > 1) {
          yc = multiply(yc, n, base2);
          xc = multiply(xc, n, base2);
          yL = yc.length;
          xL = xc.length;
        }
        xi = yL;
        rem = xc.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; rem[remL++] = 0) ;
        yz = yc.slice();
        yz = [0].concat(yz);
        yc0 = yc[0];
        if (yc[1] >= base2 / 2) yc0++;
        do {
          n = 0;
          cmp = compare2(yc, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * base2 + (rem[1] || 0);
            n = mathfloor(rem0 / yc0);
            if (n > 1) {
              if (n >= base2) n = base2 - 1;
              prod = multiply(yc, n, base2);
              prodL = prod.length;
              remL = rem.length;
              while (compare2(prod, rem, prodL, remL) == 1) {
                n--;
                subtract(prod, yL < prodL ? yz : yc, prodL, base2);
                prodL = prod.length;
                cmp = 1;
              }
            } else {
              if (n == 0) {
                cmp = n = 1;
              }
              prod = yc.slice();
              prodL = prod.length;
            }
            if (prodL < remL) prod = [0].concat(prod);
            subtract(rem, prod, remL, base2);
            remL = rem.length;
            if (cmp == -1) {
              while (compare2(yc, rem, yL, remL) < 1) {
                n++;
                subtract(rem, yL < remL ? yz : yc, remL, base2);
                remL = rem.length;
              }
            }
          } else if (cmp === 0) {
            n++;
            rem = [0];
          }
          qc[i++] = n;
          if (rem[0]) {
            rem[remL++] = xc[xi] || 0;
          } else {
            rem = [xc[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] != null) && s--);
        more = rem[0] != null;
        if (!qc[0]) qc.splice(0, 1);
      }
      if (base2 == BASE) {
        for (i = 1, s = qc[0]; s >= 10; s /= 10, i++) ;
        round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
      } else {
        q.e = e;
        q.r = +more;
      }
      return q;
    };
  }();
  function format(n, i, rm, id) {
    var c0, e, ne2, len, str;
    if (rm == null) rm = ROUNDING_MODE;
    else intCheck(rm, 0, 8);
    if (!n.c) return n.toString();
    c0 = n.c[0];
    ne2 = n.e;
    if (i == null) {
      str = coeffToString(n.c);
      str = id == 1 || id == 2 && (ne2 <= TO_EXP_NEG || ne2 >= TO_EXP_POS) ? toExponential(str, ne2) : toFixedPoint(str, ne2, "0");
    } else {
      n = round(new BigNumber2(n), i, rm);
      e = n.e;
      str = coeffToString(n.c);
      len = str.length;
      if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
        for (; len < i; str += "0", len++) ;
        str = toExponential(str, e);
      } else {
        i -= ne2;
        str = toFixedPoint(str, e, "0");
        if (e + 1 > len) {
          if (--i > 0) for (str += "."; i--; str += "0") ;
        } else {
          i += e - len;
          if (i > 0) {
            if (e + 1 == len) str += ".";
            for (; i--; str += "0") ;
          }
        }
      }
    }
    return n.s < 0 && c0 ? "-" + str : str;
  }
  function maxOrMin(args, n) {
    var k, y, i = 1, x = new BigNumber2(args[0]);
    for (; i < args.length; i++) {
      y = new BigNumber2(args[i]);
      if (!y.s || (k = compare(x, y)) === n || k === 0 && x.s === n) {
        x = y;
      }
    }
    return x;
  }
  function normalise(n, c2, e) {
    var i = 1, j = c2.length;
    for (; !c2[--j]; c2.pop()) ;
    for (j = c2[0]; j >= 10; j /= 10, i++) ;
    if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
      n.c = n.e = null;
    } else if (e < MIN_EXP) {
      n.c = [n.e = 0];
    } else {
      n.e = e;
      n.c = c2;
    }
    return n;
  }
  parseNumeric = /* @__PURE__ */ function() {
    var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(x, str, isNum, b2) {
      var base2, s = isNum ? str : str.replace(whitespaceOrPlus, "");
      if (isInfinityOrNaN.test(s)) {
        x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
      } else {
        if (!isNum) {
          s = s.replace(basePrefix, function(m2, p1, p2) {
            base2 = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
            return !b2 || b2 == base2 ? p1 : m2;
          });
          if (b2) {
            base2 = b2;
            s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
          }
          if (str != s) return new BigNumber2(s, base2);
        }
        if (BigNumber2.DEBUG) {
          throw Error(bignumberError + "Not a" + (b2 ? " base " + b2 : "") + " number: " + str);
        }
        x.s = null;
      }
      x.c = x.e = null;
    };
  }();
  function round(x, sd, rm, r) {
    var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
    if (xc) {
      out: {
        for (d = 1, k = xc[0]; k >= 10; k /= 10, d++) ;
        i = sd - d;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          n = xc[ni = 0];
          rd = mathfloor(n / pows10[d - j - 1] % 10);
        } else {
          ni = mathceil((i + 1) / LOG_BASE);
          if (ni >= xc.length) {
            if (r) {
              for (; xc.length <= ni; xc.push(0)) ;
              n = rd = 0;
              d = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            n = k = xc[ni];
            for (d = 1; k >= 10; k /= 10, d++) ;
            i %= LOG_BASE;
            j = i - LOG_BASE + d;
            rd = j < 0 ? 0 : mathfloor(n / pows10[d - j - 1] % 10);
          }
        }
        r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
        r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
        if (sd < 1 || !xc[0]) {
          xc.length = 0;
          if (r) {
            sd -= x.e + 1;
            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
            x.e = -sd || 0;
          } else {
            xc[0] = x.e = 0;
          }
          return x;
        }
        if (i == 0) {
          xc.length = ni;
          k = 1;
          ni--;
        } else {
          xc.length = ni + 1;
          k = pows10[LOG_BASE - i];
          xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
        }
        if (r) {
          for (; ; ) {
            if (ni == 0) {
              for (i = 1, j = xc[0]; j >= 10; j /= 10, i++) ;
              j = xc[0] += k;
              for (k = 1; j >= 10; j /= 10, k++) ;
              if (i != k) {
                x.e++;
                if (xc[0] == BASE) xc[0] = 1;
              }
              break;
            } else {
              xc[ni] += k;
              if (xc[ni] != BASE) break;
              xc[ni--] = 0;
              k = 1;
            }
          }
        }
        for (i = xc.length; xc[--i] === 0; xc.pop()) ;
      }
      if (x.e > MAX_EXP) {
        x.c = x.e = null;
      } else if (x.e < MIN_EXP) {
        x.c = [x.e = 0];
      }
    }
    return x;
  }
  function valueOf(n) {
    var str, e = n.e;
    if (e === null) return n.toString();
    str = coeffToString(n.c);
    str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
    return n.s < 0 ? "-" + str : str;
  }
  P2.absoluteValue = P2.abs = function() {
    var x = new BigNumber2(this);
    if (x.s < 0) x.s = 1;
    return x;
  };
  P2.comparedTo = function(y, b2) {
    return compare(this, new BigNumber2(y, b2));
  };
  P2.decimalPlaces = P2.dp = function(dp, rm) {
    var c2, n, v, x = this;
    if (dp != null) {
      intCheck(dp, 0, MAX);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(new BigNumber2(x), dp + x.e + 1, rm);
    }
    if (!(c2 = x.c)) return null;
    n = ((v = c2.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
    if (v = c2[v]) for (; v % 10 == 0; v /= 10, n--) ;
    if (n < 0) n = 0;
    return n;
  };
  P2.dividedBy = P2.div = function(y, b2) {
    return div(this, new BigNumber2(y, b2), DECIMAL_PLACES, ROUNDING_MODE);
  };
  P2.dividedToIntegerBy = P2.idiv = function(y, b2) {
    return div(this, new BigNumber2(y, b2), 0, 1);
  };
  P2.exponentiatedBy = P2.pow = function(n, m2) {
    var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
    n = new BigNumber2(n);
    if (n.c && !n.isInteger()) {
      throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
    }
    if (m2 != null) m2 = new BigNumber2(m2);
    nIsBig = n.e > 14;
    if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
      y = new BigNumber2(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
      return m2 ? y.mod(m2) : y;
    }
    nIsNeg = n.s < 0;
    if (m2) {
      if (m2.c ? !m2.c[0] : !m2.s) return new BigNumber2(NaN);
      isModExp = !nIsNeg && x.isInteger() && m2.isInteger();
      if (isModExp) x = x.mod(m2);
    } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
      k = x.s < 0 && isOdd(n) ? -0 : 0;
      if (x.e > -1) k = 1 / k;
      return new BigNumber2(nIsNeg ? 1 / k : k);
    } else if (POW_PRECISION) {
      k = mathceil(POW_PRECISION / LOG_BASE + 2);
    }
    if (nIsBig) {
      half = new BigNumber2(0.5);
      if (nIsNeg) n.s = 1;
      nIsOdd = isOdd(n);
    } else {
      i = Math.abs(+valueOf(n));
      nIsOdd = i % 2;
    }
    y = new BigNumber2(ONE);
    for (; ; ) {
      if (nIsOdd) {
        y = y.times(x);
        if (!y.c) break;
        if (k) {
          if (y.c.length > k) y.c.length = k;
        } else if (isModExp) {
          y = y.mod(m2);
        }
      }
      if (i) {
        i = mathfloor(i / 2);
        if (i === 0) break;
        nIsOdd = i % 2;
      } else {
        n = n.times(half);
        round(n, n.e + 1, 1);
        if (n.e > 14) {
          nIsOdd = isOdd(n);
        } else {
          i = +valueOf(n);
          if (i === 0) break;
          nIsOdd = i % 2;
        }
      }
      x = x.times(x);
      if (k) {
        if (x.c && x.c.length > k) x.c.length = k;
      } else if (isModExp) {
        x = x.mod(m2);
      }
    }
    if (isModExp) return y;
    if (nIsNeg) y = ONE.div(y);
    return m2 ? y.mod(m2) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
  };
  P2.integerValue = function(rm) {
    var n = new BigNumber2(this);
    if (rm == null) rm = ROUNDING_MODE;
    else intCheck(rm, 0, 8);
    return round(n, n.e + 1, rm);
  };
  P2.isEqualTo = P2.eq = function(y, b2) {
    return compare(this, new BigNumber2(y, b2)) === 0;
  };
  P2.isFinite = function() {
    return !!this.c;
  };
  P2.isGreaterThan = P2.gt = function(y, b2) {
    return compare(this, new BigNumber2(y, b2)) > 0;
  };
  P2.isGreaterThanOrEqualTo = P2.gte = function(y, b2) {
    return (b2 = compare(this, new BigNumber2(y, b2))) === 1 || b2 === 0;
  };
  P2.isInteger = function() {
    return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
  };
  P2.isLessThan = P2.lt = function(y, b2) {
    return compare(this, new BigNumber2(y, b2)) < 0;
  };
  P2.isLessThanOrEqualTo = P2.lte = function(y, b2) {
    return (b2 = compare(this, new BigNumber2(y, b2))) === -1 || b2 === 0;
  };
  P2.isNaN = function() {
    return !this.s;
  };
  P2.isNegative = function() {
    return this.s < 0;
  };
  P2.isPositive = function() {
    return this.s > 0;
  };
  P2.isZero = function() {
    return !!this.c && this.c[0] == 0;
  };
  P2.minus = function(y, b2) {
    var i, j, t, xLTy, x = this, a = x.s;
    y = new BigNumber2(y, b2);
    b2 = y.s;
    if (!a || !b2) return new BigNumber2(NaN);
    if (a != b2) {
      y.s = -b2;
      return x.plus(y);
    }
    var xe2 = x.e / LOG_BASE, ye2 = y.e / LOG_BASE, xc = x.c, yc = y.c;
    if (!xe2 || !ye2) {
      if (!xc || !yc) return xc ? (y.s = -b2, y) : new BigNumber2(yc ? x : NaN);
      if (!xc[0] || !yc[0]) {
        return yc[0] ? (y.s = -b2, y) : new BigNumber2(xc[0] ? x : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          ROUNDING_MODE == 3 ? -0 : 0
        ));
      }
    }
    xe2 = bitFloor(xe2);
    ye2 = bitFloor(ye2);
    xc = xc.slice();
    if (a = xe2 - ye2) {
      if (xLTy = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye2 = xe2;
        t = yc;
      }
      t.reverse();
      for (b2 = a; b2--; t.push(0)) ;
      t.reverse();
    } else {
      j = (xLTy = (a = xc.length) < (b2 = yc.length)) ? a : b2;
      for (a = b2 = 0; b2 < j; b2++) {
        if (xc[b2] != yc[b2]) {
          xLTy = xc[b2] < yc[b2];
          break;
        }
      }
    }
    if (xLTy) {
      t = xc;
      xc = yc;
      yc = t;
      y.s = -y.s;
    }
    b2 = (j = yc.length) - (i = xc.length);
    if (b2 > 0) for (; b2--; xc[i++] = 0) ;
    b2 = BASE - 1;
    for (; j > a; ) {
      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i]; xc[i] = b2) ;
        --xc[i];
        xc[j] += BASE;
      }
      xc[j] -= yc[j];
    }
    for (; xc[0] == 0; xc.splice(0, 1), --ye2) ;
    if (!xc[0]) {
      y.s = ROUNDING_MODE == 3 ? -1 : 1;
      y.c = [y.e = 0];
      return y;
    }
    return normalise(y, xc, ye2);
  };
  P2.modulo = P2.mod = function(y, b2) {
    var q, s, x = this;
    y = new BigNumber2(y, b2);
    if (!x.c || !y.s || y.c && !y.c[0]) {
      return new BigNumber2(NaN);
    } else if (!y.c || x.c && !x.c[0]) {
      return new BigNumber2(x);
    }
    if (MODULO_MODE == 9) {
      s = y.s;
      y.s = 1;
      q = div(x, y, 0, 3);
      y.s = s;
      q.s *= s;
    } else {
      q = div(x, y, 0, MODULO_MODE);
    }
    y = x.minus(q.times(y));
    if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
    return y;
  };
  P2.multipliedBy = P2.times = function(y, b2) {
    var c2, e, i, j, k, m2, xcL, xlo, xhi, ycL, ylo, yhi, zc, base2, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber2(y, b2)).c;
    if (!xc || !yc || !xc[0] || !yc[0]) {
      if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
        y.c = y.e = y.s = null;
      } else {
        y.s *= x.s;
        if (!xc || !yc) {
          y.c = y.e = null;
        } else {
          y.c = [0];
          y.e = 0;
        }
      }
      return y;
    }
    e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
    y.s *= x.s;
    xcL = xc.length;
    ycL = yc.length;
    if (xcL < ycL) {
      zc = xc;
      xc = yc;
      yc = zc;
      i = xcL;
      xcL = ycL;
      ycL = i;
    }
    for (i = xcL + ycL, zc = []; i--; zc.push(0)) ;
    base2 = BASE;
    sqrtBase = SQRT_BASE;
    for (i = ycL; --i >= 0; ) {
      c2 = 0;
      ylo = yc[i] % sqrtBase;
      yhi = yc[i] / sqrtBase | 0;
      for (k = xcL, j = i + k; j > i; ) {
        xlo = xc[--k] % sqrtBase;
        xhi = xc[k] / sqrtBase | 0;
        m2 = yhi * xlo + xhi * ylo;
        xlo = ylo * xlo + m2 % sqrtBase * sqrtBase + zc[j] + c2;
        c2 = (xlo / base2 | 0) + (m2 / sqrtBase | 0) + yhi * xhi;
        zc[j--] = xlo % base2;
      }
      zc[j] = c2;
    }
    if (c2) {
      ++e;
    } else {
      zc.splice(0, 1);
    }
    return normalise(y, zc, e);
  };
  P2.negated = function() {
    var x = new BigNumber2(this);
    x.s = -x.s || null;
    return x;
  };
  P2.plus = function(y, b2) {
    var t, x = this, a = x.s;
    y = new BigNumber2(y, b2);
    b2 = y.s;
    if (!a || !b2) return new BigNumber2(NaN);
    if (a != b2) {
      y.s = -b2;
      return x.minus(y);
    }
    var xe2 = x.e / LOG_BASE, ye2 = y.e / LOG_BASE, xc = x.c, yc = y.c;
    if (!xe2 || !ye2) {
      if (!xc || !yc) return new BigNumber2(a / 0);
      if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber2(xc[0] ? x : a * 0);
    }
    xe2 = bitFloor(xe2);
    ye2 = bitFloor(ye2);
    xc = xc.slice();
    if (a = xe2 - ye2) {
      if (a > 0) {
        ye2 = xe2;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }
      t.reverse();
      for (; a--; t.push(0)) ;
      t.reverse();
    }
    a = xc.length;
    b2 = yc.length;
    if (a - b2 < 0) {
      t = yc;
      yc = xc;
      xc = t;
      b2 = a;
    }
    for (a = 0; b2; ) {
      a = (xc[--b2] = xc[b2] + yc[b2] + a) / BASE | 0;
      xc[b2] = BASE === xc[b2] ? 0 : xc[b2] % BASE;
    }
    if (a) {
      xc = [a].concat(xc);
      ++ye2;
    }
    return normalise(y, xc, ye2);
  };
  P2.precision = P2.sd = function(sd, rm) {
    var c2, n, v, x = this;
    if (sd != null && sd !== !!sd) {
      intCheck(sd, 1, MAX);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(new BigNumber2(x), sd, rm);
    }
    if (!(c2 = x.c)) return null;
    v = c2.length - 1;
    n = v * LOG_BASE + 1;
    if (v = c2[v]) {
      for (; v % 10 == 0; v /= 10, n--) ;
      for (v = c2[0]; v >= 10; v /= 10, n++) ;
    }
    if (sd && x.e + 1 > n) n = x.e + 1;
    return n;
  };
  P2.shiftedBy = function(k) {
    intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
    return this.times("1e" + k);
  };
  P2.squareRoot = P2.sqrt = function() {
    var m2, n, r, rep, t, x = this, c2 = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber2("0.5");
    if (s !== 1 || !c2 || !c2[0]) {
      return new BigNumber2(!s || s < 0 && (!c2 || c2[0]) ? NaN : c2 ? x : 1 / 0);
    }
    s = Math.sqrt(+valueOf(x));
    if (s == 0 || s == 1 / 0) {
      n = coeffToString(c2);
      if ((n.length + e) % 2 == 0) n += "0";
      s = Math.sqrt(+n);
      e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
      if (s == 1 / 0) {
        n = "5e" + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf("e") + 1) + e;
      }
      r = new BigNumber2(n);
    } else {
      r = new BigNumber2(s + "");
    }
    if (r.c[0]) {
      e = r.e;
      s = e + dp;
      if (s < 3) s = 0;
      for (; ; ) {
        t = r;
        r = half.times(t.plus(div(x, t, dp, 1)));
        if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
          if (r.e < e) --s;
          n = n.slice(s - 3, s + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              round(t, t.e + DECIMAL_PLACES + 2, 0);
              if (t.times(t).eq(x)) {
                r = t;
                break;
              }
            }
            dp += 4;
            s += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              round(r, r.e + DECIMAL_PLACES + 2, 1);
              m2 = !r.times(r).eq(x);
            }
            break;
          }
        }
      }
    }
    return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m2);
  };
  P2.toExponential = function(dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp++;
    }
    return format(this, dp, rm, 1);
  };
  P2.toFixed = function(dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp = dp + this.e + 1;
    }
    return format(this, dp, rm);
  };
  P2.toFormat = function(dp, rm, format2) {
    var str, x = this;
    if (format2 == null) {
      if (dp != null && rm && typeof rm == "object") {
        format2 = rm;
        rm = null;
      } else if (dp && typeof dp == "object") {
        format2 = dp;
        dp = rm = null;
      } else {
        format2 = FORMAT;
      }
    } else if (typeof format2 != "object") {
      throw Error(bignumberError + "Argument not an object: " + format2);
    }
    str = x.toFixed(dp, rm);
    if (x.c) {
      var i, arr = str.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
      if (g2) {
        i = g1;
        g1 = g2;
        g2 = i;
        len -= i;
      }
      if (g1 > 0 && len > 0) {
        i = len % g1 || g1;
        intPart = intDigits.substr(0, i);
        for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
        if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
        if (isNeg) intPart = "-" + intPart;
      }
      str = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(
        new RegExp("\\d{" + g2 + "}\\B", "g"),
        "$&" + (format2.fractionGroupSeparator || "")
      ) : fractionPart) : intPart;
    }
    return (format2.prefix || "") + str + (format2.suffix || "");
  };
  P2.toFraction = function(md) {
    var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
    if (md != null) {
      n = new BigNumber2(md);
      if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
        throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
      }
    }
    if (!xc) return new BigNumber2(x);
    d = new BigNumber2(ONE);
    n1 = d0 = new BigNumber2(ONE);
    d1 = n0 = new BigNumber2(ONE);
    s = coeffToString(xc);
    e = d.e = s.length - x.e - 1;
    d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
    md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
    exp = MAX_EXP;
    MAX_EXP = 1 / 0;
    n = new BigNumber2(s);
    n0.c[0] = 0;
    for (; ; ) {
      q = div(n, d, 0, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.comparedTo(md) == 1) break;
      d0 = d1;
      d1 = d2;
      n1 = n0.plus(q.times(d2 = n1));
      n0 = d2;
      d = n.minus(q.times(d2 = d));
      n = d2;
    }
    d2 = div(md.minus(d0), d1, 0, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    e = e * 2;
    r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
      div(n0, d0, e, ROUNDING_MODE).minus(x).abs()
    ) < 1 ? [n1, d1] : [n0, d0];
    MAX_EXP = exp;
    return r;
  };
  P2.toNumber = function() {
    return +valueOf(this);
  };
  P2.toPrecision = function(sd, rm) {
    if (sd != null) intCheck(sd, 1, MAX);
    return format(this, sd, rm, 2);
  };
  P2.toString = function(b2) {
    var str, n = this, s = n.s, e = n.e;
    if (e === null) {
      if (s) {
        str = "Infinity";
        if (s < 0) str = "-" + str;
      } else {
        str = "NaN";
      }
    } else {
      if (b2 == null) {
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
      } else if (b2 === 10 && alphabetHasNormalDecimalDigits) {
        n = round(new BigNumber2(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
        str = toFixedPoint(coeffToString(n.c), n.e, "0");
      } else {
        intCheck(b2, 2, ALPHABET2.length, "Base");
        str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b2, s, true);
      }
      if (s < 0 && n.c[0]) str = "-" + str;
    }
    return str;
  };
  P2.valueOf = P2.toJSON = function() {
    return valueOf(this);
  };
  P2._isBigNumber = true;
  P2[Symbol.toStringTag] = "BigNumber";
  P2[Symbol.for("nodejs.util.inspect.custom")] = P2.valueOf;
  if (configObject != null) BigNumber2.set(configObject);
  return BigNumber2;
}
function bitFloor(n) {
  var i = n | 0;
  return n > 0 || n === i ? i : i - 1;
}
function coeffToString(a) {
  var s, z2, i = 1, j = a.length, r = a[0] + "";
  for (; i < j; ) {
    s = a[i++] + "";
    z2 = LOG_BASE - s.length;
    for (; z2--; s = "0" + s) ;
    r += s;
  }
  for (j = r.length; r.charCodeAt(--j) === 48; ) ;
  return r.slice(0, j + 1 || 1);
}
function compare(x, y) {
  var a, b2, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
  if (!i || !j) return null;
  a = xc && !xc[0];
  b2 = yc && !yc[0];
  if (a || b2) return a ? b2 ? 0 : -j : i;
  if (i != j) return i;
  a = i < 0;
  b2 = k == l;
  if (!xc || !yc) return b2 ? 0 : !xc ^ a ? 1 : -1;
  if (!b2) return k > l ^ a ? 1 : -1;
  j = (k = xc.length) < (l = yc.length) ? k : l;
  for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
  return k == l ? 0 : k > l ^ a ? 1 : -1;
}
function intCheck(n, min, max, name) {
  if (n < min || n > max || n !== mathfloor(n)) {
    throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
  }
}
function isOdd(n) {
  var k = n.c.length - 1;
  return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
}
function toExponential(str, e) {
  return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
}
function toFixedPoint(str, e, z2) {
  var len, zs;
  if (e < 0) {
    for (zs = z2 + "."; ++e; zs += z2) ;
    str = zs + str;
  } else {
    len = str.length;
    if (++e > len) {
      for (zs = z2, e -= len; --e; zs += z2) ;
      str += zs;
    } else if (e < len) {
      str = str.slice(0, e) + "." + str.slice(e);
    }
  }
  return str;
}
var BigNumber = clone();
var bignumber_default = BigNumber;

// node_modules/viem/_esm/op-stack/actions/buildDepositTransaction.js
async function buildDepositTransaction(client, args) {
  const { account: account_, chain = client.chain, gas, data, isCreation, mint, to, value } = args;
  const account = account_ ? parseAccount(account_) : void 0;
  const request = await prepareTransactionRequest(client, {
    account: mint ? void 0 : account,
    chain,
    gas,
    data,
    parameters: ["gas"],
    to,
    value
  });
  return {
    account,
    request: {
      data: request.data,
      gas: request.gas,
      mint,
      isCreation,
      to: request.to,
      value: request.value
    },
    targetChain: chain
  };
}

// node_modules/viem/_esm/op-stack/utils/getWithdrawalHashStorageSlot.js
function getWithdrawalHashStorageSlot({ withdrawalHash }) {
  const data = encodeAbiParameters([{ type: "bytes32" }, { type: "uint256" }], [withdrawalHash, 0n]);
  return keccak256(data);
}

// node_modules/viem/_esm/op-stack/actions/buildProveWithdrawal.js
var outputRootProofVersion = "0x0000000000000000000000000000000000000000000000000000000000000000";
async function buildProveWithdrawal(client, args) {
  const { account, chain = client.chain, game, output, withdrawal } = args;
  const { withdrawalHash } = withdrawal;
  const { l2BlockNumber } = game ?? output;
  const slot = getWithdrawalHashStorageSlot({ withdrawalHash });
  const [proof, block] = await Promise.all([
    getProof(client, {
      address: contracts.l2ToL1MessagePasser.address,
      storageKeys: [slot],
      blockNumber: l2BlockNumber
    }),
    getBlock(client, {
      blockNumber: l2BlockNumber
    })
  ]);
  return {
    account,
    l2OutputIndex: (game == null ? void 0 : game.index) ?? (output == null ? void 0 : output.outputIndex),
    outputRootProof: {
      latestBlockhash: block.hash,
      messagePasserStorageRoot: proof.storageHash,
      stateRoot: block.stateRoot,
      version: outputRootProofVersion
    },
    targetChain: chain,
    withdrawalProof: maybeAddProofNode(keccak256(slot), proof.storageProof[0].proof),
    withdrawal
  };
}
function maybeAddProofNode(key, proof) {
  const lastProofRlp = proof[proof.length - 1];
  const lastProof = fromRlp(lastProofRlp);
  if (lastProof.length !== 17)
    return proof;
  const modifiedProof = [...proof];
  for (const item of lastProof) {
    if (!Array.isArray(item))
      continue;
    const suffix = item[0].slice(3);
    if (typeof suffix !== "string" || !key.endsWith(suffix))
      continue;
    modifiedProof.push(toRlp(item));
  }
  return modifiedProof;
}

// node_modules/viem/_esm/op-stack/abis.js
var gasPriceOracleAbi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [],
    name: "DECIMALS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "baseFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "gasPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes", name: "_data", type: "bytes" }],
    name: "getL1Fee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes", name: "_data", type: "bytes" }],
    name: "getL1GasUsed",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "l1BaseFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "overhead",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "scalar",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  }
];
var l2ToL1MessagePasserAbi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256"
      },
      { indexed: false, internalType: "bytes", name: "data", type: "bytes" },
      {
        indexed: false,
        internalType: "bytes32",
        name: "withdrawalHash",
        type: "bytes32"
      }
    ],
    name: "MessagePassed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "WithdrawerBalanceBurnt",
    type: "event"
  },
  {
    inputs: [],
    name: "MESSAGE_VERSION",
    outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_target", type: "address" },
      { internalType: "uint256", name: "_gasLimit", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" }
    ],
    name: "initiateWithdrawal",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "messageNonce",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "sentMessages",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];

// node_modules/viem/_esm/op-stack/actions/estimateL1Fee.js
async function estimateL1Fee(client, args) {
  const { chain = client.chain, gasPriceOracleAddress: gasPriceOracleAddress_ } = args;
  const gasPriceOracleAddress = (() => {
    if (gasPriceOracleAddress_)
      return gasPriceOracleAddress_;
    if (chain)
      return getChainContractAddress({
        chain,
        contract: "gasPriceOracle"
      });
    return contracts.gasPriceOracle.address;
  })();
  const request = await prepareTransactionRequest(client, args);
  assertRequest(request);
  const transaction = serializeTransaction({
    ...request,
    type: "eip1559"
  });
  return readContract(client, {
    abi: gasPriceOracleAbi,
    address: gasPriceOracleAddress,
    functionName: "getL1Fee",
    args: [transaction]
  });
}

// node_modules/viem/_esm/op-stack/actions/estimateContractL1Fee.js
async function estimateContractL1Fee(client, parameters) {
  const { abi, address, args, functionName, ...request } = parameters;
  const data = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    const fee = await estimateL1Fee(client, {
      data,
      to: address,
      ...request
    });
    return fee;
  } catch (error) {
    const account = request.account ? parseAccount(request.account) : void 0;
    throw getContractError(error, {
      abi,
      address,
      args,
      docsPath: "/docs/chains/op-stack/estimateContractL1Fee",
      functionName,
      sender: account == null ? void 0 : account.address
    });
  }
}

// node_modules/viem/_esm/op-stack/actions/estimateL1Gas.js
async function estimateL1Gas(client, args) {
  const { chain = client.chain, gasPriceOracleAddress: gasPriceOracleAddress_ } = args;
  const gasPriceOracleAddress = (() => {
    if (gasPriceOracleAddress_)
      return gasPriceOracleAddress_;
    if (chain)
      return getChainContractAddress({
        chain,
        contract: "gasPriceOracle"
      });
    return contracts.gasPriceOracle.address;
  })();
  const request = await prepareTransactionRequest(client, args);
  assertRequest(request);
  const transaction = serializeTransaction({
    ...request,
    type: "eip1559"
  });
  return readContract(client, {
    abi: gasPriceOracleAbi,
    address: gasPriceOracleAddress,
    functionName: "getL1GasUsed",
    args: [transaction]
  });
}

// node_modules/viem/_esm/op-stack/actions/estimateContractL1Gas.js
async function estimateContractL1Gas(client, parameters) {
  const { abi, address, args, functionName, ...request } = parameters;
  const data = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    const gas = await estimateL1Gas(client, {
      data,
      to: address,
      ...request
    });
    return gas;
  } catch (error) {
    const account = request.account ? parseAccount(request.account) : void 0;
    throw getContractError(error, {
      abi,
      address,
      args,
      docsPath: "/docs/chains/op-stack/estimateContractL1Gas",
      functionName,
      sender: account == null ? void 0 : account.address
    });
  }
}

// node_modules/viem/_esm/op-stack/actions/estimateTotalFee.js
async function estimateTotalFee(client, args) {
  const request = await prepareTransactionRequest(client, args);
  const [l1Fee, l2Gas, l2GasPrice] = await Promise.all([
    estimateL1Fee(client, request),
    estimateGas(client, request),
    getGasPrice(client)
  ]);
  return l1Fee + l2Gas * l2GasPrice;
}

// node_modules/viem/_esm/op-stack/actions/estimateContractTotalFee.js
async function estimateContractTotalFee(client, parameters) {
  const { abi, address, args, functionName, ...request } = parameters;
  const data = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    const fee = await estimateTotalFee(client, {
      data,
      to: address,
      ...request
    });
    return fee;
  } catch (error) {
    const account = request.account ? parseAccount(request.account) : void 0;
    throw getContractError(error, {
      abi,
      address,
      args,
      docsPath: "/docs/chains/op-stack/estimateTotalFee",
      functionName,
      sender: account == null ? void 0 : account.address
    });
  }
}

// node_modules/viem/_esm/op-stack/actions/estimateTotalGas.js
async function estimateTotalGas(client, args) {
  const request = await prepareTransactionRequest(client, args);
  const [l1Gas, l2Gas] = await Promise.all([
    estimateL1Gas(client, request),
    estimateGas(client, request)
  ]);
  return l1Gas + l2Gas;
}

// node_modules/viem/_esm/op-stack/actions/estimateContractTotalGas.js
async function estimateContractTotalGas(client, parameters) {
  const { abi, address, args, functionName, ...request } = parameters;
  const data = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    const gas = await estimateTotalGas(client, {
      data,
      to: address,
      ...request
    });
    return gas;
  } catch (error) {
    const account = request.account ? parseAccount(request.account) : void 0;
    throw getContractError(error, {
      abi,
      address,
      args,
      docsPath: "/docs/chains/op-stack/estimateTotalGas",
      functionName,
      sender: account == null ? void 0 : account.address
    });
  }
}

// node_modules/viem/_esm/op-stack/actions/getL1BaseFee.js
async function getL1BaseFee(client, args) {
  const { chain = client.chain, gasPriceOracleAddress: gasPriceOracleAddress_ } = args || {};
  const gasPriceOracleAddress = (() => {
    if (gasPriceOracleAddress_)
      return gasPriceOracleAddress_;
    if (chain)
      return getChainContractAddress({
        chain,
        contract: "gasPriceOracle"
      });
    return contracts.gasPriceOracle.address;
  })();
  return readContract(client, {
    abi: gasPriceOracleAbi,
    address: gasPriceOracleAddress,
    functionName: "l1BaseFee"
  });
}

// node_modules/viem/_esm/op-stack/actions/estimateInitiateWithdrawalGas.js
async function estimateInitiateWithdrawalGas(client, parameters) {
  const { account, chain = client.chain, gas, maxFeePerGas, maxPriorityFeePerGas, nonce, request: { data = "0x", gas: l1Gas, to, value } } = parameters;
  const params = {
    account,
    abi: l2ToL1MessagePasserAbi,
    address: contracts.l2ToL1MessagePasser.address,
    functionName: "initiateWithdrawal",
    args: [to, l1Gas, data],
    gas,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    value,
    // TODO: Not sure `chain` is necessary since it's not used downstream
    // in `estimateContractGas` or `estimateGas`
    // @ts-ignore
    chain
  };
  return estimateContractGas(client, params);
}

// node_modules/viem/_esm/op-stack/decorators/publicL2.js
function publicActionsL2() {
  return (client) => {
    return {
      buildDepositTransaction: (args) => buildDepositTransaction(client, args),
      buildProveWithdrawal: (args) => buildProveWithdrawal(client, args),
      estimateContractL1Fee: (args) => estimateContractL1Fee(client, args),
      estimateContractL1Gas: (args) => estimateContractL1Gas(client, args),
      estimateContractTotalFee: (args) => estimateContractTotalFee(client, args),
      estimateContractTotalGas: (args) => estimateContractTotalGas(client, args),
      estimateInitiateWithdrawalGas: (args) => estimateInitiateWithdrawalGas(client, args),
      estimateL1Fee: (args) => estimateL1Fee(client, args),
      getL1BaseFee: (args) => getL1BaseFee(client, args),
      estimateL1Gas: (args) => estimateL1Gas(client, args),
      estimateTotalFee: (args) => estimateTotalFee(client, args),
      estimateTotalGas: (args) => estimateTotalGas(client, args)
    };
  };
}

// node_modules/@holyheld/sdk/dist/index.es.js
var et = ((t) => (t.Warning = "warning", t.Log = "log", t.Info = "info", t.Debug = "debug", t))(et || {});
function bn() {
  return (t, e, a) => {
    console[t === "warning" ? "warn" : t](`Holyheld SDK: ${t}:`, e, a);
  };
}
var vn = Object.defineProperty;
var Cn = (t, e, a) => e in t ? vn(t, e, { enumerable: true, configurable: true, writable: true, value: a }) : t[e] = a;
var Jt = (t, e, a) => (Cn(t, typeof e != "symbol" ? e + "" : e, a), a);
var D = ((t) => (t.NotInitialized = "HSDK_NI", t.FailedInitialization = "HSDK_FI", t.UnsupportedNetwork = "HSDK_UN", t.InvalidTopUpAmount = "HSDK_ITUA", t.InvalidOnRampAmount = "HSDK_IORA", t.UnexpectedWalletNetwork = "HSDK_UWN", t.UserRejectedSignature = "HSDK_RS", t.UserRejectedTransaction = "HSDK_RT", t.FailedSettings = "HSDK_FS", t.FailedTagInfo = "HSDK_FTI", t.FailedAddressInfo = "HSDK_FAI", t.FailedWalletBalances = "HSDK_FWB", t.FailedEstimation = "HSDK_FE", t.FailedConversion = "HSDK_FC", t.FailedTopUp = "HSDK_FTU", t.FailedCreateOnRampRequest = "HSDK_FCOR", t.FailedOnRampRequest = "HSDK_FOR", t.FailedWatchOnRampRequestTimeout = "HSDK_FwORT", t.FailedWatchOnRampRequest = "HSDK_FWORR", t.FailedConvertOnRampAmount = "HSDK_FCORA", t))(D || {});
var I = class extends Error {
  constructor(e, a, n) {
    super(`HolyheldSDKError with code ${e}: ${a}`, { cause: n }), Jt(this, "code"), Jt(this, "payload", {}), this.code = e;
  }
  withPayload(e) {
    return this.payload = e, this;
  }
};
var ze = (t, e) => t != null && e != null && t.toLowerCase() === e.toLowerCase();
var ga = () => "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
var c = class extends Error {
  constructor(e, { cause: a, payload: n } = {}) {
    n = n ?? {}, a !== void 0 && axios_default.isAxiosError(a) && (n = { ...n, axiosErrorPayload: a.toJSON() });
    const s = Object.entries(n).length < 1 ? e : e + ": " + JSON.stringify(n);
    super(s, { cause: a });
    __publicField(this, "shortMessage");
    __publicField(this, "payload");
    __publicField(this, "name", "HHError");
    this.shortMessage = e, this.payload = n;
  }
  setPayload(e) {
    return this.payload = e, this.message = this.shortMessage + ": " + JSON.stringify(e), this;
  }
  addPayload(e) {
    return this.payload = { ...this.payload, ...e }, this.message = this.shortMessage + ": " + JSON.stringify(e), this;
  }
  getPayload() {
    return this.payload;
  }
  getWrappableMessage() {
    return this.shortMessage;
  }
};
var wa;
var kn = (t) => {
  wa = t;
};
var ae = () => wa;
var G = class extends c {
  constructor(e, a, { cause: n, payload: s } = {}) {
    const r = a !== void 0 && a !== "" ? e + ` (${a})` : e || "No error message";
    super(r, { cause: n, payload: s });
    __publicField(this, "name", "HHAPIError");
    this.shortMessage = a ?? r;
  }
  getWrappableMessage() {
    return this.message;
  }
};
var Mt = class extends G {
  constructor(e, { cause: a, payload: n } = {}) {
    super("Invalid session", e, { cause: a, payload: { ...n, reason: e } });
    __publicField(this, "name", "HHAPIInvalidSessionError");
    this.reason = e;
  }
};
var Ta = (t) => t instanceof Mt || t.cause !== void 0 && t.cause instanceof c && Ta(t.cause);
var H = class extends c {
  constructor(e, { cause: a, payload: n, sentryHandle: s } = {}) {
    super("Expected error with code: " + e, { cause: a, payload: n });
    __publicField(this, "name", "ExpectedError");
    __publicField(this, "sentryHandle", false);
    this.code = e, this.sentryHandle = !!s;
  }
  getCode() {
    return this.code;
  }
  isHandledBySentry() {
    return this.sentryHandle;
  }
};
var J = ((t) => (t.UnsupportedProviderType = "UPT", t.UnsupportedNetwork = "UN", t.EmptyProvider = "EmP", t.EmptyWeb3Provider = "EmW3P", t.WalletSignEmptyWeb3Provider = "W-S-EmW3P", t.WalletSignEmptyAddress = "W-S-EmAddr", t.EmptyAccount = "EmA", t.ConnectProviderWeb3CleanCache = "CP-W3-ClCh", t.ConnectCacheProviderWeb3 = "CCP-W3", t.SignMessage = "SM", t.metamaskNotInstalled = "MM-Ni", t.notConnected = "N-C", t.signErrorVerify = "S-E-V", t.ValidateTagCommon = "VT-C", t.ReserveTag = "ReT", t.GetTagAmount = "GT-A", t.CantAddApprovalWallet = "CA-AW", t.CantAddControlWallet = "CA-CW", t.CantDeleteApprovalWallet = "CD-AW", t.ApprovalWalletsLoading = "AW-L", t.CantApproveControlEvent = "CA-CE", t.CantRejectControlEvent = "CR-CE", t.CantSendOTPForApproveControlEvent = "CSO-A-CE", t.CantResetPasscodeBySign = "CRP-BS", t.CantSendOTPForPasscodeReset = "CSO-PR", t.CantResetPasscodeByOTP = "CRP-BO", t.ErrorToInstanceOff = "Err-Inst-Off", t.UnknownErrorType = "P-TT-DEF", t.InitTransactionsEmptyAccount = "IT-EA", t.SelectedTokenUndefined = "ST_Un", t.SwapDataFetchFailed = "S-D", t.ChainChange = "CC-W3", t.CardTopUpEstimation = "C-TU-EST", t.CardTopUpScenario = "C-TU-Scen", t.CardTopUpPreparation = "C-TU-Prep", t.CardTopUp = "C-TU", t.CardTopUpAddressCheck = "C-TU-AC", t.CardTopUpApprove = "C-TU-Appr", t.CardTopUpNoApproval = "C-TU-No-Appr", t.CardTopUpWithTrust = "C-TU-WT", t.CardTopUpWithPermit = "C-TU-WP", t.CardTopUpWithTrustEstimation = "C-TU-WT-EST", t.CardTopUpWithPermitEstimation = "C-TU-WP-EST", t.CardTopUpBackendCheckExpired = "C-TU-BC-Exp", t.CardTopUpWithPermitPermitExpired = "C-TU-WP-Perm-Exp", t.CardTopUpAcceptError = "C-TU-A", t.CardTopUpRejectError = "C-TU-R", t.CardOrderScenario = "C-O-Scen", t.CardOrderPrices = "C-O-P", t.CardOrderSaveCardData = "C-O-CD", t.CardOrderKYCInitialization = "C-O-KI", t.CardOrderKYCReview = "C-O-KR", t.CardOrderAgreeTerms = "C-O-AT", t.CardOrder = "C-O", t.CardOrderApprove = "C-O-Appr", t.CardOrderNoApproval = "C-O-No-Appr", t.CardOrderWithTrust = "C-O-WT", t.CardOrderWithPermit = "C-O-WP", t.CardOrderWithTrustEstimation = "C-O-WT-EST", t.CardOrderWithPermitEstimation = "C-O-WP-EST", t.EmptyConfirmationUponCachedInit = "EmConf-CI", t.NoCardFromTagService = "NC-TS", t.InvalidSignature = "Inv-S", t.CheckRegistrationError = "Ch-Re-E", t.AuthError = "Au-E", t.RegistrationError = "Reg-E", t.SignError = "Si-E", t.EmptySignature = "EmSig", t.CachedInitError = "Ca-Ie", t.NotificationPermission = "N-P", t.CrashReports = "Cr-R", t.AccountLanguage = "A-L", t.AccountEmojiSkin = "A-ES", t.ChangePIN = "Ch-PIN", t.PINAvailability = "P-A", t.ChangeStaticPassword = "Ch-SP", t.SCAUnlock = "SCA-UL", t.CardDetailsGet = "C-CD-G", t.AccountDetailsGet = "C-AD-G", t.FreezeCard = "Fr-C", t.BankTransferEstimate = "BT-EST", t.BankTransferAvailability = "BT-A", t.BankTransferPreparation = "BT-Prep", t.BankTransferAddressCheck = "BT-AC", t.BankTransferApprove = "BT-Appr", t.BankTransferWithPermit = "BT-WP", t.BankTransferWithTrust = "BT-WT", t.BankTransferWithPermitEstimation = "BT-WP-EST", t.BankTransferWithTrustEstimation = "BT-WT-EST", t.BankTransferPermitData = "BT-PD", t.BankTransferBackendCheckExpired = "BT-BC-Exp", t.BankTransferWithPermitPermitExpired = "BT-WP-Perm-Exp", t.BankTransferAcceptError = "BT-Acc", t.BankTransferRejectError = "BT-R", t.BankTransfer = "BT", t.TransactionsExport = "T-E", t.ClaimCashback = "C-C", t.ClaimCashbackEstimate = "C-C-EST", t.ClaimCashbackBEParams = "C-C-BEP", t.ReferralListGet = "R-L-G", t.ApproveEstimation = "A-EST", t.CardOrderPreparation = "C-O-Prep", t.CardOrderWithPermitPermitExpired = "C-O-WP-P-Exp", t.CardOrderBackendCheckExpired = "C-O-BC-Exp", t.CardOrderAddressCheck = "C-O-AC", t.PhysicalCardDeclineCardMigration = "PC-Decl-CM", t.PhysicalCardApproveCardMigration = "PC-Appr-CM", t.PhysicalCardMarkWrongDeliveryAddress = "PC-M-W-DA", t.PhysicalCardGetDeliveryAddress = "PC-G-DA", t.GetNews = "G-News", t.CloseNews = "C-News", t.DataBus = "DataBus", t.SwapApprove = "Sw-Appr", t.SwapWithPermit = "Sw-W-P", t.SwapWithPermitEstimation = "Sw-W-P-Est", t.SwapWithPermitExpired = "Sw-W-P-P-Exp", t.SwapWithPermit2 = "Sw-W-P2", t.SwapWithPermit2Estimation = "Sw-W-P2-Est", t.SwapWithApprove = "Sw-W-A", t.SwapWithApproveEstimation = "Sw-W-A-Est", t.MultiCallFailed = "M/C", t.SwapBackendCheckExpired = "Sw-BE-C-Exp", t.GaslessEstimation = "C-GL-Est", t.GaslessExecution = "C-GL", t))(J || {});
var An = { "C-AD-G": "Account Details Get", "A-ES": "AccountEmojiSkin", "A-L": "Account Language", "AW-L": "Approval Wallets Loading", "Au-E": "Auth", BT: "Bank Transfer", "BT-A": "Bank Transfer Availability", "BT-EST": "Bank Transfer Estimate", "BT-Prep": "Bank Transfer Preparation", "BT-Appr": "Bank Transfer Approve", "BT-WP": "Bank Transfer With Permit", "BT-WT": "Bank Transfer With Trust", "BT-WP-EST": "Bank Transfer With Permit Estimation", "BT-WT-EST": "Bank Transfer With Trust Estimation", "BT-AC": "Bank Transfer Address Check", "BT-PD": "Bank Transfer Permit Data", "BT-BC-Exp": "Bank Transfer Backend Check Expire", "BT-WP-Perm-Exp": "Bank Transfer With Permit Permit Expire", "BT-Acc": "Bank Transfer Accept Error", "BT-R": "Bank Transfer Reject Error", "Ca-Ie": "Cached Init Error", "CA-AW": "Can not add approval wallet", "CA-CW": "Cant Add Control Wallet", "CA-CE": "Cant Approve Control Event", "CD-AW": "Cant Delete Approval Wallet", "CR-CE": "Cant Reject Control Event", "CRP-BO": "Cant Reset Passcode By OTP", "CRP-BS": "Cant Reset Passcode By Sign", "CSO-A-CE": "Cant Send OTP For Approve Control Event", "CSO-PR": "Cant Send OTP For Passcode Reset", "C-CD-G": "Card Details Get", "C-O": "Card Order", "C-O-AT": "Card Order Agree Terms", "C-O-Appr": "Card order approve", "C-O-KI": "Card Order KYC Initialization", "C-O-KR": "Card Order KYC Review", "C-O-No-Appr": "Card order no approve after retries", "C-O-P": "Card Order Prices", "C-O-CD": "Card Order Save Card Data", "C-O-Scen": "Card Order Scenario", "C-O-WP": "Card order with permit", "C-O-WP-EST": "Card order with permit estimation", "C-O-WT": "Card order with trust", "C-O-WT-EST": "Card order with trust estimation", "C-TU": "Card Top Up", "C-TU-A": "Card Top Up Accept Error", "C-TU-AC": "Card Top Up address check", "C-TU-Appr": "Card Top Up approve", "C-TU-EST": "Card Top Up Estimation", "C-TU-No-Appr": "Card Top Up no approve after retries", "C-TU-Prep": "Card Top Up Preparation", "C-TU-R": "Card Top Up Reject Error", "C-TU-Scen": "Card Top Up Scenario", "C-TU-WP": "Card Top Up with permit", "C-TU-WP-EST": "Card Top Up with permit estimation", "C-TU-WT": "Card Top Up with trust", "C-TU-WT-EST": "Card Top Up with trust estimation", "CC-W3": "Chain Change", "Ch-PIN": "Change PIN", "Ch-SP": "Change Static Password", "Ch-Re-E": "Check Registration", "C-C": "Claim Cashback", "C-C-BEP": "Claim Cashback Backend Params", "C-C-EST": "Claim Cashback Estimate", "CCP-W3": "Connect Cache Provider", "CP-W3-ClCh": "Connect Provider Clean Cache", "Cr-R": "Crash Reports", EmA: "Empty Account", "EmConf-CI": "Empty Confirmation Upon Cached Init", EmP: "Empty Provider", EmSig: "Empty Signature", EmW3P: "Empty Web3 Provider", "Err-Inst-Off": "Error To Instance Off", "Fr-C": "Freeze Card", "GT-A": "Get Tag Amount", "IT-EA": "Init Transactions Empty Account", "Inv-S": "Invalid Signature", "NC-TS": "No card from tag service", "N-P": "Notification Permission", "P-A": "PIN Availability", "R-L-G": "Referral List Get", "Reg-E": "Registration", ReT: "Reserve Tag", "SCA-UL": "SCA Unlock", ST_Un: "Selected Token Undefined", "Si-E": "Sign", SM: "Sign Message", "S-D": "Swap Data Fetch Failed", "T-E": "Transaction Export", "P-TT-DEF": "Unknown Error Type", UN: "Unsupported Network", UPT: "Unsupported Provider Type", "VT-C": "Validate Tag", "W-S-EmAddr": "Wallet Sign Empty Address", "W-S-EmW3P": "Wallet Sign Empty Web3 Provider", "MM-Ni": "Metamask Not Installed", "N-C": "Not Connected", "S-E-V": "Sign Error Verify", "C-TU-WP-Perm-Exp": "Card Top Up with permit: Permit expired", "C-TU-BC-Exp": "Card top up: backend check expired", "A-EST": "Approve estimation", "C-O-Prep": "Card order preparation", "C-O-WP-P-Exp": "Card order with permit: permit expired", "C-O-BC-Exp": "Card order: backend check expired", "C-O-AC": "Card order: address check failed", "PC-Decl-CM": "Physical card: Failed to decline card migration", "PC-Appr-CM": "Physical card: Failed to approve card migration", "PC-M-W-DA": 'Physical card: Failed to mark delivery address as "wrong"', "PC-G-DA": "Physical card: Failed to get delivery address", "G-News": "Failed to get news", "C-News": "Failed to close news", DataBus: "Data bus error", "Sw-Appr": "Swap approve", "Sw-W-P": "Swap with permit", "Sw-W-P-Est": "Swap with permit estimation", "Sw-W-P-P-Exp": "Swap with permit: Permit expired", "Sw-W-P2": "Swap with permit2", "Sw-W-P2-Est": "Swap with permit2 estimation", "Sw-W-A": "Swap with approve", "Sw-W-A-Est": "Swap with approve estimation", "M/C": "MultiCall failed. At least one call rejected", "Sw-BE-C-Exp": "Swap backend check expired", "C-GL-Est": "Failed to estimate gasless transaction", "C-GL": "Failed to execute gasless transaction" };
function Zt(t) {
  return An[t] ?? t;
}
var K = class extends c {
  constructor(e, { cause: a, payload: n } = {}) {
    super("Unexpected error: " + Zt(e), { cause: a, payload: n });
    __publicField(this, "name", "UnexpectedError");
    this.code = e;
  }
  getCode() {
    return this.code;
  }
  getHumanCodeName() {
    return Zt(this.code);
  }
};
var $t;
var xn = (t) => {
  $t = t;
};
var m = (t) => {
  var _a2;
  return (_a2 = $t == null ? void 0 : $t.addSentryBreadcrumb) == null ? void 0 : _a2.call($t, t);
};
var Ot = (t) => {
  if (!(t instanceof Error)) try {
    return JSON.stringify(t);
  } catch {
    return String(t);
  }
  let e;
  return e = t instanceof c ? t.getWrappableMessage() : t instanceof BaseError ? t.shortMessage : t.message || "Empty message", t.cause === void 0 ? e : e + ": " + Ot(t.cause);
};
var ea = class extends c {
  constructor(e, a) {
    fa(a, new c(`Synthetic Group error: ${e}: ` + Ot(a)), 0);
    super(`Group error: ${e}: ` + Ot(a), { cause: a });
    __publicField(this, "name", "SentryGroupedError");
  }
};
var fa = (t, e, a) => {
  t.cause === void 0 ? t.cause = e : 20 < a || (t.cause instanceof Error ? fa(t.cause, e, a + 1) : t.cause = new c("error with wrong type", { cause: e, payload: { obj: t.cause } }));
};
var ta = (t) => {
  var _a2;
  let e = t;
  return console.log("[captureSentryException]"), t instanceof K && aa(t) && (console.log("[captureSentryException]: unexpected error: ", t.getHumanCodeName()), e = new ea(t.getHumanCodeName(), t)), t instanceof H && aa(t) && (console.log("[captureSentryException]: expected error: ", t.message), e = new ea(t.message, t)), ((_a2 = $t == null ? void 0 : $t.captureException) == null ? void 0 : _a2.call($t, e, (a) => (t instanceof K && a.setFingerprint([t.getCode()]), e instanceof c && a.setContext("Payload", e.getPayload()), a))) ?? "";
};
var aa = (t) => !Ta(t);
var En = { debug() {
}, info() {
}, warning() {
}, error() {
} };
var le = (t) => {
  let e = null;
  const a = () => e = e === null ? En : e;
  return { debug(n) {
    return a().debug(n);
  }, error(n) {
    return a().error(n);
  }, info(n) {
    return a().info(n);
  }, warning(n) {
    return a().warning(n);
  } };
};
var N = ((t) => (t.unknown = "unknown", t.ethereum = "ethereum", t.polygon = "polygon", t.avalanche = "avalanche", t.arbitrum = "arbitrum", t.optimism = "optimism", t.gnosis = "gnosis", t.zkevm = "zkevm", t.base = "base", t.zksyncera = "zksyncera", t.blast = "blast", t.mode = "mode", t.bsc = "bsc", t.manta = "manta", t.alephzero = "alephzero", t))(N || {});
var _t = "0x1";
var de = (t, e) => {
  const a = ae();
  return a === void 0 || a[t] === void 0 || a[t].addresses === void 0 ? _t : a[t].addresses[e] ?? _t;
};
var Ve = (t) => t === _t;
var ba = (t) => {
  var _a2;
  const e = ae();
  if (e !== void 0) return (_a2 = Object.values(e).find((n) => n.networkInfo.chainId === t)) == null ? void 0 : _a2.networkInfo;
};
var ue = (t) => {
  var _a2, _b;
  return (_b = (_a2 = ae()) == null ? void 0 : _a2[t]) == null ? void 0 : _b.networkInfo;
};
var V = (t) => {
  const e = ue(t);
  if (e === void 0) throw new c("Network is not defined in config", { payload: { network: t } });
  return e.chainId;
};
var va = (t) => {
  const e = ue(t);
  if (e === void 0) throw new c("Network is not defined in config", { payload: { network: t } });
  return e.baseAsset;
};
var ve = (t, e) => ze(va(e).address, t) || t === ga();
var Kt = () => {
  const t = ae();
  if (t === void 0) throw new c("No config present");
  return Object.values(t).sort((e, a) => e.networkInfo.orderIdx - a.networkInfo.orderIdx).map((e) => e.networkInfo.network);
};
var Ge = (defineChain({ id: 41455, name: "Aleph Zero EVM", nativeCurrency: { decimals: 9, name: "AZERO", symbol: "AZERO" }, rpcUrls: { default: { http: ["https://rpc.alephzero.raas.gelato.cloud"], webSocket: ["wss://ws.alephzero.raas.gelato.cloud"] } }, blockExplorers: { default: { name: "Aleph Zero EVM explorer", url: "https://evm-explorer.alephzero.org" } } }), (t) => {
  const e = ae();
  if (e === void 0 || e[t] === void 0) throw new c("Unable to get swap target for top up: empty config entry", { payload: { network: t } });
  return e[t].swapTarget;
});
var Ca = (t) => {
  const e = ae();
  if (e === void 0 || e[t] === void 0) throw new c("Unable to get swap source for on ramp: empty config entry", { payload: { network: t } });
  return e[t].swapSourceForOnRamp;
};
var oe = (t, e) => {
  try {
    return ze(Ge(e).address, t);
  } catch {
    return false;
  }
};
var Sn = (t) => {
  const e = ae();
  if (e === void 0 || e[t] === void 0 || e[t].settlementTokensForTopUp === void 0) throw new c("No config, network entry or missing settlementTokensForTopUp", { payload: { network: t, config: e } });
  if (e[t].settlementTokensForTopUp.length === 0) throw new c("No settlement tokens for top up in config", { payload: { network: t } });
  return e[t].settlementTokensForTopUp;
};
var pe = (t, e) => {
  const a = ae();
  return a !== void 0 && a[e] !== void 0 && a[e].settlementTokensForTopUp !== void 0 && a[e].settlementTokensForTopUp.some((n) => ze(t, n.address));
};
var tt = (t, e) => {
  var _a2;
  const a = ae();
  return a !== void 0 && a[e] !== void 0 && a[e].tokensRequiresZeroAllowance !== void 0 && (((_a2 = a[e].tokensRequiresZeroAllowance) == null ? void 0 : _a2.some((n) => ze(n, t))) ?? false);
};
var at = (t, e) => {
  var _a2;
  const a = ae();
  if (a === void 0 || a[e] === void 0 || a[e].tokensWithAdditionalGasBuffer === void 0) return 20n;
  const n = (_a2 = a[e].tokensWithAdditionalGasBuffer) == null ? void 0 : _a2[t];
  return n === void 0 ? 20n : BigInt(n);
};
var W = (t, e) => ve(t, e) ? "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" : t;
var Ft = (t, e) => {
  throw new c(e ?? "Reached unhandled case", { payload: { value: t } });
};
var Wt = (t) => /^0x/.test(t) ? t : "0x" + t;
var ka = class {
  constructor(e) {
    __publicField(this, "sentryCategoryPrefix");
    this.sentryCategoryPrefix = e;
  }
};
var Pn = (t) => t.status === "error";
var Aa = ((t) => (t.Geoblock = "GEOBLOCK", t.KycFailedButWaiting = "KYC_FAILED_BUT_WAITING", t.KycFailed = "KYC_FAILED", t.WalletCooldown = "WALLET_COOLDOWN", t))(Aa || {});
var he = class extends ka {
  formatError(e) {
    var _a2, _b, _c;
    if (axios_default.isCancel(e)) throw e;
    if (e instanceof G) throw e.shortMessage !== "INVALID_SESSION" && e.shortMessage !== "INVALID_SIGNATURE" && e.shortMessage !== "NO_ACCOUNT" ? (m({ level: "error", message: "API responded with an error", category: this.sentryCategoryPrefix, data: { error: e.message, shortError: e.shortMessage, payload: e.getPayload() } }), e) : new Mt(e.shortMessage, { cause: e });
    if (axios_default.isAxiosError(e)) {
      const a = e;
      if (a.response !== void 0) {
        if (a.response.data === void 0) {
          const r = { method: a.config.method, requestUri: axios_default.getUri(a.config), statusCode: a.status, statusMessage: a.message, axiosCode: a.code, responseCode: a.response.status };
          throw m({ level: "debug", message: " API responded with an error: no payload", category: this.sentryCategoryPrefix, data: r }), new G("Request failed: no data", a.message ?? "no data", { payload: r });
        }
        const n = { method: a.config.method, requestUri: axios_default.getUri(a.config), statusCode: a.status, error: ((_a2 = a.response.data) == null ? void 0 : _a2.error) || "no error message", errorCode: ((_b = a.response.data) == null ? void 0 : _b.errorCode) || "no error code", payload: (_c = a.response.data) == null ? void 0 : _c.payload, responseCode: a.response.status }, s = (m({ level: "debug", message: "API responded with an error", category: this.sentryCategoryPrefix, data: n }), new G(a.response.data.error, a.response.data.errorCode, { payload: { ...a.response.data.payload || {}, ...n } }));
        throw s.shortMessage !== "INVALID_SESSION" && s.shortMessage !== "INVALID_SIGNATURE" && s.shortMessage !== "NO_ACCOUNT" ? (Object.values(Aa).includes(s.shortMessage), s) : new Mt(s.shortMessage, { cause: s });
      }
      if (a.request !== void 0) {
        const n = { method: a.config.method, requestUri: axios_default.getUri(a.config), statusCode: a.status, statusMessage: a.message, axiosCode: a.code };
        throw m({ level: "debug", message: "API responded with an error: no response received", category: this.sentryCategoryPrefix, data: n }), new c("The request has failed, no response", { payload: n });
      }
    }
    throw e instanceof Error ? new c("The request has failed", { cause: e }) : new c("The request has failed during setup / result handling", { cause: e });
  }
  applyAxiosInterceptors(e, a) {
    return e.interceptors.request.use((n) => {
      var _a2;
      return { ...n, validateStatus: (r) => r === 200, ...a, headers: { ...a == null ? void 0 : a.headers, ...n.headers, Accept: ((_a2 = n.headers) == null ? void 0 : _a2.Accept) ?? "application/json" } };
    }), e.interceptors.response.use((n) => {
      if (Pn(n.data)) {
        m({ level: "error", message: 'API responded with code 200 but data.status is "error"', category: this.sentryCategoryPrefix, data: { status: n.status, data: n.data } });
        const s = typeof n.data.payload != "object" || Array.isArray(n.data.payload) ? { responsePayload: n.data.payload } : n.data.payload, r = new G(n.data.error, n.data.errorCode, { payload: s });
        this.formatError(r);
      }
      return n;
    }, this.formatError.bind(this)), e;
  }
  getAuthHeaders(e, a) {
    return { "X-Api-Addr": e, "X-Api-Sig": a };
  }
  getProviderHeaders(e, a) {
    return { "X-Api-Provider-Type": encodeURIComponent(e), "X-Api-Provider-Name": encodeURIComponent(a) };
  }
  getExternalHeaders(e) {
    return { "X-Api-Key": e };
  }
};
var Rn = class extends he {
  constructor(e, a) {
    super("permit.api.service");
    __publicField(this, "sentryCategoryPrefix", "approval.api.service");
    __publicField(this, "client");
    __publicField(this, "proxyClient");
    this.client = this.applyAxiosInterceptors(axios_default.create({ baseURL: e })), this.proxyClient = this.applyAxiosInterceptors(axios_default.create({ baseURL: a, withCredentials: true }));
  }
  async checkApproval(e, a, n, s, r) {
    const i = V(s);
    m({ level: "info", category: this.sentryCategoryPrefix + ".checkApproval", message: "Check approval", data: { address: e, token: a, chainId: i, amount: n } });
    let o;
    switch (r) {
      case "topup":
        o = "/v2/topup/approvecheck";
        break;
      case "order":
        o = "/v2/card/approvecheck";
        break;
      case "swap":
        o = "/v2/swap/approvecheck";
        break;
      default:
        return Ft(r, 'Unhandled "approvalFor" case. Unable to get url to call for approval check');
    }
    const p = (await this.client.post(o, { address: e, token: a, chainId: i, amount: n })).data.payload;
    return { approval: "ok", amount: p.amount, data: Wt(p.sig), timestamp: p.timestamp };
  }
  async checkAddress(e, a, n, s) {
    const r = V(s), i = (m({ level: "info", category: this.sentryCategoryPrefix + ".checkAddress", message: "Check address", data: { address: e, token: a, chainId: r, amount: n } }), (await this.client.post("/v2/topup/addresscheck", { address: e, token: a, chainId: r, amount: n })).data.payload);
    return { approval: "ok", amount: i.amount, data: Wt(i.sig), timestamp: i.timestamp };
  }
  async getCashbackParams(e, a, n, s) {
    return m({ level: "info", category: this.sentryCategoryPrefix + ".getCashbackParams", message: "Get cashback params", data: { amount: e, chainID: V(s) } }), (await this.proxyClient.post("/v2/private/card/cashback/claim", { amount: e, chainID: V(s) }, { headers: this.getAuthHeaders(a, n) })).data.payload;
  }
};
var In = class extends he {
  constructor(e, a, n = 300) {
    super("assets.service");
    __publicField(this, "baseURL");
    __publicField(this, "client");
    __publicField(this, "tokensCache", /* @__PURE__ */ new Map());
    __publicField(this, "tokenDataCache", /* @__PURE__ */ new Map());
    __publicField(this, "pricesCache", /* @__PURE__ */ new Map());
    __publicField(this, "cacheTTLSeconds");
    __publicField(this, "clientType");
    this.baseURL = e, this.client = this.applyAxiosInterceptors(axios_default.create({ baseURL: this.baseURL, headers: { "X-Api-Client-Type": a } })), this.cacheTTLSeconds = n, this.clientType = a;
  }
  async getTokenPrices(e) {
    const a = (0, import_dayjs.default)().unix(), { hit: n, miss: s } = e.reduce((i, o) => {
      const p = this.getTokenPriceCacheKey(o.address, o.network), d = this.pricesCache.get(p);
      return d === void 0 || d.expiresAt < a ? i.miss = i.miss.concat({ address: o.address, network: o.network }) : i.hit = i.hit.concat({ address: o.address, network: o.network, price: d.price }), i;
    }, { hit: new Array(), miss: new Array() });
    if (s.length === 0) return n;
    const r = (await this.client.post("prices/tokens/with-stable", { tokens: s })).data.payload.tokens;
    return r.forEach((i) => {
      const o = this.getTokenPriceCacheKey(i.address, i.network);
      this.pricesCache.set(o, { expiresAt: a + this.cacheTTLSeconds, price: i.price });
    }), n.concat(r);
  }
  async getTokenPricesForOnRamp(e) {
    return (await this.client.post("prices/tokens/for-on-ramp", { tokens: e })).data.payload.tokens;
  }
  async getTokenPricesExternal(e, a) {
    const n = (0, import_dayjs.default)().unix(), { hit: s, miss: r } = e.reduce((o, p) => {
      const d = this.getTokenPriceCacheKey(p.address, p.network), u = this.pricesCache.get(d);
      return u === void 0 || u.expiresAt < n ? o.miss = o.miss.concat({ address: p.address, network: p.network }) : o.hit = o.hit.concat({ address: p.address, network: p.network, price: u.price }), o;
    }, { hit: new Array(), miss: new Array() });
    if (r.length === 0) return s;
    const i = (await this.client.post("external/prices/tokens/with-stable", { tokens: e }, { headers: this.getExternalHeaders(a) })).data.payload.tokens;
    return i.forEach((o) => {
      const p = this.getTokenPriceCacheKey(o.address, o.network);
      this.pricesCache.set(p, { expiresAt: n + this.cacheTTLSeconds, price: o.price });
    }), s.concat(i);
  }
  async getSelectedTokenHistoryPrices(e) {
    const a = (0, import_dayjs.default)().unix(), { hit: n, miss: s } = e.reduce((i, o) => {
      const p = this.getHistoricalTokenPriceCacheKey(o.address, o.network, o.timestamp), d = this.pricesCache.get(p);
      return d === void 0 || d.expiresAt < a ? i.miss = i.miss.concat({ address: o.address, network: o.network, timestamp: o.timestamp }) : i.hit = i.hit.concat({ address: o.address, network: o.network, timestamp: o.timestamp, price: d.price }), i;
    }, { hit: new Array(), miss: new Array() });
    if (s.length === 0) return n;
    const r = (await this.client.post("/prices/v2/selected/history", { items: e })).data.payload;
    return r.forEach((i) => {
      const o = this.getHistoricalTokenPriceCacheKey(i.address, i.network, i.timestamp);
      this.pricesCache.set(o, { expiresAt: a + this.cacheTTLSeconds, price: i.price });
    }), n.concat(r);
  }
  async getMultiChainWalletTokens(e, a) {
    const n = (0, import_dayjs.default)().unix(), s = (await this.client.get("private/wallet/multichain/balances", { headers: this.getAuthHeaders(e, a) })).data.payload, r = s.tokens.map((i) => ({ name: i.token.name, decimals: i.token.decimals, symbol: i.token.symbol, address: i.token.address, iconURL: i.token.logoUrl, network: i.token.network, hasPermit: i.token.hasPermit, permitType: i.token.permitType, permitVersion: i.token.permitVersion, priceUSD: i.price, balance: i.balance, priceInEURForTopUp: i.priceInEURForTopUp, groupId: i.groupId, priceChange: i.priceChange }));
    return r.forEach((i) => {
      const o = this.getTokenPriceCacheKey(i.address, i.network);
      this.pricesCache.set(o, { expiresAt: n + this.cacheTTLSeconds, price: i.priceUSD });
    }), { tokens: r, totalBalance: s.totalBalance, totalPriceChange: s.totalPriceChange };
  }
  async getMultiChainWalletTokensExternal(e, a) {
    const n = (0, import_dayjs.default)().unix(), s = (await this.client.post("external/wallet/multichain/balances", { address: e }, { headers: this.getExternalHeaders(a) })).data.payload, r = s.tokens.map((i) => ({ name: i.token.name, decimals: i.token.decimals, symbol: i.token.symbol, address: i.token.address, iconURL: i.token.logoUrl, network: i.token.network, hasPermit: i.token.hasPermit, permitType: i.token.permitType, permitVersion: i.token.permitVersion, priceUSD: i.price, balance: i.balance, priceInEURForTopUp: i.priceInEURForTopUp, groupId: i.groupId, priceChange: i.priceChange }));
    return r.forEach((i) => {
      const o = this.getTokenPriceCacheKey(i.address, i.network);
      this.pricesCache.set(o, { expiresAt: n + this.cacheTTLSeconds, price: i.priceUSD });
    }), { tokens: r, totalBalance: s.totalBalance, totalPriceChange: s.totalPriceChange };
  }
  async getAllTokens(e) {
    const a = this.tokensCache.get(e);
    if (a !== void 0) return a;
    const n = await this.getAssetsList(e);
    return this.tokensCache.set(e, n), n;
  }
  async getTokenData(e, a) {
    const n = this.tokenDataCache.get(this.getTokenDataCacheKey(e, a));
    if (n !== void 0) return n;
    try {
      const s = (await this.client.get(`/token/${a}/` + e)).data.payload, r = { name: s.name, decimals: s.decimals, symbol: s.symbol, address: s.address, iconURL: s.logoUrl ?? "", network: s.network };
      return this.tokenDataCache.set(this.getTokenDataCacheKey(e, a), r), r;
    } catch (s) {
      return m({ level: "error", message: `failed get token data from "/token/${a}/${e}"`, category: this.sentryCategoryPrefix, data: { error: s } }), ta(s), { name: "", decimals: 18, symbol: "", address: e, iconURL: "", network: a };
    }
  }
  async getFullTokenDataWithPriceExternal(e, a, n) {
    const s = (0, import_dayjs.default)().unix(), r = (await this.client.get(`/external/token-with-price/${a}/` + e, { headers: this.getExternalHeaders(n) })).data.payload;
    return this.pricesCache.set(this.getTokenPriceCacheKey(r.address, r.network), { expiresAt: s + this.cacheTTLSeconds, price: r.price }), { name: r.name, decimals: r.decimals, symbol: r.symbol, address: r.address, iconURL: r.logoUrl, network: r.network, hasPermit: r.hasPermit, permitType: r.permitType, permitVersion: r.permitVersion, priceUSD: r.price };
  }
  async getPermitData(e, a) {
    try {
      const n = (await this.client.get(`/token/${a}/${e}/permit`)).data.payload;
      return { hasPermit: n.hasPermit, permitType: n.permitType, permitVersion: n.permitVersion };
    } catch (n) {
      return m({ level: "error", message: `failed get permit data from "/token/${a}/${e}/permit"`, category: this.sentryCategoryPrefix, data: { error: n } }), ta(n), { hasPermit: false };
    }
  }
  async getMultiWalletsBalancesSimple(e) {
    return (await this.client.post("/wallets/balances", { addresses: e })).data.payload;
  }
  async getAssetsList(e) {
    return (await this.client.get("tokens/" + e)).data.payload.map((a) => ({ name: a.name, decimals: a.decimals, symbol: a.symbol, address: a.address, iconURL: a.logoUrl ?? "", network: a.network }));
  }
  async findAssets(e) {
    return (await this.client.post("tokens/find", e)).data.payload.map((a) => ({ name: a.name, decimals: a.decimals, symbol: a.symbol, address: a.address, iconURL: a.logoUrl ?? "", network: a.network }));
  }
  getTokenDataCacheKey(e, a) {
    return a + "_" + e;
  }
  getTokenPriceCacheKey(e, a) {
    return a + "_" + e;
  }
  getHistoricalTokenPriceCacheKey(e, a, n) {
    return a + `_${e}@` + n;
  }
  async getAssetsByFilter(e, a, n, s, r) {
    const i = await this.client.post("/private/assets/network/by-filter", { network: s, filter: e }, { headers: this.getAuthHeaders(a, n), signal: r }), o = i.data.payload.assets.map((d) => ({ name: d.name, decimals: d.decimals, symbol: d.symbol, address: d.address, iconURL: d.logoUrl, network: d.network, hasPermit: d.hasPermit, permitType: d.permitType, permitVersion: d.permitVersion, priceUSD: d.priceUSD, priceChange: d.priceChange })), p = i.data.payload.popular.map((d) => ({ name: d.name, decimals: d.decimals, symbol: d.symbol, address: d.address, iconURL: d.logoUrl, network: d.network, hasPermit: d.hasPermit, permitType: d.permitType, permitVersion: d.permitVersion, priceUSD: d.priceUSD, priceChange: d.priceChange }));
    return { assets: o, popular: p };
  }
  async getTokenDetailedData(e, a, n, s) {
    return (await this.client.post("private/token/data", { network: e, address: a }, { headers: this.getAuthHeaders(n, s) })).data.payload;
  }
  async getTokenChart(e, a, n, s, r, i) {
    return (await this.client.post("private/token/data/chart", { type: n, network: e, address: a }, { headers: this.getAuthHeaders(s, r), signal: i })).data.payload.prices;
  }
  async getTokenPrice(e, a, n, s, r) {
    return (await this.client.post("private/token/price", { network: e, address: a }, { headers: this.getAuthHeaders(n, s), signal: r })).data.payload;
  }
  async getAllPopularTokens(e, a, n, s) {
    return { popular: (await this.client.post("/private/assets/popular/with-prices", { networks: e }, { headers: this.getAuthHeaders(a, n), signal: s })).data.payload.popular.map((o) => ({ name: o.name, decimals: o.decimals, symbol: o.symbol, address: o.address, iconURL: o.logoUrl, network: o.network, hasPermit: o.hasPermit, permitType: o.permitType, permitVersion: o.permitVersion, priceUSD: o.priceUSD, priceChange: o.priceChange })) };
  }
};
var Un = class extends he {
  constructor(e) {
    super("audit.api.service");
    __publicField(this, "client");
    __publicField(this, "externalClient");
    this.client = this.applyAxiosInterceptors(axios_default.create({ baseURL: e, withCredentials: true })), this.externalClient = this.applyAxiosInterceptors(axios_default.create({ baseURL: e }));
  }
  async sendAuditEvent(e, a, n, s) {
    await this.client.post("/v2/private/audit/tx", { id: s, ...e }, { headers: this.getAuthHeaders(a, n) });
  }
  async sendTxCallDataAuditEvent(e, a, n, s) {
    await this.client.post("/v2/private/audit/txcall", { id: s, ...e }, { headers: this.getAuthHeaders(a, n) });
  }
  async sendAuditEventExternal(e, a, n, s) {
    await this.externalClient.post(`/v2/external/audit/${a}/tx`, { id: s, ...e }, { headers: this.getExternalHeaders(n) });
  }
  async sendTxCallDataAuditEventExternal(e, a, n, s) {
    await this.externalClient.post(`/v2/external/audit/${a}/txcall`, { id: s, ...e }, { headers: this.getExternalHeaders(n) });
  }
  async sendClientAuditEvent(e, a, n, s) {
    await this.client.post("/v2/private/audit/event", { actionName: e, payload: a }, { headers: this.getAuthHeaders(n, s) });
  }
};
var Dn = class extends he {
  constructor(e) {
    super("estimation.api.service");
    __publicField(this, "baseURL");
    __publicField(this, "client");
    this.baseURL = e, this.client = this.applyAxiosInterceptors(axios_default.create({ baseURL: this.baseURL }));
  }
  async getTopUpEstimation(e) {
    return { priceInWei: (await this.client.get(`/estimation/${e}/topup`)).data.payload.priceEstimation };
  }
  async getTopUpEstimationExternal(e, a) {
    return { priceInWei: (await this.client.get(`/estimation/${e}/topup`, { headers: this.getExternalHeaders(a) })).data.payload.priceEstimation };
  }
};
function M(t, e) {
  if (!t) throw new c("Assertion failed", { cause: typeof e != "string" ? e : new c(e) });
}
function se(t) {
  return typeof t == "bigint" ? new bignumber_default(t.toString(10), 10) : t instanceof bignumber_default ? t : bignumber_default(t);
}
var Et = (t, e) => se(t).times(se(e)).toFixed();
var Nn = (t, e) => t || e ? se(t).dividedBy(se(e)).toFixed() : "0";
var xa = (t, e) => se(t).gt(se(e));
var Bt = (t) => se(t).isZero();
var Ht = (t, e) => se(t).times(se(10).pow(e)).toFixed();
var Mn = (t, e) => se(t).dividedBy(se(10).pow(e)).toFixed();
var Ea = ((t) => (t.PasswordCheck = "passcode-check", t.CardDetails = "card-data", t.PreviousCardTransactions = "card-transaction", t.AccountPIN = "account-pin", t.BankTransfer = "bank-transfer", t.OnRamp = "onramp", t.Gasless = "gasless", t.AuthRequestOnRamp = "auth-request-onramp", t))(Ea || {});
var _bt = class _bt extends G {
  constructor(e, { cause: a, payload: n } = {}) {
    super("Strong customer authentication is required", _bt.ErrorCode, { cause: a, payload: { ...n, scope: e } });
    __publicField(this, "name", "SCARequiredError");
  }
};
__publicField(_bt, "ErrorCode", "NEED_SESSION_SCOPE");
var bt = _bt;
var On = (t) => t.shortMessage === bt.ErrorCode;
var _n = class extends he {
  constructor(e) {
    super("on-ramp.api.service");
    __publicField(this, "client");
    this.client = this.applyAxiosInterceptors(axios_default.create({ baseURL: e }));
  }
  getAvailableNetworks() {
    return Kt().filter((e) => Ca(e) !== void 0);
  }
  async estimate({ address: e, confirmationSignature: a, fiatAmount: n, tokenAmount: s, token: r, abortSignal: i, beneficiaryAddress: o }) {
    const p = ue(r.network), d = (M(p !== void 0, "No network info for network " + r.network), W(r.address, r.network)), u = { chainId: p.chainId, token: d, amountEUR: n, amountToken: s, beneficiaryAddress: o }, y = (m({ level: "debug", message: "Getting estimation", data: u }), await this.client.post("/v2/private/buycrypto/estimate", u, { headers: this.getAuthHeaders(e, a), withCredentials: true, signal: i }));
    return M(y.data !== void 0 && y.data.payload !== void 0, "No data returned, yet status code is " + y.status), m({ level: "debug", message: "Estimated on-ramp tx", data: y.data.payload }), M(y.data.payload.feeEUR !== void 0, "No fee returned"), { feeAmount: y.data.payload.feeEUR, expectedAmountTokens: Mn(y.data.payload.expectedAmount, r.decimals) };
  }
  async execute({ address: e, tokenAmount: a, token: n, fiatAmount: s, feeAmount: r, confirmationSignature: i, abortSignal: o, beneficiaryAddress: p, actionMessage: d }) {
    const u = ue(n.network), y = (M(u !== void 0, "No network info for network " + n.network), W(n.address, n.network)), g = { chainId: u.chainId, token: y, amountEUR: s, amountToken: a, feeEUR: r, beneficiaryAddress: p, msg: d };
    m({ level: "debug", message: "Executing on-ramp tx", data: g });
    let l;
    try {
      l = await this.client.post("/v2/private/buycrypto/execute", g, { headers: this.getAuthHeaders(e, i), withCredentials: true, signal: o });
    } catch (T) {
      throw T instanceof G && On(T) ? new bt(Ea.OnRamp, { cause: T }) : T;
    }
    return M(l.data !== void 0 && l.data.payload !== void 0, "No data returned, yet status code is " + l.status), m({ level: "debug", message: "Execution is planned", data: l.data.payload }), M(l.data.payload.HHTXID !== void 0, "No tx id returned"), { id: l.data.payload.HHTXID };
  }
  async requestExecute({ address: e, token: a, fiatAmount: n, apiKey: s, abortSignal: r }) {
    const i = ue(a.network), o = (M(i !== void 0, "No network info for network " + a.network), W(a.address, a.network)), p = this.formatActionSignatureMessageV2({ address: e, token: a, fiatAmount: n, amountType: "FIAT" }), d = { chainId: i.chainId, token: o, amountEUR: n, amountToken: "", feeEUR: "", beneficiaryAddress: e, msg: p }, u = (m({ level: "debug", message: "Requesting on-ramp tx", data: d }), await this.client.post("/v2/external/buycrypto/request", d, { headers: this.getExternalHeaders(s), signal: r }));
    return M(u.data !== void 0 && u.data.payload !== void 0, "No data returned, yet status code is " + u.status), m({ level: "debug", message: "Execution is requested", data: u.data.payload }), M(u.data.payload.requestUid !== void 0, "No request id returned"), M(u.data.payload.feeEUR !== void 0, "No fee (network fee) amount returned"), M(u.data.payload.expectedAmount !== void 0, "No expected amount returned"), { amountEUR: n, amountToken: u.data.payload.expectedAmount, beneficiaryAddress: e, chainId: i.chainId, feeEUR: u.data.payload.feeEUR, token: a, requestUid: u.data.payload.requestUid };
  }
  async requestStatus({ requestUid: e, apiKey: a, abortSignal: n }) {
    const s = { requestUid: e }, r = await this.client.post("/v2/external/buycrypto/status", s, { headers: this.getExternalHeaders(a), signal: n });
    return M(r.data !== void 0 && r.data.payload !== void 0, "No data returned, yet status code is " + r.status), m({ level: "debug", message: "Request status received", data: r.data.payload }), M(r.data.payload.status !== void 0, "No status id returned"), r.data.payload.status === "failed" ? (M(r.data.payload.reason !== void 0, "No reason returned"), { status: r.data.payload.status, reason: r.data.payload.reason }) : { status: r.data.payload.status };
  }
  formatActionSignatureMessage(e) {
    const a = ue(e.token.network), n = (M(a !== void 0, "No network info for network " + e.token.network), W(e.token.address, e.token.network)), s = e.amountType;
    switch (s) {
      case "TOKEN":
        return `ON BEHALF ${e.accountUid} BUY ${n} CHAIN ${a.chainId} AMOUNT TOKEN ` + e.tokenAmount;
      case "FIAT":
        return `ON BEHALF ${e.accountUid} BUY ${n} CHAIN ${a.chainId} AMOUNT EUR ` + e.fiatAmount;
      default:
        return Ft(s, "Unknown amount type: " + s);
    }
  }
  formatActionSignatureMessageV2(e) {
    const a = ue(e.token.network), n = (M(a !== void 0, "No network info for network " + e.token.network), W(e.token.address, e.token.network)), s = e.amountType;
    switch (s) {
      case "TOKEN":
        return `ON BEHALF ADDRESS ${e.address} BUY ${n} CHAIN ${a.chainId} AMOUNT TOKEN ` + e.tokenAmount;
      case "FIAT":
        return `ON BEHALF ADDRESS ${e.address} BUY ${n} CHAIN ${a.chainId} AMOUNT EUR ` + e.fiatAmount;
      default:
        return Ft(s, "Unknown amount type: " + s);
    }
  }
};
var Fn = class extends he {
  constructor(e) {
    super("settings.api.service");
    __publicField(this, "client");
    __publicField(this, "externalClient");
    this.client = this.applyAxiosInterceptors(axios_default.create({ baseURL: e, withCredentials: true })), this.externalClient = this.applyAxiosInterceptors(axios_default.create({ baseURL: e }));
  }
  async getUserSettings(e, a) {
    return (await this.client.get("/v2/private/settings/all", { headers: this.getAuthHeaders(e, a) })).data.payload;
  }
  async getClientConfig(e) {
    return this.client.get("/v2/public/client/references", { params: { clientType: e } }).then((a) => a.data.payload);
  }
  async getClientConfigExternal(e, a) {
    return this.externalClient.get("/v2/external/client/references", { params: { clientType: e }, headers: this.getExternalHeaders(a) }).then((n) => n.data.payload);
  }
  async getReferencesConfig() {
    return this.client.get("/v2/public/client/references").then((e) => e.data.payload.references.networks);
  }
  async getApiVersion() {
    return (await this.client.get("/v2/public/version")).data.payload;
  }
  async getServerSettings(e, a) {
    return (await this.client.get("/v2/public/settings/server", { headers: this.getAuthHeaders(e, a) })).data.payload.serverSettings;
  }
  async getServerSettingsExternal(e) {
    return (await this.externalClient.get("/v2/external/settings/server", { headers: this.getExternalHeaders(e) })).data.payload;
  }
  async setAllowPushAccountTransactions(e, a, n) {
    return await this.client.post("/v2/private/settings/account/allow-tx-pushes", { value: e }, { headers: this.getAuthHeaders(a, n) }), e;
  }
  async setAllowCrashData(e, a, n) {
    return await this.client.post("/v2/private/settings/account/allow-crash-data", { value: e }, { headers: this.getAuthHeaders(a, n) }), e;
  }
  async setAccountLanguage(e, a, n) {
    return await this.client.post("/v2/private/settings/account/language", { value: e }, { headers: this.getAuthHeaders(a, n) }), e;
  }
  async setAccountEmojiSkin(e, a, n) {
    return await this.client.post("/v2/private/settings/account/emoji-skin", { value: e }, { headers: this.getAuthHeaders(a, n) }), e;
  }
  async setAllowPushAddressTransactions(e, a, n) {
    return await this.client.post("/v2/private/settings/address/allow-tx-pushes", { value: e }, { headers: this.getAuthHeaders(a, n) }), e;
  }
  async setAllowPushCashbackEarnings(e, a, n) {
    return await this.client.post("/v2/private/settings/account/allow-daily-cashback-push", { value: e }, { headers: this.getAuthHeaders(a, n) }), e;
  }
  async setAllowIncomingSendToFriend(e, a, n) {
    return await this.client.post("/v2/private/settings/account/allow-incoming-send-to-friend", { value: e }, { headers: this.getAuthHeaders(a, n) }), e;
  }
  async setAllowSupportChatNotifications(e, a, n) {
    return await this.client.post("/v2/private/settings/account/allow-chat-pushes", { value: e }, { headers: this.getAuthHeaders(a, n) }), e;
  }
  async registerPushHandler(e, a, n) {
    await this.client.post("/v2/private/settings/register-push-handler", { playerId: e }, { headers: this.getAuthHeaders(a, n) });
  }
};
var Wn = class extends he {
  constructor(e) {
    super("swap.api.service");
    __publicField(this, "baseURL");
    __publicField(this, "client");
    this.baseURL = e, this.client = this.applyAxiosInterceptors(axios_default.create({ baseURL: this.baseURL }));
  }
  async convertTokenToEURForTopUpExternal(e, a, n, s, r, i, o, p, d) {
    const u = W(e, p), y = W(n, p);
    return (await this.client.post("/external/convert/token", { toToken: { address: u, decimals: a }, fromToken: { address: y, decimals: s }, tokenAmount: r, fromAddress: i, destReceived: o, network: p }, { headers: this.getExternalHeaders(d) })).data.payload;
  }
  async convertEURToTokenForTopUpExternal(e, a, n, s, r, i, o, p, d) {
    const u = W(e, p), y = W(n, p);
    return (await this.client.post("/external/convert/eur", { toToken: { address: u, decimals: a }, fromToken: { address: y, decimals: s }, eurAmount: r, fromAddress: i, destReceived: o, network: p }, { headers: this.getExternalHeaders(d) })).data.payload;
  }
  async convertTokenToEURForOnRampExternal({ token: e, tokenAmount: a, apiKey: n }) {
    const s = { fromToken: e, tokenAmount: a, network: e.network }, r = await this.client.post("/external/convert/onramp/token", s, { headers: this.getExternalHeaders(n) });
    return M(r.data.payload.EURAmount !== void 0, "No eur amount returned"), { fiatAmount: r.data.payload.EURAmount };
  }
  async convertEURToTokenForOnRampExternal({ token: e, fiatAmount: a, apiKey: n }) {
    const s = { fromToken: e, EURAmount: a, network: e.network }, r = await this.client.post("/external/convert/onramp/eur", s, { headers: this.getExternalHeaders(n) });
    return M(r.data.payload.tokenAmount !== void 0, "No token amount returned"), { tokenAmount: r.data.payload.tokenAmount };
  }
};
var we = (t, e) => !!e(t) || typeof t == "object" && t !== null && "cause" in t && we(t.cause, e);
var Tt = (t) => {
  if (!(t instanceof Object)) return false;
  const e = t;
  return e.message !== void 0 && e.code !== void 0;
};
var Bn = (t) => {
  if (Tt(t)) try {
    const e = JSON.parse(t.message);
    if (Tt(e)) return e;
  } catch {
  }
};
var na = (t) => {
  let e;
  if (typeof t == "string") e = t;
  else if (t instanceof Error) e = t.message;
  else try {
    e = JSON.stringify(t);
  } catch {
    e = String(t);
  }
  if (/user (?:disapproved|rejected)/i.test(e) || /reject/i.test(e) || /cancelled/i.test(e)) return true;
  switch (e) {
    case "Failed or Rejected Request":
    case "Reject by the user":
    case "Rejected by User":
    case "signature denied":
    case "Rejected by user":
    case "Ambire user rejected the request":
    case "Request rejected":
    case "Request Rejected":
    case "User cancelled the request":
    case "User action":
    case "MetaMask Personal Message Signature: User denied message signature.":
    case "User canceled":
    case "User signature failure":
      return true;
  }
  return false;
};
var ne = (t) => {
  if (t instanceof H) switch (t.getCode()) {
    case "userRejectAuth":
    case "userRejectTransaction":
    case "userRejectNetworkChange":
    case "userRejectOwnershipSignature":
    case "userRejectSign":
      return true;
  }
  if (t instanceof UserRejectedRequestError) return true;
  if (Tt(t)) {
    switch (t.code) {
      case 4001:
      case -32003:
      case 4100:
      case 5e3:
      case 5001:
      case 5002:
      case 5003:
        return true;
    }
    if (na(t.message)) return true;
    const e = Bn(t);
    if (e !== void 0 && ne(e) || t.code === 0 && t.message.trim() === "") return true;
  }
  return t instanceof Error && ne(t == null ? void 0 : t.cause) || na(t);
};
var Hn = (t) => we(t, (e) => {
  if (e instanceof ChainMismatchError) return true;
  const a = /the current chain of the wallet \(.*?\) does not match the target chain for the transaction/i;
  return !(typeof e != "string" || !a.test(e)) || !!(Tt(e) || e instanceof Error) && a.test(e.message);
});
var B = (t, e = "userRejectTransaction") => {
  if (ne(t)) throw new H(e, { cause: t });
};
var nt = (t, e = "userRejectTransaction") => {
  if (t === "null" || t === null) throw new H(e, { cause: new c("Assertion failed: received nullish value: " + t, { payload: { value: t } }) });
};
var ye = (t) => {
  if (Hn(t)) throw new H("wrongWalletChain", { cause: t });
};
function ee(t) {
  return t instanceof ContractFunctionRevertedError ? { reason: t.reason ?? "unknown reason", signature: t.signature } : t instanceof ExecutionRevertedError ? { reason: t.message } : t instanceof Error && t.cause !== void 0 ? ee(t.cause) : void 0;
}
var Sa = (t) => {
  const { r: e, s: a } = secp256k1.Signature.fromCompact(t.slice(2, 130)), n = BigInt("0x" + t.slice(130));
  return { r: numberToHex(e, { size: 32 }), s: numberToHex(a, { size: 32 }), v: n };
};
var qe = (t) => {
  if (nt(t, "userRejectSign"), isErc6492Signature(t) || 132 < t.length) return t;
  const { r: e, s: a, v: n } = Sa(t);
  return n === 0n || n === 1n ? serializeSignature({ r: e, s: a, v: n + 27n }) : t;
};
var $ = ((t) => (t.AddressNotFound = "NOT_FOUND", t.TagNotFound = "NOT_FOUND", t.TagNotResolved = "NOT FOUND", t.TagAlreadyInUse = "CONFLICT", t.TagValidationLengthTooBig = "LENGTH_TOO_BIG", t.TagValidationLengthTooSmall = "LENGTH_TOO_SMALL", t.TagValidationContainsInvalidCharacters = "CONTAINS_INVALID_CHARACTERS", t.TagValidationContainsRudeWord = "CONTAINS_RUDE_WORD", t.WrongCode = "WRONG_CODE", t.AlreadyHasCard = "ALREADY_HAS_A_CARD", t.NoCard = "NO_CARD", t))($ || {});
var Ln = class extends he {
  constructor(e) {
    super("tag.api.service");
    __publicField(this, "baseURL");
    __publicField(this, "client");
    __publicField(this, "externalClient");
    this.baseURL = e, this.client = this.applyAxiosInterceptors(axios_default.create({ baseURL: this.baseURL, withCredentials: true })), this.externalClient = this.applyAxiosInterceptors(axios_default.create({ baseURL: this.baseURL }));
  }
  async setAvatar(e, a, n, s, r) {
    const i = new FormData();
    i.append("image", a, n);
    try {
      return (await this.client.post("/v2/private/avatar", i, { headers: { "Content-Type": "multipart/form-data", ...this.getAuthHeaders(s, r) } })).data.payload.publicLink;
    } catch (o) {
      throw m({ level: "error", message: "Failed to upload avatar", data: { error: o, tag: e, address: s, confirmationSignature: r } }), o;
    }
  }
  async setInviteTag(e, a, n) {
    try {
      await this.client.post("/v2/private/referral/set", { tag: e }, { headers: this.getAuthHeaders(a, n) });
    } catch (s) {
      throw m({ level: "error", message: "Failed to set invite tag", data: { error: s, tag: e, address: a, confirmationSignature: n } }), s;
    }
  }
  async getTagTopUpCodeExternal(e, a) {
    const n = { tag: e };
    return (await this.externalClient.post("/v2/external/tag-code-for-topup", n, { headers: this.getExternalHeaders(a) })).data.payload.topupHash;
  }
  async checkTagAvailability(e) {
    try {
      return await this.client.get(`/v2/public/tag/${e}/available`), "AVAILABLE";
    } catch (a) {
      if (a instanceof G) {
        if (a.shortMessage === $.TagAlreadyInUse) return "ALREADY_IN_USE";
        if ([$.TagValidationLengthTooBig, $.TagValidationLengthTooSmall, $.TagValidationContainsInvalidCharacters, $.TagValidationContainsRudeWord].find((n) => n === a.shortMessage) !== void 0) return "INVALID";
        throw new c("API Error handled during `checkTagAvailability`", { cause: a });
      }
      throw m({ level: "error", category: this.sentryCategoryPrefix, message: "Unexpected API Error handled during `checkTagAvailability`", data: { error: a } }), new c("Unexpected API Error handled during `checkTagAvailability`", { cause: a });
    }
  }
  async reserveTag(e, a, n, s, r) {
    const i = { name: a, address: e, timestamp: (0, import_dayjs.default)().unix() };
    let o = "";
    try {
      o = await s(i), r == null ? void 0 : r();
    } catch (d) {
      throw B(d, "userRejectSign"), m({ level: "error", message: "error during signing tag", data: { currentAddress: e, error: d } }), new c("Can't reserve tag due to sign error", { cause: d });
    }
    const p = { data: i, meta: { address: e, sig: o } };
    return (await this.client.post("/v2/private/tag", p, { headers: this.getAuthHeaders(e, n) })).data.payload;
  }
  async lookupTag(e, a) {
    try {
      return (await this.client.get("/v2/private/tag", { headers: this.getAuthHeaders(e, a) })).data.payload;
    } catch (n) {
      if (!(n instanceof G && n.shortMessage === $.TagNotFound)) throw n;
    }
  }
  async getApprovedWallets(e, a) {
    try {
      return await this.client.get("/v2/private/approved/addresses", { headers: this.getAuthHeaders(e, a) }).then((n) => n.data.payload);
    } catch (n) {
      throw n instanceof G && $.NoCard === n.shortMessage ? new K(J.NoCardFromTagService, { cause: n }) : n;
    }
  }
  async getIncomingControlEvent(e, a) {
    return this.client.get("/v2/private/approved/addresses/request", { headers: this.getAuthHeaders(e, a) }).then((n) => n.data.payload);
  }
  async approveIncomingControlEvent(e, a, n, s) {
    const r = { requestUID: e, code: a };
    try {
      await this.client.post("/v2/private/approved/addresses/request/approve", r, { headers: this.getAuthHeaders(n, s) });
    } catch (i) {
      throw i instanceof G && $.WrongCode === i.shortMessage ? new H("wrongCode", { cause: i }) : i;
    }
  }
  async declineIncomingControlEvent(e, a, n) {
    const s = { requestUID: e };
    await this.client.post("/v2/private/approved/addresses/request/reject", s, { headers: this.getAuthHeaders(a, n) });
  }
  async addTopupWallet(e, a, n, s) {
    const r = (0, import_dayjs.default)().unix(), i = `I confirm the affiliation and or ownership of the ${e} address. Top up requests from the above mentioned wallet can proceed automatically without additional authorization. ` + r;
    let o = "";
    try {
      o = qe(await s(i));
    } catch (p) {
      throw B(p, "userRejectSign"), m({ level: "error", message: "error during signing topup wallet additional message", data: { approvedWalletAddress: e, timestamp: r, currentAddress: a, error: p } }), new c("Failed to add topup wallet", { cause: p, payload: { msgToSign: i } });
    }
    return await this.client.post("/v2/private/approved/addresses/topup", { address: e, timestamp: r, sig: o }, { headers: this.getAuthHeaders(a, n) }), { timestamp: r };
  }
  async addControlWallet(e, a, n, s) {
    const r = (0, import_dayjs.default)().unix(), i = `I confirm the affiliation and or ownership of the ${e} address. I would like to add my card access to the above mentioned wallet address. ` + r;
    let o = "";
    try {
      o = qe(await s(i));
    } catch (p) {
      throw B(p, "userRejectSign"), m({ type: "error", message: "error during signing control wallet additional message", data: { controlWalletAddress: e, timestamp: r, currentAddress: a, error: p } }), new c("Failed to add control wallet", { cause: p, payload: { msgToSign: i } });
    }
    try {
      return (await this.client.post("/v2/private/approved/addresses/control", { address: e, timestamp: r, sig: o }, { headers: this.getAuthHeaders(a, n) })).data.payload.code;
    } catch (p) {
      throw p instanceof G && $.AlreadyHasCard === p.shortMessage ? new H("walletAlreadyHasCard", { cause: p }) : p;
    }
  }
  async deleteWallet(e, a, n, s) {
    const r = (0, import_dayjs.default)().unix(), i = { subject: "remove_card_approved_wallet", address: e, timestamp: r };
    let o = "";
    try {
      o = qe(await s(i));
    } catch (p) {
      throw B(p, "userRejectSign"), m({ level: "error", message: "error during signing approve wallet removal message", data: { approvedWalletAddress: e, timestamp: r, currentAddress: a, error: p } }), new c("Failed to delete approved wallet", { cause: p, payload: i });
    }
    await this.client.delete("/v2/private/approved/address", { data: { data: i, meta: { sig: o } }, headers: this.getAuthHeaders(a, n) });
  }
  async getTagPublicDataForTopUp(e, a, n, s) {
    try {
      const r = (await this.client.get(`/v2/private/tag/${encodeURIComponent(e)}/topups`, { signal: s, headers: this.getAuthHeaders(a, n) })).data.payload;
      return { found: true, avatarSrc: r.avatar, topUpSent: r.amount, tag: r.tagName };
    } catch (r) {
      if (r instanceof G && ($.TagNotFound === r.shortMessage || $.TagNotResolved === r.shortMessage)) return { found: false, topUpSent: 0 };
      throw r;
    }
  }
  async getTagDataForTopUpExternal(e, a, n) {
    try {
      const s = (await this.externalClient.post("/v2/external/tag-for-topup", { tag: e }, { headers: this.getExternalHeaders(a), signal: n })).data.payload;
      return { found: true, avatarSrc: s.avatarSrc, tag: s.tagName };
    } catch (s) {
      if (s instanceof G && ($.TagNotFound === s.shortMessage || $.TagNotResolved === s.shortMessage)) return { found: false };
      throw s;
    }
  }
  async getPreviousTopUps(e, a, n) {
    return (await this.client.get("/v2/private/topup/previous", { signal: n, headers: this.getAuthHeaders(e, a) })).data.payload.map((r) => ({ tag: r.tagName, avatarSrc: r.avatar, topUpSent: r.amount }));
  }
  async resolveTag(e, a) {
    try {
      return { found: true, avatarSrc: (await this.client.get("/v2/public/tag/" + encodeURIComponent(e), { signal: a })).data.payload.avatarSrc };
    } catch (n) {
      if (n instanceof G && ($.TagNotFound === n.shortMessage || $.TagNotResolved === n.shortMessage)) return { found: false };
      throw n;
    }
  }
  async getTagsAmount() {
    return (await this.client.get("/v2/public/tags")).data.payload;
  }
  async getConfirmationCount() {
    return (await this.client.get("/v2/public/confirmation/count")).data.payload;
  }
  async validateAddressExternal(e, a, n) {
    try {
      return (await this.externalClient.post("/v2/external/address/validate", { address: e }, { headers: this.getExternalHeaders(a), signal: n })).data.payload;
    } catch (s) {
      if (s instanceof G && $.AddressNotFound === s.shortMessage) return { isOnRampAllowed: false, isTopupAllowed: false };
      throw s;
    }
  }
};
var je = class extends c {
  constructor(e, a) {
    super(`Feature "${e}" is not supported in current network`, { payload: { featureName: e, network: a } });
    __publicField(this, "name", "NetworkFeatureNotSupportedError");
    this.featureName = e, this.network = a;
  }
  getFeatureName() {
    return this.featureName;
  }
  getNetwork() {
    return this.network;
  }
};
var Pa = class extends ka {
  constructor(e, a) {
    super(a);
    __publicField(this, "network");
    this.network = e;
  }
};
var Se = ((t) => (t[t.BadRequest = 400] = "BadRequest", t[t.NotFound = 404] = "NotFound", t[t.TooManyRequests = 429] = "TooManyRequests", t[t.InternalServerError = 500] = "InternalServerError", t[t.NotImplemented = 501] = "NotImplemented", t[t.TooManyOpenConnections = 503] = "TooManyOpenConnections", t[t.ServiceUnavailable = 503] = "ServiceUnavailable", t))(Se || {});
var Lt = ((t) => (t.InsufficientLiquidity = "insufficient liquidity", t.UnsupportedToken = "cannot sync", t))(Lt || {});
var Vt = (t) => Object.entries(t).reduce((a, [n, s]) => (s === void 0 || typeof s == "object" && Array.isArray(s) && s.length === 0 || a.append(n, s.toString()), a), new URLSearchParams()).toString();
var Ra = ((t) => (t[t.ValidationFailed = 100] = "ValidationFailed", t[t.MalformedJSON = 101] = "MalformedJSON", t[t.OrderSubmissionDisabled = 102] = "OrderSubmissionDisabled", t[t.Throttled = 103] = "Throttled", t[t.NotImplemented = 104] = "NotImplemented", t[t.TransactionInvalid = 105] = "TransactionInvalid", t))(Ra || {});
var Ia = ((t) => (t.InsufficientAssetLiquidity = "INSUFFICIENT_ASSET_LIQUIDITY", t))(Ia || {});
var _Ie = class _Ie extends he {
  constructor({ baseURL: e, network: a }) {
    super("swapper0.api.service");
    __publicField(this, "client");
    __publicField(this, "network");
    this.network = a, this.client = this.applyAxiosInterceptors(axios_default.create({ baseURL: e, paramsSerializer: Vt, headers: { Accept: "application/json" }, validateStatus: (n) => n === 200 }));
  }
  canHandle(e) {
    return _Ie.validNetworks.includes(e);
  }
  canHandleToken(e, a) {
    return _Ie.validNetworks.includes(e);
  }
  async getTransferData(e, a, n, s, r) {
    const i = await this.getSwapQuote(e, a, { buyToken: W(n, this.network), sellToken: W(s, this.network), sellAmount: r });
    return this.mapSwapQuote(i);
  }
  async getQuoteData(e, a, n, s, r) {
    return this.getTransferData(e, a, n, s, r);
  }
  async getSwapQuote(e, a, n) {
    if (_Ie.ensureNetworkIsSupported(this.network)) return (await this.client.get("/swap/" + this.network, { params: n, headers: this.getAuthHeaders(e, a) })).data;
    throw new je("Swapper0 swaps", this.network);
  }
  mapSwapQuote(e) {
    const a = e.sources.find((n) => xa(n.proportion, 0)) ?? { name: "" };
    return { allowanceTarget: e.allowanceTarget, buyAmount: e.buyAmount, data: e.data, sellAmount: e.sellAmount, to: e.to, value: e.value, swappingVia: a.name, rawResponse: JSON.stringify({ ...e, swapperName: this.getName() }) };
  }
  formatError(e) {
    if (axios_default.isAxiosError(e)) {
      if (e.response !== void 0) throw e.response.data === void 0 ? (m({ level: "debug", message: "API responded with an error: no payload", category: this.sentryCategoryPrefix, data: { method: e.config.method, requestUri: axios_default.getUri(e.config), statusCode: e.status, statusMessage: e.message, axiosCode: e.code } }), new c(e.message, { cause: e })) : e.response.status === Se.BadRequest ? this.formatBadRequestResponse(e.response) : (m({ level: "debug", message: "API responded with an error", category: this.sentryCategoryPrefix, data: { method: e.config.method, requestUri: axios_default.getUri(e.config), statusCode: e.status, statusMessage: e.message, axiosCode: e.code, payload: e.response.data } }), new c(e.message, { cause: e, payload: e.response.data ?? {} }));
      if (e.request !== void 0) throw m({ level: "debug", message: "API responded with an error: no response received", category: this.sentryCategoryPrefix, data: { method: e.config.method, requestUri: axios_default.getUri(e.config), statusCode: e.status, statusMessage: e.message, axiosCode: e.code, requestData: e.config.data } }), new c("The request has failed, no response", { cause: e });
    }
    throw e instanceof Error ? new c("The request has failed", { cause: e }) : new c("The request has failed during setup / result handling", { cause: e });
  }
  applyAxiosInterceptors(e) {
    return e.interceptors.response.use(void 0, this.formatError.bind(this)), e;
  }
  formatBadRequestResponse(e) {
    var _a2, _b;
    if (m({ level: "debug", category: this.sentryCategoryPrefix, message: `Request failed with code ${e.status} (${e.statusText}): ` + e.data.reason, data: { method: e.config.method, requestUri: axios_default.getUri(e.config), statusCode: e.status, statusMessage: e.statusText, reason: e.data.reason, code: e.data.code, validationErrors: e.data.validationErrors } }), e.data.code !== Ra.ValidationFailed) throw new c(e.data.reason, { cause: e.data });
    {
      if ((_a2 = e.data.validationErrors) == null ? void 0 : _a2.some((n) => n.reason === Ia.InsufficientAssetLiquidity)) throw new H("swapInsufficientLiquidity");
      const a = ((_b = e.data.validationErrors) == null ? void 0 : _b[0].reason) ?? e.data.reason;
      throw new c(a, { cause: e.data });
    }
  }
  static ensureNetworkIsSupported(e) {
    return e !== void 0 && _Ie.validNetworks.includes(e);
  }
  getName() {
    return "Swapper0APIService";
  }
};
__publicField(_Ie, "validNetworks", [N.ethereum, N.polygon, N.avalanche, N.arbitrum, N.optimism, N.bsc]);
var Ie = _Ie;
var st = (t) => t.flatMap((e) => Array.isArray(e) ? st(e) : e);
var _rt = class _rt extends Pa {
  constructor({ baseURL: e, network: a }) {
    super(a, "swapper1.api.service");
    __publicField(this, "client");
    this.client = this.applyAxiosInterceptors(axios_default.create({ baseURL: e, headers: { Accept: "application/json" }, paramsSerializer: Vt, validateStatus: (n) => n === 200 }));
  }
  canHandle(e) {
    return _rt.supportedNetworks.includes(e);
  }
  canHandleToken(e, a) {
    return _rt.supportedNetworks.includes(e);
  }
  applyAxiosInterceptors(e) {
    return e.interceptors.response.use(void 0, this.formatError.bind(this)), e;
  }
  async getTransferData(e, a, n, s, r, i) {
    const o = await this.getSwapData({ toTokenAddress: n, fromTokenAddress: s, amount: r, fromAddress: i, destReceived: i, disableEstimate: true });
    let p = "Swapper1";
    try {
      const d = st(o.protocols), u = Math.max(...d.map((g) => g.part)), y = d.find((g) => g.part === u);
      y !== void 0 && (p = y.name.replaceAll("_", " "));
    } catch (d) {
      m({ level: "warning", category: this.sentryCategoryPrefix, message: 'Failed to format "swappingVia"', data: { error: d } });
    }
    return m({ level: "info", data: o, message: "Swapper1 returned" }), m({ level: "info", data: { liquidityProviders: JSON.stringify(st(o.protocols ?? [])) }, message: "Protocols" }), { buyAmount: o.toTokenAmount, data: o.tx.data, swappingVia: p, value: o.tx.value, sellAmount: o.fromTokenAmount, allowanceTarget: o.tx.to, to: o.tx.to, rawResponse: JSON.stringify({ ...o, swapperName: this.getName() }) };
  }
  async getSwapData(e) {
    if (!this.ensureNetworkIsSupported(this.network)) throw new je("Swapper1 Swaps", this.network);
    if (Bt(e.amount) || e.amount === "") throw new c("empty amount request prevented");
    const a = W(e.fromTokenAddress, this.network), n = W(e.toTokenAddress, this.network);
    return (await this.client.get("/swap/" + this.network, { params: { ...e, fromTokenAddress: a, toTokenAddress: n } })).data;
  }
  async getQuoteData(e, a, n, s, r) {
    if (!this.ensureNetworkIsSupported(this.network)) throw new je("Swapper1 Swaps", this.network);
    if (Bt(r) || r === "") throw new c("empty amount request prevented");
    const i = W(n, this.network), o = W(s, this.network), p = (await this.client.get("/quote/" + this.network, { params: { src: o, dst: i, amount: r, includeProtocols: true } })).data;
    let d = "Swapper1";
    try {
      const u = st(p.protocols), y = Math.max(...u.map((l) => l.part)), g = u.find((l) => l.part === y);
      g !== void 0 && (d = g.name.replaceAll("_", " "));
    } catch (u) {
      m({ level: "warning", category: this.sentryCategoryPrefix, message: 'Failed to format "swappingVia"', data: { error: u } });
    }
    return { buyAmount: p.dstAmount, sellAmount: r, swappingVia: d, rawResponse: JSON.stringify(p) };
  }
  formatError(e) {
    if (axios_default.isAxiosError(e)) {
      if (e.response !== void 0) throw e.response.data === void 0 ? (m({ level: "debug", message: "API responded with an error: no payload", category: this.sentryCategoryPrefix, data: { method: e.config.method, requestUri: axios_default.getUri(e.config), statusCode: e.status, statusMessage: e.message, axiosCode: e.code } }), new c(e.message, { cause: e })) : e.response.status === Se.BadRequest ? this.formatBadRequestResponse(e.response) : (m({ level: "debug", message: "API responded with an error", category: this.sentryCategoryPrefix, data: { method: e.config.method, requestUri: axios_default.getUri(e.config), statusCode: e.status, statusMessage: e.message, axiosCode: e.code, payload: e.response.data } }), new c(e.message, { payload: e.response.data, cause: e }));
      if (e.request !== void 0) throw m({ level: "debug", message: "API responded with an error: no response received", category: this.sentryCategoryPrefix, data: { method: e.config.method, requestUri: axios_default.getUri(e.config), statusCode: e.status, statusMessage: e.message, axiosCode: e.code, requestData: e.config.data } }), new c("The request has failed, no response", { cause: e });
    }
    throw e instanceof Error ? new c("The request has failed", { cause: e }) : new c("The request has failed during setup / result handling", { cause: e });
  }
  formatBadRequestResponse(e) {
    if (m({ level: "warning", category: this.sentryCategoryPrefix, message: `Request failed with code ${e.status} (${e.statusText}): ` + e.data.error, data: { method: e.config.method, requestUri: axios_default.getUri(e.config), statusCode: e.status, statusMessage: e.statusText, error: e.data.error, description: e.data.description, meta: e.data.meta } }), e.data.statusCode === Se.BadRequest) {
      if (e.data.description === Lt.InsufficientLiquidity) throw new H("swapInsufficientLiquidity");
      if (e.data.description.startsWith(Lt.UnsupportedToken)) throw new H("swapUnsupportedToken");
    }
    throw new c(e.data.description, { cause: e.data });
  }
  ensureNetworkIsSupported(e) {
    return e !== void 0 && _rt.supportedNetworks.includes(e);
  }
  getName() {
    return "Swapper1APIService";
  }
};
__publicField(_rt, "supportedNetworks", [N.ethereum, N.polygon, N.avalanche, N.arbitrum, N.optimism, N.gnosis, N.zkevm, N.base, N.zksyncera, N.bsc]);
var rt = _rt;
var _Gt = class _Gt extends Pa {
  constructor({ baseURL: e, network: a, slippageGetter: n, supportedNetworksOverride: s }) {
    super(a, "swapper2.api.service");
    __publicField(this, "client");
    __publicField(this, "slippageGetter");
    __publicField(this, "supportedNetworks");
    __publicField(this, "substituteAssetAddressIfNeeded", (e, a) => ve(e, a) ? "0x0000000000000000000000000000000000000000" : e);
    this.slippageGetter = n, this.client = this.applyAxiosInterceptors(axios_default.create({ baseURL: e, headers: { Accept: "application/json" }, paramsSerializer: Vt, validateStatus: (r) => r === 200 })), this.supportedNetworks = s !== void 0 ? _Gt.allSupportedNetworks.filter((r) => s.includes(r)) : _Gt.allSupportedNetworks;
  }
  canHandle(e) {
    return this.supportedNetworks.includes(e);
  }
  canHandleToken(e, a) {
    return this.supportedNetworks.includes(e);
  }
  applyAxiosInterceptors(e) {
    return e.interceptors.response.use(void 0, this.formatError.bind(this)), e;
  }
  async getTransferData(e, a, n, s, r, i) {
    const o = await this.slippageGetter.getSlippage(this.network, s, n), p = await this.innerGetQuoteData({ chainId: V(this.network), compact: true, inputTokens: [{ tokenAddress: s, amount: r }], outputTokens: [{ tokenAddress: n, proportion: 1 }], referralCode: 0, slippageLimitPercent: new BigNumber(o).toNumber(), userAddr: i }), d = (m({ level: "info", data: { quoteData: p }, message: "Swapper2 returned first step" }), await this.getAssembleData({ pathId: p.pathId, simulate: false, userAddr: i, receiver: i }));
    if (m({ level: "info", data: { assembleData: d }, message: "Swapper2 returned second step" }), d.outputTokens.length !== 1) throw new c("wrong length of output tokens arrays: " + d.outputTokens.length);
    if (d.inputTokens.length !== 1) throw new c("wrong length of input tokens arrays: " + d.inputTokens.length);
    if (d.transaction === null) throw new c("transaction in assembly is null");
    return { buyAmount: d.outputTokens[0].amount, data: d.transaction.data, value: d.transaction.value, sellAmount: d.inputTokens[0].amount, allowanceTarget: d.transaction.to, to: d.transaction.to, rawResponse: JSON.stringify({ ...d, swapperName: this.getName() }), swappingVia: "" };
  }
  async getQuoteData(e, a, n, s, r) {
    const i = await this.slippageGetter.getSlippage(this.network, s, n), o = await this.innerGetQuoteData({ chainId: V(this.network), compact: true, inputTokens: [{ tokenAddress: s, amount: r }], outputTokens: [{ tokenAddress: n, proportion: 1 }], referralCode: 0, slippageLimitPercent: new BigNumber(i).toNumber() });
    return m({ level: "info", data: { quoteData: o }, message: "Swapper2 returned first step" }), { buyAmount: o.outAmounts[0], sellAmount: o.inAmounts[0], swappingVia: "", rawResponse: JSON.stringify(o) };
  }
  async innerGetQuoteData(e) {
    if (!this.ensureNetworkIsSupported(this.network)) throw new je("Swapper2 Swaps", this.network);
    if (e.inputTokens.length === 0) throw new c("empty input tokens array");
    if (1 < e.inputTokens.length) throw new c("only single swap allowed");
    if (Bt(e.inputTokens[0].amount) || e.inputTokens[0].amount === "") throw new c("empty amount request prevented");
    return e.inputTokens[0].tokenAddress = this.substituteAssetAddressIfNeeded(e.inputTokens[0].tokenAddress, this.network), e.outputTokens[0].tokenAddress = this.substituteAssetAddressIfNeeded(e.outputTokens[0].tokenAddress, this.network), (await this.client.post("/sor/quote/v2", { ...e })).data;
  }
  async getAssembleData(e) {
    if (!this.ensureNetworkIsSupported(this.network)) throw new je("Swapper2 Swaps", this.network);
    return (await this.client.post("/sor/assemble", { ...e })).data;
  }
  formatError(e) {
    if (axios_default.isAxiosError(e)) {
      if (e.response !== void 0) throw e.response.data === void 0 ? (m({ level: "debug", message: "API responded with an error: no payload", category: this.sentryCategoryPrefix, data: { method: e.config.method, requestUri: axios_default.getUri(e.config), statusCode: e.status, statusMessage: e.message, axiosCode: e.code } }), new c(e.message, { cause: e })) : e.response.status === Se.BadRequest ? this.formatBadRequestResponse(e.response) : (m({ level: "debug", message: "API responded with an error", category: this.sentryCategoryPrefix, data: { method: e.config.method, requestUri: axios_default.getUri(e.config), statusCode: e.status, statusMessage: e.message, axiosCode: e.code, payload: e.response.data } }), new c(e.message, { payload: e.response.data, cause: e }));
      if (e.request !== void 0) throw m({ level: "debug", message: "API responded with an error: no response received", category: this.sentryCategoryPrefix, data: { method: e.config.method, requestUri: axios_default.getUri(e.config), statusCode: e.status, statusMessage: e.message, axiosCode: e.code, requestData: e.config.data } }), new c("The request has failed, no response", { cause: e });
    }
    throw e instanceof Error ? new c("The request has failed", { cause: e }) : new c("The request has failed during setup / result handling", { cause: e });
  }
  formatBadRequestResponse(e) {
    throw m({ level: "warning", category: this.sentryCategoryPrefix, message: `Request failed with code ${e.status} (${e.statusText}): ` + e.data.detail, data: { method: e.config.method, requestUri: axios_default.getUri(e.config), statusCode: e.status, statusMessage: e.statusText, error: e.data.detail } }), e.status === Se.BadRequest && e.data.detail && e.data.detail.startsWith("Routing unavailable for token") ? new H("swapUnsupportedToken") : new c(e.data.detail, { cause: e.data });
  }
  ensureNetworkIsSupported(e) {
    return e !== void 0 && this.supportedNetworks.includes(e);
  }
  getName() {
    return "Swapper2APIService";
  }
};
__publicField(_Gt, "allSupportedNetworks", [N.ethereum, N.zksyncera, N.base, N.polygon, N.optimism, N.mode, N.avalanche, N.arbitrum, N.bsc]);
var Gt = _Gt;
var b = ((t) => (t.Pending = "pending", t.Succeeded = "succeeded", t.Failed = "failed", t.Queued = "queued", t))(b || {});
var f = ((t) => (t.Approve = "approve", t.Swap = "swap", t.Bridge = "bridge", t.Deposit = "deposit", t.Withdraw = "withdraw", t.CashOut = "cash_out", t.CashOutSettling = "cash_out_settling", t.Unwrap = "unwrap", t.Confirm = "confirm", t.Order = "order", t))(f || {});
var Ye = {};
var Gn = (t, ...e) => {
  const a = t.name + JSON.stringify(e), n = Ye[a];
  if (n !== void 0) return n;
  const s = t(...e);
  return Ye[a] = s, Promise.resolve(s).then(() => {
    delete Ye[a];
  }).catch(() => {
    delete Ye[a];
  }), s;
};
var ce = async (t) => t.chain !== void 0 ? t.chain.id : t.getChainId();
var vt = class extends Map {
  constructor(e) {
    super();
    __publicField(this, "maxSize");
    this.maxSize = e;
  }
  set(e, a) {
    return super.set(e, a), this.maxSize && this.size > this.maxSize && this.delete(this.keys().next().value), this;
  }
};
var sa = new vt(16);
var Qe = async (t, e) => {
  const a = await ce(t), n = a + ":" + e, s = sa.get(n);
  if (s !== void 0) return s;
  const r = await Gn((o) => t.getBytecode(o), { address: e }), i = r !== void 0 && r !== "0x";
  return a !== void 0 && sa.set(n, i), i;
};
var it = (t) => new Promise((e) => {
  setTimeout(e, t);
});
var me = ((t) => (t.CardCashOut = "card_cashout", t.CardSendToAFriend = "card_send_to_a_friend", t.CardOrder = "card_order", t.CardClaimCashback = "cashback_claim", t))(me || {});
var ot = ((t) => (t.In = "in", t.Out = "out", t))(ot || {});
var U = [{ anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "account", type: "address" }, { indexed: false, internalType: "address", name: "token", type: "address" }, { indexed: false, internalType: "uint256", name: "valueToken", type: "uint256" }, { indexed: false, internalType: "uint256", name: "valueUSDC", type: "uint256" }, { indexed: false, internalType: "bytes32", name: "_receiverHash", type: "bytes32" }], name: "CardTopup", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "token", type: "address" }, { indexed: true, internalType: "address", name: "destination", type: "address" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "EmergencyTransfer", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "string", name: "name", type: "string" }, { indexed: false, internalType: "uint256", name: "value", type: "uint256" }], name: "FeeChanged", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint8", name: "version", type: "uint8" }], name: "Initialized", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bytes32", name: "role", type: "bytes32" }, { indexed: true, internalType: "bytes32", name: "previousAdminRole", type: "bytes32" }, { indexed: true, internalType: "bytes32", name: "newAdminRole", type: "bytes32" }], name: "RoleAdminChanged", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bytes32", name: "role", type: "bytes32" }, { indexed: true, internalType: "address", name: "account", type: "address" }, { indexed: true, internalType: "address", name: "sender", type: "address" }], name: "RoleGranted", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bytes32", name: "role", type: "bytes32" }, { indexed: true, internalType: "address", name: "account", type: "address" }, { indexed: true, internalType: "address", name: "sender", type: "address" }], name: "RoleRevoked", type: "event" }, { inputs: [], name: "DEFAULT_ADMIN_ROLE", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function", constant: true }, { inputs: [], name: "TRUSTED_EXETUTOR_ROLE", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function", constant: true }, { inputs: [], name: "TRUSTED_PAUSER_ROLE", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function", constant: true }, { inputs: [], name: "backendSignatureCheck", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function", constant: true }, { inputs: [], name: "exchangeFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function", constant: true }, { inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }], name: "getRoleAdmin", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function", constant: true }, { inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }, { internalType: "address", name: "account", type: "address" }], name: "grantRole", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }, { internalType: "address", name: "account", type: "address" }], name: "hasRole", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function", constant: true }, { inputs: [], name: "paused", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function", constant: true }, { inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }, { internalType: "address", name: "account", type: "address" }], name: "renounceRole", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }, { internalType: "address", name: "account", type: "address" }], name: "revokeRole", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }], name: "supportsInterface", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function", constant: true }, { inputs: [], name: "topupFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function", constant: true }, { inputs: [{ internalType: "uint256", name: "_chainId", type: "uint256" }, { internalType: "bytes", name: "_chainIdRLP", type: "bytes" }], name: "initialize", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_exchangeProxyContract", type: "address" }], name: "setExchangeProxy", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_allowanceTreshold", type: "uint256" }], name: "setAllowanceTreshold", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_allowanceSignatureTimespan", type: "uint256" }], name: "setAllowanceSignatureTimespan", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_topupFee", type: "uint256" }], name: "setTopupFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_exchangeFee", type: "uint256" }], name: "setExchangeFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_cardSettleAddress", type: "address" }], name: "setCardSettleAddress", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_topupToken", type: "address" }], name: "setCardTopupToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_minAmount", type: "uint256" }], name: "setMinAmount", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_maxAmount", type: "uint256" }], name: "setMaxAmount", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "_paused", type: "bool" }], name: "setPaused", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "_backendSignatureCheck", type: "bool" }], name: "setSignedBackendCheck", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "pauseOperation", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_token", type: "address" }, { internalType: "uint256", name: "_amount", type: "uint256" }], name: "claimFees", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_token", type: "address" }, { internalType: "address", name: "_destination", type: "address" }, { internalType: "uint256", name: "_amount", type: "uint256" }], name: "emergencyTransfer", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes32", name: "blockHash", type: "bytes32" }, { internalType: "bytes", name: "proofBlob", type: "bytes" }], name: "validateTxProof", outputs: [{ internalType: "uint8", name: "result", type: "uint8" }, { components: [{ internalType: "uint256", name: "chainID", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "data", type: "bytes" }, { internalType: "uint256", name: "v", type: "uint256" }, { internalType: "uint256", name: "r", type: "uint256" }, { internalType: "uint256", name: "s", type: "uint256" }, { internalType: "bytes32", name: "unsignedHash", type: "bytes32" }], internalType: "struct HardenedCardTopupProxyV4.SignedTransaction", name: "t", type: "tuple" }], stateMutability: "view", type: "function", constant: true }, { inputs: [{ internalType: "address", name: "_token", type: "address" }, { internalType: "uint256", name: "_amount", type: "uint256" }, { internalType: "bytes", name: "_permit", type: "bytes" }, { internalType: "uint256", name: "_expectedMinimumReceived", type: "uint256" }, { internalType: "bytes", name: "_convertData", type: "bytes" }, { internalType: "bytes32", name: "_receiverHash", type: "bytes32" }], name: "CardTopupPermit", outputs: [], stateMutability: "payable", type: "function", payable: true }, { inputs: [{ internalType: "address", name: "_token", type: "address" }, { internalType: "uint256", name: "_amount", type: "uint256" }, { internalType: "uint256", name: "_timestamp", type: "uint256" }, { internalType: "bytes", name: "_signature", type: "bytes" }, { internalType: "bytes", name: "_permit", type: "bytes" }, { internalType: "uint256", name: "_expectedMinimumReceived", type: "uint256" }, { internalType: "bytes", name: "_convertData", type: "bytes" }, { internalType: "bytes32", name: "_receiverHash", type: "bytes32" }], name: "CardTopupPermitSigned", outputs: [], stateMutability: "payable", type: "function", payable: true }, { inputs: [{ internalType: "address", name: "_token", type: "address" }, { internalType: "uint256", name: "_amount", type: "uint256" }, { internalType: "uint256", name: "_timestamp", type: "uint256" }, { internalType: "bytes", name: "_signature", type: "bytes" }, { internalType: "uint256", name: "_expectedMinimumReceived", type: "uint256" }, { internalType: "bytes", name: "_convertData", type: "bytes" }, { internalType: "bytes32", name: "_receiverHash", type: "bytes32" }], name: "CardTopupTrusted", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_token", type: "address" }, { internalType: "uint256", name: "_amount", type: "uint256" }, { internalType: "uint256", name: "_blockNumber", type: "uint256" }, { internalType: "bytes", name: "_proofBlob", type: "bytes" }, { internalType: "uint256", name: "_expectedMinimumReceived", type: "uint256" }, { internalType: "bytes", name: "_convertData", type: "bytes" }, { internalType: "bytes32", name: "_receiverHash", type: "bytes32" }], name: "CardTopupMPTProof", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_token", type: "address" }, { internalType: "uint256", name: "_amount", type: "uint256" }, { internalType: "uint256", name: "_timestamp", type: "uint256" }, { internalType: "bytes", name: "_signature", type: "bytes" }, { internalType: "uint256", name: "_blockNumber", type: "uint256" }, { internalType: "bytes", name: "_proofBlob", type: "bytes" }, { internalType: "uint256", name: "_expectedMinimumReceived", type: "uint256" }, { internalType: "bytes", name: "_convertData", type: "bytes" }, { internalType: "bytes32", name: "_receiverHash", type: "bytes32" }], name: "CardTopupMPTProofSigned", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_distributorAddress", type: "address" }], name: "addYieldDistributor", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_distributorAddress", type: "address" }], name: "removeYieldDistributor", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_token", type: "address" }], name: "addSettlementToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_token", type: "address" }], name: "removeSettlementToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ components: [{ components: [{ internalType: "address", name: "token", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], internalType: "struct ISignatureTransfer.TokenPermissions", name: "permitted", type: "tuple" }, { internalType: "uint256", name: "nonce", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }], internalType: "struct ISignatureTransfer.PermitTransferFrom", name: "_permit2data", type: "tuple" }, { internalType: "uint256", name: "_timestamp", type: "uint256" }, { internalType: "bytes", name: "_signature", type: "bytes" }, { internalType: "bytes", name: "_permit2sig", type: "bytes" }, { internalType: "uint256", name: "_expectedMinimumReceived", type: "uint256" }, { internalType: "bytes", name: "_convertData", type: "bytes" }, { internalType: "bytes32", name: "_receiverHash", type: "bytes32" }], name: "CardTopupPermit2Signed", outputs: [], stateMutability: "payable", type: "function", payable: true }];
var ft = [{ constant: true, inputs: [], name: "name", outputs: [{ name: "", type: "string" }], payable: false, stateMutability: "view", type: "function" }, { constant: false, inputs: [{ name: "_spender", type: "address" }, { name: "_value", type: "uint256" }], name: "approve", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }, { constant: true, inputs: [], name: "totalSupply", outputs: [{ name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }, { constant: false, inputs: [{ name: "_from", type: "address" }, { name: "_to", type: "address" }, { name: "_value", type: "uint256" }], name: "transferFrom", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }, { constant: true, inputs: [], name: "decimals", outputs: [{ name: "", type: "uint8" }], payable: false, stateMutability: "view", type: "function" }, { constant: true, inputs: [{ name: "_owner", type: "address" }], name: "balanceOf", outputs: [{ name: "balance", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }, { constant: true, inputs: [], name: "symbol", outputs: [{ name: "", type: "string" }], payable: false, stateMutability: "view", type: "function" }, { constant: false, inputs: [{ name: "_to", type: "address" }, { name: "_value", type: "uint256" }], name: "transfer", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }, { constant: true, inputs: [{ name: "_owner", type: "address" }, { name: "_spender", type: "address" }], name: "allowance", outputs: [{ name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }, { payable: true, stateMutability: "payable", type: "fallback" }, { anonymous: false, inputs: [{ indexed: true, name: "owner", type: "address" }, { indexed: true, name: "spender", type: "address" }, { indexed: false, name: "value", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, name: "from", type: "address" }, { indexed: true, name: "to", type: "address" }, { indexed: false, name: "value", type: "uint256" }], name: "Transfer", type: "event" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "uint8", name: "v", type: "uint8" }, { internalType: "bytes32", name: "r", type: "bytes32" }, { internalType: "bytes32", name: "s", type: "bytes32" }], name: "permit", outputs: [], stateMutability: "nonpayable", type: "function" }];
var qn = class extends c {
  constructor(e, a) {
    super(`Token ${e} is a base asset in network ` + a, { payload: { address: e, network: a } });
    __publicField(this, "name", "BaseAssetError");
  }
};
var P = ((t) => (t.BeforeEstimation = "before-estimation", t.Estimation = "estimation", t.ExecuteBroadcast = "execute-broadcast", t.ExecuteReceipt = "execute-receipt", t.Call = "call", t))(P || {});
var R = (t) => {
  var _a2, _b;
  const e = encodeFunctionData({ abi: t.abi, functionName: t.functionName, args: t.args }), a = getAbiItem({ abi: t.abi, args: t.args, name: t.functionName });
  let n;
  if ("estimation" in t && t.estimation !== void 0) {
    const r = t.estimation;
    delete r.reload, n = r;
  }
  if (a === void 0) return { scope: t.scope, state: "state" in t ? t.state : void 0, network: t.network, contractAddress: t.address, functionName: t.functionName, callData: e, prettyCallData: "failed to decode function", hash: "hash" in t ? t.hash : void 0, value: "value" in t ? (_a2 = t.value) == null ? void 0 : _a2.toString(10) : void 0, estimation: n, transferDataRaw: "transferDataRaw" in t ? t.transferDataRaw : void 0, meta: "meta" in t ? t.meta : void 0 };
  const s = formatAbiItemWithArgs({ abiItem: a, args: t.args, includeFunctionName: true, includeName: true });
  return { scope: t.scope, state: "state" in t ? t.state : void 0, network: t.network, contractAddress: t.address, functionName: t.functionName, callData: e, prettyCallData: s, hash: "hash" in t ? t.hash : void 0, value: "value" in t ? (_b = t.value) == null ? void 0 : _b.toString(10) : void 0, estimation: n, transferDataRaw: "transferDataRaw" in t ? t.transferDataRaw : void 0, meta: "meta" in t ? t.meta : void 0 };
};
var $n = { 169: "0x420000000000000000000000000000000000000F", 81457: "0x420000000000000000000000000000000000000F", 34443: "0x420000000000000000000000000000000000000F" };
var Kn = (t, e) => t * (100n + e) / 100n;
var Vn = (t) => {
  const e = t;
  return e.estimateContractL1Fee !== void 0 && typeof e.estimateContractL1Fee == "function" ? e : t.extend(publicActionsL2());
};
var $e = (t, e, a) => {
  if (t.chain == null) throw new c("Failed to extend public client", { cause: new ClientChainNotConfiguredError() });
  const n = Vn(t);
  return async (s, r) => {
    const i = await ce(n), [o, p] = await Promise.all([(async () => {
      if (r) return m({ level: "debug", message: "gasLimit was previously estimated, reusing the old value", data: { estimatedGasLimit: r } }), r;
      try {
        const u = await n.estimateContractGas(s), y = Kn(u, a);
        return a !== void 0 && m({ level: "debug", message: `Added gas buffer of ${a}%. Estimated ${u}, with buffer ` + y, data: { gasLimit: u, withBuffer: y, gasBuffer: a } }), y;
      } catch (u) {
        throw new c("Failed to estimate current chain transaction", { cause: u, payload: s });
      }
    })(), (async (u) => {
      try {
        if (u === 324) return "legacy";
        const y = await n.getBlock({ blockTag: "latest", includeTransactions: false });
        return y.baseFeePerGas !== void 0 && y.baseFeePerGas !== null && typeof y.baseFeePerGas == "bigint" ? "eip1559" : "legacy";
      } catch (y) {
        throw new c("Failed to get block to find feeType", { cause: y });
      }
    })(i)]), d = await (async (u, y, g) => {
      let l = false, T;
      try {
        M(n.chain !== void 0, "Public client does not have chain set up"), getChainContractAddress({ chain: n.chain, contract: "gasPriceOracle" }), l = true;
      } catch (S) {
        S instanceof ChainDoesNotSupportContract && (T = $n[g]) === void 0 && (m({ level: "info", message: `Chain ${g} does not support gasPriceOracle contract, assume the chain is no OP stack chain`, data: { error: S } }), l = false);
      }
      let h;
      try {
        h = await n.estimateFeesPerGas({ chain: n.chain, type: y }), m({ level: "info", message: "Estimated fees per gas", data: { feeValues: h, gasLimit: u } });
      } catch (S) {
        throw new c("Failed to estimate fees per gas", { cause: S });
      }
      if (!l || h.gasPrice !== void 0) return m({ level: "info", message: "Estimating fees per gas for legacy / eip-1559 without OP stack tweaks", data: { estimateL1Fees: l } }), h.gasPrice !== void 0 ? { syncFee: 0n, totalFee: u * h.gasPrice, feeValues: h } : { syncFee: 0n, totalFee: u * h.maxFeePerGas, feeValues: h };
      const A = { abi: s.abi, account: s.account, address: s.address, functionName: s.functionName, chain: n.chain, args: s.args, gas: u, value: s.value, gasPriceOracleAddress: T, ...h };
      let E;
      try {
        E = await n.estimateContractL1Fee(A), m({ level: "info", message: "Estimated L1 fee", data: { l1Fee: E, gasLimit: u } });
      } catch (S) {
        throw new c("Failed to estimate L1 sync fee", { cause: S, payload: A });
      }
      const q = E + u * h.maxFeePerGas;
      return { syncFee: E, feeValues: h, totalFee: q };
    })(o, p, i);
    return m({ level: "info", message: "Estimated contract gas compound", data: { gasLimit: o, fees: d } }), { gasLimit: o, totalFee: d.totalFee, feeValues: d.feeValues, syncFee: d.syncFee, reload: (u = false) => $e(n, e, a)(s, u ? o : void 0) };
  };
};
function jn(t) {
  const e = [];
  if (t.length === 0) return "";
  t[0].match(/^[^/:]+:\/*$/) && 1 < t.length && (t[0] = t.shift() + t[0]), t[0].match(/^file:\/\/\//) ? t[0] = t[0].replace(/^([^/:]+):\/*/, "$1:///") : t[0] = t[0].replace(/^([^/:]+):\/*/, "$1://");
  for (let s = 0; s < t.length; s++) {
    let r = t[s];
    r !== "" && (0 < s && (r = r.replace(/^\/+/, "")), r = s < t.length - 1 ? r.replace(/\/+$/, "") : r.replace(/\/+$/, "/"), e.push(r));
  }
  let a = e.join("/");
  const n = (a = a.replace(/\/(\?|&|#[^!])/g, "$1")).split(/[?&]+/).filter(Boolean);
  return a = n.shift() + (0 < n.length ? "?" : "") + n.join("&");
}
var Ua = (...t) => {
  const e = t.flat(2);
  return jn(e);
};
var Ke = async (t, e = 2, a = 0, n, s) => {
  try {
    return await t();
  } catch (r) {
    if (e < a || (n == null ? void 0 : n(r, a))) throw m({ level: "error", message: "Executor failed. Cannot retry anymore", data: { error: r } }), r;
    if (m({ level: "warning", message: "Executor failed. Schedule retry", data: { error: r } }), s !== void 0) {
      const i = s(a);
      m({ level: "debug", message: `Wait for ${i}ms before retrying`, data: { error: r } }), await it(i);
    }
    return Ke(t, e, a + 1, n, s);
  }
};
var ra = 2e4;
var pt = (t, e, a, n) => new Promise((s, r) => {
  let i;
  n == null ? void 0 : n(a, e).then(() => {
    m({ level: "debug", message: "Confirmed tx receipt by external watcher", data: { hash: e } }), clearTimeout(i), s();
  }).catch((o) => {
    clearTimeout(i), r(new Xe({ hash: e, network: a, source: "external" }, { cause: o }));
  }), Ke(() => t.waitForTransactionReceipt({ hash: e, onReplaced: (o) => {
    if (m({ level: "info", category: "waitForTransactionReceipt.onReplaced", message: "Transaction is replaced / cancelled", data: o }), o.reason === "cancelled") throw new H("userRejectTransaction", { payload: o });
  } }), 5, void 0, (o) => o instanceof H, () => 1e3).then((o) => {
    if (o.status !== "success") return zn(t, e).then((p) => {
      m({ level: "debug", message: 'Received tx receipt by viem watcher, yet status is "reverted"', data: { receipt: o } }), n === void 0 ? r(new Xe({ hash: e, network: a, receipt: o, source: "internal" }, { cause: p })) : (clearTimeout(i), setTimeout(() => {
        r(new Xe({ hash: e, network: a, receipt: o, source: "internal" }, { cause: p }));
      }, ra));
    });
    m({ level: "debug", message: "Confirmed tx receipt by viem watcher", data: { hash: e } }), s();
  }).catch((o) => {
    if (o instanceof H || o instanceof Xe) r(o);
    else {
      const p = ue(a), d = new c(`Failed to get receipt for transaction with hash "${e}"`, { payload: { hash: e, network: a, linkUrl: p !== void 0 ? Ua(p.explorerURL, "/tx/", e) : void 0 }, cause: o });
      if (o instanceof BlockNotFoundError || o instanceof TransactionNotFoundError) return n === void 0 ? void r(d) : (clearTimeout(i), void (i = setTimeout(() => {
        r(d);
      }, ra)));
      r(d);
    }
  });
});
var Xe = class extends c {
  constructor({ hash: e, network: a, source: n, receipt: s }, { cause: r, payload: i } = {}) {
    const o = ue(a);
    super(`Transaction with hash "${e}" reverted (${n} watcher)`, { cause: r, payload: { ...i, hash: e, network: a, source: n, receipt: s, linkUrl: o !== void 0 ? Ua(o.explorerURL, "/tx/", e) : void 0 } });
    __publicField(this, "hash");
    __publicField(this, "network");
    __publicField(this, "source");
    __publicField(this, "receipt");
    __publicField(this, "name", "TransactionRevertedError");
    this.hash = e, this.network = a, this.source = n, this.receipt = s;
  }
};
async function zn(t, e) {
  try {
    const a = await t.getTransaction({ hash: e }), n = (await t.call({ account: a.from, to: a.to, gas: a.gas, nonce: a.nonce, value: a.value, data: a.input, accessList: a.accessList, blockNumber: a.blockNumber })).data;
    return n === void 0 ? new c("Reverted without a reason") : new c(`Function reverted: "${n}"`, { payload: { data: n } });
  } catch (a) {
    return a instanceof CallExecutionError ? a : new c("Failed to get revert reason", { cause: a });
  }
}
var Ue = async ({ publicClient: t, tokenAddress: e, network: a, owner: n, spender: s, onCallData: r }) => {
  const i = [n, s];
  try {
    return await t.readContract({ address: e, abi: ft, functionName: "allowance", args: i });
  } catch (o) {
    throw r == null ? void 0 : r(R({ abi: ft, network: a, scope: P.Call, args: i, address: e, functionName: "allowance", state: "error" })), o;
  }
};
var ia = async ({ senderAddress: t, publicClient: e, tokenAddress: a, network: n, amountWei: s, spenderAddress: r, onCallData: i }) => {
  const o = Da({ tokenAddress: a, spenderAddress: r, amountWei: s });
  i == null ? void 0 : i(R({ abi: o.abi, address: o.address, args: o.args, functionName: o.functionName, network: n, scope: P.BeforeEstimation }));
  let p;
  try {
    p = await $e(e, t, at(a, n))({ abi: o.abi, account: t, address: o.address, args: o.args, functionName: o.functionName }), i == null ? void 0 : i(R({ abi: o.abi, address: o.address, args: o.args, functionName: o.functionName, network: n, scope: P.Estimation, state: "success" }));
  } catch (d) {
    throw i == null ? void 0 : i(R({ abi: o.abi, address: o.address, args: o.args, functionName: o.functionName, network: n, scope: P.Estimation, state: "error", meta: ee(d) })), d;
  }
  return p;
};
function Da({ amountWei: t, tokenAddress: e, spenderAddress: a }) {
  return { address: e, abi: ft, functionName: "approve", args: [a, t] };
}
var oa = async ({ publicClient: t, walletClientAdapter: e, tokenAddress: a, network: n, amountWei: s, spenderAddress: r, estimation: i, onTransactionHash: o, onBeforeApprove: p, onCallData: d, eventBus: u, skipApproveEventClosing: y, onTransactionExecuted: g }) => {
  var _a2, _b, _c, _d;
  y || ((_a2 = u == null ? void 0 : u.emit) == null ? void 0 : _a2.call(u, { type: f.Confirm, state: b.Pending }));
  const l = Da({ tokenAddress: a, spenderAddress: r, amountWei: s });
  p == null ? void 0 : p(s.toString(10), a);
  let T;
  try {
    T = await e.useWalletClient({ chainId: V(n) })((h) => h.writeContract({ address: l.address, abi: l.abi, functionName: l.functionName, args: l.args, gas: i.gasLimit, ...i.feeValues })), d == null ? void 0 : d(R({ abi: l.abi, network: n, scope: P.ExecuteBroadcast, args: l.args, address: l.address, functionName: l.functionName, hash: T, estimation: i, state: "success" }));
  } catch (h) {
    throw d == null ? void 0 : d(R({ abi: l.abi, network: n, scope: P.ExecuteBroadcast, args: l.args, address: l.address, functionName: l.functionName, hash: T, estimation: i, state: ne(h) ? "rejected" : "error", meta: ee(h) })), ye(h), B(h, "userRejectTransaction"), h;
  }
  (_b = u == null ? void 0 : u.emit) == null ? void 0 : _b.call(u, { type: f.Confirm, state: b.Succeeded }), (_c = u == null ? void 0 : u.emit) == null ? void 0 : _c.call(u, { type: f.Approve, state: b.Pending }), o == null ? void 0 : o(T, {});
  try {
    await pt(t, T, n), d == null ? void 0 : d(R({ abi: l.abi, network: n, scope: P.ExecuteReceipt, args: l.args, address: l.address, functionName: l.functionName, hash: T, estimation: i, state: "success" })), g == null ? void 0 : g(T, {});
  } catch (h) {
    throw d == null ? void 0 : d(R({ abi: l.abi, network: n, scope: P.ExecuteReceipt, args: l.args, address: l.address, functionName: l.functionName, hash: T, estimation: i, state: ne(h) ? "rejected" : "error", meta: ee(h) })), B(h, "userRejectTransaction"), h;
  }
  y || ((_d = u == null ? void 0 : u.emit) == null ? void 0 : _d.call(u, { type: f.Approve, state: b.Succeeded, hash: T }));
};
var pa = async ({ publicClient: t, walletClientAdapter: e, senderAddress: a, tokenAddress: n, network: s, amountWei: r, spenderAddress: i, onTransactionHash: o, onBeforeApprove: p, onCallData: d, eventBus: u, skipApproveEventClosing: y }) => {
  var _a2;
  if (ve(n, s)) throw new qn(n, s);
  if (tt(n, s)) {
    const l = await Ue({ publicClient: t, tokenAddress: n, network: s, owner: a, spender: i, onCallData: d });
    if (0n < l) {
      m({ level: "debug", category: "approveCompound", message: "Reduce allowance to zero first", data: { tokenNetwork: s, tokenAddress: n, spenderAddress: i, currentAllowance: l } });
      const T = await ia({ senderAddress: a, publicClient: t, tokenAddress: n, network: s, amountWei: 0n, spenderAddress: i, onCallData: d });
      await oa({ publicClient: t, walletClientAdapter: e, tokenAddress: n, network: s, amountWei: 0n, spenderAddress: i, estimation: T, onBeforeApprove: p, onCallData: d, eventBus: u, skipApproveEventClosing: true, onTransactionHash: (h) => {
        m({ level: "debug", category: "approveCompound.approve.onTransactionHash", message: "Received first approve (to 0 allowance) hash", data: { hash: h } });
      } }), (_a2 = u == null ? void 0 : u.emit) == null ? void 0 : _a2.call(u, { type: f.Confirm, state: b.Pending });
    }
  }
  const g = await ia({ amountWei: r, network: s, onCallData: d, publicClient: t, senderAddress: a, spenderAddress: i, tokenAddress: n });
  return oa({ publicClient: t, walletClientAdapter: e, tokenAddress: n, network: s, amountWei: r, spenderAddress: i, estimation: g, onTransactionHash: o, onBeforeApprove: p, skipApproveEventClosing: y, eventBus: u, onCallData: d });
};
function Qn(t) {
  var _a2;
  const e = ae();
  if (e === void 0 || e[t.network] === void 0 || e[t.network].tokensWithSpecificMaxPermit2Allowance === void 0) return maxUint160;
  const a = (_a2 = e[t.network].tokensWithSpecificMaxPermit2Allowance) == null ? void 0 : _a2[t.address];
  return a === void 0 ? maxUint160 : BigInt(a);
}
var da = async (t, e, a, n) => {
  const s = le();
  return a.supportsPermit !== void 0 ? (s.info({ message: 'Custom "supportsPermit" function passed. Calling it' }), a.supportsPermit(n)) : Yn(t, e, a, n);
};
var Yn = async (t, e, a, n) => {
  const s = le(), [r, i] = await Promise.all([a.isErc1271Signer({ chainId: n.chainId }), a.supportsSignTypedDataV4()]);
  return i ? !r || (s.info({ message: `${e} in chain ${n.chainId} is EIP-1271 (or EIP-4337) CA. SCA are unable to produce secp256k1 signatures. Unable to perform Permit` }), false) : (s.info({ message: `${e} in chain ${n.chainId} does not support signTypedDataV4, unable to perform Permit` }), false);
};
var Xn = [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bytes32", name: "txnHash", type: "bytes32" }, { indexed: true, internalType: "bytes32", name: "accHash", type: "bytes32" }, { indexed: true, internalType: "address", name: "signer", type: "address" }, { indexed: false, internalType: "uint256", name: "time", type: "uint256" }], name: "LogCancelled", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bytes32", name: "txnHash", type: "bytes32" }, { indexed: true, internalType: "bytes32", name: "accHash", type: "bytes32" }, { indexed: false, internalType: "uint256", name: "time", type: "uint256" }], name: "LogExecScheduled", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bytes32", name: "txnHash", type: "bytes32" }, { indexed: true, internalType: "bytes32", name: "accHash", type: "bytes32" }, { indexed: true, internalType: "address", name: "signer", type: "address" }, { indexed: false, internalType: "uint256", name: "nonce", type: "uint256" }, { indexed: false, internalType: "uint256", name: "time", type: "uint256" }, { components: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], indexed: false, internalType: "struct Identity.Transaction[]", name: "txns", type: "tuple[]" }], name: "LogScheduled", type: "event" }, { inputs: [], name: "DOMAIN_SEPARATOR", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract Identity", name: "identity", type: "address" }, { components: [{ internalType: "uint256", name: "timelock", type: "uint256" }, { internalType: "address", name: "one", type: "address" }, { internalType: "address", name: "two", type: "address" }], internalType: "struct QuickAccManager.QuickAccount", name: "acc", type: "tuple" }, { internalType: "uint256", name: "nonce", type: "uint256" }, { internalType: "bytes", name: "sig", type: "bytes" }, { components: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], internalType: "struct Identity.Transaction[]", name: "txns", type: "tuple[]" }], name: "cancel", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract Identity", name: "identity", type: "address" }, { internalType: "bytes32", name: "accHash", type: "bytes32" }, { internalType: "uint256", name: "nonce", type: "uint256" }, { components: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], internalType: "struct Identity.Transaction[]", name: "txns", type: "tuple[]" }], name: "execScheduled", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes32", name: "hash", type: "bytes32" }, { internalType: "bytes", name: "signature", type: "bytes" }], name: "isValidSignature", outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "nonces", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], name: "scheduled", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract Identity", name: "identity", type: "address" }, { components: [{ internalType: "uint256", name: "timelock", type: "uint256" }, { internalType: "address", name: "one", type: "address" }, { internalType: "address", name: "two", type: "address" }], internalType: "struct QuickAccManager.QuickAccount", name: "acc", type: "tuple" }, { components: [{ internalType: "bool", name: "isBothSigned", type: "bool" }, { internalType: "bytes", name: "one", type: "bytes" }, { internalType: "bytes", name: "two", type: "bytes" }], internalType: "struct QuickAccManager.DualSig", name: "sigs", type: "tuple" }, { components: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], internalType: "struct Identity.Transaction[]", name: "txns", type: "tuple[]" }], name: "send", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract Identity", name: "identity", type: "address" }, { components: [{ internalType: "uint256", name: "timelock", type: "uint256" }, { internalType: "address", name: "one", type: "address" }, { internalType: "address", name: "two", type: "address" }], internalType: "struct QuickAccManager.QuickAccount", name: "acc", type: "tuple" }, { components: [{ internalType: "bytes", name: "one", type: "bytes" }, { internalType: "bytes", name: "two", type: "bytes" }], internalType: "struct QuickAccManager.DualSigAlwaysBoth", name: "sigs", type: "tuple" }, { components: [{ internalType: "address", name: "token", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }, { internalType: "uint256", name: "fee", type: "uint256" }], internalType: "struct QuickAccManager.Transfer", name: "t", type: "tuple" }], name: "sendTransfer", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract Identity", name: "identity", type: "address" }, { components: [{ internalType: "uint256", name: "timelock", type: "uint256" }, { internalType: "address", name: "one", type: "address" }, { internalType: "address", name: "two", type: "address" }], internalType: "struct QuickAccManager.QuickAccount", name: "acc", type: "tuple" }, { components: [{ internalType: "bytes", name: "one", type: "bytes" }, { internalType: "bytes", name: "two", type: "bytes" }], internalType: "struct QuickAccManager.DualSigAlwaysBoth", name: "sigs", type: "tuple" }, { components: [{ internalType: "string", name: "description", type: "string" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], internalType: "struct QuickAccManager.Txn[]", name: "txns", type: "tuple[]" }], name: "sendTxns", outputs: [], stateMutability: "nonpayable", type: "function" }];
var Jn = { 1: "0xfF3f6D14DF43c112aB98834Ee1F82083E07c26BF", 25: "0xfF3f6D14DF43c112aB98834Ee1F82083E07c26BF", 56: "0xfF3f6D14DF43c112aB98834Ee1F82083E07c26BF", 100: "0xfF3f6D14DF43c112aB98834Ee1F82083E07c26BF", 137: "0xfF3f6D14DF43c112aB98834Ee1F82083E07c26BF", 250: "0xfF3f6D14DF43c112aB98834Ee1F82083E07c26BF", 397: "0xfF3f6D14DF43c112aB98834Ee1F82083E07c26BF", 1088: "0xfF3f6D14DF43c112aB98834Ee1F82083E07c26BF", 8453: "0xfF3f6D14DF43c112aB98834Ee1F82083E07c26BF", 43114: "0xfF3f6D14DF43c112aB98834Ee1F82083E07c26BF", 42161: "0xfF3f6D14DF43c112aB98834Ee1F82083E07c26BF", 1284: "0xfF3f6D14DF43c112aB98834Ee1F82083E07c26BF" };
var Na = async (t, e) => {
  const a = await ce(t), n = Jn[a];
  return M(n !== void 0, new Ma("Ambire QuickAccManager", a)), t.readContract({ address: n, abi: Xn, functionName: "nonces", args: [e] });
};
var Ma = class extends c {
  constructor(e, a) {
    super(`No "${e}" reference is defined for chainId ` + a);
  }
};
var Je = new vt(16);
var Zn = le();
var Oa = async (t, e) => {
  const a = await ce(t), n = a + ":" + e, s = Je.get(n);
  if (s !== void 0) return s;
  try {
    const r = await Na(t, e), i = r !== 0n;
    return Je.set(n, i), i;
  } catch (r) {
    if (we(r, (i) => i instanceof ContractFunctionZeroDataError)) return Zn.debug({ message: `The function call "getAmbireNonce" for ${e} in ${a} reverted. Either the address is not initialized or EOA` }), Je.set(n, false), false;
    if (r instanceof Ma) return Je.set(n, false), false;
    throw r;
  }
};
var es = [{ inputs: [{ internalType: "bytes32[]", name: "_codes", type: "bytes32[]" }, { internalType: "address[]", name: "_implementations", type: "address[]" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bytes32", name: "code", type: "bytes32" }], name: "CodeAdded", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "implementation", type: "address" }], name: "ImplementationAdded", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "_newOwner", type: "address" }], name: "OwnerChanged", type: "event" }, { inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], name: "acceptedCodes", outputs: [{ internalType: "bool", name: "exists", type: "bool" }, { internalType: "uint128", name: "index", type: "uint128" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "acceptedImplementations", outputs: [{ internalType: "bool", name: "exists", type: "bool" }, { internalType: "uint128", name: "index", type: "uint128" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32", name: "_code", type: "bytes32" }], name: "addCode", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_argentWallet", type: "address" }], name: "addCodeAndImplementationFromWallet", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_impl", type: "address" }], name: "addImplementation", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_newOwner", type: "address" }], name: "changeOwner", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "getCodes", outputs: [{ internalType: "bytes32[]", name: "", type: "bytes32[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getImplementations", outputs: [{ internalType: "address[]", name: "", type: "address[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "isArgentWallet", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }];
var ts = { 1: "0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8" };
var Pe = new vt(16);
var St = le();
var _a = async (t, e) => {
  const a = await ce(t), n = a + ":" + e, s = Pe.get(n);
  if (s !== void 0) return s;
  const r = ts[a];
  if (r === void 0) return Pe.set(n, false), false;
  if (St.warning({ message: `Argent detector in ${a} CA is ${r}. Checking if it's an actual contract` }), !await Qe(t, r)) return St.warning({ message: `A detector address is not a CA. Assume the AA wallet ${e} is not an Argent wallet` }), Pe.set(n, false), false;
  try {
    const o = await t.readContract({ address: r, abi: es, functionName: "isArgentWallet", args: [e] });
    return Pe.set(n, o), o;
  } catch (o) {
    if (we(o, (p) => p instanceof ContractFunctionZeroDataError)) return St.warning({ message: `The function call "isArgentWallet" on ${r} in chain ${a} reverted. Either such function is not implemented or the address is EOA` }), Pe.set(n, false), false;
    throw o;
  }
};
var Fa = [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { inputs: [{ internalType: "bytes", name: "owner", type: "bytes" }], name: "AlreadyOwner", type: "error" }, { inputs: [], name: "Initialized", type: "error" }, { inputs: [{ internalType: "bytes", name: "owner", type: "bytes" }], name: "InvalidEthereumAddressOwner", type: "error" }, { inputs: [{ internalType: "uint256", name: "key", type: "uint256" }], name: "InvalidNonceKey", type: "error" }, { inputs: [{ internalType: "bytes", name: "owner", type: "bytes" }], name: "InvalidOwnerBytesLength", type: "error" }, { inputs: [], name: "LastOwner", type: "error" }, { inputs: [{ internalType: "uint256", name: "index", type: "uint256" }], name: "NoOwnerAtIndex", type: "error" }, { inputs: [{ internalType: "uint256", name: "ownersRemaining", type: "uint256" }], name: "NotLastOwner", type: "error" }, { inputs: [{ internalType: "bytes4", name: "selector", type: "bytes4" }], name: "SelectorNotAllowed", type: "error" }, { inputs: [], name: "Unauthorized", type: "error" }, { inputs: [], name: "UnauthorizedCallContext", type: "error" }, { inputs: [], name: "UpgradeFailed", type: "error" }, { inputs: [{ internalType: "uint256", name: "index", type: "uint256" }, { internalType: "bytes", name: "expectedOwner", type: "bytes" }, { internalType: "bytes", name: "actualOwner", type: "bytes" }], name: "WrongOwnerAtIndex", type: "error" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "index", type: "uint256" }, { indexed: false, internalType: "bytes", name: "owner", type: "bytes" }], name: "AddOwner", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "index", type: "uint256" }, { indexed: false, internalType: "bytes", name: "owner", type: "bytes" }], name: "RemoveOwner", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "implementation", type: "address" }], name: "Upgraded", type: "event" }, { stateMutability: "payable", type: "fallback" }, { inputs: [], name: "REPLAYABLE_NONCE_KEY", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "addOwnerAddress", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes32", name: "x", type: "bytes32" }, { internalType: "bytes32", name: "y", type: "bytes32" }], name: "addOwnerPublicKey", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes4", name: "functionSelector", type: "bytes4" }], name: "canSkipChainIdValidation", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "pure", type: "function" }, { inputs: [], name: "domainSeparator", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [], name: "eip712Domain", outputs: [{ internalType: "bytes1", name: "fields", type: "bytes1" }, { internalType: "string", name: "name", type: "string" }, { internalType: "string", name: "version", type: "string" }, { internalType: "uint256", name: "chainId", type: "uint256" }, { internalType: "address", name: "verifyingContract", type: "address" }, { internalType: "bytes32", name: "salt", type: "bytes32" }, { internalType: "uint256[]", name: "extensions", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "entryPoint", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "target", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "execute", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ components: [{ internalType: "address", name: "target", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], internalType: "struct CoinbaseSmartWallet.Call[]", name: "calls", type: "tuple[]" }], name: "executeBatch", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "bytes[]", name: "calls", type: "bytes[]" }], name: "executeWithoutChainIdValidation", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ components: [{ internalType: "address", name: "sender", type: "address" }, { internalType: "uint256", name: "nonce", type: "uint256" }, { internalType: "bytes", name: "initCode", type: "bytes" }, { internalType: "bytes", name: "callData", type: "bytes" }, { internalType: "uint256", name: "callGasLimit", type: "uint256" }, { internalType: "uint256", name: "verificationGasLimit", type: "uint256" }, { internalType: "uint256", name: "preVerificationGas", type: "uint256" }, { internalType: "uint256", name: "maxFeePerGas", type: "uint256" }, { internalType: "uint256", name: "maxPriorityFeePerGas", type: "uint256" }, { internalType: "bytes", name: "paymasterAndData", type: "bytes" }, { internalType: "bytes", name: "signature", type: "bytes" }], internalType: "struct UserOperation", name: "userOp", type: "tuple" }], name: "getUserOpHashWithoutChainId", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [], name: "implementation", outputs: [{ internalType: "address", name: "$", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes[]", name: "owners", type: "bytes[]" }], name: "initialize", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "account", type: "address" }], name: "isOwnerAddress", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes", name: "account", type: "bytes" }], name: "isOwnerBytes", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32", name: "x", type: "bytes32" }, { internalType: "bytes32", name: "y", type: "bytes32" }], name: "isOwnerPublicKey", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32", name: "hash", type: "bytes32" }, { internalType: "bytes", name: "signature", type: "bytes" }], name: "isValidSignature", outputs: [{ internalType: "bytes4", name: "result", type: "bytes4" }], stateMutability: "view", type: "function" }, { inputs: [], name: "nextOwnerIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "index", type: "uint256" }], name: "ownerAtIndex", outputs: [{ internalType: "bytes", name: "", type: "bytes" }], stateMutability: "view", type: "function" }, { inputs: [], name: "ownerCount", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "proxiableUUID", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "index", type: "uint256" }, { internalType: "bytes", name: "owner", type: "bytes" }], name: "removeLastOwner", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "index", type: "uint256" }, { internalType: "bytes", name: "owner", type: "bytes" }], name: "removeOwnerAtIndex", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "removedOwnersCount", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32", name: "hash", type: "bytes32" }], name: "replaySafeHash", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "newImplementation", type: "address" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "upgradeToAndCall", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ components: [{ internalType: "address", name: "sender", type: "address" }, { internalType: "uint256", name: "nonce", type: "uint256" }, { internalType: "bytes", name: "initCode", type: "bytes" }, { internalType: "bytes", name: "callData", type: "bytes" }, { internalType: "uint256", name: "callGasLimit", type: "uint256" }, { internalType: "uint256", name: "verificationGasLimit", type: "uint256" }, { internalType: "uint256", name: "preVerificationGas", type: "uint256" }, { internalType: "uint256", name: "maxFeePerGas", type: "uint256" }, { internalType: "uint256", name: "maxPriorityFeePerGas", type: "uint256" }, { internalType: "bytes", name: "paymasterAndData", type: "bytes" }, { internalType: "bytes", name: "signature", type: "bytes" }], internalType: "struct UserOperation", name: "userOp", type: "tuple" }, { internalType: "bytes32", name: "userOpHash", type: "bytes32" }, { internalType: "uint256", name: "missingAccountFunds", type: "uint256" }], name: "validateUserOp", outputs: [{ internalType: "uint256", name: "validationData", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { stateMutability: "payable", type: "receive" }];
var Wa = [{ inputs: [{ internalType: "uint256", name: "preOpGas", type: "uint256" }, { internalType: "uint256", name: "paid", type: "uint256" }, { internalType: "uint48", name: "validAfter", type: "uint48" }, { internalType: "uint48", name: "validUntil", type: "uint48" }, { internalType: "bool", name: "targetSuccess", type: "bool" }, { internalType: "bytes", name: "targetResult", type: "bytes" }], name: "ExecutionResult", type: "error" }, { inputs: [{ internalType: "uint256", name: "opIndex", type: "uint256" }, { internalType: "string", name: "reason", type: "string" }], name: "FailedOp", type: "error" }, { inputs: [{ internalType: "address", name: "sender", type: "address" }], name: "SenderAddressResult", type: "error" }, { inputs: [{ internalType: "address", name: "aggregator", type: "address" }], name: "SignatureValidationFailed", type: "error" }, { inputs: [{ components: [{ internalType: "uint256", name: "preOpGas", type: "uint256" }, { internalType: "uint256", name: "prefund", type: "uint256" }, { internalType: "bool", name: "sigFailed", type: "bool" }, { internalType: "uint48", name: "validAfter", type: "uint48" }, { internalType: "uint48", name: "validUntil", type: "uint48" }, { internalType: "bytes", name: "paymasterContext", type: "bytes" }], internalType: "struct IEntryPoint.ReturnInfo", name: "returnInfo", type: "tuple" }, { components: [{ internalType: "uint256", name: "stake", type: "uint256" }, { internalType: "uint256", name: "unstakeDelaySec", type: "uint256" }], internalType: "struct IStakeManager.StakeInfo", name: "senderInfo", type: "tuple" }, { components: [{ internalType: "uint256", name: "stake", type: "uint256" }, { internalType: "uint256", name: "unstakeDelaySec", type: "uint256" }], internalType: "struct IStakeManager.StakeInfo", name: "factoryInfo", type: "tuple" }, { components: [{ internalType: "uint256", name: "stake", type: "uint256" }, { internalType: "uint256", name: "unstakeDelaySec", type: "uint256" }], internalType: "struct IStakeManager.StakeInfo", name: "paymasterInfo", type: "tuple" }], name: "ValidationResult", type: "error" }, { inputs: [{ components: [{ internalType: "uint256", name: "preOpGas", type: "uint256" }, { internalType: "uint256", name: "prefund", type: "uint256" }, { internalType: "bool", name: "sigFailed", type: "bool" }, { internalType: "uint48", name: "validAfter", type: "uint48" }, { internalType: "uint48", name: "validUntil", type: "uint48" }, { internalType: "bytes", name: "paymasterContext", type: "bytes" }], internalType: "struct IEntryPoint.ReturnInfo", name: "returnInfo", type: "tuple" }, { components: [{ internalType: "uint256", name: "stake", type: "uint256" }, { internalType: "uint256", name: "unstakeDelaySec", type: "uint256" }], internalType: "struct IStakeManager.StakeInfo", name: "senderInfo", type: "tuple" }, { components: [{ internalType: "uint256", name: "stake", type: "uint256" }, { internalType: "uint256", name: "unstakeDelaySec", type: "uint256" }], internalType: "struct IStakeManager.StakeInfo", name: "factoryInfo", type: "tuple" }, { components: [{ internalType: "uint256", name: "stake", type: "uint256" }, { internalType: "uint256", name: "unstakeDelaySec", type: "uint256" }], internalType: "struct IStakeManager.StakeInfo", name: "paymasterInfo", type: "tuple" }, { components: [{ internalType: "address", name: "aggregator", type: "address" }, { components: [{ internalType: "uint256", name: "stake", type: "uint256" }, { internalType: "uint256", name: "unstakeDelaySec", type: "uint256" }], internalType: "struct IStakeManager.StakeInfo", name: "stakeInfo", type: "tuple" }], internalType: "struct IEntryPoint.AggregatorStakeInfo", name: "aggregatorInfo", type: "tuple" }], name: "ValidationResultWithAggregation", type: "error" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bytes32", name: "userOpHash", type: "bytes32" }, { indexed: true, internalType: "address", name: "sender", type: "address" }, { indexed: false, internalType: "address", name: "factory", type: "address" }, { indexed: false, internalType: "address", name: "paymaster", type: "address" }], name: "AccountDeployed", type: "event" }, { anonymous: false, inputs: [], name: "BeforeExecution", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "account", type: "address" }, { indexed: false, internalType: "uint256", name: "totalDeposit", type: "uint256" }], name: "Deposited", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "aggregator", type: "address" }], name: "SignatureAggregatorChanged", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "account", type: "address" }, { indexed: false, internalType: "uint256", name: "totalStaked", type: "uint256" }, { indexed: false, internalType: "uint256", name: "unstakeDelaySec", type: "uint256" }], name: "StakeLocked", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "account", type: "address" }, { indexed: false, internalType: "uint256", name: "withdrawTime", type: "uint256" }], name: "StakeUnlocked", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "account", type: "address" }, { indexed: false, internalType: "address", name: "withdrawAddress", type: "address" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "StakeWithdrawn", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bytes32", name: "userOpHash", type: "bytes32" }, { indexed: true, internalType: "address", name: "sender", type: "address" }, { indexed: true, internalType: "address", name: "paymaster", type: "address" }, { indexed: false, internalType: "uint256", name: "nonce", type: "uint256" }, { indexed: false, internalType: "bool", name: "success", type: "bool" }, { indexed: false, internalType: "uint256", name: "actualGasCost", type: "uint256" }, { indexed: false, internalType: "uint256", name: "actualGasUsed", type: "uint256" }], name: "UserOperationEvent", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bytes32", name: "userOpHash", type: "bytes32" }, { indexed: true, internalType: "address", name: "sender", type: "address" }, { indexed: false, internalType: "uint256", name: "nonce", type: "uint256" }, { indexed: false, internalType: "bytes", name: "revertReason", type: "bytes" }], name: "UserOperationRevertReason", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "account", type: "address" }, { indexed: false, internalType: "address", name: "withdrawAddress", type: "address" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "Withdrawn", type: "event" }, { inputs: [], name: "SIG_VALIDATION_FAILED", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes", name: "initCode", type: "bytes" }, { internalType: "address", name: "sender", type: "address" }, { internalType: "bytes", name: "paymasterAndData", type: "bytes" }], name: "_validateSenderAndPaymaster", outputs: [], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint32", name: "unstakeDelaySec", type: "uint32" }], name: "addStake", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "account", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "account", type: "address" }], name: "depositTo", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "deposits", outputs: [{ internalType: "uint112", name: "deposit", type: "uint112" }, { internalType: "bool", name: "staked", type: "bool" }, { internalType: "uint112", name: "stake", type: "uint112" }, { internalType: "uint32", name: "unstakeDelaySec", type: "uint32" }, { internalType: "uint48", name: "withdrawTime", type: "uint48" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "account", type: "address" }], name: "getDepositInfo", outputs: [{ components: [{ internalType: "uint112", name: "deposit", type: "uint112" }, { internalType: "bool", name: "staked", type: "bool" }, { internalType: "uint112", name: "stake", type: "uint112" }, { internalType: "uint32", name: "unstakeDelaySec", type: "uint32" }, { internalType: "uint48", name: "withdrawTime", type: "uint48" }], internalType: "struct IStakeManager.DepositInfo", name: "info", type: "tuple" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "sender", type: "address" }, { internalType: "uint192", name: "key", type: "uint192" }], name: "getNonce", outputs: [{ internalType: "uint256", name: "nonce", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes", name: "initCode", type: "bytes" }], name: "getSenderAddress", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ components: [{ internalType: "address", name: "sender", type: "address" }, { internalType: "uint256", name: "nonce", type: "uint256" }, { internalType: "bytes", name: "initCode", type: "bytes" }, { internalType: "bytes", name: "callData", type: "bytes" }, { internalType: "uint256", name: "callGasLimit", type: "uint256" }, { internalType: "uint256", name: "verificationGasLimit", type: "uint256" }, { internalType: "uint256", name: "preVerificationGas", type: "uint256" }, { internalType: "uint256", name: "maxFeePerGas", type: "uint256" }, { internalType: "uint256", name: "maxPriorityFeePerGas", type: "uint256" }, { internalType: "bytes", name: "paymasterAndData", type: "bytes" }, { internalType: "bytes", name: "signature", type: "bytes" }], internalType: "struct UserOperation", name: "userOp", type: "tuple" }], name: "getUserOpHash", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [{ components: [{ components: [{ internalType: "address", name: "sender", type: "address" }, { internalType: "uint256", name: "nonce", type: "uint256" }, { internalType: "bytes", name: "initCode", type: "bytes" }, { internalType: "bytes", name: "callData", type: "bytes" }, { internalType: "uint256", name: "callGasLimit", type: "uint256" }, { internalType: "uint256", name: "verificationGasLimit", type: "uint256" }, { internalType: "uint256", name: "preVerificationGas", type: "uint256" }, { internalType: "uint256", name: "maxFeePerGas", type: "uint256" }, { internalType: "uint256", name: "maxPriorityFeePerGas", type: "uint256" }, { internalType: "bytes", name: "paymasterAndData", type: "bytes" }, { internalType: "bytes", name: "signature", type: "bytes" }], internalType: "struct UserOperation[]", name: "userOps", type: "tuple[]" }, { internalType: "contract IAggregator", name: "aggregator", type: "address" }, { internalType: "bytes", name: "signature", type: "bytes" }], internalType: "struct IEntryPoint.UserOpsPerAggregator[]", name: "opsPerAggregator", type: "tuple[]" }, { internalType: "address payable", name: "beneficiary", type: "address" }], name: "handleAggregatedOps", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ components: [{ internalType: "address", name: "sender", type: "address" }, { internalType: "uint256", name: "nonce", type: "uint256" }, { internalType: "bytes", name: "initCode", type: "bytes" }, { internalType: "bytes", name: "callData", type: "bytes" }, { internalType: "uint256", name: "callGasLimit", type: "uint256" }, { internalType: "uint256", name: "verificationGasLimit", type: "uint256" }, { internalType: "uint256", name: "preVerificationGas", type: "uint256" }, { internalType: "uint256", name: "maxFeePerGas", type: "uint256" }, { internalType: "uint256", name: "maxPriorityFeePerGas", type: "uint256" }, { internalType: "bytes", name: "paymasterAndData", type: "bytes" }, { internalType: "bytes", name: "signature", type: "bytes" }], internalType: "struct UserOperation[]", name: "ops", type: "tuple[]" }, { internalType: "address payable", name: "beneficiary", type: "address" }], name: "handleOps", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint192", name: "key", type: "uint192" }], name: "incrementNonce", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes", name: "callData", type: "bytes" }, { components: [{ components: [{ internalType: "address", name: "sender", type: "address" }, { internalType: "uint256", name: "nonce", type: "uint256" }, { internalType: "uint256", name: "callGasLimit", type: "uint256" }, { internalType: "uint256", name: "verificationGasLimit", type: "uint256" }, { internalType: "uint256", name: "preVerificationGas", type: "uint256" }, { internalType: "address", name: "paymaster", type: "address" }, { internalType: "uint256", name: "maxFeePerGas", type: "uint256" }, { internalType: "uint256", name: "maxPriorityFeePerGas", type: "uint256" }], internalType: "struct EntryPoint.MemoryUserOp", name: "mUserOp", type: "tuple" }, { internalType: "bytes32", name: "userOpHash", type: "bytes32" }, { internalType: "uint256", name: "prefund", type: "uint256" }, { internalType: "uint256", name: "contextOffset", type: "uint256" }, { internalType: "uint256", name: "preOpGas", type: "uint256" }], internalType: "struct EntryPoint.UserOpInfo", name: "opInfo", type: "tuple" }, { internalType: "bytes", name: "context", type: "bytes" }], name: "innerHandleOp", outputs: [{ internalType: "uint256", name: "actualGasCost", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "uint192", name: "", type: "uint192" }], name: "nonceSequenceNumber", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ components: [{ internalType: "address", name: "sender", type: "address" }, { internalType: "uint256", name: "nonce", type: "uint256" }, { internalType: "bytes", name: "initCode", type: "bytes" }, { internalType: "bytes", name: "callData", type: "bytes" }, { internalType: "uint256", name: "callGasLimit", type: "uint256" }, { internalType: "uint256", name: "verificationGasLimit", type: "uint256" }, { internalType: "uint256", name: "preVerificationGas", type: "uint256" }, { internalType: "uint256", name: "maxFeePerGas", type: "uint256" }, { internalType: "uint256", name: "maxPriorityFeePerGas", type: "uint256" }, { internalType: "bytes", name: "paymasterAndData", type: "bytes" }, { internalType: "bytes", name: "signature", type: "bytes" }], internalType: "struct UserOperation", name: "op", type: "tuple" }, { internalType: "address", name: "target", type: "address" }, { internalType: "bytes", name: "targetCallData", type: "bytes" }], name: "simulateHandleOp", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ components: [{ internalType: "address", name: "sender", type: "address" }, { internalType: "uint256", name: "nonce", type: "uint256" }, { internalType: "bytes", name: "initCode", type: "bytes" }, { internalType: "bytes", name: "callData", type: "bytes" }, { internalType: "uint256", name: "callGasLimit", type: "uint256" }, { internalType: "uint256", name: "verificationGasLimit", type: "uint256" }, { internalType: "uint256", name: "preVerificationGas", type: "uint256" }, { internalType: "uint256", name: "maxFeePerGas", type: "uint256" }, { internalType: "uint256", name: "maxPriorityFeePerGas", type: "uint256" }, { internalType: "bytes", name: "paymasterAndData", type: "bytes" }, { internalType: "bytes", name: "signature", type: "bytes" }], internalType: "struct UserOperation", name: "userOp", type: "tuple" }], name: "simulateValidation", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "unlockStake", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address payable", name: "withdrawAddress", type: "address" }], name: "withdrawStake", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address payable", name: "withdrawAddress", type: "address" }, { internalType: "uint256", name: "withdrawAmount", type: "uint256" }], name: "withdrawTo", outputs: [], stateMutability: "nonpayable", type: "function" }, { stateMutability: "payable", type: "receive" }];
var Re = new vt(16);
var Ba = async (t, e) => {
  const a = le(), n = await ce(t), s = n + ":" + e, r = Re.get(s);
  if (r !== void 0) return r;
  let i;
  try {
    i = await t.readContract({ address: e, abi: Fa, functionName: "entryPoint" });
  } catch (d) {
    if (we(d, (u) => u instanceof ContractFunctionZeroDataError)) return a.debug({ message: `The function call "entryPoint" on ${e} in chain ${n} reverted. Either such function is not implemented, the address is EOA or the contract is not initialized yet`, data: { error: d } }), false;
    throw d;
  }
  if (a.debug({ message: `Entrypoint function call on ${e} in chain ${n} returned ${i}. Checking if it's the address`, data: { entryPoint: i } }), !(isAddress(i) && i !== "0x0")) return a.info({ message: i + " is not a valid address. The address is likely non-EIP-4337-compatible CA or the contract is not initialized yet" }), Re.set(s, false), false;
  if (!await Qe(t, i)) return a.warning({ message: `An entryPoint is not a CA. Assume the AA wallet ${e} does not support semi-abstracted nonce` }), Re.set(s, false), false;
  a.debug({ message: i + ` is a valid CA address. Try to call "getNonce" to check if it's implemented` });
  try {
    const d = await t.readContract({ address: i, abi: Wa, functionName: "getNonce", args: [e, 0n] });
    return a.info({ message: `Entrypoint responded with the nonce of ${d}. Assume it supports semi-abstracted nonce` }), Re.set(s, true), true;
  } catch (d) {
    if (we(d, (u) => u instanceof ContractFunctionZeroDataError)) return a.debug({ message: `The function call "getNonce" on ${i} in chain ${n} reverted. Either such function is not implemented or the entrypoint is EOA`, data: { error: d } }), Re.set(s, false), false;
    throw d;
  }
};
var ua = async (t, e, a, n) => {
  const s = le();
  return a.supportsPermit2 !== void 0 ? (s.info({ message: 'Custom "supportsPermit2" function passed. Calling it' }), a.supportsPermit2(n)) : as(t, e, a, n);
};
var as = async (t, e, a, n) => {
  const s = le(), [r, i] = await Promise.all([a.isErc1271Signer({ chainId: n.chainId }), a.supportsSignTypedDataV4()]);
  if (i) {
    if (!r) return s.info({ message: `${e} in chain ${n.chainId} is an EOA. Permit2 is supported` }), true;
    const [o, p, d] = await Promise.all([Oa(t, e), _a(t, e), Ba(t, e)]);
    if (o || p || d) return s.info({ message: `${e} in chain ${n.chainId} supports externally obtainable nonce. Permit2 is supported`, data: { ambireWallet: o, argentWallet: p, supportsSemiAbstractedNonce: d } }), true;
    s.info({ message: `${e} in chain ${n.chainId} does not support externally obtainable nonce. Unable to perform Permit2` });
  } else s.info({ message: `${e} in chain ${n.chainId}  does not support signTypedDataV4, unable to perform Permit2` });
  return false;
};
var ns = (t, e, a, n, s) => {
  if (s === void 0) return 0n;
  if (s.buyAmount === void 0 || s.sellAmount === void 0) throw new Error("buy amount or sell amount is undefined!");
  const r = Et(e, t), i = (m({ level: "info", message: "Sell price by DEFI price", data: { sellSum: r } }), Nn(r, n)), o = (m({ level: "info", message: "Expected USDC by DEFI", data: { expectedAmountByDEFI: i } }), new BigNumber(Ht(i, a.decimals)).toFixed(0));
  if (m({ level: "info", message: "Expected USDC by DEFI and SWAP in WEI:", data: { expectedAmountByDEFIInWEI: o, swapBuyAmount: s.buyAmount } }), xa(o, s.buyAmount)) {
    const d = new BigNumber(Et(o, "0.85")).toFixed(0);
    return m({ level: "info", message: "Min expected amount (by DEFI)", data: { res: d.toString() } }), parseUnits(d, 0);
  }
  const p = new BigNumber(Et(s.buyAmount, "0.85")).toFixed(0);
  return m({ level: "info", message: "Min expected amount (by swapper)", data: { res: p.toString() } }), parseUnits(p, 0);
};
var ss = (t) => fromBytes(t === void 0 ? new Uint8Array() : concat([fromHex(t.to, "bytes"), fromHex(t.allowanceTarget, "bytes"), fromHex(pad(toHex(BigInt(t.value)), { dir: "left", size: 32 }), "bytes"), toBytes(t.data)]), "hex");
var rs = (t) => t === void 0 || t.value === void 0 ? 0n : BigInt(t == null ? void 0 : t.value);
var ge = pad("0x0", { dir: "left", size: 32 });
var is = class {
  constructor({ approvalService: e, permit2Service: a, permitService: n, walletInfo: s }) {
    __publicField(this, "permitService");
    __publicField(this, "approvalService");
    __publicField(this, "permit2Service");
    __publicField(this, "sentryCategoryPrefix", "card-top-up.on-chain.service");
    __publicField(this, "retryCount", 7);
    __publicField(this, "walletInfo");
    this.permitService = n, this.approvalService = e, this.permit2Service = a, this.walletInfo = s;
  }
  getAvailableNetworks() {
    return Kt().filter((e) => !Ve(de(e, "TOP_UP_PROXY_ADDRESS")) && !Ve(de(e, "TOP_UP_EXCHANGE_PROXY_ADDRESS")));
  }
  async getTransferDataForTopUp(e, a, n) {
    if (!pe(e.address, e.network) && !oe(e.address, e.network)) return n(e.network, Ge(e.network).address, W(e.address, e.network), Ht(a, e.decimals), de(e.network, "TOP_UP_EXCHANGE_PROXY_ADDRESS"));
  }
  async explainTopUpCompound(e, a, n, s, r, i) {
    let o = 0;
    const p = new Array();
    if (!ve(n.address, n.network)) if (n.hasPermit && n.permitType === "erc2612" && await da(a, e, this.walletInfo, { chainId: V(n.network) })) p.push({ index: o++, type: f.Confirm, state: b.Queued, estimation: 0, token: n, network: n.network, timestamp: 0 });
    else if (this.permit2Service.isPermit2Allowed(n) && await ua(a, e, this.walletInfo, { chainId: V(n.network) })) {
      const g = parseUnits(s, n.decimals), l = await Ue({ publicClient: a, tokenAddress: n.address, network: n.network, owner: e, spender: this.permit2Service.getPermit2Address(n.network) });
      l < g && (tt(n.address, n.network) && 0n < l && (p.push({ index: o++, type: f.Confirm, state: b.Queued, estimation: 0, token: n, network: n.network, timestamp: 0 }), p.push({ index: o++, type: f.Approve, state: b.Queued, estimation: 15, token: n, network: n.network, timestamp: 0 })), p.push({ index: o++, type: f.Confirm, state: b.Queued, estimation: 0, token: n, network: n.network, timestamp: 0 }), p.push({ index: o++, type: f.Approve, state: b.Queued, estimation: 15, token: n, network: n.network, timestamp: 0 })), p.push({ index: o++, type: f.Confirm, state: b.Queued, estimation: 0, token: n, network: n.network, timestamp: 0 });
    } else {
      const g = await Ue({ publicClient: a, tokenAddress: n.address, network: n.network, owner: e, spender: de(n.network, "TOP_UP_PROXY_ADDRESS") }), l = parseUnits(s, n.decimals);
      let T;
      try {
        await this.approvalService.checkApproval(e, n.address, l.toString(10), n.network, "topup"), T = g < l || 110n * l / 100n <= g;
      } catch (h) {
        h instanceof G && h.shortMessage === "NOT_FOUND" ? T = true : m({ level: "warning", category: this.sentryCategoryPrefix, data: { error: h }, message: "Failed to get approval data from backend" });
      }
      T && (tt(n.address, n.network) && 0n < g && (p.push({ index: o++, type: f.Confirm, state: b.Queued, estimation: 0, token: n, network: n.network, timestamp: 0 }), p.push({ index: o++, type: f.Approve, state: b.Queued, estimation: 15, token: n, network: n.network, timestamp: 0 })), p.push({ index: o++, type: f.Confirm, state: b.Queued, estimation: 0, token: n, network: n.network, timestamp: 0 }), p.push({ index: o++, type: f.Approve, state: b.Queued, estimation: 15, token: n, network: n.network, timestamp: 0 }));
    }
    const u = !pe(n.address, n.network) && !oe(n.address, n.network), y = u ? Ge(n.network) : n;
    return p.push({ index: o++, type: f.Confirm, state: b.Queued, estimation: 0, token: n, network: n.network, timestamp: 0 }), u && p.push({ index: o++, type: f.Swap, state: b.Queued, estimation: 15, token: n, network: n.network, timestamp: 0 }), p.push({ index: o++, type: f.CashOut, state: b.Queued, estimation: 15, token: y, network: n.network, timestamp: 0 }), r === ge && p.push({ index: o++, type: f.CashOutSettling, state: b.Queued, estimation: 240, token: y, network: n.network, timestamp: 0 }), { toNetwork: n.network, startNetwork: n.network, type: r === ge ? me.CardCashOut : me.CardSendToAFriend, steps: p, meta: i };
  }
  async topUpCompound(e, a, n, s, r, i, o, p, d, u) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
    const y = this.sentryCategoryPrefix + ".topUpCompound";
    if (!oe(s.address, s.network) && !pe(s.address, s.network) && o === void 0) throw new c("Missing transfer data", { payload: { token: { address: s.address, network: s.network, symbol: s.symbol } } });
    const g = de(s.network, "TOP_UP_PROXY_ADDRESS"), l = parseUnits(r, s.decimals), T = W(s.address, s.network), h = Ge(s.network), A = ns(s.priceUSD, r, h, i, o), E = ss(o), q = rs(o), S = o == null ? void 0 : o.rawResponse, C = ((_b = (_a2 = u == null ? void 0 : u.eventBus) == null ? void 0 : _a2.emit) == null ? void 0 : _b.call(_a2, { type: f.Confirm, state: b.Pending }), ve(s.address, s.network));
    if (C && (s.permitVersion = "1", s.permitType = "erc2612", s.hasPermit = true), s.hasPermit && s.permitType === "erc2612" && (C || await da(a, e, this.walletInfo, { chainId: V(s.network) }))) {
      let v;
      try {
        v = await this.approvalService.checkAddress(e, W(s.address, s.network), l.toString(10), s.network);
      } catch (O) {
        throw new K(J.CardTopUpAddressCheck, { cause: O });
      }
      const w = v.timestamp + 600;
      let k = "0x0";
      if (!C) try {
        k = await this.permitService.buildPermitData(e, a, n, s.permitType, s.address, de(s.network, "TOP_UP_PROXY_ADDRESS"), V(s.network), Ht(r, s.decimals), w, s.permitVersion), await it(5e3), (_d = (_c = u == null ? void 0 : u.eventBus) == null ? void 0 : _c.emit) == null ? void 0 : _d.call(_c, { type: f.Confirm, state: b.Pending });
      } catch (O) {
        throw B(O, "userRejectSign"), new H("cardTopUpPermitData", { cause: O, sentryHandle: true });
      }
      let j;
      try {
        j = await this.estimateTopUpWithPermit({ senderAddress: e, publicClient: a, contractAddress: g, network: s.network, tokenAddress: T, amountInWei: l, permitCallData: k, expectedMinimumAmount: A, transferDataHex: E, transferDataValue: q, transferDataRaw: S, receiverHash: p, timestamp: BigInt(v.timestamp), signature: v.data, onCallData: u == null ? void 0 : u.onCallData });
      } catch (O) {
        throw new K(J.CardTopUpWithPermitEstimation, { cause: O });
      }
      try {
        return await this.topUpWithPermit({ publicClient: a, walletClientAdapter: n, contractAddress: g, estimation: j, network: s.network, tokenAddress: T, amountInWei: l, permitCallData: k, expectedMinimumAmount: A, transferDataHex: E, transferDataValue: q, transferDataRaw: S, receiverHash: p, timestamp: BigInt(v.timestamp), signature: v.data, onCallData: u == null ? void 0 : u.onCallData, eventBus: u == null ? void 0 : u.eventBus, onTransactionHash: (O) => {
          var _a3, _b2;
          (_a3 = u == null ? void 0 : u.onTransactionHash) == null ? void 0 : _a3.call(u, O, {}), (_b2 = u == null ? void 0 : u.onMempoolTransaction) == null ? void 0 : _b2.call(u, { type: p !== ge ? me.CardSendToAFriend : me.CardCashOut, token: s, network: s.network, amount: r, timestamp: (0, import_dayjs.default)().unix(), direction: ot.Out, hash: O, meta: d });
        }, watchTxReceipt: u == null ? void 0 : u.watchTxReceipt });
      } catch (O) {
        throw ye(O), B(O, "userRejectTransaction"), new K(J.CardTopUpWithPermit, { cause: O });
      }
    } else {
      if (!this.permit2Service.isPermit2Allowed(s) || !await ua(a, e, this.walletInfo, { chainId: V(s.network) })) return this.tryTopUpWithBackend({ amountInWei: l, attemptNumber: 0, contractAddress: g, eventBus: u == null ? void 0 : u.eventBus, expectedMinimumAmount: A, network: s.network, onBeforeApprove: u == null ? void 0 : u.onBeforeApprove, onCallData: u == null ? void 0 : u.onCallData, onTransactionHash: (v) => {
        var _a3, _b2;
        (_a3 = u == null ? void 0 : u.onTransactionHash) == null ? void 0 : _a3.call(u, v, {}), (_b2 = u == null ? void 0 : u.onMempoolTransaction) == null ? void 0 : _b2.call(u, { type: p !== ge ? me.CardSendToAFriend : me.CardCashOut, token: s, network: s.network, amount: r, timestamp: (0, import_dayjs.default)().unix(), direction: ot.Out, hash: v, meta: d });
      }, onTransactionExecuted: u == null ? void 0 : u.onTransactionExecuted, publicClient: a, receiverHash: p, senderAddress: e, tokenAddress: T, transferDataHex: E, transferDataRaw: S, walletClientAdapter: n, watchTxReceipt: u == null ? void 0 : u.watchTxReceipt });
      {
        if (await Ue({ publicClient: a, tokenAddress: s.address, network: s.network, owner: e, spender: this.permit2Service.getPermit2Address(s.network) }) < l) {
          try {
            await pa({ publicClient: a, walletClientAdapter: n, senderAddress: e, tokenAddress: s.address, network: s.network, amountWei: Qn(s), spenderAddress: this.permit2Service.getPermit2Address(s.network), onCallData: u == null ? void 0 : u.onCallData, eventBus: u == null ? void 0 : u.eventBus, onBeforeApprove: u == null ? void 0 : u.onBeforeApprove, onTransactionHash: (_) => {
              m({ level: "debug", category: y, message: "Received approve tx hash during recovery", data: { hash: _ } });
            }, skipApproveEventClosing: true });
          } catch (_) {
            throw ye(_), B(_, "userRejectTransaction"), new K(J.CardTopUpApprove, { cause: _ });
          }
          ((_f = (_e2 = u == null ? void 0 : u.eventBus) == null ? void 0 : _e2.getActiveStep) == null ? void 0 : _f.call(_e2).type) === f.Approve && ((_h = (_g = u == null ? void 0 : u.eventBus) == null ? void 0 : _g.emit) == null ? void 0 : _h.call(_g, { type: f.Approve, state: b.Succeeded }), (_j = (_i = u == null ? void 0 : u.eventBus) == null ? void 0 : _i.emit) == null ? void 0 : _j.call(_i, { type: f.Confirm, state: b.Pending }));
        }
        let w;
        try {
          w = await this.approvalService.checkAddress(e, W(s.address, s.network), l.toString(10), s.network);
        } catch (_) {
          throw new K(J.CardTopUpAddressCheck, { cause: _ });
        }
        const k = W(s.address, s.network), j = await this.permit2Service.getPermitNonce(a, e), O = (0, import_dayjs.default)().unix() + 600, Ct = { permitted: { token: k, amount: l }, spender: de(s.network, "TOP_UP_PROXY_ADDRESS"), nonce: j, deadline: BigInt(O) }, zt = V(s.network), { domain: za, types: Qa, values: Ce, primaryType: Ya } = this.permit2Service.getPermitData(Ct, this.permit2Service.getPermit2Address(s.network), zt);
        let kt;
        try {
          kt = parseErc6492Signature(qe(await n.useWalletClient({ chainId: zt })((_) => _.signTypedData({ domain: za, types: Qa, primaryType: Ya, message: { permitted: { token: Ce.permitted.token, amount: Ce.permitted.amount }, spender: Ce.spender, nonce: Ce.nonce, deadline: Ce.deadline, witness: Ce.witness } })))).signature;
        } catch (_) {
          throw B(_, "userRejectSign"), new H("cardTopUpPermitData", { cause: _, sentryHandle: true });
        }
        await it(5e3), (_l = (_k = u == null ? void 0 : u.eventBus) == null ? void 0 : _k.emit) == null ? void 0 : _l.call(_k, { type: f.Confirm, state: b.Pending });
        let Qt;
        try {
          Qt = await this.estimateTopUpWithPermit2({ publicClient: a, contractAddress: g, senderAddress: e, network: s.network, permit2Sig: kt, permit2Data: Ct, expectedMinimumAmount: A, transferDataHex: E, transferDataValue: q, transferDataRaw: S, receiverHash: p, timestamp: BigInt(w.timestamp), signature: w.data, onCallData: u == null ? void 0 : u.onCallData });
        } catch (_) {
          throw new K(J.CardTopUpWithPermitEstimation, { cause: _ });
        }
        try {
          return await this.topUpWithPermit2({ publicClient: a, walletClientAdapter: n, contractAddress: g, estimation: Qt, network: s.network, tokenAddress: T, permit2Sig: kt, permit2Data: Ct, expectedMinimumAmount: A, transferDataHex: E, transferDataValue: q, transferDataRaw: S, receiverHash: p, timestamp: BigInt(w.timestamp), signature: w.data, onCallData: u == null ? void 0 : u.onCallData, eventBus: u == null ? void 0 : u.eventBus, onTransactionHash: (_) => {
            var _a3, _b2;
            (_a3 = u == null ? void 0 : u.onTransactionHash) == null ? void 0 : _a3.call(u, _, {}), (_b2 = u == null ? void 0 : u.onMempoolTransaction) == null ? void 0 : _b2.call(u, { type: p !== ge ? me.CardSendToAFriend : me.CardCashOut, token: s, network: s.network, amount: r, timestamp: (0, import_dayjs.default)().unix(), direction: ot.Out, hash: _, meta: d });
          }, watchTxReceipt: u == null ? void 0 : u.watchTxReceipt });
        } catch (_) {
          throw ye(_), B(_, "userRejectTransaction"), new K(J.CardTopUpWithPermit, { cause: _ });
        }
      }
    }
  }
  async tryTopUpWithBackend({ amountInWei: e, attemptNumber: a, contractAddress: n, eventBus: s, expectedMinimumAmount: r, network: i, onBeforeApprove: o, onCallData: p, onTransactionHash: d, publicClient: u, receiverHash: y, senderAddress: g, tokenAddress: l, transferDataHex: T, transferDataRaw: h, walletClientAdapter: A, watchTxReceipt: E, onTransactionExecuted: q }) {
    var _a2, _b, _c;
    const S = this.sentryCategoryPrefix + ".tryTopUpWithBackend";
    let C, v = e;
    tt(l, i) || (v = 1001n * e / 1000n);
    try {
      C = await this.approvalService.checkApproval(g, l, e.toString(10), i, "topup");
      const w = await Ue({ publicClient: u, tokenAddress: l, network: i, owner: g, spender: n });
      m({ level: "info", category: S, message: "Got allowance from contract", data: { allowance: w } }), (w < e || 110n * e / 100n <= w) && (m({ level: "warning", category: S, message: "Wrong approve amount", data: { amountInWeiRequested: e, amountInWeiAllowed: w } }), C = { approval: "wrong", amount: "0", data: "0x0", timestamp: 0 });
    } catch (w) {
      C = (w instanceof G && w.shortMessage === "NOT_FOUND" ? m({ level: "warning", category: S, message: "no matching approve tx for address" }) : m({ level: "error", category: S, message: "Failed to get trust from backend", data: { tokenAddress: l, amountInWei: e, network: i } }), { approval: "wrong", amount: "0", data: "0x0", timestamp: 0 });
    }
    if (C.approval !== "ok") {
      if (a > this.retryCount) throw new K(J.CardTopUpNoApproval, { payload: { retries: this.retryCount } });
      if (a === 1) try {
        await pa({ publicClient: u, walletClientAdapter: A, senderAddress: g, tokenAddress: l, network: i, amountWei: v, spenderAddress: n, eventBus: s, onBeforeApprove: o, onTransactionHash: (w) => {
          m({ level: "debug", category: S, message: "Received approve tx hash during recovery", data: { hash: w } });
        }, skipApproveEventClosing: true });
      } catch (w) {
        throw ye(w), B(w, "userRejectTransaction"), new K(J.CardTopUpApprove, { cause: w });
      }
      return m({ level: "debug", category: S, message: "Waiting before checking approval again" }), await it(1e4), this.tryTopUpWithBackend({ amountInWei: e, attemptNumber: a + 1, contractAddress: n, eventBus: s, expectedMinimumAmount: r, network: i, onBeforeApprove: o, onCallData: p, onTransactionHash: d, publicClient: u, receiverHash: y, senderAddress: g, tokenAddress: l, transferDataHex: T, transferDataRaw: h, walletClientAdapter: A, watchTxReceipt: E });
    }
    {
      m({ level: "debug", category: S, message: "Approval is correct, perform top up with trust", data: { approvalData: C.data, approvalTimestamp: C.timestamp, approvalAmount: C.amount, realAmountInWei: e } });
      let w;
      try {
        w = await this.estimateTopUpWithTrust({ amountInWei: e, backendDataHex: C.data, contractAddress: n, expectedMinimumAmount: r, network: i, onCallData: p, publicClient: u, receiverHash: y, senderAddress: g, timestamp: BigInt(C.timestamp), tokenAddress: l, transferDataHex: T, transferDataRaw: h });
      } catch (k) {
        throw new K(J.CardTopUpWithTrustEstimation, { cause: k });
      }
      m({ level: "debug", category: S, message: "Estimated trust tx", data: w }), ((_a2 = s == null ? void 0 : s.getActiveStep) == null ? void 0 : _a2.call(s).type) === f.Approve && ((_b = s.emit) == null ? void 0 : _b.call(s, { type: f.Approve, state: b.Succeeded }), (_c = s.emit) == null ? void 0 : _c.call(s, { type: f.Confirm, state: b.Pending }));
      try {
        return await this.topUpWithTrust({ amountInWei: e, backendDataHex: C.data, contractAddress: n, estimation: w, expectedMinimumAmount: r, network: i, onCallData: p, publicClient: u, receiverHash: y, timestamp: BigInt(C.timestamp), tokenAddress: l, transferDataHex: T, transferDataRaw: h, eventBus: s, onTransactionHash: d, walletClientAdapter: A, watchTxReceipt: E, onTransactionExecuted: q });
      } catch (k) {
        throw ye(k), B(k, "userRejectTransaction"), new K(J.CardTopUpWithTrust, { cause: k });
      }
    }
  }
  async topUpWithPermit({ amountInWei: e, receiverHash: a, contractAddress: n, estimation: s, expectedMinimumAmount: r, network: i, onCallData: o, permitCallData: p, publicClient: d, tokenAddress: u, transferDataHex: y, transferDataRaw: g, transferDataValue: l, timestamp: T, signature: h, walletClientAdapter: A, eventBus: E, onTransactionHash: q, watchTxReceipt: S, onTransactionExecuted: C }) {
    var _a2, _b, _c, _d, _e2, _f;
    const v = [u, e, T, h, p, r, y, a];
    let w;
    try {
      w = await A.useWalletClient({ chainId: V(i) })((k) => k.writeContract({ abi: U, address: n, functionName: "CardTopupPermitSigned", args: v, gas: s.gasLimit, value: l, ...s.feeValues })), nt(w, "userRejectTransaction"), o == null ? void 0 : o(R({ abi: U, address: n, args: v, scope: P.ExecuteBroadcast, functionName: "CardTopupPermitSigned", estimation: s, hash: w, network: i, transferDataRaw: g, value: l, state: "success" }));
    } catch (k) {
      throw o == null ? void 0 : o(R({ abi: U, address: n, args: v, scope: P.ExecuteBroadcast, functionName: "CardTopupPermitSigned", estimation: s, hash: w, network: i, transferDataRaw: g, value: l, state: ne(k) ? "rejected" : "error", meta: ee(k) })), ye(k), B(k, "userRejectTransaction"), k;
    }
    q == null ? void 0 : q(w, {}), (_a2 = E == null ? void 0 : E.emit) == null ? void 0 : _a2.call(E, { type: f.Confirm, state: b.Succeeded }), pe(u, i) || oe(u, i) ? (_b = E == null ? void 0 : E.emit) == null ? void 0 : _b.call(E, { type: f.CashOut, state: b.Pending, hash: w }) : (_c = E == null ? void 0 : E.emit) == null ? void 0 : _c.call(E, { type: f.Swap, state: b.Pending, hash: w });
    try {
      await pt(d, w, i, S), o == null ? void 0 : o(R({ network: i, scope: P.ExecuteReceipt, abi: U, address: n, functionName: "CardTopupPermitSigned", args: v, value: l, hash: w, estimation: s, transferDataRaw: g, state: "success" })), C == null ? void 0 : C(w, {});
    } catch (k) {
      throw o == null ? void 0 : o(R({ network: i, scope: P.ExecuteReceipt, abi: U, address: n, functionName: "CardTopupPermitSigned", args: v, value: l, hash: w, estimation: s, transferDataRaw: g, state: ne(k) ? "rejected" : "error", meta: ee(k) })), B(k, "userRejectTransaction"), k;
    }
    return pe(u, i) || oe(u, i) || ((_d = E == null ? void 0 : E.emit) == null ? void 0 : _d.call(E, { type: f.Swap, state: b.Succeeded, hash: w })), (_e2 = E == null ? void 0 : E.emit) == null ? void 0 : _e2.call(E, { type: f.CashOut, state: b.Succeeded, hash: w }), a === ge && ((_f = E == null ? void 0 : E.emit) == null ? void 0 : _f.call(E, { type: f.CashOutSettling, state: b.Pending, hash: w })), w;
  }
  async topUpWithPermit2({ contractAddress: e, estimation: a, eventBus: n, expectedMinimumAmount: s, network: r, onCallData: i, onTransactionHash: o, permit2Data: p, permit2Sig: d, publicClient: u, receiverHash: y, signature: g, timestamp: l, tokenAddress: T, transferDataHex: h, transferDataRaw: A, transferDataValue: E, walletClientAdapter: q, watchTxReceipt: S, onTransactionExecuted: C }) {
    var _a2, _b, _c, _d, _e2, _f;
    const v = [{ permitted: { token: p.permitted.token, amount: p.permitted.amount }, nonce: p.nonce, deadline: p.deadline }, l, g, d, s, h, y];
    let w;
    try {
      w = await q.useWalletClient({ chainId: V(r) })((k) => k.writeContract({ abi: U, address: e, functionName: "CardTopupPermit2Signed", args: v, gas: a.gasLimit, value: E, ...a.feeValues })), nt(w, "userRejectTransaction"), i == null ? void 0 : i(R({ network: r, scope: P.ExecuteBroadcast, abi: U, address: e, functionName: "CardTopupPermit2Signed", args: v, value: E, hash: w, estimation: a, transferDataRaw: A, state: "success" }));
    } catch (k) {
      throw i == null ? void 0 : i(R({ network: r, scope: P.ExecuteBroadcast, abi: U, address: e, functionName: "CardTopupPermit2Signed", args: v, value: E, hash: w, estimation: a, transferDataRaw: A, state: ne(k) ? "rejected" : "error", meta: ee(k) })), ye(k), B(k, "userRejectTransaction"), k;
    }
    o == null ? void 0 : o(w, {}), (_a2 = n == null ? void 0 : n.emit) == null ? void 0 : _a2.call(n, { type: f.Confirm, state: b.Succeeded }), pe(T, r) || oe(T, r) ? (_b = n == null ? void 0 : n.emit) == null ? void 0 : _b.call(n, { type: f.CashOut, state: b.Pending, hash: w }) : (_c = n == null ? void 0 : n.emit) == null ? void 0 : _c.call(n, { type: f.Swap, state: b.Pending, hash: w });
    try {
      await pt(u, w, r, S), i == null ? void 0 : i(R({ network: r, scope: P.ExecuteReceipt, abi: U, address: e, functionName: "CardTopupPermit2Signed", args: v, hash: w, estimation: a, transferDataRaw: A, state: "success" })), C == null ? void 0 : C(w, {});
    } catch (k) {
      throw i == null ? void 0 : i(R({ abi: U, address: e, args: v, scope: P.ExecuteReceipt, functionName: "CardTopupPermit2Signed", estimation: a, hash: w, network: r, transferDataRaw: A, value: E, state: ne(k) ? "rejected" : "error" })), B(k, "userRejectTransaction"), k;
    }
    return pe(T, r) || oe(T, r) || ((_d = n == null ? void 0 : n.emit) == null ? void 0 : _d.call(n, { type: f.Swap, state: b.Succeeded, hash: w })), (_e2 = n == null ? void 0 : n.emit) == null ? void 0 : _e2.call(n, { type: f.CashOut, state: b.Succeeded, hash: w }), y === ge && ((_f = n == null ? void 0 : n.emit) == null ? void 0 : _f.call(n, { type: f.CashOutSettling, state: b.Pending, hash: w })), w;
  }
  async topUpWithTrust({ amountInWei: e, backendDataHex: a, contractAddress: n, estimation: s, expectedMinimumAmount: r, network: i, onCallData: o, publicClient: p, timestamp: d, tokenAddress: u, transferDataHex: y, transferDataRaw: g, receiverHash: l, walletClientAdapter: T, eventBus: h, onTransactionHash: A, watchTxReceipt: E, onTransactionExecuted: q }) {
    var _a2, _b, _c, _d, _e2, _f;
    const S = [u, e, d, a, r, y, l];
    let C;
    try {
      C = await T.useWalletClient({ chainId: V(i) })((v) => v.writeContract({ abi: U, address: n, functionName: "CardTopupTrusted", args: S, gas: s.gasLimit, ...s.feeValues })), nt(C, "userRejectTransaction"), o == null ? void 0 : o(R({ network: i, scope: P.ExecuteBroadcast, abi: U, address: n, functionName: "CardTopupTrusted", args: S, hash: C, estimation: s, transferDataRaw: g, state: "success" }));
    } catch (v) {
      throw o == null ? void 0 : o(R({ network: i, scope: P.ExecuteBroadcast, abi: U, address: n, functionName: "CardTopupTrusted", args: S, hash: C, estimation: s, transferDataRaw: g, state: ne(v) ? "rejected" : "error", meta: ee(v) })), ye(v), B(v, "userRejectTransaction"), v;
    }
    A == null ? void 0 : A(C, {}), (_a2 = h == null ? void 0 : h.emit) == null ? void 0 : _a2.call(h, { type: f.Confirm, state: b.Succeeded }), pe(u, i) || oe(u, i) ? (_b = h == null ? void 0 : h.emit) == null ? void 0 : _b.call(h, { type: f.CashOut, state: b.Pending, hash: C }) : (_c = h == null ? void 0 : h.emit) == null ? void 0 : _c.call(h, { type: f.Swap, state: b.Pending, hash: C });
    try {
      await pt(p, C, i, E), o == null ? void 0 : o(R({ network: i, scope: P.ExecuteReceipt, abi: U, address: n, functionName: "CardTopupTrusted", args: S, hash: C, estimation: s, transferDataRaw: g, state: "success" })), q == null ? void 0 : q(C, {});
    } catch (v) {
      throw o == null ? void 0 : o(R({ network: i, scope: P.ExecuteReceipt, abi: U, address: n, functionName: "CardTopupTrusted", args: S, hash: C, estimation: s, transferDataRaw: g, state: ne(v) ? "rejected" : "error", meta: ee(v) })), B(v, "userRejectTransaction"), v;
    }
    return pe(u, i) || oe(u, i) || ((_d = h == null ? void 0 : h.emit) == null ? void 0 : _d.call(h, { type: f.Swap, state: b.Succeeded, hash: C })), (_e2 = h == null ? void 0 : h.emit) == null ? void 0 : _e2.call(h, { type: f.CashOut, state: b.Succeeded, hash: C }), l === ge && ((_f = h == null ? void 0 : h.emit) == null ? void 0 : _f.call(h, { type: f.CashOutSettling, state: b.Pending, hash: C })), C;
  }
  async estimateTopUpWithPermit({ amountInWei: e, receiverHash: a, contractAddress: n, expectedMinimumAmount: s, network: r, onCallData: i, permitCallData: o, publicClient: p, senderAddress: d, tokenAddress: u, transferDataHex: y, transferDataRaw: g, transferDataValue: l, timestamp: T, signature: h }) {
    const A = [u, e, T, h, o, s, y, a];
    i == null ? void 0 : i(R({ abi: U, address: n, args: A, scope: P.BeforeEstimation, functionName: "CardTopupPermitSigned", network: r, transferDataRaw: g, value: l }));
    try {
      const E = await Ke(() => $e(p, d, at(u, r))({ abi: U, account: d, address: n, args: A, functionName: "CardTopupPermitSigned", value: l }));
      return i == null ? void 0 : i(R({ abi: U, address: n, args: A, scope: P.Estimation, functionName: "CardTopupPermitSigned", network: r, transferDataRaw: g, value: l, state: "success" })), E;
    } catch (E) {
      throw i == null ? void 0 : i(R({ abi: U, address: n, args: A, scope: P.Estimation, functionName: "CardTopupPermitSigned", network: r, transferDataRaw: g, value: l, state: "error", meta: ee(E) })), E;
    }
  }
  async estimateTopUpWithPermit2({ contractAddress: e, expectedMinimumAmount: a, network: n, onCallData: s, permit2Data: r, permit2Sig: i, publicClient: o, receiverHash: p, senderAddress: d, signature: u, timestamp: y, transferDataHex: g, transferDataRaw: l, transferDataValue: T }) {
    const h = [{ permitted: { token: r.permitted.token, amount: r.permitted.amount }, nonce: r.nonce, deadline: r.deadline }, y, u, i, a, g, p];
    s == null ? void 0 : s(R({ network: n, scope: P.BeforeEstimation, abi: U, address: e, functionName: "CardTopupPermit2Signed", args: h, value: T, transferDataRaw: l }));
    try {
      const A = await Ke(() => $e(o, d, at(r.permitted.token, n))({ account: d, abi: U, address: e, functionName: "CardTopupPermit2Signed", args: h, value: T }));
      return s == null ? void 0 : s(R({ network: n, scope: P.Estimation, abi: U, address: e, functionName: "CardTopupPermit2Signed", args: h, value: T, transferDataRaw: l, state: "success" })), A;
    } catch (A) {
      throw s == null ? void 0 : s(R({ network: n, scope: P.Estimation, abi: U, address: e, functionName: "CardTopupPermit2Signed", args: h, value: T, transferDataRaw: l, state: "error", meta: ee(A) })), A;
    }
  }
  async estimateTopUpWithTrust({ amountInWei: e, backendDataHex: a, contractAddress: n, expectedMinimumAmount: s, network: r, onCallData: i, publicClient: o, senderAddress: p, timestamp: d, tokenAddress: u, transferDataHex: y, transferDataRaw: g, receiverHash: l }) {
    const T = [u, e, d, a, s, y, l];
    i == null ? void 0 : i(R({ network: r, scope: P.BeforeEstimation, abi: U, address: n, functionName: "CardTopupTrusted", args: T, transferDataRaw: g }));
    try {
      const h = await Ke(() => $e(o, p, at(u, r))({ account: p, abi: U, address: n, functionName: "CardTopupTrusted", args: T }));
      return i == null ? void 0 : i(R({ network: r, scope: P.Estimation, abi: U, address: n, functionName: "CardTopupTrusted", args: T, transferDataRaw: g, state: "success" })), h;
    } catch (h) {
      throw i == null ? void 0 : i(R({ network: r, scope: P.Estimation, abi: U, address: n, functionName: "CardTopupTrusted", args: T, transferDataRaw: g, state: "error", meta: ee(h) })), h;
    }
  }
};
var os = [{ anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "module", type: "address" }, { indexed: false, internalType: "bool", name: "value", type: "bool" }], name: "AuthorisedModule", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "module", type: "address" }, { indexed: true, internalType: "address", name: "target", type: "address" }, { indexed: true, internalType: "uint256", name: "value", type: "uint256" }, { indexed: false, internalType: "bytes", name: "data", type: "bytes" }], name: "Invoked", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "owner", type: "address" }], name: "OwnerChanged", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "value", type: "uint256" }, { indexed: true, internalType: "address", name: "sender", type: "address" }, { indexed: false, internalType: "bytes", name: "data", type: "bytes" }], name: "Received", type: "event" }, { stateMutability: "payable", type: "fallback" }, { inputs: [{ internalType: "address", name: "_module", type: "address" }, { internalType: "bool", name: "_value", type: "bool" }], name: "authoriseModule", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "authorised", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_module", type: "address" }, { internalType: "bytes4", name: "", type: "bytes4" }], name: "enableStaticCall", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes4", name: "_sig", type: "bytes4" }], name: "enabled", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_owner", type: "address" }, { internalType: "address[]", name: "_modules", type: "address[]" }], name: "init", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_target", type: "address" }, { internalType: "uint256", name: "_value", type: "uint256" }, { internalType: "bytes", name: "_data", type: "bytes" }], name: "invoke", outputs: [{ internalType: "bytes", name: "_result", type: "bytes" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "modules", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_newOwner", type: "address" }], name: "setOwner", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "staticCallExecutor", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { stateMutability: "payable", type: "receive" }];
var ps = [{ inputs: [{ internalType: "contract IModuleRegistry", name: "_registry", type: "address" }, { internalType: "contract IGuardianStorage", name: "_guardianStorage", type: "address" }, { internalType: "contract ITransferStorage", name: "_userWhitelist", type: "address" }, { internalType: "contract IAuthoriser", name: "_authoriser", type: "address" }, { internalType: "address", name: "_uniswapRouter", type: "address" }, { internalType: "uint256", name: "_securityPeriod", type: "uint256" }, { internalType: "uint256", name: "_securityWindow", type: "uint256" }, { internalType: "uint256", name: "_recoveryPeriod", type: "uint256" }, { internalType: "uint256", name: "_lockPeriod", type: "uint256" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "address", name: "target", type: "address" }, { indexed: false, internalType: "uint64", name: "whitelistAfter", type: "uint64" }], name: "AddedToWhitelist", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "address", name: "guardian", type: "address" }], name: "GuardianAdded", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "address", name: "guardian", type: "address" }], name: "GuardianAdditionCancelled", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "address", name: "guardian", type: "address" }, { indexed: false, internalType: "uint256", name: "executeAfter", type: "uint256" }], name: "GuardianAdditionRequested", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "address", name: "guardian", type: "address" }], name: "GuardianRevokationCancelled", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "address", name: "guardian", type: "address" }, { indexed: false, internalType: "uint256", name: "executeAfter", type: "uint256" }], name: "GuardianRevokationRequested", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "address", name: "guardian", type: "address" }], name: "GuardianRevoked", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: false, internalType: "uint64", name: "releaseAfter", type: "uint64" }], name: "Locked", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "bytes32", name: "name", type: "bytes32" }], name: "ModuleCreated", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "address", name: "_newOwner", type: "address" }], name: "OwnershipTransfered", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "address", name: "_recovery", type: "address" }], name: "RecoveryCanceled", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "address", name: "_recovery", type: "address" }, { indexed: false, internalType: "uint64", name: "executeAfter", type: "uint64" }], name: "RecoveryExecuted", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "address", name: "_recovery", type: "address" }], name: "RecoveryFinalized", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "address", name: "refundAddress", type: "address" }, { indexed: false, internalType: "address", name: "refundToken", type: "address" }, { indexed: false, internalType: "uint256", name: "refundAmount", type: "uint256" }], name: "Refund", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "address", name: "target", type: "address" }], name: "RemovedFromWhitelist", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: false, internalType: "address", name: "sessionKey", type: "address" }], name: "SessionCleared", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: false, internalType: "address", name: "sessionKey", type: "address" }, { indexed: false, internalType: "uint64", name: "expires", type: "uint64" }], name: "SessionCreated", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }, { indexed: true, internalType: "bool", name: "success", type: "bool" }, { indexed: false, internalType: "bytes", name: "returnData", type: "bytes" }, { indexed: false, internalType: "bytes32", name: "signedHash", type: "bytes32" }], name: "TransactionExecuted", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "wallet", type: "address" }], name: "Unlocked", type: "event" }, { stateMutability: "nonpayable", type: "fallback" }, { inputs: [], name: "NAME", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_guardian", type: "address" }], name: "addGuardian", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_module", type: "address" }], name: "addModule", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_target", type: "address" }], name: "addToWhitelist", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_guardian", type: "address" }], name: "cancelGuardianAddition", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_guardian", type: "address" }], name: "cancelGuardianRevokation", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "cancelRecovery", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "clearSession", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_guardian", type: "address" }], name: "confirmGuardianAddition", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_guardian", type: "address" }], name: "confirmGuardianRevokation", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "enableERC1155TokenReceiver", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "bytes", name: "_data", type: "bytes" }, { internalType: "uint256", name: "_nonce", type: "uint256" }, { internalType: "bytes", name: "_signatures", type: "bytes" }, { internalType: "uint256", name: "_gasPrice", type: "uint256" }, { internalType: "uint256", name: "_gasLimit", type: "uint256" }, { internalType: "address", name: "_refundToken", type: "address" }, { internalType: "address", name: "_refundAddress", type: "address" }], name: "execute", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_recovery", type: "address" }], name: "executeRecovery", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "finalizeRecovery", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "getGuardians", outputs: [{ internalType: "address[]", name: "_guardians", type: "address[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "getLock", outputs: [{ internalType: "uint64", name: "_releaseAfter", type: "uint64" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "getNonce", outputs: [{ internalType: "uint256", name: "nonce", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "getRecovery", outputs: [{ internalType: "address", name: "_address", type: "address" }, { internalType: "uint64", name: "_executeAfter", type: "uint64" }, { internalType: "uint32", name: "_guardianCount", type: "uint32" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "bytes", name: "_data", type: "bytes" }], name: "getRequiredSignatures", outputs: [{ internalType: "uint256", name: "", type: "uint256" }, { internalType: "enum BaseModule.OwnerSignature", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "getSession", outputs: [{ internalType: "address", name: "key", type: "address" }, { internalType: "uint64", name: "expires", type: "uint64" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "guardianCount", outputs: [{ internalType: "uint256", name: "_count", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "init", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "bytes32", name: "_signHash", type: "bytes32" }], name: "isExecutedTx", outputs: [{ internalType: "bool", name: "executed", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_guardian", type: "address" }], name: "isGuardian", outputs: [{ internalType: "bool", name: "_isGuardian", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_guardian", type: "address" }], name: "isGuardianOrGuardianSigner", outputs: [{ internalType: "bool", name: "_isGuardian", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "isLocked", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32", name: "_msgHash", type: "bytes32" }, { internalType: "bytes", name: "_signature", type: "bytes" }], name: "isValidSignature", outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_target", type: "address" }], name: "isWhitelisted", outputs: [{ internalType: "bool", name: "_isWhitelisted", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "lock", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { components: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], internalType: "struct TransactionManager.Call[]", name: "_transactions", type: "tuple[]" }], name: "multiCall", outputs: [{ internalType: "bytes[]", name: "", type: "bytes[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { components: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], internalType: "struct TransactionManager.Call[]", name: "_transactions", type: "tuple[]" }], name: "multiCallWithGuardians", outputs: [{ internalType: "bytes[]", name: "", type: "bytes[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { components: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], internalType: "struct TransactionManager.Call[]", name: "_transactions", type: "tuple[]" }, { internalType: "address", name: "_sessionUser", type: "address" }, { internalType: "uint64", name: "_duration", type: "uint64" }], name: "multiCallWithGuardiansAndStartSession", outputs: [{ internalType: "bytes[]", name: "", type: "bytes[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { components: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], internalType: "struct TransactionManager.Call[]", name: "_transactions", type: "tuple[]" }], name: "multiCallWithSession", outputs: [{ internalType: "bytes[]", name: "", type: "bytes[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_token", type: "address" }], name: "recoverToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_target", type: "address" }], name: "removeFromWhitelist", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_guardian", type: "address" }], name: "revokeGuardian", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes4", name: "_interfaceID", type: "bytes4" }], name: "supportsInterface", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "pure", type: "function" }, { inputs: [{ internalType: "bytes4", name: "_methodId", type: "bytes4" }], name: "supportsStaticCall", outputs: [{ internalType: "bool", name: "_isSupported", type: "bool" }], stateMutability: "pure", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }, { internalType: "address", name: "_newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_wallet", type: "address" }], name: "unlock", outputs: [], stateMutability: "nonpayable", type: "function" }];
var ds = BigInt("0xffffffffffffffffffffffffffffffff00000000000000000000000000000000");
var us = 128n;
var Pt = le();
var ls = async (t, e) => {
  const a = await ce(t);
  let n;
  try {
    n = await t.readContract({ address: e, abi: os, functionName: "staticCallExecutor" });
  } catch (i) {
    throw we(i, (o) => o instanceof ContractFunctionZeroDataError) && Pt.debug({ message: `The function call "staticCallExecutor" on ${e} in chain ${a} reverted. Either such function is not implemented or the CA is not an Argent wallet or EOA` }), i;
  }
  Pt.debug({ message: `Static call executor function call on ${e} in chain ${a} returned ${n}. Checking if it's the address`, data: { staticExecutorAddress: n } }), M(isAddress(n), n + " is not a valid address");
  const s = await Qe(t, n);
  M(s, n + " is an EOA");
  let r;
  try {
    r = await t.readContract({ address: n, abi: ps, functionName: "getNonce", args: [e] });
  } catch (i) {
    throw we(i, (o) => o instanceof ContractFunctionZeroDataError) && Pt.debug({ message: `The function call "getNonce" on ${n} in chain ${a} reverted. Either such function is not implemented or the CA is not an Argent wallet` }), i;
  }
  return M(r !== 0n, "AA wallet nonce should not be 0"), (r & ds) >> us;
};
var cs = async (t, e) => {
  const a = await t.readContract({ address: e, abi: Fa, functionName: "entryPoint" });
  return M(isAddress(a), new c("Entrypoint is not a valid address. Sender is not an EIP-4337-compatible wallet", { payload: { entryPoint: a, senderAddress: e } })), t.readContract({ address: a, abi: Wa, functionName: "getNonce", args: [e, 0n] });
};
var la = async (t, e) => {
  const a = await e.getTransactionCount({ address: t });
  return BigInt(a);
};
var ys = async (t, e, a) => {
  const n = le();
  if (a.getNonce === void 0) return ms(t, e, a);
  {
    n.info({ message: 'Custom "getNonce" function passed. Calling it' });
    const s = await ce(t);
    return a.getNonce({ chainId: s });
  }
};
var ms = async (t, e, a) => {
  const n = le(), s = await ce(t);
  if (!await a.isErc1271Signer({ chainId: s })) return n.info({ message: e + ` in chain ${s} is not a ERC-1271 (or ERC-6492) signer. Getting EOA nonce` }), la(e, t);
  if (!await Qe(t, e)) return n.info({ message: e + ` in chain ${s} is not deployed yet. Getting EOA nonce` }), la(e, t);
  const [o, p, d] = await Promise.all([Oa(t, e), _a(t, e), Ba(t, e)]);
  if (o) return n.info({ message: e + ` in chain ${s} appears to be an Ambire wallet. Getting nonce` }), Na(t, e);
  if (p) return n.info({ message: e + ` in chain ${s} appears to be an Argent wallet. Getting nonce` }), ls(t, e);
  if (d) return n.info({ message: e + ` in chain ${s} supports EIP-4337 semi-abstracted nonce. Getting nonce` }), cs(t, e);
  throw n.warning({ message: e + ` in chain ${s} does not support externally obtainable nonce. Unable to reliably get one` }), new c(`Address ${e} in chain ${s} is a contract, yet it does support externally obtainable nonce. Unable to reliably get one`, { payload: { chainId: s, address: e } });
};
var Ha = [{ name: "token", type: "address" }, { name: "amount", type: "uint256" }];
var hs = { PermitTransferFrom: [{ name: "permitted", type: "TokenPermissions" }, { name: "spender", type: "address" }, { name: "nonce", type: "uint256" }, { name: "deadline", type: "uint256" }], TokenPermissions: Ha };
var gs = class {
  constructor(e) {
    __publicField(this, "sentryCategoryPrefix", "permit2.on-chain-service");
    __publicField(this, "baseNonce", 104111108121104101108100n);
    __publicField(this, "maxSigDeadline", maxUint256);
    __publicField(this, "maxUnorderedNonce", maxUint256);
    __publicField(this, "maxSignatureTransferAmount", maxUint256);
    __publicField(this, "PERMIT2_DOMAIN_NAME", "Permit2");
    __publicField(this, "walletInfo");
    this.walletInfo = e;
  }
  async getPermitNonce(e, a) {
    var _a2, _b, _c;
    const [n, s] = await Promise.all([ys(e, a, this.walletInfo), ((_c = (_b = this.walletInfo).getOffchainPermit2Nonce) == null ? void 0 : _c.call(_b, { address: a, network: ((_a2 = ba(await ce(e))) == null ? void 0 : _a2.network) ?? N.unknown })) ?? 0n]);
    return this.baseNonce + n + s;
  }
  isPermit2Allowed(e) {
    return !ve(e.address, e.network) && !Ve(de(e.network, "PERMIT2_CONTRACT_ADDRESS"));
  }
  getPermit2Address(e) {
    return de(e, "PERMIT2_CONTRACT_ADDRESS");
  }
  permit2Domain(e, a) {
    return { name: this.PERMIT2_DOMAIN_NAME, chainId: a, verifyingContract: e };
  }
  validateTokenPermissions(e) {
    if (this.maxSignatureTransferAmount <= e.amount) throw new c("AMOUNT_OUT_OF_RANGE", { payload: { amount: e.amount } });
  }
  permitTransferFromWithWitnessType(e) {
    return { PermitWitnessTransferFrom: [{ name: "permitted", type: "TokenPermissions" }, { name: "spender", type: "address" }, { name: "nonce", type: "uint256" }, { name: "deadline", type: "uint256" }, { name: "witness", type: e.witnessTypeName }], TokenPermissions: Ha, ...e.witnessType };
  }
  getPermitData(e, a, n, s) {
    if (this.maxSigDeadline <= e.deadline) throw new c("SIG_DEADLINE_OUT_OF_RANGE", { payload: { deadline: e.deadline } });
    if (this.maxUnorderedNonce <= e.nonce) throw new c("SIG_DEADLINE_OUT_OF_RANGE", { payload: { nonce: e.nonce } });
    const r = this.permit2Domain(a, n), i = (this.validateTokenPermissions(e.permitted), s ? this.permitTransferFromWithWitnessType(s) : hs), o = s ? Object.assign(e, { witness: s.witness }) : e;
    return { domain: r, types: i, values: o, primaryType: s ? "PermitWitnessTransferFrom" : "PermitTransferFrom" };
  }
};
var ws = [{ inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "uint8", name: "v", type: "uint8" }, { internalType: "bytes32", name: "r", type: "bytes32" }, { internalType: "bytes32", name: "s", type: "bytes32" }], name: "permit", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "DOMAIN_SEPARATOR", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { constant: true, inputs: [{ name: "", type: "address" }], name: "nonces", outputs: [{ name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }, { constant: true, inputs: [{ name: "", type: "address" }], name: "_nonces", outputs: [{ name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }, { constant: true, inputs: [{ name: "", type: "address" }], name: "nonce", outputs: [{ name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }];
function Ts(t) {
  return t != null;
}
var La = [];
for (let t = 0; t <= 255; ++t) {
  const e = t.toString(16).padStart(2, "0");
  La.push(e);
}
var fs = (t) => {
  const e = [];
  for (let a = 0; a < t.length; ++a) e.push(La[t[a]]);
  return e.join("");
};
var Ga = ["0x2791bca1f2de4661ed88a30c99a7a9449aa84174:137", "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063:137"];
var bs = ["0x797cfab58fcb15f590eb8e4252d5c228ff88f94f907e119e80c4393a946e8f35", "0x8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866"];
var vs = "0xd505accf";
var ca = [{ constant: true, inputs: [{ name: "", type: "address" }], name: "nonces", outputs: [{ name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }, { constant: true, inputs: [{ name: "", type: "address" }], name: "_nonces", outputs: [{ name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }, { constant: true, inputs: [{ name: "", type: "address" }], name: "nonce", outputs: [{ name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }, { constant: true, inputs: [{ name: "", type: "address" }], name: "getNonce", outputs: [{ name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }];
var Cs = [{ constant: false, inputs: [{ name: "owner", type: "address" }, { name: "spender", type: "address" }, { name: "value", type: "uint256" }, { name: "deadline", type: "uint256" }, { name: "v", type: "uint8" }, { name: "r", type: "bytes32" }, { name: "s", type: "bytes32" }], name: "permit", outputs: [], payable: false, stateMutability: "nonpayable", type: "function" }];
var ks = [{ constant: true, inputs: [], name: "DOMAIN_TYPEHASH", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], payable: false, stateMutability: "view", type: "function" }];
var As = [{ name: "owner", type: "address" }, { name: "spender", type: "address" }, { name: "value", type: "uint256" }, { name: "nonce", type: "uint256" }, { name: "deadline", type: "uint256" }];
var Rt = /* @__PURE__ */ new Map();
async function qa(t, e, a, n = 0) {
  var _a2;
  const s = (_a2 = ca[n]) == null ? void 0 : _a2.name;
  if (!s) throw new Error("nonce not supported");
  const r = jt(ca, s, [t]);
  let i;
  try {
    i = (await e.call({ to: a, data: r })).data ?? "0x";
  } catch {
    return console.info("ethCall error, try other nonce function name"), qa(t, e, a, n + 1);
  }
  if (i === "0x" || Number.isNaN(Number(i))) throw new Error("nonce is NaN");
  return Number(i);
}
async function xs(t, e, a, n, s, r, i) {
  const o = await Es(t, e, a, n, s, r, i);
  return jt(Cs, "permit", Ps(a, o)).replace(vs, "0x");
}
var Es = async (t, e, a, n, s, r, i) => {
  const o = Ss({ chainId: n, tokenName: s, tokenAddress: r, params: a, isSaltInsteadOfChainId: Rs(r, n), isDomainWithoutVersion: await Us(t, r), version: i }), p = await e.useWalletClient({ chainId: n })((d) => d.signTypedData({ domain: o.domain, types: o.types, primaryType: o.primaryType, message: o.message }));
  return qe(p);
};
function Ss(t) {
  const { chainId: e, tokenName: a, tokenAddress: n, params: s, isDomainWithoutVersion: r = false, isSaltInsteadOfChainId: i = false, version: o = "1", permitModelFields: p = As } = t, d = { name: a, verifyingContract: n };
  return i && (d.salt = Ds(t)), i || (d.chainId = e), r || (d.version = o), { types: { EIP712Domain: [{ name: "name", type: "string" }, r ? null : { name: "version", type: "string" }, i ? null : { name: "chainId", type: "uint256" }, { name: "verifyingContract", type: "address" }, i ? { name: "salt", type: "bytes32" } : null].filter(Ts), Permit: p }, primaryType: "Permit", domain: d, message: s };
}
function Ps(t, e) {
  const { v: a, r: n, s } = Sa(e);
  return [t.owner, t.spender, t.value, t.deadline, a, n, s];
}
var Rs = (t, e) => {
  const a = $a(t, e);
  return Ga.includes(a);
};
var Is = async (t, e) => {
  if (Rt.has(e)) return Rt.get(e) ?? null;
  try {
    const a = await t.call({ to: e, data: jt(ks, "DOMAIN_TYPEHASH", []) }), n = a.data ?? "0x";
    return Rt.set(e, n), n;
  } catch {
    return Promise.resolve(null);
  }
};
function jt(t, e, a) {
  return encodeFunctionData({ abi: t, args: a.map((n) => n instanceof Uint8Array ? Wt(fs(n)) : n), functionName: e });
}
var Us = async (t, e) => {
  const a = await Is(t, e);
  return !!a && bs.includes(a.toLowerCase());
};
function $a(t, e) {
  return (t + ":" + e).toLowerCase();
}
function Ds(t) {
  const { chainId: e, tokenAddress: a } = t, n = $a(a, e);
  return Ga.includes(n) ? encodeAbiParameters([{ type: "uint256" }], [BigInt(e)]) : encodeAbiParameters([{ type: "uint256" }], [BigInt(0)]);
}
var Ns = class {
  constructor() {
    __publicField(this, "sentryCategoryPrefix", "permit.on-chain-service");
  }
  async buildPermitData(e, a, n, s, r, i, o, p, d, u = "1") {
    const y = await this.getErc20Name(e, a, r);
    if (m({ level: "info", category: this.sentryCategoryPrefix, message: "get erc20 name from token contract", data: { senderAddress: e, tokenAddress: r, erc20Name: y } }), s !== "erc2612") throw new c("Unsupported permit type: " + s);
    const g = await this.getDomainSeparator(e, a, r), l = await this.constructDomainSeparatorWithoutVersion(y, u, o, r), T = await this.constructDomainSeparatorSaltAndWithoutChainId(y, u, o, r), h = (m({ level: "info", category: this.sentryCategoryPrefix, message: "domain separators", data: { domainSeparatorFromContract: g, constructedDomainSeparatorWithoutVersion: l, constructedDomainSeparatorWithSaltAndWithoutChainId: T } }), await qa(e, a, r)), A = (m({ level: "info", category: this.sentryCategoryPrefix, message: "get nonce from token contract", data: { senderAddress: e, tokenAddress: r, nonce: h } }), { owner: e, spender: i, value: p, nonce: h, deadline: d });
    return xs(a, n, A, o, y, r, u);
  }
  async constructDomainSeparatorWithoutVersion(e, a, n, s) {
    return encodeAbiParameters([{ type: "bytes32" }, { type: "bytes32" }, { type: "bytes32" }, { type: "uint256" }, { type: "address" }], [keccak256(toBytes("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)")), keccak256(toBytes(e)), keccak256(toBytes(a)), BigInt(n), s]);
  }
  async constructDomainSeparatorSaltAndWithoutChainId(e, a, n, s) {
    return encodeAbiParameters([{ type: "bytes32" }, { type: "bytes32" }, { type: "bytes32" }, { type: "address" }, { type: "bytes32" }], [keccak256(toBytes("EIP712Domain(string name,string version,address verifyingContract,bytes32 salt)")), keccak256(toBytes(e)), keccak256(toBytes(a)), s, encodeAbiParameters([{ type: "uint256" }], [BigInt(n)])]);
  }
  async getErc20Name(e, a, n) {
    return a.readContract({ address: n, account: e, functionName: "name", abi: ft });
  }
  async getDomainSeparator(e, a, n) {
    return a.readContract({ address: n, account: e, functionName: "DOMAIN_SEPARATOR", abi: ws });
  }
};
var F = { setConfig: kn, getConfig: ae, getChainId: V, getAvailableNetworks: Kt, getNetwork: ue, getNetworkAddress: de, getNetworkByChainId: ba, isBaseAssetByNetwork: ve, getBaseAssetData: va, getPureBaseAssetAddress: ga, sameAddress: ze, isSwapTargetForTopUp: oe, getSwapSourceForOnRamp: Ca, getSwapTargetForTopUp: Ge, isSettlementTokenForTopUp: pe, getSettlementTokensForTopUp: Sn, setExecutor: xn };
var Ze = "https://apicore.holyheld.com";
var It = "https://apiassets.holyheld.com";
var Ms = "https://apiview.holyheld.com/api";
var ya = "TOP_UP_EXCHANGE_PROXY_ADDRESS";
var Os = "SDKTEST";
var _s = 1;
var Fs = (t) => ({ useWalletClient() {
  return async (e) => {
    if (t === null) throw new c("Empty wallet client received");
    return e(t);
  };
} });
function Ws(t, e, a) {
  return { async isErc1271Signer() {
    return t === void 0 ? false : !!await Qe(a, t);
  }, supportsSignTypedDataV4() {
    return e;
  } };
}
var Bs = () => {
  const t = {}, e = new Promise((a, n) => {
    t.resolve = (s) => {
      a(s);
    }, t.reject = (s) => {
      n(s);
    };
  });
  return t.wait = async () => await e, t;
};
var Ka = (t, e, a) => {
  if (!e.has(t)) throw TypeError("Cannot " + a);
};
var L = (t, e, a) => (Ka(t, e, "read from private field"), a ? a.call(t) : e.get(t));
var Te = (t, e, a) => {
  if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, a);
};
var fe = (t, e, a, n) => (Ka(t, e, "write to private field"), n ? n.call(t, a) : e.set(t, a), a);
var Hs = ((t) => (t.Confirming = "confirming", t.Approving = "approving", t.Sending = "sending", t))(Hs || {});
var De;
var dt;
var ut;
var Ne;
var Me;
var lt;
var Z;
var Ls = class {
  constructor(e) {
    this.options = e, Te(this, De, void 0), Te(this, dt, void 0), Te(this, ut, void 0), Te(this, Ne, void 0), Te(this, Me, void 0), Te(this, lt, void 0), Te(this, Z, void 0), fe(this, dt, e.services.permitService), fe(this, ut, e.services.approvalService), fe(this, Ne, e.services.assetService), fe(this, Me, e.services.swapService), fe(this, De, e.services.tagService), fe(this, lt, e.services.estimationService), fe(this, Z, e.commonSDK);
  }
  async getTagInfoForTopUp(e) {
    L(this, Z).assertInitialized();
    try {
      return await L(this, De).getTagDataForTopUpExternal(e, this.options.apiKey);
    } catch (a) {
      throw a instanceof c ? new I(D.FailedTagInfo, "Failed to get tag information for top up", a) : a;
    }
  }
  getAvailableNetworks() {
    return L(this, Z).getAllAvailableNetworks().filter((e) => !Ve(F.getNetworkAddress(e, "TOP_UP_PROXY_ADDRESS")) && !Ve(F.getNetworkAddress(e, "TOP_UP_EXCHANGE_PROXY_ADDRESS")));
  }
  async convertTokenToEUR(e, a, n, s) {
    L(this, Z).assertInitialized();
    const r = F.getNetworkAddress(s, ya), i = F.getSwapTargetForTopUp(s);
    try {
      return await L(this, Me).convertTokenToEURForTopUpExternal(i.address, i.decimals, e, a, n, r, r, s, this.options.apiKey);
    } catch (o) {
      throw o instanceof c ? new I(D.FailedConversion, "Failed to convert token to EUR", o) : o;
    }
  }
  async convertEURToToken(e, a, n, s) {
    L(this, Z).assertInitialized();
    const r = F.getNetworkAddress(s, ya), i = F.getSwapTargetForTopUp(s);
    try {
      return await L(this, Me).convertEURToTokenForTopUpExternal(i.address, i.decimals, e, a, n, r, r, s, this.options.apiKey);
    } catch (o) {
      throw o instanceof c ? new I(D.FailedConversion, "Failed to convert EUR to token", o) : o;
    }
  }
  async getTopUpEstimation(e) {
    L(this, Z).assertInitialized();
    try {
      return (await L(this, lt).getTopUpEstimationExternal(e, this.options.apiKey)).priceInWei;
    } catch (a) {
      throw a instanceof c ? new I(D.FailedEstimation, "Failed to get top up estimation", a) : a;
    }
  }
  async topup(e, a, n, s, r, i, o, p, d = false, u) {
    var _a2;
    L(this, Z).assertInitialized(), L(this, Z).sendAudit({ data: { transferData: o, tokenAmount: i, tokenAddress: s, network: r }, address: n, apiKey: this.options.apiKey });
    try {
      const y = await a.getChainId(), g = F.getNetworkByChainId(y);
      if (g === void 0) throw new I(D.UnsupportedNetwork, `Unsupported chain id: ${y}`);
      if (g.network !== r) throw new I(D.UnexpectedWalletNetwork, "Wallet network must match the token network");
      const l = await L(this, De).getTagTopUpCodeExternal(p, this.options.apiKey);
      u === void 0 && (u = {});
      const T = await L(this, Ne).getFullTokenDataWithPriceExternal(s, r, this.options.apiKey), h = await this.convertTokenToEUR(T.address, T.decimals, i, r), A = await L(this, Z).getServerSettings(), E = p.toLowerCase() === Os.toLowerCase();
      if (!E && new bignumber_default(h.EURAmount).lt(new bignumber_default(A.external.minTopUpAmountInEUR).multipliedBy(new bignumber_default(0.99)))) throw new I(D.InvalidTopUpAmount, `Minimum allowed amount is ${A.external.minTopUpAmountInEUR} EUR`);
      const q = E ? _s : A.external.maxTopUpAmountInEUR;
      if (new bignumber_default(h.EURAmount).gt(new bignumber_default(q).multipliedBy(new bignumber_default(1.01)))) throw new I(D.InvalidTopUpAmount, `Maximum allowed amount is ${q} EUR`);
      let S = "0";
      const C = F.isSwapTargetForTopUp(s, r), v = F.isSettlementTokenForTopUp(s, r) && (((_a2 = F.getSettlementTokensForTopUp(r).find((j) => F.sameAddress(j.address, s))) == null ? void 0 : _a2.isEURStableCoin) ?? false);
      if (!C && !v) {
        const j = F.getSwapTargetForTopUp(r), O = await L(this, Ne).getTokenPricesExternal([{ address: j.address, network: j.network }], this.options.apiKey);
        if (O.length !== 1) throw new c("Failed to get token price");
        S = O[0].price, o === void 0 && (o = h.transferData);
      } else o = void 0;
      const w = Ws(n, d, e), k = new gs(w);
      await new is({ permitService: L(this, dt), approvalService: L(this, ut), permit2Service: k, walletInfo: w }).topUpCompound(n, e, Fs(a), T, i, S, o, l, {}, { onTransactionHash: (j) => {
        var _a3;
        (_a3 = u == null ? void 0 : u.onHashGenerate) == null ? void 0 : _a3.call(u, j);
      }, eventBus: { emit: (j) => {
        var _a3;
        if (j.state === b.Pending) {
          let O;
          switch (j.type) {
            case f.Confirm:
              O = "confirming";
              break;
            case f.Approve:
              O = "approving";
              break;
            default:
              O = "sending";
              break;
          }
          (_a3 = u == null ? void 0 : u.onStepChange) == null ? void 0 : _a3.call(u, O);
        }
      } }, onCallData: async (j) => {
        L(this, Z).sendAudit({ data: j, apiKey: this.options.apiKey, address: n });
      } });
    } catch (y) {
      throw y instanceof I ? y : y instanceof H && y.getCode() === "userRejectSign" ? new I(D.UserRejectedSignature, "User rejected the signature request", y) : y instanceof H && y.getCode() === "userRejectTransaction" ? new I(D.UserRejectedTransaction, "User rejected the transaction", y) : y instanceof c ? new I(D.FailedTopUp, `Top up failed${y instanceof K ? ` with code ${y.getCode()}` : ""}`, y) : y;
    }
  }
};
De = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap();
var Va = (t, e, a) => {
  if (!e.has(t)) throw TypeError("Cannot " + a);
};
var Q = (t, e, a) => (Va(t, e, "read from private field"), a ? a.call(t) : e.get(t));
var Ut = (t, e, a) => {
  if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, a);
};
var Dt = (t, e, a, n) => (Va(t, e, "write to private field"), n ? n.call(t, a) : e.set(t, a), a);
var Gs = 2e3;
var Oe;
var _e;
var X;
var qs = class {
  constructor(e) {
    this.options = e, Ut(this, Oe, void 0), Ut(this, _e, void 0), Ut(this, X, void 0), Dt(this, Oe, e.services.onRampService), Dt(this, _e, e.services.swapService), Dt(this, X, e.commonSDK);
  }
  getAvailableNetworks() {
    return Q(this, X).getAllAvailableNetworks().filter((e) => F.getSwapSourceForOnRamp(e) !== void 0);
  }
  async convertTokenToEUR(e, a, n) {
    Q(this, X).assertInitialized();
    try {
      const s = await Q(this, X).getTokenByAddressAndNetwork(e, a);
      return (await Q(this, _e).convertTokenToEURForOnRampExternal({ token: s, tokenAmount: n, apiKey: this.options.apiKey })).fiatAmount;
    } catch (s) {
      throw new I(D.FailedConvertOnRampAmount, "Fail convert token to EUR amount", s);
    }
  }
  async convertEURToToken(e, a, n) {
    Q(this, X).assertInitialized();
    try {
      const s = await Q(this, X).getTokenByAddressAndNetwork(e, a);
      return (await Q(this, _e).convertEURToTokenForOnRampExternal({ token: s, fiatAmount: n, apiKey: this.options.apiKey })).tokenAmount;
    } catch (s) {
      throw new I(D.FailedConvertOnRampAmount, "Fail convert EUR to token amount", s);
    }
  }
  async requestOnRamp(e, a, n, s) {
    Q(this, X).assertInitialized(), Q(this, X).sendAudit({ data: { tokenAddress: a, tokenNetwork: n, fiatAmount: s, walletAddress: e }, address: e, apiKey: this.options.apiKey });
    try {
      const r = await Q(this, X).getServerSettings();
      if (new bignumber_default(s).lt(r.external.minOnRampAmountInEUR)) throw new I(D.InvalidOnRampAmount, `Minimum allowed amount is ${r.external.minOnRampAmountInEUR} EUR`);
      if (new bignumber_default(s).gt(new bignumber_default(r.external.maxOnRampAmountInEUR))) throw new I(D.InvalidOnRampAmount, `Maximum allowed amount is ${r.external.maxOnRampAmountInEUR} EUR`);
      const i = await Q(this, X).getTokenByAddressAndNetwork(a, n), o = await Q(this, Oe).requestExecute({ address: e, token: i, fiatAmount: s, apiKey: this.options.apiKey });
      return { amountEUR: o.amountEUR, amountToken: o.amountToken, beneficiaryAddress: o.beneficiaryAddress, chainId: o.chainId, feeEUR: o.feeEUR, token: i, requestUid: o.requestUid };
    } catch (r) {
      throw r instanceof I ? r : r instanceof H && r.getCode() === "userRejectSign" ? new I(D.UserRejectedSignature, "User rejected the signature request", r) : r instanceof c ? new I(D.FailedCreateOnRampRequest, `On-ramp failed${r instanceof K ? ` with code ${r.getCode()}` : ""}`, r) : r;
    }
  }
  async watchRequestId(e, a) {
    Q(this, X).assertInitialized();
    const { reject: n, resolve: s, wait: r } = Bs();
    let i;
    a && (i = setTimeout(() => {
      n(new I(D.FailedWatchOnRampRequestTimeout, "watch request timeout"));
    }, a));
    const o = setInterval(async () => {
      try {
        const p = await Q(this, Oe).requestStatus({ requestUid: e, apiKey: this.options.apiKey });
        switch (p.status) {
          case "success":
            s(true);
            break;
          case "declined":
            s(false);
            break;
          case "failed":
            n(new I(D.FailedOnRampRequest, p.reason).withPayload({ reason: p.reason }));
            break;
          case "not_approved":
          default:
            return;
        }
      } catch (p) {
        n(new I(D.FailedWatchOnRampRequest, "Failed request on-ramp status", p));
        return;
      }
    }, Gs);
    try {
      return await r();
    } catch (p) {
      throw p instanceof I ? p : new I(D.FailedWatchOnRampRequest, `On-ramp failed${p instanceof K ? ` with code ${p.getCode()}` : ""}`, p);
    } finally {
      clearInterval(o), clearTimeout(i);
    }
  }
};
Oe = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap();
var $s = Object.defineProperty;
var Ks = (t, e, a) => e in t ? $s(t, e, { enumerable: true, configurable: true, writable: true, value: a }) : t[e] = a;
var Nt = (t, e, a) => (Ks(t, typeof e != "symbol" ? e + "" : e, a), a);
var ja = (t, e, a) => {
  if (!e.has(t)) throw TypeError("Cannot " + a);
};
var z = (t, e, a) => (ja(t, e, "read from private field"), a ? a.call(t) : e.get(t));
var re = (t, e, a) => {
  if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, a);
};
var ie = (t, e, a, n) => (ja(t, e, "write to private field"), n ? n.call(t, a) : e.set(t, a), a);
var ct;
var yt;
var Ae;
var Fe;
var We;
var mt;
var xe;
var ht;
var gt;
var wt;
var er = class {
  constructor(e) {
    this.options = e, re(this, ct, void 0), re(this, yt, void 0), re(this, Ae, void 0), re(this, Fe, void 0), re(this, We, void 0), re(this, mt, void 0), re(this, xe, void 0), re(this, ht, void 0), re(this, gt, void 0), Nt(this, "logger"), re(this, wt, false), Nt(this, "onRamp"), Nt(this, "offRamp"), ie(this, ct, new Ns()), ie(this, yt, new Rn(Ms, "")), ie(this, Ae, new In(It, "sdk")), ie(this, Fe, new Ln(Ze)), ie(this, We, new Wn(It)), ie(this, mt, new Un(Ze)), ie(this, xe, new Fn(Ze)), ie(this, ht, new Dn(It)), ie(this, gt, new _n(Ze)), this.logger = e.logger === true ? bn() : e.logger || (() => {
    }), F.setExecutor({ addSentryBreadcrumb: ({ level: a, message: n, data: s }) => {
      if (!a || !n) return;
      const r = Object.values(et).includes(a) ? a : et.Warning;
      this.logger(r, n, s);
    } }), this.onRamp = new qs({ commonSDK: this, services: { onRampService: z(this, gt), swapService: z(this, We) }, apiKey: this.options.apiKey }), this.offRamp = new Ls({ commonSDK: this, services: { permitService: z(this, ct), tagService: z(this, Fe), approvalService: z(this, yt), assetService: z(this, Ae), swapService: z(this, We), estimationService: z(this, ht) }, apiKey: this.options.apiKey });
  }
  async init() {
    try {
      const e = await z(this, xe).getClientConfigExternal("sdk", this.options.apiKey);
      F.setConfig(e.references.networks), ie(this, wt, true);
    } catch (e) {
      throw e instanceof c ? new I(D.FailedInitialization, "Failed to initialize SDK", e) : e;
    }
  }
  assertInitialized() {
    if (!z(this, wt)) throw new I(D.NotInitialized, "SDK is not initialized");
  }
  getAllAvailableNetworks() {
    return this.assertInitialized(), F.getAvailableNetworks();
  }
  getNetwork(e) {
    return this.assertInitialized(), F.getNetwork(e);
  }
  getNetworkChainId(e) {
    return this.assertInitialized(), F.getChainId(e);
  }
  getNetworkByChainId(e) {
    return this.assertInitialized(), F.getNetworkByChainId(e);
  }
  async getServerSettings() {
    this.assertInitialized();
    try {
      return await z(this, xe).getServerSettingsExternal(this.options.apiKey);
    } catch (e) {
      throw e instanceof c ? new I(D.FailedSettings, "Failed to get settings", e) : e;
    }
  }
  async validateAddress(e) {
    this.assertInitialized();
    try {
      return await z(this, Fe).validateAddressExternal(e, this.options.apiKey);
    } catch (a) {
      throw a instanceof c ? new I(D.FailedAddressInfo, "Failed to validate address", a) : a;
    }
  }
  async getWalletBalances(e) {
    this.assertInitialized();
    try {
      const { tokens: a } = await z(this, Ae).getMultiChainWalletTokensExternal(e, this.options.apiKey), n = F.getAvailableNetworks();
      return { tokens: a.filter((s) => n.includes(s.network)) };
    } catch (a) {
      throw a instanceof c ? new I(D.FailedWalletBalances, "Failed to get wallet balances", a) : a;
    }
  }
  async getWalletList(e) {
    return (await z(this, xe).getClientConfigExternal(e, this.options.apiKey)).wallets;
  }
  async getTokenByAddressAndNetwork(e, a) {
    return await z(this, Ae).getTokenData(e, a);
  }
  async sendAudit(e) {
    try {
      await z(this, mt).sendAuditEventExternal(e.data, e.address, this.options.apiKey, e.operationId);
    } catch {
      this.logger(et.Warning, "Failed to send audit event");
    }
  }
};
ct = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap();
export {
  I as HolyheldSDKError,
  D as HolyheldSDKErrorCode,
  et as LogLevel,
  N as Network,
  Hs as TopUpStep,
  er as default
};
//# sourceMappingURL=@holyheld_sdk.js.map
