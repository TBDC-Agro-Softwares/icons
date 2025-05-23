import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIPrintSharp",
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
    return (C, t) => (n(), s("svg", {
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
        d: "M400 56V96H112V56C112 51.5817 115.582 48 120 48H392C396.418 48 400 51.5817 400 56ZM104 112H408C438.928 112 464 137.072 464 168V376C464 380.418 460.418 384 456 384H400V456C400 460.418 396.418 464 392 464H120C115.582 464 112 460.418 112 456V384H56C51.5817 384 48 380.418 48 376V168C48 137.072 73.0721 112 104 112ZM356 424C358.209 424 360 422.209 360 420V268C360 265.791 358.209 264 356 264H156C153.791 264 152 265.791 152 268V420C152 422.209 153.791 424 156 424H356ZM394 207.92C383.974 208.726 374.509 203.194 370.29 194.063C366.071 184.932 367.994 174.139 375.107 167.027C382.219 159.914 393.012 157.991 402.143 162.21C411.274 166.429 416.806 175.894 416 185.92C415.057 197.657 405.737 206.977 394 207.92Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
