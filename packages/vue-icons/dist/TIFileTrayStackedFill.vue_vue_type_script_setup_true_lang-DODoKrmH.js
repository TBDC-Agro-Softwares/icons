import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIFileTrayStackedFill",
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
    return (d, t) => (s(), a("svg", {
      class: n(i.value),
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
        d: "M479.46 187.88L447.61 68.45C441.27 35.59 417.54 16 384 16H128C111.2 16 97 20.69 85.9 29.94C74.8 39.19 67.66 52 64.4 68.4L32.54 187.88C32.1806 189.224 31.999 190.609 32 192V240C32 275.29 60.71 320 96 320H416C451.29 320 480 275.29 480 240V192C480.001 190.609 479.819 189.224 479.46 187.88ZM440.57 176H320C311.215 175.956 304.055 183.035 304 191.82C304 218.33 282.51 239.82 256 239.82C229.49 239.82 208 218.33 208 191.82C207.945 183.035 200.785 175.956 192 176H71.43C70.808 176 70.2216 175.71 69.8434 175.216C69.4652 174.722 69.3383 174.081 69.5 173.48L95.71 75C99.26 56.59 109.52 48 128 48H384C402.59 48 412.84 56.53 416.25 74.85L442.5 173.48C442.662 174.081 442.535 174.722 442.157 175.216C441.778 175.71 441.192 176 440.57 176ZM320 352H464C472.837 352 480 359.163 480 368V432C479.961 467.33 451.33 495.961 416 496H96C60.6698 495.961 32.0386 467.33 32 432V368C32 359.163 39.1634 352 48 352H192C200.837 352 208 359.163 208 368C208 394.51 229.49 416 256 416C282.51 416 304 394.51 304 368C304 359.163 311.163 352 320 352Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
