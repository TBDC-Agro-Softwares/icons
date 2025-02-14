import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIPencilOutline",
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
    return (u, t) => (s(), r("svg", {
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
        d: "M356.723 96.9406C350.532 98.4993 342.349 102.614 337.795 106.458C335.688 108.236 326.99 116.817 318.463 125.525L302.961 141.359L370.992 209.335L388.396 191.844C407.337 172.809 410.787 168.333 413.996 158.623C415.706 153.453 416.004 151.261 416 143.902C415.996 136.438 415.713 134.434 413.929 129.248C408.729 114.135 397.236 102.633 382.63 97.9241C376.183 95.8459 363.052 95.3474 356.723 96.9406ZM211.671 232.437L143.422 300.671L119.962 348.04C95.213 398.015 94.742 399.172 96.72 405.161C97.923 408.804 101.48 412.786 105.247 414.707C107.626 415.92 109.234 416.173 112.842 415.901C117.037 415.584 121.329 413.614 164.441 392.206L211.465 368.857L347.593 232.673L340.509 225.318C335.132 219.736 280.105 164.203 279.95 164.203C279.933 164.203 249.208 194.909 211.671 232.437Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
