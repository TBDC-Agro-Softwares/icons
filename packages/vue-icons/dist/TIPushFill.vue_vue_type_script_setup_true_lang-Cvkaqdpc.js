import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIPushFill",
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
    return (u, t) => (n(), r("svg", {
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
        d: "M272 352H376C406.914 351.967 431.967 326.914 432 296V88C431.967 57.0858 406.914 32.0331 376 32H136C105.086 32.0331 80.0331 57.0858 80 88V296C80.0331 326.914 105.086 351.967 136 352H240V464C240 472.837 247.163 480 256 480C264.837 480 272 472.837 272 464V352ZM272 352H240V198.63L187.31 251.31C181.019 257.286 171.112 257.16 164.976 251.024C158.84 244.888 158.714 234.981 164.69 228.69L244.69 148.69C250.938 142.447 261.062 142.447 267.31 148.69L347.31 228.69C353.286 234.981 353.16 244.888 347.024 251.024C340.888 257.16 330.981 257.286 324.69 251.31L272 198.63V352Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
