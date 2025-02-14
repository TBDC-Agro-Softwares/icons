import { defineComponent as o, computed as s, openBlock as r, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIListSharp",
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
        d: "M64 112H96C104.837 112 112 119.163 112 128V160C112 168.837 104.837 176 96 176H64C55.1634 176 48 168.837 48 160V128C48 119.163 55.1634 112 64 112ZM464 168V120H144V168H464ZM464 280V232H144V280H464ZM464 344V392H144V344H464ZM96 224H64C55.1634 224 48 231.163 48 240V272C48 280.837 55.1634 288 64 288H96C104.837 288 112 280.837 112 272V240C112 231.163 104.837 224 96 224ZM64 336H96C104.837 336 112 343.163 112 352V384C112 392.837 104.837 400 96 400H64C55.1634 400 48 392.837 48 384V352C48 343.163 55.1634 336 64 336Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
