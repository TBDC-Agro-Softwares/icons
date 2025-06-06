import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const V = /* @__PURE__ */ o({
  __name: "TINewspaperSharp",
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
        d: "M384 416C384.034 444.847 403.331 470.119 431.15 477.75C431.723 477.882 432.102 478.429 432.024 479.012C431.946 479.594 431.438 480.023 430.85 480H88C57.0721 480 32 454.928 32 424V44C32 37.3726 37.3726 32 44 32H372C378.627 32 384 37.3726 384 44V416ZM96 112V208H192V112H96ZM320 400H96V368H320V400ZM96 336H320V304H96V336ZM320 272H96V240H320V272ZM224 208H320V176H224V208ZM320 144H224V112H320V144ZM416 112H468C474.627 112 480 117.373 480 124V416C480 433.673 465.673 448 448 448C430.327 448 416 433.673 416 416V112Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  V as _
};
