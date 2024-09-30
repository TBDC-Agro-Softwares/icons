import { defineComponent as o, computed as r, openBlock as n, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIPlayForwardCircleOutline",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (n(), a("svg", {
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
        d: "M256 48C141.163 48 48 141.163 48 256C48 370.837 141.163 464 256 464C370.837 464 464 370.837 464 256C464 141.163 370.837 48 256 48ZM256 80C353.163 80 432 158.837 432 256C432 353.163 353.163 432 256 432C158.837 432 80 353.163 80 256C80 158.837 158.837 80 256 80ZM280.32 177.56L394.77 246.7C398.014 248.677 399.994 252.201 399.994 256C399.994 259.799 398.014 263.323 394.77 265.3L280.32 334.44C276.98 336.441 272.82 336.485 269.438 334.556C266.056 332.627 263.977 329.024 264 325.13V271.81L160.32 334.44C156.98 336.441 152.82 336.485 149.438 334.556C146.056 332.627 143.977 329.024 144 325.13V186.87C143.977 182.976 146.056 179.373 149.438 177.444C152.82 175.515 156.98 175.559 160.32 177.56L264 240.19V186.87C263.977 182.976 266.056 179.373 269.438 177.444C272.82 175.515 276.98 175.559 280.32 177.56Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
