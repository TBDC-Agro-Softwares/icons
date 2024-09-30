import { defineComponent as o, computed as n, openBlock as a, createElementBlock as r, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIPlaySkipBackOutline",
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
    return (p, t) => (a(), r("svg", {
      class: s(i.value),
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
        d: "M128.997 79.6851C128.83 70.9939 121.732 64 113 64C104.164 64 97.0004 71.1634 97.0004 80V255.83C96.9999 255.943 96.9999 256.055 97.0004 256.168V432L97.0034 432.315C97.1712 441.006 104.269 448 113 448C121.837 448 129 440.837 129 432V295.572L361.784 434.889C386.945 449.914 417 430.353 417 401V111C417 81.647 386.945 62.086 361.797 77.1028L129 216.428V80L128.997 79.6851ZM385 111V401C385 406.543 381.043 409.118 378.203 407.423L130.307 259.061C128.566 258.019 128.566 253.981 130.304 252.941L378.217 104.569C381.043 102.882 385 105.457 385 111Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
