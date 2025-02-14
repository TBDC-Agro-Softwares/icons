import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIReturnUpBackFill",
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
    return (p, t) => (r(), s("svg", {
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
        d: "M123.314 148.686C117.065 142.438 106.935 142.438 100.686 148.686L36.6863 212.686L36.4296 212.949C30.4391 219.215 30.5247 229.152 36.6863 235.314L100.686 299.314L100.949 299.57C107.215 305.561 117.152 305.475 123.314 299.314L123.57 299.051C129.561 292.785 129.475 282.848 123.314 276.686L86.6271 240H358L359.48 240.012C408.231 240.834 448 282.162 448 332V352L448.003 352.315C448.171 361.006 455.269 368 464 368C472.837 368 480 360.837 480 352V332L479.984 329.969C478.905 263.054 424.616 208 358 208H86.6271L123.314 171.314L123.57 171.051C129.561 164.785 129.475 154.848 123.314 148.686Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
