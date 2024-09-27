import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIFitnessSharp",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (n(), r("svg", {
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
        d: "M259.73 276.76L211.73 116.76L150.11 240H56.94C50.7608 219.46 47.7462 198.098 48 176.65C48.63 114.54 98.46 64 159.08 64C207.19 64 239.18 92 256 112.21C272.82 92 304.81 64 352.92 64C413.54 64 463.37 114.54 464 176.65C464.366 209.657 457.061 242.298 442.66 272H345.89L304 188.22L259.73 276.76ZM424.41 304H480V272H442.66C437.337 283.083 431.238 293.776 424.41 304ZM69.34 272H169.89L204.27 203.24L252.27 363.24L304 259.78L326.11 304H424.41C417.507 314.317 410.014 324.226 401.97 333.68C367.197 374.845 321.862 404.598 282.532 430.409L282.531 430.41C276.517 434.356 270.644 438.211 264.97 442L255.97 448L246.97 442C241.266 438.188 235.359 434.31 229.311 430.338C190.025 404.543 144.737 374.808 109.97 333.68C92.84 313.41 79.34 292.92 69.34 272ZM69.34 272H32V240H56.94C60.253 250.967 64.3984 261.664 69.34 272Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as default
};