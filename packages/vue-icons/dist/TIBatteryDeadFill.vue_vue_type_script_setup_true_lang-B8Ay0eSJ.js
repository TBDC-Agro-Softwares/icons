import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIBatteryDeadFill",
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
    return (p, t) => (s(), a("svg", {
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
        d: "M386.3 128H77.7C43.624 128 16 155.624 16 189.7V322.3C16 356.376 43.624 384 77.7 384H386.3C420.376 384 448 356.376 448 322.3V189.7C448 155.624 420.376 128 386.3 128ZM77.7 160H386.3C402.703 160 416 173.297 416 189.7V322.3C416 338.703 402.703 352 386.3 352H77.7C61.2971 352 48 338.703 48 322.3V189.7C48 173.297 61.2971 160 77.7 160ZM495.997 218.355C495.829 209.664 488.731 202.67 480 202.67C471.163 202.67 464 209.833 464 218.67V293.33L464.003 293.645C464.171 302.336 471.269 309.33 480 309.33C488.837 309.33 496 302.167 496 293.33V218.67L495.997 218.355Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
