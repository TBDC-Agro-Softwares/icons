import { defineComponent as r, computed as s, openBlock as n, createElementBlock as a, normalizeClass as c, normalizeStyle as d, createElementVNode as t } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TILogoRss",
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
    return (u, o) => (n(), a("svg", {
      class: c(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        d: "M48 134.56V48C277.67 48 464 234.66 464 464H377.22C377.22 278.64 233.25 134.56 48 134.56Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M48 186.67V273.22C100 273.22 149.94 288.61 186.67 325.33C223.4 362.05 238.67 411.89 238.67 464H325.33C325.33 312.44 199.67 186.67 48 186.67Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M108.56 342.78C75.2771 342.901 48.3777 369.95 48.4402 403.233C48.5027 436.516 75.5034 463.463 108.787 463.46C142.07 463.456 169.065 436.503 169.12 403.22C169.015 369.836 141.944 342.818 108.56 342.78Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
