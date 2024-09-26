import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as d, createElementVNode as c } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIPlaySkipForwardOutline",
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
    return (u, t) => (a(), n("svg", {
      class: s(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M415.997 79.6851C415.829 70.9939 408.731 64 400 64C391.163 64 384 71.1634 384 80V216.434L151.217 77.1111C126.055 62.086 96 81.647 96 111V401C96 430.353 126.055 449.914 151.203 434.897L384 295.566V432L384.003 432.315C384.171 441.006 391.269 448 400 448C408.837 448 416 440.837 416 432V80L415.997 79.6851ZM134.797 104.577L382.683 252.939C384.425 253.981 384.425 258.019 382.686 259.059L134.783 407.431C131.957 409.118 128 406.543 128 401V111C128 105.457 131.957 102.882 134.797 104.577Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
