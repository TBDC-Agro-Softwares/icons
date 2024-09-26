import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const L = /* @__PURE__ */ o({
  __name: "TILogInOutline",
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
    return (C, t) => (r(), s("svg", {
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
        d: "M392 80C422.619 80 447.498 104.573 447.992 135.074L448 136V376C448 406.619 423.427 431.498 392.926 431.992L392 432H240C208.602 432 176.646 407.207 176.01 376.919L176 376V336C176 327.163 183.163 320 192 320C200.731 320 207.829 326.994 207.997 335.685L208 336V376C208 386.974 224.155 399.742 239.534 399.996L240 400H392C405.122 400 415.785 389.469 415.997 376.397L416 376V136C416 122.878 405.469 112.215 392.397 112.003L392 112H232C218.878 112 208.215 122.531 208.003 135.603L208 136V176C208 184.837 200.837 192 192 192C183.269 192 176.171 185.006 176.003 176.315L176 176V136C176 105.381 200.573 80.502 231.074 80.0075L232 80H392ZM276.686 164.686C282.848 158.525 292.785 158.439 299.051 164.43L299.314 164.686L379.314 244.686C385.475 250.848 385.561 260.785 379.57 267.051L379.314 267.314L299.314 347.314C293.065 353.562 282.935 353.562 276.686 347.314C270.525 341.152 270.439 331.215 276.43 324.949L276.686 324.686L329.373 272H80C71.1634 272 64 264.837 64 256C64 247.269 70.9939 240.171 79.6851 240.003L80 240H329.373L276.686 187.314C270.525 181.152 270.439 171.215 276.43 164.949L276.686 164.686Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as default
};
