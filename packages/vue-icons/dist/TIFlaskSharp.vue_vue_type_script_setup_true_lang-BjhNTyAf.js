import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIFlaskSharp",
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
        d: "M469.11 382.76L325 153.92V74H357V32H155V74H187V153.92L42.89 382.76C29.89 403.4 28.11 426.49 39.89 447.86C51.67 469.23 71.59 480 96 480H416C440.41 480 460.32 469.24 472.1 447.86C483.88 426.48 482.14 403.4 469.11 382.76ZM224.39 173.39C227.421 168.605 229.024 163.054 229.01 157.39V74H283.01V158.59C283.009 163.482 284.396 168.275 287.01 172.41L356.82 283H155.18L224.39 173.39Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
