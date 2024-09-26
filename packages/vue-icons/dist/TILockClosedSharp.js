import { defineComponent as i, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ i({
  __name: "TILockClosedSharp",
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
    const l = e, o = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (s(), a("svg", {
      class: n(o.value),
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
        d: "M420 192H352V112C352 58.9807 309.019 16 256 16C202.981 16 160 58.9807 160 112V192H92C85.3726 192 80 197.373 80 204V484C80 490.627 85.3726 496 92 496H420C426.627 496 432 490.627 432 484V204C432 197.373 426.627 192 420 192ZM314 192H198V111.25C198 79.2175 223.967 53.25 256 53.25C288.033 53.25 314 79.2175 314 111.25V192Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
