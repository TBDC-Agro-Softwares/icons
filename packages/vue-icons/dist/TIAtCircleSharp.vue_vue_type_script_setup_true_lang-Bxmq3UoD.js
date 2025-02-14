import { defineComponent as o, computed as C, openBlock as r, createElementBlock as s, normalizeClass as n, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIAtCircleSharp",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), s("svg", {
      class: n(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256.41 48.74C141.56 48.74 48.41 141.85 48.41 256.74C48.41 371.63 141.53 464.74 256.41 464.74C371.29 464.74 464.41 371.62 464.41 256.74C464.41 141.86 371.25 48.74 256.41 48.74ZM381.22 252C378.37 284.63 364.44 301.7 353.22 310.26C342 318.82 328.53 322.6 316.89 320.52C305.905 318.536 296.177 312.224 289.89 303C278.323 314.612 262.56 321.066 246.17 320.9C231.514 321.014 217.5 314.895 207.62 304.07C196.23 291.65 190.62 273.71 192.29 254.84C195.34 219.84 223.21 197.45 249.16 193.36C276.37 189.07 301.4 199.9 312.07 212.82L315.91 217.48L309.57 267.86C308.38 282.2 312.86 291.34 321.86 292.96C324.25 293.38 329.97 292.83 336.24 288.03C342.96 282.88 351.38 272.03 353.34 249.56C355.66 223.01 348.99 200.37 334.06 184.07C318.56 167.17 294.96 158.23 265.82 158.23C211.82 158.23 164.01 202.66 159.25 257.23C156.96 283.43 164.91 307.91 181.64 326.16C198 344 221 353.88 246.29 353.88C265.29 353.88 276.9 351.83 295.78 345.1L309 340.41L318.39 366.78L305.2 371.48C283.38 379.25 268.52 381.88 246.32 381.88C213.04 381.88 182.75 368.82 161.02 345.11C138.93 321 128.4 288.94 131.37 254.82C134.28 221.49 149.83 190.19 175.14 166.7C200.45 143.21 232.71 130.21 265.84 130.21C303.04 130.21 333.78 142.29 354.72 165.14C374.77 187.05 384.2 217.89 381.22 252ZM220.17 257.26C221.96 236.84 238.68 223.33 253.51 221V220.99C264.888 219.204 276.534 221.431 286.45 227.29L284.8 240.4H284.71L282.96 254.29C279.96 278.09 265.86 292.88 246.16 292.88C239.352 292.998 232.825 290.173 228.25 285.13C222.17 278.48 219.17 268.32 220.17 257.26Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
