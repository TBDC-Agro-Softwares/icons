import { defineComponent as o, computed as n, openBlock as r, createElementBlock as C, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIGitBranchFill",
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
    return (d, t) => (r(), C("svg", {
      class: s(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M416 160C416.014 128.977 393.777 102.411 363.235 96.965C332.694 91.519 302.645 108.761 291.935 137.877C281.225 166.993 292.94 199.598 319.73 215.24C317.44 244.32 299.65 252.24 244.73 263.66C226.97 267.34 208.8 271.11 192.02 277.59V151.39C217.106 136.907 229.337 107.38 221.84 79.3999C214.343 51.4202 188.987 31.9644 160.02 31.9644C131.054 31.9644 105.698 51.4202 98.2012 79.3999C90.704 107.38 102.934 136.907 128.02 151.39V360.61C102.975 375.073 90.7406 404.535 98.175 432.485C105.609 460.435 130.865 479.925 159.786 480.033C188.707 480.141 214.107 460.839 221.75 432.945C229.392 405.052 217.378 375.499 192.44 360.85C194.83 342.85 208.44 336.52 257.7 326.33C285.13 320.66 313.48 314.79 337.48 299.38C366.48 280.8 382.01 252.6 383.84 215.49C403.724 204.087 415.991 182.921 416 160ZM160 64C177.674 64 192 78.3269 192 96C192 113.673 177.674 128 160 128C142.327 128 128 113.673 128 96C128 78.3269 142.327 64 160 64ZM160 448C142.327 448 128 433.673 128 416C128 398.327 142.327 384 160 384C177.674 384 192 398.327 192 416C192 433.673 177.674 448 160 448ZM352 192C334.327 192 320 177.673 320 160C320 142.327 334.327 128 352 128C369.674 128 384 142.327 384 160C384 177.673 369.674 192 352 192Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
