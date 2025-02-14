import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIDocumentsSharp",
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
        d: "M328 140C328 146.627 333.373 152 340 152H464V388C464 394.627 458.627 400 452 400H351.99V264.14C352.028 253.291 347.775 242.867 340.16 235.14L231 124.14C223.372 116.412 212.978 112.043 202.12 112H160V28C160 21.3726 165.373 16 172 16H328V140ZM366 120H451.94L360 26.52V114C360 117.314 362.686 120 366 120ZM184 144V268C184 274.627 189.373 280 196 280H320V484C320 490.627 314.627 496 308 496H60C53.3726 496 48 490.627 48 484V156C48 149.373 53.3726 144 60 144H184ZM216 154.52L307.94 248H222C218.686 248 216 245.314 216 242V154.52Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
