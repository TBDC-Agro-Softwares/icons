import { defineComponent as o, computed as C, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as r, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIChatbubbleEllipsesFill",
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
    return (d, t) => (s(), a("svg", {
      class: n(i.value),
      style: r(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M398 81.84C357.647 49.5531 307.5 31.9745 255.82 32C194.9 32 138 55.47 95.4601 98.09C54.3501 139.33 31.8201 193.78 32.0001 251.37C32.0015 293.593 44.3973 334.887 67.6501 370.13L67.8401 370.4C68.1201 370.81 68.4101 371.22 68.7001 371.62C68.9901 372.02 69.3501 372.54 69.4301 372.67L69.6501 373.07C70.7801 375.07 71.6501 377.51 70.8801 379.97L52.4601 446.63C51.7232 449.109 51.3196 451.675 51.2601 454.26C51.2324 468.421 62.6693 479.934 76.8301 480C80.424 479.881 83.9658 479.105 87.2801 477.71L154.77 453.35L155.62 453.02C157.456 452.249 159.429 451.858 161.42 451.87C163.256 451.875 165.076 452.213 166.79 452.87C168.41 453.5 183.12 459.13 198.64 463.47C211.54 467.07 238.38 472.47 259.41 472.47C319.06 472.47 374.76 449.37 416.24 407.41C457.36 365.77 480 310.42 480 251.49C480.005 236.363 478.403 221.278 475.22 206.49C464.88 157.87 437.46 113.59 398 81.84ZM160 288C142.327 288 128 273.673 128 256C128 238.327 142.327 224 160 224C177.673 224 192 238.327 192 256C192 273.673 177.673 288 160 288ZM256 288C238.327 288 224 273.673 224 256C224 238.327 238.327 224 256 224C273.673 224 288 238.327 288 256C288 273.673 273.673 288 256 288ZM352 288C334.327 288 320 273.673 320 256C320 238.327 334.327 224 352 224C369.673 224 384 238.327 384 256C384 273.673 369.673 288 352 288Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
