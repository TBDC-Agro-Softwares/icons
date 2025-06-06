import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIMailOpenOutline",
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
    return (L, t) => (s(), r("svg", {
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
        d: "M238.051 70.021L63.3601 156.242L63.3371 156.253C44.2201 165.631 32.0746 185.04 32.0001 206.334L32 391C32 421.974 57.3502 447 88.52 447H423.52C454.69 447 480.04 421.974 480.04 391V206.39C479.956 185.224 468.018 165.98 449.196 156.518L273.951 70.0224C262.634 64.4393 249.366 64.4393 238.051 70.021ZM259.791 98.719L429.85 182.653L306.494 276.077L277.893 253.831L277.458 253.497C263.045 242.596 243.077 242.708 228.777 253.831L200.335 275.952L78.9297 184.243L252.211 98.7176C254.599 97.54 257.401 97.54 259.791 98.719ZM64 213.069V391C64 404.208 74.9318 415 88.52 415H423.52C437.108 415 448.04 404.208 448.04 391L448.04 209.018L332.642 296.415L407.153 354.371C414.128 359.796 415.385 369.848 409.959 376.823C404.606 383.705 394.749 385.02 387.787 379.843L387.507 379.629L258.247 279.089C255.436 276.903 251.53 276.844 248.66 278.913L248.423 279.09L119.153 379.63C112.178 385.055 102.125 383.798 96.7002 376.823C91.3475 369.941 92.4996 360.063 99.2312 354.59L99.5072 354.37L174.177 296.296L64 213.069Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
