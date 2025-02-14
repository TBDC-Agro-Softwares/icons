import { defineComponent as i, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ i({
  __name: "TILogoYoutube",
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
    const l = e, o = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (n(), r("svg", {
      class: a(o.value),
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
        d: "M508.655 148.625C508.655 103.712 475.619 67.583 434.799 67.583C379.507 64.9981 323.117 64 265.49 64H247.525C190.037 64 133.547 64.9981 78.2552 67.593C37.5347 67.593 4.49925 103.922 4.49925 148.834C2.00412 184.355 0.946186 219.886 1.00607 255.416C0.906264 290.947 2.03739 326.511 4.39944 362.108C4.39944 407.02 37.4349 443.449 78.1554 443.449C136.242 446.144 195.826 447.341 256.407 447.241C317.089 447.441 376.506 446.177 434.659 443.449C475.479 443.449 508.515 407.02 508.515 362.108C510.91 326.477 512.008 290.947 511.908 255.316C512.134 219.786 511.05 184.222 508.655 148.625ZM207.603 353.325V157.208L352.32 255.217L207.603 353.325Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
