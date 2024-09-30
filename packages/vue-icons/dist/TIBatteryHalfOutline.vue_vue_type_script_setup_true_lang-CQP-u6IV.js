import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIBatteryHalfOutline",
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
    return (u, t) => (r(), a("svg", {
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
        d: "M77.7 128H386.3C420.376 128 448 155.624 448 189.7V322.3C448 356.376 420.376 384 386.3 384H77.7C43.624 384 16 356.376 16 322.3V189.7C16 155.624 43.624 128 77.7 128ZM386.3 160H77.7C61.2971 160 48 173.297 48 189.7V322.3C48 338.703 61.2971 352 77.7 352H386.3C402.703 352 416 338.703 416 322.3V189.7C416 173.297 402.703 160 386.3 160ZM236 182.93H89.69C78.6443 182.93 69.69 191.884 69.69 202.93V309.06C69.69 320.106 78.6443 329.06 89.69 329.06H236C247.046 329.06 256 320.106 256 309.06V202.93C256 191.884 247.046 182.93 236 182.93ZM495.997 218.355C495.829 209.664 488.731 202.67 480 202.67C471.163 202.67 464 209.833 464 218.67V293.33L464.003 293.645C464.171 302.336 471.269 309.33 480 309.33C488.837 309.33 496 302.167 496 293.33V218.67L495.997 218.355Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
