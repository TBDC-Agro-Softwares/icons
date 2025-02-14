import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as c, normalizeStyle as d, createElementVNode as t } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TILogoPwa",
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
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M80.44 286.09H48.79V352H0V160H79.59C102.223 160 119.4 166.493 131.12 179.48C133.347 181.904 135.355 184.521 137.12 187.3L106.06 282.88C97.7098 285.131 89.0874 286.211 80.44 286.09ZM97.57 222.69C97.5767 214.957 95.2833 208.783 90.69 204.17C86.0967 199.557 78.27 197.25 67.21 197.25H48.79V248.83H67.13C78.9967 248.837 87.1433 246.3 91.57 241.22C95.5633 236.6 97.5633 230.423 97.57 222.69Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M376.85 317.61L391.64 280.36H434.33L414.07 223.85L439.41 160L512 352H458.47L446.07 317.61H376.85Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M408.42 160L330.7 352H279.89L244.89 240.73L208.21 352H157.51L131.21 307L157.11 227.54L185.74 284.07L226.32 160H265.93L303.74 284.07L356.9 160H408.42Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
