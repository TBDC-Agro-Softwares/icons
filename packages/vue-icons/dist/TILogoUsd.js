import { defineComponent as i, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as d, createElementVNode as c } from "vue";
const f = /* @__PURE__ */ i({
  __name: "TILogoUsd",
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
    const l = e, o = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (n(), r("svg", {
      class: a(o.value),
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
        d: "M240 480V443.58C160.53 439 112.25 398.06 112 336H184C185.77 362.34 207.86 382.45 240 386V288L213.23 281C152.23 266.82 119.59 231.61 119.59 178.92C119.59 116.81 164.08 76.08 240 70V32H272V70C349.39 76.3 391 117.74 392 176H320C319.24 151.94 304.17 132.61 272 130V222L302.82 229.28C367.61 243.46 400 277 400 332C400 396.34 356.26 437.88 272 443.32V480H240ZM240 216V130C212.41 131.52 192.73 148.47 192.73 172.53C192.73 194.83 209.12 209.41 240 216ZM272 294V386C310.15 384.46 328.38 367.08 328.38 340.23C328.38 315.65 310.15 299.1 272 294Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
