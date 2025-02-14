import { defineComponent as r, computed as n, openBlock as s, createElementBlock as a, normalizeClass as c, normalizeStyle as d, createElementVNode as t } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TILogoWindows",
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
    return (u, o) => (s(), a("svg", {
      class: c(i.value),
      style: d(l.color ? `color: ${l.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        d: "M480 32L232 67.4V249H480V32Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M32 265H216V441.7L32 415V265Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M232 265H480V480L232 444V265Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M32 96L216 69.7V249H32V96Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
