import { defineComponent as o, computed as n, openBlock as a, createElementBlock as r, normalizeClass as s, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIStopwatchOutline",
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
    return (d, t) => (a(), r("svg", {
      class: s(i.value),
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
        d: "M256 48C269.122 48 279.785 58.5313 279.997 71.6031L280 72V81.5052C322.072 86.8048 361.461 105.932 391.764 136.235C427.771 172.242 448 221.078 448 272C448 378.039 362.039 464 256 464C149.961 464 64 378.039 64 272C64 223.546 81.9486 179.285 111.56 145.501L103.029 136.971C93.6569 127.598 93.6569 112.402 103.029 103.029C112.305 93.7535 127.285 93.6579 136.679 102.743L136.971 103.029L147.509 113.568C172.143 96.6665 200.918 85.3613 232 81.4855V72C232 58.7452 242.745 48 256 48ZM256 112C167.634 112 96 183.634 96 272C96 360.366 167.634 432 256 432C344.366 432 416 360.366 416 272C416 229.565 399.143 188.869 369.137 158.863C339.131 128.857 298.435 112 256 112ZM256 136C264.731 136 271.829 142.994 271.997 151.685L272 152V226.731C290.643 233.321 304 251.1 304 272C304 298.51 282.51 320 256 320C229.49 320 208 298.51 208 272C208 251.1 221.357 233.321 240 226.731V152C240 143.163 247.163 136 256 136ZM272 272C272 263.163 264.837 256 256 256C247.163 256 240 263.163 240 272C240 280.837 247.163 288 256 288C264.837 288 272 280.837 272 272Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
