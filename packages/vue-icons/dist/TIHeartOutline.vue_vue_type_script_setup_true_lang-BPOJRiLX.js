import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIHeartOutline",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), s("svg", {
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
        d: "M352.921 64C319.844 64 291.76 77.8922 268.842 100.646L267.905 101.584C263.869 105.661 260.147 109.873 256.731 114.15L256.001 115.073L255.27 114.15C251.592 109.544 247.558 105.014 243.159 100.646C220.242 77.8922 192.157 64 159.081 64C97.9428 64 48.6357 114.781 48.0014 176.646C47.4441 232.035 67.8007 282.343 106.616 329.664C138.103 368.049 180.128 403.18 238.015 442.469C248.863 449.849 263.138 449.849 274.001 442.459C331.87 403.178 373.891 368.048 405.377 329.664C444.193 282.343 464.552 232.035 464 176.65C463.365 114.781 414.058 64 352.921 64ZM352.921 96C396.224 96 431.544 132.376 432.001 176.974C432.473 224.264 414.971 267.511 380.636 309.369C351.759 344.574 312.375 377.609 257.677 414.862L256.001 416.001L252.684 413.743C198.828 376.943 159.944 344.218 131.357 309.369C97.0229 267.512 79.5239 224.265 79.9997 176.971C80.4569 132.376 115.777 96 159.081 96C182.809 96 203.242 106.108 220.612 123.354C226.857 129.555 232.231 136.235 236.688 142.897C238.103 145.012 239.321 146.971 240.34 148.726L241.041 149.954C241.229 150.291 241.379 150.566 241.491 150.775L241.69 151.155C247.527 162.83 264.079 162.947 270.131 151.506L270.51 150.775C270.697 150.427 270.989 149.896 271.388 149.199C272.46 147.326 273.77 145.204 275.313 142.897C279.77 136.235 285.144 129.555 291.389 123.354C308.759 106.108 329.193 96 352.921 96Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
