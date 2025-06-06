import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const L = /* @__PURE__ */ o({
  __name: "TISwapHorizontalOutline",
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
        d: "M315.051 36.4296C308.785 30.4391 298.848 30.5247 292.686 36.6863L292.43 36.9489C286.439 43.2153 286.525 53.1521 292.686 59.3137L377.373 144H96L95.6851 144.003C86.9939 144.171 80 151.269 80 160C80 168.837 87.1634 176 96 176H377.373L292.686 260.686L292.43 260.949C286.439 267.215 286.525 277.152 292.686 283.314C298.935 289.562 309.065 289.562 315.314 283.314L427.314 171.314L427.57 171.051C433.561 164.785 433.475 154.848 427.314 148.686L315.314 36.6863L315.051 36.4296ZM196.686 228.686C202.935 222.438 213.065 222.438 219.314 228.686C225.475 234.848 225.561 244.785 219.57 251.051L219.314 251.314L134.627 336H416C424.837 336 432 343.163 432 352C432 360.731 425.006 367.829 416.315 367.997L416 368H134.627L219.314 452.686C225.475 458.848 225.561 468.785 219.57 475.051L219.314 475.314C213.152 481.475 203.215 481.561 196.949 475.57L196.686 475.314L84.6863 363.314C78.5247 357.152 78.4391 347.215 84.4296 340.949L84.6863 340.686L196.686 228.686Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as _
};
