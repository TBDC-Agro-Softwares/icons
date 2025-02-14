import { defineComponent as i, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as C } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TILogoClosedCaptioning",
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
    const l = e, o = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), s("svg", {
      class: a(o.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      C("path", {
        d: "M367.57 282.84V283.61C367.57 301.54 356.46 312.1 341.62 312.1C326.78 312.1 316.78 300.22 315.35 283.61C315.35 283.61 314.04 274.92 314.04 257.32C313.954 247.764 314.465 238.212 315.57 228.72C318.21 210.02 327.34 200.23 342.17 200.23C357 200.23 368.66 212.99 368.66 232.35V232.9H418.24C418.24 208.81 412.19 187.14 399.99 173.5C387.79 159.86 369.76 153 345.8 153C334.622 152.86 323.489 154.456 312.8 157.73C302.831 160.864 293.878 166.597 286.86 174.34C279.63 182.3 274 192.86 270 206.17C266 219.48 264 236.17 264 256.44C264 276.24 265.65 292.74 268.84 306.05C272.03 319.36 276.84 329.92 283.24 337.84C289.415 345.611 297.773 351.357 307.24 354.34C316.907 357.42 328.24 358.96 341.24 358.96C368.71 358.96 388.5 351.96 400.37 338.39C412.24 324.82 418 305.06 418 279.1H367.35C367.57 279.1 367.57 281.85 367.57 282.84Z",
        fill: "currentColor"
      }, null, -1),
      C("path", {
        d: "M197.3 283.61V282.84C197.3 281.85 197.3 279.1 197.08 279.06H247.86C247.86 305.02 241.92 324.78 230.05 338.35C218.18 351.92 198.39 358.92 170.91 358.92C157.917 358.92 146.583 357.38 136.91 354.3C127.443 351.317 119.085 345.571 112.91 337.8C106.51 329.88 101.7 319.32 98.51 306.01C95.32 292.7 93.67 276.2 93.67 256.4C93.67 236.13 95.6 219.44 99.67 206.13C103.74 192.82 109.34 182.26 116.6 174.34C123.618 166.597 132.571 160.864 142.54 157.73C153.229 154.456 164.362 152.86 175.54 153C199.5 153 217.5 159.86 229.75 173.5C242 187.14 248 208.81 248 232.9H198.4V232.35C198.4 213 186.74 200.23 171.91 200.23C157.08 200.23 147.95 210.02 145.31 228.72C144.205 238.212 143.694 247.764 143.78 257.32C143.78 274.92 145.09 283.61 145.09 283.61C146.52 300.22 156.52 312.1 171.36 312.1C186.2 312.1 197.3 301.54 197.3 283.61Z",
        fill: "currentColor"
      }, null, -1),
      C("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0 432V80H512V432H0ZM460.996 321.847C462.766 296.234 464 278.382 464 255.78C464 230.15 463.89 213.2 460.23 178.56C456.57 143.92 437.28 124.44 401.14 120.92C365 117.4 302.86 117.4 256 117.4C209.14 117.4 146.95 117.4 110.86 120.92C74.77 124.44 55.43 143.8 51.77 178.56C48.11 213.32 48 230.04 48 255.78C48 280.606 49.3767 299.738 51.529 329.65L51.77 333C54.06 364.86 70.86 387.23 110.86 390.86C150.86 394.49 207 394.71 256 394.6C305.37 394.71 361.25 394.38 401.14 390.86C441.03 387.34 458.06 364.9 460.23 333C460.495 329.11 460.751 325.404 460.996 321.847Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
