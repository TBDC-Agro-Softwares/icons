import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as c, normalizeStyle as d, createElementVNode as t } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TILogoGooglePlaystore",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(l) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-16", "is-14", "is-26", "is-28", "is-36"].indexOf(l) > -1;
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
  setup(l) {
    const e = l, i = n(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (u, o) => (a(), s("svg", {
      class: c(i.value),
      style: d(l.color ? `color: ${l.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        d: "M89.22 32.6401L345.8 174L285.19 231.93L84.06 39.6101C80.44 36.1301 84.64 30.1501 89.06 32.5501L89.22 32.6401Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M48 452.49V59.4901C48.0054 57.7467 49.0557 56.1767 50.665 55.5063C52.2743 54.836 54.1286 55.1961 55.37 56.4201L260 256L55.37 455.56C54.1286 456.784 52.2743 457.144 50.665 456.474C49.0557 455.803 48.0054 454.233 48 452.49Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M84.08 472.39C80.44 475.87 84.64 481.85 89.08 479.45L89.24 479.36L345.8 338L285.19 280.05L84.08 472.39Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M377.73 191.54L449.38 231C468.87 241.77 468.87 270.23 449.38 281L377.73 320.43L310.36 256L377.73 191.54Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
