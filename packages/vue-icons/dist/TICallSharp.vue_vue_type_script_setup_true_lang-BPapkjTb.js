import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TICallSharp",
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
    return (d, t) => (s(), a("svg", {
      class: n(i.value),
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
        d: "M478.939 370.14C473.719 364.58 455.289 348.14 421.409 326.39C387.279 304.45 362.109 290.77 354.889 287.58C353.593 287.005 352.084 287.193 350.969 288.07C339.339 297.14 319.759 313.8 318.709 314.7C311.929 320.51 311.929 320.51 306.379 318.7C296.619 315.5 266.299 299.4 239.879 272.92C213.459 246.44 196.529 215.37 193.329 205.62C191.499 200.06 191.499 200.06 197.329 193.28C198.229 192.23 214.899 172.65 223.969 161.03C224.846 159.915 225.035 158.407 224.459 157.11C221.269 149.88 207.589 124.72 185.649 90.59C163.869 56.72 147.449 38.29 141.889 33.07C140.85 32.0892 139.357 31.7554 137.999 32.2C118.564 38.8788 99.8121 47.401 81.9994 57.65C64.8036 67.6462 48.5237 79.1408 33.3494 92C32.2699 92.9176 31.7853 94.3562 32.0894 95.74C34.1794 105.48 44.1694 146.14 75.1694 202.46C106.799 259.94 128.719 289.39 175.169 335.68C221.619 381.97 251.999 405.21 309.539 436.84C365.859 467.84 406.539 477.84 416.259 479.91C417.646 480.211 419.086 479.727 420.009 478.65C432.866 463.476 444.357 447.196 454.349 430C464.596 412.186 473.118 393.434 479.799 374C480.235 372.653 479.905 371.175 478.939 370.14Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
