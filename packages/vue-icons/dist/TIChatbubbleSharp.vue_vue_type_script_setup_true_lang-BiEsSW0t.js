import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIChatbubbleSharp",
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
    return (p, t) => (s(), a("svg", {
      class: n(i.value),
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
        d: "M475.219 206.52C464.879 157.87 437.459 113.59 397.999 81.84C357.646 49.5531 307.499 31.9745 255.819 32C194.899 32 137.999 55.47 95.4591 98.09C54.3491 139.33 31.8191 193.78 31.9991 251.37C32.0005 293.593 44.3963 334.887 67.6491 370.13L71.9991 376.18L47.9991 480L162.799 451.44C162.799 451.44 165.099 452.21 166.799 452.86C168.499 453.51 183.129 459.12 198.649 463.46C211.549 467.06 238.389 472.46 259.419 472.46C319.069 472.46 374.769 449.36 416.249 407.4C457.359 365.77 479.999 310.42 479.999 251.49C480.002 236.373 478.4 221.299 475.219 206.52Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
