import { defineComponent as i, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ i({
  __name: "TILogoHackernews",
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
    const l = e, o = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (r(), s("svg", {
      class: a(o.value),
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
        d: "M32 32V480H480V32H32ZM281.67 282.83V366.83H235V282.83L158 142.83H213L259.32 240.37L303.65 142.83H356.38L281.67 282.83Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
