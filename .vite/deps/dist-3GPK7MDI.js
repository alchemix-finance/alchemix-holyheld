import {
  ne,
  p,
  se,
  y
} from "./chunk-33EQSHMH.js";
import "./chunk-256EKJAK.js";

// node_modules/@walletconnect/modal/dist/index.js
var d = class {
  constructor(e) {
    this.openModal = se.open, this.closeModal = se.close, this.subscribeModal = se.subscribe, this.setTheme = ne.setThemeConfig, ne.setThemeConfig(e), y.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./dist-PXD3NLGF.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), p.setIsUiLoaded(true);
    }
  }
};
export {
  d as WalletConnectModal
};
//# sourceMappingURL=dist-3GPK7MDI.js.map
