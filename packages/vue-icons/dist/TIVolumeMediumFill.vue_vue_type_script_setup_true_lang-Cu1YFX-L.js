import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIVolumeMediumFill",
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
    return (d, t) => (r(), s("svg", {
      class: a(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M264 416.19C258.884 416.187 253.903 414.543 249.79 411.5L249.13 410.99L157.67 335.99H88C74.7452 335.99 64 325.245 64 311.99V200C64 186.745 74.7452 176 88 176H157.65L249.11 101L249.77 100.49C257.062 95.1212 266.754 94.3132 274.834 98.4007C282.914 102.488 288.005 110.775 288 119.83V392.17C288 405.425 277.255 416.17 264 416.17V416.19ZM352 336C346.451 335.997 341.3 333.12 338.389 328.396C335.477 323.673 335.22 317.779 337.71 312.82C347.2 293.92 352.01 274.82 352.01 256C352.01 236.64 347.35 218.08 337.76 199.27C333.938 191.429 337.101 181.971 344.871 178.007C352.641 174.042 362.155 177.033 366.26 184.73C378.2 208.16 384 231.47 384 256C384 279.83 378 303.78 366.3 327.18C363.585 332.587 358.051 336.001 352 336ZM386.133 376.006C388.995 380.957 394.281 384.005 400 384C405.725 384.008 411.018 380.958 413.88 376C434.94 339.24 448 306.36 448 256C448 204.88 434.92 172.16 413.83 136C409.242 128.711 399.708 126.361 392.258 130.683C384.809 135.006 382.118 144.45 386.17 152.05C405.06 184.48 416 211.88 416 256C416 299.45 405 327.05 386.13 360C383.271 364.952 383.272 371.055 386.133 376.006Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
