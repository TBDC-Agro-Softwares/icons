import { defineComponent as o, computed as s, openBlock as a, createElementBlock as r, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIMusicalNotesSharp",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (a(), r("svg", {
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
        d: "M429.46 32.0743C405.86 38.6043 223.91 90.8843 178.92 103.504C177.201 103.986 176.01 105.549 176 107.334V354.334C176.002 355.183 175.469 355.94 174.67 356.224L146.82 365.774C127.82 373.214 80 382.454 80 424.964C80 460.504 104.63 476.504 125.86 479.244C128.439 479.707 131.05 479.975 133.67 480.044C141.04 480.044 170.05 472.964 186.97 461.964C208 448.254 208 448.004 208 412.004V202.004C208 201.104 208.62 201.164 209.48 200.934L397.48 149.014C398.094 148.845 398.752 148.978 399.252 149.373C399.751 149.768 400.033 150.378 400.01 151.014V306.554C400.008 307.41 399.461 308.17 398.65 308.444C389.75 311.444 379.42 314.944 372.17 317.564C341.39 328.684 304 335.654 304 376.004C304 414.514 332.26 430.584 350.3 431.834C357.424 432.374 364.588 432.038 371.63 430.834C380.63 429.454 395.72 424.934 409.77 415.974C432 401.794 432 401.514 432 360.004V34.0043C432.001 33.3777 431.709 32.7867 431.21 32.4076C430.711 32.0285 430.063 31.9051 429.46 32.0743Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};