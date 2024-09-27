import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as d, createElementVNode as c } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TICodeFill",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (r(), s("svg", {
      class: a(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M146.18 383.8C150.001 387.156 154.915 389.005 160 389C168.752 389.003 176.589 383.579 179.667 375.386C182.745 367.193 180.419 357.95 173.83 352.19L63.8904 256L173.84 159.81C182.569 152.172 183.453 138.904 175.815 130.175C168.177 121.446 154.909 120.562 146.18 128.2L18.1804 240.2C13.6259 244.188 11.0137 249.947 11.0137 256C11.0137 262.053 13.6259 267.812 18.1804 271.8L146.18 383.8ZM332.326 375.391C335.406 383.584 343.247 389.008 352 389C357.09 389.009 362.008 387.16 365.83 383.8L493.83 271.8C498.385 267.812 500.997 262.053 500.997 256C500.997 249.947 498.385 244.188 493.83 240.2L365.83 128.2C357.102 120.562 343.833 121.446 336.195 130.175C328.557 138.904 329.442 152.172 338.17 159.81L448.11 256L338.16 352.19C331.57 357.952 329.245 367.197 332.326 375.391Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as default
};