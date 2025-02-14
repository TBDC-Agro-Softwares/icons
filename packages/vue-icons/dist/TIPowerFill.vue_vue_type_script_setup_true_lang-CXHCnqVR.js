import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIPowerFill",
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
    return (C, t) => (s(), n("svg", {
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
        d: "M234 250C234 262.15 243.85 272 256 272C268.15 272 278 262.15 278 250V70C278 57.8497 268.15 48 256 48C243.85 48 234 57.8497 234 70V250ZM48 255.65C48 370.53 141.31 464 256 464C370.69 464 464 370.53 464 255.65C464.005 193.48 436.185 134.572 388.17 95.08C382.139 89.8195 373.728 88.2486 366.205 90.978C358.682 93.7074 353.235 100.306 351.98 108.21C350.726 116.114 353.862 124.075 360.17 129C398.045 160.148 419.995 206.612 420 255.65C420 346.27 346.43 420 256 420C165.57 420 92 346.27 92 255.65C92 206.3 113.48 160.1 150.93 128.9C156.989 123.874 159.902 115.994 158.567 108.236C157.232 100.477 151.853 94.0235 144.462 91.3122C137.072 88.6009 128.795 90.0454 122.76 95.1C75.25 134.65 48 193.2 48 255.65Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
