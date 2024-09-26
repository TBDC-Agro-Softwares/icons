import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIArchiveOutline",
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
        d: "M436 48H76C51.6995 48 32 67.6995 32 92V116C32 136.14 45.532 153.12 64 158.344V408L64.0102 408.926C64.5928 439.408 89.3976 463.909 119.952 464L392 464L392.926 463.99C423.408 463.407 447.909 438.602 448 408.048L448 158.344C466.468 153.12 480 136.14 480 116V92C480 67.6995 460.301 48 436 48ZM416 160H96L95.9999 407.952C96.0391 421.084 106.569 431.745 119.604 431.996L120 432L391.952 432C405.084 431.961 415.745 421.431 415.996 408.396L416 408V160ZM76 80H436C442.627 80 448 85.3726 448 92V116C448 122.627 442.627 128 436 128H76C69.3726 128 64 122.627 64 116V92C64 85.3726 69.3726 80 76 80ZM308.686 292.686C314.935 286.438 325.065 286.438 331.314 292.686C337.475 298.848 337.561 308.785 331.57 315.051L331.314 315.314L267.314 379.314C261.152 385.475 251.215 385.561 244.949 379.57L244.686 379.314L180.686 315.314C174.438 309.065 174.438 298.935 180.686 292.686C186.848 286.525 196.785 286.439 203.051 292.43L203.314 292.686L240 329.373V224C240 215.163 247.163 208 256 208C264.731 208 271.829 214.994 271.997 223.685L272 224V329.373L308.686 292.686Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
