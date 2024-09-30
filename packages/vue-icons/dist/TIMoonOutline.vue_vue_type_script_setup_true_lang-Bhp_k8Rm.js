import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIMoonOutline",
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
    return (u, t) => (r(), s("svg", {
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
        d: "M169.614 33.3799C86.4973 69.5607 32 153.945 32 248.05C32 376.177 135.873 480.05 264 480.05C358.105 480.05 442.49 425.553 478.67 342.436C484.471 329.112 470.937 315.579 457.613 321.38C435.017 331.219 406.986 336.05 376 336.05C265.547 336.05 176 246.504 176 136.05C176 105.065 180.832 77.0337 190.67 54.4374C196.471 41.1132 182.939 27.5797 169.614 33.3799ZM149.099 81.3983L149.009 81.8506C145.636 98.8336 144 117.031 144 136.05C144 264.177 247.873 368.05 376 368.05L377.267 368.048C395.827 367.977 413.594 366.339 430.2 363.042L430.651 362.95L430.03 363.837C393.26 415.656 331.606 448.05 264 448.05C153.547 448.05 64 358.504 64 248.05C64 180.444 96.3947 118.791 148.213 82.0202L149.099 81.3983Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
