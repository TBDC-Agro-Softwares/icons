import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as d, createElementVNode as c } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIFolderOutline",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (r(), s("svg", {
      class: a(i.value),
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
        d: "M147.89 64H72C41.0721 64 16 89.0721 16 120V192V392C16 422.928 41.0721 448 72 448H440C470.928 448 496 422.928 496 392V192V152C496 121.072 470.928 96 440 96H220.11C215.372 95.9999 210.739 94.5969 206.796 91.968L178.955 73.4072C169.757 67.2737 158.947 64 147.89 64ZM464 176V152C464 138.745 453.255 128 440 128H220.11C209.053 128 198.243 124.726 189.045 118.593L161.204 100.032C157.261 97.403 152.628 96 147.89 96H72C58.7452 96 48 106.745 48 120V176H464ZM48 208H464V392C464 405.255 453.255 416 440 416H72C58.7452 416 48 405.255 48 392V208Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
