import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TICameraReverseSharp",
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
        d: "M456 144H373C370 144 366.28 142.06 363.38 139L336.07 96.21C326 80 320 80 302 80H210C192 80 187 80 175.93 96.21L148.62 139C146.4 141.42 143.28 144 140 144V128C140 123.582 136.418 120 132 120H92C87.5817 120 84 123.582 84 128V144H56C42.7452 144 32 154.745 32 168V408C32 421.255 42.7452 432 56 432H456C469.255 432 480 421.255 480 408V168C480 154.745 469.255 144 456 144ZM256 368C208.18 368 168.24 333.77 161 288H117.37L176 229.37L234.63 288H194C199.481 309.157 215.369 326.061 236.147 332.841C256.924 339.621 279.725 335.342 296.63 321.49L320 343L316.32 346.72C299.212 360.455 277.939 367.959 256 368ZM336 314.16L277.11 256H318C312.454 234.795 296.483 217.88 275.631 211.127C254.78 204.373 231.924 208.713 215 222.64L192 200L195.14 197.55C212.274 183.622 233.679 176.012 255.76 176C303.61 176 342.76 210.19 350 256H394.92L336 314.16Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
