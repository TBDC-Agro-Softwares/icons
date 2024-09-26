import { defineComponent as o, computed as n, openBlock as a, createElementBlock as r, normalizeClass as s, normalizeStyle as C, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIHandLeftFill",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (c, t) => (a(), r("svg", {
      class: s(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M432.801 211.44C417.281 202.62 397.891 209.16 389.491 225.12L348.111 309.53C346.502 312.846 342.596 314.346 339.181 312.96C336.513 311.897 334.764 309.312 334.771 306.44V72C334.771 58.09 321.921 48 308.001 48C294.081 48 282.001 58.09 282.001 72V228.64C282.071 234.723 277.289 239.757 271.211 240C268.257 240.056 265.405 238.922 263.297 236.853C261.188 234.784 260 231.954 260.001 229V24C260.001 10.09 249.061 0 235.141 0C221.221 0 210.001 10.09 210.001 24V228.64C210.071 234.723 205.289 239.757 199.211 240C196.257 240.056 193.405 238.922 191.297 236.853C189.188 234.784 188 231.954 188.001 229V56C188.001 42.09 175.921 32 162.001 32C148.081 32 136.001 43.09 136.001 57V244.64C136.071 250.723 131.289 255.757 125.211 256C122.257 256.056 119.405 254.922 117.297 252.853C115.188 250.784 114 247.954 114.001 245V120C114.001 106.09 102.921 96 89.001 96C75.081 96 63.881 106.22 64.001 120V336C64.001 453.41 136.001 512 224.001 512H240.001C328.001 512 355.711 472.4 376.001 424L444.711 255C451.331 237 448.311 220.25 432.801 211.44Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
