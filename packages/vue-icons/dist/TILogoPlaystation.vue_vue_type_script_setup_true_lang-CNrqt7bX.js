import { defineComponent as i, computed as o, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as r, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TILogoPlaystation",
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
    const C = e, t = o(() => [
      "icon",
      C.size,
      {
        [C.type]: C.type && !C.color,
        "is-clickable": C.clickable
      }
    ]);
    return (d, l) => (s(), n("svg", {
      class: a(t.value),
      style: r(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M399.77 203C398.97 185.9 396.469 168.5 388.969 152.9C384.856 144.268 379.273 136.418 372.469 129.7C366.091 123.383 358.934 117.906 351.169 113.4C334.069 103.2 313.669 96.4 266.77 82.4C219.869 68.4 191.999 64 191.999 64V422.3L271.9 448C271.9 448 272 249.2 272 148.5V144.7C272 135.4 279.499 127.9 288.099 127.9H288.599C297.099 127.9 304.099 135.4 304.099 144.7V278C315.099 283.3 333.299 287.3 345.899 287.1C354.26 287.333 362.536 285.367 369.899 281.4C377.499 277.198 383.848 271.056 388.299 263.6C393.266 255.193 396.623 245.936 398.199 236.3C400.069 225.5 400.169 214.2 399.77 203ZM86.6695 357.8C114.069 348 175.969 328.3 175.969 328.3V281.1C175.969 281.1 99.4695 305.9 64.6695 318.2C62.3461 319.038 60.0153 319.853 57.6852 320.669C51.3905 322.871 45.1001 325.073 38.9695 327.7C29.1695 331.8 19.5695 336.4 10.8695 342.5C6.96636 344.997 3.79253 348.481 1.6695 352.6C-0.341211 356.876 -0.521771 361.788 1.1695 366.2C3.1695 371.3 6.9695 375.5 11.2695 378.8C19.0695 384.7 28.3695 388.3 37.6695 391C66.1586 400.457 96.059 404.955 126.069 404.3C140.569 404.1 162.07 402.4 176.07 399.9V357.9C176.07 357.9 165.07 360.4 134.77 370.4C133.589 370.785 132.408 371.19 131.224 371.596L131.223 371.596C127.794 372.771 124.337 373.957 120.77 374.7C113.665 376.179 106.426 376.916 99.1695 376.9C92.6695 376.6 85.9695 376.2 79.8695 373.8C77.6695 372.8 75.2695 371.6 74.3695 369.2C73.5695 367.2 74.6695 365.2 76.0695 363.8C78.8695 360.9 82.8695 359.3 86.6695 357.8ZM504.1 330.9C508.3 334.7 511.9 339.9 512 345.9C511.992 350.731 510.213 355.392 507 359C501 365.7 493.1 370.3 485.2 374.3C478.756 377.56 472.025 379.957 465.269 382.364C463.112 383.132 460.953 383.902 458.799 384.7C405.2 403.9 288 443.5 288 443.5V396.5C288 396.5 379.7 366.3 420.7 351.8C421.907 351.339 423.139 350.907 424.376 350.473C428.772 348.93 433.231 347.366 436.9 344.4C438.9 342.9 440.7 340.5 439.799 337.9C438.799 335.6 436.5 334.3 434.299 333.4C428.1 331 421.4 330.5 414.9 330.3C404.616 330.173 394.382 331.727 384.6 334.9C355.6 345.1 288.1 366.7 288.1 366.7V317.9C288.1 317.9 333.5 305 355.4 302.5C361.329 301.824 371.316 301.543 379.312 301.318C381.968 301.243 384.405 301.175 386.4 301.1C412.799 301.2 439.5 304.2 464.7 312.4C468.653 313.645 471.75 314.729 475.283 315.966C476.576 316.418 477.927 316.891 479.4 317.4C488.199 320.6 497 324.6 504.1 330.9Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
