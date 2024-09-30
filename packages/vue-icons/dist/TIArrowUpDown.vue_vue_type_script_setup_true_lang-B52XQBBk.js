import { defineComponent as r, computed as n, openBlock as s, createElementBlock as a, normalizeClass as d, normalizeStyle as c, createElementVNode as o } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TIArrowUpDown",
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
    return (u, t) => (s(), a("svg", {
      class: d(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M340.841 186.079L265.335 98.4985C262.872 95.6432 259.277 94 255.493 94C251.709 94 248.114 95.6432 245.651 98.4985L170.145 186.079C162.939 194.439 168.913 207.351 179.987 207.351H331.02C342.094 207.351 348.068 194.439 340.841 186.079Z",
        fill: "currentColor"
      }, null, -1),
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M170.159 326.92L245.665 414.5C248.128 417.355 251.723 418.998 255.507 418.998C259.291 418.998 262.886 417.355 265.349 414.5L340.855 326.92C348.061 318.56 342.087 305.647 331.013 305.647L179.98 305.647C168.906 305.647 162.932 318.56 170.159 326.92Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
