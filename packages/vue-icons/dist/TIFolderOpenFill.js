import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as d, createElementVNode as c } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIFolderOpenFill",
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
    return (p, t) => (r(), s("svg", {
      class: a(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M252.11 96H408C438.88 96 464 113.12 464 144H48V120C48.0331 89.0857 73.0858 64.0331 104 64H179.89C190.964 63.9783 201.794 67.2541 211 73.41L238.8 92C242.742 94.6229 247.375 96.0152 252.11 96ZM88.25 448H423.75C454.322 447.965 479.216 423.418 479.68 392.85L495.9 228.11V227.83C496.968 214.485 492.415 201.3 483.338 191.458C474.262 181.617 461.488 176.013 448.1 176H64C50.6087 176.008 37.8293 181.609 28.7486 191.451C19.6679 201.293 15.1115 214.481 16.18 227.83V228.11L32.32 392.85C32.7841 423.418 57.6783 447.965 88.25 448Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
