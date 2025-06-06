import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIPieChartOutline",
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
    return (u, t) => (r(), s("svg", {
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
        d: "M256 32C132.284 32 32.0002 132.283 32.0002 256C31.9535 287.531 38.5949 318.737 51.4868 347.537C55.097 355.602 64.5616 359.214 72.6269 355.604L80.0596 352.277C112.187 429.099 187.585 480 272 480C386.837 480 480 386.837 480 272C480 157.163 386.837 64 272 64V48C272 39.1634 264.837 32 256 32ZM272 96V256C272 262.308 268.294 268.027 262.537 270.604L109.279 339.199C136.295 404.609 200.304 448 272 448C369.164 448 448 369.163 448 272C448 174.837 369.164 96 272 96ZM83.6162 315.626L240 245.631V64.659L237.144 64.9141C139.952 74.3872 64.0002 156.321 64.0002 256.024C63.9685 277.408 67.5222 298.605 74.4756 318.742L74.7695 319.586L81.5502 316.551C82.2077 316.199 82.8972 315.889 83.6162 315.626Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
