import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as c, normalizeStyle as d, createElementVNode as t } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TILogoTwitch",
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
        d: "M320 143H368V272H320V143Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M256 143H208V272H256V143Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M48 112L80 32H464V304L352 416H272L208 480H144V416H48V112ZM352 352L416 288V80H112V352H192V416L256 352H352Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
