import { defineComponent as o, computed as a, openBlock as s, createElementBlock as n, normalizeClass as r, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIPackage",
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
    const t = e, i = a(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (p, l) => (s(), n("svg", {
      class: r(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "461",
      height: "512",
      viewBox: "0 0 461 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M428 355C428 363.36 423.38 370.62 416.34 374.36L242.54 472.04C239.02 474.68 234.62 476 230 476C225.38 476 220.98 474.68 217.46 472.04L43.66 374.36C36.62 370.62 32 363.36 32 355V157C32 148.64 36.62 141.38 43.66 137.64L217.46 39.96C220.98 37.32 225.38 36 230 36C234.62 36 239.02 37.32 242.54 39.96L416.34 137.64C423.38 141.38 428 148.64 428 157V355ZM230 83.3L188.42 106.84L318 181.42L361.12 157L230 83.3ZM98.88 157L230 230.7L273.12 206.5L143.76 131.7L98.88 157ZM76 342.02L208 416.38V268.76L76 194.62V342.02ZM384 342.02V194.62L252 268.76V416.38L384 342.02Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
