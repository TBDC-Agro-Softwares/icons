import { defineComponent as o, computed as s, openBlock as r, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIBookmarksFill",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (r(), n("svg", {
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
        d: "M175.752 0H399.316C434.593 0 463.191 28.5979 463.191 63.8752V430.729C463.262 436.003 460.787 440.989 456.544 444.123C450.727 448.305 442.835 448.101 437.242 443.624L415.285 426.058V121.762C415.285 80.9728 382.218 47.9064 341.429 47.9064H113.873C121.192 19.7152 146.627 0.0240267 175.752 0ZM111.877 79.8441H319.472C354.749 79.8441 383.347 108.442 383.347 143.719V494.624C383.414 499.915 380.919 504.912 376.65 508.038C370.714 512.272 362.664 511.947 357.088 507.249L215.674 388.162L74.2606 507.299C68.6459 512.029 60.5295 512.322 54.589 508.008C50.3733 504.875 47.922 499.906 48.0019 494.654V143.719C48.0019 108.442 76.5998 79.8441 111.877 79.8441Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
