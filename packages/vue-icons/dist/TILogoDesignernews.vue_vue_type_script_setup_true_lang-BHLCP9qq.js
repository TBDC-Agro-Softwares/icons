import { defineComponent as r, computed as n, openBlock as s, createElementBlock as a, normalizeClass as c, normalizeStyle as d, createElementVNode as t } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TILogoDesignernews",
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
    return (u, o) => (s(), a("svg", {
      class: c(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        d: "M339.43 64V259.6H297.83L225.6 141.28L227.54 259.6H181.71V131.2L139.09 96C140.23 97.44 141.37 98.88 142.4 100.44C153.83 117.12 159.54 137.04 159.54 161.04C159.54 220.04 124.54 259.56 71.66 259.56H0V260.04L228.11 448H512V205.72L339.43 64Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M295.31 122.8L222.86 64L295.54 186.64L295.31 122.8Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M66.51 108.4C95.66 108.4 111.89 127.72 111.89 162.52C111.89 196.72 96 215.2 66.29 215.2H44.57V108.4H66.51Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
