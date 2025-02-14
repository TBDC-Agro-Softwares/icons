import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TILogoBitbucket",
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
    return (u, t) => (n(), r("svg", {
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
        d: "M484.132 32.2301C483.291 32.0989 482.442 32.0221 481.592 32.0001H32.5915C24.0015 31.8801 17.1215 38.8801 17.0015 47.7501C16.9637 48.6893 17.0409 49.6296 17.2315 50.5501L82.5315 461.8C83.3498 466.778 85.8146 471.338 89.5315 474.75C93.2175 478.125 98.0336 479.998 103.032 480H416.182C423.937 480.008 430.498 474.268 431.522 466.58L470.402 218.67H326.192L307.732 330.67H206.212L180.482 182.67H476.062L496.822 50.6701C498.092 41.9201 492.442 33.6301 484.132 32.2301Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
