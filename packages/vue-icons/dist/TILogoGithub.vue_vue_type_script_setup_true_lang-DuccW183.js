import { defineComponent as o, computed as C, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TILogoGithub",
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
    return (d, t) => (n(), r("svg", {
      class: s(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 32C132.3 32 32 134.9 32 261.7C32 363.2 96.2 449.2 185.2 479.6C186.448 479.871 187.723 480.005 189 480C197.3 480 200.5 473.9 200.5 468.6C200.5 463.1 200.3 448.7 200.2 429.5C192.79 431.237 185.21 432.143 177.6 432.2C134.5 432.2 124.7 398.7 124.7 398.7C114.5 372.2 99.8 365.1 99.8 365.1C80.3 351.4 99.7 351 101.2 351H101.3C123.8 353 135.6 374.8 135.6 374.8C146.8 394.4 161.8 399.9 175.2 399.9C184.06 399.723 192.784 397.678 200.8 393.9C202.8 379.1 208.6 369 215 363.2C165.3 357.4 113 337.7 113 249.7C113 224.6 121.7 204.1 136 188.1C133.7 182.3 126 158.9 138.2 127.3C139.836 126.908 141.518 126.74 143.2 126.8C151.3 126.8 169.6 129.9 199.8 150.9C236.495 140.633 275.305 140.633 312 150.9C342.2 129.9 360.5 126.8 368.6 126.8C370.282 126.74 371.964 126.908 373.6 127.3C385.8 158.9 378.1 182.3 375.8 188.1C390.1 204.2 398.8 224.7 398.8 249.7C398.8 337.9 346.4 357.3 296.5 363C304.5 370.1 311.7 384.1 311.7 405.5C311.7 436.2 311.4 461 311.4 468.5C311.4 473.9 314.5 480 322.8 480C324.144 480.006 325.484 479.872 326.8 479.6C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};