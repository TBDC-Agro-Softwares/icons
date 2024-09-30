import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIArrowUpOutline",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (n(), s("svg", {
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
        d: "M272.679 82.7426C263.285 73.6579 248.305 73.7535 239.029 83.0294L95.0294 227.029L94.7426 227.321C85.6579 236.715 85.7535 251.695 95.0294 260.971L95.3212 261.257C104.715 270.342 119.695 270.247 128.971 260.971L232 157.941V412L232.003 412.397C232.215 425.469 242.878 436 256 436C269.255 436 280 425.255 280 412V157.941L383.029 260.971L383.321 261.257C392.715 270.342 407.695 270.247 416.971 260.971C426.343 251.598 426.343 236.402 416.971 227.029L272.971 83.0294L272.679 82.7426Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
