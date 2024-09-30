import { defineComponent as o, computed as C, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as n, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TICameraReverseFill",
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
    return (d, t) => (r(), s("svg", {
      class: a(i.value),
      style: n(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M432 144H373C370 144 366.28 142.06 363.38 139L337.44 98.06C337.03 97.4103 336.572 96.7919 336.07 96.21C327.11 85.76 315 80 302 80H210C197 80 184.89 85.76 175.93 96.21C175.428 96.7919 174.97 97.4103 174.56 98.06L148.62 139.06C146.4 141.48 143.28 144.06 140 144.06V136.06C140 127.223 132.837 120.06 124 120.06H100C91.1634 120.06 84 127.223 84 136.06V144.06H80C53.5018 144.088 32.0276 165.562 32 192.06V384C32.0276 410.498 53.5018 431.972 80 432H432C458.498 431.972 479.972 410.498 480 384V192C479.972 165.502 458.498 144.028 432 144ZM316.84 346.3C290.231 368.058 254.024 373.941 221.895 361.726C189.767 349.511 166.613 321.06 161.18 287.12C154.147 289.507 146.396 286.739 142.464 280.438C138.533 274.137 139.455 265.958 144.69 260.69L164.69 240.69C170.938 234.447 181.062 234.447 187.31 240.69L207.31 260.69C211.883 265.266 213.25 272.145 210.775 278.122C208.3 284.099 202.469 287.997 196 288C195.331 287.992 194.663 287.945 194 287.86C199.441 309.052 215.32 326.003 236.112 332.814C256.904 339.625 279.735 335.356 296.66 321.49C301.089 317.85 307.127 316.857 312.488 318.888C317.849 320.92 321.714 325.664 322.619 331.325C323.524 336.986 321.331 342.699 316.87 346.3H316.84ZM367.31 283.3L347.31 303.3C341.062 309.543 330.938 309.543 324.69 303.3L304.69 283.3C299.896 278.492 298.659 271.182 301.603 265.065C304.547 258.947 311.032 255.353 317.78 256.1C312.347 234.869 296.428 217.895 275.59 211.111C254.751 204.327 231.891 208.677 215 222.64C210.624 226.511 204.487 227.69 198.988 225.715C193.49 223.74 189.505 218.925 188.594 213.154C187.682 207.383 189.988 201.574 194.61 198C221.182 176.028 257.496 169.993 289.746 182.19C321.997 194.387 345.229 222.943 350.61 257C357.649 254.491 365.487 257.189 369.491 263.499C373.495 269.809 372.598 278.05 367.33 283.35L367.31 283.3Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};