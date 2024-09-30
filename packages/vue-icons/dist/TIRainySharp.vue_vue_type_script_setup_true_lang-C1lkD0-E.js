import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIRainySharp",
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
    return (p, t) => (r(), a("svg", {
      class: s(i.value),
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
        d: "M364 336.001H130C100.5 336.001 75.08 328.171 56.47 313.361C35.23 296.441 24 271.351 24 240.801C24 214.141 34.08 191.001 53.14 173.891C68.38 160.211 89.31 150.681 112.14 147.051C112.2 147.051 112.22 147.051 112.23 147.001C118.67 108.001 136.06 74.9112 162.54 51.3212C188.301 28.4735 221.567 15.9017 256 16.0012C286.23 16.0012 314.48 25.3912 337.71 43.1712C358.019 58.9356 373.691 79.8941 383.07 103.831C412.48 108.651 437.79 120.941 456.26 139.371C477 160.111 488 187.711 488 219.201C488 252.051 474.87 282.071 451 303.721C428.11 324.541 397.2 336.001 364 336.001ZM93.8193 430.424L143.57 355.797L170.196 373.547L120.445 448.174L93.8193 430.424ZM223.568 355.802L141.816 478.43L168.442 496.18L250.193 373.552L223.568 355.802ZM253.811 430.425L303.562 355.799L330.188 373.549L280.437 448.176L253.811 430.425ZM383.56 355.804L301.808 478.432L328.434 496.182L410.185 373.554L383.56 355.804Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
