import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIAlertFill",
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
    return (u, t) => (n(), s("svg", {
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
        d: "M224.036 96.5311C223.172 78.9031 238.109 64.2978 255.498 64.0045L256.031 64C273.739 64 289.058 78.8773 288.012 96.8103L280.028 312.397C279.818 325.337 269.368 335.787 256.428 335.997L256.031 336L255.538 335.994L254.913 335.974C242.401 335.396 232.441 325.272 232.043 312.776L232.035 312.396L224.047 96.715L224.036 96.5311ZM224.031 416C224.031 398.327 238.358 384 256.031 384C273.704 384 288.031 398.327 288.031 416C288.031 433.673 273.704 448 256.031 448C238.358 448 224.031 433.673 224.031 416Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
