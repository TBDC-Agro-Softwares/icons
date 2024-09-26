import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TITimerSharp",
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
    return (p, t) => (a(), n("svg", {
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
        d: "M256 48C141.12 48 48 141.12 48 256C48 370.88 141.12 464 256 464C370.88 464 464 370.88 464 256C464 141.12 370.88 48 256 48ZM256 432C159 432 80 353.05 80 256C79.8334 208.163 99.3074 162.354 133.87 129.28L279 233L260 263L135 172C122 195 108.3 218 108.3 256C108.3 337.44 174.56 403.7 256 403.7C337.44 403.7 403.7 337.44 403.7 256C403.7 179.33 344.98 116.12 270.15 109V164H241.85V79.89C246.09 79.96 250.79 80 256 80C353.05 80 432 159 432 256C432 353 353.05 432 256 432Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as default
};
