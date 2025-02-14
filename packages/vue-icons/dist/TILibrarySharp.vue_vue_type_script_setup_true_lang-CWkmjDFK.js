import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TILibrarySharp",
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
    return (C, t) => (s(), a("svg", {
      class: n(i.value),
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
        d: "M340 480H268C261.373 480 256 474.627 256 468V44C256 37.3726 261.373 32 268 32H340C346.627 32 352 37.3726 352 44V468C352 474.627 346.627 480 340 480ZM28 480H84C90.6274 480 96 474.627 96 468V92C96 85.3726 90.6274 80 84 80H28C21.3726 80 16 85.3726 16 92V468C16 474.627 21.3726 480 28 480ZM240 156V208H112V156C112 149.373 117.373 144 124 144H228C234.627 144 240 149.373 240 156ZM112 416V468C112 474.627 117.373 480 124 480H228C234.627 480 240 474.627 240 468V416H112ZM240 240H112V384H240V240ZM399 468.53L369 100.7C368.463 94.212 373.198 88.4794 379.67 87.78L451.8 80.27C455.008 79.9363 458.215 80.9082 460.699 82.9663C463.182 85.0245 464.732 87.9957 465 91.21L495.08 457.55C495.612 463.961 490.994 469.652 484.61 470.45L412.45 479.45C409.205 479.856 405.935 478.92 403.396 476.859C400.857 474.798 399.269 471.789 399 468.53Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
