import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIPieChartFill",
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
        d: "M51.5589 347.54C54.1378 353.298 59.8597 357.003 66.1689 357C68.4229 356.987 70.6486 356.497 72.6989 355.56L262.599 270.61C268.361 268.034 272.07 262.312 272.069 256V48C272.069 39.1635 264.905 32 256.069 32C180.121 31.9769 109.335 70.438 68.0285 134.17C26.722 197.902 20.5221 278.224 51.5589 347.54ZM307.013 69.8204C308.871 68.3056 311.31 67.7036 313.659 68.18C408.489 87.5 480.069 171.55 480.069 272C480.069 386.69 386.759 480 272.069 480C227.493 480.133 184.074 465.826 148.309 439.22C129.432 425.266 113.048 408.223 99.8489 388.81C98.5143 386.852 98.1169 384.402 98.7636 382.122C99.4103 379.842 101.035 377.966 103.199 377L275.669 299.82C292.936 292.077 304.053 274.923 304.069 256V76C304.075 73.6031 305.156 71.3352 307.013 69.8204Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
