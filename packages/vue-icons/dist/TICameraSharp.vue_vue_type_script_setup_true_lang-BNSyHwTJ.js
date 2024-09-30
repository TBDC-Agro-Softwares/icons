import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TICameraSharp",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(e) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-14", "is-26", "is-28", "is-36"].indexOf(e) > -1;
      }
    },
    type: {
      type: String,
      default: void 0
    },
    title: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: void 0
    },
    clickable: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (a(), n("svg", {
      class: s(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M456 144H373C370 144 366.28 142.06 363.38 139L336.1 96.2C325 80 320 80 302 80H210C192 80 186 80 175.93 96.21L148.62 139C146.4 141.42 143.28 144 140 144V128C140 123.582 136.418 120 132 120H92C87.5817 120 84 123.582 84 128V144H56C42.7452 144 32 154.745 32 168V408C32 421.255 42.7452 432 56 432H456C469.255 432 480 421.255 480 408V168C480 154.745 469.255 144 456 144ZM260.51 367.9C220.904 369.76 184.229 347.08 168.2 310.815C152.171 274.549 160.087 232.16 188.123 204.123C216.16 176.087 258.549 168.171 294.815 184.2C331.08 200.229 353.76 236.904 351.9 276.51C349.525 325.966 309.966 365.525 260.51 367.9ZM320 272C320 307.346 291.346 336 256 336C220.654 336 192 307.346 192 272C192 236.654 220.654 208 256 208C291.346 208 320 236.654 320 272Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
