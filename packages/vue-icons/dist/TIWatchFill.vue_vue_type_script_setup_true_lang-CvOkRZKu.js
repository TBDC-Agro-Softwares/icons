import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIWatchFill",
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
    return (C, t) => (r(), s("svg", {
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
        d: "M336 96V32C336 23.1634 328.837 16 320 16H192C183.163 16 176 23.1634 176 32V96C131.838 96.0496 96.0496 131.838 96 176V336C96.0496 380.162 131.838 415.95 176 416V480C176 488.837 183.163 496 192 496H320C328.837 496 336 488.837 336 480V416C380.162 415.95 415.95 380.162 416 336V176C415.95 131.838 380.162 96.0496 336 96ZM392 320C391.956 359.746 359.746 391.956 320 392H192C152.254 391.956 120.044 359.746 120 320V192C120.044 152.254 152.254 120.044 192 120H320C359.746 120.044 391.956 152.254 392 192V320ZM192 136C161.072 136 136 161.072 136 192V320C136 350.928 161.072 376 192 376H320C350.928 376 376 350.928 376 320V192C376 161.072 350.928 136 320 136H192Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
