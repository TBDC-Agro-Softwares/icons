import { defineComponent as n, computed as r, openBlock as s, createElementBlock as a, normalizeClass as c, normalizeStyle as d, createElementVNode as o } from "vue";
const m = /* @__PURE__ */ n({
  __name: "TILogoXing",
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
    return (p, t) => (s(), a("svg", {
      class: c(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      o("path", {
        d: "M469 32L313.8 303.9C313.572 304.332 313.535 304.84 313.7 305.3L413 480H309.9C309.1 480 308.7 480 308.3 479.3L209.4 305.5C208.998 305.004 208.998 304.296 209.4 303.8L365 32H469Z",
        fill: "currentColor"
      }, null, -1),
      o("path", {
        d: "M163 113L221.9 216.2C222 216.594 222 217.006 221.9 217.4L141.4 351.1C141.123 351.72 140.473 352.085 139.8 352H43L124 217.2C124.066 216.93 124.031 216.645 123.9 216.4L65 112H161C161.808 111.895 162.599 112.29 163 113Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
