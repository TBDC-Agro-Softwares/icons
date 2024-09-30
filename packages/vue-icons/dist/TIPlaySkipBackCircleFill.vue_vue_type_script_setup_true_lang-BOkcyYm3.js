import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIPlaySkipBackCircleFill",
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
    return (p, t) => (a(), n("svg", {
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
        d: "M48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48C141.31 48 48 141.31 48 256ZM176 192C176 183.163 183.163 176 192 176C200.837 176 208 183.163 208 192V245L319.68 177.54C323.023 175.537 327.187 175.494 330.571 177.429C333.954 179.363 336.03 182.973 336 186.87V325.13C336.023 329.024 333.944 332.627 330.562 334.556C327.18 336.485 323.02 336.441 319.68 334.44L208 267V320C208 328.837 200.837 336 192 336C183.163 336 176 328.837 176 320V192Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
