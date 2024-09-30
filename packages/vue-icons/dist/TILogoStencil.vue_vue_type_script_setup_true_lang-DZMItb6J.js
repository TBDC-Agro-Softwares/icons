import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as c, normalizeStyle as d, createElementVNode as t } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TILogoStencil",
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
        d: "M428.8 64H232.2L125.87 177.93H322.62L428.8 64Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M512 199H106.61L0 313H405.39L512 199Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M188.8 334.07H386.13L279.47 448H83.2L188.8 334.07Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
