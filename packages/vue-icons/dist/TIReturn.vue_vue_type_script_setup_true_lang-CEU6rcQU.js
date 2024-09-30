import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as c, normalizeStyle as d, createElementVNode as t } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TIReturn",
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
      height: "513",
      viewBox: "0 0 512 513",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        d: "M405.331 149.464H362.664V320.13H405.331V149.464Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M362.669 277.464H213.336V320.13H362.669V277.464Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M213.331 213.464V384.408L106.664 299.458L213.331 213.464Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
