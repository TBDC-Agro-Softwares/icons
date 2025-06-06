import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const L = /* @__PURE__ */ o({
  __name: "TIPaperPlaneOutline",
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
        d: "M447.421 33.5844L47.4728 184.954C37.9442 188.61 31.7833 197.79 32.0058 207.92L32.0186 208.325C32.4061 218.035 38.5902 226.533 47.6624 229.892L47.7923 229.939L213.555 297.146L214.024 297.328L214.5 297.495L214.668 297.973L214.757 298.21L282.139 464.261L282.228 464.497C285.701 473.567 294.324 479.679 304.086 479.906C314.138 480.128 323.252 474.085 326.95 464.755L327.04 464.522L478.43 64.5221C481.793 55.7308 479.66 45.7252 472.965 39.0301C466.27 32.335 456.264 30.2019 447.421 33.5844ZM428.451 106.172L304.384 433.978L245.572 289.05L428.451 106.172ZM405.826 83.5418L77.9473 207.636L222.944 266.423L405.826 83.5418Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as _
};
