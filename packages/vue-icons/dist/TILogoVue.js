import { defineComponent as r, computed as a, openBlock as n, createElementBlock as s, normalizeClass as c, normalizeStyle as d, createElementVNode as o } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TILogoVue",
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
    return (u, t) => (n(), s("svg", {
      class: c(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      o("path", {
        d: "M256 313.61L409.4 47.9199H496.26L256 464.08L15.7402 47.9199H102.6L256 313.61Z",
        fill: "currentColor"
      }, null, -1),
      o("path", {
        d: "M200.51 47.9199L256 144.03L311.49 47.9199H390.92L256 281.61L121.08 47.9199H200.51Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};