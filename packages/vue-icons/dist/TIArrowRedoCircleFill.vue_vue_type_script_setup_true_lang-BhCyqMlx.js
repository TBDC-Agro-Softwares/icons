import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIArrowRedoCircleFill",
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
    return (p, t) => (n(), s("svg", {
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
        d: "M48 256C48 370.87 141.13 464 256 464C370.87 464 464 370.87 464 256C464 141.13 370.87 48 256 48C141.13 48 48 141.13 48 256ZM144 322.67C149.45 261.22 178.14 205.58 266.87 205.58V168.26C266.901 164.961 268.879 161.992 271.912 160.692C274.945 159.392 278.459 160.007 280.87 162.26L365.42 242C367.066 243.55 367.999 245.71 367.999 247.97C367.999 250.23 367.066 252.39 365.42 253.94L281 333.71C278.589 335.963 275.075 336.578 272.042 335.278C269.009 333.978 267.031 331.009 267 327.71V290.42C209.93 290.42 182.49 303.89 158.42 329.1C152.93 334.75 143.35 330.42 144 322.67Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
