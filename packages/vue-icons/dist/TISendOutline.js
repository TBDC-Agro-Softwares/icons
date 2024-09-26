import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as d, createElementVNode as c } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TISendOutline",
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
    return (u, t) => (r(), s("svg", {
      class: a(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M182.173 456.864C183.503 457.302 184.885 457.512 186.25 457.512C190.345 457.512 194.3 455.587 196.837 452.174L260.603 365.38L374.516 404.312C375.881 404.767 377.316 405.012 378.751 405.012C381.131 405.012 383.493 404.364 385.558 403.104C388.901 401.074 391.158 397.679 391.736 393.829L439.861 70.0794C439.862 70.0703 439.863 70.0611 439.865 70.0519C440.472 65.9237 439.114 61.5809 435.835 58.5294C431.526 54.5057 425.181 53.9372 420.309 56.7482L27.0358 262.124C22.3983 264.557 19.6508 269.527 20.0358 274.759C20.4558 279.992 23.9208 284.472 28.8908 286.187L173.125 335.482V444.387C173.125 450.057 176.765 455.079 182.173 456.864ZM199.375 344.454V404.364L234.556 356.478L199.375 344.454ZM209.78 320.264L407.672 108L368.076 374.369L209.78 320.264ZM364.982 115.265L182.556 310.959L66.3058 271.224L364.982 115.265Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
