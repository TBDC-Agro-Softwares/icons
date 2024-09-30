import { defineComponent as o, computed as C, openBlock as r, createElementBlock as n, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TILogoDribbble",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), n("svg", {
      class: s(i.value),
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
        d: "M256 32C132.33 32 32 132.33 32 256C32 379.67 132.33 480 256 480C379.67 480 480 379.78 480 256C480 132.22 379.67 32 256 32ZM398.22 135.25C424.138 165.718 439.565 203.717 442.22 243.63C401.85 241.53 353.55 241.53 314.82 245.15C309.92 232.78 304.9 220.65 299.42 208.98C344.08 189.62 378.5 164.18 398.22 135.25ZM256 69.33C299.509 69.2552 341.665 84.4515 375.12 112.27C354.82 137.93 322.97 160.27 283.3 177.13C261.6 137 236.63 102.47 210 75.28C225.028 71.4005 240.48 69.4019 256 69.33ZM171.53 89.75C198.48 116.58 223.8 150.75 245.97 190.75C203.85 203.62 155.55 211 104 211C94.2 211 84.64 210.65 75.19 210.06C88.4883 157.959 123.596 114.116 171.53 89.75ZM69.68 247.13C80.3 247.6 91.03 247.83 101.88 247.72C160.68 247.02 215.4 237.8 262.42 222.72C266.853 231.94 271.053 241.39 275.02 251.07C269.339 252.314 263.759 253.985 258.33 256.07C194.05 283.07 143.42 326.58 116 379.2C85.9335 345.203 69.3349 301.385 69.33 256C69.33 253 69.45 250.05 69.68 247.13ZM256 442.67C214.528 442.72 174.235 428.877 141.55 403.35C166.4 354.12 210.73 313.35 266.62 288.08C271.87 285.63 278.87 283.65 286.92 281.9C293.587 300.327 299.537 319.46 304.77 339.3C312.586 369.245 318.343 399.689 322 430.42C300.931 438.493 278.563 442.644 256 442.67ZM356.92 412.92C353.27 381.87 347.459 351.112 339.53 320.87C335.53 305.7 331.02 291 326.12 276.65C362.75 273.65 406.62 274.08 441.5 276.65C435.275 332.496 404.202 382.558 356.92 412.92Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
