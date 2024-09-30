import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIClipboardFill",
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
    return (p, t) => (n(), s("svg", {
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
        d: "M368 48H356.59C353.302 47.9967 350.35 45.9815 349.15 42.92C342.858 26.7071 327.261 16.0177 309.87 16H202.13C184.739 16.0177 169.142 26.7071 162.85 42.92C161.65 45.9815 158.698 47.9967 155.41 48H144C108.654 48 80 76.6538 80 112V432C80 467.346 108.654 496 144 496H368C403.346 496 432 467.346 432 432V112C432 76.6538 403.346 48 368 48ZM319.87 112H192.13C183.293 112 176.13 104.837 176.13 96C176.13 87.1634 183.293 80 192.13 80H319.87C328.707 80 335.87 87.1634 335.87 96C335.87 104.837 328.707 112 319.87 112Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
