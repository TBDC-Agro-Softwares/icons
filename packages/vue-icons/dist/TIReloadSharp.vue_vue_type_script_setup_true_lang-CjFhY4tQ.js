import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIReloadSharp",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (s(), a("svg", {
      class: n(i.value),
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
        d: "M397.287 111.168C358.165 70.7473 304.281 47.9304 247.98 48.0003C133.163 48.0003 40 141.164 40 256C40 370.837 133.163 464 248 464C336.156 463.995 414.741 408.442 444.153 325.339L449.492 310.256L419.325 299.579L413.987 314.662L413.228 316.765C387.767 385.921 321.851 431.996 247.999 432C150.837 432 72 353.164 72 256C72 158.837 150.837 80.0003 248 80.0003L249.443 80.0045C296.554 80.3325 341.541 99.5835 374.293 133.423L375.029 134.188L385.001 145.79L313.62 217.17C312.475 218.315 312.132 220.036 312.752 221.532C313.371 223.027 314.831 224.002 316.45 224H468C470.209 224 472 222.21 472 220V68.4505C472.001 66.8317 471.027 65.3717 469.531 64.752C468.036 64.1323 466.314 64.4752 465.17 65.6205L407.693 123.098L398.748 112.692L397.287 111.168Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
