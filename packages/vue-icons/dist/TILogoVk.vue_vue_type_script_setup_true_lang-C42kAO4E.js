import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TILogoVk",
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
    return (d, t) => (n(), r("svg", {
      class: a(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M484.7 132C488.26 120.72 484.7 112.52 468.95 112.52H416.58C403.37 112.52 397.27 119.7 393.71 127.38C393.71 127.38 366.77 192.98 329.15 235.51C316.95 247.81 311.36 251.91 304.75 251.91C301.19 251.91 296.61 247.81 296.61 236.54V131.47C296.61 118.15 292.55 112 281.36 112H199C190.86 112 185.78 118.15 185.78 124.3C185.78 137.11 204.59 140.19 206.62 176.06V254C206.62 270.91 203.62 274 196.96 274C179.17 274 135.96 207.89 110.04 132.56C105 117.64 99.88 112 86.66 112H33.79C18.54 112 16 119.17 16 126.86C16 140.7 33.79 210.39 98.86 302.63C142.07 365.63 203.58 399.49 258.99 399.49C292.55 399.49 296.61 391.8 296.61 378.99V331.33C296.61 315.96 299.66 313.4 310.34 313.4C317.96 313.4 331.69 317.49 362.7 347.73C398.28 383.6 404.38 400 424.21 400H476.57C491.82 400 498.94 392.31 494.87 377.45C490.3 362.59 473.01 341.07 450.64 315.45C438.44 301.11 420.14 285.22 414.55 277.53C406.93 267.28 408.96 263.18 414.55 253.96C414.04 253.96 478.1 162.74 484.7 131.96",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
