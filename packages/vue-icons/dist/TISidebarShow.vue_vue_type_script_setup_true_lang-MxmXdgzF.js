import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as C, normalizeStyle as c, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ r({
  __name: "TISidebarShow",
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
    return (d, o) => (a(), s("svg", {
      class: C(i.value),
      style: c(l.color ? `color: ${l.color} !important` : void 0),
      width: "513",
      height: "512",
      viewBox: "0 0 513 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        d: "M406.134 480H107.467C66.4008 480 32.8008 446.4 32.8008 405.333V106.667C32.8008 65.6 66.4008 32 107.467 32H406.134C447.201 32 480.801 65.6 480.801 106.667V405.333C480.801 446.4 447.201 480 406.134 480ZM107.467 69.3333C86.9341 69.3333 70.1341 86.1333 70.1341 106.667V405.333C70.1341 425.867 86.9341 442.667 107.467 442.667H406.134C426.667 442.667 443.467 425.867 443.467 405.333V106.667C443.467 86.1333 426.667 69.3333 406.134 69.3333H107.467Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M182.135 480C170.935 480 163.469 472.533 163.469 461.333V50.6667C163.469 39.4667 170.935 32 182.135 32C193.335 32 200.802 39.4667 200.802 50.6667V461.333C200.802 472.533 193.335 480 182.135 480Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M350.135 274.666C344.535 274.666 340.802 272.8 337.069 269.066L281.069 213.066C273.602 205.6 273.602 194.4 281.069 186.933C288.535 179.466 299.735 179.466 307.202 186.933L363.202 242.933C370.669 250.4 370.669 261.6 363.202 269.066C359.469 272.8 355.735 274.666 350.135 274.666Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M294.135 330.666C288.535 330.666 284.802 328.8 281.069 325.066C273.602 317.6 273.602 306.4 281.069 298.933L337.069 242.933C344.535 235.466 355.735 235.466 363.202 242.933C370.669 250.4 370.669 261.6 363.202 269.066L307.202 325.066C303.469 328.8 299.735 330.666 294.135 330.666Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
