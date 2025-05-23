import { defineComponent as o, computed as r, openBlock as a, createElementBlock as s, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIHeartHalfSharp",
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
    return (p, t) => (a(), s("svg", {
      class: n(i.value),
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
        d: "M352.92 64C304.81 64 272.82 92 256 112.21C239.18 92 207.19 64 159.08 64C98.4596 64 48.6296 114.54 47.9996 176.65C47.4396 232.33 67.7096 283.65 110 333.65C150.12 381.11 204.25 413.4 247 441.97L256 447.97L265 441.97C307.78 413.4 361.91 381.11 402 333.65C444.25 283.65 464.52 232.3 464 176.65C463.37 114.54 413.54 64 352.92 64ZM377.59 313C345.81 350.6 302.91 378.75 265.07 403.59L256 409.59V162.23L280.59 132.69C294.53 116 318.38 96 352.92 96C396.07 96 431.54 132.32 431.99 177C432.308 200.475 427.996 223.783 419.3 245.59C410.27 268.43 396.63 290.5 377.59 313Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
