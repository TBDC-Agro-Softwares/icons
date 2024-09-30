import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIWaterFill",
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
    return (p, t) => (n(), s("svg", {
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
        d: "M265.12 57.12C262.84 54.4575 259.51 52.9249 256.005 52.9249C252.5 52.9249 249.17 54.4575 246.89 57.12C215.23 94.15 112 222.17 112 317C112 405.37 167.64 461 256 461C344.36 461 400 405.37 400 317C400 222.17 296.77 94.15 265.12 57.12ZM272 409C268.1 409.009 264.439 407.121 262.183 403.939C259.928 400.757 259.36 396.677 260.66 393C262.338 388.15 266.939 384.925 272.07 385C305.139 384.929 331.928 358.139 332 325.07C331.925 319.939 335.15 315.338 340 313.66C343.677 312.36 347.757 312.928 350.939 315.183C354.121 317.439 356.009 321.1 356 325C355.95 371.371 318.371 408.95 272 409Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
