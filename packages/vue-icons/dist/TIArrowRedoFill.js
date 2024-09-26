import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as d, createElementVNode as c } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIArrowRedoFill",
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
    return (u, t) => (n(), s("svg", {
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
        d: "M58.79 439.13C52.333 436.906 47.9991 430.829 48 424C48 350.9 62.68 292.44 91.65 250.23C126.65 199.23 181.86 171.77 256 168.36V88C256.001 81.5959 259.82 75.809 265.708 73.2905C271.596 70.7721 278.418 72.0071 283.05 76.43L459.05 244.43C462.211 247.449 463.999 251.629 463.999 256C463.999 260.371 462.211 264.551 459.05 267.57L283.05 435.57C278.418 439.993 271.596 441.228 265.708 438.709C259.82 436.191 256.001 430.404 256 424V344.23C211 345.59 177 352.88 149.93 366.87C120.68 381.99 99.47 404.58 76.61 433.87C72.4059 439.253 65.2481 441.374 58.79 439.15V439.13Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
