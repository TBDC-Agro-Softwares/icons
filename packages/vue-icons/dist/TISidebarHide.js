import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as d, normalizeStyle as c, createElementVNode as i } from "vue";
const C = /* @__PURE__ */ r({
  __name: "TISidebarHide",
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
    const l = e, o = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (a(), s("svg", {
      class: d(o.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "513",
      height: "512",
      viewBox: "0 0 513 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      i("path", {
        d: "M281.068 269.067C273.601 261.6 273.601 250.4 281.068 242.933L337.068 186.933C344.535 179.467 355.735 179.467 363.201 186.933C370.668 194.4 370.668 205.6 363.201 213.067L320.268 256L363.201 298.933C370.668 306.4 370.668 317.6 363.201 325.067C359.468 328.8 355.735 330.667 350.135 330.667C344.535 330.667 340.801 328.8 337.068 325.067L281.068 269.067Z",
        fill: "currentColor"
      }, null, -1),
      i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M406.134 480C447.201 480 480.801 446.4 480.801 405.333V106.667C480.801 65.6 447.201 32 406.134 32H107.467C66.4008 32 32.8008 65.6 32.8008 106.667V405.333C32.8008 446.4 66.4008 480 107.467 480H406.134ZM200.801 442.667H406.134C426.667 442.667 443.467 425.867 443.467 405.333V106.667C443.467 86.1333 426.667 69.3333 406.134 69.3333H200.801V442.667ZM163.468 69.3333V442.667H107.467C86.9341 442.667 70.1341 425.867 70.1341 405.333V106.667C70.1341 86.1333 86.9341 69.3333 107.467 69.3333H163.468Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as default
};
