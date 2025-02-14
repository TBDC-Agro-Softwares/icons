import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TICreateFill",
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
    return (d, t) => (s(), n("svg", {
      class: a(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M459.94 53.2501C456.987 50.0055 452.836 48.1102 448.45 48.0044C444.064 47.8987 439.826 49.5916 436.72 52.6901L424.35 65.0001C421.228 68.1238 421.228 73.1863 424.35 76.3101L435.69 87.6301C437.191 89.1384 439.232 89.9864 441.36 89.9864C443.488 89.9864 445.529 89.1384 447.03 87.6301L459.09 75.6301C465.19 69.5401 465.76 59.6201 459.94 53.2501ZM399.34 90.0001L218.82 270.2C217.725 271.29 216.93 272.644 216.51 274.13L208.16 299C207.753 300.375 208.13 301.862 209.144 302.876C210.158 303.89 211.645 304.268 213.02 303.86L237.87 295.51C239.357 295.09 240.71 294.295 241.8 293.2L422 112.66C425.47 109.153 425.47 103.507 422 100L412.05 90.0001C408.537 86.4973 402.853 86.4973 399.34 90.0001ZM264.45 315.79L386.34 193.66C388.627 191.371 392.068 190.684 395.058 191.921C398.048 193.158 399.999 196.074 400 199.31V408C400 438.928 374.928 464 344 464H104C73.0721 464 48 438.928 48 408V168C48 137.072 73.0721 112 104 112H312.69C315.926 112.002 318.842 113.952 320.079 116.942C321.316 119.933 320.629 123.373 318.34 125.66L196.21 247.57C191.495 252.283 187.997 258.073 186.02 264.44L177.35 290.34C173.816 302.856 177.323 316.305 186.519 325.501C195.715 334.698 209.164 338.205 221.68 334.67L247.58 326C253.949 324.017 259.739 320.513 264.45 315.79Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
