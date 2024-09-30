import { defineComponent as o, computed as s, openBlock as r, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIEllipsisVerticalFill",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (r(), n("svg", {
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
        d: "M304 96C304 122.51 282.51 144 256 144C229.49 144 208 122.51 208 96C208 69.4903 229.49 48 256 48C282.51 48 304 69.4903 304 96ZM256 304C282.51 304 304 282.51 304 256C304 229.49 282.51 208 256 208C229.49 208 208 229.49 208 256C208 282.51 229.49 304 256 304ZM256 464C282.51 464 304 442.51 304 416C304 389.49 282.51 368 256 368C229.49 368 208 389.49 208 416C208 442.51 229.49 464 256 464Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
