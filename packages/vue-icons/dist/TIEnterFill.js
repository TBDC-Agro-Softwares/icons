import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIEnterFill",
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
        d: "M160 240V136C160.033 105.086 185.086 80.0331 216 80H424C454.914 80.0331 479.967 105.086 480 136V376C479.967 406.914 454.914 431.967 424 432H216C185.086 431.967 160.033 406.914 160 376V272H313.37L260.69 324.69C254.714 330.981 254.84 340.888 260.976 347.024C267.111 353.16 277.019 353.286 283.31 347.31L363.31 267.31C369.553 261.062 369.553 250.938 363.31 244.69L283.31 164.69C277.019 158.714 267.111 158.84 260.976 164.976C254.84 171.112 254.714 181.019 260.69 187.31L313.37 240H160ZM160 240H48C39.1634 240 32 247.163 32 256C32 264.837 39.1634 272 48 272H160V240Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
