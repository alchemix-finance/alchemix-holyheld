"use client";
import {
  require_dijkstra
} from "./chunk-34ANLMJ5.js";
import {
  en_US_default
} from "./chunk-CLNE6NC6.js";
import {
  __assign,
  __rest,
  __spreadArray,
  init_tslib_es6
} from "./chunk-OIEZYFRY.js";
import {
  clsx_default
} from "./chunk-2KHBIA62.js";
import {
  HDKey,
  generateMnemonic,
  mnemonicToSeedSync,
  validateMnemonic,
  wordlist,
  wordlist10,
  wordlist2,
  wordlist3,
  wordlist4,
  wordlist5,
  wordlist6,
  wordlist7,
  wordlist8,
  wordlist9
} from "./chunk-YS3U2Q7I.js";
import {
  coinbaseWallet,
  safe,
  walletConnect
} from "./chunk-ZPXQNAER.js";
import {
  require_react_dom
} from "./chunk-PPA3WXSL.js";
import {
  createConfig,
  createConnector,
  import_index,
  injected,
  useAccount,
  useAccountEffect,
  useBalance,
  useConfig,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  usePublicClient,
  useSignMessage,
  useSwitchChain
} from "./chunk-GHFML7YB.js";
import "./chunk-7MQHQGKA.js";
import {
  http
} from "./chunk-VC3O4U6S.js";
import "./chunk-QQNE7WTD.js";
import "./chunk-LOTR7D5R.js";
import {
  useQuery
} from "./chunk-RXI7QRSW.js";
import "./chunk-GJP3LH4P.js";
import {
  require_react
} from "./chunk-OJK6TXMW.js";
import "./chunk-ALUSTTMD.js";
import {
  mainnet
} from "./chunk-BMSFGHLN.js";
import "./chunk-HCW5W724.js";
import "./chunk-KWZXG76I.js";
import "./chunk-DSWFES7F.js";
import {
  UserRejectedRequestError,
  formatAbi,
  formatAbiItem2 as formatAbiItem,
  formatAbiParameters,
  isAddress,
  parseAbi,
  parseAbiItem,
  parseAbiParameters
} from "./chunk-QL5GCBQ7.js";
import "./chunk-ZTBOFYUR.js";
import {
  ens_normalize
} from "./chunk-C4CO4M2N.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-256EKJAK.js";

// node_modules/ua-parser-js/src/ua-parser.js
var require_ua_parser = __commonJS({
  "node_modules/ua-parser-js/src/ua-parser.js"(exports, module) {
    (function(window2, undefined2) {
      "use strict";
      var LIBVERSION = "1.0.39", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
      var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS", SUFFIX_BROWSER = " Browser";
      var extend = function(regexes2, extensions) {
        var mergedRegexes = {};
        for (var i in regexes2) {
          if (extensions[i] && extensions[i].length % 2 === 0) {
            mergedRegexes[i] = extensions[i].concat(regexes2[i]);
          } else {
            mergedRegexes[i] = regexes2[i];
          }
        }
        return mergedRegexes;
      }, enumerize = function(arr) {
        var enums = {};
        for (var i = 0; i < arr.length; i++) {
          enums[arr[i].toUpperCase()] = arr[i];
        }
        return enums;
      }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
      }, lowerize = function(str) {
        return str.toLowerCase();
      }, majorize = function(version2) {
        return typeof version2 === STR_TYPE ? version2.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined2;
      }, trim3 = function(str, len) {
        if (typeof str === STR_TYPE) {
          str = str.replace(/^\s\s*/, EMPTY);
          return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
      };
      var rgxMapper = function(ua2, arrays) {
        var i = 0, j, k, p, q, matches, match;
        while (i < arrays.length && !matches) {
          var regex = arrays[i], props = arrays[i + 1];
          j = k = 0;
          while (j < regex.length && !matches) {
            if (!regex[j]) {
              break;
            }
            matches = regex[j++].exec(ua2);
            if (!!matches) {
              for (p = 0; p < props.length; p++) {
                match = matches[++k];
                q = props[p];
                if (typeof q === OBJ_TYPE && q.length > 0) {
                  if (q.length === 2) {
                    if (typeof q[1] == FUNC_TYPE) {
                      this[q[0]] = q[1].call(this, match);
                    } else {
                      this[q[0]] = q[1];
                    }
                  } else if (q.length === 3) {
                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                      this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined2;
                    } else {
                      this[q[0]] = match ? match.replace(q[1], q[2]) : undefined2;
                    }
                  } else if (q.length === 4) {
                    this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined2;
                  }
                } else {
                  this[q] = match ? match : undefined2;
                }
              }
            }
          }
          i += 2;
        }
      }, strMapper = function(str, map) {
        for (var i in map) {
          if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
            for (var j = 0; j < map[i].length; j++) {
              if (has(map[i][j], str)) {
                return i === UNKNOWN ? undefined2 : i;
              }
            }
          } else if (has(map[i], str)) {
            return i === UNKNOWN ? undefined2 : i;
          }
        }
        return map.hasOwnProperty("*") ? map["*"] : str;
      };
      var oldSafariMap = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }, windowsVersionMap = {
        "ME": "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        "2000": "NT 5.0",
        "XP": ["NT 5.1", "NT 5.2"],
        "Vista": "NT 6.0",
        "7": "NT 6.1",
        "8": "NT 6.2",
        "8.1": "NT 6.3",
        "10": ["NT 6.4", "NT 10.0"],
        "RT": "ARM"
      };
      var regexes = {
        browser: [
          [
            /\b(?:crmo|crios)\/([\w\.]+)/i
            // Chrome for Android/iOS
          ],
          [VERSION, [NAME, "Chrome"]],
          [
            /edg(?:e|ios|a)?\/([\w\.]+)/i
            // Microsoft Edge
          ],
          [VERSION, [NAME, "Edge"]],
          [
            // Presto based
            /(opera mini)\/([-\w\.]+)/i,
            // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
            // Opera
          ],
          [NAME, VERSION],
          [
            /opios[\/ ]+([\w\.]+)/i
            // Opera mini on iphone >= 8.0
          ],
          [VERSION, [NAME, OPERA + " Mini"]],
          [
            /\bop(?:rg)?x\/([\w\.]+)/i
            // Opera GX
          ],
          [VERSION, [NAME, OPERA + " GX"]],
          [
            /\bopr\/([\w\.]+)/i
            // Opera Webkit
          ],
          [VERSION, [NAME, OPERA]],
          [
            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
            // Baidu
          ],
          [VERSION, [NAME, "Baidu"]],
          [
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
            // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
            // Trident based
            /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
            // Avant/IEMobile/SlimBrowser
            /(?:ms|\()(ie) ([\w\.]+)/i,
            // Internet Explorer
            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,
            // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio
            /(heytap|ovi)browser\/([\d\.]+)/i,
            // HeyTap/Ovi
            /(weibo)__([\d\.]+)/i
            // Weibo
          ],
          [NAME, VERSION],
          [
            /quark(?:pc)?\/([-\w\.]+)/i
            // Quark
          ],
          [VERSION, [NAME, "Quark"]],
          [
            /\bddg\/([\w\.]+)/i
            // DuckDuckGo
          ],
          [VERSION, [NAME, "DuckDuckGo"]],
          [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
            // UCBrowser
          ],
          [VERSION, [NAME, "UC" + BROWSER]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i
            // WeChat
          ],
          [VERSION, [NAME, "WeChat"]],
          [
            /konqueror\/([\w\.]+)/i
            // Konqueror
          ],
          [VERSION, [NAME, "Konqueror"]],
          [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
            // IE11
          ],
          [VERSION, [NAME, "IE"]],
          [
            /ya(?:search)?browser\/([\w\.]+)/i
            // Yandex
          ],
          [VERSION, [NAME, "Yandex"]],
          [
            /slbrowser\/([\w\.]+)/i
            // Smart Lenovo Browser
          ],
          [VERSION, [NAME, "Smart Lenovo " + BROWSER]],
          [
            /(avast|avg)\/([\w\.]+)/i
            // Avast/AVG Secure Browser
          ],
          [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION],
          [
            /\bfocus\/([\w\.]+)/i
            // Firefox Focus
          ],
          [VERSION, [NAME, FIREFOX + " Focus"]],
          [
            /\bopt\/([\w\.]+)/i
            // Opera Touch
          ],
          [VERSION, [NAME, OPERA + " Touch"]],
          [
            /coc_coc\w+\/([\w\.]+)/i
            // Coc Coc Browser
          ],
          [VERSION, [NAME, "Coc Coc"]],
          [
            /dolfin\/([\w\.]+)/i
            // Dolphin
          ],
          [VERSION, [NAME, "Dolphin"]],
          [
            /coast\/([\w\.]+)/i
            // Opera Coast
          ],
          [VERSION, [NAME, OPERA + " Coast"]],
          [
            /miuibrowser\/([\w\.]+)/i
            // MIUI Browser
          ],
          [VERSION, [NAME, "MIUI " + BROWSER]],
          [
            /fxios\/([-\w\.]+)/i
            // Firefox for iOS
          ],
          [VERSION, [NAME, FIREFOX]],
          [
            /\bqihu|(qi?ho?o?|360)browser/i
            // 360
          ],
          [[NAME, "360" + SUFFIX_BROWSER]],
          [
            /\b(qq)\/([\w\.]+)/i
            // QQ
          ],
          [[NAME, /(.+)/, "$1Browser"], VERSION],
          [
            /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
          ],
          [[NAME, /(.+)/, "$1" + SUFFIX_BROWSER], VERSION],
          [
            // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
            /samsungbrowser\/([\w\.]+)/i
            // Samsung Internet
          ],
          [VERSION, [NAME, SAMSUNG + " Internet"]],
          [
            /(comodo_dragon)\/([\w\.]+)/i
            // Comodo Dragon
          ],
          [[NAME, /_/g, " "], VERSION],
          [
            /metasr[\/ ]?([\d\.]+)/i
            // Sogou Explorer
          ],
          [VERSION, [NAME, "Sogou Explorer"]],
          [
            /(sogou)mo\w+\/([\d\.]+)/i
            // Sogou Mobile
          ],
          [[NAME, "Sogou Mobile"], VERSION],
          [
            /(electron)\/([\w\.]+) safari/i,
            // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            // Tesla
            /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i
            // QQBrowser/2345 Browser
          ],
          [NAME, VERSION],
          [
            /(lbbrowser|rekonq)/i,
            // LieBao Browser/Rekonq
            /\[(linkedin)app\]/i
            // LinkedIn App for iOS & Android
          ],
          [NAME],
          [
            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
            // Facebook App for iOS & Android
          ],
          [[NAME, FACEBOOK], VERSION],
          [
            /(Klarna)\/([\w\.]+)/i,
            // Klarna Shopping Browser for iOS & Android
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            // Kakao App
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            // Naver InApp
            /safari (line)\/([\w\.]+)/i,
            // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,
            // Line App for Android
            /(alipay)client\/([\w\.]+)/i,
            // Alipay
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,
            // Twitter
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
            // Chromium/Instagram/Snapchat
          ],
          [NAME, VERSION],
          [
            /\bgsa\/([\w\.]+) .*safari\//i
            // Google Search Appliance on iOS
          ],
          [VERSION, [NAME, "GSA"]],
          [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
            // TikTok
          ],
          [VERSION, [NAME, "TikTok"]],
          [
            /headlesschrome(?:\/([\w\.]+)| )/i
            // Chrome Headless
          ],
          [VERSION, [NAME, CHROME + " Headless"]],
          [
            / wv\).+(chrome)\/([\w\.]+)/i
            // Chrome WebView
          ],
          [[NAME, CHROME + " WebView"], VERSION],
          [
            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
            // Android Browser
          ],
          [VERSION, [NAME, "Android " + BROWSER]],
          [
            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
            // Chrome/OmniWeb/Arora/Tizen/Nokia
          ],
          [NAME, VERSION],
          [
            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
            // Mobile Safari
          ],
          [VERSION, [NAME, "Mobile Safari"]],
          [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
            // Safari & Safari Mobile
          ],
          [VERSION, NAME],
          [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
            // Safari < 3.0
          ],
          [NAME, [VERSION, strMapper, oldSafariMap]],
          [
            /(webkit|khtml)\/([\w\.]+)/i
          ],
          [NAME, VERSION],
          [
            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i
            // Netscape
          ],
          [[NAME, "Netscape"], VERSION],
          [
            /(wolvic)\/([\w\.]+)/i
            // Wolvic
          ],
          [NAME, VERSION],
          [
            /mobile vr; rv:([\w\.]+)\).+firefox/i
            // Firefox Reality
          ],
          [VERSION, [NAME, FIREFOX + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            // Flow
            /(swiftfox)/i,
            // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
            // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,
            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            // Mozilla
            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i
            // Links
          ],
          [NAME, [VERSION, /_/g, "."]],
          [
            /(cobalt)\/([\w\.]+)/i
            // Cobalt
          ],
          [NAME, [VERSION, /master.|lts./, ""]]
        ],
        cpu: [
          [
            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
            // AMD64 (x64)
          ],
          [[ARCHITECTURE, "amd64"]],
          [
            /(ia32(?=;))/i
            // IA32 (quicktime)
          ],
          [[ARCHITECTURE, lowerize]],
          [
            /((?:i[346]|x)86)[;\)]/i
            // IA32 (x86)
          ],
          [[ARCHITECTURE, "ia32"]],
          [
            /\b(aarch64|arm(v?8e?l?|_?64))\b/i
            // ARM64
          ],
          [[ARCHITECTURE, "arm64"]],
          [
            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
            // ARMHF
          ],
          [[ARCHITECTURE, "armhf"]],
          [
            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
          ],
          [[ARCHITECTURE, "arm"]],
          [
            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
            // PowerPC
          ],
          [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
          [
            /(sun4\w)[;\)]/i
            // SPARC
          ],
          [[ARCHITECTURE, "sparc"]],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
          ],
          [[ARCHITECTURE, lowerize]]
        ],
        device: [
          [
            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////
            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr])[-\w]+)/i,
            /sec-(sgh\w+)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
          [
            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
            // iPod/iPhone
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
          [
            /(macintosh);/i
          ],
          [MODEL, [VENDOR, APPLE]],
          [
            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
          [
            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
          [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
          [
            // Xiaomi
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
            // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,
            // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            // Xiaomi Redmi
            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
            // Xiaomi Redmi 'numeric' models
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i
            // Xiaomi Mi
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
          [
            /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
            // Redmi Pad
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
            // Mi Pad tablets
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
          [
            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
          ],
          [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]],
          [
            /\b(opd2\d{3}a?) bui/i
          ],
          [MODEL, [VENDOR, "OPPO"], [TYPE, TABLET]],
          [
            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
          ],
          [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
          [
            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
          ],
          [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
          [
            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
          [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
          [
            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, TABLET]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
          [
            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
          ],
          [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
          [
            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
          ],
          [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]],
          [
            // Google
            /(pixel c)\b/i
            // Google Pixel C
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
          [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
            // Google Pixel
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
          [
            // Sony
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ],
          [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
          [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
          ],
          [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
          [
            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
          ],
          [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
          [
            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i
            // Kindle Fire HD
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
          [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
            // Fire Phone
          ],
          [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
          [
            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i
            // BlackBerry PlayBook
          ],
          [MODEL, VENDOR, [TYPE, TABLET]],
          [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i
            // BlackBerry 10
          ],
          [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
          [
            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
          [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
          [
            // HTC
            /(nexus 9)/i
            // HTC Nexus 9
          ],
          [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            // HTC
            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
            // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
          ],
          [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
          [
            // TCL
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i
          ],
          [MODEL, [VENDOR, "TCL"], [TYPE, TABLET]],
          [
            // itel
            /(itel) ((\w+))/i
          ],
          [[VENDOR, lowerize], MODEL, [TYPE, strMapper, { "tablet": ["p10001l", "w7001"], "*": "mobile" }]],
          [
            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
          ],
          [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
          [
            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
          ],
          [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
          [
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]],
          [
            // Nothing
            /droid.+; (a(?:015|06[35]|142p?))/i
          ],
          [MODEL, [VENDOR, "Nothing"], [TYPE, MOBILE]],
          [
            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
            // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,
            // HP iPAQ
            /(asus)-?(\w+)/i,
            // Asus
            /(microsoft); (lumia[\w ]+)/i,
            // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,
            // Lenovo
            /(jolla)/i,
            // Jolla
            /(oppo) ?([\w ]+) bui/i
            // OPPO
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(kobo)\s(ereader|touch)/i,
            // Kobo
            /(archos) (gamepad2?)/i,
            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            // HP TouchPad
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(nook)[\w ]+build\/(\w+)/i,
            // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,
            // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,
            // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i
            // Vodafone
          ],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [
            /(surface duo)/i
            // Surface Duo
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
          [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i
            // Fairphone
          ],
          [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
          [
            /(u304aa)/i
            // AT&T
          ],
          [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]],
          [
            /\bsie-(\w*)/i
            // Siemens
          ],
          [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
          [
            /\b(rct\w+) b/i
            // RCA Tablets
          ],
          [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
          [
            /\b(venue[\d ]{2,7}) b/i
            // Dell Venue Tablets
          ],
          [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
          [
            /\b(q(?:mv|ta)\w+) b/i
            // Verizon Tablet
          ],
          [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
          [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
            // Barnes & Noble Tablet
          ],
          [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]],
          [
            /\b(tm\d{3}\w+) b/i
          ],
          [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
          [
            /\b(k88) b/i
            // ZTE K Series Tablet
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
          [
            /\b(nx\d{3}j) b/i
            // ZTE Nubia
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]],
          [
            /\b(gen\d{3}) b.+49h/i
            // Swiss GEN Mobile
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
          [
            /\b(zur\d{3}) b/i
            // Swiss ZUR Tablet
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
          [
            /\b((zeki)?tb.*\b) b/i
            // Zeki Tablets
          ],
          [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
          [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
            // Dragon Touch Tablet
          ],
          [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
          [
            /\b(ns-?\w{0,9}) b/i
            // Insignia Tablets
          ],
          [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
          [
            /\b((nxa|next)-?\w{0,9}) b/i
            // NextBook Tablets
          ],
          [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
          [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
            // Voice Xtreme Phones
          ],
          [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
          [
            /\b(lvtel\-)?(v1[12]) b/i
            // LvTel Phones
          ],
          [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
          [
            /\b(ph-1) /i
            // Essential PH-1
          ],
          [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
          [
            /\b(v(100md|700na|7011|917g).*\b) b/i
            // Envizen Tablets
          ],
          [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
          [
            /\b(trio[-\w\. ]+) b/i
            // MachSpeed Tablets
          ],
          [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
          [
            /\btu_(1491) b/i
            // Rotor Tablets
          ],
          [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
          [
            /(shield[\w ]+) b/i
            // Nvidia Shield Tablets
          ],
          [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]],
          [
            /(sprint) (\w+)/i
            // Sprint Phones
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(kin\.[onetw]{3})/i
            // Microsoft Kin
          ],
          [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
          [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
            // Zebra
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
          [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
          [
            ///////////////////
            // SMARTTVS
            ///////////////////
            /smart-tv.+(samsung)/i
            // Samsung
          ],
          [VENDOR, [TYPE, SMARTTV]],
          [
            /hbbtv.+maple;(\d+)/i
          ],
          [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
          [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
            // LG SmartTV
          ],
          [[VENDOR, LG], [TYPE, SMARTTV]],
          [
            /(apple) ?tv/i
            // Apple TV
          ],
          [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
          [
            /crkey/i
            // Google Chromecast
          ],
          [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
          [
            /droid.+aft(\w+)( bui|\))/i
            // Fire TV
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
          [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i
            // Sharp
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
          [
            /(bravia[\w ]+)( bui|\))/i
            // Sony
          ],
          [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
          [
            /(mitv-\w{5}) bui/i
            // Xiaomi
          ],
          [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
          [
            /Hbbtv.*(technisat) (.*);/i
            // TechniSAT
          ],
          [VENDOR, MODEL, [TYPE, SMARTTV]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
            // HbbTV devices
          ],
          [[VENDOR, trim3], [MODEL, trim3], [TYPE, SMARTTV]],
          [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
            // SmartTV from Unidentified Vendors
          ],
          [[TYPE, SMARTTV]],
          [
            ///////////////////
            // CONSOLES
            ///////////////////
            /(ouya)/i,
            // Ouya
            /(nintendo) ([wids3utch]+)/i
            // Nintendo
          ],
          [VENDOR, MODEL, [TYPE, CONSOLE]],
          [
            /droid.+; (shield) bui/i
            // Nvidia
          ],
          [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
          [
            /(playstation [345portablevi]+)/i
            // Playstation
          ],
          [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
          [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
            // Microsoft Xbox
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
          [
            ///////////////////
            // WEARABLES
            ///////////////////
            /\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i
            // Samsung Galaxy Watch
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, WEARABLE]],
          [
            /((pebble))app/i
            // Pebble
          ],
          [VENDOR, MODEL, [TYPE, WEARABLE]],
          [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
            // Apple Watch
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
          [
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
          [
            /droid.+; (wt63?0{2,3})\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
          [
            /(quest( \d| pro)?)/i
            // Oculus Quest
          ],
          [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]],
          [
            ///////////////////
            // EMBEDDED
            ///////////////////
            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
            // Tesla
          ],
          [VENDOR, [TYPE, EMBEDDED]],
          [
            /(aeobc)\b/i
            // Echo Dot
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]],
          [
            ////////////////////
            // MIXED (GENERIC)
            ///////////////////
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
            // Android Phones from Unidentified Vendors
          ],
          [MODEL, [TYPE, MOBILE]],
          [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
            // Android Tablets from Unidentified Vendors
          ],
          [MODEL, [TYPE, TABLET]],
          [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
            // Unidentifiable Tablet
          ],
          [[TYPE, TABLET]],
          [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
            // Unidentifiable Mobile
          ],
          [[TYPE, MOBILE]],
          [
            /(android[-\w\. ]{0,9});.+buil/i
            // Generic Android Device
          ],
          [MODEL, [VENDOR, "Generic"]]
        ],
        engine: [
          [
            /windows.+ edge\/([\w\.]+)/i
            // EdgeHTML
          ],
          [VERSION, [NAME, EDGE + "HTML"]],
          [
            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
            // Blink
          ],
          [VERSION, [NAME, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,
            // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            // iCab
            /\b(libweb)/i
          ],
          [NAME, VERSION],
          [
            /rv\:([\w\.]{1,9})\b.+(gecko)/i
            // Gecko
          ],
          [VERSION, NAME]
        ],
        os: [
          [
            // Windows
            /microsoft (windows) (vista|xp)/i
            // Windows (iTunes)
          ],
          [NAME, VERSION],
          [
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i
            // Windows Phone
          ],
          [NAME, [VERSION, strMapper, windowsVersionMap]],
          [
            /windows nt 6\.2; (arm)/i,
            // Windows RT
            /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [[VERSION, strMapper, windowsVersionMap], [NAME, "Windows"]],
          [
            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            // iOS
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
          ],
          [[VERSION, /_/g, "."], [NAME, "iOS"]],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
            // Mac OS
          ],
          [[NAME, MAC_OS], [VERSION, /_/g, "."]],
          [
            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
            // Android-x86/HarmonyOS
          ],
          [VERSION, NAME],
          [
            // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            // Tizen/KaiOS
            /\((series40);/i
            // Series 40
          ],
          [NAME, VERSION],
          [
            /\(bb(10);/i
            // BlackBerry 10
          ],
          [VERSION, [NAME, BLACKBERRY]],
          [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
            // Symbian
          ],
          [VERSION, [NAME, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
            // Firefox OS
          ],
          [VERSION, [NAME, FIREFOX + " OS"]],
          [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
            // WebOS
          ],
          [VERSION, [NAME, "webOS"]],
          [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
            // watchOS
          ],
          [VERSION, [NAME, "watchOS"]],
          [
            // Google Chromecast
            /crkey\/([\d\.]+)/i
            // Google Chromecast
          ],
          [VERSION, [NAME, CHROME + "cast"]],
          [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
            // Chromium OS
          ],
          [[NAME, CHROMIUM_OS], VERSION],
          [
            // Smart TVs
            /panasonic;(viera)/i,
            // Panasonic Viera
            /(netrange)mmh/i,
            // Netrange
            /(nettv)\/(\d+\.[\w\.]+)/i,
            // NetTV
            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,
            // Microsoft Xbox (360, One, X, S, Series X, Series S)
            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,
            // Mint
            /(mageia|vectorlinux)[; ]/i,
            // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,
            // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,
            // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i
            // Haiku
          ],
          [NAME, VERSION],
          [
            /(sunos) ?([\w\.\d]*)/i
            // Solaris
          ],
          [[NAME, "Solaris"], VERSION],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
            /(unix) ?([\w\.]*)/i
            // UNIX
          ],
          [NAME, VERSION]
        ]
      };
      var UAParser2 = function(ua2, extensions) {
        if (typeof ua2 === OBJ_TYPE) {
          extensions = ua2;
          ua2 = undefined2;
        }
        if (!(this instanceof UAParser2)) {
          return new UAParser2(ua2, extensions).getResult();
        }
        var _navigator = typeof window2 !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined2;
        var _ua = ua2 || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined2;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
          var _browser = {};
          _browser[NAME] = undefined2;
          _browser[VERSION] = undefined2;
          rgxMapper.call(_browser, _ua, _rgxmap.browser);
          _browser[MAJOR] = majorize(_browser[VERSION]);
          if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
            _browser[NAME] = "Brave";
          }
          return _browser;
        };
        this.getCPU = function() {
          var _cpu = {};
          _cpu[ARCHITECTURE] = undefined2;
          rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
          return _cpu;
        };
        this.getDevice = function() {
          var _device = {};
          _device[VENDOR] = undefined2;
          _device[MODEL] = undefined2;
          _device[TYPE] = undefined2;
          rgxMapper.call(_device, _ua, _rgxmap.device);
          if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
            _device[TYPE] = MOBILE;
          }
          if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
            _device[MODEL] = "iPad";
            _device[TYPE] = TABLET;
          }
          return _device;
        };
        this.getEngine = function() {
          var _engine = {};
          _engine[NAME] = undefined2;
          _engine[VERSION] = undefined2;
          rgxMapper.call(_engine, _ua, _rgxmap.engine);
          return _engine;
        };
        this.getOS = function() {
          var _os = {};
          _os[NAME] = undefined2;
          _os[VERSION] = undefined2;
          rgxMapper.call(_os, _ua, _rgxmap.os);
          if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != "Unknown") {
            _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
          }
          return _os;
        };
        this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        };
        this.getUA = function() {
          return _ua;
        };
        this.setUA = function(ua3) {
          _ua = typeof ua3 === STR_TYPE && ua3.length > UA_MAX_LENGTH ? trim3(ua3, UA_MAX_LENGTH) : ua3;
          return this;
        };
        this.setUA(_ua);
        return this;
      };
      UAParser2.VERSION = LIBVERSION;
      UAParser2.BROWSER = enumerize([NAME, VERSION, MAJOR]);
      UAParser2.CPU = enumerize([ARCHITECTURE]);
      UAParser2.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
      UAParser2.ENGINE = UAParser2.OS = enumerize([NAME, VERSION]);
      if (typeof exports !== UNDEF_TYPE) {
        if (typeof module !== UNDEF_TYPE && module.exports) {
          exports = module.exports = UAParser2;
        }
        exports.UAParser = UAParser2;
      } else {
        if (typeof define === FUNC_TYPE && define.amd) {
          define(function() {
            return UAParser2;
          });
        } else if (typeof window2 !== UNDEF_TYPE) {
          window2.UAParser = UAParser2;
        }
      }
      var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
      if ($ && !$.ua) {
        var parser = new UAParser2();
        $.ua = parser.getResult();
        $.ua.get = function() {
          return parser.getUA();
        };
        $.ua.set = function(ua2) {
          parser.setUA(ua2);
          var result = parser.getResult();
          for (var prop in result) {
            $.ua[prop] = result[prop];
          }
        };
      }
    })(typeof window === "object" ? window : exports);
  }
});

// node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "node_modules/qrcode/lib/can-promise.js"(exports, module) {
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// node_modules/qrcode/lib/core/utils.js
var require_utils = __commonJS({
  "node_modules/qrcode/lib/core/utils.js"(exports) {
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version2) {
      if (!version2) throw new Error('"version" cannot be null or undefined');
      if (version2 < 1 || version2 > 40) throw new Error('"version" should be in range from 1 to 40');
      return version2 * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version2) {
      return CODEWORDS_COUNT[version2];
    };
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f2) {
      if (typeof f2 !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f2;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString5(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from29(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString5(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index2) {
        const bufIndex = Math.floor(index2 / 8);
        return (this.buffer[bufIndex] >>> 7 - index2 % 8 & 1) === 1;
      },
      put: function(num2, length) {
        for (let i = 0; i < length; i++) {
          this.putBit((num2 >>> length - i - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    function BitMatrix(size4) {
      if (!size4 || size4 < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size4;
      this.data = new Uint8Array(size4 * size4);
      this.reservedBit = new Uint8Array(size4 * size4);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index2 = row * this.size + col;
      this.data[index2] = value;
      if (reserved) this.reservedBit[index2] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version2) {
      if (version2 === 1) return [];
      const posCount = Math.floor(version2 / 7) + 2;
      const size4 = getSymbolSize(version2);
      const intervals = size4 === 145 ? 26 : Math.ceil((size4 - 13) / (2 * posCount - 2)) * 2;
      const positions = [size4 - 7];
      for (let i = 1; i < posCount - 1; i++) {
        positions[i] = positions[i - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version2) {
      const coords = [];
      const pos = exports.getRowColCoords(version2);
      const posLength = pos.length;
      for (let i = 0; i < posLength; i++) {
        for (let j = 0; j < posLength; j++) {
          if (i === 0 && j === 0 || // top-left
          i === 0 && j === posLength - 1 || // bottom-left
          i === posLength - 1 && j === 0) {
            continue;
          }
          coords.push([pos[i], pos[j]]);
        }
      }
      return coords;
    };
  }
});

// node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version2) {
      const size4 = getSymbolSize(version2);
      return [
        // top-left
        [0, 0],
        // top-right
        [size4 - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size4 - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from29(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size4 = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size4; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size4; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size4 = data.size;
      let points = 0;
      for (let row = 0; row < size4 - 1; row++) {
        for (let col = 0; col < size4 - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size4 = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size4; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size4; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i, j) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      const size4 = data.size;
      for (let col = 0; col < size4; col++) {
        for (let row = 0; row < size4; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }
      return bestPattern;
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version2, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version2, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "node_modules/qrcode/lib/core/galois-field.js"(exports) {
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (function initTables() {
      let x = 1;
      for (let i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1;
        if (x & 256) {
          x ^= 285;
        }
      }
      for (let i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    })();
    exports.log = function log(n) {
      if (n < 1) throw new Error("log(" + n + ")");
      return LOG_TABLE[n];
    };
    exports.exp = function exp(n) {
      return EXP_TABLE[n];
    };
    exports.mul = function mul(x, y) {
      if (x === 0 || y === 0) return 0;
      return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
    };
  }
});

// node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "node_modules/qrcode/lib/core/polynomial.js"(exports) {
    var GF = require_galois_field();
    exports.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i = 0; i < p1.length; i++) {
        for (let j = 0; j < p2.length; j++) {
          coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
      }
      return coeff;
    };
    exports.mod = function mod2(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i = 0; i < divisor.length; i++) {
          result[i] ^= GF.mul(divisor[i], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0) offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i = 0; i < degree; i++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
      }
      return poly;
    };
  }
});

// node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode9(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start = this.degree - remainder.length;
      if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "node_modules/qrcode/lib/core/version-check.js"(exports) {
    exports.isValid = function isValid(version2) {
      return !isNaN(version2) && version2 >= 1 && version2 <= 40;
    };
  }
});

// node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "node_modules/qrcode/lib/core/regex.js"(exports) {
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "node_modules/qrcode/lib/core/mode.js"(exports) {
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version2) {
      if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version2)) {
        throw new Error("Invalid version: " + version2);
      }
      if (version2 >= 1 && version2 < 10) return mode.ccBits[0];
      else if (version2 < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports.KANJI;
      else return exports.BYTE;
    };
    exports.toString = function toString5(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString5(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    exports.from = function from29(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString5(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "node_modules/qrcode/lib/core/version.js"(exports) {
    var Utils = require_utils();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version2) {
      return Mode.getCharCountIndicator(mode, version2) + 4;
    }
    function getTotalBitsFromDataArray(segments, version2) {
      let totalBits = 0;
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version2);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from29(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version2, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version2)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined") mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version2);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version2);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version2) {
      if (!VersionCheck.isValid(version2) || version2 < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d = version2 << 12;
      while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
      }
      return version2 << 12 | d;
    };
  }
});

// node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "node_modules/qrcode/lib/core/format-info.js"(exports) {
    var Utils = require_utils();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      const data = errorCorrectionLevel.bit << 3 | mask;
      let d = data << 10;
      while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
      }
      return (data << 10 | d) ^ G15_MASK;
    };
  }
});

// node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      let i, group, value;
      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i;
      if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":"
    ];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      let i;
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      if (typeof data === "string") {
        this.data = new TextEncoder().encode(data);
      } else {
        this.data = new Uint8Array(data);
      }
    }
    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (let i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };
    module.exports = ByteData;
  }
});

// node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    var Mode = require_mode();
    var Utils = require_utils();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      let i;
      for (i = 0; i < this.data.length; i++) {
        let value = Utils.toSJIS(this.data[i]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error(
            "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
          );
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "node_modules/qrcode/lib/core/segments.js"(exports) {
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex, mode, str) {
      const segments = [];
      let result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i = 0; i < segs.length; i++) {
        const seg = segs[i];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version2) {
      const table = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i = 0; i < nodes.length; i++) {
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for (let j = 0; j < nodeGroup.length; j++) {
          const node = nodeGroup[j];
          const key = "" + i + j;
          currentNodeIds.push(key);
          table[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (let n = 0; n < prevNodeIds.length; n++) {
            const prevNodeId = prevNodeIds[n];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version2);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n = 0; n < prevNodeIds.length; n++) {
        graph[prevNodeIds[n]].end = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports.fromArray = function fromArray2(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString5(data, version2) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version2);
      const path2 = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i = 1; i < path2.length - 1; i++) {
        optimizedSegs.push(graph.table[path2[i]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(
        getSegmentsFromString(data, Utils.isKanjiModeEnabled())
      );
    };
  }
});

// node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/qrcode/lib/core/qrcode.js"(exports) {
    var Utils = require_utils();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version2) {
      const size4 = matrix.size;
      const pos = FinderPattern.getPositions(version2);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -1; r <= 7; r++) {
          if (row + r <= -1 || size4 <= row + r) continue;
          for (let c = -1; c <= 7; c++) {
            if (col + c <= -1 || size4 <= col + c) continue;
            if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      const size4 = matrix.size;
      for (let r = 8; r < size4 - 8; r++) {
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version2) {
      const pos = AlignmentPattern.getPositions(version2);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version2) {
      const size4 = matrix.size;
      const bits = Version.getEncodedBits(version2);
      let row, col, mod2;
      for (let i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size4 - 8 - 3;
        mod2 = (bits >> i & 1) === 1;
        matrix.set(row, col, mod2, true);
        matrix.set(col, row, mod2, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size4 = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i, mod2;
      for (i = 0; i < 15; i++) {
        mod2 = (bits >> i & 1) === 1;
        if (i < 6) {
          matrix.set(i, 8, mod2, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod2, true);
        } else {
          matrix.set(size4 - 15 + i, 8, mod2, true);
        }
        if (i < 8) {
          matrix.set(8, size4 - i - 1, mod2, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod2, true);
        } else {
          matrix.set(8, 15 - i - 1, mod2, true);
        }
      }
      matrix.set(size4 - 8, 8, 1, true);
    }
    function setupData(matrix, data) {
      const size4 = matrix.size;
      let inc = -1;
      let row = size4 - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size4 - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (let c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size4 <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version2, errorCorrectionLevel, segments) {
      const buffer2 = new BitBuffer();
      segments.forEach(function(data) {
        buffer2.put(data.mode.bit, 4);
        buffer2.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version2));
        data.write(buffer2);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version2);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer2.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer2.put(0, 4);
      }
      while (buffer2.getLengthInBits() % 8 !== 0) {
        buffer2.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer2.getLengthInBits()) / 8;
      for (let i = 0; i < remainingByte; i++) {
        buffer2.put(i % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer2, version2, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version2, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version2);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version2, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs = new ReedSolomonEncoder(ecCount);
      let offset = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer2 = new Uint8Array(bitBuffer.buffer);
      for (let b = 0; b < ecTotalBlocks; b++) {
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b] = buffer2.slice(offset, offset + dataSize);
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data = new Uint8Array(totalCodewords);
      let index2 = 0;
      let i, r;
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index2++] = dcData[r][i];
          }
        }
      }
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index2++] = ecData[r][i];
        }
      }
      return data;
    }
    function createSymbol(data, version2, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version2;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version2) {
        version2 = bestVersion;
      } else if (version2 < bestVersion) {
        throw new Error(
          "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
        );
      }
      const dataBits = createData(version2, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version2);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version2);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version2);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version2 >= 7) {
        setupVersionInfo(modules, version2);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(
          modules,
          setupFormatInfo.bind(null, modules, errorCorrectionLevel)
        );
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version: version2,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create3(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version2;
      let mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version2 = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version2, errorCorrectionLevel, mask);
    };
  }
});

// node_modules/qrcode/lib/renderer/utils.js
var require_utils2 = __commonJS({
  "node_modules/qrcode/lib/renderer/utils.js"(exports) {
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
          return [c, c];
        }));
      }
      if (hexCode.length === 6) hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size4 = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports.getScale(size4, opts);
      const symbolSize = Math.floor((size4 + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i = 0; i < symbolSize; i++) {
        for (let j = 0; j < symbolSize; j++) {
          let posDst = (i * symbolSize + j) * 4;
          let pxColor = opts.color.light;
          if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size4 + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  }
});

// node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    var Utils = require_utils2();
    function clearCanvas(ctx, canvas, size4) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style) canvas.style = {};
      canvas.height = size4;
      canvas.width = size4;
      canvas.style.height = size4 + "px";
      canvas.style.width = size4 + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas, options) {
      let opts = options;
      let canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size4 = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size4, size4);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size4);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts) opts = {};
      const canvasEl = exports.render(qrData, canvas, opts);
      const type6 = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type6, rendererOpts.quality);
    };
  }
});

// node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    var Utils = require_utils2();
    function getColorAttrib(color, attrib) {
      const alpha = color.a / 255;
      const str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    function svgCmd(cmd, x, y) {
      let str = cmd + x;
      if (typeof y !== "undefined") str += " " + y;
      return str;
    }
    function qrToPath(data, size4, margin) {
      let path2 = "";
      let moveBy = 0;
      let newRow = false;
      let lineLength = 0;
      for (let i = 0; i < data.length; i++) {
        const col = Math.floor(i % size4);
        const row = Math.floor(i / size4);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
          lineLength++;
          if (!(i > 0 && col > 0 && data[i - 1])) {
            path2 += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size4 && data[i + 1])) {
            path2 += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path2;
    }
    exports.render = function render(qrData, options, cb) {
      const opts = Utils.getOptions(options);
      const size4 = qrData.modules.size;
      const data = qrData.modules.data;
      const qrcodesize = size4 + opts.margin * 2;
      const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      const path2 = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size4, opts.margin) + '"/>';
      const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path2 + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    };
  }
});

// node_modules/qrcode/lib/browser.js
var require_browser = __commonJS({
  "node_modules/qrcode/lib/browser.js"(exports) {
    var canPromise = require_can_promise();
    var QRCode2 = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      const args = [].slice.call(arguments, 1);
      const argsNum = args.length;
      const isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            const data = QRCode2.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e) {
            reject(e);
          }
        });
      }
      try {
        const data = QRCode2.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e) {
        cb(e);
      }
    }
    exports.create = QRCode2.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// node_modules/@rainbow-me/rainbowkit/dist/chunk-DQLAW7KN.js
var systemFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
var fontStacks = {
  rounded: `SFRounded, ui-rounded, "SF Pro Rounded", ${systemFontStack}`,
  system: systemFontStack
};
var radiusScales = {
  large: {
    actionButton: "9999px",
    connectButton: "12px",
    modal: "24px",
    modalMobile: "28px"
  },
  medium: {
    actionButton: "10px",
    connectButton: "8px",
    modal: "16px",
    modalMobile: "18px"
  },
  none: {
    actionButton: "0px",
    connectButton: "0px",
    modal: "0px",
    modalMobile: "0px"
  },
  small: {
    actionButton: "4px",
    connectButton: "4px",
    modal: "8px",
    modalMobile: "8px"
  }
};
var blurs = {
  large: {
    modalOverlay: "blur(20px)"
  },
  none: {
    modalOverlay: "blur(0px)"
  },
  small: {
    modalOverlay: "blur(4px)"
  }
};
var baseTheme = ({
  borderRadius = "large",
  fontStack = "rounded",
  overlayBlur = "none"
}) => ({
  blurs: {
    modalOverlay: blurs[overlayBlur].modalOverlay
  },
  fonts: {
    body: fontStacks[fontStack]
  },
  radii: {
    actionButton: radiusScales[borderRadius].actionButton,
    connectButton: radiusScales[borderRadius].connectButton,
    menuButton: radiusScales[borderRadius].connectButton,
    modal: radiusScales[borderRadius].modal,
    modalMobile: radiusScales[borderRadius].modalMobile
  }
});

// node_modules/@rainbow-me/rainbowkit/dist/chunk-72HZGUJA.js
var accentColors = {
  blue: { accentColor: "#0E76FD", accentColorForeground: "#FFF" },
  green: { accentColor: "#1DB847", accentColorForeground: "#FFF" },
  orange: { accentColor: "#FF801F", accentColorForeground: "#FFF" },
  pink: { accentColor: "#FF5CA0", accentColorForeground: "#FFF" },
  purple: { accentColor: "#5F5AFA", accentColorForeground: "#FFF" },
  red: { accentColor: "#FA423C", accentColorForeground: "#FFF" }
};
var defaultAccentColor = accentColors.blue;
var lightTheme = ({
  accentColor = defaultAccentColor.accentColor,
  accentColorForeground = defaultAccentColor.accentColorForeground,
  ...baseThemeOptions
} = {}) => ({
  ...baseTheme(baseThemeOptions),
  colors: {
    accentColor,
    accentColorForeground,
    actionButtonBorder: "rgba(0, 0, 0, 0.04)",
    actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
    actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
    closeButton: "rgba(60, 66, 66, 0.8)",
    closeButtonBackground: "rgba(0, 0, 0, 0.06)",
    connectButtonBackground: "#FFF",
    connectButtonBackgroundError: "#FF494A",
    connectButtonInnerBackground: "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
    connectButtonText: "#25292E",
    connectButtonTextError: "#FFF",
    connectionIndicator: "#30E000",
    downloadBottomCardBackground: "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
    downloadTopCardBackground: "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
    error: "#FF494A",
    generalBorder: "rgba(0, 0, 0, 0.06)",
    generalBorderDim: "rgba(0, 0, 0, 0.03)",
    menuItemBackground: "rgba(60, 66, 66, 0.1)",
    modalBackdrop: "rgba(0, 0, 0, 0.3)",
    modalBackground: "#FFF",
    modalBorder: "transparent",
    modalText: "#25292E",
    modalTextDim: "rgba(60, 66, 66, 0.3)",
    modalTextSecondary: "rgba(60, 66, 66, 0.6)",
    profileAction: "#FFF",
    profileActionHover: "rgba(255, 255, 255, 0.5)",
    profileForeground: "rgba(60, 66, 66, 0.06)",
    selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
    standby: "#FFD641"
  },
  shadows: {
    connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
    profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
    selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
    selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
    walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
  }
});
lightTheme.accentColors = accentColors;

// node_modules/@rainbow-me/rainbowkit/dist/chunk-RZWDCITT.js
var darkGrey = "#1A1B1F";
var accentColors2 = {
  blue: { accentColor: "#3898FF", accentColorForeground: "#FFF" },
  green: { accentColor: "#4BD166", accentColorForeground: darkGrey },
  orange: { accentColor: "#FF983D", accentColorForeground: darkGrey },
  pink: { accentColor: "#FF7AB8", accentColorForeground: darkGrey },
  purple: { accentColor: "#7A70FF", accentColorForeground: "#FFF" },
  red: { accentColor: "#FF6257", accentColorForeground: "#FFF" }
};
var defaultAccentColor2 = accentColors2.blue;
var darkTheme = ({
  accentColor = defaultAccentColor2.accentColor,
  accentColorForeground = defaultAccentColor2.accentColorForeground,
  ...baseThemeOptions
} = {}) => ({
  ...baseTheme(baseThemeOptions),
  colors: {
    accentColor,
    accentColorForeground,
    actionButtonBorder: "rgba(255, 255, 255, 0.04)",
    actionButtonBorderMobile: "rgba(255, 255, 255, 0.08)",
    actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
    closeButton: "rgba(224, 232, 255, 0.6)",
    closeButtonBackground: "rgba(255, 255, 255, 0.08)",
    connectButtonBackground: darkGrey,
    connectButtonBackgroundError: "#FF494A",
    connectButtonInnerBackground: "linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",
    connectButtonText: "#FFF",
    connectButtonTextError: "#FFF",
    connectionIndicator: "#30E000",
    downloadBottomCardBackground: "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",
    downloadTopCardBackground: "linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",
    error: "#FF494A",
    generalBorder: "rgba(255, 255, 255, 0.08)",
    generalBorderDim: "rgba(255, 255, 255, 0.04)",
    menuItemBackground: "rgba(224, 232, 255, 0.1)",
    modalBackdrop: "rgba(0, 0, 0, 0.5)",
    modalBackground: "#1A1B1F",
    modalBorder: "rgba(255, 255, 255, 0.08)",
    modalText: "#FFF",
    modalTextDim: "rgba(224, 232, 255, 0.3)",
    modalTextSecondary: "rgba(255, 255, 255, 0.6)",
    profileAction: "rgba(224, 232, 255, 0.1)",
    profileActionHover: "rgba(224, 232, 255, 0.2)",
    profileForeground: "rgba(224, 232, 255, 0.05)",
    selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
    standby: "#FFD641"
  },
  shadows: {
    connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
    profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
    selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
    selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.24)",
    walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
  }
});
darkTheme.accentColors = accentColors2;

// node_modules/@rainbow-me/rainbowkit/dist/chunk-7ZP3ENJ2.js
var accentColors3 = {
  blue: { accentColor: "#3898FF", accentColorForeground: "#FFF" },
  green: { accentColor: "#4BD166", accentColorForeground: "#000" },
  orange: { accentColor: "#FF983D", accentColorForeground: "#000" },
  pink: { accentColor: "#FF7AB8", accentColorForeground: "#000" },
  purple: { accentColor: "#7A70FF", accentColorForeground: "#FFF" },
  red: { accentColor: "#FF6257", accentColorForeground: "#FFF" }
};
var defaultAccentColor3 = accentColors3.blue;
var midnightTheme = ({
  accentColor = defaultAccentColor3.accentColor,
  accentColorForeground = defaultAccentColor3.accentColorForeground,
  ...baseThemeOptions
} = {}) => ({
  ...baseTheme(baseThemeOptions),
  colors: {
    accentColor,
    accentColorForeground,
    actionButtonBorder: "rgba(255, 255, 255, 0.04)",
    actionButtonBorderMobile: "rgba(255, 255, 255, 0.1)",
    actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
    closeButton: "rgba(255, 255, 255, 0.7)",
    closeButtonBackground: "rgba(255, 255, 255, 0.08)",
    connectButtonBackground: "#000",
    connectButtonBackgroundError: "#FF494A",
    connectButtonInnerBackground: "linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.12))",
    connectButtonText: "#FFF",
    connectButtonTextError: "#FFF",
    connectionIndicator: "#30E000",
    downloadBottomCardBackground: "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.1) 71.04%), #050505",
    downloadTopCardBackground: "linear-gradient(126deg, rgba(120, 120, 120, 0.1) 9.49%, rgba(0, 0, 0, 0) 71.04%), #050505",
    error: "#FF494A",
    generalBorder: "rgba(255, 255, 255, 0.08)",
    generalBorderDim: "rgba(255, 255, 255, 0.04)",
    menuItemBackground: "rgba(255, 255, 255, 0.08)",
    modalBackdrop: "rgba(0, 0, 0, 0.7)",
    modalBackground: "#000",
    modalBorder: "rgba(255, 255, 255, 0.08)",
    modalText: "#FFF",
    modalTextDim: "rgba(255, 255, 255, 0.2)",
    modalTextSecondary: "rgba(255, 255, 255, 0.6)",
    profileAction: "rgba(255, 255, 255, 0.1)",
    profileActionHover: "rgba(255, 255, 255, 0.2)",
    profileForeground: "rgba(255, 255, 255, 0.06)",
    selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
    standby: "#FFD641"
  },
  shadows: {
    connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
    profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
    selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
    selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.24)",
    walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
  }
});
midnightTheme.accentColors = accentColors3;

// node_modules/@rainbow-me/rainbowkit/dist/index.js
var import_react4 = __toESM(require_react());

// node_modules/@vanilla-extract/css/functionSerializer/dist/vanilla-extract-css-functionSerializer.browser.esm.js
function addFunctionSerializer(target, recipe) {
  Object.defineProperty(target, "__recipe__", {
    value: recipe,
    writable: false
  });
  return target;
}

// node_modules/@vanilla-extract/css/recipe/dist/vanilla-extract-css-recipe.browser.esm.js
var addRecipe = addFunctionSerializer;

// node_modules/@vanilla-extract/sprinkles/createUtils/dist/vanilla-extract-sprinkles-createUtils.esm.js
function createNormalizeValueFn(properties) {
  var {
    conditions
  } = properties;
  if (!conditions) {
    throw new Error("Styles have no conditions");
  }
  function normalizeValue(value) {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      if (!conditions.defaultCondition) {
        throw new Error("No default condition");
      }
      return {
        [conditions.defaultCondition]: value
      };
    }
    if (Array.isArray(value)) {
      if (!("responsiveArray" in conditions)) {
        throw new Error("Responsive arrays are not supported");
      }
      var returnValue = {};
      for (var index2 in conditions.responsiveArray) {
        if (value[index2] != null) {
          returnValue[conditions.responsiveArray[index2]] = value[index2];
        }
      }
      return returnValue;
    }
    return value;
  }
  return addRecipe(normalizeValue, {
    importPath: "@vanilla-extract/sprinkles/createUtils",
    importName: "createNormalizeValueFn",
    args: [{
      conditions: properties.conditions
    }]
  });
}
function createMapValueFn(properties) {
  var {
    conditions
  } = properties;
  if (!conditions) {
    throw new Error("Styles have no conditions");
  }
  var normalizeValue = createNormalizeValueFn(properties);
  function mapValue(value, mapFn) {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      if (!conditions.defaultCondition) {
        throw new Error("No default condition");
      }
      return mapFn(value, conditions.defaultCondition);
    }
    var normalizedObject = Array.isArray(value) ? normalizeValue(value) : value;
    var mappedObject = {};
    for (var _key in normalizedObject) {
      if (normalizedObject[_key] != null) {
        mappedObject[_key] = mapFn(normalizedObject[_key], _key);
      }
    }
    return mappedObject;
  }
  return addRecipe(mapValue, {
    importPath: "@vanilla-extract/sprinkles/createUtils",
    importName: "createMapValueFn",
    args: [{
      conditions: properties.conditions
    }]
  });
}

// node_modules/@vanilla-extract/sprinkles/dist/createSprinkles-74286718.esm.js
function toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var createSprinkles = (composeStyles2) => function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var sprinklesStyles = Object.assign({}, ...args.map((a) => a.styles));
  var sprinklesKeys = Object.keys(sprinklesStyles);
  var shorthandNames = sprinklesKeys.filter((property) => "mappings" in sprinklesStyles[property]);
  var sprinklesFn = (props) => {
    var classNames = [];
    var shorthands = {};
    var nonShorthands = _objectSpread2({}, props);
    var hasShorthands = false;
    for (var shorthand of shorthandNames) {
      var value = props[shorthand];
      if (value != null) {
        var sprinkle = sprinklesStyles[shorthand];
        hasShorthands = true;
        for (var propMapping of sprinkle.mappings) {
          shorthands[propMapping] = value;
          if (nonShorthands[propMapping] == null) {
            delete nonShorthands[propMapping];
          }
        }
      }
    }
    var finalProps = hasShorthands ? _objectSpread2(_objectSpread2({}, shorthands), nonShorthands) : props;
    var _loop = function _loop2() {
      var propValue = finalProps[prop];
      var sprinkle2 = sprinklesStyles[prop];
      try {
        if (sprinkle2.mappings) {
          return 1;
        }
        if (typeof propValue === "string" || typeof propValue === "number") {
          if (true) {
            if (!sprinkle2.values[propValue].defaultClass) {
              throw new Error();
            }
          }
          classNames.push(sprinkle2.values[propValue].defaultClass);
        } else if (Array.isArray(propValue)) {
          for (var responsiveIndex = 0; responsiveIndex < propValue.length; responsiveIndex++) {
            var responsiveValue = propValue[responsiveIndex];
            if (responsiveValue != null) {
              var conditionName = sprinkle2.responsiveArray[responsiveIndex];
              if (true) {
                if (!sprinkle2.values[responsiveValue].conditions[conditionName]) {
                  throw new Error();
                }
              }
              classNames.push(sprinkle2.values[responsiveValue].conditions[conditionName]);
            }
          }
        } else {
          for (var _conditionName in propValue) {
            var _value = propValue[_conditionName];
            if (_value != null) {
              if (true) {
                if (!sprinkle2.values[_value].conditions[_conditionName]) {
                  throw new Error();
                }
              }
              classNames.push(sprinkle2.values[_value].conditions[_conditionName]);
            }
          }
        }
      } catch (e) {
        if (true) {
          class SprinklesError extends Error {
            constructor(message) {
              super(message);
              this.name = "SprinklesError";
            }
          }
          var format9 = (v) => typeof v === "string" ? '"'.concat(v, '"') : v;
          var invalidPropValue = (prop2, value2, possibleValues) => {
            throw new SprinklesError('"'.concat(prop2, '" has no value ').concat(format9(value2), ". Possible values are ").concat(Object.keys(possibleValues).map(format9).join(", ")));
          };
          if (!sprinkle2) {
            throw new SprinklesError('"'.concat(prop, '" is not a valid sprinkle'));
          }
          if (typeof propValue === "string" || typeof propValue === "number") {
            if (!(propValue in sprinkle2.values)) {
              invalidPropValue(prop, propValue, sprinkle2.values);
            }
            if (!sprinkle2.values[propValue].defaultClass) {
              throw new SprinklesError('"'.concat(prop, '" has no default condition. You must specify which conditions to target explicitly. Possible options are ').concat(Object.keys(sprinkle2.values[propValue].conditions).map(format9).join(", ")));
            }
          }
          if (typeof propValue === "object") {
            if (!("conditions" in sprinkle2.values[Object.keys(sprinkle2.values)[0]])) {
              throw new SprinklesError('"'.concat(prop, '" is not a conditional property'));
            }
            if (Array.isArray(propValue)) {
              if (!("responsiveArray" in sprinkle2)) {
                throw new SprinklesError('"'.concat(prop, '" does not support responsive arrays'));
              }
              var breakpointCount = sprinkle2.responsiveArray.length;
              if (breakpointCount < propValue.length) {
                throw new SprinklesError('"'.concat(prop, '" only supports up to ').concat(breakpointCount, " breakpoints. You passed ").concat(propValue.length));
              }
              for (var _responsiveValue of propValue) {
                if (!sprinkle2.values[_responsiveValue]) {
                  invalidPropValue(prop, _responsiveValue, sprinkle2.values);
                }
              }
            } else {
              for (var _conditionName2 in propValue) {
                var _value2 = propValue[_conditionName2];
                if (_value2 != null) {
                  if (!sprinkle2.values[_value2]) {
                    invalidPropValue(prop, _value2, sprinkle2.values);
                  }
                  if (!sprinkle2.values[_value2].conditions[_conditionName2]) {
                    throw new SprinklesError('"'.concat(prop, '" has no condition named ').concat(format9(_conditionName2), ". Possible values are ").concat(Object.keys(sprinkle2.values[_value2].conditions).map(format9).join(", ")));
                  }
                }
              }
            }
          }
        }
        throw e;
      }
    };
    for (var prop in finalProps) {
      if (_loop()) continue;
    }
    return composeStyles2(classNames.join(" "));
  };
  return Object.assign(sprinklesFn, {
    properties: new Set(sprinklesKeys)
  });
};

// node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.esm.js
var composeStyles = (classList) => classList;
var createSprinkles2 = function createSprinkles3() {
  return createSprinkles(composeStyles)(...arguments);
};

// node_modules/@rainbow-me/rainbowkit/dist/index.js
var import_react5 = __toESM(require_react());
var import_react6 = __toESM(require_react());
var import_react7 = __toESM(require_react());
var import_react8 = __toESM(require_react());
var import_react9 = __toESM(require_react());
var import_react10 = __toESM(require_react());
var import_react11 = __toESM(require_react());
var import_react12 = __toESM(require_react());
var import_react13 = __toESM(require_react());
var import_react14 = __toESM(require_react());
var import_react15 = __toESM(require_react());
var import_react16 = __toESM(require_react());
var import_react17 = __toESM(require_react());
var import_react18 = __toESM(require_react());

// node_modules/ox/_esm/core/Ens.js
var Ens_exports = {};
__export(Ens_exports, {
  labelhash: () => labelhash,
  namehash: () => namehash,
  normalize: () => normalize
});

// node_modules/ox/_esm/core/Bytes.js
var Bytes_exports = {};
__export(Bytes_exports, {
  InvalidBytesBooleanError: () => InvalidBytesBooleanError,
  InvalidBytesTypeError: () => InvalidBytesTypeError,
  SizeExceedsPaddingSizeError: () => SizeExceedsPaddingSizeError,
  SizeOverflowError: () => SizeOverflowError,
  SliceOffsetOutOfBoundsError: () => SliceOffsetOutOfBoundsError,
  assert: () => assert2,
  concat: () => concat2,
  from: () => from2,
  fromArray: () => fromArray,
  fromBoolean: () => fromBoolean2,
  fromHex: () => fromHex,
  fromNumber: () => fromNumber2,
  fromString: () => fromString2,
  isEqual: () => isEqual2,
  padLeft: () => padLeft2,
  padRight: () => padRight2,
  random: () => random,
  size: () => size,
  slice: () => slice2,
  toBigInt: () => toBigInt2,
  toBoolean: () => toBoolean2,
  toHex: () => toHex,
  toNumber: () => toNumber2,
  toString: () => toString2,
  trimLeft: () => trimLeft2,
  trimRight: () => trimRight,
  validate: () => validate2
});

// node_modules/ox/node_modules/@noble/curves/esm/abstract/utils.js
var utils_exports = {};
__export(utils_exports, {
  aInRange: () => aInRange,
  abool: () => abool,
  abytes: () => abytes,
  bitGet: () => bitGet,
  bitLen: () => bitLen,
  bitMask: () => bitMask,
  bitSet: () => bitSet,
  bytesToHex: () => bytesToHex,
  bytesToNumberBE: () => bytesToNumberBE,
  bytesToNumberLE: () => bytesToNumberLE,
  concatBytes: () => concatBytes,
  createHmacDrbg: () => createHmacDrbg,
  ensureBytes: () => ensureBytes,
  equalBytes: () => equalBytes,
  hexToBytes: () => hexToBytes,
  hexToNumber: () => hexToNumber,
  inRange: () => inRange,
  isBytes: () => isBytes,
  memoized: () => memoized,
  notImplemented: () => notImplemented,
  numberToBytesBE: () => numberToBytesBE,
  numberToBytesLE: () => numberToBytesLE,
  numberToHexUnpadded: () => numberToHexUnpadded,
  numberToVarBytesBE: () => numberToVarBytesBE,
  utf8ToBytes: () => utf8ToBytes,
  validateObject: () => validateObject
});
var _0n = BigInt(0);
var _1n = BigInt(1);
var _2n = BigInt(2);
function isBytes(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function abytes(item) {
  if (!isBytes(item))
    throw new Error("Uint8Array expected");
}
function abool(title, value) {
  if (typeof value !== "boolean")
    throw new Error(title + " boolean expected, got " + value);
}
var hexes = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
function bytesToHex(bytes) {
  abytes(bytes);
  let hex = "";
  for (let i = 0; i < bytes.length; i++) {
    hex += hexes[bytes[i]];
  }
  return hex;
}
function numberToHexUnpadded(num2) {
  const hex = num2.toString(16);
  return hex.length & 1 ? "0" + hex : hex;
}
function hexToNumber(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  return hex === "" ? _0n : BigInt("0x" + hex);
}
var asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function asciiToBase16(ch) {
  if (ch >= asciis._0 && ch <= asciis._9)
    return ch - asciis._0;
  if (ch >= asciis.A && ch <= asciis.F)
    return ch - (asciis.A - 10);
  if (ch >= asciis.a && ch <= asciis.f)
    return ch - (asciis.a - 10);
  return;
}
function hexToBytes(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  const hl = hex.length;
  const al = hl / 2;
  if (hl % 2)
    throw new Error("hex string expected, got unpadded hex of length " + hl);
  const array = new Uint8Array(al);
  for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
    const n1 = asciiToBase16(hex.charCodeAt(hi));
    const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
    if (n1 === void 0 || n2 === void 0) {
      const char = hex[hi] + hex[hi + 1];
      throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
    }
    array[ai] = n1 * 16 + n2;
  }
  return array;
}
function bytesToNumberBE(bytes) {
  return hexToNumber(bytesToHex(bytes));
}
function bytesToNumberLE(bytes) {
  abytes(bytes);
  return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE(n, len) {
  return hexToBytes(n.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n, len) {
  return numberToBytesBE(n, len).reverse();
}
function numberToVarBytesBE(n) {
  return hexToBytes(numberToHexUnpadded(n));
}
function ensureBytes(title, hex, expectedLength) {
  let res;
  if (typeof hex === "string") {
    try {
      res = hexToBytes(hex);
    } catch (e) {
      throw new Error(title + " must be hex string or Uint8Array, cause: " + e);
    }
  } else if (isBytes(hex)) {
    res = Uint8Array.from(hex);
  } else {
    throw new Error(title + " must be hex string or Uint8Array");
  }
  const len = res.length;
  if (typeof expectedLength === "number" && len !== expectedLength)
    throw new Error(title + " of length " + expectedLength + " expected, got " + len);
  return res;
}
function concatBytes(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    const a = arrays[i];
    abytes(a);
    sum += a.length;
  }
  const res = new Uint8Array(sum);
  for (let i = 0, pad3 = 0; i < arrays.length; i++) {
    const a = arrays[i];
    res.set(a, pad3);
    pad3 += a.length;
  }
  return res;
}
function equalBytes(a, b) {
  if (a.length !== b.length)
    return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++)
    diff |= a[i] ^ b[i];
  return diff === 0;
}
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(str));
}
var isPosBig = (n) => typeof n === "bigint" && _0n <= n;
function inRange(n, min, max) {
  return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
}
function aInRange(title, n, min, max) {
  if (!inRange(n, min, max))
    throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n);
}
function bitLen(n) {
  let len;
  for (len = 0; n > _0n; n >>= _1n, len += 1)
    ;
  return len;
}
function bitGet(n, pos) {
  return n >> BigInt(pos) & _1n;
}
function bitSet(n, pos, value) {
  return n | (value ? _1n : _0n) << BigInt(pos);
}
var bitMask = (n) => (_2n << BigInt(n - 1)) - _1n;
var u8n = (data) => new Uint8Array(data);
var u8fr = (arr) => Uint8Array.from(arr);
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
  if (typeof hashLen !== "number" || hashLen < 2)
    throw new Error("hashLen must be a number");
  if (typeof qByteLen !== "number" || qByteLen < 2)
    throw new Error("qByteLen must be a number");
  if (typeof hmacFn !== "function")
    throw new Error("hmacFn must be a function");
  let v = u8n(hashLen);
  let k = u8n(hashLen);
  let i = 0;
  const reset = () => {
    v.fill(1);
    k.fill(0);
    i = 0;
  };
  const h = (...b) => hmacFn(k, v, ...b);
  const reseed = (seed = u8n()) => {
    k = h(u8fr([0]), seed);
    v = h();
    if (seed.length === 0)
      return;
    k = h(u8fr([1]), seed);
    v = h();
  };
  const gen2 = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let len = 0;
    const out = [];
    while (len < qByteLen) {
      v = h();
      const sl = v.slice();
      out.push(sl);
      len += v.length;
    }
    return concatBytes(...out);
  };
  const genUntil = (seed, pred) => {
    reset();
    reseed(seed);
    let res = void 0;
    while (!(res = pred(gen2())))
      reseed();
    reset();
    return res;
  };
  return genUntil;
}
var validatorFns = {
  bigint: (val) => typeof val === "bigint",
  function: (val) => typeof val === "function",
  boolean: (val) => typeof val === "boolean",
  string: (val) => typeof val === "string",
  stringOrUint8Array: (val) => typeof val === "string" || isBytes(val),
  isSafeInteger: (val) => Number.isSafeInteger(val),
  array: (val) => Array.isArray(val),
  field: (val, object) => object.Fp.isValid(val),
  hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
};
function validateObject(object, validators, optValidators = {}) {
  const checkField = (fieldName, type6, isOptional) => {
    const checkVal = validatorFns[type6];
    if (typeof checkVal !== "function")
      throw new Error("invalid validator function");
    const val = object[fieldName];
    if (isOptional && val === void 0)
      return;
    if (!checkVal(val, object)) {
      throw new Error("param " + String(fieldName) + " is invalid. Expected " + type6 + ", got " + val);
    }
  };
  for (const [fieldName, type6] of Object.entries(validators))
    checkField(fieldName, type6, false);
  for (const [fieldName, type6] of Object.entries(optValidators))
    checkField(fieldName, type6, true);
  return object;
}
var notImplemented = () => {
  throw new Error("not implemented");
};
function memoized(fn) {
  const map = /* @__PURE__ */ new WeakMap();
  return (arg, ...args) => {
    const val = map.get(arg);
    if (val !== void 0)
      return val;
    const computed = fn(arg, ...args);
    map.set(arg, computed);
    return computed;
  };
}

// node_modules/ox/_esm/core/Errors.js
var Errors_exports = {};
__export(Errors_exports, {
  BaseError: () => BaseError
});

// node_modules/ox/_esm/core/version.js
var version = "0.1.1";

// node_modules/ox/_esm/core/internal/errors.js
function getUrl(url) {
  return url;
}
function getVersion() {
  return version;
}
function prettyPrint(args) {
  if (!args)
    return "";
  const entries = Object.entries(args).map(([key, value]) => {
    if (value === void 0 || value === false)
      return null;
    return [key, value];
  }).filter(Boolean);
  const maxLength = entries.reduce((acc, [key]) => Math.max(acc, key.length), 0);
  return entries.map(([key, value]) => `  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join("\n");
}

// node_modules/ox/_esm/core/Errors.js
var BaseError = class _BaseError extends Error {
  constructor(shortMessage, options = {}) {
    const details = (() => {
      var _a;
      if (options.cause instanceof _BaseError) {
        if (options.cause.details)
          return options.cause.details;
        if (options.cause.shortMessage)
          return options.cause.shortMessage;
      }
      if ((_a = options.cause) == null ? void 0 : _a.message)
        return options.cause.message;
      return options.details;
    })();
    const docsPath = (() => {
      if (options.cause instanceof _BaseError)
        return options.cause.docsPath || options.docsPath;
      return options.docsPath;
    })();
    const docsBaseUrl = "https://oxlib.sh";
    const docs = `${docsBaseUrl}${docsPath ?? ""}`;
    const message = [
      shortMessage || "An error occurred.",
      ...options.metaMessages ? ["", ...options.metaMessages] : [],
      ...details || docsPath ? [
        "",
        details ? `Details: ${details}` : void 0,
        docsPath ? `See: ${docs}` : void 0
      ] : []
    ].filter((x) => typeof x === "string").join("\n");
    super(message, options.cause ? { cause: options.cause } : void 0);
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docsPath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shortMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BaseError"
    });
    Object.defineProperty(this, "version", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: `ox@${getVersion()}`
    });
    this.cause = options.cause;
    this.details = details;
    this.docs = docs;
    this.docsPath = docsPath;
    this.shortMessage = shortMessage;
  }
  walk(fn) {
    return walk(this, fn);
  }
};
function walk(err, fn) {
  if (fn == null ? void 0 : fn(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause)
    return walk(err.cause, fn);
  return fn ? null : err;
}

// node_modules/ox/_esm/core/Hex.js
var Hex_exports = {};
__export(Hex_exports, {
  IntegerOutOfRangeError: () => IntegerOutOfRangeError,
  InvalidHexBooleanError: () => InvalidHexBooleanError,
  InvalidHexTypeError: () => InvalidHexTypeError,
  InvalidHexValueError: () => InvalidHexValueError,
  InvalidLengthError: () => InvalidLengthError,
  SizeExceedsPaddingSizeError: () => SizeExceedsPaddingSizeError2,
  SizeOverflowError: () => SizeOverflowError2,
  SliceOffsetOutOfBoundsError: () => SliceOffsetOutOfBoundsError2,
  assert: () => assert,
  concat: () => concat,
  from: () => from,
  fromBoolean: () => fromBoolean,
  fromBytes: () => fromBytes,
  fromNumber: () => fromNumber,
  fromString: () => fromString,
  isEqual: () => isEqual,
  padLeft: () => padLeft,
  padRight: () => padRight,
  random: () => random2,
  size: () => size2,
  slice: () => slice,
  toBigInt: () => toBigInt,
  toBoolean: () => toBoolean,
  toBytes: () => toBytes,
  toNumber: () => toNumber,
  toString: () => toString,
  trimLeft: () => trimLeft,
  trimRight: () => trimRight2,
  validate: () => validate
});

// node_modules/ox/_esm/core/Json.js
var Json_exports = {};
__export(Json_exports, {
  parse: () => parse,
  stringify: () => stringify
});
var bigIntSuffix = "#__bigint";
function parse(string, reviver) {
  return JSON.parse(string, (key, value_) => {
    const value = value_;
    if (typeof value === "string" && value.endsWith(bigIntSuffix))
      return BigInt(value.slice(0, -bigIntSuffix.length));
    return typeof reviver === "function" ? reviver(key, value) : value;
  });
}
parse.parseError = (error) => (
  /* v8 ignore next */
  error
);
function stringify(value, replacer, space) {
  return JSON.stringify(value, (key, value2) => {
    if (typeof replacer === "function")
      return replacer(key, value2);
    if (typeof value2 === "bigint")
      return value2.toString() + bigIntSuffix;
    return value2;
  }, space);
}
stringify.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/internal/bytes.js
function assertSize(bytes, size_) {
  if (size(bytes) > size_)
    throw new SizeOverflowError({
      givenSize: size(bytes),
      maxSize: size_
    });
}
function assertStartOffset(value, start) {
  if (typeof start === "number" && start > 0 && start > size(value) - 1)
    throw new SliceOffsetOutOfBoundsError({
      offset: start,
      position: "start",
      size: size(value)
    });
}
function assertEndOffset(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError({
      offset: end,
      position: "end",
      size: size(value)
    });
  }
}
var charCodeMap = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function pad(bytes, options = {}) {
  const { dir, size: size4 = 32 } = options;
  if (size4 === 0)
    return bytes;
  if (bytes.length > size4)
    throw new SizeExceedsPaddingSizeError({
      size: bytes.length,
      targetSize: size4,
      type: "Bytes"
    });
  const paddedBytes = new Uint8Array(size4);
  for (let i = 0; i < size4; i++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i : size4 - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
  }
  return paddedBytes;
}
function trim(value, options = {}) {
  const { dir = "left" } = options;
  let data = value;
  let sliceLength = 0;
  for (let i = 0; i < data.length - 1; i++) {
    if (data[dir === "left" ? i : data.length - i - 1].toString() === "0")
      sliceLength++;
    else
      break;
  }
  data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
  return data;
}

// node_modules/ox/_esm/core/internal/hex.js
function assertSize2(hex, size_) {
  if (size2(hex) > size_)
    throw new SizeOverflowError2({
      givenSize: size2(hex),
      maxSize: size_
    });
}
function assertStartOffset2(value, start) {
  if (typeof start === "number" && start > 0 && start > size2(value) - 1)
    throw new SliceOffsetOutOfBoundsError2({
      offset: start,
      position: "start",
      size: size2(value)
    });
}
function assertEndOffset2(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size2(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError2({
      offset: end,
      position: "end",
      size: size2(value)
    });
  }
}
function pad2(hex_, options = {}) {
  const { dir, size: size4 = 32 } = options;
  if (size4 === 0)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size4 * 2)
    throw new SizeExceedsPaddingSizeError2({
      size: Math.ceil(hex.length / 2),
      targetSize: size4,
      type: "Hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size4 * 2, "0")}`;
}
function trim2(value, options = {}) {
  const { dir = "left" } = options;
  let data = value.replace("0x", "");
  let sliceLength = 0;
  for (let i = 0; i < data.length - 1; i++) {
    if (data[dir === "left" ? i : data.length - i - 1].toString() === "0")
      sliceLength++;
    else
      break;
  }
  data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
  if (data.length === 1 && dir === "right")
    data = `${data}0`;
  return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
}

// node_modules/ox/_esm/core/Hex.js
var encoder = new TextEncoder();
var hexes2 = Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
function assert(value, options = {}) {
  const { strict = false } = options;
  if (!value)
    throw new InvalidHexTypeError(value);
  if (typeof value !== "string")
    throw new InvalidHexTypeError(value);
  if (strict) {
    if (!/^0x[0-9a-fA-F]*$/.test(value))
      throw new InvalidHexValueError(value);
  }
  if (!value.startsWith("0x"))
    throw new InvalidHexValueError(value);
}
assert.parseError = (error) => error;
function concat(...values) {
  return `0x${values.reduce((acc, x) => acc + x.replace("0x", ""), "")}`;
}
concat.parseError = (error) => error;
function from(value) {
  if (value instanceof Uint8Array)
    return fromBytes(value);
  if (Array.isArray(value))
    return fromBytes(new Uint8Array(value));
  return value;
}
from.parseError = (error) => error;
function fromBoolean(value, options = {}) {
  const hex = `0x0${Number(value)}`;
  if (typeof options.size === "number") {
    assertSize2(hex, options.size);
    return padLeft(hex, options.size);
  }
  return hex;
}
fromBoolean.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromBytes(value, options = {}) {
  let string = "";
  for (let i = 0; i < value.length; i++)
    string += hexes2[value[i]];
  const hex = `0x${string}`;
  if (typeof options.size === "number") {
    assertSize2(hex, options.size);
    return padRight(hex, options.size);
  }
  return hex;
}
fromBytes.parseError = (error) => error;
function fromNumber(value, options = {}) {
  const { signed, size: size4 } = options;
  const value_ = BigInt(value);
  let maxValue;
  if (size4) {
    if (signed)
      maxValue = (1n << BigInt(size4) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size4) * 8n) - 1n;
  } else if (typeof value === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value_ > maxValue || value_ < minValue) {
    const suffix = typeof value === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size4,
      value: `${value}${suffix}`
    });
  }
  const stringValue = (signed && value_ < 0 ? (1n << BigInt(size4 * 8)) + BigInt(value_) : value_).toString(16);
  const hex = `0x${stringValue.length % 2 === 0 ? stringValue : `0${stringValue}`}`;
  if (size4)
    return padLeft(hex, size4);
  return hex;
}
fromNumber.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromString(value, options = {}) {
  return fromBytes(encoder.encode(value), options);
}
fromString.parseError = (error) => (
  /* v8 ignore next */
  error
);
function isEqual(hexA, hexB) {
  return equalBytes(fromHex(hexA), fromHex(hexB));
}
isEqual.parseError = (error) => error;
function padLeft(value, size4) {
  return pad2(value, { dir: "left", size: size4 });
}
padLeft.parseError = (error) => error;
function padRight(value, size4) {
  return pad2(value, { dir: "right", size: size4 });
}
padRight.parseError = (error) => error;
function random2(length) {
  return fromBytes(random(length));
}
random2.parseError = (error) => error;
function slice(value, start, end, options = {}) {
  const { strict } = options;
  assertStartOffset2(value, start);
  const value_ = `0x${value.replace("0x", "").slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
  if (strict)
    assertEndOffset2(value_, start, end);
  return value_;
}
slice.parseError = (error) => error;
function size2(value) {
  return Math.ceil((value.length - 2) / 2);
}
size2.parseError = (error) => error;
function trimLeft(value) {
  return trim2(value, { dir: "left" });
}
trimLeft.parseError = (error) => error;
function trimRight2(value) {
  return trim2(value, { dir: "right" });
}
trimRight2.parseError = (error) => error;
function toBigInt(hex, options = {}) {
  const { signed } = options;
  if (options.size)
    assertSize2(hex, options.size);
  const value = BigInt(hex);
  if (!signed)
    return value;
  const size4 = (hex.length - 2) / 2;
  const max_unsigned = (1n << BigInt(size4) * 8n) - 1n;
  const max_signed = max_unsigned >> 1n;
  if (value <= max_signed)
    return value;
  return value - max_unsigned - 1n;
}
toBigInt.parseError = (error) => error;
function toBoolean(hex, options = {}) {
  let hex_ = hex;
  if (options.size) {
    assertSize2(hex, options.size);
    hex_ = trimLeft(hex_);
  }
  if (trimLeft(hex_) === "0x00")
    return false;
  if (trimLeft(hex_) === "0x01")
    return true;
  throw new InvalidHexBooleanError(hex_);
}
toBoolean.parseError = (error) => error;
function toBytes(hex, options = {}) {
  return fromHex(hex, options);
}
toBytes.parseError = (error) => error;
function toNumber(hex, options = {}) {
  const { signed, size: size4 } = options;
  if (!signed && !size4)
    return Number(hex);
  return Number(toBigInt(hex, options));
}
toNumber.parseError = (error) => error;
function toString(hex, options = {}) {
  const { size: size4 } = options;
  let bytes = fromHex(hex);
  if (size4) {
    assertSize(bytes, size4);
    bytes = trimRight(bytes);
  }
  return new TextDecoder().decode(bytes);
}
toString.parseError = (error) => error;
function validate(value, options = {}) {
  const { strict = false } = options;
  try {
    assert(value, { strict });
    return true;
  } catch {
    return false;
  }
}
validate.parseError = (error) => error;
var IntegerOutOfRangeError = class extends BaseError {
  constructor({ max, min, signed, size: size4, value }) {
    super(`Number \`${value}\` is not in safe${size4 ? ` ${size4 * 8}-bit` : ""}${signed ? " signed" : " unsigned"} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.IntegerOutOfRangeError"
    });
  }
};
var InvalidHexBooleanError = class extends BaseError {
  constructor(hex) {
    super(`Hex value \`"${hex}"\` is not a valid boolean.`, {
      metaMessages: [
        'The hex value must be `"0x0"` (false) or `"0x1"` (true).'
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.InvalidHexBooleanError"
    });
  }
};
var InvalidHexTypeError = class extends BaseError {
  constructor(value) {
    super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, {
      metaMessages: ['Hex types must be represented as `"0x${string}"`.']
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.InvalidHexTypeError"
    });
  }
};
var InvalidHexValueError = class extends BaseError {
  constructor(value) {
    super(`Value \`${value}\` is an invalid hex value.`, {
      metaMessages: [
        'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.InvalidHexValueError"
    });
  }
};
var InvalidLengthError = class extends BaseError {
  constructor(value) {
    super(`Hex value \`"${value}"\` is an odd length (${value.length - 2} nibbles).`, {
      metaMessages: ["It must be an even length."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.InvalidLengthError"
    });
  }
};
var SizeOverflowError2 = class extends BaseError {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeOverflowError"
    });
  }
};
var SliceOffsetOutOfBoundsError2 = class extends BaseError {
  constructor({ offset, position, size: size4 }) {
    super(`Slice ${position === "start" ? "starting" : "ending"} at offset \`${offset}\` is out-of-bounds (size: \`${size4}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SliceOffsetOutOfBoundsError"
    });
  }
};
var SizeExceedsPaddingSizeError2 = class extends BaseError {
  constructor({ size: size4, targetSize, type: type6 }) {
    super(`${type6.charAt(0).toUpperCase()}${type6.slice(1).toLowerCase()} size (\`${size4}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeExceedsPaddingSizeError"
    });
  }
};

// node_modules/ox/_esm/core/Bytes.js
var decoder = new TextDecoder();
var encoder2 = new TextEncoder();
function assert2(value) {
  if (value instanceof Uint8Array)
    return;
  if (!value)
    throw new InvalidBytesTypeError(value);
  if (typeof value !== "object")
    throw new InvalidBytesTypeError(value);
  if (!("BYTES_PER_ELEMENT" in value))
    throw new InvalidBytesTypeError(value);
  if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== "Uint8Array")
    throw new InvalidBytesTypeError(value);
}
assert2.parseError = (error) => error;
function concat2(...values) {
  let length = 0;
  for (const arr of values) {
    length += arr.length;
  }
  const result = new Uint8Array(length);
  for (let i = 0, index2 = 0; i < values.length; i++) {
    const arr = values[i];
    result.set(arr, index2);
    index2 += arr.length;
  }
  return result;
}
concat2.parseError = (error) => error;
function from2(value) {
  if (value instanceof Uint8Array)
    return value;
  if (typeof value === "string")
    return fromHex(value);
  return fromArray(value);
}
from2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromArray(value) {
  return value instanceof Uint8Array ? value : new Uint8Array(value);
}
fromArray.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromBoolean2(value, options = {}) {
  const { size: size4 } = options;
  const bytes = new Uint8Array(1);
  bytes[0] = Number(value);
  if (typeof size4 === "number") {
    assertSize(bytes, size4);
    return padLeft2(bytes, size4);
  }
  return bytes;
}
fromBoolean2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromHex(value, options = {}) {
  const { size: size4 } = options;
  if (value.length % 2)
    throw new InvalidLengthError(value);
  let hex = value;
  if (size4) {
    assertSize2(value, size4);
    hex = padRight(value, size4);
  }
  const hexString = hex.slice(2);
  const length = hexString.length / 2;
  const bytes = new Uint8Array(length);
  for (let index2 = 0, j = 0; index2 < length; index2++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
    }
    bytes[index2] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes;
}
fromHex.parseError = (error) => error;
function fromNumber2(value, options) {
  const hex = fromNumber(value, options);
  return fromHex(hex);
}
fromNumber2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromString2(value, options = {}) {
  const { size: size4 } = options;
  const bytes = encoder2.encode(value);
  if (typeof size4 === "number") {
    assertSize(bytes, size4);
    return padRight2(bytes, size4);
  }
  return bytes;
}
fromString2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function isEqual2(bytesA, bytesB) {
  return equalBytes(bytesA, bytesB);
}
isEqual2.parseError = (error) => error;
function padLeft2(value, size4) {
  return pad(value, { dir: "left", size: size4 });
}
padLeft2.parseError = (error) => error;
function padRight2(value, size4) {
  return pad(value, { dir: "right", size: size4 });
}
padRight2.parseError = (error) => error;
function random(length) {
  return crypto.getRandomValues(new Uint8Array(length));
}
random.parseError = (error) => error;
function size(value) {
  return value.length;
}
size.parseError = (error) => error;
function slice2(value, start, end, options = {}) {
  const { strict } = options;
  assertStartOffset(value, start);
  const value_ = value.slice(start, end);
  if (strict)
    assertEndOffset(value_, start, end);
  return value_;
}
slice2.parseError = (error) => error;
function toBigInt2(bytes, options = {}) {
  const { size: size4 } = options;
  if (typeof size4 !== "undefined")
    assertSize(bytes, size4);
  const hex = fromBytes(bytes, options);
  return toBigInt(hex, options);
}
toBigInt2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toBoolean2(bytes, options = {}) {
  const { size: size4 } = options;
  let bytes_ = bytes;
  if (typeof size4 !== "undefined") {
    assertSize(bytes_, size4);
    bytes_ = trimLeft2(bytes_);
  }
  if (bytes_.length > 1 || bytes_[0] > 1)
    throw new InvalidBytesBooleanError(bytes_);
  return Boolean(bytes_[0]);
}
toBoolean2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toHex(value, options = {}) {
  return fromBytes(value, options);
}
toHex.parseError = (error) => error;
function toNumber2(bytes, options = {}) {
  const { size: size4 } = options;
  if (typeof size4 !== "undefined")
    assertSize(bytes, size4);
  const hex = fromBytes(bytes, options);
  return toNumber(hex, options);
}
toNumber2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toString2(bytes, options = {}) {
  const { size: size4 } = options;
  let bytes_ = bytes;
  if (typeof size4 !== "undefined") {
    assertSize(bytes_, size4);
    bytes_ = trimRight(bytes_);
  }
  return decoder.decode(bytes_);
}
toString2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function trimLeft2(value) {
  return trim(value, { dir: "left" });
}
trimLeft2.parseError = (error) => error;
function trimRight(value) {
  return trim(value, { dir: "right" });
}
trimRight.parseError = (error) => error;
function validate2(value) {
  try {
    assert2(value);
    return true;
  } catch {
    return false;
  }
}
validate2.parseError = (error) => error;
var InvalidBytesBooleanError = class extends BaseError {
  constructor(bytes) {
    super(`Bytes value \`${bytes}\` is not a valid boolean.`, {
      metaMessages: [
        "The bytes array must contain a single byte of either a `0` or `1` value."
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.InvalidBytesBooleanError"
    });
  }
};
var InvalidBytesTypeError = class extends BaseError {
  constructor(value) {
    super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, {
      metaMessages: ["Bytes values must be of type `Bytes`."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.InvalidBytesTypeError"
    });
  }
};
var SizeOverflowError = class extends BaseError {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeOverflowError"
    });
  }
};
var SliceOffsetOutOfBoundsError = class extends BaseError {
  constructor({ offset, position, size: size4 }) {
    super(`Slice ${position === "start" ? "starting" : "ending"} at offset \`${offset}\` is out-of-bounds (size: \`${size4}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SliceOffsetOutOfBoundsError"
    });
  }
};
var SizeExceedsPaddingSizeError = class extends BaseError {
  constructor({ size: size4, targetSize, type: type6 }) {
    super(`${type6.charAt(0).toUpperCase()}${type6.slice(1).toLowerCase()} size (\`${size4}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeExceedsPaddingSizeError"
    });
  }
};

// node_modules/ox/_esm/core/Hash.js
var Hash_exports = {};
__export(Hash_exports, {
  keccak256: () => keccak256,
  ripemd160: () => ripemd1602,
  sha256: () => sha2562,
  validate: () => validate3
});

// node_modules/ox/node_modules/@noble/hashes/esm/_assert.js
function anumber(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error("positive integer expected, got " + n);
}
function isBytes2(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function abytes2(b, ...lengths) {
  if (!isBytes2(b))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
}
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
  abytes2(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least " + min);
  }
}

// node_modules/ox/node_modules/@noble/hashes/esm/crypto.js
var crypto2 = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

// node_modules/ox/node_modules/@noble/hashes/esm/utils.js
var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
var rotr = (word, shift) => word << 32 - shift | word >>> shift;
var rotl = (word, shift) => word << shift | word >>> 32 - shift >>> 0;
var isLE = (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
var byteSwap = (word) => word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
function byteSwap32(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = byteSwap(arr[i]);
  }
}
var hexes3 = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
function utf8ToBytes2(str) {
  if (typeof str !== "string")
    throw new Error("utf8ToBytes expected string, got " + typeof str);
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes2(data) {
  if (typeof data === "string")
    data = utf8ToBytes2(data);
  abytes2(data);
  return data;
}
var Hash = class {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
function wrapConstructor(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes2(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
  const hashC = (msg, opts) => hashCons(opts).update(toBytes2(msg)).digest();
  const tmp = hashCons({});
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (opts) => hashCons(opts);
  return hashC;
}

// node_modules/ox/node_modules/@noble/hashes/esm/_md.js
function setBigUint64(view, byteOffset, value, isLE3) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE3);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE3 ? 4 : 0;
  const l = isLE3 ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE3);
  view.setUint32(byteOffset + l, wl, isLE3);
}
var Chi = (a, b, c) => a & b ^ ~a & c;
var Maj = (a, b, c) => a & b ^ a & c ^ b & c;
var HashMD = class extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE3) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE3;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    aexists(this);
    const { view, buffer: buffer2, blockLen } = this;
    data = toBytes2(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer2.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    aexists(this);
    aoutput(out, this);
    this.finished = true;
    const { buffer: buffer2, view, blockLen, isLE: isLE3 } = this;
    let { pos } = this;
    buffer2[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer2[i] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE3);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE3);
  }
  digest() {
    const { buffer: buffer2, outputLen } = this;
    this.digestInto(buffer2);
    const res = buffer2.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to3) {
    to3 || (to3 = new this.constructor());
    to3.set(...this.get());
    const { blockLen, buffer: buffer2, length, finished, destroyed, pos } = this;
    to3.length = length;
    to3.pos = pos;
    to3.finished = finished;
    to3.destroyed = destroyed;
    if (length % blockLen)
      to3.buffer.set(buffer2);
    return to3;
  }
};

// node_modules/ox/node_modules/@noble/hashes/esm/ripemd160.js
var Rho = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
var Id = new Uint8Array(new Array(16).fill(0).map((_, i) => i));
var Pi = Id.map((i) => (9 * i + 5) % 16);
var idxL = [Id];
var idxR = [Pi];
for (let i = 0; i < 4; i++)
  for (let j of [idxL, idxR])
    j.push(j[i].map((k) => Rho[k]));
var shifts = [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((i) => new Uint8Array(i));
var shiftsL = idxL.map((idx, i) => idx.map((j) => shifts[i][j]));
var shiftsR = idxR.map((idx, i) => idx.map((j) => shifts[i][j]));
var Kl = new Uint32Array([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]);
var Kr = new Uint32Array([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]);
function f(group, x, y, z) {
  if (group === 0)
    return x ^ y ^ z;
  else if (group === 1)
    return x & y | ~x & z;
  else if (group === 2)
    return (x | ~y) ^ z;
  else if (group === 3)
    return x & z | y & ~z;
  else
    return x ^ (y | ~z);
}
var R_BUF = new Uint32Array(16);
var RIPEMD160 = class extends HashMD {
  constructor() {
    super(64, 20, 8, true);
    this.h0 = 1732584193 | 0;
    this.h1 = 4023233417 | 0;
    this.h2 = 2562383102 | 0;
    this.h3 = 271733878 | 0;
    this.h4 = 3285377520 | 0;
  }
  get() {
    const { h0, h1, h2, h3, h4 } = this;
    return [h0, h1, h2, h3, h4];
  }
  set(h0, h1, h2, h3, h4) {
    this.h0 = h0 | 0;
    this.h1 = h1 | 0;
    this.h2 = h2 | 0;
    this.h3 = h3 | 0;
    this.h4 = h4 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      R_BUF[i] = view.getUint32(offset, true);
    let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
    for (let group = 0; group < 5; group++) {
      const rGroup = 4 - group;
      const hbl = Kl[group], hbr = Kr[group];
      const rl = idxL[group], rr = idxR[group];
      const sl = shiftsL[group], sr = shiftsR[group];
      for (let i = 0; i < 16; i++) {
        const tl = rotl(al + f(group, bl, cl, dl) + R_BUF[rl[i]] + hbl, sl[i]) + el | 0;
        al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
      }
      for (let i = 0; i < 16; i++) {
        const tr = rotl(ar + f(rGroup, br, cr, dr) + R_BUF[rr[i]] + hbr, sr[i]) + er | 0;
        ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr;
      }
    }
    this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
  }
  roundClean() {
    R_BUF.fill(0);
  }
  destroy() {
    this.destroyed = true;
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0);
  }
};
var ripemd160 = wrapConstructor(() => new RIPEMD160());

// node_modules/ox/node_modules/@noble/hashes/esm/_u64.js
var U32_MASK64 = BigInt(2 ** 32 - 1);
var _32n = BigInt(32);
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const { h, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;

// node_modules/ox/node_modules/@noble/hashes/esm/sha3.js
var SHA3_PI = [];
var SHA3_ROTL = [];
var _SHA3_IOTA = [];
var _0n2 = BigInt(0);
var _1n2 = BigInt(1);
var _2n2 = BigInt(2);
var _7n = BigInt(7);
var _256n = BigInt(256);
var _0x71n = BigInt(113);
for (let round = 0, R = _1n2, x = 1, y = 0; round < 24; round++) {
  [x, y] = [y, (2 * x + 3 * y) % 5];
  SHA3_PI.push(2 * (5 * y + x));
  SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
  let t = _0n2;
  for (let j = 0; j < 7; j++) {
    R = (R << _1n2 ^ (R >> _7n) * _0x71n) % _256n;
    if (R & _2n2)
      t ^= _1n2 << (_1n2 << BigInt(j)) - _1n2;
  }
  _SHA3_IOTA.push(t);
}
var [SHA3_IOTA_H, SHA3_IOTA_L] = split(_SHA3_IOTA, true);
var rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
var rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
function keccakP(s, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++)
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0; x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y = 0; y < 50; y += 10) {
        s[x + y] ^= Th;
        s[x + y + 1] ^= Tl;
      }
    }
    let curH = s[2];
    let curL = s[3];
    for (let t = 0; t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th;
      s[PI + 1] = Tl;
    }
    for (let y = 0; y < 50; y += 10) {
      for (let x = 0; x < 10; x++)
        B[x] = s[y + x];
      for (let x = 0; x < 10; x++)
        s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  B.fill(0);
}
var Keccak = class _Keccak extends Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
    super();
    this.blockLen = blockLen;
    this.suffix = suffix;
    this.outputLen = outputLen;
    this.enableXOF = enableXOF;
    this.rounds = rounds;
    this.pos = 0;
    this.posOut = 0;
    this.finished = false;
    this.destroyed = false;
    anumber(outputLen);
    if (0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200);
    this.state32 = u32(this.state);
  }
  keccak() {
    if (!isLE)
      byteSwap32(this.state32);
    keccakP(this.state32, this.rounds);
    if (!isLE)
      byteSwap32(this.state32);
    this.posOut = 0;
    this.pos = 0;
  }
  update(data) {
    aexists(this);
    const { blockLen, state } = this;
    data = toBytes2(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      for (let i = 0; i < take; i++)
        state[this.pos++] ^= data[pos++];
      if (this.pos === blockLen)
        this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = true;
    const { state, suffix, pos, blockLen } = this;
    state[pos] ^= suffix;
    if ((suffix & 128) !== 0 && pos === blockLen - 1)
      this.keccak();
    state[blockLen - 1] ^= 128;
    this.keccak();
  }
  writeInto(out) {
    aexists(this, false);
    abytes2(out);
    this.finish();
    const bufferOut = this.state;
    const { blockLen } = this;
    for (let pos = 0, len = out.length; pos < len; ) {
      if (this.posOut >= blockLen)
        this.keccak();
      const take = Math.min(blockLen - this.posOut, len - pos);
      out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
      this.posOut += take;
      pos += take;
    }
    return out;
  }
  xofInto(out) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(out);
  }
  xof(bytes) {
    anumber(bytes);
    return this.xofInto(new Uint8Array(bytes));
  }
  digestInto(out) {
    aoutput(out, this);
    if (this.finished)
      throw new Error("digest() was already called");
    this.writeInto(out);
    this.destroy();
    return out;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true;
    this.state.fill(0);
  }
  _cloneInto(to3) {
    const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
    to3 || (to3 = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
    to3.state32.set(this.state32);
    to3.pos = this.pos;
    to3.posOut = this.posOut;
    to3.finished = this.finished;
    to3.rounds = rounds;
    to3.suffix = suffix;
    to3.outputLen = outputLen;
    to3.enableXOF = enableXOF;
    to3.destroyed = this.destroyed;
    return to3;
  }
};
var gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
var sha3_224 = gen(6, 144, 224 / 8);
var sha3_256 = gen(6, 136, 256 / 8);
var sha3_384 = gen(6, 104, 384 / 8);
var sha3_512 = gen(6, 72, 512 / 8);
var keccak_224 = gen(1, 144, 224 / 8);
var keccak_256 = gen(1, 136, 256 / 8);
var keccak_384 = gen(1, 104, 384 / 8);
var keccak_512 = gen(1, 72, 512 / 8);
var genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
var shake128 = genShake(31, 168, 128 / 8);
var shake256 = genShake(31, 136, 256 / 8);

// node_modules/ox/node_modules/@noble/hashes/esm/sha256.js
var SHA256_K = new Uint32Array([
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
var SHA256_IV = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var SHA256_W = new Uint32Array(64);
var SHA256 = class extends HashMD {
  constructor() {
    super(64, 32, 8, false);
    this.A = SHA256_IV[0] | 0;
    this.B = SHA256_IV[1] | 0;
    this.C = SHA256_IV[2] | 0;
    this.D = SHA256_IV[3] | 0;
    this.E = SHA256_IV[4] | 0;
    this.F = SHA256_IV[5] | 0;
    this.G = SHA256_IV[6] | 0;
    this.H = SHA256_IV[7] | 0;
  }
  get() {
    const { A, B, C, D, E, F, G, H } = this;
    return [A, B, C, D, E, F, G, H];
  }
  // prettier-ignore
  set(A, B, C, D, E, F, G, H) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W2 = SHA256_W[i - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
    }
    let { A, B, C, D, E, F, G, H } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
      const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
      const T2 = sigma0 + Maj(A, B, C) | 0;
      H = G;
      G = F;
      F = E;
      E = D + T1 | 0;
      D = C;
      C = B;
      B = A;
      A = T1 + T2 | 0;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H = H + this.H | 0;
    this.set(A, B, C, D, E, F, G, H);
  }
  roundClean() {
    SHA256_W.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
};
var SHA224 = class extends SHA256 {
  constructor() {
    super();
    this.A = 3238371032 | 0;
    this.B = 914150663 | 0;
    this.C = 812702999 | 0;
    this.D = 4144912697 | 0;
    this.E = 4290775857 | 0;
    this.F = 1750603025 | 0;
    this.G = 1694076839 | 0;
    this.H = 3204075428 | 0;
    this.outputLen = 28;
  }
};
var sha256 = wrapConstructor(() => new SHA256());
var sha224 = wrapConstructor(() => new SHA224());

// node_modules/ox/_esm/core/Hash.js
function keccak256(value, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes = keccak_256(from2(value));
  if (as === "Bytes")
    return bytes;
  return fromBytes(bytes);
}
keccak256.parseError = (error) => error;
function ripemd1602(value, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes = ripemd160(from2(value));
  if (as === "Bytes")
    return bytes;
  return fromBytes(bytes);
}
ripemd1602.parseError = (error) => error;
function sha2562(value, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes = sha256(from2(value));
  if (as === "Bytes")
    return bytes;
  return fromBytes(bytes);
}
sha2562.parseError = (error) => error;
function validate3(value) {
  return validate(value) && size2(value) === 32;
}
validate3.parseError = (error) => error;

// node_modules/ox/_esm/core/Abi.js
var Abi_exports = {};
__export(Abi_exports, {
  format: () => format,
  from: () => from3
});

// node_modules/ox/_esm/core/internal/abi.js
function isSignatures(value) {
  for (const item of value) {
    if (typeof item !== "string")
      return false;
  }
  return true;
}

// node_modules/ox/_esm/core/Abi.js
function format(abi) {
  return formatAbi(abi);
}
format.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from3(abi) {
  if (isSignatures(abi))
    return parseAbi(abi);
  return abi;
}
from3.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/AbiConstructor.js
var AbiConstructor_exports = {};
__export(AbiConstructor_exports, {
  decode: () => decode2,
  encode: () => encode3,
  format: () => format4,
  from: () => from8,
  fromAbi: () => fromAbi2
});

// node_modules/ox/_esm/core/AbiItem.js
var AbiItem_exports = {};
__export(AbiItem_exports, {
  AmbiguityError: () => AmbiguityError,
  InvalidSelectorSizeError: () => InvalidSelectorSizeError,
  NotFoundError: () => NotFoundError,
  format: () => format2,
  from: () => from6,
  fromAbi: () => fromAbi,
  getSelector: () => getSelector,
  getSignature: () => getSignature,
  getSignatureHash: () => getSignatureHash
});

// node_modules/ox/_esm/core/Address.js
var Address_exports = {};
__export(Address_exports, {
  InvalidAddressError: () => InvalidAddressError,
  InvalidChecksumError: () => InvalidChecksumError,
  InvalidInputError: () => InvalidInputError,
  assert: () => assert4,
  checksum: () => checksum2,
  from: () => from5,
  fromPublicKey: () => fromPublicKey,
  isEqual: () => isEqual3,
  validate: () => validate5
});

// node_modules/ox/_esm/core/Caches.js
var Caches_exports = {};
__export(Caches_exports, {
  checksum: () => checksum,
  clear: () => clear
});

// node_modules/ox/_esm/core/internal/lru.js
var LruMap = class extends Map {
  constructor(size4) {
    super();
    Object.defineProperty(this, "maxSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.maxSize = size4;
  }
  get(key) {
    const value = super.get(key);
    if (super.has(key) && value !== void 0) {
      this.delete(key);
      super.set(key, value);
    }
    return value;
  }
  set(key, value) {
    super.set(key, value);
    if (this.maxSize && this.size > this.maxSize) {
      const firstKey = this.keys().next().value;
      if (firstKey)
        this.delete(firstKey);
    }
    return this;
  }
};

// node_modules/ox/_esm/core/Caches.js
var caches = {
  checksum: new LruMap(8192)
};
var checksum = caches.checksum;
function clear() {
  for (const cache of Object.values(caches))
    cache.clear();
}

// node_modules/ox/_esm/core/PublicKey.js
var PublicKey_exports = {};
__export(PublicKey_exports, {
  InvalidCompressedPrefixError: () => InvalidCompressedPrefixError,
  InvalidError: () => InvalidError,
  InvalidPrefixError: () => InvalidPrefixError,
  InvalidSerializedSizeError: () => InvalidSerializedSizeError,
  InvalidUncompressedPrefixError: () => InvalidUncompressedPrefixError,
  assert: () => assert3,
  compress: () => compress,
  from: () => from4,
  fromBytes: () => fromBytes2,
  fromHex: () => fromHex2,
  toBytes: () => toBytes3,
  toHex: () => toHex2,
  validate: () => validate4
});
function assert3(publicKey, options = {}) {
  const { compressed } = options;
  const { prefix, x, y } = publicKey;
  if (compressed === false || typeof x === "bigint" && typeof y === "bigint") {
    if (prefix !== 4)
      throw new InvalidPrefixError({
        prefix,
        cause: new InvalidUncompressedPrefixError()
      });
    return;
  }
  if (compressed === true || typeof x === "bigint" && typeof y === "undefined") {
    if (prefix !== 3 && prefix !== 2)
      throw new InvalidPrefixError({
        prefix,
        cause: new InvalidCompressedPrefixError()
      });
    return;
  }
  throw new InvalidError({ publicKey });
}
function compress(publicKey) {
  const { x, y } = publicKey;
  return {
    prefix: y % 2n === 0n ? 2 : 3,
    x
  };
}
compress.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from4(value) {
  const publicKey = (() => {
    if (validate(value))
      return fromHex2(value);
    if (validate2(value))
      return fromBytes2(value);
    const { prefix, x, y } = value;
    if (typeof x === "bigint" && typeof y === "bigint")
      return { prefix: prefix ?? 4, x, y };
    return { prefix, x };
  })();
  assert3(publicKey);
  return publicKey;
}
from4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromBytes2(publicKey) {
  return fromHex2(fromBytes(publicKey));
}
fromBytes2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromHex2(publicKey) {
  if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68)
    throw new InvalidSerializedSizeError({ publicKey });
  if (publicKey.length === 130) {
    const x2 = BigInt(slice(publicKey, 0, 32));
    const y = BigInt(slice(publicKey, 32, 64));
    return {
      prefix: 4,
      x: x2,
      y
    };
  }
  if (publicKey.length === 132) {
    const prefix2 = Number(slice(publicKey, 0, 1));
    const x2 = BigInt(slice(publicKey, 1, 33));
    const y = BigInt(slice(publicKey, 33, 65));
    return {
      prefix: prefix2,
      x: x2,
      y
    };
  }
  const prefix = Number(slice(publicKey, 0, 1));
  const x = BigInt(slice(publicKey, 1, 33));
  return {
    prefix,
    x
  };
}
fromHex2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toBytes3(publicKey, options = {}) {
  return fromHex(toHex2(publicKey, options));
}
toBytes3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toHex2(publicKey, options = {}) {
  assert3(publicKey);
  const { prefix, x, y } = publicKey;
  const { includePrefix = true } = options;
  const publicKey_ = concat(
    includePrefix ? fromNumber(prefix, { size: 1 }) : "0x",
    fromNumber(x, { size: 32 }),
    // If the public key is not compressed, add the y coordinate.
    typeof y === "bigint" ? fromNumber(y, { size: 32 }) : "0x"
  );
  return publicKey_;
}
toHex2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function validate4(publicKey, options = {}) {
  try {
    assert3(publicKey, options);
    return true;
  } catch (error) {
    return false;
  }
}
var InvalidError = class extends BaseError {
  constructor({ publicKey }) {
    super(`Value \`${stringify(publicKey)}\` is not a valid public key.`, {
      metaMessages: [
        "Public key must contain:",
        "- an `x` and `prefix` value (compressed)",
        "- an `x`, `y`, and `prefix` value (uncompressed)"
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidError"
    });
  }
};
var InvalidPrefixError = class extends BaseError {
  constructor({ prefix, cause }) {
    super(`Prefix "${prefix}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidPrefixError"
    });
  }
};
var InvalidCompressedPrefixError = class extends BaseError {
  constructor() {
    super("Prefix must be 2 or 3 for compressed public keys.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidCompressedPrefixError"
    });
  }
};
var InvalidUncompressedPrefixError = class extends BaseError {
  constructor() {
    super("Prefix must be 4 for uncompressed public keys.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidUncompressedPrefixError"
    });
  }
};
var InvalidSerializedSizeError = class extends BaseError {
  constructor({ publicKey }) {
    super(`Value \`${publicKey}\` is an invalid public key size.`, {
      metaMessages: [
        "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
        `Received ${size2(from(publicKey))} bytes.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidSerializedSizeError"
    });
  }
};

// node_modules/ox/_esm/core/Address.js
var addressRegex = /^0x[a-fA-F0-9]{40}$/;
function assert4(value, options = {}) {
  const { strict = true } = options;
  if (!addressRegex.test(value))
    throw new InvalidAddressError({
      address: value,
      cause: new InvalidInputError()
    });
  if (strict) {
    if (value.toLowerCase() === value)
      return;
    if (checksum2(value) !== value)
      throw new InvalidAddressError({
        address: value,
        cause: new InvalidChecksumError()
      });
  }
}
assert4.parseError = (error) => error;
function checksum2(address) {
  if (checksum.has(address))
    return checksum.get(address);
  assert4(address, { strict: false });
  const hexAddress = address.substring(2).toLowerCase();
  const hash7 = keccak256(fromString2(hexAddress), { as: "Bytes" });
  const characters = hexAddress.split("");
  for (let i = 0; i < 40; i += 2) {
    if (hash7[i >> 1] >> 4 >= 8 && characters[i]) {
      characters[i] = characters[i].toUpperCase();
    }
    if ((hash7[i >> 1] & 15) >= 8 && characters[i + 1]) {
      characters[i + 1] = characters[i + 1].toUpperCase();
    }
  }
  const result = `0x${characters.join("")}`;
  checksum.set(address, result);
  return result;
}
checksum2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from5(address, options = {}) {
  const { checksum: checksumVal = false } = options;
  assert4(address);
  if (checksumVal)
    return checksum2(address);
  return address;
}
from5.parseError = (error) => error;
function fromPublicKey(publicKey, options = {}) {
  const address = keccak256(`0x${toHex2(publicKey).slice(4)}`).substring(26);
  return from5(`0x${address}`, options);
}
fromPublicKey.parseError = (error) => (
  /* v8 ignore next */
  error
);
function isEqual3(addressA, addressB) {
  assert4(addressA, { strict: false });
  assert4(addressB, { strict: false });
  return addressA.toLowerCase() === addressB.toLowerCase();
}
isEqual3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function validate5(address, options = {}) {
  const { strict = true } = options ?? {};
  try {
    assert4(address, { strict });
    return true;
  } catch {
    return false;
  }
}
var InvalidAddressError = class extends BaseError {
  constructor({ address, cause }) {
    super(`Address "${address}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidAddressError"
    });
  }
};
var InvalidInputError = class extends BaseError {
  constructor() {
    super("Address is not a 20 byte (40 hexadecimal character) value.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidInputError"
    });
  }
};
var InvalidChecksumError = class extends BaseError {
  constructor() {
    super("Address does not match its checksum counterpart.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidChecksumError"
    });
  }
};

// node_modules/ox/_esm/core/internal/abiItem.js
function normalizeSignature(signature) {
  let active2 = true;
  let current = "";
  let level = 0;
  let result = "";
  let valid = false;
  for (let i = 0; i < signature.length; i++) {
    const char = signature[i];
    if (["(", ")", ","].includes(char))
      active2 = true;
    if (char === "(")
      level++;
    if (char === ")")
      level--;
    if (!active2)
      continue;
    if (level === 0) {
      if (char === " " && ["event", "function", "error", ""].includes(result))
        result = "";
      else {
        result += char;
        if (char === ")") {
          valid = true;
          break;
        }
      }
      continue;
    }
    if (char === " ") {
      if (signature[i - 1] !== "," && current !== "," && current !== ",(") {
        current = "";
        active2 = false;
      }
      continue;
    }
    result += char;
    current += char;
  }
  if (!valid)
    throw new BaseError("Unable to normalize signature.");
  return result;
}
function isArgOfType(arg, abiParameter) {
  const argType = typeof arg;
  const abiParameterType = abiParameter.type;
  switch (abiParameterType) {
    case "address":
      return validate5(arg, { strict: false });
    case "bool":
      return argType === "boolean";
    case "function":
      return argType === "string";
    case "string":
      return argType === "string";
    default: {
      if (abiParameterType === "tuple" && "components" in abiParameter)
        return Object.values(abiParameter.components).every((component, index2) => {
          return isArgOfType(Object.values(arg)[index2], component);
        });
      if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
        return argType === "number" || argType === "bigint";
      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
        return argType === "string" || arg instanceof Uint8Array;
      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
        return Array.isArray(arg) && arg.every((x) => isArgOfType(x, {
          ...abiParameter,
          // Pop off `[]` or `[M]` from end of type
          type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, "")
        }));
      }
      return false;
    }
  }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
  for (const parameterIndex in sourceParameters) {
    const sourceParameter = sourceParameters[parameterIndex];
    const targetParameter = targetParameters[parameterIndex];
    if (sourceParameter.type === "tuple" && targetParameter.type === "tuple" && "components" in sourceParameter && "components" in targetParameter)
      return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
    const types = [sourceParameter.type, targetParameter.type];
    const ambiguous = (() => {
      if (types.includes("address") && types.includes("bytes20"))
        return true;
      if (types.includes("address") && types.includes("string"))
        return validate5(args[parameterIndex], {
          strict: false
        });
      if (types.includes("address") && types.includes("bytes"))
        return validate5(args[parameterIndex], {
          strict: false
        });
      return false;
    })();
    if (ambiguous)
      return types;
  }
  return;
}

// node_modules/ox/_esm/core/AbiItem.js
function format2(abiItem) {
  return formatAbiItem(abiItem);
}
format2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from6(abiItem, options = {}) {
  const { prepare = true } = options;
  const item = (() => {
    if (Array.isArray(abiItem))
      return parseAbiItem(abiItem);
    if (typeof abiItem === "string")
      return parseAbiItem(abiItem);
    return abiItem;
  })();
  return {
    ...item,
    ...prepare ? { hash: getSignatureHash(item) } : {}
  };
}
from6.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromAbi(abi, name, options) {
  const { args = [], prepare = true } = options ?? {};
  const isSelector = validate(name, { strict: false });
  const abiItems = abi.filter((abiItem2) => {
    if (isSelector) {
      if (abiItem2.type === "function" || abiItem2.type === "error")
        return getSelector(abiItem2) === slice(name, 0, 4);
      if (abiItem2.type === "event")
        return getSignatureHash(abiItem2) === name;
      return false;
    }
    return "name" in abiItem2 && abiItem2.name === name;
  });
  if (abiItems.length === 0)
    throw new NotFoundError({ name });
  if (abiItems.length === 1)
    return {
      ...abiItems[0],
      ...prepare ? { hash: getSignatureHash(abiItems[0]) } : {}
    };
  let matchedAbiItem = void 0;
  for (const abiItem2 of abiItems) {
    if (!("inputs" in abiItem2))
      continue;
    if (!args || args.length === 0) {
      if (!abiItem2.inputs || abiItem2.inputs.length === 0)
        return {
          ...abiItem2,
          ...prepare ? { hash: getSignatureHash(abiItem2) } : {}
        };
      continue;
    }
    if (!abiItem2.inputs)
      continue;
    if (abiItem2.inputs.length === 0)
      continue;
    if (abiItem2.inputs.length !== args.length)
      continue;
    const matched = args.every((arg, index2) => {
      const abiParameter = "inputs" in abiItem2 && abiItem2.inputs[index2];
      if (!abiParameter)
        return false;
      return isArgOfType(arg, abiParameter);
    });
    if (matched) {
      if (matchedAbiItem && "inputs" in matchedAbiItem && matchedAbiItem.inputs) {
        const ambiguousTypes = getAmbiguousTypes(abiItem2.inputs, matchedAbiItem.inputs, args);
        if (ambiguousTypes)
          throw new AmbiguityError({
            abiItem: abiItem2,
            type: ambiguousTypes[0]
          }, {
            abiItem: matchedAbiItem,
            type: ambiguousTypes[1]
          });
      }
      matchedAbiItem = abiItem2;
    }
  }
  const abiItem = (() => {
    if (matchedAbiItem)
      return matchedAbiItem;
    const [abiItem2, ...overloads] = abiItems;
    return { ...abiItem2, overloads };
  })();
  if (!abiItem)
    throw new NotFoundError({ name });
  return {
    ...abiItem,
    ...prepare ? { hash: getSignatureHash(abiItem) } : {}
  };
}
fromAbi.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getSelector(abiItem) {
  return slice(getSignatureHash(abiItem), 0, 4);
}
getSelector.parseError = (error) => error;
function getSignature(abiItem) {
  const signature = (() => {
    if (typeof abiItem === "string")
      return abiItem;
    return formatAbiItem(abiItem);
  })();
  return normalizeSignature(signature);
}
getSignature.parseError = (error) => error;
function getSignatureHash(abiItem) {
  if (typeof abiItem !== "string" && "hash" in abiItem && abiItem.hash)
    return abiItem.hash;
  return keccak256(fromString(getSignature(abiItem)));
}
getSignatureHash.parseError = (error) => (
  /* v8 ignore next */
  error
);
var AmbiguityError = class extends BaseError {
  constructor(x, y) {
    super("Found ambiguous types in overloaded ABI Items.", {
      metaMessages: [
        // TODO: abitype to add support for signature-formatted ABI items.
        `\`${x.type}\` in \`${normalizeSignature(formatAbiItem(x.abiItem))}\`, and`,
        `\`${y.type}\` in \`${normalizeSignature(formatAbiItem(y.abiItem))}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.AmbiguityError"
    });
  }
};
var NotFoundError = class extends BaseError {
  constructor({ name, data, type: type6 = "item" }) {
    const selector = (() => {
      if (name)
        return ` with name "${name}"`;
      if (data)
        return ` with data "${data}"`;
      return "";
    })();
    super(`ABI ${type6}${selector} not found.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.NotFoundError"
    });
  }
};
var InvalidSelectorSizeError = class extends BaseError {
  constructor({ data }) {
    super(`Selector size is invalid. Expected 4 bytes. Received ${size2(data)} bytes ("${data}").`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.InvalidSelectorSizeError"
    });
  }
};

// node_modules/ox/_esm/core/AbiParameters.js
var AbiParameters_exports = {};
__export(AbiParameters_exports, {
  ArrayLengthMismatchError: () => ArrayLengthMismatchError,
  BytesSizeMismatchError: () => BytesSizeMismatchError,
  DataSizeTooSmallError: () => DataSizeTooSmallError,
  InvalidArrayError: () => InvalidArrayError,
  InvalidTypeError: () => InvalidTypeError,
  LengthMismatchError: () => LengthMismatchError,
  ZeroDataError: () => ZeroDataError,
  decode: () => decode,
  encode: () => encode2,
  encodePacked: () => encodePacked,
  format: () => format3,
  from: () => from7
});

// node_modules/ox/_esm/core/Solidity.js
var Solidity_exports = {};
__export(Solidity_exports, {
  arrayRegex: () => arrayRegex,
  bytesRegex: () => bytesRegex,
  integerRegex: () => integerRegex,
  maxInt104: () => maxInt104,
  maxInt112: () => maxInt112,
  maxInt120: () => maxInt120,
  maxInt128: () => maxInt128,
  maxInt136: () => maxInt136,
  maxInt144: () => maxInt144,
  maxInt152: () => maxInt152,
  maxInt16: () => maxInt16,
  maxInt160: () => maxInt160,
  maxInt168: () => maxInt168,
  maxInt176: () => maxInt176,
  maxInt184: () => maxInt184,
  maxInt192: () => maxInt192,
  maxInt200: () => maxInt200,
  maxInt208: () => maxInt208,
  maxInt216: () => maxInt216,
  maxInt224: () => maxInt224,
  maxInt232: () => maxInt232,
  maxInt24: () => maxInt24,
  maxInt240: () => maxInt240,
  maxInt248: () => maxInt248,
  maxInt256: () => maxInt256,
  maxInt32: () => maxInt32,
  maxInt40: () => maxInt40,
  maxInt48: () => maxInt48,
  maxInt56: () => maxInt56,
  maxInt64: () => maxInt64,
  maxInt72: () => maxInt72,
  maxInt8: () => maxInt8,
  maxInt80: () => maxInt80,
  maxInt88: () => maxInt88,
  maxInt96: () => maxInt96,
  maxUint104: () => maxUint104,
  maxUint112: () => maxUint112,
  maxUint120: () => maxUint120,
  maxUint128: () => maxUint128,
  maxUint136: () => maxUint136,
  maxUint144: () => maxUint144,
  maxUint152: () => maxUint152,
  maxUint16: () => maxUint16,
  maxUint160: () => maxUint160,
  maxUint168: () => maxUint168,
  maxUint176: () => maxUint176,
  maxUint184: () => maxUint184,
  maxUint192: () => maxUint192,
  maxUint200: () => maxUint200,
  maxUint208: () => maxUint208,
  maxUint216: () => maxUint216,
  maxUint224: () => maxUint224,
  maxUint232: () => maxUint232,
  maxUint24: () => maxUint24,
  maxUint240: () => maxUint240,
  maxUint248: () => maxUint248,
  maxUint256: () => maxUint256,
  maxUint32: () => maxUint32,
  maxUint40: () => maxUint40,
  maxUint48: () => maxUint48,
  maxUint56: () => maxUint56,
  maxUint64: () => maxUint64,
  maxUint72: () => maxUint72,
  maxUint8: () => maxUint8,
  maxUint80: () => maxUint80,
  maxUint88: () => maxUint88,
  maxUint96: () => maxUint96,
  minInt104: () => minInt104,
  minInt112: () => minInt112,
  minInt120: () => minInt120,
  minInt128: () => minInt128,
  minInt136: () => minInt136,
  minInt144: () => minInt144,
  minInt152: () => minInt152,
  minInt16: () => minInt16,
  minInt160: () => minInt160,
  minInt168: () => minInt168,
  minInt176: () => minInt176,
  minInt184: () => minInt184,
  minInt192: () => minInt192,
  minInt200: () => minInt200,
  minInt208: () => minInt208,
  minInt216: () => minInt216,
  minInt224: () => minInt224,
  minInt232: () => minInt232,
  minInt24: () => minInt24,
  minInt240: () => minInt240,
  minInt248: () => minInt248,
  minInt256: () => minInt256,
  minInt32: () => minInt32,
  minInt40: () => minInt40,
  minInt48: () => minInt48,
  minInt56: () => minInt56,
  minInt64: () => minInt64,
  minInt72: () => minInt72,
  minInt8: () => minInt8,
  minInt80: () => minInt80,
  minInt88: () => minInt88,
  minInt96: () => minInt96
});
var arrayRegex = /^(.*)\[([0-9]*)\]$/;
var bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
var integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
var maxInt8 = 2n ** (8n - 1n) - 1n;
var maxInt16 = 2n ** (16n - 1n) - 1n;
var maxInt24 = 2n ** (24n - 1n) - 1n;
var maxInt32 = 2n ** (32n - 1n) - 1n;
var maxInt40 = 2n ** (40n - 1n) - 1n;
var maxInt48 = 2n ** (48n - 1n) - 1n;
var maxInt56 = 2n ** (56n - 1n) - 1n;
var maxInt64 = 2n ** (64n - 1n) - 1n;
var maxInt72 = 2n ** (72n - 1n) - 1n;
var maxInt80 = 2n ** (80n - 1n) - 1n;
var maxInt88 = 2n ** (88n - 1n) - 1n;
var maxInt96 = 2n ** (96n - 1n) - 1n;
var maxInt104 = 2n ** (104n - 1n) - 1n;
var maxInt112 = 2n ** (112n - 1n) - 1n;
var maxInt120 = 2n ** (120n - 1n) - 1n;
var maxInt128 = 2n ** (128n - 1n) - 1n;
var maxInt136 = 2n ** (136n - 1n) - 1n;
var maxInt144 = 2n ** (144n - 1n) - 1n;
var maxInt152 = 2n ** (152n - 1n) - 1n;
var maxInt160 = 2n ** (160n - 1n) - 1n;
var maxInt168 = 2n ** (168n - 1n) - 1n;
var maxInt176 = 2n ** (176n - 1n) - 1n;
var maxInt184 = 2n ** (184n - 1n) - 1n;
var maxInt192 = 2n ** (192n - 1n) - 1n;
var maxInt200 = 2n ** (200n - 1n) - 1n;
var maxInt208 = 2n ** (208n - 1n) - 1n;
var maxInt216 = 2n ** (216n - 1n) - 1n;
var maxInt224 = 2n ** (224n - 1n) - 1n;
var maxInt232 = 2n ** (232n - 1n) - 1n;
var maxInt240 = 2n ** (240n - 1n) - 1n;
var maxInt248 = 2n ** (248n - 1n) - 1n;
var maxInt256 = 2n ** (256n - 1n) - 1n;
var minInt8 = -(2n ** (8n - 1n));
var minInt16 = -(2n ** (16n - 1n));
var minInt24 = -(2n ** (24n - 1n));
var minInt32 = -(2n ** (32n - 1n));
var minInt40 = -(2n ** (40n - 1n));
var minInt48 = -(2n ** (48n - 1n));
var minInt56 = -(2n ** (56n - 1n));
var minInt64 = -(2n ** (64n - 1n));
var minInt72 = -(2n ** (72n - 1n));
var minInt80 = -(2n ** (80n - 1n));
var minInt88 = -(2n ** (88n - 1n));
var minInt96 = -(2n ** (96n - 1n));
var minInt104 = -(2n ** (104n - 1n));
var minInt112 = -(2n ** (112n - 1n));
var minInt120 = -(2n ** (120n - 1n));
var minInt128 = -(2n ** (128n - 1n));
var minInt136 = -(2n ** (136n - 1n));
var minInt144 = -(2n ** (144n - 1n));
var minInt152 = -(2n ** (152n - 1n));
var minInt160 = -(2n ** (160n - 1n));
var minInt168 = -(2n ** (168n - 1n));
var minInt176 = -(2n ** (176n - 1n));
var minInt184 = -(2n ** (184n - 1n));
var minInt192 = -(2n ** (192n - 1n));
var minInt200 = -(2n ** (200n - 1n));
var minInt208 = -(2n ** (208n - 1n));
var minInt216 = -(2n ** (216n - 1n));
var minInt224 = -(2n ** (224n - 1n));
var minInt232 = -(2n ** (232n - 1n));
var minInt240 = -(2n ** (240n - 1n));
var minInt248 = -(2n ** (248n - 1n));
var minInt256 = -(2n ** (256n - 1n));
var maxUint8 = 2n ** 8n - 1n;
var maxUint16 = 2n ** 16n - 1n;
var maxUint24 = 2n ** 24n - 1n;
var maxUint32 = 2n ** 32n - 1n;
var maxUint40 = 2n ** 40n - 1n;
var maxUint48 = 2n ** 48n - 1n;
var maxUint56 = 2n ** 56n - 1n;
var maxUint64 = 2n ** 64n - 1n;
var maxUint72 = 2n ** 72n - 1n;
var maxUint80 = 2n ** 80n - 1n;
var maxUint88 = 2n ** 88n - 1n;
var maxUint96 = 2n ** 96n - 1n;
var maxUint104 = 2n ** 104n - 1n;
var maxUint112 = 2n ** 112n - 1n;
var maxUint120 = 2n ** 120n - 1n;
var maxUint128 = 2n ** 128n - 1n;
var maxUint136 = 2n ** 136n - 1n;
var maxUint144 = 2n ** 144n - 1n;
var maxUint152 = 2n ** 152n - 1n;
var maxUint160 = 2n ** 160n - 1n;
var maxUint168 = 2n ** 168n - 1n;
var maxUint176 = 2n ** 176n - 1n;
var maxUint184 = 2n ** 184n - 1n;
var maxUint192 = 2n ** 192n - 1n;
var maxUint200 = 2n ** 200n - 1n;
var maxUint208 = 2n ** 208n - 1n;
var maxUint216 = 2n ** 216n - 1n;
var maxUint224 = 2n ** 224n - 1n;
var maxUint232 = 2n ** 232n - 1n;
var maxUint240 = 2n ** 240n - 1n;
var maxUint248 = 2n ** 248n - 1n;
var maxUint256 = 2n ** 256n - 1n;

// node_modules/ox/_esm/core/internal/abiParameters.js
function decodeParameter(cursor, param, { staticPosition }) {
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents) {
    const [length, type6] = arrayComponents;
    return decodeArray(cursor, { ...param, type: type6 }, { length, staticPosition });
  }
  if (param.type === "tuple")
    return decodeTuple(cursor, param, { staticPosition });
  if (param.type === "address")
    return decodeAddress(cursor);
  if (param.type === "bool")
    return decodeBool(cursor);
  if (param.type.startsWith("bytes"))
    return decodeBytes(cursor, param, { staticPosition });
  if (param.type.startsWith("uint") || param.type.startsWith("int"))
    return decodeNumber(cursor, param);
  if (param.type === "string")
    return decodeString(cursor, { staticPosition });
  throw new InvalidTypeError(param.type);
}
var sizeOfLength = 32;
var sizeOfOffset = 32;
function decodeAddress(cursor) {
  const value = cursor.readBytes(32);
  return [fromBytes(slice2(value, -20)), 32];
}
function decodeArray(cursor, param, { length, staticPosition }) {
  if (!length) {
    const offset = toNumber2(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    const startOfData = start + sizeOfLength;
    cursor.setPosition(start);
    const length2 = toNumber2(cursor.readBytes(sizeOfLength));
    const dynamicChild = hasDynamicChild(param);
    let consumed2 = 0;
    const value2 = [];
    for (let i = 0; i < length2; ++i) {
      cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed2));
      const [data, consumed_] = decodeParameter(cursor, param, {
        staticPosition: startOfData
      });
      consumed2 += consumed_;
      value2.push(data);
    }
    cursor.setPosition(staticPosition + 32);
    return [value2, 32];
  }
  if (hasDynamicChild(param)) {
    const offset = toNumber2(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    const value2 = [];
    for (let i = 0; i < length; ++i) {
      cursor.setPosition(start + i * 32);
      const [data] = decodeParameter(cursor, param, {
        staticPosition: start
      });
      value2.push(data);
    }
    cursor.setPosition(staticPosition + 32);
    return [value2, 32];
  }
  let consumed = 0;
  const value = [];
  for (let i = 0; i < length; ++i) {
    const [data, consumed_] = decodeParameter(cursor, param, {
      staticPosition: staticPosition + consumed
    });
    consumed += consumed_;
    value.push(data);
  }
  return [value, consumed];
}
function decodeBool(cursor) {
  return [toBoolean2(cursor.readBytes(32), { size: 32 }), 32];
}
function decodeBytes(cursor, param, { staticPosition }) {
  const [_, size4] = param.type.split("bytes");
  if (!size4) {
    const offset = toNumber2(cursor.readBytes(32));
    cursor.setPosition(staticPosition + offset);
    const length = toNumber2(cursor.readBytes(32));
    if (length === 0) {
      cursor.setPosition(staticPosition + 32);
      return ["0x", 32];
    }
    const data = cursor.readBytes(length);
    cursor.setPosition(staticPosition + 32);
    return [fromBytes(data), 32];
  }
  const value = fromBytes(cursor.readBytes(Number.parseInt(size4), 32));
  return [value, 32];
}
function decodeNumber(cursor, param) {
  const signed = param.type.startsWith("int");
  const size4 = Number.parseInt(param.type.split("int")[1] || "256");
  const value = cursor.readBytes(32);
  return [
    size4 > 48 ? toBigInt2(value, { signed }) : toNumber2(value, { signed }),
    32
  ];
}
function decodeTuple(cursor, param, { staticPosition }) {
  const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name }) => !name);
  const value = hasUnnamedChild ? [] : {};
  let consumed = 0;
  if (hasDynamicChild(param)) {
    const offset = toNumber2(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    for (let i = 0; i < param.components.length; ++i) {
      const component = param.components[i];
      cursor.setPosition(start + consumed);
      const [data, consumed_] = decodeParameter(cursor, component, {
        staticPosition: start
      });
      consumed += consumed_;
      value[hasUnnamedChild ? i : component == null ? void 0 : component.name] = data;
    }
    cursor.setPosition(staticPosition + 32);
    return [value, 32];
  }
  for (let i = 0; i < param.components.length; ++i) {
    const component = param.components[i];
    const [data, consumed_] = decodeParameter(cursor, component, {
      staticPosition
    });
    value[hasUnnamedChild ? i : component == null ? void 0 : component.name] = data;
    consumed += consumed_;
  }
  return [value, consumed];
}
function decodeString(cursor, { staticPosition }) {
  const offset = toNumber2(cursor.readBytes(32));
  const start = staticPosition + offset;
  cursor.setPosition(start);
  const length = toNumber2(cursor.readBytes(32));
  if (length === 0) {
    cursor.setPosition(staticPosition + 32);
    return ["", 32];
  }
  const data = cursor.readBytes(length, 32);
  const value = toString2(trimLeft2(data));
  cursor.setPosition(staticPosition + 32);
  return [value, 32];
}
function prepareParameters({ parameters, values }) {
  const preparedParameters = [];
  for (let i = 0; i < parameters.length; i++) {
    preparedParameters.push(prepareParameter({ parameter: parameters[i], value: values[i] }));
  }
  return preparedParameters;
}
function prepareParameter({ parameter: parameter_, value }) {
  const parameter = parameter_;
  const arrayComponents = getArrayComponents(parameter.type);
  if (arrayComponents) {
    const [length, type6] = arrayComponents;
    return encodeArray(value, {
      length,
      parameter: {
        ...parameter,
        type: type6
      }
    });
  }
  if (parameter.type === "tuple") {
    return encodeTuple(value, {
      parameter
    });
  }
  if (parameter.type === "address") {
    return encodeAddress(value);
  }
  if (parameter.type === "bool") {
    return encodeBoolean(value);
  }
  if (parameter.type.startsWith("uint") || parameter.type.startsWith("int")) {
    const signed = parameter.type.startsWith("int");
    return encodeNumber(value, { signed });
  }
  if (parameter.type.startsWith("bytes")) {
    return encodeBytes(value, { type: parameter.type });
  }
  if (parameter.type === "string") {
    return encodeString(value);
  }
  throw new InvalidTypeError(parameter.type);
}
function encode(preparedParameters) {
  let staticSize = 0;
  for (let i = 0; i < preparedParameters.length; i++) {
    const { dynamic, encoded } = preparedParameters[i];
    if (dynamic)
      staticSize += 32;
    else
      staticSize += size2(encoded);
  }
  const staticParameters = [];
  const dynamicParameters = [];
  let dynamicSize = 0;
  for (let i = 0; i < preparedParameters.length; i++) {
    const { dynamic, encoded } = preparedParameters[i];
    if (dynamic) {
      staticParameters.push(fromNumber(staticSize + dynamicSize, { size: 32 }));
      dynamicParameters.push(encoded);
      dynamicSize += size2(encoded);
    } else {
      staticParameters.push(encoded);
    }
  }
  return concat(...staticParameters, ...dynamicParameters);
}
function encodeAddress(value) {
  assert4(value, { strict: false });
  return {
    dynamic: false,
    encoded: padLeft(value.toLowerCase())
  };
}
function encodeArray(value, { length, parameter }) {
  const dynamic = length === null;
  if (!Array.isArray(value))
    throw new InvalidArrayError(value);
  if (!dynamic && value.length !== length)
    throw new ArrayLengthMismatchError({
      expectedLength: length,
      givenLength: value.length,
      type: `${parameter.type}[${length}]`
    });
  let dynamicChild = false;
  const preparedParameters = [];
  for (let i = 0; i < value.length; i++) {
    const preparedParam = prepareParameter({ parameter, value: value[i] });
    if (preparedParam.dynamic)
      dynamicChild = true;
    preparedParameters.push(preparedParam);
  }
  if (dynamic || dynamicChild) {
    const data = encode(preparedParameters);
    if (dynamic) {
      const length2 = fromNumber(preparedParameters.length, { size: 32 });
      return {
        dynamic: true,
        encoded: preparedParameters.length > 0 ? concat(length2, data) : length2
      };
    }
    if (dynamicChild)
      return { dynamic: true, encoded: data };
  }
  return {
    dynamic: false,
    encoded: concat(...preparedParameters.map(({ encoded }) => encoded))
  };
}
function encodeBytes(value, { type: type6 }) {
  const [, parametersize] = type6.split("bytes");
  const bytesSize = size2(value);
  if (!parametersize) {
    let value_ = value;
    if (bytesSize % 32 !== 0)
      value_ = padRight(value_, Math.ceil((value.length - 2) / 2 / 32) * 32);
    return {
      dynamic: true,
      encoded: concat(padLeft(fromNumber(bytesSize, { size: 32 })), value_)
    };
  }
  if (bytesSize !== Number.parseInt(parametersize))
    throw new BytesSizeMismatchError({
      expectedSize: Number.parseInt(parametersize),
      value
    });
  return { dynamic: false, encoded: padRight(value) };
}
function encodeBoolean(value) {
  if (typeof value !== "boolean")
    throw new BaseError(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
  return { dynamic: false, encoded: padLeft(fromBoolean(value)) };
}
function encodeNumber(value, { signed }) {
  return {
    dynamic: false,
    encoded: fromNumber(value, {
      size: 32,
      signed
    })
  };
}
function encodeString(value) {
  const hexValue = fromString(value);
  const partsLength = Math.ceil(size2(hexValue) / 32);
  const parts = [];
  for (let i = 0; i < partsLength; i++) {
    parts.push(padRight(slice(hexValue, i * 32, (i + 1) * 32)));
  }
  return {
    dynamic: true,
    encoded: concat(padRight(fromNumber(size2(hexValue), { size: 32 })), ...parts)
  };
}
function encodeTuple(value, { parameter }) {
  let dynamic = false;
  const preparedParameters = [];
  for (let i = 0; i < parameter.components.length; i++) {
    const param_ = parameter.components[i];
    const index2 = Array.isArray(value) ? i : param_.name;
    const preparedParam = prepareParameter({
      parameter: param_,
      value: value[index2]
    });
    preparedParameters.push(preparedParam);
    if (preparedParam.dynamic)
      dynamic = true;
  }
  return {
    dynamic,
    encoded: dynamic ? encode(preparedParameters) : concat(...preparedParameters.map(({ encoded }) => encoded))
  };
}
function getArrayComponents(type6) {
  const matches = type6.match(/^(.*)\[(\d+)?\]$/);
  return matches ? (
    // Return `null` if the array is dynamic.
    [matches[2] ? Number(matches[2]) : null, matches[1]]
  ) : void 0;
}
function hasDynamicChild(param) {
  var _a;
  const { type: type6 } = param;
  if (type6 === "string")
    return true;
  if (type6 === "bytes")
    return true;
  if (type6.endsWith("[]"))
    return true;
  if (type6 === "tuple")
    return (_a = param.components) == null ? void 0 : _a.some(hasDynamicChild);
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents && hasDynamicChild({
    ...param,
    type: arrayComponents[1]
  }))
    return true;
  return false;
}

// node_modules/ox/_esm/core/internal/cursor.js
var staticCursor = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new RecursiveReadLimitExceededError({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(position) {
    if (position < 0 || position > this.bytes.length - 1)
      throw new PositionOutOfBoundsError({
        length: this.bytes.length,
        position
      });
  },
  decrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position - offset;
    this.assertPosition(position);
    this.position = position;
  },
  getReadCount(position) {
    return this.positionReadCount.get(position || this.position) || 0;
  },
  incrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position + offset;
    this.assertPosition(position);
    this.position = position;
  },
  inspectByte(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectBytes(length, position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + length - 1);
    return this.bytes.subarray(position, position + length);
  },
  inspectUint8(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectUint16(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 1);
    return this.dataView.getUint16(position);
  },
  inspectUint24(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 2);
    return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
  },
  inspectUint32(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 3);
    return this.dataView.getUint32(position);
  },
  pushByte(byte) {
    this.assertPosition(this.position);
    this.bytes[this.position] = byte;
    this.position++;
  },
  pushBytes(bytes) {
    this.assertPosition(this.position + bytes.length - 1);
    this.bytes.set(bytes, this.position);
    this.position += bytes.length;
  },
  pushUint8(value) {
    this.assertPosition(this.position);
    this.bytes[this.position] = value;
    this.position++;
  },
  pushUint16(value) {
    this.assertPosition(this.position + 1);
    this.dataView.setUint16(this.position, value);
    this.position += 2;
  },
  pushUint24(value) {
    this.assertPosition(this.position + 2);
    this.dataView.setUint16(this.position, value >> 8);
    this.dataView.setUint8(this.position + 2, value & ~4294967040);
    this.position += 3;
  },
  pushUint32(value) {
    this.assertPosition(this.position + 3);
    this.dataView.setUint32(this.position, value);
    this.position += 4;
  },
  readByte() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectByte();
    this.position++;
    return value;
  },
  readBytes(length, size4) {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectBytes(length);
    this.position += size4 ?? length;
    return value;
  },
  readUint8() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint8();
    this.position += 1;
    return value;
  },
  readUint16() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint16();
    this.position += 2;
    return value;
  },
  readUint24() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint24();
    this.position += 3;
    return value;
  },
  readUint32() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint32();
    this.position += 4;
    return value;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(position) {
    const oldPosition = this.position;
    this.assertPosition(position);
    this.position = position;
    return () => this.position = oldPosition;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const count = this.getReadCount();
    this.positionReadCount.set(this.position, count + 1);
    if (count > 0)
      this.recursiveReadCount++;
  }
};
function create(bytes, { recursiveReadLimit = 8192 } = {}) {
  const cursor = Object.create(staticCursor);
  cursor.bytes = bytes;
  cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  cursor.positionReadCount = /* @__PURE__ */ new Map();
  cursor.recursiveReadLimit = recursiveReadLimit;
  return cursor;
}
var NegativeOffsetError = class extends BaseError {
  constructor({ offset }) {
    super(`Offset \`${offset}\` cannot be negative.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.NegativeOffsetError"
    });
  }
};
var PositionOutOfBoundsError = class extends BaseError {
  constructor({ length, position }) {
    super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.PositionOutOfBoundsError"
    });
  }
};
var RecursiveReadLimitExceededError = class extends BaseError {
  constructor({ count, limit }) {
    super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.RecursiveReadLimitExceededError"
    });
  }
};

// node_modules/ox/_esm/core/AbiParameters.js
function decode(parameters, data, options = {}) {
  const { as = "Array" } = options;
  const bytes = typeof data === "string" ? fromHex(data) : data;
  const cursor = create(bytes);
  if (size(bytes) === 0 && parameters.length > 0)
    throw new ZeroDataError();
  if (size(bytes) && size(bytes) < 32)
    throw new DataSizeTooSmallError({
      data: typeof data === "string" ? data : fromBytes(data),
      parameters,
      size: size(bytes)
    });
  let consumed = 0;
  const values = as === "Array" ? [] : {};
  for (let i = 0; i < parameters.length; ++i) {
    const param = parameters[i];
    cursor.setPosition(consumed);
    const [data2, consumed_] = decodeParameter(cursor, param, {
      staticPosition: 0
    });
    consumed += consumed_;
    if (as === "Array")
      values.push(data2);
    else
      values[param.name ?? i] = data2;
  }
  return values;
}
decode.parseError = (error) => (
  /* v8 ignore next */
  error
);
function encode2(parameters, values) {
  if (parameters.length !== values.length)
    throw new LengthMismatchError({
      expectedLength: parameters.length,
      givenLength: values.length
    });
  const preparedParameters = prepareParameters({
    parameters,
    values
  });
  const data = encode(preparedParameters);
  if (data.length === 0)
    return "0x";
  return data;
}
encode2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function encodePacked(types, values) {
  if (types.length !== values.length)
    throw new LengthMismatchError({
      expectedLength: types.length,
      givenLength: values.length
    });
  const data = [];
  for (let i = 0; i < types.length; i++) {
    const type6 = types[i];
    const value = values[i];
    data.push(encodePacked.encode(type6, value));
  }
  return concat(...data);
}
(function(encodePacked2) {
  function encode9(type6, value, isArray = false) {
    if (type6 === "address") {
      const address = value;
      assert4(address);
      return padLeft(address.toLowerCase(), isArray ? 32 : 0);
    }
    if (type6 === "string")
      return fromString(value);
    if (type6 === "bytes")
      return value;
    if (type6 === "bool")
      return padLeft(fromBoolean(value), isArray ? 32 : 1);
    const intMatch = type6.match(integerRegex);
    if (intMatch) {
      const [_type, baseType, bits = "256"] = intMatch;
      const size4 = Number.parseInt(bits) / 8;
      return fromNumber(value, {
        size: isArray ? 32 : size4,
        signed: baseType === "int"
      });
    }
    const bytesMatch = type6.match(bytesRegex);
    if (bytesMatch) {
      const [_type, size4] = bytesMatch;
      if (Number.parseInt(size4) !== (value.length - 2) / 2)
        throw new BytesSizeMismatchError({
          expectedSize: Number.parseInt(size4),
          value
        });
      return padRight(value, isArray ? 32 : 0);
    }
    const arrayMatch = type6.match(arrayRegex);
    if (arrayMatch && Array.isArray(value)) {
      const [_type, childType] = arrayMatch;
      const data = [];
      for (let i = 0; i < value.length; i++) {
        data.push(encode9(childType, value[i], true));
      }
      if (data.length === 0)
        return "0x";
      return concat(...data);
    }
    throw new InvalidTypeError(type6);
  }
  encodePacked2.encode = encode9;
})(encodePacked || (encodePacked = {}));
encodePacked.parseError = (error) => error;
function format3(parameters) {
  return formatAbiParameters(parameters);
}
format3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from7(parameters) {
  if (Array.isArray(parameters) && typeof parameters[0] === "string")
    return parseAbiParameters(parameters);
  if (typeof parameters === "string")
    return parseAbiParameters(parameters);
  return parameters;
}
from7.parseError = (error) => (
  /* v8 ignore next */
  error
);
var DataSizeTooSmallError = class extends BaseError {
  constructor({ data, parameters, size: size4 }) {
    super(`Data size of ${size4} bytes is too small for given parameters.`, {
      metaMessages: [
        `Params: (${formatAbiParameters(parameters)})`,
        `Data:   ${data} (${size4} bytes)`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.DataSizeTooSmallError"
    });
  }
};
var ZeroDataError = class extends BaseError {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.');
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.ZeroDataError"
    });
  }
};
var ArrayLengthMismatchError = class extends BaseError {
  constructor({ expectedLength, givenLength, type: type6 }) {
    super(`Array length mismatch for type \`${type6}\`. Expected: \`${expectedLength}\`. Given: \`${givenLength}\`.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.ArrayLengthMismatchError"
    });
  }
};
var BytesSizeMismatchError = class extends BaseError {
  constructor({ expectedSize, value }) {
    super(`Size of bytes "${value}" (bytes${size2(value)}) does not match expected size (bytes${expectedSize}).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.BytesSizeMismatchError"
    });
  }
};
var LengthMismatchError = class extends BaseError {
  constructor({ expectedLength, givenLength }) {
    super([
      "ABI encoding parameters/values length mismatch.",
      `Expected length (parameters): ${expectedLength}`,
      `Given length (values): ${givenLength}`
    ].join("\n"));
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.LengthMismatchError"
    });
  }
};
var InvalidArrayError = class extends BaseError {
  constructor(value) {
    super(`Value \`${value}\` is not a valid array.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.InvalidArrayError"
    });
  }
};
var InvalidTypeError = class extends BaseError {
  constructor(type6) {
    super(`Type \`${type6}\` is not a valid ABI Type.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.InvalidTypeError"
    });
  }
};

// node_modules/ox/_esm/core/AbiConstructor.js
function decode2(abiConstructor, options) {
  const { bytecode } = options;
  if (abiConstructor.inputs.length === 0)
    return void 0;
  const data = options.data.replace(bytecode, "0x");
  return decode(abiConstructor.inputs, data);
}
decode2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function encode3(abiConstructor, options) {
  var _a;
  const { bytecode, args } = options;
  return concat(bytecode, ((_a = abiConstructor.inputs) == null ? void 0 : _a.length) && (args == null ? void 0 : args.length) ? encode2(abiConstructor.inputs, args) : "0x");
}
encode3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function format4(abiConstructor) {
  return formatAbiItem(abiConstructor);
}
format4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from8(abiConstructor) {
  return from6(abiConstructor);
}
from8.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromAbi2(abi) {
  const item = abi.find((item2) => item2.type === "constructor");
  if (!item)
    throw new NotFoundError({ name: "constructor" });
  return item;
}
fromAbi2.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/AbiError.js
var AbiError_exports = {};
__export(AbiError_exports, {
  decode: () => decode3,
  encode: () => encode4,
  format: () => format5,
  from: () => from9,
  fromAbi: () => fromAbi3,
  getSelector: () => getSelector2,
  panicReasons: () => panicReasons,
  solidityError: () => solidityError,
  solidityErrorSelector: () => solidityErrorSelector,
  solidityPanic: () => solidityPanic,
  solidityPanicSelector: () => solidityPanicSelector
});
function decode3(abiError, data, options = {}) {
  if (size2(data) < 4)
    throw new InvalidSelectorSizeError({ data });
  if (abiError.inputs.length === 0)
    return void 0;
  const values = decode(abiError.inputs, slice(data, 4), options);
  if (values && Object.keys(values).length === 1) {
    if (Array.isArray(values))
      return values[0];
    return Object.values(values)[0];
  }
  return values;
}
function encode4(abiError, ...args) {
  const selector = getSelector2(abiError);
  const data = args.length > 0 ? encode2(abiError.inputs, args[0]) : void 0;
  return data ? concat(selector, data) : selector;
}
encode4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function format5(abiError) {
  return formatAbiItem(abiError);
}
format5.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from9(abiError, options = {}) {
  return from6(abiError, options);
}
from9.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromAbi3(abi, name, options) {
  if (name === "Error")
    return solidityError;
  if (name === "Panic")
    return solidityPanic;
  if (validate(name, { strict: false })) {
    const selector = slice(name, 0, 4);
    if (selector === solidityErrorSelector)
      return solidityError;
    if (selector === solidityPanicSelector)
      return solidityPanic;
  }
  const item = fromAbi(abi, name, options);
  if (item.type !== "error")
    throw new NotFoundError({ name, type: "error" });
  return item;
}
fromAbi3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getSelector2(abiItem) {
  return getSelector(abiItem);
}
getSelector2.parseError = (error) => error;
var panicReasons = {
  1: "An `assert` condition failed.",
  17: "Arithmetic operation resulted in underflow or overflow.",
  18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
  33: "Attempted to convert to an invalid type.",
  34: "Attempted to access a storage byte array that is incorrectly encoded.",
  49: "Performed `.pop()` on an empty array",
  50: "Array index is out of bounds.",
  65: "Allocated too much memory or created an array which is too large.",
  81: "Attempted to call a zero-initialized variable of internal function type."
};
var solidityError = from9({
  inputs: [
    {
      name: "message",
      type: "string"
    }
  ],
  name: "Error",
  type: "error"
});
var solidityErrorSelector = "0x08c379a0";
var solidityPanic = from9({
  inputs: [
    {
      name: "reason",
      type: "uint8"
    }
  ],
  name: "Panic",
  type: "error"
});
var solidityPanicSelector = "0x4e487b71";

// node_modules/ox/_esm/core/AbiEvent.js
var AbiEvent_exports = {};
__export(AbiEvent_exports, {
  ArgsMismatchError: () => ArgsMismatchError,
  DataMismatchError: () => DataMismatchError,
  FilterTypeNotSupportedError: () => FilterTypeNotSupportedError,
  InputNotFoundError: () => InputNotFoundError,
  SelectorTopicMismatchError: () => SelectorTopicMismatchError,
  TopicsMismatchError: () => TopicsMismatchError,
  assertArgs: () => assertArgs,
  decode: () => decode4,
  encode: () => encode5,
  format: () => format6,
  from: () => from10,
  fromAbi: () => fromAbi4,
  getSelector: () => getSelector3
});
function assertArgs(abiEvent, args, matchArgs) {
  if (!args || !matchArgs)
    throw new ArgsMismatchError({
      abiEvent,
      expected: args,
      given: matchArgs
    });
  function isEqual4(input, value, arg) {
    if (input.type === "address")
      return isEqual3(value, arg);
    if (input.type === "string")
      return keccak256(fromString2(value)) === arg;
    if (input.type === "bytes")
      return keccak256(value) === arg;
    return value === arg;
  }
  if (Array.isArray(args) && Array.isArray(matchArgs)) {
    for (const [index2, value] of matchArgs.entries()) {
      if (value === null || value === void 0)
        continue;
      const input = abiEvent.inputs[index2];
      if (!input)
        throw new InputNotFoundError({
          abiEvent,
          name: `${index2}`
        });
      const value_ = Array.isArray(value) ? value : [value];
      let equal = false;
      for (const value2 of value_) {
        if (isEqual4(input, value2, args[index2]))
          equal = true;
      }
      if (!equal)
        throw new ArgsMismatchError({
          abiEvent,
          expected: args,
          given: matchArgs
        });
    }
  }
  if (typeof args === "object" && !Array.isArray(args) && typeof matchArgs === "object" && !Array.isArray(matchArgs))
    for (const [key, value] of Object.entries(matchArgs)) {
      if (value === null || value === void 0)
        continue;
      const input = abiEvent.inputs.find((input2) => input2.name === key);
      if (!input)
        throw new InputNotFoundError({ abiEvent, name: key });
      const value_ = Array.isArray(value) ? value : [value];
      let equal = false;
      for (const value2 of value_) {
        if (isEqual4(input, value2, args[key]))
          equal = true;
      }
      if (!equal)
        throw new ArgsMismatchError({
          abiEvent,
          expected: args,
          given: matchArgs
        });
    }
}
assertArgs.parseError = (error) => (
  /* v8 ignore next */
  error
);
function decode4(abiEvent, log) {
  const { data, topics } = log;
  const [selector_, ...argTopics] = topics;
  const selector = getSelector3(abiEvent);
  if (selector_ !== selector)
    throw new SelectorTopicMismatchError({
      abiEvent,
      actual: selector_,
      expected: selector
    });
  const { inputs } = abiEvent;
  const isUnnamed = inputs == null ? void 0 : inputs.every((x) => !("name" in x && x.name));
  let args = isUnnamed ? [] : {};
  const indexedInputs = inputs.filter((x) => "indexed" in x && x.indexed);
  for (let i = 0; i < indexedInputs.length; i++) {
    const param = indexedInputs[i];
    const topic = argTopics[i];
    if (!topic)
      throw new TopicsMismatchError({
        abiEvent,
        param
      });
    args[isUnnamed ? i : param.name || i] = (() => {
      if (param.type === "string" || param.type === "bytes" || param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
        return topic;
      const decoded = decode([param], topic) || [];
      return decoded[0];
    })();
  }
  const nonIndexedInputs = inputs.filter((x) => !("indexed" in x && x.indexed));
  if (nonIndexedInputs.length > 0) {
    if (data && data !== "0x") {
      try {
        const decodedData = decode(nonIndexedInputs, data);
        if (decodedData) {
          if (isUnnamed)
            args = [...args, ...decodedData];
          else {
            for (let i = 0; i < nonIndexedInputs.length; i++) {
              const index2 = inputs.indexOf(nonIndexedInputs[i]);
              args[nonIndexedInputs[i].name || index2] = decodedData[i];
            }
          }
        }
      } catch (err) {
        if (err instanceof DataSizeTooSmallError || err instanceof PositionOutOfBoundsError)
          throw new DataMismatchError({
            abiEvent,
            data,
            parameters: nonIndexedInputs,
            size: size2(data)
          });
        throw err;
      }
    } else {
      throw new DataMismatchError({
        abiEvent,
        data: "0x",
        parameters: nonIndexedInputs,
        size: 0
      });
    }
  }
  return Object.values(args).length > 0 ? args : void 0;
}
decode4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function encode5(abiEvent, ...[args]) {
  let topics = [];
  if (args && abiEvent.inputs) {
    const indexedInputs = abiEvent.inputs.filter((param) => "indexed" in param && param.indexed);
    const args_ = Array.isArray(args) ? args : Object.values(args).length > 0 ? (indexedInputs == null ? void 0 : indexedInputs.map((x, i) => args[x.name ?? i])) ?? [] : [];
    if (args_.length > 0) {
      const encode9 = (param, value) => {
        if (param.type === "string")
          return keccak256(fromString(value));
        if (param.type === "bytes")
          return keccak256(value);
        if (param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
          throw new FilterTypeNotSupportedError(param.type);
        return encode2([param], [value]);
      };
      topics = (indexedInputs == null ? void 0 : indexedInputs.map((param, i) => {
        if (Array.isArray(args_[i]))
          return args_[i].map((_, j) => encode9(param, args_[i][j]));
        return args_[i] ? encode9(param, args_[i]) : null;
      })) ?? [];
    }
  }
  const selector = (() => {
    if (abiEvent.hash)
      return abiEvent.hash;
    return getSelector3(abiEvent);
  })();
  return { topics: [selector, ...topics] };
}
encode5.parseError = (error) => (
  /* v8 ignore next */
  error
);
function format6(abiEvent) {
  return formatAbiItem(abiEvent);
}
format6.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from10(abiEvent, options = {}) {
  return from6(abiEvent, options);
}
from10.parseEvent = (Event) => (
  /* v8 ignore next */
  Event
);
function fromAbi4(abi, name, options) {
  const item = fromAbi(abi, name, options);
  if (item.type !== "event")
    throw new NotFoundError({ name, type: "event" });
  return item;
}
fromAbi4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getSelector3(abiItem) {
  return getSignatureHash(abiItem);
}
getSelector3.parseError = (error) => error;
var ArgsMismatchError = class extends BaseError {
  constructor({ abiEvent, expected, given }) {
    super("Given arguments do not match the expected arguments.", {
      metaMessages: [
        `Event: ${format6(abiEvent)}`,
        `Expected Arguments: ${!expected ? "None" : ""}`,
        expected ? prettyPrint(expected) : void 0,
        `Given Arguments: ${!given ? "None" : ""}`,
        given ? prettyPrint(given) : void 0
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiEvent.ArgsMismatchError"
    });
  }
};
var InputNotFoundError = class extends BaseError {
  constructor({ abiEvent, name }) {
    super(`Parameter "${name}" not found on \`${format6(abiEvent)}\`.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiEvent.InputNotFoundError"
    });
  }
};
var DataMismatchError = class extends BaseError {
  constructor({ abiEvent, data, parameters, size: size4 }) {
    super([
      `Data size of ${size4} bytes is too small for non-indexed event parameters.`
    ].join("\n"), {
      metaMessages: [
        `Non-indexed Parameters: (${format3(parameters)})`,
        `Data:   ${data} (${size4} bytes)`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiEvent.DataMismatchError"
    });
    Object.defineProperty(this, "abiEvent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "parameters", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "size", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.abiEvent = abiEvent;
    this.data = data;
    this.parameters = parameters;
    this.size = size4;
  }
};
var TopicsMismatchError = class extends BaseError {
  constructor({ abiEvent, param }) {
    super([
      `Expected a topic for indexed event parameter${param.name ? ` "${param.name}"` : ""} for "${format6(abiEvent)}".`
    ].join("\n"));
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiEvent.TopicsMismatchError"
    });
    Object.defineProperty(this, "abiEvent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.abiEvent = abiEvent;
  }
};
var SelectorTopicMismatchError = class extends BaseError {
  constructor({ abiEvent, actual, expected }) {
    super(`topics[0]="${actual}" does not match the expected topics[0]="${expected}".`, {
      metaMessages: [`Event: ${format6(abiEvent)}`, `Selector: ${expected}`]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiEvent.SelectorTopicMismatchError"
    });
  }
};
var FilterTypeNotSupportedError = class extends BaseError {
  constructor(type6) {
    super(`Filter type "${type6}" is not supported.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiEvent.FilterTypeNotSupportedError"
    });
  }
};

// node_modules/ox/_esm/core/AbiFunction.js
var AbiFunction_exports = {};
__export(AbiFunction_exports, {
  decodeData: () => decodeData,
  decodeResult: () => decodeResult,
  encodeData: () => encodeData,
  encodeResult: () => encodeResult,
  format: () => format7,
  from: () => from11,
  fromAbi: () => fromAbi5,
  getSelector: () => getSelector4
});
function decodeData(abiFunction, data) {
  const { overloads } = abiFunction;
  if (size2(data) < 4)
    throw new InvalidSelectorSizeError({ data });
  if (abiFunction.inputs.length === 0)
    return void 0;
  const item = overloads ? fromAbi5([abiFunction, ...overloads], data) : abiFunction;
  if (size2(data) <= 4)
    return void 0;
  return decode(item.inputs, slice(data, 4));
}
function decodeResult(abiFunction, data, options = {}) {
  const values = decode(abiFunction.outputs, data, options);
  if (values && Object.keys(values).length === 0)
    return void 0;
  if (values && Object.keys(values).length === 1) {
    if (Array.isArray(values))
      return values[0];
    return Object.values(values)[0];
  }
  return values;
}
function encodeData(abiFunction, ...args) {
  const { overloads } = abiFunction;
  const item = overloads ? fromAbi5([abiFunction, ...overloads], abiFunction.name, {
    args: args[0]
  }) : abiFunction;
  const selector = getSelector4(item);
  const data = args.length > 0 ? encode2(item.inputs, args[0]) : void 0;
  return data ? concat(selector, data) : selector;
}
encodeData.parseError = (error) => (
  /* v8 ignore next */
  error
);
function encodeResult(abiFunction, output, options = {}) {
  const { as = "Array" } = options;
  const values = (() => {
    if (abiFunction.outputs.length === 1)
      return [output];
    if (Array.isArray(output))
      return output;
    if (as === "Object")
      return Object.values(output);
    return [output];
  })();
  return encode2(abiFunction.outputs, values);
}
function format7(abiFunction) {
  return formatAbiItem(abiFunction);
}
format7.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from11(abiFunction, options = {}) {
  return from6(abiFunction, options);
}
from11.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromAbi5(abi, name, options) {
  const item = fromAbi(abi, name, options);
  if (item.type !== "function")
    throw new NotFoundError({ name, type: "function" });
  return item;
}
fromAbi5.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getSelector4(abiItem) {
  return getSelector(abiItem);
}
getSelector4.parseError = (error) => error;

// node_modules/ox/_esm/core/AccessList.js
var AccessList_exports = {};
__export(AccessList_exports, {
  InvalidStorageKeySizeError: () => InvalidStorageKeySizeError,
  fromTupleList: () => fromTupleList,
  toTupleList: () => toTupleList
});
function fromTupleList(accessList) {
  const list = [];
  for (let i = 0; i < accessList.length; i++) {
    const [address, storageKeys] = accessList[i];
    if (address)
      assert4(address, { strict: false });
    list.push({
      address,
      storageKeys: storageKeys.map((key) => validate3(key) ? key : trimLeft(key))
    });
  }
  return list;
}
function toTupleList(accessList) {
  if (!accessList || accessList.length === 0)
    return [];
  const tuple = [];
  for (const { address, storageKeys } of accessList) {
    for (let j = 0; j < storageKeys.length; j++)
      if (size2(storageKeys[j]) !== 32)
        throw new InvalidStorageKeySizeError({
          storageKey: storageKeys[j]
        });
    if (address)
      assert4(address, { strict: false });
    tuple.push([address, storageKeys]);
  }
  return tuple;
}
var InvalidStorageKeySizeError = class extends BaseError {
  constructor({ storageKey: storageKey6 }) {
    super(`Size for storage key "${storageKey6}" is invalid. Expected 32 bytes. Got ${size2(storageKey6)} bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AccessList.InvalidStorageKeySizeError"
    });
  }
};

// node_modules/ox/_esm/core/AccountProof.js
var AccountProof_exports = {};

// node_modules/ox/_esm/core/AesGcm.js
var AesGcm_exports = {};
__export(AesGcm_exports, {
  decrypt: () => decrypt,
  encrypt: () => encrypt,
  getKey: () => getKey,
  ivLength: () => ivLength,
  randomSalt: () => randomSalt
});
var ivLength = 16;
async function decrypt(value, key, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const encrypted = from2(value);
  const iv = encrypted.slice(0, ivLength);
  const data = encrypted.slice(ivLength);
  const decrypted = await globalThis.crypto.subtle.decrypt({
    name: "AES-GCM",
    iv
  }, key, from2(data));
  const result = new Uint8Array(decrypted);
  if (as === "Bytes")
    return result;
  return from(result);
}
decrypt.parseError = (error) => (
  /* v8 ignore next */
  error
);
async function encrypt(value, key, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const iv = random(ivLength);
  const encrypted = await globalThis.crypto.subtle.encrypt({
    name: "AES-GCM",
    iv
  }, key, from2(value));
  const result = concat2(iv, new Uint8Array(encrypted));
  if (as === "Bytes")
    return result;
  return from(result);
}
encrypt.parseError = (error) => (
  /* v8 ignore next */
  error
);
async function getKey(options) {
  const { iterations = 9e5, password, salt = randomSalt(32) } = options;
  const baseKey = await globalThis.crypto.subtle.importKey("raw", fromString2(password), { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
  const key = await globalThis.crypto.subtle.deriveKey({
    name: "PBKDF2",
    salt,
    iterations,
    hash: "SHA-256"
  }, baseKey, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  return key;
}
getKey.parseError = (error) => (
  /* v8 ignore next */
  error
);
function randomSalt(size4 = 32) {
  return random(size4);
}
random.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/Authorization.js
var Authorization_exports = {};
__export(Authorization_exports, {
  from: () => from14,
  fromRpc: () => fromRpc2,
  fromRpcList: () => fromRpcList,
  fromTuple: () => fromTuple2,
  fromTupleList: () => fromTupleList2,
  getSignPayload: () => getSignPayload,
  hash: () => hash,
  toRpc: () => toRpc2,
  toRpcList: () => toRpcList,
  toTuple: () => toTuple2,
  toTupleList: () => toTupleList2
});

// node_modules/ox/_esm/core/Rlp.js
var Rlp_exports = {};
__export(Rlp_exports, {
  decodeRlpCursor: () => decodeRlpCursor,
  from: () => from12,
  fromBytes: () => fromBytes3,
  fromHex: () => fromHex3,
  readLength: () => readLength,
  readList: () => readList,
  to: () => to,
  toBytes: () => toBytes4,
  toHex: () => toHex3
});
function toBytes4(value) {
  return to(value, "Bytes");
}
toBytes4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toHex3(value) {
  return to(value, "Hex");
}
toHex3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function to(value, to3) {
  const to_ = to3 ?? (typeof value === "string" ? "Hex" : "Bytes");
  const bytes = (() => {
    if (typeof value === "string") {
      if (value.length > 3 && value.length % 2 !== 0)
        throw new InvalidLengthError(value);
      return fromHex(value);
    }
    return value;
  })();
  const cursor = create(bytes, {
    recursiveReadLimit: Number.POSITIVE_INFINITY
  });
  const result = decodeRlpCursor(cursor, to_);
  return result;
}
to.parseError = (error) => (
  /* v8 ignore next */
  error
);
function decodeRlpCursor(cursor, to3 = "Hex") {
  if (cursor.bytes.length === 0)
    return to3 === "Hex" ? fromBytes(cursor.bytes) : cursor.bytes;
  const prefix = cursor.readByte();
  if (prefix < 128)
    cursor.decrementPosition(1);
  if (prefix < 192) {
    const length2 = readLength(cursor, prefix, 128);
    const bytes = cursor.readBytes(length2);
    return to3 === "Hex" ? fromBytes(bytes) : bytes;
  }
  const length = readLength(cursor, prefix, 192);
  return readList(cursor, length, to3);
}
function readLength(cursor, prefix, offset) {
  if (offset === 128 && prefix < 128)
    return 1;
  if (prefix <= offset + 55)
    return prefix - offset;
  if (prefix === offset + 55 + 1)
    return cursor.readUint8();
  if (prefix === offset + 55 + 2)
    return cursor.readUint16();
  if (prefix === offset + 55 + 3)
    return cursor.readUint24();
  if (prefix === offset + 55 + 4)
    return cursor.readUint32();
  throw new BaseError("Invalid RLP prefix");
}
function readList(cursor, length, to3) {
  const position = cursor.position;
  const value = [];
  while (cursor.position - position < length)
    value.push(decodeRlpCursor(cursor, to3));
  return value;
}
function from12(value, options) {
  const { as } = options;
  const encodable = getEncodable(value);
  const cursor = create(new Uint8Array(encodable.length));
  encodable.encode(cursor);
  if (as === "Hex")
    return fromBytes(cursor.bytes);
  return cursor.bytes;
}
from12.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromBytes3(bytes, options = {}) {
  const { as = "Bytes" } = options;
  return from12(bytes, { as });
}
fromBytes3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromHex3(hex, options = {}) {
  const { as = "Hex" } = options;
  return from12(hex, { as });
}
fromHex3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getEncodable(bytes) {
  if (Array.isArray(bytes))
    return getEncodableList(bytes.map((x) => getEncodable(x)));
  return getEncodableBytes(bytes);
}
function getEncodableList(list) {
  const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
  const sizeOfBodyLength = getSizeOfLength(bodyLength);
  const length = (() => {
    if (bodyLength <= 55)
      return 1 + bodyLength;
    return 1 + sizeOfBodyLength + bodyLength;
  })();
  return {
    length,
    encode(cursor) {
      if (bodyLength <= 55) {
        cursor.pushByte(192 + bodyLength);
      } else {
        cursor.pushByte(192 + 55 + sizeOfBodyLength);
        if (sizeOfBodyLength === 1)
          cursor.pushUint8(bodyLength);
        else if (sizeOfBodyLength === 2)
          cursor.pushUint16(bodyLength);
        else if (sizeOfBodyLength === 3)
          cursor.pushUint24(bodyLength);
        else
          cursor.pushUint32(bodyLength);
      }
      for (const { encode: encode9 } of list) {
        encode9(cursor);
      }
    }
  };
}
function getEncodableBytes(bytesOrHex) {
  const bytes = typeof bytesOrHex === "string" ? fromHex(bytesOrHex) : bytesOrHex;
  const sizeOfBytesLength = getSizeOfLength(bytes.length);
  const length = (() => {
    if (bytes.length === 1 && bytes[0] < 128)
      return 1;
    if (bytes.length <= 55)
      return 1 + bytes.length;
    return 1 + sizeOfBytesLength + bytes.length;
  })();
  return {
    length,
    encode(cursor) {
      if (bytes.length === 1 && bytes[0] < 128) {
        cursor.pushBytes(bytes);
      } else if (bytes.length <= 55) {
        cursor.pushByte(128 + bytes.length);
        cursor.pushBytes(bytes);
      } else {
        cursor.pushByte(128 + 55 + sizeOfBytesLength);
        if (sizeOfBytesLength === 1)
          cursor.pushUint8(bytes.length);
        else if (sizeOfBytesLength === 2)
          cursor.pushUint16(bytes.length);
        else if (sizeOfBytesLength === 3)
          cursor.pushUint24(bytes.length);
        else
          cursor.pushUint32(bytes.length);
        cursor.pushBytes(bytes);
      }
    }
  };
}
function getSizeOfLength(length) {
  if (length < 2 ** 8)
    return 1;
  if (length < 2 ** 16)
    return 2;
  if (length < 2 ** 24)
    return 3;
  if (length < 2 ** 32)
    return 4;
  throw new BaseError("Length is too large.");
}

// node_modules/ox/_esm/core/Signature.js
var Signature_exports = {};
__export(Signature_exports, {
  InvalidRError: () => InvalidRError,
  InvalidSError: () => InvalidSError,
  InvalidSerializedSizeError: () => InvalidSerializedSizeError2,
  InvalidVError: () => InvalidVError,
  InvalidYParityError: () => InvalidYParityError,
  MissingPropertiesError: () => MissingPropertiesError,
  assert: () => assert5,
  extract: () => extract,
  from: () => from13,
  fromBytes: () => fromBytes4,
  fromDerBytes: () => fromDerBytes,
  fromDerHex: () => fromDerHex,
  fromHex: () => fromHex4,
  fromLegacy: () => fromLegacy,
  fromRpc: () => fromRpc,
  fromTuple: () => fromTuple,
  toBytes: () => toBytes6,
  toDerBytes: () => toDerBytes,
  toDerHex: () => toDerHex,
  toHex: () => toHex4,
  toLegacy: () => toLegacy,
  toRpc: () => toRpc,
  toTuple: () => toTuple,
  vToYParity: () => vToYParity,
  validate: () => validate6,
  yParityToV: () => yParityToV
});

// node_modules/ox/node_modules/@noble/curves/node_modules/@noble/hashes/esm/_assert.js
function anumber2(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error("positive integer expected, got " + n);
}
function isBytes3(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function abytes3(b, ...lengths) {
  if (!isBytes3(b))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
}
function ahash(h) {
  if (typeof h !== "function" || typeof h.create !== "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  anumber2(h.outputLen);
  anumber2(h.blockLen);
}
function aexists2(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function aoutput2(out, instance) {
  abytes3(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least " + min);
  }
}

// node_modules/ox/node_modules/@noble/curves/node_modules/@noble/hashes/esm/crypto.js
var crypto3 = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

// node_modules/ox/node_modules/@noble/curves/node_modules/@noble/hashes/esm/utils.js
var createView2 = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
var rotr2 = (word, shift) => word << 32 - shift | word >>> shift;
var isLE2 = (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
var hexes4 = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
function utf8ToBytes3(str) {
  if (typeof str !== "string")
    throw new Error("utf8ToBytes expected string, got " + typeof str);
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes5(data) {
  if (typeof data === "string")
    data = utf8ToBytes3(data);
  abytes3(data);
  return data;
}
function concatBytes2(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    const a = arrays[i];
    abytes3(a);
    sum += a.length;
  }
  const res = new Uint8Array(sum);
  for (let i = 0, pad3 = 0; i < arrays.length; i++) {
    const a = arrays[i];
    res.set(a, pad3);
    pad3 += a.length;
  }
  return res;
}
var Hash2 = class {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
function wrapConstructor2(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes5(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function randomBytes(bytesLength = 32) {
  if (crypto3 && typeof crypto3.getRandomValues === "function") {
    return crypto3.getRandomValues(new Uint8Array(bytesLength));
  }
  if (crypto3 && typeof crypto3.randomBytes === "function") {
    return crypto3.randomBytes(bytesLength);
  }
  throw new Error("crypto.getRandomValues must be defined");
}

// node_modules/ox/node_modules/@noble/curves/node_modules/@noble/hashes/esm/_md.js
function setBigUint642(view, byteOffset, value, isLE3) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE3);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE3 ? 4 : 0;
  const l = isLE3 ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE3);
  view.setUint32(byteOffset + l, wl, isLE3);
}
var Chi2 = (a, b, c) => a & b ^ ~a & c;
var Maj2 = (a, b, c) => a & b ^ a & c ^ b & c;
var HashMD2 = class extends Hash2 {
  constructor(blockLen, outputLen, padOffset, isLE3) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE3;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView2(this.buffer);
  }
  update(data) {
    aexists2(this);
    const { view, buffer: buffer2, blockLen } = this;
    data = toBytes5(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView2(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer2.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    aexists2(this);
    aoutput2(out, this);
    this.finished = true;
    const { buffer: buffer2, view, blockLen, isLE: isLE3 } = this;
    let { pos } = this;
    buffer2[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer2[i] = 0;
    setBigUint642(view, blockLen - 8, BigInt(this.length * 8), isLE3);
    this.process(view, 0);
    const oview = createView2(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE3);
  }
  digest() {
    const { buffer: buffer2, outputLen } = this;
    this.digestInto(buffer2);
    const res = buffer2.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to3) {
    to3 || (to3 = new this.constructor());
    to3.set(...this.get());
    const { blockLen, buffer: buffer2, length, finished, destroyed, pos } = this;
    to3.length = length;
    to3.pos = pos;
    to3.finished = finished;
    to3.destroyed = destroyed;
    if (length % blockLen)
      to3.buffer.set(buffer2);
    return to3;
  }
};

// node_modules/ox/node_modules/@noble/curves/node_modules/@noble/hashes/esm/sha256.js
var SHA256_K2 = new Uint32Array([
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
var SHA256_IV2 = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var SHA256_W2 = new Uint32Array(64);
var SHA2562 = class extends HashMD2 {
  constructor() {
    super(64, 32, 8, false);
    this.A = SHA256_IV2[0] | 0;
    this.B = SHA256_IV2[1] | 0;
    this.C = SHA256_IV2[2] | 0;
    this.D = SHA256_IV2[3] | 0;
    this.E = SHA256_IV2[4] | 0;
    this.F = SHA256_IV2[5] | 0;
    this.G = SHA256_IV2[6] | 0;
    this.H = SHA256_IV2[7] | 0;
  }
  get() {
    const { A, B, C, D, E, F, G, H } = this;
    return [A, B, C, D, E, F, G, H];
  }
  // prettier-ignore
  set(A, B, C, D, E, F, G, H) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W2[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W2[i - 15];
      const W2 = SHA256_W2[i - 2];
      const s0 = rotr2(W15, 7) ^ rotr2(W15, 18) ^ W15 >>> 3;
      const s1 = rotr2(W2, 17) ^ rotr2(W2, 19) ^ W2 >>> 10;
      SHA256_W2[i] = s1 + SHA256_W2[i - 7] + s0 + SHA256_W2[i - 16] | 0;
    }
    let { A, B, C, D, E, F, G, H } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr2(E, 6) ^ rotr2(E, 11) ^ rotr2(E, 25);
      const T1 = H + sigma1 + Chi2(E, F, G) + SHA256_K2[i] + SHA256_W2[i] | 0;
      const sigma0 = rotr2(A, 2) ^ rotr2(A, 13) ^ rotr2(A, 22);
      const T2 = sigma0 + Maj2(A, B, C) | 0;
      H = G;
      G = F;
      F = E;
      E = D + T1 | 0;
      D = C;
      C = B;
      B = A;
      A = T1 + T2 | 0;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H = H + this.H | 0;
    this.set(A, B, C, D, E, F, G, H);
  }
  roundClean() {
    SHA256_W2.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
};
var SHA2242 = class extends SHA2562 {
  constructor() {
    super();
    this.A = 3238371032 | 0;
    this.B = 914150663 | 0;
    this.C = 812702999 | 0;
    this.D = 4144912697 | 0;
    this.E = 4290775857 | 0;
    this.F = 1750603025 | 0;
    this.G = 1694076839 | 0;
    this.H = 3204075428 | 0;
    this.outputLen = 28;
  }
};
var sha2563 = wrapConstructor2(() => new SHA2562());
var sha2242 = wrapConstructor2(() => new SHA2242());

// node_modules/ox/node_modules/@noble/curves/node_modules/@noble/hashes/esm/hmac.js
var HMAC = class extends Hash2 {
  constructor(hash7, _key) {
    super();
    this.finished = false;
    this.destroyed = false;
    ahash(hash7);
    const key = toBytes5(_key);
    this.iHash = hash7.create();
    if (typeof this.iHash.update !== "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen;
    this.outputLen = this.iHash.outputLen;
    const blockLen = this.blockLen;
    const pad3 = new Uint8Array(blockLen);
    pad3.set(key.length > blockLen ? hash7.create().update(key).digest() : key);
    for (let i = 0; i < pad3.length; i++)
      pad3[i] ^= 54;
    this.iHash.update(pad3);
    this.oHash = hash7.create();
    for (let i = 0; i < pad3.length; i++)
      pad3[i] ^= 54 ^ 92;
    this.oHash.update(pad3);
    pad3.fill(0);
  }
  update(buf) {
    aexists2(this);
    this.iHash.update(buf);
    return this;
  }
  digestInto(out) {
    aexists2(this);
    abytes3(out, this.outputLen);
    this.finished = true;
    this.iHash.digestInto(out);
    this.oHash.update(out);
    this.oHash.digestInto(out);
    this.destroy();
  }
  digest() {
    const out = new Uint8Array(this.oHash.outputLen);
    this.digestInto(out);
    return out;
  }
  _cloneInto(to3) {
    to3 || (to3 = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
    to3 = to3;
    to3.finished = finished;
    to3.destroyed = destroyed;
    to3.blockLen = blockLen;
    to3.outputLen = outputLen;
    to3.oHash = oHash._cloneInto(to3.oHash);
    to3.iHash = iHash._cloneInto(to3.iHash);
    return to3;
  }
  destroy() {
    this.destroyed = true;
    this.oHash.destroy();
    this.iHash.destroy();
  }
};
var hmac = (hash7, key, message) => new HMAC(hash7, key).update(message).digest();
hmac.create = (hash7, key) => new HMAC(hash7, key);

// node_modules/ox/node_modules/@noble/curves/esm/abstract/modular.js
var _0n3 = BigInt(0);
var _1n3 = BigInt(1);
var _2n3 = BigInt(2);
var _3n = BigInt(3);
var _4n = BigInt(4);
var _5n = BigInt(5);
var _8n = BigInt(8);
var _9n = BigInt(9);
var _16n = BigInt(16);
function mod(a, b) {
  const result = a % b;
  return result >= _0n3 ? result : b + result;
}
function pow(num2, power, modulo) {
  if (power < _0n3)
    throw new Error("invalid exponent, negatives unsupported");
  if (modulo <= _0n3)
    throw new Error("invalid modulus");
  if (modulo === _1n3)
    return _0n3;
  let res = _1n3;
  while (power > _0n3) {
    if (power & _1n3)
      res = res * num2 % modulo;
    num2 = num2 * num2 % modulo;
    power >>= _1n3;
  }
  return res;
}
function pow2(x, power, modulo) {
  let res = x;
  while (power-- > _0n3) {
    res *= res;
    res %= modulo;
  }
  return res;
}
function invert(number, modulo) {
  if (number === _0n3)
    throw new Error("invert: expected non-zero number");
  if (modulo <= _0n3)
    throw new Error("invert: expected positive modulus, got " + modulo);
  let a = mod(number, modulo);
  let b = modulo;
  let x = _0n3, y = _1n3, u = _1n3, v = _0n3;
  while (a !== _0n3) {
    const q = b / a;
    const r = b % a;
    const m = x - u * q;
    const n = y - v * q;
    b = a, a = r, x = u, y = v, u = m, v = n;
  }
  const gcd = b;
  if (gcd !== _1n3)
    throw new Error("invert: does not exist");
  return mod(x, modulo);
}
function tonelliShanks(P) {
  const legendreC = (P - _1n3) / _2n3;
  let Q, S, Z;
  for (Q = P - _1n3, S = 0; Q % _2n3 === _0n3; Q /= _2n3, S++)
    ;
  for (Z = _2n3; Z < P && pow(Z, legendreC, P) !== P - _1n3; Z++) {
    if (Z > 1e3)
      throw new Error("Cannot find square root: likely non-prime P");
  }
  if (S === 1) {
    const p1div4 = (P + _1n3) / _4n;
    return function tonelliFast(Fp3, n) {
      const root = Fp3.pow(n, p1div4);
      if (!Fp3.eql(Fp3.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  const Q1div2 = (Q + _1n3) / _2n3;
  return function tonelliSlow(Fp3, n) {
    if (Fp3.pow(n, legendreC) === Fp3.neg(Fp3.ONE))
      throw new Error("Cannot find square root");
    let r = S;
    let g = Fp3.pow(Fp3.mul(Fp3.ONE, Z), Q);
    let x = Fp3.pow(n, Q1div2);
    let b = Fp3.pow(n, Q);
    while (!Fp3.eql(b, Fp3.ONE)) {
      if (Fp3.eql(b, Fp3.ZERO))
        return Fp3.ZERO;
      let m = 1;
      for (let t2 = Fp3.sqr(b); m < r; m++) {
        if (Fp3.eql(t2, Fp3.ONE))
          break;
        t2 = Fp3.sqr(t2);
      }
      const ge = Fp3.pow(g, _1n3 << BigInt(r - m - 1));
      g = Fp3.sqr(ge);
      x = Fp3.mul(x, ge);
      b = Fp3.mul(b, g);
      r = m;
    }
    return x;
  };
}
function FpSqrt(P) {
  if (P % _4n === _3n) {
    const p1div4 = (P + _1n3) / _4n;
    return function sqrt3mod4(Fp3, n) {
      const root = Fp3.pow(n, p1div4);
      if (!Fp3.eql(Fp3.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  if (P % _8n === _5n) {
    const c1 = (P - _5n) / _8n;
    return function sqrt5mod8(Fp3, n) {
      const n2 = Fp3.mul(n, _2n3);
      const v = Fp3.pow(n2, c1);
      const nv = Fp3.mul(n, v);
      const i = Fp3.mul(Fp3.mul(nv, _2n3), v);
      const root = Fp3.mul(nv, Fp3.sub(i, Fp3.ONE));
      if (!Fp3.eql(Fp3.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  if (P % _16n === _9n) {
  }
  return tonelliShanks(P);
}
var FIELD_FIELDS = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function validateField(field) {
  const initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  };
  const opts = FIELD_FIELDS.reduce((map, val) => {
    map[val] = "function";
    return map;
  }, initial);
  return validateObject(field, opts);
}
function FpPow(f2, num2, power) {
  if (power < _0n3)
    throw new Error("invalid exponent, negatives unsupported");
  if (power === _0n3)
    return f2.ONE;
  if (power === _1n3)
    return num2;
  let p = f2.ONE;
  let d = num2;
  while (power > _0n3) {
    if (power & _1n3)
      p = f2.mul(p, d);
    d = f2.sqr(d);
    power >>= _1n3;
  }
  return p;
}
function FpInvertBatch(f2, nums) {
  const tmp = new Array(nums.length);
  const lastMultiplied = nums.reduce((acc, num2, i) => {
    if (f2.is0(num2))
      return acc;
    tmp[i] = acc;
    return f2.mul(acc, num2);
  }, f2.ONE);
  const inverted = f2.inv(lastMultiplied);
  nums.reduceRight((acc, num2, i) => {
    if (f2.is0(num2))
      return acc;
    tmp[i] = f2.mul(acc, tmp[i]);
    return f2.mul(acc, num2);
  }, inverted);
  return tmp;
}
function FpLegendre(order) {
  const legendreConst = (order - _1n3) / _2n3;
  return (f2, x) => f2.pow(x, legendreConst);
}
function nLength(n, nBitLength) {
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
function Field(ORDER, bitLen2, isLE3 = false, redef = {}) {
  if (ORDER <= _0n3)
    throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
  const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
  if (BYTES > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let sqrtP;
  const f2 = Object.freeze({
    ORDER,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n3,
    ONE: _1n3,
    create: (num2) => mod(num2, ORDER),
    isValid: (num2) => {
      if (typeof num2 !== "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof num2);
      return _0n3 <= num2 && num2 < ORDER;
    },
    is0: (num2) => num2 === _0n3,
    isOdd: (num2) => (num2 & _1n3) === _1n3,
    neg: (num2) => mod(-num2, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num2) => mod(num2 * num2, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num2, power) => FpPow(f2, num2, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num2) => num2 * num2,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num2) => invert(num2, ORDER),
    sqrt: redef.sqrt || ((n) => {
      if (!sqrtP)
        sqrtP = FpSqrt(ORDER);
      return sqrtP(f2, n);
    }),
    invertBatch: (lst) => FpInvertBatch(f2, lst),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (a, b, c) => c ? b : a,
    toBytes: (num2) => isLE3 ? numberToBytesLE(num2, BYTES) : numberToBytesBE(num2, BYTES),
    fromBytes: (bytes) => {
      if (bytes.length !== BYTES)
        throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
      return isLE3 ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
    }
  });
  return Object.freeze(f2);
}
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder !== "bigint")
    throw new Error("field order must be bigint");
  const bitLength = fieldOrder.toString(2).length;
  return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
  const length = getFieldBytesLength(fieldOrder);
  return length + Math.ceil(length / 2);
}
function mapHashToField(key, fieldOrder, isLE3 = false) {
  const len = key.length;
  const fieldLen = getFieldBytesLength(fieldOrder);
  const minLen = getMinHashLength(fieldOrder);
  if (len < 16 || len < minLen || len > 1024)
    throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
  const num2 = isLE3 ? bytesToNumberBE(key) : bytesToNumberLE(key);
  const reduced = mod(num2, fieldOrder - _1n3) + _1n3;
  return isLE3 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}

// node_modules/ox/node_modules/@noble/curves/esm/abstract/curve.js
var _0n4 = BigInt(0);
var _1n4 = BigInt(1);
function constTimeNegate(condition, item) {
  const neg = item.negate();
  return condition ? neg : item;
}
function validateW(W, bits) {
  if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
    throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W);
}
function calcWOpts(W, bits) {
  validateW(W, bits);
  const windows = Math.ceil(bits / W) + 1;
  const windowSize = 2 ** (W - 1);
  return { windows, windowSize };
}
function validateMSMPoints(points, c) {
  if (!Array.isArray(points))
    throw new Error("array expected");
  points.forEach((p, i) => {
    if (!(p instanceof c))
      throw new Error("invalid point at index " + i);
  });
}
function validateMSMScalars(scalars, field) {
  if (!Array.isArray(scalars))
    throw new Error("array of scalars expected");
  scalars.forEach((s, i) => {
    if (!field.isValid(s))
      throw new Error("invalid scalar at index " + i);
  });
}
var pointPrecomputes = /* @__PURE__ */ new WeakMap();
var pointWindowSizes = /* @__PURE__ */ new WeakMap();
function getW(P) {
  return pointWindowSizes.get(P) || 1;
}
function wNAF(c, bits) {
  return {
    constTimeNegate,
    hasPrecomputes(elm) {
      return getW(elm) !== 1;
    },
    // non-const time multiplication ladder
    unsafeLadder(elm, n, p = c.ZERO) {
      let d = elm;
      while (n > _0n4) {
        if (n & _1n4)
          p = p.add(d);
        d = d.double();
        n >>= _1n4;
      }
      return p;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @param elm Point instance
     * @param W window size
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(elm, W) {
      const { windows, windowSize } = calcWOpts(W, bits);
      const points = [];
      let p = elm;
      let base3 = p;
      for (let window2 = 0; window2 < windows; window2++) {
        base3 = p;
        points.push(base3);
        for (let i = 1; i < windowSize; i++) {
          base3 = base3.add(p);
          points.push(base3);
        }
        p = base3.double();
      }
      return points;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(W, precomputes, n) {
      const { windows, windowSize } = calcWOpts(W, bits);
      let p = c.ZERO;
      let f2 = c.BASE;
      const mask = BigInt(2 ** W - 1);
      const maxNumber = 2 ** W;
      const shiftBy = BigInt(W);
      for (let window2 = 0; window2 < windows; window2++) {
        const offset = window2 * windowSize;
        let wbits = Number(n & mask);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n4;
        }
        const offset1 = offset;
        const offset2 = offset + Math.abs(wbits) - 1;
        const cond1 = window2 % 2 !== 0;
        const cond2 = wbits < 0;
        if (wbits === 0) {
          f2 = f2.add(constTimeNegate(cond1, precomputes[offset1]));
        } else {
          p = p.add(constTimeNegate(cond2, precomputes[offset2]));
        }
      }
      return { p, f: f2 };
    },
    /**
     * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @param acc accumulator point to add result of multiplication
     * @returns point
     */
    wNAFUnsafe(W, precomputes, n, acc = c.ZERO) {
      const { windows, windowSize } = calcWOpts(W, bits);
      const mask = BigInt(2 ** W - 1);
      const maxNumber = 2 ** W;
      const shiftBy = BigInt(W);
      for (let window2 = 0; window2 < windows; window2++) {
        const offset = window2 * windowSize;
        if (n === _0n4)
          break;
        let wbits = Number(n & mask);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n4;
        }
        if (wbits === 0)
          continue;
        let curr = precomputes[offset + Math.abs(wbits) - 1];
        if (wbits < 0)
          curr = curr.negate();
        acc = acc.add(curr);
      }
      return acc;
    },
    getPrecomputes(W, P, transform) {
      let comp = pointPrecomputes.get(P);
      if (!comp) {
        comp = this.precomputeWindow(P, W);
        if (W !== 1)
          pointPrecomputes.set(P, transform(comp));
      }
      return comp;
    },
    wNAFCached(P, n, transform) {
      const W = getW(P);
      return this.wNAF(W, this.getPrecomputes(W, P, transform), n);
    },
    wNAFCachedUnsafe(P, n, transform, prev) {
      const W = getW(P);
      if (W === 1)
        return this.unsafeLadder(P, n, prev);
      return this.wNAFUnsafe(W, this.getPrecomputes(W, P, transform), n, prev);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(P, W) {
      validateW(W, bits);
      pointWindowSizes.set(P, W);
      pointPrecomputes.delete(P);
    }
  };
}
function pippenger(c, fieldN, points, scalars) {
  validateMSMPoints(points, c);
  validateMSMScalars(scalars, fieldN);
  if (points.length !== scalars.length)
    throw new Error("arrays of points and scalars must have equal length");
  const zero = c.ZERO;
  const wbits = bitLen(BigInt(points.length));
  const windowSize = wbits > 12 ? wbits - 3 : wbits > 4 ? wbits - 2 : wbits ? 2 : 1;
  const MASK = (1 << windowSize) - 1;
  const buckets = new Array(MASK + 1).fill(zero);
  const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
  let sum = zero;
  for (let i = lastBits; i >= 0; i -= windowSize) {
    buckets.fill(zero);
    for (let j = 0; j < scalars.length; j++) {
      const scalar = scalars[j];
      const wbits2 = Number(scalar >> BigInt(i) & BigInt(MASK));
      buckets[wbits2] = buckets[wbits2].add(points[j]);
    }
    let resI = zero;
    for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
      sumI = sumI.add(buckets[j]);
      resI = resI.add(sumI);
    }
    sum = sum.add(resI);
    if (i !== 0)
      for (let j = 0; j < windowSize; j++)
        sum = sum.double();
  }
  return sum;
}
function validateBasic(curve) {
  validateField(curve.Fp);
  validateObject(curve, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  });
  return Object.freeze({
    ...nLength(curve.n, curve.nBitLength),
    ...curve,
    ...{ p: curve.Fp.ORDER }
  });
}

// node_modules/ox/node_modules/@noble/curves/esm/abstract/weierstrass.js
function validateSigVerOpts(opts) {
  if (opts.lowS !== void 0)
    abool("lowS", opts.lowS);
  if (opts.prehash !== void 0)
    abool("prehash", opts.prehash);
}
function validatePointOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo, Fp: Fp3, a } = opts;
  if (endo) {
    if (!Fp3.eql(a, Fp3.ZERO)) {
      throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
    }
    if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
      throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
    }
  }
  return Object.freeze({ ...opts });
}
var { bytesToNumberBE: b2n, hexToBytes: h2b } = utils_exports;
var DER = {
  // asn.1 DER encoding utils
  Err: class DERErr extends Error {
    constructor(m = "") {
      super(m);
    }
  },
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (tag, data) => {
      const { Err: E } = DER;
      if (tag < 0 || tag > 256)
        throw new E("tlv.encode: wrong tag");
      if (data.length & 1)
        throw new E("tlv.encode: unpadded data");
      const dataLen = data.length / 2;
      const len = numberToHexUnpadded(dataLen);
      if (len.length / 2 & 128)
        throw new E("tlv.encode: long form length too big");
      const lenLen = dataLen > 127 ? numberToHexUnpadded(len.length / 2 | 128) : "";
      const t = numberToHexUnpadded(tag);
      return t + lenLen + len + data;
    },
    // v - value, l - left bytes (unparsed)
    decode(tag, data) {
      const { Err: E } = DER;
      let pos = 0;
      if (tag < 0 || tag > 256)
        throw new E("tlv.encode: wrong tag");
      if (data.length < 2 || data[pos++] !== tag)
        throw new E("tlv.decode: wrong tlv");
      const first = data[pos++];
      const isLong = !!(first & 128);
      let length = 0;
      if (!isLong)
        length = first;
      else {
        const lenLen = first & 127;
        if (!lenLen)
          throw new E("tlv.decode(long): indefinite length not supported");
        if (lenLen > 4)
          throw new E("tlv.decode(long): byte length is too big");
        const lengthBytes = data.subarray(pos, pos + lenLen);
        if (lengthBytes.length !== lenLen)
          throw new E("tlv.decode: length bytes not complete");
        if (lengthBytes[0] === 0)
          throw new E("tlv.decode(long): zero leftmost byte");
        for (const b of lengthBytes)
          length = length << 8 | b;
        pos += lenLen;
        if (length < 128)
          throw new E("tlv.decode(long): not minimal encoding");
      }
      const v = data.subarray(pos, pos + length);
      if (v.length !== length)
        throw new E("tlv.decode: wrong value length");
      return { v, l: data.subarray(pos + length) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(num2) {
      const { Err: E } = DER;
      if (num2 < _0n5)
        throw new E("integer: negative integers are not allowed");
      let hex = numberToHexUnpadded(num2);
      if (Number.parseInt(hex[0], 16) & 8)
        hex = "00" + hex;
      if (hex.length & 1)
        throw new E("unexpected DER parsing assertion: unpadded hex");
      return hex;
    },
    decode(data) {
      const { Err: E } = DER;
      if (data[0] & 128)
        throw new E("invalid signature integer: negative");
      if (data[0] === 0 && !(data[1] & 128))
        throw new E("invalid signature integer: unnecessary leading zero");
      return b2n(data);
    }
  },
  toSig(hex) {
    const { Err: E, _int: int, _tlv: tlv } = DER;
    const data = typeof hex === "string" ? h2b(hex) : hex;
    abytes(data);
    const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
    if (seqLeftBytes.length)
      throw new E("invalid signature: left bytes after parsing");
    const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
    const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
    if (sLeftBytes.length)
      throw new E("invalid signature: left bytes after parsing");
    return { r: int.decode(rBytes), s: int.decode(sBytes) };
  },
  hexFromSig(sig) {
    const { _tlv: tlv, _int: int } = DER;
    const rs = tlv.encode(2, int.encode(sig.r));
    const ss = tlv.encode(2, int.encode(sig.s));
    const seq = rs + ss;
    return tlv.encode(48, seq);
  }
};
var _0n5 = BigInt(0);
var _1n5 = BigInt(1);
var _2n4 = BigInt(2);
var _3n2 = BigInt(3);
var _4n2 = BigInt(4);
function weierstrassPoints(opts) {
  const CURVE = validatePointOpts(opts);
  const { Fp: Fp3 } = CURVE;
  const Fn = Field(CURVE.n, CURVE.nBitLength);
  const toBytes11 = CURVE.toBytes || ((_c, point, _isCompressed) => {
    const a = point.toAffine();
    return concatBytes(Uint8Array.from([4]), Fp3.toBytes(a.x), Fp3.toBytes(a.y));
  });
  const fromBytes8 = CURVE.fromBytes || ((bytes) => {
    const tail = bytes.subarray(1);
    const x = Fp3.fromBytes(tail.subarray(0, Fp3.BYTES));
    const y = Fp3.fromBytes(tail.subarray(Fp3.BYTES, 2 * Fp3.BYTES));
    return { x, y };
  });
  function weierstrassEquation(x) {
    const { a, b } = CURVE;
    const x2 = Fp3.sqr(x);
    const x3 = Fp3.mul(x2, x);
    return Fp3.add(Fp3.add(x3, Fp3.mul(x, a)), b);
  }
  if (!Fp3.eql(Fp3.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
    throw new Error("bad generator point: equation left != right");
  function isWithinCurveOrder(num2) {
    return inRange(num2, _1n5, CURVE.n);
  }
  function normPrivateKeyToScalar(key) {
    const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N } = CURVE;
    if (lengths && typeof key !== "bigint") {
      if (isBytes(key))
        key = bytesToHex(key);
      if (typeof key !== "string" || !lengths.includes(key.length))
        throw new Error("invalid private key");
      key = key.padStart(nByteLength * 2, "0");
    }
    let num2;
    try {
      num2 = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
    } catch (error) {
      throw new Error("invalid private key, expected hex or " + nByteLength + " bytes, got " + typeof key);
    }
    if (wrapPrivateKey)
      num2 = mod(num2, N);
    aInRange("private key", num2, _1n5, N);
    return num2;
  }
  function assertPrjPoint(other) {
    if (!(other instanceof Point2))
      throw new Error("ProjectivePoint expected");
  }
  const toAffineMemo = memoized((p, iz) => {
    const { px: x, py: y, pz: z } = p;
    if (Fp3.eql(z, Fp3.ONE))
      return { x, y };
    const is0 = p.is0();
    if (iz == null)
      iz = is0 ? Fp3.ONE : Fp3.inv(z);
    const ax = Fp3.mul(x, iz);
    const ay = Fp3.mul(y, iz);
    const zz = Fp3.mul(z, iz);
    if (is0)
      return { x: Fp3.ZERO, y: Fp3.ZERO };
    if (!Fp3.eql(zz, Fp3.ONE))
      throw new Error("invZ was invalid");
    return { x: ax, y: ay };
  });
  const assertValidMemo = memoized((p) => {
    if (p.is0()) {
      if (CURVE.allowInfinityPoint && !Fp3.is0(p.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x, y } = p.toAffine();
    if (!Fp3.isValid(x) || !Fp3.isValid(y))
      throw new Error("bad point: x or y not FE");
    const left = Fp3.sqr(y);
    const right = weierstrassEquation(x);
    if (!Fp3.eql(left, right))
      throw new Error("bad point: equation left != right");
    if (!p.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  class Point2 {
    constructor(px, py, pz) {
      this.px = px;
      this.py = py;
      this.pz = pz;
      if (px == null || !Fp3.isValid(px))
        throw new Error("x required");
      if (py == null || !Fp3.isValid(py))
        throw new Error("y required");
      if (pz == null || !Fp3.isValid(pz))
        throw new Error("z required");
      Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(p) {
      const { x, y } = p || {};
      if (!p || !Fp3.isValid(x) || !Fp3.isValid(y))
        throw new Error("invalid affine point");
      if (p instanceof Point2)
        throw new Error("projective point not allowed");
      const is0 = (i) => Fp3.eql(i, Fp3.ZERO);
      if (is0(x) && is0(y))
        return Point2.ZERO;
      return new Point2(x, y, Fp3.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(points) {
      const toInv = Fp3.invertBatch(points.map((p) => p.pz));
      return points.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(hex) {
      const P = Point2.fromAffine(fromBytes8(ensureBytes("pointHex", hex)));
      P.assertValidity();
      return P;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(privateKey) {
      return Point2.BASE.multiply(normPrivateKeyToScalar(privateKey));
    }
    // Multiscalar Multiplication
    static msm(points, scalars) {
      return pippenger(Point2, Fn, points, scalars);
    }
    // "Private method", don't use it directly
    _setWindowSize(windowSize) {
      wnaf.setWindowSize(this, windowSize);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      assertValidMemo(this);
    }
    hasEvenY() {
      const { y } = this.toAffine();
      if (Fp3.isOdd)
        return !Fp3.isOdd(y);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(other) {
      assertPrjPoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      const U1 = Fp3.eql(Fp3.mul(X1, Z2), Fp3.mul(X2, Z1));
      const U2 = Fp3.eql(Fp3.mul(Y1, Z2), Fp3.mul(Y2, Z1));
      return U1 && U2;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new Point2(this.px, Fp3.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a, b } = CURVE;
      const b3 = Fp3.mul(b, _3n2);
      const { px: X1, py: Y1, pz: Z1 } = this;
      let X3 = Fp3.ZERO, Y3 = Fp3.ZERO, Z3 = Fp3.ZERO;
      let t0 = Fp3.mul(X1, X1);
      let t1 = Fp3.mul(Y1, Y1);
      let t2 = Fp3.mul(Z1, Z1);
      let t3 = Fp3.mul(X1, Y1);
      t3 = Fp3.add(t3, t3);
      Z3 = Fp3.mul(X1, Z1);
      Z3 = Fp3.add(Z3, Z3);
      X3 = Fp3.mul(a, Z3);
      Y3 = Fp3.mul(b3, t2);
      Y3 = Fp3.add(X3, Y3);
      X3 = Fp3.sub(t1, Y3);
      Y3 = Fp3.add(t1, Y3);
      Y3 = Fp3.mul(X3, Y3);
      X3 = Fp3.mul(t3, X3);
      Z3 = Fp3.mul(b3, Z3);
      t2 = Fp3.mul(a, t2);
      t3 = Fp3.sub(t0, t2);
      t3 = Fp3.mul(a, t3);
      t3 = Fp3.add(t3, Z3);
      Z3 = Fp3.add(t0, t0);
      t0 = Fp3.add(Z3, t0);
      t0 = Fp3.add(t0, t2);
      t0 = Fp3.mul(t0, t3);
      Y3 = Fp3.add(Y3, t0);
      t2 = Fp3.mul(Y1, Z1);
      t2 = Fp3.add(t2, t2);
      t0 = Fp3.mul(t2, t3);
      X3 = Fp3.sub(X3, t0);
      Z3 = Fp3.mul(t2, t1);
      Z3 = Fp3.add(Z3, Z3);
      Z3 = Fp3.add(Z3, Z3);
      return new Point2(X3, Y3, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      assertPrjPoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      let X3 = Fp3.ZERO, Y3 = Fp3.ZERO, Z3 = Fp3.ZERO;
      const a = CURVE.a;
      const b3 = Fp3.mul(CURVE.b, _3n2);
      let t0 = Fp3.mul(X1, X2);
      let t1 = Fp3.mul(Y1, Y2);
      let t2 = Fp3.mul(Z1, Z2);
      let t3 = Fp3.add(X1, Y1);
      let t4 = Fp3.add(X2, Y2);
      t3 = Fp3.mul(t3, t4);
      t4 = Fp3.add(t0, t1);
      t3 = Fp3.sub(t3, t4);
      t4 = Fp3.add(X1, Z1);
      let t5 = Fp3.add(X2, Z2);
      t4 = Fp3.mul(t4, t5);
      t5 = Fp3.add(t0, t2);
      t4 = Fp3.sub(t4, t5);
      t5 = Fp3.add(Y1, Z1);
      X3 = Fp3.add(Y2, Z2);
      t5 = Fp3.mul(t5, X3);
      X3 = Fp3.add(t1, t2);
      t5 = Fp3.sub(t5, X3);
      Z3 = Fp3.mul(a, t4);
      X3 = Fp3.mul(b3, t2);
      Z3 = Fp3.add(X3, Z3);
      X3 = Fp3.sub(t1, Z3);
      Z3 = Fp3.add(t1, Z3);
      Y3 = Fp3.mul(X3, Z3);
      t1 = Fp3.add(t0, t0);
      t1 = Fp3.add(t1, t0);
      t2 = Fp3.mul(a, t2);
      t4 = Fp3.mul(b3, t4);
      t1 = Fp3.add(t1, t2);
      t2 = Fp3.sub(t0, t2);
      t2 = Fp3.mul(a, t2);
      t4 = Fp3.add(t4, t2);
      t0 = Fp3.mul(t1, t4);
      Y3 = Fp3.add(Y3, t0);
      t0 = Fp3.mul(t5, t4);
      X3 = Fp3.mul(t3, X3);
      X3 = Fp3.sub(X3, t0);
      t0 = Fp3.mul(t3, t1);
      Z3 = Fp3.mul(t5, Z3);
      Z3 = Fp3.add(Z3, t0);
      return new Point2(X3, Y3, Z3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point2.ZERO);
    }
    wNAF(n) {
      return wnaf.wNAFCached(this, n, Point2.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(sc) {
      const { endo, n: N } = CURVE;
      aInRange("scalar", sc, _0n5, N);
      const I = Point2.ZERO;
      if (sc === _0n5)
        return I;
      if (this.is0() || sc === _1n5)
        return this;
      if (!endo || wnaf.hasPrecomputes(this))
        return wnaf.wNAFCachedUnsafe(this, sc, Point2.normalizeZ);
      let { k1neg, k1, k2neg, k2 } = endo.splitScalar(sc);
      let k1p = I;
      let k2p = I;
      let d = this;
      while (k1 > _0n5 || k2 > _0n5) {
        if (k1 & _1n5)
          k1p = k1p.add(d);
        if (k2 & _1n5)
          k2p = k2p.add(d);
        d = d.double();
        k1 >>= _1n5;
        k2 >>= _1n5;
      }
      if (k1neg)
        k1p = k1p.negate();
      if (k2neg)
        k2p = k2p.negate();
      k2p = new Point2(Fp3.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
      return k1p.add(k2p);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      const { endo, n: N } = CURVE;
      aInRange("scalar", scalar, _1n5, N);
      let point, fake;
      if (endo) {
        const { k1neg, k1, k2neg, k2 } = endo.splitScalar(scalar);
        let { p: k1p, f: f1p } = this.wNAF(k1);
        let { p: k2p, f: f2p } = this.wNAF(k2);
        k1p = wnaf.constTimeNegate(k1neg, k1p);
        k2p = wnaf.constTimeNegate(k2neg, k2p);
        k2p = new Point2(Fp3.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
        point = k1p.add(k2p);
        fake = f1p.add(f2p);
      } else {
        const { p, f: f2 } = this.wNAF(scalar);
        point = p;
        fake = f2;
      }
      return Point2.normalizeZ([point, fake])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(Q, a, b) {
      const G = Point2.BASE;
      const mul = (P, a2) => a2 === _0n5 || a2 === _1n5 || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
      const sum = mul(this, a).add(mul(Q, b));
      return sum.is0() ? void 0 : sum;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(iz) {
      return toAffineMemo(this, iz);
    }
    isTorsionFree() {
      const { h: cofactor, isTorsionFree } = CURVE;
      if (cofactor === _1n5)
        return true;
      if (isTorsionFree)
        return isTorsionFree(Point2, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: cofactor, clearCofactor } = CURVE;
      if (cofactor === _1n5)
        return this;
      if (clearCofactor)
        return clearCofactor(Point2, this);
      return this.multiplyUnsafe(CURVE.h);
    }
    toRawBytes(isCompressed = true) {
      abool("isCompressed", isCompressed);
      this.assertValidity();
      return toBytes11(Point2, this, isCompressed);
    }
    toHex(isCompressed = true) {
      abool("isCompressed", isCompressed);
      return bytesToHex(this.toRawBytes(isCompressed));
    }
  }
  Point2.BASE = new Point2(CURVE.Gx, CURVE.Gy, Fp3.ONE);
  Point2.ZERO = new Point2(Fp3.ZERO, Fp3.ONE, Fp3.ZERO);
  const _bits = CURVE.nBitLength;
  const wnaf = wNAF(Point2, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
  return {
    CURVE,
    ProjectivePoint: Point2,
    normPrivateKeyToScalar,
    weierstrassEquation,
    isWithinCurveOrder
  };
}
function validateOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  });
  return Object.freeze({ lowS: true, ...opts });
}
function weierstrass(curveDef) {
  const CURVE = validateOpts(curveDef);
  const { Fp: Fp3, n: CURVE_ORDER } = CURVE;
  const compressedLen = Fp3.BYTES + 1;
  const uncompressedLen = 2 * Fp3.BYTES + 1;
  function modN2(a) {
    return mod(a, CURVE_ORDER);
  }
  function invN(a) {
    return invert(a, CURVE_ORDER);
  }
  const { ProjectivePoint: Point2, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
    ...CURVE,
    toBytes(_c, point, isCompressed) {
      const a = point.toAffine();
      const x = Fp3.toBytes(a.x);
      const cat = concatBytes;
      abool("isCompressed", isCompressed);
      if (isCompressed) {
        return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
      } else {
        return cat(Uint8Array.from([4]), x, Fp3.toBytes(a.y));
      }
    },
    fromBytes(bytes) {
      const len = bytes.length;
      const head = bytes[0];
      const tail = bytes.subarray(1);
      if (len === compressedLen && (head === 2 || head === 3)) {
        const x = bytesToNumberBE(tail);
        if (!inRange(x, _1n5, Fp3.ORDER))
          throw new Error("Point is not on curve");
        const y2 = weierstrassEquation(x);
        let y;
        try {
          y = Fp3.sqrt(y2);
        } catch (sqrtError) {
          const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
          throw new Error("Point is not on curve" + suffix);
        }
        const isYOdd = (y & _1n5) === _1n5;
        const isHeadOdd = (head & 1) === 1;
        if (isHeadOdd !== isYOdd)
          y = Fp3.neg(y);
        return { x, y };
      } else if (len === uncompressedLen && head === 4) {
        const x = Fp3.fromBytes(tail.subarray(0, Fp3.BYTES));
        const y = Fp3.fromBytes(tail.subarray(Fp3.BYTES, 2 * Fp3.BYTES));
        return { x, y };
      } else {
        const cl = compressedLen;
        const ul = uncompressedLen;
        throw new Error("invalid Point, expected length of " + cl + ", or uncompressed " + ul + ", got " + len);
      }
    }
  });
  const numToNByteStr = (num2) => bytesToHex(numberToBytesBE(num2, CURVE.nByteLength));
  function isBiggerThanHalfOrder(number) {
    const HALF = CURVE_ORDER >> _1n5;
    return number > HALF;
  }
  function normalizeS(s) {
    return isBiggerThanHalfOrder(s) ? modN2(-s) : s;
  }
  const slcNum = (b, from29, to3) => bytesToNumberBE(b.slice(from29, to3));
  class Signature {
    constructor(r, s, recovery) {
      this.r = r;
      this.s = s;
      this.recovery = recovery;
      this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(hex) {
      const l = CURVE.nByteLength;
      hex = ensureBytes("compactSignature", hex, l * 2);
      return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(hex) {
      const { r, s } = DER.toSig(ensureBytes("DER", hex));
      return new Signature(r, s);
    }
    assertValidity() {
      aInRange("r", this.r, _1n5, CURVE_ORDER);
      aInRange("s", this.s, _1n5, CURVE_ORDER);
    }
    addRecoveryBit(recovery) {
      return new Signature(this.r, this.s, recovery);
    }
    recoverPublicKey(msgHash) {
      const { r, s, recovery: rec } = this;
      const h = bits2int_modN(ensureBytes("msgHash", msgHash));
      if (rec == null || ![0, 1, 2, 3].includes(rec))
        throw new Error("recovery id invalid");
      const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
      if (radj >= Fp3.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const prefix = (rec & 1) === 0 ? "02" : "03";
      const R = Point2.fromHex(prefix + numToNByteStr(radj));
      const ir = invN(radj);
      const u1 = modN2(-h * ir);
      const u2 = modN2(s * ir);
      const Q = Point2.BASE.multiplyAndAddUnsafe(R, u1, u2);
      if (!Q)
        throw new Error("point at infinify");
      Q.assertValidity();
      return Q;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return isBiggerThanHalfOrder(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new Signature(this.r, modN2(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return hexToBytes(this.toDERHex());
    }
    toDERHex() {
      return DER.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return hexToBytes(this.toCompactHex());
    }
    toCompactHex() {
      return numToNByteStr(this.r) + numToNByteStr(this.s);
    }
  }
  const utils = {
    isValidPrivateKey(privateKey) {
      try {
        normPrivateKeyToScalar(privateKey);
        return true;
      } catch (error) {
        return false;
      }
    },
    normPrivateKeyToScalar,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const length = getMinHashLength(CURVE.n);
      return mapHashToField(CURVE.randomBytes(length), CURVE.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(windowSize = 8, point = Point2.BASE) {
      point._setWindowSize(windowSize);
      point.multiply(BigInt(3));
      return point;
    }
  };
  function getPublicKey4(privateKey, isCompressed = true) {
    return Point2.fromPrivateKey(privateKey).toRawBytes(isCompressed);
  }
  function isProbPub(item) {
    const arr = isBytes(item);
    const str = typeof item === "string";
    const len = (arr || str) && item.length;
    if (arr)
      return len === compressedLen || len === uncompressedLen;
    if (str)
      return len === 2 * compressedLen || len === 2 * uncompressedLen;
    if (item instanceof Point2)
      return true;
    return false;
  }
  function getSharedSecret(privateA, publicB, isCompressed = true) {
    if (isProbPub(privateA))
      throw new Error("first arg must be private key");
    if (!isProbPub(publicB))
      throw new Error("second arg must be public key");
    const b = Point2.fromHex(publicB);
    return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
  }
  const bits2int = CURVE.bits2int || function(bytes) {
    if (bytes.length > 8192)
      throw new Error("input is too large");
    const num2 = bytesToNumberBE(bytes);
    const delta = bytes.length * 8 - CURVE.nBitLength;
    return delta > 0 ? num2 >> BigInt(delta) : num2;
  };
  const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
    return modN2(bits2int(bytes));
  };
  const ORDER_MASK = bitMask(CURVE.nBitLength);
  function int2octets(num2) {
    aInRange("num < 2^" + CURVE.nBitLength, num2, _0n5, ORDER_MASK);
    return numberToBytesBE(num2, CURVE.nByteLength);
  }
  function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
    if (["recovered", "canonical"].some((k) => k in opts))
      throw new Error("sign() legacy options not supported");
    const { hash: hash7, randomBytes: randomBytes2 } = CURVE;
    let { lowS, prehash, extraEntropy: ent } = opts;
    if (lowS == null)
      lowS = true;
    msgHash = ensureBytes("msgHash", msgHash);
    validateSigVerOpts(opts);
    if (prehash)
      msgHash = ensureBytes("prehashed msgHash", hash7(msgHash));
    const h1int = bits2int_modN(msgHash);
    const d = normPrivateKeyToScalar(privateKey);
    const seedArgs = [int2octets(d), int2octets(h1int)];
    if (ent != null && ent !== false) {
      const e = ent === true ? randomBytes2(Fp3.BYTES) : ent;
      seedArgs.push(ensureBytes("extraEntropy", e));
    }
    const seed = concatBytes(...seedArgs);
    const m = h1int;
    function k2sig(kBytes) {
      const k = bits2int(kBytes);
      if (!isWithinCurveOrder(k))
        return;
      const ik = invN(k);
      const q = Point2.BASE.multiply(k).toAffine();
      const r = modN2(q.x);
      if (r === _0n5)
        return;
      const s = modN2(ik * modN2(m + r * d));
      if (s === _0n5)
        return;
      let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n5);
      let normS = s;
      if (lowS && isBiggerThanHalfOrder(s)) {
        normS = normalizeS(s);
        recovery ^= 1;
      }
      return new Signature(r, normS, recovery);
    }
    return { seed, k2sig };
  }
  const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
  const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
  function sign6(msgHash, privKey, opts = defaultSigOpts) {
    const { seed, k2sig } = prepSig(msgHash, privKey, opts);
    const C = CURVE;
    const drbg = createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
    return drbg(seed, k2sig);
  }
  Point2.BASE._setWindowSize(8);
  function verify6(signature, msgHash, publicKey, opts = defaultVerOpts) {
    var _a;
    const sg = signature;
    msgHash = ensureBytes("msgHash", msgHash);
    publicKey = ensureBytes("publicKey", publicKey);
    const { lowS, prehash, format: format9 } = opts;
    validateSigVerOpts(opts);
    if ("strict" in opts)
      throw new Error("options.strict was renamed to lowS");
    if (format9 !== void 0 && format9 !== "compact" && format9 !== "der")
      throw new Error("format must be compact or der");
    const isHex = typeof sg === "string" || isBytes(sg);
    const isObj = !isHex && !format9 && typeof sg === "object" && sg !== null && typeof sg.r === "bigint" && typeof sg.s === "bigint";
    if (!isHex && !isObj)
      throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let _sig = void 0;
    let P;
    try {
      if (isObj)
        _sig = new Signature(sg.r, sg.s);
      if (isHex) {
        try {
          if (format9 !== "compact")
            _sig = Signature.fromDER(sg);
        } catch (derError) {
          if (!(derError instanceof DER.Err))
            throw derError;
        }
        if (!_sig && format9 !== "der")
          _sig = Signature.fromCompact(sg);
      }
      P = Point2.fromHex(publicKey);
    } catch (error) {
      return false;
    }
    if (!_sig)
      return false;
    if (lowS && _sig.hasHighS())
      return false;
    if (prehash)
      msgHash = CURVE.hash(msgHash);
    const { r, s } = _sig;
    const h = bits2int_modN(msgHash);
    const is = invN(s);
    const u1 = modN2(h * is);
    const u2 = modN2(r * is);
    const R = (_a = Point2.BASE.multiplyAndAddUnsafe(P, u1, u2)) == null ? void 0 : _a.toAffine();
    if (!R)
      return false;
    const v = modN2(R.x);
    return v === r;
  }
  return {
    CURVE,
    getPublicKey: getPublicKey4,
    getSharedSecret,
    sign: sign6,
    verify: verify6,
    ProjectivePoint: Point2,
    Signature,
    utils
  };
}
function SWUFpSqrtRatio(Fp3, Z) {
  const q = Fp3.ORDER;
  let l = _0n5;
  for (let o = q - _1n5; o % _2n4 === _0n5; o /= _2n4)
    l += _1n5;
  const c1 = l;
  const _2n_pow_c1_1 = _2n4 << c1 - _1n5 - _1n5;
  const _2n_pow_c1 = _2n_pow_c1_1 * _2n4;
  const c2 = (q - _1n5) / _2n_pow_c1;
  const c3 = (c2 - _1n5) / _2n4;
  const c4 = _2n_pow_c1 - _1n5;
  const c5 = _2n_pow_c1_1;
  const c6 = Fp3.pow(Z, c2);
  const c7 = Fp3.pow(Z, (c2 + _1n5) / _2n4);
  let sqrtRatio = (u, v) => {
    let tv1 = c6;
    let tv2 = Fp3.pow(v, c4);
    let tv3 = Fp3.sqr(tv2);
    tv3 = Fp3.mul(tv3, v);
    let tv5 = Fp3.mul(u, tv3);
    tv5 = Fp3.pow(tv5, c3);
    tv5 = Fp3.mul(tv5, tv2);
    tv2 = Fp3.mul(tv5, v);
    tv3 = Fp3.mul(tv5, u);
    let tv4 = Fp3.mul(tv3, tv2);
    tv5 = Fp3.pow(tv4, c5);
    let isQR = Fp3.eql(tv5, Fp3.ONE);
    tv2 = Fp3.mul(tv3, c7);
    tv5 = Fp3.mul(tv4, tv1);
    tv3 = Fp3.cmov(tv2, tv3, isQR);
    tv4 = Fp3.cmov(tv5, tv4, isQR);
    for (let i = c1; i > _1n5; i--) {
      let tv52 = i - _2n4;
      tv52 = _2n4 << tv52 - _1n5;
      let tvv5 = Fp3.pow(tv4, tv52);
      const e1 = Fp3.eql(tvv5, Fp3.ONE);
      tv2 = Fp3.mul(tv3, tv1);
      tv1 = Fp3.mul(tv1, tv1);
      tvv5 = Fp3.mul(tv4, tv1);
      tv3 = Fp3.cmov(tv2, tv3, e1);
      tv4 = Fp3.cmov(tvv5, tv4, e1);
    }
    return { isValid: isQR, value: tv3 };
  };
  if (Fp3.ORDER % _4n2 === _3n2) {
    const c12 = (Fp3.ORDER - _3n2) / _4n2;
    const c22 = Fp3.sqrt(Fp3.neg(Z));
    sqrtRatio = (u, v) => {
      let tv1 = Fp3.sqr(v);
      const tv2 = Fp3.mul(u, v);
      tv1 = Fp3.mul(tv1, tv2);
      let y1 = Fp3.pow(tv1, c12);
      y1 = Fp3.mul(y1, tv2);
      const y2 = Fp3.mul(y1, c22);
      const tv3 = Fp3.mul(Fp3.sqr(y1), v);
      const isQR = Fp3.eql(tv3, u);
      let y = Fp3.cmov(y2, y1, isQR);
      return { isValid: isQR, value: y };
    };
  }
  return sqrtRatio;
}
function mapToCurveSimpleSWU(Fp3, opts) {
  validateField(Fp3);
  if (!Fp3.isValid(opts.A) || !Fp3.isValid(opts.B) || !Fp3.isValid(opts.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const sqrtRatio = SWUFpSqrtRatio(Fp3, opts.Z);
  if (!Fp3.isOdd)
    throw new Error("Fp.isOdd is not implemented!");
  return (u) => {
    let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
    tv1 = Fp3.sqr(u);
    tv1 = Fp3.mul(tv1, opts.Z);
    tv2 = Fp3.sqr(tv1);
    tv2 = Fp3.add(tv2, tv1);
    tv3 = Fp3.add(tv2, Fp3.ONE);
    tv3 = Fp3.mul(tv3, opts.B);
    tv4 = Fp3.cmov(opts.Z, Fp3.neg(tv2), !Fp3.eql(tv2, Fp3.ZERO));
    tv4 = Fp3.mul(tv4, opts.A);
    tv2 = Fp3.sqr(tv3);
    tv6 = Fp3.sqr(tv4);
    tv5 = Fp3.mul(tv6, opts.A);
    tv2 = Fp3.add(tv2, tv5);
    tv2 = Fp3.mul(tv2, tv3);
    tv6 = Fp3.mul(tv6, tv4);
    tv5 = Fp3.mul(tv6, opts.B);
    tv2 = Fp3.add(tv2, tv5);
    x = Fp3.mul(tv1, tv3);
    const { isValid, value } = sqrtRatio(tv2, tv6);
    y = Fp3.mul(tv1, u);
    y = Fp3.mul(y, value);
    x = Fp3.cmov(x, tv3, isValid);
    y = Fp3.cmov(y, value, isValid);
    const e1 = Fp3.isOdd(u) === Fp3.isOdd(y);
    y = Fp3.cmov(Fp3.neg(y), y, e1);
    x = Fp3.div(x, tv4);
    return { x, y };
  };
}

// node_modules/ox/node_modules/@noble/curves/esm/_shortw_utils.js
function getHash(hash7) {
  return {
    hash: hash7,
    hmac: (key, ...msgs) => hmac(hash7, key, concatBytes2(...msgs)),
    randomBytes
  };
}
function createCurve(curveDef, defHash) {
  const create3 = (hash7) => weierstrass({ ...curveDef, ...getHash(hash7) });
  return Object.freeze({ ...create3(defHash), create: create3 });
}

// node_modules/ox/node_modules/@noble/curves/esm/abstract/hash-to-curve.js
var os2ip = bytesToNumberBE;
function i2osp(value, length) {
  anum(value);
  anum(length);
  if (value < 0 || value >= 1 << 8 * length)
    throw new Error("invalid I2OSP input: " + value);
  const res = Array.from({ length }).fill(0);
  for (let i = length - 1; i >= 0; i--) {
    res[i] = value & 255;
    value >>>= 8;
  }
  return new Uint8Array(res);
}
function strxor(a, b) {
  const arr = new Uint8Array(a.length);
  for (let i = 0; i < a.length; i++) {
    arr[i] = a[i] ^ b[i];
  }
  return arr;
}
function anum(item) {
  if (!Number.isSafeInteger(item))
    throw new Error("number expected");
}
function expand_message_xmd(msg, DST, lenInBytes, H) {
  abytes(msg);
  abytes(DST);
  anum(lenInBytes);
  if (DST.length > 255)
    DST = H(concatBytes(utf8ToBytes("H2C-OVERSIZE-DST-"), DST));
  const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
  const ell = Math.ceil(lenInBytes / b_in_bytes);
  if (lenInBytes > 65535 || ell > 255)
    throw new Error("expand_message_xmd: invalid lenInBytes");
  const DST_prime = concatBytes(DST, i2osp(DST.length, 1));
  const Z_pad = i2osp(0, r_in_bytes);
  const l_i_b_str = i2osp(lenInBytes, 2);
  const b = new Array(ell);
  const b_0 = H(concatBytes(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
  b[0] = H(concatBytes(b_0, i2osp(1, 1), DST_prime));
  for (let i = 1; i <= ell; i++) {
    const args = [strxor(b_0, b[i - 1]), i2osp(i + 1, 1), DST_prime];
    b[i] = H(concatBytes(...args));
  }
  const pseudo_random_bytes = concatBytes(...b);
  return pseudo_random_bytes.slice(0, lenInBytes);
}
function expand_message_xof(msg, DST, lenInBytes, k, H) {
  abytes(msg);
  abytes(DST);
  anum(lenInBytes);
  if (DST.length > 255) {
    const dkLen = Math.ceil(2 * k / 8);
    DST = H.create({ dkLen }).update(utf8ToBytes("H2C-OVERSIZE-DST-")).update(DST).digest();
  }
  if (lenInBytes > 65535 || DST.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return H.create({ dkLen: lenInBytes }).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
}
function hash_to_field(msg, count, options) {
  validateObject(options, {
    DST: "stringOrUint8Array",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash"
  });
  const { p, k, m, hash: hash7, expand, DST: _DST } = options;
  abytes(msg);
  anum(count);
  const DST = typeof _DST === "string" ? utf8ToBytes(_DST) : _DST;
  const log2p = p.toString(2).length;
  const L = Math.ceil((log2p + k) / 8);
  const len_in_bytes = count * m * L;
  let prb;
  if (expand === "xmd") {
    prb = expand_message_xmd(msg, DST, len_in_bytes, hash7);
  } else if (expand === "xof") {
    prb = expand_message_xof(msg, DST, len_in_bytes, k, hash7);
  } else if (expand === "_internal_pass") {
    prb = msg;
  } else {
    throw new Error('expand must be "xmd" or "xof"');
  }
  const u = new Array(count);
  for (let i = 0; i < count; i++) {
    const e = new Array(m);
    for (let j = 0; j < m; j++) {
      const elm_offset = L * (j + i * m);
      const tv = prb.subarray(elm_offset, elm_offset + L);
      e[j] = mod(os2ip(tv), p);
    }
    u[i] = e;
  }
  return u;
}
function isogenyMap(field, map) {
  const COEFF = map.map((i) => Array.from(i).reverse());
  return (x, y) => {
    const [xNum, xDen, yNum, yDen] = COEFF.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
    x = field.div(xNum, xDen);
    y = field.mul(y, field.div(yNum, yDen));
    return { x, y };
  };
}
function createHasher(Point2, mapToCurve, def) {
  if (typeof mapToCurve !== "function")
    throw new Error("mapToCurve() must be defined");
  return {
    // Encodes byte string to elliptic curve.
    // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    hashToCurve(msg, options) {
      const u = hash_to_field(msg, 2, { ...def, DST: def.DST, ...options });
      const u0 = Point2.fromAffine(mapToCurve(u[0]));
      const u1 = Point2.fromAffine(mapToCurve(u[1]));
      const P = u0.add(u1).clearCofactor();
      P.assertValidity();
      return P;
    },
    // Encodes byte string to elliptic curve.
    // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    encodeToCurve(msg, options) {
      const u = hash_to_field(msg, 1, { ...def, DST: def.encodeDST, ...options });
      const P = Point2.fromAffine(mapToCurve(u[0])).clearCofactor();
      P.assertValidity();
      return P;
    },
    // Same as encodeToCurve, but without hash
    mapToCurve(scalars) {
      if (!Array.isArray(scalars))
        throw new Error("mapToCurve: expected array of bigints");
      for (const i of scalars)
        if (typeof i !== "bigint")
          throw new Error("mapToCurve: expected array of bigints");
      const P = Point2.fromAffine(mapToCurve(scalars)).clearCofactor();
      P.assertValidity();
      return P;
    }
  };
}

// node_modules/ox/node_modules/@noble/curves/esm/secp256k1.js
var secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
var secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
var _1n6 = BigInt(1);
var _2n5 = BigInt(2);
var divNearest = (a, b) => (a + b / _2n5) / b;
function sqrtMod(y) {
  const P = secp256k1P;
  const _3n6 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
  const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
  const b2 = y * y * y % P;
  const b3 = b2 * b2 * y % P;
  const b6 = pow2(b3, _3n6, P) * b3 % P;
  const b9 = pow2(b6, _3n6, P) * b3 % P;
  const b11 = pow2(b9, _2n5, P) * b2 % P;
  const b22 = pow2(b11, _11n, P) * b11 % P;
  const b44 = pow2(b22, _22n, P) * b22 % P;
  const b88 = pow2(b44, _44n, P) * b44 % P;
  const b176 = pow2(b88, _88n, P) * b88 % P;
  const b220 = pow2(b176, _44n, P) * b44 % P;
  const b223 = pow2(b220, _3n6, P) * b3 % P;
  const t1 = pow2(b223, _23n, P) * b22 % P;
  const t2 = pow2(t1, _6n, P) * b2 % P;
  const root = pow2(t2, _2n5, P);
  if (!Fpk1.eql(Fpk1.sqr(root), y))
    throw new Error("Cannot find square root");
  return root;
}
var Fpk1 = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
var secp256k1 = createCurve({
  a: BigInt(0),
  // equation params: a, b
  b: BigInt(7),
  // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
  Fp: Fpk1,
  // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
  n: secp256k1N,
  // Curve order, total count of valid points in the field
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  // Cofactor
  lowS: true,
  // Allow only low-S signatures by default in sign() and verify()
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (k) => {
      const n = secp256k1N;
      const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
      const b1 = -_1n6 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
      const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
      const b2 = a1;
      const POW_2_128 = BigInt("0x100000000000000000000000000000000");
      const c1 = divNearest(b2 * k, n);
      const c2 = divNearest(-b1 * k, n);
      let k1 = mod(k - c1 * a1 - c2 * a2, n);
      let k2 = mod(-c1 * b1 - c2 * b2, n);
      const k1neg = k1 > POW_2_128;
      const k2neg = k2 > POW_2_128;
      if (k1neg)
        k1 = n - k1;
      if (k2neg)
        k2 = n - k2;
      if (k1 > POW_2_128 || k2 > POW_2_128) {
        throw new Error("splitScalar: Endomorphism failed, k=" + k);
      }
      return { k1neg, k1, k2neg, k2 };
    }
  }
}, sha2563);
var _0n6 = BigInt(0);
var TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
  let tagP = TAGGED_HASH_PREFIXES[tag];
  if (tagP === void 0) {
    const tagH = sha2563(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
    tagP = concatBytes(tagH, tagH);
    TAGGED_HASH_PREFIXES[tag] = tagP;
  }
  return sha2563(concatBytes(tagP, ...messages));
}
var pointToBytes = (point) => point.toRawBytes(true).slice(1);
var numTo32b = (n) => numberToBytesBE(n, 32);
var modP = (x) => mod(x, secp256k1P);
var modN = (x) => mod(x, secp256k1N);
var Point = secp256k1.ProjectivePoint;
var GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
function schnorrGetExtPubKey(priv) {
  let d_ = secp256k1.utils.normPrivateKeyToScalar(priv);
  let p = Point.fromPrivateKey(d_);
  const scalar = p.hasEvenY() ? d_ : modN(-d_);
  return { scalar, bytes: pointToBytes(p) };
}
function lift_x(x) {
  aInRange("x", x, _1n6, secp256k1P);
  const xx = modP(x * x);
  const c = modP(xx * x + BigInt(7));
  let y = sqrtMod(c);
  if (y % _2n5 !== _0n6)
    y = modP(-y);
  const p = new Point(x, y, _1n6);
  p.assertValidity();
  return p;
}
var num = bytesToNumberBE;
function challenge(...args) {
  return modN(num(taggedHash("BIP0340/challenge", ...args)));
}
function schnorrGetPublicKey(privateKey) {
  return schnorrGetExtPubKey(privateKey).bytes;
}
function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
  const m = ensureBytes("message", message);
  const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey);
  const a = ensureBytes("auxRand", auxRand, 32);
  const t = numTo32b(d ^ num(taggedHash("BIP0340/aux", a)));
  const rand = taggedHash("BIP0340/nonce", t, px, m);
  const k_ = modN(num(rand));
  if (k_ === _0n6)
    throw new Error("sign failed: k is zero");
  const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_);
  const e = challenge(rx, px, m);
  const sig = new Uint8Array(64);
  sig.set(rx, 0);
  sig.set(numTo32b(modN(k + e * d)), 32);
  if (!schnorrVerify(sig, m, px))
    throw new Error("sign: Invalid signature produced");
  return sig;
}
function schnorrVerify(signature, message, publicKey) {
  const sig = ensureBytes("signature", signature, 64);
  const m = ensureBytes("message", message);
  const pub = ensureBytes("publicKey", publicKey, 32);
  try {
    const P = lift_x(num(pub));
    const r = num(sig.subarray(0, 32));
    if (!inRange(r, _1n6, secp256k1P))
      return false;
    const s = num(sig.subarray(32, 64));
    if (!inRange(s, _1n6, secp256k1N))
      return false;
    const e = challenge(numTo32b(r), pointToBytes(P), m);
    const R = GmulAdd(P, s, modN(-e));
    if (!R || !R.hasEvenY() || R.toAffine().x !== r)
      return false;
    return true;
  } catch (error) {
    return false;
  }
}
var schnorr = (() => ({
  getPublicKey: schnorrGetPublicKey,
  sign: schnorrSign,
  verify: schnorrVerify,
  utils: {
    randomPrivateKey: secp256k1.utils.randomPrivateKey,
    lift_x,
    pointToBytes,
    numberToBytesBE,
    bytesToNumberBE,
    taggedHash,
    mod
  }
}))();
var isoMap = (() => isogenyMap(Fpk1, [
  // xNum
  [
    "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
    "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
    "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
    "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
  ],
  // xDen
  [
    "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
    "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
    "0x0000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ],
  // yNum
  [
    "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
    "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
    "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
    "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
  ],
  // yDen
  [
    "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
    "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
    "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
    "0x0000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ]
].map((i) => i.map((j) => BigInt(j)))))();
var mapSWU = (() => mapToCurveSimpleSWU(Fpk1, {
  A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
  B: BigInt("1771"),
  Z: Fpk1.create(BigInt("-11"))
}))();
var htf = (() => createHasher(secp256k1.ProjectivePoint, (scalars) => {
  const { x, y } = mapSWU(Fpk1.create(scalars[0]));
  return isoMap(x, y);
}, {
  DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
  encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
  p: Fpk1.ORDER,
  m: 1,
  k: 128,
  expand: "xmd",
  hash: sha2563
}))();
var hashToCurve = (() => htf.hashToCurve)();
var encodeToCurve = (() => htf.encodeToCurve)();

// node_modules/ox/_esm/core/Signature.js
function assert5(signature, options = {}) {
  const { recovered } = options;
  if (typeof signature.r === "undefined")
    throw new MissingPropertiesError({ signature });
  if (typeof signature.s === "undefined")
    throw new MissingPropertiesError({ signature });
  if (recovered && typeof signature.yParity === "undefined")
    throw new MissingPropertiesError({ signature });
  if (signature.r < 0n || signature.r > maxUint256)
    throw new InvalidRError({ value: signature.r });
  if (signature.s < 0n || signature.s > maxUint256)
    throw new InvalidSError({ value: signature.s });
  if (typeof signature.yParity === "number" && signature.yParity !== 0 && signature.yParity !== 1)
    throw new InvalidYParityError({ value: signature.yParity });
}
function fromBytes4(signature) {
  return fromHex4(fromBytes(signature));
}
fromBytes4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromHex4(signature) {
  if (signature.length !== 130 && signature.length !== 132)
    throw new InvalidSerializedSizeError2({ signature });
  const r = BigInt(slice(signature, 0, 32));
  const s = BigInt(slice(signature, 32, 64));
  const yParity = (() => {
    const yParity2 = Number(`0x${signature.slice(130)}`);
    if (Number.isNaN(yParity2))
      return void 0;
    try {
      return vToYParity(yParity2);
    } catch {
      throw new InvalidYParityError({ value: yParity2 });
    }
  })();
  if (typeof yParity === "undefined")
    return {
      r,
      s
    };
  return {
    r,
    s,
    yParity
  };
}
fromHex4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function extract(value) {
  if (typeof value.r === "undefined")
    return void 0;
  if (typeof value.s === "undefined")
    return void 0;
  return from13(value);
}
extract.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from13(signature) {
  const signature_ = (() => {
    if (typeof signature === "string")
      return fromHex4(signature);
    if (signature instanceof Uint8Array)
      return fromBytes4(signature);
    if (typeof signature.r === "string")
      return fromRpc(signature);
    if (signature.v)
      return fromLegacy(signature);
    return {
      r: signature.r,
      s: signature.s,
      ...typeof signature.yParity !== "undefined" ? { yParity: signature.yParity } : {}
    };
  })();
  assert5(signature_);
  return signature_;
}
from13.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromDerBytes(signature) {
  return fromDerHex(fromBytes(signature));
}
fromDerBytes.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromDerHex(signature) {
  const { r, s } = secp256k1.Signature.fromDER(from(signature).slice(2));
  return { r, s };
}
fromDerHex.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromLegacy(signature) {
  return {
    r: signature.r,
    s: signature.s,
    yParity: vToYParity(signature.v)
  };
}
fromLegacy.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromRpc(signature) {
  const yParity = (() => {
    const v = signature.v ? Number(signature.v) : void 0;
    let yParity2 = signature.yParity ? Number(signature.yParity) : void 0;
    if (typeof v === "number" && typeof yParity2 !== "number")
      yParity2 = vToYParity(v);
    if (typeof yParity2 !== "number")
      throw new InvalidYParityError({ value: signature.yParity });
    return yParity2;
  })();
  return {
    r: BigInt(signature.r),
    s: BigInt(signature.s),
    yParity
  };
}
fromRpc.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromTuple(tuple) {
  const [yParity, r, s] = tuple;
  return from13({
    r: r === "0x" ? 0n : BigInt(r),
    s: s === "0x" ? 0n : BigInt(s),
    yParity: yParity === "0x" ? 0 : Number(yParity)
  });
}
fromTuple.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toBytes6(signature) {
  return fromHex(toHex4(signature));
}
toBytes6.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toHex4(signature) {
  assert5(signature);
  const r = signature.r;
  const s = signature.s;
  const signature_ = concat(
    fromNumber(r, { size: 32 }),
    fromNumber(s, { size: 32 }),
    // If the signature is recovered, add the recovery byte to the signature.
    typeof signature.yParity === "number" ? fromNumber(signature.yParity, { size: 1 }) : "0x"
  );
  return signature_;
}
toHex4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toDerBytes(signature) {
  const sig = new secp256k1.Signature(signature.r, signature.s);
  return sig.toDERRawBytes();
}
toDerBytes.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toDerHex(signature) {
  const sig = new secp256k1.Signature(signature.r, signature.s);
  return `0x${sig.toDERHex()}`;
}
toDerHex.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toLegacy(signature) {
  return {
    r: signature.r,
    s: signature.s,
    v: yParityToV(signature.yParity)
  };
}
toLegacy.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toRpc(signature) {
  const { r, s, yParity } = signature;
  return {
    r: fromNumber(r, { size: 32 }),
    s: fromNumber(s, { size: 32 }),
    yParity: yParity === 0 ? "0x0" : "0x1"
  };
}
toRpc.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toTuple(signature) {
  const { r, s, yParity } = signature;
  return [
    yParity ? "0x01" : "0x",
    r === 0n ? "0x" : trimLeft(fromNumber(r)),
    s === 0n ? "0x" : trimLeft(fromNumber(s))
  ];
}
function validate6(signature, options = {}) {
  try {
    assert5(signature, options);
    return true;
  } catch {
    return false;
  }
}
function vToYParity(v) {
  if (v === 0 || v === 27)
    return 0;
  if (v === 1 || v === 28)
    return 1;
  if (v >= 35)
    return v % 2 === 0 ? 1 : 0;
  throw new InvalidVError({ value: v });
}
vToYParity.parseError = (error) => error;
function yParityToV(yParity) {
  if (yParity === 0)
    return 27;
  if (yParity === 1)
    return 28;
  throw new InvalidYParityError({ value: yParity });
}
yParityToV.parseError = (error) => error;
var InvalidSerializedSizeError2 = class extends BaseError {
  constructor({ signature }) {
    super(`Value \`${signature}\` is an invalid signature size.`, {
      metaMessages: [
        "Expected: 64 bytes or 65 bytes.",
        `Received ${size2(from(signature))} bytes.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSerializedSizeError"
    });
  }
};
var MissingPropertiesError = class extends BaseError {
  constructor({ signature }) {
    super(`Signature \`${stringify(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.MissingPropertiesError"
    });
  }
};
var InvalidRError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidRError"
    });
  }
};
var InvalidSError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSError"
    });
  }
};
var InvalidYParityError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidYParityError"
    });
  }
};
var InvalidVError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidVError"
    });
  }
};

// node_modules/ox/_esm/core/Authorization.js
function from14(authorization, options = {}) {
  if (typeof authorization.chainId === "string")
    return fromRpc2(authorization);
  return { ...authorization, ...options.signature };
}
from14.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromRpc2(authorization) {
  const { address, chainId, nonce } = authorization;
  const signature = extract(authorization);
  return {
    address,
    chainId: Number(chainId),
    nonce: BigInt(nonce),
    ...signature
  };
}
fromRpc2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromRpcList(authorizationList) {
  return authorizationList.map(fromRpc2);
}
fromRpcList.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromTuple2(tuple) {
  const [chainId, address, nonce, yParity, r, s] = tuple;
  const signature = yParity && r && s ? fromTuple([yParity, r, s]) : void 0;
  return from14({
    address,
    chainId: Number(chainId),
    nonce: BigInt(nonce),
    ...signature
  });
}
fromTuple2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromTupleList2(tupleList) {
  const list = [];
  for (const tuple of tupleList)
    list.push(fromTuple2(tuple));
  return list;
}
fromTupleList2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getSignPayload(authorization) {
  return hash(authorization);
}
getSignPayload.parseError = (error) => (
  /* v8 ignore next */
  error
);
function hash(authorization) {
  return keccak256(concat("0x05", fromHex3(toTuple2(authorization))));
}
hash.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toRpc2(authorization) {
  const { address, chainId, nonce, ...signature } = authorization;
  return {
    address,
    chainId: fromNumber(chainId),
    nonce: fromNumber(nonce),
    ...toRpc(signature)
  };
}
toRpc2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toRpcList(authorizationList) {
  return authorizationList.map(toRpc2);
}
toRpcList.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toTuple2(authorization) {
  const { address, chainId, nonce } = authorization;
  const signature = extract(authorization);
  return [
    chainId ? fromNumber(chainId) : "0x",
    address,
    nonce ? fromNumber(nonce) : "0x",
    ...signature ? toTuple(signature) : []
  ];
}
toTuple2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toTupleList2(list) {
  if (!list || list.length === 0)
    return [];
  const tupleList = [];
  for (const authorization of list)
    tupleList.push(toTuple2(authorization));
  return tupleList;
}
toTupleList2.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/Base58.js
var Base58_exports = {};
__export(Base58_exports, {
  fromBytes: () => fromBytes5,
  fromHex: () => fromHex5,
  fromString: () => fromString3,
  toBytes: () => toBytes7,
  toHex: () => toHex5,
  toString: () => toString3
});

// node_modules/ox/_esm/core/internal/base58.js
var integerToAlphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var alphabetToInteger = (
  /* __PURE__ */
  Object.freeze({
    1: 0n,
    2: 1n,
    3: 2n,
    4: 3n,
    5: 4n,
    6: 5n,
    7: 6n,
    8: 7n,
    9: 8n,
    A: 9n,
    B: 10n,
    C: 11n,
    D: 12n,
    E: 13n,
    F: 14n,
    G: 15n,
    H: 16n,
    J: 17n,
    K: 18n,
    L: 19n,
    M: 20n,
    N: 21n,
    P: 22n,
    Q: 23n,
    R: 24n,
    S: 25n,
    T: 26n,
    U: 27n,
    V: 28n,
    W: 29n,
    X: 30n,
    Y: 31n,
    Z: 32n,
    a: 33n,
    b: 34n,
    c: 35n,
    d: 36n,
    e: 37n,
    f: 38n,
    g: 39n,
    h: 40n,
    i: 41n,
    j: 42n,
    k: 43n,
    m: 44n,
    n: 45n,
    o: 46n,
    p: 47n,
    q: 48n,
    r: 49n,
    s: 50n,
    t: 51n,
    u: 52n,
    v: 53n,
    w: 54n,
    x: 55n,
    y: 56n,
    z: 57n
  })
);
function from15(value) {
  let bytes = from2(value);
  let integer = (() => {
    let hex = value;
    if (value instanceof Uint8Array)
      hex = fromBytes(bytes);
    return BigInt(hex);
  })();
  let result = "";
  while (integer > 0n) {
    const remainder = Number(integer % 58n);
    integer = integer / 58n;
    result = integerToAlphabet[remainder] + result;
  }
  while (bytes.length > 1 && bytes[0] === 0) {
    result = "1" + result;
    bytes = bytes.slice(1);
  }
  return result;
}
from15.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/Base58.js
function fromBytes5(value) {
  return from15(value);
}
fromBytes5.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromHex5(value) {
  return from15(value);
}
fromHex5.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromString3(value) {
  return from15(fromString2(value));
}
fromString3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toBytes7(value) {
  return fromHex(toHex5(value));
}
toBytes7.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toHex5(value) {
  let integer = BigInt(0);
  let pad3 = 0;
  let checkPad = true;
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (checkPad && char === "1")
      pad3++;
    else
      checkPad = false;
    if (typeof alphabetToInteger[char] !== "bigint")
      throw new Error("invalid base58 character: " + char);
    integer = integer * 58n;
    integer = integer + alphabetToInteger[char];
  }
  if (!pad3)
    return `0x${integer.toString(16)}`;
  return `0x${"0".repeat(pad3 * 2)}${integer.toString(16)}`;
}
toHex5.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toString3(value) {
  return toString(toHex5(value));
}
toString3.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/Base64.js
var Base64_exports = {};
__export(Base64_exports, {
  fromBytes: () => fromBytes6,
  fromHex: () => fromHex6,
  fromString: () => fromString4,
  toBytes: () => toBytes8,
  toHex: () => toHex6,
  toString: () => toString4
});
var encoder3 = new TextEncoder();
var decoder2 = new TextDecoder();
var integerToCharacter = Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((a, i) => [i, a.charCodeAt(0)]));
var characterToInteger = {
  ...Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((a, i) => [a.charCodeAt(0), i])),
  ["=".charCodeAt(0)]: 0,
  ["-".charCodeAt(0)]: 62,
  ["_".charCodeAt(0)]: 63
};
function fromBytes6(value, options = {}) {
  const { pad: pad3 = true, url = false } = options;
  const encoded = new Uint8Array(Math.ceil(value.length / 3) * 4);
  for (let i = 0, j = 0; j < value.length; i += 4, j += 3) {
    const y = (value[j] << 16) + (value[j + 1] << 8) + (value[j + 2] | 0);
    encoded[i] = integerToCharacter[y >> 18];
    encoded[i + 1] = integerToCharacter[y >> 12 & 63];
    encoded[i + 2] = integerToCharacter[y >> 6 & 63];
    encoded[i + 3] = integerToCharacter[y & 63];
  }
  const k = value.length % 3;
  const end = Math.floor(value.length / 3) * 4 + (k && k + 1);
  let base64 = decoder2.decode(new Uint8Array(encoded.buffer, 0, end));
  if (pad3 && k === 1)
    base64 += "==";
  if (pad3 && k === 2)
    base64 += "=";
  if (url)
    base64 = base64.replaceAll("+", "-").replaceAll("/", "_");
  return base64;
}
fromBytes6.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromHex6(value, options = {}) {
  return fromBytes6(fromHex(value), options);
}
fromHex6.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromString4(value, options = {}) {
  return fromBytes6(fromString2(value), options);
}
fromString4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toBytes8(value) {
  const base64 = value.replace(/=+$/, "");
  const size4 = base64.length;
  const decoded = new Uint8Array(size4 + 3);
  encoder3.encodeInto(base64 + "===", decoded);
  for (let i = 0, j = 0; i < base64.length; i += 4, j += 3) {
    const x = (characterToInteger[decoded[i]] << 18) + (characterToInteger[decoded[i + 1]] << 12) + (characterToInteger[decoded[i + 2]] << 6) + characterToInteger[decoded[i + 3]];
    decoded[j] = x >> 16;
    decoded[j + 1] = x >> 8 & 255;
    decoded[j + 2] = x & 255;
  }
  const decodedSize = (size4 >> 2) * 3 + (size4 % 4 && size4 % 4 - 1);
  return new Uint8Array(decoded.buffer, 0, decodedSize);
}
toBytes8.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toHex6(value) {
  return fromBytes(toBytes8(value));
}
toHex6.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toString4(value) {
  return toString2(toBytes8(value));
}
toString4.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/Blobs.js
var Blobs_exports = {};
__export(Blobs_exports, {
  BlobSizeTooLargeError: () => BlobSizeTooLargeError,
  EmptyBlobError: () => EmptyBlobError,
  EmptyBlobVersionedHashesError: () => EmptyBlobVersionedHashesError,
  InvalidVersionedHashSizeError: () => InvalidVersionedHashSizeError,
  InvalidVersionedHashVersionError: () => InvalidVersionedHashVersionError,
  bytesPerBlob: () => bytesPerBlob,
  bytesPerFieldElement: () => bytesPerFieldElement,
  commitmentToVersionedHash: () => commitmentToVersionedHash,
  commitmentsToVersionedHashes: () => commitmentsToVersionedHashes,
  fieldElementsPerBlob: () => fieldElementsPerBlob,
  from: () => from17,
  maxBytesPerTransaction: () => maxBytesPerTransaction,
  sidecarsToVersionedHashes: () => sidecarsToVersionedHashes,
  to: () => to2,
  toBytes: () => toBytes9,
  toCommitments: () => toCommitments,
  toHex: () => toHex7,
  toProofs: () => toProofs,
  toSidecars: () => toSidecars,
  toVersionedHashes: () => toVersionedHashes
});

// node_modules/ox/_esm/core/Kzg.js
var Kzg_exports = {};
__export(Kzg_exports, {
  from: () => from16,
  versionedHashVersion: () => versionedHashVersion
});
var versionedHashVersion = 1;
function from16(value) {
  const { blobToKzgCommitment, computeBlobKzgProof } = value;
  return {
    blobToKzgCommitment,
    computeBlobKzgProof
  };
}
from16.parseError = (error) => error;

// node_modules/ox/_esm/core/Blobs.js
var blobsPerTransaction = 6;
var bytesPerFieldElement = 32;
var fieldElementsPerBlob = 4096;
var bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
var maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * fieldElementsPerBlob * blobsPerTransaction;
function commitmentsToVersionedHashes(commitments, options = {}) {
  const { version: version2 } = options;
  const as = options.as ?? (typeof commitments[0] === "string" ? "Hex" : "Bytes");
  const hashes = [];
  for (const commitment of commitments) {
    hashes.push(commitmentToVersionedHash(commitment, {
      as,
      version: version2
    }));
  }
  return hashes;
}
commitmentsToVersionedHashes.parseError = (error) => (
  /* v8 ignore next */
  error
);
function commitmentToVersionedHash(commitment, options = {}) {
  const { version: version2 = 1 } = options;
  const as = options.as ?? (typeof commitment === "string" ? "Hex" : "Bytes");
  const versionedHash = sha2562(commitment, { as: "Bytes" });
  versionedHash.set([version2], 0);
  return as === "Bytes" ? versionedHash : fromBytes(versionedHash);
}
commitmentToVersionedHash.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from17(data, options = {}) {
  const as = options.as ?? (typeof data === "string" ? "Hex" : "Bytes");
  const data_ = typeof data === "string" ? fromHex(data) : data;
  const size_ = size(data_);
  if (!size_)
    throw new EmptyBlobError();
  if (size_ > maxBytesPerTransaction)
    throw new BlobSizeTooLargeError({
      maxSize: maxBytesPerTransaction,
      size: size_
    });
  const blobs = [];
  let active2 = true;
  let position = 0;
  while (active2) {
    const blob = create(new Uint8Array(bytesPerBlob));
    let size4 = 0;
    while (size4 < fieldElementsPerBlob) {
      const bytes = data_.slice(position, position + (bytesPerFieldElement - 1));
      blob.pushByte(0);
      blob.pushBytes(bytes);
      if (bytes.length < 31) {
        blob.pushByte(128);
        active2 = false;
        break;
      }
      size4++;
      position += 31;
    }
    blobs.push(blob);
  }
  return as === "Bytes" ? blobs.map((x) => x.bytes) : blobs.map((x) => fromBytes(x.bytes));
}
from17.parseError = (error) => error;
function sidecarsToVersionedHashes(sidecars, options = {}) {
  const { version: version2 } = options;
  const as = options.as ?? (typeof sidecars[0].blob === "string" ? "Hex" : "Bytes");
  const hashes = [];
  for (const { commitment } of sidecars) {
    hashes.push(commitmentToVersionedHash(commitment, {
      as,
      version: version2
    }));
  }
  return hashes;
}
sidecarsToVersionedHashes.parseError = (error) => (
  /* v8 ignore next */
  error
);
function to2(blobs, to3) {
  const to_ = to3 ?? (typeof blobs[0] === "string" ? "Hex" : "Bytes");
  const blobs_ = typeof blobs[0] === "string" ? blobs.map((x) => fromHex(x)) : blobs;
  const length = blobs_.reduce((length2, blob) => length2 + blob.length, 0);
  const data = create(new Uint8Array(length));
  let active2 = true;
  for (const blob of blobs_) {
    const cursor = create(blob);
    while (active2 && cursor.position < blob.length) {
      cursor.incrementPosition(1);
      let consume = 31;
      if (blob.length - cursor.position < 31)
        consume = blob.length - cursor.position;
      for (const _ in Array.from({ length: consume })) {
        const byte = cursor.readByte();
        const isTerminator = byte === 128 && !cursor.inspectBytes(cursor.remaining).includes(128);
        if (isTerminator) {
          active2 = false;
          break;
        }
        data.pushByte(byte);
      }
    }
  }
  const trimmedData = data.bytes.slice(0, data.position);
  return to_ === "Hex" ? fromBytes(trimmedData) : trimmedData;
}
to2.parseError = (error) => error;
function toHex7(blobs) {
  return to2(blobs, "Hex");
}
toHex7.parseError = (error) => error;
function toBytes9(blobs) {
  return to2(blobs, "Bytes");
}
toBytes9.parseError = (error) => error;
function toCommitments(blobs, options) {
  const { kzg } = options;
  const as = options.as ?? (typeof blobs[0] === "string" ? "Hex" : "Bytes");
  const blobs_ = typeof blobs[0] === "string" ? blobs.map((x) => fromHex(x)) : blobs;
  const commitments = [];
  for (const blob of blobs_)
    commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
  return as === "Bytes" ? commitments : commitments.map((x) => fromBytes(x));
}
toCommitments.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toProofs(blobs, options) {
  const { kzg } = options;
  const as = options.as ?? (typeof blobs[0] === "string" ? "Hex" : "Bytes");
  const blobs_ = typeof blobs[0] === "string" ? blobs.map((x) => fromHex(x)) : blobs;
  const commitments = typeof options.commitments[0] === "string" ? options.commitments.map((x) => fromHex(x)) : options.commitments;
  const proofs = [];
  for (let i = 0; i < blobs_.length; i++) {
    const blob = blobs_[i];
    const commitment = commitments[i];
    proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
  }
  return as === "Bytes" ? proofs : proofs.map((x) => fromBytes(x));
}
toProofs.parseError = (error) => error;
function toSidecars(blobs, options) {
  const { kzg } = options;
  const commitments = options.commitments ?? toCommitments(blobs, { kzg });
  const proofs = options.proofs ?? toProofs(blobs, { commitments, kzg });
  const sidecars = [];
  for (let i = 0; i < blobs.length; i++)
    sidecars.push({
      blob: blobs[i],
      commitment: commitments[i],
      proof: proofs[i]
    });
  return sidecars;
}
toSidecars.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toVersionedHashes(blobs, options) {
  const commitments = toCommitments(blobs, options);
  return commitmentsToVersionedHashes(commitments, options);
}
toVersionedHashes.parseError = (error) => (
  /* v8 ignore next */
  error
);
var BlobSizeTooLargeError = class extends BaseError {
  constructor({ maxSize, size: size4 }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size4} bytes`]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Blobs.BlobSizeTooLargeError"
    });
  }
};
var EmptyBlobError = class extends BaseError {
  constructor() {
    super("Blob data must not be empty.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Blobs.EmptyBlobError"
    });
  }
};
var EmptyBlobVersionedHashesError = class extends BaseError {
  constructor() {
    super("Blob versioned hashes must not be empty.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Blobs.EmptyBlobVersionedHashesError"
    });
  }
};
var InvalidVersionedHashSizeError = class extends BaseError {
  constructor({ hash: hash7, size: size4 }) {
    super(`Versioned hash "${hash7}" size is invalid.`, {
      metaMessages: ["Expected: 32", `Received: ${size4}`]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Blobs.InvalidVersionedHashSizeError"
    });
  }
};
var InvalidVersionedHashVersionError = class extends BaseError {
  constructor({ hash: hash7, version: version2 }) {
    super(`Versioned hash "${hash7}" version is invalid.`, {
      metaMessages: [
        `Expected: ${versionedHashVersion}`,
        `Received: ${version2}`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Blobs.InvalidVersionedHashVersionError"
    });
  }
};

// node_modules/ox/_esm/core/Block.js
var Block_exports = {};
__export(Block_exports, {
  fromRpc: () => fromRpc5,
  toRpc: () => toRpc5
});

// node_modules/ox/_esm/core/Transaction.js
var Transaction_exports = {};
__export(Transaction_exports, {
  fromRpc: () => fromRpc3,
  fromRpcType: () => fromRpcType,
  toRpc: () => toRpc3,
  toRpcType: () => toRpcType
});
var toRpcType = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3",
  eip7702: "0x4"
};
var fromRpcType = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function fromRpc3(transaction, _options = {}) {
  if (!transaction)
    return null;
  const signature = extract(transaction);
  const transaction_ = {
    ...transaction,
    ...signature
  };
  transaction_.blockNumber = transaction.blockNumber ? BigInt(transaction.blockNumber) : null;
  transaction_.data = transaction.input;
  transaction_.gas = BigInt(transaction.gas ?? 0n);
  transaction_.nonce = BigInt(transaction.nonce ?? 0n);
  transaction_.transactionIndex = transaction.transactionIndex ? Number(transaction.transactionIndex) : null;
  transaction_.value = BigInt(transaction.value ?? 0n);
  if (transaction.authorizationList)
    transaction_.authorizationList = fromRpcList(transaction.authorizationList);
  if (transaction.chainId)
    transaction_.chainId = Number(transaction.chainId);
  if (transaction.gasPrice)
    transaction_.gasPrice = BigInt(transaction.gasPrice);
  if (transaction.maxFeePerBlobGas)
    transaction_.maxFeePerBlobGas = BigInt(transaction.maxFeePerBlobGas);
  if (transaction.maxFeePerGas)
    transaction_.maxFeePerGas = BigInt(transaction.maxFeePerGas);
  if (transaction.maxPriorityFeePerGas)
    transaction_.maxPriorityFeePerGas = BigInt(transaction.maxPriorityFeePerGas);
  if (transaction.type)
    transaction_.type = fromRpcType[transaction.type] ?? transaction.type;
  if (signature)
    transaction_.v = yParityToV(signature.yParity);
  return transaction_;
}
fromRpc3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toRpc3(transaction, _options) {
  const rpc = {};
  rpc.blockHash = transaction.blockHash;
  rpc.blockNumber = typeof transaction.blockNumber === "bigint" ? fromNumber(transaction.blockNumber) : null;
  rpc.from = transaction.from;
  rpc.gas = fromNumber(transaction.gas ?? 0n);
  rpc.hash = transaction.hash;
  rpc.input = transaction.input;
  rpc.nonce = fromNumber(transaction.nonce ?? 0n);
  rpc.to = transaction.to;
  rpc.transactionIndex = transaction.transactionIndex ? fromNumber(transaction.transactionIndex) : null;
  rpc.type = toRpcType[transaction.type] ?? transaction.type;
  rpc.value = fromNumber(transaction.value ?? 0n);
  if (transaction.accessList)
    rpc.accessList = transaction.accessList;
  if (transaction.authorizationList)
    rpc.authorizationList = toRpcList(transaction.authorizationList);
  if (transaction.blobVersionedHashes)
    rpc.blobVersionedHashes = transaction.blobVersionedHashes;
  if (transaction.chainId)
    rpc.chainId = fromNumber(transaction.chainId);
  if (typeof transaction.gasPrice === "bigint")
    rpc.gasPrice = fromNumber(transaction.gasPrice);
  if (typeof transaction.maxFeePerBlobGas === "bigint")
    rpc.maxFeePerBlobGas = fromNumber(transaction.maxFeePerBlobGas);
  if (typeof transaction.maxFeePerGas === "bigint")
    rpc.maxFeePerGas = fromNumber(transaction.maxFeePerGas);
  if (typeof transaction.maxPriorityFeePerGas === "bigint")
    rpc.maxPriorityFeePerGas = fromNumber(transaction.maxPriorityFeePerGas);
  if (typeof transaction.r === "bigint")
    rpc.r = fromNumber(transaction.r, { size: 32 });
  if (typeof transaction.s === "bigint")
    rpc.s = fromNumber(transaction.s, { size: 32 });
  if (typeof transaction.v === "number")
    rpc.v = fromNumber(transaction.v, { size: 1 });
  if (typeof transaction.yParity === "number")
    rpc.yParity = transaction.yParity === 0 ? "0x0" : "0x1";
  return rpc;
}
toRpc3.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/Withdrawal.js
var Withdrawal_exports = {};
__export(Withdrawal_exports, {
  fromRpc: () => fromRpc4,
  toRpc: () => toRpc4
});
function fromRpc4(withdrawal) {
  return {
    ...withdrawal,
    amount: BigInt(withdrawal.amount),
    index: Number(withdrawal.index),
    validatorIndex: Number(withdrawal.validatorIndex)
  };
}
fromRpc4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toRpc4(withdrawal) {
  return {
    address: withdrawal.address,
    amount: fromNumber(withdrawal.amount),
    index: fromNumber(withdrawal.index),
    validatorIndex: fromNumber(withdrawal.validatorIndex)
  };
}
toRpc4.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/Block.js
function toRpc5(block, _options = {}) {
  var _a;
  const transactions = block.transactions.map((transaction) => {
    if (typeof transaction === "string")
      return transaction;
    return toRpc3(transaction);
  });
  return {
    baseFeePerGas: typeof block.baseFeePerGas === "bigint" ? fromNumber(block.baseFeePerGas) : void 0,
    blobGasUsed: typeof block.blobGasUsed === "bigint" ? fromNumber(block.blobGasUsed) : void 0,
    excessBlobGas: typeof block.excessBlobGas === "bigint" ? fromNumber(block.excessBlobGas) : void 0,
    extraData: block.extraData,
    difficulty: typeof block.difficulty === "bigint" ? fromNumber(block.difficulty) : void 0,
    gasLimit: fromNumber(block.gasLimit),
    gasUsed: fromNumber(block.gasUsed),
    hash: block.hash,
    logsBloom: block.logsBloom,
    miner: block.miner,
    mixHash: block.mixHash,
    nonce: block.nonce,
    number: typeof block.number === "bigint" ? fromNumber(block.number) : null,
    parentBeaconBlockRoot: block.parentBeaconBlockRoot,
    parentHash: block.parentHash,
    receiptsRoot: block.receiptsRoot,
    sealFields: block.sealFields,
    sha3Uncles: block.sha3Uncles,
    size: fromNumber(block.size),
    stateRoot: block.stateRoot,
    timestamp: fromNumber(block.timestamp),
    totalDifficulty: typeof block.totalDifficulty === "bigint" ? fromNumber(block.totalDifficulty) : void 0,
    transactions,
    transactionsRoot: block.transactionsRoot,
    uncles: block.uncles,
    withdrawals: (_a = block.withdrawals) == null ? void 0 : _a.map(toRpc4),
    withdrawalsRoot: block.withdrawalsRoot
  };
}
toRpc5.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromRpc5(block, _options = {}) {
  var _a;
  if (!block)
    return null;
  const transactions = block.transactions.map((transaction) => {
    if (typeof transaction === "string")
      return transaction;
    return fromRpc3(transaction);
  });
  return {
    ...block,
    baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : void 0,
    blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : void 0,
    difficulty: block.difficulty ? BigInt(block.difficulty) : void 0,
    excessBlobGas: block.excessBlobGas ? BigInt(block.excessBlobGas) : void 0,
    gasLimit: BigInt(block.gasLimit ?? 0n),
    gasUsed: BigInt(block.gasUsed ?? 0n),
    number: block.number ? BigInt(block.number) : null,
    size: BigInt(block.size ?? 0n),
    stateRoot: block.stateRoot,
    timestamp: BigInt(block.timestamp ?? 0n),
    totalDifficulty: BigInt(block.totalDifficulty ?? 0n),
    transactions,
    withdrawals: (_a = block.withdrawals) == null ? void 0 : _a.map(fromRpc4)
  };
}
fromRpc5.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/Bloom.js
var Bloom_exports = {};
__export(Bloom_exports, {
  contains: () => contains,
  validate: () => validate7
});
function contains(bloom, input) {
  const filter = fromHex(bloom);
  const hash7 = keccak256(input, { as: "Bytes" });
  for (const i of [0, 2, 4]) {
    const bit = hash7[i + 1] + (hash7[i] << 8) & 2047;
    if ((filter[256 - 1 - Math.floor(bit / 8)] & 1 << bit % 8) === 0)
      return false;
  }
  return true;
}
contains.parseError = (error) => (
  /* v8 ignore next */
  error
);
function validate7(value) {
  return validate(value) && size2(value) === 256;
}
validate7.parseError = (error) => error;

// node_modules/ox/_esm/core/Bls.js
var Bls_exports = {};
__export(Bls_exports, {
  aggregate: () => aggregate,
  getPublicKey: () => getPublicKey,
  noble: () => noble,
  randomPrivateKey: () => randomPrivateKey,
  sign: () => sign,
  verify: () => verify
});

// node_modules/ox/node_modules/@noble/curves/esm/abstract/bls.js
var _0n7 = BigInt(0);
var _1n7 = BigInt(1);
var _2n6 = BigInt(2);
var _3n3 = BigInt(3);
function NAfDecomposition(a) {
  const res = [];
  for (; a > _1n7; a >>= _1n7) {
    if ((a & _1n7) === _0n7)
      res.unshift(0);
    else if ((a & _3n3) === _3n3) {
      res.unshift(-1);
      a += _1n7;
    } else
      res.unshift(1);
  }
  return res;
}
function bls(CURVE) {
  const { Fp: Fp3, Fr: Fr2, Fp2: Fp22, Fp6: Fp62, Fp12: Fp122 } = CURVE.fields;
  const BLS_X_IS_NEGATIVE = CURVE.params.xNegative;
  const TWIST = CURVE.params.twistType;
  const G1_ = weierstrassPoints({ n: Fr2.ORDER, ...CURVE.G1 });
  const G1 = Object.assign(G1_, createHasher(G1_.ProjectivePoint, CURVE.G1.mapToCurve, {
    ...CURVE.htfDefaults,
    ...CURVE.G1.htfDefaults
  }));
  const G2_ = weierstrassPoints({ n: Fr2.ORDER, ...CURVE.G2 });
  const G2 = Object.assign(G2_, createHasher(G2_.ProjectivePoint, CURVE.G2.mapToCurve, {
    ...CURVE.htfDefaults,
    ...CURVE.G2.htfDefaults
  }));
  let lineFunction;
  if (TWIST === "multiplicative") {
    lineFunction = (c0, c1, c2, f2, Px, Py) => Fp122.mul014(f2, c0, Fp22.mul(c1, Px), Fp22.mul(c2, Py));
  } else if (TWIST === "divisive") {
    lineFunction = (c0, c1, c2, f2, Px, Py) => Fp122.mul034(f2, Fp22.mul(c2, Py), Fp22.mul(c1, Px), c0);
  } else
    throw new Error("bls: unknown twist type");
  const Fp2div2 = Fp22.div(Fp22.ONE, Fp22.mul(Fp22.ONE, _2n6));
  function pointDouble(ell, Rx, Ry, Rz) {
    const t0 = Fp22.sqr(Ry);
    const t1 = Fp22.sqr(Rz);
    const t2 = Fp22.mulByB(Fp22.mul(t1, _3n3));
    const t3 = Fp22.mul(t2, _3n3);
    const t4 = Fp22.sub(Fp22.sub(Fp22.sqr(Fp22.add(Ry, Rz)), t1), t0);
    const c0 = Fp22.sub(t2, t0);
    const c1 = Fp22.mul(Fp22.sqr(Rx), _3n3);
    const c2 = Fp22.neg(t4);
    ell.push([c0, c1, c2]);
    Rx = Fp22.mul(Fp22.mul(Fp22.mul(Fp22.sub(t0, t3), Rx), Ry), Fp2div2);
    Ry = Fp22.sub(Fp22.sqr(Fp22.mul(Fp22.add(t0, t3), Fp2div2)), Fp22.mul(Fp22.sqr(t2), _3n3));
    Rz = Fp22.mul(t0, t4);
    return { Rx, Ry, Rz };
  }
  function pointAdd(ell, Rx, Ry, Rz, Qx, Qy) {
    const t0 = Fp22.sub(Ry, Fp22.mul(Qy, Rz));
    const t1 = Fp22.sub(Rx, Fp22.mul(Qx, Rz));
    const c0 = Fp22.sub(Fp22.mul(t0, Qx), Fp22.mul(t1, Qy));
    const c1 = Fp22.neg(t0);
    const c2 = t1;
    ell.push([c0, c1, c2]);
    const t2 = Fp22.sqr(t1);
    const t3 = Fp22.mul(t2, t1);
    const t4 = Fp22.mul(t2, Rx);
    const t5 = Fp22.add(Fp22.sub(t3, Fp22.mul(t4, _2n6)), Fp22.mul(Fp22.sqr(t0), Rz));
    Rx = Fp22.mul(t1, t5);
    Ry = Fp22.sub(Fp22.mul(Fp22.sub(t4, t5), t0), Fp22.mul(t3, Ry));
    Rz = Fp22.mul(Rz, t3);
    return { Rx, Ry, Rz };
  }
  const ATE_NAF = NAfDecomposition(CURVE.params.ateLoopSize);
  const calcPairingPrecomputes = memoized((point) => {
    const p = point;
    const { x, y } = p.toAffine();
    const Qx = x, Qy = y, negQy = Fp22.neg(y);
    let Rx = Qx, Ry = Qy, Rz = Fp22.ONE;
    const ell = [];
    for (const bit of ATE_NAF) {
      const cur = [];
      ({ Rx, Ry, Rz } = pointDouble(cur, Rx, Ry, Rz));
      if (bit)
        ({ Rx, Ry, Rz } = pointAdd(cur, Rx, Ry, Rz, Qx, bit === -1 ? negQy : Qy));
      ell.push(cur);
    }
    if (CURVE.postPrecompute) {
      const last = ell[ell.length - 1];
      CURVE.postPrecompute(Rx, Ry, Rz, Qx, Qy, pointAdd.bind(null, last));
    }
    return ell;
  });
  function millerLoopBatch(pairs, withFinalExponent = false) {
    let f12 = Fp122.ONE;
    if (pairs.length) {
      const ellLen = pairs[0][0].length;
      for (let i = 0; i < ellLen; i++) {
        f12 = Fp122.sqr(f12);
        for (const [ell, Px, Py] of pairs) {
          for (const [c0, c1, c2] of ell[i])
            f12 = lineFunction(c0, c1, c2, f12, Px, Py);
        }
      }
    }
    if (BLS_X_IS_NEGATIVE)
      f12 = Fp122.conjugate(f12);
    return withFinalExponent ? Fp122.finalExponentiate(f12) : f12;
  }
  function pairingBatch(pairs, withFinalExponent = true) {
    const res = [];
    G1.ProjectivePoint.normalizeZ(pairs.map(({ g1 }) => g1));
    G2.ProjectivePoint.normalizeZ(pairs.map(({ g2 }) => g2));
    for (const { g1, g2 } of pairs) {
      if (g1.equals(G1.ProjectivePoint.ZERO) || g2.equals(G2.ProjectivePoint.ZERO))
        throw new Error("pairing is not available for ZERO point");
      g1.assertValidity();
      g2.assertValidity();
      const Qa = g1.toAffine();
      res.push([calcPairingPrecomputes(g2), Qa.x, Qa.y]);
    }
    return millerLoopBatch(res, withFinalExponent);
  }
  function pairing(Q, P, withFinalExponent = true) {
    return pairingBatch([{ g1: Q, g2: P }], withFinalExponent);
  }
  const utils = {
    randomPrivateKey: () => {
      const length = getMinHashLength(Fr2.ORDER);
      return mapHashToField(CURVE.randomBytes(length), Fr2.ORDER);
    },
    calcPairingPrecomputes
  };
  const { ShortSignature } = CURVE.G1;
  const { Signature } = CURVE.G2;
  function normP1(point) {
    return point instanceof G1.ProjectivePoint ? point : G1.ProjectivePoint.fromHex(point);
  }
  function normP1Hash(point, htfOpts) {
    return point instanceof G1.ProjectivePoint ? point : G1.hashToCurve(ensureBytes("point", point), htfOpts);
  }
  function normP2(point) {
    return point instanceof G2.ProjectivePoint ? point : Signature.fromHex(point);
  }
  function normP2Hash(point, htfOpts) {
    return point instanceof G2.ProjectivePoint ? point : G2.hashToCurve(ensureBytes("point", point), htfOpts);
  }
  function getPublicKey4(privateKey) {
    return G1.ProjectivePoint.fromPrivateKey(privateKey).toRawBytes(true);
  }
  function getPublicKeyForShortSignatures(privateKey) {
    return G2.ProjectivePoint.fromPrivateKey(privateKey).toRawBytes(true);
  }
  function sign6(message, privateKey, htfOpts) {
    const msgPoint = normP2Hash(message, htfOpts);
    msgPoint.assertValidity();
    const sigPoint = msgPoint.multiply(G1.normPrivateKeyToScalar(privateKey));
    if (message instanceof G2.ProjectivePoint)
      return sigPoint;
    return Signature.toRawBytes(sigPoint);
  }
  function signShortSignature(message, privateKey, htfOpts) {
    const msgPoint = normP1Hash(message, htfOpts);
    msgPoint.assertValidity();
    const sigPoint = msgPoint.multiply(G1.normPrivateKeyToScalar(privateKey));
    if (message instanceof G1.ProjectivePoint)
      return sigPoint;
    return ShortSignature.toRawBytes(sigPoint);
  }
  function verify6(signature, message, publicKey, htfOpts) {
    const P = normP1(publicKey);
    const Hm = normP2Hash(message, htfOpts);
    const G = G1.ProjectivePoint.BASE;
    const S = normP2(signature);
    const exp = pairingBatch([
      { g1: P.negate(), g2: Hm },
      // ePHM = pairing(P.negate(), Hm, false);
      { g1: G, g2: S }
      // eGS = pairing(G, S, false);
    ]);
    return Fp122.eql(exp, Fp122.ONE);
  }
  function verifyShortSignature(signature, message, publicKey, htfOpts) {
    const P = normP2(publicKey);
    const Hm = normP1Hash(message, htfOpts);
    const G = G2.ProjectivePoint.BASE;
    const S = normP1(signature);
    const exp = pairingBatch([
      { g1: Hm, g2: P },
      // eHmP = pairing(Hm, P, false);
      { g1: S, g2: G.negate() }
      // eSG = pairing(S, G.negate(), false);
    ]);
    return Fp122.eql(exp, Fp122.ONE);
  }
  function aNonEmpty(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
      throw new Error("expected non-empty array");
  }
  function aggregatePublicKeys(publicKeys) {
    aNonEmpty(publicKeys);
    const agg = publicKeys.map(normP1).reduce((sum, p) => sum.add(p), G1.ProjectivePoint.ZERO);
    const aggAffine = agg;
    if (publicKeys[0] instanceof G1.ProjectivePoint) {
      aggAffine.assertValidity();
      return aggAffine;
    }
    return aggAffine.toRawBytes(true);
  }
  function aggregateSignatures(signatures) {
    aNonEmpty(signatures);
    const agg = signatures.map(normP2).reduce((sum, s) => sum.add(s), G2.ProjectivePoint.ZERO);
    const aggAffine = agg;
    if (signatures[0] instanceof G2.ProjectivePoint) {
      aggAffine.assertValidity();
      return aggAffine;
    }
    return Signature.toRawBytes(aggAffine);
  }
  function aggregateShortSignatures(signatures) {
    aNonEmpty(signatures);
    const agg = signatures.map(normP1).reduce((sum, s) => sum.add(s), G1.ProjectivePoint.ZERO);
    const aggAffine = agg;
    if (signatures[0] instanceof G1.ProjectivePoint) {
      aggAffine.assertValidity();
      return aggAffine;
    }
    return ShortSignature.toRawBytes(aggAffine);
  }
  function verifyBatch(signature, messages, publicKeys, htfOpts) {
    aNonEmpty(messages);
    if (publicKeys.length !== messages.length)
      throw new Error("amount of public keys and messages should be equal");
    const sig = normP2(signature);
    const nMessages = messages.map((i) => normP2Hash(i, htfOpts));
    const nPublicKeys = publicKeys.map(normP1);
    const messagePubKeyMap = /* @__PURE__ */ new Map();
    for (let i = 0; i < nPublicKeys.length; i++) {
      const pub = nPublicKeys[i];
      const msg = nMessages[i];
      let keys = messagePubKeyMap.get(msg);
      if (keys === void 0) {
        keys = [];
        messagePubKeyMap.set(msg, keys);
      }
      keys.push(pub);
    }
    const paired = [];
    try {
      for (const [msg, keys] of messagePubKeyMap) {
        const groupPublicKey = keys.reduce((acc, msg2) => acc.add(msg2));
        paired.push({ g1: groupPublicKey, g2: msg });
      }
      paired.push({ g1: G1.ProjectivePoint.BASE.negate(), g2: sig });
      return Fp122.eql(pairingBatch(paired), Fp122.ONE);
    } catch {
      return false;
    }
  }
  G1.ProjectivePoint.BASE._setWindowSize(4);
  return {
    getPublicKey: getPublicKey4,
    getPublicKeyForShortSignatures,
    sign: sign6,
    signShortSignature,
    verify: verify6,
    verifyBatch,
    verifyShortSignature,
    aggregatePublicKeys,
    aggregateSignatures,
    aggregateShortSignatures,
    millerLoopBatch,
    pairing,
    pairingBatch,
    G1,
    G2,
    Signature,
    ShortSignature,
    fields: {
      Fr: Fr2,
      Fp: Fp3,
      Fp2: Fp22,
      Fp6: Fp62,
      Fp12: Fp122
    },
    params: {
      ateLoopSize: CURVE.params.ateLoopSize,
      r: CURVE.params.r,
      G1b: CURVE.G1.b,
      G2b: CURVE.G2.b
    },
    utils
  };
}

// node_modules/ox/node_modules/@noble/curves/esm/abstract/tower.js
var _0n8 = BigInt(0);
var _1n8 = BigInt(1);
var _2n7 = BigInt(2);
var _3n4 = BigInt(3);
function calcFrobeniusCoefficients(Fp3, nonResidue, modulus, degree, num2 = 1, divisor) {
  const _divisor = BigInt(divisor === void 0 ? degree : divisor);
  const towerModulus = modulus ** BigInt(degree);
  const res = [];
  for (let i = 0; i < num2; i++) {
    const a = BigInt(i + 1);
    const powers = [];
    for (let j = 0, qPower = _1n8; j < degree; j++) {
      const power = (a * qPower - a) / _divisor % towerModulus;
      powers.push(Fp3.pow(nonResidue, power));
      qPower *= modulus;
    }
    res.push(powers);
  }
  return res;
}
function psiFrobenius(Fp3, Fp22, base3) {
  const PSI_X = Fp22.pow(base3, (Fp3.ORDER - _1n8) / _3n4);
  const PSI_Y = Fp22.pow(base3, (Fp3.ORDER - _1n8) / _2n7);
  function psi(x, y) {
    const x2 = Fp22.mul(Fp22.frobeniusMap(x, 1), PSI_X);
    const y2 = Fp22.mul(Fp22.frobeniusMap(y, 1), PSI_Y);
    return [x2, y2];
  }
  const PSI2_X = Fp22.pow(base3, (Fp3.ORDER ** _2n7 - _1n8) / _3n4);
  const PSI2_Y = Fp22.pow(base3, (Fp3.ORDER ** _2n7 - _1n8) / _2n7);
  if (!Fp22.eql(PSI2_Y, Fp22.neg(Fp22.ONE)))
    throw new Error("psiFrobenius: PSI2_Y!==-1");
  function psi2(x, y) {
    return [Fp22.mul(x, PSI2_X), Fp22.neg(y)];
  }
  const mapAffine = (fn) => (c, P) => {
    const affine = P.toAffine();
    const p = fn(affine.x, affine.y);
    return c.fromAffine({ x: p[0], y: p[1] });
  };
  const G2psi3 = mapAffine(psi);
  const G2psi22 = mapAffine(psi2);
  return { psi, psi2, G2psi: G2psi3, G2psi2: G2psi22, PSI_X, PSI_Y, PSI2_X, PSI2_Y };
}
function tower12(opts) {
  const { ORDER } = opts;
  const Fp3 = Field(ORDER);
  const FpNONRESIDUE = Fp3.create(opts.NONRESIDUE || BigInt(-1));
  const FpLegendre2 = FpLegendre(ORDER);
  const Fpdiv2 = Fp3.div(Fp3.ONE, _2n7);
  const FP2_FROBENIUS_COEFFICIENTS = calcFrobeniusCoefficients(Fp3, FpNONRESIDUE, Fp3.ORDER, 2)[0];
  const Fp2Add = ({ c0, c1 }, { c0: r0, c1: r1 }) => ({
    c0: Fp3.add(c0, r0),
    c1: Fp3.add(c1, r1)
  });
  const Fp2Subtract = ({ c0, c1 }, { c0: r0, c1: r1 }) => ({
    c0: Fp3.sub(c0, r0),
    c1: Fp3.sub(c1, r1)
  });
  const Fp2Multiply = ({ c0, c1 }, rhs) => {
    if (typeof rhs === "bigint")
      return { c0: Fp3.mul(c0, rhs), c1: Fp3.mul(c1, rhs) };
    const { c0: r0, c1: r1 } = rhs;
    let t1 = Fp3.mul(c0, r0);
    let t2 = Fp3.mul(c1, r1);
    const o0 = Fp3.sub(t1, t2);
    const o1 = Fp3.sub(Fp3.mul(Fp3.add(c0, c1), Fp3.add(r0, r1)), Fp3.add(t1, t2));
    return { c0: o0, c1: o1 };
  };
  const Fp2Square = ({ c0, c1 }) => {
    const a = Fp3.add(c0, c1);
    const b = Fp3.sub(c0, c1);
    const c = Fp3.add(c0, c0);
    return { c0: Fp3.mul(a, b), c1: Fp3.mul(c, c1) };
  };
  const Fp2fromBigTuple = (tuple) => {
    if (tuple.length !== 2)
      throw new Error("invalid tuple");
    const fps = tuple.map((n) => Fp3.create(n));
    return { c0: fps[0], c1: fps[1] };
  };
  const FP2_ORDER = ORDER * ORDER;
  const Fp2Nonresidue = Fp2fromBigTuple(opts.FP2_NONRESIDUE);
  const Fp22 = {
    ORDER: FP2_ORDER,
    NONRESIDUE: Fp2Nonresidue,
    BITS: bitLen(FP2_ORDER),
    BYTES: Math.ceil(bitLen(FP2_ORDER) / 8),
    MASK: bitMask(bitLen(FP2_ORDER)),
    ZERO: { c0: Fp3.ZERO, c1: Fp3.ZERO },
    ONE: { c0: Fp3.ONE, c1: Fp3.ZERO },
    create: (num2) => num2,
    isValid: ({ c0, c1 }) => typeof c0 === "bigint" && typeof c1 === "bigint",
    is0: ({ c0, c1 }) => Fp3.is0(c0) && Fp3.is0(c1),
    eql: ({ c0, c1 }, { c0: r0, c1: r1 }) => Fp3.eql(c0, r0) && Fp3.eql(c1, r1),
    neg: ({ c0, c1 }) => ({ c0: Fp3.neg(c0), c1: Fp3.neg(c1) }),
    pow: (num2, power) => FpPow(Fp22, num2, power),
    invertBatch: (nums) => FpInvertBatch(Fp22, nums),
    // Normalized
    add: Fp2Add,
    sub: Fp2Subtract,
    mul: Fp2Multiply,
    sqr: Fp2Square,
    // NonNormalized stuff
    addN: Fp2Add,
    subN: Fp2Subtract,
    mulN: Fp2Multiply,
    sqrN: Fp2Square,
    // Why inversion for bigint inside Fp instead of Fp2? it is even used in that context?
    div: (lhs, rhs) => Fp22.mul(lhs, typeof rhs === "bigint" ? Fp3.inv(Fp3.create(rhs)) : Fp22.inv(rhs)),
    inv: ({ c0: a, c1: b }) => {
      const factor = Fp3.inv(Fp3.create(a * a + b * b));
      return { c0: Fp3.mul(factor, Fp3.create(a)), c1: Fp3.mul(factor, Fp3.create(-b)) };
    },
    sqrt: (num2) => {
      if (opts.Fp2sqrt)
        return opts.Fp2sqrt(num2);
      const { c0, c1 } = num2;
      if (Fp3.is0(c1)) {
        if (Fp3.eql(FpLegendre2(Fp3, c0), Fp3.ONE))
          return Fp22.create({ c0: Fp3.sqrt(c0), c1: Fp3.ZERO });
        else
          return Fp22.create({ c0: Fp3.ZERO, c1: Fp3.sqrt(Fp3.div(c0, FpNONRESIDUE)) });
      }
      const a = Fp3.sqrt(Fp3.sub(Fp3.sqr(c0), Fp3.mul(Fp3.sqr(c1), FpNONRESIDUE)));
      let d = Fp3.mul(Fp3.add(a, c0), Fpdiv2);
      const legendre = FpLegendre2(Fp3, d);
      if (!Fp3.is0(legendre) && !Fp3.eql(legendre, Fp3.ONE))
        d = Fp3.sub(d, a);
      const a0 = Fp3.sqrt(d);
      const candidateSqrt = Fp22.create({ c0: a0, c1: Fp3.div(Fp3.mul(c1, Fpdiv2), a0) });
      if (!Fp22.eql(Fp22.sqr(candidateSqrt), num2))
        throw new Error("Cannot find square root");
      const x1 = candidateSqrt;
      const x2 = Fp22.neg(x1);
      const { re: re1, im: im1 } = Fp22.reim(x1);
      const { re: re2, im: im2 } = Fp22.reim(x2);
      if (im1 > im2 || im1 === im2 && re1 > re2)
        return x1;
      return x2;
    },
    // Same as sgn0_m_eq_2 in RFC 9380
    isOdd: (x) => {
      const { re: x0, im: x1 } = Fp22.reim(x);
      const sign_0 = x0 % _2n7;
      const zero_0 = x0 === _0n8;
      const sign_1 = x1 % _2n7;
      return BigInt(sign_0 || zero_0 && sign_1) == _1n8;
    },
    // Bytes util
    fromBytes(b) {
      if (b.length !== Fp22.BYTES)
        throw new Error("fromBytes invalid length=" + b.length);
      return { c0: Fp3.fromBytes(b.subarray(0, Fp3.BYTES)), c1: Fp3.fromBytes(b.subarray(Fp3.BYTES)) };
    },
    toBytes: ({ c0, c1 }) => concatBytes(Fp3.toBytes(c0), Fp3.toBytes(c1)),
    cmov: ({ c0, c1 }, { c0: r0, c1: r1 }, c) => ({
      c0: Fp3.cmov(c0, r0, c),
      c1: Fp3.cmov(c1, r1, c)
    }),
    reim: ({ c0, c1 }) => ({ re: c0, im: c1 }),
    // multiply by u + 1
    mulByNonresidue: ({ c0, c1 }) => Fp22.mul({ c0, c1 }, Fp2Nonresidue),
    mulByB: opts.Fp2mulByB,
    fromBigTuple: Fp2fromBigTuple,
    frobeniusMap: ({ c0, c1 }, power) => ({
      c0,
      c1: Fp3.mul(c1, FP2_FROBENIUS_COEFFICIENTS[power % 2])
    })
  };
  const Fp6Add = ({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }) => ({
    c0: Fp22.add(c0, r0),
    c1: Fp22.add(c1, r1),
    c2: Fp22.add(c2, r2)
  });
  const Fp6Subtract = ({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }) => ({
    c0: Fp22.sub(c0, r0),
    c1: Fp22.sub(c1, r1),
    c2: Fp22.sub(c2, r2)
  });
  const Fp6Multiply = ({ c0, c1, c2 }, rhs) => {
    if (typeof rhs === "bigint") {
      return {
        c0: Fp22.mul(c0, rhs),
        c1: Fp22.mul(c1, rhs),
        c2: Fp22.mul(c2, rhs)
      };
    }
    const { c0: r0, c1: r1, c2: r2 } = rhs;
    const t0 = Fp22.mul(c0, r0);
    const t1 = Fp22.mul(c1, r1);
    const t2 = Fp22.mul(c2, r2);
    return {
      // t0 + (c1 + c2) * (r1 * r2) - (T1 + T2) * (u + 1)
      c0: Fp22.add(t0, Fp22.mulByNonresidue(Fp22.sub(Fp22.mul(Fp22.add(c1, c2), Fp22.add(r1, r2)), Fp22.add(t1, t2)))),
      // (c0 + c1) * (r0 + r1) - (T0 + T1) + T2 * (u + 1)
      c1: Fp22.add(Fp22.sub(Fp22.mul(Fp22.add(c0, c1), Fp22.add(r0, r1)), Fp22.add(t0, t1)), Fp22.mulByNonresidue(t2)),
      // T1 + (c0 + c2) * (r0 + r2) - T0 + T2
      c2: Fp22.sub(Fp22.add(t1, Fp22.mul(Fp22.add(c0, c2), Fp22.add(r0, r2))), Fp22.add(t0, t2))
    };
  };
  const Fp6Square = ({ c0, c1, c2 }) => {
    let t0 = Fp22.sqr(c0);
    let t1 = Fp22.mul(Fp22.mul(c0, c1), _2n7);
    let t3 = Fp22.mul(Fp22.mul(c1, c2), _2n7);
    let t4 = Fp22.sqr(c2);
    return {
      c0: Fp22.add(Fp22.mulByNonresidue(t3), t0),
      // T3 * (u + 1) + T0
      c1: Fp22.add(Fp22.mulByNonresidue(t4), t1),
      // T4 * (u + 1) + T1
      // T1 + (c0 - c1 + c2)² + T3 - T0 - T4
      c2: Fp22.sub(Fp22.sub(Fp22.add(Fp22.add(t1, Fp22.sqr(Fp22.add(Fp22.sub(c0, c1), c2))), t3), t0), t4)
    };
  };
  const [FP6_FROBENIUS_COEFFICIENTS_1, FP6_FROBENIUS_COEFFICIENTS_2] = calcFrobeniusCoefficients(Fp22, Fp2Nonresidue, Fp3.ORDER, 6, 2, 3);
  const Fp62 = {
    ORDER: Fp22.ORDER,
    // TODO: unused, but need to verify
    BITS: 3 * Fp22.BITS,
    BYTES: 3 * Fp22.BYTES,
    MASK: bitMask(3 * Fp22.BITS),
    ZERO: { c0: Fp22.ZERO, c1: Fp22.ZERO, c2: Fp22.ZERO },
    ONE: { c0: Fp22.ONE, c1: Fp22.ZERO, c2: Fp22.ZERO },
    create: (num2) => num2,
    isValid: ({ c0, c1, c2 }) => Fp22.isValid(c0) && Fp22.isValid(c1) && Fp22.isValid(c2),
    is0: ({ c0, c1, c2 }) => Fp22.is0(c0) && Fp22.is0(c1) && Fp22.is0(c2),
    neg: ({ c0, c1, c2 }) => ({ c0: Fp22.neg(c0), c1: Fp22.neg(c1), c2: Fp22.neg(c2) }),
    eql: ({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }) => Fp22.eql(c0, r0) && Fp22.eql(c1, r1) && Fp22.eql(c2, r2),
    sqrt: notImplemented,
    // Do we need division by bigint at all? Should be done via order:
    div: (lhs, rhs) => Fp62.mul(lhs, typeof rhs === "bigint" ? Fp3.inv(Fp3.create(rhs)) : Fp62.inv(rhs)),
    pow: (num2, power) => FpPow(Fp62, num2, power),
    invertBatch: (nums) => FpInvertBatch(Fp62, nums),
    // Normalized
    add: Fp6Add,
    sub: Fp6Subtract,
    mul: Fp6Multiply,
    sqr: Fp6Square,
    // NonNormalized stuff
    addN: Fp6Add,
    subN: Fp6Subtract,
    mulN: Fp6Multiply,
    sqrN: Fp6Square,
    inv: ({ c0, c1, c2 }) => {
      let t0 = Fp22.sub(Fp22.sqr(c0), Fp22.mulByNonresidue(Fp22.mul(c2, c1)));
      let t1 = Fp22.sub(Fp22.mulByNonresidue(Fp22.sqr(c2)), Fp22.mul(c0, c1));
      let t2 = Fp22.sub(Fp22.sqr(c1), Fp22.mul(c0, c2));
      let t4 = Fp22.inv(Fp22.add(Fp22.mulByNonresidue(Fp22.add(Fp22.mul(c2, t1), Fp22.mul(c1, t2))), Fp22.mul(c0, t0)));
      return { c0: Fp22.mul(t4, t0), c1: Fp22.mul(t4, t1), c2: Fp22.mul(t4, t2) };
    },
    // Bytes utils
    fromBytes: (b) => {
      if (b.length !== Fp62.BYTES)
        throw new Error("fromBytes invalid length=" + b.length);
      return {
        c0: Fp22.fromBytes(b.subarray(0, Fp22.BYTES)),
        c1: Fp22.fromBytes(b.subarray(Fp22.BYTES, 2 * Fp22.BYTES)),
        c2: Fp22.fromBytes(b.subarray(2 * Fp22.BYTES))
      };
    },
    toBytes: ({ c0, c1, c2 }) => concatBytes(Fp22.toBytes(c0), Fp22.toBytes(c1), Fp22.toBytes(c2)),
    cmov: ({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }, c) => ({
      c0: Fp22.cmov(c0, r0, c),
      c1: Fp22.cmov(c1, r1, c),
      c2: Fp22.cmov(c2, r2, c)
    }),
    fromBigSix: (t) => {
      if (!Array.isArray(t) || t.length !== 6)
        throw new Error("invalid Fp6 usage");
      return {
        c0: Fp22.fromBigTuple(t.slice(0, 2)),
        c1: Fp22.fromBigTuple(t.slice(2, 4)),
        c2: Fp22.fromBigTuple(t.slice(4, 6))
      };
    },
    frobeniusMap: ({ c0, c1, c2 }, power) => ({
      c0: Fp22.frobeniusMap(c0, power),
      c1: Fp22.mul(Fp22.frobeniusMap(c1, power), FP6_FROBENIUS_COEFFICIENTS_1[power % 6]),
      c2: Fp22.mul(Fp22.frobeniusMap(c2, power), FP6_FROBENIUS_COEFFICIENTS_2[power % 6])
    }),
    mulByFp2: ({ c0, c1, c2 }, rhs) => ({
      c0: Fp22.mul(c0, rhs),
      c1: Fp22.mul(c1, rhs),
      c2: Fp22.mul(c2, rhs)
    }),
    mulByNonresidue: ({ c0, c1, c2 }) => ({ c0: Fp22.mulByNonresidue(c2), c1: c0, c2: c1 }),
    // Sparse multiplication
    mul1: ({ c0, c1, c2 }, b1) => ({
      c0: Fp22.mulByNonresidue(Fp22.mul(c2, b1)),
      c1: Fp22.mul(c0, b1),
      c2: Fp22.mul(c1, b1)
    }),
    // Sparse multiplication
    mul01({ c0, c1, c2 }, b0, b1) {
      let t0 = Fp22.mul(c0, b0);
      let t1 = Fp22.mul(c1, b1);
      return {
        // ((c1 + c2) * b1 - T1) * (u + 1) + T0
        c0: Fp22.add(Fp22.mulByNonresidue(Fp22.sub(Fp22.mul(Fp22.add(c1, c2), b1), t1)), t0),
        // (b0 + b1) * (c0 + c1) - T0 - T1
        c1: Fp22.sub(Fp22.sub(Fp22.mul(Fp22.add(b0, b1), Fp22.add(c0, c1)), t0), t1),
        // (c0 + c2) * b0 - T0 + T1
        c2: Fp22.add(Fp22.sub(Fp22.mul(Fp22.add(c0, c2), b0), t0), t1)
      };
    }
  };
  const FP12_FROBENIUS_COEFFICIENTS = calcFrobeniusCoefficients(Fp22, Fp2Nonresidue, Fp3.ORDER, 12, 1, 6)[0];
  const Fp12Add = ({ c0, c1 }, { c0: r0, c1: r1 }) => ({
    c0: Fp62.add(c0, r0),
    c1: Fp62.add(c1, r1)
  });
  const Fp12Subtract = ({ c0, c1 }, { c0: r0, c1: r1 }) => ({
    c0: Fp62.sub(c0, r0),
    c1: Fp62.sub(c1, r1)
  });
  const Fp12Multiply = ({ c0, c1 }, rhs) => {
    if (typeof rhs === "bigint")
      return { c0: Fp62.mul(c0, rhs), c1: Fp62.mul(c1, rhs) };
    let { c0: r0, c1: r1 } = rhs;
    let t1 = Fp62.mul(c0, r0);
    let t2 = Fp62.mul(c1, r1);
    return {
      c0: Fp62.add(t1, Fp62.mulByNonresidue(t2)),
      // T1 + T2 * v
      // (c0 + c1) * (r0 + r1) - (T1 + T2)
      c1: Fp62.sub(Fp62.mul(Fp62.add(c0, c1), Fp62.add(r0, r1)), Fp62.add(t1, t2))
    };
  };
  const Fp12Square = ({ c0, c1 }) => {
    let ab = Fp62.mul(c0, c1);
    return {
      // (c1 * v + c0) * (c0 + c1) - AB - AB * v
      c0: Fp62.sub(Fp62.sub(Fp62.mul(Fp62.add(Fp62.mulByNonresidue(c1), c0), Fp62.add(c0, c1)), ab), Fp62.mulByNonresidue(ab)),
      c1: Fp62.add(ab, ab)
    };
  };
  function Fp4Square2(a, b) {
    const a2 = Fp22.sqr(a);
    const b2 = Fp22.sqr(b);
    return {
      first: Fp22.add(Fp22.mulByNonresidue(b2), a2),
      // b² * Nonresidue + a²
      second: Fp22.sub(Fp22.sub(Fp22.sqr(Fp22.add(a, b)), a2), b2)
      // (a + b)² - a² - b²
    };
  }
  const Fp122 = {
    ORDER: Fp22.ORDER,
    // TODO: unused, but need to verify
    BITS: 2 * Fp22.BITS,
    BYTES: 2 * Fp22.BYTES,
    MASK: bitMask(2 * Fp22.BITS),
    ZERO: { c0: Fp62.ZERO, c1: Fp62.ZERO },
    ONE: { c0: Fp62.ONE, c1: Fp62.ZERO },
    create: (num2) => num2,
    isValid: ({ c0, c1 }) => Fp62.isValid(c0) && Fp62.isValid(c1),
    is0: ({ c0, c1 }) => Fp62.is0(c0) && Fp62.is0(c1),
    neg: ({ c0, c1 }) => ({ c0: Fp62.neg(c0), c1: Fp62.neg(c1) }),
    eql: ({ c0, c1 }, { c0: r0, c1: r1 }) => Fp62.eql(c0, r0) && Fp62.eql(c1, r1),
    sqrt: notImplemented,
    inv: ({ c0, c1 }) => {
      let t = Fp62.inv(Fp62.sub(Fp62.sqr(c0), Fp62.mulByNonresidue(Fp62.sqr(c1))));
      return { c0: Fp62.mul(c0, t), c1: Fp62.neg(Fp62.mul(c1, t)) };
    },
    div: (lhs, rhs) => Fp122.mul(lhs, typeof rhs === "bigint" ? Fp3.inv(Fp3.create(rhs)) : Fp122.inv(rhs)),
    pow: (num2, power) => FpPow(Fp122, num2, power),
    invertBatch: (nums) => FpInvertBatch(Fp122, nums),
    // Normalized
    add: Fp12Add,
    sub: Fp12Subtract,
    mul: Fp12Multiply,
    sqr: Fp12Square,
    // NonNormalized stuff
    addN: Fp12Add,
    subN: Fp12Subtract,
    mulN: Fp12Multiply,
    sqrN: Fp12Square,
    // Bytes utils
    fromBytes: (b) => {
      if (b.length !== Fp122.BYTES)
        throw new Error("fromBytes invalid length=" + b.length);
      return {
        c0: Fp62.fromBytes(b.subarray(0, Fp62.BYTES)),
        c1: Fp62.fromBytes(b.subarray(Fp62.BYTES))
      };
    },
    toBytes: ({ c0, c1 }) => concatBytes(Fp62.toBytes(c0), Fp62.toBytes(c1)),
    cmov: ({ c0, c1 }, { c0: r0, c1: r1 }, c) => ({
      c0: Fp62.cmov(c0, r0, c),
      c1: Fp62.cmov(c1, r1, c)
    }),
    // Utils
    // toString() {
    //   return '' + 'Fp12(' + this.c0 + this.c1 + '* w');
    // },
    // fromTuple(c: [Fp6, Fp6]) {
    //   return new Fp12(...c);
    // }
    fromBigTwelve: (t) => ({
      c0: Fp62.fromBigSix(t.slice(0, 6)),
      c1: Fp62.fromBigSix(t.slice(6, 12))
    }),
    // Raises to q**i -th power
    frobeniusMap(lhs, power) {
      const { c0, c1, c2 } = Fp62.frobeniusMap(lhs.c1, power);
      const coeff = FP12_FROBENIUS_COEFFICIENTS[power % 12];
      return {
        c0: Fp62.frobeniusMap(lhs.c0, power),
        c1: Fp62.create({
          c0: Fp22.mul(c0, coeff),
          c1: Fp22.mul(c1, coeff),
          c2: Fp22.mul(c2, coeff)
        })
      };
    },
    mulByFp2: ({ c0, c1 }, rhs) => ({
      c0: Fp62.mulByFp2(c0, rhs),
      c1: Fp62.mulByFp2(c1, rhs)
    }),
    conjugate: ({ c0, c1 }) => ({ c0, c1: Fp62.neg(c1) }),
    // Sparse multiplication
    mul014: ({ c0, c1 }, o0, o1, o4) => {
      let t0 = Fp62.mul01(c0, o0, o1);
      let t1 = Fp62.mul1(c1, o4);
      return {
        c0: Fp62.add(Fp62.mulByNonresidue(t1), t0),
        // T1 * v + T0
        // (c1 + c0) * [o0, o1+o4] - T0 - T1
        c1: Fp62.sub(Fp62.sub(Fp62.mul01(Fp62.add(c1, c0), o0, Fp22.add(o1, o4)), t0), t1)
      };
    },
    mul034: ({ c0, c1 }, o0, o3, o4) => {
      const a = Fp62.create({
        c0: Fp22.mul(c0.c0, o0),
        c1: Fp22.mul(c0.c1, o0),
        c2: Fp22.mul(c0.c2, o0)
      });
      const b = Fp62.mul01(c1, o3, o4);
      const e = Fp62.mul01(Fp62.add(c0, c1), Fp22.add(o0, o3), o4);
      return {
        c0: Fp62.add(Fp62.mulByNonresidue(b), a),
        c1: Fp62.sub(e, Fp62.add(a, b))
      };
    },
    // A cyclotomic group is a subgroup of Fp^n defined by
    //   GΦₙ(p) = {α ∈ Fpⁿ : α^Φₙ(p) = 1}
    // The result of any pairing is in a cyclotomic subgroup
    // https://eprint.iacr.org/2009/565.pdf
    _cyclotomicSquare: opts.Fp12cyclotomicSquare,
    _cyclotomicExp: opts.Fp12cyclotomicExp,
    // https://eprint.iacr.org/2010/354.pdf
    // https://eprint.iacr.org/2009/565.pdf
    finalExponentiate: opts.Fp12finalExponentiate
  };
  return { Fp: Fp3, Fp2: Fp22, Fp6: Fp62, Fp4Square: Fp4Square2, Fp12: Fp122 };
}

// node_modules/ox/node_modules/@noble/curves/esm/bls12-381.js
var _0n9 = BigInt(0);
var _1n9 = BigInt(1);
var _2n8 = BigInt(2);
var _3n5 = BigInt(3);
var _4n3 = BigInt(4);
var BLS_X = BigInt("0xd201000000010000");
var BLS_X_LEN = bitLen(BLS_X);
var { Fp, Fp2, Fp6, Fp4Square, Fp12 } = tower12({
  // Order of Fp
  ORDER: BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab"),
  // Finite extension field over irreducible polynominal.
  // Fp(u) / (u² - β) where β = -1
  FP2_NONRESIDUE: [_1n9, _1n9],
  Fp2mulByB: ({ c0, c1 }) => {
    const t0 = Fp.mul(c0, _4n3);
    const t1 = Fp.mul(c1, _4n3);
    return { c0: Fp.sub(t0, t1), c1: Fp.add(t0, t1) };
  },
  // Fp12
  // A cyclotomic group is a subgroup of Fp^n defined by
  //   GΦₙ(p) = {α ∈ Fpⁿ : α^Φₙ(p) = 1}
  // The result of any pairing is in a cyclotomic subgroup
  // https://eprint.iacr.org/2009/565.pdf
  Fp12cyclotomicSquare: ({ c0, c1 }) => {
    const { c0: c0c0, c1: c0c1, c2: c0c2 } = c0;
    const { c0: c1c0, c1: c1c1, c2: c1c2 } = c1;
    const { first: t3, second: t4 } = Fp4Square(c0c0, c1c1);
    const { first: t5, second: t6 } = Fp4Square(c1c0, c0c2);
    const { first: t7, second: t8 } = Fp4Square(c0c1, c1c2);
    const t9 = Fp2.mulByNonresidue(t8);
    return {
      c0: Fp6.create({
        c0: Fp2.add(Fp2.mul(Fp2.sub(t3, c0c0), _2n8), t3),
        // 2 * (T3 - c0c0)  + T3
        c1: Fp2.add(Fp2.mul(Fp2.sub(t5, c0c1), _2n8), t5),
        // 2 * (T5 - c0c1)  + T5
        c2: Fp2.add(Fp2.mul(Fp2.sub(t7, c0c2), _2n8), t7)
      }),
      // 2 * (T7 - c0c2)  + T7
      c1: Fp6.create({
        c0: Fp2.add(Fp2.mul(Fp2.add(t9, c1c0), _2n8), t9),
        // 2 * (T9 + c1c0) + T9
        c1: Fp2.add(Fp2.mul(Fp2.add(t4, c1c1), _2n8), t4),
        // 2 * (T4 + c1c1) + T4
        c2: Fp2.add(Fp2.mul(Fp2.add(t6, c1c2), _2n8), t6)
      })
    };
  },
  Fp12cyclotomicExp(num2, n) {
    let z = Fp12.ONE;
    for (let i = BLS_X_LEN - 1; i >= 0; i--) {
      z = Fp12._cyclotomicSquare(z);
      if (bitGet(n, i))
        z = Fp12.mul(z, num2);
    }
    return z;
  },
  // https://eprint.iacr.org/2010/354.pdf
  // https://eprint.iacr.org/2009/565.pdf
  Fp12finalExponentiate: (num2) => {
    const x = BLS_X;
    const t0 = Fp12.div(Fp12.frobeniusMap(num2, 6), num2);
    const t1 = Fp12.mul(Fp12.frobeniusMap(t0, 2), t0);
    const t2 = Fp12.conjugate(Fp12._cyclotomicExp(t1, x));
    const t3 = Fp12.mul(Fp12.conjugate(Fp12._cyclotomicSquare(t1)), t2);
    const t4 = Fp12.conjugate(Fp12._cyclotomicExp(t3, x));
    const t5 = Fp12.conjugate(Fp12._cyclotomicExp(t4, x));
    const t6 = Fp12.mul(Fp12.conjugate(Fp12._cyclotomicExp(t5, x)), Fp12._cyclotomicSquare(t2));
    const t7 = Fp12.conjugate(Fp12._cyclotomicExp(t6, x));
    const t2_t5_pow_q2 = Fp12.frobeniusMap(Fp12.mul(t2, t5), 2);
    const t4_t1_pow_q3 = Fp12.frobeniusMap(Fp12.mul(t4, t1), 3);
    const t6_t1c_pow_q1 = Fp12.frobeniusMap(Fp12.mul(t6, Fp12.conjugate(t1)), 1);
    const t7_t3c_t1 = Fp12.mul(Fp12.mul(t7, Fp12.conjugate(t3)), t1);
    return Fp12.mul(Fp12.mul(Fp12.mul(t2_t5_pow_q2, t4_t1_pow_q3), t6_t1c_pow_q1), t7_t3c_t1);
  }
});
var Fr = Field(BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001"));
var isogenyMapG2 = isogenyMap(Fp2, [
  // xNum
  [
    [
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6",
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6"
    ],
    [
      "0x0",
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71a"
    ],
    [
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71e",
      "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38d"
    ],
    [
      "0x171d6541fa38ccfaed6dea691f5fb614cb14b4e7f4e810aa22d6108f142b85757098e38d0f671c7188e2aaaaaaaa5ed1",
      "0x0"
    ]
  ],
  // xDen
  [
    [
      "0x0",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa63"
    ],
    [
      "0xc",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa9f"
    ],
    ["0x1", "0x0"]
    // LAST 1
  ],
  // yNum
  [
    [
      "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706",
      "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706"
    ],
    [
      "0x0",
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97be"
    ],
    [
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71c",
      "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38f"
    ],
    [
      "0x124c9ad43b6cf79bfbf7043de3811ad0761b0f37a1e26286b0e977c69aa274524e79097a56dc4bd9e1b371c71c718b10",
      "0x0"
    ]
  ],
  // yDen
  [
    [
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb"
    ],
    [
      "0x0",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa9d3"
    ],
    [
      "0x12",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa99"
    ],
    ["0x1", "0x0"]
    // LAST 1
  ]
].map((i) => i.map((pair) => Fp2.fromBigTuple(pair.map(BigInt)))));
var isogenyMapG1 = isogenyMap(Fp, [
  // xNum
  [
    "0x11a05f2b1e833340b809101dd99815856b303e88a2d7005ff2627b56cdb4e2c85610c2d5f2e62d6eaeac1662734649b7",
    "0x17294ed3e943ab2f0588bab22147a81c7c17e75b2f6a8417f565e33c70d1e86b4838f2a6f318c356e834eef1b3cb83bb",
    "0xd54005db97678ec1d1048c5d10a9a1bce032473295983e56878e501ec68e25c958c3e3d2a09729fe0179f9dac9edcb0",
    "0x1778e7166fcc6db74e0609d307e55412d7f5e4656a8dbf25f1b33289f1b330835336e25ce3107193c5b388641d9b6861",
    "0xe99726a3199f4436642b4b3e4118e5499db995a1257fb3f086eeb65982fac18985a286f301e77c451154ce9ac8895d9",
    "0x1630c3250d7313ff01d1201bf7a74ab5db3cb17dd952799b9ed3ab9097e68f90a0870d2dcae73d19cd13c1c66f652983",
    "0xd6ed6553fe44d296a3726c38ae652bfb11586264f0f8ce19008e218f9c86b2a8da25128c1052ecaddd7f225a139ed84",
    "0x17b81e7701abdbe2e8743884d1117e53356de5ab275b4db1a682c62ef0f2753339b7c8f8c8f475af9ccb5618e3f0c88e",
    "0x80d3cf1f9a78fc47b90b33563be990dc43b756ce79f5574a2c596c928c5d1de4fa295f296b74e956d71986a8497e317",
    "0x169b1f8e1bcfa7c42e0c37515d138f22dd2ecb803a0c5c99676314baf4bb1b7fa3190b2edc0327797f241067be390c9e",
    "0x10321da079ce07e272d8ec09d2565b0dfa7dccdde6787f96d50af36003b14866f69b771f8c285decca67df3f1605fb7b",
    "0x6e08c248e260e70bd1e962381edee3d31d79d7e22c837bc23c0bf1bc24c6b68c24b1b80b64d391fa9c8ba2e8ba2d229"
  ],
  // xDen
  [
    "0x8ca8d548cff19ae18b2e62f4bd3fa6f01d5ef4ba35b48ba9c9588617fc8ac62b558d681be343df8993cf9fa40d21b1c",
    "0x12561a5deb559c4348b4711298e536367041e8ca0cf0800c0126c2588c48bf5713daa8846cb026e9e5c8276ec82b3bff",
    "0xb2962fe57a3225e8137e629bff2991f6f89416f5a718cd1fca64e00b11aceacd6a3d0967c94fedcfcc239ba5cb83e19",
    "0x3425581a58ae2fec83aafef7c40eb545b08243f16b1655154cca8abc28d6fd04976d5243eecf5c4130de8938dc62cd8",
    "0x13a8e162022914a80a6f1d5f43e7a07dffdfc759a12062bb8d6b44e833b306da9bd29ba81f35781d539d395b3532a21e",
    "0xe7355f8e4e667b955390f7f0506c6e9395735e9ce9cad4d0a43bcef24b8982f7400d24bc4228f11c02df9a29f6304a5",
    "0x772caacf16936190f3e0c63e0596721570f5799af53a1894e2e073062aede9cea73b3538f0de06cec2574496ee84a3a",
    "0x14a7ac2a9d64a8b230b3f5b074cf01996e7f63c21bca68a81996e1cdf9822c580fa5b9489d11e2d311f7d99bbdcc5a5e",
    "0xa10ecf6ada54f825e920b3dafc7a3cce07f8d1d7161366b74100da67f39883503826692abba43704776ec3a79a1d641",
    "0x95fc13ab9e92ad4476d6e3eb3a56680f682b4ee96f7d03776df533978f31c1593174e4b4b7865002d6384d168ecdd0a",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ],
  // yNum
  [
    "0x90d97c81ba24ee0259d1f094980dcfa11ad138e48a869522b52af6c956543d3cd0c7aee9b3ba3c2be9845719707bb33",
    "0x134996a104ee5811d51036d776fb46831223e96c254f383d0f906343eb67ad34d6c56711962fa8bfe097e75a2e41c696",
    "0xcc786baa966e66f4a384c86a3b49942552e2d658a31ce2c344be4b91400da7d26d521628b00523b8dfe240c72de1f6",
    "0x1f86376e8981c217898751ad8746757d42aa7b90eeb791c09e4a3ec03251cf9de405aba9ec61deca6355c77b0e5f4cb",
    "0x8cc03fdefe0ff135caf4fe2a21529c4195536fbe3ce50b879833fd221351adc2ee7f8dc099040a841b6daecf2e8fedb",
    "0x16603fca40634b6a2211e11db8f0a6a074a7d0d4afadb7bd76505c3d3ad5544e203f6326c95a807299b23ab13633a5f0",
    "0x4ab0b9bcfac1bbcb2c977d027796b3ce75bb8ca2be184cb5231413c4d634f3747a87ac2460f415ec961f8855fe9d6f2",
    "0x987c8d5333ab86fde9926bd2ca6c674170a05bfe3bdd81ffd038da6c26c842642f64550fedfe935a15e4ca31870fb29",
    "0x9fc4018bd96684be88c9e221e4da1bb8f3abd16679dc26c1e8b6e6a1f20cabe69d65201c78607a360370e577bdba587",
    "0xe1bba7a1186bdb5223abde7ada14a23c42a0ca7915af6fe06985e7ed1e4d43b9b3f7055dd4eba6f2bafaaebca731c30",
    "0x19713e47937cd1be0dfd0b8f1d43fb93cd2fcbcb6caf493fd1183e416389e61031bf3a5cce3fbafce813711ad011c132",
    "0x18b46a908f36f6deb918c143fed2edcc523559b8aaf0c2462e6bfe7f911f643249d9cdf41b44d606ce07c8a4d0074d8e",
    "0xb182cac101b9399d155096004f53f447aa7b12a3426b08ec02710e807b4633f06c851c1919211f20d4c04f00b971ef8",
    "0x245a394ad1eca9b72fc00ae7be315dc757b3b080d4c158013e6632d3c40659cc6cf90ad1c232a6442d9d3f5db980133",
    "0x5c129645e44cf1102a159f748c4a3fc5e673d81d7e86568d9ab0f5d396a7ce46ba1049b6579afb7866b1e715475224b",
    "0x15e6be4e990f03ce4ea50b3b42df2eb5cb181d8f84965a3957add4fa95af01b2b665027efec01c7704b456be69c8b604"
  ],
  // yDen
  [
    "0x16112c4c3a9c98b252181140fad0eae9601a6de578980be6eec3232b5be72e7a07f3688ef60c206d01479253b03663c1",
    "0x1962d75c2381201e1a0cbd6c43c348b885c84ff731c4d59ca4a10356f453e01f78a4260763529e3532f6102c2e49a03d",
    "0x58df3306640da276faaae7d6e8eb15778c4855551ae7f310c35a5dd279cd2eca6757cd636f96f891e2538b53dbf67f2",
    "0x16b7d288798e5395f20d23bf89edb4d1d115c5dbddbcd30e123da489e726af41727364f2c28297ada8d26d98445f5416",
    "0xbe0e079545f43e4b00cc912f8228ddcc6d19c9f0f69bbb0542eda0fc9dec916a20b15dc0fd2ededda39142311a5001d",
    "0x8d9e5297186db2d9fb266eaac783182b70152c65550d881c5ecd87b6f0f5a6449f38db9dfa9cce202c6477faaf9b7ac",
    "0x166007c08a99db2fc3ba8734ace9824b5eecfdfa8d0cf8ef5dd365bc400a0051d5fa9c01a58b1fb93d1a1399126a775c",
    "0x16a3ef08be3ea7ea03bcddfabba6ff6ee5a4375efa1f4fd7feb34fd206357132b920f5b00801dee460ee415a15812ed9",
    "0x1866c8ed336c61231a1be54fd1d74cc4f9fb0ce4c6af5920abc5750c4bf39b4852cfe2f7bb9248836b233d9d55535d4a",
    "0x167a55cda70a6e1cea820597d94a84903216f763e13d87bb5308592e7ea7d4fbc7385ea3d529b35e346ef48bb8913f55",
    "0x4d2f259eea405bd48f010a01ad2911d9c6dd039bb61a6290e591b36e636a5c871a5c29f4f83060400f8b49cba8f6aa8",
    "0xaccbb67481d033ff5852c1e48c50c477f94ff8aefce42d28c0f9a88cea7913516f968986f7ebbea9684b529e2561092",
    "0xad6b9514c767fe3c3613144b45f1496543346d98adf02267d5ceef9a00d9b8693000763e3b90ac11e99b138573345cc",
    "0x2660400eb2e4f3b628bdd0d53cd76f2bf565b94e72927c1cb748df27942480e420517bd8714cc80d1fadc1326ed06f7",
    "0xe0fa1d816ddc03e6b24255e0d7819c171c40f65e273b853324efcd6356caa205ca2f570f13497804415473a1d634b8f",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ]
].map((i) => i.map((j) => BigInt(j))));
var G2_SWU = mapToCurveSimpleSWU(Fp2, {
  A: Fp2.create({ c0: Fp.create(_0n9), c1: Fp.create(BigInt(240)) }),
  // A' = 240 * I
  B: Fp2.create({ c0: Fp.create(BigInt(1012)), c1: Fp.create(BigInt(1012)) }),
  // B' = 1012 * (1 + I)
  Z: Fp2.create({ c0: Fp.create(BigInt(-2)), c1: Fp.create(BigInt(-1)) })
  // Z: -(2 + I)
});
var G1_SWU = mapToCurveSimpleSWU(Fp, {
  A: Fp.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")),
  B: Fp.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")),
  Z: Fp.create(BigInt(11))
});
var { G2psi, G2psi2 } = psiFrobenius(Fp, Fp2, Fp2.div(Fp2.ONE, Fp2.NONRESIDUE));
var htfDefaults = Object.freeze({
  // DST: a domain separation tag
  // defined in section 2.2.5
  // Use utils.getDSTLabel(), utils.setDSTLabel(value)
  DST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  encodeDST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  // p: the characteristic of F
  //    where F is a finite field of characteristic p and order q = p^m
  p: Fp.ORDER,
  // m: the extension degree of F, m >= 1
  //     where F is a finite field of characteristic p and order q = p^m
  m: 2,
  // k: the target security level for the suite in bits
  // defined in section 5.1
  k: 128,
  // option to use a message that has already been processed by
  // expand_message_xmd
  expand: "xmd",
  // Hash functions for: expand_message_xmd is appropriate for use with a
  // wide range of hash functions, including SHA-2, SHA-3, BLAKE2, and others.
  // BBS+ uses blake2: https://github.com/hyperledger/aries-framework-go/issues/2247
  hash: sha2563
});
var COMPRESSED_ZERO = setMask(Fp.toBytes(_0n9), { infinity: true, compressed: true });
function parseMask(bytes) {
  bytes = bytes.slice();
  const mask = bytes[0] & 224;
  const compressed = !!(mask >> 7 & 1);
  const infinity = !!(mask >> 6 & 1);
  const sort = !!(mask >> 5 & 1);
  bytes[0] &= 31;
  return { compressed, infinity, sort, value: bytes };
}
function setMask(bytes, mask) {
  if (bytes[0] & 224)
    throw new Error("setMask: non-empty mask");
  if (mask.compressed)
    bytes[0] |= 128;
  if (mask.infinity)
    bytes[0] |= 64;
  if (mask.sort)
    bytes[0] |= 32;
  return bytes;
}
function signatureG1ToRawBytes(point) {
  point.assertValidity();
  const isZero = point.equals(bls12_381.G1.ProjectivePoint.ZERO);
  const { x, y } = point.toAffine();
  if (isZero)
    return COMPRESSED_ZERO.slice();
  const P = Fp.ORDER;
  const sort = Boolean(y * _2n8 / P);
  return setMask(numberToBytesBE(x, Fp.BYTES), { compressed: true, sort });
}
function signatureG2ToRawBytes(point) {
  point.assertValidity();
  const len = Fp.BYTES;
  if (point.equals(bls12_381.G2.ProjectivePoint.ZERO))
    return concatBytes(COMPRESSED_ZERO, numberToBytesBE(_0n9, len));
  const { x, y } = point.toAffine();
  const { re: x0, im: x1 } = Fp2.reim(x);
  const { re: y0, im: y1 } = Fp2.reim(y);
  const tmp = y1 > _0n9 ? y1 * _2n8 : y0 * _2n8;
  const sort = Boolean(tmp / Fp.ORDER & _1n9);
  const z2 = x0;
  return concatBytes(setMask(numberToBytesBE(x1, len), { sort, compressed: true }), numberToBytesBE(z2, len));
}
var bls12_381 = bls({
  // Fields
  fields: {
    Fp,
    Fp2,
    Fp6,
    Fp12,
    Fr
  },
  // G1 is the order-q subgroup of E1(Fp) : y² = x³ + 4, #E1(Fp) = h1q, where
  // characteristic; z + (z⁴ - z² + 1)(z - 1)²/3
  G1: {
    Fp,
    // cofactor; (z - 1)²/3
    h: BigInt("0x396c8c005555e1568c00aaab0000aaab"),
    // generator's coordinates
    // x = 3685416753713387016781088315183077757961620795782546409894578378688607592378376318836054947676345821548104185464507
    // y = 1339506544944476473020471379941921221584933875938349620426543736416511423956333506472724655353366534992391756441569
    Gx: BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"),
    Gy: BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1"),
    a: Fp.ZERO,
    b: _4n3,
    htfDefaults: { ...htfDefaults, m: 1, DST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_" },
    wrapPrivateKey: true,
    allowInfinityPoint: true,
    // Checks is the point resides in prime-order subgroup.
    // point.isTorsionFree() should return true for valid points
    // It returns false for shitty points.
    // https://eprint.iacr.org/2021/1130.pdf
    isTorsionFree: (c, point) => {
      const cubicRootOfUnityModP = BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe");
      const phi = new c(Fp.mul(point.px, cubicRootOfUnityModP), point.py, point.pz);
      const xP = point.multiplyUnsafe(BLS_X).negate();
      const u2P = xP.multiplyUnsafe(BLS_X);
      return u2P.equals(phi);
    },
    // Clear cofactor of G1
    // https://eprint.iacr.org/2019/403
    clearCofactor: (_c, point) => {
      return point.multiplyUnsafe(BLS_X).add(point);
    },
    mapToCurve: (scalars) => {
      const { x, y } = G1_SWU(Fp.create(scalars[0]));
      return isogenyMapG1(x, y);
    },
    fromBytes: (bytes) => {
      const { compressed, infinity, sort, value } = parseMask(bytes);
      if (value.length === 48 && compressed) {
        const P = Fp.ORDER;
        const compressedValue = bytesToNumberBE(value);
        const x = Fp.create(compressedValue & Fp.MASK);
        if (infinity) {
          if (x !== _0n9)
            throw new Error("G1: non-empty compressed point at infinity");
          return { x: _0n9, y: _0n9 };
        }
        const right = Fp.add(Fp.pow(x, _3n5), Fp.create(bls12_381.params.G1b));
        let y = Fp.sqrt(right);
        if (!y)
          throw new Error("invalid compressed G1 point");
        if (y * _2n8 / P !== BigInt(sort))
          y = Fp.neg(y);
        return { x: Fp.create(x), y: Fp.create(y) };
      } else if (value.length === 96 && !compressed) {
        const x = bytesToNumberBE(value.subarray(0, Fp.BYTES));
        const y = bytesToNumberBE(value.subarray(Fp.BYTES));
        if (infinity) {
          if (x !== _0n9 || y !== _0n9)
            throw new Error("G1: non-empty point at infinity");
          return bls12_381.G1.ProjectivePoint.ZERO.toAffine();
        }
        return { x: Fp.create(x), y: Fp.create(y) };
      } else {
        throw new Error("invalid point G1, expected 48/96 bytes");
      }
    },
    toBytes: (c, point, isCompressed) => {
      const isZero = point.equals(c.ZERO);
      const { x, y } = point.toAffine();
      if (isCompressed) {
        if (isZero)
          return COMPRESSED_ZERO.slice();
        const P = Fp.ORDER;
        const sort = Boolean(y * _2n8 / P);
        return setMask(numberToBytesBE(x, Fp.BYTES), { compressed: true, sort });
      } else {
        if (isZero) {
          const x2 = concatBytes(new Uint8Array([64]), new Uint8Array(2 * Fp.BYTES - 1));
          return x2;
        } else {
          return concatBytes(numberToBytesBE(x, Fp.BYTES), numberToBytesBE(y, Fp.BYTES));
        }
      }
    },
    ShortSignature: {
      fromHex(hex) {
        const { infinity, sort, value } = parseMask(ensureBytes("signatureHex", hex, 48));
        const P = Fp.ORDER;
        const compressedValue = bytesToNumberBE(value);
        if (infinity)
          return bls12_381.G1.ProjectivePoint.ZERO;
        const x = Fp.create(compressedValue & Fp.MASK);
        const right = Fp.add(Fp.pow(x, _3n5), Fp.create(bls12_381.params.G1b));
        let y = Fp.sqrt(right);
        if (!y)
          throw new Error("invalid compressed G1 point");
        const aflag = BigInt(sort);
        if (y * _2n8 / P !== aflag)
          y = Fp.neg(y);
        const point = bls12_381.G1.ProjectivePoint.fromAffine({ x, y });
        point.assertValidity();
        return point;
      },
      toRawBytes(point) {
        return signatureG1ToRawBytes(point);
      },
      toHex(point) {
        return bytesToHex(signatureG1ToRawBytes(point));
      }
    }
  },
  // G2 is the order-q subgroup of E2(Fp²) : y² = x³+4(1+√−1),
  // where Fp2 is Fp[√−1]/(x2+1). #E2(Fp2 ) = h2q, where
  // G² - 1
  // h2q
  G2: {
    Fp: Fp2,
    // cofactor
    h: BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"),
    Gx: Fp2.fromBigTuple([
      BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"),
      BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")
    ]),
    // y =
    // 927553665492332455747201965776037880757740193453592970025027978793976877002675564980949289727957565575433344219582,
    // 1985150602287291935568054521177171638300868978215655730859378665066344726373823718423869104263333984641494340347905
    Gy: Fp2.fromBigTuple([
      BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"),
      BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")
    ]),
    a: Fp2.ZERO,
    b: Fp2.fromBigTuple([_4n3, _4n3]),
    hEff: BigInt("0xbc69f08f2ee75b3584c6a0ea91b352888e2a8e9145ad7689986ff031508ffe1329c2f178731db956d82bf015d1212b02ec0ec69d7477c1ae954cbc06689f6a359894c0adebbf6b4e8020005aaa95551"),
    htfDefaults: { ...htfDefaults },
    wrapPrivateKey: true,
    allowInfinityPoint: true,
    mapToCurve: (scalars) => {
      const { x, y } = G2_SWU(Fp2.fromBigTuple(scalars));
      return isogenyMapG2(x, y);
    },
    // Checks is the point resides in prime-order subgroup.
    // point.isTorsionFree() should return true for valid points
    // It returns false for shitty points.
    // https://eprint.iacr.org/2021/1130.pdf
    isTorsionFree: (c, P) => {
      return P.multiplyUnsafe(BLS_X).negate().equals(G2psi(c, P));
    },
    // Maps the point into the prime-order subgroup G2.
    // clear_cofactor_bls12381_g2 from cfrg-hash-to-curve-11
    // https://eprint.iacr.org/2017/419.pdf
    // prettier-ignore
    clearCofactor: (c, P) => {
      const x = BLS_X;
      let t1 = P.multiplyUnsafe(x).negate();
      let t2 = G2psi(c, P);
      let t3 = P.double();
      t3 = G2psi2(c, t3);
      t3 = t3.subtract(t2);
      t2 = t1.add(t2);
      t2 = t2.multiplyUnsafe(x).negate();
      t3 = t3.add(t2);
      t3 = t3.subtract(t1);
      const Q = t3.subtract(P);
      return Q;
    },
    fromBytes: (bytes) => {
      const { compressed, infinity, sort, value } = parseMask(bytes);
      if (!compressed && !infinity && sort || // 00100000
      !compressed && infinity && sort || // 01100000
      sort && infinity && compressed) {
        throw new Error("invalid encoding flag: " + (bytes[0] & 224));
      }
      const L = Fp.BYTES;
      const slc = (b, from29, to3) => bytesToNumberBE(b.slice(from29, to3));
      if (value.length === 96 && compressed) {
        const b = bls12_381.params.G2b;
        const P = Fp.ORDER;
        if (infinity) {
          if (value.reduce((p, c) => p !== 0 ? c + 1 : c, 0) > 0) {
            throw new Error("invalid compressed G2 point");
          }
          return { x: Fp2.ZERO, y: Fp2.ZERO };
        }
        const x_1 = slc(value, 0, L);
        const x_0 = slc(value, L, 2 * L);
        const x = Fp2.create({ c0: Fp.create(x_0), c1: Fp.create(x_1) });
        const right = Fp2.add(Fp2.pow(x, _3n5), b);
        let y = Fp2.sqrt(right);
        const Y_bit = y.c1 === _0n9 ? y.c0 * _2n8 / P : y.c1 * _2n8 / P ? _1n9 : _0n9;
        y = sort && Y_bit > 0 ? y : Fp2.neg(y);
        return { x, y };
      } else if (value.length === 192 && !compressed) {
        if (infinity) {
          if (value.reduce((p, c) => p !== 0 ? c + 1 : c, 0) > 0) {
            throw new Error("invalid uncompressed G2 point");
          }
          return { x: Fp2.ZERO, y: Fp2.ZERO };
        }
        const x1 = slc(value, 0, L);
        const x0 = slc(value, L, 2 * L);
        const y1 = slc(value, 2 * L, 3 * L);
        const y0 = slc(value, 3 * L, 4 * L);
        return { x: Fp2.fromBigTuple([x0, x1]), y: Fp2.fromBigTuple([y0, y1]) };
      } else {
        throw new Error("invalid point G2, expected 96/192 bytes");
      }
    },
    toBytes: (c, point, isCompressed) => {
      const { BYTES: len, ORDER: P } = Fp;
      const isZero = point.equals(c.ZERO);
      const { x, y } = point.toAffine();
      if (isCompressed) {
        if (isZero)
          return concatBytes(COMPRESSED_ZERO, numberToBytesBE(_0n9, len));
        const flag = Boolean(y.c1 === _0n9 ? y.c0 * _2n8 / P : y.c1 * _2n8 / P);
        return concatBytes(setMask(numberToBytesBE(x.c1, len), { compressed: true, sort: flag }), numberToBytesBE(x.c0, len));
      } else {
        if (isZero)
          return concatBytes(new Uint8Array([64]), new Uint8Array(4 * len - 1));
        const { re: x0, im: x1 } = Fp2.reim(x);
        const { re: y0, im: y1 } = Fp2.reim(y);
        return concatBytes(numberToBytesBE(x1, len), numberToBytesBE(x0, len), numberToBytesBE(y1, len), numberToBytesBE(y0, len));
      }
    },
    Signature: {
      // TODO: Optimize, it's very slow because of sqrt.
      fromHex(hex) {
        const { infinity, sort, value } = parseMask(ensureBytes("signatureHex", hex));
        const P = Fp.ORDER;
        const half = value.length / 2;
        if (half !== 48 && half !== 96)
          throw new Error("invalid compressed signature length, must be 96 or 192");
        const z1 = bytesToNumberBE(value.slice(0, half));
        const z2 = bytesToNumberBE(value.slice(half));
        if (infinity)
          return bls12_381.G2.ProjectivePoint.ZERO;
        const x1 = Fp.create(z1 & Fp.MASK);
        const x2 = Fp.create(z2);
        const x = Fp2.create({ c0: x2, c1: x1 });
        const y2 = Fp2.add(Fp2.pow(x, _3n5), bls12_381.params.G2b);
        let y = Fp2.sqrt(y2);
        if (!y)
          throw new Error("Failed to find a square root");
        const { re: y0, im: y1 } = Fp2.reim(y);
        const aflag1 = BigInt(sort);
        const isGreater = y1 > _0n9 && y1 * _2n8 / P !== aflag1;
        const isZero = y1 === _0n9 && y0 * _2n8 / P !== aflag1;
        if (isGreater || isZero)
          y = Fp2.neg(y);
        const point = bls12_381.G2.ProjectivePoint.fromAffine({ x, y });
        point.assertValidity();
        return point;
      },
      toRawBytes(point) {
        return signatureG2ToRawBytes(point);
      },
      toHex(point) {
        return bytesToHex(signatureG2ToRawBytes(point));
      }
    }
  },
  params: {
    ateLoopSize: BLS_X,
    // The BLS parameter x for BLS12-381
    r: Fr.ORDER,
    // order; z⁴ − z² + 1; CURVE.n from other curves
    xNegative: true,
    twistType: "multiplicative"
  },
  htfDefaults,
  hash: sha2563,
  randomBytes
});

// node_modules/ox/_esm/core/Bls.js
var noble = bls12_381;
function aggregate(points) {
  var _a;
  const group = typeof ((_a = points[0]) == null ? void 0 : _a.x) === "bigint" ? bls12_381.G1 : bls12_381.G2;
  const point = points.reduce((acc, point2) => acc.add(new group.ProjectivePoint(point2.x, point2.y, point2.z)), group.ProjectivePoint.ZERO);
  return {
    x: point.px,
    y: point.py,
    z: point.pz
  };
}
aggregate.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getPublicKey(options) {
  const { privateKey, size: size4 = "short-key:long-sig" } = options;
  const group = size4 === "short-key:long-sig" ? bls12_381.G1 : bls12_381.G2;
  const { px, py, pz } = group.ProjectivePoint.fromPrivateKey(from(privateKey).slice(2));
  return { x: px, y: py, z: pz };
}
function randomPrivateKey(options = {}) {
  const { as = "Hex" } = options;
  const bytes = bls12_381.utils.randomPrivateKey();
  if (as === "Hex")
    return fromBytes(bytes);
  return bytes;
}
function sign(options) {
  const { payload, privateKey, suite, size: size4 = "short-key:long-sig" } = options;
  const payloadGroup = size4 === "short-key:long-sig" ? bls12_381.G2 : bls12_381.G1;
  const payloadPoint = payloadGroup.hashToCurve(from2(payload), suite ? { DST: fromString2(suite) } : void 0);
  const privateKeyGroup = size4 === "short-key:long-sig" ? bls12_381.G1 : bls12_381.G2;
  const signature = payloadPoint.multiply(privateKeyGroup.normPrivateKeyToScalar(privateKey.slice(2)));
  return {
    x: signature.px,
    y: signature.py,
    z: signature.pz
  };
}
sign.parseError = (error) => (
  /* v8 ignore next */
  error
);
function verify(options) {
  const { payload, suite } = options;
  const publicKey = options.publicKey;
  const signature = options.signature;
  const isShortSig = typeof signature.x === "bigint";
  const group = isShortSig ? bls12_381.G1 : bls12_381.G2;
  const payloadPoint = group.hashToCurve(from2(payload), suite ? { DST: fromString2(suite) } : void 0);
  const shortSigPairing = () => bls12_381.pairingBatch([
    {
      g1: payloadPoint,
      g2: new bls12_381.G2.ProjectivePoint(publicKey.x, publicKey.y, publicKey.z)
    },
    {
      g1: new bls12_381.G1.ProjectivePoint(signature.x, signature.y, signature.z),
      g2: bls12_381.G2.ProjectivePoint.BASE.negate()
    }
  ]);
  const longSigPairing = () => bls12_381.pairingBatch([
    {
      g1: new bls12_381.G1.ProjectivePoint(publicKey.x, publicKey.y, publicKey.z).negate(),
      g2: payloadPoint
    },
    {
      g1: bls12_381.G1.ProjectivePoint.BASE,
      g2: new bls12_381.G2.ProjectivePoint(signature.x, signature.y, signature.z)
    }
  ]);
  return bls12_381.fields.Fp12.eql(isShortSig ? shortSigPairing() : longSigPairing(), bls12_381.fields.Fp12.ONE);
}
verify.parseError = (error) => error;

// node_modules/ox/_esm/core/BlsPoint.js
var BlsPoint_exports = {};
__export(BlsPoint_exports, {
  fromBytes: () => fromBytes7,
  fromHex: () => fromHex7,
  toBytes: () => toBytes10,
  toHex: () => toHex8
});
function toBytes10(point) {
  const group = typeof point.z === "bigint" ? bls12_381.G1 : bls12_381.G2;
  return new group.ProjectivePoint(point.x, point.y, point.z).toRawBytes();
}
toBytes10.parseError = (error) => error;
function toHex8(point) {
  return fromBytes(toBytes10(point));
}
toHex8.parseError = (error) => error;
function fromBytes7(bytes) {
  const group = bytes.length === 48 ? bls12_381.G1 : bls12_381.G2;
  const point = group.ProjectivePoint.fromHex(bytes);
  return {
    x: point.px,
    y: point.py,
    z: point.pz
  };
}
fromBytes7.parseError = (error) => error;
function fromHex7(hex, group) {
  return fromBytes7(toBytes(hex), group);
}
fromHex7.parseError = (error) => error;

// node_modules/ox/_esm/core/ContractAddress.js
var ContractAddress_exports = {};
__export(ContractAddress_exports, {
  from: () => from18,
  fromCreate: () => fromCreate,
  fromCreate2: () => fromCreate2
});
function from18(options) {
  if (options.salt)
    return fromCreate2(options);
  return fromCreate(options);
}
from18.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromCreate(options) {
  const from29 = fromHex(from5(options.from));
  let nonce = fromNumber2(options.nonce);
  if (nonce[0] === 0)
    nonce = new Uint8Array([]);
  return from5(`0x${keccak256(fromBytes3([from29, nonce], { as: "Hex" })).slice(26)}`);
}
fromCreate.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromCreate2(options) {
  const from29 = fromHex(from5(options.from));
  const salt = padLeft2(validate2(options.salt) ? options.salt : fromHex(options.salt), 32);
  const bytecodeHash = (() => {
    if ("bytecodeHash" in options) {
      if (validate2(options.bytecodeHash))
        return options.bytecodeHash;
      return fromHex(options.bytecodeHash);
    }
    return keccak256(options.bytecode, { as: "Bytes" });
  })();
  return from5(slice(keccak256(concat2(fromHex("0xff"), from29, salt, bytecodeHash), { as: "Hex" }), 12));
}
fromCreate2.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/Filter.js
var Filter_exports = {};
__export(Filter_exports, {
  fromRpc: () => fromRpc6,
  toRpc: () => toRpc6
});
function fromRpc6(filter) {
  const { fromBlock, toBlock } = filter;
  return {
    ...filter,
    ...fromBlock && {
      fromBlock: validate(fromBlock, { strict: false }) ? BigInt(fromBlock) : fromBlock
    },
    ...toBlock && {
      toBlock: validate(toBlock, { strict: false }) ? BigInt(toBlock) : toBlock
    }
  };
}
fromRpc6.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toRpc6(filter) {
  const { address, topics, fromBlock, toBlock } = filter;
  return {
    ...address && { address },
    ...topics && { topics },
    ...typeof fromBlock !== "undefined" ? {
      fromBlock: typeof fromBlock === "bigint" ? fromNumber(fromBlock) : fromBlock
    } : {},
    ...typeof toBlock !== "undefined" ? {
      toBlock: typeof toBlock === "bigint" ? fromNumber(toBlock) : toBlock
    } : {}
  };
}
toRpc6.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/HdKey.js
var HdKey_exports = {};
__export(HdKey_exports, {
  fromExtendedKey: () => fromExtendedKey,
  fromJson: () => fromJson,
  fromSeed: () => fromSeed,
  path: () => path
});

// node_modules/ox/_esm/core/Secp256k1.js
var Secp256k1_exports = {};
__export(Secp256k1_exports, {
  getPublicKey: () => getPublicKey2,
  noble: () => noble2,
  randomPrivateKey: () => randomPrivateKey2,
  recoverAddress: () => recoverAddress,
  recoverPublicKey: () => recoverPublicKey,
  sign: () => sign2,
  verify: () => verify2
});
var noble2 = secp256k1;
function getPublicKey2(options) {
  const { privateKey } = options;
  const point = secp256k1.ProjectivePoint.fromPrivateKey(from(privateKey).slice(2));
  return from4(point);
}
function randomPrivateKey2(options = {}) {
  const { as = "Hex" } = options;
  const bytes = secp256k1.utils.randomPrivateKey();
  if (as === "Hex")
    return fromBytes(bytes);
  return bytes;
}
function recoverAddress(options) {
  return fromPublicKey(recoverPublicKey(options));
}
recoverAddress.parseError = (error) => (
  /* v8 ignore next */
  error
);
function recoverPublicKey(options) {
  const { payload, signature } = options;
  const { r, s, yParity } = signature;
  const signature_ = new secp256k1.Signature(BigInt(r), BigInt(s)).addRecoveryBit(yParity);
  const point = signature_.recoverPublicKey(from(payload).substring(2));
  return from4(point);
}
recoverPublicKey.parseError = (error) => (
  /* v8 ignore next */
  error
);
function sign2(options) {
  const { hash: hash7, payload, privateKey } = options;
  const { r, s, recovery } = secp256k1.sign(from2(payload), from2(privateKey), ...hash7 ? [{ prehash: true, lowS: true }] : []);
  return {
    r,
    s,
    yParity: recovery
  };
}
sign2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function verify2(options) {
  const { address, hash: hash7, payload, publicKey, signature } = options;
  if (address)
    return isEqual3(address, recoverAddress({ payload, signature }));
  return secp256k1.verify(signature, from2(payload), toBytes3(publicKey), ...hash7 ? [{ prehash: true, lowS: true }] : []);
}
verify2.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/internal/hdKey.js
function fromScure(key) {
  return {
    derive: (path2) => fromScure(key.derive(path2)),
    depth: key.depth,
    identifier: fromBytes(key.identifier),
    index: key.index,
    privateKey: fromBytes(key.privateKey),
    privateExtendedKey: key.privateExtendedKey,
    publicKey: getPublicKey2({ privateKey: key.privateKey }),
    publicExtendedKey: key.publicExtendedKey,
    versions: key.versions
  };
}

// node_modules/ox/_esm/core/HdKey.js
function fromExtendedKey(extendedKey) {
  const key = HDKey.fromExtendedKey(extendedKey);
  return fromScure(key);
}
fromExtendedKey.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromJson(json) {
  return fromScure(HDKey.fromJSON(json));
}
fromJson.parseError = (error) => (
  /* v8 ignore next */
  error
);
function fromSeed(seed, options = {}) {
  const { versions } = options;
  const key = HDKey.fromMasterSeed(from2(seed), versions);
  return fromScure(key);
}
fromSeed.parseError = (error) => (
  /* v8 ignore next */
  error
);
function path(options = {}) {
  const { account = 0, change = 0, index: index2 = 0 } = options;
  return `m/44'/60'/${account}'/${change}/${index2}`;
}
path.parseError = (error) => error;

// node_modules/ox/_esm/core/Fee.js
var Fee_exports = {};

// node_modules/ox/_esm/core/Log.js
var Log_exports = {};
__export(Log_exports, {
  fromRpc: () => fromRpc7,
  toRpc: () => toRpc7
});
function fromRpc7(log, _options = {}) {
  return {
    ...log,
    blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
    logIndex: log.logIndex ? Number(log.logIndex) : null,
    transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null
  };
}
fromRpc7.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toRpc7(log, _options = {}) {
  return {
    address: log.address,
    blockHash: log.blockHash,
    blockNumber: typeof log.blockNumber === "bigint" ? fromNumber(log.blockNumber) : null,
    data: log.data,
    logIndex: typeof log.logIndex === "number" ? fromNumber(log.logIndex) : null,
    topics: log.topics,
    transactionHash: log.transactionHash,
    transactionIndex: typeof log.transactionIndex === "number" ? fromNumber(log.transactionIndex) : null,
    removed: log.removed
  };
}
toRpc7.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/Mnemonic.js
var Mnemonic_exports = {};
__export(Mnemonic_exports, {
  czech: () => wordlist,
  english: () => wordlist2,
  french: () => wordlist3,
  italian: () => wordlist4,
  japanese: () => wordlist5,
  korean: () => wordlist6,
  path: () => path,
  portuguese: () => wordlist7,
  random: () => random3,
  simplifiedChinese: () => wordlist8,
  spanish: () => wordlist9,
  toHdKey: () => toHdKey,
  toPrivateKey: () => toPrivateKey,
  toSeed: () => toSeed,
  traditionalChinese: () => wordlist10,
  validate: () => validate8
});
function random3(wordlist11, options = {}) {
  const { strength = 128 } = options;
  return generateMnemonic(wordlist11, strength);
}
random3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toHdKey(mnemonic, options = {}) {
  const { passphrase } = options;
  const seed = toSeed(mnemonic, { passphrase });
  return fromSeed(seed);
}
toHdKey.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toPrivateKey(mnemonic, options = {}) {
  const { path: path2 = path(), passphrase } = options;
  const hdKey = toHdKey(mnemonic, { passphrase }).derive(path2);
  if (options.as === "Bytes")
    return from2(hdKey.privateKey);
  return hdKey.privateKey;
}
toPrivateKey.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toSeed(mnemonic, options = {}) {
  const { passphrase } = options;
  const seed = mnemonicToSeedSync(mnemonic, passphrase);
  if (options.as === "Hex")
    return toHex(seed);
  return seed;
}
toSeed.parseError = (error) => (
  /* v8 ignore next */
  error
);
function validate8(mnemonic, wordlist11) {
  return validateMnemonic(mnemonic, wordlist11);
}
validate8.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/PersonalMessage.js
var PersonalMessage_exports = {};
__export(PersonalMessage_exports, {
  encode: () => encode6,
  getSignPayload: () => getSignPayload2
});
function encode6(data) {
  const message = from(data);
  return concat(
    // Personal Sign Format: `0x19 ‖ "Ethereum Signed Message:\n" ‖ message.length ‖ message`
    "0x19",
    fromString("Ethereum Signed Message:\n" + size2(message)),
    message
  );
}
encode6.parseError = (error) => error;
function getSignPayload2(data) {
  return keccak256(encode6(data));
}
getSignPayload2.parseError = (error) => error;

// node_modules/ox/_esm/core/Provider.js
var Provider_exports = {};
__export(Provider_exports, {
  IsUndefinedError: () => IsUndefinedError,
  ProviderRpcError: () => ProviderRpcError,
  createEmitter: () => createEmitter,
  from: () => from20
});

// node_modules/ox/_esm/core/RpcResponse.js
var RpcResponse_exports = {};
__export(RpcResponse_exports, {
  BaseError: () => BaseError2,
  InternalError: () => InternalError,
  InvalidInputError: () => InvalidInputError2,
  InvalidParamsError: () => InvalidParamsError,
  InvalidRequestError: () => InvalidRequestError,
  LimitExceededError: () => LimitExceededError,
  MethodNotFoundError: () => MethodNotFoundError,
  MethodNotSupportedError: () => MethodNotSupportedError,
  ParseError: () => ParseError,
  ResourceNotFoundError: () => ResourceNotFoundError,
  ResourceUnavailableError: () => ResourceUnavailableError,
  TransactionRejectedError: () => TransactionRejectedError,
  VersionNotSupportedError: () => VersionNotSupportedError,
  from: () => from19,
  parse: () => parse2
});
function from19(response, options = {}) {
  const { request } = options;
  return {
    ...response,
    id: response.id ?? (request == null ? void 0 : request.id),
    jsonrpc: response.jsonrpc ?? request.jsonrpc
  };
}
function parse2(response, options = {}) {
  const { raw = false } = options;
  const response_ = response;
  if (raw)
    return response;
  if (response_.error) {
    const { code } = response_.error;
    const JsonRpcError = (() => {
      if (code === InternalError.code)
        return InternalError;
      if (code === InvalidInputError2.code)
        return InvalidInputError2;
      if (code === InvalidParamsError.code)
        return InvalidParamsError;
      if (code === InvalidRequestError.code)
        return InvalidRequestError;
      if (code === LimitExceededError.code)
        return LimitExceededError;
      if (code === MethodNotFoundError.code)
        return MethodNotFoundError;
      if (code === MethodNotSupportedError.code)
        return MethodNotSupportedError;
      if (code === ParseError.code)
        return ParseError;
      if (code === ResourceNotFoundError.code)
        return ResourceNotFoundError;
      if (code === ResourceUnavailableError.code)
        return ResourceUnavailableError;
      if (code === TransactionRejectedError.code)
        return TransactionRejectedError;
      if (code === VersionNotSupportedError.code)
        return VersionNotSupportedError;
      return BaseError2;
    })();
    throw new JsonRpcError(response_.error);
  }
  return response_.result;
}
parse2.parseError = (error) => (
  /* v8 ignore next */
  error
);
var BaseError2 = class extends Error {
  constructor(errorObject) {
    const { code, message, data } = errorObject;
    super(message);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.BaseError"
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.code = code;
    this.data = data;
  }
};
var InvalidInputError2 = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32e3
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InvalidInputError"
    });
  }
};
Object.defineProperty(InvalidInputError2, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32e3
});
var ResourceNotFoundError = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32001
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.ResourceNotFoundError"
    });
  }
};
Object.defineProperty(ResourceNotFoundError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32001
});
var ResourceUnavailableError = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32002
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.ResourceUnavailableError"
    });
  }
};
Object.defineProperty(ResourceUnavailableError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32002
});
var TransactionRejectedError = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32003
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.TransactionRejectedError"
    });
  }
};
Object.defineProperty(TransactionRejectedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32003
});
var MethodNotSupportedError = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32004
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.MethodNotSupportedError"
    });
  }
};
Object.defineProperty(MethodNotSupportedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32004
});
var LimitExceededError = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32005
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.LimitExceededError"
    });
  }
};
Object.defineProperty(LimitExceededError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32005
});
var VersionNotSupportedError = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32006
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.VersionNotSupportedError"
    });
  }
};
Object.defineProperty(VersionNotSupportedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32006
});
var InvalidRequestError = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32600
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InvalidRequestError"
    });
  }
};
Object.defineProperty(InvalidRequestError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32600
});
var MethodNotFoundError = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32601
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.MethodNotFoundError"
    });
  }
};
Object.defineProperty(MethodNotFoundError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32601
});
var InvalidParamsError = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32602
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InvalidParamsError"
    });
  }
};
Object.defineProperty(InvalidParamsError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32602
});
var InternalError = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32603
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InternalErrorError"
    });
  }
};
Object.defineProperty(InternalError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32603
});
var ParseError = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32700
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.ParseError"
    });
  }
};
Object.defineProperty(ParseError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32700
});

// node_modules/ox/_esm/core/Provider.js
var ProviderRpcError = class extends Error {
  constructor(code, message) {
    super(message);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ProviderRpcError"
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.code = code;
    this.details = message;
  }
};
function createEmitter() {
  const emitter = new import_index.default();
  return {
    get eventNames() {
      return emitter.eventNames.bind(emitter);
    },
    get listenerCount() {
      return emitter.listenerCount.bind(emitter);
    },
    get listeners() {
      return emitter.listeners.bind(emitter);
    },
    addListener: emitter.addListener.bind(emitter),
    emit: emitter.emit.bind(emitter),
    off: emitter.off.bind(emitter),
    on: emitter.on.bind(emitter),
    once: emitter.once.bind(emitter),
    removeAllListeners: emitter.removeAllListeners.bind(emitter),
    removeListener: emitter.removeListener.bind(emitter)
  };
}
createEmitter.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from20(provider, options = {}) {
  var _a, _b;
  const { includeEvents = true } = options;
  if (!provider)
    throw new IsUndefinedError();
  return {
    ...includeEvents ? {
      on: (_a = provider.on) == null ? void 0 : _a.bind(provider),
      removeListener: (_b = provider.removeListener) == null ? void 0 : _b.bind(provider)
    } : {},
    async request(args) {
      const result = await provider.request(args);
      if (typeof result === "object" && "jsonrpc" in result)
        return parse2(result);
      return result;
    }
  };
}
from20.parseError = (error) => error;
var IsUndefinedError = class extends BaseError {
  constructor() {
    super("`provider` is undefined.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.IsUndefinedError"
    });
  }
};

// node_modules/ox/_esm/core/RpcSchema.js
var RpcSchema_exports = {};
__export(RpcSchema_exports, {
  from: () => from21
});
function from21() {
  return null;
}

// node_modules/ox/_esm/core/RpcRequest.js
var RpcRequest_exports = {};
__export(RpcRequest_exports, {
  createStore: () => createStore,
  from: () => from22
});
function createStore(options = {}) {
  let id = options.id ?? 0;
  return {
    prepare(options2) {
      return from22({
        id: id++,
        ...options2
      });
    },
    get id() {
      return id;
    }
  };
}
createStore.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from22(options) {
  return {
    ...options,
    jsonrpc: "2.0"
  };
}
from22.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/RpcTransport.js
var RpcTransport_exports = {};
__export(RpcTransport_exports, {
  HttpError: () => HttpError,
  MalformedResponseError: () => MalformedResponseError,
  fromHttp: () => fromHttp
});

// node_modules/ox/_esm/core/internal/promise.js
function withTimeout(fn, options) {
  const { errorInstance = new TimeoutError(), timeout, signal } = options;
  return new Promise((resolve, reject) => {
    ;
    (async () => {
      let timeoutId;
      try {
        const controller = new AbortController();
        if (timeout > 0)
          timeoutId = setTimeout(() => {
            if (signal) {
              controller.abort();
            } else {
              reject(errorInstance);
            }
          }, timeout);
        resolve(await fn({ signal: controller.signal }));
      } catch (err) {
        if ((err == null ? void 0 : err.name) === "AbortError")
          reject(errorInstance);
        reject(err);
      } finally {
        clearTimeout(timeoutId);
      }
    })();
  });
}
withTimeout.parseError = (error) => (
  /* v8 ignore next */
  error
);
var TimeoutError = class extends BaseError {
  constructor() {
    super("Operation timed out.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Promise.TimeoutError"
    });
  }
};

// node_modules/ox/_esm/core/internal/rpcTransport.js
function create2(transport, options_root) {
  const requestStore = createStore();
  return {
    request: async ({ method, params }, options = {}) => {
      const body = requestStore.prepare({ method, params });
      const data = await transport.request(body, options);
      return parse2(data, {
        raw: options.raw ?? (options_root == null ? void 0 : options_root.raw)
      });
    }
  };
}
create2.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/RpcTransport.js
function fromHttp(url, options = {}) {
  return create2({
    async request(body_, options_) {
      const { fetchFn = options.fetchFn ?? fetch, fetchOptions: fetchOptions_ = options.fetchOptions, timeout = options.timeout ?? 1e4 } = options_;
      const body = JSON.stringify(body_);
      const fetchOptions = typeof fetchOptions_ === "function" ? await fetchOptions_(body_) : fetchOptions_;
      const response = await withTimeout(({ signal }) => {
        const init = {
          ...fetchOptions,
          body,
          headers: {
            "Content-Type": "application/json",
            ...fetchOptions == null ? void 0 : fetchOptions.headers
          },
          method: (fetchOptions == null ? void 0 : fetchOptions.method) ?? "POST",
          signal: (fetchOptions == null ? void 0 : fetchOptions.signal) ?? (timeout > 0 ? signal : null)
        };
        const request = new Request(url, init);
        return fetchFn(request);
      }, {
        timeout,
        signal: true
      });
      const data = await (async () => {
        var _a;
        if ((_a = response.headers.get("Content-Type")) == null ? void 0 : _a.startsWith("application/json"))
          return response.json();
        return response.text().then((data2) => {
          try {
            return JSON.parse(data2 || "{}");
          } catch (err) {
            if (response.ok)
              throw new MalformedResponseError({
                response: data2
              });
            return { error: data2 };
          }
        });
      })();
      if (!response.ok)
        throw new HttpError({
          body,
          details: JSON.stringify(data.error) ?? response.statusText,
          response,
          url
        });
      return data;
    }
  }, { raw: options.raw });
}
fromHttp.parseError = (error) => (
  /* v8 ignore next */
  error
);
var HttpError = class extends BaseError {
  constructor({ body, details, response, url }) {
    super("HTTP request failed.", {
      details,
      metaMessages: [
        `Status: ${response.status}`,
        `URL: ${getUrl(url)}`,
        body ? `Body: ${JSON.stringify(body)}` : void 0
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcTransport.HttpError"
    });
  }
};
var MalformedResponseError = class extends BaseError {
  constructor({ response }) {
    super("HTTP Response could not be parsed as JSON.", {
      metaMessages: [`Response: ${response}`]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcTransport.MalformedResponseError"
    });
  }
};

// node_modules/ox/_esm/core/P256.js
var P256_exports = {};
__export(P256_exports, {
  getPublicKey: () => getPublicKey3,
  noble: () => noble3,
  randomPrivateKey: () => randomPrivateKey3,
  recoverPublicKey: () => recoverPublicKey2,
  sign: () => sign3,
  verify: () => verify3
});

// node_modules/ox/node_modules/@noble/curves/esm/p256.js
var Fp256 = Field(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"));
var CURVE_A = Fp256.create(BigInt("-3"));
var CURVE_B = BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b");
var p256 = createCurve({
  a: CURVE_A,
  // Equation params: a, b
  b: CURVE_B,
  Fp: Fp256,
  // Field: 2n**224n * (2n**32n-1n) + 2n**192n + 2n**96n-1n
  // Curve order, total count of valid points in the field
  n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
  // Base (generator) point (x, y)
  Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
  Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),
  h: BigInt(1),
  lowS: false
}, sha2563);
var secp256r1 = p256;
var mapSWU2 = (() => mapToCurveSimpleSWU(Fp256, {
  A: CURVE_A,
  B: CURVE_B,
  Z: Fp256.create(BigInt("-10"))
}))();
var htf2 = (() => createHasher(secp256r1.ProjectivePoint, (scalars) => mapSWU2(scalars[0]), {
  DST: "P256_XMD:SHA-256_SSWU_RO_",
  encodeDST: "P256_XMD:SHA-256_SSWU_NU_",
  p: Fp256.ORDER,
  m: 1,
  k: 128,
  expand: "xmd",
  hash: sha2563
}))();
var hashToCurve2 = (() => htf2.hashToCurve)();
var encodeToCurve2 = (() => htf2.encodeToCurve)();

// node_modules/ox/_esm/core/P256.js
var noble3 = secp256r1;
function getPublicKey3(options) {
  const { privateKey } = options;
  const point = secp256r1.ProjectivePoint.fromPrivateKey(typeof privateKey === "string" ? privateKey.slice(2) : fromBytes(privateKey).slice(2));
  return from4(point);
}
function randomPrivateKey3(options = {}) {
  const { as = "Hex" } = options;
  const bytes = secp256r1.utils.randomPrivateKey();
  if (as === "Hex")
    return fromBytes(bytes);
  return bytes;
}
function recoverPublicKey2(options) {
  const { payload, signature } = options;
  const { r, s, yParity } = signature;
  const signature_ = new secp256r1.Signature(BigInt(r), BigInt(s)).addRecoveryBit(yParity);
  const payload_ = payload instanceof Uint8Array ? fromBytes(payload) : payload;
  const point = signature_.recoverPublicKey(payload_.substring(2));
  return from4(point);
}
recoverPublicKey2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function sign3(options) {
  const { hash: hash7, payload, privateKey } = options;
  const { r, s, recovery } = secp256r1.sign(payload instanceof Uint8Array ? payload : fromHex(payload), privateKey instanceof Uint8Array ? privateKey : fromHex(privateKey), ...hash7 ? [{ prehash: true, lowS: true }] : []);
  return {
    r,
    s,
    yParity: recovery
  };
}
sign3.parseError = (error) => error;
function verify3(options) {
  const { hash: hash7, payload, publicKey, signature } = options;
  return secp256r1.verify(signature, payload instanceof Uint8Array ? payload : fromHex(payload), toHex2(publicKey).substring(2), ...hash7 ? [{ prehash: true, lowS: true }] : []);
}
verify3.parseError = (error) => error;

// node_modules/ox/_esm/core/Siwe.js
var Siwe_exports = {};
__export(Siwe_exports, {
  InvalidMessageFieldError: () => InvalidMessageFieldError,
  createMessage: () => createMessage,
  domainRegex: () => domainRegex,
  generateNonce: () => generateNonce,
  ipRegex: () => ipRegex,
  isUri: () => isUri,
  localhostRegex: () => localhostRegex,
  nonceRegex: () => nonceRegex,
  parseMessage: () => parseMessage,
  prefixRegex: () => prefixRegex,
  schemeRegex: () => schemeRegex,
  suffixRegex: () => suffixRegex,
  validateMessage: () => validateMessage
});

// node_modules/ox/_esm/core/internal/uid.js
var size3 = 256;
var index = size3;
var buffer;
function uid(length = 11) {
  if (!buffer || index + length > size3 * 2) {
    buffer = "";
    index = 0;
    for (let i = 0; i < size3; i++) {
      buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
    }
  }
  return buffer.substring(index, index++ + length);
}

// node_modules/ox/_esm/core/Siwe.js
var domainRegex = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?$/;
var ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,5})?$/;
var localhostRegex = /^localhost(:[0-9]{1,5})?$/;
var nonceRegex = /^[a-zA-Z0-9]{8,}$/;
var schemeRegex = /^([a-zA-Z][a-zA-Z0-9+-.]*)$/;
var prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/;
var suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function createMessage(value) {
  const { chainId, domain, expirationTime, issuedAt = /* @__PURE__ */ new Date(), nonce, notBefore, requestId, resources, scheme, uri, version: version2 } = value;
  {
    if (chainId !== Math.floor(chainId))
      throw new InvalidMessageFieldError({
        field: "chainId",
        metaMessages: [
          "- Chain ID must be a EIP-155 chain ID.",
          "- See https://eips.ethereum.org/EIPS/eip-155",
          "",
          `Provided value: ${chainId}`
        ]
      });
    if (!(domainRegex.test(domain) || ipRegex.test(domain) || localhostRegex.test(domain)))
      throw new InvalidMessageFieldError({
        field: "domain",
        metaMessages: [
          "- Domain must be an RFC 3986 authority.",
          "- See https://www.rfc-editor.org/rfc/rfc3986",
          "",
          `Provided value: ${domain}`
        ]
      });
    if (!nonceRegex.test(nonce))
      throw new InvalidMessageFieldError({
        field: "nonce",
        metaMessages: [
          "- Nonce must be at least 8 characters.",
          "- Nonce must be alphanumeric.",
          "",
          `Provided value: ${nonce}`
        ]
      });
    if (!isUri(uri))
      throw new InvalidMessageFieldError({
        field: "uri",
        metaMessages: [
          "- URI must be a RFC 3986 URI referring to the resource that is the subject of the signing.",
          "- See https://www.rfc-editor.org/rfc/rfc3986",
          "",
          `Provided value: ${uri}`
        ]
      });
    if (version2 !== "1")
      throw new InvalidMessageFieldError({
        field: "version",
        metaMessages: [
          "- Version must be '1'.",
          "",
          `Provided value: ${version2}`
        ]
      });
    if (scheme && !schemeRegex.test(scheme))
      throw new InvalidMessageFieldError({
        field: "scheme",
        metaMessages: [
          "- Scheme must be an RFC 3986 URI scheme.",
          "- See https://www.rfc-editor.org/rfc/rfc3986#section-3.1",
          "",
          `Provided value: ${scheme}`
        ]
      });
    const statement2 = value.statement;
    if (statement2 == null ? void 0 : statement2.includes("\n"))
      throw new InvalidMessageFieldError({
        field: "statement",
        metaMessages: [
          "- Statement must not include '\\n'.",
          "",
          `Provided value: ${statement2}`
        ]
      });
  }
  const address = from5(value.address);
  const origin = (() => {
    if (scheme)
      return `${scheme}://${domain}`;
    return domain;
  })();
  const statement = (() => {
    if (!value.statement)
      return "";
    return `${value.statement}
`;
  })();
  const prefix = `${origin} wants you to sign in with your Ethereum account:
${address}

${statement}`;
  let suffix = `URI: ${uri}
Version: ${version2}
Chain ID: ${chainId}
Nonce: ${nonce}
Issued At: ${issuedAt.toISOString()}`;
  if (expirationTime)
    suffix += `
Expiration Time: ${expirationTime.toISOString()}`;
  if (notBefore)
    suffix += `
Not Before: ${notBefore.toISOString()}`;
  if (requestId)
    suffix += `
Request ID: ${requestId}`;
  if (resources) {
    let content2 = "\nResources:";
    for (const resource of resources) {
      if (!isUri(resource))
        throw new InvalidMessageFieldError({
          field: "resources",
          metaMessages: [
            "- Every resource must be a RFC 3986 URI.",
            "- See https://www.rfc-editor.org/rfc/rfc3986",
            "",
            `Provided value: ${resource}`
          ]
        });
      content2 += `
- ${resource}`;
    }
    suffix += content2;
  }
  return `${prefix}
${suffix}`;
}
createMessage.parseError = (error) => (
  /* v8 ignore next */
  error
);
function generateNonce() {
  return uid(96);
}
function isUri(value) {
  if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value))
    return false;
  if (/%[^0-9a-f]/i.test(value))
    return false;
  if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value))
    return false;
  const splitted = splitUri(value);
  const scheme = splitted[1];
  const authority = splitted[2];
  const path2 = splitted[3];
  const query = splitted[4];
  const fragment = splitted[5];
  if (!((scheme == null ? void 0 : scheme.length) && path2 && path2.length >= 0))
    return false;
  if (authority == null ? void 0 : authority.length) {
    if (!(path2.length === 0 || /^\//.test(path2)))
      return false;
  } else {
    if (/^\/\//.test(path2))
      return false;
  }
  if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase()))
    return false;
  let out = "";
  out += `${scheme}:`;
  if (authority == null ? void 0 : authority.length)
    out += `//${authority}`;
  out += path2;
  if (query == null ? void 0 : query.length)
    out += `?${query}`;
  if (fragment == null ? void 0 : fragment.length)
    out += `#${fragment}`;
  return out;
}
function splitUri(value) {
  return value.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
}
function parseMessage(message) {
  var _a, _b, _c;
  const { scheme, statement, ...prefix } = ((_a = message.match(prefixRegex)) == null ? void 0 : _a.groups) ?? {};
  const { chainId, expirationTime, issuedAt, notBefore, requestId, ...suffix } = ((_b = message.match(suffixRegex)) == null ? void 0 : _b.groups) ?? {};
  const resources = (_c = message.split("Resources:")[1]) == null ? void 0 : _c.split("\n- ").slice(1);
  return {
    ...prefix,
    ...suffix,
    ...chainId ? { chainId: Number(chainId) } : {},
    ...expirationTime ? { expirationTime: new Date(expirationTime) } : {},
    ...issuedAt ? { issuedAt: new Date(issuedAt) } : {},
    ...notBefore ? { notBefore: new Date(notBefore) } : {},
    ...requestId ? { requestId } : {},
    ...resources ? { resources } : {},
    ...scheme ? { scheme } : {},
    ...statement ? { statement } : {}
  };
}
function validateMessage(value) {
  const { address, domain, message, nonce, scheme, time = /* @__PURE__ */ new Date() } = value;
  if (domain && message.domain !== domain)
    return false;
  if (nonce && message.nonce !== nonce)
    return false;
  if (scheme && message.scheme !== scheme)
    return false;
  if (message.expirationTime && time >= message.expirationTime)
    return false;
  if (message.notBefore && time < message.notBefore)
    return false;
  try {
    if (!message.address)
      return false;
    if (address && !isEqual3(message.address, address))
      return false;
  } catch {
    return false;
  }
  return true;
}
var InvalidMessageFieldError = class extends BaseError {
  constructor(parameters) {
    const { field, metaMessages } = parameters;
    super(`Invalid Sign-In with Ethereum message field "${field}".`, {
      metaMessages
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Siwe.InvalidMessageFieldError"
    });
  }
};

// node_modules/ox/_esm/core/TransactionEnvelope.js
var TransactionEnvelope_exports = {};
__export(TransactionEnvelope_exports, {
  FeeCapTooHighError: () => FeeCapTooHighError,
  GasPriceTooHighError: () => GasPriceTooHighError,
  InvalidChainIdError: () => InvalidChainIdError,
  InvalidSerializedError: () => InvalidSerializedError,
  TipAboveFeeCapError: () => TipAboveFeeCapError
});

// node_modules/ox/_esm/core/Value.js
var Value_exports = {};
__export(Value_exports, {
  InvalidDecimalNumberError: () => InvalidDecimalNumberError,
  exponents: () => exponents,
  format: () => format8,
  formatEther: () => formatEther,
  formatGwei: () => formatGwei,
  from: () => from23,
  fromEther: () => fromEther,
  fromGwei: () => fromGwei
});
var exponents = {
  wei: 0,
  gwei: 9,
  szabo: 12,
  finney: 15,
  ether: 18
};
function format8(value, decimals = 0) {
  let display = value.toString();
  const negative = display.startsWith("-");
  if (negative)
    display = display.slice(1);
  display = display.padStart(decimals, "0");
  let [integer, fraction] = [
    display.slice(0, display.length - decimals),
    display.slice(display.length - decimals)
  ];
  fraction = fraction.replace(/(0+)$/, "");
  return `${negative ? "-" : ""}${integer || "0"}${fraction ? `.${fraction}` : ""}`;
}
format8.parseError = (error) => error;
function formatEther(wei, unit = "wei") {
  return format8(wei, exponents.ether - exponents[unit]);
}
formatEther.parseError = (error) => error;
function formatGwei(wei, unit = "wei") {
  return format8(wei, exponents.gwei - exponents[unit]);
}
formatGwei.parseError = (error) => error;
function from23(value, decimals = 0) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(value))
    throw new InvalidDecimalNumberError({ value });
  let [integer = "", fraction = "0"] = value.split(".");
  const negative = integer.startsWith("-");
  if (negative)
    integer = integer.slice(1);
  fraction = fraction.replace(/(0+)$/, "");
  if (decimals === 0) {
    if (Math.round(Number(`.${fraction}`)) === 1)
      integer = `${BigInt(integer) + 1n}`;
    fraction = "";
  } else if (fraction.length > decimals) {
    const [left, unit, right] = [
      fraction.slice(0, decimals - 1),
      fraction.slice(decimals - 1, decimals),
      fraction.slice(decimals)
    ];
    const rounded = Math.round(Number(`${unit}.${right}`));
    if (rounded > 9)
      fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, "0");
    else
      fraction = `${left}${rounded}`;
    if (fraction.length > decimals) {
      fraction = fraction.slice(1);
      integer = `${BigInt(integer) + 1n}`;
    }
    fraction = fraction.slice(0, decimals);
  } else {
    fraction = fraction.padEnd(decimals, "0");
  }
  return BigInt(`${negative ? "-" : ""}${integer}${fraction}`);
}
from23.parseError = (error) => error;
function fromEther(ether, unit = "wei") {
  return from23(ether, exponents.ether - exponents[unit]);
}
fromEther.parseError = (error) => error;
function fromGwei(gwei, unit = "wei") {
  return from23(gwei, exponents.gwei - exponents[unit]);
}
fromGwei.parseError = (error) => error;
var InvalidDecimalNumberError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is not a valid decimal number.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Value.InvalidDecimalNumberError"
    });
  }
};

// node_modules/ox/_esm/core/TransactionEnvelope.js
var FeeCapTooHighError = class extends BaseError {
  constructor({ feeCap } = {}) {
    super(`The fee cap (\`maxFeePerGas\`/\`maxPriorityFeePerGas\`${feeCap ? ` = ${formatGwei(feeCap)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.FeeCapTooHighError"
    });
  }
};
var GasPriceTooHighError = class extends BaseError {
  constructor({ gasPrice } = {}) {
    super(`The gas price (\`gasPrice\`${gasPrice ? ` = ${formatGwei(gasPrice)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.GasPriceTooHighError"
    });
  }
};
var InvalidChainIdError = class extends BaseError {
  constructor({ chainId }) {
    super(typeof chainId !== "undefined" ? `Chain ID "${chainId}" is invalid.` : "Chain ID is invalid.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.InvalidChainIdError"
    });
  }
};
var InvalidSerializedError = class extends BaseError {
  constructor({ attributes, serialized, type: type6 }) {
    const missing = Object.entries(attributes).map(([key, value]) => typeof value === "undefined" ? key : void 0).filter(Boolean);
    super(`Invalid serialized transaction of type "${type6}" was provided.`, {
      metaMessages: [
        `Serialized Transaction: "${serialized}"`,
        missing.length > 0 ? `Missing Attributes: ${missing.join(", ")}` : ""
      ].filter(Boolean)
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.InvalidSerializedError"
    });
  }
};
var TipAboveFeeCapError = class extends BaseError {
  constructor({ maxPriorityFeePerGas, maxFeePerGas } = {}) {
    super([
      `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${formatGwei(maxPriorityFeePerGas)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ""}).`
    ].join("\n"));
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.TipAboveFeeCapError"
    });
  }
};

// node_modules/ox/_esm/core/TransactionEnvelopeLegacy.js
var TransactionEnvelopeLegacy_exports = {};
__export(TransactionEnvelopeLegacy_exports, {
  assert: () => assert6,
  deserialize: () => deserialize,
  from: () => from24,
  getSignPayload: () => getSignPayload3,
  hash: () => hash2,
  serialize: () => serialize,
  toRpc: () => toRpc8,
  type: () => type,
  validate: () => validate9
});
var type = "legacy";
function assert6(envelope) {
  const { chainId, gasPrice, to: to3 } = envelope;
  if (to3)
    assert4(to3, { strict: false });
  if (typeof chainId !== "undefined" && chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (gasPrice && BigInt(gasPrice) > 2n ** 256n - 1n)
    throw new GasPriceTooHighError({ gasPrice });
}
assert6.parseError = (error) => (
  /* v8 ignore next */
  error
);
function deserialize(serialized) {
  const tuple = toHex3(serialized);
  const [nonce, gasPrice, gas, to3, value, data, chainIdOrV_, r, s] = tuple;
  if (!(tuple.length === 6 || tuple.length === 9))
    throw new InvalidSerializedError({
      attributes: {
        nonce,
        gasPrice,
        gas,
        to: to3,
        value,
        data,
        ...tuple.length > 6 ? {
          v: chainIdOrV_,
          r,
          s
        } : {}
      },
      serialized,
      type
    });
  const transaction = {
    type
  };
  if (validate(to3) && to3 !== "0x")
    transaction.to = to3;
  if (validate(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate(data) && data !== "0x")
    transaction.data = data;
  if (validate(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate(gasPrice) && gasPrice !== "0x")
    transaction.gasPrice = BigInt(gasPrice);
  if (tuple.length === 6)
    return transaction;
  const chainIdOrV = validate(chainIdOrV_) && chainIdOrV_ !== "0x" ? Number(chainIdOrV_) : 0;
  if (s === "0x" && r === "0x") {
    if (chainIdOrV > 0)
      transaction.chainId = Number(chainIdOrV);
    return transaction;
  }
  const v = chainIdOrV;
  const chainId = Math.floor((v - 35) / 2);
  if (chainId > 0)
    transaction.chainId = chainId;
  else if (v !== 27 && v !== 28)
    throw new InvalidVError({ value: v });
  transaction.yParity = vToYParity(v);
  transaction.v = v;
  transaction.s = s === "0x" ? 0n : BigInt(s);
  transaction.r = r === "0x" ? 0n : BigInt(r);
  assert6(transaction);
  return transaction;
}
deserialize.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from24(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize(envelope) : envelope;
  assert6(envelope_);
  const signature_ = (() => {
    if (!signature)
      return {};
    const s = from13(signature);
    s.v = yParityToV(s.yParity);
    return s;
  })();
  return {
    ...envelope_,
    ...signature_,
    type: "legacy"
  };
}
from24.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getSignPayload3(envelope) {
  return hash2(envelope, { presign: true });
}
getSignPayload3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function hash2(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize({
    ...envelope,
    ...presign ? {
      r: void 0,
      s: void 0,
      yParity: void 0,
      v: void 0
    } : {}
  }));
}
hash2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function serialize(envelope, options = {}) {
  const { chainId = 0, gas, data, input, nonce, to: to3, value, gasPrice } = envelope;
  assert6(envelope);
  let serialized = [
    nonce ? fromNumber(nonce) : "0x",
    gasPrice ? fromNumber(gasPrice) : "0x",
    gas ? fromNumber(gas) : "0x",
    to3 ?? "0x",
    value ? fromNumber(value) : "0x",
    data ?? input ?? "0x"
  ];
  const signature = (() => {
    if (options.signature)
      return {
        r: options.signature.r,
        s: options.signature.s,
        v: yParityToV(options.signature.yParity)
      };
    if (typeof envelope.r === "undefined" || typeof envelope.s === "undefined")
      return void 0;
    return {
      r: envelope.r,
      s: envelope.s,
      v: envelope.v
    };
  })();
  if (signature) {
    const v = (() => {
      if (signature.v >= 35) {
        const inferredChainId = Math.floor((signature.v - 35) / 2);
        if (inferredChainId > 0)
          return signature.v;
        return 27 + (signature.v === 35 ? 0 : 1);
      }
      if (chainId > 0)
        return chainId * 2 + 35 + signature.v - 27;
      const v2 = 27 + (signature.v === 27 ? 0 : 1);
      if (signature.v !== v2)
        throw new InvalidVError({ value: signature.v });
      return v2;
    })();
    serialized = [
      ...serialized,
      fromNumber(v),
      signature.r === 0n ? "0x" : trimLeft(fromNumber(signature.r)),
      signature.s === 0n ? "0x" : trimLeft(fromNumber(signature.s))
    ];
  } else if (chainId > 0)
    serialized = [...serialized, fromNumber(chainId), "0x", "0x"];
  return fromHex3(serialized);
}
serialize.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toRpc8(envelope) {
  const signature = extract(envelope);
  return {
    ...envelope,
    chainId: typeof envelope.chainId === "number" ? fromNumber(envelope.chainId) : void 0,
    data: envelope.data ?? envelope.input,
    type: "0x0",
    ...typeof envelope.gas === "bigint" ? { gas: fromNumber(envelope.gas) } : {},
    ...typeof envelope.nonce === "bigint" ? { nonce: fromNumber(envelope.nonce) } : {},
    ...typeof envelope.value === "bigint" ? { value: fromNumber(envelope.value) } : {},
    ...typeof envelope.gasPrice === "bigint" ? { gasPrice: fromNumber(envelope.gasPrice) } : {},
    ...signature ? {
      ...toRpc(signature),
      v: signature.yParity === 0 ? "0x1b" : "0x1c"
    } : {}
  };
}
toRpc8.parseError = (error) => (
  /* v8 ignore next */
  error
);
function validate9(envelope) {
  try {
    assert6(envelope);
    return true;
  } catch {
    return false;
  }
}
validate9.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/TransactionEnvelopeEip1559.js
var TransactionEnvelopeEip1559_exports = {};
__export(TransactionEnvelopeEip1559_exports, {
  assert: () => assert7,
  deserialize: () => deserialize2,
  from: () => from25,
  getSignPayload: () => getSignPayload4,
  hash: () => hash3,
  serialize: () => serialize2,
  serializedType: () => serializedType,
  toRpc: () => toRpc9,
  type: () => type2,
  validate: () => validate10
});
var serializedType = "0x02";
var type2 = "eip1559";
function assert7(envelope) {
  const { chainId, maxPriorityFeePerGas, maxFeePerGas, to: to3 } = envelope;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to3)
    assert4(to3, { strict: false });
  if (maxFeePerGas && BigInt(maxFeePerGas) > 2n ** 256n - 1n)
    throw new FeeCapTooHighError({ feeCap: maxFeePerGas });
  if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({
      maxFeePerGas,
      maxPriorityFeePerGas
    });
}
assert7.parseError = (error) => (
  /* v8 ignore next */
  error
);
function deserialize2(serialized) {
  const transactionArray = toHex3(slice(serialized, 1));
  const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to3, value, data, accessList, yParity, r, s] = transactionArray;
  if (!(transactionArray.length === 9 || transactionArray.length === 12))
    throw new InvalidSerializedError({
      attributes: {
        chainId,
        nonce,
        maxPriorityFeePerGas,
        maxFeePerGas,
        gas,
        to: to3,
        value,
        data,
        accessList,
        ...transactionArray.length > 9 ? {
          yParity,
          r,
          s
        } : {}
      },
      serialized,
      type: type2
    });
  let transaction = {
    chainId: Number(chainId),
    type: type2
  };
  if (validate(to3) && to3 !== "0x")
    transaction.to = to3;
  if (validate(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate(data) && data !== "0x")
    transaction.data = data;
  if (validate(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate(maxFeePerGas) && maxFeePerGas !== "0x")
    transaction.maxFeePerGas = BigInt(maxFeePerGas);
  if (validate(maxPriorityFeePerGas) && maxPriorityFeePerGas !== "0x")
    transaction.maxPriorityFeePerGas = BigInt(maxPriorityFeePerGas);
  if (accessList.length !== 0 && accessList !== "0x")
    transaction.accessList = fromTupleList(accessList);
  const signature = r && s && yParity ? fromTuple([yParity, r, s]) : void 0;
  if (signature)
    transaction = {
      ...transaction,
      ...signature
    };
  assert7(transaction);
  return transaction;
}
deserialize2.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from25(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize2(envelope) : envelope;
  assert7(envelope_);
  return {
    ...envelope_,
    ...signature ? from13(signature) : {},
    type: "eip1559"
  };
}
from25.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getSignPayload4(envelope) {
  return hash3(envelope, { presign: true });
}
getSignPayload4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function hash3(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize2({
    ...envelope,
    ...presign ? {
      r: void 0,
      s: void 0,
      yParity: void 0,
      v: void 0
    } : {}
  }));
}
hash3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function serialize2(envelope, options = {}) {
  const { chainId, gas, nonce, to: to3, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data, input } = envelope;
  assert7(envelope);
  const accessTupleList = toTupleList(accessList);
  const signature = extract(options.signature || envelope);
  const serialized = [
    fromNumber(chainId),
    nonce ? fromNumber(nonce) : "0x",
    maxPriorityFeePerGas ? fromNumber(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? fromNumber(maxFeePerGas) : "0x",
    gas ? fromNumber(gas) : "0x",
    to3 ?? "0x",
    value ? fromNumber(value) : "0x",
    data ?? input ?? "0x",
    accessTupleList,
    ...signature ? toTuple(signature) : []
  ];
  return concat(serializedType, fromHex3(serialized));
}
serialize2.parseError = (error) => error;
function toRpc9(envelope) {
  const signature = extract(envelope);
  return {
    ...envelope,
    chainId: fromNumber(envelope.chainId),
    data: envelope.data ?? envelope.input,
    type: "0x2",
    ...typeof envelope.gas === "bigint" ? { gas: fromNumber(envelope.gas) } : {},
    ...typeof envelope.nonce === "bigint" ? { nonce: fromNumber(envelope.nonce) } : {},
    ...typeof envelope.value === "bigint" ? { value: fromNumber(envelope.value) } : {},
    ...typeof envelope.maxFeePerGas === "bigint" ? { maxFeePerGas: fromNumber(envelope.maxFeePerGas) } : {},
    ...typeof envelope.maxPriorityFeePerGas === "bigint" ? {
      maxPriorityFeePerGas: fromNumber(envelope.maxPriorityFeePerGas)
    } : {},
    ...signature ? toRpc(signature) : {}
  };
}
toRpc9.parseError = (error) => error;
function validate10(envelope) {
  try {
    assert7(envelope);
    return true;
  } catch {
    return false;
  }
}
validate10.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/TransactionEnvelopeEip2930.js
var TransactionEnvelopeEip2930_exports = {};
__export(TransactionEnvelopeEip2930_exports, {
  assert: () => assert8,
  deserialize: () => deserialize3,
  from: () => from26,
  getSignPayload: () => getSignPayload5,
  hash: () => hash4,
  serialize: () => serialize3,
  serializedType: () => serializedType2,
  toRpc: () => toRpc10,
  type: () => type3,
  validate: () => validate11
});
var serializedType2 = "0x01";
var type3 = "eip2930";
function assert8(envelope) {
  const { chainId, gasPrice, to: to3 } = envelope;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to3)
    assert4(to3, { strict: false });
  if (gasPrice && BigInt(gasPrice) > 2n ** 256n - 1n)
    throw new GasPriceTooHighError({ gasPrice });
}
assert8.parseError = (error) => (
  /* v8 ignore next */
  error
);
function deserialize3(serialized) {
  const transactionArray = toHex3(slice(serialized, 1));
  const [chainId, nonce, gasPrice, gas, to3, value, data, accessList, yParity, r, s] = transactionArray;
  if (!(transactionArray.length === 8 || transactionArray.length === 11))
    throw new InvalidSerializedError({
      attributes: {
        chainId,
        nonce,
        gasPrice,
        gas,
        to: to3,
        value,
        data,
        accessList,
        ...transactionArray.length > 8 ? {
          yParity,
          r,
          s
        } : {}
      },
      serialized,
      type: type3
    });
  let transaction = {
    chainId: Number(chainId),
    type: type3
  };
  if (validate(to3) && to3 !== "0x")
    transaction.to = to3;
  if (validate(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate(data) && data !== "0x")
    transaction.data = data;
  if (validate(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate(gasPrice) && gasPrice !== "0x")
    transaction.gasPrice = BigInt(gasPrice);
  if (accessList.length !== 0 && accessList !== "0x")
    transaction.accessList = fromTupleList(accessList);
  const signature = r && s && yParity ? fromTuple([yParity, r, s]) : void 0;
  if (signature)
    transaction = {
      ...transaction,
      ...signature
    };
  assert8(transaction);
  return transaction;
}
deserialize3.parseError = (error) => error;
function from26(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize3(envelope) : envelope;
  assert8(envelope_);
  return {
    ...envelope_,
    ...signature ? from13(signature) : {},
    type: "eip2930"
  };
}
from26.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getSignPayload5(envelope) {
  return hash4(envelope, { presign: true });
}
getSignPayload5.parseError = (error) => (
  /* v8 ignore next */
  error
);
function hash4(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize3({
    ...envelope,
    ...presign ? {
      r: void 0,
      s: void 0,
      yParity: void 0,
      v: void 0
    } : {}
  }));
}
hash4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function serialize3(envelope, options = {}) {
  const { chainId, gas, data, input, nonce, to: to3, value, accessList, gasPrice } = envelope;
  assert8(envelope);
  const accessTupleList = toTupleList(accessList);
  const signature = extract(options.signature || envelope);
  const serialized = [
    fromNumber(chainId),
    nonce ? fromNumber(nonce) : "0x",
    gasPrice ? fromNumber(gasPrice) : "0x",
    gas ? fromNumber(gas) : "0x",
    to3 ?? "0x",
    value ? fromNumber(value) : "0x",
    data ?? input ?? "0x",
    accessTupleList,
    ...signature ? toTuple(signature) : []
  ];
  return concat("0x01", fromHex3(serialized));
}
serialize3.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toRpc10(envelope) {
  const signature = extract(envelope);
  return {
    ...envelope,
    chainId: fromNumber(envelope.chainId),
    data: envelope.data ?? envelope.input,
    ...typeof envelope.gas === "bigint" ? { gas: fromNumber(envelope.gas) } : {},
    ...typeof envelope.nonce === "bigint" ? { nonce: fromNumber(envelope.nonce) } : {},
    ...typeof envelope.value === "bigint" ? { value: fromNumber(envelope.value) } : {},
    ...typeof envelope.gasPrice === "bigint" ? { gasPrice: fromNumber(envelope.gasPrice) } : {},
    type: "0x1",
    ...signature ? toRpc(signature) : {}
  };
}
toRpc10.parseError = (error) => (
  /* v8 ignore next */
  error
);
function validate11(envelope) {
  try {
    assert8(envelope);
    return true;
  } catch {
    return false;
  }
}
validate11.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/TransactionEnvelopeEip4844.js
var TransactionEnvelopeEip4844_exports = {};
__export(TransactionEnvelopeEip4844_exports, {
  assert: () => assert9,
  deserialize: () => deserialize4,
  from: () => from27,
  getSignPayload: () => getSignPayload6,
  hash: () => hash5,
  serialize: () => serialize4,
  serializedType: () => serializedType3,
  toRpc: () => toRpc11,
  type: () => type4,
  validate: () => validate12
});
var serializedType3 = "0x03";
var type4 = "eip4844";
function assert9(envelope) {
  const { blobVersionedHashes } = envelope;
  if (blobVersionedHashes) {
    if (blobVersionedHashes.length === 0)
      throw new EmptyBlobVersionedHashesError();
    for (const hash7 of blobVersionedHashes) {
      const size4 = size2(hash7);
      const version2 = toNumber(slice(hash7, 0, 1));
      if (size4 !== 32)
        throw new InvalidVersionedHashSizeError({ hash: hash7, size: size4 });
      if (version2 !== versionedHashVersion)
        throw new InvalidVersionedHashVersionError({
          hash: hash7,
          version: version2
        });
    }
  }
  assert7(envelope);
}
assert9.parseError = (error) => (
  /* v8 ignore next */
  error
);
function deserialize4(serialized) {
  const transactionOrWrapperArray = toHex3(slice(serialized, 1));
  const hasNetworkWrapper = transactionOrWrapperArray.length === 4;
  const transactionArray = hasNetworkWrapper ? transactionOrWrapperArray[0] : transactionOrWrapperArray;
  const wrapperArray = hasNetworkWrapper ? transactionOrWrapperArray.slice(1) : [];
  const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to3, value, data, accessList, maxFeePerBlobGas, blobVersionedHashes, yParity, r, s] = transactionArray;
  const [blobs, commitments, proofs] = wrapperArray;
  if (!(transactionArray.length === 11 || transactionArray.length === 14))
    throw new InvalidSerializedError({
      attributes: {
        chainId,
        nonce,
        maxPriorityFeePerGas,
        maxFeePerGas,
        gas,
        to: to3,
        value,
        data,
        accessList,
        ...transactionArray.length > 9 ? {
          yParity,
          r,
          s
        } : {}
      },
      serialized,
      type: type4
    });
  let transaction = {
    blobVersionedHashes,
    chainId: Number(chainId),
    type: type4
  };
  if (validate(to3) && to3 !== "0x")
    transaction.to = to3;
  if (validate(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate(data) && data !== "0x")
    transaction.data = data;
  if (validate(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate(maxFeePerBlobGas) && maxFeePerBlobGas !== "0x")
    transaction.maxFeePerBlobGas = BigInt(maxFeePerBlobGas);
  if (validate(maxFeePerGas) && maxFeePerGas !== "0x")
    transaction.maxFeePerGas = BigInt(maxFeePerGas);
  if (validate(maxPriorityFeePerGas) && maxPriorityFeePerGas !== "0x")
    transaction.maxPriorityFeePerGas = BigInt(maxPriorityFeePerGas);
  if ((accessList == null ? void 0 : accessList.length) !== 0 && accessList !== "0x")
    transaction.accessList = fromTupleList(accessList);
  if (blobs && commitments && proofs)
    transaction.sidecars = toSidecars(blobs, {
      commitments,
      proofs
    });
  const signature = r && s && yParity ? fromTuple([yParity, r, s]) : void 0;
  if (signature)
    transaction = {
      ...transaction,
      ...signature
    };
  assert9(transaction);
  return transaction;
}
deserialize4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from27(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize4(envelope) : envelope;
  assert9(envelope_);
  return {
    ...envelope_,
    ...signature ? from13(signature) : {},
    type: "eip4844"
  };
}
from27.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getSignPayload6(envelope) {
  return hash5(envelope, { presign: true });
}
getSignPayload6.parseError = (error) => (
  /* v8 ignore next */
  error
);
function hash5(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize4({
    ...envelope,
    ...presign ? {
      sidecars: void 0,
      r: void 0,
      s: void 0,
      yParity: void 0,
      v: void 0
    } : {}
  }));
}
hash5.parseError = (error) => (
  /* v8 ignore next */
  error
);
function serialize4(envelope, options = {}) {
  const { blobVersionedHashes, chainId, gas, nonce, to: to3, value, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = envelope;
  assert9(envelope);
  const accessTupleList = toTupleList(accessList);
  const signature = extract(options.signature || envelope);
  const serialized = [
    fromNumber(chainId),
    nonce ? fromNumber(nonce) : "0x",
    maxPriorityFeePerGas ? fromNumber(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? fromNumber(maxFeePerGas) : "0x",
    gas ? fromNumber(gas) : "0x",
    to3 ?? "0x",
    value ? fromNumber(value) : "0x",
    data ?? "0x",
    accessTupleList,
    maxFeePerBlobGas ? fromNumber(maxFeePerBlobGas) : "0x",
    blobVersionedHashes ?? [],
    ...signature ? toTuple(signature) : []
  ];
  const sidecars = options.sidecars || envelope.sidecars;
  const blobs = [];
  const commitments = [];
  const proofs = [];
  if (sidecars)
    for (let i = 0; i < sidecars.length; i++) {
      const { blob, commitment, proof } = sidecars[i];
      blobs.push(blob);
      commitments.push(commitment);
      proofs.push(proof);
    }
  return concat("0x03", sidecars ? (
    // If sidecars are provided, envelope turns into a "network wrapper":
    fromHex3([serialized, blobs, commitments, proofs])
  ) : (
    // Otherwise, standard envelope is used:
    fromHex3(serialized)
  ));
}
serialize4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toRpc11(envelope) {
  const signature = extract(envelope);
  return {
    ...envelope,
    chainId: fromNumber(envelope.chainId),
    data: envelope.data ?? envelope.input,
    ...typeof envelope.gas === "bigint" ? { gas: fromNumber(envelope.gas) } : {},
    ...typeof envelope.nonce === "bigint" ? { nonce: fromNumber(envelope.nonce) } : {},
    ...typeof envelope.value === "bigint" ? { value: fromNumber(envelope.value) } : {},
    ...typeof envelope.maxFeePerBlobGas === "bigint" ? { maxFeePerBlobGas: fromNumber(envelope.maxFeePerBlobGas) } : {},
    ...typeof envelope.maxFeePerGas === "bigint" ? { maxFeePerGas: fromNumber(envelope.maxFeePerGas) } : {},
    ...typeof envelope.maxPriorityFeePerGas === "bigint" ? { maxPriorityFeePerGas: fromNumber(envelope.maxPriorityFeePerGas) } : {},
    type: "0x3",
    ...signature ? toRpc(signature) : {}
  };
}
toRpc11.parseError = (error) => (
  /* v8 ignore next */
  error
);
function validate12(envelope) {
  try {
    assert9(envelope);
    return true;
  } catch {
    return false;
  }
}
validate12.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/TransactionEnvelopeEip7702.js
var TransactionEnvelopeEip7702_exports = {};
__export(TransactionEnvelopeEip7702_exports, {
  assert: () => assert10,
  deserialize: () => deserialize5,
  from: () => from28,
  getSignPayload: () => getSignPayload7,
  hash: () => hash6,
  serialize: () => serialize5,
  serializedType: () => serializedType4,
  type: () => type5,
  validate: () => validate13
});
var serializedType4 = "0x04";
var type5 = "eip7702";
function assert10(envelope) {
  const { authorizationList } = envelope;
  if (authorizationList) {
    for (const authorization of authorizationList) {
      const { address, chainId } = authorization;
      if (address)
        assert4(address, { strict: false });
      if (Number(chainId) < 0)
        throw new InvalidChainIdError({ chainId });
    }
  }
  assert7(envelope);
}
assert10.parseError = (error) => (
  /* v8 ignore next */
  error
);
function deserialize5(serialized) {
  const transactionArray = toHex3(slice(serialized, 1));
  const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to3, value, data, accessList, authorizationList, yParity, r, s] = transactionArray;
  if (!(transactionArray.length === 10 || transactionArray.length === 13))
    throw new InvalidSerializedError({
      attributes: {
        chainId,
        nonce,
        maxPriorityFeePerGas,
        maxFeePerGas,
        gas,
        to: to3,
        value,
        data,
        accessList,
        authorizationList,
        ...transactionArray.length > 9 ? {
          yParity,
          r,
          s
        } : {}
      },
      serialized,
      type: type5
    });
  let transaction = {
    chainId: Number(chainId),
    type: type5
  };
  if (validate(to3) && to3 !== "0x")
    transaction.to = to3;
  if (validate(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate(data) && data !== "0x")
    transaction.data = data;
  if (validate(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate(maxFeePerGas) && maxFeePerGas !== "0x")
    transaction.maxFeePerGas = BigInt(maxFeePerGas);
  if (validate(maxPriorityFeePerGas) && maxPriorityFeePerGas !== "0x")
    transaction.maxPriorityFeePerGas = BigInt(maxPriorityFeePerGas);
  if (accessList.length !== 0 && accessList !== "0x")
    transaction.accessList = fromTupleList(accessList);
  if (authorizationList !== "0x")
    transaction.authorizationList = fromTupleList2(authorizationList);
  const signature = r && s && yParity ? fromTuple([yParity, r, s]) : void 0;
  if (signature)
    transaction = {
      ...transaction,
      ...signature
    };
  assert10(transaction);
  return transaction;
}
deserialize5.parseError = (error) => (
  /* v8 ignore next */
  error
);
function from28(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize5(envelope) : envelope;
  assert10(envelope_);
  return {
    ...envelope_,
    ...signature ? from13(signature) : {},
    type: "eip7702"
  };
}
from28.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getSignPayload7(envelope) {
  return hash6(envelope, { presign: true });
}
getSignPayload7.parseError = (error) => (
  /* v8 ignore next */
  error
);
function hash6(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize5({
    ...envelope,
    ...presign ? {
      r: void 0,
      s: void 0,
      yParity: void 0
    } : {}
  }));
}
hash6.parseError = (error) => (
  /* v8 ignore next */
  error
);
function serialize5(envelope, options = {}) {
  const { authorizationList, chainId, gas, nonce, to: to3, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data, input } = envelope;
  assert10(envelope);
  const accessTupleList = toTupleList(accessList);
  const authorizationTupleList = toTupleList2(authorizationList);
  const signature = extract(options.signature || envelope);
  const serialized = [
    fromNumber(chainId),
    nonce ? fromNumber(nonce) : "0x",
    maxPriorityFeePerGas ? fromNumber(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? fromNumber(maxFeePerGas) : "0x",
    gas ? fromNumber(gas) : "0x",
    to3 ?? "0x",
    value ? fromNumber(value) : "0x",
    data ?? input ?? "0x",
    accessTupleList,
    authorizationTupleList,
    ...signature ? toTuple(signature) : []
  ];
  return concat(serializedType4, fromHex3(serialized));
}
serialize5.parseError = (error) => (
  /* v8 ignore next */
  error
);
function validate13(envelope) {
  try {
    assert10(envelope);
    return true;
  } catch {
    return false;
  }
}
validate13.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/TransactionReceipt.js
var TransactionReceipt_exports = {};
__export(TransactionReceipt_exports, {
  fromRpc: () => fromRpc8,
  fromRpcStatus: () => fromRpcStatus,
  fromRpcType: () => fromRpcType2,
  toRpc: () => toRpc12,
  toRpcStatus: () => toRpcStatus,
  toRpcType: () => toRpcType2
});
var fromRpcStatus = {
  "0x0": "reverted",
  "0x1": "success"
};
var toRpcStatus = {
  reverted: "0x0",
  success: "0x1"
};
var fromRpcType2 = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
var toRpcType2 = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3",
  eip7702: "0x4"
};
function fromRpc8(receipt) {
  if (!receipt)
    return null;
  return {
    ...receipt,
    blobGasPrice: receipt.blobGasPrice ? BigInt(receipt.blobGasPrice) : void 0,
    blobGasUsed: receipt.blobGasUsed ? BigInt(receipt.blobGasUsed) : void 0,
    blockNumber: BigInt(receipt.blockNumber ?? 0n),
    cumulativeGasUsed: BigInt(receipt.cumulativeGasUsed ?? 0n),
    effectiveGasPrice: BigInt(receipt.effectiveGasPrice ?? 0n),
    gasUsed: BigInt(receipt.gasUsed ?? 0n),
    logs: receipt.logs.map((log) => fromRpc7(log, { pending: false })),
    status: fromRpcStatus[receipt.status],
    transactionIndex: Number(receipt.transactionIndex ?? 0),
    type: fromRpcType2[receipt.type] || receipt.type
  };
}
fromRpc8.parseError = (error) => (
  /* v8 ignore next */
  error
);
function toRpc12(receipt) {
  return {
    blobGasPrice: receipt.blobGasPrice ? fromNumber(receipt.blobGasPrice) : void 0,
    blobGasUsed: receipt.blobGasUsed ? fromNumber(receipt.blobGasUsed) : void 0,
    blockHash: receipt.blockHash,
    blockNumber: fromNumber(receipt.blockNumber),
    contractAddress: receipt.contractAddress,
    cumulativeGasUsed: fromNumber(receipt.cumulativeGasUsed),
    effectiveGasPrice: fromNumber(receipt.effectiveGasPrice),
    from: receipt.from,
    gasUsed: fromNumber(receipt.gasUsed),
    logs: receipt.logs.map(toRpc7),
    logsBloom: receipt.logsBloom,
    root: receipt.root,
    status: toRpcStatus[receipt.status],
    to: receipt.to,
    transactionHash: receipt.transactionHash,
    transactionIndex: fromNumber(receipt.transactionIndex),
    type: toRpcType2[receipt.type] ?? receipt.type
  };
}
toRpc12.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/TransactionRequest.js
var TransactionRequest_exports = {};
__export(TransactionRequest_exports, {
  toRpc: () => toRpc13
});
function toRpc13(request) {
  const request_rpc = {};
  if (typeof request.accessList !== "undefined")
    request_rpc.accessList = request.accessList;
  if (typeof request.authorizationList !== "undefined")
    request_rpc.authorizationList = toRpcList(request.authorizationList);
  if (typeof request.blobVersionedHashes !== "undefined")
    request_rpc.blobVersionedHashes = request.blobVersionedHashes;
  if (typeof request.blobs !== "undefined")
    request_rpc.blobs = request.blobs;
  if (typeof request.chainId !== "undefined")
    request_rpc.chainId = fromNumber(request.chainId);
  if (typeof request.data !== "undefined") {
    request_rpc.data = request.data;
    request_rpc.input = request.data;
  } else if (typeof request.input !== "undefined") {
    request_rpc.data = request.input;
    request_rpc.input = request.input;
  }
  if (typeof request.from !== "undefined")
    request_rpc.from = request.from;
  if (typeof request.gas !== "undefined")
    request_rpc.gas = fromNumber(request.gas);
  if (typeof request.gasPrice !== "undefined")
    request_rpc.gasPrice = fromNumber(request.gasPrice);
  if (typeof request.maxFeePerBlobGas !== "undefined")
    request_rpc.maxFeePerBlobGas = fromNumber(request.maxFeePerBlobGas);
  if (typeof request.maxFeePerGas !== "undefined")
    request_rpc.maxFeePerGas = fromNumber(request.maxFeePerGas);
  if (typeof request.maxPriorityFeePerGas !== "undefined")
    request_rpc.maxPriorityFeePerGas = fromNumber(request.maxPriorityFeePerGas);
  if (typeof request.maxPriorityFeePerGas !== "undefined")
    request_rpc.maxPriorityFeePerGas = fromNumber(request.maxPriorityFeePerGas);
  if (typeof request.nonce !== "undefined")
    request_rpc.nonce = fromNumber(request.nonce);
  if (typeof request.to !== "undefined")
    request_rpc.to = request.to;
  if (typeof request.type !== "undefined")
    request_rpc.type = request.type;
  if (typeof request.value !== "undefined")
    request_rpc.value = fromNumber(request.value);
  return request_rpc;
}
toRpc13.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/TypedData.js
var TypedData_exports = {};
__export(TypedData_exports, {
  BytesSizeMismatchError: () => BytesSizeMismatchError2,
  InvalidPrimaryTypeError: () => InvalidPrimaryTypeError,
  InvalidStructTypeError: () => InvalidStructTypeError,
  assert: () => assert11,
  domainSeparator: () => domainSeparator,
  encode: () => encode7,
  encodeData: () => encodeData2,
  encodeField: () => encodeField,
  encodeType: () => encodeType,
  extractEip712DomainTypes: () => extractEip712DomainTypes,
  findTypeDependencies: () => findTypeDependencies,
  getSignPayload: () => getSignPayload8,
  hashDomain: () => hashDomain,
  hashStruct: () => hashStruct,
  hashType: () => hashType,
  serialize: () => serialize6,
  validate: () => validate14
});
function assert11(value) {
  const { domain, message, primaryType, types } = value;
  const validateData = (struct, data) => {
    for (const param of struct) {
      const { name, type: type6 } = param;
      const value2 = data[name];
      const integerMatch = type6.match(integerRegex);
      if (integerMatch && (typeof value2 === "number" || typeof value2 === "bigint")) {
        const [, base3, size_] = integerMatch;
        fromNumber(value2, {
          signed: base3 === "int",
          size: Number.parseInt(size_ ?? "") / 8
        });
      }
      if (type6 === "address" && typeof value2 === "string" && !validate5(value2))
        throw new InvalidAddressError({
          address: value2,
          cause: new InvalidInputError()
        });
      const bytesMatch = type6.match(bytesRegex);
      if (bytesMatch) {
        const [, size4] = bytesMatch;
        if (size4 && size2(value2) !== Number.parseInt(size4))
          throw new BytesSizeMismatchError2({
            expectedSize: Number.parseInt(size4),
            givenSize: size2(value2)
          });
      }
      const struct2 = types[type6];
      if (struct2) {
        validateReference(type6);
        validateData(struct2, value2);
      }
    }
  };
  if (types.EIP712Domain && domain)
    validateData(types.EIP712Domain, domain);
  if (primaryType !== "EIP712Domain") {
    if (types[primaryType])
      validateData(types[primaryType], message);
    else
      throw new InvalidPrimaryTypeError({ primaryType, types });
  }
}
assert11.parseError = (error) => (
  /* v8 ignore next */
  error
);
function domainSeparator(domain) {
  return hashDomain({
    domain
  });
}
domainSeparator.parseError = (error) => (
  /* v8 ignore next */
  error
);
function encode7(value) {
  const { domain = {}, message, primaryType } = value;
  const types = {
    EIP712Domain: extractEip712DomainTypes(domain),
    ...value.types
  };
  assert11({
    domain,
    message,
    primaryType,
    types
  });
  const parts = ["0x19", "0x01"];
  if (domain)
    parts.push(hashDomain({
      domain,
      types
    }));
  if (primaryType !== "EIP712Domain")
    parts.push(hashStruct({
      data: message,
      primaryType,
      types
    }));
  return concat(...parts);
}
encode7.parseError = (error) => error;
function encodeType(value) {
  const { primaryType, types } = value;
  let result = "";
  const unsortedDeps = findTypeDependencies({ primaryType, types });
  unsortedDeps.delete(primaryType);
  const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
  for (const type6 of deps) {
    result += `${type6}(${(types[type6] ?? []).map(({ name, type: t }) => `${t} ${name}`).join(",")})`;
  }
  return result;
}
encodeType.parseError = (error) => error;
function extractEip712DomainTypes(domain) {
  return [
    typeof (domain == null ? void 0 : domain.name) === "string" && { name: "name", type: "string" },
    (domain == null ? void 0 : domain.version) && { name: "version", type: "string" },
    typeof (domain == null ? void 0 : domain.chainId) === "number" && {
      name: "chainId",
      type: "uint256"
    },
    (domain == null ? void 0 : domain.verifyingContract) && {
      name: "verifyingContract",
      type: "address"
    },
    (domain == null ? void 0 : domain.salt) && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
extractEip712DomainTypes.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getSignPayload8(value) {
  return keccak256(encode7(value));
}
getSignPayload8.parseError = (error) => (
  /* v8 ignore next */
  error
);
function hashDomain(value) {
  const { domain, types } = value;
  return hashStruct({
    data: domain,
    primaryType: "EIP712Domain",
    types: {
      ...types,
      EIP712Domain: (types == null ? void 0 : types.EIP712Domain) || extractEip712DomainTypes(domain)
    }
  });
}
hashDomain.parseError = (error) => error;
function hashStruct(value) {
  const { data, primaryType, types } = value;
  const encoded = encodeData2({
    data,
    primaryType,
    types
  });
  return keccak256(encoded);
}
hashStruct.parseError = (error) => error;
function serialize6(value) {
  const { domain: domain_, message: message_, primaryType, types } = value;
  const normalizeData = (struct, value2) => {
    const data = { ...value2 };
    for (const param of struct) {
      const { name, type: type6 } = param;
      if (type6 === "address")
        data[name] = data[name].toLowerCase();
    }
    return data;
  };
  const domain = (() => {
    if (!types.EIP712Domain)
      return {};
    if (!domain_)
      return {};
    return normalizeData(types.EIP712Domain, domain_);
  })();
  const message = (() => {
    if (primaryType === "EIP712Domain")
      return void 0;
    if (!types[primaryType])
      return {};
    return normalizeData(types[primaryType], message_);
  })();
  return stringify({ domain, message, primaryType, types }, (_, value2) => {
    if (typeof value2 === "bigint")
      return value2.toString();
    return value2;
  });
}
serialize6.parseError = (error) => (
  /* v8 ignore next */
  error
);
function validate14(value) {
  try {
    assert11(value);
    return true;
  } catch {
    return false;
  }
}
validate14.parseError = (error) => error;
var BytesSizeMismatchError2 = class extends BaseError {
  constructor({ expectedSize, givenSize }) {
    super(`Expected bytes${expectedSize}, got bytes${givenSize}.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TypedData.BytesSizeMismatchError"
    });
  }
};
var InvalidPrimaryTypeError = class extends BaseError {
  constructor({ primaryType, types }) {
    super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types))}\`.`, {
      metaMessages: ["Check that the primary type is a key in `types`."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TypedData.InvalidPrimaryTypeError"
    });
  }
};
var InvalidStructTypeError = class extends BaseError {
  constructor({ type: type6 }) {
    super(`Struct type "${type6}" is invalid.`, {
      metaMessages: ["Struct type must not be a Solidity type."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TypedData.InvalidStructTypeError"
    });
  }
};
function encodeData2(value) {
  const { data, primaryType, types } = value;
  const encodedTypes = [{ type: "bytes32" }];
  const encodedValues = [hashType({ primaryType, types })];
  for (const field of types[primaryType] ?? []) {
    const [type6, value2] = encodeField({
      types,
      name: field.name,
      type: field.type,
      value: data[field.name]
    });
    encodedTypes.push(type6);
    encodedValues.push(value2);
  }
  return encode2(encodedTypes, encodedValues);
}
function hashType(value) {
  const { primaryType, types } = value;
  const encodedHashType = fromString(encodeType({ primaryType, types }));
  return keccak256(encodedHashType);
}
function encodeField(properties) {
  let { types, name, type: type6, value } = properties;
  if (types[type6] !== void 0)
    return [
      { type: "bytes32" },
      keccak256(encodeData2({ data: value, primaryType: type6, types }))
    ];
  if (type6 === "bytes") {
    const prepend = value.length % 2 ? "0" : "";
    value = `0x${prepend + value.slice(2)}`;
    return [{ type: "bytes32" }, keccak256(value, { as: "Hex" })];
  }
  if (type6 === "string")
    return [
      { type: "bytes32" },
      keccak256(fromString2(value), { as: "Hex" })
    ];
  if (type6.lastIndexOf("]") === type6.length - 1) {
    const parsedType = type6.slice(0, type6.lastIndexOf("["));
    const typeValuePairs = value.map((item) => encodeField({
      name,
      type: parsedType,
      types,
      value: item
    }));
    return [
      { type: "bytes32" },
      keccak256(encode2(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))
    ];
  }
  return [{ type: type6 }, value];
}
function findTypeDependencies(value, results = /* @__PURE__ */ new Set()) {
  const { primaryType: primaryType_, types } = value;
  const match = primaryType_.match(/^\w*/u);
  const primaryType = match == null ? void 0 : match[0];
  if (results.has(primaryType) || types[primaryType] === void 0)
    return results;
  results.add(primaryType);
  for (const field of types[primaryType])
    findTypeDependencies({ primaryType: field.type, types }, results);
  return results;
}
function validateReference(type6) {
  if (type6 === "address" || type6 === "bool" || type6 === "string" || type6.startsWith("bytes") || type6.startsWith("uint") || type6.startsWith("int"))
    throw new InvalidStructTypeError({ type: type6 });
}

// node_modules/ox/_esm/core/ValidatorData.js
var ValidatorData_exports = {};
__export(ValidatorData_exports, {
  encode: () => encode8,
  getSignPayload: () => getSignPayload9
});
function encode8(value) {
  const { data, validator } = value;
  return concat(
    // Validator Data Format: `0x19 ‖ 0x00 ‖ <intended validator address> ‖ <data to sign>`
    "0x19",
    "0x00",
    validator,
    from(data)
  );
}
encode8.parseError = (error) => error;
function getSignPayload9(value) {
  return keccak256(encode8(value));
}
getSignPayload9.parseError = (error) => error;

// node_modules/ox/_esm/core/WebAuthnP256.js
var WebAuthnP256_exports = {};
__export(WebAuthnP256_exports, {
  CredentialCreationFailedError: () => CredentialCreationFailedError,
  CredentialRequestFailedError: () => CredentialRequestFailedError,
  createChallenge: () => createChallenge,
  createCredential: () => createCredential,
  getAuthenticatorData: () => getAuthenticatorData,
  getClientDataJSON: () => getClientDataJSON,
  getCredentialCreationOptions: () => getCredentialCreationOptions,
  getCredentialRequestOptions: () => getCredentialRequestOptions,
  getSignPayload: () => getSignPayload10,
  sign: () => sign4,
  verify: () => verify4
});

// node_modules/ox/_esm/core/internal/webauthn.js
function parseAsn1Signature(bytes) {
  const r_start = bytes[4] === 0 ? 5 : 4;
  const r_end = r_start + 32;
  const s_start = bytes[r_end + 2] === 0 ? r_end + 3 : r_end + 2;
  const r = BigInt(fromBytes(bytes.slice(r_start, r_end)));
  const s = BigInt(fromBytes(bytes.slice(s_start)));
  return {
    r,
    s: s > p256.CURVE.n / 2n ? p256.CURVE.n - s : s
  };
}
async function parseCredentialPublicKey(cPublicKey) {
  const cryptoKey = await crypto.subtle.importKey("spki", new Uint8Array(cPublicKey), {
    name: "ECDSA",
    namedCurve: "P-256",
    hash: "SHA-256"
  }, true, ["verify"]);
  const publicKey = new Uint8Array(await crypto.subtle.exportKey("raw", cryptoKey));
  return from4(publicKey);
}

// node_modules/ox/_esm/core/WebAuthnP256.js
var createChallenge = Uint8Array.from([
  105,
  171,
  180,
  181,
  160,
  222,
  75,
  198,
  42,
  42,
  32,
  31,
  141,
  37,
  186,
  233
]);
async function createCredential(options) {
  const { createFn = window.navigator.credentials.create.bind(window.navigator.credentials), ...rest } = options;
  const creationOptions = getCredentialCreationOptions(rest);
  try {
    const credential = await createFn(creationOptions);
    if (!credential)
      throw new CredentialCreationFailedError();
    const publicKey = await parseCredentialPublicKey(new Uint8Array(credential.response.getPublicKey()));
    return {
      id: credential.id,
      publicKey,
      raw: credential
    };
  } catch (error) {
    throw new CredentialCreationFailedError({
      cause: error
    });
  }
}
createCredential.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getAuthenticatorData(options = {}) {
  const { flag = 5, rpId = window.location.hostname, signCount = 0 } = options;
  const rpIdHash = sha2562(fromString(rpId));
  const flag_bytes = fromNumber(flag, { size: 1 });
  const signCount_bytes = fromNumber(signCount, { size: 4 });
  return concat(rpIdHash, flag_bytes, signCount_bytes);
}
getAuthenticatorData.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getClientDataJSON(options) {
  const { challenge: challenge2, crossOrigin = false, extraClientData, origin = window.location.origin } = options;
  return JSON.stringify({
    type: "webauthn.get",
    challenge: fromHex6(challenge2, { url: true, pad: false }),
    origin,
    crossOrigin,
    ...extraClientData
  });
}
getClientDataJSON.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getCredentialCreationOptions(options) {
  const { attestation = "none", authenticatorSelection = {
    residentKey: "preferred",
    requireResidentKey: false,
    userVerification: "required"
  }, challenge: challenge2 = createChallenge, excludeCredentialIds, name: name_, rp = {
    id: window.location.hostname,
    name: window.document.title
  }, user, extensions } = options;
  const name = (user == null ? void 0 : user.name) ?? name_;
  return {
    publicKey: {
      attestation,
      authenticatorSelection,
      challenge: challenge2,
      ...excludeCredentialIds ? {
        excludeCredentials: excludeCredentialIds == null ? void 0 : excludeCredentialIds.map((id) => ({
          id: toBytes8(id),
          type: "public-key"
        }))
      } : {},
      pubKeyCredParams: [
        {
          type: "public-key",
          alg: -7
          // p256
        }
      ],
      rp,
      user: {
        id: (user == null ? void 0 : user.id) ?? keccak256(fromString2(name), { as: "Bytes" }),
        name,
        displayName: (user == null ? void 0 : user.displayName) ?? name
      },
      extensions
    }
  };
}
getCredentialCreationOptions.parseError = (error) => (
  /* v8 ignore next */
  error
);
function getCredentialRequestOptions(options) {
  const { credentialId, challenge: challenge2, rpId = window.location.hostname, userVerification = "required" } = options;
  return {
    publicKey: {
      ...credentialId ? {
        allowCredentials: [
          {
            id: toBytes8(credentialId),
            type: "public-key"
          }
        ]
      } : {},
      challenge: fromHex(challenge2),
      rpId,
      userVerification
    }
  };
}
getCredentialRequestOptions.parseError = (error) => error;
function getSignPayload10(options) {
  const { challenge: challenge2, crossOrigin, extraClientData, flag, origin, rpId, signCount, userVerification = "required" } = options;
  const authenticatorData = getAuthenticatorData({
    flag,
    rpId,
    signCount
  });
  const clientDataJSON = getClientDataJSON({
    challenge: challenge2,
    crossOrigin,
    extraClientData,
    origin
  });
  const clientDataJSONHash = sha2562(fromString(clientDataJSON));
  const challengeIndex = clientDataJSON.indexOf('"challenge"');
  const typeIndex = clientDataJSON.indexOf('"type"');
  const metadata = {
    authenticatorData,
    clientDataJSON,
    challengeIndex,
    typeIndex,
    userVerificationRequired: userVerification === "required"
  };
  const payload = concat(authenticatorData, clientDataJSONHash);
  return { metadata, payload };
}
getSignPayload10.parseError = (error) => (
  /* v8 ignore next */
  error
);
async function sign4(options) {
  const { getFn = window.navigator.credentials.get.bind(window.navigator.credentials), ...rest } = options;
  const requestOptions = getCredentialRequestOptions(rest);
  try {
    const credential = await getFn(requestOptions);
    if (!credential)
      throw new CredentialRequestFailedError();
    const response = credential.response;
    const clientDataJSON = String.fromCharCode(...new Uint8Array(response.clientDataJSON));
    const challengeIndex = clientDataJSON.indexOf('"challenge"');
    const typeIndex = clientDataJSON.indexOf('"type"');
    const signature = parseAsn1Signature(new Uint8Array(response.signature));
    return {
      metadata: {
        authenticatorData: fromBytes(new Uint8Array(response.authenticatorData)),
        clientDataJSON,
        challengeIndex,
        typeIndex,
        userVerificationRequired: requestOptions.publicKey.userVerification === "required"
      },
      signature,
      raw: credential
    };
  } catch (error) {
    throw new CredentialRequestFailedError({
      cause: error
    });
  }
}
sign4.parseError = (error) => (
  /* v8 ignore next */
  error
);
function verify4(options) {
  const { challenge: challenge2, hash: hash7 = true, metadata, publicKey, signature } = options;
  const { authenticatorData, challengeIndex, clientDataJSON, typeIndex, userVerificationRequired } = metadata;
  const authenticatorDataBytes = fromHex(authenticatorData);
  if (authenticatorDataBytes.length < 37)
    return false;
  const flag = authenticatorDataBytes[32];
  if ((flag & 1) !== 1)
    return false;
  if (userVerificationRequired && (flag & 4) !== 4)
    return false;
  if ((flag & 8) !== 8 && (flag & 16) === 16)
    return false;
  const type6 = '"type":"webauthn.get"';
  if (type6 !== clientDataJSON.slice(Number(typeIndex), type6.length + 1))
    return false;
  const match = clientDataJSON.slice(Number(challengeIndex)).match(/^"challenge":"(.*?)"/);
  if (!match)
    return false;
  const [_, challenge_extracted] = match;
  if (fromBytes(toBytes8(challenge_extracted)) !== challenge2)
    return false;
  const clientDataJSONHash = sha2562(fromString2(clientDataJSON), {
    as: "Bytes"
  });
  const payload = concat2(authenticatorDataBytes, clientDataJSONHash);
  return verify3({
    hash: hash7,
    payload,
    publicKey,
    signature
  });
}
verify4.parseError = (error) => (
  /* v8 ignore next */
  error
);
var CredentialCreationFailedError = class extends BaseError {
  constructor({ cause } = {}) {
    super("Failed to create credential.", {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WebAuthnP256.CredentialCreationFailedError"
    });
  }
};
var CredentialRequestFailedError = class extends BaseError {
  constructor({ cause } = {}) {
    super("Failed to request credential.", {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WebAuthnP256.CredentialRequestFailedError"
    });
  }
};

// node_modules/ox/_esm/core/WebCryptoP256.js
var WebCryptoP256_exports = {};
__export(WebCryptoP256_exports, {
  createKeyPair: () => createKeyPair,
  sign: () => sign5,
  verify: () => verify5
});
async function createKeyPair(options = {}) {
  const { extractable = false } = options;
  const keypair = await globalThis.crypto.subtle.generateKey({
    name: "ECDSA",
    namedCurve: "P-256"
  }, extractable, ["sign", "verify"]);
  const publicKey_raw = await globalThis.crypto.subtle.exportKey("raw", keypair.publicKey);
  const publicKey = from4(new Uint8Array(publicKey_raw));
  return {
    privateKey: keypair.privateKey,
    publicKey
  };
}
createKeyPair.parseError = (error) => (
  /* v8 ignore next */
  error
);
async function sign5(options) {
  const { payload, privateKey } = options;
  const signature = await globalThis.crypto.subtle.sign({
    name: "ECDSA",
    hash: "SHA-256"
  }, privateKey, from2(payload));
  const signature_bytes = fromArray(new Uint8Array(signature));
  const r = toBigInt2(slice2(signature_bytes, 0, 32));
  let s = toBigInt2(slice2(signature_bytes, 32, 64));
  if (s > p256.CURVE.n / 2n)
    s = p256.CURVE.n - s;
  return { r, s };
}
sign5.parseError = (error) => (
  /* v8 ignore next */
  error
);
async function verify5(options) {
  const { payload, signature } = options;
  const publicKey = await globalThis.crypto.subtle.importKey("raw", toBytes3(options.publicKey), { name: "ECDSA", namedCurve: "P-256" }, true, ["verify"]);
  return await globalThis.crypto.subtle.verify({
    name: "ECDSA",
    hash: "SHA-256"
  }, publicKey, concat2(fromNumber2(signature.r), fromNumber2(signature.s)), from2(payload));
}
verify5.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/ox/_esm/core/internal/ens.js
function unwrapLabelhash(label) {
  if (label.length !== 66)
    return null;
  if (label.indexOf("[") !== 0)
    return null;
  if (label.indexOf("]") !== 65)
    return null;
  const hash7 = `0x${label.slice(1, 65)}`;
  if (!validate(hash7, { strict: true }))
    return null;
  return hash7;
}

// node_modules/ox/_esm/core/Ens.js
function labelhash(label) {
  const result = new Uint8Array(32).fill(0);
  if (!label)
    return fromBytes(result);
  return unwrapLabelhash(label) || keccak256(fromString(label));
}
labelhash.parseError = (error) => (
  /* v8 ignore next */
  error
);
function namehash(name) {
  let result = new Uint8Array(32).fill(0);
  if (!name)
    return fromBytes(result);
  const labels = name.split(".");
  for (let i = labels.length - 1; i >= 0; i -= 1) {
    const hashFromEncodedLabel = unwrapLabelhash(labels[i]);
    const hashed = hashFromEncodedLabel ? fromHex(hashFromEncodedLabel) : keccak256(fromString2(labels[i]), { as: "Bytes" });
    result = keccak256(concat2(result, hashed), { as: "Bytes" });
  }
  return fromBytes(result);
}
namehash.parseError = (error) => (
  /* v8 ignore next */
  error
);
function normalize(name) {
  return ens_normalize(name);
}
normalize.parseError = (error) => (
  /* v8 ignore next */
  error
);

// node_modules/viem/_esm/utils/ens/normalize.js
function normalize2(name) {
  return normalize(name);
}

// node_modules/@rainbow-me/rainbowkit/dist/index.js
var import_react19 = __toESM(require_react());
var import_react20 = __toESM(require_react());
var import_react21 = __toESM(require_react());
var import_react22 = __toESM(require_react());
var import_react23 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-remove-scroll/dist/es2015/Combination.js
init_tslib_es6();
var React9 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
init_tslib_es6();
var React5 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react = __toESM(require_react());
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/use-sidecar/dist/es2015/hoc.js
init_tslib_es6();
var React2 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/hook.js
var import_react2 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/medium.js
init_tslib_es6();
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer2 = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer2.length) {
        return buffer2[buffer2.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer2.push(item);
      return function() {
        buffer2 = buffer2.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer2.length) {
        var cbs = buffer2;
        buffer2 = [];
        cbs.forEach(cb);
      }
      buffer2 = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer2;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer2.length) {
        var cbs = buffer2;
        buffer2 = [];
        cbs.forEach(cb);
        pendingQueue = buffer2;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer2 = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer2;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/renderProp.js
init_tslib_es6();
var React3 = __toESM(require_react());
var import_react3 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/exports.js
init_tslib_es6();
var React4 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React4.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React5.forwardRef(function(props, parentRef) {
  var ref = React5.useRef(null);
  var _a = React5.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React5.createElement(
    React5.Fragment,
    null,
    enabled && React5.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React5.cloneElement(React5.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React5.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
init_tslib_es6();
var React8 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React7 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React6 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React6.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse3 = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse3(left), parse3(top), parse3(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React7.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React7.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React7.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host;
    } else {
      target = target.parentNode;
    }
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React8.useRef([]);
  var touchStartRef = React8.useRef([0, 0]);
  var activeAxis = React8.useRef();
  var id = React8.useState(idCounter++)[0];
  var Style2 = React8.useState(styleSingleton)[0];
  var lastProps = React8.useRef(props);
  React8.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React8.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React8.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React8.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React8.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React8.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React8.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React8.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React8.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React8.createElement(
    React8.Fragment,
    null,
    inert ? React8.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React8.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React9.forwardRef(function(props, ref) {
  return React9.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/@rainbow-me/rainbowkit/dist/index.js
var import_react24 = __toESM(require_react());

// node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js
function getVarName(variable) {
  var matches = variable.match(/^var\((.*)\)$/);
  if (matches) {
    return matches[1];
  }
  return variable;
}
function get(obj, path2) {
  var result = obj;
  for (var key of path2) {
    if (!(key in result)) {
      throw new Error("Path ".concat(path2.join(" -> "), " does not exist in object"));
    }
    result = result[key];
  }
  return result;
}
function walkObject(obj, fn) {
  var path2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  var clone = {};
  for (var key in obj) {
    var _value = obj[key];
    var currentPath = [...path2, key];
    if (typeof _value === "string" || typeof _value === "number" || _value == null) {
      clone[key] = fn(_value, currentPath);
    } else if (typeof _value === "object" && !Array.isArray(_value)) {
      clone[key] = walkObject(_value, fn, currentPath);
    } else {
      console.warn('Skipping invalid key "'.concat(currentPath.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(_value) ? "Array" : typeof _value, '"'));
    }
  }
  return clone;
}

// node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js
function assignInlineVars(varsOrContract, tokens) {
  var styles = {};
  if (typeof tokens === "object") {
    var _contract = varsOrContract;
    walkObject(tokens, (value2, path2) => {
      if (value2 == null) {
        return;
      }
      var varName2 = get(_contract, path2);
      styles[getVarName(varName2)] = String(value2);
    });
  } else {
    var _vars = varsOrContract;
    for (var varName in _vars) {
      var value = _vars[varName];
      if (value == null) {
        continue;
      }
      styles[getVarName(varName)] = value;
    }
  }
  Object.defineProperty(styles, "toString", {
    value: function value2() {
      return Object.keys(this).map((key) => "".concat(key, ":").concat(this[key])).join(";");
    },
    writable: false
  });
  return styles;
}

// node_modules/@rainbow-me/rainbowkit/dist/index.js
var import_react25 = __toESM(require_react());
var import_react26 = __toESM(require_react());
var import_react27 = __toESM(require_react());
var import_react28 = __toESM(require_react());
var import_react29 = __toESM(require_react());
var import_react30 = __toESM(require_react());
var import_react31 = __toESM(require_react());
var import_react32 = __toESM(require_react());
var import_ua_parser_js = __toESM(require_ua_parser());
var import_react33 = __toESM(require_react());
var import_react34 = __toESM(require_react());
var import_react35 = __toESM(require_react());
var import_react36 = __toESM(require_react());
var import_react37 = __toESM(require_react());
var import_react38 = __toESM(require_react());
var import_react39 = __toESM(require_react());
var import_react40 = __toESM(require_react());
var import_react41 = __toESM(require_react());
var import_react42 = __toESM(require_react());
var import_react43 = __toESM(require_react());
var import_react44 = __toESM(require_react());
var import_react45 = __toESM(require_react());
var import_react46 = __toESM(require_react());
var import_react47 = __toESM(require_react());
var import_react48 = __toESM(require_react());
var import_react49 = __toESM(require_react());
var import_react50 = __toESM(require_react());
var import_react51 = __toESM(require_react());
var import_react52 = __toESM(require_react());
var import_react53 = __toESM(require_react());
var import_react54 = __toESM(require_react());
var import_react55 = __toESM(require_react());
var import_react56 = __toESM(require_react());
var import_react57 = __toESM(require_react());
var import_react58 = __toESM(require_react());
var import_react59 = __toESM(require_react());
var import_react60 = __toESM(require_react());
var import_react61 = __toESM(require_react());
var import_react62 = __toESM(require_react());
var import_react63 = __toESM(require_react());
var import_react64 = __toESM(require_react());
var import_react65 = __toESM(require_react());
var import_react66 = __toESM(require_react());
var import_react67 = __toESM(require_react());
var import_react68 = __toESM(require_react());
var import_react69 = __toESM(require_react());
var import_react70 = __toESM(require_react());
var import_react71 = __toESM(require_react());
var import_react72 = __toESM(require_react());
var import_qrcode = __toESM(require_browser());
var import_react73 = __toESM(require_react());
var import_react74 = __toESM(require_react());
var import_react75 = __toESM(require_react());
var import_react76 = __toESM(require_react());
var import_react77 = __toESM(require_react());
var import_react78 = __toESM(require_react());
var largeScreenMinWidth = 768;
var mapResponsiveValue = createMapValueFn({ conditions: { defaultCondition: "smallScreen", conditionNames: ["smallScreen", "largeScreen"], responsiveArray: void 0 } });
var normalizeResponsiveValue = createNormalizeValueFn({ conditions: { defaultCondition: "smallScreen", conditionNames: ["smallScreen", "largeScreen"], responsiveArray: void 0 } });
var sprinkles = createSprinkles2({ conditions: { defaultCondition: "base", conditionNames: ["base", "hover", "active"], responsiveArray: void 0 }, styles: { background: { values: { accentColor: { conditions: { base: "ju367v9i", hover: "ju367v9j", active: "ju367v9k" }, defaultClass: "ju367v9i" }, accentColorForeground: { conditions: { base: "ju367v9l", hover: "ju367v9m", active: "ju367v9n" }, defaultClass: "ju367v9l" }, actionButtonBorder: { conditions: { base: "ju367v9o", hover: "ju367v9p", active: "ju367v9q" }, defaultClass: "ju367v9o" }, actionButtonBorderMobile: { conditions: { base: "ju367v9r", hover: "ju367v9s", active: "ju367v9t" }, defaultClass: "ju367v9r" }, actionButtonSecondaryBackground: { conditions: { base: "ju367v9u", hover: "ju367v9v", active: "ju367v9w" }, defaultClass: "ju367v9u" }, closeButton: { conditions: { base: "ju367v9x", hover: "ju367v9y", active: "ju367v9z" }, defaultClass: "ju367v9x" }, closeButtonBackground: { conditions: { base: "ju367va0", hover: "ju367va1", active: "ju367va2" }, defaultClass: "ju367va0" }, connectButtonBackground: { conditions: { base: "ju367va3", hover: "ju367va4", active: "ju367va5" }, defaultClass: "ju367va3" }, connectButtonBackgroundError: { conditions: { base: "ju367va6", hover: "ju367va7", active: "ju367va8" }, defaultClass: "ju367va6" }, connectButtonInnerBackground: { conditions: { base: "ju367va9", hover: "ju367vaa", active: "ju367vab" }, defaultClass: "ju367va9" }, connectButtonText: { conditions: { base: "ju367vac", hover: "ju367vad", active: "ju367vae" }, defaultClass: "ju367vac" }, connectButtonTextError: { conditions: { base: "ju367vaf", hover: "ju367vag", active: "ju367vah" }, defaultClass: "ju367vaf" }, connectionIndicator: { conditions: { base: "ju367vai", hover: "ju367vaj", active: "ju367vak" }, defaultClass: "ju367vai" }, downloadBottomCardBackground: { conditions: { base: "ju367val", hover: "ju367vam", active: "ju367van" }, defaultClass: "ju367val" }, downloadTopCardBackground: { conditions: { base: "ju367vao", hover: "ju367vap", active: "ju367vaq" }, defaultClass: "ju367vao" }, error: { conditions: { base: "ju367var", hover: "ju367vas", active: "ju367vat" }, defaultClass: "ju367var" }, generalBorder: { conditions: { base: "ju367vau", hover: "ju367vav", active: "ju367vaw" }, defaultClass: "ju367vau" }, generalBorderDim: { conditions: { base: "ju367vax", hover: "ju367vay", active: "ju367vaz" }, defaultClass: "ju367vax" }, menuItemBackground: { conditions: { base: "ju367vb0", hover: "ju367vb1", active: "ju367vb2" }, defaultClass: "ju367vb0" }, modalBackdrop: { conditions: { base: "ju367vb3", hover: "ju367vb4", active: "ju367vb5" }, defaultClass: "ju367vb3" }, modalBackground: { conditions: { base: "ju367vb6", hover: "ju367vb7", active: "ju367vb8" }, defaultClass: "ju367vb6" }, modalBorder: { conditions: { base: "ju367vb9", hover: "ju367vba", active: "ju367vbb" }, defaultClass: "ju367vb9" }, modalText: { conditions: { base: "ju367vbc", hover: "ju367vbd", active: "ju367vbe" }, defaultClass: "ju367vbc" }, modalTextDim: { conditions: { base: "ju367vbf", hover: "ju367vbg", active: "ju367vbh" }, defaultClass: "ju367vbf" }, modalTextSecondary: { conditions: { base: "ju367vbi", hover: "ju367vbj", active: "ju367vbk" }, defaultClass: "ju367vbi" }, profileAction: { conditions: { base: "ju367vbl", hover: "ju367vbm", active: "ju367vbn" }, defaultClass: "ju367vbl" }, profileActionHover: { conditions: { base: "ju367vbo", hover: "ju367vbp", active: "ju367vbq" }, defaultClass: "ju367vbo" }, profileForeground: { conditions: { base: "ju367vbr", hover: "ju367vbs", active: "ju367vbt" }, defaultClass: "ju367vbr" }, selectedOptionBorder: { conditions: { base: "ju367vbu", hover: "ju367vbv", active: "ju367vbw" }, defaultClass: "ju367vbu" }, standby: { conditions: { base: "ju367vbx", hover: "ju367vby", active: "ju367vbz" }, defaultClass: "ju367vbx" } } }, borderColor: { values: { accentColor: { conditions: { base: "ju367vc0", hover: "ju367vc1", active: "ju367vc2" }, defaultClass: "ju367vc0" }, accentColorForeground: { conditions: { base: "ju367vc3", hover: "ju367vc4", active: "ju367vc5" }, defaultClass: "ju367vc3" }, actionButtonBorder: { conditions: { base: "ju367vc6", hover: "ju367vc7", active: "ju367vc8" }, defaultClass: "ju367vc6" }, actionButtonBorderMobile: { conditions: { base: "ju367vc9", hover: "ju367vca", active: "ju367vcb" }, defaultClass: "ju367vc9" }, actionButtonSecondaryBackground: { conditions: { base: "ju367vcc", hover: "ju367vcd", active: "ju367vce" }, defaultClass: "ju367vcc" }, closeButton: { conditions: { base: "ju367vcf", hover: "ju367vcg", active: "ju367vch" }, defaultClass: "ju367vcf" }, closeButtonBackground: { conditions: { base: "ju367vci", hover: "ju367vcj", active: "ju367vck" }, defaultClass: "ju367vci" }, connectButtonBackground: { conditions: { base: "ju367vcl", hover: "ju367vcm", active: "ju367vcn" }, defaultClass: "ju367vcl" }, connectButtonBackgroundError: { conditions: { base: "ju367vco", hover: "ju367vcp", active: "ju367vcq" }, defaultClass: "ju367vco" }, connectButtonInnerBackground: { conditions: { base: "ju367vcr", hover: "ju367vcs", active: "ju367vct" }, defaultClass: "ju367vcr" }, connectButtonText: { conditions: { base: "ju367vcu", hover: "ju367vcv", active: "ju367vcw" }, defaultClass: "ju367vcu" }, connectButtonTextError: { conditions: { base: "ju367vcx", hover: "ju367vcy", active: "ju367vcz" }, defaultClass: "ju367vcx" }, connectionIndicator: { conditions: { base: "ju367vd0", hover: "ju367vd1", active: "ju367vd2" }, defaultClass: "ju367vd0" }, downloadBottomCardBackground: { conditions: { base: "ju367vd3", hover: "ju367vd4", active: "ju367vd5" }, defaultClass: "ju367vd3" }, downloadTopCardBackground: { conditions: { base: "ju367vd6", hover: "ju367vd7", active: "ju367vd8" }, defaultClass: "ju367vd6" }, error: { conditions: { base: "ju367vd9", hover: "ju367vda", active: "ju367vdb" }, defaultClass: "ju367vd9" }, generalBorder: { conditions: { base: "ju367vdc", hover: "ju367vdd", active: "ju367vde" }, defaultClass: "ju367vdc" }, generalBorderDim: { conditions: { base: "ju367vdf", hover: "ju367vdg", active: "ju367vdh" }, defaultClass: "ju367vdf" }, menuItemBackground: { conditions: { base: "ju367vdi", hover: "ju367vdj", active: "ju367vdk" }, defaultClass: "ju367vdi" }, modalBackdrop: { conditions: { base: "ju367vdl", hover: "ju367vdm", active: "ju367vdn" }, defaultClass: "ju367vdl" }, modalBackground: { conditions: { base: "ju367vdo", hover: "ju367vdp", active: "ju367vdq" }, defaultClass: "ju367vdo" }, modalBorder: { conditions: { base: "ju367vdr", hover: "ju367vds", active: "ju367vdt" }, defaultClass: "ju367vdr" }, modalText: { conditions: { base: "ju367vdu", hover: "ju367vdv", active: "ju367vdw" }, defaultClass: "ju367vdu" }, modalTextDim: { conditions: { base: "ju367vdx", hover: "ju367vdy", active: "ju367vdz" }, defaultClass: "ju367vdx" }, modalTextSecondary: { conditions: { base: "ju367ve0", hover: "ju367ve1", active: "ju367ve2" }, defaultClass: "ju367ve0" }, profileAction: { conditions: { base: "ju367ve3", hover: "ju367ve4", active: "ju367ve5" }, defaultClass: "ju367ve3" }, profileActionHover: { conditions: { base: "ju367ve6", hover: "ju367ve7", active: "ju367ve8" }, defaultClass: "ju367ve6" }, profileForeground: { conditions: { base: "ju367ve9", hover: "ju367vea", active: "ju367veb" }, defaultClass: "ju367ve9" }, selectedOptionBorder: { conditions: { base: "ju367vec", hover: "ju367ved", active: "ju367vee" }, defaultClass: "ju367vec" }, standby: { conditions: { base: "ju367vef", hover: "ju367veg", active: "ju367veh" }, defaultClass: "ju367vef" } } }, boxShadow: { values: { connectButton: { conditions: { base: "ju367vei", hover: "ju367vej", active: "ju367vek" }, defaultClass: "ju367vei" }, dialog: { conditions: { base: "ju367vel", hover: "ju367vem", active: "ju367ven" }, defaultClass: "ju367vel" }, profileDetailsAction: { conditions: { base: "ju367veo", hover: "ju367vep", active: "ju367veq" }, defaultClass: "ju367veo" }, selectedOption: { conditions: { base: "ju367ver", hover: "ju367ves", active: "ju367vet" }, defaultClass: "ju367ver" }, selectedWallet: { conditions: { base: "ju367veu", hover: "ju367vev", active: "ju367vew" }, defaultClass: "ju367veu" }, walletLogo: { conditions: { base: "ju367vex", hover: "ju367vey", active: "ju367vez" }, defaultClass: "ju367vex" } } }, color: { values: { accentColor: { conditions: { base: "ju367vf0", hover: "ju367vf1", active: "ju367vf2" }, defaultClass: "ju367vf0" }, accentColorForeground: { conditions: { base: "ju367vf3", hover: "ju367vf4", active: "ju367vf5" }, defaultClass: "ju367vf3" }, actionButtonBorder: { conditions: { base: "ju367vf6", hover: "ju367vf7", active: "ju367vf8" }, defaultClass: "ju367vf6" }, actionButtonBorderMobile: { conditions: { base: "ju367vf9", hover: "ju367vfa", active: "ju367vfb" }, defaultClass: "ju367vf9" }, actionButtonSecondaryBackground: { conditions: { base: "ju367vfc", hover: "ju367vfd", active: "ju367vfe" }, defaultClass: "ju367vfc" }, closeButton: { conditions: { base: "ju367vff", hover: "ju367vfg", active: "ju367vfh" }, defaultClass: "ju367vff" }, closeButtonBackground: { conditions: { base: "ju367vfi", hover: "ju367vfj", active: "ju367vfk" }, defaultClass: "ju367vfi" }, connectButtonBackground: { conditions: { base: "ju367vfl", hover: "ju367vfm", active: "ju367vfn" }, defaultClass: "ju367vfl" }, connectButtonBackgroundError: { conditions: { base: "ju367vfo", hover: "ju367vfp", active: "ju367vfq" }, defaultClass: "ju367vfo" }, connectButtonInnerBackground: { conditions: { base: "ju367vfr", hover: "ju367vfs", active: "ju367vft" }, defaultClass: "ju367vfr" }, connectButtonText: { conditions: { base: "ju367vfu", hover: "ju367vfv", active: "ju367vfw" }, defaultClass: "ju367vfu" }, connectButtonTextError: { conditions: { base: "ju367vfx", hover: "ju367vfy", active: "ju367vfz" }, defaultClass: "ju367vfx" }, connectionIndicator: { conditions: { base: "ju367vg0", hover: "ju367vg1", active: "ju367vg2" }, defaultClass: "ju367vg0" }, downloadBottomCardBackground: { conditions: { base: "ju367vg3", hover: "ju367vg4", active: "ju367vg5" }, defaultClass: "ju367vg3" }, downloadTopCardBackground: { conditions: { base: "ju367vg6", hover: "ju367vg7", active: "ju367vg8" }, defaultClass: "ju367vg6" }, error: { conditions: { base: "ju367vg9", hover: "ju367vga", active: "ju367vgb" }, defaultClass: "ju367vg9" }, generalBorder: { conditions: { base: "ju367vgc", hover: "ju367vgd", active: "ju367vge" }, defaultClass: "ju367vgc" }, generalBorderDim: { conditions: { base: "ju367vgf", hover: "ju367vgg", active: "ju367vgh" }, defaultClass: "ju367vgf" }, menuItemBackground: { conditions: { base: "ju367vgi", hover: "ju367vgj", active: "ju367vgk" }, defaultClass: "ju367vgi" }, modalBackdrop: { conditions: { base: "ju367vgl", hover: "ju367vgm", active: "ju367vgn" }, defaultClass: "ju367vgl" }, modalBackground: { conditions: { base: "ju367vgo", hover: "ju367vgp", active: "ju367vgq" }, defaultClass: "ju367vgo" }, modalBorder: { conditions: { base: "ju367vgr", hover: "ju367vgs", active: "ju367vgt" }, defaultClass: "ju367vgr" }, modalText: { conditions: { base: "ju367vgu", hover: "ju367vgv", active: "ju367vgw" }, defaultClass: "ju367vgu" }, modalTextDim: { conditions: { base: "ju367vgx", hover: "ju367vgy", active: "ju367vgz" }, defaultClass: "ju367vgx" }, modalTextSecondary: { conditions: { base: "ju367vh0", hover: "ju367vh1", active: "ju367vh2" }, defaultClass: "ju367vh0" }, profileAction: { conditions: { base: "ju367vh3", hover: "ju367vh4", active: "ju367vh5" }, defaultClass: "ju367vh3" }, profileActionHover: { conditions: { base: "ju367vh6", hover: "ju367vh7", active: "ju367vh8" }, defaultClass: "ju367vh6" }, profileForeground: { conditions: { base: "ju367vh9", hover: "ju367vha", active: "ju367vhb" }, defaultClass: "ju367vh9" }, selectedOptionBorder: { conditions: { base: "ju367vhc", hover: "ju367vhd", active: "ju367vhe" }, defaultClass: "ju367vhc" }, standby: { conditions: { base: "ju367vhf", hover: "ju367vhg", active: "ju367vhh" }, defaultClass: "ju367vhf" } } } } }, { conditions: { defaultCondition: "smallScreen", conditionNames: ["smallScreen", "largeScreen"], responsiveArray: void 0 }, styles: { alignItems: { values: { "flex-start": { conditions: { smallScreen: "ju367v0", largeScreen: "ju367v1" }, defaultClass: "ju367v0" }, "flex-end": { conditions: { smallScreen: "ju367v2", largeScreen: "ju367v3" }, defaultClass: "ju367v2" }, center: { conditions: { smallScreen: "ju367v4", largeScreen: "ju367v5" }, defaultClass: "ju367v4" } } }, display: { values: { none: { conditions: { smallScreen: "ju367v6", largeScreen: "ju367v7" }, defaultClass: "ju367v6" }, block: { conditions: { smallScreen: "ju367v8", largeScreen: "ju367v9" }, defaultClass: "ju367v8" }, flex: { conditions: { smallScreen: "ju367va", largeScreen: "ju367vb" }, defaultClass: "ju367va" }, inline: { conditions: { smallScreen: "ju367vc", largeScreen: "ju367vd" }, defaultClass: "ju367vc" } } } } }, { conditions: void 0, styles: { margin: { mappings: ["marginTop", "marginBottom", "marginLeft", "marginRight"] }, marginX: { mappings: ["marginLeft", "marginRight"] }, marginY: { mappings: ["marginTop", "marginBottom"] }, padding: { mappings: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"] }, paddingX: { mappings: ["paddingLeft", "paddingRight"] }, paddingY: { mappings: ["paddingTop", "paddingBottom"] }, alignSelf: { values: { "flex-start": { defaultClass: "ju367ve" }, "flex-end": { defaultClass: "ju367vf" }, center: { defaultClass: "ju367vg" } } }, backgroundSize: { values: { cover: { defaultClass: "ju367vh" } } }, borderRadius: { values: { "1": { defaultClass: "ju367vi" }, "6": { defaultClass: "ju367vj" }, "10": { defaultClass: "ju367vk" }, "13": { defaultClass: "ju367vl" }, actionButton: { defaultClass: "ju367vm" }, connectButton: { defaultClass: "ju367vn" }, menuButton: { defaultClass: "ju367vo" }, modal: { defaultClass: "ju367vp" }, modalMobile: { defaultClass: "ju367vq" }, "25%": { defaultClass: "ju367vr" }, full: { defaultClass: "ju367vs" } } }, borderStyle: { values: { solid: { defaultClass: "ju367vt" } } }, borderWidth: { values: { "0": { defaultClass: "ju367vu" }, "1": { defaultClass: "ju367vv" }, "2": { defaultClass: "ju367vw" }, "4": { defaultClass: "ju367vx" } } }, cursor: { values: { pointer: { defaultClass: "ju367vy" }, none: { defaultClass: "ju367vz" } } }, pointerEvents: { values: { none: { defaultClass: "ju367v10" }, all: { defaultClass: "ju367v11" } } }, minHeight: { values: { "8": { defaultClass: "ju367v12" }, "44": { defaultClass: "ju367v13" } } }, flexDirection: { values: { row: { defaultClass: "ju367v14" }, column: { defaultClass: "ju367v15" } } }, fontFamily: { values: { body: { defaultClass: "ju367v16" } } }, fontSize: { values: { "12": { defaultClass: "ju367v17" }, "13": { defaultClass: "ju367v18" }, "14": { defaultClass: "ju367v19" }, "16": { defaultClass: "ju367v1a" }, "18": { defaultClass: "ju367v1b" }, "20": { defaultClass: "ju367v1c" }, "23": { defaultClass: "ju367v1d" } } }, fontWeight: { values: { regular: { defaultClass: "ju367v1e" }, medium: { defaultClass: "ju367v1f" }, semibold: { defaultClass: "ju367v1g" }, bold: { defaultClass: "ju367v1h" }, heavy: { defaultClass: "ju367v1i" } } }, gap: { values: { "0": { defaultClass: "ju367v1j" }, "1": { defaultClass: "ju367v1k" }, "2": { defaultClass: "ju367v1l" }, "3": { defaultClass: "ju367v1m" }, "4": { defaultClass: "ju367v1n" }, "5": { defaultClass: "ju367v1o" }, "6": { defaultClass: "ju367v1p" }, "8": { defaultClass: "ju367v1q" }, "10": { defaultClass: "ju367v1r" }, "12": { defaultClass: "ju367v1s" }, "14": { defaultClass: "ju367v1t" }, "16": { defaultClass: "ju367v1u" }, "18": { defaultClass: "ju367v1v" }, "20": { defaultClass: "ju367v1w" }, "24": { defaultClass: "ju367v1x" }, "28": { defaultClass: "ju367v1y" }, "32": { defaultClass: "ju367v1z" }, "36": { defaultClass: "ju367v20" }, "44": { defaultClass: "ju367v21" }, "64": { defaultClass: "ju367v22" }, "-1": { defaultClass: "ju367v23" } } }, height: { values: { "1": { defaultClass: "ju367v24" }, "2": { defaultClass: "ju367v25" }, "4": { defaultClass: "ju367v26" }, "8": { defaultClass: "ju367v27" }, "12": { defaultClass: "ju367v28" }, "20": { defaultClass: "ju367v29" }, "24": { defaultClass: "ju367v2a" }, "28": { defaultClass: "ju367v2b" }, "30": { defaultClass: "ju367v2c" }, "32": { defaultClass: "ju367v2d" }, "34": { defaultClass: "ju367v2e" }, "36": { defaultClass: "ju367v2f" }, "40": { defaultClass: "ju367v2g" }, "44": { defaultClass: "ju367v2h" }, "48": { defaultClass: "ju367v2i" }, "54": { defaultClass: "ju367v2j" }, "60": { defaultClass: "ju367v2k" }, "200": { defaultClass: "ju367v2l" }, full: { defaultClass: "ju367v2m" }, max: { defaultClass: "ju367v2n" } } }, justifyContent: { values: { "flex-start": { defaultClass: "ju367v2o" }, "flex-end": { defaultClass: "ju367v2p" }, center: { defaultClass: "ju367v2q" }, "space-between": { defaultClass: "ju367v2r" }, "space-around": { defaultClass: "ju367v2s" } } }, textAlign: { values: { left: { defaultClass: "ju367v2t" }, center: { defaultClass: "ju367v2u" }, inherit: { defaultClass: "ju367v2v" } } }, marginBottom: { values: { "0": { defaultClass: "ju367v2w" }, "1": { defaultClass: "ju367v2x" }, "2": { defaultClass: "ju367v2y" }, "3": { defaultClass: "ju367v2z" }, "4": { defaultClass: "ju367v30" }, "5": { defaultClass: "ju367v31" }, "6": { defaultClass: "ju367v32" }, "8": { defaultClass: "ju367v33" }, "10": { defaultClass: "ju367v34" }, "12": { defaultClass: "ju367v35" }, "14": { defaultClass: "ju367v36" }, "16": { defaultClass: "ju367v37" }, "18": { defaultClass: "ju367v38" }, "20": { defaultClass: "ju367v39" }, "24": { defaultClass: "ju367v3a" }, "28": { defaultClass: "ju367v3b" }, "32": { defaultClass: "ju367v3c" }, "36": { defaultClass: "ju367v3d" }, "44": { defaultClass: "ju367v3e" }, "64": { defaultClass: "ju367v3f" }, "-1": { defaultClass: "ju367v3g" } } }, marginLeft: { values: { "0": { defaultClass: "ju367v3h" }, "1": { defaultClass: "ju367v3i" }, "2": { defaultClass: "ju367v3j" }, "3": { defaultClass: "ju367v3k" }, "4": { defaultClass: "ju367v3l" }, "5": { defaultClass: "ju367v3m" }, "6": { defaultClass: "ju367v3n" }, "8": { defaultClass: "ju367v3o" }, "10": { defaultClass: "ju367v3p" }, "12": { defaultClass: "ju367v3q" }, "14": { defaultClass: "ju367v3r" }, "16": { defaultClass: "ju367v3s" }, "18": { defaultClass: "ju367v3t" }, "20": { defaultClass: "ju367v3u" }, "24": { defaultClass: "ju367v3v" }, "28": { defaultClass: "ju367v3w" }, "32": { defaultClass: "ju367v3x" }, "36": { defaultClass: "ju367v3y" }, "44": { defaultClass: "ju367v3z" }, "64": { defaultClass: "ju367v40" }, "-1": { defaultClass: "ju367v41" } } }, marginRight: { values: { "0": { defaultClass: "ju367v42" }, "1": { defaultClass: "ju367v43" }, "2": { defaultClass: "ju367v44" }, "3": { defaultClass: "ju367v45" }, "4": { defaultClass: "ju367v46" }, "5": { defaultClass: "ju367v47" }, "6": { defaultClass: "ju367v48" }, "8": { defaultClass: "ju367v49" }, "10": { defaultClass: "ju367v4a" }, "12": { defaultClass: "ju367v4b" }, "14": { defaultClass: "ju367v4c" }, "16": { defaultClass: "ju367v4d" }, "18": { defaultClass: "ju367v4e" }, "20": { defaultClass: "ju367v4f" }, "24": { defaultClass: "ju367v4g" }, "28": { defaultClass: "ju367v4h" }, "32": { defaultClass: "ju367v4i" }, "36": { defaultClass: "ju367v4j" }, "44": { defaultClass: "ju367v4k" }, "64": { defaultClass: "ju367v4l" }, "-1": { defaultClass: "ju367v4m" } } }, marginTop: { values: { "0": { defaultClass: "ju367v4n" }, "1": { defaultClass: "ju367v4o" }, "2": { defaultClass: "ju367v4p" }, "3": { defaultClass: "ju367v4q" }, "4": { defaultClass: "ju367v4r" }, "5": { defaultClass: "ju367v4s" }, "6": { defaultClass: "ju367v4t" }, "8": { defaultClass: "ju367v4u" }, "10": { defaultClass: "ju367v4v" }, "12": { defaultClass: "ju367v4w" }, "14": { defaultClass: "ju367v4x" }, "16": { defaultClass: "ju367v4y" }, "18": { defaultClass: "ju367v4z" }, "20": { defaultClass: "ju367v50" }, "24": { defaultClass: "ju367v51" }, "28": { defaultClass: "ju367v52" }, "32": { defaultClass: "ju367v53" }, "36": { defaultClass: "ju367v54" }, "44": { defaultClass: "ju367v55" }, "64": { defaultClass: "ju367v56" }, "-1": { defaultClass: "ju367v57" } } }, maxWidth: { values: { "1": { defaultClass: "ju367v58" }, "2": { defaultClass: "ju367v59" }, "4": { defaultClass: "ju367v5a" }, "8": { defaultClass: "ju367v5b" }, "12": { defaultClass: "ju367v5c" }, "20": { defaultClass: "ju367v5d" }, "24": { defaultClass: "ju367v5e" }, "28": { defaultClass: "ju367v5f" }, "30": { defaultClass: "ju367v5g" }, "32": { defaultClass: "ju367v5h" }, "34": { defaultClass: "ju367v5i" }, "36": { defaultClass: "ju367v5j" }, "40": { defaultClass: "ju367v5k" }, "44": { defaultClass: "ju367v5l" }, "48": { defaultClass: "ju367v5m" }, "54": { defaultClass: "ju367v5n" }, "60": { defaultClass: "ju367v5o" }, "200": { defaultClass: "ju367v5p" }, full: { defaultClass: "ju367v5q" }, max: { defaultClass: "ju367v5r" } } }, minWidth: { values: { "1": { defaultClass: "ju367v5s" }, "2": { defaultClass: "ju367v5t" }, "4": { defaultClass: "ju367v5u" }, "8": { defaultClass: "ju367v5v" }, "12": { defaultClass: "ju367v5w" }, "20": { defaultClass: "ju367v5x" }, "24": { defaultClass: "ju367v5y" }, "28": { defaultClass: "ju367v5z" }, "30": { defaultClass: "ju367v60" }, "32": { defaultClass: "ju367v61" }, "34": { defaultClass: "ju367v62" }, "36": { defaultClass: "ju367v63" }, "40": { defaultClass: "ju367v64" }, "44": { defaultClass: "ju367v65" }, "48": { defaultClass: "ju367v66" }, "54": { defaultClass: "ju367v67" }, "60": { defaultClass: "ju367v68" }, "200": { defaultClass: "ju367v69" }, full: { defaultClass: "ju367v6a" }, max: { defaultClass: "ju367v6b" } } }, overflow: { values: { hidden: { defaultClass: "ju367v6c" } } }, paddingBottom: { values: { "0": { defaultClass: "ju367v6d" }, "1": { defaultClass: "ju367v6e" }, "2": { defaultClass: "ju367v6f" }, "3": { defaultClass: "ju367v6g" }, "4": { defaultClass: "ju367v6h" }, "5": { defaultClass: "ju367v6i" }, "6": { defaultClass: "ju367v6j" }, "8": { defaultClass: "ju367v6k" }, "10": { defaultClass: "ju367v6l" }, "12": { defaultClass: "ju367v6m" }, "14": { defaultClass: "ju367v6n" }, "16": { defaultClass: "ju367v6o" }, "18": { defaultClass: "ju367v6p" }, "20": { defaultClass: "ju367v6q" }, "24": { defaultClass: "ju367v6r" }, "28": { defaultClass: "ju367v6s" }, "32": { defaultClass: "ju367v6t" }, "36": { defaultClass: "ju367v6u" }, "44": { defaultClass: "ju367v6v" }, "64": { defaultClass: "ju367v6w" }, "-1": { defaultClass: "ju367v6x" } } }, paddingLeft: { values: { "0": { defaultClass: "ju367v6y" }, "1": { defaultClass: "ju367v6z" }, "2": { defaultClass: "ju367v70" }, "3": { defaultClass: "ju367v71" }, "4": { defaultClass: "ju367v72" }, "5": { defaultClass: "ju367v73" }, "6": { defaultClass: "ju367v74" }, "8": { defaultClass: "ju367v75" }, "10": { defaultClass: "ju367v76" }, "12": { defaultClass: "ju367v77" }, "14": { defaultClass: "ju367v78" }, "16": { defaultClass: "ju367v79" }, "18": { defaultClass: "ju367v7a" }, "20": { defaultClass: "ju367v7b" }, "24": { defaultClass: "ju367v7c" }, "28": { defaultClass: "ju367v7d" }, "32": { defaultClass: "ju367v7e" }, "36": { defaultClass: "ju367v7f" }, "44": { defaultClass: "ju367v7g" }, "64": { defaultClass: "ju367v7h" }, "-1": { defaultClass: "ju367v7i" } } }, paddingRight: { values: { "0": { defaultClass: "ju367v7j" }, "1": { defaultClass: "ju367v7k" }, "2": { defaultClass: "ju367v7l" }, "3": { defaultClass: "ju367v7m" }, "4": { defaultClass: "ju367v7n" }, "5": { defaultClass: "ju367v7o" }, "6": { defaultClass: "ju367v7p" }, "8": { defaultClass: "ju367v7q" }, "10": { defaultClass: "ju367v7r" }, "12": { defaultClass: "ju367v7s" }, "14": { defaultClass: "ju367v7t" }, "16": { defaultClass: "ju367v7u" }, "18": { defaultClass: "ju367v7v" }, "20": { defaultClass: "ju367v7w" }, "24": { defaultClass: "ju367v7x" }, "28": { defaultClass: "ju367v7y" }, "32": { defaultClass: "ju367v7z" }, "36": { defaultClass: "ju367v80" }, "44": { defaultClass: "ju367v81" }, "64": { defaultClass: "ju367v82" }, "-1": { defaultClass: "ju367v83" } } }, paddingTop: { values: { "0": { defaultClass: "ju367v84" }, "1": { defaultClass: "ju367v85" }, "2": { defaultClass: "ju367v86" }, "3": { defaultClass: "ju367v87" }, "4": { defaultClass: "ju367v88" }, "5": { defaultClass: "ju367v89" }, "6": { defaultClass: "ju367v8a" }, "8": { defaultClass: "ju367v8b" }, "10": { defaultClass: "ju367v8c" }, "12": { defaultClass: "ju367v8d" }, "14": { defaultClass: "ju367v8e" }, "16": { defaultClass: "ju367v8f" }, "18": { defaultClass: "ju367v8g" }, "20": { defaultClass: "ju367v8h" }, "24": { defaultClass: "ju367v8i" }, "28": { defaultClass: "ju367v8j" }, "32": { defaultClass: "ju367v8k" }, "36": { defaultClass: "ju367v8l" }, "44": { defaultClass: "ju367v8m" }, "64": { defaultClass: "ju367v8n" }, "-1": { defaultClass: "ju367v8o" } } }, position: { values: { absolute: { defaultClass: "ju367v8p" }, fixed: { defaultClass: "ju367v8q" }, relative: { defaultClass: "ju367v8r" } } }, WebkitUserSelect: { values: { none: { defaultClass: "ju367v8s" } } }, right: { values: { "0": { defaultClass: "ju367v8t" } } }, transition: { values: { "default": { defaultClass: "ju367v8u" }, transform: { defaultClass: "ju367v8v" } } }, userSelect: { values: { none: { defaultClass: "ju367v8w" } } }, width: { values: { "1": { defaultClass: "ju367v8x" }, "2": { defaultClass: "ju367v8y" }, "4": { defaultClass: "ju367v8z" }, "8": { defaultClass: "ju367v90" }, "12": { defaultClass: "ju367v91" }, "20": { defaultClass: "ju367v92" }, "24": { defaultClass: "ju367v93" }, "28": { defaultClass: "ju367v94" }, "30": { defaultClass: "ju367v95" }, "32": { defaultClass: "ju367v96" }, "34": { defaultClass: "ju367v97" }, "36": { defaultClass: "ju367v98" }, "40": { defaultClass: "ju367v99" }, "44": { defaultClass: "ju367v9a" }, "48": { defaultClass: "ju367v9b" }, "54": { defaultClass: "ju367v9c" }, "60": { defaultClass: "ju367v9d" }, "200": { defaultClass: "ju367v9e" }, full: { defaultClass: "ju367v9f" }, max: { defaultClass: "ju367v9g" } } }, backdropFilter: { values: { modalOverlay: { defaultClass: "ju367v9h" } } } } });
var themeVars = { colors: { accentColor: "var(--rk-colors-accentColor)", accentColorForeground: "var(--rk-colors-accentColorForeground)", actionButtonBorder: "var(--rk-colors-actionButtonBorder)", actionButtonBorderMobile: "var(--rk-colors-actionButtonBorderMobile)", actionButtonSecondaryBackground: "var(--rk-colors-actionButtonSecondaryBackground)", closeButton: "var(--rk-colors-closeButton)", closeButtonBackground: "var(--rk-colors-closeButtonBackground)", connectButtonBackground: "var(--rk-colors-connectButtonBackground)", connectButtonBackgroundError: "var(--rk-colors-connectButtonBackgroundError)", connectButtonInnerBackground: "var(--rk-colors-connectButtonInnerBackground)", connectButtonText: "var(--rk-colors-connectButtonText)", connectButtonTextError: "var(--rk-colors-connectButtonTextError)", connectionIndicator: "var(--rk-colors-connectionIndicator)", downloadBottomCardBackground: "var(--rk-colors-downloadBottomCardBackground)", downloadTopCardBackground: "var(--rk-colors-downloadTopCardBackground)", error: "var(--rk-colors-error)", generalBorder: "var(--rk-colors-generalBorder)", generalBorderDim: "var(--rk-colors-generalBorderDim)", menuItemBackground: "var(--rk-colors-menuItemBackground)", modalBackdrop: "var(--rk-colors-modalBackdrop)", modalBackground: "var(--rk-colors-modalBackground)", modalBorder: "var(--rk-colors-modalBorder)", modalText: "var(--rk-colors-modalText)", modalTextDim: "var(--rk-colors-modalTextDim)", modalTextSecondary: "var(--rk-colors-modalTextSecondary)", profileAction: "var(--rk-colors-profileAction)", profileActionHover: "var(--rk-colors-profileActionHover)", profileForeground: "var(--rk-colors-profileForeground)", selectedOptionBorder: "var(--rk-colors-selectedOptionBorder)", standby: "var(--rk-colors-standby)" }, fonts: { body: "var(--rk-fonts-body)" }, radii: { actionButton: "var(--rk-radii-actionButton)", connectButton: "var(--rk-radii-connectButton)", menuButton: "var(--rk-radii-menuButton)", modal: "var(--rk-radii-modal)", modalMobile: "var(--rk-radii-modalMobile)" }, shadows: { connectButton: "var(--rk-shadows-connectButton)", dialog: "var(--rk-shadows-dialog)", profileDetailsAction: "var(--rk-shadows-profileDetailsAction)", selectedOption: "var(--rk-shadows-selectedOption)", selectedWallet: "var(--rk-shadows-selectedWallet)", walletLogo: "var(--rk-shadows-walletLogo)" }, blurs: { modalOverlay: "var(--rk-blurs-modalOverlay)" } };
var active = { shrink: "_12cbo8i6", shrinkSm: "_12cbo8i7" };
var base = "_12cbo8i3 ju367v8r";
var hover = { grow: "_12cbo8i4", growLg: "_12cbo8i5" };
function touchableStyles({ active: active2, hover: hover2 }) {
  return [base, hover2 && hover[hover2], active[active2]];
}
function createAuthenticationAdapter(adapter) {
  return adapter;
}
var AuthenticationContext = (0, import_react5.createContext)(
  null
);
function RainbowKitAuthenticationProvider({
  adapter,
  children,
  enabled = true,
  status
}) {
  const { connector } = useAccount();
  const [currentConnectorUid, setCurrentConnectorUid] = (0, import_react5.useState)();
  useAccountEffect({
    onDisconnect: () => {
      adapter.signOut();
      setCurrentConnectorUid(void 0);
    }
  });
  const handleChangedAccount = (data) => {
    if (data.accounts) {
      setCurrentConnectorUid(void 0);
      adapter.signOut();
    }
  };
  (0, import_react5.useEffect)(() => {
    var _a;
    if (typeof ((_a = connector == null ? void 0 : connector.emitter) == null ? void 0 : _a.on) === "function" && status === "authenticated") {
      setCurrentConnectorUid(connector == null ? void 0 : connector.uid);
      connector.emitter.on("change", handleChangedAccount);
      return () => {
        connector.emitter.off("change", handleChangedAccount);
      };
    }
  }, [connector == null ? void 0 : connector.emitter, status]);
  (0, import_react5.useEffect)(() => {
    var _a;
    if (currentConnectorUid && typeof ((_a = connector == null ? void 0 : connector.emitter) == null ? void 0 : _a.on) === "function" && status === "authenticated") {
      if ((connector == null ? void 0 : connector.uid) !== currentConnectorUid) {
        setCurrentConnectorUid(void 0);
        adapter.signOut();
      }
    }
  }, [connector == null ? void 0 : connector.emitter, currentConnectorUid, status]);
  return import_react5.default.createElement(
    AuthenticationContext.Provider,
    {
      value: (0, import_react5.useMemo)(
        () => enabled ? { adapter, status } : null,
        [enabled, adapter, status]
      )
    },
    children
  );
}
function useAuthenticationAdapter() {
  const { adapter } = (0, import_react5.useContext)(AuthenticationContext) ?? {};
  if (!adapter) {
    throw new Error("No authentication adapter found");
  }
  return adapter;
}
function useAuthenticationStatus() {
  const contextValue = (0, import_react5.useContext)(AuthenticationContext);
  return (contextValue == null ? void 0 : contextValue.status) ?? null;
}
function useConnectionStatus() {
  const authenticationStatus = useAuthenticationStatus();
  const { isConnected } = useAccount();
  if (!isConnected) {
    return "disconnected";
  }
  if (!authenticationStatus) {
    return "connected";
  }
  if (authenticationStatus === "loading" || authenticationStatus === "unauthenticated") {
    return authenticationStatus;
  }
  return "connected";
}
function isAndroid() {
  return typeof navigator !== "undefined" && /android/i.test(navigator.userAgent);
}
function isSmallIOS() {
  return typeof navigator !== "undefined" && /iPhone|iPod/.test(navigator.userAgent);
}
function isLargeIOS() {
  return typeof navigator !== "undefined" && (/iPad/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}
function isIOS() {
  return isSmallIOS() || isLargeIOS();
}
function isMobile() {
  return isAndroid() || isIOS();
}
var base2 = "iekbcc0";
var element = { a: "iekbcca", blockquote: "iekbcc2", button: "iekbcc9", input: "iekbcc8 iekbcc5 iekbcc4", mark: "iekbcc6", ol: "iekbcc1", q: "iekbcc2", select: "iekbcc7 iekbcc5 iekbcc4", table: "iekbcc3", textarea: "iekbcc5 iekbcc4", ul: "iekbcc1" };
var atoms = ({ reset, ...rest }) => {
  if (!reset)
    return sprinkles(rest);
  const elementReset = element[reset];
  const sprinklesClasses = sprinkles(rest);
  return clsx_default(base2, elementReset, sprinklesClasses);
};
var Box = import_react7.default.forwardRef(
  ({ as = "div", className, testId, ...props }, ref) => {
    const atomProps = {};
    const nativeProps = {};
    for (const key in props) {
      if (sprinkles.properties.has(key)) {
        atomProps[key] = props[key];
      } else {
        nativeProps[key] = props[key];
      }
    }
    const atomicClasses = atoms({
      reset: typeof as === "string" ? as : "div",
      ...atomProps
    });
    return import_react7.default.createElement(as, {
      className: clsx_default(atomicClasses, className),
      ...nativeProps,
      "data-testid": testId ? `rk-${testId.replace(/^rk-/, "")}` : void 0,
      ref
    });
  }
);
Box.displayName = "Box";
var cachedUrls = /* @__PURE__ */ new Map();
var cachedRequestPromises = /* @__PURE__ */ new Map();
async function loadAsyncImage(asyncImage) {
  const cachedRequestPromise = cachedRequestPromises.get(asyncImage);
  if (cachedRequestPromise) {
    return cachedRequestPromise;
  }
  const load = async () => asyncImage().then(async (url) => {
    cachedUrls.set(asyncImage, url);
    return url;
  });
  const requestPromise = load().catch((_err) => {
    return load().catch((_err2) => {
      cachedRequestPromises.delete(asyncImage);
    });
  });
  cachedRequestPromises.set(asyncImage, requestPromise);
  return requestPromise;
}
async function loadImages(...urls) {
  return await Promise.all(
    urls.map((url) => typeof url === "function" ? loadAsyncImage(url) : url)
  );
}
function useForceUpdate() {
  const [, forceUpdate] = (0, import_react8.useReducer)((x) => x + 1, 0);
  return forceUpdate;
}
function useAsyncImage(url) {
  const cachedUrl = typeof url === "function" ? cachedUrls.get(url) : void 0;
  const forceUpdate = useForceUpdate();
  (0, import_react8.useEffect)(() => {
    if (typeof url === "function" && !cachedUrl) {
      loadAsyncImage(url).then(forceUpdate);
    }
  }, [url, cachedUrl, forceUpdate]);
  return typeof url === "function" ? cachedUrl : url;
}
function AsyncImage({
  alt,
  background,
  borderColor,
  borderRadius,
  useAsImage,
  boxShadow,
  height,
  src: srcProp,
  width,
  testId
}) {
  const ios = isIOS();
  const src7 = useAsyncImage(srcProp);
  const isRemoteImage = src7 && /^http/.test(src7);
  const [isRemoteImageLoaded, setRemoteImageLoaded] = (0, import_react6.useReducer)(
    () => true,
    false
  );
  return import_react6.default.createElement(
    Box,
    {
      "aria-label": alt,
      borderRadius,
      boxShadow,
      height: typeof height === "string" ? height : void 0,
      overflow: "hidden",
      position: "relative",
      role: "img",
      style: {
        background,
        height: typeof height === "number" ? height : void 0,
        width: typeof width === "number" ? width : void 0
      },
      width: typeof width === "string" ? width : void 0,
      testId
    },
    import_react6.default.createElement(
      Box,
      {
        ...isRemoteImage ? (
          // biome-ignore format: design system keys
          {
            "aria-hidden": true,
            as: "img",
            onLoad: setRemoteImageLoaded,
            src: src7
          }
        ) : { "aria-hidden": true, as: "img", src: src7 },
        height: "full",
        position: "absolute",
        ...ios ? { WebkitUserSelect: "none" } : {},
        style: {
          WebkitTouchCallout: "none",
          transition: "opacity .15s linear",
          userSelect: "none",
          ...!useAsImage && isRemoteImage ? {
            opacity: isRemoteImageLoaded ? 1 : 0
          } : {}
        },
        width: "full"
      }
    ),
    borderColor ? import_react6.default.createElement(
      Box,
      {
        ...typeof borderColor === "object" && "custom" in borderColor ? { style: { borderColor: borderColor.custom } } : { borderColor },
        borderRadius,
        borderStyle: "solid",
        borderWidth: "1",
        height: "full",
        position: "relative",
        width: "full"
      }
    ) : null
  );
}
var SpinnerIconClassName = "_1luule42";
var SpinnerIconPathClassName = "_1luule43";
var useRandomId = (prefix) => (0, import_react10.useMemo)(
  () => `${prefix}_${Math.round(Math.random() * 1e9)}`,
  [prefix]
);
var SpinnerIcon = ({
  height = 21,
  width = 21
}) => {
  const id = useRandomId("spinner");
  return import_react10.default.createElement(
    "svg",
    {
      className: SpinnerIconClassName,
      fill: "none",
      height,
      viewBox: "0 0 21 21",
      width,
      xmlns: "http://www.w3.org/2000/svg"
    },
    import_react10.default.createElement("title", null, "Loading"),
    import_react10.default.createElement("clipPath", { id }, import_react10.default.createElement("path", { d: "M10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C11.3284 18 12 18.6716 12 19.5C12 20.3284 11.3284 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5C21 11.3284 20.3284 12 19.5 12C18.6716 12 18 11.3284 18 10.5C18 6.35786 14.6421 3 10.5 3Z" })),
    import_react10.default.createElement(
      "foreignObject",
      {
        clipPath: `url(#${id})`,
        height: "21",
        width: "21",
        x: "0",
        y: "0"
      },
      import_react10.default.createElement("div", { className: SpinnerIconPathClassName })
    )
  );
};
var colors = [
  "#FC5C54",
  "#FFD95A",
  "#E95D72",
  "#6A87C8",
  "#5FD0F3",
  "#75C06B",
  "#FFDD86",
  "#5FC6D4",
  "#FF949A",
  "#FF8024",
  "#9BA1A4",
  "#EC66FF",
  "#FF8CBC",
  "#FF9A23",
  "#C5DADB",
  "#A8CE63",
  "#71ABFF",
  "#FFE279",
  "#B6B1B6",
  "#FF6780",
  "#A575FF",
  "#4D82FF",
  "#FFB35A"
];
var avatars = [
  { color: colors[0], emoji: "🌶" },
  { color: colors[1], emoji: "🤑" },
  { color: colors[2], emoji: "🐙" },
  { color: colors[3], emoji: "🫐" },
  { color: colors[4], emoji: "🐳" },
  { color: colors[0], emoji: "🤶" },
  { color: colors[5], emoji: "🌲" },
  { color: colors[6], emoji: "🌞" },
  { color: colors[7], emoji: "🐒" },
  { color: colors[8], emoji: "🐵" },
  { color: colors[9], emoji: "🦊" },
  { color: colors[10], emoji: "🐼" },
  { color: colors[11], emoji: "🦄" },
  { color: colors[12], emoji: "🐷" },
  { color: colors[13], emoji: "🐧" },
  { color: colors[8], emoji: "🦩" },
  { color: colors[14], emoji: "👽" },
  { color: colors[0], emoji: "🎈" },
  { color: colors[8], emoji: "🍉" },
  { color: colors[1], emoji: "🎉" },
  { color: colors[15], emoji: "🐲" },
  { color: colors[16], emoji: "🌎" },
  { color: colors[17], emoji: "🍊" },
  { color: colors[18], emoji: "🐭" },
  { color: colors[19], emoji: "🍣" },
  { color: colors[1], emoji: "🐥" },
  { color: colors[20], emoji: "👾" },
  { color: colors[15], emoji: "🥦" },
  { color: colors[0], emoji: "👹" },
  { color: colors[17], emoji: "🙀" },
  { color: colors[4], emoji: "⛱" },
  { color: colors[21], emoji: "⛵️" },
  { color: colors[17], emoji: "🥳" },
  { color: colors[8], emoji: "🤯" },
  { color: colors[22], emoji: "🤠" }
];
function hashCode(text) {
  let hash7 = 0;
  if (text.length === 0)
    return hash7;
  for (let i = 0; i < text.length; i++) {
    const chr = text.charCodeAt(i);
    hash7 = (hash7 << 5) - hash7 + chr;
    hash7 |= 0;
  }
  return hash7;
}
function emojiAvatarForAddress(address) {
  const resolvedAddress = typeof address === "string" ? address : "";
  const avatarIndex = Math.abs(
    hashCode(resolvedAddress.toLowerCase()) % avatars.length
  );
  return avatars[avatarIndex ?? 0];
}
var EmojiAvatar = ({ address, ensImage, size: size4 }) => {
  const [loaded, setLoaded] = (0, import_react12.useState)(false);
  (0, import_react12.useEffect)(() => {
    if (ensImage) {
      const img = new Image();
      img.src = ensImage;
      img.onload = () => setLoaded(true);
    }
  }, [ensImage]);
  const { color: backgroundColor, emoji } = (0, import_react12.useMemo)(
    () => emojiAvatarForAddress(address),
    [address]
  );
  return ensImage ? loaded ? import_react12.default.createElement(
    Box,
    {
      backgroundSize: "cover",
      borderRadius: "full",
      position: "absolute",
      style: {
        backgroundImage: `url(${ensImage})`,
        backgroundPosition: "center",
        height: size4,
        width: size4
      }
    }
  ) : import_react12.default.createElement(
    Box,
    {
      alignItems: "center",
      backgroundSize: "cover",
      borderRadius: "full",
      color: "modalText",
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      style: {
        height: size4,
        width: size4
      }
    },
    import_react12.default.createElement(SpinnerIcon, null)
  ) : import_react12.default.createElement(
    Box,
    {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
      style: {
        ...!ensImage && { backgroundColor },
        height: size4,
        width: size4
      }
    },
    emoji
  );
};
var defaultAvatar = EmojiAvatar;
var AvatarContext = (0, import_react11.createContext)(defaultAvatar);
function Avatar({ address, imageUrl, loading, size: size4 }) {
  const AvatarComponent = (0, import_react9.useContext)(AvatarContext);
  return import_react9.default.createElement(
    Box,
    {
      "aria-hidden": true,
      borderRadius: "full",
      overflow: "hidden",
      position: "relative",
      style: {
        height: `${size4}px`,
        width: `${size4}px`
      },
      userSelect: "none"
    },
    import_react9.default.createElement(
      Box,
      {
        alignItems: "center",
        borderRadius: "full",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        position: "absolute",
        style: {
          fontSize: `${Math.round(size4 * 0.55)}px`,
          height: `${size4}px`,
          transform: loading ? "scale(0.72)" : void 0,
          transition: ".25s ease",
          transitionDelay: loading ? void 0 : ".1s",
          width: `${size4}px`,
          willChange: "transform"
        },
        userSelect: "none"
      },
      import_react9.default.createElement(AvatarComponent, { address, ensImage: imageUrl, size: size4 })
    ),
    loading && import_react9.default.createElement(
      Box,
      {
        color: "accentColor",
        display: "flex",
        height: "full",
        position: "absolute",
        width: "full"
      },
      import_react9.default.createElement(SpinnerIcon, { height: "100%", width: "100%" })
    )
  );
}
var DropdownIcon = () => import_react13.default.createElement("svg", { fill: "none", height: "7", width: "14", xmlns: "http://www.w3.org/2000/svg" }, import_react13.default.createElement("title", null, "Dropdown"), import_react13.default.createElement(
  "path",
  {
    d: "M12.75 1.54001L8.51647 5.0038C7.77974 5.60658 6.72026 5.60658 5.98352 5.0038L1.75 1.54001",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2.5",
    xmlns: "http://www.w3.org/2000/svg"
  }
));
var defaultOptions = {
  defaultLocale: "en",
  locale: "en"
};
var I18n = class {
  constructor(localeTranslations) {
    this.listeners = /* @__PURE__ */ new Set();
    this.defaultLocale = defaultOptions.defaultLocale;
    this.enableFallback = false;
    this.locale = defaultOptions.locale;
    this.cachedLocales = [];
    this.translations = {};
    for (const [locale, translation] of Object.entries(localeTranslations)) {
      this.cachedLocales = [...this.cachedLocales, locale];
      this.translations = {
        ...this.translations,
        ...this.flattenTranslation(translation, locale)
      };
    }
  }
  missingMessage(key) {
    return `[missing: "${this.locale}.${key}" translation]`;
  }
  flattenTranslation(translationObject, locale) {
    const result = {};
    const flatten = (currentTranslationObj, parentKey) => {
      for (const key of Object.keys(currentTranslationObj)) {
        const newKey = `${parentKey}.${key}`;
        const currentValue = currentTranslationObj[key];
        if (typeof currentValue === "object" && currentValue !== null) {
          flatten(currentValue, newKey);
        } else {
          result[newKey] = currentValue;
        }
      }
    };
    flatten(translationObject, locale);
    return result;
  }
  translateWithReplacements(translation, replacements = {}) {
    let translatedString = translation;
    for (const placeholder in replacements) {
      const replacementValue = replacements[placeholder];
      translatedString = translatedString.replace(
        `%{${placeholder}}`,
        replacementValue
      );
    }
    return translatedString;
  }
  t(key, replacements, options) {
    const translationKey = `${this.locale}.${key}`;
    const translation = this.translations[translationKey];
    if (!translation) {
      if (this.enableFallback) {
        const fallbackTranslationKey = `${this.defaultLocale}.${key}`;
        const fallbackTranslation = this.translations[fallbackTranslationKey];
        if (fallbackTranslation) {
          return this.translateWithReplacements(
            fallbackTranslation,
            replacements
          );
        }
      }
      if (options == null ? void 0 : options.rawKeyIfTranslationMissing)
        return key;
      return this.missingMessage(key);
    }
    return this.translateWithReplacements(translation, replacements);
  }
  isLocaleCached(locale) {
    return this.cachedLocales.includes(locale);
  }
  updateLocale(locale) {
    this.locale = locale;
    this.notifyListeners();
  }
  setTranslations(locale, translations) {
    const cachedLocale = this.isLocaleCached(locale);
    if (!cachedLocale) {
      this.cachedLocales = [...this.cachedLocales, locale];
      this.translations = {
        ...this.translations,
        ...this.flattenTranslation(translations, locale)
      };
    }
    this.locale = locale;
    this.notifyListeners();
  }
  notifyListeners() {
    for (const listener of this.listeners) {
      listener();
    }
  }
  onChange(fn) {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  }
};
var i18n = new I18n({
  en: JSON.parse(en_US_default),
  "en-US": JSON.parse(en_US_default)
});
i18n.defaultLocale = "en-US";
i18n.locale = "en-US";
i18n.enableFallback = true;
var fetchTranslations = async (locale) => {
  switch (locale) {
    case "ar":
    case "ar-AR":
      return (await import("./ar_AR-EFG7DWCD-FXBYQYRW.js")).default;
    case "en":
    case "en-US":
      return (await import("./en_US-762U7H2X-GECI6U25.js")).default;
    case "es":
    case "es-419":
      return (await import("./es_419-HHD3PTWJ-YZTC4FHJ.js")).default;
    case "fr":
    case "fr-FR":
      return (await import("./fr_FR-YJOM2FKT-7E3YLD2R.js")).default;
    case "hi":
    case "hi-IN":
      return (await import("./hi_IN-6LCB42ZP-HRSZM74M.js")).default;
    case "id":
    case "id-ID":
      return (await import("./id_ID-XEJUOSPY-PJAE7755.js")).default;
    case "ja":
    case "ja-JP":
      return (await import("./ja_JP-Y2UY5DJF-G2QEA4Z3.js")).default;
    case "ko":
    case "ko-KR":
      return (await import("./ko_KR-XEZDL32S-A3QPEJAQ.js")).default;
    case "pt":
    case "pt-BR":
      return (await import("./pt_BR-URWA5SSF-2GUH2BH4.js")).default;
    case "ru":
    case "ru-RU":
      return (await import("./ru_RU-S2JHPZU4-R6E4HIEA.js")).default;
    case "th":
    case "th-TH":
      return (await import("./th_TH-ERMCTL3T-5ACVJETC.js")).default;
    case "tr":
    case "tr-TR":
      return (await import("./tr_TR-7U4SQPKU-UDLU4VYR.js")).default;
    case "ua":
    case "uk-UA":
      return (await import("./uk_UA-EWJFZZZQ-KYWRV6XS.js")).default;
    case "vi":
    case "vi-VN":
      return (await import("./vi_VN-PML3AXSR-RWOXXBU6.js")).default;
    case "zh":
    case "zh-CN":
    case "zh-Hans":
      return (await import("./zh_CN-R6N3SRTH-2BWJ75IG.js")).default;
    case "zh-HK":
      return (await import("./zh_HK-ZZAF3UAE-FLXVIU35.js")).default;
    case "zh-Hant":
    case "zh-TW":
      return (await import("./zh_TW-KSS4HRUK-YPCGCSBW.js")).default;
    default:
      return (await import("./en_US-762U7H2X-GECI6U25.js")).default;
  }
};
async function setLocale(locale) {
  const isCached = i18n.isLocaleCached(locale);
  if (isCached) {
    i18n.updateLocale(locale);
    return;
  }
  const translations = await fetchTranslations(locale);
  i18n.setTranslations(locale, JSON.parse(translations));
}
var detectedBrowserLocale = () => {
  var _a;
  if (typeof window !== "undefined" && typeof navigator !== "undefined") {
    if ((_a = navigator.languages) == null ? void 0 : _a.length) {
      return navigator.languages[0];
    }
    if (navigator.language) {
      return navigator.language;
    }
  }
};
var I18nContext = (0, import_react14.createContext)({ i18n });
var I18nProvider = ({ children, locale }) => {
  const [updateCount, setUpdateCount] = (0, import_react14.useState)(0);
  const browserLocale = (0, import_react14.useMemo)(
    () => detectedBrowserLocale(),
    []
  );
  (0, import_react14.useEffect)(() => {
    const unsubscribe = i18n.onChange(() => {
      setUpdateCount((count) => count + 1);
    });
    return unsubscribe;
  }, []);
  (0, import_react14.useEffect)(() => {
    if (locale && locale !== i18n.locale) {
      setLocale(locale);
    } else if (!locale && browserLocale && browserLocale !== i18n.locale) {
      setLocale(browserLocale);
    }
  }, [locale, browserLocale]);
  const memoizedValue = (0, import_react14.useMemo)(() => {
    const t = (key, options) => i18n.t(key, options);
    return { t, i18n };
  }, [updateCount]);
  return import_react14.default.createElement(I18nContext.Provider, { value: memoizedValue }, children);
};
function isNotNullish(value) {
  return value != null;
}
var arbitrumIcon = {
  iconBackground: "#96bedc",
  iconUrl: async () => (await import("./arbitrum-IA4OWRTN-TE64TZA5.js")).default
};
var avalancheIcon = {
  iconBackground: "#e84141",
  iconUrl: async () => (await import("./avalanche-MXEFEDSW-TWKJZEOW.js")).default
};
var baseIcon = {
  iconBackground: "#0052ff",
  iconUrl: async () => (await import("./base-Z4LFBE5D-BMHLR6RX.js")).default
};
var blastIcon = {
  iconBackground: "#000000",
  iconUrl: async () => (await import("./blast-TN2WIMWF-ULUK4OOE.js")).default
};
var bscIcon = {
  iconBackground: "#ebac0e",
  iconUrl: async () => (await import("./bsc-RVE67I5L-54JPFJ5D.js")).default
};
var celoIcon = {
  iconBackground: "#FCFF52",
  iconUrl: async () => (await import("./celo-E6XU57FO-7VDLGWPC.js")).default
};
var cronosIcon = {
  iconBackground: "#002D74",
  iconUrl: async () => (await import("./cronos-ROYR77VZ-CHOJMQXG.js")).default
};
var ethereumIcon = {
  iconBackground: "#484c50",
  iconUrl: async () => (await import("./ethereum-RFBAMUVK-HQSJQJZ2.js")).default
};
var gnosisIcon = {
  iconBackground: "#04795c",
  iconUrl: async () => (await import("./gnosis-T7U5EW2Q-LYOAFAUI.js")).default
};
var hardhatIcon = {
  iconBackground: "#f9f7ec",
  iconUrl: async () => (await import("./hardhat-NEEC6JX7-KIQMRV6Y.js")).default
};
var klaytnIcon = {
  iconBackground: "transparent",
  iconUrl: async () => (await import("./klaytn-QTDBZIB3-CU6KGH7M.js")).default
};
var optimismIcon = {
  iconBackground: "#ff5a57",
  iconUrl: async () => (await import("./optimism-VD7XDD2W-QLOBKN36.js")).default
};
var mantaIcon = {
  iconBackground: "#ffffff",
  iconUrl: async () => (await import("./manta-5V6W5D7G-YZ6OAKDF.js")).default
};
var mantleIcon = {
  iconBackground: "#000000",
  iconUrl: async () => (await import("./mantle-KBL3OIYT-3UFVV6JD.js")).default
};
var polygonIcon = {
  iconBackground: "#9f71ec",
  iconUrl: async () => (await import("./polygon-WWEUOMKW-OWT3E4S4.js")).default
};
var xdcIcon = {
  iconBackground: "#f9f7ec",
  iconUrl: async () => (await import("./xdc-X7V4QFNF-6GPXQIG2.js")).default
};
var zetachainIcon = {
  iconBackground: "#000000",
  iconUrl: async () => (await import("./zetachain-BMJKVYBN-OSOFTACO.js")).default
};
var zkSyncIcon = {
  iconBackground: "#f9f7ec",
  iconUrl: async () => (await import("./zkSync-JL26RB7U-QQ3WAUEB.js")).default
};
var zoraIcon = {
  iconBackground: "#000000",
  iconUrl: async () => (await import("./zora-YZH32HP3-3NC6A52B.js")).default
};
var roninIcon = {
  iconBackground: "#1273EA",
  iconUrl: async () => (await import("./ronin-PNHX5V6H-245THMOW.js")).default
};
var chainMetadataByName = {
  arbitrum: { chainId: 42161, name: "Arbitrum", ...arbitrumIcon },
  arbitrumGoerli: { chainId: 421613, ...arbitrumIcon },
  arbitrumSepolia: { chainId: 421614, ...arbitrumIcon },
  avalanche: { chainId: 43114, ...avalancheIcon },
  avalancheFuji: { chainId: 43113, ...avalancheIcon },
  base: { chainId: 8453, name: "Base", ...baseIcon },
  baseGoerli: { chainId: 84531, ...baseIcon },
  baseSepolia: { chainId: 84532, ...baseIcon },
  blast: { chainId: 81457, name: "Blast", ...blastIcon },
  blastSepolia: { chainId: 168587773, ...blastIcon },
  bsc: { chainId: 56, name: "BSC", ...bscIcon },
  bscTestnet: { chainId: 97, ...bscIcon },
  celo: { chainId: 42220, name: "Celo", ...celoIcon },
  celoAlfajores: { chainId: 44787, name: "Celo Alfajores", ...celoIcon },
  cronos: { chainId: 25, ...cronosIcon },
  cronosTestnet: { chainId: 338, ...cronosIcon },
  goerli: { chainId: 5, ...ethereumIcon },
  gnosis: { chainId: 100, name: "Gnosis", ...gnosisIcon },
  hardhat: { chainId: 31337, ...hardhatIcon },
  holesky: { chainId: 17e3, ...ethereumIcon },
  kovan: { chainId: 42, ...ethereumIcon },
  klaytn: { chainId: 8217, name: "Klaytn", ...klaytnIcon },
  klaytnBaobab: { chainId: 1001, name: "Klaytn Baobab", ...klaytnIcon },
  localhost: { chainId: 1337, ...ethereumIcon },
  mainnet: { chainId: 1, name: "Ethereum", ...ethereumIcon },
  manta: { chainId: 169, name: "Manta", ...mantaIcon },
  mantaSepolia: { chainId: 3441006, ...mantaIcon },
  mantaTestnet: { chainId: 3441005, ...mantaIcon },
  mantle: { chainId: 5e3, ...mantleIcon },
  mantleTestnet: { chainId: 5001, ...mantleIcon },
  optimism: { chainId: 10, name: "Optimism", ...optimismIcon },
  optimismGoerli: { chainId: 420, ...optimismIcon },
  optimismKovan: { chainId: 69, ...optimismIcon },
  optimismSepolia: { chainId: 11155420, ...optimismIcon },
  polygon: { chainId: 137, name: "Polygon", ...polygonIcon },
  polygonMumbai: { chainId: 80001, ...polygonIcon },
  rinkeby: { chainId: 4, ...ethereumIcon },
  ropsten: { chainId: 3, ...ethereumIcon },
  ronin: { chainId: 2020, ...roninIcon },
  sepolia: { chainId: 11155111, ...ethereumIcon },
  xdc: { chainId: 50, name: "XinFin", ...xdcIcon },
  xdcTestnet: { chainId: 51, ...xdcIcon },
  zetachain: { chainId: 7e3, name: "ZetaChain", ...zetachainIcon },
  zetachainAthensTestnet: {
    chainId: 7001,
    name: "Zeta Athens",
    ...zetachainIcon
  },
  zkSync: { chainId: 324, name: "zkSync", ...zkSyncIcon },
  zkSyncTestnet: { chainId: 280, ...zkSyncIcon },
  zora: { chainId: 7777777, name: "Zora", ...zoraIcon },
  zoraSepolia: { chainId: 999999999, ...zoraIcon },
  zoraTestnet: { chainId: 999, ...zoraIcon }
};
var chainMetadataById = Object.fromEntries(
  Object.values(chainMetadataByName).filter(isNotNullish).map(({ chainId, ...metadata }) => [chainId, metadata])
);
var provideRainbowKitChains = (chains) => chains.map((chain) => {
  const defaultMetadata = chainMetadataById[chain.id] ?? {};
  return {
    ...chain,
    name: defaultMetadata.name ?? chain.name,
    // favor colloquial names
    iconUrl: chain.iconUrl ?? defaultMetadata.iconUrl,
    iconBackground: chain.iconBackground ?? defaultMetadata.iconBackground
  };
});
var RainbowKitChainContext = (0, import_react15.createContext)({
  chains: []
});
function RainbowKitChainProvider({
  children,
  initialChain
}) {
  const { chains } = useConfig();
  return import_react15.default.createElement(
    RainbowKitChainContext.Provider,
    {
      value: (0, import_react15.useMemo)(
        () => ({
          chains: provideRainbowKitChains(chains),
          initialChainId: typeof initialChain === "number" ? initialChain : initialChain == null ? void 0 : initialChain.id
        }),
        [chains, initialChain]
      )
    },
    children
  );
}
var useRainbowKitChains = () => (0, import_react15.useContext)(RainbowKitChainContext).chains;
var useInitialChainId = () => (0, import_react15.useContext)(RainbowKitChainContext).initialChainId;
var useRainbowKitChainsById = () => {
  const rainbowkitChains = useRainbowKitChains();
  return (0, import_react15.useMemo)(() => {
    const rainbowkitChainsById = {};
    for (const rkChain of rainbowkitChains) {
      rainbowkitChainsById[rkChain.id] = rkChain;
    }
    return rainbowkitChainsById;
  }, [rainbowkitChains]);
};
var ShowBalanceContext = (0, import_react16.createContext)({
  showBalance: void 0,
  setShowBalance: () => {
  }
});
function ShowBalanceProvider({ children }) {
  const [showBalance, setShowBalance] = (0, import_react16.useState)();
  return import_react16.default.createElement(ShowBalanceContext.Provider, { value: { showBalance, setShowBalance } }, children);
}
var useShowBalance = () => (0, import_react16.useContext)(ShowBalanceContext);
function useIsMounted() {
  const [isMounted, setIsMounted] = (0, import_react18.useState)(false);
  (0, import_react18.useEffect)(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);
  return (0, import_react18.useCallback)(() => isMounted, [isMounted]);
}
function useIsMainnetConfigured() {
  const rainbowKitChains = useRainbowKitChains();
  const chainId = mainnet.id;
  const configured = rainbowKitChains.some(
    (rainbowKitChain) => rainbowKitChain.id === chainId
  );
  return configured;
}
function useMainnetEnsAvatar(name) {
  const mainnetConfigured = useIsMainnetConfigured();
  const safeNormalize = (ensName) => {
    try {
      return normalize2(ensName);
    } catch {
    }
  };
  const { data: ensAvatar } = useEnsAvatar({
    chainId: mainnet.id,
    name: name ? safeNormalize(name) : void 0,
    query: {
      enabled: mainnetConfigured
    }
  });
  return ensAvatar;
}
async function rainbowFetch(url, opts) {
  opts = {
    headers: {},
    method: "get",
    ...opts,
    // Any other fetch options
    timeout: opts.timeout ?? 1e4
    // 10 secs
  };
  if (!url)
    throw new Error("rainbowFetch: Missing url argument");
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), opts.timeout);
  const { body, params, headers, ...otherOpts } = opts;
  const requestBody = body && typeof body === "object" ? JSON.stringify(opts.body) : opts.body;
  const response = await fetch(`${url}${createParams(params)}`, {
    ...otherOpts,
    body: requestBody,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers
    },
    signal: controller.signal
  });
  clearTimeout(id);
  const responseBody = await getBody(response);
  if (response.ok) {
    const { headers: headers2, status } = response;
    return { data: responseBody, headers: headers2, status };
  }
  const errorResponseBody = typeof responseBody === "string" ? { error: responseBody } : responseBody;
  const error = generateError({
    requestBody: body,
    response,
    responseBody: errorResponseBody
  });
  throw error;
}
function getBody(response) {
  const contentType = response.headers.get("Content-Type");
  if (contentType == null ? void 0 : contentType.startsWith("application/json")) {
    return response.json();
  }
  return response.text();
}
function createParams(params) {
  return params && Object.keys(params).length ? `?${new URLSearchParams(params)}` : "";
}
function generateError({
  requestBody,
  response,
  responseBody
}) {
  const message = (responseBody == null ? void 0 : responseBody.error) || (response == null ? void 0 : response.statusText) || "There was an error with the request.";
  const error = new Error(message);
  error.response = response;
  error.responseBody = responseBody;
  error.requestBody = requestBody;
  return error;
}
var RainbowFetchClient = class {
  constructor(opts = {}) {
    const { baseUrl = "", ...otherOpts } = opts;
    this.baseUrl = baseUrl;
    this.opts = otherOpts;
  }
  /**
   * Perform a GET request with the RainbowFetchClient.
   */
  get(url, opts) {
    return rainbowFetch(`${this.baseUrl}${url}`, {
      ...this.opts,
      ...opts || {},
      method: "get"
    });
  }
  /**
   * Perform a DELETE request with the RainbowFetchClient.
   */
  delete(url, opts) {
    return rainbowFetch(`${this.baseUrl}${url}`, {
      ...this.opts,
      ...opts || {},
      method: "delete"
    });
  }
  /**
   * Perform a HEAD request with the RainbowFetchClient.
   */
  head(url, opts) {
    return rainbowFetch(`${this.baseUrl}${url}`, {
      ...this.opts,
      ...opts || {},
      method: "head"
    });
  }
  /**
   * Perform a OPTIONS request with the RainbowFetchClient.
   */
  options(url, opts) {
    return rainbowFetch(`${this.baseUrl}${url}`, {
      ...this.opts,
      ...opts || {},
      method: "options"
    });
  }
  /**
   * Perform a POST request with the RainbowFetchClient.
   */
  post(url, body, opts) {
    return rainbowFetch(`${this.baseUrl}${url}`, {
      ...this.opts,
      ...opts || {},
      body,
      method: "post"
    });
  }
  /**
   * Perform a PUT request with the RainbowFetchClient.
   */
  put(url, body, opts) {
    return rainbowFetch(`${this.baseUrl}${url}`, {
      ...this.opts,
      ...opts || {},
      body,
      method: "put"
    });
  }
  /**
   * Perform a PATCH request with the RainbowFetchClient.
   */
  patch(url, body, opts) {
    return rainbowFetch(`${this.baseUrl}${url}`, {
      ...this.opts,
      ...opts || {},
      body,
      method: "patch"
    });
  }
};
function createHttpClient({
  baseUrl,
  headers,
  params,
  timeout
}) {
  return new RainbowFetchClient({ baseUrl, headers, params, timeout });
}
var ENHANCED_PROVIDER_ENABLED = Boolean(
  typeof process !== "undefined" && typeof process.env !== "undefined" && process.env.RAINBOW_PROVIDER_API_KEY
);
var enhancedProviderHttp = createHttpClient({
  baseUrl: "https://enhanced-provider.rainbow.me",
  headers: {
    "x-api-key": typeof process !== "undefined" && typeof process.env !== "undefined" && process.env.RAINBOW_PROVIDER_API_KEY || "LzbasoBiLqltex3VkcQ7LRmL4PtfiiZ1EMJrizrgfonWN6byJReu/l6yrUoo3zLW"
  }
});
function createQueryKey(key, args, config = {}) {
  return [key, args, config];
}
function getStorageEnsNameKey(address) {
  return `rk-ens-name-${address}`;
}
function safeParseJsonData(string) {
  try {
    const value = string ? JSON.parse(string) : null;
    return typeof value === "object" ? value : null;
  } catch {
    return null;
  }
}
function addEnsName(address, ensName) {
  if (!isAddress(address))
    return;
  const now = /* @__PURE__ */ new Date();
  const expiry = new Date(now.getTime() + 180 * 6e4);
  localStorage.setItem(
    getStorageEnsNameKey(address),
    JSON.stringify({
      ensName,
      expires: expiry.getTime()
    })
  );
}
function getEnsName2(address) {
  const data = safeParseJsonData(
    localStorage.getItem(getStorageEnsNameKey(address))
  );
  if (!data)
    return null;
  const { ensName, expires } = data;
  if (typeof ensName !== "string" || Number.isNaN(Number(expires))) {
    localStorage.removeItem(getStorageEnsNameKey(address));
    return null;
  }
  const now = /* @__PURE__ */ new Date();
  if (now.getTime() > Number(expires)) {
    localStorage.removeItem(getStorageEnsNameKey(address));
    return null;
  }
  return ensName;
}
async function getEnhancedProviderEnsName({ address }) {
  const ensName = getEnsName2(address);
  if (ensName)
    return ensName;
  const response = await enhancedProviderHttp.get("/v1/resolve-ens", { params: { address } });
  const enhancedProviderEnsName = response.data.data;
  if (enhancedProviderEnsName) {
    addEnsName(address, enhancedProviderEnsName);
  }
  return enhancedProviderEnsName;
}
function useMainnetEnsName(address) {
  const mainnetConfigured = useIsMainnetConfigured();
  const { data: ensName } = useEnsName({
    chainId: mainnet.id,
    address,
    query: {
      enabled: mainnetConfigured
    }
  });
  const { data: enhancedProviderEnsName } = useQuery({
    queryKey: createQueryKey("address", address),
    queryFn: () => getEnhancedProviderEnsName({ address }),
    enabled: !mainnetConfigured && !!address && ENHANCED_PROVIDER_ENABLED,
    staleTime: 10 * (60 * 1e3),
    // 10 minutes
    retry: 1
    // Retry once before returning undefined if the request fails
  });
  return ensName || enhancedProviderEnsName;
}
function useProfile({ address, includeBalance }) {
  const ensName = useMainnetEnsName(address);
  const ensAvatar = useMainnetEnsAvatar(ensName);
  const { data: balance } = useBalance({
    address: includeBalance ? address : void 0
  });
  return { ensName, ensAvatar, balance };
}
function useChainId() {
  const { chain: activeChain } = useAccount();
  return (activeChain == null ? void 0 : activeChain.id) ?? null;
}
var storageKey = "rk-transactions";
function safeParseJsonData2(string) {
  try {
    const value = string ? JSON.parse(string) : {};
    return typeof value === "object" ? value : {};
  } catch {
    return {};
  }
}
function loadData() {
  return safeParseJsonData2(
    typeof localStorage !== "undefined" ? localStorage.getItem(storageKey) : null
  );
}
var transactionHashRegex = /^0x([A-Fa-f0-9]{64})$/;
function validateTransaction(transaction) {
  const errors = [];
  if (!transactionHashRegex.test(transaction.hash)) {
    errors.push("Invalid transaction hash");
  }
  if (typeof transaction.description !== "string") {
    errors.push("Transaction must have a description");
  }
  if (typeof transaction.confirmations !== "undefined" && (!Number.isInteger(transaction.confirmations) || transaction.confirmations < 1)) {
    errors.push("Transaction confirmations must be a positiver integer");
  }
  return errors;
}
function createTransactionStore({
  provider: initialProvider
}) {
  let data = loadData();
  let provider = initialProvider;
  const listeners = /* @__PURE__ */ new Set();
  const transactionListeners = /* @__PURE__ */ new Set();
  const transactionRequestCache = /* @__PURE__ */ new Map();
  function setProvider(newProvider) {
    provider = newProvider;
  }
  function getTransactions(account, chainId) {
    var _a;
    return ((_a = data[account]) == null ? void 0 : _a[chainId]) ?? [];
  }
  function addTransaction(account, chainId, transaction) {
    const errors = validateTransaction(transaction);
    if (errors.length > 0) {
      throw new Error(["Unable to add transaction", ...errors].join("\n"));
    }
    updateTransactions(account, chainId, (transactions) => {
      return [
        { ...transaction, status: "pending" },
        ...transactions.filter(({ hash: hash7 }) => {
          return hash7 !== transaction.hash;
        })
      ];
    });
  }
  function clearTransactions(account, chainId) {
    updateTransactions(account, chainId, () => {
      return [];
    });
  }
  function setTransactionStatus(account, chainId, hash7, status) {
    updateTransactions(account, chainId, (transactions) => {
      return transactions.map(
        (transaction) => transaction.hash === hash7 ? { ...transaction, status } : transaction
      );
    });
  }
  async function waitForPendingTransactions(account, chainId) {
    await Promise.all(
      getTransactions(account, chainId).filter((transaction) => transaction.status === "pending").map(async (transaction) => {
        const { confirmations, hash: hash7 } = transaction;
        const existingRequest = transactionRequestCache.get(hash7);
        if (existingRequest) {
          return await existingRequest;
        }
        const requestPromise = provider.waitForTransactionReceipt({
          confirmations,
          hash: hash7,
          timeout: 3e5
          // 5 minutes
        }).then(({ status }) => {
          transactionRequestCache.delete(hash7);
          if (status === void 0) {
            return;
          }
          setTransactionStatus(
            account,
            chainId,
            hash7,
            // @ts-ignore - types changed with viem@1.1.0
            status === 0 || status === "reverted" ? "failed" : "confirmed"
          );
          notifyTransactionListeners(status);
        }).catch(() => {
          setTransactionStatus(account, chainId, hash7, "failed");
        });
        transactionRequestCache.set(hash7, requestPromise);
        return await requestPromise;
      })
    );
  }
  function updateTransactions(account, chainId, updateFn) {
    data = loadData();
    data[account] = data[account] ?? {};
    let completedTransactionCount = 0;
    const MAX_COMPLETED_TRANSACTIONS = 10;
    const transactions = updateFn(data[account][chainId] ?? []).filter(({ status }) => {
      return status === "pending" ? true : completedTransactionCount++ <= MAX_COMPLETED_TRANSACTIONS;
    });
    data[account][chainId] = transactions.length > 0 ? transactions : void 0;
    persistData();
    notifyListeners();
    waitForPendingTransactions(account, chainId);
  }
  function persistData() {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }
  function notifyListeners() {
    for (const listener of listeners) {
      listener();
    }
  }
  function notifyTransactionListeners(txStatus) {
    for (const transactionListener of transactionListeners) {
      transactionListener(txStatus);
    }
  }
  function onChange(fn) {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  }
  function onTransactionStatus(fn) {
    transactionListeners.add(fn);
    return () => {
      transactionListeners.delete(fn);
    };
  }
  return {
    addTransaction,
    clearTransactions,
    getTransactions,
    onTransactionStatus,
    onChange,
    setProvider,
    waitForPendingTransactions
  };
}
var storeSingleton;
var TransactionStoreContext = import_react20.default.createContext(
  null
);
function TransactionStoreProvider({
  children
}) {
  const provider = usePublicClient();
  const { address } = useAccount();
  const chainId = useChainId();
  const { refetch } = useBalance({
    address,
    query: {
      enabled: false
    }
  });
  const [store] = import_react20.default.useState(
    () => storeSingleton ?? (storeSingleton = createTransactionStore({ provider }))
  );
  const onTransactionStatus = import_react20.default.useCallback(
    (txStatus) => {
      if (txStatus === "success")
        refetch();
    },
    [refetch]
  );
  import_react20.default.useEffect(() => {
    store.setProvider(provider);
  }, [store, provider]);
  import_react20.default.useEffect(() => {
    if (address && chainId) {
      store.waitForPendingTransactions(address, chainId);
    }
  }, [store, address, chainId]);
  import_react20.default.useEffect(() => {
    if (store && address && chainId) {
      return store.onTransactionStatus(onTransactionStatus);
    }
  }, [store, address, chainId, onTransactionStatus]);
  return import_react20.default.createElement(TransactionStoreContext.Provider, { value: store }, children);
}
function useTransactionStore() {
  const store = import_react20.default.useContext(TransactionStoreContext);
  if (!store) {
    throw new Error("Transaction hooks must be used within RainbowKitProvider");
  }
  return store;
}
function useRecentTransactions() {
  const store = useTransactionStore();
  const { address } = useAccount();
  const chainId = useChainId();
  const [transactions, setTransactions] = (0, import_react19.useState)(
    () => store && address && chainId ? store.getTransactions(address, chainId) : []
  );
  (0, import_react19.useEffect)(() => {
    if (store && address && chainId) {
      setTransactions(store.getTransactions(address, chainId));
      return store.onChange(() => {
        setTransactions(store.getTransactions(address, chainId));
      });
    }
  }, [store, address, chainId]);
  return transactions;
}
var resolveThemeVars = (theme) => typeof theme === "function" ? theme() : theme;
function cssObjectFromTheme(theme, { extends: baseTheme2 } = {}) {
  const resolvedThemeVars = {
    // We use an object spread here to ensure it's a plain object since vanilla-extract's
    // var objects have a custom 'toString' method that returns a CSS string, but we don't
    // want to leak this to our consumers since they're unaware we're using vanilla-extract.
    // Instead, we want them to handle this explicitly via our 'cssStringFromTheme' function.
    ...assignInlineVars(themeVars, resolveThemeVars(theme))
  };
  if (!baseTheme2) {
    return resolvedThemeVars;
  }
  const resolvedBaseThemeVars = assignInlineVars(
    themeVars,
    resolveThemeVars(baseTheme2)
  );
  const filteredVars = Object.fromEntries(
    Object.entries(resolvedThemeVars).filter(
      ([varName, value]) => value !== resolvedBaseThemeVars[varName]
    )
  );
  return filteredVars;
}
function cssStringFromTheme(theme, options = {}) {
  return Object.entries(cssObjectFromTheme(theme, options)).map(([key, value]) => `${key}:${value.replace(/[:;{}</>]/g, "")};`).join("");
}
var defaultAppInfo = {
  appName: void 0,
  disclaimer: void 0,
  learnMoreUrl: "https://learn.rainbow.me/understanding-web3?utm_source=rainbowkit&utm_campaign=learnmore"
};
var AppContext = (0, import_react25.createContext)(defaultAppInfo);
var CoolModeContext = (0, import_react26.createContext)(false);
function debounce(fn, ms) {
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn();
    }, ms);
  };
}
var useWindowSize = () => {
  const [windowSize, setWindowSize] = (0, import_react28.useState)({
    height: void 0,
    width: void 0
  });
  (0, import_react28.useEffect)(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 500);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
var WalletButtonContext = (0, import_react29.createContext)({
  connector: null,
  setConnector: () => {
  }
});
function WalletButtonProvider({ children }) {
  const [connector, setConnector] = (0, import_react29.useState)(null);
  return import_react29.default.createElement(
    WalletButtonContext.Provider,
    {
      value: (0, import_react29.useMemo)(
        () => ({
          connector,
          setConnector
        }),
        [connector]
      )
    },
    children
  );
}
var ModalSizeOptions = {
  COMPACT: "compact",
  WIDE: "wide"
};
var ModalSizeContext = (0, import_react27.createContext)(
  ModalSizeOptions.WIDE
);
function ModalSizeProvider({
  children,
  modalSize
}) {
  const { width } = useWindowSize();
  const isSmallScreen = width && width < largeScreenMinWidth;
  const { connector } = (0, import_react27.useContext)(WalletButtonContext);
  return import_react27.default.createElement(
    ModalSizeContext.Provider,
    {
      value: isSmallScreen || connector ? ModalSizeOptions.COMPACT : modalSize
    },
    children
  );
}
var ShowRecentTransactionsContext = (0, import_react30.createContext)(false);
var storageKey2 = "rk-version";
function setRainbowKitVersion({ version: version2 }) {
  localStorage.setItem(storageKey2, version2);
}
function useFingerprint() {
  const fingerprint = (0, import_react31.useCallback)(() => {
    setRainbowKitVersion({ version: "2.2.0" });
  }, []);
  (0, import_react31.useEffect)(() => {
    fingerprint();
  }, [fingerprint]);
}
function indexBy(items, getKey2) {
  const indexedItems = {};
  for (const item of items) {
    const key = getKey2(item);
    if (!key) {
      continue;
    }
    indexedItems[key] = item;
  }
  return indexedItems;
}
function isSafari() {
  return typeof navigator !== "undefined" && typeof navigator.userAgent !== "undefined" && /Version\/([0-9._]+).*Safari/.test(navigator.userAgent);
}
function isArc() {
  return typeof document !== "undefined" && getComputedStyle(document.body).getPropertyValue("--arc-palette-focus") !== "";
}
function getBrowser() {
  var _a, _b;
  if (typeof navigator === "undefined")
    return "Browser";
  const ua2 = (_a = navigator.userAgent) == null ? void 0 : _a.toLowerCase();
  if ((_b = navigator.brave) == null ? void 0 : _b.isBrave)
    return "Brave";
  if ((ua2 == null ? void 0 : ua2.indexOf("edg/")) > -1)
    return "Edge";
  if ((ua2 == null ? void 0 : ua2.indexOf("op")) > -1)
    return "Opera";
  if (isArc())
    return "Arc";
  if ((ua2 == null ? void 0 : ua2.indexOf("chrome")) > -1)
    return "Chrome";
  if ((ua2 == null ? void 0 : ua2.indexOf("firefox")) > -1)
    return "Firefox";
  if (isSafari())
    return "Safari";
  return "Browser";
}
var ua = (0, import_ua_parser_js.UAParser)();
var { os } = ua;
function isWindows() {
  return os.name === "Windows";
}
function isMacOS() {
  return os.name === "Mac OS";
}
function isLinux() {
  return ["Ubuntu", "Mint", "Fedora", "Debian", "Arch", "Linux"].includes(
    os.name
  );
}
function getPlatform() {
  if (isWindows())
    return "Windows";
  if (isMacOS())
    return "macOS";
  if (isLinux())
    return "Linux";
  return "Desktop";
}
var getExtensionDownloadUrl = (wallet) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const browser = getBrowser();
  return {
    [
      "Arc"
      /* Arc */
    ]: (_a = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _a.chrome,
    [
      "Brave"
      /* Brave */
    ]: (_b = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _b.chrome,
    [
      "Chrome"
      /* Chrome */
    ]: (_c = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _c.chrome,
    [
      "Edge"
      /* Edge */
    ]: ((_d = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _d.edge) || ((_e = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _e.chrome),
    [
      "Firefox"
      /* Firefox */
    ]: (_f = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _f.firefox,
    [
      "Opera"
      /* Opera */
    ]: ((_g = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _g.opera) || ((_h = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _h.chrome),
    [
      "Safari"
      /* Safari */
    ]: (_i = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _i.safari,
    [
      "Browser"
      /* Browser */
    ]: (_j = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _j.browserExtension
  }[browser] ?? ((_k = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _k.browserExtension);
};
var getMobileDownloadUrl = (wallet) => {
  var _a, _b, _c;
  const ios = isIOS();
  return (ios ? (_a = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _a.ios : (_b = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _b.android) ?? ((_c = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _c.mobile);
};
var getDesktopDownloadUrl = (wallet) => {
  var _a, _b, _c, _d, _e;
  const platform = getPlatform();
  return {
    [
      "Windows"
      /* Windows */
    ]: (_a = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _a.windows,
    [
      "macOS"
      /* MacOS */
    ]: (_b = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _b.macos,
    [
      "Linux"
      /* Linux */
    ]: (_c = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _c.linux,
    [
      "Desktop"
      /* Desktop */
    ]: (_d = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _d.desktop
  }[platform] ?? ((_e = wallet == null ? void 0 : wallet.downloadUrls) == null ? void 0 : _e.desktop);
};
var isRecentWallet = (recentWallets, walletId) => {
  return recentWallets.some((recentWallet) => recentWallet.id === walletId);
};
var isRainbowKitConnector = (wallet) => {
  return !!wallet.isRainbowKitConnector;
};
var isEIP6963Connector = (wallet) => {
  var _a;
  return !!(!wallet.isRainbowKitConnector && ((_a = wallet.icon) == null ? void 0 : _a.replace(/\n/g, "").startsWith("data:image")) && wallet.uid && wallet.name);
};
var rainbowKitConnectorWithWalletConnect = (wallet, walletConnectModalConnector) => {
  const shouldUseWalletConnectModal = wallet.id === "walletConnect" && walletConnectModalConnector;
  return shouldUseWalletConnectModal ? { ...wallet, walletConnectModalConnector } : wallet;
};
var connectorsWithRecentWallets = ({
  wallets,
  recentWallets
}) => {
  return [
    ...recentWallets,
    ...wallets.filter((wallet) => !isRecentWallet(recentWallets, wallet.id))
  ];
};
var storageKey3 = "rk-recent";
function safeParseJsonArray(string) {
  try {
    const value = string ? JSON.parse(string) : [];
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}
function getRecentWalletIds() {
  return typeof localStorage !== "undefined" ? safeParseJsonArray(localStorage.getItem(storageKey3)) : [];
}
function dedupe(array) {
  return [...new Set(array)];
}
function addRecentWalletId(walletId) {
  const newValue = dedupe([walletId, ...getRecentWalletIds()]);
  localStorage.setItem(storageKey3, JSON.stringify(newValue));
}
function useWalletConnectors(mergeEIP6963WithRkConnectors = false) {
  var _a, _b, _c;
  const rainbowKitChains = useRainbowKitChains();
  const intialChainId = useInitialChainId();
  const { connectAsync, connectors: defaultConnectors_untyped } = useConnect();
  const defaultCreatedConnectors = defaultConnectors_untyped;
  const { setIsWalletConnectModalOpen } = useWalletConnectOpenState();
  const defaultConnectors = defaultCreatedConnectors.map((connector) => ({
    ...connector,
    // rkDetails is optional it does not exist in eip6963 connectors.
    // We only inject `rkDetails` in `connectorsForWallets` when we
    // want to have additional information in the connector.
    ...connector.rkDetails || {}
  }));
  async function connectWallet(connector) {
    var _a2, _b2;
    const walletChainId = await connector.getChainId();
    const result = await connectAsync({
      chainId: (
        // The goal here is to ensure users are always on a supported chain when connecting.
        // If an `initialChain` prop was provided to RainbowKitProvider, use that.
        intialChainId ?? // Otherwise, if the wallet is already on a supported chain, use that to avoid a chain switch prompt.
        ((_a2 = rainbowKitChains.find(({ id }) => id === walletChainId)) == null ? void 0 : _a2.id) ?? // Finally, fall back to the first chain provided to RainbowKitProvider.
        ((_b2 = rainbowKitChains[0]) == null ? void 0 : _b2.id)
      ),
      connector
    });
    if (result) {
      addRecentWalletId(connector.id);
    }
    return result;
  }
  async function connectToWalletConnectModal(walletConnectModalConnector2) {
    try {
      setIsWalletConnectModalOpen(true);
      await connectWallet(walletConnectModalConnector2);
      setIsWalletConnectModalOpen(false);
    } catch (err) {
      const isUserRejection = (
        // @ts-expect-error - Web3Modal v1 error name
        err.name === "UserRejectedRequestError" || // @ts-expect-error - Web3Modal v2 error message on desktop
        err.message === "Connection request reset. Please try again."
      );
      setIsWalletConnectModalOpen(false);
      if (!isUserRejection) {
        throw err;
      }
    }
  }
  const getWalletConnectUri = async (connector, uriConverter) => {
    const provider = await connector.getProvider();
    if (connector.id === "coinbase") {
      return provider.qrUrl;
    }
    return new Promise(
      (resolve) => (
        // Wagmi v2 doesn't have a return type for provider yet
        // @ts-expect-error
        provider.once("display_uri", (uri) => {
          resolve(uriConverter(uri));
        })
      )
    );
  };
  const walletConnectModalConnector = defaultConnectors.find(
    (connector) => connector.id === "walletConnect" && connector.isWalletConnectModalConnector
  );
  const eip6963Connectors = defaultConnectors.filter(isEIP6963Connector).map((connector) => {
    return {
      ...connector,
      groupIndex: 0
    };
  });
  const rainbowKitConnectors = defaultConnectors.filter(isRainbowKitConnector).filter((wallet) => !wallet.isWalletConnectModalConnector).filter((wallet) => {
    if (!mergeEIP6963WithRkConnectors)
      return true;
    const existsInEIP6963Connectors = eip6963Connectors.some(
      (eip6963) => eip6963.id === wallet.rdns
    );
    return !existsInEIP6963Connectors;
  }).map(
    (wallet) => rainbowKitConnectorWithWalletConnect(
      wallet,
      walletConnectModalConnector
    )
  );
  const combinedConnectors = [...eip6963Connectors, ...rainbowKitConnectors];
  const walletInstanceById = indexBy(
    combinedConnectors,
    (walletInstance) => walletInstance.id
  );
  const MAX_RECENT_WALLETS = 3;
  const recentWallets = getRecentWalletIds().map((walletId) => walletInstanceById[walletId]).filter(Boolean).slice(0, MAX_RECENT_WALLETS);
  const walletConnectors = [];
  const combinedConnectorsWithRecentWallets = connectorsWithRecentWallets({
    wallets: combinedConnectors,
    recentWallets
  });
  for (const wallet of combinedConnectorsWithRecentWallets) {
    if (!wallet)
      continue;
    const eip6963 = isEIP6963Connector(wallet);
    const recent = isRecentWallet(recentWallets, wallet.id);
    if (eip6963) {
      walletConnectors.push({
        ...wallet,
        iconUrl: wallet.icon,
        ready: true,
        connect: () => connectWallet(wallet),
        groupName: "Installed",
        recent
      });
      continue;
    }
    walletConnectors.push({
      ...wallet,
      ready: wallet.installed ?? true,
      connect: () => connectWallet(wallet),
      desktopDownloadUrl: getDesktopDownloadUrl(wallet),
      extensionDownloadUrl: getExtensionDownloadUrl(wallet),
      groupName: wallet.groupName,
      mobileDownloadUrl: getMobileDownloadUrl(wallet),
      getQrCodeUri: ((_a = wallet.qrCode) == null ? void 0 : _a.getUri) ? () => getWalletConnectUri(wallet, wallet.qrCode.getUri) : void 0,
      getDesktopUri: ((_b = wallet.desktop) == null ? void 0 : _b.getUri) ? () => getWalletConnectUri(wallet, wallet.desktop.getUri) : void 0,
      getMobileUri: ((_c = wallet.mobile) == null ? void 0 : _c.getUri) ? () => {
        var _a2;
        return getWalletConnectUri(wallet, (_a2 = wallet.mobile) == null ? void 0 : _a2.getUri);
      } : void 0,
      recent,
      showWalletConnectModal: wallet.walletConnectModalConnector ? () => connectToWalletConnectModal(wallet.walletConnectModalConnector) : void 0
    });
  }
  return walletConnectors;
}
var src = async () => (await import("./assets-NU2OP443-YXTFQGM6.js")).default;
var preloadAssetsIcon = () => loadImages(src);
var AssetsIcon = () => import_react33.default.createElement(
  AsyncImage,
  {
    background: "#d0d5de",
    borderRadius: "10",
    height: "48",
    src,
    width: "48"
  }
);
var src2 = async () => (await import("./login-CWDTIDNK-IKJPP4HK.js")).default;
var preloadLoginIcon = () => loadImages(src2);
var LoginIcon = () => import_react34.default.createElement(
  AsyncImage,
  {
    background: "#d0d5de",
    borderRadius: "10",
    height: "48",
    src: src2,
    width: "48"
  }
);
var Text = import_react37.default.forwardRef(
  ({
    as = "div",
    children,
    className,
    color,
    display,
    font = "body",
    id,
    size: size4 = "16",
    style,
    tabIndex,
    textAlign = "inherit",
    weight = "regular",
    testId
  }, ref) => {
    return import_react37.default.createElement(
      Box,
      {
        as,
        className,
        color,
        display,
        fontFamily: font,
        fontSize: size4,
        fontWeight: weight,
        id,
        ref,
        style,
        tabIndex,
        textAlign,
        testId
      },
      children
    );
  }
);
Text.displayName = "Text";
var sizeVariants = {
  large: {
    fontSize: "16",
    paddingX: "24",
    paddingY: "10"
  },
  medium: {
    fontSize: "14",
    height: "28",
    paddingX: "12",
    paddingY: "4"
  },
  small: {
    fontSize: "14",
    paddingX: "10",
    paddingY: "5"
  }
};
function ActionButton({
  disabled = false,
  href,
  label,
  onClick,
  rel = "noreferrer noopener",
  size: size4 = "medium",
  target = "_blank",
  testId,
  type: type6 = "primary"
}) {
  const isPrimary = type6 === "primary";
  const isNotLarge = size4 !== "large";
  const mobile = isMobile();
  const background = !disabled ? isPrimary ? "accentColor" : isNotLarge ? "actionButtonSecondaryBackground" : null : "actionButtonSecondaryBackground";
  const { fontSize, height, paddingX, paddingY } = sizeVariants[size4];
  const hasBorder = !mobile || !isNotLarge;
  return import_react36.default.createElement(
    Box,
    {
      ...href ? !disabled ? { as: "a", href, rel, target } : {} : { as: "button", type: "button" },
      onClick: !disabled ? onClick : void 0,
      ...hasBorder ? {
        borderColor: mobile && !isNotLarge && !isPrimary ? "actionButtonBorderMobile" : "actionButtonBorder",
        borderStyle: "solid",
        borderWidth: "1"
      } : {},
      borderRadius: "actionButton",
      className: !disabled && touchableStyles({ active: "shrinkSm", hover: "grow" }),
      display: "block",
      paddingX,
      paddingY,
      style: { willChange: "transform" },
      testId,
      textAlign: "center",
      transition: "transform",
      ...background ? { background } : {},
      ...height ? { height } : {}
    },
    import_react36.default.createElement(
      Text,
      {
        color: !disabled ? isPrimary ? "accentColorForeground" : "accentColor" : "modalTextSecondary",
        size: fontSize,
        weight: "bold"
      },
      label
    )
  );
}
var CloseIcon = () => {
  return isMobile() ? import_react39.default.createElement(
    "svg",
    {
      "aria-hidden": true,
      fill: "none",
      height: "11.5",
      viewBox: "0 0 11.5 11.5",
      width: "11.5",
      xmlns: "http://www.w3.org/2000/svg"
    },
    import_react39.default.createElement("title", null, "Close"),
    import_react39.default.createElement(
      "path",
      {
        d: "M2.13388 0.366117C1.64573 -0.122039 0.854272 -0.122039 0.366117 0.366117C-0.122039 0.854272 -0.122039 1.64573 0.366117 2.13388L3.98223 5.75L0.366117 9.36612C-0.122039 9.85427 -0.122039 10.6457 0.366117 11.1339C0.854272 11.622 1.64573 11.622 2.13388 11.1339L5.75 7.51777L9.36612 11.1339C9.85427 11.622 10.6457 11.622 11.1339 11.1339C11.622 10.6457 11.622 9.85427 11.1339 9.36612L7.51777 5.75L11.1339 2.13388C11.622 1.64573 11.622 0.854272 11.1339 0.366117C10.6457 -0.122039 9.85427 -0.122039 9.36612 0.366117L5.75 3.98223L2.13388 0.366117Z",
        fill: "currentColor"
      }
    )
  ) : import_react39.default.createElement(
    "svg",
    {
      "aria-hidden": true,
      fill: "none",
      height: "10",
      viewBox: "0 0 10 10",
      width: "10",
      xmlns: "http://www.w3.org/2000/svg"
    },
    import_react39.default.createElement("title", null, "Close"),
    import_react39.default.createElement(
      "path",
      {
        d: "M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z",
        fill: "currentColor"
      }
    )
  );
};
var CloseButton = ({
  "aria-label": ariaLabel = "Close",
  onClose
}) => {
  const mobile = isMobile();
  return import_react38.default.createElement(
    Box,
    {
      alignItems: "center",
      "aria-label": ariaLabel,
      as: "button",
      background: "closeButtonBackground",
      borderColor: "actionButtonBorder",
      borderRadius: "full",
      borderStyle: "solid",
      borderWidth: mobile ? "0" : "1",
      className: touchableStyles({ active: "shrinkSm", hover: "growLg" }),
      color: "closeButton",
      display: "flex",
      height: mobile ? "30" : "28",
      justifyContent: "center",
      onClick: onClose,
      style: { willChange: "transform" },
      transition: "default",
      type: "button",
      width: mobile ? "30" : "28"
    },
    import_react38.default.createElement(CloseIcon, null)
  );
};
var signInIcon = async () => (await import("./sign-A7IJEUT5-4U6CC437.js")).default;
function SignIn({
  onClose,
  onCloseModal
}) {
  const { i18n: i18n2 } = (0, import_react35.useContext)(I18nContext);
  const [{ status, ...state }, setState] = import_react35.default.useState({ status: "idle" });
  const authAdapter = useAuthenticationAdapter();
  const getNonce2 = (0, import_react35.useCallback)(async () => {
    try {
      const nonce = await authAdapter.getNonce();
      setState((x) => ({ ...x, nonce }));
    } catch {
      setState((x) => ({
        ...x,
        errorMessage: i18n2.t("sign_in.message.preparing_error"),
        status: "idle"
      }));
    }
  }, [authAdapter, i18n2.t]);
  const onceRef = (0, import_react35.useRef)(false);
  import_react35.default.useEffect(() => {
    if (onceRef.current)
      return;
    onceRef.current = true;
    getNonce2();
  }, [getNonce2]);
  const mobile = isMobile();
  const { address, chain: activeChain } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const signIn = async () => {
    try {
      const chainId = activeChain == null ? void 0 : activeChain.id;
      const { nonce } = state;
      if (!address || !chainId || !nonce) {
        return;
      }
      setState((x) => ({
        ...x,
        errorMessage: void 0,
        status: "signing"
      }));
      const message = authAdapter.createMessage({ address, chainId, nonce });
      let signature;
      try {
        signature = await signMessageAsync({
          message
        });
      } catch (error) {
        if (error instanceof UserRejectedRequestError) {
          return setState((x) => ({
            ...x,
            status: "idle"
          }));
        }
        return setState((x) => ({
          ...x,
          errorMessage: i18n2.t("sign_in.signature.signing_error"),
          status: "idle"
        }));
      }
      setState((x) => ({ ...x, status: "verifying" }));
      try {
        const verified = await authAdapter.verify({ message, signature });
        if (verified) {
          onCloseModal();
          return;
        }
        throw new Error();
      } catch {
        return setState((x) => ({
          ...x,
          errorMessage: i18n2.t("sign_in.signature.verifying_error"),
          status: "idle"
        }));
      }
    } catch {
      setState({
        errorMessage: i18n2.t("sign_in.signature.oops_error"),
        status: "idle"
      });
    }
  };
  return import_react35.default.createElement(Box, { position: "relative" }, import_react35.default.createElement(
    Box,
    {
      display: "flex",
      paddingRight: "16",
      paddingTop: "16",
      position: "absolute",
      right: "0"
    },
    import_react35.default.createElement(CloseButton, { onClose })
  ), import_react35.default.createElement(
    Box,
    {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      gap: mobile ? "32" : "24",
      padding: "24",
      paddingX: "18",
      style: { paddingTop: mobile ? "60px" : "36px" }
    },
    import_react35.default.createElement(
      Box,
      {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: mobile ? "6" : "4",
        style: { maxWidth: mobile ? 320 : 280 }
      },
      import_react35.default.createElement(
        Box,
        {
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: mobile ? "32" : "16"
        },
        import_react35.default.createElement(AsyncImage, { height: 40, src: signInIcon, width: 40 }),
        import_react35.default.createElement(
          Text,
          {
            color: "modalText",
            size: mobile ? "20" : "18",
            textAlign: "center",
            weight: "heavy"
          },
          i18n2.t("sign_in.label")
        )
      ),
      import_react35.default.createElement(
        Box,
        {
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: mobile ? "16" : "12"
        },
        import_react35.default.createElement(
          Text,
          {
            color: "modalTextSecondary",
            size: mobile ? "16" : "14",
            textAlign: "center"
          },
          i18n2.t("sign_in.description")
        ),
        status === "idle" && state.errorMessage ? import_react35.default.createElement(
          Text,
          {
            color: "error",
            size: mobile ? "16" : "14",
            textAlign: "center",
            weight: "bold"
          },
          state.errorMessage
        ) : null
      )
    ),
    import_react35.default.createElement(
      Box,
      {
        alignItems: !mobile ? "center" : void 0,
        display: "flex",
        flexDirection: "column",
        gap: "8",
        width: "full"
      },
      import_react35.default.createElement(
        ActionButton,
        {
          disabled: !state.nonce || status === "signing" || status === "verifying",
          label: !state.nonce ? i18n2.t("sign_in.message.preparing") : status === "signing" ? i18n2.t("sign_in.signature.waiting") : status === "verifying" ? i18n2.t("sign_in.signature.verifying") : i18n2.t("sign_in.message.send"),
          onClick: signIn,
          size: mobile ? "large" : "medium",
          testId: "auth-message-button"
        }
      ),
      mobile ? import_react35.default.createElement(
        ActionButton,
        {
          label: "Cancel",
          onClick: onClose,
          size: "large",
          type: "secondary"
        }
      ) : import_react35.default.createElement(
        Box,
        {
          as: "button",
          borderRadius: "full",
          className: touchableStyles({ active: "shrink", hover: "grow" }),
          display: "block",
          onClick: onClose,
          paddingX: "10",
          paddingY: "5",
          rel: "noreferrer",
          style: { willChange: "transform" },
          target: "_blank",
          transition: "default"
        },
        import_react35.default.createElement(
          Text,
          {
            color: "closeButton",
            size: mobile ? "16" : "14",
            weight: "bold"
          },
          i18n2.t("sign_in.message.cancel")
        )
      )
    )
  ));
}
function usePreloadImages() {
  const rainbowKitChains = useRainbowKitChains();
  const walletConnectors = useWalletConnectors();
  const isUnauthenticated = useAuthenticationStatus() === "unauthenticated";
  const preloadImages = (0, import_react32.useCallback)(() => {
    loadImages(
      ...walletConnectors.map((wallet) => wallet.iconUrl),
      ...rainbowKitChains.map((chain) => chain.iconUrl).filter(isNotNullish)
    );
    if (!isMobile()) {
      preloadAssetsIcon();
      preloadLoginIcon();
    }
    if (isUnauthenticated) {
      loadImages(signInIcon);
    }
  }, [walletConnectors, rainbowKitChains, isUnauthenticated]);
  (0, import_react32.useEffect)(() => {
    preloadImages();
  }, [preloadImages]);
}
var storageKey4 = "WALLETCONNECT_DEEPLINK_CHOICE";
function setWalletConnectDeepLink({
  mobileUri,
  name
}) {
  localStorage.setItem(
    storageKey4,
    JSON.stringify({
      href: mobileUri.split("?")[0],
      name
    })
  );
}
function clearWalletConnectDeepLink() {
  localStorage.removeItem(storageKey4);
}
var ThemeIdContext = (0, import_react24.createContext)(void 0);
var attr = "data-rk";
var createThemeRootProps = (id) => ({ [attr]: id || "" });
var createThemeRootSelector = (id) => {
  if (id && !/^[a-zA-Z0-9_]+$/.test(id)) {
    throw new Error(`Invalid ID: ${id}`);
  }
  return id ? `[${attr}="${id}"]` : `[${attr}]`;
};
var useThemeRootProps = () => {
  const id = (0, import_react24.useContext)(ThemeIdContext);
  return createThemeRootProps(id);
};
var defaultTheme = lightTheme();
function RainbowKitProvider({
  appInfo,
  avatar,
  children,
  coolMode = false,
  id,
  initialChain,
  locale,
  modalSize = ModalSizeOptions.WIDE,
  showRecentTransactions = false,
  theme = defaultTheme
}) {
  usePreloadImages();
  useFingerprint();
  useAccountEffect({ onDisconnect: clearWalletConnectDeepLink });
  if (typeof theme === "function") {
    throw new Error(
      'A theme function was provided to the "theme" prop instead of a theme object. You must execute this function to get the resulting theme object.'
    );
  }
  const selector = createThemeRootSelector(id);
  const appContext = {
    ...defaultAppInfo,
    ...appInfo
  };
  const avatarContext = avatar ?? defaultAvatar;
  return import_react24.default.createElement(RainbowKitChainProvider, { initialChain }, import_react24.default.createElement(WalletButtonProvider, null, import_react24.default.createElement(I18nProvider, { locale }, import_react24.default.createElement(CoolModeContext.Provider, { value: coolMode }, import_react24.default.createElement(ModalSizeProvider, { modalSize }, import_react24.default.createElement(
    ShowRecentTransactionsContext.Provider,
    {
      value: showRecentTransactions
    },
    import_react24.default.createElement(TransactionStoreProvider, null, import_react24.default.createElement(AvatarContext.Provider, { value: avatarContext }, import_react24.default.createElement(AppContext.Provider, { value: appContext }, import_react24.default.createElement(ThemeIdContext.Provider, { value: id }, import_react24.default.createElement(ShowBalanceProvider, null, import_react24.default.createElement(ModalProvider, null, theme ? import_react24.default.createElement("div", { ...createThemeRootProps(id) }, import_react24.default.createElement(
      "style",
      {
        dangerouslySetInnerHTML: {
          // Selectors are sanitized to only contain alphanumeric
          // and underscore characters. Theme values generated by
          // cssStringFromTheme are sanitized, removing
          // characters that terminate values / HTML tags.
          __html: [
            `${selector}{${cssStringFromTheme(
              "lightMode" in theme ? theme.lightMode : theme
            )}}`,
            "darkMode" in theme ? `@media(prefers-color-scheme:dark){${selector}{${cssStringFromTheme(
              theme.darkMode,
              { extends: theme.lightMode }
            )}}}` : null
          ].join("")
        }
      }
    ), children) : children))))))
  ))))));
}
var content = "_9pm4ki5 ju367va ju367v15 ju367v8r";
var overlay = "_9pm4ki3 ju367v9h ju367vb3 ju367va ju367v2q ju367v8q";
var moveFocusWithin = (element2, position) => {
  const focusableElements = element2.querySelectorAll(
    "button:not(:disabled), a[href]"
  );
  if (focusableElements.length === 0)
    return;
  focusableElements[position === "end" ? focusableElements.length - 1 : 0].focus();
};
function FocusTrap(props) {
  const contentRef = (0, import_react40.useRef)(null);
  (0, import_react40.useEffect)(() => {
    const previouslyActiveElement = document.activeElement;
    return () => {
      var _a;
      (_a = previouslyActiveElement.focus) == null ? void 0 : _a.call(previouslyActiveElement);
    };
  }, []);
  (0, import_react40.useEffect)(() => {
    if (contentRef.current) {
      const elementToFocus = contentRef.current.querySelector("[data-auto-focus]");
      if (elementToFocus) {
        elementToFocus.focus();
      } else {
        contentRef.current.focus();
      }
    }
  }, []);
  return import_react40.default.createElement(import_react40.default.Fragment, null, import_react40.default.createElement(
    "div",
    {
      onFocus: (0, import_react40.useCallback)(
        () => contentRef.current && moveFocusWithin(contentRef.current, "end"),
        []
      ),
      tabIndex: 0
    }
  ), import_react40.default.createElement(
    "div",
    {
      ref: contentRef,
      style: { outline: "none" },
      tabIndex: -1,
      ...props
    }
  ), import_react40.default.createElement(
    "div",
    {
      onFocus: (0, import_react40.useCallback)(
        () => contentRef.current && moveFocusWithin(contentRef.current, "start"),
        []
      ),
      tabIndex: 0
    }
  ));
}
var stopPropagation = (event) => event.stopPropagation();
function Dialog({ children, onClose, open, titleId }) {
  (0, import_react23.useEffect)(() => {
    const handleEscape = (event) => open && event.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);
  const [bodyScrollable, setBodyScrollable] = (0, import_react23.useState)(true);
  (0, import_react23.useEffect)(() => {
    setBodyScrollable(
      getComputedStyle(window.document.body).overflow !== "hidden"
    );
  }, []);
  const handleBackdropClick = (0, import_react23.useCallback)(() => onClose(), [onClose]);
  const themeRootProps = useThemeRootProps();
  const mobile = isMobile();
  return import_react23.default.createElement(import_react23.default.Fragment, null, open ? (0, import_react_dom.createPortal)(
    import_react23.default.createElement(Combination_default, { enabled: bodyScrollable }, import_react23.default.createElement(Box, { ...themeRootProps }, import_react23.default.createElement(
      Box,
      {
        ...themeRootProps,
        alignItems: mobile ? "flex-end" : "center",
        "aria-labelledby": titleId,
        "aria-modal": true,
        className: overlay,
        onClick: handleBackdropClick,
        position: "fixed",
        role: "dialog"
      },
      import_react23.default.createElement(
        FocusTrap,
        {
          className: content,
          onClick: stopPropagation,
          role: "document"
        },
        children
      )
    ))),
    document.body
  ) : null);
}
var bottomSheetOverrides = "_1ckjpok7";
var dialogContent = "_1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r";
var dialogContentCompactMode = "_1ckjpok4 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r";
var dialogContentMobile = "_1ckjpok6 ju367vq";
var dialogContentWideDesktop = "_1ckjpok3 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r";
var dialogContentWideMobile = "_1ckjpok2 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r";
function DialogContent({
  bottomSheetOnMobile = false,
  children,
  marginTop,
  padding = "16",
  paddingBottom,
  wide = false
}) {
  const mobile = isMobile();
  const modalSize = (0, import_react41.useContext)(ModalSizeContext);
  const compactModeEnabled = modalSize === ModalSizeOptions.COMPACT;
  return import_react41.default.createElement(Box, { marginTop }, import_react41.default.createElement(
    Box,
    {
      className: [
        wide ? mobile ? dialogContentWideMobile : compactModeEnabled ? dialogContentCompactMode : dialogContentWideDesktop : dialogContent,
        mobile ? dialogContentMobile : null,
        mobile && bottomSheetOnMobile ? bottomSheetOverrides : null
      ].join(" ")
    },
    import_react41.default.createElement(Box, { padding, paddingBottom: paddingBottom ?? padding }, children)
  ));
}
var units = ["k", "m", "b", "t"];
function toPrecision(number, precision = 1) {
  return number.toString().replace(new RegExp(`(.+\\.\\d{${precision}})\\d+`), "$1").replace(/(\.[1-9]*)0+$/, "$1").replace(/\.$/, "");
}
function abbreviateETHBalance(number) {
  if (number < 1)
    return toPrecision(number, 3);
  if (number < 10 ** 2)
    return toPrecision(number, 2);
  if (number < 10 ** 4)
    return new Intl.NumberFormat().format(
      Number.parseFloat(toPrecision(number, 1))
    );
  const decimalsDivisor = 10 ** 1;
  let result = String(number);
  for (let i = units.length - 1; i >= 0; i--) {
    const size4 = 10 ** ((i + 1) * 3);
    if (size4 <= number) {
      number = number * decimalsDivisor / size4 / decimalsDivisor;
      result = toPrecision(number, 1) + units[i];
      break;
    }
  }
  return result;
}
function formatAddress(address) {
  const leadingChars = 4;
  const trailingChars = 4;
  return address.length < leadingChars + trailingChars ? address : `${address.substring(0, leadingChars)}…${address.substring(
    address.length - trailingChars
  )}`;
}
function formatENS(name) {
  if (!name)
    return "";
  const parts = name.split(".");
  const last = parts.pop();
  if (parts.join(".").length > 24) {
    return `${parts.join(".").substring(0, 24)}...`;
  }
  return `${parts.join(".")}.${last}`;
}
var CopiedIcon = () => import_react43.default.createElement(
  "svg",
  {
    fill: "none",
    height: "13",
    viewBox: "0 0 13 13",
    width: "13",
    xmlns: "http://www.w3.org/2000/svg"
  },
  import_react43.default.createElement("title", null, "Copied"),
  import_react43.default.createElement(
    "path",
    {
      d: "M4.94568 12.2646C5.41052 12.2646 5.77283 12.0869 6.01892 11.7109L12.39 1.96973C12.5677 1.69629 12.6429 1.44336 12.6429 1.2041C12.6429 0.561523 12.1644 0.0966797 11.5082 0.0966797C11.057 0.0966797 10.7767 0.260742 10.5033 0.691406L4.9115 9.50977L2.07458 5.98926C1.82166 5.68848 1.54822 5.55176 1.16541 5.55176C0.502319 5.55176 0.0238037 6.02344 0.0238037 6.66602C0.0238037 6.95312 0.112671 7.20605 0.358765 7.48633L3.88611 11.7588C4.18005 12.1074 4.50818 12.2646 4.94568 12.2646Z",
      fill: "currentColor"
    }
  )
);
var CopyIcon = () => import_react44.default.createElement(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 17 16",
    width: "17",
    xmlns: "http://www.w3.org/2000/svg"
  },
  import_react44.default.createElement("title", null, "Copy"),
  import_react44.default.createElement(
    "path",
    {
      d: "M3.04236 12.3027H4.18396V13.3008C4.18396 14.8525 5.03845 15.7002 6.59705 15.7002H13.6244C15.183 15.7002 16.0375 14.8525 16.0375 13.3008V6.24609C16.0375 4.69434 15.183 3.84668 13.6244 3.84668H12.4828V2.8418C12.4828 1.29688 11.6283 0.442383 10.0697 0.442383H3.04236C1.48376 0.442383 0.629272 1.29004 0.629272 2.8418V9.90332C0.629272 11.4551 1.48376 12.3027 3.04236 12.3027ZM3.23376 10.5391C2.68689 10.5391 2.39294 10.2656 2.39294 9.68457V3.06055C2.39294 2.47949 2.68689 2.21289 3.23376 2.21289H9.8783C10.4252 2.21289 10.7191 2.47949 10.7191 3.06055V3.84668H6.59705C5.03845 3.84668 4.18396 4.69434 4.18396 6.24609V10.5391H3.23376ZM6.78845 13.9365C6.24158 13.9365 5.94763 13.6699 5.94763 13.0889V6.45801C5.94763 5.87695 6.24158 5.61035 6.78845 5.61035H13.433C13.9799 5.61035 14.2738 5.87695 14.2738 6.45801V13.0889C14.2738 13.6699 13.9799 13.9365 13.433 13.9365H6.78845Z",
      fill: "currentColor"
    }
  )
);
var DisconnectIcon = () => import_react45.default.createElement(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 18 16",
    width: "18",
    xmlns: "http://www.w3.org/2000/svg"
  },
  import_react45.default.createElement("title", null, "Disconnect"),
  import_react45.default.createElement(
    "path",
    {
      d: "M2.67834 15.5908H9.99963C11.5514 15.5908 12.399 14.7432 12.399 13.1777V10.2656H10.6354V12.9863C10.6354 13.5332 10.3688 13.8271 9.78772 13.8271H2.89026C2.3092 13.8271 2.0426 13.5332 2.0426 12.9863V3.15625C2.0426 2.60254 2.3092 2.30859 2.89026 2.30859H9.78772C10.3688 2.30859 10.6354 2.60254 10.6354 3.15625V5.89746H12.399V2.95801C12.399 1.39941 11.5514 0.544922 9.99963 0.544922H2.67834C1.12659 0.544922 0.278931 1.39941 0.278931 2.95801V13.1777C0.278931 14.7432 1.12659 15.5908 2.67834 15.5908ZM7.43616 8.85059H14.0875L15.0924 8.78906L14.566 9.14453L13.6842 9.96484C13.5406 10.1016 13.4586 10.2861 13.4586 10.4844C13.4586 10.8398 13.7321 11.168 14.1217 11.168C14.3199 11.168 14.4635 11.0928 14.6002 10.9561L16.7809 8.68652C16.986 8.48145 17.0543 8.27637 17.0543 8.06445C17.0543 7.85254 16.986 7.64746 16.7809 7.43555L14.6002 5.17285C14.4635 5.03613 14.3199 4.9541 14.1217 4.9541C13.7321 4.9541 13.4586 5.27539 13.4586 5.6377C13.4586 5.83594 13.5406 6.02734 13.6842 6.15723L14.566 6.98438L15.0924 7.33984L14.0875 7.27148H7.43616C7.01917 7.27148 6.65686 7.62012 6.65686 8.06445C6.65686 8.50195 7.01917 8.85059 7.43616 8.85059Z",
      fill: "currentColor"
    }
  )
);
function useClearRecentTransactions() {
  const store = useTransactionStore();
  const { address } = useAccount();
  const chainId = useChainId();
  return (0, import_react47.useCallback)(() => {
    if (!address || !chainId) {
      throw new Error("No address or chain ID found");
    }
    store.clearTransactions(address, chainId);
  }, [store, address, chainId]);
}
var chainToExplorerUrl = (chain) => {
  var _a, _b;
  return (_b = (_a = chain == null ? void 0 : chain.blockExplorers) == null ? void 0 : _a.default) == null ? void 0 : _b.url;
};
var ExternalLinkIcon = () => import_react48.default.createElement(
  "svg",
  {
    fill: "none",
    height: "19",
    viewBox: "0 0 20 19",
    width: "20",
    xmlns: "http://www.w3.org/2000/svg"
  },
  import_react48.default.createElement("title", null, "Link"),
  import_react48.default.createElement(
    "path",
    {
      d: "M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM12.7158 12.1416C13.2432 12.1416 13.5684 11.7549 13.5684 11.1836V7.19336C13.5684 6.44629 13.1377 6.05957 12.417 6.05957H8.40918C7.8291 6.05957 7.45117 6.38477 7.45117 6.91211C7.45117 7.43945 7.8291 7.77344 8.40918 7.77344H9.69238L10.7207 7.63281L9.53418 8.67871L6.73047 11.4912C6.53711 11.6758 6.41406 11.9395 6.41406 12.2031C6.41406 12.7832 6.85352 13.1699 7.39844 13.1699C7.68848 13.1699 7.92578 13.0732 8.1543 12.8623L10.9316 10.0762L11.9775 8.89844L11.8545 9.98828V11.1836C11.8545 11.7725 12.1885 12.1416 12.7158 12.1416Z",
      fill: "currentColor"
    }
  )
);
var CancelIcon = () => import_react50.default.createElement(
  "svg",
  {
    fill: "none",
    height: "19",
    viewBox: "0 0 20 19",
    width: "20",
    xmlns: "http://www.w3.org/2000/svg"
  },
  import_react50.default.createElement("title", null, "Cancel"),
  import_react50.default.createElement(
    "path",
    {
      d: "M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM7.29297 13.3018C7.58301 13.3018 7.81152 13.2139 7.99609 13.0205L10 11.0166L12.0127 13.0205C12.1973 13.2051 12.4258 13.3018 12.707 13.3018C13.2432 13.3018 13.6562 12.8887 13.6562 12.3525C13.6562 12.0977 13.5508 11.8691 13.3662 11.6934L11.3535 9.67188L13.375 7.6416C13.5596 7.44824 13.6562 7.22852 13.6562 6.98242C13.6562 6.44629 13.2432 6.0332 12.7158 6.0332C12.4346 6.0332 12.2148 6.12109 12.0215 6.31445L10 8.32715L7.9873 6.32324C7.80273 6.12988 7.58301 6.04199 7.29297 6.04199C6.76562 6.04199 6.35254 6.45508 6.35254 6.99121C6.35254 7.2373 6.44922 7.46582 6.63379 7.6416L8.65527 9.67188L6.63379 11.6934C6.44922 11.8691 6.35254 12.1064 6.35254 12.3525C6.35254 12.8887 6.76562 13.3018 7.29297 13.3018Z",
      fill: "currentColor"
    }
  )
);
var SuccessIcon = () => import_react51.default.createElement(
  "svg",
  {
    fill: "none",
    height: "20",
    viewBox: "0 0 20 20",
    width: "20",
    xmlns: "http://www.w3.org/2000/svg"
  },
  import_react51.default.createElement("title", null, "Success"),
  import_react51.default.createElement(
    "path",
    {
      d: "M10 19.4443C15.0977 19.4443 19.2812 15.252 19.2812 10.1543C19.2812 5.06543 15.0889 0.873047 10 0.873047C4.90234 0.873047 0.71875 5.06543 0.71875 10.1543C0.71875 15.252 4.91113 19.4443 10 19.4443ZM10 17.1328C6.1416 17.1328 3.03906 14.0215 3.03906 10.1543C3.03906 6.2959 6.13281 3.18457 10 3.18457C13.8584 3.18457 16.9697 6.2959 16.9697 10.1543C16.9785 14.0215 13.8672 17.1328 10 17.1328ZM9.07715 14.3379C9.4375 14.3379 9.7627 14.1533 9.97363 13.8369L13.7441 8.00977C13.8848 7.79883 13.9814 7.5791 13.9814 7.36816C13.9814 6.84961 13.5244 6.48926 13.0322 6.48926C12.707 6.48926 12.4258 6.66504 12.2148 7.0166L9.05957 12.0967L7.5918 10.2949C7.37207 10.0225 7.13477 9.9082 6.84473 9.9082C6.33496 9.9082 5.92188 10.3125 5.92188 10.8223C5.92188 11.0684 6.00098 11.2793 6.18555 11.5078L8.1543 13.8545C8.40918 14.1709 8.70801 14.3379 9.07715 14.3379Z",
      fill: "currentColor"
    }
  )
);
var getTxStatusIcon = (status) => {
  switch (status) {
    case "pending":
      return SpinnerIcon;
    case "confirmed":
      return SuccessIcon;
    case "failed":
      return CancelIcon;
    default:
      return SpinnerIcon;
  }
};
function TxItem({ tx }) {
  const mobile = isMobile();
  const Icon = getTxStatusIcon(tx.status);
  const color = tx.status === "failed" ? "error" : "accentColor";
  const { chain: activeChain } = useAccount();
  const confirmationStatus = tx.status === "confirmed" ? "Confirmed" : tx.status === "failed" ? "Failed" : "Pending";
  const explorerLink = chainToExplorerUrl(activeChain);
  return import_react49.default.createElement(import_react49.default.Fragment, null, import_react49.default.createElement(
    Box,
    {
      ...explorerLink ? {
        as: "a",
        background: { hover: "profileForeground" },
        borderRadius: "menuButton",
        className: touchableStyles({ active: "shrink" }),
        href: `${explorerLink}/tx/${tx.hash}`,
        rel: "noreferrer noopener",
        target: "_blank",
        transition: "default"
      } : {},
      color: "modalText",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "8",
      width: "full"
    },
    import_react49.default.createElement(
      Box,
      {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: mobile ? "16" : "14"
      },
      import_react49.default.createElement(Box, { color }, import_react49.default.createElement(Icon, null)),
      import_react49.default.createElement(Box, { display: "flex", flexDirection: "column", gap: mobile ? "3" : "1" }, import_react49.default.createElement(Box, null, import_react49.default.createElement(
        Text,
        {
          color: "modalText",
          font: "body",
          size: mobile ? "16" : "14",
          weight: "bold"
        },
        tx == null ? void 0 : tx.description
      )), import_react49.default.createElement(Box, null, import_react49.default.createElement(
        Text,
        {
          color: tx.status === "pending" ? "modalTextSecondary" : color,
          font: "body",
          size: "14",
          weight: mobile ? "medium" : "regular"
        },
        confirmationStatus
      )))
    ),
    explorerLink && import_react49.default.createElement(Box, { alignItems: "center", color: "modalTextDim", display: "flex" }, import_react49.default.createElement(ExternalLinkIcon, null))
  ));
}
var NUMBER_OF_VISIBLE_TXS = 3;
function TxList({ address }) {
  const recentTransactions = useRecentTransactions();
  const clearRecentTransactions = useClearRecentTransactions();
  const { chain: activeChain } = useAccount();
  const explorerLink = chainToExplorerUrl(activeChain);
  const visibleTxs = recentTransactions.slice(0, NUMBER_OF_VISIBLE_TXS);
  const hasTransactions = visibleTxs.length > 0;
  const mobile = isMobile();
  const { appName } = (0, import_react46.useContext)(AppContext);
  const { i18n: i18n2 } = (0, import_react46.useContext)(I18nContext);
  return import_react46.default.createElement(import_react46.default.Fragment, null, import_react46.default.createElement(
    Box,
    {
      display: "flex",
      flexDirection: "column",
      gap: "10",
      paddingBottom: "2",
      paddingTop: "16",
      paddingX: mobile ? "8" : "18"
    },
    hasTransactions && import_react46.default.createElement(
      Box,
      {
        paddingBottom: mobile ? "4" : "0",
        paddingTop: "8",
        paddingX: mobile ? "12" : "6"
      },
      import_react46.default.createElement(Box, { display: "flex", justifyContent: "space-between" }, import_react46.default.createElement(
        Text,
        {
          color: "modalTextSecondary",
          size: mobile ? "16" : "14",
          weight: "semibold"
        },
        i18n2.t("profile.transactions.recent.title")
      ), import_react46.default.createElement(
        Box,
        {
          style: {
            marginBottom: -6,
            marginLeft: -10,
            marginRight: -10,
            marginTop: -6
          }
        },
        import_react46.default.createElement(
          Box,
          {
            as: "button",
            background: {
              hover: "profileForeground"
            },
            borderRadius: "actionButton",
            className: touchableStyles({ active: "shrink" }),
            onClick: clearRecentTransactions,
            paddingX: mobile ? "8" : "12",
            paddingY: mobile ? "4" : "5",
            transition: "default",
            type: "button"
          },
          import_react46.default.createElement(
            Text,
            {
              color: "modalTextSecondary",
              size: mobile ? "16" : "14",
              weight: "semibold"
            },
            i18n2.t("profile.transactions.clear.label")
          )
        )
      ))
    ),
    import_react46.default.createElement(Box, { display: "flex", flexDirection: "column", gap: "4" }, hasTransactions ? visibleTxs.map((tx) => import_react46.default.createElement(TxItem, { key: tx.hash, tx })) : import_react46.default.createElement(import_react46.default.Fragment, null, import_react46.default.createElement(Box, { padding: mobile ? "12" : "8" }, import_react46.default.createElement(
      Text,
      {
        color: "modalTextDim",
        size: mobile ? "16" : "14",
        weight: mobile ? "medium" : "bold"
      },
      appName ? i18n2.t("profile.transactions.description", {
        appName
      }) : i18n2.t("profile.transactions.description_fallback")
    )), mobile && import_react46.default.createElement(
      Box,
      {
        background: "generalBorderDim",
        height: "1",
        marginX: "12",
        marginY: "8"
      }
    )))
  ), explorerLink && import_react46.default.createElement(Box, { paddingBottom: "18", paddingX: mobile ? "8" : "18" }, import_react46.default.createElement(
    Box,
    {
      alignItems: "center",
      as: "a",
      background: { hover: "profileForeground" },
      borderRadius: "menuButton",
      className: touchableStyles({ active: "shrink" }),
      color: "modalTextDim",
      display: "flex",
      flexDirection: "row",
      href: `${explorerLink}/address/${address}`,
      justifyContent: "space-between",
      paddingX: "8",
      paddingY: "12",
      rel: "noreferrer noopener",
      style: { willChange: "transform" },
      target: "_blank",
      transition: "default",
      width: "full",
      ...mobile ? { paddingLeft: "12" } : {}
    },
    import_react46.default.createElement(
      Text,
      {
        color: "modalText",
        font: "body",
        size: mobile ? "16" : "14",
        weight: mobile ? "semibold" : "bold"
      },
      i18n2.t("profile.explorer.label")
    ),
    import_react46.default.createElement(ExternalLinkIcon, null)
  )));
}
function ProfileDetailsAction({
  action,
  icon,
  label,
  testId,
  url
}) {
  const mobile = isMobile();
  return import_react52.default.createElement(
    Box,
    {
      ...url ? { as: "a", href: url, rel: "noreferrer noopener", target: "_blank" } : { as: "button", type: "button" },
      background: {
        base: "profileAction",
        ...!mobile ? { hover: "profileActionHover" } : {}
      },
      borderRadius: "menuButton",
      boxShadow: "profileDetailsAction",
      className: touchableStyles({
        active: "shrinkSm",
        hover: !mobile ? "grow" : void 0
      }),
      display: "flex",
      onClick: action,
      padding: mobile ? "6" : "8",
      style: { willChange: "transform" },
      testId,
      transition: "default",
      width: "full"
    },
    import_react52.default.createElement(
      Box,
      {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1",
        justifyContent: "center",
        paddingTop: "2",
        width: "full"
      },
      import_react52.default.createElement(Box, { color: "modalText", height: "max" }, icon),
      import_react52.default.createElement(Box, null, import_react52.default.createElement(Text, { color: "modalText", size: mobile ? "12" : "13", weight: "semibold" }, label))
    )
  );
}
function ProfileDetails({
  address,
  ensAvatar,
  ensName,
  balance,
  onClose,
  onDisconnect
}) {
  const showRecentTransactions = (0, import_react42.useContext)(ShowRecentTransactionsContext);
  const [copiedAddress, setCopiedAddress] = (0, import_react42.useState)(false);
  const copyAddressAction = (0, import_react42.useCallback)(() => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopiedAddress(true);
    }
  }, [address]);
  (0, import_react42.useEffect)(() => {
    if (copiedAddress) {
      const timer = setTimeout(() => {
        setCopiedAddress(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [copiedAddress]);
  if (!address) {
    return null;
  }
  const accountName = ensName ? formatENS(ensName) : formatAddress(address);
  const ethBalance = balance == null ? void 0 : balance.formatted;
  const displayBalance = ethBalance ? abbreviateETHBalance(Number.parseFloat(ethBalance)) : void 0;
  const titleId = "rk_profile_title";
  const mobile = isMobile();
  const { i18n: i18n2 } = (0, import_react42.useContext)(I18nContext);
  return import_react42.default.createElement(import_react42.default.Fragment, null, import_react42.default.createElement(Box, { display: "flex", flexDirection: "column" }, import_react42.default.createElement(Box, { background: "profileForeground", padding: "16" }, import_react42.default.createElement(
    Box,
    {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      gap: mobile ? "16" : "12",
      justifyContent: "center",
      margin: "8",
      style: { textAlign: "center" }
    },
    import_react42.default.createElement(
      Box,
      {
        style: {
          position: "absolute",
          right: 16,
          top: 16,
          willChange: "transform"
        }
      },
      import_react42.default.createElement(CloseButton, { onClose })
    ),
    " ",
    import_react42.default.createElement(Box, { marginTop: mobile ? "24" : "0" }, import_react42.default.createElement(
      Avatar,
      {
        address,
        imageUrl: ensAvatar,
        size: mobile ? 82 : 74
      }
    )),
    import_react42.default.createElement(
      Box,
      {
        display: "flex",
        flexDirection: "column",
        gap: mobile ? "4" : "0",
        textAlign: "center"
      },
      import_react42.default.createElement(Box, { textAlign: "center" }, import_react42.default.createElement(
        Text,
        {
          as: "h1",
          color: "modalText",
          id: titleId,
          size: mobile ? "20" : "18",
          weight: "heavy"
        },
        accountName
      )),
      !!balance && import_react42.default.createElement(Box, { textAlign: "center" }, import_react42.default.createElement(
        Text,
        {
          as: "h1",
          color: "modalTextSecondary",
          id: titleId,
          size: mobile ? "16" : "14",
          weight: "semibold"
        },
        displayBalance,
        " ",
        balance.symbol
      ))
    )
  ), import_react42.default.createElement(
    Box,
    {
      display: "flex",
      flexDirection: "row",
      gap: "8",
      margin: "2",
      marginTop: "16"
    },
    import_react42.default.createElement(
      ProfileDetailsAction,
      {
        action: copyAddressAction,
        icon: copiedAddress ? import_react42.default.createElement(CopiedIcon, null) : import_react42.default.createElement(CopyIcon, null),
        label: copiedAddress ? i18n2.t("profile.copy_address.copied") : i18n2.t("profile.copy_address.label")
      }
    ),
    import_react42.default.createElement(
      ProfileDetailsAction,
      {
        action: onDisconnect,
        icon: import_react42.default.createElement(DisconnectIcon, null),
        label: i18n2.t("profile.disconnect.label"),
        testId: "disconnect-button"
      }
    )
  )), showRecentTransactions && import_react42.default.createElement(import_react42.default.Fragment, null, import_react42.default.createElement(Box, { background: "generalBorder", height: "1", marginTop: "-1" }), import_react42.default.createElement(Box, null, import_react42.default.createElement(TxList, { address })))));
}
function AccountModal({ onClose, open }) {
  const { address } = useAccount();
  const { balance, ensAvatar, ensName } = useProfile({
    address,
    includeBalance: open
  });
  const { disconnect } = useDisconnect();
  if (!address) {
    return null;
  }
  const titleId = "rk_account_modal_title";
  return import_react22.default.createElement(import_react22.default.Fragment, null, address && import_react22.default.createElement(Dialog, { onClose, open, titleId }, import_react22.default.createElement(DialogContent, { bottomSheetOnMobile: true, padding: "0" }, import_react22.default.createElement(
    ProfileDetails,
    {
      address,
      ensAvatar,
      ensName,
      balance,
      onClose,
      onDisconnect: disconnect
    }
  ))));
}
var DisconnectSqIcon = ({ size: size4 }) => import_react54.default.createElement(
  "svg",
  {
    fill: "none",
    height: size4,
    viewBox: "0 0 28 28",
    width: size4,
    xmlns: "http://www.w3.org/2000/svg"
  },
  import_react54.default.createElement("title", null, "Disconnect"),
  import_react54.default.createElement(
    "path",
    {
      d: "M6.742 22.195h8.367c1.774 0 2.743-.968 2.743-2.758V16.11h-2.016v3.11c0 .625-.305.96-.969.96H6.984c-.664 0-.968-.335-.968-.96V7.984c0-.632.304-.968.968-.968h7.883c.664 0 .969.336.969.968v3.133h2.016v-3.36c0-1.78-.97-2.757-2.743-2.757H6.742C4.97 5 4 5.977 4 7.758v11.68c0 1.789.969 2.757 2.742 2.757Zm5.438-7.703h7.601l1.149-.07-.602.406-1.008.938a.816.816 0 0 0-.258.593c0 .407.313.782.758.782.227 0 .39-.086.547-.243l2.492-2.593c.235-.235.313-.47.313-.711 0-.242-.078-.477-.313-.719l-2.492-2.586c-.156-.156-.32-.25-.547-.25-.445 0-.758.367-.758.781 0 .227.094.446.258.594l1.008.945.602.407-1.149-.079H12.18a.904.904 0 0 0 0 1.805Z",
      fill: "currentColor"
    }
  )
);
var unsetBackgroundOnHover = "v9horb0";
var MenuButton = import_react55.default.forwardRef(
  ({
    children,
    currentlySelected = false,
    onClick,
    testId,
    ...urlProps
  }, ref) => {
    const mobile = isMobile();
    return import_react55.default.createElement(
      Box,
      {
        as: "button",
        borderRadius: "menuButton",
        disabled: currentlySelected,
        display: "flex",
        onClick,
        ref,
        testId,
        type: "button"
      },
      import_react55.default.createElement(
        Box,
        {
          borderRadius: "menuButton",
          className: [
            mobile ? unsetBackgroundOnHover : void 0,
            !currentlySelected && touchableStyles({ active: "shrink" })
          ],
          padding: mobile ? "8" : "6",
          transition: "default",
          width: "full",
          ...currentlySelected ? {
            background: "accentColor",
            borderColor: "selectedOptionBorder",
            borderStyle: "solid",
            borderWidth: "1",
            boxShadow: "selectedOption",
            color: "accentColorForeground"
          } : {
            background: { hover: "menuItemBackground" },
            color: "modalText",
            transition: "default"
          },
          ...urlProps
        },
        children
      )
    );
  }
);
MenuButton.displayName = "MenuButton";
var Chain = ({
  chainId,
  currentChainId,
  switchChain,
  chainIconSize,
  isLoading,
  src: src7,
  name,
  iconBackground,
  idx
}) => {
  const mobile = isMobile();
  const { i18n: i18n2 } = (0, import_react56.useContext)(I18nContext);
  const rainbowkitChains = useRainbowKitChains();
  const isCurrentChain = currentChainId === chainId;
  return import_react56.default.createElement(import_react56.Fragment, null, import_react56.default.createElement(
    MenuButton,
    {
      currentlySelected: isCurrentChain,
      onClick: isCurrentChain ? void 0 : () => switchChain({ chainId }),
      testId: `chain-option-${chainId}`
    },
    import_react56.default.createElement(Box, { fontFamily: "body", fontSize: "16", fontWeight: "bold" }, import_react56.default.createElement(
      Box,
      {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      },
      import_react56.default.createElement(
        Box,
        {
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          gap: "4",
          height: chainIconSize
        },
        src7 && import_react56.default.createElement(Box, { height: "full", marginRight: "8" }, import_react56.default.createElement(
          AsyncImage,
          {
            alt: name,
            background: iconBackground,
            borderRadius: "full",
            height: chainIconSize,
            src: src7,
            width: chainIconSize,
            testId: `chain-option-${chainId}-icon`
          }
        )),
        import_react56.default.createElement("div", null, name ?? name)
      ),
      isCurrentChain && import_react56.default.createElement(
        Box,
        {
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          marginRight: "6"
        },
        import_react56.default.createElement(Text, { color: "accentColorForeground", size: "14", weight: "medium" }, i18n2.t("chains.connected")),
        import_react56.default.createElement(
          Box,
          {
            background: "connectionIndicator",
            borderColor: "selectedOptionBorder",
            borderRadius: "full",
            borderStyle: "solid",
            borderWidth: "1",
            height: "8",
            marginLeft: "8",
            width: "8"
          }
        )
      ),
      isLoading && import_react56.default.createElement(
        Box,
        {
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          marginRight: "6"
        },
        import_react56.default.createElement(Text, { color: "modalText", size: "14", weight: "medium" }, i18n2.t("chains.confirm")),
        import_react56.default.createElement(
          Box,
          {
            background: "standby",
            borderRadius: "full",
            height: "8",
            marginLeft: "8",
            width: "8"
          }
        )
      )
    ))
  ), mobile && idx < rainbowkitChains.length - 1 && import_react56.default.createElement(Box, { background: "generalBorderDim", height: "1", marginX: "8" }));
};
var Chain_default = Chain;
var DesktopScrollClassName = "_18dqw9x0";
var MobileScrollClassName = "_18dqw9x1";
function ChainModal({ onClose, open }) {
  const { chainId } = useAccount();
  const { chains } = useConfig();
  const [pendingChainId, setPendingChainId] = (0, import_react53.useState)(null);
  const { switchChain } = useSwitchChain({
    mutation: {
      onMutate: ({ chainId: _chainId }) => {
        setPendingChainId(_chainId);
      },
      onSuccess: () => {
        if (pendingChainId)
          setPendingChainId(null);
      },
      onError: () => {
        if (pendingChainId)
          setPendingChainId(null);
      },
      onSettled: () => {
        onClose();
      }
    }
  });
  const { i18n: i18n2 } = (0, import_react53.useContext)(I18nContext);
  const { disconnect } = useDisconnect();
  const titleId = "rk_chain_modal_title";
  const mobile = isMobile();
  const isCurrentChainSupported = chains.some((chain) => chain.id === chainId);
  const chainIconSize = mobile ? "36" : "28";
  const rainbowkitChains = useRainbowKitChains();
  if (!chainId) {
    return null;
  }
  return import_react53.default.createElement(Dialog, { onClose, open, titleId }, import_react53.default.createElement(DialogContent, { bottomSheetOnMobile: true, paddingBottom: "0" }, import_react53.default.createElement(Box, { display: "flex", flexDirection: "column", gap: "14" }, import_react53.default.createElement(
    Box,
    {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    mobile && import_react53.default.createElement(Box, { width: "30" }),
    import_react53.default.createElement(Box, { paddingBottom: "0", paddingLeft: "8", paddingTop: "4" }, import_react53.default.createElement(
      Text,
      {
        as: "h1",
        color: "modalText",
        id: titleId,
        size: mobile ? "20" : "18",
        weight: "heavy"
      },
      i18n2.t("chains.title")
    )),
    import_react53.default.createElement(CloseButton, { onClose })
  ), !isCurrentChainSupported && import_react53.default.createElement(Box, { marginX: "8", textAlign: mobile ? "center" : "left" }, import_react53.default.createElement(Text, { color: "modalTextSecondary", size: "14", weight: "medium" }, i18n2.t("chains.wrong_network"))), import_react53.default.createElement(
    Box,
    {
      className: mobile ? MobileScrollClassName : DesktopScrollClassName,
      display: "flex",
      flexDirection: "column",
      gap: "4",
      padding: "2",
      paddingBottom: "16"
    },
    rainbowkitChains.map(
      ({ iconBackground, iconUrl, id, name }, idx) => {
        return import_react53.default.createElement(
          Chain_default,
          {
            key: id,
            chainId: id,
            currentChainId: chainId,
            switchChain,
            chainIconSize,
            isLoading: pendingChainId === id,
            src: iconUrl,
            name,
            iconBackground,
            idx
          }
        );
      }
    ),
    !isCurrentChainSupported && import_react53.default.createElement(import_react53.default.Fragment, null, import_react53.default.createElement(Box, { background: "generalBorderDim", height: "1", marginX: "8" }), import_react53.default.createElement(
      MenuButton,
      {
        onClick: () => disconnect(),
        testId: "chain-option-disconnect"
      },
      import_react53.default.createElement(
        Box,
        {
          color: "error",
          fontFamily: "body",
          fontSize: "16",
          fontWeight: "bold"
        },
        import_react53.default.createElement(
          Box,
          {
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          },
          import_react53.default.createElement(
            Box,
            {
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              gap: "4",
              height: chainIconSize
            },
            import_react53.default.createElement(
              Box,
              {
                alignItems: "center",
                color: "error",
                height: chainIconSize,
                justifyContent: "center",
                marginRight: "8"
              },
              import_react53.default.createElement(DisconnectSqIcon, { size: Number(chainIconSize) })
            ),
            import_react53.default.createElement("div", null, i18n2.t("chains.disconnect"))
          )
        )
      )
    ))
  ))));
}
function groupBy(items, getKey2) {
  const groupedItems = {};
  for (const item of items) {
    const key = getKey2(item);
    if (!key) {
      continue;
    }
    if (!groupedItems[key]) {
      groupedItems[key] = [];
    }
    groupedItems[key].push(item);
  }
  return groupedItems;
}
var DisclaimerLink = ({
  children,
  href
}) => {
  return import_react61.default.createElement(
    Box,
    {
      as: "a",
      color: "accentColor",
      href,
      rel: "noreferrer",
      target: "_blank"
    },
    children
  );
};
var DisclaimerText = ({ children }) => {
  return import_react62.default.createElement(Text, { color: "modalTextSecondary", size: "12", weight: "medium" }, children);
};
function ConnectModalIntro({
  compactModeEnabled = false,
  getWallet
}) {
  const { disclaimer: Disclaimer, learnMoreUrl } = (0, import_react60.useContext)(AppContext);
  const { i18n: i18n2 } = (0, import_react60.useContext)(I18nContext);
  return import_react60.default.createElement(import_react60.default.Fragment, null, import_react60.default.createElement(
    Box,
    {
      alignItems: "center",
      color: "accentColor",
      display: "flex",
      flexDirection: "column",
      height: "full",
      justifyContent: "space-around"
    },
    import_react60.default.createElement(Box, { marginBottom: "10" }, !compactModeEnabled && import_react60.default.createElement(Text, { color: "modalText", size: "18", weight: "heavy" }, i18n2.t("intro.title"))),
    import_react60.default.createElement(
      Box,
      {
        display: "flex",
        flexDirection: "column",
        gap: "32",
        justifyContent: "center",
        marginY: "20",
        style: { maxWidth: 312 }
      },
      import_react60.default.createElement(Box, { alignItems: "center", display: "flex", flexDirection: "row", gap: "16" }, import_react60.default.createElement(Box, { borderRadius: "6", height: "48", minWidth: "48", width: "48" }, import_react60.default.createElement(AssetsIcon, null)), import_react60.default.createElement(Box, { display: "flex", flexDirection: "column", gap: "4" }, import_react60.default.createElement(Text, { color: "modalText", size: "14", weight: "bold" }, i18n2.t("intro.digital_asset.title")), import_react60.default.createElement(Text, { color: "modalTextSecondary", size: "14", weight: "medium" }, i18n2.t("intro.digital_asset.description")))),
      import_react60.default.createElement(Box, { alignItems: "center", display: "flex", flexDirection: "row", gap: "16" }, import_react60.default.createElement(Box, { borderRadius: "6", height: "48", minWidth: "48", width: "48" }, import_react60.default.createElement(LoginIcon, null)), import_react60.default.createElement(Box, { display: "flex", flexDirection: "column", gap: "4" }, import_react60.default.createElement(Text, { color: "modalText", size: "14", weight: "bold" }, i18n2.t("intro.login.title")), import_react60.default.createElement(Text, { color: "modalTextSecondary", size: "14", weight: "medium" }, i18n2.t("intro.login.description"))))
    ),
    import_react60.default.createElement(
      Box,
      {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "12",
        justifyContent: "center",
        margin: "10"
      },
      import_react60.default.createElement(ActionButton, { label: i18n2.t("intro.get.label"), onClick: getWallet }),
      import_react60.default.createElement(
        Box,
        {
          as: "a",
          className: touchableStyles({ active: "shrink", hover: "grow" }),
          display: "block",
          href: learnMoreUrl,
          paddingX: "12",
          paddingY: "4",
          rel: "noreferrer",
          style: { willChange: "transform" },
          target: "_blank",
          transition: "default"
        },
        import_react60.default.createElement(Text, { color: "accentColor", size: "14", weight: "bold" }, i18n2.t("intro.learn_more.label"))
      )
    ),
    Disclaimer && !compactModeEnabled && import_react60.default.createElement(Box, { marginBottom: "8", marginTop: "12", textAlign: "center" }, import_react60.default.createElement(Disclaimer, { Link: DisclaimerLink, Text: DisclaimerText }))
  ));
}
var BackIcon = () => import_react63.default.createElement(
  "svg",
  {
    fill: "none",
    height: "17",
    viewBox: "0 0 11 17",
    width: "11",
    xmlns: "http://www.w3.org/2000/svg"
  },
  import_react63.default.createElement("title", null, "Back"),
  import_react63.default.createElement(
    "path",
    {
      d: "M0.99707 8.6543C0.99707 9.08496 1.15527 9.44531 1.51562 9.79688L8.16016 16.3096C8.43262 16.5732 8.74902 16.7051 9.13574 16.7051C9.90918 16.7051 10.5508 16.0811 10.5508 15.3076C10.5508 14.9121 10.3838 14.5605 10.0938 14.2705L4.30176 8.64551L10.0938 3.0293C10.3838 2.74805 10.5508 2.3877 10.5508 2.00098C10.5508 1.23633 9.90918 0.603516 9.13574 0.603516C8.74902 0.603516 8.43262 0.735352 8.16016 0.999023L1.51562 7.51172C1.15527 7.85449 1.00586 8.21484 0.99707 8.6543Z",
      fill: "currentColor"
    }
  )
);
var InfoIcon = () => import_react65.default.createElement(
  "svg",
  {
    fill: "none",
    height: "12",
    viewBox: "0 0 8 12",
    width: "8",
    xmlns: "http://www.w3.org/2000/svg"
  },
  import_react65.default.createElement("title", null, "Info"),
  import_react65.default.createElement(
    "path",
    {
      d: "M3.64258 7.99609C4.19336 7.99609 4.5625 7.73828 4.68555 7.24609C4.69141 7.21094 4.70312 7.16406 4.70898 7.13477C4.80859 6.60742 5.05469 6.35547 6.04492 5.76367C7.14648 5.10156 7.67969 4.3457 7.67969 3.24414C7.67969 1.39844 6.17383 0.255859 3.95898 0.255859C2.32422 0.255859 1.05859 0.894531 0.548828 1.86719C0.396484 2.14844 0.320312 2.44727 0.320312 2.74023C0.314453 3.37305 0.742188 3.79492 1.42188 3.79492C1.91406 3.79492 2.33594 3.54883 2.53516 3.11523C2.78711 2.47656 3.23242 2.21289 3.83594 2.21289C4.55664 2.21289 5.10742 2.65234 5.10742 3.29102C5.10742 3.9707 4.7793 4.29883 3.81836 4.87891C3.02148 5.36523 2.50586 5.92773 2.50586 6.76562V6.90039C2.50586 7.55664 2.96289 7.99609 3.64258 7.99609ZM3.67188 11.4473C4.42773 11.4473 5.04297 10.8672 5.04297 10.1406C5.04297 9.41406 4.42773 8.83984 3.67188 8.83984C2.91602 8.83984 2.30664 9.41406 2.30664 10.1406C2.30664 10.8672 2.91602 11.4473 3.67188 11.4473Z",
      fill: "currentColor"
    }
  )
);
var InfoButton = ({
  "aria-label": ariaLabel = "Info",
  onClick
}) => {
  const mobile = isMobile();
  return import_react64.default.createElement(
    Box,
    {
      alignItems: "center",
      "aria-label": ariaLabel,
      as: "button",
      background: "closeButtonBackground",
      borderColor: "actionButtonBorder",
      borderRadius: "full",
      borderStyle: "solid",
      borderWidth: mobile ? "0" : "1",
      className: touchableStyles({ active: "shrinkSm", hover: "growLg" }),
      color: "closeButton",
      display: "flex",
      height: mobile ? "30" : "28",
      justifyContent: "center",
      onClick,
      style: { willChange: "transform" },
      transition: "default",
      type: "button",
      width: mobile ? "30" : "28"
    },
    import_react64.default.createElement(InfoIcon, null)
  );
};
var useCoolMode = (imageUrl) => {
  const ref = (0, import_react67.useRef)(null);
  const coolModeEnabled = (0, import_react67.useContext)(CoolModeContext);
  const resolvedImageUrl = useAsyncImage(imageUrl);
  (0, import_react67.useEffect)(() => {
    if (coolModeEnabled && ref.current && resolvedImageUrl) {
      return makeElementCool(ref.current, resolvedImageUrl);
    }
  }, [coolModeEnabled, resolvedImageUrl]);
  return ref;
};
var getContainer = () => {
  const id = "_rk_coolMode";
  const existingContainer = document.getElementById(id);
  if (existingContainer) {
    return existingContainer;
  }
  const container = document.createElement("div");
  container.setAttribute("id", id);
  container.setAttribute(
    "style",
    [
      "overflow:hidden",
      "position:fixed",
      "height:100%",
      "top:0",
      "left:0",
      "right:0",
      "bottom:0",
      "pointer-events:none",
      "z-index:2147483647"
    ].join(";")
  );
  document.body.appendChild(container);
  return container;
};
var instanceCounter = 0;
function makeElementCool(element2, imageUrl) {
  instanceCounter++;
  const sizes = [15, 20, 25, 35, 45];
  const limit = 35;
  let particles = [];
  let autoAddParticle = false;
  let mouseX = 0;
  let mouseY = 0;
  const container = getContainer();
  function createParticle() {
    const size4 = sizes[Math.floor(Math.random() * sizes.length)];
    const speedHorz = Math.random() * 10;
    const speedUp = Math.random() * 25;
    const spinVal = Math.random() * 360;
    const spinSpeed = Math.random() * 35 * (Math.random() <= 0.5 ? -1 : 1);
    const top = mouseY - size4 / 2;
    const left = mouseX - size4 / 2;
    const direction = Math.random() <= 0.5 ? -1 : 1;
    const particle = document.createElement("div");
    particle.innerHTML = `<img src="${imageUrl}" width="${size4}" height="${size4}" style="border-radius: 25%">`;
    particle.setAttribute(
      "style",
      [
        "position:absolute",
        "will-change:transform",
        `top:${top}px`,
        `left:${left}px`,
        `transform:rotate(${spinVal}deg)`
      ].join(";")
    );
    container.appendChild(particle);
    particles.push({
      direction,
      element: particle,
      left,
      size: size4,
      speedHorz,
      speedUp,
      spinSpeed,
      spinVal,
      top
    });
  }
  function updateParticles() {
    for (const p of particles) {
      p.left = p.left - p.speedHorz * p.direction;
      p.top = p.top - p.speedUp;
      p.speedUp = Math.min(p.size, p.speedUp - 1);
      p.spinVal = p.spinVal + p.spinSpeed;
      if (p.top >= Math.max(window.innerHeight, document.body.clientHeight) + p.size) {
        particles = particles.filter((o) => o !== p);
        p.element.remove();
      }
      p.element.setAttribute(
        "style",
        [
          "position:absolute",
          "will-change:transform",
          `top:${p.top}px`,
          `left:${p.left}px`,
          `transform:rotate(${p.spinVal}deg)`
        ].join(";")
      );
    }
  }
  let animationFrame;
  function loop() {
    if (autoAddParticle && particles.length < limit) {
      createParticle();
    }
    updateParticles();
    animationFrame = requestAnimationFrame(loop);
  }
  loop();
  const isTouchInteraction = "ontouchstart" in window || // @ts-expect-error
  navigator.msMaxTouchPoints;
  const tap = isTouchInteraction ? "touchstart" : "mousedown";
  const tapEnd = isTouchInteraction ? "touchend" : "mouseup";
  const move = isTouchInteraction ? "touchmove" : "mousemove";
  const updateMousePosition = (e) => {
    var _a, _b;
    if ("touches" in e) {
      mouseX = (_a = e.touches) == null ? void 0 : _a[0].clientX;
      mouseY = (_b = e.touches) == null ? void 0 : _b[0].clientY;
    } else {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
  };
  const tapHandler = (e) => {
    updateMousePosition(e);
    autoAddParticle = true;
  };
  const disableAutoAddParticle = () => {
    autoAddParticle = false;
  };
  element2.addEventListener(move, updateMousePosition, { passive: false });
  element2.addEventListener(tap, tapHandler);
  element2.addEventListener(tapEnd, disableAutoAddParticle);
  element2.addEventListener("mouseleave", disableAutoAddParticle);
  return () => {
    element2.removeEventListener(move, updateMousePosition);
    element2.removeEventListener(tap, tapHandler);
    element2.removeEventListener(tapEnd, disableAutoAddParticle);
    element2.removeEventListener("mouseleave", disableAutoAddParticle);
    const interval = setInterval(() => {
      if (animationFrame && particles.length === 0) {
        cancelAnimationFrame(animationFrame);
        clearInterval(interval);
        if (--instanceCounter === 0) {
          container.remove();
        }
      }
    }, 500);
  };
}
var transparentBorder = "g5kl0l0";
var ModalSelection = ({
  as = "button",
  currentlySelected = false,
  iconBackground,
  iconUrl,
  name,
  onClick,
  ready,
  recent,
  testId,
  isRainbowKitConnector: isRainbowKitConnector2,
  ...urlProps
}) => {
  const coolModeRef = useCoolMode(iconUrl);
  const [isMouseOver, setIsMouseOver] = import_react66.default.useState(false);
  const { i18n: i18n2 } = import_react66.default.useContext(I18nContext);
  return import_react66.default.createElement(
    Box,
    {
      display: "flex",
      flexDirection: "column",
      onMouseEnter: () => setIsMouseOver(true),
      onMouseLeave: () => setIsMouseOver(false),
      ref: coolModeRef
    },
    import_react66.default.createElement(
      Box,
      {
        as,
        borderRadius: "menuButton",
        borderStyle: "solid",
        borderWidth: "1",
        className: !currentlySelected ? [
          transparentBorder,
          touchableStyles({
            active: "shrink"
          })
        ] : void 0,
        disabled: currentlySelected,
        onClick,
        padding: "5",
        style: { willChange: "transform" },
        testId,
        transition: "default",
        width: "full",
        ...currentlySelected ? {
          background: "accentColor",
          borderColor: "selectedOptionBorder",
          boxShadow: "selectedWallet"
        } : {
          background: { hover: "menuItemBackground" }
        },
        ...urlProps
      },
      import_react66.default.createElement(
        Box,
        {
          color: currentlySelected ? "accentColorForeground" : "modalText",
          disabled: !ready,
          fontFamily: "body",
          fontSize: "16",
          fontWeight: "bold",
          transition: "default"
        },
        import_react66.default.createElement(Box, { alignItems: "center", display: "flex", flexDirection: "row", gap: "12" }, import_react66.default.createElement(
          AsyncImage,
          {
            background: iconBackground,
            ...!isMouseOver && isRainbowKitConnector2 ? { borderColor: "actionButtonBorder" } : {},
            useAsImage: !isRainbowKitConnector2,
            borderRadius: "6",
            height: "28",
            src: iconUrl,
            width: "28"
          }
        ), import_react66.default.createElement(Box, null, import_react66.default.createElement(
          Box,
          {
            style: { marginTop: recent ? -2 : void 0 },
            maxWidth: "200"
          },
          name
        ), recent && import_react66.default.createElement(
          Text,
          {
            color: currentlySelected ? "accentColorForeground" : "accentColor",
            size: "12",
            style: { lineHeight: 1, marginTop: -1 },
            weight: "medium"
          },
          i18n2.t("connect.recent")
        )))
      )
    )
  );
};
ModalSelection.displayName = "ModalSelection";
var storageKey5 = "rk-latest-id";
function getLatestWalletId() {
  return typeof localStorage !== "undefined" ? localStorage.getItem(storageKey5) || "" : "";
}
function addLatestWalletId(walletId) {
  localStorage.setItem(storageKey5, walletId);
}
function clearLatestWalletId() {
  localStorage.removeItem(storageKey5);
}
var convertHexToRGBA = (hexCode, opacity = 1) => {
  let hex = hexCode.replace("#", "");
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  const r = Number.parseInt(hex.substring(0, 2), 16);
  const g = Number.parseInt(hex.substring(2, 4), 16);
  const b = Number.parseInt(hex.substring(4, 6), 16);
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }
  return `rgba(${r},${g},${b},${opacity})`;
};
var getGradientRGBAs = (hexColor) => {
  if (!hexColor)
    return null;
  return [
    convertHexToRGBA(hexColor, 0.2),
    convertHexToRGBA(hexColor, 0.14),
    convertHexToRGBA(hexColor, 0.1)
  ];
};
var isHexString = (color) => {
  return /^#([0-9a-f]{3}){1,2}$/i.test(color);
};
var src3 = async () => (await import("./connect-MR6XDLIE-UM2CZE7O.js")).default;
var preloadConnectIcon = () => loadImages(src3);
var ConnectIcon = () => import_react69.default.createElement(
  AsyncImage,
  {
    background: "#515a70",
    borderColor: "generalBorder",
    borderRadius: "10",
    height: "48",
    src: src3,
    width: "48"
  }
);
var src4 = async () => (await import("./create-X4WFHLCW-572A4MA6.js")).default;
var preloadCreateIcon = () => loadImages(src4);
var CreateIcon = () => import_react70.default.createElement(
  AsyncImage,
  {
    background: "#e3a5e8",
    borderColor: "generalBorder",
    borderRadius: "10",
    height: "48",
    src: src4,
    width: "48"
  }
);
var src5 = async () => (await import("./refresh-HJGJRASX-V34GJNRF.js")).default;
var preloadRefreshIcon = () => loadImages(src5);
var RefreshIcon = () => import_react71.default.createElement(
  AsyncImage,
  {
    background: "#515a70",
    borderColor: "generalBorder",
    borderRadius: "10",
    height: "48",
    src: src5,
    width: "48"
  }
);
var src6 = async () => (await import("./scan-DEOT2M37-DRPH6PHH.js")).default;
var preloadScanIcon = () => loadImages(src6);
var ScanIcon = () => import_react72.default.createElement(
  AsyncImage,
  {
    background: "#515a70",
    borderColor: "generalBorder",
    borderRadius: "10",
    height: "48",
    src: src6,
    width: "48"
  }
);
var QRCodeBackgroundClassName = "_1vwt0cg0";
var ScrollClassName = "_1vwt0cg2 ju367v7a ju367v7v";
var sidebar = "_1vwt0cg3";
var sidebarCompactMode = "_1vwt0cg4";
var generateMatrix = (value, errorCorrectionLevel) => {
  const arr = Array.prototype.slice.call(
    import_qrcode.default.create(value, { errorCorrectionLevel }).modules.data,
    0
  );
  const sqrt = Math.sqrt(arr.length);
  return arr.reduce(
    (rows, key, index2) => (index2 % sqrt === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows,
    []
  );
};
function QRCode({
  ecl = "M",
  logoBackground,
  logoMargin = 10,
  logoSize = 50,
  logoUrl,
  size: sizeProp = 200,
  uri
}) {
  const padding = "20";
  const size4 = sizeProp - Number.parseInt(padding, 10) * 2;
  const dots = (0, import_react73.useMemo)(() => {
    const dots2 = [];
    const matrix = generateMatrix(uri, ecl);
    const cellSize = size4 / matrix.length;
    const qrList = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ];
    qrList.forEach(({ x, y }) => {
      const x1 = (matrix.length - 7) * cellSize * x;
      const y1 = (matrix.length - 7) * cellSize * y;
      for (let i = 0; i < 3; i++) {
        dots2.push(
          import_react73.default.createElement(
            "rect",
            {
              fill: i % 2 !== 0 ? "white" : "black",
              height: cellSize * (7 - i * 2),
              key: `${i}-${x}-${y}`,
              rx: (i - 2) * -5 + (i === 0 ? 2 : 0),
              ry: (i - 2) * -5 + (i === 0 ? 2 : 0),
              width: cellSize * (7 - i * 2),
              x: x1 + cellSize * i,
              y: y1 + cellSize * i
            }
          )
        );
      }
    });
    const clearArenaSize = Math.floor((logoSize + 25) / cellSize);
    const matrixMiddleStart = matrix.length / 2 - clearArenaSize / 2;
    const matrixMiddleEnd = matrix.length / 2 + clearArenaSize / 2 - 1;
    matrix.forEach((row, i) => {
      row.forEach((_, j) => {
        if (matrix[i][j]) {
          if (!(i < 7 && j < 7 || i > matrix.length - 8 && j < 7 || i < 7 && j > matrix.length - 8)) {
            if (!(i > matrixMiddleStart && i < matrixMiddleEnd && j > matrixMiddleStart && j < matrixMiddleEnd)) {
              dots2.push(
                import_react73.default.createElement(
                  "circle",
                  {
                    cx: i * cellSize + cellSize / 2,
                    cy: j * cellSize + cellSize / 2,
                    fill: "black",
                    key: `circle-${i}-${j}`,
                    r: cellSize / 3
                  }
                )
              );
            }
          }
        }
      });
    });
    return dots2;
  }, [ecl, logoSize, size4, uri]);
  const logoPosition = size4 / 2 - logoSize / 2;
  const logoWrapperSize = logoSize + logoMargin * 2;
  return import_react73.default.createElement(
    Box,
    {
      borderColor: "generalBorder",
      borderRadius: "menuButton",
      borderStyle: "solid",
      borderWidth: "1",
      className: QRCodeBackgroundClassName,
      padding,
      width: "max"
    },
    import_react73.default.createElement(
      Box,
      {
        style: {
          height: size4,
          userSelect: "none",
          width: size4
        },
        userSelect: "none"
      },
      import_react73.default.createElement(
        Box,
        {
          display: "flex",
          justifyContent: "center",
          position: "relative",
          style: {
            height: 0,
            top: logoPosition,
            width: size4
          },
          width: "full"
        },
        import_react73.default.createElement(
          AsyncImage,
          {
            background: logoBackground,
            borderColor: { custom: "rgba(0, 0, 0, 0.06)" },
            borderRadius: "13",
            height: logoSize,
            src: logoUrl,
            width: logoSize
          }
        )
      ),
      import_react73.default.createElement("svg", { height: size4, style: { all: "revert" }, width: size4 }, import_react73.default.createElement("title", null, "QR Code"), import_react73.default.createElement("defs", null, import_react73.default.createElement("clipPath", { id: "clip-wrapper" }, import_react73.default.createElement("rect", { height: logoWrapperSize, width: logoWrapperSize })), import_react73.default.createElement("clipPath", { id: "clip-logo" }, import_react73.default.createElement("rect", { height: logoSize, width: logoSize }))), import_react73.default.createElement("rect", { fill: "transparent", height: size4, width: size4 }), dots)
    )
  );
}
var getBrowserSrc = async () => {
  const browser = getBrowser();
  switch (browser) {
    case "Arc":
      return (await import("./Arc-R3PUWRPJ-F47GUDBA.js")).default;
    case "Brave":
      return (await import("./Brave-24BM36UM-SFO5YXLA.js")).default;
    case "Chrome":
      return (await import("./Chrome-TLI42HDP-DUDW4JN6.js")).default;
    case "Edge":
      return (await import("./Edge-AZ34LAFM-EWNIHYPJ.js")).default;
    case "Firefox":
      return (await import("./Firefox-ZDK7RHKK-A65DWQ5S.js")).default;
    case "Opera":
      return (await import("./Opera-BKMCKUXC-Z3QCNFEC.js")).default;
    case "Safari":
      return (await import("./Safari-PXQIVS6N-4357T6ZB.js")).default;
    default:
      return (await import("./Browser-4R4QKTV2-XBUZUSWH.js")).default;
  }
};
var preloadBrowserIcon = () => loadImages(getBrowserSrc);
var getPlatformSrc = async () => {
  const platform = getPlatform();
  switch (platform) {
    case "Windows":
      return (await import("./Windows-GTAT3OTE-ZNUTQEMQ.js")).default;
    case "macOS":
      return (await import("./Macos-5QL4JBJE-3WGTU2H7.js")).default;
    case "Linux":
      return (await import("./Linux-VYP66PDO-Y4QZRAZ5.js")).default;
    default:
      return (await import("./Linux-VYP66PDO-Y4QZRAZ5.js")).default;
  }
};
var preloadPlatformIcon = () => loadImages(getPlatformSrc);
function GetDetail({
  getWalletDownload,
  compactModeEnabled
}) {
  const wallets = useWalletConnectors().filter(
    (wallet) => wallet.isRainbowKitConnector
  );
  const shownWallets = wallets.splice(0, 5);
  const { i18n: i18n2 } = (0, import_react68.useContext)(I18nContext);
  return import_react68.default.createElement(
    Box,
    {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      height: "full",
      marginTop: "18",
      width: "full"
    },
    import_react68.default.createElement(
      Box,
      {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "28",
        height: "full",
        width: "full"
      },
      shownWallets == null ? void 0 : shownWallets.filter(
        (wallet) => {
          var _a;
          return wallet.extensionDownloadUrl || wallet.desktopDownloadUrl || wallet.qrCode && ((_a = wallet.downloadUrls) == null ? void 0 : _a.qrCode);
        }
      ).map((wallet) => {
        const { downloadUrls, iconBackground, iconUrl, id, name, qrCode } = wallet;
        const hasMobileCompanionApp = (downloadUrls == null ? void 0 : downloadUrls.qrCode) && qrCode;
        const hasExtension = !!wallet.extensionDownloadUrl;
        const hasMobileAndExtension = (downloadUrls == null ? void 0 : downloadUrls.qrCode) && hasExtension;
        const hasMobileAndDesktop = (downloadUrls == null ? void 0 : downloadUrls.qrCode) && !!wallet.desktopDownloadUrl;
        return import_react68.default.createElement(
          Box,
          {
            alignItems: "center",
            display: "flex",
            gap: "16",
            justifyContent: "space-between",
            key: wallet.id,
            width: "full"
          },
          import_react68.default.createElement(
            Box,
            {
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              gap: "16"
            },
            import_react68.default.createElement(
              AsyncImage,
              {
                background: iconBackground,
                borderColor: "actionButtonBorder",
                borderRadius: "10",
                height: "48",
                src: iconUrl,
                width: "48"
              }
            ),
            import_react68.default.createElement(Box, { display: "flex", flexDirection: "column", gap: "2" }, import_react68.default.createElement(Text, { color: "modalText", size: "14", weight: "bold" }, name), import_react68.default.createElement(Text, { color: "modalTextSecondary", size: "14", weight: "medium" }, hasMobileAndExtension ? i18n2.t("get.mobile_and_extension.description") : hasMobileAndDesktop ? i18n2.t("get.mobile_and_desktop.description") : hasMobileCompanionApp ? i18n2.t("get.mobile.description") : hasExtension ? i18n2.t("get.extension.description") : null))
          ),
          import_react68.default.createElement(Box, { display: "flex", flexDirection: "column", gap: "4" }, import_react68.default.createElement(
            ActionButton,
            {
              label: i18n2.t("get.action.label"),
              onClick: () => getWalletDownload(id),
              type: "secondary"
            }
          ))
        );
      })
    ),
    import_react68.default.createElement(
      Box,
      {
        alignItems: "center",
        borderRadius: "10",
        display: "flex",
        flexDirection: "column",
        gap: "8",
        justifyContent: "space-between",
        marginBottom: "4",
        paddingY: "8",
        style: { maxWidth: 275, textAlign: "center" }
      },
      import_react68.default.createElement(Text, { color: "modalText", size: "14", weight: "bold" }, i18n2.t("get.looking_for.title")),
      import_react68.default.createElement(Text, { color: "modalTextSecondary", size: "14", weight: "medium" }, compactModeEnabled ? i18n2.t("get.looking_for.desktop.compact_description") : i18n2.t("get.looking_for.desktop.wide_description"))
    )
  );
}
var LOGO_SIZE = "44";
function ConnectDetail({
  changeWalletStep,
  compactModeEnabled,
  connectionError,
  onClose,
  qrCodeUri,
  reconnect,
  wallet
}) {
  const {
    downloadUrls,
    iconBackground,
    iconUrl,
    name,
    qrCode,
    ready,
    showWalletConnectModal,
    getDesktopUri
  } = wallet;
  const isDesktopDeepLinkAvailable = !!getDesktopUri;
  const safari = isSafari();
  const { i18n: i18n2 } = (0, import_react68.useContext)(I18nContext);
  const hasExtension = !!wallet.extensionDownloadUrl;
  const hasQrCodeAndExtension = (downloadUrls == null ? void 0 : downloadUrls.qrCode) && hasExtension;
  const hasQrCodeAndDesktop = (downloadUrls == null ? void 0 : downloadUrls.qrCode) && !!wallet.desktopDownloadUrl;
  const hasQrCode = qrCode && qrCodeUri;
  const onDesktopUri = async () => {
    const uri = await (getDesktopUri == null ? void 0 : getDesktopUri());
    window.open(uri, safari ? "_blank" : "_self");
  };
  const secondaryAction = showWalletConnectModal ? {
    description: !compactModeEnabled ? i18n2.t("connect.walletconnect.description.full") : i18n2.t("connect.walletconnect.description.compact"),
    label: i18n2.t("connect.walletconnect.open.label"),
    onClick: () => {
      onClose();
      showWalletConnectModal();
    }
  } : hasQrCode ? {
    description: i18n2.t("connect.secondary_action.get.description", {
      wallet: name
    }),
    label: i18n2.t("connect.secondary_action.get.label"),
    onClick: () => changeWalletStep(
      hasQrCodeAndExtension || hasQrCodeAndDesktop ? "DOWNLOAD_OPTIONS" : "DOWNLOAD"
      /* Download */
    )
  } : null;
  const { width: windowWidth } = useWindowSize();
  const smallWindow = windowWidth && windowWidth < 768;
  (0, import_react68.useEffect)(() => {
    preloadBrowserIcon();
    preloadPlatformIcon();
  }, []);
  return import_react68.default.createElement(Box, { display: "flex", flexDirection: "column", height: "full", width: "full" }, hasQrCode ? import_react68.default.createElement(
    Box,
    {
      alignItems: "center",
      display: "flex",
      height: "full",
      justifyContent: "center"
    },
    import_react68.default.createElement(
      QRCode,
      {
        logoBackground: iconBackground,
        logoSize: compactModeEnabled ? 60 : 72,
        logoUrl: iconUrl,
        size: compactModeEnabled ? 318 : smallWindow ? Math.max(280, Math.min(windowWidth - 308, 382)) : 382,
        uri: qrCodeUri
      }
    )
  ) : import_react68.default.createElement(
    Box,
    {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      style: { flexGrow: 1 }
    },
    import_react68.default.createElement(
      Box,
      {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8"
      },
      import_react68.default.createElement(Box, { borderRadius: "10", height: LOGO_SIZE, overflow: "hidden" }, import_react68.default.createElement(
        AsyncImage,
        {
          useAsImage: !wallet.isRainbowKitConnector,
          height: LOGO_SIZE,
          src: iconUrl,
          width: LOGO_SIZE
        }
      )),
      import_react68.default.createElement(
        Box,
        {
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "4",
          paddingX: "32",
          style: { textAlign: "center" }
        },
        import_react68.default.createElement(Text, { color: "modalText", size: "18", weight: "bold" }, ready ? i18n2.t("connect.status.opening", {
          wallet: name
        }) : hasExtension ? i18n2.t("connect.status.not_installed", {
          wallet: name
        }) : i18n2.t("connect.status.not_available", {
          wallet: name
        })),
        !ready && hasExtension ? import_react68.default.createElement(Box, { paddingTop: "20" }, import_react68.default.createElement(
          ActionButton,
          {
            href: wallet.extensionDownloadUrl,
            label: i18n2.t("connect.secondary_action.install.label"),
            type: "secondary"
          }
        )) : null,
        ready && !hasQrCode && import_react68.default.createElement(import_react68.default.Fragment, null, import_react68.default.createElement(
          Box,
          {
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          },
          import_react68.default.createElement(
            Text,
            {
              color: "modalTextSecondary",
              size: "14",
              textAlign: "center",
              weight: "medium"
            },
            i18n2.t("connect.status.confirm")
          )
        ), import_react68.default.createElement(
          Box,
          {
            alignItems: "center",
            color: "modalText",
            display: "flex",
            flexDirection: "row",
            height: "32",
            marginTop: "8"
          },
          connectionError ? import_react68.default.createElement(
            ActionButton,
            {
              label: i18n2.t("connect.secondary_action.retry.label"),
              onClick: async () => {
                if (isDesktopDeepLinkAvailable)
                  onDesktopUri();
                reconnect(wallet);
              }
            }
          ) : import_react68.default.createElement(Box, { color: "modalTextSecondary" }, import_react68.default.createElement(SpinnerIcon, null))
        ))
      )
    )
  ), import_react68.default.createElement(
    Box,
    {
      alignItems: "center",
      borderRadius: "10",
      display: "flex",
      flexDirection: "row",
      gap: "8",
      height: "28",
      justifyContent: "space-between",
      marginTop: "12"
    },
    ready && secondaryAction && import_react68.default.createElement(import_react68.default.Fragment, null, import_react68.default.createElement(Text, { color: "modalTextSecondary", size: "14", weight: "medium" }, secondaryAction.description), import_react68.default.createElement(
      ActionButton,
      {
        label: secondaryAction.label,
        onClick: secondaryAction.onClick,
        type: "secondary"
      }
    ))
  ));
}
var DownloadOptionsBox = ({
  actionLabel,
  description,
  iconAccent,
  iconBackground,
  iconUrl,
  isCompact,
  onAction,
  title,
  url,
  variant
}) => {
  const isBrowserCard = variant === "browser";
  const gradientRgbas = !isBrowserCard && iconAccent && getGradientRGBAs(iconAccent);
  return import_react68.default.createElement(
    Box,
    {
      alignItems: "center",
      borderRadius: "13",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
      paddingX: isCompact ? "18" : "44",
      position: "relative",
      style: { flex: 1, isolation: "isolate" },
      width: "full"
    },
    import_react68.default.createElement(
      Box,
      {
        borderColor: "actionButtonBorder",
        borderRadius: "13",
        borderStyle: "solid",
        borderWidth: "1",
        style: {
          bottom: "0",
          left: "0",
          position: "absolute",
          right: "0",
          top: "0",
          zIndex: 1
        }
      }
    ),
    isBrowserCard && import_react68.default.createElement(
      Box,
      {
        background: "downloadTopCardBackground",
        height: "full",
        position: "absolute",
        style: {
          zIndex: 0
        },
        width: "full"
      },
      import_react68.default.createElement(
        Box,
        {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          style: {
            bottom: "0",
            filter: "blur(20px)",
            left: "0",
            position: "absolute",
            right: "0",
            top: "0",
            transform: "translate3d(0, 0, 0)"
          }
        },
        import_react68.default.createElement(
          Box,
          {
            style: {
              filter: "blur(100px)",
              marginLeft: -27,
              marginTop: -20,
              opacity: 0.6,
              transform: "translate3d(0, 0, 0)"
            }
          },
          import_react68.default.createElement(
            AsyncImage,
            {
              borderRadius: "full",
              height: "200",
              src: iconUrl,
              width: "200"
            }
          )
        ),
        import_react68.default.createElement(
          Box,
          {
            style: {
              filter: "blur(100px)",
              marginRight: 0,
              marginTop: 105,
              opacity: 0.6,
              overflow: "auto",
              transform: "translate3d(0, 0, 0)"
            }
          },
          import_react68.default.createElement(
            AsyncImage,
            {
              borderRadius: "full",
              height: "200",
              src: iconUrl,
              width: "200"
            }
          )
        )
      )
    ),
    !isBrowserCard && gradientRgbas && import_react68.default.createElement(
      Box,
      {
        background: "downloadBottomCardBackground",
        style: {
          bottom: "0",
          left: "0",
          position: "absolute",
          right: "0",
          top: "0"
        }
      },
      import_react68.default.createElement(
        Box,
        {
          position: "absolute",
          style: {
            background: `radial-gradient(50% 50% at 50% 50%, ${gradientRgbas[0]} 0%, ${gradientRgbas[1]} 25%, rgba(0,0,0,0) 100%)`,
            height: 564,
            left: -215,
            top: -197,
            transform: "translate3d(0, 0, 0)",
            width: 564
          }
        }
      ),
      import_react68.default.createElement(
        Box,
        {
          position: "absolute",
          style: {
            background: `radial-gradient(50% 50% at 50% 50%, ${gradientRgbas[2]} 0%, rgba(0, 0, 0, 0) 100%)`,
            height: 564,
            left: -1,
            top: -76,
            transform: "translate3d(0, 0, 0)",
            width: 564
          }
        }
      )
    ),
    import_react68.default.createElement(
      Box,
      {
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",
        gap: "24",
        height: "max",
        justifyContent: "center",
        style: { zIndex: 1 }
      },
      import_react68.default.createElement(Box, null, import_react68.default.createElement(
        AsyncImage,
        {
          height: "60",
          src: iconUrl,
          width: "60",
          ...iconBackground ? {
            background: iconBackground,
            borderColor: "generalBorder",
            borderRadius: "10"
          } : null
        }
      )),
      import_react68.default.createElement(
        Box,
        {
          display: "flex",
          flexDirection: "column",
          gap: "4",
          style: { flex: 1 },
          width: "full"
        },
        import_react68.default.createElement(Text, { color: "modalText", size: "14", weight: "bold" }, title),
        import_react68.default.createElement(Text, { color: "modalTextSecondary", size: "14", weight: "medium" }, description),
        import_react68.default.createElement(Box, { marginTop: "14", width: "max" }, import_react68.default.createElement(
          ActionButton,
          {
            href: url,
            label: actionLabel,
            onClick: onAction,
            size: "medium"
          }
        ))
      )
    )
  );
};
function DownloadOptionsDetail({
  changeWalletStep,
  wallet
}) {
  const browser = getBrowser();
  const platform = getPlatform();
  const modalSize = (0, import_react68.useContext)(ModalSizeContext);
  const isCompact = modalSize === "compact";
  const {
    desktop,
    desktopDownloadUrl,
    extension,
    extensionDownloadUrl,
    mobileDownloadUrl
  } = wallet;
  const { i18n: i18n2 } = (0, import_react68.useContext)(I18nContext);
  (0, import_react68.useEffect)(() => {
    preloadCreateIcon();
    preloadScanIcon();
    preloadRefreshIcon();
    preloadConnectIcon();
  }, []);
  return import_react68.default.createElement(
    Box,
    {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      gap: "24",
      height: "full",
      marginBottom: "8",
      marginTop: "4",
      width: "full"
    },
    import_react68.default.createElement(
      Box,
      {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8",
        height: "full",
        justifyContent: "center",
        width: "full"
      },
      extensionDownloadUrl && import_react68.default.createElement(
        DownloadOptionsBox,
        {
          actionLabel: i18n2.t("get_options.extension.download.label", {
            browser
          }),
          description: i18n2.t("get_options.extension.description"),
          iconUrl: getBrowserSrc,
          isCompact,
          onAction: () => changeWalletStep(
            (extension == null ? void 0 : extension.instructions) ? "INSTRUCTIONS_EXTENSION" : "CONNECT"
            /* Connect */
          ),
          title: i18n2.t("get_options.extension.title", {
            wallet: wallet.name,
            browser
          }),
          url: extensionDownloadUrl,
          variant: "browser"
        }
      ),
      desktopDownloadUrl && import_react68.default.createElement(
        DownloadOptionsBox,
        {
          actionLabel: i18n2.t("get_options.desktop.download.label", {
            platform
          }),
          description: i18n2.t("get_options.desktop.description"),
          iconUrl: getPlatformSrc,
          isCompact,
          onAction: () => changeWalletStep(
            (desktop == null ? void 0 : desktop.instructions) ? "INSTRUCTIONS_DESKTOP" : "CONNECT"
            /* Connect */
          ),
          title: i18n2.t("get_options.desktop.title", {
            wallet: wallet.name,
            platform
          }),
          url: desktopDownloadUrl,
          variant: "desktop"
        }
      ),
      mobileDownloadUrl && import_react68.default.createElement(
        DownloadOptionsBox,
        {
          actionLabel: i18n2.t("get_options.mobile.download.label", {
            wallet: wallet.name
          }),
          description: i18n2.t("get_options.mobile.description"),
          iconAccent: wallet.iconAccent,
          iconBackground: wallet.iconBackground,
          iconUrl: wallet.iconUrl,
          isCompact,
          onAction: () => {
            changeWalletStep(
              "DOWNLOAD"
              /* Download */
            );
          },
          title: i18n2.t("get_options.mobile.title", { wallet: wallet.name }),
          variant: "app"
        }
      )
    )
  );
}
function DownloadDetail({
  changeWalletStep,
  wallet
}) {
  const { downloadUrls, qrCode } = wallet;
  const { i18n: i18n2 } = (0, import_react68.useContext)(I18nContext);
  (0, import_react68.useEffect)(() => {
    preloadCreateIcon();
    preloadScanIcon();
  }, []);
  return import_react68.default.createElement(
    Box,
    {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      gap: "24",
      height: "full",
      width: "full"
    },
    import_react68.default.createElement(Box, { style: { maxWidth: 220, textAlign: "center" } }, import_react68.default.createElement(Text, { color: "modalTextSecondary", size: "14", weight: "semibold" }, i18n2.t("get_mobile.description"))),
    import_react68.default.createElement(Box, { height: "full" }, (downloadUrls == null ? void 0 : downloadUrls.qrCode) ? import_react68.default.createElement(QRCode, { logoSize: 0, size: 268, uri: downloadUrls.qrCode }) : null),
    import_react68.default.createElement(
      Box,
      {
        alignItems: "center",
        borderRadius: "10",
        display: "flex",
        flexDirection: "row",
        gap: "8",
        height: "34",
        justifyContent: "space-between",
        marginBottom: "12",
        paddingY: "8"
      },
      import_react68.default.createElement(
        ActionButton,
        {
          label: i18n2.t("get_mobile.continue.label"),
          onClick: () => changeWalletStep(
            (qrCode == null ? void 0 : qrCode.instructions) ? "INSTRUCTIONS_MOBILE" : "CONNECT"
            /* Connect */
          )
        }
      )
    )
  );
}
var stepIcons = {
  connect: () => import_react68.default.createElement(ConnectIcon, null),
  create: () => import_react68.default.createElement(CreateIcon, null),
  install: (wallet) => import_react68.default.createElement(
    AsyncImage,
    {
      background: wallet.iconBackground,
      borderColor: "generalBorder",
      borderRadius: "10",
      height: "48",
      src: wallet.iconUrl,
      width: "48"
    }
  ),
  refresh: () => import_react68.default.createElement(RefreshIcon, null),
  scan: () => import_react68.default.createElement(ScanIcon, null)
};
function InstructionMobileDetail({
  connectWallet,
  wallet
}) {
  var _a, _b, _c, _d;
  const { i18n: i18n2 } = (0, import_react68.useContext)(I18nContext);
  return import_react68.default.createElement(
    Box,
    {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      height: "full",
      width: "full"
    },
    import_react68.default.createElement(
      Box,
      {
        display: "flex",
        flexDirection: "column",
        gap: "28",
        height: "full",
        justifyContent: "center",
        paddingY: "32",
        style: { maxWidth: 320 }
      },
      (_b = (_a = wallet == null ? void 0 : wallet.qrCode) == null ? void 0 : _a.instructions) == null ? void 0 : _b.steps.map((d, idx) => {
        var _a2;
        return import_react68.default.createElement(
          Box,
          {
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            gap: "16",
            key: idx
          },
          import_react68.default.createElement(
            Box,
            {
              borderRadius: "10",
              height: "48",
              minWidth: "48",
              overflow: "hidden",
              position: "relative",
              width: "48"
            },
            (_a2 = stepIcons[d.step]) == null ? void 0 : _a2.call(stepIcons, wallet)
          ),
          import_react68.default.createElement(Box, { display: "flex", flexDirection: "column", gap: "4" }, import_react68.default.createElement(Text, { color: "modalText", size: "14", weight: "bold" }, i18n2.t(d.title, void 0, {
            rawKeyIfTranslationMissing: true
          })), import_react68.default.createElement(Text, { color: "modalTextSecondary", size: "14", weight: "medium" }, i18n2.t(d.description, void 0, {
            rawKeyIfTranslationMissing: true
          })))
        );
      })
    ),
    import_react68.default.createElement(
      Box,
      {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "12",
        justifyContent: "center",
        marginBottom: "16"
      },
      import_react68.default.createElement(
        ActionButton,
        {
          label: i18n2.t("get_instructions.mobile.connect.label"),
          onClick: () => connectWallet(wallet)
        }
      ),
      import_react68.default.createElement(
        Box,
        {
          as: "a",
          className: touchableStyles({ active: "shrink", hover: "grow" }),
          display: "block",
          href: (_d = (_c = wallet == null ? void 0 : wallet.qrCode) == null ? void 0 : _c.instructions) == null ? void 0 : _d.learnMoreUrl,
          paddingX: "12",
          paddingY: "4",
          rel: "noreferrer",
          style: { willChange: "transform" },
          target: "_blank",
          transition: "default"
        },
        import_react68.default.createElement(Text, { color: "accentColor", size: "14", weight: "bold" }, i18n2.t("get_instructions.mobile.learn_more.label"))
      )
    )
  );
}
function InstructionExtensionDetail({
  wallet
}) {
  var _a, _b, _c, _d;
  const { i18n: i18n2 } = (0, import_react68.useContext)(I18nContext);
  return import_react68.default.createElement(
    Box,
    {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      height: "full",
      width: "full"
    },
    import_react68.default.createElement(
      Box,
      {
        display: "flex",
        flexDirection: "column",
        gap: "28",
        height: "full",
        justifyContent: "center",
        paddingY: "32",
        style: { maxWidth: 320 }
      },
      (_b = (_a = wallet == null ? void 0 : wallet.extension) == null ? void 0 : _a.instructions) == null ? void 0 : _b.steps.map((d, idx) => {
        var _a2;
        return import_react68.default.createElement(
          Box,
          {
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            gap: "16",
            key: idx
          },
          import_react68.default.createElement(
            Box,
            {
              borderRadius: "10",
              height: "48",
              minWidth: "48",
              overflow: "hidden",
              position: "relative",
              width: "48"
            },
            (_a2 = stepIcons[d.step]) == null ? void 0 : _a2.call(stepIcons, wallet)
          ),
          import_react68.default.createElement(Box, { display: "flex", flexDirection: "column", gap: "4" }, import_react68.default.createElement(Text, { color: "modalText", size: "14", weight: "bold" }, i18n2.t(d.title, void 0, {
            rawKeyIfTranslationMissing: true
          })), import_react68.default.createElement(Text, { color: "modalTextSecondary", size: "14", weight: "medium" }, i18n2.t(d.description, void 0, {
            rawKeyIfTranslationMissing: true
          })))
        );
      })
    ),
    import_react68.default.createElement(
      Box,
      {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "12",
        justifyContent: "center",
        marginBottom: "16"
      },
      import_react68.default.createElement(
        ActionButton,
        {
          label: i18n2.t("get_instructions.extension.refresh.label"),
          onClick: window.location.reload.bind(window.location)
        }
      ),
      import_react68.default.createElement(
        Box,
        {
          as: "a",
          className: touchableStyles({ active: "shrink", hover: "grow" }),
          display: "block",
          href: (_d = (_c = wallet == null ? void 0 : wallet.extension) == null ? void 0 : _c.instructions) == null ? void 0 : _d.learnMoreUrl,
          paddingX: "12",
          paddingY: "4",
          rel: "noreferrer",
          style: { willChange: "transform" },
          target: "_blank",
          transition: "default"
        },
        import_react68.default.createElement(Text, { color: "accentColor", size: "14", weight: "bold" }, i18n2.t("get_instructions.extension.learn_more.label"))
      )
    )
  );
}
function InstructionDesktopDetail({
  connectWallet,
  wallet
}) {
  var _a, _b, _c, _d;
  const { i18n: i18n2 } = (0, import_react68.useContext)(I18nContext);
  return import_react68.default.createElement(
    Box,
    {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      height: "full",
      width: "full"
    },
    import_react68.default.createElement(
      Box,
      {
        display: "flex",
        flexDirection: "column",
        gap: "28",
        height: "full",
        justifyContent: "center",
        paddingY: "32",
        style: { maxWidth: 320 }
      },
      (_b = (_a = wallet == null ? void 0 : wallet.desktop) == null ? void 0 : _a.instructions) == null ? void 0 : _b.steps.map((d, idx) => {
        var _a2;
        return import_react68.default.createElement(
          Box,
          {
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            gap: "16",
            key: idx
          },
          import_react68.default.createElement(
            Box,
            {
              borderRadius: "10",
              height: "48",
              minWidth: "48",
              overflow: "hidden",
              position: "relative",
              width: "48"
            },
            (_a2 = stepIcons[d.step]) == null ? void 0 : _a2.call(stepIcons, wallet)
          ),
          import_react68.default.createElement(Box, { display: "flex", flexDirection: "column", gap: "4" }, import_react68.default.createElement(Text, { color: "modalText", size: "14", weight: "bold" }, i18n2.t(d.title, void 0, {
            rawKeyIfTranslationMissing: true
          })), import_react68.default.createElement(Text, { color: "modalTextSecondary", size: "14", weight: "medium" }, i18n2.t(d.description, void 0, {
            rawKeyIfTranslationMissing: true
          })))
        );
      })
    ),
    import_react68.default.createElement(
      Box,
      {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "12",
        justifyContent: "center",
        marginBottom: "16"
      },
      import_react68.default.createElement(
        ActionButton,
        {
          label: i18n2.t("get_instructions.desktop.connect.label"),
          onClick: () => connectWallet(wallet)
        }
      ),
      import_react68.default.createElement(
        Box,
        {
          as: "a",
          className: touchableStyles({ active: "shrink", hover: "grow" }),
          display: "block",
          href: (_d = (_c = wallet == null ? void 0 : wallet.desktop) == null ? void 0 : _c.instructions) == null ? void 0 : _d.learnMoreUrl,
          paddingX: "12",
          paddingY: "4",
          rel: "noreferrer",
          style: { willChange: "transform" },
          target: "_blank",
          transition: "default"
        },
        import_react68.default.createElement(Text, { color: "accentColor", size: "14", weight: "bold" }, i18n2.t("get_instructions.desktop.learn_more.label"))
      )
    )
  );
}
function DesktopOptions({ onClose }) {
  const titleId = "rk_connect_title";
  const [selectedOptionId, setSelectedOptionId] = (0, import_react59.useState)();
  const [selectedWallet, setSelectedWallet] = (0, import_react59.useState)();
  const [qrCodeUri, setQrCodeUri] = (0, import_react59.useState)();
  const hasQrCode = !!(selectedWallet == null ? void 0 : selectedWallet.qrCode) && qrCodeUri;
  const [connectionError, setConnectionError] = (0, import_react59.useState)(false);
  const modalSize = (0, import_react59.useContext)(ModalSizeContext);
  const compactModeEnabled = modalSize === ModalSizeOptions.COMPACT;
  const { disclaimer: Disclaimer } = (0, import_react59.useContext)(AppContext);
  const { i18n: i18n2 } = (0, import_react59.useContext)(I18nContext);
  const safari = isSafari();
  const initialized = (0, import_react59.useRef)(false);
  const { connector } = (0, import_react59.useContext)(WalletButtonContext);
  const mergeEIP6963WithRkConnectors = !connector;
  const wallets = useWalletConnectors(mergeEIP6963WithRkConnectors).filter((wallet) => wallet.ready || !!wallet.extensionDownloadUrl).sort((a, b) => a.groupIndex - b.groupIndex);
  const unfilteredWallets = useWalletConnectors();
  const groupedWallets = groupBy(wallets, (wallet) => wallet.groupName);
  const supportedI18nGroupNames = [
    "Recommended",
    "Other",
    "Popular",
    "More",
    "Others",
    "Installed"
  ];
  (0, import_react59.useEffect)(() => {
    if (connector && !initialized.current) {
      changeWalletStep(
        "CONNECT"
        /* Connect */
      );
      selectWallet(connector);
      initialized.current = true;
    }
  }, [connector]);
  const connectToWallet = (wallet) => {
    var _a, _b;
    setConnectionError(false);
    if (wallet.ready) {
      (_b = (_a = wallet == null ? void 0 : wallet.connect) == null ? void 0 : _a.call(wallet)) == null ? void 0 : _b.catch(() => {
        setConnectionError(true);
      });
    }
  };
  const onDesktopUri = async (wallet) => {
    const sWallet = wallets.find((w) => wallet.id === w.id);
    if (!(sWallet == null ? void 0 : sWallet.getDesktopUri))
      return;
    setTimeout(async () => {
      var _a;
      const uri = await ((_a = sWallet == null ? void 0 : sWallet.getDesktopUri) == null ? void 0 : _a.call(sWallet));
      if (uri)
        window.open(uri, safari ? "_blank" : "_self");
    }, 0);
  };
  const onQrCode = async (wallet) => {
    var _a;
    const sWallet = wallets.find((w) => wallet.id === w.id);
    const uri = await ((_a = sWallet == null ? void 0 : sWallet.getQrCodeUri) == null ? void 0 : _a.call(sWallet));
    setQrCodeUri(uri);
    setTimeout(
      () => {
        setSelectedWallet(sWallet);
        changeWalletStep(
          "CONNECT"
          /* Connect */
        );
      },
      uri ? 0 : 50
    );
  };
  const selectWallet = async (wallet) => {
    addLatestWalletId(wallet.id);
    if (wallet.ready) {
      onQrCode(wallet);
      onDesktopUri(wallet);
    }
    connectToWallet(wallet);
    setSelectedOptionId(wallet.id);
    if (!wallet.ready) {
      setSelectedWallet(wallet);
      changeWalletStep(
        (wallet == null ? void 0 : wallet.extensionDownloadUrl) ? "DOWNLOAD_OPTIONS" : "CONNECT"
        /* Connect */
      );
    }
  };
  const getWalletDownload = (id) => {
    var _a;
    const sWallet = unfilteredWallets.find((w) => id === w.id);
    const isMobile2 = (_a = sWallet == null ? void 0 : sWallet.downloadUrls) == null ? void 0 : _a.qrCode;
    const isDesktop = !!(sWallet == null ? void 0 : sWallet.desktopDownloadUrl);
    const isExtension = !!(sWallet == null ? void 0 : sWallet.extensionDownloadUrl);
    setSelectedWallet(sWallet);
    if (isMobile2 && (isExtension || isDesktop)) {
      changeWalletStep(
        "DOWNLOAD_OPTIONS"
        /* DownloadOptions */
      );
    } else if (isMobile2) {
      changeWalletStep(
        "DOWNLOAD"
        /* Download */
      );
    } else if (isDesktop) {
      changeWalletStep(
        "INSTRUCTIONS_DESKTOP"
        /* InstructionsDesktop */
      );
    } else {
      changeWalletStep(
        "INSTRUCTIONS_EXTENSION"
        /* InstructionsExtension */
      );
    }
  };
  const clearSelectedWallet = () => {
    setSelectedOptionId(void 0);
    setSelectedWallet(void 0);
    setQrCodeUri(void 0);
  };
  const changeWalletStep = (newWalletStep, isBack = false) => {
    if (isBack && newWalletStep === "GET" && initialWalletStep === "GET") {
      clearSelectedWallet();
    } else if (!isBack && newWalletStep === "GET") {
      setInitialWalletStep(
        "GET"
        /* Get */
      );
    } else if (!isBack && newWalletStep === "CONNECT") {
      setInitialWalletStep(
        "CONNECT"
        /* Connect */
      );
    }
    setWalletStep(newWalletStep);
  };
  const [initialWalletStep, setInitialWalletStep] = (0, import_react59.useState)(
    "NONE"
    /* None */
  );
  const [walletStep, setWalletStep] = (0, import_react59.useState)(
    "NONE"
    /* None */
  );
  let walletContent = null;
  let headerLabel = null;
  let headerBackButtonLink = null;
  let headerBackButtonCallback;
  (0, import_react59.useEffect)(() => {
    setConnectionError(false);
  }, [walletStep, selectedWallet]);
  const hasExtension = !!(selectedWallet == null ? void 0 : selectedWallet.extensionDownloadUrl);
  const hasExtensionAndMobile = !!(hasExtension && (selectedWallet == null ? void 0 : selectedWallet.mobileDownloadUrl));
  switch (walletStep) {
    case "NONE":
      walletContent = import_react59.default.createElement(ConnectModalIntro, { getWallet: () => changeWalletStep(
        "GET"
        /* Get */
      ) });
      break;
    case "LEARN_COMPACT":
      walletContent = import_react59.default.createElement(
        ConnectModalIntro,
        {
          compactModeEnabled,
          getWallet: () => changeWalletStep(
            "GET"
            /* Get */
          )
        }
      );
      headerLabel = i18n2.t("intro.title");
      headerBackButtonLink = "NONE";
      break;
    case "GET":
      walletContent = import_react59.default.createElement(
        GetDetail,
        {
          getWalletDownload,
          compactModeEnabled
        }
      );
      headerLabel = i18n2.t("get.title");
      headerBackButtonLink = compactModeEnabled ? "LEARN_COMPACT" : "NONE";
      break;
    case "CONNECT":
      walletContent = selectedWallet && import_react59.default.createElement(
        ConnectDetail,
        {
          changeWalletStep,
          compactModeEnabled,
          connectionError,
          onClose,
          qrCodeUri,
          reconnect: connectToWallet,
          wallet: selectedWallet
        }
      );
      headerLabel = hasQrCode && (selectedWallet.name === "WalletConnect" ? i18n2.t("connect_scan.fallback_title") : i18n2.t("connect_scan.title", {
        wallet: selectedWallet.name
      }));
      headerBackButtonLink = compactModeEnabled ? connector ? null : "NONE" : null;
      headerBackButtonCallback = compactModeEnabled ? !connector ? clearSelectedWallet : () => {
      } : () => {
      };
      break;
    case "DOWNLOAD_OPTIONS":
      walletContent = selectedWallet && import_react59.default.createElement(
        DownloadOptionsDetail,
        {
          changeWalletStep,
          wallet: selectedWallet
        }
      );
      headerLabel = selectedWallet && i18n2.t("get_options.short_title", { wallet: selectedWallet.name });
      headerBackButtonLink = connector ? "CONNECT" : compactModeEnabled ? "NONE" : initialWalletStep;
      break;
    case "DOWNLOAD":
      walletContent = selectedWallet && import_react59.default.createElement(
        DownloadDetail,
        {
          changeWalletStep,
          wallet: selectedWallet
        }
      );
      headerLabel = selectedWallet && i18n2.t("get_mobile.title", { wallet: selectedWallet.name });
      headerBackButtonLink = hasExtensionAndMobile ? "DOWNLOAD_OPTIONS" : initialWalletStep;
      break;
    case "INSTRUCTIONS_MOBILE":
      walletContent = selectedWallet && import_react59.default.createElement(
        InstructionMobileDetail,
        {
          connectWallet: selectWallet,
          wallet: selectedWallet
        }
      );
      headerLabel = selectedWallet && i18n2.t("get_options.title", {
        wallet: compactModeEnabled ? selectedWallet.shortName || selectedWallet.name : selectedWallet.name
      });
      headerBackButtonLink = "DOWNLOAD";
      break;
    case "INSTRUCTIONS_EXTENSION":
      walletContent = selectedWallet && import_react59.default.createElement(InstructionExtensionDetail, { wallet: selectedWallet });
      headerLabel = selectedWallet && i18n2.t("get_options.title", {
        wallet: compactModeEnabled ? selectedWallet.shortName || selectedWallet.name : selectedWallet.name
      });
      headerBackButtonLink = "DOWNLOAD_OPTIONS";
      break;
    case "INSTRUCTIONS_DESKTOP":
      walletContent = selectedWallet && import_react59.default.createElement(
        InstructionDesktopDetail,
        {
          connectWallet: selectWallet,
          wallet: selectedWallet
        }
      );
      headerLabel = selectedWallet && i18n2.t("get_options.title", {
        wallet: compactModeEnabled ? selectedWallet.shortName || selectedWallet.name : selectedWallet.name
      });
      headerBackButtonLink = "DOWNLOAD_OPTIONS";
      break;
    default:
      break;
  }
  return import_react59.default.createElement(
    Box,
    {
      display: "flex",
      flexDirection: "row",
      style: { maxHeight: compactModeEnabled ? 468 : 504 }
    },
    (compactModeEnabled ? walletStep === "NONE" : true) && import_react59.default.createElement(
      Box,
      {
        className: compactModeEnabled ? sidebarCompactMode : sidebar,
        display: "flex",
        flexDirection: "column",
        marginTop: "16"
      },
      import_react59.default.createElement(Box, { display: "flex", justifyContent: "space-between" }, compactModeEnabled && Disclaimer && import_react59.default.createElement(Box, { marginLeft: "16", width: "28" }, import_react59.default.createElement(
        InfoButton,
        {
          onClick: () => changeWalletStep(
            "LEARN_COMPACT"
            /* LearnCompact */
          )
        }
      )), compactModeEnabled && !Disclaimer && import_react59.default.createElement(Box, { marginLeft: "16", width: "28" }), import_react59.default.createElement(
        Box,
        {
          marginLeft: compactModeEnabled ? "0" : "6",
          paddingBottom: "8",
          paddingTop: "2",
          paddingX: "18"
        },
        import_react59.default.createElement(
          Text,
          {
            as: "h1",
            color: "modalText",
            id: titleId,
            size: "18",
            weight: "heavy",
            testId: "connect-header-label"
          },
          i18n2.t("connect.title")
        )
      ), compactModeEnabled && import_react59.default.createElement(Box, { marginRight: "16" }, import_react59.default.createElement(CloseButton, { onClose }))),
      import_react59.default.createElement(Box, { className: ScrollClassName, paddingBottom: "18" }, Object.entries(groupedWallets).map(
        ([groupName, wallets2], index2) => wallets2.length > 0 && import_react59.default.createElement(import_react59.Fragment, { key: index2 }, groupName ? import_react59.default.createElement(Box, { marginBottom: "8", marginTop: "16", marginX: "6" }, import_react59.default.createElement(
          Text,
          {
            color: groupName === "Installed" ? "accentColor" : "modalTextSecondary",
            size: "14",
            weight: "bold"
          },
          supportedI18nGroupNames.includes(groupName) ? i18n2.t(
            `connector_group.${groupName.toLowerCase()}`
          ) : groupName
        )) : null, import_react59.default.createElement(Box, { display: "flex", flexDirection: "column", gap: "4" }, wallets2.map((wallet) => {
          return import_react59.default.createElement(
            ModalSelection,
            {
              currentlySelected: wallet.id === selectedOptionId,
              iconBackground: wallet.iconBackground,
              iconUrl: wallet.iconUrl,
              key: wallet.id,
              name: wallet.name,
              onClick: () => selectWallet(wallet),
              ready: wallet.ready,
              recent: wallet.recent,
              testId: `wallet-option-${wallet.id}`,
              isRainbowKitConnector: wallet.isRainbowKitConnector
            }
          );
        })))
      )),
      compactModeEnabled && import_react59.default.createElement(import_react59.default.Fragment, null, import_react59.default.createElement(Box, { background: "generalBorder", height: "1", marginTop: "-1" }), Disclaimer ? import_react59.default.createElement(Box, { paddingX: "24", paddingY: "16", textAlign: "center" }, import_react59.default.createElement(Disclaimer, { Link: DisclaimerLink, Text: DisclaimerText })) : import_react59.default.createElement(
        Box,
        {
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          paddingX: "24",
          paddingY: "16"
        },
        import_react59.default.createElement(Box, { paddingY: "4" }, import_react59.default.createElement(Text, { color: "modalTextSecondary", size: "14", weight: "medium" }, i18n2.t("connect.new_to_ethereum.description"))),
        import_react59.default.createElement(
          Box,
          {
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            gap: "4",
            justifyContent: "center"
          },
          import_react59.default.createElement(
            Box,
            {
              className: touchableStyles({
                active: "shrink",
                hover: "grow"
              }),
              cursor: "pointer",
              onClick: () => changeWalletStep(
                "LEARN_COMPACT"
                /* LearnCompact */
              ),
              paddingY: "4",
              style: { willChange: "transform" },
              transition: "default"
            },
            import_react59.default.createElement(Text, { color: "accentColor", size: "14", weight: "bold" }, i18n2.t("connect.new_to_ethereum.learn_more.label"))
          )
        )
      ))
    ),
    (compactModeEnabled ? walletStep !== "NONE" : true) && import_react59.default.createElement(import_react59.default.Fragment, null, !compactModeEnabled && import_react59.default.createElement(Box, { background: "generalBorder", minWidth: "1", width: "1" }), import_react59.default.createElement(
      Box,
      {
        display: "flex",
        flexDirection: "column",
        margin: "16",
        style: { flexGrow: 1 }
      },
      import_react59.default.createElement(
        Box,
        {
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12"
        },
        import_react59.default.createElement(Box, { width: "28" }, headerBackButtonLink && import_react59.default.createElement(
          Box,
          {
            as: "button",
            className: touchableStyles({
              active: "shrinkSm",
              hover: "growLg"
            }),
            color: "accentColor",
            onClick: () => {
              headerBackButtonLink && changeWalletStep(headerBackButtonLink, true);
              headerBackButtonCallback == null ? void 0 : headerBackButtonCallback();
            },
            paddingX: "8",
            paddingY: "4",
            style: {
              boxSizing: "content-box",
              height: 17,
              willChange: "transform"
            },
            transition: "default",
            type: "button"
          },
          import_react59.default.createElement(BackIcon, null)
        )),
        import_react59.default.createElement(
          Box,
          {
            display: "flex",
            justifyContent: "center",
            style: { flexGrow: 1 }
          },
          headerLabel && import_react59.default.createElement(
            Text,
            {
              color: "modalText",
              size: "18",
              textAlign: "center",
              weight: "heavy"
            },
            headerLabel
          )
        ),
        import_react59.default.createElement(CloseButton, { onClose })
      ),
      import_react59.default.createElement(
        Box,
        {
          display: "flex",
          flexDirection: "column",
          style: { minHeight: compactModeEnabled ? 396 : 432 }
        },
        import_react59.default.createElement(
          Box,
          {
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "6",
            height: "full",
            justifyContent: "center",
            marginX: "8"
          },
          walletContent
        )
      )
    ))
  );
}
var rotatingBorder = "_1am14412";
var scroll = "_1am14410";
var spinner = "_1am14413";
var LoadingSpinner = ({ wallet }) => {
  const width = 80;
  const height = 80;
  const radiusFactor = 20;
  const perimeter = 2 * (width + height - 4 * radiusFactor);
  return import_react74.default.createElement("svg", { className: spinner, viewBox: "0 0 86 86", width: "86", height: "86" }, import_react74.default.createElement("title", null, "Loading"), import_react74.default.createElement(
    "rect",
    {
      x: "3",
      y: "3",
      width,
      height,
      rx: radiusFactor,
      ry: radiusFactor,
      strokeDasharray: `${perimeter / 3} ${2 * perimeter / 3}`,
      strokeDashoffset: perimeter,
      className: rotatingBorder,
      style: {
        // Prop style passing works only in `@vanilla-extract/recipes`.
        // Instead downloading packages we can do this
        // manually without passing props
        stroke: (wallet == null ? void 0 : wallet.iconAccent) || "#0D3887"
      }
    }
  ));
};
function WalletButton({
  onClose,
  wallet,
  connecting
}) {
  const {
    connect,
    iconBackground,
    iconUrl,
    id,
    name,
    getMobileUri,
    ready,
    shortName,
    showWalletConnectModal
  } = wallet;
  const coolModeRef = useCoolMode(iconUrl);
  const initialized = (0, import_react74.useRef)(false);
  const { i18n: i18n2 } = (0, import_react74.useContext)(I18nContext);
  const onConnect = (0, import_react74.useCallback)(async () => {
    const onMobileUri = async () => {
      const mobileUri = await (getMobileUri == null ? void 0 : getMobileUri());
      if (!mobileUri)
        return;
      if (mobileUri) {
        setWalletConnectDeepLink({ mobileUri, name });
      }
      if (mobileUri.startsWith("http")) {
        const link = document.createElement("a");
        link.href = mobileUri;
        link.target = "_blank";
        link.rel = "noreferrer noopener";
        link.click();
      } else {
        window.location.href = mobileUri;
      }
    };
    if (id !== "walletConnect")
      onMobileUri();
    if (showWalletConnectModal) {
      showWalletConnectModal();
      onClose == null ? void 0 : onClose();
      return;
    }
    connect == null ? void 0 : connect();
  }, [connect, getMobileUri, showWalletConnectModal, onClose, name, id]);
  (0, import_react74.useEffect)(() => {
    if (connecting && !initialized.current) {
      onConnect();
      initialized.current = true;
    }
  }, [connecting, onConnect]);
  return import_react74.default.createElement(
    Box,
    {
      as: "button",
      color: ready ? "modalText" : "modalTextSecondary",
      disabled: !ready,
      fontFamily: "body",
      key: id,
      onClick: onConnect,
      ref: coolModeRef,
      style: { overflow: "visible", textAlign: "center" },
      testId: `wallet-option-${id}`,
      type: "button",
      width: "full"
    },
    import_react74.default.createElement(
      Box,
      {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      },
      import_react74.default.createElement(
        Box,
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "8",
          paddingTop: "10",
          position: "relative"
        },
        connecting ? import_react74.default.createElement(LoadingSpinner, { wallet }) : null,
        import_react74.default.createElement(
          AsyncImage,
          {
            background: iconBackground,
            borderRadius: "13",
            boxShadow: "walletLogo",
            height: "60",
            src: iconUrl,
            width: "60"
          }
        )
      ),
      !connecting ? import_react74.default.createElement(Box, { display: "flex", flexDirection: "column", textAlign: "center" }, import_react74.default.createElement(
        Text,
        {
          as: "h2",
          color: wallet.ready ? "modalText" : "modalTextSecondary",
          size: "13",
          weight: "medium"
        },
        import_react74.default.createElement(Box, { as: "span", position: "relative" }, shortName ?? name, !wallet.ready && " (unsupported)")
      ), wallet.recent && import_react74.default.createElement(Text, { color: "accentColor", size: "12", weight: "medium" }, i18n2.t("connect.recent"))) : null
    )
  );
}
function MobileOptions({ onClose }) {
  var _a;
  const titleId = "rk_connect_title";
  const wallets = useWalletConnectors().filter(
    (wallet) => wallet.isRainbowKitConnector
  );
  const { disclaimer: Disclaimer, learnMoreUrl } = (0, import_react74.useContext)(AppContext);
  let headerLabel = null;
  let walletContent = null;
  let headerBackgroundContrast = false;
  let headerBackButtonLink = null;
  const [walletStep, setWalletStep] = (0, import_react74.useState)(
    "CONNECT"
    /* Connect */
  );
  const { i18n: i18n2 } = (0, import_react74.useContext)(I18nContext);
  const ios = isIOS();
  switch (walletStep) {
    case "CONNECT": {
      headerLabel = i18n2.t("connect.title");
      headerBackgroundContrast = true;
      walletContent = import_react74.default.createElement(Box, null, import_react74.default.createElement(
        Box,
        {
          background: "profileForeground",
          className: scroll,
          display: "flex",
          paddingBottom: "20",
          paddingTop: "6"
        },
        import_react74.default.createElement(Box, { display: "flex", style: { margin: "0 auto" } }, wallets.filter((wallet) => wallet.ready).map((wallet) => {
          return import_react74.default.createElement(Box, { key: wallet.id, paddingX: "20" }, import_react74.default.createElement(Box, { width: "60" }, import_react74.default.createElement(WalletButton, { onClose, wallet })));
        }))
      ), import_react74.default.createElement(
        Box,
        {
          background: "generalBorder",
          height: "1",
          marginBottom: "32",
          marginTop: "-1"
        }
      ), import_react74.default.createElement(
        Box,
        {
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "32",
          paddingX: "32",
          style: { textAlign: "center" }
        },
        import_react74.default.createElement(
          Box,
          {
            display: "flex",
            flexDirection: "column",
            gap: "8",
            textAlign: "center"
          },
          import_react74.default.createElement(Text, { color: "modalText", size: "16", weight: "bold" }, i18n2.t("intro.title")),
          import_react74.default.createElement(Text, { color: "modalTextSecondary", size: "16" }, i18n2.t("intro.description"))
        )
      ), import_react74.default.createElement(Box, { paddingTop: "32", paddingX: "20" }, import_react74.default.createElement(Box, { display: "flex", gap: "14", justifyContent: "center" }, import_react74.default.createElement(
        ActionButton,
        {
          label: i18n2.t("intro.get.label"),
          onClick: () => setWalletStep(
            "GET"
            /* Get */
          ),
          size: "large",
          type: "secondary"
        }
      ), import_react74.default.createElement(
        ActionButton,
        {
          href: learnMoreUrl,
          label: i18n2.t("intro.learn_more.label"),
          size: "large",
          type: "secondary"
        }
      ))), Disclaimer && import_react74.default.createElement(Box, { marginTop: "28", marginX: "32", textAlign: "center" }, import_react74.default.createElement(Disclaimer, { Link: DisclaimerLink, Text: DisclaimerText })));
      break;
    }
    case "GET": {
      headerLabel = i18n2.t("get.title");
      headerBackButtonLink = "CONNECT";
      const mobileWallets = (_a = wallets == null ? void 0 : wallets.filter(
        (wallet) => {
          var _a2, _b, _c;
          return ((_a2 = wallet.downloadUrls) == null ? void 0 : _a2.ios) || ((_b = wallet.downloadUrls) == null ? void 0 : _b.android) || ((_c = wallet.downloadUrls) == null ? void 0 : _c.mobile);
        }
      )) == null ? void 0 : _a.splice(0, 3);
      walletContent = import_react74.default.createElement(Box, null, import_react74.default.createElement(
        Box,
        {
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          height: "full",
          marginBottom: "36",
          marginTop: "5",
          paddingTop: "12",
          width: "full"
        },
        mobileWallets.map((wallet, index2) => {
          const { downloadUrls, iconBackground, iconUrl, name } = wallet;
          if (!(downloadUrls == null ? void 0 : downloadUrls.ios) && !(downloadUrls == null ? void 0 : downloadUrls.android) && !(downloadUrls == null ? void 0 : downloadUrls.mobile)) {
            return null;
          }
          return import_react74.default.createElement(
            Box,
            {
              display: "flex",
              gap: "16",
              key: wallet.id,
              paddingX: "20",
              width: "full"
            },
            import_react74.default.createElement(Box, { style: { minHeight: 48, minWidth: 48 } }, import_react74.default.createElement(
              AsyncImage,
              {
                background: iconBackground,
                borderColor: "generalBorder",
                borderRadius: "10",
                height: "48",
                src: iconUrl,
                width: "48"
              }
            )),
            import_react74.default.createElement(Box, { display: "flex", flexDirection: "column", width: "full" }, import_react74.default.createElement(Box, { alignItems: "center", display: "flex", height: "48" }, import_react74.default.createElement(Box, { width: "full" }, import_react74.default.createElement(Text, { color: "modalText", size: "18", weight: "bold" }, name)), import_react74.default.createElement(
              ActionButton,
              {
                href: (ios ? downloadUrls == null ? void 0 : downloadUrls.ios : downloadUrls == null ? void 0 : downloadUrls.android) || (downloadUrls == null ? void 0 : downloadUrls.mobile),
                label: i18n2.t("get.action.label"),
                size: "small",
                type: "secondary"
              }
            )), index2 < mobileWallets.length - 1 && import_react74.default.createElement(
              Box,
              {
                background: "generalBorderDim",
                height: "1",
                marginY: "10",
                width: "full"
              }
            ))
          );
        })
      ), import_react74.default.createElement(Box, { style: { marginBottom: "42px" } }), import_react74.default.createElement(
        Box,
        {
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "36",
          paddingX: "36",
          style: { textAlign: "center" }
        },
        import_react74.default.createElement(
          Box,
          {
            display: "flex",
            flexDirection: "column",
            gap: "12",
            textAlign: "center"
          },
          import_react74.default.createElement(Text, { color: "modalText", size: "16", weight: "bold" }, i18n2.t("get.looking_for.title")),
          import_react74.default.createElement(Text, { color: "modalTextSecondary", size: "16" }, i18n2.t("get.looking_for.mobile.description"))
        )
      ));
      break;
    }
  }
  return import_react74.default.createElement(Box, { display: "flex", flexDirection: "column", paddingBottom: "36" }, import_react74.default.createElement(
    Box,
    {
      background: headerBackgroundContrast ? "profileForeground" : "modalBackground",
      display: "flex",
      flexDirection: "column",
      paddingBottom: "4",
      paddingTop: "14"
    },
    import_react74.default.createElement(
      Box,
      {
        display: "flex",
        justifyContent: "center",
        paddingBottom: "6",
        paddingX: "20",
        position: "relative"
      },
      headerBackButtonLink && import_react74.default.createElement(
        Box,
        {
          display: "flex",
          position: "absolute",
          style: {
            left: 0,
            marginBottom: -20,
            marginTop: -20
          }
        },
        import_react74.default.createElement(
          Box,
          {
            alignItems: "center",
            as: "button",
            className: touchableStyles({
              active: "shrinkSm",
              hover: "growLg"
            }),
            color: "accentColor",
            display: "flex",
            marginLeft: "4",
            marginTop: "20",
            onClick: () => setWalletStep(headerBackButtonLink),
            padding: "16",
            style: { height: 17, willChange: "transform" },
            transition: "default",
            type: "button"
          },
          import_react74.default.createElement(BackIcon, null)
        )
      ),
      import_react74.default.createElement(Box, { marginTop: "4", textAlign: "center", width: "full" }, import_react74.default.createElement(
        Text,
        {
          as: "h1",
          color: "modalText",
          id: titleId,
          size: "20",
          weight: "bold"
        },
        headerLabel
      )),
      import_react74.default.createElement(
        Box,
        {
          alignItems: "center",
          display: "flex",
          height: "32",
          paddingRight: "14",
          position: "absolute",
          right: "0"
        },
        import_react74.default.createElement(
          Box,
          {
            style: { marginBottom: -20, marginTop: -20 }
          },
          import_react74.default.createElement(CloseButton, { onClose })
        )
      )
    )
  ), import_react74.default.createElement(Box, { display: "flex", flexDirection: "column" }, walletContent));
}
var MobileStatus = ({ onClose }) => {
  const { connector } = (0, import_react75.useContext)(WalletButtonContext);
  const { i18n: i18n2 } = (0, import_react75.useContext)(I18nContext);
  const connectorName = (connector == null ? void 0 : connector.name) || "";
  return import_react75.default.createElement(Box, null, import_react75.default.createElement(
    Box,
    {
      display: "flex",
      paddingBottom: "32",
      justifyContent: "center",
      alignItems: "center",
      background: "profileForeground",
      flexDirection: "column"
    },
    import_react75.default.createElement(
      Box,
      {
        width: "full",
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "18",
        marginRight: "24"
      },
      import_react75.default.createElement(CloseButton, { onClose })
    ),
    import_react75.default.createElement(Box, { width: "60" }, import_react75.default.createElement(WalletButton, { onClose, wallet: connector, connecting: true })),
    import_react75.default.createElement(Box, { marginTop: "20" }, import_react75.default.createElement(
      Text,
      {
        textAlign: "center",
        color: "modalText",
        size: "18",
        weight: "semibold"
      },
      i18n2.t("connect.status.connect_mobile", {
        wallet: connectorName
      })
    )),
    import_react75.default.createElement(Box, { maxWidth: "full", marginTop: "8" }, import_react75.default.createElement(Text, { textAlign: "center", color: "modalText", size: "16", weight: "medium" }, i18n2.t("connect.status.confirm_mobile", {
      wallet: connectorName
    })))
  ));
};
function ConnectOptions({ onClose }) {
  const { connector } = (0, import_react58.useContext)(WalletButtonContext);
  return isMobile() ? connector ? import_react58.default.createElement(MobileStatus, { onClose }) : import_react58.default.createElement(MobileOptions, { onClose }) : import_react58.default.createElement(DesktopOptions, { onClose });
}
function ConnectModal({ onClose, open }) {
  const titleId = "rk_connect_title";
  const connectionStatus = useConnectionStatus();
  const { disconnect } = useDisconnect();
  const { isConnecting } = useAccount();
  const onAuthCancel = import_react57.default.useCallback(() => {
    onClose();
    disconnect();
  }, [onClose, disconnect]);
  const onConnectModalCancel = import_react57.default.useCallback(() => {
    if (isConnecting)
      disconnect();
    onClose();
  }, [onClose, disconnect, isConnecting]);
  if (connectionStatus === "disconnected") {
    return import_react57.default.createElement(Dialog, { onClose: onConnectModalCancel, open, titleId }, import_react57.default.createElement(DialogContent, { bottomSheetOnMobile: true, padding: "0", wide: true }, import_react57.default.createElement(ConnectOptions, { onClose: onConnectModalCancel })));
  }
  if (connectionStatus === "unauthenticated") {
    return import_react57.default.createElement(Dialog, { onClose: onAuthCancel, open, titleId }, import_react57.default.createElement(DialogContent, { bottomSheetOnMobile: true, padding: "0" }, import_react57.default.createElement(SignIn, { onClose: onAuthCancel, onCloseModal: onClose })));
  }
  return null;
}
function useModalStateValue() {
  const [isModalOpen, setModalOpen] = (0, import_react21.useState)(false);
  return {
    closeModal: (0, import_react21.useCallback)(() => setModalOpen(false), []),
    isModalOpen,
    openModal: (0, import_react21.useCallback)(() => setModalOpen(true), [])
  };
}
var ModalContext = (0, import_react21.createContext)({
  accountModalOpen: false,
  chainModalOpen: false,
  connectModalOpen: false,
  isWalletConnectModalOpen: false,
  setIsWalletConnectModalOpen: () => {
  }
});
function ModalProvider({ children }) {
  const {
    closeModal: closeConnectModal,
    isModalOpen: connectModalOpen,
    openModal: openConnectModal
  } = useModalStateValue();
  const {
    closeModal: closeAccountModal,
    isModalOpen: accountModalOpen,
    openModal: openAccountModal
  } = useModalStateValue();
  const {
    closeModal: closeChainModal,
    isModalOpen: chainModalOpen,
    openModal: openChainModal
  } = useModalStateValue();
  const [isWalletConnectModalOpen, setIsWalletConnectModalOpen] = (0, import_react21.useState)(false);
  const connectionStatus = useConnectionStatus();
  const { chainId } = useAccount();
  const { chains } = useConfig();
  const isCurrentChainSupported = chains.some((chain) => chain.id === chainId);
  const closeModals = (0, import_react21.useCallback)(
    ({ keepConnectModalOpen = false } = {}) => {
      if (!keepConnectModalOpen) {
        closeConnectModal();
      }
      closeAccountModal();
      closeChainModal();
    },
    [closeConnectModal, closeAccountModal, closeChainModal]
  );
  const isUnauthenticated = useAuthenticationStatus() === "unauthenticated";
  useAccountEffect({
    onConnect: () => closeModals({ keepConnectModalOpen: isUnauthenticated }),
    onDisconnect: () => closeModals()
  });
  (0, import_react21.useEffect)(() => {
    if (isUnauthenticated)
      closeModals();
  }, [isUnauthenticated, closeModals]);
  return import_react21.default.createElement(
    ModalContext.Provider,
    {
      value: (0, import_react21.useMemo)(
        () => ({
          accountModalOpen,
          chainModalOpen,
          connectModalOpen,
          isWalletConnectModalOpen,
          openAccountModal: isCurrentChainSupported && connectionStatus === "connected" ? openAccountModal : void 0,
          openChainModal: connectionStatus === "connected" ? openChainModal : void 0,
          openConnectModal: connectionStatus === "disconnected" || connectionStatus === "unauthenticated" ? openConnectModal : void 0,
          setIsWalletConnectModalOpen
        }),
        [
          connectionStatus,
          accountModalOpen,
          chainModalOpen,
          connectModalOpen,
          openAccountModal,
          openChainModal,
          openConnectModal,
          isCurrentChainSupported,
          isWalletConnectModalOpen
        ]
      )
    },
    children,
    import_react21.default.createElement(ConnectModal, { onClose: closeConnectModal, open: connectModalOpen }),
    import_react21.default.createElement(AccountModal, { onClose: closeAccountModal, open: accountModalOpen }),
    import_react21.default.createElement(ChainModal, { onClose: closeChainModal, open: chainModalOpen })
  );
}
function useModalState() {
  const { accountModalOpen, chainModalOpen, connectModalOpen } = (0, import_react21.useContext)(ModalContext);
  return {
    accountModalOpen,
    chainModalOpen,
    connectModalOpen
  };
}
function useAccountModal() {
  const { accountModalOpen, openAccountModal } = (0, import_react21.useContext)(ModalContext);
  return { accountModalOpen, openAccountModal };
}
function useChainModal() {
  const { chainModalOpen, openChainModal } = (0, import_react21.useContext)(ModalContext);
  return { chainModalOpen, openChainModal };
}
function useWalletConnectOpenState() {
  const { isWalletConnectModalOpen, setIsWalletConnectModalOpen } = (0, import_react21.useContext)(ModalContext);
  return { isWalletConnectModalOpen, setIsWalletConnectModalOpen };
}
function useConnectModal() {
  const { connectModalOpen, openConnectModal } = (0, import_react21.useContext)(ModalContext);
  const { isWalletConnectModalOpen } = useWalletConnectOpenState();
  return {
    connectModalOpen: connectModalOpen || isWalletConnectModalOpen,
    openConnectModal
  };
}
var noop = () => {
};
function ConnectButtonRenderer({
  children
}) {
  const isMounted = useIsMounted();
  const { address } = useAccount();
  const { chainId } = useAccount();
  const { chains: wagmiChains } = useConfig();
  const isCurrentChainSupported = wagmiChains.some(
    (chain) => chain.id === chainId
  );
  const rainbowkitChainsById = useRainbowKitChainsById();
  const authenticationStatus = useAuthenticationStatus() ?? void 0;
  const rainbowKitChain = chainId ? rainbowkitChainsById[chainId] : void 0;
  const chainName = (rainbowKitChain == null ? void 0 : rainbowKitChain.name) ?? void 0;
  const chainIconUrl = (rainbowKitChain == null ? void 0 : rainbowKitChain.iconUrl) ?? void 0;
  const chainIconBackground = (rainbowKitChain == null ? void 0 : rainbowKitChain.iconBackground) ?? void 0;
  const resolvedChainIconUrl = useAsyncImage(chainIconUrl);
  const showRecentTransactions = (0, import_react17.useContext)(ShowRecentTransactionsContext);
  const hasPendingTransactions = useRecentTransactions().some(({ status }) => status === "pending") && showRecentTransactions;
  const { showBalance } = useShowBalance();
  const computeShouldShowBalance = () => {
    if (typeof showBalance === "boolean") {
      return showBalance;
    }
    if (showBalance) {
      return normalizeResponsiveValue(showBalance)[isMobile() ? "smallScreen" : "largeScreen"];
    }
    return true;
  };
  const shouldShowBalance = computeShouldShowBalance();
  const { balance, ensAvatar, ensName } = useProfile({
    address,
    includeBalance: shouldShowBalance
  });
  const displayBalance = balance ? `${abbreviateETHBalance(Number.parseFloat(balance.formatted))} ${balance.symbol}` : void 0;
  const { openConnectModal } = useConnectModal();
  const { openChainModal } = useChainModal();
  const { openAccountModal } = useAccountModal();
  const { accountModalOpen, chainModalOpen, connectModalOpen } = useModalState();
  return import_react17.default.createElement(import_react17.default.Fragment, null, children({
    account: address ? {
      address,
      balanceDecimals: balance == null ? void 0 : balance.decimals,
      balanceFormatted: balance == null ? void 0 : balance.formatted,
      balanceSymbol: balance == null ? void 0 : balance.symbol,
      displayBalance,
      displayName: ensName ? formatENS(ensName) : formatAddress(address),
      ensAvatar: ensAvatar ?? void 0,
      ensName: ensName ?? void 0,
      hasPendingTransactions
    } : void 0,
    accountModalOpen,
    authenticationStatus,
    chain: chainId ? {
      hasIcon: Boolean(chainIconUrl),
      iconBackground: chainIconBackground,
      iconUrl: resolvedChainIconUrl,
      id: chainId,
      name: chainName,
      unsupported: !isCurrentChainSupported
    } : void 0,
    chainModalOpen,
    connectModalOpen,
    mounted: isMounted(),
    openAccountModal: openAccountModal ?? noop,
    openChainModal: openChainModal ?? noop,
    openConnectModal: openConnectModal ?? noop
  }));
}
ConnectButtonRenderer.displayName = "ConnectButton.Custom";
var defaultProps = {
  accountStatus: "full",
  chainStatus: { largeScreen: "full", smallScreen: "icon" },
  label: "Connect Wallet",
  showBalance: { largeScreen: true, smallScreen: false }
};
function ConnectButton({
  accountStatus = defaultProps.accountStatus,
  chainStatus = defaultProps.chainStatus,
  label = defaultProps.label,
  showBalance = defaultProps.showBalance
}) {
  const chains = useRainbowKitChains();
  const connectionStatus = useConnectionStatus();
  const { setShowBalance } = useShowBalance();
  const [ready, setReady] = (0, import_react4.useState)(false);
  const { i18n: i18n2 } = (0, import_react4.useContext)(I18nContext);
  (0, import_react4.useEffect)(() => {
    setShowBalance(showBalance);
    if (!ready)
      setReady(true);
  }, [showBalance, setShowBalance]);
  return ready ? import_react4.default.createElement(ConnectButtonRenderer, null, ({
    account,
    chain,
    mounted,
    openAccountModal,
    openChainModal,
    openConnectModal
  }) => {
    const ready2 = mounted && connectionStatus !== "loading";
    const unsupportedChain = (chain == null ? void 0 : chain.unsupported) ?? false;
    return import_react4.default.createElement(
      Box,
      {
        display: "flex",
        gap: "12",
        ...!ready2 && {
          "aria-hidden": true,
          style: {
            opacity: 0,
            pointerEvents: "none",
            userSelect: "none"
          }
        }
      },
      ready2 && account && connectionStatus === "connected" ? import_react4.default.createElement(import_react4.default.Fragment, null, chain && (chains.length > 1 || unsupportedChain) && import_react4.default.createElement(
        Box,
        {
          alignItems: "center",
          "aria-label": "Chain Selector",
          as: "button",
          background: unsupportedChain ? "connectButtonBackgroundError" : "connectButtonBackground",
          borderRadius: "connectButton",
          boxShadow: "connectButton",
          className: touchableStyles({
            active: "shrink",
            hover: "grow"
          }),
          color: unsupportedChain ? "connectButtonTextError" : "connectButtonText",
          display: mapResponsiveValue(
            chainStatus,
            (value) => value === "none" ? "none" : "flex"
          ),
          fontFamily: "body",
          fontWeight: "bold",
          gap: "6",
          key: (
            // Force re-mount to prevent CSS transition
            unsupportedChain ? "unsupported" : "supported"
          ),
          onClick: openChainModal,
          paddingX: "10",
          paddingY: "8",
          testId: unsupportedChain ? "wrong-network-button" : "chain-button",
          transition: "default",
          type: "button"
        },
        unsupportedChain ? import_react4.default.createElement(
          Box,
          {
            alignItems: "center",
            display: "flex",
            height: "24",
            paddingX: "4"
          },
          i18n2.t("connect_wallet.wrong_network.label")
        ) : import_react4.default.createElement(Box, { alignItems: "center", display: "flex", gap: "6" }, chain.hasIcon ? import_react4.default.createElement(
          Box,
          {
            display: mapResponsiveValue(
              chainStatus,
              (value) => value === "full" || value === "icon" ? "block" : "none"
            ),
            height: "24",
            width: "24"
          },
          import_react4.default.createElement(
            AsyncImage,
            {
              alt: chain.name ?? "Chain icon",
              background: chain.iconBackground,
              borderRadius: "full",
              height: "24",
              src: chain.iconUrl,
              width: "24"
            }
          )
        ) : null, import_react4.default.createElement(
          Box,
          {
            display: mapResponsiveValue(chainStatus, (value) => {
              if (value === "icon" && !chain.iconUrl) {
                return "block";
              }
              return value === "full" || value === "name" ? "block" : "none";
            })
          },
          chain.name ?? chain.id
        )),
        import_react4.default.createElement(DropdownIcon, null)
      ), !unsupportedChain && import_react4.default.createElement(
        Box,
        {
          alignItems: "center",
          as: "button",
          background: "connectButtonBackground",
          borderRadius: "connectButton",
          boxShadow: "connectButton",
          className: touchableStyles({
            active: "shrink",
            hover: "grow"
          }),
          color: "connectButtonText",
          display: "flex",
          fontFamily: "body",
          fontWeight: "bold",
          onClick: openAccountModal,
          testId: "account-button",
          transition: "default",
          type: "button"
        },
        account.displayBalance && import_react4.default.createElement(
          Box,
          {
            display: mapResponsiveValue(
              showBalance,
              (value) => value ? "block" : "none"
            ),
            padding: "8",
            paddingLeft: "12"
          },
          account.displayBalance
        ),
        import_react4.default.createElement(
          Box,
          {
            background: normalizeResponsiveValue(showBalance)[isMobile() ? "smallScreen" : "largeScreen"] ? "connectButtonInnerBackground" : "connectButtonBackground",
            borderColor: "connectButtonBackground",
            borderRadius: "connectButton",
            borderStyle: "solid",
            borderWidth: "2",
            color: "connectButtonText",
            fontFamily: "body",
            fontWeight: "bold",
            paddingX: "8",
            paddingY: "6",
            transition: "default"
          },
          import_react4.default.createElement(
            Box,
            {
              alignItems: "center",
              display: "flex",
              gap: "6",
              height: "24"
            },
            import_react4.default.createElement(
              Box,
              {
                display: mapResponsiveValue(
                  accountStatus,
                  (value) => value === "full" || value === "avatar" ? "block" : "none"
                )
              },
              import_react4.default.createElement(
                Avatar,
                {
                  address: account.address,
                  imageUrl: account.ensAvatar,
                  loading: account.hasPendingTransactions,
                  size: 24
                }
              )
            ),
            import_react4.default.createElement(Box, { alignItems: "center", display: "flex", gap: "6" }, import_react4.default.createElement(
              Box,
              {
                display: mapResponsiveValue(
                  accountStatus,
                  (value) => value === "full" || value === "address" ? "block" : "none"
                )
              },
              account.displayName
            ), import_react4.default.createElement(DropdownIcon, null))
          )
        )
      )) : import_react4.default.createElement(
        Box,
        {
          as: "button",
          background: "accentColor",
          borderRadius: "connectButton",
          boxShadow: "connectButton",
          className: touchableStyles({
            active: "shrink",
            hover: "grow"
          }),
          color: "accentColorForeground",
          fontFamily: "body",
          fontWeight: "bold",
          height: "40",
          key: "connect",
          onClick: openConnectModal,
          paddingX: "14",
          testId: "connect-button",
          transition: "default",
          type: "button"
        },
        mounted && label === "Connect Wallet" ? i18n2.t("connect_wallet.label") : label
      )
    );
  }) : import_react4.default.createElement(import_react4.default.Fragment, null);
}
ConnectButton.__defaultProps = defaultProps;
ConnectButton.Custom = ConnectButtonRenderer;
var border = "_1y2lnfi0";
var maxWidth = "_1y2lnfi1";
function WalletButtonRenderer({
  // Wallet is the same as `connector.id` which is injected into
  // wagmi connectors
  wallet = "rainbow",
  children
}) {
  const isMounted = useIsMounted();
  const { openConnectModal } = useConnectModal();
  const { connectModalOpen } = useModalState();
  const { connector, setConnector } = (0, import_react77.useContext)(WalletButtonContext);
  const [firstConnector] = useWalletConnectors().filter((wallet2) => wallet2.isRainbowKitConnector).filter((_wallet) => _wallet.id.toLowerCase() === wallet.toLowerCase()).sort((a, b) => a.groupIndex - b.groupIndex);
  if (!firstConnector) {
    throw new Error("Connector not found");
  }
  const connectionStatus = useConnectionStatus();
  const [loading, setLoading] = (0, import_react77.useState)(false);
  const [isError, setIsError] = (0, import_react77.useState)(false);
  const mobile = isMobile();
  (0, import_react77.useEffect)(() => {
    if (!connectModalOpen && connector)
      setConnector(null);
  }, [connectModalOpen, connector, setConnector]);
  const { isConnected, isConnecting } = useAccount();
  useAccountEffect({
    onConnect: () => {
      if (isError)
        setIsError(false);
    },
    onDisconnect: clearLatestWalletId
  });
  const isLastWalletIdConnected = (0, import_react77.useMemo)(() => {
    const lastWalletId = getLatestWalletId();
    if (!lastWalletId || !(firstConnector == null ? void 0 : firstConnector.id)) {
      return false;
    }
    if (!isConnected)
      return false;
    return lastWalletId === (firstConnector == null ? void 0 : firstConnector.id);
  }, [isConnected, firstConnector]);
  const connectWallet = async () => {
    var _a;
    try {
      setLoading(true);
      if (isError)
        setIsError(false);
      await ((_a = firstConnector == null ? void 0 : firstConnector.connect) == null ? void 0 : _a.call(firstConnector));
    } catch {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };
  const isStatusLoading = connectionStatus === "loading";
  const ready = !isConnecting && !!openConnectModal && firstConnector && !isStatusLoading;
  const isNotSupported = !(firstConnector == null ? void 0 : firstConnector.installed) || !(firstConnector == null ? void 0 : firstConnector.ready);
  return import_react77.default.createElement(import_react77.default.Fragment, null, children({
    error: isError,
    loading,
    connected: isLastWalletIdConnected,
    ready,
    mounted: isMounted(),
    connector: firstConnector,
    connect: async () => {
      addLatestWalletId((firstConnector == null ? void 0 : firstConnector.id) || "");
      if (mobile || isNotSupported) {
        openConnectModal == null ? void 0 : openConnectModal();
        setConnector(firstConnector);
        return;
      }
      await connectWallet();
    }
  }));
}
var WalletButton2 = ({ wallet }) => {
  return import_react76.default.createElement(WalletButtonRenderer, { wallet }, ({ ready, connect, connected, mounted, connector, loading }) => {
    const isDisabled = !ready || loading;
    const { i18n: i18n2 } = (0, import_react76.useContext)(I18nContext);
    const connectorName = (connector == null ? void 0 : connector.name) || "";
    if (!mounted)
      return;
    return import_react76.default.createElement(
      Box,
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        disabled: isDisabled,
        pointerEvents: isDisabled ? "none" : "all"
      },
      import_react76.default.createElement(
        Box,
        {
          as: "button",
          borderRadius: "menuButton",
          borderStyle: "solid",
          borderWidth: "1",
          className: [
            maxWidth,
            border,
            touchableStyles({
              active: "shrink",
              hover: "grow"
            })
          ],
          minHeight: "44",
          onClick: connect,
          disabled: !ready || loading,
          padding: "6",
          style: { willChange: "transform" },
          testId: `wallet-button-${(connector == null ? void 0 : connector.id) || ""}`,
          transition: "default",
          width: "full",
          background: "connectButtonBackground"
        },
        import_react76.default.createElement(
          Box,
          {
            color: "modalText",
            fontFamily: "body",
            fontSize: "16",
            fontWeight: "bold",
            transition: "default",
            display: "flex",
            alignItems: "center"
          },
          import_react76.default.createElement(
            Box,
            {
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              gap: "12",
              paddingRight: "6"
            },
            import_react76.default.createElement(Box, null, loading ? import_react76.default.createElement(SpinnerIcon, null) : import_react76.default.createElement(
              AsyncImage,
              {
                background: connector == null ? void 0 : connector.iconBackground,
                borderRadius: "6",
                height: "28",
                src: connector == null ? void 0 : connector.iconUrl,
                width: "28"
              }
            )),
            import_react76.default.createElement(
              Box,
              {
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                color: "modalText"
              },
              import_react76.default.createElement(Box, { testId: `wallet-button-label-${(connector == null ? void 0 : connector.id) || ""}` }, loading ? i18n2.t("connect.status.connecting", {
                wallet: connectorName
              }) : connectorName)
            ),
            connected ? import_react76.default.createElement(
              Box,
              {
                background: "connectionIndicator",
                borderColor: "selectedOptionBorder",
                borderRadius: "full",
                borderStyle: "solid",
                borderWidth: "1",
                height: "8",
                width: "8"
              }
            ) : null
          )
        )
      )
    );
  });
};
WalletButton2.Custom = WalletButtonRenderer;
var computeWalletConnectMetaData = ({
  appName,
  appDescription,
  appUrl,
  appIcon
}) => {
  return {
    name: appName,
    description: appDescription ?? appName,
    url: appUrl ?? (typeof window !== "undefined" ? window.location.href : ""),
    icons: [...appIcon ? [appIcon] : []]
  };
};
function omitUndefinedValues(obj) {
  return Object.fromEntries(
    //@ts-ignore
    Object.entries(obj).filter(([_key, value]) => value !== void 0)
  );
}
function uniqueBy(items, key) {
  const filtered = [];
  for (const item of items) {
    if (!filtered.some((x) => x[key] === item[key])) {
      filtered.push(item);
    }
  }
  return filtered;
}
var connectorsForWallets = (walletList, {
  projectId,
  walletConnectParameters,
  appName,
  appDescription,
  appUrl,
  appIcon
}) => {
  if (!walletList.length) {
    throw new Error("No wallet list was provided");
  }
  for (const { wallets, groupName } of walletList) {
    if (!wallets.length) {
      throw new Error(`No wallets provided for group: ${groupName}`);
    }
  }
  let index2 = -1;
  const connectors = [];
  const visibleWallets = [];
  const potentiallyHiddenWallets = [];
  const walletConnectMetaData = computeWalletConnectMetaData({
    appName,
    appDescription,
    appUrl,
    appIcon
  });
  for (const [groupIndex, { groupName, wallets }] of walletList.entries()) {
    for (const createWallet of wallets) {
      index2++;
      const wallet = createWallet({
        projectId,
        appName,
        appIcon,
        // `option` is being used only for `walletConnectWallet` wallet
        options: {
          metadata: walletConnectMetaData,
          ...walletConnectParameters
        },
        // Every other wallet that supports walletConnect flow and is not
        // `walletConnectWallet` wallet will have `walletConnectParameters` property
        walletConnectParameters: {
          metadata: walletConnectMetaData,
          ...walletConnectParameters
        }
      });
      if ((wallet == null ? void 0 : wallet.iconAccent) && !isHexString(wallet == null ? void 0 : wallet.iconAccent)) {
        throw new Error(
          `Property \`iconAccent\` is not a hex value for wallet: ${wallet.name}`
        );
      }
      const walletListItem = {
        ...wallet,
        groupIndex: groupIndex + 1,
        groupName,
        index: index2
      };
      if (typeof wallet.hidden === "function") {
        potentiallyHiddenWallets.push(walletListItem);
      } else {
        visibleWallets.push(walletListItem);
      }
    }
  }
  const walletListItems = uniqueBy(
    [...visibleWallets, ...potentiallyHiddenWallets],
    "id"
  );
  for (const {
    createConnector: createConnector5,
    groupIndex,
    groupName,
    hidden,
    ...walletMeta
  } of walletListItems) {
    if (typeof hidden === "function") {
      const isHidden = hidden();
      if (isHidden) {
        continue;
      }
    }
    const walletMetaData = (additionalRkParams) => {
      return {
        rkDetails: omitUndefinedValues({
          ...walletMeta,
          groupIndex,
          groupName,
          isRainbowKitConnector: true,
          // These additional params will be used in rainbowkit react tree to
          // merge `walletConnectWallet` and `walletConnect` connector from wagmi with
          // showQrModal: true. This way we can let the user choose if they want to
          // connect via QR code or open the official walletConnect modal instead
          ...additionalRkParams ? additionalRkParams : {}
        })
      };
    };
    const isWalletConnectConnector = walletMeta.id === "walletConnect";
    if (isWalletConnectConnector) {
      connectors.push(
        createConnector5(
          walletMetaData({
            isWalletConnectModalConnector: true,
            showQrModal: true
          })
        )
      );
    }
    const connector = createConnector5(walletMetaData());
    connectors.push(connector);
  }
  return connectors;
};
var walletConnectInstances = /* @__PURE__ */ new Map();
var getOrCreateWalletConnectInstance = ({
  projectId,
  walletConnectParameters,
  rkDetailsShowQrModal
}) => {
  let config = {
    ...walletConnectParameters ? walletConnectParameters : {},
    projectId,
    showQrModal: false
    // Required. Otherwise WalletConnect modal (Web3Modal) will popup during time of connection for a wallet
  };
  if (rkDetailsShowQrModal) {
    config = { ...config, showQrModal: true };
  }
  const serializedConfig = JSON.stringify(config);
  const sharedWalletConnector = walletConnectInstances.get(serializedConfig);
  if (sharedWalletConnector) {
    return sharedWalletConnector;
  }
  const newWalletConnectInstance = walletConnect(config);
  walletConnectInstances.set(serializedConfig, newWalletConnectInstance);
  return newWalletConnectInstance;
};
function createWalletConnectConnector({
  projectId,
  walletDetails,
  walletConnectParameters
}) {
  return createConnector((config) => ({
    ...getOrCreateWalletConnectInstance({
      projectId,
      walletConnectParameters,
      // Used in `connectorsForWallets` to add another
      // walletConnect wallet into rainbowkit with modal popup option
      rkDetailsShowQrModal: walletDetails.rkDetails.showQrModal
    })(config),
    ...walletDetails
  }));
}
function getWalletConnectConnector({
  projectId,
  walletConnectParameters
}) {
  const exampleProjectId = "21fef48091f12692cad574a6f7753643";
  if (!projectId || projectId === "") {
    throw new Error(
      "No projectId found. Every dApp must now provide a WalletConnect Cloud projectId to enable WalletConnect v2 https://www.rainbowkit.com/docs/installation#configure"
    );
  }
  if (projectId === "YOUR_PROJECT_ID") {
    projectId = exampleProjectId;
  }
  return (walletDetails) => createWalletConnectConnector({
    projectId,
    walletDetails,
    walletConnectParameters
  });
}
function getExplicitInjectedProvider(flag) {
  const _window = typeof window !== "undefined" ? window : void 0;
  if (typeof _window === "undefined" || typeof _window.ethereum === "undefined")
    return;
  const providers = _window.ethereum.providers;
  return providers ? providers.find((provider) => provider[flag]) : _window.ethereum[flag] ? _window.ethereum : void 0;
}
function getWindowProviderNamespace(namespace) {
  const providerSearch = (provider, namespace2) => {
    const [property, ...path2] = namespace2.split(".");
    const _provider = provider[property];
    if (_provider) {
      if (path2.length === 0)
        return _provider;
      return providerSearch(_provider, path2.join("."));
    }
  };
  if (typeof window !== "undefined")
    return providerSearch(window, namespace);
}
function hasInjectedProvider({
  flag,
  namespace
}) {
  if (namespace && typeof getWindowProviderNamespace(namespace) !== "undefined")
    return true;
  if (flag && typeof getExplicitInjectedProvider(flag) !== "undefined")
    return true;
  return false;
}
function getInjectedProvider({
  flag,
  namespace
}) {
  var _a;
  const _window = typeof window !== "undefined" ? window : void 0;
  if (typeof _window === "undefined")
    return;
  if (namespace) {
    const windowProvider = getWindowProviderNamespace(namespace);
    if (windowProvider)
      return windowProvider;
  }
  const providers = (_a = _window.ethereum) == null ? void 0 : _a.providers;
  if (flag) {
    const provider = getExplicitInjectedProvider(flag);
    if (provider)
      return provider;
  }
  if (typeof providers !== "undefined" && providers.length > 0)
    return providers[0];
  return _window.ethereum;
}
function createInjectedConnector(provider) {
  return (walletDetails) => {
    const injectedConfig = provider ? {
      target: () => ({
        id: walletDetails.rkDetails.id,
        name: walletDetails.rkDetails.name,
        provider
      })
    } : {};
    return createConnector((config) => ({
      // Spread the injectedConfig object, which may be empty or contain the target function
      ...injected(injectedConfig)(config),
      ...walletDetails
    }));
  };
}
function getInjectedConnector({
  flag,
  namespace,
  target
}) {
  const provider = target ? target : getInjectedProvider({ flag, namespace });
  return createInjectedConnector(provider);
}
var coinbaseWallet2 = ({ appName, appIcon }) => {
  const getUri = (uri) => uri;
  const ios = isIOS();
  return {
    id: "coinbase",
    name: "Coinbase Wallet",
    shortName: "Coinbase",
    rdns: "com.coinbase.wallet",
    iconUrl: async () => (await import("./coinbaseWallet-WWX6LF36-NPVSAHFO.js")).default,
    iconAccent: "#2c5ff6",
    iconBackground: "#2c5ff6",
    // If the coinbase wallet browser extension is not installed, a popup will appear
    // prompting the user to connect or create a wallet via passkey. This means if you either have
    // or don't have the coinbase wallet browser extension installed it'll do some action anyways
    installed: true,
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=org.toshi",
      ios: "https://apps.apple.com/us/app/coinbase-wallet-store-crypto/id1278383455",
      mobile: "https://coinbase.com/wallet/downloads",
      qrCode: "https://coinbase-wallet.onelink.me/q5Sx/fdb9b250",
      chrome: "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
      browserExtension: "https://coinbase.com/wallet"
    },
    ...ios ? {} : {
      qrCode: {
        getUri,
        instructions: {
          learnMoreUrl: "https://coinbase.com/wallet/articles/getting-started-mobile",
          steps: [
            {
              description: "wallet_connectors.coinbase.qr_code.step1.description",
              step: "install",
              title: "wallet_connectors.coinbase.qr_code.step1.title"
            },
            {
              description: "wallet_connectors.coinbase.qr_code.step2.description",
              step: "create",
              title: "wallet_connectors.coinbase.qr_code.step2.title"
            },
            {
              description: "wallet_connectors.coinbase.qr_code.step3.description",
              step: "scan",
              title: "wallet_connectors.coinbase.qr_code.step3.title"
            }
          ]
        }
      },
      extension: {
        instructions: {
          learnMoreUrl: "https://coinbase.com/wallet/articles/getting-started-extension",
          steps: [
            {
              description: "wallet_connectors.coinbase.extension.step1.description",
              step: "install",
              title: "wallet_connectors.coinbase.extension.step1.title"
            },
            {
              description: "wallet_connectors.coinbase.extension.step2.description",
              step: "create",
              title: "wallet_connectors.coinbase.extension.step2.title"
            },
            {
              description: "wallet_connectors.coinbase.extension.step3.description",
              step: "refresh",
              title: "wallet_connectors.coinbase.extension.step3.title"
            }
          ]
        }
      }
    },
    createConnector: (walletDetails) => {
      const connector = coinbaseWallet({
        appName,
        appLogoUrl: appIcon,
        preference: coinbaseWallet2.preference
      });
      return createConnector((config) => ({
        ...connector(config),
        ...walletDetails
      }));
    }
  };
};
function isMetaMask(ethereum) {
  if (!(ethereum == null ? void 0 : ethereum.isMetaMask))
    return false;
  if (ethereum.isBraveWallet && !ethereum._events && !ethereum._state)
    return false;
  if (ethereum.isApexWallet)
    return false;
  if (ethereum.isAvalanche)
    return false;
  if (ethereum.isBackpack)
    return false;
  if (ethereum.isBifrost)
    return false;
  if (ethereum.isBitKeep)
    return false;
  if (ethereum.isBitski)
    return false;
  if (ethereum.isBlockWallet)
    return false;
  if (ethereum.isCoinbaseWallet)
    return false;
  if (ethereum.isDawn)
    return false;
  if (ethereum.isEnkrypt)
    return false;
  if (ethereum.isExodus)
    return false;
  if (ethereum.isFrame)
    return false;
  if (ethereum.isFrontier)
    return false;
  if (ethereum.isGamestop)
    return false;
  if (ethereum.isHyperPay)
    return false;
  if (ethereum.isImToken)
    return false;
  if (ethereum.isKuCoinWallet)
    return false;
  if (ethereum.isMathWallet)
    return false;
  if (ethereum.isNestWallet)
    return false;
  if (ethereum.isOkxWallet || ethereum.isOKExWallet)
    return false;
  if (ethereum.isOneInchIOSWallet || ethereum.isOneInchAndroidWallet)
    return false;
  if (ethereum.isOpera)
    return false;
  if (ethereum.isPhantom)
    return false;
  if (ethereum.isPortal)
    return false;
  if (ethereum.isRabby)
    return false;
  if (ethereum.isRainbow)
    return false;
  if (ethereum.isStatus)
    return false;
  if (ethereum.isTalisman)
    return false;
  if (ethereum.isTally)
    return false;
  if (ethereum.isTokenPocket)
    return false;
  if (ethereum.isTokenary)
    return false;
  if (ethereum.isTrust || ethereum.isTrustWallet)
    return false;
  if (ethereum.isXDEFI)
    return false;
  if (ethereum.isZeal)
    return false;
  if (ethereum.isZerion)
    return false;
  if (ethereum.__seif)
    return false;
  return true;
}
var metaMaskWallet = ({
  projectId,
  walletConnectParameters
}) => {
  var _a, _b;
  const isMetaMaskInjected = hasInjectedProvider({ flag: "isMetaMask" });
  const shouldUseWalletConnect = !isMetaMaskInjected;
  const getUri = (uri) => {
    return isAndroid() ? uri : isIOS() ? (
      // currently broken in MetaMask v6.5.0 https://github.com/MetaMask/metamask-mobile/issues/6457
      `metamask://wc?uri=${encodeURIComponent(uri)}`
    ) : `https://metamask.app.link/wc?uri=${encodeURIComponent(uri)}`;
  };
  return {
    id: "metaMask",
    name: "MetaMask",
    rdns: "io.metamask",
    iconUrl: async () => (await import("./metaMaskWallet-YFHEHW7V-AMVGTRW4.js")).default,
    iconAccent: "#f6851a",
    iconBackground: "#fff",
    installed: !shouldUseWalletConnect ? isMetaMaskInjected : void 0,
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=io.metamask",
      ios: "https://apps.apple.com/us/app/metamask/id1438144202",
      mobile: "https://metamask.io/download",
      qrCode: "https://metamask.io/download",
      chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
      edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm",
      firefox: "https://addons.mozilla.org/firefox/addon/ether-metamask",
      opera: "https://addons.opera.com/extensions/details/metamask-10",
      browserExtension: "https://metamask.io/download"
    },
    mobile: {
      getUri: shouldUseWalletConnect ? getUri : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri,
      instructions: {
        learnMoreUrl: "https://metamask.io/faqs/",
        steps: [
          {
            description: "wallet_connectors.metamask.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.metamask.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.metamask.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.metamask.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.metamask.qr_code.step3.description",
            step: "refresh",
            title: "wallet_connectors.metamask.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    extension: {
      instructions: {
        learnMoreUrl: "https://metamask.io/faqs/",
        steps: [
          {
            description: "wallet_connectors.metamask.extension.step1.description",
            step: "install",
            title: "wallet_connectors.metamask.extension.step1.title"
          },
          {
            description: "wallet_connectors.metamask.extension.step2.description",
            step: "create",
            title: "wallet_connectors.metamask.extension.step2.title"
          },
          {
            description: "wallet_connectors.metamask.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.metamask.extension.step3.title"
          }
        ]
      }
    },
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({
      target: typeof window !== "undefined" ? ((_b = (_a = window.ethereum) == null ? void 0 : _a.providers) == null ? void 0 : _b.find(
        isMetaMask
      )) ?? window.ethereum : void 0
    })
  };
};
var rainbowWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isRainbowInjected = hasInjectedProvider({ flag: "isRainbow" });
  const shouldUseWalletConnect = !isRainbowInjected;
  const getUri = (uri) => {
    return isAndroid() ? uri : isIOS() ? `rainbow://wc?uri=${encodeURIComponent(uri)}&connector=rainbowkit` : `https://rnbwapp.com/wc?uri=${encodeURIComponent(
      uri
    )}&connector=rainbowkit`;
  };
  return {
    id: "rainbow",
    name: "Rainbow",
    rdns: "me.rainbow",
    iconUrl: async () => (await import("./rainbowWallet-2SR6TVBF-GNYXFWDF.js")).default,
    iconBackground: "#0c2f78",
    installed: !shouldUseWalletConnect ? isRainbowInjected : void 0,
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=me.rainbow&referrer=utm_source%3Drainbowkit&utm_source=rainbowkit",
      ios: "https://apps.apple.com/app/apple-store/id1457119021?pt=119997837&ct=rainbowkit&mt=8",
      mobile: "https://rainbow.download?utm_source=rainbowkit",
      qrCode: "https://rainbow.download?utm_source=rainbowkit&utm_medium=qrcode",
      browserExtension: "https://rainbow.me/extension?utm_source=rainbowkit"
    },
    mobile: { getUri: shouldUseWalletConnect ? getUri : void 0 },
    qrCode: shouldUseWalletConnect ? {
      getUri,
      instructions: {
        learnMoreUrl: "https://learn.rainbow.me/connect-to-a-website-or-app?utm_source=rainbowkit&utm_medium=connector&utm_campaign=learnmore",
        steps: [
          {
            description: "wallet_connectors.rainbow.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.rainbow.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.rainbow.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.rainbow.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.rainbow.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.rainbow.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({ flag: "isRainbow" })
  };
};
var safeWallet = () => ({
  id: "safe",
  name: "Safe",
  iconAccent: "#12ff80",
  iconBackground: "#fff",
  iconUrl: async () => (await import("./safeWallet-VUYZPLY4-IH7OBGT6.js")).default,
  installed: (
    // Only allowed in iframe context
    // borrowed from wagmi safe connector
    !(typeof window === "undefined") && (window == null ? void 0 : window.parent) !== window
  ),
  downloadUrls: {
    // We're opting not to provide a download prompt if the application is not
    // already running as a Safe App within the context of the Safe browser,
    // since it's unlikely to be a desired behavior for users.
  },
  createConnector: (walletDetails) => {
    return createConnector((config) => ({
      ...safe()(config),
      ...walletDetails
    }));
  }
});
var walletConnectWallet = ({
  projectId,
  options
}) => {
  const getUri = (uri) => uri;
  return {
    id: "walletConnect",
    name: "WalletConnect",
    installed: void 0,
    iconUrl: async () => (await import("./walletConnectWallet-FNSU4KNU-EI63OBZ2.js")).default,
    iconBackground: "#3b99fc",
    qrCode: { getUri },
    createConnector: getWalletConnectConnector({
      projectId,
      walletConnectParameters: options
    })
  };
};
var createDefaultTransports = (chains) => {
  const transportsObject = chains.reduce((acc, chain) => {
    const key = chain.id;
    acc[key] = http();
    return acc;
  }, {});
  return transportsObject;
};
var getDefaultConfig = ({
  appName,
  appDescription,
  appUrl,
  appIcon,
  wallets,
  projectId,
  ...wagmiParameters
}) => {
  const { transports, chains, ...restWagmiParameters } = wagmiParameters;
  const metadata = computeWalletConnectMetaData({
    appName,
    appDescription,
    appUrl,
    appIcon
  });
  const connectors = connectorsForWallets(
    wallets || [
      {
        groupName: "Popular",
        wallets: [
          safeWallet,
          rainbowWallet,
          coinbaseWallet2,
          metaMaskWallet,
          walletConnectWallet
        ]
      }
    ],
    {
      projectId,
      appName,
      appDescription,
      appUrl,
      appIcon,
      walletConnectParameters: { metadata }
    }
  );
  return createConfig({
    connectors,
    chains,
    transports: transports || createDefaultTransports(chains),
    ...restWagmiParameters
  });
};
function getDefaultWallets(parameters) {
  const wallets = [
    {
      groupName: "Popular",
      wallets: [
        safeWallet,
        rainbowWallet,
        coinbaseWallet2,
        metaMaskWallet,
        walletConnectWallet
      ]
    }
  ];
  if (parameters) {
    return {
      connectors: connectorsForWallets(wallets, parameters),
      wallets
    };
  }
  return {
    wallets
  };
}
function useAddRecentTransaction() {
  const store = useTransactionStore();
  const { address } = useAccount();
  const chainId = useChainId();
  return (0, import_react78.useCallback)(
    (transaction) => {
      if (!address || !chainId) {
        throw new Error("No address or chain ID found");
      }
      store.addTransaction(address, chainId, transaction);
    },
    [store, address, chainId]
  );
}
var __private__ = {
  DesktopOptions,
  dialogContent,
  dialogContentMobile,
  MobileOptions
};
export {
  ConnectButton,
  RainbowKitAuthenticationProvider,
  RainbowKitProvider,
  WalletButton2 as WalletButton,
  __private__,
  connectorsForWallets,
  createAuthenticationAdapter,
  cssObjectFromTheme,
  cssStringFromTheme,
  darkTheme,
  getDefaultConfig,
  getDefaultWallets,
  getWalletConnectConnector,
  lightTheme,
  midnightTheme,
  useAccountModal,
  useAddRecentTransaction,
  useChainModal,
  useConnectModal
};
/*! Bundled license information:

@noble/curves/esm/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/bls.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/tower.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/bls12-381.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/p256.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=@rainbow-me_rainbowkit.js.map
