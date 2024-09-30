import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const L = /* @__PURE__ */ o({
  __name: "TIAttachOutline",
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
    return (C, t) => (r(), s("svg", {
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
        d: "M186.161 73.9518C212.281 58.7303 244.569 58.7303 270.689 73.9518C296.547 89.0211 312.406 116.704 312.365 146.588L312.36 147.311L312.228 336.103C311.744 366.726 286.782 391.297 256.155 391.297C225.835 391.297 201.066 367.215 200.104 337.019L200.082 336.103L200.08 192C200.08 183.163 207.243 176 216.08 176C224.811 176 231.909 182.994 232.077 191.685L232.08 192V335.684L232.087 335.991C232.496 348.825 242.922 359.088 255.761 359.294L256.155 359.297C269.174 359.297 279.81 348.956 280.223 335.991L280.23 335.635L280.361 147.106C280.588 128.401 270.739 111.018 254.577 101.6C238.414 92.181 218.436 92.181 202.273 101.6C186.273 110.924 176.46 128.054 176.485 146.545L176.49 147.3V337.236L176.488 337.351C176.073 366.029 191.135 392.707 215.903 407.167C240.672 421.627 271.308 421.627 296.077 407.167C320.598 392.852 335.605 366.561 335.5 338.211L335.49 337.236V159.74C335.49 150.903 342.653 143.74 351.49 143.74C360.221 143.74 367.319 150.734 367.487 159.425L367.49 159.74L367.489 336.998L367.499 338.094C367.645 377.452 347.023 413.981 313.248 434.189L312.21 434.802C277.473 455.082 234.507 455.082 199.77 434.802C165.38 414.726 144.333 377.854 144.481 338.094L144.491 336.998L144.49 147.3L144.485 146.588C144.444 116.704 160.303 89.0211 186.161 73.9518Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as _
};