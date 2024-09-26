import { defineComponent as o, computed as a, openBlock as r, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIWalkSharp",
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
    return (L, t) => (r(), n("svg", {
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
        d: "M215.46 61.38C215.46 36.3173 235.777 16 260.84 16C285.903 16 306.22 36.3173 306.22 61.38C306.22 86.4427 285.903 106.76 260.84 106.76C235.777 106.76 215.46 86.4427 215.46 61.38ZM220.558 120.17C251.314 120.223 276.285 144.906 276.812 175.559L276.82 176.49V355.01H275.13L338.346 482.797L309.663 496.986L246.345 368.993L202.355 312.725C202.034 312.315 201.734 311.889 201.455 311.45L201.184 311.007C193.221 297.525 188.953 282.188 188.804 266.539L188.8 265.7V174.617L146 217.515V301.67H114V210.9C114 206.8 115.574 202.861 118.388 199.893L118.673 199.599L194.924 123.173L195.155 123.403C197.759 121.433 200.984 120.241 204.485 120.173L204.8 120.17L220.558 120.17ZM294.22 233.52L378.17 289.9L398.9 261.79L294.22 188.84V233.52ZM176.95 492.75L155.52 465.84L235.85 384.3L251.38 416.37L176.95 492.75Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
