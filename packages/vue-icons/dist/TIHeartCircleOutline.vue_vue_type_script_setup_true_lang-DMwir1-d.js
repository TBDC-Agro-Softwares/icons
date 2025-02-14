import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as C } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIHeartCircleOutline",
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
    return (d, t) => (n(), s("svg", {
      class: a(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      C("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 48C141.163 48 48 141.163 48 256C48 370.837 141.163 464 256 464C370.837 464 464 370.837 464 256C464 141.163 370.837 48 256 48ZM256 80C353.163 80 432 158.837 432 256C432 353.163 353.163 432 256 432C158.837 432 80 353.163 80 256C80 158.837 158.837 80 256 80ZM247 357.22C249.653 359.029 252.789 359.997 256 360C259.204 359.993 262.333 359.025 264.98 357.22C304.28 330.54 321.3 312.25 330.68 300.81C350.67 276.44 360.26 251.41 359.98 224.31C359.67 193.25 334.76 167.98 304.45 167.98C284.05 167.98 269.46 178.61 260.35 188.39C259.217 189.589 257.64 190.268 255.99 190.268C254.34 190.268 252.763 189.589 251.63 188.39C242.53 178.61 227.93 167.98 207.53 167.98C177.22 167.98 152.31 193.25 152 224.31C151.72 251.41 161.3 276.44 181.3 300.81C190.68 312.22 207.7 330.54 247 357.22Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
