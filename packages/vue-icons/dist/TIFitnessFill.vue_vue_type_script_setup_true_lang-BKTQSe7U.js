import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIFitnessFill",
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
        d: "M209.38 144.051C202.842 143.486 196.623 146.97 193.69 152.84L150.11 240H56.93C50.7527 219.46 47.7414 198.098 48 176.65C48.63 114.54 98.46 64 159.08 64C207.17 64 239.12 93.51 256 115C272.92 93.54 304.83 64 352.92 64C413.54 64 463.37 114.54 464 176.65C464.365 209.658 457.056 242.299 442.65 272H345.89L318.35 216.84C315.639 211.42 310.1 207.997 304.04 207.997C297.98 207.997 292.441 211.42 289.73 216.84L259.73 276.76L223.33 155.4C221.447 149.114 215.917 144.615 209.38 144.051ZM424.4 304C431.232 293.778 437.331 283.085 442.65 272H464C472.837 272 480 279.163 480 288C480 296.837 472.837 304 464 304H424.4ZM69.35 272H48C39.1634 272 32 264.837 32 256C32 247.163 39.1634 240 48 240H56.93C60.2499 250.967 64.402 261.665 69.35 272ZM69.35 272C78.6833 291.527 91.1067 310.747 106.62 329.66C125.39 352.54 159.42 389.12 238.01 442.47C248.858 449.905 263.162 449.905 274.01 442.47C352.6 389.12 386.63 352.54 405.4 329.66C412.161 321.431 418.502 312.867 424.4 304H336C329.941 304.001 324.401 300.578 321.69 295.16L304 259.78L270.31 327.16C267.599 332.578 262.059 336.001 256 336C255.553 336 255.093 335.98 254.62 335.94C248.066 335.396 242.513 330.898 240.62 324.6L204.22 203.24L174.22 263.16C171.523 268.55 166.027 271.967 160 272H69.35Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
