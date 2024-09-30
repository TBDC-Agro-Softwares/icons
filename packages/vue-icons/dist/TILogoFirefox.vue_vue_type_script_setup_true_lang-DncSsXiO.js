import { defineComponent as i, computed as r, openBlock as n, createElementBlock as s, normalizeClass as C, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TILogoFirefox",
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
    const l = e, o = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), s("svg", {
      class: C(o.value),
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
        d: "M471.46 194.62V194.55C471.24 193.79 471.01 193.03 470.78 192.27C470.73 192.08 470.67 191.89 470.61 191.71C470.18 190.27 469.74 188.83 469.28 187.4L469.22 187.2C466.414 178.483 463.075 169.947 459.22 161.64C455.486 153.413 451.176 145.46 446.32 137.84C427.566 107.713 401.957 82.4465 371.58 64.1C336.711 43.0396 296.736 31.9376 256 32C249 32 242 32.34 235.18 33C211.06 35.54 170.4 44.21 137.41 73.18C257.5 11.86 417.94 85.7 404.29 223C399.43 272 357.83 305.67 319.1 311.35C312.212 312.403 305.209 312.473 298.3 311.56C203.71 298.41 209.5 220.88 238.24 187.73C200.24 187.49 170.77 234.52 185.09 280.73C152.14 219.55 185.44 123.73 256.02 94.73C173.07 82.73 95.3103 122.93 70.3203 192.8C73.3047 167.261 79.2617 142.157 88.0703 118C88.0703 118 42.8503 153.74 33.6303 228.9C33.4903 230.06 33.3603 231.22 33.2403 232.39C33.1903 232.79 33.1503 233.19 33.1103 233.6C32.757 237.1 32.4903 240.623 32.3103 244.17C32.3103 244.44 32.3103 244.71 32.3103 244.98C32.2403 246.46 32.1803 247.98 32.1403 249.44V250.69C32.1403 252.45 32.0703 254.21 32.0703 255.98C32.0703 379.69 132.36 479.98 256.07 479.98C379.78 479.98 480 379.71 480 256C480.011 235.243 477.137 214.586 471.46 194.62Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
