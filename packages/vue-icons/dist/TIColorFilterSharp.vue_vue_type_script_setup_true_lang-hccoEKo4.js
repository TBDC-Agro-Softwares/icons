import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIColorFilterSharp",
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
    return (d, t) => (s(), n("svg", {
      class: a(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 185C296.366 160.127 345.37 153.487 390.9 166.72C382.36 99.83 325.12 48 256 48C186.88 48 129.64 99.83 121.1 166.67C166.637 153.451 215.641 160.11 256 185ZM336 331.73C335.032 376.509 316.171 419.034 283.63 449.81C302.38 459.161 323.048 464.019 344 464C419 464 480 403 480 328C479.979 283.192 457.888 241.27 420.94 215.92C411.316 265.259 380.168 307.727 336 331.73ZM332.94 296.08C326.266 261.702 309.007 230.271 283.58 206.19H283.57C317.055 189.554 355.916 187.452 391 200.38C386.262 239.129 365.119 273.98 332.94 296.08ZM176.05 331.73C131.859 307.74 100.688 265.271 91.05 215.92C54.1056 241.272 32.0188 283.194 32 328C32 403 93 464 168 464C188.969 464.027 209.655 459.168 228.42 449.81C195.879 419.034 177.018 376.509 176.05 331.73ZM228.42 206.19C202.993 230.271 185.734 261.702 179.06 296.08C146.881 273.98 125.738 239.129 121 200.38C156.081 187.455 194.938 189.557 228.42 206.19ZM302.9 345.33C272.266 354.224 239.734 354.224 209.1 345.33C213.435 378.927 230.161 409.694 256 431.6C281.839 409.694 298.565 378.927 302.9 345.33ZM303 311.62C272.663 322.793 239.337 322.793 209 311.62C213.136 277.669 229.918 246.525 256 224.4C282.082 246.525 298.864 277.669 303 311.62Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
