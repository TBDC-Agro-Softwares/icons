import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TINotificationsFill",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (s(), r("svg", {
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
        d: "M437.509 338.193C438.358 339.225 439.215 340.268 440.08 341.31C448.836 351.887 450.637 366.593 444.69 378.97C438.5 391.91 425.44 399.97 410.5 399.97H101.61C86.5998 399.97 73.4498 391.9 67.2798 378.9C61.3586 366.527 63.174 351.839 71.9298 341.28C73.3849 339.492 74.817 337.765 76.226 336.066C76.4244 335.827 76.6223 335.588 76.8198 335.35C98.8398 308.77 112.13 292.71 112.13 217.35C112.13 148.95 139.53 104.42 195.91 81.21C196.214 81.04 196.488 80.8203 196.72 80.56C205.41 51.49 229.18 32 256 32C282.82 32 306.6 51.49 315.29 80.59C315.521 80.8602 315.799 81.0871 316.11 81.26C340.27 91.2 358.6 104.65 372.16 122.38C390.55 146.38 399.88 178.38 399.88 217.38C399.88 292.671 413.176 308.753 435.156 335.339L435.19 335.38C435.956 336.304 436.729 337.244 437.509 338.193ZM326.44 437.87C312.492 463.796 285.44 479.976 256 480C226.563 479.973 199.516 463.793 185.57 437.87C184.913 436.628 184.956 435.132 185.683 433.93C186.41 432.728 187.715 431.995 189.12 432H322.9C324.303 431.999 325.604 432.733 326.329 433.934C327.054 435.136 327.096 436.63 326.44 437.87Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
