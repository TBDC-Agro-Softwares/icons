import { defineComponent as r, computed as i, openBlock as C, createElementBlock as a, normalizeClass as n, normalizeStyle as p, createStaticVNode as c } from "vue";
const u = /* @__PURE__ */ r({
  __name: "TILogoCodepen",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(t) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-16", "is-14", "is-26", "is-28", "is-36"].indexOf(t) > -1;
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
  setup(t) {
    const e = t, o = i(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (s, l) => (C(), a("svg", {
      class: n(o.value),
      style: p(t.color ? `color: ${t.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      c('<path d="M269.84 209.35C285.647 220.063 301.523 230.67 317.47 241.17C318.676 241.77 320.094 241.77 321.3 241.17L361.06 214.7L268 152.48V205.83C268.075 207.214 268.746 208.498 269.84 209.35Z" fill="currentColor"></path><path d="M241.2 209.81C225.92 220.223 210.55 230.51 195.09 240.67C193.92 241.43 191.54 241.81 190.52 241.15C180.046 234.335 169.661 227.38 158.922 220.187L158.92 220.185C156.218 218.376 153.494 216.551 150.74 214.71C182 193.89 244 152.77 244 152.77V204.47C243.85 206.562 242.835 208.497 241.2 209.81Z" fill="currentColor"></path><path d="M218.211 288.476C225.896 293.618 233.58 298.76 241.24 303.94C242.45 304.75 244 306.31 244 307.53V361.32C244 361.32 182 319.9 150.8 299.13L189.68 273.01C191.75 271.53 193.18 271.63 195.18 273.01C202.84 278.19 210.526 283.333 218.211 288.476Z" fill="currentColor"></path><path d="M253.37 230.54C254.834 229.735 256.592 229.672 258.11 230.37C263.88 234.2 297.95 256.86 297.95 256.86L258.95 282.86C256.998 283.961 254.602 283.919 252.69 282.75L213.85 256.89C213.85 256.89 230.95 245.42 239.2 239.89C240.188 239.228 241.173 238.564 242.158 237.9C245.862 235.404 249.563 232.91 253.37 230.54Z" fill="currentColor"></path><path d="M141 237.12V276.73L170.62 256.89L141 237.12Z" fill="currentColor"></path><path d="M316.25 273.23C301.19 283.457 286.06 293.57 270.86 303.57C268.45 305.15 267.97 306.88 268 309.76V361.1L361 299.1L322.47 273.22C320.17 271.61 318.58 271.65 316.25 273.23Z" fill="currentColor"></path><path d="M370 237.06V276.68L340.41 256.93L370 237.06Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M256 32C132.29 32 32 132.29 32 256C32 379.71 132.29 480 256 480C379.71 480 480 379.71 480 256C480 132.29 379.71 32 256 32ZM395 297C395 302.78 392.35 306.86 387.49 310.09C346.35 337.423 305.253 364.82 264.2 392.28C258.35 396.2 253.03 396.03 247.2 392.14C206.42 364.807 165.543 337.583 124.57 310.47C119.46 307.08 116.98 302.91 116.98 296.74V217C116.98 210.86 119.5 206.66 124.6 203.28C165.51 176.15 206.54 148.92 247.33 121.6C253.15 117.71 258.42 117.6 264.27 121.51C305.297 148.983 346.383 176.38 387.53 203.7C392.21 206.81 394.98 210.65 394.98 216.36L395 297Z" fill="currentColor"></path>', 8)
    ]), 6));
  }
});
export {
  u as _
};
