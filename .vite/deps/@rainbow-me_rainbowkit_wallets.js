"use client";
import {
  coinbaseWallet,
  safe,
  walletConnect
} from "./chunk-ZPXQNAER.js";
import {
  createConnector,
  injected
} from "./chunk-GHFML7YB.js";
import "./chunk-7MQHQGKA.js";
import "./chunk-VC3O4U6S.js";
import "./chunk-QQNE7WTD.js";
import "./chunk-LOTR7D5R.js";
import "./chunk-RXI7QRSW.js";
import "./chunk-GJP3LH4P.js";
import "./chunk-OJK6TXMW.js";
import "./chunk-KWZXG76I.js";
import "./chunk-DSWFES7F.js";
import "./chunk-QL5GCBQ7.js";
import "./chunk-ZTBOFYUR.js";
import "./chunk-256EKJAK.js";

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-MBBGZGXF.js
function getExplicitInjectedProvider(flag) {
  const _window = typeof window !== "undefined" ? window : void 0;
  if (typeof _window === "undefined" || typeof _window.ethereum === "undefined")
    return;
  const providers = _window.ethereum.providers;
  return providers ? providers.find((provider) => provider[flag]) : _window.ethereum[flag] ? _window.ethereum : void 0;
}
function getWindowProviderNamespace(namespace) {
  const providerSearch = (provider, namespace2) => {
    const [property, ...path] = namespace2.split(".");
    const _provider = provider[property];
    if (_provider) {
      if (path.length === 0)
        return _provider;
      return providerSearch(_provider, path.join("."));
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

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-UXRQQZ2M.js
var tahoWallet = () => {
  return {
    id: "taho",
    name: "Taho",
    iconBackground: "#d08d57",
    iconUrl: async () => (await import("./tahoWallet-L6KHUNKD-RCM3KQPP.js")).default,
    downloadUrls: {
      chrome: "https://chrome.google.com/webstore/detail/taho/eajafomhmkipbjmfmhebemolkcicgfmd",
      browserExtension: "https://taho.xyz"
    },
    installed: hasInjectedProvider({ namespace: "tally", flag: "isTally" }),
    extension: {
      instructions: {
        learnMoreUrl: "https://tahowallet.notion.site/Taho-Knowledge-Base-4d95ed5439c64d6db3d3d27abf1fdae5",
        steps: [
          {
            description: "wallet_connectors.taho.extension.step1.description",
            step: "install",
            title: "wallet_connectors.taho.extension.step1.title"
          },
          {
            description: "wallet_connectors.taho.extension.step2.description",
            step: "create",
            title: "wallet_connectors.taho.extension.step2.title"
          },
          {
            description: "wallet_connectors.taho.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.taho.extension.step3.title"
          }
        ]
      }
    },
    createConnector: getInjectedConnector({
      namespace: "tally",
      flag: "isTally"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-75A5A7MH.js
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

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-NORADFYE.js
var walletConnectWallet = ({
  projectId,
  options
}) => {
  const getUri = (uri) => uri;
  return {
    id: "walletConnect",
    name: "WalletConnect",
    installed: void 0,
    iconUrl: async () => (await import("./walletConnectWallet-FNSU4KNU-DEO4H6GH.js")).default,
    iconBackground: "#3b99fc",
    qrCode: { getUri },
    createConnector: getWalletConnectConnector({
      projectId,
      walletConnectParameters: options
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-RETKWSKD.js
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

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-EAYRRV5A.js
var valoraWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "valora",
  name: "Valora",
  iconUrl: async () => (await import("./valoraWallet-RX3ONO47-U5OA52WV.js")).default,
  iconBackground: "#FFFFFF",
  downloadUrls: {
    ios: "https://apps.apple.com/app/id1520414263?mt=8",
    android: "https://play.google.com/store/apps/details?id=co.clabs.valora",
    mobile: "https://valora.xyz",
    qrCode: "https://valora.xyz"
  },
  mobile: {
    getUri: (uri) => isAndroid() ? uri : `celo://wallet/wc?uri=${encodeURIComponent(uri)}`
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://valora.xyz/",
      steps: [
        {
          description: "wallet_connectors.valora.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.valora.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.valora.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.valora.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.valora.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.valora.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-26RJNF7V.js
var xdefiWallet = () => {
  return {
    id: "xdefi",
    name: "XDEFI Wallet",
    rdns: "io.xdefi",
    installed: hasInjectedProvider({ namespace: "xfi.ethereum" }),
    iconUrl: async () => (await import("./xdefiWallet-ZA65GDWS-PXPPZ3FV.js")).default,
    iconBackground: "#fff",
    downloadUrls: {
      chrome: "https://chrome.google.com/webstore/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf",
      browserExtension: "https://xdefi.io"
    },
    extension: {
      instructions: {
        learnMoreUrl: "https://xdefi.io/support-categories/xdefi-wallet/",
        steps: [
          {
            description: "wallet_connectors.xdefi.extension.step1.description",
            step: "install",
            title: "wallet_connectors.xdefi.extension.step1.title"
          },
          {
            description: "wallet_connectors.xdefi.extension.step2.description",
            step: "create",
            title: "wallet_connectors.xdefi.extension.step2.title"
          },
          {
            description: "wallet_connectors.xdefi.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.xdefi.extension.step3.title"
          }
        ]
      }
    },
    createConnector: getInjectedConnector({ namespace: "xfi.ethereum" })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-G3G4CAM7.js
var zealWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isZealWalletInjected = hasInjectedProvider({ flag: "isZeal" });
  const shouldUseWalletConnect = !isZealWalletInjected;
  return {
    id: "zeal",
    name: "Zeal",
    rdns: "app.zeal",
    iconUrl: async () => (await import("./zealWallet-URNQ2AWF-HXIGWLGT.js")).default,
    iconBackground: "#fff0",
    iconAccent: "#00FFFF",
    downloadUrls: {
      browserExtension: "https://zeal.app",
      chrome: "https://chromewebstore.google.com/detail/zeal-wallet/heamnjbnflcikcggoiplibfommfbkjpj",
      android: "https://play.google.com/store/apps/details?id=app.zeal.wallet",
      ios: "https://testflight.apple.com/join/MP72Ytw8",
      mobile: "https://zeal.app",
      qrCode: "https://zeal.app"
    },
    mobile: {
      getUri: shouldUseWalletConnect ? (uri) => {
        return `zeal://wc?uri=${encodeURIComponent(uri)}`;
      } : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => uri,
      instructions: {
        learnMoreUrl: "https://zeal.app",
        steps: [
          {
            description: "wallet_connectors.zeal.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.zeal.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.zeal.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.zeal.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.zeal.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.zeal.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    extension: {
      instructions: {
        learnMoreUrl: "https://zeal.app",
        steps: [
          {
            description: "wallet_connectors.zeal.extension.step1.description",
            step: "install",
            title: "wallet_connectors.zeal.extension.step1.title"
          },
          {
            description: "wallet_connectors.zeal.extension.step2.description",
            step: "create",
            title: "wallet_connectors.zeal.extension.step2.title"
          },
          {
            description: "wallet_connectors.zeal.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.zeal.extension.step3.title"
          }
        ]
      }
    },
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({ flag: "isZeal" })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-QI73GAJH.js
var zerionWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isZerionInjected = hasInjectedProvider({
    namespace: "zerionWallet",
    flag: "isZerion"
  });
  const shouldUseWalletConnect = !isZerionInjected;
  const getUri = (uri) => {
    return isIOS() ? `zerion://wc?uri=${encodeURIComponent(uri)}` : uri;
  };
  return {
    id: "zerion",
    name: "Zerion",
    rdns: "io.zerion.wallet",
    iconUrl: async () => (await import("./zerionWallet-CYFHB5PA-TTFTKPPZ.js")).default,
    iconAccent: "#2962ef",
    iconBackground: "#2962ef",
    installed: !shouldUseWalletConnect ? isZerionInjected : void 0,
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=io.zerion.android",
      ios: "https://apps.apple.com/app/apple-store/id1456732565",
      mobile: "https://link.zerion.io/pt3gdRP0njb",
      qrCode: "https://link.zerion.io/pt3gdRP0njb",
      chrome: "https://chrome.google.com/webstore/detail/klghhnkeealcohjjanjjdaeeggmfmlpl",
      browserExtension: "https://zerion.io/extension"
    },
    mobile: {
      getUri: shouldUseWalletConnect ? getUri : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri,
      instructions: {
        learnMoreUrl: "https://zerion.io/blog/announcing-the-zerion-smart-wallet/",
        steps: [
          {
            description: "wallet_connectors.zerion.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.zerion.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.zerion.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.zerion.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.zerion.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.zerion.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    extension: {
      instructions: {
        learnMoreUrl: "https://help.zerion.io/en/",
        steps: [
          {
            description: "wallet_connectors.zerion.extension.step1.description",
            step: "install",
            title: "wallet_connectors.zerion.extension.step1.title"
          },
          {
            description: "wallet_connectors.zerion.extension.step2.description",
            step: "create",
            title: "wallet_connectors.zerion.extension.step2.title"
          },
          {
            description: "wallet_connectors.zerion.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.zerion.extension.step3.title"
          }
        ]
      }
    },
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({
      namespace: "zerionWallet",
      flag: "isZerion"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-TVWG22HX.js
var safepalWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isSafePalWalletInjected = hasInjectedProvider({
    namespace: "safepalProvider",
    flag: "isSafePal"
  });
  const shouldUseWalletConnect = !isSafePalWalletInjected;
  const getUriMobile = (uri) => {
    return `safepalwallet://wc?uri=${encodeURIComponent(uri)}`;
  };
  const getUriQR = async (uri) => {
    return uri;
  };
  const mobileConnector = {
    getUri: shouldUseWalletConnect ? getUriMobile : void 0
  };
  let qrConnector = void 0;
  if (shouldUseWalletConnect) {
    qrConnector = {
      getUri: getUriQR,
      instructions: {
        learnMoreUrl: "https://safepal.com/",
        steps: [
          {
            description: "wallet_connectors.safepal.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.safepal.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.safepal.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.safepal.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.safepal.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.safepal.qr_code.step3.title"
          }
        ]
      }
    };
  }
  const extensionConnector = {
    instructions: {
      learnMoreUrl: "https://www.safepal.com/download?product=2",
      steps: [
        {
          description: "wallet_connectors.safepal.extension.step1.description",
          step: "install",
          title: "wallet_connectors.safepal.extension.step1.title"
        },
        {
          description: "wallet_connectors.safepal.extension.step2.description",
          step: "create",
          title: "wallet_connectors.safepal.extension.step2.title"
        },
        {
          description: "wallet_connectors.safepal.extension.step3.description",
          step: "refresh",
          title: "wallet_connectors.safepal.extension.step3.title"
        }
      ]
    }
  };
  return {
    id: "safepal",
    name: "SafePal Wallet",
    iconUrl: async () => (await import("./safepalWallet-KQJ4OCNH-IREO5RBB.js")).default,
    // Note that we never resolve `installed` to `false` because the
    // SafePal Wallet provider falls back to other connection methods if
    // the injected connector isn't available
    installed: isSafePalWalletInjected,
    iconAccent: "#3375BB",
    iconBackground: "#fff",
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=io.safepal.wallet&referrer=utm_source%3Drainbowkit%26utm_medium%3Ddisplay%26utm_campaign%3Ddownload",
      ios: "https://apps.apple.com/app/apple-store/id1548297139?pt=122504219&ct=rainbowkit&mt=8",
      mobile: "https://www.safepal.com/en/download",
      qrCode: "https://www.safepal.com/en/download",
      chrome: "https://chrome.google.com/webstore/detail/safepal-extension-wallet/lgmpcpglpngdoalbgeoldeajfclnhafa",
      browserExtension: "https://www.safepal.com/download?product=2"
    },
    mobile: mobileConnector,
    ...qrConnector ? qrConnector : {},
    extension: extensionConnector,
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({
      namespace: "safepalProvider",
      flag: "isSafePal"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-Y3E6EZ7J.js
function seifWallet() {
  const injectedProvider = hasInjectedProvider({
    namespace: "__seif"
  });
  return {
    id: "seif",
    name: "Seif",
    installed: !!injectedProvider,
    iconUrl: async () => (await import("./seifWallet-QATOS33A-GLBU5AN6.js")).default,
    iconBackground: "#fff",
    downloadUrls: {
      chrome: "https://chromewebstore.google.com/detail/seif/albakdmmdafeafbehmcpoejenbeojejl"
    },
    createConnector: getInjectedConnector({
      namespace: "__seif"
    }),
    rdns: "com.passkeywallet.seif"
  };
}

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-B4IG5R5M.js
var talismanWallet = () => ({
  id: "talisman",
  name: "Talisman",
  rdns: "xyz.talisman",
  iconUrl: async () => (await import("./talismanWallet-BLXUHONV-5YARMTKW.js")).default,
  iconBackground: "#fff",
  installed: hasInjectedProvider({
    namespace: "talismanEth",
    flag: "isTalisman"
  }),
  downloadUrls: {
    chrome: "https://chrome.google.com/webstore/detail/talisman-polkadot-wallet/fijngjgcjhjmmpcmkeiomlglpeiijkld",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/talisman-wallet-extension/",
    browserExtension: "https://talisman.xyz/download"
  },
  extension: {
    instructions: {
      learnMoreUrl: "https://talisman.xyz/",
      steps: [
        {
          description: "wallet_connectors.talisman.extension.step1.description",
          step: "install",
          title: "wallet_connectors.talisman.extension.step1.title"
        },
        {
          description: "wallet_connectors.talisman.extension.step2.description",
          step: "create",
          title: "wallet_connectors.talisman.extension.step2.title"
        },
        {
          description: "wallet_connectors.talisman.extension.step3.description",
          step: "refresh",
          title: "wallet_connectors.talisman.extension.step3.title"
        }
      ]
    }
  },
  createConnector: getInjectedConnector({
    namespace: "talismanEth",
    flag: "isTalisman"
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-NRET4B3Z.js
var tokenPocketWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isTokenPocketInjected = hasInjectedProvider({ flag: "isTokenPocket" });
  const shouldUseWalletConnect = !isTokenPocketInjected;
  const getUri = (uri) => {
    return isMobile() ? `tpoutside://wc?uri=${encodeURIComponent(uri)}` : uri;
  };
  return {
    id: "tokenPocket",
    name: "TokenPocket",
    rdns: "pro.tokenpocket",
    iconUrl: async () => (await import("./tokenPocketWallet-BVMBOYTC-5IIBUWPU.js")).default,
    iconBackground: "#2980FE",
    installed: !shouldUseWalletConnect ? isTokenPocketInjected : void 0,
    downloadUrls: {
      chrome: "https://chrome.google.com/webstore/detail/tokenpocket/mfgccjchihfkkindfppnaooecgfneiii",
      browserExtension: "https://extension.tokenpocket.pro/",
      android: "https://play.google.com/store/apps/details?id=vip.mytokenpocket",
      ios: "https://apps.apple.com/us/app/tp-global-wallet/id6444625622",
      qrCode: "https://tokenpocket.pro/en/download/app",
      mobile: "https://tokenpocket.pro/en/download/app"
    },
    mobile: {
      getUri: shouldUseWalletConnect ? getUri : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri,
      instructions: {
        learnMoreUrl: "https://help.tokenpocket.pro/en/",
        steps: [
          {
            description: "wallet_connectors.token_pocket.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.token_pocket.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.token_pocket.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.token_pocket.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.token_pocket.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.token_pocket.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    extension: {
      instructions: {
        learnMoreUrl: "https://help.tokenpocket.pro/en/extension-wallet/faq/installation-tutorial",
        steps: [
          {
            description: "wallet_connectors.token_pocket.extension.step1.description",
            step: "install",
            title: "wallet_connectors.token_pocket.extension.step1.title"
          },
          {
            description: "wallet_connectors.token_pocket.extension.step2.description",
            step: "create",
            title: "wallet_connectors.token_pocket.extension.step2.title"
          },
          {
            description: "wallet_connectors.token_pocket.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.token_pocket.extension.step3.title"
          }
        ]
      }
    },
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({ flag: "isTokenPocket" })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-U24COF36.js
function isSafari() {
  return typeof navigator !== "undefined" && typeof navigator.userAgent !== "undefined" && /Version\/([0-9._]+).*Safari/.test(navigator.userAgent);
}
var tokenaryWallet = () => ({
  id: "tokenary",
  name: "Tokenary",
  iconUrl: async () => (await import("./tokenaryWallet-Z2IGVXSA-CLUBJS5H.js")).default,
  iconBackground: "#ffffff",
  installed: hasInjectedProvider({ flag: "isTokenary" }),
  hidden: () => !isSafari(),
  downloadUrls: {
    ios: "https://tokenary.io/get",
    mobile: "https://tokenary.io",
    qrCode: "https://tokenary.io/get",
    safari: "https://tokenary.io/get",
    browserExtension: "https://tokenary.io/get"
  },
  createConnector: getInjectedConnector({ flag: "isTokenary" })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-H6YDHV4E.js
var trustWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isTrustWalletInjected = isMobile() ? hasInjectedProvider({ flag: "isTrust" }) : hasInjectedProvider({ flag: "isTrustWallet" });
  const shouldUseWalletConnect = !isTrustWalletInjected;
  const getUriMobile = (uri) => {
    return `trust://wc?uri=${encodeURIComponent(uri)}`;
  };
  const getUriQR = (uri) => {
    return uri;
  };
  const mobileConnector = {
    getUri: shouldUseWalletConnect ? getUriMobile : void 0
  };
  let qrConnector = void 0;
  if (shouldUseWalletConnect) {
    qrConnector = {
      getUri: getUriQR,
      instructions: {
        learnMoreUrl: "https://trustwallet.com/",
        steps: [
          {
            description: "wallet_connectors.trust.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.trust.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.trust.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.trust.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.trust.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.trust.qr_code.step3.title"
          }
        ]
      }
    };
  }
  const extensionConnector = {
    instructions: {
      learnMoreUrl: "https://trustwallet.com/browser-extension",
      steps: [
        {
          description: "wallet_connectors.trust.extension.step1.description",
          step: "install",
          title: "wallet_connectors.trust.extension.step1.title"
        },
        {
          description: "wallet_connectors.trust.extension.step2.description",
          step: "create",
          title: "wallet_connectors.trust.extension.step2.title"
        },
        {
          description: "wallet_connectors.trust.extension.step3.description",
          step: "refresh",
          title: "wallet_connectors.trust.extension.step3.title"
        }
      ]
    }
  };
  return {
    id: "trust",
    name: "Trust Wallet",
    rdns: "com.trustwallet.app",
    iconUrl: async () => (await import("./trustWallet-E2GVGE4U-HCSSDQG6.js")).default,
    // Note that we never resolve `installed` to `false` because the
    // Trust Wallet provider falls back to other connection methods if
    // the injected connector isn't available
    installed: isTrustWalletInjected || void 0,
    iconAccent: "#3375BB",
    iconBackground: "#fff",
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",
      ios: "https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409",
      mobile: "https://trustwallet.com/download",
      qrCode: "https://trustwallet.com/download",
      chrome: "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph",
      browserExtension: "https://trustwallet.com/browser-extension"
    },
    mobile: mobileConnector,
    qrCode: qrConnector,
    extension: extensionConnector,
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : isMobile() ? getInjectedConnector({ flag: "isTrust" }) : getInjectedConnector({ flag: "isTrustWallet" })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-MO6NJTX6.js
var subWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isSubWalletInjected = hasInjectedProvider({ namespace: "SubWallet" });
  const shouldUseWalletConnect = !isSubWalletInjected;
  const getUriMobile = (uri) => {
    return `subwallet://wc?uri=${encodeURIComponent(uri)}`;
  };
  const getUriQR = (uri) => {
    return uri;
  };
  const mobileConnector = {
    getUri: shouldUseWalletConnect ? getUriMobile : void 0
  };
  let qrConnector = void 0;
  if (shouldUseWalletConnect) {
    qrConnector = {
      getUri: getUriQR,
      instructions: {
        learnMoreUrl: "https://www.subwallet.app/",
        steps: [
          {
            description: "wallet_connectors.subwallet.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.subwallet.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.subwallet.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.subwallet.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.subwallet.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.subwallet.qr_code.step3.title"
          }
        ]
      }
    };
  }
  const extensionConnector = {
    instructions: {
      learnMoreUrl: "https://www.subwallet.app/",
      steps: [
        {
          description: "wallet_connectors.subwallet.extension.step1.description",
          step: "install",
          title: "wallet_connectors.subwallet.extension.step1.title"
        },
        {
          description: "wallet_connectors.subwallet.extension.step2.description",
          step: "create",
          title: "wallet_connectors.subwallet.extension.step2.title"
        },
        {
          description: "wallet_connectors.subwallet.extension.step3.description",
          step: "refresh",
          title: "wallet_connectors.subwallet.extension.step3.title"
        }
      ]
    }
  };
  return {
    id: "subwallet",
    name: "SubWallet",
    rdns: "app.subwallet",
    iconUrl: async () => (await import("./subWallet-LOZELSAO-JDFNCQMX.js")).default,
    iconBackground: "#fff",
    installed: isSubWalletInjected || void 0,
    downloadUrls: {
      browserExtension: "https://www.subwallet.app/download",
      chrome: "https://chrome.google.com/webstore/detail/subwallet-polkadot-wallet/onhogfjeacnfoofkfgppdlbmlmnplgbn",
      firefox: "https://addons.mozilla.org/en-US/firefox/addon/subwallet/",
      edge: "https://chrome.google.com/webstore/detail/subwallet-polkadot-wallet/onhogfjeacnfoofkfgppdlbmlmnplgbn",
      mobile: "https://www.subwallet.app/download",
      android: "https://play.google.com/store/apps/details?id=app.subwallet.mobile",
      ios: "https://apps.apple.com/us/app/subwallet-polkadot-wallet/id1633050285",
      qrCode: "https://www.subwallet.app/download"
    },
    mobile: mobileConnector,
    qrCode: qrConnector,
    extension: extensionConnector,
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({ namespace: "SubWallet" })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-IJBDDPUO.js
var uniswapWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "uniswap",
  name: "Uniswap Wallet",
  iconUrl: async () => (await import("./uniswapWallet-T26M44R7-MBGPOILQ.js")).default,
  iconBackground: "#FFD8EA",
  downloadUrls: {
    ios: "https://apps.apple.com/app/apple-store/id6443944476",
    mobile: "https://wallet.uniswap.org/",
    qrCode: "https://wallet.uniswap.org/"
  },
  mobile: {
    getUri: (uri) => {
      return `uniswap://wc?uri=${encodeURIComponent(uri)}`;
    }
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://wallet.uniswap.org/",
      steps: [
        {
          description: "wallet_connectors.uniswap.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.uniswap.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.uniswap.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.uniswap.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.uniswap.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.uniswap.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-TVPPTHCQ.js
var paraSwapWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "paraswap",
  name: "ParaSwap Wallet",
  iconUrl: async () => (await import("./paraSwapWallet-TMV5MUEF-N2IA4JV6.js")).default,
  iconBackground: "#578CFC",
  downloadUrls: {
    ios: "https://apps.apple.com/us/app/paraswap-multichain-wallet/id1584610690",
    mobile: "https://paraswap.io",
    qrCode: "https://paraswap.io"
  },
  mobile: {
    getUri: (uri) => {
      return `paraswap://wc?uri=${encodeURIComponent(uri)}`;
    }
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://paraswap.io",
      steps: [
        {
          description: "wallet_connectors.paraswap.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.paraswap.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.paraswap.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.paraswap.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.paraswap.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.paraswap.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-DMQ4RXIY.js
var phantomWallet = () => {
  return {
    id: "phantom",
    name: "Phantom",
    rdns: "app.phantom",
    iconUrl: async () => (await import("./phantomWallet-IPGVKCAB-LGLNBLMW.js")).default,
    iconBackground: "#9A8AEE",
    installed: hasInjectedProvider({ namespace: "phantom.ethereum" }),
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=app.phantom",
      ios: "https://apps.apple.com/app/phantom-solana-wallet/1598432977",
      mobile: "https://phantom.app/download",
      qrCode: "https://phantom.app/download",
      chrome: "https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa",
      firefox: "https://addons.mozilla.org/firefox/addon/phantom-app/",
      browserExtension: "https://phantom.app/download"
    },
    extension: {
      instructions: {
        steps: [
          {
            description: "wallet_connectors.phantom.extension.step1.description",
            step: "install",
            title: "wallet_connectors.phantom.extension.step1.title"
          },
          {
            description: "wallet_connectors.phantom.extension.step2.description",
            step: "create",
            title: "wallet_connectors.phantom.extension.step2.title"
          },
          {
            description: "wallet_connectors.phantom.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.phantom.extension.step3.title"
          }
        ],
        learnMoreUrl: "https://help.phantom.app"
      }
    },
    createConnector: getInjectedConnector({
      namespace: "phantom.ethereum"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-M46TIJ36.js
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
    iconUrl: async () => (await import("./rainbowWallet-2SR6TVBF-T5GGP6QN.js")).default,
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

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-3RMYBZQG.js
var rabbyWallet = () => ({
  id: "rabby",
  name: "Rabby Wallet",
  iconUrl: async () => (await import("./rabbyWallet-FLVUU35F-LQUA6IG5.js")).default,
  rdns: "io.rabby",
  iconBackground: "#8697FF",
  installed: hasInjectedProvider({ flag: "isRabby" }),
  downloadUrls: {
    chrome: "https://chrome.google.com/webstore/detail/rabby-wallet/acmacodkjbdgmoleebolmdjonilkdbch",
    browserExtension: "https://rabby.io"
  },
  extension: {
    instructions: {
      learnMoreUrl: "https://rabby.io/",
      steps: [
        {
          description: "wallet_connectors.rabby.extension.step1.description",
          step: "install",
          title: "wallet_connectors.rabby.extension.step1.title"
        },
        {
          description: "wallet_connectors.rabby.extension.step2.description",
          step: "create",
          title: "wallet_connectors.rabby.extension.step2.title"
        },
        {
          description: "wallet_connectors.rabby.extension.step3.description",
          step: "refresh",
          title: "wallet_connectors.rabby.extension.step3.title"
        }
      ]
    }
  },
  createConnector: getInjectedConnector({ flag: "isRabby" })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-OX3PQBV2.js
var ramperWallet = () => {
  const isRamperWalletInjected = hasInjectedProvider({
    namespace: "ramper2.provider"
  });
  return {
    id: "ramper",
    name: "Ramper Wallet",
    iconUrl: async () => (await import("./ramperWallet-AF5AKK2S-HSWWMDP2.js")).default,
    installed: isRamperWalletInjected,
    iconAccent: "#CDA349",
    iconBackground: "#fff",
    downloadUrls: {
      chrome: "https://chromewebstore.google.com/detail/ramper-wallet/nbdhibgjnjpnkajaghbffjbkcgljfgdi",
      browserExtension: "https://www.ramper.xyz/download"
    },
    extension: {
      instructions: {
        learnMoreUrl: "https://www.ramper.xyz",
        steps: [
          {
            description: "wallet_connectors.ramper.extension.step1.description",
            step: "install",
            title: "wallet_connectors.ramper.extension.step1.title"
          },
          {
            description: "wallet_connectors.ramper.extension.step2.description",
            step: "create",
            title: "wallet_connectors.ramper.extension.step2.title"
          },
          {
            description: "wallet_connectors.ramper.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.ramper.extension.step3.title"
          }
        ]
      }
    },
    createConnector: getInjectedConnector({
      namespace: "ramper2.provider"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-NZBSPTO4.js
var roninWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isRoninInjected = hasInjectedProvider({
    namespace: "ronin.provider"
  });
  const shouldUseWalletConnect = !isRoninInjected;
  const getUri = (uri) => {
    return `roninwallet://wc?uri=${encodeURIComponent(uri)}`;
  };
  return {
    id: "ronin",
    name: "Ronin Wallet",
    iconUrl: async () => (await import("./roninWallet-SAB5ESVK-FWCJZN4O.js")).default,
    iconBackground: "#ffffff",
    rdns: "com.roninchain.wallet",
    installed: isRoninInjected || void 0,
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=com.skymavis.genesis",
      ios: "https://apps.apple.com/us/app/ronin-wallet/id1592675001",
      mobile: "https://wallet.roninchain.com",
      chrome: "https://chrome.google.com/webstore/detail/ronin-wallet/fnjhmkhhmkbjkkabndcnnogagogbneec",
      edge: "https://microsoftedge.microsoft.com/addons/detail/ronin-wallet/kjmoohlgokccodicjjfebfomlbljgfhk",
      firefox: "https://addons.mozilla.org/firefox/addon/ronin-wallet",
      browserExtension: "https://wallet.roninchain.com/",
      qrCode: "https://wallet.roninchain.com/"
    },
    mobile: {
      getUri: shouldUseWalletConnect ? getUri : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => uri,
      instructions: {
        learnMoreUrl: "https://wallet.roninchain.com/",
        steps: [
          {
            description: "wallet_connectors.ronin.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.ronin.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.ronin.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.ronin.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.ronin.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.ronin.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    extension: {
      instructions: {
        learnMoreUrl: "https://wallet.roninchain.com/",
        steps: [
          {
            description: "wallet_connectors.ronin.extension.step1.description",
            step: "install",
            title: "wallet_connectors.ronin.extension.step1.title"
          },
          {
            description: "wallet_connectors.ronin.extension.step2.description",
            step: "create",
            title: "wallet_connectors.ronin.extension.step2.title"
          },
          {
            description: "wallet_connectors.ronin.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.ronin.extension.step3.title"
          }
        ]
      }
    },
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({ namespace: "ronin.provider" })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-Z2QCE6O6.js
var safeWallet = () => ({
  id: "safe",
  name: "Safe",
  iconAccent: "#12ff80",
  iconBackground: "#fff",
  iconUrl: async () => (await import("./safeWallet-VUYZPLY4-YODUEWBR.js")).default,
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

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-PHF4VWKP.js
var safeheronWallet = () => ({
  id: "safeheron",
  name: "Safeheron",
  installed: hasInjectedProvider({
    namespace: "safeheron",
    flag: "isSafeheron"
  }),
  iconUrl: async () => (await import("./safeheronWallet-6JG77AKC-QQSWPJST.js")).default,
  iconBackground: "#fff",
  downloadUrls: {
    chrome: "https://chrome.google.com/webstore/detail/safeheron/aiaghdjafpiofpainifbgfgjfpclngoh",
    browserExtension: "https://www.safeheron.com/"
  },
  extension: {
    instructions: {
      learnMoreUrl: "https://www.safeheron.com/",
      steps: [
        {
          description: "wallet_connectors.safeheron.extension.step1.description",
          step: "install",
          title: "wallet_connectors.safeheron.extension.step1.title"
        },
        {
          description: "wallet_connectors.safeheron.extension.step2.description",
          step: "create",
          title: "wallet_connectors.safeheron.extension.step2.title"
        },
        {
          description: "wallet_connectors.safeheron.extension.step3.description",
          step: "refresh",
          title: "wallet_connectors.safeheron.extension.step3.title"
        }
      ]
    }
  },
  createConnector: getInjectedConnector({
    namespace: "safeheron",
    flag: "isSafeheron"
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-SPCUDLKN.js
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
    iconUrl: async () => (await import("./metaMaskWallet-YFHEHW7V-IKQFLK6K.js")).default,
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

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-ZRY6ILYP.js
var mewWallet = () => {
  return {
    id: "mew",
    name: "MEW wallet",
    iconUrl: async () => (await import("./mewWallet-6V4UZOQC-EIDT7MJW.js")).default,
    iconBackground: "#fff",
    installed: hasInjectedProvider({ flag: "isMEWwallet" }),
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=com.myetherwallet.mewwallet&referrer=utm_source%3Drainbow",
      ios: "https://apps.apple.com/app/apple-store/id1464614025?pt=118781877&mt=8&ct=rainbow",
      mobile: "https://mewwallet.com",
      qrCode: "https://mewwallet.com"
    },
    createConnector: getInjectedConnector({ flag: "isMEWwallet" })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-NN4KGG3I.js
var nestWallet = () => ({
  id: "nest",
  name: "Nest",
  rdns: "xyz.nestwallet",
  iconUrl: async () => (await import("./nestWallet-BFZZZYLV-IJ7VRTJN.js")).default,
  iconBackground: "#fff0",
  installed: hasInjectedProvider({ flag: "isNestWallet" }),
  downloadUrls: {
    browserExtension: "https://nestwallet.xyz"
  },
  extension: {
    instructions: {
      learnMoreUrl: "https://nestwallet.xyz",
      steps: [
        {
          description: "wallet_connectors.nestwallet.extension.step1.description",
          step: "install",
          title: "wallet_connectors.nestwallet.extension.step1.title"
        },
        {
          description: "wallet_connectors.nestwallet.extension.step2.description",
          step: "create",
          title: "wallet_connectors.nestwallet.extension.step2.title"
        },
        {
          description: "wallet_connectors.nestwallet.extension.step3.description",
          step: "refresh",
          title: "wallet_connectors.nestwallet.extension.step3.title"
        }
      ]
    }
  },
  createConnector: getInjectedConnector({ flag: "isNestWallet" })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-MM7WJOVQ.js
var oneInchWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "1inch",
  name: "1inch Wallet",
  iconUrl: async () => (await import("./oneInchWallet-D7BQOLOO-UN5YGSEU.js")).default,
  iconBackground: "#fff",
  downloadUrls: {
    android: "https://play.google.com/store/apps/details?id=io.oneinch.android",
    ios: "https://apps.apple.com/us/app/1inch-crypto-defi-wallet/id1546049391",
    mobile: "https://1inch.io/wallet",
    qrCode: "https://1inch.io/wallet"
  },
  mobile: {
    getUri: (uri) => `oneinch://wc?uri=${encodeURIComponent(uri)}`
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://1inch.io/wallet",
      steps: [
        {
          description: "wallet_connectors.1inch.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.1inch.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.1inch.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.1inch.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.1inch.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.1inch.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-6HG5S57Z.js
var okxWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isOKXInjected = hasInjectedProvider({ namespace: "okxwallet" });
  const shouldUseWalletConnect = !isOKXInjected;
  return {
    id: "okx",
    name: "OKX Wallet",
    rdns: "com.okex.wallet",
    iconUrl: async () => (await import("./okxWallet-GJMKZIND-2ZOQHKLG.js")).default,
    iconAccent: "#000",
    iconBackground: "#000",
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=com.okinc.okex.gp",
      ios: "https://itunes.apple.com/app/id1327268470?mt=8",
      mobile: "https://okx.com/download",
      qrCode: "https://okx.com/download",
      chrome: "https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge",
      edge: "https://microsoftedge.microsoft.com/addons/detail/okx-wallet/pbpjkcldjiffchgbbndmhojiacbgflha",
      firefox: "https://addons.mozilla.org/firefox/addon/okexwallet/",
      browserExtension: "https://okx.com/download"
    },
    mobile: {
      getUri: shouldUseWalletConnect ? (uri) => {
        return isAndroid() ? uri : `okex://main/wc?uri=${encodeURIComponent(uri)}`;
      } : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => uri,
      instructions: {
        learnMoreUrl: "https://okx.com/web3/",
        steps: [
          {
            description: "wallet_connectors.okx.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.okx.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.okx.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.okx.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.okx.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.okx.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    extension: {
      instructions: {
        learnMoreUrl: "https://okx.com/web3/",
        steps: [
          {
            description: "wallet_connectors.okx.extension.step1.description",
            step: "install",
            title: "wallet_connectors.okx.extension.step1.title"
          },
          {
            description: "wallet_connectors.okx.extension.step2.description",
            step: "create",
            title: "wallet_connectors.okx.extension.step2.title"
          },
          {
            description: "wallet_connectors.okx.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.okx.extension.step3.title"
          }
        ]
      }
    },
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({ namespace: "okxwallet" })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-DQIBDDJY.js
var omniWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "omni",
  name: "Omni",
  iconUrl: async () => (await import("./omniWallet-DEYUMT4A-O2HAWFEC.js")).default,
  iconBackground: "#000",
  downloadUrls: {
    android: "https://play.google.com/store/apps/details?id=fi.steakwallet.app",
    ios: "https://itunes.apple.com/us/app/id1569375204",
    mobile: "https://omniwallet.app.link",
    qrCode: "https://omniwallet.app.link"
  },
  mobile: {
    getUri: (uri) => {
      return isAndroid() ? uri : `omni://wc?uri=${encodeURIComponent(uri)}`;
    }
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://omni.app/support",
      steps: [
        {
          description: "wallet_connectors.omni.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.omni.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.omni.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.omni.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.omni.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.omni.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-JV5UBG3F.js
var oktoWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "Okto",
  name: "Okto",
  iconUrl: async () => (await import("./oktoWallet-GJFOPPEA-DDZAGJW2.js")).default,
  iconBackground: "#fff",
  downloadUrls: {
    android: "https://play.google.com/store/apps/details?id=im.okto.contractwalletclient",
    ios: "https://apps.apple.com/in/app/okto-wallet/id6450688229",
    mobile: "https://okto.tech/",
    qrCode: "https://okto.tech/"
  },
  mobile: {
    getUri: (uri) => {
      return isAndroid() ? uri : `okto://wc?uri=${encodeURIComponent(uri)}`;
    }
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://okto.tech/",
      steps: [
        {
          description: "wallet_connectors.okto.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.okto.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.okto.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.okto.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.okto.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.okto.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-6UGYPEQE.js
var oneKeyWallet = () => {
  return {
    id: "onekey",
    name: "OneKey",
    rdns: "so.onekey.app.wallet",
    iconAccent: "#00B812",
    iconBackground: "#fff",
    iconUrl: async () => (await import("./oneKeyWallet-4MM7G2SZ-W75J6BPN.js")).default,
    installed: hasInjectedProvider({ namespace: "$onekey.ethereum" }),
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=so.onekey.app.wallet",
      browserExtension: "https://www.onekey.so/download/",
      chrome: "https://chrome.google.com/webstore/detail/onekey/jnmbobjmhlngoefaiojfljckilhhlhcj",
      edge: "https://microsoftedge.microsoft.com/addons/detail/onekey/obffkkagpmohennipjokmpllocnlndac",
      ios: "https://apps.apple.com/us/app/onekey-open-source-wallet/id1609559473",
      mobile: "https://www.onekey.so/download/",
      qrCode: "https://www.onekey.so/download/"
    },
    extension: {
      instructions: {
        learnMoreUrl: "https://help.onekey.so/hc/en-us/categories/360000170236",
        steps: [
          {
            description: "wallet_connectors.one_key.extension.step1.description",
            step: "install",
            title: "wallet_connectors.one_key.extension.step1.title"
          },
          {
            description: "wallet_connectors.one_key.extension.step2.description",
            step: "create",
            title: "wallet_connectors.one_key.extension.step2.title"
          },
          {
            description: "wallet_connectors.one_key.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.one_key.extension.step3.title"
          }
        ]
      }
    },
    createConnector: getInjectedConnector({
      namespace: "$onekey.ethereum"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-VH6HOOLO.js
var frontierWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isFrontierInjected = hasInjectedProvider({
    namespace: "frontier.ethereum",
    flag: "isFrontier"
  });
  const shouldUseWalletConnect = !isFrontierInjected;
  return {
    id: "frontier",
    name: "Frontier Wallet",
    rdns: "xyz.frontier.wallet",
    installed: isFrontierInjected,
    iconUrl: async () => (await import("./frontierWallet-HNIG7QYQ-CF4MGOJJ.js")).default,
    iconBackground: "#CC703C",
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=com.frontierwallet",
      ios: "https://apps.apple.com/us/app/frontier-crypto-defi-wallet/id1482380988",
      qrCode: "https://www.frontier.xyz/download",
      chrome: "https://chrome.google.com/webstore/detail/frontier-wallet/kppfdiipphfccemcignhifpjkapfbihd",
      browserExtension: "https://www.frontier.xyz/download"
    },
    mobile: {
      getUri: shouldUseWalletConnect ? (uri) => {
        return isAndroid() ? `frontier://wc?uri=${encodeURIComponent(uri)}` : uri;
      } : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => {
        return isAndroid() ? `frontier://wc?uri=${encodeURIComponent(uri)}` : uri;
      },
      instructions: {
        learnMoreUrl: "https://help.frontier.xyz/en/",
        steps: [
          {
            description: "wallet_connectors.im_token.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.im_token.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.im_token.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.im_token.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.im_token.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.im_token.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    extension: {
      instructions: {
        learnMoreUrl: "https://help.frontier.xyz/en/articles/6967236-setting-up-frontier-on-your-device",
        steps: [
          {
            description: "wallet_connectors.frontier.extension.step1.description",
            step: "install",
            title: "wallet_connectors.frontier.extension.step1.title"
          },
          {
            description: "wallet_connectors.frontier.extension.step2.description",
            step: "create",
            title: "wallet_connectors.frontier.extension.step2.title"
          },
          {
            description: "wallet_connectors.frontier.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.frontier.extension.step3.title"
          }
        ]
      }
    },
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({ projectId, walletConnectParameters }) : getInjectedConnector({
      namespace: "frontier.ethereum",
      flag: "isFrontier"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-SN2M2YG2.js
function isIoPayMobile() {
  return typeof navigator !== "undefined" && typeof navigator.userAgent !== "undefined" && ((navigator == null ? void 0 : navigator.userAgent.includes("IoPayAndroid")) || (navigator == null ? void 0 : navigator.userAgent.includes("IoPayiOs")));
}
var iopayWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "iopay",
  name: "ioPay Wallet",
  iconUrl: async () => (await import("./iopayWallet-IJHJ7NYT-VB3OJDWZ.js")).default,
  iconBackground: "#fff",
  downloadUrls: {
    android: "https://play.google.com/store/apps/details?id=io.iotex.iopay.gp&pli=1",
    ios: "https://apps.apple.com/us/app/iopay-multichain-crypto-wallet/id1478086371",
    qrCode: "https://iopay.me/",
    browserExtension: "https://iopay.me/"
  },
  mobile: {
    getUri: (uri) => {
      return isAndroid() ? uri : `iopay://wc?uri=${encodeURIComponent(uri)}`;
    }
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://iopay.me/",
      steps: [
        {
          description: "wallet_connectors.iopay.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.iopay.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.iopay.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.iopay.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.iopay.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.iopay.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: isIoPayMobile() ? getInjectedConnector({}) : getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-VEKTH66I.js
var kaiaWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isKaiaWalletInjected = hasInjectedProvider({
    namespace: "klaytn"
  });
  const shouldUseWalletConnect = !isKaiaWalletInjected;
  const getUri = (uri) => {
    return `kaikas://walletconnect?uri=${encodeURIComponent(uri)}`;
  };
  return {
    id: "kaia",
    name: "Kaia Wallet",
    iconUrl: async () => (await import("./kaiaWallet-5K6WZ3AH-Y4R4T6KO.js")).default,
    installed: isKaiaWalletInjected || void 0,
    iconBackground: "#fff",
    downloadUrls: {
      chrome: "https://chromewebstore.google.com/detail/kaia-wallet/jblndlipeogpafnldhgmapagcccfchpi",
      browserExtension: "https://app.kaiawallet.io",
      qrCode: "https://app.kaiawallet.io",
      ios: "https://apps.apple.com/us/app/kaia-wallet/id6502896387",
      android: "https://play.google.com/store/apps/details?id=io.klutch.wallet",
      mobile: "https://app.kaiawallet.io"
    },
    mobile: { getUri: shouldUseWalletConnect ? getUri : void 0 },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => uri,
      instructions: {
        learnMoreUrl: "https://kaiawallet.io",
        steps: [
          {
            description: "wallet_connectors.kaia.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.kaia.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.kaia.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.kaia.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.kaia.qr_code.step3.description",
            step: "refresh",
            title: "wallet_connectors.kaia.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    extension: {
      instructions: {
        learnMoreUrl: "https://kaiawallet.io",
        steps: [
          {
            description: "wallet_connectors.kaia.extension.step1.description",
            step: "install",
            title: "wallet_connectors.kaia.extension.step1.title"
          },
          {
            description: "wallet_connectors.kaia.extension.step2.description",
            step: "create",
            title: "wallet_connectors.kaia.extension.step2.title"
          },
          {
            description: "wallet_connectors.kaia.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.kaia.extension.step3.title"
          }
        ]
      }
    },
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({
      namespace: "klaytn"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-NKVTQ5YX.js
var krakenWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "kraken",
  name: "Kraken Wallet",
  iconUrl: async () => (await import("./krakenWallet-DAOXUKWO-APDZGOJA.js")).default,
  iconBackground: "#FFD8EA",
  downloadUrls: {
    ios: "https://apps.apple.com/us/app/kraken-wallet/id1626327149",
    mobile: "https://kraken.com/wallet",
    qrCode: "https://kraken.com/wallet"
  },
  mobile: {
    getUri: (uri) => {
      return `krakenwallet://wc?uri=${encodeURIComponent(uri)}`;
    }
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://kraken.com/wallet",
      steps: [
        {
          description: "wallet_connectors.kraken.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.kraken.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.kraken.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.kraken.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.kraken.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.kraken.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-LU5H45IX.js
var ledgerWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "ledger",
  iconBackground: "#000",
  iconAccent: "#000",
  name: "Ledger",
  iconUrl: async () => (await import("./ledgerWallet-KZKJ5Q2S-6WKV3BQR.js")).default,
  downloadUrls: {
    android: "https://play.google.com/store/apps/details?id=com.ledger.live",
    ios: "https://apps.apple.com/us/app/ledger-live-web3-wallet/id1361671700",
    mobile: "https://www.ledger.com/ledger-live",
    qrCode: "https://r354.adj.st/?adj_t=t2esmlk",
    windows: "https://www.ledger.com/ledger-live/download",
    macos: "https://www.ledger.com/ledger-live/download",
    linux: "https://www.ledger.com/ledger-live/download",
    desktop: "https://www.ledger.com/ledger-live"
  },
  mobile: {
    getUri: (uri) => {
      return isAndroid() ? uri : `ledgerlive://wc?uri=${encodeURIComponent(uri)}`;
    }
  },
  desktop: {
    getUri: (uri) => {
      return `ledgerlive://wc?uri=${encodeURIComponent(uri)}`;
    },
    instructions: {
      learnMoreUrl: "https://support.ledger.com/hc/en-us/articles/4404389503889-Getting-started-with-Ledger-Live",
      steps: [
        {
          description: "wallet_connectors.ledger.desktop.step1.description",
          step: "install",
          title: "wallet_connectors.ledger.desktop.step1.title"
        },
        {
          description: "wallet_connectors.ledger.desktop.step2.description",
          step: "create",
          title: "wallet_connectors.ledger.desktop.step2.title"
        },
        {
          description: "wallet_connectors.ledger.desktop.step3.description",
          step: "connect",
          title: "wallet_connectors.ledger.desktop.step3.title"
        }
      ]
    }
  },
  qrCode: {
    getUri: (uri) => {
      return `ledgerlive://wc?uri=${encodeURIComponent(uri)}`;
    },
    instructions: {
      learnMoreUrl: "https://support.ledger.com/hc/en-us/articles/4404389503889-Getting-started-with-Ledger-Live",
      steps: [
        {
          description: "wallet_connectors.ledger.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.ledger.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.ledger.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.ledger.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.ledger.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.ledger.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-C7LM226G.js
var kaikasWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isKaikasWalletInjected = hasInjectedProvider({
    namespace: "klaytn"
  });
  const shouldUseWalletConnect = !isKaikasWalletInjected;
  const getUri = (uri) => {
    return `kaikas://walletconnect?uri=${encodeURIComponent(uri)}`;
  };
  return {
    id: "kaikas",
    name: "Kaikas Wallet",
    iconUrl: async () => (await import("./kaikasWallet-F6Z6IPWN-PRBHSNVR.js")).default,
    installed: isKaikasWalletInjected || void 0,
    iconBackground: "#fff",
    downloadUrls: {
      chrome: "https://chromewebstore.google.com/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi",
      browserExtension: "https://app.kaikas.io",
      qrCode: "https://app.kaikas.io",
      ios: "https://apps.apple.com/us/app/kaikas-mobile-crypto-wallet/id1626107061",
      android: "https://play.google.com/store/apps/details?id=io.klutch.wallet",
      mobile: "https://app.kaikas.io"
    },
    mobile: { getUri: shouldUseWalletConnect ? getUri : void 0 },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => uri,
      instructions: {
        learnMoreUrl: "https://kaikas.io",
        steps: [
          {
            description: "wallet_connectors.kaikas.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.kaikas.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.kaikas.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.kaikas.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.kaikas.qr_code.step3.description",
            step: "refresh",
            title: "wallet_connectors.kaikas.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    extension: {
      instructions: {
        learnMoreUrl: "https://kaikas.io",
        steps: [
          {
            description: "wallet_connectors.kaikas.extension.step1.description",
            step: "install",
            title: "wallet_connectors.kaikas.extension.step1.title"
          },
          {
            description: "wallet_connectors.kaikas.extension.step2.description",
            step: "create",
            title: "wallet_connectors.kaikas.extension.step2.title"
          },
          {
            description: "wallet_connectors.kaikas.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.kaikas.extension.step3.title"
          }
        ]
      }
    },
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({
      namespace: "klaytn"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-HLE6FSGO.js
var kresusWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "kresus-wallet",
  name: "Kresus Wallet",
  iconUrl: async () => (await import("./kresusWallet-AUJWLAOF-4FFCOJEA.js")).default,
  iconBackground: "#fff",
  downloadUrls: {
    android: "https://play.google.com/store/apps/details?id=com.kresus.superapp",
    ios: "https://apps.apple.com/us/app/kresus-crypto-nft-superapp/id6444355152",
    qrCode: "https://kresusconnect.kresus.com/download"
  },
  mobile: {
    getUri: (uri) => `com.kresus.superapp://wc?uri=${encodeURIComponent(uri)}`
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://kresus.com/",
      steps: [
        {
          description: "wallet_connectors.kresus.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.kresus.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.kresus.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.kresus.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.kresus.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.kresus.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-WB7EEKPS.js
var magicEdenWallet = () => {
  return {
    id: "magicEden",
    name: "Magic Eden Wallet",
    rdns: "io.magiceden.wallet",
    iconUrl: async () => (await import("./magicEden-PKT2ZXEQ-X3O6DBDG.js")).default,
    iconBackground: "#36114D",
    installed: hasInjectedProvider({ namespace: "magicEden.ethereum" }),
    downloadUrls: {
      chrome: "https://chromewebstore.google.com/detail/magic-eden-wallet/mkpegjkblkkefacfnmkajcjmabijhclg",
      browserExtension: "https://wallet.magiceden.io/"
    },
    extension: {
      instructions: {
        steps: [
          {
            description: "wallet_connectors.magicEden.extension.step1.description",
            step: "install",
            title: "wallet_connectors.magicEden.extension.step1.title"
          },
          {
            description: "wallet_connectors.magicEden.extension.step2.description",
            step: "create",
            title: "wallet_connectors.magicEden.extension.step2.title"
          },
          {
            description: "wallet_connectors.magicEden.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.magicEden.extension.step3.title"
          }
        ],
        learnMoreUrl: "https://wallet.magiceden.io/support"
      }
    },
    createConnector: getInjectedConnector({
      namespace: "magicEden.ethereum"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-DVXPOWEC.js
var desigWallet = () => {
  return {
    id: "desig",
    name: "Desig Wallet",
    iconUrl: async () => (await import("./desigWallet-WJMSF3PS-DH3HSMFR.js")).default,
    iconBackground: "#ffffff",
    installed: hasInjectedProvider({ namespace: "desig.ethereum" }),
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=io.desig.app",
      ios: "https://apps.apple.com/app/desig-wallet/id6450106028",
      qrCode: "https://desig.io",
      mobile: "https://desig.io",
      browserExtension: "https://chrome.google.com/webstore/detail/desig-wallet/panpgppehdchfphcigocleabcmcgfoca"
    },
    extension: {
      instructions: {
        steps: [
          {
            description: "wallet_connectors.desig.extension.step1.description",
            step: "install",
            title: "wallet_connectors.desig.extension.step1.title"
          },
          {
            description: "wallet_connectors.desig.extension.step2.description",
            step: "create",
            title: "wallet_connectors.desig.extension.step2.title"
          },
          {
            description: "wallet_connectors.desig.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.desig.extension.step3.title"
          }
        ],
        learnMoreUrl: "https://desig.io"
      }
    },
    createConnector: getInjectedConnector({
      namespace: "desig.ethereum"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-5QHPQU7J.js
var enkryptWallet = () => {
  return {
    id: "enkrypt",
    name: "Enkrypt Wallet",
    rdns: "com.enkrypt",
    installed: hasInjectedProvider({ namespace: "enkrypt.providers.ethereum" }),
    iconUrl: async () => (await import("./enkryptWallet-FR4QCDFK-WJJ736C6.js")).default,
    iconBackground: "#FFFFFF",
    downloadUrls: {
      qrCode: "https://www.enkrypt.com",
      chrome: "https://chrome.google.com/webstore/detail/enkrypt-ethereum-polkadot/kkpllkodjeloidieedojogacfhpaihoh",
      browserExtension: "https://www.enkrypt.com/",
      edge: "https://microsoftedge.microsoft.com/addons/detail/enkrypt-ethereum-polkad/gfenajajnjjmmdojhdjmnngomkhlnfjl",
      firefox: "https://addons.mozilla.org/en-US/firefox/addon/enkrypt/",
      opera: "https://addons.opera.com/en/extensions/details/enkrypt/",
      safari: "https://apps.apple.com/app/enkrypt-web3-wallet/id1640164309"
    },
    extension: {
      instructions: {
        learnMoreUrl: "https://blog.enkrypt.com/what-is-a-web3-wallet/",
        steps: [
          {
            description: "wallet_connectors.enkrypt.extension.step1.description",
            step: "install",
            title: "wallet_connectors.enkrypt.extension.step1.title"
          },
          {
            description: "wallet_connectors.enkrypt.extension.step2.description",
            step: "create",
            title: "wallet_connectors.enkrypt.extension.step2.title"
          },
          {
            description: "wallet_connectors.enkrypt.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.enkrypt.extension.step3.title"
          }
        ]
      }
    },
    createConnector: getInjectedConnector({
      namespace: "enkrypt.providers.ethereum"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-N5HP6GMB.js
var foxWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isFoxInjected = hasInjectedProvider({
    namespace: "foxwallet.ethereum"
  });
  const shouldUseWalletConnect = !isFoxInjected;
  return {
    id: "foxwallet",
    name: "FoxWallet",
    iconUrl: async () => (await import("./foxWallet-5ESSNXJV-FPOE7OYA.js")).default,
    iconBackground: "#fff",
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=com.foxwallet.play",
      ios: "https://apps.apple.com/app/foxwallet-crypto-web3/id1590983231",
      qrCode: "https://foxwallet.com/download"
    },
    mobile: {
      getUri: shouldUseWalletConnect ? (uri) => {
        return `foxwallet://wc?uri=${encodeURIComponent(uri)}`;
      } : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => uri,
      instructions: {
        learnMoreUrl: "https://foxwallet.com",
        steps: [
          {
            description: "wallet_connectors.fox.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.fox.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.fox.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.fox.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.fox.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.fox.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({ namespace: "foxwallet.ethereum" })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-MQTXA63X.js
var dawnWallet = () => ({
  id: "dawn",
  name: "Dawn",
  iconUrl: async () => (await import("./dawnWallet-ONVAA3S4-5RO24AKU.js")).default,
  iconBackground: "#000000",
  installed: hasInjectedProvider({ flag: "isDawn" }),
  hidden: () => !isIOS(),
  downloadUrls: {
    ios: "https://apps.apple.com/us/app/dawn-ethereum-wallet/id1673143782",
    mobile: "https://dawnwallet.xyz"
  },
  createConnector: getInjectedConnector({ flag: "isDawn" })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-I2OABB4R.js
var gateWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isGateInjected = hasInjectedProvider({ namespace: "gatewallet" });
  const shouldUseWalletConnect = !isGateInjected;
  return {
    id: "gate",
    name: "Gate Wallet",
    rdns: "io.gate.wallet",
    iconUrl: async () => (await import("./gateWallet-ZVEZILRP-KCQ3SVP5.js")).default,
    iconAccent: "#fff",
    iconBackground: "#fff",
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=com.gateio.gateio",
      ios: "https://apps.apple.com/us/app/gate-io-buy-bitcoin-crypto/id1294998195",
      mobile: "https://www.gate.io/mobileapp",
      qrCode: "https://www.gate.io/web3",
      chrome: "https://chromewebstore.google.com/detail/gate-wallet/cpmkedoipcpimgecpmgpldfpohjplkpp",
      browserExtension: "https://www.gate.io/web3"
    },
    mobile: {
      getUri: shouldUseWalletConnect ? (uri) => {
        return isAndroid() ? uri : `gtweb3wallet://wc?uri=${encodeURIComponent(uri)}`;
      } : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => uri,
      instructions: {
        learnMoreUrl: "https://www.gate.io/learn",
        steps: [
          {
            description: "wallet_connectors.gate.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.gate.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.gate.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.gate.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.gate.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.gate.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    extension: {
      instructions: {
        learnMoreUrl: "https://www.gate.io/learn",
        steps: [
          {
            description: "wallet_connectors.gate.extension.step1.description",
            step: "install",
            title: "wallet_connectors.gate.extension.step1.title"
          },
          {
            description: "wallet_connectors.gate.extension.step2.description",
            step: "create",
            title: "wallet_connectors.gate.extension.step2.title"
          },
          {
            description: "wallet_connectors.gate.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.gate.extension.step3.title"
          }
        ]
      }
    },
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({ namespace: "gatewallet" })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-N7VCHAMM.js
var imTokenWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "imToken",
  name: "imToken",
  iconUrl: async () => (await import("./imTokenWallet-N2MYFADO-TXHED7DN.js")).default,
  iconBackground: "#098de6",
  downloadUrls: {
    android: "https://play.google.com/store/apps/details?id=im.token.app",
    ios: "https://itunes.apple.com/us/app/imtoken2/id1384798940",
    mobile: "https://token.im/download",
    qrCode: "https://token.im/download"
  },
  mobile: {
    getUri: (uri) => {
      return `imtokenv2://wc?uri=${encodeURIComponent(uri)}`;
    }
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: typeof window !== "undefined" && window.navigator.language.includes("zh") ? "https://support.token.im/hc/zh-cn/categories/360000925393" : "https://support.token.im/hc/en-us/categories/360000925393",
      steps: [
        {
          description: "wallet_connectors.im_token.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.im_token.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.im_token.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.im_token.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.im_token.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.im_token.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-CP45RGL4.js
var frameWallet = () => ({
  id: "frame",
  name: "Frame",
  rdns: "sh.frame",
  installed: hasInjectedProvider({ flag: "isFrame" }),
  iconUrl: async () => (await import("./frameWallet-FDBUY4AA-PCTXFE67.js")).default,
  iconBackground: "#121C20",
  downloadUrls: {
    browserExtension: "https://frame.sh/"
  },
  extension: {
    instructions: {
      learnMoreUrl: "https://docs.frame.sh/docs/Getting%20Started/Installation/",
      steps: [
        {
          description: "wallet_connectors.frame.extension.step1.description",
          step: "install",
          title: "wallet_connectors.frame.extension.step1.title"
        },
        {
          description: "wallet_connectors.frame.extension.step2.description",
          step: "create",
          title: "wallet_connectors.frame.extension.step2.title"
        },
        {
          description: "wallet_connectors.frame.extension.step3.description",
          step: "refresh",
          title: "wallet_connectors.frame.extension.step3.title"
        }
      ]
    }
  },
  createConnector: getInjectedConnector({ flag: "isFrame" })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-GDGRUMZB.js
var injectedWallet = () => ({
  id: "injected",
  name: "Browser Wallet",
  iconUrl: async () => (await import("./injectedWallet-H7LYKTQS-LWUU7VD4.js")).default,
  iconBackground: "#fff",
  createConnector: getInjectedConnector({})
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-EYN3CVFM.js
var braveWallet = () => ({
  id: "brave",
  name: "Brave Wallet",
  rdns: "com.brave.wallet",
  iconUrl: async () => (await import("./braveWallet-6QAF4GDN-GAA6LWS2.js")).default,
  iconBackground: "#fff",
  installed: hasInjectedProvider({ flag: "isBraveWallet" }),
  downloadUrls: {
    // We're opting not to provide a download prompt if Brave isn't the current
    // browser since it's unlikely to be a desired behavior for users. It's
    // more of a convenience for users who are already using Brave rather than
    // an explicit wallet choice for users coming from other browsers.
  },
  createConnector: getInjectedConnector({ flag: "isBraveWallet" })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-7BGUIGFF.js
var clvWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isCLVInjected = hasInjectedProvider({ namespace: "clover" });
  const shouldUseWalletConnect = !isCLVInjected;
  return {
    id: "clv",
    name: "CLV",
    iconUrl: async () => (await import("./clvWallet-ZIMSRU5J-GH6FRPAM.js")).default,
    iconBackground: "#fff",
    iconAccent: "#BDFDE2",
    installed: isCLVInjected,
    downloadUrls: {
      chrome: "https://chrome.google.com/webstore/detail/clv-wallet/nhnkbkgjikgcigadomkphalanndcapjk",
      ios: "https://apps.apple.com/app/clover-wallet/id1570072858",
      mobile: "https://apps.apple.com/app/clover-wallet/id1570072858",
      qrCode: "https://clv.org/"
    },
    extension: {
      instructions: {
        learnMoreUrl: "https://clv.org/",
        steps: [
          {
            description: "wallet_connectors.clv.extension.step1.description",
            step: "install",
            title: "wallet_connectors.clv.extension.step1.title"
          },
          {
            description: "wallet_connectors.clv.extension.step2.description",
            step: "create",
            title: "wallet_connectors.clv.extension.step2.title"
          },
          {
            description: "wallet_connectors.clv.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.clv.extension.step3.title"
          }
        ]
      }
    },
    mobile: {
      getUri: shouldUseWalletConnect ? (uri) => uri : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => uri,
      instructions: {
        learnMoreUrl: "https://clv.org/",
        steps: [
          {
            description: "wallet_connectors.clv.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.clv.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.clv.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.clv.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.clv.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.clv.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({ namespace: "clover" })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-QKLTWJJC.js
var coin98Wallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isCoin98WalletInjected = hasInjectedProvider({
    namespace: "coin98.provider",
    flag: "isCoin98"
  });
  const shouldUseWalletConnect = !isCoin98WalletInjected;
  return {
    id: "coin98",
    name: "Coin98 Wallet",
    iconUrl: async () => (await import("./coin98Wallet-RFXRNVWP-5NF3EFHC.js")).default,
    installed: isCoin98WalletInjected,
    iconAccent: "#CDA349",
    iconBackground: "#fff",
    rdns: "coin98.com",
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=coin98.crypto.finance.media",
      ios: "https://apps.apple.com/vn/app/coin98-super-app/id1561969966",
      mobile: "https://coin98.com/wallet",
      qrCode: "https://coin98.com/wallet",
      chrome: "https://chrome.google.com/webstore/detail/coin98-wallet/aeachknmefphepccionboohckonoeemg",
      browserExtension: "https://coin98.com/wallet"
    },
    mobile: {
      getUri: shouldUseWalletConnect ? (uri) => uri : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => uri,
      instructions: {
        learnMoreUrl: "https://coin98.com/wallet",
        steps: [
          {
            description: "wallet_connectors.coin98.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.coin98.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.coin98.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.coin98.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.coin98.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.coin98.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    extension: {
      instructions: {
        learnMoreUrl: "https://coin98.com/wallet",
        steps: [
          {
            description: "wallet_connectors.coin98.extension.step1.description",
            step: "install",
            title: "wallet_connectors.coin98.extension.step1.title"
          },
          {
            description: "wallet_connectors.coin98.extension.step2.description",
            step: "create",
            title: "wallet_connectors.coin98.extension.step2.title"
          },
          {
            description: "wallet_connectors.coin98.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.coin98.extension.step3.title"
          }
        ]
      }
    },
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({
      namespace: "coin98Wallet",
      flag: "isCoin98"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-PRP3F6QA.js
var bloomWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "bloom",
  name: "Bloom Wallet",
  iconBackground: "#000",
  iconAccent: "#000",
  iconUrl: async () => (await import("./bloomWallet-MXLAOWS6-G5MDFT4M.js")).default,
  downloadUrls: {
    desktop: "https://bloomwallet.io/"
  },
  desktop: {
    getUri: (uri) => `bloom://wallet-connect/wc?uri=${encodeURIComponent(uri)}`,
    instructions: {
      learnMoreUrl: "https://bloomwallet.io/",
      steps: [
        {
          description: "wallet_connectors.bloom.desktop.step1.description",
          step: "install",
          title: "wallet_connectors.bloom.desktop.step1.title"
        },
        {
          description: "wallet_connectors.bloom.desktop.step2.description",
          step: "create",
          title: "wallet_connectors.bloom.desktop.step2.title"
        },
        {
          description: "wallet_connectors.bloom.desktop.step3.description",
          step: "refresh",
          title: "wallet_connectors.bloom.desktop.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-7BZ3GLXD.js
var bybitWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isBybitInjected = hasInjectedProvider({
    namespace: "bybitWallet"
  });
  const shouldUseWalletConnect = !isBybitInjected;
  const getUri = (uri) => {
    return `bybitapp://open/route?targetUrl=by://web3/walletconnect/wc?uri=${encodeURIComponent(
      uri
    )}`;
  };
  return {
    id: "bybit",
    name: "Bybit Wallet",
    rdns: "com.bybit",
    iconUrl: async () => (await import("./bybitWallet-GR4PFINZ-RP5Y23CG.js")).default,
    installed: !shouldUseWalletConnect ? isBybitInjected : void 0,
    iconBackground: "#000000",
    downloadUrls: {
      chrome: "https://chromewebstore.google.com/detail/bybit-wallet/pdliaogehgdbhbnmkklieghmmjkpigpa",
      browserExtension: "https://www.bybit.com/en/web3",
      android: "https://play.google.com/store/apps/details?id=com.bybit.app",
      ios: "https://apps.apple.com/us/app/bybit-buy-trade-crypto/id1488296980",
      mobile: "https://www.bybit.com/en/web3",
      qrCode: "https://www.bybit.com/en/web3"
    },
    mobile: {
      getUri: shouldUseWalletConnect ? getUri : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => uri,
      instructions: {
        learnMoreUrl: "https://www.bybit.com/en/web3",
        steps: [
          {
            description: "wallet_connectors.bybit.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.bybit.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.bybit.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.bybit.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.bybit.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.bybit.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    extension: {
      instructions: {
        learnMoreUrl: "https://www.bybit.com/en/web3",
        steps: [
          {
            description: "wallet_connectors.bybit.extension.step1.description",
            step: "install",
            title: "wallet_connectors.bybit.extension.step1.title"
          },
          {
            description: "wallet_connectors.bybit.extension.step2.description",
            step: "create",
            title: "wallet_connectors.bybit.extension.step2.title"
          },
          {
            description: "wallet_connectors.bybit.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.bybit.extension.step3.title"
          }
        ]
      }
    },
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({
      namespace: "bybitWallet"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-3OO564GS.js
var compassWallet = () => {
  const isCompassInjected = hasInjectedProvider({ namespace: "compassEvm" });
  return {
    id: "compass",
    name: "Compass Wallet",
    installed: isCompassInjected,
    rdns: "io.leapwallet.CompassWallet",
    iconUrl: async () => (await import("./compassWallet-3LBTWCKI-KNBMEOX4.js")).default,
    iconBackground: "#fff",
    downloadUrls: {
      chrome: "https://chromewebstore.google.com/detail/compass-wallet-for-sei/anokgmphncpekkhclmingpimjmcooifb",
      browserExtension: "https://compasswallet.io/download"
    },
    extension: {
      instructions: {
        learnMoreUrl: "https://compasswallet.io/download",
        steps: [
          {
            description: "wallet_connectors.compass.extension.step1.description",
            step: "install",
            title: "wallet_connectors.compass.extension.step1.title"
          },
          {
            description: "wallet_connectors.compass.extension.step2.description",
            step: "create",
            title: "wallet_connectors.compass.extension.step2.title"
          },
          {
            description: "wallet_connectors.compass.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.compass.extension.step3.title"
          }
        ]
      }
    },
    createConnector: getInjectedConnector({ namespace: "compassEvm" })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-PNEDRY6O.js
var coinbaseWallet2 = ({ appName, appIcon }) => {
  const getUri = (uri) => uri;
  const ios = isIOS();
  return {
    id: "coinbase",
    name: "Coinbase Wallet",
    shortName: "Coinbase",
    rdns: "com.coinbase.wallet",
    iconUrl: async () => (await import("./coinbaseWallet-WWX6LF36-KDJSGSJX.js")).default,
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

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-R2YHWDE3.js
var coreWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isCoreInjected = hasInjectedProvider({
    namespace: "avalanche",
    flag: "isAvalanche"
  });
  const shouldUseWalletConnect = !isCoreInjected;
  return {
    id: "core",
    name: "Core",
    rdns: "app.core.extension",
    iconUrl: async () => (await import("./coreWallet-52SXITOT-A6EN4S6G.js")).default,
    iconBackground: "#1A1A1C",
    installed: !shouldUseWalletConnect ? isCoreInjected : void 0,
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=com.avaxwallet",
      ios: "https://apps.apple.com/us/app/core-wallet/id6443685999",
      mobile: "https://core.app/?downloadCoreMobile=1",
      qrCode: "https://core.app/?downloadCoreMobile=1",
      chrome: "https://chrome.google.com/webstore/detail/core-crypto-wallet-nft-ex/agoakfejjabomempkjlepdflaleeobhb",
      browserExtension: "https://extension.core.app/"
    },
    mobile: {
      getUri: shouldUseWalletConnect ? (uri) => uri : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => uri,
      instructions: {
        learnMoreUrl: "https://support.avax.network/en/articles/6115608-core-mobile-how-to-add-the-core-mobile-to-my-phone",
        steps: [
          {
            description: "wallet_connectors.core.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.core.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.core.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.core.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.core.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.core.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    extension: {
      instructions: {
        learnMoreUrl: "https://extension.core.app/",
        steps: [
          {
            description: "wallet_connectors.core.extension.step1.description",
            step: "install",
            title: "wallet_connectors.core.extension.step1.title"
          },
          {
            description: "wallet_connectors.core.extension.step2.description",
            step: "create",
            title: "wallet_connectors.core.extension.step2.title"
          },
          {
            description: "wallet_connectors.core.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.core.extension.step3.title"
          }
        ]
      }
    },
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({
      namespace: "avalanche",
      flag: "isAvalanche"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-DCT72KYP.js
var argentWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "argent",
  name: "Argent",
  iconUrl: async () => (await import("./argentWallet-M6SBG4CU-7Q3OTEGY.js")).default,
  iconBackground: "#fff",
  downloadUrls: {
    android: "https://play.google.com/store/apps/details?id=im.argent.contractwalletclient",
    ios: "https://apps.apple.com/us/app/argent/id1358741926",
    mobile: "https://argent.xyz/download-argent",
    qrCode: "https://argent.link/app"
  },
  mobile: {
    getUri: (uri) => {
      return isAndroid() ? uri : `argent://app/wc?uri=${encodeURIComponent(uri)}`;
    }
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://argent.xyz/learn/what-is-a-crypto-wallet/",
      steps: [
        {
          description: "wallet_connectors.argent.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.argent.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.argent.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.argent.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.argent.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.argent.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-UREKKLQ4.js
var bestWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "bestWallet",
  name: "Best Wallet",
  iconUrl: async () => (await import("./bestWallet-XRIABRUE-AVVB2ENZ.js")).default,
  iconBackground: "#5961FF",
  downloadUrls: {
    android: "https://play.google.com/store/apps/details?id=com.bestwallet.mobile",
    ios: "https://apps.apple.com/in/app/best-wallet-buy-sell-crypto/id6451312105",
    mobile: "https://bestwallet.com/",
    qrCode: "https://bestwallet.com/"
  },
  mobile: {
    getUri: (uri) => {
      return `bw://connect/wc?uri=${encodeURIComponent(uri)}`;
    }
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://bestwallet.com/",
      steps: [
        {
          description: "wallet_connectors.best.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.best.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.best.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.best.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.best.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.best.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-DZB25PZ7.js
var bitskiWallet = () => ({
  id: "bitski",
  name: "Bitski",
  installed: hasInjectedProvider({ flag: "isBitski" }),
  iconUrl: async () => (await import("./bitskiWallet-X5NWL5CE-STSGGDQC.js")).default,
  iconBackground: "#fff",
  downloadUrls: {
    chrome: "https://chrome.google.com/webstore/detail/bitski/feejiigddaafeojfddjjlmfkabimkell",
    browserExtension: "https://bitski.com"
  },
  extension: {
    instructions: {
      learnMoreUrl: "https://bitski.zendesk.com/hc/articles/12803972818836-How-to-install-the-Bitski-browser-extension",
      steps: [
        {
          description: "wallet_connectors.bitski.extension.step1.description",
          step: "install",
          title: "wallet_connectors.bitski.extension.step1.title"
        },
        {
          description: "wallet_connectors.bitski.extension.step2.description",
          step: "create",
          title: "wallet_connectors.bitski.extension.step2.title"
        },
        {
          description: "wallet_connectors.bitski.extension.step3.description",
          step: "refresh",
          title: "wallet_connectors.bitski.extension.step3.title"
        }
      ]
    }
  },
  createConnector: getInjectedConnector({ flag: "isBitski" })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-ERV3V7KP.js
var binanceWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "binance",
  name: "Binance Wallet",
  iconUrl: async () => (await import("./binanceWallet-BCWLBY3Q-RFZZ4UUD.js")).default,
  iconBackground: "#000000",
  downloadUrls: {
    android: "https://play.google.com/store/apps/details?id=com.binance.dev",
    ios: "https://apps.apple.com/us/app/id1436799971",
    mobile: "https://www.binance.com/en/download",
    qrCode: "https://www.binance.com/en/web3wallet"
  },
  mobile: {
    getUri: (uri) => {
      return isAndroid() ? uri : `bnc://app.binance.com/cedefi/wc?uri=${encodeURIComponent(uri)}`;
    }
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://www.binance.com/en/web3wallet",
      steps: [
        {
          description: "wallet_connectors.binance.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.binance.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.binance.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.binance.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.binance.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.binance.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-POBEEQNM.js
var bifrostWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isBifrostInjected = hasInjectedProvider({ flag: "isBifrost" });
  const shouldUseWalletConnect = !isBifrostInjected;
  const getUri = (uri) => {
    return isAndroid() ? uri : `https://app.bifrostwallet.com/wc?uri=${encodeURIComponent(uri)}`;
  };
  return {
    id: "bifrostWallet",
    name: "Bifrost Wallet",
    iconUrl: async () => (await import("./bifrostWallet-ORF3DABG-UXVTX432.js")).default,
    iconBackground: "#fff",
    installed: !shouldUseWalletConnect ? isBifrostInjected : void 0,
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=com.bifrostwallet.app",
      ios: "https://apps.apple.com/us/app/bifrost-wallet/id1577198351",
      qrCode: "https://bifrostwallet.com/#download-app"
    },
    mobile: {
      getUri: shouldUseWalletConnect ? getUri : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => uri,
      instructions: {
        learnMoreUrl: "https://support.bifrostwallet.com/en/articles/6886814-how-to-use-walletconnect",
        steps: [
          {
            description: "wallet_connectors.bifrost.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.bifrost.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.bifrost.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.bifrost.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.bifrost.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.bifrost.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({
      flag: "isBifrost"
    })
  };
};

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-U5AMMBNF.js
var bitverseWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "bitverse",
  name: "Bitverse Wallet",
  iconUrl: async () => (await import("./bitverseWallet-6SGDFATJ-OTWLYQWW.js")).default,
  iconBackground: "#171728",
  downloadUrls: {
    android: "https://play.google.com/store/apps/details?id=com.bitverse.app&pli=1",
    ios: "https://apps.apple.com/us/app/bitverse-discover-web3-wealth/id1645515614",
    qrCode: "https://www.bitverse.zone/download"
  },
  mobile: {
    getUri: (uri) => `bitverseapp://open/wallet/wc?uri=${encodeURIComponent(uri)}`
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://www.bitverse.zone",
      steps: [
        {
          description: "wallet_connectors.bitverse.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.bitverse.qr_code.step1.title"
        },
        {
          description: "wallet_connectors.bitverse.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.bitverse.qr_code.step2.title"
        },
        {
          description: "wallet_connectors.bitverse.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.bitverse.qr_code.step3.title"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

// node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/chunk-33MCYYGI.js
var bitgetWallet = ({
  projectId,
  walletConnectParameters
}) => {
  const isBitKeepInjected = hasInjectedProvider({
    namespace: "bitkeep.ethereum",
    flag: "isBitKeep"
  });
  const shouldUseWalletConnect = !isBitKeepInjected;
  return {
    id: "bitget",
    name: "Bitget Wallet",
    rdns: "com.bitget.web3",
    iconUrl: async () => (await import("./bitgetWallet-CLYTW54T-PMW7LJZX.js")).default,
    iconAccent: "#f6851a",
    iconBackground: "#fff",
    installed: !shouldUseWalletConnect ? isBitKeepInjected : void 0,
    downloadUrls: {
      android: "https://web3.bitget.com/en/wallet-download?type=0",
      ios: "https://apps.apple.com/app/bitkeep/id1395301115",
      mobile: "https://web3.bitget.com/en/wallet-download?type=2",
      qrCode: "https://web3.bitget.com/en/wallet-download",
      chrome: "https://chrome.google.com/webstore/detail/bitkeep-crypto-nft-wallet/jiidiaalihmmhddjgbnbgdfflelocpak",
      browserExtension: "https://web3.bitget.com/en/wallet-download"
    },
    extension: {
      instructions: {
        learnMoreUrl: "https://web3.bitget.com/en/academy",
        steps: [
          {
            description: "wallet_connectors.bitget.extension.step1.description",
            step: "install",
            title: "wallet_connectors.bitget.extension.step1.title"
          },
          {
            description: "wallet_connectors.bitget.extension.step2.description",
            step: "create",
            title: "wallet_connectors.bitget.extension.step2.title"
          },
          {
            description: "wallet_connectors.bitget.extension.step3.description",
            step: "refresh",
            title: "wallet_connectors.bitget.extension.step3.description"
          }
        ]
      }
    },
    mobile: {
      getUri: shouldUseWalletConnect ? (uri) => {
        return isAndroid() ? uri : `bitkeep://wc?uri=${encodeURIComponent(uri)}`;
      } : void 0
    },
    qrCode: shouldUseWalletConnect ? {
      getUri: (uri) => uri,
      instructions: {
        learnMoreUrl: "https://web3.bitget.com/en/academy",
        steps: [
          {
            description: "wallet_connectors.bitget.qr_code.step1.description",
            step: "install",
            title: "wallet_connectors.bitget.qr_code.step1.title"
          },
          {
            description: "wallet_connectors.bitget.qr_code.step2.description",
            step: "create",
            title: "wallet_connectors.bitget.qr_code.step2.title"
          },
          {
            description: "wallet_connectors.bitget.qr_code.step3.description",
            step: "scan",
            title: "wallet_connectors.bitget.qr_code.step3.title"
          }
        ]
      }
    } : void 0,
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({
      namespace: "bitkeep.ethereum",
      flag: "isBitKeep"
    })
  };
};
export {
  argentWallet,
  bestWallet,
  bifrostWallet,
  binanceWallet,
  bitgetWallet,
  bitskiWallet,
  bitverseWallet,
  bloomWallet,
  braveWallet,
  bybitWallet,
  clvWallet,
  coin98Wallet,
  coinbaseWallet2 as coinbaseWallet,
  compassWallet,
  coreWallet,
  dawnWallet,
  desigWallet,
  enkryptWallet,
  foxWallet,
  frameWallet,
  frontierWallet,
  gateWallet,
  imTokenWallet,
  injectedWallet,
  iopayWallet,
  kaiaWallet,
  kaikasWallet,
  krakenWallet,
  kresusWallet,
  ledgerWallet,
  magicEdenWallet,
  metaMaskWallet,
  mewWallet,
  nestWallet,
  oktoWallet,
  okxWallet,
  omniWallet,
  oneInchWallet,
  oneKeyWallet,
  paraSwapWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  ramperWallet,
  roninWallet,
  safeWallet,
  safeheronWallet,
  safepalWallet,
  seifWallet,
  subWallet,
  tahoWallet,
  talismanWallet,
  tokenPocketWallet,
  tokenaryWallet,
  trustWallet,
  uniswapWallet,
  valoraWallet,
  walletConnectWallet,
  xdefiWallet,
  zealWallet,
  zerionWallet
};
//# sourceMappingURL=@rainbow-me_rainbowkit_wallets.js.map
