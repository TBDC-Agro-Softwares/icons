import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIFlagFill",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (n(), r("svg", {
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
        d: "M80 480C71.1634 480 64 472.837 64 464V68.13C64.0023 59.5993 68.5328 51.7109 75.9 47.41C88 40.38 112.38 32 160 32C197.21 32 238.83 46.71 275.55 59.68C305.12 70.13 333.05 80 352 80C376.394 79.9252 400.53 74.9961 423 65.5C428.558 63.154 434.921 63.7481 439.949 67.0823C444.976 70.4165 447.999 76.0474 448 82.08V301.44C447.992 309.385 443.282 316.572 436 319.75C427.29 323.56 395.49 336 352 336C327.86 336 297.62 328.86 265.61 321.29C229.63 312.79 192.43 304 160 304C123.13 304 104.26 309.58 96 313.11V464C96 472.837 88.8366 480 80 480Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
