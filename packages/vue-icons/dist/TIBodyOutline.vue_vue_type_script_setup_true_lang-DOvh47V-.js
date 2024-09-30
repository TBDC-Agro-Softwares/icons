import { defineComponent as i, computed as o, openBlock as L, createElementBlock as n, normalizeClass as r, normalizeStyle as s, createElementVNode as a } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TIBodyOutline",
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
    const C = e, t = o(() => [
      "icon",
      C.size,
      {
        [C.type]: C.type && !C.color,
        "is-clickable": C.clickable
      }
    ]);
    return (c, l) => (L(), n("svg", {
      class: r(t.value),
      style: s(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      a("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M248 0C217.072 0 192 25.0721 192 56C192 86.9279 217.072 112 248 112C278.928 112 304 86.9279 304 56C304 25.0721 278.928 0 248 0ZM248 32C261.255 32 272 42.7452 272 56C272 69.2548 261.255 80 248 80C234.745 80 224 69.2548 224 56C224 42.7452 234.745 32 248 32ZM424 128.02H88C65.9086 128.02 48 145.929 48 168.02C48 190.111 65.9086 208.02 88 208.02H180.5C185.137 208.02 187.807 209.469 188.766 211.964L188.852 212.192C191.648 219.895 191.397 244.693 188.401 263.389L183.531 292.907L153.144 465.038C151.302 475.502 153.694 486.259 159.79 494.949C165.886 503.64 175.186 509.551 185.642 511.38C196.058 513.233 206.827 510.83 215.504 504.7L215.95 504.38C224.234 498.355 229.873 489.363 231.69 479.282L252.76 358.98L252.383 358.914L252.799 358.948L252.975 357.965L253.135 357.134C253.276 356.418 253.438 355.644 253.621 354.826L253.843 353.853C254.447 351.261 255.152 348.7 255.942 346.326L256.086 345.903L255.918 345.404C256.919 348.297 257.786 351.515 258.49 354.749L258.694 355.706C258.823 356.328 258.939 356.919 259.043 357.471L259.195 358.315L259.286 358.853L261.69 358.668L259.34 359.08L280.34 478.98C282.853 493.07 292.657 504.709 306.069 509.561C319.481 514.413 334.463 511.741 345.371 502.551L345.753 502.225C356.399 493.026 361.426 478.887 358.951 465.011L328.568 292.907L323.687 263.315L323.509 262.179C320.665 243.507 320.505 219.246 323.314 212.013C324.273 209.521 327.052 208.02 331.6 208.02H424C446.091 208.02 464 190.111 464 168.02C464 145.929 446.091 128.02 424 128.02ZM88 160.02H424C428.418 160.02 432 163.602 432 168.02C432 172.438 428.418 176.02 424 176.02H331.6C314.914 176.02 299.716 184.228 293.466 200.476C287.964 214.641 288.23 244.29 292.102 268.451L297.044 298.402L327.444 470.602C327.945 473.415 326.918 476.255 324.754 478.078C322.589 479.902 319.617 480.432 316.955 479.469C314.294 478.506 312.348 476.197 311.851 473.411L290.86 353.56L290.845 353.56L290.604 352.169L290.392 351.032C290.205 350.059 289.994 349.023 289.756 347.935C288.801 343.552 287.617 339.153 286.157 334.936C284.099 328.991 281.657 323.842 278.526 319.558C273.39 312.529 266.476 307.92 257.6 307.92H254.5C245.629 307.92 238.76 312.547 233.639 319.584C230.537 323.847 228.1 328.973 226.032 334.895C224.564 339.099 223.364 343.486 222.389 347.858C222.098 349.161 221.844 350.389 221.626 351.523L221.384 352.825L221.272 353.462L221.24 353.46L200.216 473.499C199.876 475.544 198.732 477.368 197.039 478.565C195.345 479.761 193.243 480.23 191.202 479.867C189.067 479.494 187.207 478.311 185.987 476.573C184.768 474.835 184.29 472.684 184.658 470.593L215.087 298.225L219.987 268.525C223.87 244.29 224.136 214.641 218.614 200.427C212.376 184.206 197.29 176.02 180.5 176.02H88C83.5817 176.02 80 172.438 80 168.02C80 163.602 83.5817 160.02 88 160.02Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};