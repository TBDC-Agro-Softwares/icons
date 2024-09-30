import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIVideocamFill",
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
        d: "M84 400H268C305.539 399.961 335.961 369.539 336 332V179.52C335.956 142.248 305.752 112.044 268.48 112H84C46.4606 112.039 16.0386 142.461 16 180V332C16.0386 369.539 46.4606 399.961 84 400ZM451 381.62C455.092 383.443 459.521 384.387 464 384.39V384.38C481.673 384.38 496 370.053 496 352.38V159.62C496 148.787 490.519 138.69 481.435 132.787C472.352 126.885 460.899 125.979 451 130.38C450.048 130.803 449.14 131.318 448.29 131.92L365.58 190.14C357.068 196.132 352.002 205.89 352 216.3V295.7C352.002 306.11 357.068 315.868 365.58 321.86L448.29 380.08C449.14 380.682 450.048 381.197 451 381.62Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
