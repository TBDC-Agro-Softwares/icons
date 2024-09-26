import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIEllipsisVerticalCircleSharp",
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
    return (p, t) => (s(), a("svg", {
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
        d: "M464 256C464 141.13 370.87 48 256 48C141.13 48 48 141.13 48 256C48 370.87 141.13 464 256 464C370.87 464 464 370.87 464 256ZM230 166C230 151.641 241.641 140 256 140C270.359 140 282 151.641 282 166C282 180.359 270.359 192 256 192C241.641 192 230 180.359 230 166ZM230 256C230 241.641 241.641 230 256 230C270.359 230 282 241.641 282 256C282 270.359 270.359 282 256 282C241.641 282 230 270.359 230 256ZM230 346C230 331.641 241.641 320 256 320C270.359 320 282 331.641 282 346C282 360.359 270.359 372 256 372C241.641 372 230 360.359 230 346Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
