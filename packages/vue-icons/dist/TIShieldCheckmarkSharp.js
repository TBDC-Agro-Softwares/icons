import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIShieldCheckmarkSharp",
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
    return (p, t) => (a(), n("svg", {
      class: s(i.value),
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
        d: "M479.063 111.94L478.273 99.41L465.913 97.2C379.413 81.68 343.303 70.46 262.583 34L255.993 31L249.403 34C168.683 70.46 132.573 81.68 46.0726 97.2L33.7126 99.41L32.9226 111.94C29.0726 173.05 37.2826 229.99 57.3526 281.18C73.7878 322.935 98.1108 361.134 128.993 393.69C182.463 450.42 239.233 475.06 250.063 479.42L256.063 481.83L262.063 479.42C272.893 475.06 329.663 450.42 383.133 393.69C413.964 361.122 438.239 322.924 454.633 281.18C474.703 229.99 482.913 173.05 479.063 111.94ZM226.153 327.94L153.363 256.58L175.763 233.72L224.233 281.21L334.363 154.01L358.563 174.95L226.153 327.94Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as default
};
