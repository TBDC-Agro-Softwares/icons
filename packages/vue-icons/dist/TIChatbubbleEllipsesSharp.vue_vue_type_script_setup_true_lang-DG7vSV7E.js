import { defineComponent as o, computed as s, openBlock as r, createElementBlock as a, normalizeClass as n, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIChatbubbleEllipsesSharp",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), a("svg", {
      class: n(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M475.22 206.52C464.88 157.87 437.46 113.59 398 81.84C357.647 49.5531 307.5 31.9745 255.82 32C194.9 32 138 55.47 95.4601 98.09C54.3501 139.33 31.8201 193.78 32.0001 251.37C32.0015 293.593 44.3973 334.887 67.6501 370.13L72.0001 376.18L48.0001 480L162.8 451.44C162.8 451.44 165.1 452.21 166.8 452.86C168.5 453.51 183.13 459.12 198.65 463.46C211.55 467.06 238.39 472.46 259.42 472.46C319.07 472.46 374.77 449.36 416.25 407.4C457.36 365.77 480 310.42 480 251.49C480.003 236.373 478.401 221.299 475.22 206.52ZM160 288C142.327 288 128 273.673 128 256C128 238.327 142.327 224 160 224C177.673 224 192 238.327 192 256C192 273.673 177.673 288 160 288ZM256 288C238.327 288 224 273.673 224 256C224 238.327 238.327 224 256 224C273.673 224 288 238.327 288 256C288 273.673 273.673 288 256 288ZM352 288C334.327 288 320 273.673 320 256C320 238.327 334.327 224 352 224C369.673 224 384 238.327 384 256C384 273.673 369.673 288 352 288Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
