import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIReturnUpForwardOutline",
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
    return (u, t) => (n(), s("svg", {
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
        d: "M411.051 148.43C404.785 142.439 394.848 142.525 388.686 148.686L388.43 148.949C382.439 155.215 382.525 165.152 388.686 171.314L425.373 208H154L151.985 208.017C85.6228 209.125 32 264.85 32 332V352L32.003 352.315C32.1708 361.006 39.2686 368 48 368C56.8366 368 64 360.837 64 352V332L64.0121 330.492C64.8124 280.83 105.07 240 154 240H425.373L388.686 276.686L388.43 276.949C382.439 283.215 382.525 293.152 388.686 299.314C394.935 305.562 405.065 305.562 411.314 299.314L475.314 235.314L475.57 235.051C481.561 228.785 481.475 218.848 475.314 212.686L411.314 148.686L411.051 148.43Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
