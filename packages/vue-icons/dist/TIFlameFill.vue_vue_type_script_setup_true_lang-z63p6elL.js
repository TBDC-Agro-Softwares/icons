import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIFlameFill",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(e) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-16", "is-14", "is-26", "is-28", "is-36"].indexOf(e) > -1;
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (n(), r("svg", {
      class: a(i.value),
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
        d: "M394.23 197.56C381.841 164.669 363.777 134.207 340.86 107.56C301.2 61.65 249.05 32 208 32C203.053 32.0037 198.387 34.2951 195.359 38.2068C192.332 42.1184 191.283 47.2106 192.52 52C206.39 105 177.64 149.07 147.21 195.72C122 234.36 96 274.27 96 320C96 408.22 167.78 480 256 480C344.22 480 416 408.22 416 320C416 276.7 408.68 235.51 394.23 197.56ZM288.33 418.69C278 429.69 265.05 432 256 432C246.95 432 234 429.69 223.67 418.69C213.34 407.69 208 390.24 208 368C208 342.86 216.82 323.72 225.34 305.22C230.29 294.48 235.34 283.55 238.34 271.85C238.987 269.266 240.878 267.173 243.384 266.268C245.889 265.363 248.681 265.765 250.83 267.34C259.976 274.416 268.109 282.714 275 292C293.17 316 304 344.42 304 368C304 390.24 298.58 407.77 288.33 418.69Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
