import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIGolfFill",
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
    return (C, t) => (r(), s("svg", {
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
        d: "M272 202.3V320C313.88 322.4 354.05 334.15 386.55 353.7C428.22 378.76 454.77 414.65 463.33 457.5C465.357 467.034 462.997 476.975 456.9 484.58C450.88 491.95 442 496 432 496H79.9996C69.9996 496 61.1296 492 55.1096 484.58C49.0091 476.977 46.6451 467.036 48.6696 457.5C57.2296 414.65 83.7796 378.76 125.45 353.7C157.95 334.15 198.12 322.4 240 320V192.36V191.66V32C239.998 26.5595 242.762 21.4912 247.335 18.5451C251.909 15.5991 257.667 15.179 262.62 17.43L438.62 97.43C444.336 100.024 448.008 105.722 448.008 112C448.008 118.278 444.336 123.976 438.62 126.57L272 202.3ZM240 320.46V399.75C240 408.587 247.163 415.75 256 415.75C264.836 415.75 272 408.587 272 399.75V320.46C266.666 320.147 261.333 319.993 256 320C250.666 320.007 245.333 320.16 240 320.46Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
