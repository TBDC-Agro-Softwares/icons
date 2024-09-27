import { defineComponent as o, computed as a, openBlock as r, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TISwapVerticalFill",
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
    const l = e, i = a(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (r(), n("svg", {
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
        d: "M175.997 95.6851C175.829 86.9939 168.731 80 160 80C151.163 80 144 87.1634 144 96V377.373L59.3137 292.686L59.0511 292.43C52.7847 286.439 42.8479 286.525 36.6863 292.686C30.4379 298.935 30.4379 309.065 36.6863 315.314L148.686 427.314L148.949 427.57C155.215 433.561 165.152 433.475 171.314 427.314L283.314 315.314L283.57 315.051C289.561 308.785 289.475 298.848 283.314 292.686C277.065 286.438 266.935 286.438 260.686 292.686L176 377.373V96L175.997 95.6851ZM363.051 84.4296C356.785 78.4391 346.848 78.5247 340.686 84.6863L228.686 196.686L228.43 196.949C222.439 203.215 222.525 213.152 228.686 219.314L228.949 219.57C235.215 225.561 245.152 225.475 251.314 219.314L336 134.627V416L336.003 416.315C336.171 425.006 343.269 432 352 432C360.837 432 368 424.837 368 416V134.627L452.686 219.314L452.949 219.57C459.215 225.561 469.152 225.475 475.314 219.314C481.562 213.065 481.562 202.935 475.314 196.686L363.314 84.6863L363.051 84.4296Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as default
};