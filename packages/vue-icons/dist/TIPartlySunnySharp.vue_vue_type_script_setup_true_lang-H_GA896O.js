import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIPartlySunnySharp",
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
    return (C, t) => (r(), a("svg", {
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
        d: "M352 32H320V96H352V32ZM426.94 238.89C412.801 230.375 397.492 223.974 381.5 219.89C369.836 197.217 353.346 177.375 333.19 161.76C316.018 148.6 296.391 139.002 275.46 133.53C277.253 132.063 279.1 130.663 281 129.33C315.015 105.518 360.484 106.274 393.689 131.202C426.895 156.13 440.311 199.58 426.94 238.89ZM106 480H340C373.2 480 404.11 468.54 427 447.72C450.87 426.07 464 396.05 464 363.2C464 331.71 453 304.11 432.26 283.37C413.79 264.94 388.48 252.65 359.07 247.83C349.691 223.893 334.019 202.934 313.71 187.17C290.48 169.39 262.23 160 232 160C197.567 159.9 164.301 172.472 138.54 195.32C112.06 218.91 94.67 252 88.23 291C88.22 291.05 88.2 291.05 88.14 291.05C65.31 294.68 44.38 304.21 29.14 317.89C10.08 335 0 358.14 0 384.8C0 415.35 11.23 440.44 32.47 457.36C51.08 472.17 76.5 480 106 480ZM448 192H512V224H448V192ZM255.35 129.63L267.8 117.18L223.18 72.55L200.55 95.18L233.72 128.35H234.32C241.35 128.347 248.373 128.774 255.35 129.63ZM448.829 72.5451L404.203 117.171L426.831 139.798L471.456 95.1725L448.829 72.5451Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
