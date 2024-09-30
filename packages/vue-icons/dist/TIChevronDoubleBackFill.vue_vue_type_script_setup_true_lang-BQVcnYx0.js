import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as d, normalizeStyle as c, createElementVNode as o } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TIChevronDoubleBackFill",
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
        d: "M10.0795 4.4545C10.5188 4.01517 11.2312 4.01517 11.6705 4.4545C12.1053 4.88932 12.1098 5.5915 11.6839 6.03182L11.6705 6.0455L5.71598 12L11.6705 17.9545C12.1053 18.3893 12.1098 19.0915 11.6839 19.5318L11.6705 19.5455C11.2357 19.9803 10.5335 19.9848 10.0932 19.5589L10.0795 19.5455L3.3295 12.7955C2.89469 12.3607 2.89021 11.6585 3.31606 11.2182L3.3295 11.2045L10.0795 4.4545Z",
        fill: "currentColor"
      }, null, -1),
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M19.0795 4.4545C19.5188 4.01517 20.2312 4.01517 20.6705 4.4545C21.1053 4.88932 21.1098 5.5915 20.6839 6.03182L20.6705 6.0455L14.716 12L20.6705 17.9545C21.1053 18.3893 21.1098 19.0915 20.6839 19.5318L20.6705 19.5455C20.2357 19.9803 19.5335 19.9848 19.0932 19.5589L19.0795 19.5455L12.3295 12.7955C11.8947 12.3607 11.8902 11.6585 12.3161 11.2182L12.3295 11.2045L19.0795 4.4545Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
