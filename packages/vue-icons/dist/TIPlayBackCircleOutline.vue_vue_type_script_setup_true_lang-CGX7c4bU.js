import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIPlayBackCircleOutline",
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
    return (C, t) => (r(), a("svg", {
      class: s(i.value),
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
        d: "M256 48C141.163 48 48 141.163 48 256C48 370.837 141.163 464 256 464C370.837 464 464 370.837 464 256C464 141.163 370.837 48 256 48ZM256 80C353.163 80 432 158.837 432 256C432 353.163 353.163 432 256 432C158.837 432 80 353.163 80 256C80 158.837 158.837 80 256 80ZM231.68 177.56L117.23 246.7C113.986 248.677 112.006 252.201 112.006 256C112.006 259.799 113.986 263.323 117.23 265.3L231.68 334.44C235.02 336.441 239.18 336.485 242.562 334.556C245.944 332.627 248.023 329.024 248 325.13V271.81L351.68 334.44C355.02 336.441 359.18 336.485 362.562 334.556C365.944 332.627 368.023 329.024 368 325.13V186.87C368.023 182.976 365.944 179.373 362.562 177.444C359.18 175.515 355.02 175.559 351.68 177.56L248 240.19V186.87C248.023 182.976 245.944 179.373 242.562 177.444C239.18 175.515 235.02 175.559 231.68 177.56Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
