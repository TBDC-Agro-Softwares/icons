import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIArrowRedoOutline",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (n(), s("svg", {
      class: a(i.value),
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
        d: "M256 168.394L254.732 168.453C179.829 172.177 125.783 200.521 91.6462 250.268C61.2943 294.498 48 353.384 48 424.032C48 439.25 67.2426 445.874 76.6099 433.88C103.267 399.749 123.908 380.356 149.927 366.905L150.825 366.444C177.241 353.003 210.059 345.749 254.696 344.303L256 344.262V424.032C256 438.108 272.866 445.325 283.048 435.606L459.048 267.606C465.651 261.302 465.651 250.761 459.048 244.458L283.048 76.4582C272.866 66.7392 256 73.9561 256 88.0318V168.394ZM288 125.424L424.827 256.032L288 386.639V328.032C288 319.195 280.837 312.032 272 312.032C213.092 312.032 170.14 320.431 135.231 338.479L134.307 338.959C115.61 348.748 99.4966 360.93 83.1254 377.484L82.202 378.421L82.2726 377.736C86.8526 333.762 98.4591 296.895 118.031 268.374C148.509 223.959 198.224 200.032 272 200.032C280.837 200.032 288 192.868 288 184.032V125.424Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
