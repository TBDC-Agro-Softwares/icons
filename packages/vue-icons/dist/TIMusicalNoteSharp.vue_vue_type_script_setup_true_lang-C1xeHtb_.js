import { defineComponent as o, computed as s, openBlock as r, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIMusicalNoteSharp",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (r(), a("svg", {
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
        d: "M381.55 32.0468C363.42 36.3268 254.98 63.1168 225.55 70.2368C224.646 70.4456 224.004 71.2489 224 72.1768V353.297C224 354.139 223.472 354.891 222.68 355.177L182 369.877C152.18 380.537 128 388.817 128 428.937C128 461.407 151.53 476.117 165.95 478.937C170.906 479.757 175.927 480.118 180.95 480.017C189.84 480.017 211.95 476.427 228.47 465.777C256 447.997 256 447.997 256 415.927V169.157C255.997 168.246 256.61 167.449 257.49 167.217L382.49 134.217C383.37 133.985 383.983 133.187 383.98 132.277V33.9968C383.979 33.3914 383.704 32.8191 383.232 32.4402C382.76 32.0613 382.141 31.9166 381.55 32.0468Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
