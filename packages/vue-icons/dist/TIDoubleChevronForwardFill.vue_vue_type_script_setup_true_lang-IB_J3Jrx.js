import { defineComponent as r, computed as n, openBlock as s, createElementBlock as a, normalizeClass as d, normalizeStyle as c, createElementVNode as o } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TIDoubleChevronForwardFill",
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
      width: "256",
      height: "256",
      viewBox: "0 0 256 256",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M148.485 208.485C143.799 213.172 136.201 213.172 131.515 208.485C126.877 203.847 126.829 196.357 131.371 191.661L131.515 191.515L195.03 128L131.515 64.4853C126.877 59.8473 126.829 52.3574 131.371 47.6606L131.515 47.5147C136.153 42.8767 143.643 42.8289 148.339 47.3713L148.485 47.5147L220.485 119.515C225.123 124.153 225.171 131.643 220.629 136.339L220.485 136.485L148.485 208.485Z",
        fill: "currentColor"
      }, null, -1),
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M52.4853 208.485C47.799 213.172 40.201 213.172 35.5147 208.485C30.8767 203.847 30.8289 196.357 35.3713 191.661L35.5147 191.515L99.0295 128L35.5147 64.4852C30.8767 59.8473 30.8289 52.3573 35.3713 47.6606L35.5147 47.5147C40.1527 42.8767 47.6426 42.8289 52.3394 47.3713L52.4853 47.5147L124.485 119.515C129.123 124.153 129.171 131.643 124.629 136.339L124.485 136.485L52.4853 208.485Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
