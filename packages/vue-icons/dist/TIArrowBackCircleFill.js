import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIArrowBackCircleFill",
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
        d: "M48 256C48 370.87 141.13 464 256 464C370.87 464 464 370.87 464 256C464 141.13 370.87 48 256 48C141.13 48 48 141.13 48 256ZM260.65 164.64C263.663 167.629 265.366 171.692 265.383 175.936C265.4 180.18 263.729 184.257 260.74 187.27L208.42 240H342C350.837 240 358 247.163 358 256C358 264.837 350.837 272 342 272H208.42L260.74 324.73C264.766 328.792 266.32 334.694 264.815 340.212C263.31 345.73 258.976 350.026 253.445 351.482C247.914 352.938 242.026 351.332 238 347.27L158.61 267.27C152.42 261.032 152.42 250.968 158.61 244.73L238 164.73C240.99 161.711 245.057 160.004 249.306 159.987C253.555 159.97 257.637 161.644 260.65 164.64Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as default
};
