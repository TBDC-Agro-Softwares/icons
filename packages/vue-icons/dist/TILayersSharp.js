import { defineComponent as o, computed as r, openBlock as a, createElementBlock as s, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const L = /* @__PURE__ */ o({
  __name: "TILayersSharp",
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
    return (p, t) => (a(), s("svg", {
      class: n(i.value),
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
        d: "M480 150L256 48L32 150L256 254L480 150ZM255.71 392.95L110.9 326.75L32 362L256 464L480 362L401.31 326.7L255.71 392.95ZM404.47 222.47L480 256L256 358L32 256L107.33 222.43L256.1 290.6L404.47 222.47Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as default
};
