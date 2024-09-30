import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIResizeOutline",
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
        d: "M416 80C424.731 80 431.829 86.9939 431.997 95.6851L432 96V208C432 216.837 424.837 224 416 224C407.269 224 400.171 217.006 400.003 208.315L400 208V134.599L134.626 400H208C216.731 400 223.829 406.994 223.997 415.685L224 416C224 424.731 217.006 431.829 208.315 431.997L208 432H96C87.2686 432 80.1708 425.006 80.003 416.315L80 416V304C80 295.163 87.1634 288 96 288C104.731 288 111.829 294.994 111.997 303.685L112 304V377.371L377.344 112H304C295.269 112 288.171 105.006 288.003 96.3149L288 96C288 87.2686 294.994 80.1708 303.685 80.003L304 80H416Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
