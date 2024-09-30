import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as L, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIWifiSharp",
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
    return (d, t) => (n(), s("svg", {
      class: a(i.value),
      style: L(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M50.6707 166.417C166.702 62.9067 341.332 61.8716 458.536 163.311L462.07 166.417L477.741 180.396L449.781 211.738L434.111 197.758C333.85 108.317 182.957 107.423 81.6835 195.075L78.6299 197.758L62.9592 211.738L35 180.396L50.6707 166.417ZM405.596 231.856C320.087 154.348 189.149 155.139 104.567 234.229L89.2285 248.571L117.914 279.249L133.253 264.906L135.343 262.982C204.694 200.12 310.889 200.762 379.487 264.906L394.826 279.249L423.512 248.571L408.173 234.229L405.596 231.856ZM345.178 293.511C293.653 249.076 217.042 249.529 166.029 294.871L150.333 308.823L178.236 340.215L193.932 326.263L195.005 325.323C230.618 294.61 283.57 294.924 318.829 326.263L334.525 340.215L362.427 308.823L346.732 294.871L345.178 293.511ZM256.09 423.567L300.76 374.567H300.67C289.91 360.99 273.535 353.074 256.21 353.074C238.886 353.074 222.511 360.99 211.75 374.567L256.09 423.567Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
