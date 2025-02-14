import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as V, createElementVNode as H } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIQrCodeSharp",
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
    return (c, t) => (s(), n("svg", {
      class: a(i.value),
      style: V(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      H("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M240 240H32V32H240V240ZM76 196H196V76H76V196ZM480 240H272V32H480V240ZM316 196H436V76H316V196ZM336 96H416V176H336V96ZM272 272H336V336H272V272ZM416 416H336V336H416V416ZM416 416H480V480H416V416ZM432 272H480V320H432V272ZM320 432H272V480H320V432ZM96 96H176V176H96V96ZM96 336H176V416H96V336ZM240 480H32V272H240V480ZM76 436H196V316H76V436Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
