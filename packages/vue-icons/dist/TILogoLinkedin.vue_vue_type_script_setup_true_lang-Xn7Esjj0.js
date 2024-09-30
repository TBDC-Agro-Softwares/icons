import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TILogoLinkedin",
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
    return (p, t) => (r(), s("svg", {
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
        d: "M444.17 32H70.28C49.85 32 32 46.7 32 66.89V441.61C32 461.91 49.85 480 70.28 480H444.06C464.6 480 480 461.79 480 441.61V66.89C480.12 46.7 464.6 32 444.17 32ZM170.87 405.43H106.69V205.88H170.87V405.43ZM141 175.54H140.54C120 175.54 106.7 160.25 106.7 141.11C106.7 121.62 120.35 106.69 141.35 106.69C162.35 106.69 175.2 121.51 175.66 141.11C175.65 160.25 162.35 175.54 141 175.54ZM405.43 405.43H341.25V296.32C341.25 270.18 331.91 252.32 308.69 252.32C290.95 252.32 280.45 264.32 275.78 276.01C274.03 280.21 273.56 285.93 273.56 291.77V405.43H209.38V205.88H273.56V233.65C282.9 220.35 297.49 201.21 331.44 201.21C373.57 201.21 405.44 228.98 405.44 288.85L405.43 405.43Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
