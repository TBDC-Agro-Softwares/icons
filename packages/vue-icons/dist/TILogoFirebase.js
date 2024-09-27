import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as c, normalizeStyle as d, createElementVNode as t } from "vue";
const L = /* @__PURE__ */ r({
  __name: "TILogoFirebase",
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
    return (u, o) => (a(), s("svg", {
      class: c(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        d: "M207.19 129.06L212.19 119.67L160 21.9199C154.95 12.4499 142.1 14.8599 140.44 25.4599L89.09 343.7C88.9793 344.345 89.3551 344.975 89.9757 345.185C90.5964 345.394 91.277 345.121 91.58 344.54L207.19 129.06Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M378.776 113.045C382.679 114.306 385.557 117.635 386.24 121.68L432 400L271.74 491.81C261.667 497.414 249.413 497.414 239.34 491.81L80 400L367.67 115.68C370.591 112.799 374.872 111.784 378.776 113.045Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M221.32 136.63V136.68L257.11 202.5L256.61 203L124.66 333.44C123.254 334.842 121.031 335 119.441 333.811C117.851 332.621 117.373 330.446 118.32 328.7L221.32 136.63Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M269 190.77L235.37 129L235.34 128.96L230.34 119.82L246.73 89.1899C250.88 81.2099 261.07 81.9999 265.26 89.9999L301.47 158.68L269 190.77Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as default
};