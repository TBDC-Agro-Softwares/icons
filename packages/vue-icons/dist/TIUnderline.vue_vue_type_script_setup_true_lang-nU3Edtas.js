import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIUnderline",
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
    const t = e, i = s(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (p, l) => (n(), r("svg", {
      class: a(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M405.331 426.667V469.333H106.664V426.667H405.331ZM341.331 281.92C340.628 296 336.449 309.686 329.165 321.756C321.882 333.826 311.722 343.903 299.593 351.088C287.463 358.272 273.743 362.34 259.658 362.927C245.574 363.515 231.562 360.603 218.877 354.453C204.256 348.128 191.857 337.582 183.267 324.165C174.678 310.748 170.289 295.073 170.664 279.147V106.773H127.997V281.92C128.719 302.003 134.16 321.635 143.878 339.225C153.597 356.815 167.321 371.869 183.939 383.17C200.557 394.47 219.603 401.699 239.534 404.271C259.465 406.842 279.722 404.685 298.664 397.973C323.861 389.575 345.722 373.358 361.069 351.681C376.416 330.004 384.448 303.996 383.997 277.44V106.773H341.331V281.92ZM341.331 106.667H383.997H341.331ZM170.664 106.667H127.997H170.664Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
