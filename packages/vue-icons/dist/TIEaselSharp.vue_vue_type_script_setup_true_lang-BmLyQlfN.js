import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIEaselSharp",
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
        d: "M468 64H278V32H234V64H44C37.3726 64 32 69.3726 32 76V356C32 362.627 37.3726 368 44 368H122.19L89.93 470.46L126.46 480.07L161.74 368H234V432H278V368H349.84L380.84 479.7L417.67 471.13L389.05 368H468C474.627 368 480 362.627 480 356V76C480 69.3726 474.627 64 468 64ZM442 330H70V102H442V330ZM424 120H88V312H424V120Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
