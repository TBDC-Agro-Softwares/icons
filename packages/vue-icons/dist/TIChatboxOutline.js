import { defineComponent as o, computed as n, openBlock as a, createElementBlock as r, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIChatboxOutline",
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
    return (u, t) => (a(), r("svg", {
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
        d: "M408.046 48H103.954C64.262 48.1129 32.113 80.262 32.0001 119.954L32 312L32.013 313.19C32.7567 352.378 64.659 383.888 103.954 384L127.999 384L128 448L128.005 448.405C128.316 461.714 143.93 468.89 154.246 460.289L245.746 383.999L408 384C447.738 383.887 479.887 351.738 480 312.045L480 120C479.887 80.262 447.738 48.1129 408.046 48ZM104.046 79.9999L408 79.9999C430.045 80.0627 447.937 97.955 448 120.045L448 312C447.937 334.045 430.045 351.937 407.954 352L242.85 352L242.354 352.005C236.908 352.116 231.654 354.08 227.463 357.58L159.999 413.828L160 368C160 359.163 152.837 352 144 352H104C81.955 351.937 64.0628 334.045 63.9999 311.954L64 120C64.0628 97.955 81.955 80.0627 104.046 79.9999Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
