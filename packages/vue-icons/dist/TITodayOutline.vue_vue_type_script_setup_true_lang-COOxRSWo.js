import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TITodayOutline",
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
    return (u, t) => (s(), r("svg", {
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
        d: "M128 32C136.731 32 143.829 38.9939 143.997 47.6851L144 48V64H368V48C368 39.1634 375.163 32 384 32C392.731 32 399.829 38.9939 399.997 47.6851L400 48V64H416C451.346 64 480 92.6538 480 128V208V256V416C480 451.346 451.346 480 416 480H96C60.6538 480 32 451.346 32 416V256V128C32 92.6538 60.6538 64 96 64H112V48C112 39.1634 119.163 32 128 32ZM64 256V416C64 433.673 78.3269 448 96 448H416C433.673 448 448 433.673 448 416V256V208.027C447.939 190.535 433.91 176.338 416.528 176.006L416 176L96.0465 176C78.5457 176.051 64.338 190.084 64.0058 207.472L64 208V256ZM96 307.43V236.57C96 220.791 108.791 208 124.57 208H195.43C211.209 208 224 220.791 224 236.57V307.43C224 323.209 211.209 336 195.43 336H124.57C108.791 336 96 323.209 96 307.43Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
