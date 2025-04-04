import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIPricetagsOutline",
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
    return (C, t) => (n(), r("svg", {
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
        d: "M280.356 16L403.258 16.0001C415.154 15.9792 426.567 20.7053 434.966 29.1301C443.364 37.5548 448.054 48.9819 447.997 60.8001V183.8C447.997 191.845 444.819 199.565 439.108 205.316L193.391 450.943C175.891 468.354 147.612 468.354 130.083 450.914L13.055 333.886C-4.35652 316.389 -4.35652 288.111 13.0841 270.585L258.882 24.8474C264.591 19.1774 272.311 16 280.356 16ZM280.984 47.9991L35.7378 293.186C30.7492 298.199 30.7492 306.301 35.7101 311.286L152.681 428.258C157.698 433.249 165.805 433.249 170.795 428.284L415.996 183.172L415.997 60.7226C416.013 57.4705 414.777 54.342 412.554 51.9812L412.303 51.7221C409.922 49.3338 406.687 47.9941 403.286 48L280.984 47.9991ZM351.996 144C334.323 144 319.996 129.673 319.996 112C319.996 94.327 334.323 80.0001 351.996 80.0001C369.67 80.0001 383.996 94.327 383.996 112C383.996 120.487 380.625 128.626 374.624 134.628C368.623 140.629 360.483 144 351.996 144ZM511.993 79.6852C511.826 70.994 504.728 64.0001 495.996 64.0001L495.682 64.0031C486.99 64.1709 479.996 71.2687 479.996 80.0001V207.372L218.683 468.686L218.426 468.949C212.436 475.215 212.521 485.152 218.683 491.314C224.931 497.562 235.062 497.562 241.31 491.314L503.31 229.314L503.658 228.957C509.051 223.336 512.026 215.899 511.999 208.173L511.996 208V80.0001L511.993 79.6852Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
