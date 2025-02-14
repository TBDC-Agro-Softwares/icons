import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TITrendingDownOutline",
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
    return (u, t) => (r(), s("svg", {
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
        d: "M59.0511 132.43C52.7847 126.439 42.8479 126.525 36.6863 132.686C30.4379 138.935 30.4379 149.065 36.6863 155.314L158.056 276.684L158.487 277.109C167.445 285.846 179.47 290.745 192 290.745C204.732 290.745 216.943 285.687 225.945 276.682L276.684 225.944L276.978 225.657C279.948 222.834 283.893 221.255 288 221.255C292.244 221.255 296.314 222.941 299.315 225.942L425.373 352H352L351.685 352.003C342.994 352.171 336 359.269 336 368C336 376.837 343.163 384 352 384H464L464.315 383.997C473.006 383.829 480 376.731 480 368V256L479.997 255.685C479.829 246.994 472.731 240 464 240L463.685 240.003C454.994 240.171 448 247.269 448 256V329.373L321.944 203.316L321.513 202.891C312.555 194.154 300.53 189.255 288 189.255C275.268 189.255 263.057 194.313 254.055 203.318L203.316 254.056L203.022 254.343C200.052 257.166 196.107 258.745 192 258.745C187.756 258.745 183.686 257.059 180.685 254.058L59.3137 132.686L59.0511 132.43Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
