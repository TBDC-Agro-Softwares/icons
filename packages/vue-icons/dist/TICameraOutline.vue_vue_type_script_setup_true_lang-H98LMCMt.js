import { defineComponent as o, computed as C, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as s, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TICameraOutline",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), r("svg", {
      class: a(i.value),
      style: s(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M210 80H302C315.21 80 327.324 86.0142 336.064 96.2028C336.567 96.7889 337.027 97.4107 337.44 98.0633L363.349 139L363.56 139.223C366.421 142.162 369.856 143.883 372.707 143.994L373 144H432C458.51 144 480 165.49 480 192V384C480 410.51 458.51 432 432 432H80C53.4903 432 32 410.51 32 384V192C32 165.49 53.4903 144 80 144H84V136C84 127.269 90.9939 120.171 99.6851 120.003L100 120H124C132.731 120 139.829 126.994 139.997 135.685L140 136V144C142.534 144 145.373 142.53 148.44 139.244L148.624 139.042L174.56 98.0633C174.891 97.5412 175.251 97.0389 175.639 96.5587L175.936 96.2028C184.676 86.0142 196.79 80 210 80ZM302.339 112.005L302 112H210C206.837 112 203.756 113.378 201.073 116.112L200.882 116.309L174.98 157.237C174.651 157.756 174.293 158.256 173.907 158.734L173.612 159.088C164.613 169.595 153.193 176 140 176H80C71.1634 176 64 183.163 64 192V384C64 392.837 71.1634 400 80 400H432C440.837 400 448 392.837 448 384V192C448 183.163 440.837 176 432 176H373C359.786 176 347.228 169.41 338.388 159.088C337.888 158.505 337.431 157.886 337.02 157.237L311.117 116.309L310.927 116.112C308.34 113.476 305.382 112.1 302.339 112.005ZM160 272C160 218.981 202.981 176 256 176C309.019 176 352 218.981 352 272C352 325.019 309.019 368 256 368C202.981 368 160 325.019 160 272ZM320 272C320 236.654 291.346 208 256 208C220.654 208 192 236.654 192 272C192 307.346 220.654 336 256 336C291.346 336 320 307.346 320 272Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
