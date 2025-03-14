import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIShieldCheckmarkFill",
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
    return (C, t) => (s(), n("svg", {
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
        d: "M479.07 111.36C478.605 104.004 473.176 97.9182 465.92 96.62C379.42 81.1 343.31 69.88 262.59 33.42C258.401 31.5265 253.6 31.5265 249.41 33.42C168.69 69.88 132.58 81.1 46.0804 96.62C38.8253 97.9182 33.3956 104.004 32.9304 111.36C29.0804 172.47 37.2904 229.41 57.3604 280.6C73.7956 322.355 98.1186 360.554 129 393.11C182.47 449.84 239.24 474.48 250.07 478.84C253.919 480.397 258.222 480.397 262.07 478.84C272.9 474.48 329.67 449.84 383.14 393.11C413.972 360.542 438.247 322.344 454.64 280.6C474.71 229.41 482.92 172.47 479.07 111.36ZM348.07 186.47L237.27 314.47C234.391 317.806 230.263 319.807 225.86 320H225.2C221.013 320.001 216.992 318.36 214 315.43L164.8 267.23C158.488 261.044 158.385 250.913 164.57 244.6C170.756 238.287 180.888 238.184 187.2 244.37L224.2 280.66L323.9 165.53C329.683 158.847 339.788 158.118 346.47 163.9C353.153 169.682 353.883 179.787 348.1 186.47H348.07Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
