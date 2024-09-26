import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as d, createElementVNode as c } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIShieldFill",
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
    return (u, t) => (r(), s("svg", {
      class: a(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M479.064 111.339C478.603 103.979 473.173 97.8878 465.914 96.5888C379.884 81.1688 343.684 69.1088 265.994 34.1488C258.234 31.2588 253.424 31.3088 245.994 34.1488C168.304 69.1488 132.104 81.1488 46.0742 96.5888C38.8157 97.8878 33.3849 103.979 32.9242 111.339C29.0742 172.439 37.2642 229.339 57.2842 280.489C73.6544 322.198 97.9063 360.364 128.714 392.899C173.384 440.329 222.914 468.019 248.454 478.499C253.297 480.475 258.721 480.475 263.564 478.499C290.564 467.579 338.254 440.679 383.274 392.879C414.08 360.35 438.332 322.191 454.704 280.489C474.724 229.349 482.914 172.439 479.064 111.339Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
