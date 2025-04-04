import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIVolumeMediumSharp",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (s(), n("svg", {
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
        d: "M157.65 176.1H64V335.9H157.65L288 440V72L157.65 176.1ZM358.981 170.476L366.252 184.728C377.956 207.668 384 230.989 384 256C384 280.147 377.999 303.526 366.805 326.163L366.301 327.176L359.124 341.477L330.523 327.124L337.699 312.824C347.081 294.129 352 275.257 352 256C352 236.582 347.393 218.48 338.218 200.201L337.748 199.272L330.476 185.019L358.981 170.476ZM413.822 135.941L405.763 122.119L378.119 138.238L386.178 152.059L387.46 154.273C408.134 190.218 416 216.344 416 256C416 295.968 407.745 322.297 386.117 360.046L378.163 373.929L405.929 389.837L413.883 375.954L414.605 374.69C438.29 333.065 448 301.638 448 256C448 209.411 438.133 177.633 413.822 135.941Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
