import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIPersonFill",
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
        d: "M257 32C287 32 314.18 43.57 333.64 64.58C353.34 85.85 362.94 114.48 360.67 145.18C356.16 206.29 309.73 256 257 256C204.27 256 157.76 206.28 153.32 145.16C151.08 114.18 160.62 85.49 180.2 64.38C199.57 43.5 226.84 32 257 32ZM56.7999 468.87C62.7802 476.033 71.6692 480.121 80.9999 480H433C442.332 480.119 451.221 476.027 457.2 468.86C463.7 461.09 466.32 450.48 464.38 439.75C455.94 392.93 429.6 353.6 388.2 326C351.42 301.5 304.83 288 257 288C209.17 288 162.58 301.49 125.8 326C84.3999 353.61 58.0599 392.94 49.6199 439.76C47.6799 450.49 50.2999 461.1 56.7999 468.87Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as default
};
