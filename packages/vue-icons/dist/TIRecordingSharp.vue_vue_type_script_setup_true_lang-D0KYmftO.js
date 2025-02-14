import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIRecordingSharp",
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
        d: "M385 139C339.561 138.972 298.148 165.051 278.541 206.042C258.934 247.033 264.62 295.642 293.16 331H220.84C255.401 288.072 255.645 226.938 221.428 183.736C187.21 140.534 127.645 126.771 77.9428 150.583C28.241 174.395 1.64099 229.439 13.8669 283.177C26.0929 336.915 73.8883 375.034 129 375H385C450.169 375 503 322.17 503 257C503 191.83 450.169 139 385 139ZM54.9997 257C54.9997 216.131 88.1307 183 129 183C169.869 183 203 216.131 203 257C203 297.869 169.869 331 129 331C88.1512 330.95 55.0493 297.849 54.9997 257ZM385 331C344.131 331 311 297.869 311 257C311 216.131 344.131 183 385 183C425.869 183 459 216.131 459 257C458.95 297.849 425.848 330.95 385 331Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
