import { defineComponent as i, computed as o, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TIFingerPrintOutline",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(C) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-16", "is-14", "is-26", "is-28", "is-36"].indexOf(C) > -1;
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
  setup(C) {
    const e = C, t = o(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (d, l) => (n(), r("svg", {
      class: s(t.value),
      style: a(C.color ? `color: ${C.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M391.42 75.28C389.55 75.2847 387.713 74.7874 386.1 73.84C341.72 50.08 303.35 40 257.35 40C211.58 40 168.12 51.28 128.59 73.84C123 77 116.11 74.8 112.87 69C109.869 63.1902 111.895 56.0481 117.5 52.68C160.134 28.4997 208.337 15.857 257.35 16C306.58 16 349.58 27.28 396.74 52.48C402.464 55.6269 404.619 62.7733 401.59 68.56C399.803 72.5931 395.831 75.2172 391.42 75.28ZM60.6303 201.28C58.2285 201.263 55.8898 200.509 53.9303 199.12C48.6314 195.182 47.4024 187.755 51.1503 182.32C74.0403 148.72 103.15 122.32 137.84 103.84C210.42 65 303.35 64.72 376.16 103.6C410.84 122.08 439.96 148.24 462.85 181.6C466.582 187.039 465.355 194.453 460.07 198.4C457.576 200.264 454.422 201.012 451.356 200.466C448.291 199.921 445.588 198.13 443.89 195.52C423.09 165.28 396.74 141.52 365.53 124.96C299.19 89.68 214.35 89.68 148.24 125.2C116.8 142 90.4503 166 69.6503 196.2C67.8223 199.439 64.3477 201.396 60.6303 201.28ZM205.1 491C202.009 491.03 199.057 489.716 197.01 487.4C176.9 466.48 166 453 150.55 424C134.55 394.48 126.28 358.48 126.28 319.84C126.28 248.56 184.99 190.48 257.12 190.48C329.25 190.48 388 248.56 388 319.84C388.124 324.049 385.949 327.993 382.323 330.134C378.697 332.275 374.194 332.275 370.567 330.134C366.941 327.993 364.766 324.049 364.89 319.84C364.89 261.76 316.57 214.48 257.17 214.48C197.77 214.48 149.4 261.76 149.4 319.84C149.4 354.4 156.79 386.32 170.89 412.24C185.69 439.84 195.89 451.6 213.66 470.32C218.026 475.146 218.026 482.494 213.66 487.32C211.391 489.609 208.323 490.929 205.1 491ZM370.85 446.6C343.34 446.6 319.07 439.4 299.19 425.24C264.82 401.149 244.306 361.853 244.19 319.88C244.014 315.635 246.178 311.635 249.827 309.46C253.476 307.285 258.024 307.285 261.674 309.46C265.323 311.635 267.487 315.635 267.31 319.88C267.389 353.978 284.134 385.884 312.15 405.32C328.56 416.84 347.75 422.32 370.87 422.32C378.922 422.177 386.949 421.374 394.87 419.92C401.11 418.72 407.12 423.04 408.27 429.76C409.49 436.217 405.254 442.444 398.8 443.68C389.592 445.499 380.236 446.463 370.85 446.56V446.6ZM324.38 496C323.365 495.958 322.358 495.797 321.38 495.52C284.62 484.96 260.58 470.8 235.38 445.12C203.01 411.76 185.22 367.36 185.22 319.84C185.22 280.96 217.12 249.28 256.41 249.28C295.7 249.28 327.61 280.96 327.61 319.84C327.61 345.52 349.11 366.4 375.69 366.4C402.27 366.4 423.77 345.52 423.77 319.84C423.77 229.36 348.64 155.92 256.18 155.92C190.53 155.92 130.43 193.84 103.39 252.64C94.3903 272.08 89.7503 294.88 89.7503 319.84C89.7503 338.56 91.3603 368.08 105.23 406.48C107.55 412.72 104.54 419.68 98.5303 421.84C95.6442 422.939 92.4347 422.814 89.6433 421.492C86.8519 420.171 84.7201 417.769 83.7403 414.84C72.587 384.408 66.8733 352.251 66.8603 319.84C66.8603 291.04 72.1803 264.84 82.5803 242.08C113.33 175.08 181.52 131.68 256.18 131.68C361.36 131.68 446.89 215.92 446.89 319.6C446.89 358.48 414.99 390.16 375.69 390.16C336.39 390.16 304.49 358.48 304.49 319.6C304.5 293.92 283 273 256.42 273C229.84 273 208.34 293.88 208.34 319.56C208.34 360.56 223.6 399 251.57 427.8C273.57 450.36 294.57 462.8 327.16 472.2C333.4 473.88 336.87 480.6 335.25 486.84C334.211 492.057 329.698 495.86 324.38 496Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
