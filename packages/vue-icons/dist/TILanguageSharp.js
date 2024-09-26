import { defineComponent as o, computed as a, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TILanguageSharp",
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
    const l = e, i = a(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (n(), r("svg", {
      class: s(i.value),
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
        d: "M226.58 277.33C251.41 304.23 271.75 319.81 272 320L255 362L242.6 353.42C241.52 352.58 222.82 338.03 198.3 311.75C152.44 363.14 116.033 386.31 107.903 391.484C107.05 392.027 106.509 392.371 106.3 392.53L87 404L64 368L79.7 357.47C79.7254 357.451 79.8471 357.378 80.0617 357.249C84.1596 354.792 122.114 332.031 169.36 278L169.36 278C168.43 276.82 167.5 275.64 166.58 274.43C132.396 230.087 115.826 195.98 112.477 189.085C112.15 188.412 111.949 187.999 111.87 187.86L105 174L143 152L150.13 166.14C150.139 166.156 150.181 166.247 150.257 166.409C151.753 169.626 166.352 201.009 197.46 242.36C224.2 203.5 241.73 160.95 251.25 134H32V90H170V48H214V90H352V134H297.73C288.58 162.72 266.16 223.69 226.58 277.33ZM432.76 464H480L363 176L246 464H293.24L317.73 406H408.27L432.76 464ZM336.31 362L363 279.85L389.69 362H336.31Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
