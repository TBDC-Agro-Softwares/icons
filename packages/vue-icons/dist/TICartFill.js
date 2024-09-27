import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TICartFill",
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
    return (C, t) => (a(), n("svg", {
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
        d: "M447.24 112C454.432 111.988 461.248 115.212 465.8 120.78C470.37 126.338 472.205 133.653 470.8 140.71L442 284.71C439.728 295.922 429.879 303.985 418.44 304H176.78L182.42 336H425C433.837 336 441 343.163 441 352C441 360.837 433.837 368 425 368H169C161.235 368.002 154.589 362.427 153.24 354.78L107.58 96H57C48.1634 96 41 88.8366 41 80C41 71.1634 48.1634 64 57 64H121C128.765 63.9984 135.411 69.5728 136.76 77.22L142.89 112H447.24ZM185 448C202.673 448 217 433.673 217 416C217 398.327 202.673 384 185 384C167.327 384 153 398.327 153 416C153 433.673 167.327 448 185 448ZM409 448C426.673 448 441 433.673 441 416C441 398.327 426.673 384 409 384C391.327 384 377 398.327 377 416C377 433.673 391.327 448 409 448Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};