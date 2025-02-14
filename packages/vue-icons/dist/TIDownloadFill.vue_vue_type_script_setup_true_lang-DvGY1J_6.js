import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIDownloadFill",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (s(), r("svg", {
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
        d: "M256 32C264.837 32 272 39.1634 272 48V160H240V48C240 39.1634 247.163 32 256 32ZM240 160H136C105.086 160.033 80.0331 185.086 80 216V424C80.0331 454.914 105.086 479.967 136 480H376C406.914 479.967 431.967 454.914 432 424V216C431.967 185.086 406.914 160.033 376 160H272V313.37L324.69 260.69C330.981 254.714 340.888 254.84 347.024 260.976C353.16 267.111 353.286 277.019 347.31 283.31L267.31 363.31C261.062 369.553 250.938 369.553 244.69 363.31L164.69 283.31C158.714 277.019 158.84 267.111 164.976 260.976C171.112 254.84 181.019 254.714 187.31 260.69L240 313.37V160Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
