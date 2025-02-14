import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIMenuOutline",
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
        d: "M432 144C440.837 144 448 151.163 448 160C448 168.731 441.006 175.829 432.315 175.997L432 176H80C71.1634 176 64 168.837 64 160C64 151.269 70.9939 144.171 79.6851 144.003L80 144H432ZM432 240C440.837 240 448 247.163 448 256C448 264.731 441.006 271.829 432.315 271.997L432 272H80C71.1634 272 64 264.837 64 256C64 247.269 70.9939 240.171 79.6851 240.003L80 240H432ZM448 352C448 343.163 440.837 336 432 336H80L79.6851 336.003C70.9939 336.171 64 343.269 64 352C64 360.837 71.1634 368 80 368H432L432.315 367.997C441.006 367.829 448 360.731 448 352Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
