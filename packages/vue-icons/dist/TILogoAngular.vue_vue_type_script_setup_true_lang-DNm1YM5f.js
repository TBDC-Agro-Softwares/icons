import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as c, normalizeStyle as d, createElementVNode as o } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TILogoAngular",
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
    return (u, t) => (a(), s("svg", {
      class: c(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      o("path", {
        d: "M298.42 256H213.57L255.99 166.64L298.42 256Z",
        fill: "currentColor"
      }, null, -1),
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 32L32 112L78.12 384L256 480L433.75 384L480 112L256 32ZM344 352L317.41 296H194.58L168 352H128L256 72L384 352H344Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
