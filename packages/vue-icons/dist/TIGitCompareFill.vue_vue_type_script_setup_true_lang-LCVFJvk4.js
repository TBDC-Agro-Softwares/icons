import { defineComponent as o, computed as C, openBlock as r, createElementBlock as s, normalizeClass as n, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIGitCompareFill",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), s("svg", {
      class: n(i.value),
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
        d: "M432 360.61V156C431.945 105.213 390.788 64.0551 340 64H320V32C319.997 25.5309 316.099 19.7001 310.122 17.2249C304.146 14.7497 297.266 16.1172 292.69 20.69L228.69 84.69C222.447 90.9375 222.447 101.062 228.69 107.31L292.69 171.31C297.266 175.883 304.146 177.25 310.122 174.775C316.099 172.3 319.997 166.469 320 160V128H340C355.464 128 368 140.536 368 156V360.61C342.915 375.093 330.684 404.62 338.181 432.6C345.678 460.58 371.034 480.036 400 480.036C428.967 480.036 454.323 460.58 461.82 432.6C469.317 404.62 457.086 375.093 432 360.61ZM400 448C382.327 448 368 433.673 368 416C368 398.327 382.327 384 400 384C417.674 384 432 398.327 432 416C432 433.673 417.674 448 400 448ZM218.31 340.69C213.735 336.117 206.855 334.75 200.879 337.225C194.902 339.7 191.003 345.531 191 352V384H171C155.537 384 143 371.464 143 356V152C168.342 137.972 181.103 108.672 174.113 80.5622C167.123 52.4526 142.126 32.5419 113.165 32.017C84.2038 31.4921 58.5007 50.4838 50.4968 78.3216C42.4928 106.159 54.1835 135.903 79.0005 150.84V356C79.0556 406.787 120.213 447.945 171 448H191V480C191.003 486.469 194.902 492.3 200.879 494.775C206.855 497.25 213.735 495.883 218.31 491.31L282.31 427.31C288.554 421.062 288.554 410.938 282.31 404.69L218.31 340.69ZM112 64C129.674 64 144 78.3269 144 96C144 113.673 129.674 128 112 128C94.3274 128 80.0005 113.673 80.0005 96C80.0005 78.3269 94.3274 64 112 64Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
