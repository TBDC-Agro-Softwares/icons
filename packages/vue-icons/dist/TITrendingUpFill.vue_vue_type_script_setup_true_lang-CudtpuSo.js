import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TITrendingUpFill",
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
    return (p, t) => (r(), s("svg", {
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
        d: "M479.997 143.685C479.829 134.994 472.731 128 464 128H352L351.685 128.003C342.994 128.171 336 135.269 336 144L336.003 144.315C336.171 153.006 343.269 160 352 160H425.373L299.316 286.056L299.022 286.343C296.052 289.166 292.107 290.745 288 290.745C283.756 290.745 279.686 289.059 276.685 286.058L225.944 235.316L225.513 234.891C216.555 226.154 204.53 221.255 192 221.255C179.268 221.255 167.057 226.313 158.055 235.318L36.6863 356.686L36.4296 356.949C30.4391 363.215 30.5247 373.152 36.6863 379.314C42.9347 385.562 53.0653 385.562 59.3137 379.314L180.684 257.944L180.978 257.657C183.948 254.834 187.893 253.255 192 253.255C196.244 253.255 200.314 254.941 203.315 257.942L254.056 308.684L254.487 309.109C263.445 317.846 275.47 322.745 288 322.745C300.732 322.745 312.943 317.687 321.945 308.682L448 182.627V256L448.003 256.315C448.171 265.006 455.269 272 464 272C472.837 272 480 264.837 480 256V144L479.997 143.685Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
