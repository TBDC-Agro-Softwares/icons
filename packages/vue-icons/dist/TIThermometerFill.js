import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIThermometerFill",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (n(), s("svg", {
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
        d: "M320 287.18V80.9999C320 45.8799 292.11 16.5799 257 16.0499C239.86 15.8038 223.336 22.4353 211.121 34.4621C198.907 46.4888 192.02 62.9081 192 80.0499V287.18C191.995 289.684 190.819 292.041 188.82 293.55C160.554 315.029 143.969 348.499 144 384C144 445.856 194.144 496 256 496C317.856 496 368 445.856 368 384C368.031 348.499 351.446 315.029 323.18 293.55C321.182 292.041 320.005 289.684 320 287.18ZM254.07 432C232.726 431.119 214.533 416.239 209.436 395.494C204.339 374.749 213.565 353.132 232.07 342.46C237.015 339.605 240.064 334.33 240.07 328.62V112.45C240.07 103.84 246.69 96.4499 255.3 96.0199C259.66 95.829 263.909 97.4273 267.062 100.444C270.215 103.462 271.999 107.636 272 112V328.58C272.038 334.347 275.143 339.658 280.15 342.52C299.249 353.598 308.328 376.275 302.15 397.473C295.972 418.67 276.13 432.919 254.07 432Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as default
};
