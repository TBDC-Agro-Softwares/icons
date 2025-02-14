import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TILockClosedOutline",
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
        d: "M351.987 111.412C351.139 59.1254 308.489 17 256 17C202.981 17 160 59.9807 160 113V192H144C108.654 192 80 220.654 80 256V432C80 467.346 108.654 496 144 496H368C403.346 496 432 467.346 432 432V256C432 220.654 403.346 192 368 192H352V113L351.987 111.412ZM320 192V113C320 77.6538 291.346 49 256 49C221.007 49 192.574 77.0836 192.009 111.942L192 113V192H320ZM176 224H144C126.327 224 112 238.327 112 256V432C112 449.673 126.327 464 144 464H368C385.673 464 400 449.673 400 432V256C400 238.327 385.673 224 368 224H336H176Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
