import { defineComponent as o, computed as s, openBlock as r, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIBrushFill",
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
    return (u, t) => (r(), n("svg", {
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
        d: "M228.23 359.34C229.819 359.857 231.48 360.117 233.15 360.11C237.5 360.112 241.663 358.343 244.68 355.21L463.68 128.21C485.627 106.127 485.578 70.4524 463.57 48.43C441.491 26.4127 405.759 26.4127 383.68 48.43C383.48 48.63 383.28 48.84 383.09 49.06L172 284.16C168.188 288.426 166.943 294.403 168.736 299.836C170.53 305.269 175.087 309.331 180.69 310.49C197.36 313.88 215.16 331.34 217.31 346.34C218.161 352.406 222.402 357.454 228.23 359.34ZM35.0401 437.11C54.4401 463.22 87.7501 480.11 119.89 480.11C168.41 480.11 207.89 440.12 207.89 391C207.89 351.93 176.49 320.14 137.89 320.14C99.2901 320.14 67.8901 351.93 67.8901 391C67.8901 406.7 53.2301 411.57 47.8901 411.57C41.8423 411.568 36.3102 414.976 33.592 420.379C30.8738 425.781 31.4341 432.255 35.0401 437.11Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
