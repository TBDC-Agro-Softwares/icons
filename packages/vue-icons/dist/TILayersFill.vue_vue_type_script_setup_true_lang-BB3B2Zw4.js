import { defineComponent as o, computed as s, openBlock as r, createElementBlock as n, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TILayersFill",
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
    return (d, t) => (r(), n("svg", {
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
        d: "M256 256C242.53 256 229.06 253.61 218.56 248.83L70.56 181.34C63.79 178.26 48 169.25 48 152.24C48 135.23 63.79 126.24 70.58 123.12L219.86 55.05C240.43 45.65 271.47 45.65 292.05 55.05L441.42 123.12C448.21 126.21 464 135.22 464 152.24C464 169.26 448.21 178.24 441.42 181.35L293.42 248.83C282.94 253.61 269.47 256 256 256ZM441.36 226.81L426.27 220L387.5 237.74L293.5 280.74C283 285.54 269.5 287.93 256.06 287.93C242.62 287.93 229.13 285.54 218.64 280.74L124.57 237.74L85.79 220L70.57 226.84C63.79 229.93 48 239 48 256C48 273 63.79 282.08 70.56 285.17L218.56 352.8C229 357.6 242.49 360 256 360C269.51 360 282.94 357.6 293.44 352.81L441.31 285.2C448.12 282.11 464 273.09 464 256C464 238.91 448.23 229.93 441.36 226.81ZM426.27 324L441.36 330.8C448.23 333.93 464 342.94 464 360C464 377.06 448.12 386.08 441.3 389.16L293.38 456.73C282.88 461.52 269.46 464 256 464C242.54 464 229 461.52 218.56 456.74L70.56 389.15C63.79 386.07 48 377 48 360C48 343 63.79 333.93 70.57 330.84L85.79 324L124.57 341.68L218.64 384.68C229.13 389.47 242.62 391.86 256.06 391.86C269.5 391.86 283 389.46 293.5 384.68L387.5 341.73L426.27 324Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
