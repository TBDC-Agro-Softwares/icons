import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIDocumentAttachSharp",
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
    const t = e, i = n(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (d, l) => (r(), a("svg", {
      class: s(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M272 240C272 244.418 275.582 248 280 248H464V476C464 482.627 458.627 488 452 488H140C133.373 488 128 482.627 128 476V327.66C81.19 323.76 48 285.64 48 234.13V152H80V234.13C80 251.58 85.47 267.36 95.41 278.59C105.5 290 119.53 296 136 296C152.47 296 166.5 290 176.59 278.59C186.53 267.36 192 251.58 192 234.13V95.38C192 86.15 189.69 56 160 56C136.41 56 128 76.66 128 96V240C128 246.56 133.77 248 136 248C138.143 248.07 140.218 247.25 141.734 245.734C143.25 244.218 144.07 242.143 144 240V88H176V240C176.116 250.644 171.939 260.886 164.413 268.413C156.886 275.939 146.644 280.116 136 280C116.34 280 96 265 96 240V96C96 53.61 122.32 24 160 24C179.59 24 196.72 31.88 208.25 46.19C210.707 49.2581 212.882 52.5414 214.75 56H272V240ZM454.31 216H308C305.791 216 304 214.209 304 212V65.69C303.999 64.8819 304.485 64.1528 305.231 63.8421C305.977 63.5314 306.837 63.7003 307.41 64.27L455.73 212.59C456.3 213.163 456.469 214.023 456.158 214.769C455.847 215.515 455.118 216.001 454.31 216Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
