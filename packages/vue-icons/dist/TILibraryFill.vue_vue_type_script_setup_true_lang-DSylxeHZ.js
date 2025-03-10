import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TILibraryFill",
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
    return (d, t) => (s(), n("svg", {
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
        d: "M320 474H288C270.327 474 256 459.673 256 442V58C256 40.3269 270.327 26 288 26H320C337.673 26 352 40.3269 352 58V442C352 459.673 337.673 474 320 474ZM48 474H64C81.6731 474 96 459.673 96 442V106C96 88.3269 81.6731 74 64 74H48C30.3269 74 16 88.3269 16 106V442C16 459.673 30.3269 474 48 474ZM208 138C225.673 138 240 152.327 240 170V198C240 200.209 238.209 202 236 202H116C113.791 202 112 200.209 112 198V170C112 152.327 126.327 138 144 138H208ZM112 442C112 459.673 126.327 474 144 474H208C225.673 474 240 459.673 240 442V412C240 410.895 239.105 410 238 410H114C112.895 410 112 410.895 112 412V442ZM114 234C112.895 234 112 234.895 112 236V376C112 377.105 112.895 378 114 378H238C239.105 378 240 377.105 240 376V236C240 234.895 239.105 234 238 234H114ZM463.66 99.45L495.89 439.45C497.37 455.1 484.31 469.14 466.72 470.81L434.87 473.81C417.28 475.5 401.82 464.15 400.34 448.5L368.11 108.5C366.63 92.85 379.69 78.81 397.28 77.14L429.13 74.14C446.72 72.45 462.18 83.8 463.66 99.45Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
