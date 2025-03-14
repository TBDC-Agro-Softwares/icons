import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as C, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIGitMergeFill",
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
    return (d, t) => (s(), n("svg", {
      class: C(i.value),
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
        d: "M384 224C361.192 224.011 340.113 236.16 328.67 255.89C286.44 254.68 243.48 243.17 212.46 224.56C180.26 205.24 162.75 180.56 160.31 151.21C185.286 136.603 197.355 107.056 189.749 79.1406C182.143 51.2247 156.754 31.8837 127.821 31.9647C98.8876 32.0457 73.6071 51.5285 66.1577 79.4865C58.7083 107.445 70.9429 136.923 95.9999 151.39V360.61C70.914 375.093 58.6835 404.62 66.1807 432.6C73.6778 460.58 99.0332 480.036 128 480.036C156.967 480.036 182.322 460.58 189.819 432.6C197.316 404.62 185.086 375.093 160 360.61V266.15C204.76 300.15 267.28 318.53 328.56 319.91C344.055 346.848 376.661 358.763 405.873 348.16C435.085 337.557 452.459 307.501 447.067 276.896C441.675 246.291 415.077 223.982 384 224ZM128 64C145.673 64 160 78.3269 160 96C160 113.673 145.673 128 128 128C110.327 128 95.9999 113.673 95.9999 96C95.9999 78.3269 110.327 64 128 64ZM128 448C110.327 448 95.9999 433.673 95.9999 416C95.9999 398.327 110.327 384 128 384C145.673 384 160 398.327 160 416C160 433.673 145.673 448 128 448ZM384 320C366.327 320 352 305.673 352 288C352 270.327 366.327 256 384 256C401.673 256 416 270.327 416 288C416 305.673 401.673 320 384 320Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
