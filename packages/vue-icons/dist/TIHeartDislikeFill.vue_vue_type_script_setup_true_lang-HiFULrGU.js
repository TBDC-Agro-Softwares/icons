import { defineComponent as o, computed as s, openBlock as r, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIHeartDislikeFill",
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
    return (C, t) => (r(), n("svg", {
      class: a(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M417.842 448C413.581 448.001 409.496 446.302 406.492 443.28L40.6519 75.28C34.4221 69.0116 34.4535 58.8798 40.7219 52.65C46.9903 46.4202 57.1221 46.4516 63.3519 52.72L429.182 420.72C433.737 425.302 435.089 432.175 432.609 438.142C430.129 444.108 424.303 447.997 417.842 448ZM364.922 80C320.832 80 290.312 104.82 272.532 125.5C271.392 126.812 269.74 127.566 268.002 127.566C266.264 127.566 264.611 126.812 263.472 125.5C245.692 104.82 215.162 80 171.082 80C160.583 79.9943 150.139 81.5239 140.082 84.54L409.212 355.24C412.212 351.8 414.912 348.6 417.352 345.64C457.352 296.89 476.502 246.85 475.962 192.64C475.372 130.53 425.542 80 364.922 80ZM60.0019 192.64C60.1491 177.696 63.2061 162.925 69.0019 149.15L338.582 420.32C323.702 431.94 306.352 444.62 286.002 458.44C275.15 465.864 260.854 465.864 250.002 458.44C171.412 405.09 137.382 368.51 118.612 345.64C78.6319 296.89 59.4619 246.85 60.0019 192.64Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
