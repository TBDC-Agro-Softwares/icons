import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIArrowBackFill",
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
        d: "M260.971 95.0294C251.598 85.6569 236.402 85.6569 227.029 95.0294L83.0294 239.029L82.7426 239.321C73.6579 248.715 73.7535 263.695 83.0294 272.971L227.029 416.971L227.321 417.257C236.715 426.342 251.695 426.247 260.971 416.971L261.257 416.679C270.342 407.285 270.247 392.305 260.971 383.029L157.941 280H412L412.397 279.997C425.469 279.785 436 269.122 436 256C436 242.745 425.255 232 412 232H157.941L260.971 128.971L261.257 128.679C270.342 119.285 270.247 104.305 260.971 95.0294Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
