import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as L, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIMoveSharp",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (a(), n("svg", {
      class: s(i.value),
      style: L(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 9.37258L164.687 100.686L187.314 123.314L239.982 70.6454L239.99 240H70.6276L123.314 187.314L100.687 164.686L9.37305 256L100.687 347.314L123.314 324.686L70.6276 272H239.991L239.999 441.371L187.314 388.686L164.687 411.314L256 502.627L347.314 411.314L324.687 388.686L271.999 441.375L271.991 272H441.373L388.687 324.686L411.314 347.314L502.628 256L411.314 164.686L388.687 187.314L441.373 240H271.99L271.982 70.6088L324.687 123.314L347.314 100.686L256 9.37258Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
