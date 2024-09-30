import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TICloudOfflineFill",
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
    return (d, t) => (r(), s("svg", {
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
        d: "M448 464C443.756 464.007 439.684 462.319 436.69 459.31L52.69 75.31C46.7135 69.0194 46.8404 59.1115 52.9759 52.976C59.1115 46.8404 69.0194 46.7136 75.31 52.69L459.31 436.69C463.883 441.266 465.25 448.145 462.775 454.122C460.3 460.099 454.469 463.997 448 464ZM38.72 196.78C13.39 219.88 0 251.42 0 288C0 324 14.38 356.88 40.49 380.59C65.64 403.43 99.56 416 136 416H328.8C332.038 416.003 334.958 414.053 336.197 411.062C337.436 408.071 336.751 404.628 334.46 402.34L100.88 168.76C98.7888 166.664 95.7113 165.895 92.88 166.76C72 173.15 53.4 183.38 38.72 196.78ZM512 312C512 345.39 499.76 372.78 476.59 391.23C475.07 392.443 473.5 393.61 471.88 394.73C468.701 396.922 464.41 396.531 461.68 393.8L170.24 102.36C168.557 100.677 167.711 98.3322 167.931 95.9623C168.151 93.5925 169.416 91.4438 171.38 90.1C195.88 73 224.88 64 256 64C295.927 63.8155 334.356 79.1886 363.14 106.86C387.87 130.71 404.64 162.18 412.32 198.86C413.579 205.01 418.319 209.855 424.44 211.25C470 221.42 512 254.43 512 312Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
