import { defineComponent as o, computed as a, openBlock as r, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIShareSocialFill",
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
    const l = e, i = a(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (r(), n("svg", {
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
        d: "M384.001 336C366.582 335.993 349.919 343.111 337.881 355.7L189.881 272.43C192.748 261.664 192.748 250.336 189.881 239.57L337.881 156.3C360.178 179.417 396.183 182.355 421.933 163.159C447.682 143.964 455.149 108.619 439.362 80.6492C423.576 52.6792 389.459 40.8046 359.718 52.9285C329.976 65.0524 313.884 97.3947 322.151 128.43L174.151 211.7C156.065 192.842 128.331 186.873 104.088 196.619C79.8447 206.366 63.9609 229.871 63.9609 256C63.9609 282.129 79.8447 305.634 104.088 315.381C128.331 325.127 156.065 319.158 174.151 300.3L322.151 383.57C315.115 410.057 325.725 438.085 348.537 453.273C371.349 468.461 401.3 467.439 423.024 450.731C444.748 434.023 453.422 405.337 444.597 379.391C435.772 353.445 411.407 335.998 384.001 336Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as default
};
