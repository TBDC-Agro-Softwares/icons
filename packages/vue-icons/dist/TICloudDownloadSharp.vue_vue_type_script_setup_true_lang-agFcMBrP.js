import { defineComponent as i, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as d, createElementVNode as c } from "vue";
const m = /* @__PURE__ */ i({
  __name: "TICloudDownloadSharp",
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
    const l = e, o = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (r(), s("svg", {
      class: a(o.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M414.11 169.96C436.49 172.71 456.94 179.5 472.7 189.5C498.41 205.83 512 230.35 512 260.4C512 317.76 468.64 352 396 352H272V208H240V352H136C55.92 352 0 305 0 237.6C0 203.56 13.7 174.83 39.63 154.42C59.34 139.03 85.67 128.74 116.34 124.42C126.026 100.741 141.619 79.9391 161.63 64C188 43.08 220.65 32 256 32C296.21 32 334.15 46.45 362.84 72.7C389.89 97.44 407.46 130.86 414.11 169.96ZM240 352V419.42L191.98 371L169.37 394L256 480L342.63 394L320.02 371L272 419.42V352H240Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
