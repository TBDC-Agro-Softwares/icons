import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIImagesFill",
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
    return (C, t) => (n(), r("svg", {
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
        d: "M64 32H384C413.183 32.0241 438.667 51.7537 446 80H120C80.2355 80 48 112.235 48 152V414C19.7537 406.667 0.0240737 381.183 0 352V96C0 60.6538 28.6538 32 64 32ZM450.29 112H142C108 112 80 139.51 80 173.33V418.67C80 452.49 108 480 142 480H450C484 480 512 453.82 512 420V173.33C512 139.51 484.32 112 450.29 112ZM373.14 173.34C398.508 173.494 418.962 194.157 418.86 219.526C418.757 244.894 398.136 265.39 372.767 265.339C347.399 265.288 326.86 244.709 326.86 219.34C326.959 193.865 347.665 173.28 373.14 173.33V173.34ZM111.73 418.68C111.73 435.59 124.59 449.34 141.59 449.34L215.27 449.33L328.27 337L265.63 274.89C248.243 257.72 220.538 256.921 202.19 273.06L111.73 353.85V418.68ZM480 418.67C479.997 426.809 476.759 434.614 470.999 440.365C465.239 446.115 457.429 449.341 449.29 449.33H259L376.08 333C393.23 318.532 418.292 318.465 435.52 332.84L480 370.59V418.67Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
