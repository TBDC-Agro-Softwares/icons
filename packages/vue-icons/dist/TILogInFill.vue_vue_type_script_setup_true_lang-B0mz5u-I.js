import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TILogInFill",
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
    return (p, t) => (r(), s("svg", {
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
        d: "M232 80H392C422.914 80.0331 447.967 105.086 448 136V376C447.967 406.914 422.914 431.967 392 432H240C209.79 432 176 408.05 176 376V272H329.37L276.69 324.69C270.714 330.981 270.84 340.888 276.976 347.024C283.111 353.16 293.019 353.286 299.31 347.31L379.31 267.31C385.553 261.062 385.553 250.938 379.31 244.69L299.31 164.69C293.019 158.714 283.111 158.84 276.976 164.976C270.84 171.112 270.714 181.019 276.69 187.31L329.37 240H176V136C176.033 105.086 201.086 80.0331 232 80ZM176 240H80C71.1634 240 64 247.163 64 256C64 264.837 71.1634 272 80 272H176V240Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
