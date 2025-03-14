import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TICubeOutline",
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
    return (u, t) => (s(), r("svg", {
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
        d: "M71.835 129.175L223.82 40.7125C243.704 29.1361 268.276 29.1361 288.158 40.7113L440.165 129.175C454.905 137.764 463.979 153.531 464 170.61V341.37C464 358.435 454.935 374.216 440.178 382.829L288.17 471.293C278.567 476.874 267.875 479.76 257.144 479.95C256.766 479.976 256.385 479.99 256 479.99C255.612 479.99 255.228 479.976 254.848 479.949C244.126 479.754 233.441 476.867 223.842 471.289L71.835 382.824C57.0856 374.23 48.0101 358.45 48 341.37L48 170.59C48.0208 153.531 57.0949 137.764 71.835 129.175ZM272 443.679C272.027 443.663 272.055 443.647 272.082 443.631L424.065 355.181C428.979 352.313 432 347.054 432 341.37V179.023L272 273.141V443.679ZM240 273.141V443.667C239.977 443.654 239.953 443.64 239.93 443.627L87.9379 355.171C83.0285 352.311 80.0034 347.051 80 341.36L80 179.023L240 273.141ZM272.06 68.3673L415.293 151.725L256 245.427L96.7064 151.725L239.919 68.3681C249.853 62.5845 262.127 62.5845 272.06 68.3673Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
