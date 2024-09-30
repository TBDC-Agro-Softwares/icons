import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TISyncCircleSharp",
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
        d: "M256 48C141.13 48 48 141.13 48 256C48 370.87 141.13 464 256 464C370.87 464 464 370.87 464 256C464 141.13 370.87 48 256 48ZM256 368C199.455 367.976 151.766 325.875 144.73 269.77L135.87 278.63L113.24 256L159.24 210L206.79 255.48L184.67 278.6L177.47 271.72C183.521 301.469 205.839 325.257 235.141 333.192C264.443 341.127 295.715 331.85 315.95 309.22L339.72 330.63C318.361 354.375 287.938 367.955 256 368ZM352.79 302L305.24 256.5L327.36 233.38L334.22 239.93C328.08 210.304 305.79 186.655 276.579 178.774C247.368 170.893 216.208 180.122 196 202.64L172.18 181.27C201.554 148.545 247.34 136.001 289.291 149.184C331.243 162.367 361.624 198.846 367 242.49L376.11 233.37L398.76 256L352.79 302Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
