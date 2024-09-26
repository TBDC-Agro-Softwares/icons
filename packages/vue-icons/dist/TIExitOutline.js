import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const L = /* @__PURE__ */ o({
  __name: "TIExitOutline",
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
    return (d, t) => (r(), s("svg", {
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
        d: "M280 80C310.619 80 335.498 104.573 335.992 135.074L336 136V176C336 184.837 328.837 192 320 192C311.269 192 304.171 185.006 304.003 176.315L304 176V136C304 122.878 293.469 112.215 280.397 112.003L280 112H88C74.8777 112 64.2152 122.531 64.0032 135.603L64 136V376C64 389.122 74.5313 399.785 87.6031 399.997L88 400H280C293.122 400 303.785 389.469 303.997 376.397L304 376V336C304 327.163 311.163 320 320 320C328.731 320 335.829 326.994 335.997 335.685L336 336V376C336 406.619 311.427 431.498 280.926 431.992L280 432H88C57.3813 432 32.502 407.427 32.0075 376.926L32 376V136C32 105.381 56.5731 80.502 87.0739 80.0075L88 80H280ZM372.686 164.686C378.848 158.525 388.785 158.439 395.051 164.43L395.314 164.686L475.314 244.686C476.848 246.22 478.005 247.988 478.786 249.875C479.568 251.762 480 253.83 480 256C480 258.172 479.567 260.243 478.783 262.131C478.047 263.909 476.976 265.581 475.57 267.051L475.567 267.054C475.484 267.142 475.399 267.228 475.314 267.313L475.314 267.314L395.314 347.314C389.065 353.562 378.935 353.562 372.686 347.314C366.525 341.152 366.439 331.215 372.43 324.949L372.686 324.686L425.373 272H191C182.163 272 175 264.837 175 256C175 247.269 181.994 240.171 190.685 240.003L191 240H425.373L372.686 187.314C366.525 181.152 366.439 171.215 372.43 164.949L372.686 164.686Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as default
};
