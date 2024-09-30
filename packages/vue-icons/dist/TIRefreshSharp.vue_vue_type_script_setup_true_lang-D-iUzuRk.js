import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIRefreshSharp",
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
    return (p, t) => (s(), n("svg", {
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
        d: "M358.627 138L256 35.3726L233.373 58L294.4 119.027C284.611 118.363 272.756 118.036 258.492 118.003L256 118C158.798 118 80 196.798 80 294C80 391.202 158.798 470 256 470C353.202 470 432 391.202 432 294V278H400V294L399.981 296.381C398.709 374.812 334.734 438 256 438C176.471 438 112 373.529 112 294C112 214.471 176.471 150 256 150C275.066 150 289.537 150.566 299.779 151.594L233.373 218L256 240.627L358.627 138Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
