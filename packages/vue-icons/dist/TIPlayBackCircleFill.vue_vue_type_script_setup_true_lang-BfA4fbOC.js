import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIPlayBackCircleFill",
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
    return (p, t) => (s(), a("svg", {
      class: n(i.value),
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
        d: "M48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48C141.31 48 48 141.31 48 256ZM117.23 246.7L231.68 177.56C235.02 175.559 239.18 175.515 242.562 177.444C245.944 179.373 248.023 182.976 248 186.87V240.19L351.68 177.56C355.02 175.559 359.18 175.515 362.562 177.444C365.944 179.373 368.023 182.976 368 186.87V325.13C368.023 329.024 365.944 332.627 362.562 334.556C359.18 336.485 355.02 336.441 351.68 334.44L248 271.81V325.13C248.023 329.024 245.944 332.627 242.562 334.556C239.18 336.485 235.02 336.441 231.68 334.44L117.23 265.3C113.986 263.323 112.006 259.799 112.006 256C112.006 252.201 113.986 248.677 117.23 246.7Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
