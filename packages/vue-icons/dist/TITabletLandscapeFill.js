import { defineComponent as o, computed as a, openBlock as n, createElementBlock as s, normalizeClass as r, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TITabletLandscapeFill",
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
    const l = e, i = a(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (n(), s("svg", {
      class: r(i.value),
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
        d: "M0 128C0.0385792 92.6698 28.6698 64.0386 64 64H448C483.33 64.0386 511.961 92.6698 512 128V384C511.961 419.33 483.33 447.961 448 448H64C28.6698 447.961 0.0385792 419.33 0 384V128ZM480 384V128C480 110.327 465.673 96 448 96H64C46.3269 96 32 110.327 32 128V384C32 401.673 46.3269 416 64 416H448C465.673 416 480 401.673 480 384ZM464 384C464 392.837 456.837 400 448 400H64C55.1634 400 48 392.837 48 384V128C48 119.163 55.1634 112 64 112H448C456.837 112 464 119.163 464 128V384Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
