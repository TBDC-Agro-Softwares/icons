import { defineComponent as o, computed as s, openBlock as a, createElementBlock as n, normalizeClass as r, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIThumbsUpOutline",
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
    const t = e, i = s(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (u, l) => (a(), n("svg", {
      class: r(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M139.5 489H23V264.749H139.5V489ZM473.189 338.925L456.546 347.55L467.364 363.937C470.693 369.112 472.357 375.15 472.357 381.187C472.357 395.85 461.539 408.787 447.393 411.375L424.093 414.825L434.911 436.387C437.407 442.425 439.071 448.462 438.239 454.5C436.575 469.162 423.261 480.375 407.45 480.375H206.071C190.261 480.375 172.786 470.887 172.786 454.5V276.824L252.671 118.986C255.168 114.674 256 109.499 255.168 104.324L248.511 24.9737C256.832 22.3861 270.146 21.5236 280.132 27.5612C303.432 42.2237 313.418 68.0988 313.418 107.774C313.418 128.474 310.089 150.037 307.593 166.424C306.761 174.187 305.929 180.224 305.096 184.537L304.264 204.374H458.211C473.189 204.374 485.671 214.724 488.168 228.524C490.664 240.599 485.671 251.812 476.518 258.712L457.379 273.374L476.518 287.174C484.007 293.212 489 301.837 489 312.187C489 323.4 483.175 333.75 473.189 338.925Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as default
};
