import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIHeartDislikeCircleSharp",
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
    return (p, t) => (s(), a("svg", {
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
        d: "M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM319.73 358.36L136.59 176.06L159.33 153.55L342.52 335.91L319.73 358.36ZM256.22 363.22C220.86 338.22 189.91 311.3 181.31 300.82C161.31 276.45 151.73 251.42 152.01 224.32C152.044 221.199 152.328 218.086 152.86 215.01L283.07 344.41C279.64 347 266.86 355.86 256.22 363.22ZM330.69 300.82L330.38 301.2L197.33 169C200.694 168.342 204.113 168.007 207.54 168C224.323 167.942 240.346 174.995 251.64 187.41L256 192L260.36 187.4C271.655 174.988 287.678 167.94 304.46 168C334.77 168 359.68 193.27 359.99 224.33C360.27 251.42 350.68 276.45 330.69 300.82Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
