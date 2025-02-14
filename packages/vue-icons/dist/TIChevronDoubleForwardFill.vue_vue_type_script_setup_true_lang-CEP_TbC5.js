import { defineComponent as r, computed as n, openBlock as s, createElementBlock as a, normalizeClass as d, normalizeStyle as c, createElementVNode as o } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TIChevronDoubleForwardFill",
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
    return (u, t) => (s(), a("svg", {
      class: d(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M13.9205 4.4545C13.4812 4.01517 12.7688 4.01517 12.3295 4.4545C11.8947 4.88932 11.8902 5.5915 12.3161 6.03182L12.3295 6.0455L18.284 12L12.3295 17.9545C11.8947 18.3893 11.8902 19.0915 12.3161 19.5318L12.3295 19.5455C12.7643 19.9803 13.4665 19.9848 13.9068 19.5589L13.9205 19.5455L20.6705 12.7955C21.1053 12.3607 21.1098 11.6585 20.6839 11.2182L20.6705 11.2045L13.9205 4.4545Z",
        fill: "currentColor"
      }, null, -1),
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M4.9205 4.4545C4.48116 4.01517 3.76884 4.01517 3.32951 4.4545C2.8947 4.88932 2.89021 5.5915 3.31606 6.03182L3.32951 6.0455L9.28402 12L3.32951 17.9545C2.8947 18.3893 2.89021 19.0915 3.31606 19.5318L3.32951 19.5455C3.76432 19.9803 4.4665 19.9848 4.90682 19.5589L4.9205 19.5455L11.6705 12.7955C12.1053 12.3607 12.1098 11.6585 11.6839 11.2182L11.6705 11.2045L4.9205 4.4545Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
