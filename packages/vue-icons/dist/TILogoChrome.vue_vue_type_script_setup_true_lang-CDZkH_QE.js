import { defineComponent as r, computed as n, openBlock as C, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ r({
  __name: "TILogoChrome",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(l) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-16", "is-14", "is-26", "is-28", "is-36"].indexOf(l) > -1;
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
  setup(l) {
    const e = l, i = n(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (d, o) => (C(), a("svg", {
      class: s(i.value),
      style: c(l.color ? `color: ${l.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        d: "M168.642 238.82L91.2917 105.57L91.2817 105.58L91.1417 105.34C136.219 56.2929 200.792 29.8612 267.322 33.2245C333.852 36.5878 395.431 69.3969 435.332 122.74C435.441 122.836 435.558 122.923 435.682 123C445.735 136.739 454.335 151.485 461.342 167H461.172C454.16 151.531 445.561 136.832 435.512 123.14L435.392 123.06C445.48 136.777 454.119 151.502 461.172 167H256.002C213.486 167.058 176.922 197.118 168.642 238.82Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M256.002 346.5C222.402 346.5 194.402 328.59 178.712 301.71L76.0017 124.05L75.8617 123.81C30.8335 184.772 19.685 264.369 46.2321 335.356C72.7792 406.344 133.421 459.093 207.402 475.55V475.5L285.092 340.9C275.803 344.473 265.953 346.369 256.002 346.5Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M230.272 319.029C205.161 308.621 188.794 284.112 188.802 256.93C188.912 219.865 218.937 189.849 256.002 189.75C283.183 189.75 307.688 206.125 318.088 231.238C328.488 256.352 322.735 285.257 303.512 304.475C284.289 323.692 255.382 329.436 230.272 319.029Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M469.752 190C472.773 199.433 475.113 209.071 476.752 218.84V218.79C478.916 231.391 480.003 244.154 480.002 256.94C480.002 363.4 405.682 452.52 306.082 475.26C296.273 477.51 286.324 479.094 276.302 480C269.612 480.61 262.842 481 256.002 481C247.651 481.046 239.305 480.626 231.002 479.74V479.72C231.007 479.63 231.007 479.54 231.002 479.45L333.292 301.78C341.389 288.268 345.645 272.802 345.602 257.05C345.602 230.17 333.292 207 314.242 190H469.642C472.705 199.48 475.068 209.173 476.712 219C475.073 209.172 472.71 199.479 469.642 190H469.752Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
