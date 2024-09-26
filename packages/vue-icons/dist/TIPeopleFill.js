import { defineComponent as o, computed as C, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIPeopleFill",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), r("svg", {
      class: s(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M280 230.16C295.56 246.82 315.44 256 336 256C356.57 256 376.44 246.82 391.96 230.15C407.06 213.92 416.29 192.26 417.96 169.15C419.7 144.74 412.17 122.14 396.7 105.52C381.38 89.06 359.83 80 336 80C312 80 290.51 88.9 275.14 105.4C259.77 121.9 252.26 144.54 254 169.16C255.63 192.24 264.87 213.91 280 230.16ZM204.18 432H467.83C476.392 432.044 484.493 428.123 489.77 421.38C495.383 414.048 497.342 404.555 495.09 395.6C486.71 361.38 465.82 333.18 434.71 314.05C407 297 372.85 288 336 288C299.86 288 264.79 297.4 237.24 314.46C206.2 333.69 185.34 361.73 176.92 395.54C174.641 404.489 176.578 413.989 182.18 421.33C187.463 428.105 195.589 432.046 204.18 432ZM147 260C111.81 260 80.8701 227.28 78.0001 187.07C76.5801 166.47 83.0001 147.42 96.0001 133.45C108.86 119.62 127 112 147 112C167 112 185 119.66 197.93 133.57C211.03 147.65 217.43 166.66 215.93 187.09C213.06 227.29 182.13 260 147 260ZM147.01 278.55C172.24 278.55 195.07 282.85 212.66 291.45C214.71 292.45 216.51 293.42 218.08 294.34C220.413 295.708 221.896 298.163 222.023 300.864C222.15 303.566 220.904 306.149 218.71 307.73C189.35 328.71 169.48 357.49 161 391.55C160.84 392.17 160.7 392.8 160.59 393.43C159.899 397.234 156.586 399.999 152.72 400H41.7201C33.8728 400.036 26.4525 396.431 21.6301 390.24C16.5497 383.593 14.7855 374.99 16.8401 366.88C23.7701 339.05 40.9301 316 66.4401 300.17C88.9401 286.23 117.55 278.55 147.01 278.55Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
