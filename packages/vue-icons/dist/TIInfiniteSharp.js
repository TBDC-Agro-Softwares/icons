import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIInfiniteSharp",
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
    return (p, t) => (r(), a("svg", {
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
        d: "M382 136C341.13 136 308.54 156.53 288.4 173.76L287.69 174.37L276.22 186.84L301.54 228.45L320.28 209.66C339.89 193.1 361.78 184 382 184C422.8 184 456 216.3 456 256C456 295.7 422.8 328 382 328C320 328 277.86 246.05 277.44 245.22C275 240.29 221.56 136 130 136C62.73 136 8 189.83 8 256C8 322.17 62.73 376 130 376C162.95 376 195.38 362.89 223.79 338.08L224.4 337.54L235.78 325.16L210.45 283.55L191.62 302.43C172 319.4 151.26 328 130 328C89.2 328 56 295.7 56 256C56 216.3 89.2 184 130 184C192 184 234.14 265.95 234.56 266.78C237 271.71 290.44 376 382 376C449.27 376 504 322.17 504 256C504 189.83 449.27 136 382 136Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as default
};
