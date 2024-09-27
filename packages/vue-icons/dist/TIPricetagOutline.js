import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIPricetagOutline",
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
    return (u, t) => (r(), a("svg", {
      class: s(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M435.174 32L312.297 32C304.251 32 296.531 35.1774 290.822 40.8474L45.0829 286.586C27.6437 304.111 27.6437 332.389 45.0552 349.886L162.083 466.914C179.608 484.353 207.885 484.353 225.383 466.941L471.01 221.314C476.719 215.565 479.897 207.845 479.897 199.8V76.8001C479.954 64.9846 475.266 53.5598 466.871 45.1356C458.476 36.7112 447.067 31.9833 435.174 32ZM67.738 309.186L312.924 63.9991L435.197 64C438.591 63.9953 441.825 65.3355 444.204 67.7236L444.455 67.9827C446.678 70.3433 447.913 73.4712 447.897 76.7226L447.897 199.172L202.783 444.286C197.798 449.247 189.696 449.247 184.683 444.259L67.7103 327.286C62.7494 322.301 62.7494 314.199 67.738 309.186ZM351.947 128C351.947 145.673 366.273 160 383.947 160C392.434 160 400.573 156.629 406.574 150.627C412.575 144.626 415.947 136.487 415.947 128C415.947 110.327 401.62 96.0001 383.947 96.0001C366.273 96.0001 351.947 110.327 351.947 128Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as default
};