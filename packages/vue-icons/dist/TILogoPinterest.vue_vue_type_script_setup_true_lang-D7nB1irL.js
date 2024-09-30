import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TILogoPinterest",
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
        d: "M256.051 32C132.351 32 32.0508 132.3 32.0508 256C32.0508 347.7 87.2508 426.5 166.151 461.2C165.551 445.6 166.051 426.8 170.051 409.8C174.351 391.6 198.851 287.7 198.851 287.7C198.851 287.7 191.651 273.4 191.651 252.3C191.651 219.1 210.851 194.3 234.851 194.3C255.251 194.3 265.051 209.6 265.051 227.9C265.051 248.4 251.951 279 245.251 307.4C239.651 331.2 257.151 350.5 280.651 350.5C323.051 350.5 351.651 296 351.651 231.4C351.651 182.3 318.551 145.6 258.451 145.6C190.551 145.6 148.151 196.3 148.151 252.9C148.151 272.4 153.951 286.2 162.951 296.8C167.051 301.7 167.651 303.7 166.151 309.3C165.051 313.4 162.651 323.3 161.551 327.3C160.051 333 155.451 335 150.351 332.9C119.051 320.1 104.451 285.9 104.451 247.3C104.451 183.7 158.151 107.4 264.551 107.4C350.051 107.4 406.351 169.3 406.351 235.7C406.351 323.6 357.451 389.2 285.451 389.2C261.251 389.2 238.551 376.1 230.751 361.3C230.751 361.3 217.751 412.9 214.951 422.9C210.251 440.2 200.951 457.4 192.451 470.9C213.07 476.983 234.453 480.081 255.951 480.1C379.651 480.1 479.951 379.8 479.951 256.1C479.951 132.4 379.751 32 256.051 32Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
