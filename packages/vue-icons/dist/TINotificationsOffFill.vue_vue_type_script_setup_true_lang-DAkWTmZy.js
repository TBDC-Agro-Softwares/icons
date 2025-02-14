import { defineComponent as o, computed as C, openBlock as s, createElementBlock as n, normalizeClass as r, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TINotificationsOffFill",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (s(), n("svg", {
      class: r(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M437.509 338.193C438.358 339.225 439.215 340.268 440.08 341.31C444.426 346.59 447.149 353.015 447.92 359.81C448.337 363.2 446.556 366.48 443.486 367.977C440.416 369.474 436.734 368.856 434.32 366.44L172.54 104.7C170.804 102.965 169.96 100.53 170.251 98.093C170.542 95.6561 171.935 93.4875 174.03 92.21C181.028 87.9824 188.343 84.3046 195.91 81.21C196.215 81.04 196.488 80.8203 196.72 80.56C205.41 51.49 229.18 32 256 32C282.82 32 306.6 51.49 315.29 80.59C315.522 80.8602 315.799 81.0871 316.11 81.26C340.27 91.2 358.6 104.65 372.16 122.38C390.55 146.38 399.88 178.38 399.88 217.38C399.88 292.671 413.177 308.753 435.156 335.339L435.19 335.38C435.957 336.304 436.73 337.244 437.509 338.193ZM436.69 459.31C439.684 462.319 443.756 464.007 448 464C454.469 463.997 460.3 460.099 462.775 454.122C465.251 448.145 463.883 441.266 459.31 436.69L75.3104 52.69C69.0198 46.7135 59.1119 46.8404 52.9763 52.9759C46.8408 59.1115 46.7139 69.0194 52.6904 75.31L436.69 459.31ZM112.14 217.35C112.14 292.71 98.8504 308.77 76.8304 335.35L76.2364 336.066C74.8274 337.765 73.3954 339.492 71.9404 341.28C63.1846 351.839 61.3692 366.527 67.2904 378.9C73.4604 391.9 86.6104 399.97 101.62 399.97H312.8C316.038 399.973 318.958 398.023 320.197 395.032C321.437 392.041 320.751 388.598 318.46 386.31L126.46 194.31C124.256 192.113 120.977 191.393 118.056 192.466C115.134 193.539 113.099 196.208 112.84 199.31C112.374 205.103 112.14 211.117 112.14 217.35ZM326.44 437.87C312.493 463.796 285.441 479.976 256 480C226.564 479.973 199.517 463.793 185.57 437.87C184.914 436.628 184.956 435.132 185.684 433.93C186.411 432.728 187.715 431.995 189.12 432H322.9C324.304 431.999 325.605 432.733 326.33 433.934C327.054 435.136 327.096 436.63 326.44 437.87Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
