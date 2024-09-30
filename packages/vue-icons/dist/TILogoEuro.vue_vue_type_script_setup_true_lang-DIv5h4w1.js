import { defineComponent as i, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ i({
  __name: "TILogoEuro",
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
    const l = e, o = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (n(), s("svg", {
      class: a(o.value),
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
        d: "M231.8 272V224H376L384 176H231.8V167.88C231.8 129.19 248.27 105.32 318.98 105.32C347.87 105.32 380.43 108.01 421.48 114.74L432 44.74C393.774 36.0148 354.668 31.7398 315.46 32C189.26 32 135 76.4 135 158.46V176H80V224H135V272H80V320H135V353.54C135 435.6 189.23 480 315.43 480C354.606 480.246 393.68 475.958 431.87 467.22L421.29 397.22C380.24 403.95 347.83 406.64 318.94 406.64C248.24 406.64 231.8 386.46 231.8 338.7V320H360.27L368.14 272H231.8Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
