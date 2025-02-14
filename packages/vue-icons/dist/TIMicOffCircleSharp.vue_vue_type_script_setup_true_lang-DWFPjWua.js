import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIMicOffCircleSharp",
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
        d: "M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM320 248.22V208H352V248.22C351.917 263.598 347.263 278.604 338.63 291.33L316 266.4C318.611 260.694 319.975 254.496 320 248.22ZM256 128C282.478 128.077 303.923 149.522 304 176V240C303.997 243.924 303.513 247.833 302.56 251.64L213.56 153.72C221.856 137.952 238.183 128.057 256 128ZM304 384H208V352H240V334.26C221.806 330.991 204.817 322.92 190.79 310.88C170.94 293.83 160 271.58 160 248.22V208H192V248.22C192 273.88 220 303.7 256 303.7C258.34 303.694 260.678 303.544 263 303.25L287.52 330.25C282.469 331.997 277.286 333.335 272.02 334.25V352H304.02L304 384ZM208.09 242.87L248.59 287.42C226.335 283.865 209.514 265.362 208.09 242.87ZM344.16 367.76L143.66 149.26L167.34 127.74L367.84 346.24L344.16 367.76Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
