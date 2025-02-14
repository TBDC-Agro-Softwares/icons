import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIArrowForwardCircleFill",
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
    return (p, t) => (s(), n("svg", {
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
        d: "M464 256C464 141.13 370.87 48 256 48C141.13 48 48 141.13 48 256C48 370.87 141.13 464 256 464C370.87 464 464 370.87 464 256ZM251.35 347.36C248.337 344.371 246.634 340.308 246.617 336.064C246.6 331.82 248.271 327.743 251.26 324.73L303.58 272H170C161.163 272 154 264.837 154 256C154 247.163 161.163 240 170 240H303.58L251.26 187.27C247.234 183.208 245.68 177.306 247.185 171.788C248.69 166.27 253.024 161.974 258.555 160.518C264.086 159.062 269.974 160.668 274 164.73L353.39 244.73C359.58 250.968 359.58 261.032 353.39 267.27L274 347.27C271.01 350.289 266.943 351.996 262.694 352.013C258.445 352.03 254.363 350.356 251.35 347.36Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
