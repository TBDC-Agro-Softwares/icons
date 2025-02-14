import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TILogoTwitter",
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
        d: "M496 109.5C477.995 117.323 458.944 122.478 439.45 124.8C459.937 112.804 475.343 93.7456 482.78 71.1999C463.411 82.5258 442.256 90.4726 420.22 94.6999C401.468 75.0473 375.474 63.9497 348.31 63.9999C293.89 63.9999 249.85 107.4 249.85 160.9C249.811 168.342 250.664 175.761 252.39 183C173.484 179.301 99.7888 142.526 49.39 81.6999C40.6457 96.4411 36.0213 113.26 36 130.4C36 164 53.53 193.7 80 211.1C64.3173 210.728 48.9559 206.577 35.22 199V200.2C35.22 247.2 69.22 286.3 114.22 295.2C105.758 297.456 97.0377 298.599 88.28 298.6C82.0658 298.611 75.8657 298.008 69.77 296.8C82.28 335.3 118.69 363.3 161.82 364.1C126.774 391.109 83.7462 405.707 39.5 405.6C31.6462 405.588 23.7997 405.121 16 404.2C61.0118 432.942 113.334 448.145 166.74 448C348.1 448 447.18 300.3 447.18 172.2C447.18 168 447.07 163.8 446.87 159.7C466.101 146.021 482.738 129.021 496 109.5Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
