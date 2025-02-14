import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TITrophySharp",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (s(), n("svg", {
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
        d: "M399.9 80C399.9 80 399.9 52.12 399.9 32H112V80H32V118C32 150 41.5 180.79 58.76 204.61C72.09 223.01 92.93 235.71 111.67 241.82C117.11 271.11 131.87 298.95 161.86 321.65C183.86 338.31 210.31 350.52 234 355.51V436H160V480H352V436H278V355.51C301.69 350.51 328.13 338.31 350.14 321.65C380.14 298.95 394.89 271.11 400.33 241.82C419.07 235.71 439.91 223.01 453.24 204.61C470.5 180.79 480 150 480 118V80H399.9ZM94.4 178.8C83.72 164.12 77.23 144.4 76.16 124H112V191.37C108.06 190.23 99.08 185.25 94.4 178.8ZM417.6 178.8C413 185.41 406 191.38 400 191.38C400 168.98 400 145.09 399.95 124H435.85C434.77 144.4 428 163.9 417.6 178.8Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
