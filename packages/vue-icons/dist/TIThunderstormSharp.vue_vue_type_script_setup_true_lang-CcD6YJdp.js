import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const L = /* @__PURE__ */ o({
  __name: "TIThunderstormSharp",
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
    return (p, t) => (s(), n("svg", {
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
        d: "M405.84 136.872C399.152 105.179 382.467 76.4708 358.24 54.9719C321.794 22.3679 271.959 9.14925 224.146 19.4037C176.332 29.6581 136.3 62.15 116.43 106.832C60.5 110.132 16 156.622 16 213.302C16 272.122 63.91 319.972 122.8 319.972H195.11L176 415.972H224V495.972L336 351.972H292.49L300.49 319.972H404.33C454.459 319.77 495.106 279.295 495.519 229.168C495.932 179.04 455.959 137.9 405.84 136.872ZM74.5298 407.149L112.849 330.527L141.47 344.84L103.15 421.463L74.5298 407.149ZM128.838 410.539L98.5204 471.161L127.141 485.474L157.458 424.852L128.838 410.539ZM354.541 407.16L392.861 330.538L421.481 344.852L383.162 421.474L354.541 407.16ZM408.859 410.55L378.542 471.172L407.162 485.485L437.48 424.863L408.859 410.55Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as _
};
