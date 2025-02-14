import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIHandRightSharp",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (r(), s("svg", {
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
        d: "M82.4206 209.08C97.4806 202.46 114.801 210.39 120.921 226.7L156.001 312H167.271V80C167.271 62.4 180.571 48 196.821 48C213.081 48 226.371 62.4 226.371 80V231.75L241.151 232V32C241.151 14.4 254.451 0 270.701 0C287.001 0 300.251 14.4 300.251 32V231.75L315.001 232V64C315.001 46.4 328.301 32 344.551 32C360.811 32 374.101 46.4 374.101 64V247.75L388.881 248V128C388.881 110.4 402.181 96 418.431 96C434.701 96 448.001 110.4 448.001 128V344C448.001 419.8 410.871 512 279.001 512C238.201 512 199.581 505 178.341 491C165.021 482.22 153.563 470.901 144.621 457.69C137.938 447.831 132.56 437.149 128.621 425.91L66.1606 250.77C60.0506 234.46 67.3606 215.71 82.4206 209.08Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
